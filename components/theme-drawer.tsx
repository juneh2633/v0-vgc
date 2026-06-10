"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Shuffle, RotateCcw } from "lucide-react"
import type { ThemeData, ThemeSong } from "@/lib/types"
import Image from "next/image"

interface ThemeDrawerProps {
  data: ThemeData
  onBack: () => void
}

export function ThemeDrawer({ data, onBack }: ThemeDrawerProps) {
  const [selectedTheme, setSelectedTheme] = useState<string>("")
  const [songCount, setSongCount] = useState<number>(1)
  const [drawnSongs, setDrawnSongs] = useState<ThemeSong[]>([])
  const [hasDrawn, setHasDrawn] = useState(false)

  const [isAnimating, setIsAnimating] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [currentResultIndex, setCurrentResultIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const currentTheme = data.themes.find((t) => t.name === selectedTheme)
  const maxSongs = currentTheme?.songs.length || 0

  const handleDraw = () => {
    if (!currentTheme) return

    // 가중치를 반영하여 곡 풀 생성 (weight 만큼 해당 곡 복제)
    const weightedPool: ThemeSong[] = []
    currentTheme.songs.forEach((song) => {
      const weight = song.weight || 1
      for (let i = 0; i < weight; i++) {
        weightedPool.push(song)
      }
    })

    // 셔플 후 중복 제거하며 선택
    const shuffled = weightedPool.sort(() => Math.random() - 0.5)
    const selected: ThemeSong[] = []
    const selectedIds = new Set<string>()

    for (const song of shuffled) {
      const uniqueKey = song.uniqueId || `${song.chartIdx}-${song.title}`
      if (!selectedIds.has(uniqueKey)) {
        selected.push(song)
        selectedIds.add(uniqueKey)
        if (selected.length >= Math.min(songCount, maxSongs)) {
          break
        }
      }
    }

    setDrawnSongs(selected)
    setIsAnimating(true)
    setShowResult(false)
    setCurrentResultIndex(0)
  }

  useEffect(() => {
    if (isAnimating && videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }, [isAnimating, currentResultIndex])

  const handleVideoEnded = () => {
    setShowResult(true)
  }

  const handleNextResult = () => {
    if (currentResultIndex < drawnSongs.length - 1) {
      // 다음 곡 결과로 이동
      setCurrentResultIndex((prev) => prev + 1)
      setShowResult(false)
      if (videoRef.current) {
        videoRef.current.currentTime = 0
        videoRef.current.play()
      }
    } else {
      // 모든 결과 표시 완료
      setIsAnimating(false)
      setShowResult(false)
      setHasDrawn(true)
    }
  }

  const handleReset = () => {
    setDrawnSongs([])
    setHasDrawn(false)
    setIsAnimating(false)
    setShowResult(false)
    setCurrentResultIndex(0)
  }

  const handleSkipAnimation = () => {
    setIsAnimating(false)
    setShowResult(false)
    setHasDrawn(true)
  }

  const getTypeLabel = (type: string) => {
    const typeMap: Record<string, string> = {
      novice: "NOV",
      advanced: "ADV",
      exhaust: "EXH",
      maximum: "MXM",
      infinite: "INF",
      gravity: "GRV",
      heavenly: "HVN",
      vivid: "VVD",
      exceed: "XCD",
      ultimate: "ULT",
      nabla: "NBL",
    }
    return typeMap[type.toLowerCase()] || type.toUpperCase()
  }

  const currentSong = drawnSongs[currentResultIndex]

  return (
    <div className="container mx-auto py-8 px-4">
      {isAnimating && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reviv-oD81Rznit8NPTsk15zddgnlxVR9EPJ.webm"
            className="absolute inset-0 w-full h-full object-cover"
            onEnded={handleVideoEnded}
          />

          {/* 결과 표시 - 영상이 끝난 후에만 표시 */}
          {showResult && currentSong && (
            <div
              className="relative z-10 text-center animate-in fade-in zoom-in duration-500 cursor-pointer"
              onClick={handleNextResult}
            >
              <div className="bg-black/70 backdrop-blur-sm rounded-xl p-8 max-w-md mx-4">
                <div className="text-muted-foreground mb-2">
                  {currentResultIndex + 1} / {drawnSongs.length}
                </div>
                {currentSong.jacket && (
                  <Image
                    src={currentSong.jacket || "/placeholder.svg"}
                    alt={currentSong.title}
                    width={200}
                    height={200}
                    className="rounded-lg mx-auto mb-4"
                  />
                )}
                <h2 className="text-2xl font-bold text-white mb-2">{currentSong.title}</h2>
                <p className="text-gray-300 mb-2">{currentSong.artist}</p>
                <p className="text-lg text-yellow-400">
                  {getTypeLabel(currentSong.type)} Lv.{currentSong.level}
                </p>
                {currentSong.comment && (
                  <p className="mt-4 text-sm text-gray-400 bg-white/10 rounded px-3 py-2">{currentSong.comment}</p>
                )}
                <p className="mt-4 text-sm text-white/50">
                  {currentResultIndex < drawnSongs.length - 1 ? "클릭하여 다음 곡 보기" : "클릭하여 결과 확인"}
                </p>
              </div>
            </div>
          )}

          {/* 스킵 버튼 */}
          <Button
            variant="ghost"
            className="absolute bottom-8 right-8 text-white/60 hover:text-white"
            onClick={handleSkipAnimation}
          >
            건너뛰기
          </Button>
        </div>
      )}

      <Button variant="ghost" onClick={onBack} className="mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        돌아가기
      </Button>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Settings Card */}
        <Card>
          <CardHeader>
            <CardTitle>추첨 설정</CardTitle>
            <CardDescription>테마와 추첨할 곡 수를 선택하세요</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>테마 선택</Label>
              <Select value={selectedTheme} onValueChange={setSelectedTheme}>
                <SelectTrigger>
                  <SelectValue placeholder="테마를 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  {data.themes.map((theme) => (
                    <SelectItem key={theme.name} value={theme.name}>
                      {theme.name} ({theme.songs.length}곡)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>추첨할 곡 수 (최대 {maxSongs}곡)</Label>
              <Input
                type="number"
                min={1}
                max={maxSongs}
                value={songCount}
                onChange={(e) => setSongCount(Math.max(1, Math.min(maxSongs, Number.parseInt(e.target.value) || 1)))}
                disabled={!selectedTheme}
              />
            </div>

            <div className="flex gap-2">
              <Button className="flex-1" onClick={handleDraw} disabled={!selectedTheme || maxSongs === 0}>
                <Shuffle className="w-4 h-4 mr-2" />
                추첨하기
              </Button>
              {hasDrawn && (
                <Button variant="outline" onClick={handleReset}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  초기화
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results Card */}
        {hasDrawn && drawnSongs.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>추첨 결과</CardTitle>
              <CardDescription>
                {selectedTheme} 테마에서 {drawnSongs.length}곡이 선택되었습니다
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {drawnSongs.map((song, index) => (
                  <div
                    key={`${song.uniqueId || song.chartIdx}-${index}`}
                    className="flex items-start gap-4 p-4 bg-muted rounded-lg"
                  >
                    <div className="text-2xl font-bold text-muted-foreground w-8">{index + 1}</div>
                    {song.jacket && (
                      <Image
                        src={song.jacket || "/placeholder.svg"}
                        alt={song.title}
                        width={64}
                        height={64}
                        className="rounded-lg"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-lg">{song.title}</div>
                      <div className="text-muted-foreground">{song.artist}</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {getTypeLabel(song.type)} Lv.{song.level}
                      </div>
                      {song.comment && (
                        <div className="mt-2 text-sm bg-background px-3 py-2 rounded border">{song.comment}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
