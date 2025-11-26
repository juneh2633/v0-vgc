"use client"

import { useState, useMemo } from "react"
import useSWR from "swr"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Loader2 } from "lucide-react"

interface MegamixChart {
  level: number
  type: string
  jacket: string
  title: string
  artist?: string
  version: number
  date: string
}

interface MegamixResponse {
  data: MegamixChart[]
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const VERSION_NAMES: Record<number, string> = {
  1: "BOOTH",
  2: "INFINITE INFECTION",
  3: "GRAVITY WARS",
  4: "HEAVENLY HAVEN",
  5: "VIVID WAVE",
  6: "EXCEED GEAR",
}

const LEVELS = [17, 18, 19, 20]

export function MegamixBrowser() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLevels, setSelectedLevels] = useState<number[]>([17, 18, 19, 20])
  const [selectedVersion, setSelectedVersion] = useState<number | "all">("all")

  const { data, isLoading, error } = useSWR<MegamixResponse>(
    "/api/megamix?minLevel=17&maxLevel=20&minVersion=1&maxVersion=6",
    fetcher,
  )

  const allCharts = useMemo(() => {
    if (!data?.data) return []
    return data.data.filter((chart) => chart.level >= 17)
  }, [data])

  // Filter charts based on search, level, and version
  const filteredCharts = useMemo(() => {
    return allCharts.filter((chart) => {
      const matchesSearch =
        searchQuery === "" ||
        chart.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (chart.artist && chart.artist.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesLevel = selectedLevels.includes(chart.level)
      const matchesVersion = selectedVersion === "all" || chart.version === selectedVersion

      return matchesSearch && matchesLevel && matchesVersion
    })
  }, [allCharts, searchQuery, selectedLevels, selectedVersion])

  // Group charts by version
  const chartsByVersion = useMemo(() => {
    const grouped: Record<number, MegamixChart[]> = {}
    for (let v = 1; v <= 6; v++) {
      grouped[v] = []
    }

    filteredCharts.forEach((chart) => {
      if (grouped[chart.version]) {
        grouped[chart.version].push(chart)
      }
    })

    return grouped
  }, [filteredCharts])

  const handleLevelToggle = (level: number) => {
    setSelectedLevels((prev) => (prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]))
  }

  const getLevelColor = (level: number) => {
    switch (level) {
      case 17:
        return "bg-yellow-500"
      case 18:
        return "bg-red-500"
      case 19:
        return "bg-purple-500"
      case 20:
        return "bg-pink-500"
      default:
        return "bg-gray-500"
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="ml-2">데이터를 불러오는 중...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-96 text-destructive">데이터를 불러오는 데 실패했습니다.</div>
    )
  }

  return (
    <div className="flex h-[calc(100vh-120px)]">
      {/* Main Content */}
      <div className="flex-1 overflow-auto p-4">
        {selectedVersion === "all" ? (
          // Show all versions grouped
          <div className="space-y-8">
            {Object.entries(chartsByVersion).map(([version, charts]) => {
              if (charts.length === 0) return null
              return (
                <div key={version}>
                  <h2 className="text-xl font-bold mb-4 sticky top-0 bg-background py-2 z-10 border-b">
                    {VERSION_NAMES[Number(version)]} ({charts.length}곡)
                  </h2>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                    {charts.map((chart, idx) => (
                      <ChartCard
                        key={`${chart.title}-${chart.type}-${idx}`}
                        chart={chart}
                        getLevelColor={getLevelColor}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          // Show single version
          <div>
            <h2 className="text-xl font-bold mb-4">
              {VERSION_NAMES[selectedVersion]} ({chartsByVersion[selectedVersion]?.length || 0}곡)
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
              {chartsByVersion[selectedVersion]?.map((chart, idx) => (
                <ChartCard key={`${chart.title}-${chart.type}-${idx}`} chart={chart} getLevelColor={getLevelColor} />
              ))}
            </div>
          </div>
        )}

        {filteredCharts.length === 0 && (
          <div className="flex items-center justify-center h-64 text-muted-foreground">
            조건에 맞는 채보가 없습니다.
          </div>
        )}
      </div>

      {/* Sidebar */}
      <div className="w-64 border-l bg-card p-4 space-y-6 overflow-auto">
        <div>
          <Label className="text-sm font-medium mb-2 block">곡 검색</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="곡명 또는 아티스트"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium mb-3 block">레벨 필터</Label>
          <div className="space-y-2">
            {LEVELS.map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <Checkbox
                  id={`level-${level}`}
                  checked={selectedLevels.includes(level)}
                  onCheckedChange={() => handleLevelToggle(level)}
                />
                <label
                  htmlFor={`level-${level}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                >
                  <span
                    className={`w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold ${getLevelColor(level)}`}
                  >
                    {level}
                  </span>
                  Level {level}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium mb-3 block">버전 필터</Label>
          <Tabs
            value={selectedVersion.toString()}
            onValueChange={(v) => setSelectedVersion(v === "all" ? "all" : Number(v))}
            className="w-full"
          >
            <TabsList className="flex flex-col h-auto w-full">
              <TabsTrigger value="all" className="w-full justify-start">
                전체 버전
              </TabsTrigger>
              {Object.entries(VERSION_NAMES).map(([version, name]) => (
                <TabsTrigger key={version} value={version} className="w-full justify-start text-xs">
                  {name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="pt-4 border-t">
          <p className="text-xs text-muted-foreground">총 {filteredCharts.length}개의 채보</p>
        </div>
      </div>
    </div>
  )
}

function ChartCard({
  chart,
  getLevelColor,
}: {
  chart: MegamixChart
  getLevelColor: (level: number) => string
}) {
  return (
    <div className="group relative aspect-square rounded-lg overflow-hidden bg-muted">
      <Image
        src={chart.jacket || "/placeholder.svg?height=150&width=150"}
        alt={chart.title}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 12.5vw"
      />
      {/* Level Badge */}
      <div
        className={`absolute top-1 right-1 w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold ${getLevelColor(chart.level)}`}
      >
        {chart.level}
      </div>
      {/* Type Badge */}
      <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/70 text-white text-[10px] font-medium">
        {chart.type}
      </div>
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center">
        <p className="text-white text-xs font-bold line-clamp-2">{chart.title}</p>
        {chart.artist && <p className="text-white/70 text-[10px] mt-1 line-clamp-1">{chart.artist}</p>}
      </div>
    </div>
  )
}
