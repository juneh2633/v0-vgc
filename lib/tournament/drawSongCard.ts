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

// 10진수 색상 → "#RRGGBB" 변환 .
const toHexColor = (n: number) => "#" + n.toString(16).padStart(6, "0");

export function drawSongCard(
  ctx: CanvasRenderingContext2D,
  song: SongEntry,
  x: number,
  y: number,
  jacketImg: HTMLImageElement | null,
  options: {
    cardWidth: number;
    cardHeight: number;
    jacketSize: number; // ← 무시하고 디자이너 스펙 기준으로 재계산
    team1Name: string;
    backgroundImg?: HTMLImageElement | null; // 1080x380 카드 배경 이미지 (옵션)
    titleMode?: "static" | "scroll";
    titleOffsetX?: number;
  }
) {
  const { cardWidth, cardHeight, team1Name, backgroundImg } = options;

  // 1080x380 기준으로 스케일 계산
  const scaleX = cardWidth / BASE_CARD_WIDTH;
  const scaleY = cardHeight / BASE_CARD_HEIGHT;
  const s = Math.min(scaleX, scaleY);

  const isTeam1 = song.team === team1Name;

  // 실제 사용할 사이즈들 (스케일 적용)
  const borderRadius = CARD_BORDER_RADIUS * s;
  const jacketSize = JACKET_BASE_SIZE * s;
  const jacketRadius = JACKET_RADIUS * s;
  const badgeRadius = BADGE_RADIUS * s;

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

  // 텍스트 wrap (줄 수 제한 없음)
  const wrapTextUnlimited = (
    ctx: CanvasRenderingContext2D,
    text: string,
    maxWidth: number
  ): string[] => {
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine = "";

    for (let i = 0; i < words.length; i++) {
      const testLine = currentLine ? currentLine + " " + words[i] : words[i];
      const { width } = ctx.measureText(testLine);
      if (width > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = words[i];
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  };

  const drawMultilineText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number,
    maxLines: number
  ) => {
    if (!text) return;
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine = "";

    for (let i = 0; i < words.length; i++) {
      const testLine = currentLine ? currentLine + " " + words[i] : words[i];
      const { width } = ctx.measureText(testLine);
      if (width > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = words[i];
        if (lines.length === maxLines - 1) break;
      } else {
        currentLine = testLine;
      }
    }
    if (lines.length < maxLines && currentLine) {
      lines.push(currentLine);
    }

    lines.slice(0, maxLines).forEach((line, idx) => {
      ctx.fillText(line, x, y + idx * lineHeight);
    });
  };

  const drawSingleLineWithEllipsis = (
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    fontSize: number,
    color: string
  ) => {
    ctx.font = `bold ${fontSize}px ${CARD_FONT_FAMILY}`;
    ctx.fillStyle = color;
    ctx.textAlign = "left";
    ctx.textBaseline = "top";

    const ellipsis = "…";
    const ellipsisWidth = ctx.measureText(ellipsis).width;
    const fullWidth = ctx.measureText(text).width;

    // 1) 전체가 들어가는 경우
    if (fullWidth <= maxWidth) {
      ctx.fillText(text, x, y);
      return;
    }

    // 2) 이분 탐색 시작
    let left = 0;
    let right = text.length - 1;
    let result = "";

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const substr = text.slice(0, mid);
      const width = ctx.measureText(substr).width + ellipsisWidth;

      if (width <= maxWidth) {
        result = substr + ellipsis; // mid 길이는 OK → 정답 후보
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    ctx.fillText(result, x, y);
  };
  /**
   * 한 줄 텍스트를 maxWidth 안에 맞춰서 말줄임(...) 처리 (이분 탐색)
   */
  const drawSmartEllipsis = (
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    font: string,
    color: string
  ) => {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = "left";
    ctx.textBaseline = "top";

    const ellipsis = "…";
    const ellipsisWidth = ctx.measureText(ellipsis).width;
    const fullWidth = ctx.measureText(text).width;

    // 1) 전체가 들어가는 경우
    if (fullWidth <= maxWidth) {
      ctx.fillText(text, x, y);
      return;
    }

    // 2) 이분 탐색 시작
    let left = 0;
    let right = text.length - 1;
    let result = "";

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const substr = text.slice(0, mid);
      const width = ctx.measureText(substr).width + ellipsisWidth;

      if (width <= maxWidth) {
        result = substr + ellipsis; // mid 길이는 OK → 정답 후보
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    ctx.fillText(result, x, y);
  };

  // === 1. 카드 외곽 / 배경 ===
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(x, y, cardWidth, cardHeight, borderRadius);

  if (backgroundImg) {
    // 디자이너가 준 1080x380 배경 이미지 사용
    ctx.clip();
    ctx.drawImage(backgroundImg, x, y, cardWidth, cardHeight);
  } else {
    // 배경 이미지 없으면 기존 그라디언트 사용
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

  // === 2. 자켓 (300x300, radius 18px 기준) ===
  const jacketX = x + 45 * scaleX; // 디자이너가 좌표 안 준 부분이라 적당히 40px 여백
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
    ctx.roundRect(jacketX, jacketY, jacketSize, jacketSize, jacketRadius);
    ctx.fill();

    ctx.fillStyle = "#e5e7eb";
    ctx.font = `${40 * s}px ${CARD_FONT_FAMILY}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("♪", jacketX + jacketSize / 2, jacketY + jacketSize / 2);
  }

  // === 3. 텍스트 영역 좌표 (디자이너 스펙 기준) ===
  // 악곡명 : W 547px / H 37px | X 379 / Y 72
  // 작곡가명 : W 137px / H 21px | X 379 / Y 136
  // 수록일 : W 111px / H 18px | X 379 / Y 180
  // 난이도 : W 173px / H 44px | X 379 / Y 280

  const composerAreaX = x + 379 * scaleX;
  const composerAreaY = y + 136 * scaleY;
  const composerAreaW = 547 * scaleX;

  const dateAreaX = x + 379 * scaleX;
  const dateAreaY = y + 180 * scaleY;
  const dateAreaW = 111 * scaleX;

  // === 4. 곡명 ===
  const titleX = x + 379 * s;
  const titleY = y + 72 * s;
  const titleW = 547 * s;
  const TITLE_FONT_SIZE = 37 * s;
  const titleH = 37 * s;

  const rawTitle = song.songName || "";
  const cleanTitle = stripDifficultyFromTitle(rawTitle, song);

  // 🔶 제목만 클리핑해서 그리기
  ctx.save();
  ctx.beginPath();
  ctx.rect(titleX, titleY, titleW, titleH + 8 * s); // 제목 박스
  ctx.clip();

  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillStyle = "#ffffff";

  if (
    options.titleMode === "scroll" &&
    typeof options.titleOffsetX === "number"
  ) {
    ctx.font = `bold ${TITLE_FONT_SIZE}px ${CARD_FONT_FAMILY}`;

    const drawX = titleX + options.titleOffsetX;
    ctx.fillText(cleanTitle, drawX, titleY);
  } else {
    // 평소 카드: 말줄임표
    drawSingleLineWithEllipsis(
      cleanTitle,
      titleX,
      titleY,
      titleW,
      TITLE_FONT_SIZE,
      "#FFFFFF"
    );
  }

  ctx.restore(); // ⬅️ 여기서 반드시 클립 해제

  // === 5. 작곡가명 ===
  if (song.info?.artist) {
    ctx.fillStyle = "#F1EFEA";
    ctx.font = `bold ${21 * s}px ${CARD_FONT_FAMILY}`; // H 21px 정도
    // drawMultilineText(ctx, song.info.artist, composerAreaX, composerAreaY, composerAreaW, 20 * s, 1)
    drawSmartEllipsis(
      ctx,
      song.info.artist,
      composerAreaX,
      composerAreaY,
      composerAreaW,
      ctx.font,
      "#F1EFEA"
    );
  }

  // === 6. 수록일 ===
  if (song.info?.date) {
    ctx.fillStyle = "#FFDCAA";
    ctx.font = `bold ${18 * s}px ${CARD_FONT_FAMILY}`; // H 18px 정도

    const rawDate = song.info.date;
    const formattedDate = rawDate.includes("T")
      ? rawDate.split("T")[0]
      : rawDate.slice(0, 10);
    drawMultilineText(
      ctx,
      formattedDate,
      dateAreaX,
      dateAreaY,
      dateAreaW,
      18 * s,
      1
    );
  }

  // === 7. 난이도 배지 ===
  if (song.info?.level && song.info?.type) {
    const badgeText = `${song.info.type.toUpperCase()} ${song.info.level}`;

    // 폰트 크게
    const BADGE_FONT_SIZE = 22 * s;
    ctx.font = `bold ${BADGE_FONT_SIZE}px ${CARD_FONT_FAMILY}`;

    const textMetrics = ctx.measureText(badgeText);
    const badgePaddingX = 24 * s;
    const badgePaddingY = 12 * s;

    // 텍스트 길이에 따라 넉넉하게, 최소 폭도 보장
    const badgeWidth = Math.max(220 * s, textMetrics.width + badgePaddingX * 2);
    const badgeHeight = 52 * s;
    const badgeRadius = 18 * s;

    // 위치: 디자이너 기준 난이도 X/Y 를 그대로 사용
    // 난이도 : W 173 / H 44 | X 379 / Y 280
    const badgeX = x + 379 * s;
    const badgeY = y + 280 * s;

    // 색상은 기존 TYPE_COLORS_DATA 를 그대로 활용
    const shortName = song.info.type.toLowerCase();
    const typeColorEntry = TYPE_COLORS_DATA.find(
      (t) =>
        t.typeShortName?.toLowerCase?.() === shortName ||
        t.typeName?.toLowerCase?.() === shortName
    );
    ctx.fillStyle = typeColorEntry
      ? toHexColor(typeColorEntry.color)
      : "#e53935";

    ctx.beginPath();
    ctx.roundRect(badgeX, badgeY, badgeWidth, badgeHeight, badgeRadius);
    ctx.fill();

    // 텍스트는 왼쪽 패딩 후 중앙 정렬 느낌
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const textCenterX = badgeX + badgeWidth / 2;
    const textCenterY = badgeY + badgeHeight / 2;

    ctx.fillText(badgeText, textCenterX, textCenterY);
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
