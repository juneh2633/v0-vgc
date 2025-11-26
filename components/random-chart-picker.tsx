"use client"

import type React from "react"

import { useState, useTransition, useEffect } from "react"
import { fetchCharts, type RandomChart } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Music, AlertCircle, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const VERSION_MAP: Record<number, string> = {
  1: "Booth",
  2: "Infinite Infection",
  3: "Gravity Wars",
  4: "Heavenly Haven",
  5: "Vivid Wave",
  6: "Exceed Gear",
}

export function RandomChartPicker() {
  const [isPending, startTransition] = useTransition()
  const [charts, setCharts] = useState<RandomChart[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const [formData, setFormData] = useState({
    minLevel: "",
    maxLevel: "",
    minVersion: "",
    maxVersion: "",
    count: "1",
    isMegamix: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, isMegamix: checked }))
  }

  useEffect(() => {
    if (showResults) {
      setShowResults(false)
      setCharts([])
    }
  }, [formData])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setShowResults(false)
    setCharts([])

    startTransition(async () => {
      try {
        const params = {
          minLevel: formData.minLevel ? Number.parseInt(formData.minLevel) : undefined,
          maxLevel: formData.maxLevel ? Number.parseInt(formData.maxLevel) : undefined,
          minVersion: formData.minVersion ? Number.parseInt(formData.minVersion) : undefined,
          maxVersion: formData.maxVersion ? Number.parseInt(formData.maxVersion) : undefined,
          count: formData.count ? Number.parseInt(formData.count) : 1,
          isMegamix: formData.isMegamix,
        }

        setIsAnimating(true)

        const minAnimationTime = new Promise((resolve) => setTimeout(resolve, 1500))
        const fetchPromise = fetchCharts(params)

        const [_, result] = await Promise.all([minAnimationTime, fetchPromise])

        setCharts(result)
        setIsAnimating(false)
        setShowResults(true)
      } catch (err) {
        setError("차트를 불러오는데 실패했습니다. 다시 시도해주세요.")
        setIsAnimating(false)
        console.error(err)
      }
    })
  }

  const formatDate = (dateStr: string) => {
    if (!dateStr) return ""
    if (dateStr.includes("-") || dateStr.includes("/") || dateStr.includes(".")) {
      return dateStr.substring(0, 10)
    }
    if (/^\d{8}$/.test(dateStr)) {
      return `${dateStr.substring(0, 4)}-${dateStr.substring(4, 6)}-${dateStr.substring(6, 8)}`
    }
    return dateStr
  }

  return (
    <div className="space-y-8">
      <div className="bg-card text-card-foreground rounded-xl border shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Label className="text-base font-semibold">레벨 범위 (Level)</Label>
              <div className="flex items-center gap-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="minLevel" className="text-xs text-muted-foreground">
                    Min
                  </Label>
                  <Input
                    id="minLevel"
                    name="minLevel"
                    type="number"
                    placeholder="1"
                    value={formData.minLevel}
                    onChange={handleInputChange}
                  />
                </div>
                <span className="text-muted-foreground mt-6">~</span>
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="maxLevel" className="text-xs text-muted-foreground">
                    Max
                  </Label>
                  <Input
                    id="maxLevel"
                    name="maxLevel"
                    type="number"
                    placeholder="20"
                    value={formData.maxLevel}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-base font-semibold">버전 범위 (Version)</Label>
              <div className="flex items-center gap-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="minVersion" className="text-xs text-muted-foreground">
                    Min
                  </Label>
                  <Input
                    id="minVersion"
                    name="minVersion"
                    type="number"
                    placeholder="1"
                    min="1"
                    max="6"
                    value={formData.minVersion}
                    onChange={handleInputChange}
                  />
                </div>
                <span className="text-muted-foreground mt-6">~</span>
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="maxVersion" className="text-xs text-muted-foreground">
                    Max
                  </Label>
                  <Input
                    id="maxVersion"
                    name="maxVersion"
                    type="number"
                    placeholder="6"
                    min="1"
                    max="6"
                    value={formData.maxVersion}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">1: Booth ~ 6: Exceed Gear</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <div className="space-y-2">
              <Label htmlFor="count" className="text-base font-semibold">
                수량 (Count)
              </Label>
              <Input
                id="count"
                name="count"
                type="number"
                min="1"
                max="50"
                value={formData.count}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center space-x-2 h-10">
              <Checkbox id="isMegamix" checked={formData.isMegamix} onCheckedChange={handleCheckboxChange} />
              <Label
                htmlFor="isMegamix"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Megamix만 포함
              </Label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-lg relative overflow-hidden"
            disabled={isPending || isAnimating}
          >
            {isPending || isAnimating ? (
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>{isAnimating ? "차트 뽑는 중..." : "데이터 불러오는 중..."}</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5" />
                <span>랜덤 차트 뽑기</span>
              </div>
            )}
          </Button>
        </form>
      </div>

      {error && (
        <div className="bg-destructive/15 text-destructive p-4 rounded-md flex items-center gap-2">
          <AlertCircle className="h-5 w-5" />
          <p>{error}</p>
        </div>
      )}

      {isAnimating && (
        <div className="flex flex-col items-center justify-center py-12 space-y-6 animate-in fade-in duration-500">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
            <Music className="h-24 w-24 text-primary relative z-10 animate-bounce" />
          </div>
          <h3 className="text-2xl font-bold animate-pulse">운명의 차트를 찾는 중...</h3>
        </div>
      )}

      {showResults && charts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-in slide-in-from-bottom-4 duration-700 fade-in">
          {charts.map((chart, index) => (
            <Card
              key={`${chart.title}-${index}`}
              className={cn(
                "overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 duration-300",
                "animate-in zoom-in-95 fade-in duration-500",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square relative bg-muted group">
                {chart.jacket ? (
                  <img
                    src={chart.jacket || "/placeholder.svg"}
                    alt={chart.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    <Music className="h-12 w-12" />
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-sm font-bold backdrop-blur-sm">
                  Lv. {chart.level}
                </div>
              </div>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg leading-tight line-clamp-1" title={chart.title}>
                  {chart.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="text-sm text-muted-foreground space-y-1 mt-2">
                  <div className="flex justify-between">
                    <span>Version:</span>
                    <span className="font-medium text-foreground text-right truncate ml-2">
                      {VERSION_MAP[chart.version] || `Vol.${chart.version}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-medium text-foreground">{formatDate(chart.date)}</span>
                  </div>
                  {chart.type && (
                    <div className="flex justify-between">
                      <span>Type:</span>
                      <span className="font-medium text-foreground">{chart.type}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
