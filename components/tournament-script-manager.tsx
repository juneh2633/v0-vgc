"use client";

import type React from "react";

import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Copy,
  Download,
  Upload,
  Check,
  ImageIcon,
  AlertTriangle,
  X,
  ArrowLeft,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useSWR from "swr";
import Image from "next/image";
import type { ChartData } from "@/lib/types";
import { Switch } from "@/components/ui/switch";
import GIF from "gif.js";
import JSZip from "jszip";
import { RoundData } from "@/lib/model/round";
import { OvertimeData } from "@/lib/model/overtimeData";
import { SongInfoMap, TournamentData } from "@/lib/model/tournament";
import { SongEntry } from "@/lib/model/songEntry";
import { FlattenedChart } from "@/lib/model/flattenedChart";
import { SongInfo } from "@/lib/model/songInfo";
import { chartToSongInfo } from "@/lib/tournament/chartToSongInfo";
import { loadImageAsBase64 } from "@/lib/tournament/loadImageAsBase64";
import {
  BASE_CARD_HEIGHT,
  BASE_CARD_WIDTH,
  JACKET_BASE_SIZE,
} from "@/lib/constant/card";
import { drawSongCard } from "@/lib/tournament/drawSongCard";
import { generateTitleScrollGif } from "@/lib/tournament/generateTitleScrollGif";
import { Team } from "@/lib/model/team";
import { getTypeLabel } from "@/lib/tournament/getTypeLabel";
import { drawSongOptionCard } from "@/lib/tournament/drawSongOptionCard";

const DEFAULT_RECORDING_UPLOAD_URL =
  "https://drive.google.com/drive/folders/1HCiwJYMPH-sRQ0gxGQGj-PmeM2GRwHYi";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
  return res.json();
};

const defaultRoundData = (): RoundData => ({
  roomNumber: "",
  deadline: "",
  team1Players: ["", ""],
  team2Players: ["", ""],
  team1Songs: ["", "", ""],
  team2Songs: ["", "", ""],
  team1BannedSong: "",
  team2BannedSong: "",
  team1Player: "",
  team2Player: "",
  team1SongsLong: ["", "", "", "", ""],
  team2SongsLong: ["", "", "", "", ""],
  team1Songs2: ["", ""],
  team2Songs2: ["", ""],
  team1BannedSong4: "",
  team2BannedSong4: "",
  team1ArenaPlayer: "",
  team2ArenaPlayer: "",
  team1DesignatedSong: "",
  team2DesignatedSong: "",
  stage3DesignatedSong: "",
  stage4DesignatedSong: "",
  team1StrategyUsed: false,
  team2StrategyUsed: false,
  team1StrategyOptions: ["", "", ""],
  team2StrategyOptions: ["", "", ""],
  team1StrategySelected: "",
  team2StrategySelected: "",
  team1StrategyTarget: "",
  team2StrategyTarget: "",
  team1Strategy17: ["", "", ""],
  team1Strategy18: ["", "", ""],
  team2Strategy17: ["", "", ""],
  team2Strategy18: ["", "", ""],
});

const defaultOvertimeData = (): OvertimeData => ({
  roomNumber: "",
  designatedSong: "",
  team1Player: "",
  team2Player: "",
});

const defaultData = (): TournamentData => ({
  team1: { name: "", players: ["", "", ""] },
  team2: { name: "", players: ["", "", ""] },
  recordingUploadUrl: DEFAULT_RECORDING_UPLOAD_URL,
  tournamentDivision: "minor",
  rounds: [
    defaultRoundData(),
    defaultRoundData(),
    defaultRoundData(),
    defaultRoundData(),
  ],
  songInfoMap: {},
  overtime: defaultOvertimeData(),
});

const PRE_PICK_COUNT: Record<number, number> = {
  0: 3, // 1라운드 index 0
  1: 5, // 2라운드 index 1
  2: 3, // 3라운드 index 2
  3: 2, // 4라운드 index 3
};

const formatSongName = (chart: FlattenedChart): string => {
  return `${chart.title} ${getTypeLabel(chart.type)}`;
};

const SongInputField = ({
  value,
  placeholder,
  onClick,
  onClear,
}: {
  value: string;
  placeholder: string;
  onClick: () => void;
  onClear: () => void;
}) => (
  <div className="relative flex-1">
    <Input
      value={value}
      readOnly
      onClick={onClick}
      placeholder={placeholder}
      className="h-8 text-sm cursor-pointer pr-8"
    />
    {value && (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClear();
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
      >
        <X className="h-4 w-4" />
      </button>
    )}
  </div>
);

function buildStrategyMessage(
  teamName: string,
  used: boolean,
  target: string | null,
  selected: string | null
) {
  if (!used) {
    // 사용 안 함
    return `## 스트래티지 카드는 사용되지 않았습니다.`;
  }

  if (!target) {
    // 타겟이 없으면 사용 자체가 불완전 → 미사용이 아닌 "미변경" 처리됨
    return `## 팀 ${teamName} 에서 스트래티지 카드를 사용하였으나, 선곡을 변경하지 않았습니다.`;
  }

  // selected가 없거나 target 그대로면 → 미변경
  if (!selected || selected === target) {
    return `## 팀 ${teamName} 에서 ${target} 곡에 스트래티지 카드를 사용하였으나, 선곡을 변경하지 않았습니다.`;
  }

  // 정상 변경됨
  return `## 팀 ${teamName} 에서 ${target} 곡에 스트래티지 카드를 사용하여 ${selected} 으로 변경되었습니다.`;
}

export function TournamentScriptManager({ onBack }: { onBack: () => void }) {
  const [data, setData] = useState<TournamentData>(defaultData());
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [songSearchOpen, setSongSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState("all");
  const [cardBgImg, setCardBgImg] = useState<HTMLImageElement | null>(null);

  type SongSearchTarget =
    | { kind: "round"; roundIdx: number; field: string; arrayIdx?: number }
    | { kind: "overtime"; field: "designatedSong" };

  const [songSearchTarget, setSongSearchTarget] =
    useState<SongSearchTarget | null>(null);
  const [imageDialogOpen, setImageDialogOpen] = useState(false);
  const [imageRoundIdx, setImageRoundIdx] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [songNotFoundWarning, setSongNotFoundWarning] = useState<string | null>(
    null
  );
  const [generatedImage, setGeneratedImage] = useState<string | null>(null); // State to hold the generated image data URL
  const [notification, setNotification] = useState<{
    type: "error" | "success";
    message: string;
  } | null>(null);

  const [currentSongsForRound, setCurrentSongsForRound] = useState<SongEntry[]>(
    []
  );
  const [selectedSongIndex, setSelectedSongIndex] = useState<number | null>(
    null
  );

  const [singleCardTitleLines, setSingleCardTitleLines] = useState<1 | 2 | 3>(
    2
  );
  const [singleCardTitleFontSize, setSingleCardTitleFontSize] =
    useState<number>(66);
  const [singleCardTitleLineGap, setSingleCardTitleLineGap] =
    useState<number>(8); // optional

  const jacketsRef = useRef<(HTMLImageElement | null)[]>([]);

  const { data: songData } = useSWR<{ chartData: ChartData[] }>(
    "/api/songs",
    fetcher
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const img = new window.Image();
    img.src = "/card.png"; // public 폴더 기준 경로
    img.onload = () => {
      setCardBgImg(img);
    };
  }, []);

  const allCharts: FlattenedChart[] = useMemo(
    () =>
      (songData?.chartData || []).flatMap((song) =>
        song.chart.map((chart) => ({
          songIdx: song.songIdx,
          chartIdx: chart.chartIdx,
          title: song.title,
          artist: song.artist,
          level: chart.level,
          type: chart.type,
          jacket: chart.jacket, // Use chart.jacket instead of song.jacket
          date: song.date,
        }))
      ),
    [songData]
  );

  const filteredCharts = useMemo(
    () =>
      allCharts.filter((chart) => {
        const matchesSearch =
          chart.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          chart.artist.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLevel =
          levelFilter === "all" || chart.level === Number.parseInt(levelFilter);
        return matchesSearch && matchesLevel;
      }),
    [allCharts, searchQuery, levelFilter]
  );

  const getRound2StrategyLevelLabel = (levelSlot: 17 | 18) => {
    if (data.tournamentDivision === "major") {
      return levelSlot === 17 ? 18 : 19;
    }
    return levelSlot;
  };

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const buildRound2StrategySongsForTeamAndLevel = (
    teamIdx: 1 | 2,
    levelGroup: 17 | 18
  ): SongEntry[] => {
    const roundIdx = 1; // 2라운드
    const round = data.rounds[roundIdx];

    // team / level 에 따라 RoundData의 필드 선택
    let field: keyof RoundData;
    if (teamIdx === 1) {
      field = levelGroup === 17 ? "team1Strategy17" : "team1Strategy18";
    } else {
      field = levelGroup === 17 ? "team2Strategy17" : "team2Strategy18";
    }

    const arr = (round[field] ?? []) as string[];
    const teamName = teamIdx === 1 ? data.team1.name : data.team2.name;
    const teamLabel = teamName || (teamIdx === 1 ? "TEAM 1" : "TEAM 2");
    const baseKeyStr = String(field);

    return arr
      .map((name, idx) => ({ name, idx }))
      .filter(({ name }) => name && name.trim() !== "")
      .slice(0, 3) // 최대 3개
      .map(({ name, idx }) => {
        const infoKey = `round${roundIdx}_${baseKeyStr}_${idx}`;
        const info = data.songInfoMap[infoKey] || null;

        const songEntry: SongEntry = {
          team: teamLabel,
          teamNumber: teamIdx,
          player: "",
          songName: name,
          info,
          isStrategy: true,
        };
        return songEntry;
      });
  };

  // 2라운드에서 팀/레벨별(17 또는 18) 카드 3장을 세로로 뽑아서 한 장 PNG로 만드는 함수
  const generateRound2StrategyLevelImage = async (
    teamIdx: 1 | 2,
    levelGroup: 17 | 18
  ) => {
    const roundIdx = 1; // 2라운드 고정
    const songs = buildRound2StrategySongsForTeamAndLevel(teamIdx, levelGroup);
    const levelLabel = getRound2StrategyLevelLabel(levelGroup);

    if (songs.length === 0) {
      setNotification({
        type: "error",
        message: `2라운드 ${teamIdx}팀 Lv${levelLabel} 스트래티지 곡이 없습니다.`,
      });
      return;
    }

    // 팀 이름
    const teamName = teamIdx === 1 ? data.team1.name : data.team2.name;
    const teamLabel = teamName || (teamIdx === 1 ? "TEAM 1" : "TEAM 2");

    // 자켓 로더 (다른 곳에서 쓰는 패턴 그대로)
    const loadImage = (src: string): Promise<HTMLImageElement | null> => {
      return new Promise((resolve) => {
        if (!src) return resolve(null);
        const img = new window.Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = src.startsWith("data:")
          ? src
          : `/api/image-proxy?url=${encodeURIComponent(src)}`;
      });
    };

    const jacketImages: (HTMLImageElement | null)[] = await Promise.all(
      songs.map((song) => {
        if (song.info?.jacketBase64) {
          return loadImage(song.info.jacketBase64);
        } else if (song.info?.jacket) {
          return loadImage(song.info.jacket);
        }
        return Promise.resolve(null);
      })
    );

    const getJacketForSong = (song: SongEntry): HTMLImageElement | null => {
      const idx = songs.indexOf(song);
      if (idx === -1) return null;
      return jacketImages[idx];
    };

    // 카드 크기: 기본 카드 사이즈 그대로 사용 → PPT에서 스케일 조절
    const cardWidth = BASE_CARD_WIDTH;
    const cardHeight = BASE_CARD_HEIGHT;
    const paddingX = 40;
    const paddingY = 40;
    const headerHeight = 120;

    const rows = songs.length;
    const canvasWidth = cardWidth + paddingX * 2;
    const canvasHeight =
      headerHeight + paddingY * (rows + 1) + cardHeight * rows;

    const canvas = document.createElement("canvas");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 배경 (다른 이미지들 만들 때와 동일 스타일)
    const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGradient.addColorStop(0, "#020617");
    bgGradient.addColorStop(0.5, "#020617");
    bgGradient.addColorStop(1, "#111827");
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 상단 타이틀
    ctx.fillStyle = "#e5e7eb";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.font =
      "bold 28px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

    ctx.fillText(`2라운드 스트래티지 - ${teamLabel}`, canvasWidth / 2, 24);

    // 부제 (원하면 지워도 됨)
    ctx.font =
      "14px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
    ctx.fillStyle = "#9ca3af";
    ctx.fillText("PPT용: 카드 3장 세로 배치", canvasWidth / 2, 24 + 32);

    // 카드 3장 세로로 쭉
    songs.forEach((song, idx) => {
      const cardX = paddingX;
      const cardY = headerHeight + paddingY * (idx + 1) + cardHeight * idx;

      drawSongCard(ctx, song, cardX, cardY, getJacketForSong(song), {
        cardWidth,
        cardHeight,
        jacketSize: JACKET_BASE_SIZE,
        team1Name: data.team1.name, // 네온색 기준 팀
        backgroundImg: cardBgImg, // 이미 있으신 템플릿 배경
        titleMode: "static",
      });
    });

    const dataUrl = canvas.toDataURL("image/png");

    // 기존 이미지 프리뷰/다운로드 로직 그대로 활용
    setGeneratedImage(dataUrl);
    setImageRoundIdx(roundIdx);
    setImageDialogOpen(true);
  };

  const handleSelectSong = async (chart: FlattenedChart) => {
    if (!songSearchTarget) return;

    const songName = formatSongName(chart);
    const songInfo = chartToSongInfo(chart);

    // 공통: 자켓 base64 시도
    if (chart.jacket) {
      const base64 = await loadImageAsBase64(chart.jacket);
      if (base64) {
        songInfo.jacketBase64 = base64;
      }
    }

    if (songSearchTarget.kind === "round") {
      const { roundIdx, field, arrayIdx } = songSearchTarget;
      const infoKey =
        arrayIdx !== undefined
          ? `round${roundIdx}_${field}_${arrayIdx}`
          : `round${roundIdx}_${field}`;

      if (arrayIdx !== undefined) {
        const currentRound = data.rounds[roundIdx];
        const currentArray =
          (currentRound[field as keyof RoundData] as string[]) || [];
        const newArray = [...currentArray];
        newArray[arrayIdx] = songName;
        updateRound(roundIdx, field as keyof RoundData, newArray);
      } else {
        updateRound(roundIdx, field as keyof RoundData, songName);
      }

      setData((prev) => ({
        ...prev,
        songInfoMap: {
          ...prev.songInfoMap,
          [infoKey]: songInfo,
        },
      }));
    } else if (songSearchTarget.kind === "overtime") {
      // ✅ 연장전 지정곡
      setData((prev) => ({
        ...prev,
        overtime: {
          ...prev.overtime,
          designatedSong: songName,
        },
        songInfoMap: {
          ...prev.songInfoMap,
          // 연장전 지정곡 정보는 여기 저장
          overtime_designatedSong: songInfo,
        },
      }));
    }

    setSongSearchOpen(false);
    setSearchQuery("");
    setSongSearchTarget(null);
  };

  const openSongSearch = (
    roundIdx: number,
    field: string,
    arrayIdx?: number
  ) => {
    setSongSearchTarget({ kind: "round", roundIdx, field, arrayIdx });
    setSongSearchOpen(true);
  };

  const openOvertimeSongSearch = () => {
    setSongSearchTarget({ kind: "overtime", field: "designatedSong" });
    setSongSearchOpen(true);
  };

  const updateTeam = (
    teamIdx: 1 | 2,
    field: keyof Team,
    value: string | [string, string, string]
  ) => {
    setData((prev) => ({
      ...prev,
      [`team${teamIdx}`]: {
        ...prev[`team${teamIdx}`],
        [field]: value,
      },
    }));
  };

  const updateRound = (
    roundIdx: number,
    field: keyof RoundData,
    value: unknown
  ) => {
    setData((prev) => {
      const newRounds = [...prev.rounds] as [
        RoundData,
        RoundData,
        RoundData,
        RoundData
      ];
      newRounds[roundIdx] = { ...newRounds[roundIdx], [field]: value };
      return { ...prev, rounds: newRounds };
    });
  };

  const clearOvertimeDesignatedSong = () => {
    setData((prev) => {
      const newSongInfoMap = { ...prev.songInfoMap };
      delete newSongInfoMap["overtime_designatedSong"];
      return {
        ...prev,
        overtime: { ...prev.overtime, designatedSong: "" },
        songInfoMap: newSongInfoMap,
      };
    });
  };
  const clearSong = (roundIdx: number, field: string, arrayIdx?: number) => {
    const infoKey =
      arrayIdx !== undefined
        ? `round${roundIdx}_${field}_${arrayIdx}`
        : `round${roundIdx}_${field}`;

    if (arrayIdx !== undefined) {
      const round = data.rounds[roundIdx];
      const currentArray = (round[field as keyof RoundData] as string[]) || [];
      const newArray = [...currentArray];
      newArray[arrayIdx] = "";
      updateRound(roundIdx, field as keyof RoundData, newArray);
    } else {
      updateRound(roundIdx, field as keyof RoundData, "");
    }

    setData((prev) => {
      const newSongInfoMap = { ...prev.songInfoMap };
      delete newSongInfoMap[infoKey];
      return { ...prev, songInfoMap: newSongInfoMap };
    });
  };
  const exportSingleCardImage = (
    song: SongEntry,
    jacketImg: HTMLImageElement | null,
    fileName: string,
    backgroundImg?: HTMLImageElement | null // 카드 템플릿
  ) => {
    const baseWidth = 1080; // 카드 실제 폭
    const baseHeight = 380; // 카드 실제 높이

    const canvas = document.createElement("canvas");
    canvas.width = baseWidth;
    canvas.height = baseHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 🔥 전체를 "투명"으로 초기화 (배경색 채우지 않기!)
    ctx.clearRect(0, 0, baseWidth, baseHeight);

    // 🔥 여기서부터는 카드만 그립니다.
    // drawSongCard 안에서 roundRect + clip 으로 카드 영역만 채우기 때문에
    // 바깥은 계속 투명으로 남습니다.
    drawSongCard(ctx, song, 0, 0, jacketImg, {
      cardWidth: baseWidth,
      cardHeight: baseHeight,
      jacketSize: 300, // 이 값은 무시되고 내부에서 다시 계산 중이긴 함
      team1Name: data.team1.name,
      backgroundImg, // 디자이너가 준 템플릿 이미지
    });

    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = fileName;
    link.click();
  };
  
  const generateSingleOptionCardDataUrl = (
    song: SongEntry,
    jacketImg: HTMLImageElement | null,
    backgroundImg?: HTMLImageElement | null,
    titleOptions?: {
      titleMaxLines?: 1 | 2 | 3;
      titleFontSize?: number; // 1080 기준 px
      titleLineGap?: number; // 1080 기준 px
    }
  ) => {
    const baseWidth = 1080;
    const baseHeight = 380;

    const canvas = document.createElement("canvas");
    canvas.width = baseWidth;
    canvas.height = baseHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    // 투명 초기화
    ctx.clearRect(0, 0, baseWidth, baseHeight);

    // ✅ 옵션 카드 그리기 (새 함수)
    drawSongOptionCard(ctx, song, 0, 0, jacketImg, {
      cardWidth: baseWidth,
      cardHeight: baseHeight,
      jacketSize: 300,
      team1Name: data.team1.name,
      backgroundImg,
      titleMaxLines: titleOptions?.titleMaxLines,
      titleFontSize: titleOptions?.titleFontSize,
      titleLineGap: titleOptions?.titleLineGap,
    });

    return canvas.toDataURL("image/png");
  };

  const exportSingleOptionCardImage = (
    song: SongEntry,
    jacketImg: HTMLImageElement | null,
    fileName: string,
    backgroundImg?: HTMLImageElement | null,
    titleOptions?: {
      titleMaxLines?: 1 | 2 | 3;
      titleFontSize?: number;
      titleLineGap?: number;
    }
  ) => {
    const dataUrl = generateSingleOptionCardDataUrl(
      song,
      jacketImg,
      backgroundImg,
      titleOptions
    );
    if (!dataUrl) return;

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = fileName;
    link.click();
  };

  const getSingleCardFileName = (songIndex: number) => {
    const song = currentSongsForRound[songIndex];
    if (!song) return null;

    const teamNumber =
      song.teamNumber ?? (song.team === data.team2.name ? 2 : 1);
    const songNumber =
      currentSongsForRound
        .slice(0, songIndex + 1)
        .filter(
          (entry) =>
            (entry.teamNumber ??
              (entry.team === data.team2.name ? 2 : 1)) === teamNumber
        ).length;

    return `round${imageRoundIdx + 1}_${teamNumber}_${songNumber}.png`;
  };

  const getTournamentJacketItems = () => {
    const items: {
      roundIdx: number;
      teamNumber: 1 | 2;
      songNumber: number;
      info: SongInfo | null;
    }[] = [];

    const addSongs = (
      roundIdx: number,
      teamNumber: 1 | 2,
      field: keyof RoundData,
      songs?: string[]
    ) => {
      (songs || []).forEach((songName, index) => {
        if (!songName?.trim()) return;
        items.push({
          roundIdx,
          teamNumber,
          songNumber: index + 1,
          info:
            data.songInfoMap[`round${roundIdx}_${String(field)}_${index}`] ||
            null,
        });
      });
    };

    data.rounds.forEach((round, roundIdx) => {
      if (roundIdx === 0 || roundIdx === 2) {
        addSongs(roundIdx, 1, "team1Songs", round.team1Songs);
        addSongs(roundIdx, 2, "team2Songs", round.team2Songs);
        return;
      }

      if (roundIdx === 1) {
        addSongs(roundIdx, 1, "team1SongsLong", round.team1SongsLong);
        addSongs(roundIdx, 2, "team2SongsLong", round.team2SongsLong);
        return;
      }

      if (roundIdx === 3) {
        addSongs(roundIdx, 1, "team1Songs2", round.team1Songs2);
        addSongs(roundIdx, 2, "team2Songs2", round.team2Songs2);

        if (round.stage3DesignatedSong?.trim()) {
          items.push({
            roundIdx,
            teamNumber: 1,
            songNumber: 3,
            info: data.songInfoMap[`round${roundIdx}_stage3DesignatedSong`] || null,
          });
        }

        if (round.stage4DesignatedSong?.trim()) {
          items.push({
            roundIdx,
            teamNumber: 2,
            songNumber: 3,
            info: data.songInfoMap[`round${roundIdx}_stage4DesignatedSong`] || null,
          });
        }
      }
    });

    return items;
  };

  const getJacketFileName = (songIndex: number) => {
    const cardFileName = getSingleCardFileName(songIndex);
    if (!cardFileName) return null;

    return cardFileName.replace(/\.png$/, "_jacket.png");
  };

  const loadJacketImage = (info: SongInfo | null) => {
    return new Promise<HTMLImageElement | null>((resolve) => {
      const src = info?.jacketBase64 || info?.jacket;
      if (!src) return resolve(null);

      const img = new window.Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = src.startsWith("data:")
        ? src
        : `/api/image-proxy?url=${encodeURIComponent(src)}`;
    });
  };

  const getJacketDataUrl = (jacketImg: HTMLImageElement | null) => {
    if (!jacketImg) return null;

    const width = jacketImg.naturalWidth || jacketImg.width;
    const height = jacketImg.naturalHeight || jacketImg.height;
    if (!width || !height) return null;

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.drawImage(jacketImg, 0, 0, width, height);
    return canvas.toDataURL("image/png");
  };

  const handleDownloadOptionCard = () => {
    if (selectedSongIndex === null) return;
    const song = currentSongsForRound[selectedSongIndex];
    if (!song) return;

    const jacketImg = jacketsRef.current[selectedSongIndex] || null;
    const fileName = getSingleCardFileName(selectedSongIndex);
    if (!fileName) return;

    exportSingleOptionCardImage(
      song,
      jacketImg,
      fileName,
      cardBgImg,
      {
        titleMaxLines: singleCardTitleLines,
        titleFontSize: singleCardTitleFontSize,
        titleLineGap: singleCardTitleLineGap,
      }
    );
  };

  const handleDownloadAllOptionCards = async () => {
    const zip = new JSZip();

    currentSongsForRound.forEach((song, songIndex) => {
      const fileName = getSingleCardFileName(songIndex);
      if (!fileName) return;

      const dataUrl = generateSingleOptionCardDataUrl(
        song,
        jacketsRef.current[songIndex] || null,
        cardBgImg,
        {
          titleMaxLines: singleCardTitleLines,
          titleFontSize: singleCardTitleFontSize,
          titleLineGap: singleCardTitleLineGap,
        }
      );
      if (!dataUrl) return;

      zip.file(fileName, dataUrl.split(",")[1], { base64: true });
    });

    const zipBlob = await zip.generateAsync({ type: "blob" });
    const zipUrl = URL.createObjectURL(zipBlob);
    const link = document.createElement("a");
    link.href = zipUrl;
    link.download = `round${imageRoundIdx + 1}_cards.zip`;
    link.click();
    URL.revokeObjectURL(zipUrl);
  };

  const handleDownloadAllJackets = async () => {
    const zip = new JSZip();

    currentSongsForRound.forEach((_, songIndex) => {
      const fileName = getJacketFileName(songIndex);
      if (!fileName) return;

      const dataUrl = getJacketDataUrl(jacketsRef.current[songIndex] || null);
      if (!dataUrl) return;

      zip.file(fileName, dataUrl.split(",")[1], { base64: true });
    });

    const zipBlob = await zip.generateAsync({ type: "blob" });
    const zipUrl = URL.createObjectURL(zipBlob);
    const link = document.createElement("a");
    link.href = zipUrl;
    link.download = `round${imageRoundIdx + 1}_jackets.zip`;
    link.click();
    URL.revokeObjectURL(zipUrl);
  };

  const handleDownloadTournamentJackets = async () => {
    const items = getTournamentJacketItems();
    const zip = new JSZip();

    await Promise.all(
      items.map(async (item) => {
        const jacketImg = await loadJacketImage(item.info);
        const dataUrl = getJacketDataUrl(jacketImg);
        if (!dataUrl) return;

        zip.file(
          `round${item.roundIdx + 1}_${item.teamNumber}_${item.songNumber}_jacket.png`,
          dataUrl.split(",")[1],
          { base64: true }
        );
      })
    );

    const zipBlob = await zip.generateAsync({ type: "blob" });
    const zipUrl = URL.createObjectURL(zipBlob);
    const link = document.createElement("a");
    link.href = zipUrl;
    link.download = "tournament_jackets.zip";
    link.click();
    URL.revokeObjectURL(zipUrl);
  };

  const handleDownloadTitleGif = async () => {
    if (selectedSongIndex === null) return;
    const song = currentSongsForRound[selectedSongIndex];
    if (!song) return;

    const jacketImg = jacketsRef.current[selectedSongIndex] || null;

    const gifUrl = await generateTitleScrollGif(song, jacketImg, {
      cardWidth: 1080,
      cardHeight: 380,
      team1Name: data.team1.name,
      backgroundImg: cardBgImg,
    });

    const link = document.createElement("a");
    link.href = gifUrl;
    link.download = `round${imageRoundIdx + 1}_${song.team}_${
      song.player
    }_title-scroll.gif`;
    link.click();
  };

  const handleDownloadSingleCard = () => {
    if (selectedSongIndex === null) return;
    const song = currentSongsForRound[selectedSongIndex];
    if (!song) return;

    const jacketImg = jacketsRef.current[selectedSongIndex] || null;
    const fileName = getSingleCardFileName(selectedSongIndex);
    if (!fileName) return;

    exportSingleCardImage(
      song,
      jacketImg,
      fileName,
      cardBgImg
    );
  };

  const generatePrePickImage = async (roundIdx: number) => {
    const round = data.rounds[roundIdx];

    const isRound13 = roundIdx === 0 || roundIdx === 2;
    const isRound2 = roundIdx === 1;
    const isRound4 = roundIdx === 3;

    // 1) 라운드별로 사용해야 할 곡 배열 선택 (밴/스트래티지 전 원본)
    let rawTeam1: string[] = [];
    let rawTeam2: string[] = [];

    if (isRound13) {
      rawTeam1 = round.team1Songs || [];
      rawTeam2 = round.team2Songs || [];
    } else if (isRound2) {
      rawTeam1 = round.team1SongsLong || [];
      rawTeam2 = round.team2SongsLong || [];
    } else if (isRound4) {
      rawTeam1 = round.team1Songs2 || [];
      rawTeam2 = round.team2Songs2 || [];
    }

    // 라운드별 개수 제한 (3/5/3/2)
    const maxCount = PRE_PICK_COUNT[roundIdx] ?? rawTeam1.length;
    const team1Base = rawTeam1
      .map((name, idx) => ({ name, idx }))
      .filter(({ name }) => name.trim() !== "")
      .slice(0, maxCount);

    const team2Base = rawTeam2
      .map((name, idx) => ({ name, idx }))
      .filter(({ name }) => name.trim() !== "")
      .slice(0, maxCount);

    if (team1Base.length === 0 && team2Base.length === 0) {
      setNotification({ type: "error", message: "사전 픽된 곡이 없습니다." });
      return;
    }

    // 2) songInfoMap 에서 SongInfo 꺼내는 헬퍼 (generateSongListImage 안의 것 복붙)
    const getSongInfoByField = (
      field: keyof RoundData,
      arrayIdx: number
    ): SongInfo | null => {
      const infoKey = `round${roundIdx}_${String(field)}_${arrayIdx}`;
      return data.songInfoMap[infoKey] || null;
    };

    // 3) SongEntry 배열로 변환 (플레이어 이름은 카드에서 안 쓰이므로 빈 문자열로 둠)
    const team1Songs: SongEntry[] = team1Base.map(({ name, idx }) => ({
      team: data.team1.name,
      teamNumber: 1,
      player: "", // 플레이어 표시 안 하기로 해서 비워 둠
      songName: name,
      info: isRound13
        ? getSongInfoByField("team1Songs", idx)
        : isRound2
        ? getSongInfoByField("team1SongsLong", idx)
        : getSongInfoByField("team1Songs2", idx),
      isStrategy: false,
    }));

    const team2Songs: SongEntry[] = team2Base.map(({ name, idx }) => ({
      team: data.team2.name,
      teamNumber: 2,
      player: "",
      songName: name,
      info: isRound13
        ? getSongInfoByField("team2Songs", idx)
        : isRound2
        ? getSongInfoByField("team2SongsLong", idx)
        : getSongInfoByField("team2Songs2", idx),
      isStrategy: false,
    }));

    const songs = [...team1Songs, ...team2Songs];
    const rows = Math.max(team1Songs.length, team2Songs.length);

    // 4) 자켓 이미지 로딩 (base64 우선)
    const loadImage = (src: string): Promise<HTMLImageElement | null> => {
      return new Promise((resolve) => {
        if (!src) return resolve(null);
        const img = new window.Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = src.startsWith("data:")
          ? src
          : `/api/image-proxy?url=${encodeURIComponent(src)}`;
      });
    };

    const jacketImages: (HTMLImageElement | null)[] = await Promise.all(
      songs.map((song) => {
        if (song.info?.jacketBase64) {
          return loadImage(song.info.jacketBase64);
        } else if (song.info?.jacket) {
          return loadImage(song.info.jacket);
        }
        return Promise.resolve(null);
      })
    );

    const getJacketForSong = (song: SongEntry): HTMLImageElement | null => {
      const idx = songs.indexOf(song);
      if (idx === -1) return null;
      return jacketImages[idx];
    };

    // 5) 캔버스 사이즈 및 배경 (기존 generateSongListImage 와 통일)
    const cardWidth = 540;
    const cardHeight = 190;
    const jacketSize = 150;
    const padding = 28;

    const col1X = padding;
    const col2X = padding * 2 + cardWidth;

    const canvas = document.createElement("canvas");
    canvas.width = 2 * cardWidth + padding * 3;
    canvas.height = rows * cardHeight + padding * (rows + 1) + 100;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGradient.addColorStop(0, "#020617");
    bgGradient.addColorStop(0.5, "#020617");
    bgGradient.addColorStop(1, "#111827");
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 상단 타이틀: "n라운드 사전 픽 선곡 목록"
    ctx.fillStyle = "#e5e7eb";
    ctx.font =
      "bold 26px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(
      `${roundIdx + 1}라운드 사전 픽 선곡 목록`,
      canvas.width / 2,
      18
    );

    // 팀 이름 헤더
    ctx.font =
      "bold 16px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
    ctx.textAlign = "left";
    ctx.fillStyle = "#60a5fa";
    ctx.fillText(data.team1.name || "TEAM 1", col1X + 12, 52);
    ctx.fillStyle = "#f97373";
    ctx.fillText(data.team2.name || "TEAM 2", col2X + 12, 52);

    // 팀 이름 아래 네온 라인
    ctx.save();
    ctx.lineWidth = 3;
    ctx.shadowBlur = 12;
    ctx.shadowColor = "#22d3ee";

    ctx.beginPath();
    ctx.strokeStyle = "#2563eb";
    ctx.moveTo(col1X + 10, 74);
    ctx.lineTo(col1X + cardWidth - 10, 74);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "#ef4444";
    ctx.moveTo(col2X + 10, 74);
    ctx.lineTo(col2X + cardWidth - 10, 74);
    ctx.stroke();
    ctx.restore();

    // 여기서 drawSongCard는 이미 generateSongListImage 안에서 쓰던 내부 함수 그대로 사용
    // (위에서 사용하던 것 그대로 두고, 여기서도 재사용하면 됩니다)
    const startY = 80 + padding;

    for (let row = 0; row < rows; row++) {
      const y = startY + row * (cardHeight + padding);

      const songLeft = team1Songs[row];
      const songRight = team2Songs[row];
      const baseWidth = 540;
      const baseHeight = 190;

      if (songLeft) {
        drawSongCard(ctx, songLeft, col1X, y, getJacketForSong(songLeft), {
          cardWidth: baseWidth,
          cardHeight: baseHeight,
          jacketSize: 150,
          team1Name: data.team1.name,
          backgroundImg: cardBgImg,
        });
      }

      if (songRight) {
        drawSongCard(ctx, songRight, col2X, y, getJacketForSong(songRight), {
          cardWidth: baseWidth,
          cardHeight: baseHeight,
          jacketSize: 150,
          team1Name: data.team1.name,
          backgroundImg: cardBgImg,
        });
      }
    }

    setGeneratedImage(canvas.toDataURL("image/png"));
    jacketsRef.current = jacketImages;
    setCurrentSongsForRound(songs);
    setSelectedSongIndex(songs.length > 0 ? 0 : null);
    setImageRoundIdx(roundIdx);
    setImageDialogOpen(true);
  };

  const generateSongListImage = async (roundIdx: number) => {
    const round = data.rounds[roundIdx];

    // 1. 라운드 타입에 따라 사용되는 선수/곡 배열 결정
    const isRound13 = roundIdx === 0 || roundIdx === 2;
    const isRound2 = roundIdx === 1;
    const isRound4 = roundIdx === 3;

    // 플레이어 구성
    const team1Players =
      isRound2 || isRound4
        ? [round.team1Player || ""]
        : round.team1Players || ["", ""];
    const team2Players =
      isRound2 || isRound4
        ? [round.team2Player || ""]
        : round.team2Players || ["", ""];

    // 밴/스트래티지 관련 (1,3라운드에서만)
    const team1BannedSong = isRound13 ? round.team1BannedSong || "" : "";
    const team2BannedSong = isRound13 ? round.team2BannedSong || "" : "";

    // 2. SongInfo 를 찾기 위한 헬퍼
    const getSongInfoByField = (
      field: keyof RoundData,
      arrayIdx: number
    ): SongInfo | null => {
      const infoKey = `round${roundIdx}_${String(field)}_${arrayIdx}`;
      return data.songInfoMap[infoKey] || null;
    };

    // 전략 카드로 바뀐 곡에 대한 SongInfo 찾기
    // (1,3라운드: teamXStrategyOptions, 2라운드: teamXStrategy17 / teamXStrategy18 포함)
    const getSongInfoFromStrategy = (
      teamIdxUsed: 1 | 2,
      songName: string
    ): SongInfo | null => {
      const strategyFields: (keyof RoundData)[] =
        teamIdxUsed === 1
          ? ["team1StrategyOptions", "team1Strategy17", "team1Strategy18"]
          : ["team2StrategyOptions", "team2Strategy17", "team2Strategy18"];

      for (const field of strategyFields) {
        const options = (round[field] as string[]) || [];
        for (let i = 0; i < options.length; i++) {
          if (options[i] === songName) {
            const infoKey = `round${roundIdx}_${String(field)}_${i}`;
            return data.songInfoMap[infoKey] || null;
          }
        }
      }
      return null;
    };

    // 3. 라운드별로 "실제 보여줄 곡" 리스트 만들기

    const songs: SongEntry[] = [];

    // ----- 1,3 라운드 (2v2, 밴 + 스트래티지) -----
    if (isRound13) {
      const rawTeam1Songs = round.team1Songs || [];
      const rawTeam2Songs = round.team2Songs || [];

      // 밴 적용 + 인덱스 유지
      const team1Songs = rawTeam1Songs
        .map((name, idx) => ({ name, idx }))
        .filter(({ name }) => name.trim() !== "" && name !== team2BannedSong)
        .slice(0, 2); // 👈 여기 추가

      const team2Songs = rawTeam2Songs
        .map((name, idx) => ({ name, idx }))
        .filter(({ name }) => name.trim() !== "" && name !== team1BannedSong)
        .slice(0, 2); //
      // 팀1 곡들
      team1Songs.forEach(({ name: originalSong, idx }, displayIdx) => {
        let finalSong = originalSong;
        let isStrategy = false;
        let info: SongInfo | null = null;

        // 상대(팀2)가 이 곡에 스트래티지 쓴 경우
        if (
          round.team2StrategyUsed &&
          round.team2StrategyTarget === originalSong &&
          round.team2StrategySelected
        ) {
          finalSong = round.team2StrategySelected;
          isStrategy = true;
          info = getSongInfoFromStrategy(2, finalSong);
        }

        // 2) 기본적으로는 원래 team1Songs[idx] 에 대응하는 SongInfo 사용
        if (!info) {
          info = getSongInfoByField("team1Songs", idx);
        }

        songs.push({
          team: data.team1.name,
          teamNumber: 1,
          player: team1Players[displayIdx] || "",
          songName: finalSong,
          info,
          isStrategy,
        });
      });

      // 팀2 곡들
      team2Songs.forEach(({ name: originalSong, idx }, displayIdx) => {
        let finalSong = originalSong;
        let isStrategy = false;
        let info: SongInfo | null = null;

        // 상대(팀1)가 이 곡에 스트래티지 쓴 경우
        if (
          round.team1StrategyUsed &&
          round.team1StrategyTarget === originalSong &&
          round.team1StrategySelected
        ) {
          finalSong = round.team1StrategySelected;
          isStrategy = true;
          info = getSongInfoFromStrategy(1, finalSong);
        }

        if (!info) {
          info = getSongInfoByField("team2Songs", idx);
        }

        songs.push({
          team: data.team2.name,
          teamNumber: 2,
          player: team2Players[displayIdx] || "",
          songName: finalSong,
          info,
          isStrategy,
        });
      });
    }

    // ----- 2 라운드 (1v1, 5곡씩, 스트래티지 상대곡 교체) -----
    if (isRound2) {
      const rawTeam1Songs = round.team1SongsLong || [];
      const rawTeam2Songs = round.team2SongsLong || [];

      // 팀1 곡들: 팀2가 이 곡에 스트래티지를 걸었을 수 있음
      rawTeam1Songs.forEach((originalSong, idx) => {
        if (!originalSong.trim()) return;

        let finalSong = originalSong;
        let isStrategy = false;
        let info: SongInfo | null = null;

        // 팀2가 이 곡(target)에 스트래티지 사용한 경우
        if (
          round.team2StrategyUsed &&
          round.team2StrategyTarget === originalSong &&
          round.team2StrategySelected
        ) {
          finalSong = round.team2StrategySelected;
          isStrategy = true;
          // 팀2가 사용한 스트래티지 후보(17/18/옵션) 중에서 정보 찾기
          info = getSongInfoFromStrategy(2, finalSong);
        }

        // 기본: 원래 team1SongsLong[idx] 정보 사용
        if (!info) {
          info = getSongInfoByField("team1SongsLong", idx);
        }

        songs.push({
          team: data.team1.name,
          teamNumber: 1,
          player: team1Players[0] || "",
          songName: finalSong,
          info,
          isStrategy,
        });
      });

      // 팀2 곡들: 팀1이 이 곡에 스트래티지 걸었을 수 있음
      rawTeam2Songs.forEach((originalSong, idx) => {
        if (!originalSong.trim()) return;

        let finalSong = originalSong;
        let isStrategy = false;
        let info: SongInfo | null = null;

        if (
          round.team1StrategyUsed &&
          round.team1StrategyTarget === originalSong &&
          round.team1StrategySelected
        ) {
          finalSong = round.team1StrategySelected;
          isStrategy = true;
          info = getSongInfoFromStrategy(1, finalSong);
        }

        if (!info) {
          info = getSongInfoByField("team2SongsLong", idx);
        }

        songs.push({
          team: data.team2.name,
          teamNumber: 2,
          player: team2Players[0] || "",
          songName: finalSong,
          info,
          isStrategy,
        });
      });
    }
    // ----- 4 라운드 (1v1, 2곡 + 밴 + 지정곡 표시) -----
    if (isRound4) {
      const rawTeam1Songs = round.team1Songs2 || [];
      const rawTeam2Songs = round.team2Songs2 || [];
      const team1Banned = round.team1BannedSong4;
      const team2Banned = round.team2BannedSong4;

      // 밴 적용 후 플레이 가능한 곡들만
      const team1Songs = rawTeam1Songs
        .map((name, idx) => ({ name, idx }))
        .filter(({ name }) => name && name !== team2Banned);

      const team2Songs = rawTeam2Songs
        .map((name, idx) => ({ name, idx }))
        .filter(({ name }) => name && name !== team1Banned);

      // 팀1 곡들
      team1Songs.forEach(({ name, idx }) => {
        const info = getSongInfoByField("team1Songs2", idx);
        songs.push({
          team: data.team1.name,
          teamNumber: 1,
          player: team1Players[0] || "", // 4라운드는 1명
          songName: name,
          info,
          isStrategy: false,
        });
      });

      // 팀2 곡들
      team2Songs.forEach(({ name, idx }) => {
        const info = getSongInfoByField("team2Songs2", idx);
        songs.push({
          team: data.team2.name,
          teamNumber: 2,
          player: team2Players[0] || "",
          songName: name,
          info,
          isStrategy: false,
        });
      });

      // 주최측 지정곡도 카드에 포함하고 싶다면 (선택 사항)
      if (round.stage3DesignatedSong) {
        const info =
          data.songInfoMap[`round${roundIdx}_stage3DesignatedSong`] || null;
        songs.push({
          team: data.team1.name,
          teamNumber: 1,
          player: "지정곡",
          songName: round.stage3DesignatedSong,
          info,
          isStrategy: false,
        });
      }

      if (round.stage4DesignatedSong) {
        const info =
          data.songInfoMap[`round${roundIdx}_stage4DesignatedSong`] || null;
        songs.push({
          team: data.team2.name,
          teamNumber: 2,
          player: "지정곡",
          songName: round.stage4DesignatedSong,
          info,
          isStrategy: false,
        });
      }
    }

    if (songs.length === 0) {
      setNotification({ type: "error", message: "표시할 곡이 없습니다." });
      return;
    }

    // 4. 자켓 이미지 로딩 (base64 우선, 없으면 URL)
    const loadImage = (src: string): Promise<HTMLImageElement | null> => {
      return new Promise((resolve) => {
        const img = new window.Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => {
          console.log("[v0] Image load failed, using placeholder", src);
          resolve(null);
        };
        img.src = src.startsWith("data:")
          ? src
          : `/api/image-proxy?url=${encodeURIComponent(src)}`;
      });
    };

    const jacketImages: (HTMLImageElement | null)[] = await Promise.all(
      songs.map((song) => {
        if (song.info?.jacketBase64) {
          return loadImage(song.info.jacketBase64);
        } else if (song.info?.jacket) {
          return loadImage(song.info.jacket);
        }
        return Promise.resolve(null);
      })
    );

    jacketsRef.current = jacketImages;
    setCurrentSongsForRound(songs);
    setSelectedSongIndex(songs.length > 0 ? 0 : null);

    // 5. 캔버스에 그리기
    const cardWidth = 1080; // 1080
    const cardHeight = 380; // 380
    const jacketSize = 300; // 300
    const padding = 40; // 40

    const team1SongsForLayout = songs.filter((s) => s.team === data.team1.name);
    const team2SongsForLayout = songs.filter((s) => s.team === data.team2.name);
    const rows = Math.max(
      team1SongsForLayout.length,
      team2SongsForLayout.length
    );

    const canvas = document.createElement("canvas");
    canvas.width = 2 * cardWidth + padding * 3; // 왼쪽 카드 + 오른쪽 카드 + 패딩
    canvas.height = rows * cardHeight + padding * (rows + 1) + 100;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGradient.addColorStop(0, "#020617");
    bgGradient.addColorStop(0.5, "#020617");
    bgGradient.addColorStop(1, "#111827");
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 중앙 네온 구분선 (팀 VS 팀 느낌)
    ctx.save();
    ctx.strokeStyle = "#22d3ee";
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 6]);
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 60);
    ctx.lineTo(canvas.width / 2, canvas.height - 24);
    ctx.stroke();
    ctx.restore();

    // 상단 타이틀
    ctx.fillStyle = "#e5e7eb";
    ctx.font =
      "bold 26px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(`${roundIdx + 1}라운드 선곡 목록`, canvas.width / 2, 18);

    // 팀 이름 헤더 (좌/우 상단)
    ctx.font =
      "bold 16px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
    ctx.textAlign = "left";
    ctx.fillStyle = "#60a5fa"; // 팀1 파란색
    const col1X = padding;
    const col2X = padding * 2 + cardWidth;

    ctx.fillText(data.team1.name || "TEAM 1", col1X + 12, 52);
    ctx.fillStyle = "#f97373"; // 팀2 빨간색
    ctx.fillText(data.team2.name || "TEAM 2", col2X + 12, 52);

    // 팀 이름 아래 얇은 네온 라인
    ctx.save();
    ctx.lineWidth = 3;
    ctx.shadowBlur = 12;
    ctx.shadowColor = "#22d3ee";

    ctx.beginPath();
    ctx.strokeStyle = "#2563eb";
    ctx.moveTo(col1X + 10, 74);
    ctx.lineTo(col1X + cardWidth - 10, 74);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "#ef4444";
    ctx.moveTo(col2X + 10, 74);
    ctx.lineTo(col2X + cardWidth - 10, 74);
    ctx.stroke();

    ctx.restore();
    // 곡 제목에서 끝의 난이도 꼬리표(예: " MXM", " EXH") 제거
    const stripDifficultyFromTitle = (
      title: string,
      song: SongEntry
    ): string => {
      if (!title) return "";
      if (!song.info?.type) return title;

      const typeUpper = song.info.type.toUpperCase().trim(); // EXH, MXM 등
      const suffix = " " + typeUpper;

      if (title.toUpperCase().endsWith(suffix)) {
        return title.slice(0, -suffix.length);
      }
      return title;
    };

    // 텍스트를 wrap 하면서 필요한 줄 수 측정 (줄수 제한 X)
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

    // songs 배열에서 해당 SongEntry 의 자켓 이미지를 찾아오는 헬퍼
    const getJacketForSong = (song: SongEntry): HTMLImageElement | null => {
      const idx = songs.indexOf(song);
      if (idx === -1) return null;
      return jacketImages[idx];
    };

    // 긴 텍스트를 여러 줄로 나누는 헬퍼 (… 없이 줄바꿈, 최대 2줄)
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
          if (lines.length === maxLines - 1) {
            break;
          }
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

    // 실제 카드 하나를 그리는 헬퍼 – BPL 스타일 카드

    // 행 단위로 좌/우에 팀1/팀2 카드 배치
    for (let row = 0; row < rows; row++) {
      const y = 80 + padding + row * (cardHeight + padding);

      const songLeft = team1SongsForLayout[row]; // 팀1
      const songRight = team2SongsForLayout[row]; // 팀2
      const baseWidth = BASE_CARD_WIDTH; // 1080
      const baseHeight = BASE_CARD_HEIGHT; // 380
      if (songLeft) {
        const xLeft = col1X;
        drawSongCard(ctx, songLeft, xLeft, y, getJacketForSong(songLeft), {
          cardWidth: baseWidth,
          cardHeight: baseHeight,
          jacketSize: 150,
          team1Name: data.team1.name,
          backgroundImg: cardBgImg,
        });
      }

      if (songRight) {
        const xRight = col2X;
        drawSongCard(ctx, songRight, xRight, y, getJacketForSong(songRight), {
          cardWidth: baseWidth,
          cardHeight: baseHeight,
          jacketSize: 150,
          team1Name: data.team1.name,
          backgroundImg: cardBgImg,
        });
      }
    }

    setGeneratedImage(canvas.toDataURL("image/png"));
    setImageRoundIdx(roundIdx);
    setImageDialogOpen(true);
  };

  // 라운드 + 팀 기준으로 스트래티지 곡들을 SongEntry 배열로 변환
  const buildStrategySongsForRoundAndTeam = (
    roundIdx: number,
    teamIdx: 1 | 2
  ): SongEntry[] => {
    const round = data.rounds[roundIdx];
    const isRound1 = roundIdx === 0;
    const isRound2 = roundIdx === 1;
    const isRound3 = roundIdx === 2;

    const teamName = teamIdx === 1 ? data.team1.name : data.team2.name;

    const buildFromArray = (
      field: keyof RoundData,
      values?: string[] | null
    ): SongEntry[] => {
      const baseKey = String(field);

      return (values || [])
        .map((name, idx) => ({ name, idx }))
        .filter(({ name }) => name && name.trim() !== "")
        .slice(0, 3) // 각 배열에서 최대 3곡
        .map(({ name, idx }) => {
          const infoKey = `round${roundIdx}_${baseKey}_${idx}`;
          const info = data.songInfoMap[infoKey] || null;

          return {
            team: teamName,
            teamNumber: teamIdx,
            player: "",
            songName: name,
            info,
            isStrategy: true,
          } as SongEntry;
        });
    };

    // 1R / 3R : teamXStrategyOptions
    if (isRound1 || isRound3) {
      if (teamIdx === 1) {
        return buildFromArray(
          "team1StrategyOptions",
          round.team1StrategyOptions
        );
      } else {
        return buildFromArray(
          "team2StrategyOptions",
          round.team2StrategyOptions
        );
      }
    }

    // 2R : 팀당 17렙 3곡 + 18렙 3곡 = 6곡
    if (isRound2) {
      if (teamIdx === 1) {
        const lv17 = buildFromArray("team1Strategy17", round.team1Strategy17);
        const lv18 = buildFromArray("team1Strategy18", round.team1Strategy18);
        return [...lv17, ...lv18]; // 총 6곡
      } else {
        const lv17 = buildFromArray("team2Strategy17", round.team2Strategy17);
        const lv18 = buildFromArray("team2Strategy18", round.team2Strategy18);
        return [...lv17, ...lv18];
      }
    }

    return [];
  };
  const handleGenerateStrategyTeam1 = (roundIdx: number) => {
    generateStrategyCardImageForTeam(roundIdx, 1);
  };

  const handleGenerateStrategyTeam2 = (roundIdx: number) => {
    generateStrategyCardImageForTeam(roundIdx, 2);
  };
  const handleGenerateRound2Lv17Team1 = () => {
    generateRound2StrategyLevelImage(1, 17);
  };

  const handleGenerateRound2Lv18Team1 = () => {
    generateRound2StrategyLevelImage(1, 18);
  };

  const handleGenerateRound2Lv17Team2 = () => {
    generateRound2StrategyLevelImage(2, 17);
  };

  const handleGenerateRound2Lv18Team2 = () => {
    generateRound2StrategyLevelImage(2, 18);
  };

  const generateStrategyCardImageForTeam = async (
    roundIdx: number,
    teamIdx: 1 | 2
  ) => {
    const round = data.rounds[roundIdx];
    const isRound1 = roundIdx === 0;
    const isRound2 = roundIdx === 1;
    const isRound3 = roundIdx === 2;

    const team = teamIdx === 1 ? data.team1 : data.team2;
    const teamLabel = team.name || (teamIdx === 1 ? "TEAM 1" : "TEAM 2");

    // =========================
    // 2라운드: 17렙 3개 왼쪽 / 18렙 3개 오른쪽
    // =========================
    if (isRound2) {
      const raw17 =
        teamIdx === 1
          ? round.team1Strategy17 || []
          : round.team2Strategy17 || [];
      const raw18 =
        teamIdx === 1
          ? round.team1Strategy18 || []
          : round.team2Strategy18 || [];

      const buildArr = (
        baseKey: keyof RoundData,
        arr: string[]
      ): SongEntry[] => {
        const baseKeyStr = String(baseKey);
        return arr
          .map((name, idx) => ({ name, idx }))
          .filter(({ name }) => name && name.trim() !== "")
          .slice(0, 3)
          .map(({ name, idx }) => {
            const infoKey = `round${roundIdx}_${baseKeyStr}_${idx}`;
            const info = data.songInfoMap[infoKey] || null;

            return {
              team: teamLabel,
              teamNumber: teamIdx,
              player: "",
              songName: name,
              info,
              isStrategy: true,
            } as SongEntry;
          });
      };

      const songs17 =
        teamIdx === 1
          ? buildArr("team1Strategy17", raw17)
          : buildArr("team2Strategy17", raw17);
      const songs18 =
        teamIdx === 1
          ? buildArr("team1Strategy18", raw18)
          : buildArr("team2Strategy18", raw18);

      const rows = Math.max(songs17.length, songs18.length);
      if (rows === 0) {
        setNotification?.({
          type: "error",
          message: "해당 팀의 2라운드 스트래티지 후보 곡이 없습니다.",
        });
        return;
      }

      // ===== 카드 비율 유지하면서 축소 (2열 배치) =====
      const scale = 0.55; // 필요하면 0.5~0.6 사이로 조절
      const cardWidth = BASE_CARD_WIDTH * scale;
      const cardHeight = BASE_CARD_HEIGHT * scale;

      const paddingX = 40;
      const paddingY = 40;
      const headerHeight = 120;

      const col1X = paddingX;
      const col2X = paddingX * 2 + cardWidth;

      const canvasWidth = col2X + cardWidth + paddingX; // 좌+우+양쪽 패딩
      const canvasHeight =
        headerHeight + paddingY * (rows + 1) + cardHeight * rows;

      const canvas = document.createElement("canvas");
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // 배경
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, "#020617");
      bgGradient.addColorStop(0.5, "#020617");
      bgGradient.addColorStop(1, "#111827");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 상단 타이틀
      ctx.fillStyle = "#e5e7eb";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.font =
        "bold 32px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
      ctx.fillText(
        `2라운드 스트래티지 카드 - ${teamLabel}`,
        canvasWidth / 2,
        24
      );

      const lowerLevelLabel = getRound2StrategyLevelLabel(17);
      const upperLevelLabel = getRound2StrategyLevelLabel(18);

      // 컬럼 라벨
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.font =
        "bold 22px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

      ctx.fillStyle = "#60a5fa";
      ctx.fillText(`Lv${lowerLevelLabel} 스트래티지`, col1X, 70);

      ctx.fillStyle = "#f97373";
      ctx.fillText(`Lv${upperLevelLabel} 스트래티지`, col2X, 70);

      // 자켓 로딩용 전체 목록
      const allSongs = [...songs17, ...songs18];

      const loadImage = (src: string): Promise<HTMLImageElement | null> => {
        return new Promise((resolve) => {
          if (!src) return resolve(null);
          const img = new window.Image();
          img.crossOrigin = "anonymous";
          img.onload = () => resolve(img);
          img.onerror = () => resolve(null);
          img.src = src.startsWith("data:")
            ? src
            : `/api/image-proxy?url=${encodeURIComponent(src)}`;
        });
      };

      const jacketImages: (HTMLImageElement | null)[] = await Promise.all(
        allSongs.map((song) => {
          if (song.info?.jacketBase64) {
            return loadImage(song.info.jacketBase64);
          } else if (song.info?.jacket) {
            return loadImage(song.info.jacket);
          }
          return Promise.resolve(null);
        })
      );

      const getJacketForSong = (song: SongEntry): HTMLImageElement | null => {
        const idx = allSongs.indexOf(song);
        if (idx === -1) return null;
        return jacketImages[idx];
      };

      const team1Name = data.team1.name;

      // 카드 그리기: 왼쪽 컬럼 Lv17, 오른쪽 컬럼 Lv18
      for (let row = 0; row < rows; row++) {
        const baseY = headerHeight + paddingY * (row + 1) + cardHeight * row;

        const s17 = songs17[row];
        const s18 = songs18[row];

        if (s17) {
          drawSongCard(ctx, s17, col1X, baseY, getJacketForSong(s17), {
            cardWidth,
            cardHeight,
            jacketSize: JACKET_BASE_SIZE * scale,
            team1Name,
            backgroundImg: cardBgImg,
            titleMode: "static",
          });
        }

        if (s18) {
          drawSongCard(ctx, s18, col2X, baseY, getJacketForSong(s18), {
            cardWidth,
            cardHeight,
            jacketSize: JACKET_BASE_SIZE * scale,
            team1Name,
            backgroundImg: cardBgImg,
            titleMode: "static",
          });
        }
      }

      const dataUrl = canvas.toDataURL("image/png");
      setGeneratedImage(dataUrl);
      setImageRoundIdx(roundIdx);
      setImageDialogOpen(true);
      return;
    }

    // =========================
    // 1R / 3R: 기존처럼 세로로 카드 n장
    // =========================
    const songs = buildStrategySongsForRoundAndTeam(roundIdx, teamIdx);

    if (songs.length === 0) {
      setNotification?.({
        type: "error",
        message: "해당 라운드/팀의 스트레티지 후보 곡이 없습니다.",
      });
      return;
    }

    const rows = songs.length;

    const cardWidth = BASE_CARD_WIDTH; // 원본 비율 그대로
    const cardHeight = BASE_CARD_HEIGHT;

    const paddingX = 40;
    const paddingY = 40;
    const headerHeight = 120;

    const canvasWidth = cardWidth + paddingX * 2;
    const canvasHeight =
      headerHeight + paddingY * (rows + 1) + cardHeight * rows;

    const canvas = document.createElement("canvas");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGradient.addColorStop(0, "#020617");
    bgGradient.addColorStop(0.5, "#020617");
    bgGradient.addColorStop(1, "#111827");
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#e5e7eb";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.font =
      "bold 32px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

    const roundTitle =
      isRound1 || isRound3
        ? `${roundIdx + 1}라운드 스트래티지 카드`
        : `라운드 ${roundIdx + 1} 스트티지 카드`;

    ctx.fillText(`${roundTitle} - ${teamLabel}`, canvasWidth / 2, 24);

    const loadImage = (src: string): Promise<HTMLImageElement | null> => {
      return new Promise((resolve) => {
        if (!src) return resolve(null);
        const img = new window.Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = src.startsWith("data:")
          ? src
          : `/api/image-proxy?url=${encodeURIComponent(src)}`;
      });
    };

    const jacketImages: (HTMLImageElement | null)[] = await Promise.all(
      songs.map((song) => {
        if (song.info?.jacketBase64) {
          return loadImage(song.info.jacketBase64);
        } else if (song.info?.jacket) {
          return loadImage(song.info.jacket);
        }
        return Promise.resolve(null);
      })
    );

    const getJacketForSong = (song: SongEntry): HTMLImageElement | null => {
      const idx = songs.indexOf(song);
      if (idx === -1) return null;
      return jacketImages[idx];
    };

    const team1Name = data.team1.name;

    songs.forEach((song, idx) => {
      const cardX = paddingX;
      const cardY = headerHeight + paddingY * (idx + 1) + cardHeight * idx;

      drawSongCard(ctx, song, cardX, cardY, getJacketForSong(song), {
        cardWidth,
        cardHeight,
        jacketSize: JACKET_BASE_SIZE,
        team1Name,
        backgroundImg: cardBgImg,
        titleMode: "static",
      });
    });

    const dataUrl = canvas.toDataURL("image/png");
    setGeneratedImage(dataUrl);
    setImageRoundIdx(roundIdx);
    setImageDialogOpen(true);
  };

  const copyImageToClipboard = async () => {
    if (!generatedImage) return;

    try {
      const blob = await fetch(generatedImage).then((res) => res.blob());
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob }),
      ]);
      setCopiedId("image");
      setTimeout(() => setCopiedId(null), 2000);
    } catch (e) {
      console.error("Failed to copy image:", e);
      alert("이미지 복사에 실패했습니다.");
    }
  };

  const downloadImage = () => {
    if (!generatedImage) return;

    const link = document.createElement("a");
    link.download = `round${imageRoundIdx + 1}_songs.png`;
    link.href = generatedImage;
    link.click();
  };

  const getOpponentSongs = (
    round: RoundData,
    teamIdx: 1 | 2,
    roundIdx: number
  ): string[] => {
    // This function is only used for banned song selection, so it should refer to team1Songs/team2Songs or team1Songs2/team2Songs2
    if (roundIdx === 0 || roundIdx === 2) {
      return teamIdx === 1
        ? round.team2Songs?.filter(Boolean) || []
        : round.team1Songs?.filter(Boolean) || [];
    } else if (roundIdx === 1) {
      return teamIdx === 1
        ? round.team2SongsLong?.filter(Boolean) || []
        : round.team1SongsLong?.filter(Boolean) || [];
    } else if (roundIdx === 3) {
      return teamIdx === 1
        ? round.team2Songs2?.filter(Boolean) || []
        : round.team1Songs2?.filter(Boolean) || [];
    }
    return []; // Should not happen for rounds 0-3
  };
  const getRound2StrategyOptions = (
    round: RoundData,
    teamIdx: 1 | 2
  ): string[] => {
    const songs17 =
      (teamIdx === 1 ? round.team1Strategy17 : round.team2Strategy17) || [];
    const songs18 =
      (teamIdx === 1 ? round.team1Strategy18 : round.team2Strategy18) || [];

    return [...songs17, ...songs18].filter(Boolean);
  };
  const getStrategyUsed = (round: RoundData, teamIdx: 1 | 2): boolean => {
    return teamIdx === 1 ? round.team1StrategyUsed : round.team2StrategyUsed;
  };

  const getStrategyTarget = (round: RoundData, teamIdx: 1 | 2): string => {
    return teamIdx === 1
      ? round.team1StrategyTarget || ""
      : round.team2StrategyTarget || "";
  };

  const getStrategySelected = (round: RoundData, teamIdx: 1 | 2): string => {
    return teamIdx === 1
      ? round.team1StrategySelected || ""
      : round.team2StrategySelected || "";
  };

  const exportCSV = () => {
    const rows: string[] = [];
    rows.push("section,key,value,title,artist,jacket,level,type,date");

    // Escape function for CSV values
    const escapeCSV = (str: string) => {
      if (!str) return "";
      // Escape quotes by doubling them and wrap in quotes if contains comma or quote
      const escaped = str.replace(/"/g, '""');
      if (
        escaped.includes(",") ||
        escaped.includes('"') ||
        escaped.includes("\n")
      ) {
        return `"${escaped}"`;
      }
      return escaped;
    };

    rows.push(`team,team1Name,${escapeCSV(data.team1.name)},,,,,,`);
    rows.push(`team,team1Player1,${escapeCSV(data.team1.players[0])},,,,,,`);
    rows.push(`team,team1Player2,${escapeCSV(data.team1.players[1])},,,,,,`);
    rows.push(`team,team1Player3,${escapeCSV(data.team1.players[2])},,,,,,`);
    rows.push(`team,team2Name,${escapeCSV(data.team2.name)},,,,,,`);
    rows.push(`team,team2Player1,${escapeCSV(data.team2.players[0])},,,,,,`);
    rows.push(`team,team2Player2,${escapeCSV(data.team2.players[1])},,,,,,`);
    rows.push(`team,team2Player3,${escapeCSV(data.team2.players[2])},,,,,,`);
    rows.push(
      `team,recordingUploadUrl,${escapeCSV(data.recordingUploadUrl)},,,,,,`
    );
    rows.push(`team,tournamentDivision,${data.tournamentDivision},,,,,,`);

    data.rounds.forEach((round, idx) => {
      const section = `round${idx + 1}`;
      Object.entries(round).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v, i) => {
            const infoKey = `round${idx}_${key}_${i}`;
            const info = data.songInfoMap[infoKey];
            if (info) {
              rows.push(
                `${section},${key}_${i},${escapeCSV(v)},${escapeCSV(
                  info.title
                )},${escapeCSV(info.artist)},${escapeCSV(info.jacket)},${
                  info.level
                },${escapeCSV(info.type)},${escapeCSV(info.date)}`
              );
            } else {
              rows.push(`${section},${key}_${i},${escapeCSV(v)},,,,,,`);
            }
          });
        } else if (typeof value === "boolean") {
          rows.push(`${section},${key},${value},,,,,,`);
        } else if (typeof value === "string") {
          const infoKey = `round${idx}_${key}`;
          const info = data.songInfoMap[infoKey];
          if (info) {
            rows.push(
              `${section},${key},${escapeCSV(value)},${escapeCSV(
                info.title
              )},${escapeCSV(info.artist)},${escapeCSV(info.jacket)},${
                info.level
              },${escapeCSV(info.type)},${escapeCSV(info.date)}`
            );
          } else {
            rows.push(`${section},${key},${escapeCSV(value)},,,,,,`);
          }
        }
      });
    });

    // 🔽 여기부터 추가: 연장전(overtime) 섹션 내보내기
    rows.push(
      `overtime,roomNumber,${escapeCSV(data.overtime.roomNumber)},,,,,,`
    );

    const overtimeInfo = data.songInfoMap["overtime_designatedSong"];
    if (overtimeInfo) {
      rows.push(
        `overtime,designatedSong,${escapeCSV(data.overtime.designatedSong)},` +
          `${escapeCSV(overtimeInfo.title)},${escapeCSV(
            overtimeInfo.artist
          )},${escapeCSV(overtimeInfo.jacket)},` +
          `${overtimeInfo.level},${escapeCSV(overtimeInfo.type)},${escapeCSV(
            overtimeInfo.date
          )}`
      );
    } else {
      rows.push(
        `overtime,designatedSong,${escapeCSV(
          data.overtime.designatedSong
        )},,,,,,`
      );
    }

    rows.push(
      `overtime,team1Player,${escapeCSV(data.overtime.team1Player)},,,,,,`
    );
    rows.push(
      `overtime,team2Player,${escapeCSV(data.overtime.team2Player)},,,,,,`
    );

    const csv = rows.join("\n");
    const blob = new Blob(["\uFEFF" + csv], {
      type: "text/csv;charset=utf-8;",
    }); // Add BOM for Excel
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "tournament_data.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  const importCSV = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const lines = text.split("\n").slice(1); // Skip header

      const newData = defaultData();
      const newSongInfoMap: SongInfoMap = {};

      lines.forEach((line) => {
        if (!line.trim()) return;

        // Parse CSV with proper quote handling
        const values: string[] = [];
        let current = "";
        let inQuotes = false;

        for (let i = 0; i < line.length; i++) {
          const char = line[i];
          if (char === '"') {
            if (inQuotes && line[i + 1] === '"') {
              current += '"';
              i++; // Skip next quote
            } else {
              inQuotes = !inQuotes;
            }
          } else if (char === "," && !inQuotes) {
            values.push(current.trim());
            current = "";
          } else {
            current += char;
          }
        }
        values.push(current.trim());

        if (values.length < 3) return;

        const [section, key, value, title, artist, jacket, level, type, date] =
          values;

        // Store song info if available
        if (title && title.trim()) {
          const roundMatch = section.match(/round(\d+)/);
          if (roundMatch) {
            const roundIdx = Number.parseInt(roundMatch[1]) - 1;
            // Fix the key format - remove duplicate array index handling
            let infoKey: string;
            if (key.includes("_")) {
              const keyParts = key.split("_");
              const baseKey = keyParts.slice(0, -1).join("_");
              const arrayIdx = keyParts[keyParts.length - 1];
              infoKey = `round${roundIdx}_${baseKey}_${arrayIdx}`;
            } else {
              infoKey = `round${roundIdx}_${key}`;
            }

            newSongInfoMap[infoKey] = {
              title: title.trim(),
              artist: artist?.trim() || "",
              jacket: jacket?.trim() || "",
              level: Number.parseInt(level) || 0,
              type: type?.trim() || "",
              date: date?.trim() || "",
            };
          } else if (section === "overtime" && key === "designatedSong") {
            // ✅ 연장전 지정곡 SongInfo 저장
            newSongInfoMap["overtime_designatedSong"] = {
              title: title.trim(),
              artist: artist?.trim() || "",
              jacket: jacket?.trim() || "",
              level: Number.parseInt(level) || 0,
              type: type?.trim() || "",
              date: date?.trim() || "",
            };
          }
        }

        // Restore data values
        if (section === "team") {
          if (key === "team1Name") newData.team1.name = value;
          else if (key === "team2Name") newData.team2.name = value;
          else if (key.startsWith("team1Player")) {
            const idx = Number.parseInt(key.replace("team1Player", "")) - 1;
            if (idx >= 0 && idx < 3) newData.team1.players[idx] = value;
          } else if (key.startsWith("team2Player")) {
            const idx = Number.parseInt(key.replace("team2Player", "")) - 1;
            if (idx >= 0 && idx < 3) newData.team2.players[idx] = value;
          } else if (key === "recordingUploadUrl") {
            newData.recordingUploadUrl = value || DEFAULT_RECORDING_UPLOAD_URL;
          } else if (key === "tournamentDivision") {
            newData.tournamentDivision = value === "major" ? "major" : "minor";
          }
        } else if (section.startsWith("round")) {
          const roundIdx = Number.parseInt(section.replace("round", "")) - 1;
          if (roundIdx >= 0 && roundIdx < 4) {
            const keyParts = key.split("_");
            const lastPart = keyParts[keyParts.length - 1];
            const isArrayIndex = !isNaN(Number.parseInt(lastPart));

            if (isArrayIndex) {
              const baseKey = keyParts.slice(0, -1).join("_");
              const arrayIdx = Number.parseInt(lastPart);

              const round = newData.rounds[roundIdx] as unknown as Record<
                string,
                unknown
              >;
              if (!round[baseKey]) {
                // Initialize array based on key type
                if (
                  baseKey.includes("SongsLong") ||
                  baseKey.includes("Strategy17") ||
                  baseKey.includes("Strategy18")
                ) {
                  round[baseKey] = ["", "", "", "", ""];
                } else if (baseKey.includes("Songs2")) {
                  round[baseKey] = ["", ""];
                } else if (
                  baseKey.includes("Songs") ||
                  baseKey.includes("StrategyOptions")
                ) {
                  round[baseKey] = ["", "", ""];
                } else if (baseKey.includes("Players")) {
                  round[baseKey] = ["", ""];
                } else {
                  round[baseKey] = [];
                }
              }
              const arr = round[baseKey] as string[];
              while (arr.length <= arrayIdx) {
                arr.push("");
              }
              arr[arrayIdx] = value;
            } else {
              const round = newData.rounds[roundIdx] as unknown as Record<
                string,
                unknown
              >;
              if (value.toLowerCase() === "true") {
                round[key] = true;
              } else if (value.toLowerCase() === "false") {
                round[key] = false;
              } else {
                round[key] = value;
              }
            }
          }
        } else if (section === "overtime") {
          // 🔽 여기 추가
          if (key === "roomNumber") {
            newData.overtime.roomNumber = value;
          } else if (key === "designatedSong") {
            newData.overtime.designatedSong = value;
          } else if (key === "team1Player") {
            newData.overtime.team1Player = value;
          } else if (key === "team2Player") {
            newData.overtime.team2Player = value;
          }
        }
      });

      newData.songInfoMap = newSongInfoMap;
      setData(newData);
    };
    reader.readAsText(file);
    e.target.value = "";
  }, []);

  const generateRecordingStartScript = (roundIdx: number) => {
    return `# 녹화 시작 안내
* ${roundIdx + 1}라운드 출전 선수분들 녹화 시작하셨으면 말씀 부탁드립니다.
- ${
      roundIdx + 1
    }라운드 출전 선수분들 타건음 마이크 음소거 한번 더 확인 부탁드립니다.

## ⚠️ EX-SCORE 표기 사용 금지
- **EX-SCORE 표기 사용 시 해당 곡은 0점 처리됩니다. 반드시 일반 스코어 표기를 사용해 주세요.**`;
  };

  const generateRecordingEndScript = (roundIdx: number) => {
    const uploadUrl = data.recordingUploadUrl || DEFAULT_RECORDING_UPLOAD_URL;
    return `# 녹화 종료 안내
* ${roundIdx + 1}라운드 출전 선수분들 녹화 종료 부탁드립니다.
* 녹화하신 영상을 ${uploadUrl} 으로 파일 이름을 **플레이어_라운드** 형식으로 수정하여 전송 부탁드립니다.
-# 예시) 고갱_${roundIdx + 1}라운드`;
  };

  const generateEntryScript = (roundIdx: number) => {
    const round = data.rounds[roundIdx];
    const isRound13 = roundIdx === 0 || roundIdx === 2;
    const isRound4 = roundIdx === 3;

    if (isRound13) {
      const team1Players = round.team1Players?.join(" ") || "";
      const team2Players = round.team2Players?.join(" ") || "";
      const team1Songs = round.team1Songs?.join(" , ") || "";
      const team2Songs = round.team2Songs?.join(" , ") || "";

      return `# ${roundIdx + 1}라운드 엔트리
* **팀 ${data.team1.name} : ${team1Players}**
  * 팀 **${data.team1.name}** 선곡 : **${team1Songs}**
* **팀 ${data.team2.name} : ${team2Players}**
  * 팀 **${data.team2.name}** 선곡 : **${team2Songs}**
## 밴 카드 및 스트래티지 카드 사용여부를 ${
        round.deadline || "??:??"
      }까지 결정하여 팀 채널에서 알려주시기 바랍니다!
* 밴 카드를 먼저 사용 후, 스트래티지 카드 사용 여부를 결정하여 주세요.
* 스트래티지 카드 사용을 하지 않는 경우, 사용하지 않는다고 알려주셔야 합니다.`;
    } else if (isRound4) {
      const team1Songs = round.team1Songs2?.join(" , ") || "";
      const team2Songs = round.team2Songs2?.join(" , ") || "";

      return `# ${roundIdx + 1}라운드 엔트리
* **팀 ${data.team1.name} : ${round.team1Player || ""}**
  * 팀 **${data.team1.name}** 선곡 : **${team1Songs}**
* **팀 ${data.team2.name} : ${round.team2Player || ""}**
  * 팀 **${data.team2.name}** 선곡 : **${team2Songs}**
## 밴 카드 사용여부를 ${
        round.deadline || "??:??"
      }까지 결정하여 팀 채널에서 알려주시기 바랍니다!
- 각 팀에서 밴픽이 종료된 후 추첨곡 및 과제곡 추첨이 진행됩니다.`;
    } else {
      const team1Songs = round.team1SongsLong?.join(" , ") || "";
      const team2Songs = round.team2SongsLong?.join(" , ") || "";

      return `# ${roundIdx + 1}라운드 엔트리
* **팀 ${data.team1.name} : ${round.team1Player || ""}**
  * 팀 **${data.team1.name}** 선곡 : **${team1Songs}**
* **팀 ${data.team2.name} : ${round.team2Player || ""}**
  * 팀 **${data.team2.name}** 선곡 : **${team2Songs}**
## 스트래티지 카드를 ${
        round.deadline || "??:??"
      }까지 결정하여 팀 채널에서 알려주시기 바랍니다!
* 스트래티지 카드 사용을 하지 않는 경우, 사용하지 않는다고 알려주셔야 합니다.`;
    }
  };

  const generateStrategyScript = (roundIdx: number, teamIdx: 1 | 2) => {
    const round = data.rounds[roundIdx];
    const teamName = teamIdx === 1 ? data.team1.name : data.team2.name;

    // ✅ 1,3라운드: 기존 포맷 유지 (랜덤 3곡)
    if (roundIdx === 0 || roundIdx === 2) {
      const options =
        teamIdx === 1 ? round.team1StrategyOptions : round.team2StrategyOptions;

      if (!options || options.every((o) => !o)) return "";

      const filtered = options.filter((o) => o && o.trim());
      if (filtered.length === 0) return "";

      return `# 팀 ${teamName}이 ${
        roundIdx + 1
      }라운드 스트래티지 카드를 사용하였습니다!
## 랜덤으로 뽑힌 곡들 중에서 하나를 선택해주시길 바랍니다.
${filtered.map((song) => `* ${song}`).join("\n")}`;
    }

    // ✅ 2라운드: 마이너 17/18, 메이저 18/19 후보에서 선택
    if (roundIdx === 1) {
      const options17 =
        (teamIdx === 1 ? round.team1Strategy17 : round.team2Strategy17) || [];
      const options18 =
        (teamIdx === 1 ? round.team1Strategy18 : round.team2Strategy18) || [];
      const strategyLevel17Label = getRound2StrategyLevelLabel(17);
      const strategyLevel18Label = getRound2StrategyLevelLabel(18);

      const has17 = options17.some((o) => o && o.trim());
      const has18 = options18.some((o) => o && o.trim());
      if (!has17 && !has18) return "";

      let script = `# 팀 ${teamName}이 ${
        roundIdx + 1
      }라운드 스트래티지 카드를 사용하였습니다!
## 아래 곡들 중에서 **상대 자선곡에 사용할 스트래티지 곡**을 1곡 선택해주시길 바랍니다.\n`;

      if (has17) {
        script += `\n### ${strategyLevel17Label}레벨 후보\n${options17
          .filter((s) => s && s.trim())
          .map((s) => `* ${s}`)
          .join("\n")}`;
      }

      if (has18) {
        script += `\n\n### ${strategyLevel18Label}레벨 후보\n${options18
          .filter((s) => s && s.trim())
          .map((s) => `* ${s}`)
          .join("\n")}`;
      }

      return script;
    }

    // 다른 라운드는 현재 스트래티지 없음
    return "";
  };

  const generateArenaEntryScript = (roundIdx: number) => {
    const round = data.rounds[roundIdx];
    const isRound13 = roundIdx === 0 || roundIdx === 2;
    const isRound4 = roundIdx === 3;

    if (isRound13) {
      const team1Players = round.team1Players || ["", ""];
      const team1Songs = round.team1Songs || ["", "", ""];
      const team2Players = round.team2Players || ["", ""];
      const team2Songs = round.team2Songs || ["", "", ""];
      const team1Banned = round.team1BannedSong;
      const team2Banned = round.team2BannedSong;
      const team1StrategyTarget = round.team1StrategyTarget;
      const team1StrategySelected = round.team1StrategySelected;
      const team2StrategyTarget = round.team2StrategyTarget;
      const team2StrategySelected = round.team2StrategySelected;

      const team1FinalSongs = team1Songs.map((song) => {
        if (
          round.team2StrategyUsed &&
          song === team2StrategyTarget &&
          team2StrategySelected
        ) {
          return team2StrategySelected;
        }
        return song;
      });

      const team2FinalSongs = team2Songs.map((song) => {
        if (
          round.team1StrategyUsed &&
          song === team1StrategyTarget &&
          team1StrategySelected
        ) {
          return team1StrategySelected;
        }
        return song;
      });

      const team1PlayableSongs = team1FinalSongs.filter(
        (song) => song && song !== team2Banned
      );
      const team2PlayableSongs = team2FinalSongs.filter(
        (song) => song && song !== team1Banned
      );

      let script = `# ${roundIdx + 1}라운드 출전 선수 아레나 방번호 ${
        round.roomNumber || "??????"
      } 로 입장해주세요\n`;

      team1PlayableSongs.forEach((song, idx) => {
        if (idx < 2 && team1Players[idx]) {
          script += `* 팀 **${data.team1.name}** 의 **${team1Players[idx]}** 선수는 자선곡 **${song}**을(를) 선곡해주세요.\n`;
        }
      });

      if (team2Banned) {
        script += `* 팀 **${data.team1.name}** 의 자선곡 ~~${team2Banned}~~는 밴 당하였습니다.\n\n`;
      }

      team2PlayableSongs.forEach((song, idx) => {
        if (idx < 2 && team2Players[idx]) {
          script += `* 팀 **${data.team2.name}** 의 **${team2Players[idx]}** 선수는 자선곡 **${song}**을(를) 선곡해주세요.\n`;
        }
      });

      if (team1Banned) {
        script += `* 팀 **${data.team2.name}** 의 자선곡 ~~${team1Banned}~~는 밴 당하였습니다.\n`;
      }

      script += `\n종료 후 나오는 리절트 창 촬영 부탁드립니다.\n`;

      // if (!round.team1StrategyUsed && !round.team2StrategyUsed) {
      //   script += `\n## 스트래티지 카드는 사용되지 않았습니다.`;
      // } else {
      //   if (
      //     round.team1StrategyUsed &&
      //     team1StrategyTarget &&
      //     team1StrategySelected
      //   ) {
      //     if (team1StrategySelected === team1StrategyTarget) {
      //       script += `\n## 팀 ${data.team1.name} 에서 ${team1StrategyTarget} 곡에 스트래티지 카드를 사용하였으나, 선곡을 변경하지 않았습니다.`;
      //     } else {
      //       script += `\n## 팀 ${data.team1.name} 에서 ${team1StrategyTarget} 곡에 스트래티지 카드를 사용하여 무작위 선곡인 ${team1StrategySelected} 으로 변경되었습니다.`;
      //     }
      //   }
      //   if (
      //     round.team2StrategyUsed &&
      //     team2StrategyTarget &&
      //     team2StrategySelected
      //   ) {
      //     if (team2StrategySelected === team2StrategyTarget) {
      //       script += `\n## 팀 ${data.team2.name} 에서 ${team2StrategyTarget} 곡에 스트래티지 카드를 사용하였으나, 선곡을 변경하지 않았습니다.`;
      //     } else {
      //       script += `\n## 팀 ${data.team2.name} 에서 ${team2StrategyTarget} 곡에 스트래티지 카드를 사용하여 무작위 선곡인 ${team2StrategySelected} 으로 변경되었습니다.`;
      //     }
      //   }
      // }
      //
      // 🔹 팀1 스트래티지 멘트
      const t1Message = buildStrategyMessage(
        data.team1.name,
        round.team1StrategyUsed,
        round.team1StrategyTarget || null,
        round.team1StrategySelected || null
      );

      // 🔹 팀2 스트래티지 멘트
      const t2Message = buildStrategyMessage(
        data.team2.name,
        round.team2StrategyUsed,
        round.team2StrategyTarget || null,
        round.team2StrategySelected || null
      );

      // @@@@@@@@@@@@@@@@@@@
      if (!round.team1StrategyUsed && !round.team2StrategyUsed) {
        script += `\n## 스트래티지 카드는 사용되지 않았습니다.\n`;
      } else {
        if (round.team1StrategyUsed) script += `\n${t1Message}\n`;
        if (round.team2StrategyUsed) script += `\n${t2Message}\n`;
      }

      //@@@@@@@@@@@@@@@@@@@@@@@@@
      return script;
    } else if (isRound4) {
      const team1Songs = round.team1Songs2 || ["", ""];
      const team2Songs = round.team2Songs2 || ["", ""];
      const team1Banned = round.team1BannedSong4 || "";
      const team2Banned = round.team2BannedSong4 || "";

      // 상대 팀이 밴한 곡을 제외하고 플레이 가능한 자선곡 선택
      const team1PlayableSong =
        team1Songs.find((song) => song && song !== team2Banned) ||
        team1Songs[0] ||
        "????";
      const team2PlayableSong =
        team2Songs.find((song) => song && song !== team1Banned) ||
        team2Songs[0] ||
        "????";

      const room = round.roomNumber || "219219"; // 기본값 원하는 대로
      const team1Name = data.team1.name || "X";
      const team2Name = data.team2.name || "X";
      const team1Player = round.team1Player || "X";
      const team2Player = round.team2Player || "X";
      const stage3 = round.stage3DesignatedSong || "????";
      const stage4 = round.stage4DesignatedSong || "????";

      let script = "";

      // 4TRACK 지정곡 안내
      script += `# 4TRACK 지정곡 : ${stage3} / ${stage4}\n`;
      script += `# ${
        roundIdx + 1
      }라운드 출전선수 싱글배틀 방번호 ${room} 로 입장해주세요\n`;

      // 팀1 안내
      script += `* 팀 **${team1Name}** 의 **${team1Player}** 선수는 자선곡 **${team1PlayableSong}** 을 **1번째로 골라주시고**, 지정곡 **${stage3}** 을 **두번째로 골라주시기 바랍니다.**\n`;

      // 팀1 쪽 곡을 팀2가 밴한 경우 (team2BannedSong4 = 팀2가 밴한 팀1 곡)
      if (team2Banned) {
        script += `\n* 팀 **${team1Name}** 의 자선곡 **~~${team2Banned}~~** 는 밴 당하였습니다.\n\n`;
      }

      // 팀2 안내
      script += `\n* 팀 **${team2Name}** 의 **${team2Player}** 선수는 자선곡 **${team2PlayableSong}** 을 **1번째로 골라주시고**, 지정곡 **${stage4}** 을 **두번째로 골라주시기 바랍니다.**\n`;

      // 팀2 쪽 곡을 팀1이 밴한 경우 (team1BannedSong4 = 팀1이 밴한 팀2 곡)
      if (team1Banned) {
        script += `\n* 팀 **${team2Name}** 의 자선곡 **~~${team1Banned}~~** 는 밴 당하였습니다.\n`;
      }

      // 마지막 안내 문장
      script += `\n# 종료 후 나오는 서브 스크린 결과창 촬영 부탁드립니다.\n`;

      return script;
    } else {
      const room = round.roomNumber || "111999";

      const team1Name = data.team1.name || "X";
      const team2Name = data.team2.name || "X";
      const team1Player = round.team1Player || "X";
      const team2Player = round.team2Player || "X";

      const rawTeam1Songs = round.team1SongsLong || [];
      const rawTeam2Songs = round.team2SongsLong || [];

      // 상대팀 스트래티지 적용 후 최종 곡 리스트
      const team1FinalSongs = rawTeam1Songs.map((song) => {
        if (
          round.team2StrategyUsed &&
          round.team2StrategyTarget === song &&
          round.team2StrategySelected
        ) {
          return round.team2StrategySelected;
        }
        return song;
      });

      const team2FinalSongs = rawTeam2Songs.map((song) => {
        if (
          round.team1StrategyUsed &&
          round.team1StrategyTarget === song &&
          round.team1StrategySelected
        ) {
          return round.team1StrategySelected;
        }
        return song;
      });

      let script = `# 2라운드 출전 선수 메가믹스 ${room} 로 입장해주세요\n`;

      // 팀1 안내
      script += `* 팀 **${team1Name}** 의 **${team1Player}** 선수는 자선곡인 다음 5곡을 선곡해주세요.\n`;
      team1FinalSongs.forEach((song) => {
        if (song && song.trim()) {
          script += `  * **${song}**\n`;
        }
      });

      script += `\n`;

      // 팀2 안내
      script += `* 팀 **${team2Name}** 의 **${team2Player}** 선수는 자선곡인 다음 5곡을 선곡해주세요.\n`;
      team2FinalSongs.forEach((song) => {
        if (song && song.trim()) {
          script += `  * **${song}**\n`;
        }
      });

      // ==== 스트래티지 멘트 ====
      const t1HasStrategy =
        round.team1StrategyUsed &&
        !!round.team1StrategyTarget &&
        !!round.team1StrategySelected;

      const t2HasStrategy =
        round.team2StrategyUsed &&
        !!round.team2StrategyTarget &&
        !!round.team2StrategySelected;

      // if (!t1HasStrategy && !t2HasStrategy) {
      //   // (스트래티지 미사용)
      //   script += `\n## 스트래티지 카드는 사용되지 않았습니다.\n`;
      // } else {
      //   // 팀1 스트래티지
      //   if (t1HasStrategy) {
      //     if (round.team1StrategySelected === round.team1StrategyTarget) {
      //       // (스트래티지 사용했으나 미변경)
      //       script += `\n## 팀 ${team1Name} 에서 ${round.team1StrategyTarget} 곡에 스트래티지 카드를 사용하였으나, 선곡을 변경하지 않았습니다.\n`;
      //     } else {
      //       // (스트래티지 사용 후 변경)
      //       script += `\n## 팀 ${team1Name} 에서 ${round.team1StrategyTarget} 곡에 스트래티지 카드를 사용하여 무작위 선곡인 ${round.team1StrategySelected} 으로 변경되었습니다.\n`;
      //     }
      //   }

      //   // 팀2 스트래티지
      //   if (t2HasStrategy) {
      //     if (round.team2StrategySelected === round.team2StrategyTarget) {
      //       // (스트래티지 사용했으나 미변경)
      //       script += `\n## 팀 ${team2Name} 에서 ${round.team2StrategyTarget} 곡에 스트래티지 카드를 사용하였으나, 선곡을 변경하지 않았습니다.\n`;
      //     } else {
      //       // (스트래티지 사용 후 변경)
      //       script += `\n## 팀 ${team2Name} 에서 ${round.team2StrategyTarget} 곡에 스트래티지 카드를 사용하여 무작위 선곡인 ${round.team2StrategySelected} 으로 변경되었습니다.\n`;
      //     }
      //   }
      // }
      //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      // 🔹 팀1 스트래티지 멘트
      const t1Message = buildStrategyMessage(
        data.team1.name,
        round.team1StrategyUsed,
        round.team1StrategyTarget || null,
        round.team1StrategySelected || null
      );

      // 🔹 팀2 스트래티지 멘트
      const t2Message = buildStrategyMessage(
        data.team2.name,
        round.team2StrategyUsed,
        round.team2StrategyTarget || null,
        round.team2StrategySelected || null
      );

      // 🔹 출력 규칙
      if (!round.team1StrategyUsed && !round.team2StrategyUsed) {
        script += `\n## 스트래티지 카드는 사용되지 않았습니다.\n`;
      } else {
        if (round.team1StrategyUsed) script += `\n${t1Message}\n`;
        if (round.team2StrategyUsed) script += `\n${t2Message}\n`;
      }

      script += `\n# 종료 후 나오는 메인스크린 결과창 촬영 부탁드립니다.\n`;

      return script;
    }

    /*
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    */
  };
  const generateOvertimeRecordingStartScript = () => {
    return `# 연장전 녹화 시작 안내
* 연장전 출전 선수분들 녹화 시작하셨으면 말씀 부탁드립니다.
* 연장전 출전 선수분들 타건음 마이크 음소거 한번 더 확인 부탁드립니다.`;
  };

  const generateOvertimeRecordingEndScript = () => {
    const uploadUrl = data.recordingUploadUrl || DEFAULT_RECORDING_UPLOAD_URL;
    return `# 연장전 녹화 종료 안내
* 연장전 출전 선수분들 녹화 종료 부탁드립니다.
* 녹화하신 영상을 ${uploadUrl} 으로 파일 이름을 **플레이어_연장전** 형식으로 수정하여 전송 부탁드립니다.
-# 예시) 고갱_연장전`;
  };

  const generateOvertimeScript = (data: TournamentData) => {
    const song = data.overtime.designatedSong || "LubedeR";
    const room = data.overtime.roomNumber || "219219";

    return `# 연장전 안내
* 양 팀의 세트 스코어가 동률이므로 연장전을 진행합니다.
# 연장전 지정곡 : ${song}
# 연장전 출전 선수 아레나배틀 방번호 ${room} 로 입장해주세요
* 2ND TRACK~FINAL TRACK의 경우 플레이 하셔도 무방하오나 최종 결과엔 반영되지 않습니다.
  * 1ST TRACK 결과가 최종 결과에 반영됩니다.`;
  };

  const generateRound4ArenaEntryScript = () => {
    const round = data.rounds[3];
    const team1Songs = round.team1Songs2 || ["", ""];
    const team2Songs = round.team2Songs2 || ["", ""];
    const team1Banned = round.team1BannedSong4 || "";
    const team2Banned = round.team2BannedSong4 || "";

    const team1PlayableSong =
      team1Songs.find((song) => song && song !== team2Banned) ||
      team1Songs[0] ||
      "미정";
    const team2PlayableSong =
      team2Songs.find((song) => song && song !== team1Banned) ||
      team2Songs[0] ||
      "미정";

    const room = round.roomNumber || "219219";
    const team1Name = data.team1.name || "1팀";
    const team2Name = data.team2.name || "2팀";
    const team1Player = round.team1Player || "미정";
    const team2Player = round.team2Player || "미정";
    const team1ArenaPlayer = round.team1ArenaPlayer || "미정";
    const team2ArenaPlayer = round.team2ArenaPlayer || "미정";
    const stage3 = round.stage3DesignatedSong || "미정";
    const stage4 = round.stage4DesignatedSong || "미정";

    let script = `# 4TRACK 지정곡: ${stage3} / ${stage4}\n`;
    script += `# 4라운드 출전 선수분들은 아레나 배틀 방 번호 ${room}로 입장해 주세요.\n\n`;
    script += `팀 ${team1Name}의 ${team1Player} 선수는 자선곡 **${team1PlayableSong}**을 선택해 주시고,\n`;
    script += `${team1ArenaPlayer} 선수는 지정곡 **${stage3}**을 선택해 주시기 바랍니다.\n`;

    if (team2Banned) {
      script += `\n팀 ${team1Name}의 자선곡 **${team2Banned}**은 밴되었습니다.\n`;
    }

    script += `\n\n팀 ${team2Name}의 ${team2Player} 선수는 자선곡 **${team2PlayableSong}**을 선택해 주시고,\n`;
    script += `${team2ArenaPlayer} 선수는 지정곡 **${stage4}**을 선택해 주시기 바랍니다.\n`;

    if (team1Banned) {
      script += `\n팀 ${team2Name}의 자선곡 **${team1Banned}**은 밴되었습니다.\n`;
    }

    script += `\n경기 종료 후 서브 스크린에 표시되는 결과 화면을 촬영해 주세요.\n\n## ⚠️ 보조 선수 플레이 금지\n- **원활한 경기 진행을 위해 보조 선수분들께서는 플레이하지 말아 주시기 바랍니다.**`;

    return script;
  };

  const BanSelectDropdown = ({
    value,
    songs,
    onChange,
    placeholder,
  }: {
    value: string;
    songs: string[];
    onChange: (value: string) => void;
    placeholder: string;
  }) => (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-8 text-sm">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="none">없음</SelectItem>
        {songs.filter(Boolean).map((song, idx) => (
          <SelectItem key={idx} value={song}>
            {song}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );

  const StrategyTargetDropdown = ({
    value,
    songs,
    onChange,
    placeholder,
  }: {
    value: string;
    songs: string[];
    onChange: (value: string) => void;
    placeholder: string;
  }) => (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-8 text-sm">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="none">없음</SelectItem>
        {songs.filter(Boolean).map((song, idx) => (
          <SelectItem key={idx} value={song}>
            {song}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );

  const StrategySelectedDropdown = ({
    value,
    options,
    onChange,
    placeholder,
  }: {
    value: string;
    options: string[];
    onChange: (value: string) => void;
    placeholder: string;
  }) => (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-8 text-sm">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="none">없음</SelectItem>
        {options.filter(Boolean).map((option, idx) => (
          <SelectItem key={idx} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );

  const ScriptCard = ({
    title,
    script,
    id,
  }: {
    title: string;
    script: string;
    id: string;
  }) => (
    <Card className="bg-muted/30">
      <CardHeader className="py-2 px-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => copyToClipboard(script, id)}
          >
            {copiedId === id ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-3 pb-2">
        <pre className="text-xs whitespace-pre-wrap text-muted-foreground max-h-40 overflow-y-auto">
          {script}
        </pre>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <canvas ref={canvasRef} className="hidden" />

      {notification && (
        <div
          className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-lg shadow-lg animate-in fade-in slide-in-from-top-2 ${
            notification.type === "error"
              ? "bg-red-500/90 text-white"
              : "bg-green-500/90 text-white"
          }`}
        >
          <div className="flex items-center gap-2">
            {notification.type === "error" ? (
              <X className="h-4 w-4" />
            ) : (
              <Check className="h-4 w-4" />
            )}
            <span className="text-sm font-medium">{notification.message}</span>
          </div>
        </div>
      )}

      {songNotFoundWarning && (
        <div className="fixed top-4 right-4 z-50 bg-yellow-500/90 text-black px-4 py-2 rounded-lg shadow-lg animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span className="text-sm font-medium">{songNotFoundWarning}</span>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            메인으로 돌아가기
          </Button>
          <h1 className="text-2xl font-bold">대회 멘트 관리</h1>
        </div>
        <div className="flex gap-2">
          <label>
            <input
              type="file"
              accept=".csv"
              onChange={importCSV}
              className="hidden"
            />
            <Button variant="outline" asChild>
              <span>
                <Upload className="h-4 w-4 mr-2" />
                Import
              </span>
            </Button>
          </label>
          <Button variant="outline" onClick={exportCSV}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Song Search Dialog */}
      <Dialog open={songSearchOpen} onOpenChange={setSongSearchOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-visible">
          <DialogHeader>
            <DialogTitle>곡 검색</DialogTitle>
            <DialogDescription className="sr-only">
              대회에 사용할 곡을 검색하고 선택하는 창입니다.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-2 mb-4">
            <Input
              placeholder="곡명 또는 아티스트 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
              autoFocus
            />
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="w-24">
                <SelectValue placeholder="레벨" />
              </SelectTrigger>
              <SelectContent position="popper" sideOffset={4}>
                <SelectItem value="all">전체</SelectItem>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((level) => (
                  <SelectItem key={level} value={level.toString()}>
                    Lv.{level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <ScrollArea className="h-[400px]">
            <div className="space-y-1">
              {filteredCharts.slice(0, 100).map((chart, idx) => (
                <div
                  key={`${chart.songIdx}-${chart.chartIdx}-${idx}`}
                  className="flex items-center gap-3 p-2 rounded hover:bg-muted cursor-pointer"
                  onClick={() => handleSelectSong(chart)}
                >
                  {chart.jacket && (
                    <Image
                      src={chart.jacket || "/placeholder.svg"}
                      alt={chart.title}
                      width={40}
                      height={40}
                      className="rounded flex-shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{chart.title}</div>
                    <div className="text-sm text-muted-foreground truncate">
                      {chart.artist}
                    </div>
                  </div>
                  <div className="text-sm font-medium px-2 py-1 bg-muted rounded flex-shrink-0">
                    {getTypeLabel(chart.type)} Lv.{chart.level}
                  </div>
                </div>
              ))}
              {filteredCharts.length === 0 && searchQuery && (
                <div className="text-center text-muted-foreground py-4">
                  검색 결과가 없습니다
                </div>
              )}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Dialog open={imageDialogOpen} onOpenChange={setImageDialogOpen}>
        <DialogContent
          className="
      w-full
      max-w-[min(1100px,100vw-32px)]
      max-h-[90vh]
      overflow-y-auto
    "
        >
          <DialogHeader>
            <DialogTitle>
              {imageRoundIdx + 1}라운드 선곡 목록 이미지
            </DialogTitle>
            <DialogDescription className="sr-only">
              선택한 라운드의 선곡 목록 이미지를 확인하고 복사/다운로드할 수
              있는 창입니다.
            </DialogDescription>
          </DialogHeader>

          {/* 본문 영역 */}
          {/* flex-1 / overflow-hidden 제거해서 내용이 필요하면 아래로 더 늘어날 수 있게 */}
          <div className="flex flex-col gap-4">
            {/* 위: 전체 이미지 (스크롤 가능) */}
            <div className="flex justify-center overflow-auto max-h-[60vh]">
              {generatedImage ? (
                <img
                  src={generatedImage}
                  alt="Generated Song List"
                  className="max-w-full border rounded"
                />
              ) : (
                <canvas ref={canvasRef} className="max-w-full border rounded" />
              )}
            </div>

            {/* 아래: 단일 카드 선택 + 버튼들 */}
            {/* 좁은 화면에서 줄바꿈 되도록 flex-wrap + w-full 추가 */}
            <div className="shrink-0 w-full flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:justify-between">
              <div className="flex items-center gap-2">
                <Label className="text-xs">단일 카드 다운로드 대상곡</Label>

                {currentSongsForRound.length > 0 ? (
                  <Select
                    value={
                      selectedSongIndex !== null
                        ? String(selectedSongIndex)
                        : undefined
                    }
                    onValueChange={(v) => setSelectedSongIndex(Number(v))}
                  >
                    <SelectTrigger className="w-64 h-8 text-xs">
                      <SelectValue placeholder="곡 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      {currentSongsForRound.map((s, idx) => (
                        <SelectItem key={idx} value={String(idx)}>
                          {`${s.team} / ${s.player || "??"} / ${s.songName}`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <span className="text-xs text-muted-foreground">
                    선택 가능한 곡이 없습니다
                  </span>
                )}
              </div>

              {/* 버튼 묶음: flex-wrap + w-full 로 오른쪽이 잘리지 않게 */}
              <div className="flex flex-wrap justify-end gap-2 w-full md:w-auto">
                <Button variant="outline" onClick={downloadImage}>
                  <Download className="h-4 w-4 mr-2" />
                  전체 이미지 다운로드
                </Button>

                <Button
                  variant="outline"
                  onClick={handleDownloadSingleCard}
                  disabled={
                    currentSongsForRound.length === 0 ||
                    selectedSongIndex === null
                  }
                >
                  <Download className="h-4 w-4 mr-2" />
                  선택 곡 카드 다운로드
                </Button>
                {/* ✅ 옵션 입력 UI */}
                <div className="flex flex-wrap items-center gap-2 border rounded-md px-2 py-1">
                  <Label className="text-xs">제목 옵션</Label>

                  {/* 줄 수 선택 */}
                  <Select
                    value={String(singleCardTitleLines)}
                    onValueChange={(v) =>
                      setSingleCardTitleLines(Number(v) as 1 | 2 | 3)
                    }
                  >
                    <SelectTrigger className="w-[84px] h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1줄</SelectItem>
                      <SelectItem value="2">2줄</SelectItem>
                      <SelectItem value="3">3줄</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* 폰트 크기(px) */}
                  <div className="flex items-center gap-1">
                    <Input
                      type="number"
                      className="w-[92px] h-8 text-xs"
                      value={singleCardTitleFontSize}
                      min={10}
                      max={140}
                      step={2}
                      onChange={(e) =>
                        setSingleCardTitleFontSize(Number(e.target.value))
                      }
                    />
                    <span className="text-[11px] text-muted-foreground">
                      px
                    </span>
                  </div>

                  {/* (선택) 줄 간격 */}
                  <div className="flex items-center gap-1">
                    <Input
                      type="number"
                      className="w-[80px] h-8 text-xs"
                      value={singleCardTitleLineGap}
                      min={0}
                      max={40}
                      step={1}
                      onChange={(e) =>
                        setSingleCardTitleLineGap(Number(e.target.value))
                      }
                    />
                    <span className="text-[11px] text-muted-foreground">
                      gap
                    </span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={handleDownloadOptionCard}
                  disabled={
                    currentSongsForRound.length === 0 ||
                    selectedSongIndex === null
                  }
                >
                  <Download className="h-4 w-4 mr-2" />
                  옵션 카드 다운로드
                </Button>
                <Button
                  variant="outline"
                  onClick={handleDownloadAllOptionCards}
                  disabled={currentSongsForRound.length === 0}
                >
                  <Download className="h-4 w-4 mr-2" />
                  옵션 카드 ZIP 다운로드
                </Button>
                <Button
                  variant="outline"
                  onClick={handleDownloadAllJackets}
                  disabled={currentSongsForRound.length === 0}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Jacket ZIP 다운로드
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDownloadTitleGif}
                >
                  제목 GIF 다운로드
                </Button>
                <Button onClick={copyImageToClipboard}>
                  {copiedId === "image" ? (
                    <Check className="h-4 w-4 mr-2" />
                  ) : (
                    <Copy className="h-4 w-4 mr-2" />
                  )}
                  클립보드에 복사
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Tabs defaultValue="teams" className="space-y-4">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="teams">팀 정보</TabsTrigger>
          <TabsTrigger value="round1">1라운드</TabsTrigger>
          <TabsTrigger value="round2">2라운드</TabsTrigger>
          <TabsTrigger value="round3">3라운드</TabsTrigger>
          <TabsTrigger value="round4">4라운드-싱글</TabsTrigger>
          <TabsTrigger value="round4arena">4라운드-아레나</TabsTrigger>
          <TabsTrigger value="overtime">연장전</TabsTrigger>
          <TabsTrigger value="common">공통 멘트</TabsTrigger>
        </TabsList>

        {/* Teams Tab */}
        <TabsContent value="teams" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Jacket 다운로드</CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                onClick={handleDownloadTournamentJackets}
                disabled={getTournamentJacketItems().length === 0}
              >
                <Download className="h-4 w-4 mr-2" />
                모든 라운드 Jacket ZIP 다운로드
              </Button>
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-2 gap-4">
            {[1, 2].map((teamIdx) => (
              <Card key={teamIdx}>
                <CardHeader>
                  <CardTitle>팀 {teamIdx}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <Label>팀 이름</Label>
                    <Input
                      value={data[`team${teamIdx as 1 | 2}`].name}
                      onChange={(e) =>
                        updateTeam(teamIdx as 1 | 2, "name", e.target.value)
                      }
                      placeholder="팀 이름"
                    />
                  </div>
                  {[0, 1, 2].map((playerIdx) => (
                    <div key={playerIdx}>
                      <Label>선수 {playerIdx + 1}</Label>
                      <Input
                        value={
                          data[`team${teamIdx as 1 | 2}`].players[playerIdx]
                        }
                        onChange={(e) => {
                          const newPlayers = [
                            ...data[`team${teamIdx as 1 | 2}`].players,
                          ] as [string, string, string];
                          newPlayers[playerIdx] = e.target.value;
                          updateTeam(teamIdx as 1 | 2, "players", newPlayers);
                        }}
                        placeholder={`선수 ${playerIdx + 1} 닉네임`}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
          <Card>
            <CardHeader>
              <CardTitle>대회 설정</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between gap-4 rounded-lg border p-3">
                <div>
                  <Label htmlFor="tournament-division-major">
                    2라운드 레벨 구간
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    {data.tournamentDivision === "major"
                      ? "메이저: Lv18 / Lv19"
                      : "마이너: Lv17 / Lv18"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">마이너</span>
                  <Switch
                    id="tournament-division-major"
                    checked={data.tournamentDivision === "major"}
                    onCheckedChange={(checked) =>
                      setData((prev) => ({
                        ...prev,
                        tournamentDivision: checked ? "major" : "minor",
                      }))
                    }
                  />
                  <span className="text-sm text-muted-foreground">메이저</span>
                </div>
              </div>
              <div>
                <Label>녹화 영상 업로드 링크</Label>
                <Input
                  value={data.recordingUploadUrl}
                  onChange={(e) =>
                    setData((prev) => ({
                      ...prev,
                      recordingUploadUrl: e.target.value,
                    }))
                  }
                  placeholder={DEFAULT_RECORDING_UPLOAD_URL}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Round 1 & 3 Tabs (2v2) */}
        {[0, 2].map((roundIdx) => (
          <TabsContent
            key={roundIdx}
            value={`round${roundIdx + 1}`}
            className="space-y-4"
          >
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">공통 설정</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label>방 번호</Label>
                        <Input
                          value={data.rounds[roundIdx].roomNumber}
                          onChange={(e) =>
                            updateRound(roundIdx, "roomNumber", e.target.value)
                          }
                          placeholder="219219"
                        />
                      </div>
                      <div>
                        <Label>마감시간</Label>
                        <Input
                          value={data.rounds[roundIdx].deadline}
                          onChange={(e) =>
                            updateRound(roundIdx, "deadline", e.target.value)
                          }
                          placeholder="13:00"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-500/30 bg-blue-500/5">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-400">
                      사전 입력
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[1, 2].map((teamIdx) => (
                      <div
                        key={teamIdx}
                        className="space-y-3 p-3 bg-muted/30 rounded-lg"
                      >
                        <h4 className="font-medium">
                          팀{" "}
                          {data[`team${teamIdx as 1 | 2}`].name ||
                            `팀${teamIdx}`}
                        </h4>

                        <div>
                          <Label className="text-xs">출전 선수 (2명)</Label>
                          <div className="grid grid-cols-2 gap-2">
                            {[0, 1].map((playerIdx) => (
                              <Select
                                key={playerIdx}
                                value={
                                  (
                                    data.rounds[roundIdx][
                                      `team${teamIdx}Players` as keyof RoundData
                                    ] as string[]
                                  )?.[playerIdx] || ""
                                }
                                onValueChange={(value) => {
                                  const newPlayers = [
                                    ...((data.rounds[roundIdx][
                                      `team${teamIdx}Players` as keyof RoundData
                                    ] as string[]) || ["", ""]),
                                  ] as [string, string];
                                  newPlayers[playerIdx] = value;
                                  updateRound(
                                    roundIdx,
                                    `team${teamIdx}Players` as keyof RoundData,
                                    newPlayers
                                  );
                                }}
                              >
                                <SelectTrigger className="h-8 text-sm">
                                  <SelectValue
                                    placeholder={`선수 ${playerIdx + 1}`}
                                  />
                                </SelectTrigger>
                                <SelectContent>
                                  {data[`team${teamIdx as 1 | 2}`].players
                                    .filter(Boolean)
                                    .map((player, idx) => (
                                      <SelectItem key={idx} value={player}>
                                        {player}
                                      </SelectItem>
                                    ))}
                                </SelectContent>
                              </Select>
                            ))}
                          </div>
                        </div>

                        <div>
                          <Label className="text-xs">
                            선곡 (3곡) - 클릭하여 검색
                          </Label>
                          <div className="space-y-1">
                            {[0, 1, 2].map((songIdx) => (
                              <SongInputField
                                key={songIdx}
                                value={
                                  (
                                    data.rounds[roundIdx][
                                      `team${teamIdx}Songs` as keyof RoundData
                                    ] as string[]
                                  )?.[songIdx] || ""
                                }
                                placeholder={`곡 ${songIdx + 1} 클릭하여 검색`}
                                onClick={() =>
                                  openSongSearch(
                                    roundIdx,
                                    `team${teamIdx}Songs`,
                                    songIdx
                                  )
                                }
                                onClear={() =>
                                  clearSong(
                                    roundIdx,
                                    `team${teamIdx}Songs`,
                                    songIdx
                                  )
                                }
                              />
                            ))}
                          </div>
                        </div>

                        <div>
                          <Label className="text-xs">
                            스트래티지 랜덤 3곡 (미리 뽑기)
                          </Label>
                          <div className="space-y-1">
                            {[0, 1, 2].map((optIdx) => (
                              <SongInputField
                                key={optIdx}
                                value={
                                  (
                                    data.rounds[roundIdx][
                                      `team${teamIdx}StrategyOptions` as keyof RoundData
                                    ] as string[]
                                  )?.[optIdx] || ""
                                }
                                placeholder={`랜덤곡 ${
                                  optIdx + 1
                                } 클릭하여 검색`}
                                onClick={() =>
                                  openSongSearch(
                                    roundIdx,
                                    `team${teamIdx}StrategyOptions`,
                                    optIdx
                                  )
                                }
                                onClear={() =>
                                  clearSong(
                                    roundIdx,
                                    `team${teamIdx}StrategyOptions`,
                                    optIdx
                                  )
                                }
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-orange-500/30 bg-orange-500/5">
                  <CardHeader>
                    <CardTitle className="text-lg text-orange-400">
                      경기 진행 중
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[1, 2].map((teamIdx) => (
                      <div
                        key={teamIdx}
                        className="space-y-3 p-3 bg-muted/30 rounded-lg"
                      >
                        <h4 className="font-medium">
                          팀{" "}
                          {data[`team${teamIdx as 1 | 2}`].name ||
                            `팀${teamIdx}`}
                        </h4>

                        <div>
                          <Label className="text-xs">
                            밴할 곡 (상대 팀 선곡에서 선택)
                          </Label>
                          <BanSelectDropdown
                            value={
                              teamIdx === 1
                                ? data.rounds[roundIdx].team1BannedSong || ""
                                : data.rounds[roundIdx].team2BannedSong || ""
                            }
                            songs={getOpponentSongs(
                              data.rounds[roundIdx],
                              teamIdx as 1 | 2,
                              roundIdx
                            )}
                            onChange={(value) =>
                              updateRound(
                                roundIdx,
                                teamIdx === 1
                                  ? "team1BannedSong"
                                  : "team2BannedSong",
                                value === "none" ? "" : value
                              )
                            }
                            placeholder="밴할 곡 선택"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Switch
                              id={`r${roundIdx}-team${teamIdx}-strategy-switch`}
                              checked={getStrategyUsed(
                                data.rounds[roundIdx],
                                teamIdx as 1 | 2
                              )}
                              onCheckedChange={(checked) =>
                                updateRound(
                                  roundIdx,
                                  teamIdx === 1
                                    ? "team1StrategyUsed"
                                    : "team2StrategyUsed",
                                  checked
                                )
                              }
                            />
                            <Label
                              htmlFor={`r${roundIdx}-team${teamIdx}-strategy-switch`}
                              className="text-xs"
                            >
                              스트래티지 카드 사용
                            </Label>
                          </div>

                          {getStrategyUsed(
                            data.rounds[roundIdx],
                            teamIdx as 1 | 2
                          ) && (
                            <div className="space-y-2 pl-6">
                              <div>
                                <Label className="text-xs">
                                  대상곡 (상대 팀 곡 선택)
                                </Label>
                                <StrategyTargetDropdown
                                  value={getStrategyTarget(
                                    data.rounds[roundIdx],
                                    teamIdx as 1 | 2
                                  )}
                                  songs={getOpponentSongs(
                                    data.rounds[roundIdx],
                                    teamIdx as 1 | 2,
                                    roundIdx
                                  )}
                                  onChange={(value) =>
                                    updateRound(
                                      roundIdx,
                                      teamIdx === 1
                                        ? "team1StrategyTarget"
                                        : "team2StrategyTarget",
                                      value === "none" ? "" : value
                                    )
                                  }
                                  placeholder="대상곡 선택"
                                />
                              </div>
                              <div>
                                <Label className="text-xs">선택한 랜덤곡</Label>
                                <StrategySelectedDropdown
                                  value={getStrategySelected(
                                    data.rounds[roundIdx],
                                    teamIdx as 1 | 2
                                  )}
                                  options={
                                    (data.rounds[roundIdx][
                                      `team${teamIdx}StrategyOptions` as keyof RoundData
                                    ] as string[]) || []
                                  }
                                  onChange={(value) =>
                                    updateRound(
                                      roundIdx,
                                      teamIdx === 1
                                        ? "team1StrategySelected"
                                        : "team2StrategySelected",
                                      value === "none" ? "" : value
                                    )
                                  }
                                  placeholder="랜덤곡 선택"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => generateSongListImage(roundIdx)}
                >
                  <ImageIcon className="h-4 w-4 mr-2" />
                  선곡 목록 이미지 생성
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => generatePrePickImage(roundIdx)}
                >
                  <ImageIcon className="h-4 w-4 mr-2" />
                  (밴픽 전) 사전 픽 선곡 목록 이미지 생성
                </Button>
                {data.rounds.map((round, roundIdx) => (
                  <TabsContent key={roundIdx} value={`round${roundIdx + 1}`}>
                    {/* ... */}

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={() => handleGenerateStrategyTeam1(roundIdx)}
                      >
                        1팀 스트래티지 카드 이미지
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => handleGenerateStrategyTeam2(roundIdx)}
                      >
                        2팀 스트래티지 카드 이미지
                      </Button>
                    </div>
                  </TabsContent>
                ))}

                <ScriptCard
                  title="녹화 시작 안내"
                  script={generateRecordingStartScript(roundIdx)}
                  id={`r${roundIdx}-rec-start`}
                />
                <ScriptCard
                  title="엔트리 공개"
                  script={generateEntryScript(roundIdx)}
                  id={`r${roundIdx}-entry`}
                />
                {[1, 2].map((teamIdx) => {
                  const script = generateStrategyScript(
                    roundIdx,
                    teamIdx as 1 | 2
                  );
                  return script ? (
                    <ScriptCard
                      key={teamIdx}
                      title={`팀 ${
                        data[`team${teamIdx as 1 | 2}`].name || teamIdx
                      } 스트래티지 안내`}
                      script={script}
                      id={`r${roundIdx}-strat-${teamIdx}`}
                    />
                  ) : null;
                })}
                <ScriptCard
                  title="아레나 입장 안내"
                  script={generateArenaEntryScript(roundIdx)}
                  id={`r${roundIdx}-arena`}
                />
                <ScriptCard
                  title="녹화 종료 안내"
                  script={generateRecordingEndScript(roundIdx)}
                  id={`r${roundIdx}-rec-end`}
                />
              </div>
            </div>
          </TabsContent>
        ))}

        {/* Round 2 Tab (1v1, 5 songs) */}
        <TabsContent value="round2" className="space-y-4">
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">공통 설정</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>방 번호</Label>
                      <Input
                        value={data.rounds[1].roomNumber}
                        onChange={(e) =>
                          updateRound(1, "roomNumber", e.target.value)
                        }
                        placeholder="219219"
                      />
                    </div>
                    <div>
                      <Label>마감시간</Label>
                      <Input
                        value={data.rounds[1].deadline}
                        onChange={(e) =>
                          updateRound(1, "deadline", e.target.value)
                        }
                        placeholder="13:00"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-500/30 bg-blue-500/5">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-400">
                    사전 입력
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2].map((teamIdx) => (
                    <div
                      key={teamIdx}
                      className="space-y-3 p-3 bg-muted/30 rounded-lg"
                    >
                      <h4 className="font-medium">
                        팀{" "}
                        {data[`team${teamIdx as 1 | 2}`].name || `팀${teamIdx}`}
                      </h4>

                      <div>
                        <Label className="text-xs">출전 선수</Label>
                        <Select
                          value={
                            teamIdx === 1
                              ? data.rounds[1].team1Player || ""
                              : data.rounds[1].team2Player || ""
                          }
                          onValueChange={(value) =>
                            updateRound(
                              1,
                              teamIdx === 1 ? "team1Player" : "team2Player",
                              value
                            )
                          }
                        >
                          <SelectTrigger className="h-8 text-sm">
                            <SelectValue placeholder="선수 선택" />
                          </SelectTrigger>
                          <SelectContent>
                            {data[`team${teamIdx as 1 | 2}`].players
                              .filter(Boolean)
                              .map((player, idx) => (
                                <SelectItem key={idx} value={player}>
                                  {player}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="text-xs">
                          선곡 (5곡) - 클릭하여 검색
                        </Label>
                        <div className="space-y-1">
                          {[0, 1, 2, 3, 4].map((songIdx) => (
                            <SongInputField
                              key={songIdx}
                              value={
                                (
                                  data.rounds[1][
                                    `team${teamIdx}SongsLong` as keyof RoundData
                                  ] as string[]
                                )?.[songIdx] || ""
                              }
                              placeholder={`곡 ${songIdx + 1} 클릭하여 검색`}
                              onClick={() =>
                                openSongSearch(
                                  1,
                                  `team${teamIdx}SongsLong`,
                                  songIdx
                                )
                              }
                              onClear={() =>
                                clearSong(1, `team${teamIdx}SongsLong`, songIdx)
                              }
                            />
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label className="text-xs">
                            스트래티지 {getRound2StrategyLevelLabel(17)}렙
                          </Label>
                          {[0, 1, 2].map((optIdx) => (
                            <div key={optIdx} className="mt-1">
                              <SongInputField
                                value={
                                  (
                                    data.rounds[1][
                                      `team${teamIdx}Strategy17` as keyof RoundData
                                    ] as string[]
                                  )?.[optIdx] || ""
                                }
                                placeholder={`${getRound2StrategyLevelLabel(
                                  17
                                )}렙 ${optIdx + 1}`}
                                onClick={() =>
                                  openSongSearch(
                                    1,
                                    `team${teamIdx}Strategy17`,
                                    optIdx
                                  )
                                }
                                onClear={() =>
                                  clearSong(
                                    1,
                                    `team${teamIdx}Strategy17`,
                                    optIdx
                                  )
                                }
                              />
                            </div>
                          ))}
                        </div>
                        <div>
                          <Label className="text-xs">
                            스트래티지 {getRound2StrategyLevelLabel(18)}렙
                          </Label>
                          {[0, 1, 2].map((optIdx) => (
                            <div key={optIdx} className="mt-1">
                              <SongInputField
                                value={
                                  (
                                    data.rounds[1][
                                      `team${teamIdx}Strategy18` as keyof RoundData
                                    ] as string[]
                                  )?.[optIdx] || ""
                                }
                                placeholder={`${getRound2StrategyLevelLabel(
                                  18
                                )}렙 ${optIdx + 1}`}
                                onClick={() =>
                                  openSongSearch(
                                    1,
                                    `team${teamIdx}Strategy18`,
                                    optIdx
                                  )
                                }
                                onClear={() =>
                                  clearSong(
                                    1,
                                    `team${teamIdx}Strategy18`,
                                    optIdx
                                  )
                                }
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-orange-500/30 bg-orange-500/5">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-400">
                    경기 진행 중 (스트래티지)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2].map((teamIdx) => (
                    <div
                      key={teamIdx}
                      className="space-y-3 p-3 bg-muted/30 rounded-lg"
                    >
                      <h4 className="font-medium">
                        팀{" "}
                        {data[`team${teamIdx as 1 | 2}`].name || `팀${teamIdx}`}
                      </h4>

                      {/* 스트래티지 사용 스위치 */}
                      <div className="flex items-center gap-2">
                        <Switch
                          id={`r2-team${teamIdx}-strategy-switch`}
                          checked={getStrategyUsed(
                            data.rounds[1],
                            teamIdx as 1 | 2
                          )}
                          onCheckedChange={(checked) =>
                            updateRound(
                              1,
                              teamIdx === 1
                                ? "team1StrategyUsed"
                                : "team2StrategyUsed",
                              checked
                            )
                          }
                        />
                        <Label
                          htmlFor={`r2-team${teamIdx}-strategy-switch`}
                          className="text-xs"
                        >
                          스트래티지 카드 사용
                        </Label>
                      </div>

                      {getStrategyUsed(data.rounds[1], teamIdx as 1 | 2) && (
                        <div className="space-y-2 pl-6">
                          {/* 5곡 중에서 스트래티지 대상 곡 선택 */}
                          <div>
                            <Label className="text-xs">
                              스트래티지를 적용할 상대곡 (5곡 중 선택)
                            </Label>
                            <StrategyTargetDropdown
                              value={getStrategyTarget(
                                data.rounds[1],
                                teamIdx as 1 | 2
                              )}
                              songs={getOpponentSongs(
                                data.rounds[1],
                                teamIdx as 1 | 2,
                                1
                              )} // ✅ 여기!
                              onChange={(value) =>
                                updateRound(
                                  1,
                                  teamIdx === 1
                                    ? "team1StrategyTarget"
                                    : "team2StrategyTarget",
                                  value === "none" ? "" : value
                                )
                              }
                              placeholder="상대 자선곡 선택" // 문구도 상대곡임을 명시
                            />
                          </div>

                          {/* 17/18렙 후보 중에서 최종 스트래티지 곡 선택 */}
                          <div>
                            <Label className="text-xs">
                              선택된 스트래티지 곡 (
                              {getRound2StrategyLevelLabel(17)}/
                              {getRound2StrategyLevelLabel(18)}렙 후보 중)
                            </Label>
                            <StrategySelectedDropdown
                              value={getStrategySelected(
                                data.rounds[1],
                                teamIdx as 1 | 2
                              )}
                              options={getRound2StrategyOptions(
                                data.rounds[1],
                                teamIdx as 1 | 2
                              )}
                              onChange={(value) =>
                                updateRound(
                                  1,
                                  teamIdx === 1
                                    ? "team1StrategySelected"
                                    : "team2StrategySelected",
                                  value === "none" ? "" : value
                                )
                              }
                              placeholder="스트래티지 곡 선택"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => generateSongListImage(1)}
              >
                <ImageIcon className="h-4 w-4 mr-2" />
                선곡 목록 이미지 생성
              </Button>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => generatePrePickImage(1)}
              >
                <ImageIcon className="h-4 w-4 mr-2" />
                (밴픽 전) 사전 픽 선곡 목록 이미지 생성
              </Button>
              {/* 2라운드 매믹@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
              {data.rounds.map((round, roundIdx) => (
                <TabsContent key={roundIdx} value={`round${roundIdx + 1}`}>
                  {/* ... */}

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => handleGenerateStrategyTeam1(roundIdx)}
                    >
                      1팀 스트래티지 카드 이미지
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleGenerateStrategyTeam2(roundIdx)}
                    >
                      2팀 스트래티지 카드 이미지
                    </Button>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleGenerateRound2Lv17Team1}
                    >
                      2R 1팀 Lv{getRound2StrategyLevelLabel(17)} (3장)
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleGenerateRound2Lv18Team1}
                    >
                      2R 1팀 Lv{getRound2StrategyLevelLabel(18)} (3장)
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleGenerateRound2Lv17Team2}
                    >
                      2R 2팀 Lv{getRound2StrategyLevelLabel(17)} (3장)
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleGenerateRound2Lv18Team2}
                    >
                      2R 2팀 Lv{getRound2StrategyLevelLabel(18)} (3장)
                    </Button>
                  </div>
                </TabsContent>
              ))}
              <ScriptCard
                title="녹화 시작 안내"
                script={generateRecordingStartScript(1)}
                id="r2-rec-start"
              />
              <ScriptCard
                title="엔트리 공개"
                script={generateEntryScript(1)}
                id="r2-entry"
              />
              <div className="space-y-2">
                {[1, 2].map((teamIdx) => {
                  const script = generateStrategyScript(1, teamIdx as 1 | 2);
                  return script ? (
                    <ScriptCard
                      key={teamIdx}
                      title={`팀 ${
                        data[`team${teamIdx as 1 | 2}`].name || teamIdx
                      } 스트래티지 안내`}
                      script={script}
                      id={`r2-strat-${teamIdx}`}
                    />
                  ) : null;
                })}
              </div>
              <ScriptCard
                title="아레나 입장 안내"
                script={generateArenaEntryScript(1)}
                id="r2-arena"
              />
              <ScriptCard
                title="녹화 종료 안내"
                script={generateRecordingEndScript(1)}
                id="r2-rec-end"
              />
            </div>
          </div>
        </TabsContent>

        {/* Round 4 Tab (1v1 Single Battle) */}
        <TabsContent value="round4" className="space-y-4">
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">공통 설정</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>방 번호</Label>
                      <Input
                        value={data.rounds[3].roomNumber}
                        onChange={(e) =>
                          updateRound(3, "roomNumber", e.target.value)
                        }
                        placeholder="219219"
                      />
                    </div>
                    <div>
                      <Label>마감시간</Label>
                      <Input
                        value={data.rounds[3].deadline}
                        onChange={(e) =>
                          updateRound(3, "deadline", e.target.value)
                        }
                        placeholder="13:00"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-500/30 bg-purple-500/5">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-400">
                    주최측 지정곡
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <Label className="text-xs">
                      3스테이지 지정곡 - 클릭하여 검색
                    </Label>
                    <SongInputField
                      value={data.rounds[3].stage3DesignatedSong || ""}
                      placeholder="3스테이지 지정곡"
                      onClick={() => openSongSearch(3, "stage3DesignatedSong")}
                      onClear={() => clearSong(3, "stage3DesignatedSong")}
                    />
                  </div>
                  <div>
                    <Label className="text-xs">
                      4스테이지 지정곡 - 클릭하여 검색
                    </Label>
                    <SongInputField
                      value={data.rounds[3].stage4DesignatedSong || ""}
                      placeholder="4스테이지 지정곡"
                      onClick={() => openSongSearch(3, "stage4DesignatedSong")}
                      onClear={() => clearSong(3, "stage4DesignatedSong")}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-500/30 bg-blue-500/5">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-400">
                    사전 입력
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2].map((teamIdx) => (
                    <div
                      key={teamIdx}
                      className="space-y-3 p-3 bg-muted/30 rounded-lg"
                    >
                      <h4 className="font-medium">
                        팀{" "}
                        {data[`team${teamIdx as 1 | 2}`].name || `팀${teamIdx}`}
                      </h4>

                      <div>
                        <Label className="text-xs">출전 선수</Label>
                        <Select
                          value={
                            teamIdx === 1
                              ? data.rounds[3].team1Player || ""
                              : data.rounds[3].team2Player || ""
                          }
                          onValueChange={(value) =>
                            updateRound(
                              3,
                              teamIdx === 1 ? "team1Player" : "team2Player",
                              value
                            )
                          }
                        >
                          <SelectTrigger className="h-8 text-sm">
                            <SelectValue placeholder="선수 선택" />
                          </SelectTrigger>
                          <SelectContent>
                            {data[`team${teamIdx as 1 | 2}`].players
                              .filter(Boolean)
                              .map((player, idx) => (
                                <SelectItem key={idx} value={player}>
                                  {player}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="text-xs">
                          선곡 (2곡) - 클릭하여 검색
                        </Label>
                        <div className="space-y-1">
                          {[0, 1].map((songIdx) => (
                            <SongInputField
                              key={songIdx}
                              value={
                                (
                                  data.rounds[3][
                                    `team${teamIdx}Songs2` as keyof RoundData
                                  ] as string[]
                                )?.[songIdx] || ""
                              }
                              placeholder={`곡 ${songIdx + 1} 클릭하여 검색`}
                              onClick={() =>
                                openSongSearch(
                                  3,
                                  `team${teamIdx}Songs2`,
                                  songIdx
                                )
                              }
                              onClear={() =>
                                clearSong(3, `team${teamIdx}Songs2`, songIdx)
                              }
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-orange-500/30 bg-orange-500/5">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-400">
                    경기 진행 중
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2].map((teamIdx) => (
                    <div
                      key={teamIdx}
                      className="space-y-3 p-3 bg-muted/30 rounded-lg"
                    >
                      <h4 className="font-medium">
                        팀{" "}
                        {data[`team${teamIdx as 1 | 2}`].name || `팀${teamIdx}`}
                      </h4>

                      <div>
                        <Label className="text-xs">
                          밴할 곡 (상대 팀 선곡에서 선택)
                        </Label>
                        <BanSelectDropdown
                          value={
                            teamIdx === 1
                              ? data.rounds[3].team1BannedSong4 || ""
                              : data.rounds[3].team2BannedSong4 || ""
                          }
                          songs={getOpponentSongs(
                            data.rounds[3],
                            teamIdx as 1 | 2,
                            3
                          )}
                          onChange={(value) =>
                            updateRound(
                              3,
                              teamIdx === 1
                                ? "team1BannedSong4"
                                : "team2BannedSong4",
                              value === "none" ? "" : value
                            )
                          }
                          placeholder="밴할 곡 선택"
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => generateSongListImage(3)}
              >
                <ImageIcon className="h-4 w-4 mr-2" />
                선곡 목록 이미지 생성
              </Button>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => generatePrePickImage(3)}
              >
                <ImageIcon className="h-4 w-4 mr-2" />
                (밴픽 전) 사전 픽 선곡 목록 이미지 생성
              </Button>
              <ScriptCard
                title="녹화 시작 안내"
                script={generateRecordingStartScript(3)}
                id="r4-rec-start"
              />
              <ScriptCard
                title="엔트리 공개"
                script={generateEntryScript(3)}
                id="r4-entry"
              />
              <ScriptCard
                title="아레나 입장 안내"
                script={generateArenaEntryScript(3)}
                id="r4-arena"
              />
              <ScriptCard
                title="녹화 종료 안내"
                script={generateRecordingEndScript(3)}
                id="r4-rec-end"
              />
            </div>
          </div>
        </TabsContent>
        {/* Round 4 Arena Tab */}
        <TabsContent value="round4arena" className="space-y-4">
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">공통 설정</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <Label>방 번호</Label>
                    <Input
                      value={data.rounds[3].roomNumber}
                      onChange={(e) =>
                        updateRound(3, "roomNumber", e.target.value)
                      }
                      placeholder="219219"
                    />
                  </div>
                  <div>
                    <Label>마감시간</Label>
                    <Input
                      value={data.rounds[3].deadline}
                      onChange={(e) =>
                        updateRound(3, "deadline", e.target.value)
                      }
                      placeholder="17:34"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-500/30 bg-purple-500/5">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-400">
                    주최측 지정곡
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <Label className="text-xs">
                      3스테이지 지정곡 - 클릭하여 검색
                    </Label>
                    <SongInputField
                      value={data.rounds[3].stage3DesignatedSong || ""}
                      placeholder="3스테이지 지정곡"
                      onClick={() => openSongSearch(3, "stage3DesignatedSong")}
                      onClear={() => clearSong(3, "stage3DesignatedSong")}
                    />
                  </div>
                  <div>
                    <Label className="text-xs">
                      4스테이지 지정곡 - 클릭하여 검색
                    </Label>
                    <SongInputField
                      value={data.rounds[3].stage4DesignatedSong || ""}
                      placeholder="4스테이지 지정곡"
                      onClick={() => openSongSearch(3, "stage4DesignatedSong")}
                      onClear={() => clearSong(3, "stage4DesignatedSong")}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-500/30 bg-blue-500/5">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-400">
                    사전 입력
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2].map((teamIdx) => (
                    <div
                      key={teamIdx}
                      className="space-y-3 p-3 bg-muted/30 rounded-lg"
                    >
                      <h4 className="font-medium">
                        팀{" "}
                        {data[`team${teamIdx as 1 | 2}`].name || `${teamIdx}`}
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label className="text-xs">출전 선수</Label>
                          <Select
                            value={
                              teamIdx === 1
                                ? data.rounds[3].team1Player || ""
                                : data.rounds[3].team2Player || ""
                            }
                            onValueChange={(value) =>
                              updateRound(
                                3,
                                teamIdx === 1 ? "team1Player" : "team2Player",
                                value
                              )
                            }
                          >
                            <SelectTrigger className="h-8 text-sm">
                              <SelectValue placeholder="선수 선택" />
                            </SelectTrigger>
                            <SelectContent>
                              {data[`team${teamIdx as 1 | 2}`].players
                                .filter(Boolean)
                                .map((player, idx) => (
                                  <SelectItem key={idx} value={player}>
                                    {player}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label className="text-xs">
                            지정곡 선택 보조 선수
                          </Label>
                          <Select
                            value={
                              teamIdx === 1
                                ? data.rounds[3].team1ArenaPlayer || ""
                                : data.rounds[3].team2ArenaPlayer || ""
                            }
                            onValueChange={(value) =>
                              updateRound(
                                3,
                                teamIdx === 1
                                  ? "team1ArenaPlayer"
                                  : "team2ArenaPlayer",
                                value
                              )
                            }
                          >
                            <SelectTrigger className="h-8 text-sm">
                              <SelectValue placeholder="선수 선택" />
                            </SelectTrigger>
                            <SelectContent>
                              {data[`team${teamIdx as 1 | 2}`].players
                                .filter(Boolean)
                                .map((player, idx) => (
                                  <SelectItem key={idx} value={player}>
                                    {player}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label className="text-xs">
                          선곡 (2곡) - 클릭하여 검색
                        </Label>
                        <div className="space-y-1">
                          {[0, 1].map((songIdx) => (
                            <SongInputField
                              key={songIdx}
                              value={
                                (
                                  data.rounds[3][
                                    `team${teamIdx}Songs2` as keyof RoundData
                                  ] as string[]
                                )?.[songIdx] || ""
                              }
                              placeholder={`곡 ${songIdx + 1} 클릭하여 검색`}
                              onClick={() =>
                                openSongSearch(
                                  3,
                                  `team${teamIdx}Songs2`,
                                  songIdx
                                )
                              }
                              onClear={() =>
                                clearSong(3, `team${teamIdx}Songs2`, songIdx)
                              }
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-orange-500/30 bg-orange-500/5">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-400">
                    경기 진행 중
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2].map((teamIdx) => (
                    <div
                      key={teamIdx}
                      className="space-y-3 p-3 bg-muted/30 rounded-lg"
                    >
                      <h4 className="font-medium">
                        팀{" "}
                        {data[`team${teamIdx as 1 | 2}`].name || `${teamIdx}`}
                      </h4>

                      <div>
                        <Label className="text-xs">
                          밴할 곡 (상대 팀 선곡에서 선택)
                        </Label>
                        <BanSelectDropdown
                          value={
                            teamIdx === 1
                              ? data.rounds[3].team1BannedSong4 || ""
                              : data.rounds[3].team2BannedSong4 || ""
                          }
                          songs={getOpponentSongs(
                            data.rounds[3],
                            teamIdx as 1 | 2,
                            3
                          )}
                          onChange={(value) =>
                            updateRound(
                              3,
                              teamIdx === 1
                                ? "team1BannedSong4"
                                : "team2BannedSong4",
                              value === "none" ? "" : value
                            )
                          }
                          placeholder="밴할 곡 선택"
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => generateSongListImage(3)}
              >
                <ImageIcon className="h-4 w-4 mr-2" />
                선곡 목록 이미지 생성
              </Button>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => generatePrePickImage(3)}
              >
                <ImageIcon className="h-4 w-4 mr-2" />
                (밴픽 전) 사전 픽 선곡 목록 이미지 생성
              </Button>
              <ScriptCard
                title="녹화 시작 안내"
                script={generateRecordingStartScript(3)}
                id="r4-arena-rec-start"
              />
              <ScriptCard
                title="엔트리 공개"
                script={generateEntryScript(3)}
                id="r4-arena-entry"
              />
              <ScriptCard
                title="4라운드 아레나 입장 안내"
                script={generateRound4ArenaEntryScript()}
                id="r4-arena-new"
              />
              <ScriptCard
                title="녹화 종료 안내"
                script={generateRecordingEndScript(3)}
                id="r4-arena-rec-end"
              />
            </div>
          </div>
        </TabsContent>
        {/* Overtime Tab (연장전) */}
        <TabsContent value="overtime" className="space-y-4">
          <div className="grid lg:grid-cols-2 gap-4">
            {/* 왼쪽: 설정 입력 */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">연장전 설정</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>방 번호</Label>
                      <Input
                        value={data.overtime.roomNumber}
                        onChange={(e) =>
                          setData((prev) => ({
                            ...prev,
                            overtime: {
                              ...prev.overtime,
                              roomNumber: e.target.value,
                            },
                          }))
                        }
                        placeholder="219219"
                      />
                    </div>
                    <div>
                      <Label>연장전 지정곡 (클릭하여 검색)</Label>
                      <SongInputField
                        value={data.overtime.designatedSong || ""}
                        placeholder="LubedeR"
                        onClick={openOvertimeSongSearch}
                        onClear={clearOvertimeDesignatedSong}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label>
                        팀 {data.team1.name || "1팀"} 연장전 출전 선수
                      </Label>
                      <Select
                        value={data.overtime.team1Player}
                        onValueChange={(value) =>
                          setData((prev) => ({
                            ...prev,
                            overtime: { ...prev.overtime, team1Player: value },
                          }))
                        }
                      >
                        <SelectTrigger className="h-8 text-sm">
                          <SelectValue placeholder="선수 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          {data.team1.players
                            .filter(Boolean)
                            .map((player, idx) => (
                              <SelectItem key={idx} value={player}>
                                {player}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>
                        팀 {data.team2.name || "2팀"} 연장전 출전 선수
                      </Label>
                      <Select
                        value={data.overtime.team2Player}
                        onValueChange={(value) =>
                          setData((prev) => ({
                            ...prev,
                            overtime: { ...prev.overtime, team2Player: value },
                          }))
                        }
                      >
                        <SelectTrigger className="h-8 text-sm">
                          <SelectValue placeholder="선수 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          {data.team2.players
                            .filter(Boolean)
                            .map((player, idx) => (
                              <SelectItem key={idx} value={player}>
                                {player}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 오른쪽: 스크립트 카드들 */}
            <div className="space-y-3">
              <ScriptCard
                title="연장전 안내"
                script={generateOvertimeScript(data)}
                id="ot-main"
              />
              <ScriptCard
                title="연장전 녹화 시작 안내"
                script={generateOvertimeRecordingStartScript()}
                id="ot-rec-start"
              />
              <ScriptCard
                title="연장전 녹화 종료 안내"
                script={generateOvertimeRecordingEndScript()}
                id="ot-rec-end"
              />
            </div>
          </div>
        </TabsContent>

        {/* Common Scripts Tab */}
        <TabsContent value="common" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>경기 사전 안내</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <pre className="text-sm whitespace-pre-wrap p-4 bg-muted rounded-lg">{`# 경기 사전 안내
* 원활한 경기 진행을 위하여 경기 시작 전 15분까지 사전 녹화 준비를 완료해주세요.
* 경기를 진행하기 전/후로 녹화 시작과 종료를 안내드릴 예정입니다.
* 모든 행동은 스태프의 지시에 맞춰서 진행해주시기 바랍니다.
  * 코인 투입, 아레나 진입, 선곡 등
* 사용하시는 기체에 타건음 마이크가 있는 경우 타건음 마이크 소리를 음소거해주세요.
## 실제 대회 경기중이 아닌경우, 지속적으로 디스코드를 확인하여 주시기 바랍니다!`}</pre>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() =>
                    copyToClipboard(
                      `# 경기 사전 안내
* 원활한 경기 진행을 위하여 경기 시작 전 15분까지 사전 녹화 준비를 완료해주세요.
* 경기를 진행하기 전/후로 녹화 시작과 종료를 안내드릴 예정입니다.
* 모든 행동은 스태프의 지시에 맞춰서 진행해주시기 바랍니다.
  * 코인 투입, 아레나 진입, 선곡 등
* 사용하시는 기체에 타건음 마이크가 있는 경우 타건음 마이크 소리를 음소거해주세요.
## 실제 대회 경기중이 아닌경우, 지속적으로 디스코드를 확인하여 주시기 바랍니다!`,
                      "common-pre"
                    )
                  }
                >
                  {copiedId === "common-pre" ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
