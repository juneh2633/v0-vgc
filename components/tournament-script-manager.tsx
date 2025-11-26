"use client"

import type React from "react"

import { useState, useCallback, useMemo, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Download, Upload, Check, ImageIcon, AlertTriangle, X, ArrowLeft } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import useSWR from "swr"
import Image from "next/image"
import type { ChartData } from "@/lib/types"
import { Switch } from "@/components/ui/switch"

const fetcher = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`)
  return res.json()
}

interface SongInfo {
  title: string
  artist: string
  jacket: string
  jacketBase64?: string // Add base64 jacket field
  level: number
  type: string
  date: string
}

interface FlattenedChart {
  songIdx: number
  chartIdx: number
  title: string
  artist: string
  level: number
  type: string
  jacket: string
  date: string
}

interface Team {
  name: string
  players: [string, string, string]
}

interface RoundData {
  roomNumber: string
  deadline: string
  team1Players?: [string, string]
  team2Players?: [string, string]
  team1Songs?: [string, string, string]
  team2Songs?: [string, string, string]
  team1BannedSong?: string
  team2BannedSong?: string
  team1Player?: string
  team2Player?: string
  team1SongsLong?: [string, string, string, string, string]
  team2SongsLong?: [string, string, string, string, string]
  team1Songs2?: [string, string]
  team2Songs2?: [string, string]
  team1BannedSong4?: string
  team2BannedSong4?: string
  team1DesignatedSong?: string
  team2DesignatedSong?: string
  stage3DesignatedSong?: string
  stage4DesignatedSong?: string
  team1StrategyOptions?: [string, string, string]
  team2StrategyOptions?: [string, string, string]
  team1StrategyUsed: boolean
  team2StrategyUsed: boolean
  team1StrategySelected?: string
  team2StrategySelected?: string
  team1StrategyTarget?: string
  team2StrategyTarget?: string
  team1Strategy17?: [string, string, string]
  team1Strategy18?: [string, string, string]
  team2Strategy17?: [string, string, string]
  team2Strategy18?: [string, string, string]
}

type SongInfoMap = Record<string, SongInfo>

interface TournamentData {
  team1: Team
  team2: Team
  rounds: [RoundData, RoundData, RoundData, RoundData]
  songInfoMap: SongInfoMap
}

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
})

const defaultData = (): TournamentData => ({
  team1: { name: "", players: ["", "", ""] },
  team2: { name: "", players: ["", "", ""] },
  rounds: [defaultRoundData(), defaultRoundData(), defaultRoundData(), defaultRoundData()],
  songInfoMap: {},
})

const getTypeLabel = (type: string): string => {
  const labels: Record<string, string> = {
    nov: "NOV",
    adv: "ADV",
    exh: "EXH",
    mxm: "MXM",
    inf: "INF",
    grv: "GRV",
    hvn: "HVN",
    vvd: "VVD",
    xcd: "XCD",
  }
  return labels[type?.toLowerCase()] || type?.toUpperCase() || ""
}

const formatSongName = (chart: FlattenedChart): string => {
  return `${chart.title} ${getTypeLabel(chart.type)}`
}

const chartToSongInfo = (chart: FlattenedChart): SongInfo => ({
  // name: formatSongName(chart), // Removed, as name is not part of SongInfo interface
  title: chart.title,
  artist: chart.artist,
  jacket: chart.jacket,
  level: chart.level,
  type: chart.type,
  date: chart.date,
})

const loadImageAsBase64 = async (url: string): Promise<string | null> => {
  return new Promise((resolve) => {
    const img = new window.Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas")
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext("2d")
        if (ctx) {
          ctx.drawImage(img, 0, 0)
          resolve(canvas.toDataURL("image/jpeg", 0.8))
        } else {
          resolve(null)
        }
      } catch (e) {
        console.log("[v0] Failed to convert image to base64:", e)
        resolve(null)
      }
    }
    img.onerror = () => {
      console.log("[v0] Failed to load image:", url)
      resolve(null)
    }
    img.src = url
  })
}

const SongInputField = ({
  value,
  placeholder,
  onClick,
  onClear,
}: {
  value: string
  placeholder: string
  onClick: () => void
  onClear: () => void
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
          e.stopPropagation()
          onClear()
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
      >
        <X className="h-4 w-4" />
      </button>
    )}
  </div>
)

export function TournamentScriptManager({ onBack }: { onBack: () => void }) {
  const [data, setData] = useState<TournamentData>(defaultData())
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [songSearchOpen, setSongSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [levelFilter, setLevelFilter] = useState("all")
  const [songSearchTarget, setSongSearchTarget] = useState<{
    roundIdx: number
    field: string
    arrayIdx?: number
  } | null>(null)
  const [imageDialogOpen, setImageDialogOpen] = useState(false)
  const [imageRoundIdx, setImageRoundIdx] = useState<number>(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [songNotFoundWarning, setSongNotFoundWarning] = useState<string | null>(null)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null) // State to hold the generated image data URL
  const [notification, setNotification] = useState<{ type: "error" | "success"; message: string } | null>(null)

  const { data: songData } = useSWR<{ chartData: ChartData[] }>("/api/songs", fetcher)

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
        })),
      ),
    [songData],
  )

  const filteredCharts = useMemo(
    () =>
      allCharts.filter((chart) => {
        const matchesSearch =
          chart.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          chart.artist.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesLevel = levelFilter === "all" || chart.level === Number.parseInt(levelFilter)
        return matchesSearch && matchesLevel
      }),
    [allCharts, searchQuery, levelFilter],
  )

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  // Helper to get SongInfo from the map, prioritizing the replaced song if applicable
  const getSongInfo = (
    roundIdx: number,
    field: string,
    arrayIdx?: number,
    originalSongName?: string,
  ): SongInfo | null => {
    const infoKey = arrayIdx !== undefined ? `round${roundIdx}_${field}_${arrayIdx}` : `round${roundIdx}_${field}`

    // Try to find info for the potentially replaced song first
    if (data.songInfoMap[infoKey]) {
      return data.songInfoMap[infoKey]
    }
    // Fallback to original song name if provided
    if (originalSongName) {
      const originalKey =
        arrayIdx !== undefined
          ? `round${roundIdx}_${field}_${arrayIdx}` // Assuming original field name is same
          : `round${roundIdx}_${field}`
      return data.songInfoMap[originalKey] || null
    }
    return null
  }

  const handleSelectSong = async (chart: FlattenedChart) => {
    if (!songSearchTarget) return

    const { roundIdx, field, arrayIdx } = songSearchTarget
    const songName = formatSongName(chart)
    const songInfo = chartToSongInfo(chart)
    const infoKey = arrayIdx !== undefined ? `round${roundIdx}_${field}_${arrayIdx}` : `round${roundIdx}_${field}`

    // Try to load jacket as base64
    if (chart.jacket) {
      const base64 = await loadImageAsBase64(chart.jacket)
      if (base64) {
        songInfo.jacketBase64 = base64
      }
    }

    if (arrayIdx !== undefined) {
      const currentRound = data.rounds[roundIdx]
      const currentArray = (currentRound[field as keyof RoundData] as string[]) || []
      const newArray = [...currentArray]
      newArray[arrayIdx] = songName
      updateRound(roundIdx, field as keyof RoundData, newArray)
    } else {
      updateRound(roundIdx, field as keyof RoundData, songName)
    }

    setData((prev) => ({
      ...prev,
      songInfoMap: {
        ...prev.songInfoMap,
        [infoKey]: songInfo,
      },
    }))

    setSongSearchOpen(false)
    setSearchQuery("")
    setSongSearchTarget(null)
  }

  const openSongSearch = (roundIdx: number, field: string, arrayIdx?: number) => {
    setSongSearchTarget({ roundIdx, field, arrayIdx })
    setSongSearchOpen(true)
  }

  const updateTeam = (teamIdx: 1 | 2, field: keyof Team, value: string | [string, string, string]) => {
    setData((prev) => ({
      ...prev,
      [`team${teamIdx}`]: {
        ...prev[`team${teamIdx}`],
        [field]: value,
      },
    }))
  }

  const updateRound = (roundIdx: number, field: keyof RoundData, value: unknown) => {
    setData((prev) => {
      const newRounds = [...prev.rounds] as [RoundData, RoundData, RoundData, RoundData]
      newRounds[roundIdx] = { ...newRounds[roundIdx], [field]: value }
      return { ...prev, rounds: newRounds }
    })
  }

  const clearSong = (roundIdx: number, field: string, arrayIdx?: number) => {
    const infoKey = arrayIdx !== undefined ? `round${roundIdx}_${field}_${arrayIdx}` : `round${roundIdx}_${field}`

    if (arrayIdx !== undefined) {
      const round = data.rounds[roundIdx]
      const currentArray = (round[field as keyof RoundData] as string[]) || []
      const newArray = [...currentArray]
      newArray[arrayIdx] = ""
      updateRound(roundIdx, field as keyof RoundData, newArray)
    } else {
      updateRound(roundIdx, field as keyof RoundData, "")
    }

    setData((prev) => {
      const newSongInfoMap = { ...prev.songInfoMap }
      delete newSongInfoMap[infoKey]
      return { ...prev, songInfoMap: newSongInfoMap }
    })
  }

  const generateSongListImage = async (roundIdx: number) => {
    const round = data.rounds[roundIdx]

    // 1. 라운드 타입에 따라 사용되는 선수/곡 배열 결정
    const isRound13 = roundIdx === 0 || roundIdx === 2
    const isRound2 = roundIdx === 1
    const isRound4 = roundIdx === 3

    // 플레이어 구성
    const team1Players = isRound2 || isRound4 ? [round.team1Player || ""] : round.team1Players || ["", ""]
    const team2Players = isRound2 || isRound4 ? [round.team2Player || ""] : round.team2Players || ["", ""]

    // 밴/스트래티지 관련 (1,3라운드에서만)
    const team1BannedSong = isRound13 ? round.team1BannedSong || "" : ""
    const team2BannedSong = isRound13 ? round.team2BannedSong || "" : ""

    // 2. SongInfo 를 찾기 위한 헬퍼
    const getSongInfoByField = (field: keyof RoundData, arrayIdx: number): SongInfo | null => {
      const infoKey = `round${roundIdx}_${String(field)}_${arrayIdx}`
      return data.songInfoMap[infoKey] || null
    }

    // 전략 카드로 바뀐 곡에 대한 SongInfo 찾기
    // (1,3라운드: teamXStrategyOptions, 2라운드: teamXStrategy17 / teamXStrategy18 포함)
    const getSongInfoFromStrategy = (teamIdxUsed: 1 | 2, songName: string): SongInfo | null => {
      const strategyFields: (keyof RoundData)[] =
        teamIdxUsed === 1
          ? ["team1StrategyOptions", "team1Strategy17", "team1Strategy18"]
          : ["team2StrategyOptions", "team2Strategy17", "team2Strategy18"]

      for (const field of strategyFields) {
        const options = (round[field] as string[]) || []
        for (let i = 0; i < options.length; i++) {
          if (options[i] === songName) {
            const infoKey = `round${roundIdx}_${String(field)}_${i}`
            return data.songInfoMap[infoKey] || null
          }
        }
      }
      return null
    }

    // 3. 라운드별로 "실제 보여줄 곡" 리스트 만들기
    type SongEntry = {
      team: string
      player: string
      songName: string
      info: SongInfo | null
      isStrategy: boolean
    }

    const songs: SongEntry[] = []

    // ----- 1,3 라운드 (2v2, 밴 + 스트래티지) -----
    if (isRound13) {
      const rawTeam1Songs = round.team1Songs || []
      const rawTeam2Songs = round.team2Songs || []

      // 밴 적용 + 인덱스 유지
      const team1Songs = rawTeam1Songs
        .map((name, idx) => ({ name, idx }))
        .filter(({ name }) => name.trim() !== "" && name !== team1BannedSong)
        .slice(0, 2)  // 👈 여기 추가

      const team2Songs = rawTeam2Songs
        .map((name, idx) => ({ name, idx }))
        .filter(({ name }) => name.trim() !== "" && name !== team2BannedSong)
        .slice(0, 2)  // 
      // 팀1 곡들
      team1Songs.forEach(({ name: originalSong, idx }, displayIdx) => {
        let finalSong = originalSong
        let isStrategy = false
        let info: SongInfo | null = null

        // 상대(팀2)가 이 곡에 스트래티지 쓴 경우
        if (round.team2StrategyUsed && round.team2StrategyTarget === originalSong && round.team2StrategySelected) {
          finalSong = round.team2StrategySelected
          isStrategy = true
          info = getSongInfoFromStrategy(2, finalSong)
        }

        // 2) 기본적으로는 원래 team1Songs[idx] 에 대응하는 SongInfo 사용
        if (!info) {
          info = getSongInfoByField("team1Songs", idx)
        }

        songs.push({
          team: data.team1.name,
          player: team1Players[displayIdx] || "",
          songName: finalSong,
          info,
          isStrategy,
        })
      })

      // 팀2 곡들
      team2Songs.forEach(({ name: originalSong, idx }, displayIdx) => {
        let finalSong = originalSong
        let isStrategy = false
        let info: SongInfo | null = null

        // 상대(팀1)가 이 곡에 스트래티지 쓴 경우
        if (round.team1StrategyUsed && round.team1StrategyTarget === originalSong && round.team1StrategySelected) {
          finalSong = round.team1StrategySelected
          isStrategy = true
          info = getSongInfoFromStrategy(1, finalSong)
        }

        if (!info) {
          info = getSongInfoByField("team2Songs", idx)
        }

        songs.push({
          team: data.team2.name,
          player: team2Players[displayIdx] || "",
          songName: finalSong,
          info,
          isStrategy,
        })
      })
    }

    // ----- 2 라운드 (1v1, 5곡씩) -----
    // ----- 2 라운드 (1v1, 5곡씩, 스트래티지 상대곡 교체) -----
    if (isRound2) {
      const rawTeam1Songs = round.team1SongsLong || []
      const rawTeam2Songs = round.team2SongsLong || []

      // 팀1 곡들: 팀2가 이 곡에 스트래티지를 걸었을 수 있음
      rawTeam1Songs.forEach((originalSong, idx) => {
        if (!originalSong.trim()) return

        let finalSong = originalSong
        let isStrategy = false
        let info: SongInfo | null = null

        // 팀2가 이 곡(target)에 스트래티지 사용한 경우
        if (round.team2StrategyUsed && round.team2StrategyTarget === originalSong && round.team2StrategySelected) {
          finalSong = round.team2StrategySelected
          isStrategy = true
          // 팀2가 사용한 스트래티지 후보(17/18/옵션) 중에서 정보 찾기
          info = getSongInfoFromStrategy(2, finalSong)
        }

        // 기본: 원래 team1SongsLong[idx] 정보 사용
        if (!info) {
          info = getSongInfoByField("team1SongsLong", idx)
        }

        songs.push({
          team: data.team1.name,
          player: team1Players[0] || "",
          songName: finalSong,
          info,
          isStrategy,
        })
      })

      // 팀2 곡들: 팀1이 이 곡에 스트래티지 걸었을 수 있음
      rawTeam2Songs.forEach((originalSong, idx) => {
        if (!originalSong.trim()) return

        let finalSong = originalSong
        let isStrategy = false
        let info: SongInfo | null = null

        if (round.team1StrategyUsed && round.team1StrategyTarget === originalSong && round.team1StrategySelected) {
          finalSong = round.team1StrategySelected
          isStrategy = true
          info = getSongInfoFromStrategy(1, finalSong)
        }

        if (!info) {
          info = getSongInfoByField("team2SongsLong", idx)
        }

        songs.push({
          team: data.team2.name,
          player: team2Players[0] || "",
          songName: finalSong,
          info,
          isStrategy,
        })
      })
    }


    if (songs.length === 0) {
      setNotification({ type: "error", message: "표시할 곡이 없습니다." })
      return
    }

    // 4. 자켓 이미지 로딩 (base64 우선, 없으면 URL)
    const loadImage = (src: string): Promise<HTMLImageElement | null> => {
      return new Promise((resolve) => {
        const img = new window.Image()
        img.crossOrigin = "anonymous"
        img.onload = () => resolve(img)
        img.onerror = () => {
          console.log("[v0] Image load failed, using placeholder", src)
          resolve(null)
        }
        img.src = src
      })
    }

    const jacketImages: (HTMLImageElement | null)[] = await Promise.all(
      songs.map((song) => {
        if (song.info?.jacketBase64) {
          return loadImage(song.info.jacketBase64)
        } else if (song.info?.jacket) {
          return loadImage(song.info.jacket)
        }
        return Promise.resolve(null)
      }),
    )

    // 5. 캔버스에 그리기 – 팀별 좌/우 컬럼 고정
    const cardWidth = 360
    const cardHeight = 110
    const jacketSize = 90
    const padding = 12

    // 팀별로 곡 분리
    const team1SongsForLayout = songs.filter((s) => s.team === data.team1.name)
    const team2SongsForLayout = songs.filter((s) => s.team === data.team2.name)
    const rows = Math.max(team1SongsForLayout.length, team2SongsForLayout.length)

    const canvas = document.createElement("canvas")
    canvas.width = 2 * cardWidth + padding * 3   // 왼쪽 카드 + 오른쪽 카드 + 패딩
    canvas.height = rows * cardHeight + padding * (rows + 1) + 50

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // 배경
    ctx.fillStyle = "#1a1a2e"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // 타이틀
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 24px sans-serif"
    ctx.textAlign = "center"
    ctx.fillText(`${roundIdx + 1}라운드 선곡 목록`, canvas.width / 2, 35)

    // songs 배열에서 해당 SongEntry 의 자켓 이미지를 찾아오는 헬퍼
    const getJacketForSong = (song: SongEntry): HTMLImageElement | null => {
      const idx = songs.indexOf(song)
      if (idx === -1) return null
      return jacketImages[idx]
    }

    // 실제 카드 하나를 그리는 헬퍼 (기존 for문 안 카드 그리기 코드 그대로 옮김)
    const drawSongCard = (
      song: SongEntry,
      x: number,
      y: number,
      jacketImg: HTMLImageElement | null,
    ) => {
      // 카드 배경
      ctx.fillStyle = song.isStrategy ? "#3d2066" : "#2d2d44"
      ctx.beginPath()
      ctx.roundRect(x, y, cardWidth, cardHeight, 8)
      ctx.fill()

      // 팀 색 바
      ctx.fillStyle = song.team === data.team1.name ? "#3b82f6" : "#ef4444"
      ctx.beginPath()
      ctx.roundRect(x, y, 6, cardHeight, [8, 0, 0, 8] as any)
      ctx.fill()

      const jacketX = x + 16
      const jacketY = y + (cardHeight - jacketSize) / 2

      // 자켓 이미지
      if (jacketImg) {
        ctx.save()
        ctx.beginPath()
        ctx.roundRect(jacketX, jacketY, jacketSize, jacketSize, 6)
        ctx.clip()
        ctx.drawImage(jacketImg, jacketX, jacketY, jacketSize, jacketSize)
        ctx.restore()
      } else {
        // 플레이스홀더
        const gradient = ctx.createLinearGradient(jacketX, jacketY, jacketX + jacketSize, jacketY + jacketSize)
        gradient.addColorStop(0, "#4a4a6a")
        gradient.addColorStop(1, "#2a2a4a")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.roundRect(jacketX, jacketY, jacketSize, jacketSize, 6)
        ctx.fill()

        ctx.fillStyle = "#888"
        ctx.font = "32px sans-serif"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText("♪", jacketX + jacketSize / 2, jacketY + jacketSize / 2)
      }

      // 텍스트 영역
      const textX = jacketX + jacketSize + 12
      const textMaxWidth = cardWidth - jacketSize - 44

      // 선수 이름
      ctx.fillStyle = "#9ca3af"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "left"
      ctx.textBaseline = "top"
      ctx.fillText(song.player || "선수", textX, y + 12)

      // 곡명
      ctx.fillStyle = "#ffffff"
      ctx.font = "bold 14px sans-serif"
      let songDisplayName = song.songName
      while (ctx.measureText(songDisplayName).width > textMaxWidth && songDisplayName.length > 3) {
        songDisplayName = songDisplayName.slice(0, -1)
      }
      if (songDisplayName !== song.songName) songDisplayName += "..."
      ctx.fillText(songDisplayName, textX, y + 30)

      // 아티스트
      let nextTextY = y + 50
      if (song.info?.artist) {
        ctx.fillStyle = "#9ca3af"
        ctx.font = "12px sans-serif"
        let artistName = song.info.artist
        while (ctx.measureText(artistName).width > textMaxWidth && artistName.length > 3) {
          artistName = artistName.slice(0, -1)
        }
        if (artistName !== song.info.artist) artistName += "..."
        ctx.fillText(artistName, textX, nextTextY)
        nextTextY += 16
      }

      // 날짜 (YYYY-MM-DD까지만)
      if (song.info?.date) {
        ctx.fillStyle = "#6b7280"
        ctx.font = "11px sans-serif"

        const rawDate = song.info.date
        const formattedDate = rawDate.includes("T") ? rawDate.split("T")[0] : rawDate.slice(0, 10)

        let dateText = formattedDate
        while (ctx.measureText(dateText).width > textMaxWidth && dateText.length > 3) {
          dateText = dateText.slice(0, -1)
        }
        if (dateText !== formattedDate) dateText += "..."

        ctx.fillText(dateText, textX, nextTextY)
        nextTextY += 16
      }

      // 레벨/타입 뱃지
      if (song.info?.level && song.info?.type) {
        const badgeText = `${song.info.type} ${song.info.level}`
        ctx.font = "bold 11px sans-serif"
        const badgeWidth = ctx.measureText(badgeText).width + 12

        const typeColors: Record<string, string> = {
          NOV: "#6366f1",
          ADV: "#eab308",
          EXH: "#ef4444",
          MXM: "#ec4899",
          INF: "#ec4899",
          GRV: "#f97316",
          HVN: "#06b6d4",
          VVD: "#a855f7",
          XCD: "#22c55e",
        }
        ctx.fillStyle = typeColors[song.info.type] || "#6b7280"
        const badgeY = nextTextY + 2
        ctx.beginPath()
        ctx.roundRect(textX, badgeY, badgeWidth, 20, 4)
        ctx.fill()

        ctx.fillStyle = "#ffffff"
        ctx.textBaseline = "middle"
        ctx.fillText(badgeText, textX + 6, badgeY + 10)
      }

      // 스트래티지 라벨
      if (song.isStrategy) {
        ctx.fillStyle = "#a855f7"
        ctx.font = "bold 10px sans-serif"
        ctx.textAlign = "right"
        ctx.fillText("STRATEGY", x + cardWidth - 12, y + 16)
        ctx.textAlign = "left"
      }
    }

    // 행 단위로 좌/우에 팀1/팀2 카드 배치
    for (let row = 0; row < rows; row++) {
      const y = 50 + padding + row * (cardHeight + padding)

      const songLeft = team1SongsForLayout[row]   // 팀1
      const songRight = team2SongsForLayout[row]  // 팀2

      if (songLeft) {
        const xLeft = padding
        drawSongCard(songLeft, xLeft, y, getJacketForSong(songLeft))
      }

      if (songRight) {
        const xRight = padding * 2 + cardWidth
        drawSongCard(songRight, xRight, y, getJacketForSong(songRight))
      }
    }

    setGeneratedImage(canvas.toDataURL("image/png"))
    setImageRoundIdx(roundIdx)
    setImageDialogOpen(true)
  }


  const copyImageToClipboard = async () => {
    if (!generatedImage) return

    try {
      const blob = await fetch(generatedImage).then((res) => res.blob())
      await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })])
      setCopiedId("image")
      setTimeout(() => setCopiedId(null), 2000)
    } catch (e) {
      console.error("Failed to copy image:", e)
      alert("이미지 복사에 실패했습니다.")
    }
  }

  const downloadImage = () => {
    if (!generatedImage) return

    const link = document.createElement("a")
    link.download = `round${imageRoundIdx + 1}_songs.png`
    link.href = generatedImage
    link.click()
  }

  const getOpponentSongs = (round: RoundData, teamIdx: 1 | 2, roundIdx: number): string[] => {
    // This function is only used for banned song selection, so it should refer to team1Songs/team2Songs or team1Songs2/team2Songs2
    if (roundIdx === 0 || roundIdx === 2) {
      return teamIdx === 1 ? round.team2Songs?.filter(Boolean) || [] : round.team1Songs?.filter(Boolean) || []
    } else if (roundIdx === 1) {
      return teamIdx === 1
        ? round.team2SongsLong?.filter(Boolean) || []
        : round.team1SongsLong?.filter(Boolean) || []
    } else if (roundIdx === 3) {
      return teamIdx === 1 ? round.team2Songs2?.filter(Boolean) || [] : round.team1Songs2?.filter(Boolean) || []
    }
    return [] // Should not happen for rounds 0-3
  }
  const getRound2StrategyOptions = (round: RoundData, teamIdx: 1 | 2): string[] => {
    const songs17 =
      (teamIdx === 1 ? round.team1Strategy17 : round.team2Strategy17) || []
    const songs18 =
      (teamIdx === 1 ? round.team1Strategy18 : round.team2Strategy18) || []

    return [...songs17, ...songs18].filter(Boolean)
  }
  const getStrategyUsed = (round: RoundData, teamIdx: 1 | 2): boolean => {
    return teamIdx === 1 ? round.team1StrategyUsed : round.team2StrategyUsed
  }

  const getStrategyTarget = (round: RoundData, teamIdx: 1 | 2): string => {
    return teamIdx === 1 ? round.team1StrategyTarget || "" : round.team2StrategyTarget || ""
  }

  const getStrategySelected = (round: RoundData, teamIdx: 1 | 2): string => {
    return teamIdx === 1 ? round.team1StrategySelected || "" : round.team2StrategySelected || ""
  }

  const exportCSV = () => {
    const rows: string[] = []
    rows.push("section,key,value,title,artist,jacket,level,type,date")

    // Escape function for CSV values
    const escapeCSV = (str: string) => {
      if (!str) return ""
      // Escape quotes by doubling them and wrap in quotes if contains comma or quote
      const escaped = str.replace(/"/g, '""')
      if (escaped.includes(",") || escaped.includes('"') || escaped.includes("\n")) {
        return `"${escaped}"`
      }
      return escaped
    }

    rows.push(`team,team1Name,${escapeCSV(data.team1.name)},,,,,,`)
    rows.push(`team,team1Player1,${escapeCSV(data.team1.players[0])},,,,,,`)
    rows.push(`team,team1Player2,${escapeCSV(data.team1.players[1])},,,,,,`)
    rows.push(`team,team1Player3,${escapeCSV(data.team1.players[2])},,,,,,`)
    rows.push(`team,team2Name,${escapeCSV(data.team2.name)},,,,,,`)
    rows.push(`team,team2Player1,${escapeCSV(data.team2.players[0])},,,,,,`)
    rows.push(`team,team2Player2,${escapeCSV(data.team2.players[1])},,,,,,`)
    rows.push(`team,team2Player3,${escapeCSV(data.team2.players[2])},,,,,,`)

    data.rounds.forEach((round, idx) => {
      const section = `round${idx + 1}`
      Object.entries(round).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v, i) => {
            const infoKey = `round${idx}_${key}_${i}`
            const info = data.songInfoMap[infoKey]
            if (info) {
              rows.push(
                `${section},${key}_${i},${escapeCSV(v)},${escapeCSV(info.title)},${escapeCSV(info.artist)},${escapeCSV(info.jacket)},${info.level},${escapeCSV(info.type)},${escapeCSV(info.date)}`,
              )
            } else {
              rows.push(`${section},${key}_${i},${escapeCSV(v)},,,,,,`)
            }
          })
        } else if (typeof value === "boolean") {
          rows.push(`${section},${key},${value},,,,,,`)
        } else if (typeof value === "string") {
          const infoKey = `round${idx}_${key}`
          const info = data.songInfoMap[infoKey]
          if (info) {
            rows.push(
              `${section},${key},${escapeCSV(value)},${escapeCSV(info.title)},${escapeCSV(info.artist)},${escapeCSV(info.jacket)},${info.level},${escapeCSV(info.type)},${escapeCSV(info.date)}`,
            )
          } else {
            rows.push(`${section},${key},${escapeCSV(value)},,,,,,`)
          }
        }
      })
    })

    const csv = rows.join("\n")
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" }) // Add BOM for Excel
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "tournament_data.csv"
    link.click()
    URL.revokeObjectURL(url)
  }

  const importCSV = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const text = event.target?.result as string
      const lines = text.split("\n").slice(1) // Skip header

      const newData = defaultData()
      const newSongInfoMap: SongInfoMap = {}

      lines.forEach((line) => {
        if (!line.trim()) return

        // Parse CSV with proper quote handling
        const values: string[] = []
        let current = ""
        let inQuotes = false

        for (let i = 0; i < line.length; i++) {
          const char = line[i]
          if (char === '"') {
            if (inQuotes && line[i + 1] === '"') {
              current += '"'
              i++ // Skip next quote
            } else {
              inQuotes = !inQuotes
            }
          } else if (char === "," && !inQuotes) {
            values.push(current.trim())
            current = ""
          } else {
            current += char
          }
        }
        values.push(current.trim())

        if (values.length < 3) return

        const [section, key, value, title, artist, jacket, level, type, date] = values

        // Store song info if available
        if (title && title.trim()) {
          const roundMatch = section.match(/round(\d+)/)
          if (roundMatch) {
            const roundIdx = Number.parseInt(roundMatch[1]) - 1
            // Fix the key format - remove duplicate array index handling
            let infoKey: string
            if (key.includes("_")) {
              const keyParts = key.split("_")
              const baseKey = keyParts.slice(0, -1).join("_")
              const arrayIdx = keyParts[keyParts.length - 1]
              infoKey = `round${roundIdx}_${baseKey}_${arrayIdx}`
            } else {
              infoKey = `round${roundIdx}_${key}`
            }

            newSongInfoMap[infoKey] = {
              title: title.trim(),
              artist: artist?.trim() || "",
              jacket: jacket?.trim() || "",
              level: Number.parseInt(level) || 0,
              type: type?.trim() || "",
              date: date?.trim() || "",
            }
          }
        }

        // Restore data values
        if (section === "team") {
          if (key === "team1Name") newData.team1.name = value
          else if (key === "team2Name") newData.team2.name = value
          else if (key.startsWith("team1Player")) {
            const idx = Number.parseInt(key.replace("team1Player", "")) - 1
            if (idx >= 0 && idx < 3) newData.team1.players[idx] = value
          } else if (key.startsWith("team2Player")) {
            const idx = Number.parseInt(key.replace("team2Player", "")) - 1
            if (idx >= 0 && idx < 3) newData.team2.players[idx] = value
          }
        } else if (section.startsWith("round")) {
          const roundIdx = Number.parseInt(section.replace("round", "")) - 1
          if (roundIdx >= 0 && roundIdx < 4) {
            const keyParts = key.split("_")
            const lastPart = keyParts[keyParts.length - 1]
            const isArrayIndex = !isNaN(Number.parseInt(lastPart))

            if (isArrayIndex) {
              const baseKey = keyParts.slice(0, -1).join("_")
              const arrayIdx = Number.parseInt(lastPart)

              const round = newData.rounds[roundIdx] as unknown as Record<string, unknown>
              if (!round[baseKey]) {
                // Initialize array based on key type
                if (baseKey.includes("SongsLong") || baseKey.includes("Strategy17") || baseKey.includes("Strategy18")) {
                  round[baseKey] = ["", "", "", "", ""]
                } else if (baseKey.includes("Songs2")) {
                  round[baseKey] = ["", ""]
                } else if (baseKey.includes("Songs") || baseKey.includes("StrategyOptions")) {
                  round[baseKey] = ["", "", ""]
                } else if (baseKey.includes("Players")) {
                  round[baseKey] = ["", ""]
                } else {
                  round[baseKey] = []
                }
              }
              const arr = round[baseKey] as string[]
              while (arr.length <= arrayIdx) {
                arr.push("")
              }
              arr[arrayIdx] = value
            } else {
              const round = newData.rounds[roundIdx] as unknown as Record<string, unknown>
              if (value.toLowerCase() === "true") {
                round[key] = true
              } else if (value.toLowerCase() === "false") {
                round[key] = false
              } else {
                round[key] = value
              }
            }
          }
        }
      })

      newData.songInfoMap = newSongInfoMap
      setData(newData)
    }
    reader.readAsText(file)
    e.target.value = ""
  }, [])

  const generateRecordingStartScript = (roundIdx: number) => {
    return `# 녹화 시작 안내
* ${roundIdx + 1}라운드 출전 선수분들 녹화 시작하셨으면 말씀 부탁드립니다.
* ${roundIdx + 1}라운드 출전 선수분들 타건음 마이크 음소거 한번 더 확인 부탁드립니다.`
  }

  const generateRecordingEndScript = (roundIdx: number) => {
    return `# 녹화 종료 안내
* ${roundIdx + 1}라운드 출전 선수분들 녹화 종료 부탁드립니다.
* 녹화하신 영상을 https://drive.google.com/drive/folders/1HCiwJYMPH-sRQ0gxGQGj-PmeM2GRwHYi 으로 파일 이름을 **플레이어_라운드** 형식으로 수정하여 전송 부탁드립니다.
-# 예시) 고갱_${roundIdx + 1}라운드`
  }

  const generateEntryScript = (roundIdx: number) => {
    const round = data.rounds[roundIdx]
    const isRound13 = roundIdx === 0 || roundIdx === 2
    const isRound4 = roundIdx === 3

    if (isRound13) {
      const team1Players = round.team1Players?.join(" ") || ""
      const team2Players = round.team2Players?.join(" ") || ""
      const team1Songs = round.team1Songs?.join(" , ") || ""
      const team2Songs = round.team2Songs?.join(" , ") || ""

      return `# ${roundIdx + 1}라운드 엔트리
* **팀 ${data.team1.name} : ${team1Players}**
  * 팀 **${data.team1.name}** 선곡 : **${team1Songs}**
* **팀 ${data.team2.name} : ${team2Players}**
  * 팀 **${data.team2.name}** 선곡 : **${team2Songs}**
## 밴 카드를 ${round.deadline || "??:??"}까지 결정하여 팀 채널에서 알려주시기 바랍니다!
* 밴 카드를 먼저 사용 후, 스트래티지 카드 사용 여부를 결정하여 주세요.
* 스트래티지 카드 사용을 하지 않는 경우, 사용하지 않는다고 알려주셔야 합니다.`
    } else if (isRound4) {
      const team1Songs = round.team1Songs2?.join(" , ") || ""
      const team2Songs = round.team2Songs2?.join(" , ") || ""

      return `# ${roundIdx + 1}라운드 엔트리
* **팀 ${data.team1.name} : ${round.team1Player || ""}**
  * 팀 **${data.team1.name}** 선곡 : **${team1Songs}**
* **팀 ${data.team2.name} : ${round.team2Player || ""}**
  * 팀 **${data.team2.name}** 선곡 : **${team2Songs}**
## 밴 카드를 ${round.deadline || "??:??"}까지 결정하여 팀 채널에서 알려주시기 바랍니다!`
    } else {
      const team1Songs = round.team1SongsLong?.join(" , ") || ""
      const team2Songs = round.team2SongsLong?.join(" , ") || ""

      return `# ${roundIdx + 1}라운드 엔트리
* **팀 ${data.team1.name} : ${round.team1Player || ""}**
  * 팀 **${data.team1.name}** 선곡 : **${team1Songs}**
* **팀 ${data.team2.name} : ${round.team2Player || ""}**
  * 팀 **${data.team2.name}** 선곡 : **${team2Songs}**
## 스트래티지 카드를 ${round.deadline || "??:??"}까지 결정하여 팀 채널에서 알려주시기 바랍니다!
* 스트래티지 카드 사용을 하지 않는 경우, 사용하지 않는다고 알려주셔야 합니다.`
    }
  }

  const generateStrategyScript = (roundIdx: number, teamIdx: 1 | 2) => {
    const round = data.rounds[roundIdx]
    const teamName = teamIdx === 1 ? data.team1.name : data.team2.name

    // ✅ 1,3라운드: 기존 포맷 유지 (랜덤 3곡)
    if (roundIdx === 0 || roundIdx === 2) {
      const options = teamIdx === 1 ? round.team1StrategyOptions : round.team2StrategyOptions

      if (!options || options.every((o) => !o)) return ""

      const filtered = options.filter((o) => o && o.trim())
      if (filtered.length === 0) return ""

      return `# 팀 ${teamName}이 ${roundIdx + 1}라운드 스트래티지 카드를 사용하였습니다!
## 랜덤으로 뽑힌 곡들 중에서 하나를 선택해주시길 바랍니다.
${filtered.map((song) => `* ${song}`).join("\n")}`
    }

    // ✅ 2라운드: 17렙 / 18렙 후보에서 선택
    if (roundIdx === 1) {
      const options17 = (teamIdx === 1 ? round.team1Strategy17 : round.team2Strategy17) || []
      const options18 = (teamIdx === 1 ? round.team1Strategy18 : round.team2Strategy18) || []

      const has17 = options17.some((o) => o && o.trim())
      const has18 = options18.some((o) => o && o.trim())
      if (!has17 && !has18) return ""

      let script = `# 팀 ${teamName}이 ${roundIdx + 1}라운드 스트래티지 카드를 사용하였습니다!
## 아래 곡들 중에서 **상대 자선곡에 사용할 스트래티지 곡**을 1곡 선택해주시길 바랍니다.\n`

      if (has17) {
        script += `\n### 17레벨 후보\n${options17
          .filter((s) => s && s.trim())
          .map((s) => `* ${s}`)
          .join("\n")}`
      }

      if (has18) {
        script += `\n\n### 18레벨 후보\n${options18
          .filter((s) => s && s.trim())
          .map((s) => `* ${s}`)
          .join("\n")}`
      }

      return script
    }

    // 다른 라운드는 현재 스트래티지 없음
    return ""
  }


  const generateArenaEntryScript = (roundIdx: number) => {
    const round = data.rounds[roundIdx]
    const isRound13 = roundIdx === 0 || roundIdx === 2
    const isRound4 = roundIdx === 3

    if (isRound13) {
      const team1Players = round.team1Players || ["", ""]
      const team1Songs = round.team1Songs || ["", "", ""]
      const team2Players = round.team2Players || ["", ""]
      const team2Songs = round.team2Songs || ["", "", ""]
      const team1Banned = round.team1BannedSong
      const team2Banned = round.team2BannedSong
      const team1StrategyTarget = round.team1StrategyTarget
      const team1StrategySelected = round.team1StrategySelected
      const team2StrategyTarget = round.team2StrategyTarget
      const team2StrategySelected = round.team2StrategySelected

      const team1FinalSongs = team1Songs.map((song) => {
        if (round.team2StrategyUsed && song === team2StrategyTarget && team2StrategySelected) {
          return team2StrategySelected
        }
        return song
      })

      const team2FinalSongs = team2Songs.map((song) => {
        if (round.team1StrategyUsed && song === team1StrategyTarget && team1StrategySelected) {
          return team1StrategySelected
        }
        return song
      })

      const team1PlayableSongs = team1FinalSongs.filter((song) => song && song !== team2Banned)
      const team2PlayableSongs = team2FinalSongs.filter((song) => song && song !== team1Banned)

      let script = `# ${roundIdx + 1}라운드 출전 선수 아레나 방번호 ${round.roomNumber || "??????"} 로 입장해주세요\n`

      team1PlayableSongs.forEach((song, idx) => {
        if (idx < 2 && team1Players[idx]) {
          script += `* 팀 **${data.team1.name}** 의 **${team1Players[idx]}** 선수는 자선곡 **${song}**을(를) 선곡해주세요.\n`
        }
      })

      if (team2Banned) {
        script += `* 팀 **${data.team1.name}** 의 자선곡 **${team2Banned}**는 밴 당하였습니다.\n`
      }

      team2PlayableSongs.forEach((song, idx) => {
        if (idx < 2 && team2Players[idx]) {
          script += `* 팀 **${data.team2.name}** 의 **${team2Players[idx]}** 선수는 자선곡 **${song}**을(를) 선곡해주세요.\n`
        }
      })

      if (team1Banned) {
        script += `* 팀 **${data.team2.name}** 의 자선곡 **${team1Banned}**는 밴 당하였습니다.\n`
      }

      script += `\n종료 후 나오는 리절트 창 촬영 부탁드립니다.\n`

      if (!round.team1StrategyUsed && !round.team2StrategyUsed) {
        script += `\n## 스트래티지 카드는 사용되지 않았습니다.`
      } else {
        if (round.team1StrategyUsed && team1StrategyTarget && team1StrategySelected) {
          script += `\n## 팀 ${data.team1.name} 에서 ${team1StrategyTarget}곡에 스트래티지 카드를 사용하여 무작위 선곡인 ${team1StrategySelected}으로 변경되었습니다.`
        }
        if (round.team2StrategyUsed && team2StrategyTarget && team2StrategySelected) {
          script += `\n## 팀 ${data.team2.name} 에서 ${team2StrategyTarget}곡에 스트래티지 카드를 사용하여 무작위 선곡인 ${team2StrategySelected}으로 변경되었습니다.`
        }
      }

      return script
    } else if (isRound4) {
      const team1Songs = round.team1Songs2 || ["", ""]
      const team2Songs = round.team2Songs2 || ["", ""]
      const team1Banned = round.team1BannedSong4
      const team2Banned = round.team2BannedSong4

      const team1PlayableSong = team1Songs.find((song) => song && song !== team2Banned) || team1Songs[0]
      const team2PlayableSong = team2Songs.find((song) => song && song !== team1Banned) || team2Songs[0]

      return `# ${roundIdx + 1}라운드 출전선수 싱글배틀 방번호 ${round.roomNumber || "??????"} 로 입장해주세요
* 팀 **${data.team1.name}** 의 **${round.team1Player || ""}** 선수는 자선곡 **${team1PlayableSong}** 을 **1번째로 골라주시고**, 지정곡 **${round.stage3DesignatedSong || "????"}** 을 **두번째로 골라주시기 바랍니다.**
* 팀 **${data.team2.name}** 의 **${round.team2Player || ""}** 선수는 자선곡 **${team2PlayableSong}** 을 **1번째로 골라주시고**, 지정곡 **${round.stage4DesignatedSong || "????"}** 을 **두번째로 골라주시기 바랍니다.**

종료 후 나오는 리절트 창 촬영 부탁드립니다.`
    } else {
      return `# ${roundIdx + 1}라운드 출전 선수 아레나 방번호 ${round.roomNumber || "??????"} 로 입장해주세요
* 팀 **${data.team1.name}** 의 **${round.team1Player || ""}** 선수
* 팀 **${data.team2.name}** 의 **${round.team2Player || ""}** 선수

종료 후 나오는 리절트 창 촬영 부탁드립니다.`
    }
  }

  const BanSelectDropdown = ({
    value,
    songs,
    onChange,
    placeholder,
  }: {
    value: string
    songs: string[]
    onChange: (value: string) => void
    placeholder: string
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
  )

  const StrategyTargetDropdown = ({
    value,
    songs,
    onChange,
    placeholder,
  }: {
    value: string
    songs: string[]
    onChange: (value: string) => void
    placeholder: string
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
  )

  const StrategySelectedDropdown = ({
    value,
    options,
    onChange,
    placeholder,
  }: {
    value: string
    options: string[]
    onChange: (value: string) => void
    placeholder: string
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
  )

  const ScriptCard = ({ title, script, id }: { title: string; script: string; id: string }) => (
    <Card className="bg-muted/30">
      <CardHeader className="py-2 px-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => copyToClipboard(script, id)}>
            {copiedId === id ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-3 pb-2">
        <pre className="text-xs whitespace-pre-wrap text-muted-foreground max-h-40 overflow-y-auto">{script}</pre>
      </CardContent>
    </Card>
  )

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <canvas ref={canvasRef} className="hidden" />

      {notification && (
        <div
          className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-lg shadow-lg animate-in fade-in slide-in-from-top-2 ${notification.type === "error" ? "bg-red-500/90 text-white" : "bg-green-500/90 text-white"
            }`}
        >
          <div className="flex items-center gap-2">
            {notification.type === "error" ? <X className="h-4 w-4" /> : <Check className="h-4 w-4" />}
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
            <input type="file" accept=".csv" onChange={importCSV} className="hidden" />
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
                    <div className="text-sm text-muted-foreground truncate">{chart.artist}</div>
                  </div>
                  <div className="text-sm font-medium px-2 py-1 bg-muted rounded flex-shrink-0">
                    {getTypeLabel(chart.type)} Lv.{chart.level}
                  </div>
                </div>
              ))}
              {filteredCharts.length === 0 && searchQuery && (
                <div className="text-center text-muted-foreground py-4">검색 결과가 없습니다</div>
              )}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Dialog open={imageDialogOpen} onOpenChange={setImageDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{imageRoundIdx + 1}라운드 선곡 목록 이미지</DialogTitle>
          </DialogHeader>
          <div className="flex justify-center overflow-auto">
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
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={downloadImage}>
              <Download className="h-4 w-4 mr-2" />
              다운로드
            </Button>
            <Button onClick={copyImageToClipboard}>
              {copiedId === "image" ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
              클립보드에 복사
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Tabs defaultValue="teams" className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="teams">팀 정보</TabsTrigger>
          <TabsTrigger value="round1">1라운드</TabsTrigger>
          <TabsTrigger value="round2">2라운드</TabsTrigger>
          <TabsTrigger value="round3">3라운드</TabsTrigger>
          <TabsTrigger value="round4">4라운드</TabsTrigger>
          <TabsTrigger value="common">공통 멘트</TabsTrigger>
        </TabsList>

        {/* Teams Tab */}
        <TabsContent value="teams" className="space-y-4">
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
                      onChange={(e) => updateTeam(teamIdx as 1 | 2, "name", e.target.value)}
                      placeholder="팀 이름"
                    />
                  </div>
                  {[0, 1, 2].map((playerIdx) => (
                    <div key={playerIdx}>
                      <Label>선수 {playerIdx + 1}</Label>
                      <Input
                        value={data[`team${teamIdx as 1 | 2}`].players[playerIdx]}
                        onChange={(e) => {
                          const newPlayers = [...data[`team${teamIdx as 1 | 2}`].players] as [string, string, string]
                          newPlayers[playerIdx] = e.target.value
                          updateTeam(teamIdx as 1 | 2, "players", newPlayers)
                        }}
                        placeholder={`선수 ${playerIdx + 1} 닉네임`}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Round 1 & 3 Tabs (2v2) */}
        {[0, 2].map((roundIdx) => (
          <TabsContent key={roundIdx} value={`round${roundIdx + 1}`} className="space-y-4">
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
                          onChange={(e) => updateRound(roundIdx, "roomNumber", e.target.value)}
                          placeholder="219219"
                        />
                      </div>
                      <div>
                        <Label>마감시간</Label>
                        <Input
                          value={data.rounds[roundIdx].deadline}
                          onChange={(e) => updateRound(roundIdx, "deadline", e.target.value)}
                          placeholder="13:00"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-500/30 bg-blue-500/5">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-400">사전 입력</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[1, 2].map((teamIdx) => (
                      <div key={teamIdx} className="space-y-3 p-3 bg-muted/30 rounded-lg">
                        <h4 className="font-medium">팀 {data[`team${teamIdx as 1 | 2}`].name || `팀${teamIdx}`}</h4>

                        <div>
                          <Label className="text-xs">출전 선수 (2명)</Label>
                          <div className="grid grid-cols-2 gap-2">
                            {[0, 1].map((playerIdx) => (
                              <Select
                                key={playerIdx}
                                value={
                                  (data.rounds[roundIdx][`team${teamIdx}Players` as keyof RoundData] as string[])?.[
                                  playerIdx
                                  ] || ""
                                }
                                onValueChange={(value) => {
                                  const newPlayers = [
                                    ...((data.rounds[roundIdx][
                                      `team${teamIdx}Players` as keyof RoundData
                                    ] as string[]) || ["", ""]),
                                  ] as [string, string]
                                  newPlayers[playerIdx] = value
                                  updateRound(roundIdx, `team${teamIdx}Players` as keyof RoundData, newPlayers)
                                }}
                              >
                                <SelectTrigger className="h-8 text-sm">
                                  <SelectValue placeholder={`선수 ${playerIdx + 1}`} />
                                </SelectTrigger>
                                <SelectContent>
                                  {data[`team${teamIdx as 1 | 2}`].players.filter(Boolean).map((player, idx) => (
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
                          <Label className="text-xs">선곡 (3곡) - 클릭하여 검색</Label>
                          <div className="space-y-1">
                            {[0, 1, 2].map((songIdx) => (
                              <SongInputField
                                key={songIdx}
                                value={
                                  (data.rounds[roundIdx][`team${teamIdx}Songs` as keyof RoundData] as string[])?.[
                                  songIdx
                                  ] || ""
                                }
                                placeholder={`곡 ${songIdx + 1} 클릭하여 검색`}
                                onClick={() => openSongSearch(roundIdx, `team${teamIdx}Songs`, songIdx)}
                                onClear={() => clearSong(roundIdx, `team${teamIdx}Songs`, songIdx)}
                              />
                            ))}
                          </div>
                        </div>

                        <div>
                          <Label className="text-xs">스트래티지 랜덤 3곡 (미리 뽑기)</Label>
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
                                placeholder={`랜덤곡 ${optIdx + 1} 클릭하여 검색`}
                                onClick={() => openSongSearch(roundIdx, `team${teamIdx}StrategyOptions`, optIdx)}
                                onClear={() => clearSong(roundIdx, `team${teamIdx}StrategyOptions`, optIdx)}
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
                    <CardTitle className="text-lg text-orange-400">경기 진행 중</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[1, 2].map((teamIdx) => (
                      <div key={teamIdx} className="space-y-3 p-3 bg-muted/30 rounded-lg">
                        <h4 className="font-medium">팀 {data[`team${teamIdx as 1 | 2}`].name || `팀${teamIdx}`}</h4>

                        <div>
                          <Label className="text-xs">밴할 곡 (상대 팀 선곡에서 선택)</Label>
                          <BanSelectDropdown
                            value={
                              teamIdx === 1
                                ? data.rounds[roundIdx].team1BannedSong || ""
                                : data.rounds[roundIdx].team2BannedSong || ""
                            }
                            songs={getOpponentSongs(data.rounds[roundIdx], teamIdx as 1 | 2, roundIdx)}
                            onChange={(value) =>
                              updateRound(
                                roundIdx,
                                teamIdx === 1 ? "team1BannedSong" : "team2BannedSong",
                                value === "none" ? "" : value,
                              )
                            }
                            placeholder="밴할 곡 선택"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Switch
                              id={`r${roundIdx}-team${teamIdx}-strategy-switch`}
                              checked={getStrategyUsed(data.rounds[roundIdx], teamIdx as 1 | 2)}
                              onCheckedChange={(checked) =>
                                updateRound(
                                  roundIdx,
                                  teamIdx === 1 ? "team1StrategyUsed" : "team2StrategyUsed",
                                  checked,
                                )
                              }
                            />
                            <Label htmlFor={`r${roundIdx}-team${teamIdx}-strategy-switch`} className="text-xs">
                              스트래티지 카드 사용
                            </Label>
                          </div>

                          {getStrategyUsed(data.rounds[roundIdx], teamIdx as 1 | 2) && (
                            <div className="space-y-2 pl-6">
                              <div>
                                <Label className="text-xs">대상곡 (상대 팀 곡 선택)</Label>
                                <StrategyTargetDropdown
                                  value={getStrategyTarget(data.rounds[roundIdx], teamIdx as 1 | 2)}
                                  songs={getOpponentSongs(data.rounds[roundIdx], teamIdx as 1 | 2, roundIdx)}
                                  onChange={(value) =>
                                    updateRound(
                                      roundIdx,
                                      teamIdx === 1 ? "team1StrategyTarget" : "team2StrategyTarget",
                                      value === "none" ? "" : value,
                                    )
                                  }
                                  placeholder="대상곡 선택"
                                />
                              </div>
                              <div>
                                <Label className="text-xs">선택한 랜덤곡</Label>
                                <StrategySelectedDropdown
                                  value={getStrategySelected(data.rounds[roundIdx], teamIdx as 1 | 2)}
                                  options={
                                    (data.rounds[roundIdx][
                                      `team${teamIdx}StrategyOptions` as keyof RoundData
                                    ] as string[]) || []
                                  }
                                  onChange={(value) =>
                                    updateRound(
                                      roundIdx,
                                      teamIdx === 1 ? "team1StrategySelected" : "team2StrategySelected",
                                      value === "none" ? "" : value,
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

                <ScriptCard
                  title="녹화 시작 안내"
                  script={generateRecordingStartScript(roundIdx)}
                  id={`r${roundIdx}-rec-start`}
                />
                <ScriptCard title="엔트리 공개" script={generateEntryScript(roundIdx)} id={`r${roundIdx}-entry`} />
                {[1, 2].map((teamIdx) => {
                  const script = generateStrategyScript(roundIdx, teamIdx as 1 | 2)
                  return script ? (
                    <ScriptCard
                      key={teamIdx}
                      title={`팀 ${data[`team${teamIdx as 1 | 2}`].name || teamIdx} 스트래티지 안내`}
                      script={script}
                      id={`r${roundIdx}-strat-${teamIdx}`}
                    />
                  ) : null
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
                        onChange={(e) => updateRound(1, "roomNumber", e.target.value)}
                        placeholder="219219"
                      />
                    </div>
                    <div>
                      <Label>마감시간</Label>
                      <Input
                        value={data.rounds[1].deadline}
                        onChange={(e) => updateRound(1, "deadline", e.target.value)}
                        placeholder="13:00"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-500/30 bg-blue-500/5">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-400">사전 입력</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2].map((teamIdx) => (
                    <div key={teamIdx} className="space-y-3 p-3 bg-muted/30 rounded-lg">
                      <h4 className="font-medium">팀 {data[`team${teamIdx as 1 | 2}`].name || `팀${teamIdx}`}</h4>

                      <div>
                        <Label className="text-xs">출전 선수</Label>
                        <Select
                          value={teamIdx === 1 ? data.rounds[1].team1Player || "" : data.rounds[1].team2Player || ""}
                          onValueChange={(value) =>
                            updateRound(1, teamIdx === 1 ? "team1Player" : "team2Player", value)
                          }
                        >
                          <SelectTrigger className="h-8 text-sm">
                            <SelectValue placeholder="선수 선택" />
                          </SelectTrigger>
                          <SelectContent>
                            {data[`team${teamIdx as 1 | 2}`].players.filter(Boolean).map((player, idx) => (
                              <SelectItem key={idx} value={player}>
                                {player}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="text-xs">선곡 (5곡) - 클릭하여 검색</Label>
                        <div className="space-y-1">
                          {[0, 1, 2, 3, 4].map((songIdx) => (
                            <SongInputField
                              key={songIdx}
                              value={
                                (data.rounds[1][`team${teamIdx}SongsLong` as keyof RoundData] as string[])?.[songIdx] ||
                                ""
                              }
                              placeholder={`곡 ${songIdx + 1} 클릭하여 검색`}
                              onClick={() => openSongSearch(1, `team${teamIdx}SongsLong`, songIdx)}
                              onClear={() => clearSong(1, `team${teamIdx}SongsLong`, songIdx)}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label className="text-xs">스트래티지 17렙</Label>
                          {[0, 1, 2].map((optIdx) => (
                            <div key={optIdx} className="mt-1">
                              <SongInputField
                                value={
                                  (data.rounds[1][`team${teamIdx}Strategy17` as keyof RoundData] as string[])?.[
                                  optIdx
                                  ] || ""
                                }
                                placeholder={`17렙 ${optIdx + 1}`}
                                onClick={() => openSongSearch(1, `team${teamIdx}Strategy17`, optIdx)}
                                onClear={() => clearSong(1, `team${teamIdx}Strategy17`, optIdx)}
                              />
                            </div>
                          ))}
                        </div>
                        <div>
                          <Label className="text-xs">스트래티지 18렙</Label>
                          {[0, 1, 2].map((optIdx) => (
                            <div key={optIdx} className="mt-1">
                              <SongInputField
                                value={
                                  (data.rounds[1][`team${teamIdx}Strategy18` as keyof RoundData] as string[])?.[
                                  optIdx
                                  ] || ""
                                }
                                placeholder={`18렙 ${optIdx + 1}`}
                                onClick={() => openSongSearch(1, `team${teamIdx}Strategy18`, optIdx)}
                                onClear={() => clearSong(1, `team${teamIdx}Strategy18`, optIdx)}
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
                        팀 {data[`team${teamIdx as 1 | 2}`].name || `팀${teamIdx}`}
                      </h4>

                      {/* 스트레티지 사용 스위치 */}
                      <div className="flex items-center gap-2">
                        <Switch
                          id={`r2-team${teamIdx}-strategy-switch`}
                          checked={getStrategyUsed(data.rounds[1], teamIdx as 1 | 2)}
                          onCheckedChange={(checked) =>
                            updateRound(
                              1,
                              teamIdx === 1
                                ? "team1StrategyUsed"
                                : "team2StrategyUsed",
                              checked,
                            )
                          }
                        />
                        <Label
                          htmlFor={`r2-team${teamIdx}-strategy-switch`}
                          className="text-xs"
                        >
                          스트레티지 카드 사용
                        </Label>
                      </div>

                      {getStrategyUsed(data.rounds[1], teamIdx as 1 | 2) && (
                        <div className="space-y-2 pl-6">
                          {/* 5곡 중에서 스트레티지 대상 곡 선택 */}
                          <div>
                            <Label className="text-xs">
                              스트레티지를 적용할 상대곡 (5곡 중 선택)
                            </Label>
                            <StrategyTargetDropdown
                              value={getStrategyTarget(data.rounds[1], teamIdx as 1 | 2)}
                              songs={getOpponentSongs(data.rounds[1], teamIdx as 1 | 2, 1)}  // ✅ 여기!
                              onChange={(value) =>
                                updateRound(
                                  1,
                                  teamIdx === 1 ? "team1StrategyTarget" : "team2StrategyTarget",
                                  value === "none" ? "" : value,
                                )
                              }
                              placeholder="상대 자선곡 선택"   // 문구도 상대곡임을 명시
                            />
                          </div>

                          {/* 17/18렙 후보 중에서 최종 스트레티지 곡 선택 */}
                          <div>
                            <Label className="text-xs">
                              선택된 스트레티지 곡 (17/18렙 후보 중)
                            </Label>
                            <StrategySelectedDropdown
                              value={getStrategySelected(
                                data.rounds[1],
                                teamIdx as 1 | 2,
                              )}
                              options={getRound2StrategyOptions(
                                data.rounds[1],
                                teamIdx as 1 | 2,
                              )}
                              onChange={(value) =>
                                updateRound(
                                  1,
                                  teamIdx === 1
                                    ? "team1StrategySelected"
                                    : "team2StrategySelected",
                                  value === "none" ? "" : value,
                                )
                              }
                              placeholder="스트레티지 곡 선택"
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
              <Button variant="outline" className="w-full bg-transparent" onClick={() => generateSongListImage(1)}>
                <ImageIcon className="h-4 w-4 mr-2" />
                선곡 목록 이미지 생성
              </Button>

              <ScriptCard title="녹화 시작 안내" script={generateRecordingStartScript(1)} id="r2-rec-start" />
              <ScriptCard title="엔트리 공개" script={generateEntryScript(1)} id="r2-entry" />
              <div className="space-y-2">
                {[1, 2].map((teamIdx) => {
                  const script = generateStrategyScript(1, teamIdx as 1 | 2)
                  return script ? (
                    <ScriptCard
                      key={teamIdx}
                      title={`팀 ${data[`team${teamIdx as 1 | 2}`].name || teamIdx} 스트래티지 안내`}
                      script={script}
                      id={`r2-strat-${teamIdx}`}
                    />
                  ) : null
                })}
              </div>
              <ScriptCard title="아레나 입장 안내" script={generateArenaEntryScript(1)} id="r2-arena" />
              <ScriptCard title="녹화 종료 안내" script={generateRecordingEndScript(1)} id="r2-rec-end" />
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
                        onChange={(e) => updateRound(3, "roomNumber", e.target.value)}
                        placeholder="219219"
                      />
                    </div>
                    <div>
                      <Label>마감시간</Label>
                      <Input
                        value={data.rounds[3].deadline}
                        onChange={(e) => updateRound(3, "deadline", e.target.value)}
                        placeholder="13:00"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-500/30 bg-purple-500/5">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-400">주최측 지정곡</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <Label className="text-xs">3스테이지 지정곡 - 클릭하여 검색</Label>
                    <SongInputField
                      value={data.rounds[3].stage3DesignatedSong || ""}
                      placeholder="3스테이지 지정곡"
                      onClick={() => openSongSearch(3, "stage3DesignatedSong")}
                      onClear={() => clearSong(3, "stage3DesignatedSong")}
                    />
                  </div>
                  <div>
                    <Label className="text-xs">4스테이지 지정곡 - 클릭하여 검색</Label>
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
                  <CardTitle className="text-lg text-blue-400">사전 입력</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2].map((teamIdx) => (
                    <div key={teamIdx} className="space-y-3 p-3 bg-muted/30 rounded-lg">
                      <h4 className="font-medium">팀 {data[`team${teamIdx as 1 | 2}`].name || `팀${teamIdx}`}</h4>

                      <div>
                        <Label className="text-xs">출전 선수</Label>
                        <Select
                          value={teamIdx === 1 ? data.rounds[3].team1Player || "" : data.rounds[3].team2Player || ""}
                          onValueChange={(value) =>
                            updateRound(3, teamIdx === 1 ? "team1Player" : "team2Player", value)
                          }
                        >
                          <SelectTrigger className="h-8 text-sm">
                            <SelectValue placeholder="선수 선택" />
                          </SelectTrigger>
                          <SelectContent>
                            {data[`team${teamIdx as 1 | 2}`].players.filter(Boolean).map((player, idx) => (
                              <SelectItem key={idx} value={player}>
                                {player}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label className="text-xs">선곡 (2곡) - 클릭하여 검색</Label>
                        <div className="space-y-1">
                          {[0, 1].map((songIdx) => (
                            <SongInputField
                              key={songIdx}
                              value={
                                (data.rounds[3][`team${teamIdx}Songs2` as keyof RoundData] as string[])?.[songIdx] || ""
                              }
                              placeholder={`곡 ${songIdx + 1} 클릭하여 검색`}
                              onClick={() => openSongSearch(3, `team${teamIdx}Songs2`, songIdx)}
                              onClear={() => clearSong(3, `team${teamIdx}Songs2`, songIdx)}
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
                  <CardTitle className="text-lg text-orange-400">경기 진행 중</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2].map((teamIdx) => (
                    <div key={teamIdx} className="space-y-3 p-3 bg-muted/30 rounded-lg">
                      <h4 className="font-medium">팀 {data[`team${teamIdx as 1 | 2}`].name || `팀${teamIdx}`}</h4>

                      <div>
                        <Label className="text-xs">밴할 곡 (상대 팀 선곡에서 선택)</Label>
                        <BanSelectDropdown
                          value={
                            teamIdx === 1
                              ? data.rounds[3].team1BannedSong4 || ""
                              : data.rounds[3].team2BannedSong4 || ""
                          }
                          songs={getOpponentSongs(data.rounds[3], teamIdx as 1 | 2, 3)}
                          onChange={(value) =>
                            updateRound(
                              3,
                              teamIdx === 1 ? "team1BannedSong4" : "team2BannedSong4",
                              value === "none" ? "" : value,
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
              <Button variant="outline" className="w-full bg-transparent" onClick={() => generateSongListImage(3)}>
                <ImageIcon className="h-4 w-4 mr-2" />
                선곡 목록 이미지 생성
              </Button>

              <ScriptCard title="녹화 시작 안내" script={generateRecordingStartScript(3)} id="r4-rec-start" />
              <ScriptCard title="엔트리 공개" script={generateEntryScript(3)} id="r4-entry" />
              <ScriptCard title="아레나 입장 안내" script={generateArenaEntryScript(3)} id="r4-arena" />
              <ScriptCard title="녹화 종료 안내" script={generateRecordingEndScript(3)} id="r4-rec-end" />
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
                      "common-pre",
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
  )
}
