import {
  BADGE_RADIUS,
  BASE_CARD_HEIGHT,
  BASE_CARD_WIDTH,
  CARD_BORDER_RADIUS,
  CARD_FONT_FAMILY,
  JACKET_BASE_SIZE,
  JACKET_RADIUS,
} from "../constant/card";
import { TYPE_COLORS_DATA } from "../constant/color";
import { SongEntry } from "../model/songEntry";

// 10진수 색상 → "#RRGGBB" 변환
const toHexColor = (n: number) => "#" + n.toString(16).padStart(6, "0");

// 글자 종류 판별용
type CharKind = "alnum" | "space" | "bracket" | "punct";

const getCharKind = (ch: string): CharKind => {
  if (ch === " ") return "space";
  if (/[A-Za-z0-9가-힣]/.test(ch)) return "alnum";
  if ("()[]（）［］《》「」『』".includes(ch)) return "bracket";
  return "punct"; // 나머지 기호: =, ∴, ∵, :, -, …
};

/**
 * 괄호 블록을 먼저 통짜 토큰으로 뽑고,
 * 나머지는 공백 기준 단어로 나누는 스마트 토큰화
 */
const tokenizeTitleSmart = (text: string): string[] => {
  const tokens: string[] = [];
  const bracketRegex =
    /\([^()]*\)|\[[^\]]*]|（[^）]*）|［[^］]*］|《[^》]*》|「[^」]*」|『[^』]*』/g;

  let last = 0;
  let m: RegExpExecArray | null;

  const pushPlainSegment = (segment: string) => {
    const trimmed = segment.trim();
    if (!trimmed) return;
    tokens.push(...trimmed.split(/\s+/));
  };

  while ((m = bracketRegex.exec(text)) !== null) {
    if (last < m.index) {
      pushPlainSegment(text.slice(last, m.index));
    }
    tokens.push(m[0]); // 괄호 블록 통째로
    last = m.index + m[0].length;
  }
  if (last < text.length) {
    pushPlainSegment(text.slice(last));
  }

  return tokens.filter(Boolean);
};

const isBracketToken = (t: string) =>
  /^[\(\[（［《「『].*[\)\]）］》」』]$/.test(t);

/**
 * 토큰 경계 하나에 대한 보너스/페널티
 */
const boundaryCost = (leftToken: string, rightToken: string): number => {
  let cost = 0;

  const prevCh = leftToken[leftToken.length - 1] ?? "";
  const currCh = rightToken[0] ?? "";
  const prevKind = getCharKind(prevCh);
  const currKind = getCharKind(currCh);

  const leftIsBracket = isBracketToken(leftToken);
  const rightIsBracket = isBracketToken(rightToken);

  // 괄호 블록이 다음 줄 시작이면 강한 보너스
  if (rightIsBracket) cost -= 50000;

  // 괄호 블록이 줄 끝에 남는 건 보기 안 좋음
  if (leftIsBracket) cost += 30000;

  // 알파벳/숫자 중간에서 끊는 것(Quee|n)은 피하고 싶음
  if (prevKind === "alnum" && currKind === "alnum") cost += 15000;

  // 알파벳 ↔ 기호/괄호 경계는 보통 자연스러움 → 보너스
  if (
    (prevKind === "alnum" &&
      (currKind === "punct" || currKind === "bracket")) ||
    ((prevKind === "punct" || prevKind === "bracket") && currKind === "alnum")
  ) {
    cost -= 3000;
  }

  // ∴ / ∵ 주변은 SDVX 스타일 특화: 조금 더 보너스
  if (prevCh === "∴" || currCh === "∴" || prevCh === "∵" || currCh === "∵") {
    cost -= 2000;
  }

  return cost;
};

/**
 * 토큰 배열을 1~maxLines 줄로 나누기
 * - 코스트 = 각 줄 slack(남는 폭)^2 합 + 경계 휴리스틱
 */
const breakTokensIntoLines = (
  ctx: CanvasRenderingContext2D,
  tokens: string[],
  maxWidth: number,
  maxLines: number
): string[] => {
  const n = tokens.length;
  if (n === 0) return [];

  const measureTokens = (start: number, end: number): number => {
    const slice = tokens.slice(start, end).join(" ");
    return ctx.measureText(slice).width;
  };

  const fullText = tokens.join(" ");

  // ✅ 핵심: maxLines=1일 때만 1줄 후보를 고려
  let bestLines: string[] = [];
  let bestCost = Number.POSITIVE_INFINITY;

  if (maxLines === 1) {
    const w = measureTokens(0, n);
    const slack = Math.max(0, maxWidth - w);
    bestLines = [fullText];
    bestCost = slack * slack;
  }

  // 2줄 후보
  if (maxLines >= 2) {
    for (let i = 1; i < n; i++) {
      const w1 = measureTokens(0, i);
      const w2 = measureTokens(i, n);

      const slack1 = Math.max(0, maxWidth - w1);
      const slack2 = Math.max(0, maxWidth - w2);
      let cost = slack1 * slack1 + slack2 * slack2;

      cost += boundaryCost(tokens[i - 1], tokens[i]);

      if (cost < bestCost) {
        bestCost = cost;
        bestLines = [
          tokens.slice(0, i).join(" ").trim(),
          tokens.slice(i).join(" ").trim(),
        ];
      }
    }
  }

  // 3줄 후보
  if (maxLines >= 3 && n >= 3) {
    for (let i = 1; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        const w1 = measureTokens(0, i);
        const w2 = measureTokens(i, j);
        const w3 = measureTokens(j, n);

        const slack1 = Math.max(0, maxWidth - w1);
        const slack2 = Math.max(0, maxWidth - w2);
        const slack3 = Math.max(0, maxWidth - w3);

        let cost = slack1 * slack1 + slack2 * slack2 + slack3 * slack3;

        cost += boundaryCost(tokens[i - 1], tokens[i]);
        cost += boundaryCost(tokens[j - 1], tokens[j]);

        if (cost < bestCost) {
          bestCost = cost;
          bestLines = [
            tokens.slice(0, i).join(" ").trim(),
            tokens.slice(i, j).join(" ").trim(),
            tokens.slice(j).join(" ").trim(),
          ];
        }
      }
    }
  }

  // ✅ fallback: 정말 쪼갤 수 없었던 경우(토큰이 1개라든가)
  if (bestLines.length === 0) bestLines = [fullText];

  return bestLines.filter((l) => l.length > 0);
};

/**
 * 한 개의 긴 토큰(=∴NOMADE∵OTION= 같은 것)을
 * 문자 단위로 최대 maxLines줄로 나누기
 */
const breakOneTokenByChars = (
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  maxLines: number
): string[] => {
  const trimmed = text.trim();
  if (!trimmed) return [];

  const chars = Array.from(trimmed);
  const n = chars.length;

  const measureRange = (start: number, end: number): number => {
    const slice = chars.slice(start, end).join("");
    return ctx.measureText(slice).width;
  };

  const full = trimmed;

  // ✅ 핵심: maxLines=1일 때만 1줄 후보를 기본으로 둔다
  let bestLines: string[] = [];
  let bestCost = Number.POSITIVE_INFINITY;

  if (maxLines === 1) {
    const slack = Math.max(0, maxWidth - measureRange(0, n));
    bestLines = [full];
    bestCost = slack * slack;
  }

  // 2줄 후보
  if (maxLines >= 2) {
    for (let i = 1; i < n; i++) {
      const w1 = measureRange(0, i);
      const w2 = measureRange(i, n);

      const slack1 = Math.max(0, maxWidth - w1);
      const slack2 = Math.max(0, maxWidth - w2);

      let cost = slack1 * slack1 + slack2 * slack2;

      const prevKind = getCharKind(chars[i - 1]);
      const currKind = getCharKind(chars[i]);
      if (prevKind === "alnum" && currKind === "alnum") cost += 10000;

      if (cost < bestCost) {
        bestCost = cost;
        bestLines = [chars.slice(0, i).join(""), chars.slice(i).join("")].map(
          (v) => v.trim()
        );
      }
    }
  }

  // 3줄 후보
  if (maxLines >= 3 && n >= 3) {
    for (let i = 1; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        const w1 = measureRange(0, i);
        const w2 = measureRange(i, j);
        const w3 = measureRange(j, n);

        const slack1 = Math.max(0, maxWidth - w1);
        const slack2 = Math.max(0, maxWidth - w2);
        const slack3 = Math.max(0, maxWidth - w3);

        let cost = slack1 * slack1 + slack2 * slack2 + slack3 * slack3;

        if (cost < bestCost) {
          bestCost = cost;
          bestLines = [
            chars.slice(0, i).join(""),
            chars.slice(i, j).join(""),
            chars.slice(j).join(""),
          ].map((v) => v.trim());
        }
      }
    }
  }

  // ✅ fallback
  if (bestLines.length === 0) bestLines = [full];

  return bestLines.filter((l) => l.length > 0);
};

/**
 * 최종: 제목을 1~maxLines 줄로 나누기 (스마트)
 */
const breakTitleLines = (
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  maxLines: number
): string[] => {
  const tokens = tokenizeTitleSmart(text);
  if (tokens.length === 0) return [];

  if (tokens.length === 1) {
    return breakOneTokenByChars(ctx, tokens[0], maxWidth, maxLines);
  }

  return breakTokensIntoLines(ctx, tokens, maxWidth, maxLines);
};

// 곡 제목에서 끝의 난이도 꼬리표(예: " MXM", " EXH") 제거
const stripDifficultyFromTitle = (title: string, song: SongEntry): string => {
  if (!title) return "";
  if (!song.info?.type) return title;

  const typeUpper = song.info.type.toUpperCase().trim();
  const suffix = " " + typeUpper;

  if (title.toUpperCase().endsWith(suffix)) {
    return title.slice(0, -suffix.length);
  }
  return title;
};

// 한 줄 말줄임표
const ellipsizeToWidth = (
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
) => {
  const t = text ?? "";
  if (ctx.measureText(t).width <= maxWidth) return t;

  const ell = "…";
  const ellW = ctx.measureText(ell).width;
  if (ellW > maxWidth) return "";

  const chars = Array.from(t);
  let lo = 0;
  let hi = chars.length;

  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    const cand = chars.slice(0, mid).join("") + ell;
    if (ctx.measureText(cand).width <= maxWidth) lo = mid;
    else hi = mid - 1;
  }

  return chars.slice(0, lo).join("") + ell;
};

// ✅ 한 줄을 maxWidth에 맞게 "앞부분만" 자르고, 남은 나머지를 반환 (… 없음)
const splitToFitNoEllipsis = (
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): { fit: string; rest: string } => {
  const t = text.trim();
  if (!t) return { fit: "", rest: "" };

  if (ctx.measureText(t).width <= maxWidth) return { fit: t, rest: "" };

  // 1) 공백이 있으면: 가능한 한 뒤쪽 단어를 잘라서 rest로 보냄
  //    (앞줄에 … 절대 붙이지 않기)
  const parts = t.split(/\s+/);
  if (parts.length >= 2) {
    let cut = parts.length - 1;
    while (cut >= 1) {
      const left = parts.slice(0, cut).join(" ");
      if (ctx.measureText(left).width <= maxWidth) {
        const right = parts.slice(cut).join(" ");
        return { fit: left, rest: right };
      }
      cut--;
    }
    // 단어 단위로는 도저히 안 맞으면 char split로 fallback
  }

  // 2) 공백이 없거나, 단어 단위로 안 맞으면: char 단위로 자르기
  const chars = Array.from(t);
  let lo = 1;
  let hi = chars.length;

  // 최대한 긴 prefix가 들어가게
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    const cand = chars.slice(0, mid).join("");
    if (ctx.measureText(cand).width <= maxWidth) lo = mid;
    else hi = mid - 1;
  }

  const fit = chars.slice(0, lo).join("").trim();
  const rest = chars.slice(lo).join("").trim();
  return { fit, rest };
};

const lineBlockHeight = (lines: number, fontSize: number, lineGap: number) =>
  lines * fontSize + Math.max(0, lines - 1) * lineGap;

/**
 * ✅ 사용자 입력(줄 수/폰트 크기) 그대로 사용
 * ✅ 영역 넘치면 반드시 ... 처리
 * ✅ (중요) 2~3줄일 때는 "마지막 줄만 ...", 위 줄은 overflow를 아래로 넘김
 */
const drawTitleUserControlled = (
  ctx: CanvasRenderingContext2D,
  text: string,
  areaX: number,
  areaY: number,
  areaW: number,
  areaH: number,
  fontSize: number,
  lineGap: number,
  maxLines: 1 | 2 | 3,
  color: string,
  scale: number
) => {
  if (!text) return;

  ctx.font = `bold ${fontSize}px ${CARD_FONT_FAMILY}`;

  // 1) 줄 분할(최대 maxLines)
  let lines =
    maxLines === 1 ? [text] : breakTitleLines(ctx, text, areaW, maxLines);

  // 2) 줄 수 초과면 tail을 마지막 줄로 합침
  if (lines.length > maxLines) {
    const head = lines.slice(0, maxLines - 1);
    const tail = lines.slice(maxLines - 1).join(" ");
    lines = [...head, tail];
  }

  // 3) ✅ "마지막 줄만 …"을 위해, 위 줄이 넘치면 아래로 밀어내기
  //    - 0..maxLines-2 줄은 절대 … 하지 않음
  //    - 넘치면 splitToFitNoEllipsis로 잘라서 나머지를 다음 줄 앞에 붙임
  for (let i = 0; i < Math.min(maxLines - 1, lines.length); i++) {
    if (i >= lines.length - 1) break;

    // 현재 줄이 넘치면 아래로 넘김(연쇄)
    while (ctx.measureText(lines[i]).width > areaW) {
      const { fit, rest } = splitToFitNoEllipsis(ctx, lines[i], areaW);
      if (!fit) break;

      lines[i] = fit;
      lines[i + 1] = (rest + " " + (lines[i + 1] ?? "")).trim();
    }
  }

  // 4) 줄 수가 부족한데 overflow가 생겼으면(특히 maxLines=2/3), 추가 줄 생성
  //    (breakTitleLines가 1줄을 반환하는 케이스 보정)
  while (
    lines.length < maxLines &&
    ctx.measureText(lines[lines.length - 1]).width > areaW
  ) {
    const lastIdx = lines.length - 1;
    const { fit, rest } = splitToFitNoEllipsis(ctx, lines[lastIdx], areaW);
    if (!rest || !fit) break;
    lines[lastIdx] = fit;
    lines.push(rest);
  }

  // 5) ✅ 마지막 줄만 … 처리
  if (maxLines === 1) {
    lines = [ellipsizeToWidth(ctx, lines[0], areaW)];
  } else {
    // maxLines만큼만 유지
    if (lines.length > maxLines) {
      const head = lines.slice(0, maxLines - 1);
      const tail = lines.slice(maxLines - 1).join(" ");
      lines = [...head, tail];
    }
    // 마지막 줄만 ellipsis
    lines[lines.length - 1] = ellipsizeToWidth(
      ctx,
      lines[lines.length - 1],
      areaW
    );
  }

  // 6) 세로 초과면 아래쪽부터 합쳐서 마지막 줄에서 …로 수습
  while (
    lineBlockHeight(lines.length, fontSize, lineGap) > areaH &&
    lines.length > 1
  ) {
    const merged = `${lines[lines.length - 2]} ${
      lines[lines.length - 1]
    }`.trim();
    lines = [...lines.slice(0, -2), ellipsizeToWidth(ctx, merged, areaW)];
  }

  // 7) 중앙 정렬 렌더
  const totalH = lineBlockHeight(lines.length, fontSize, lineGap);
  const startY = areaY + Math.max(0, (areaH - totalH) / 2);
  const centerX = areaX + areaW / 2;

  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  const outline = Math.max(2, Math.min(6, Math.round(fontSize * 0.12)));

  ctx.lineWidth = outline;
  ctx.lineJoin = "round"; // ✅ miter 뾰족 튐 방지
  ctx.miterLimit = 2; // ✅ 혹시 남는 튐 추가 방지
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = color;

  lines.forEach((line, idx) => {
    const yy = startY + idx * (fontSize + lineGap);
    ctx.strokeText(line, centerX, yy);
    ctx.fillText(line, centerX, yy);
  });
};

export function drawSongOptionCard(
  ctx: CanvasRenderingContext2D,
  song: SongEntry,
  x: number,
  y: number,
  jacketImg: HTMLImageElement | null,
  options: {
    cardWidth: number;
    cardHeight: number;
    jacketSize: number;
    team1Name: string;
    backgroundImg?: HTMLImageElement | null;
    titleMode?: any;
    titleMaxLines?: 1 | 2 | 3; // ✅ 사용자 입력
    titleFontSize?: number; // ✅ 사용자 입력(1080 기준 px)
    titleLineGap?: number; // ✅ (선택) 사용자 입력(1080 기준 px)
  }
) {
  const { cardWidth, cardHeight, team1Name, backgroundImg } = options;

  // 사용자 입력
  const titleMaxLines = options.titleMaxLines ?? 1;
  const titleFontSizeBase = options.titleFontSize ?? 66; // 1080 기준
  const titleLineGapBase = options.titleLineGap ?? 8; // 1080 기준

  // 1080x380 기준 스케일
  const scaleX = cardWidth / BASE_CARD_WIDTH;
  const scaleY = cardHeight / BASE_CARD_HEIGHT;
  const s = Math.min(scaleX, scaleY);

  const isTeam1 = song.team === team1Name;

  // 스케일 적용
  const borderRadius = CARD_BORDER_RADIUS * s;
  const jacketSize = JACKET_BASE_SIZE * s;
  const jacketRadius = JACKET_RADIUS * s;
  const badgeRadius = BADGE_RADIUS * s;

  // === 1. 카드 외곽 / 배경 ===
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(x, y, cardWidth, cardHeight, borderRadius);

  if (backgroundImg) {
    ctx.clip();
    ctx.drawImage(backgroundImg, x, y, cardWidth, cardHeight);
  } else {
    const innerGradient = ctx.createLinearGradient(
      x,
      y,
      x + cardWidth,
      y + cardHeight
    );
    innerGradient.addColorStop(0, "rgba(15, 23, 42, 0.95)");
    innerGradient.addColorStop(1, "rgba(17, 24, 39, 0.9)");
    ctx.fillStyle = innerGradient;
    ctx.fill();
  }
  ctx.restore();

  // 네온 보더
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(x, y, cardWidth, cardHeight, borderRadius);
  ctx.shadowColor = isTeam1 ? "#3b82f6" : "#f97373";
  ctx.shadowBlur = 18 * s;
  ctx.strokeStyle = "rgba(148, 163, 184, 0.6)";
  ctx.lineWidth = 2 * s;
  ctx.stroke();
  ctx.restore();

  // === 2. 자켓 ===
  const jacketX = x + 45 * scaleX;
  const jacketY = y + (cardHeight - jacketSize) / 2;

  if (jacketImg) {
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(jacketX, jacketY, jacketSize, jacketSize, jacketRadius);
    ctx.clip();
    ctx.drawImage(jacketImg, jacketX, jacketY, jacketSize, jacketSize);
    ctx.restore();
  } else {
    const gradient = ctx.createLinearGradient(
      jacketX,
      jacketY,
      jacketX + jacketSize,
      jacketY + jacketSize
    );
    gradient.addColorStop(0, "#4f46e5");
    gradient.addColorStop(1, "#a855f7");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.roundRect(jacketX, jacketY, jacketSize, jacketRadius);
    ctx.fill();

    ctx.fillStyle = "#e5e7eb";
    ctx.font = `${40 * s}px ${CARD_FONT_FAMILY}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("♪", jacketX + jacketSize / 2, jacketY + jacketSize / 2);
  }

  // === 난이도 배지 Y ===
  const badgeBaseY = 290;
  const badgeY = y + badgeBaseY * s;

  // === 4. 곡명 영역 ===
  const titleBaseX = 375;
  const titleRightMargin = 28;

  const titleX = x + titleBaseX * s;
  const titleY = y + 60 * s;
  const titleW = cardWidth - titleX - titleRightMargin * s;

  const TITLE_BOTTOM_MARGIN = 12 * s;
  const titleH = badgeY - TITLE_BOTTOM_MARGIN - titleY;

  const rawTitle = song.songName || "";
  const cleanTitle = stripDifficultyFromTitle(rawTitle, song);

  const titleFontSize = titleFontSizeBase * s;
  const titleLineGap = titleLineGapBase * s;

  // ✅ 작곡가 출력 없음. 제목만 그림.
  drawTitleUserControlled(
    ctx,
    cleanTitle,
    titleX,
    titleY,
    titleW,
    titleH,
    titleFontSize,
    titleLineGap,
    titleMaxLines,
    "#ffffff",
    s
  );

  // === 7. 난이도 배지 ===
  if (song.info?.level && song.info?.type) {
    const infoType = song.info?.type ?? "";
    const typeEntry = TYPE_COLORS_DATA.find(
      (t) =>
        t.typeName.toLowerCase() === infoType.toLowerCase() ||
        t.typeShortName.toLowerCase() === infoType.toLowerCase()
    );

    const difficultyShort =
      typeEntry?.typeShortName?.toUpperCase() ?? infoType.toUpperCase();

    const badgeText = `${difficultyShort} ${song.info?.level ?? ""}`;

    const BADGE_FONT_SIZE = 34 * s;
    ctx.font = `bold ${BADGE_FONT_SIZE}px ${CARD_FONT_FAMILY}`;

    const badgePaddingX = 32 * s;
    const textWidth = ctx.measureText(badgeText).width;

    const badgeWidth = Math.max(260 * s, textWidth + badgePaddingX * 2);
    const badgeHeight = 70 * s;
    const badgeRadiusDraw = 24 * s;

    const badgeX = x + 379 * s;

    ctx.fillStyle = typeEntry ? toHexColor(typeEntry.color) : "#e53935";

    ctx.beginPath();
    ctx.roundRect(badgeX, badgeY, badgeWidth, badgeHeight, badgeRadiusDraw);
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(badgeText, badgeX + badgeWidth / 2, badgeY + badgeHeight / 2);
  }

  // === 8. STRATEGY 라벨 ===
  if (song.isStrategy) {
    ctx.save();
    ctx.fillStyle = "#a855f7";
    ctx.font = `bold ${18 * s}px ${CARD_FONT_FAMILY}`;
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    ctx.shadowColor = "#a855f7";
    ctx.shadowBlur = 10 * s;
    ctx.fillText("STRATEGY", x + cardWidth - 24 * s, y + 24 * s);
    ctx.restore();
  }
}
