"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Plus, Download, Trash2, Search, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Theme, ThemeSong, ChartData } from "@/lib/types"
import { exportToCSV, downloadCSV } from "@/lib/csv-utils"
import useSWR from "swr"
import Image from "next/image"

const fetcher = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`)
  }
  const data = await res.json()
  return data
}

interface ThemeEditorProps {
  onBack: () => void
}

interface FlattenedChart {
  songIdx: number
  chartIdx: number
  title: string
  artist: string
  level: number
  type: string
  jacket: string
}

export function ThemeEditor({ onBack }: ThemeEditorProps) {
  const [themes, setThemes] = useState<Theme[]>([])
  const [activeTheme, setActiveTheme] = useState<string>("")
  const [newThemeName, setNewThemeName] = useState("")
  const [isAddingTheme, setIsAddingTheme] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [levelFilter, setLevelFilter] = useState<string>("all")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [editingComment, setEditingComment] = useState<{ themeIdx: number; songIdx: number } | null>(null)
  const [editingWeight, setEditingWeight] = useState<{ themeIdx: number; songIdx: number } | null>(null)

  const { data: songData, error, isLoading } = useSWR<{ chartData: ChartData[] }>("/api/songs", fetcher)

  const allCharts: FlattenedChart[] = (songData?.chartData || []).flatMap((song) =>
    song.chart.map((chart) => ({
      songIdx: song.songIdx,
      chartIdx: chart.chartIdx,
      title: song.title,
      artist: song.artist,
      level: chart.level,
      type: chart.type,
      jacket: chart.jacket,
    })),
  )

  const filteredCharts = allCharts.filter((chart) => {
    const matchesSearch =
      chart.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chart.artist.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLevel = levelFilter === "all" || chart.level === Number.parseInt(levelFilter)
    return matchesSearch && matchesLevel
  })

  const handleAddTheme = () => {
    if (!newThemeName.trim()) return

    const newTheme: Theme = {
      name: newThemeName.trim(),
      songs: [],
    }

    setThemes([...themes, newTheme])
    setActiveTheme(newThemeName.trim())
    setNewThemeName("")
    setIsAddingTheme(false)
  }

  const handleDeleteTheme = (themeName: string) => {
    setThemes(themes.filter((t) => t.name !== themeName))
    if (activeTheme === themeName) {
      setActiveTheme(themes[0]?.name || "")
    }
  }

  const handleAddChart = (chart: FlattenedChart) => {
    const themeIndex = themes.findIndex((t) => t.name === activeTheme)
    if (themeIndex === -1) return

    // Generate a unique ID for this entry (allows duplicates)
    const uniqueId = `${chart.chartIdx}-${Date.now()}`

    const newSong: ThemeSong = {
      songIdx: chart.songIdx,
      chartIdx: chart.chartIdx,
      title: chart.title,
      artist: chart.artist,
      jacket: chart.jacket,
      level: chart.level,
      type: chart.type,
      comment: "",
      weight: 1,
      uniqueId, // Add unique ID for duplicate support
    }

    const updatedThemes = [...themes]
    updatedThemes[themeIndex].songs.push(newSong)
    setThemes(updatedThemes)
    setIsSearchOpen(false)
    setSearchQuery("")
  }

  const handleRemoveSong = (themeIndex: number, songIndex: number) => {
    const updatedThemes = [...themes]
    updatedThemes[themeIndex].songs.splice(songIndex, 1)
    setThemes(updatedThemes)
  }

  const handleUpdateComment = (themeIndex: number, songIndex: number, comment: string) => {
    const updatedThemes = [...themes]
    updatedThemes[themeIndex].songs[songIndex].comment = comment
    setThemes(updatedThemes)
  }

  const handleUpdateWeight = (themeIndex: number, songIndex: number, weight: number) => {
    const updatedThemes = [...themes]
    updatedThemes[themeIndex].songs[songIndex].weight = Math.max(1, weight)
    setThemes(updatedThemes)
  }

  const handleExport = () => {
    const csv = exportToCSV({ themes })
    downloadCSV(csv, "theme-songs.csv")
  }

  const currentThemeIndex = themes.findIndex((t) => t.name === activeTheme)

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

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          돌아가기
        </Button>
        <Button onClick={handleExport} disabled={themes.length === 0}>
          <Download className="w-4 h-4 mr-2" />
          Export (CSV)
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>테마 에디터</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Theme Tabs */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            {themes.map((theme) => (
              <div key={theme.name} className="flex items-center">
                <Button
                  variant={activeTheme === theme.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveTheme(theme.name)}
                  className="rounded-r-none"
                >
                  {theme.name} ({theme.songs.length})
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-l-none border-l-0 px-2 bg-transparent"
                  onClick={() => handleDeleteTheme(theme.name)}
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            ))}

            {isAddingTheme ? (
              <div className="flex items-center gap-2">
                <Input
                  placeholder="테마 이름"
                  value={newThemeName}
                  onChange={(e) => setNewThemeName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddTheme()}
                  className="w-32 h-8"
                  autoFocus
                />
                <Button size="sm" onClick={handleAddTheme}>
                  추가
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setIsAddingTheme(false)}>
                  취소
                </Button>
              </div>
            ) : (
              <Button variant="outline" size="sm" onClick={() => setIsAddingTheme(true)}>
                <Plus className="w-4 h-4 mr-1" />
                테마 추가
              </Button>
            )}
          </div>

          {/* Song List (Spreadsheet-like) */}
          {currentThemeIndex !== -1 && (
            <div className="border rounded-lg overflow-hidden">
              <div className="grid grid-cols-12 gap-2 p-3 bg-muted font-medium text-sm">
                <div className="col-span-1"></div>
                <div className="col-span-3">곡명</div>
                <div className="col-span-2">아티스트</div>
                <div className="col-span-1">레벨</div>
                <div className="col-span-1">가중치</div>
                <div className="col-span-3">코멘트</div>
                <div className="col-span-1"></div>
              </div>

              {/* Song Rows */}
              <div className="divide-y">
                {themes[currentThemeIndex].songs.map((song, songIdx) => (
                  <div
                    key={song.uniqueId || `${song.chartIdx}-${songIdx}`}
                    className="grid grid-cols-12 gap-2 p-3 items-center hover:bg-muted/50"
                  >
                    <div className="col-span-1">
                      {song.jacket && (
                        <Image
                          src={song.jacket || "/placeholder.svg"}
                          alt={song.title}
                          width={32}
                          height={32}
                          className="rounded"
                        />
                      )}
                    </div>
                    <div className="col-span-3 text-sm truncate">{song.title}</div>
                    <div className="col-span-2 text-sm text-muted-foreground truncate">{song.artist}</div>
                    <div className="col-span-1 text-sm">
                      <span className="font-medium">{getTypeLabel(song.type)}</span>
                      <span className="ml-1 text-muted-foreground">{song.level}</span>
                    </div>
                    <div className="col-span-1">
                      <Input
                        type="number"
                        min={1}
                        max={99}
                        value={song.weight}
                        onChange={(e) =>
                          handleUpdateWeight(currentThemeIndex, songIdx, Number.parseInt(e.target.value) || 1)
                        }
                        className="h-7 text-sm w-14 text-center"
                      />
                    </div>
                    <div className="col-span-3">
                      {editingComment?.themeIdx === currentThemeIndex && editingComment?.songIdx === songIdx ? (
                        <Input
                          value={song.comment}
                          onChange={(e) => handleUpdateComment(currentThemeIndex, songIdx, e.target.value)}
                          onBlur={() => setEditingComment(null)}
                          onKeyDown={(e) => e.key === "Enter" && setEditingComment(null)}
                          className="h-7 text-sm"
                          autoFocus
                        />
                      ) : (
                        <div
                          className="text-sm text-muted-foreground cursor-pointer hover:bg-muted px-2 py-1 rounded min-h-[28px]"
                          onClick={() => setEditingComment({ themeIdx: currentThemeIndex, songIdx })}
                        >
                          {song.comment || <span className="italic text-muted-foreground/50">코멘트 추가...</span>}
                        </div>
                      )}
                    </div>
                    <div className="col-span-1">
                      <Button variant="ghost" size="sm" onClick={() => handleRemoveSong(currentThemeIndex, songIdx)}>
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                ))}

                {/* Add Song Button */}
                <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
                  <DialogTrigger asChild>
                    <div className="p-3 cursor-pointer hover:bg-muted/50 text-muted-foreground text-sm flex items-center gap-2">
                      <Plus className="w-4 h-4" />곡 추가하기...
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-[90vw] overflow-visible">
                    <DialogHeader>
                      <DialogTitle>곡 검색</DialogTitle>
                    </DialogHeader>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          placeholder="곡명 또는 아티스트로 검색..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <Select value={levelFilter} onValueChange={setLevelFilter}>
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="레벨" />
                        </SelectTrigger>
                        <SelectContent position="popper" sideOffset={4} className="max-h-[300px]">
                          <SelectItem value="all">전체 레벨</SelectItem>
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
                        {filteredCharts.slice(0, 100).map((chart) => (
                          <div
                            key={chart.chartIdx}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer"
                            onClick={() => handleAddChart(chart)}
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
                          <div className="text-center py-8 text-muted-foreground">검색 결과가 없습니다</div>
                        )}
                        {!searchQuery && levelFilter === "all" && (
                          <div className="text-center py-8 text-muted-foreground">
                            검색어를 입력하거나 레벨을 선택하세요
                          </div>
                        )}
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          )}

          {themes.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">테마를 추가하여 시작하세요</div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
