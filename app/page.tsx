"use client"

import { useState } from "react"
import { ThemeSongPicker } from "@/components/theme-song-picker"
import { RandomChartPicker } from "@/components/random-chart-picker"
import { MegamixBrowser } from "@/components/megamix-browser"
import { Button } from "@/components/ui/button"
import { Music, Shuffle, ArrowLeft, Grid3X3 } from "lucide-react"

type Mode = "menu" | "random" | "theme" | "megamix"

export default function Home() {
  const [mode, setMode] = useState<Mode>("menu")

  return (
    <main className="min-h-screen bg-background">
      {mode === "menu" && (
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tight">SDVX Chart Picker</h1>
            <p className="text-muted-foreground text-lg">원하는 모드를 선택하세요</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <Button
                variant="outline"
                className="h-40 flex flex-col items-center justify-center gap-4 text-lg hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
                onClick={() => setMode("random")}
              >
                <Shuffle className="h-12 w-12" />
                <span className="font-semibold">Random Chart Picker</span>
                <span className="text-sm text-muted-foreground">레벨/버전 필터로 랜덤 추첨</span>
              </Button>
              <Button
                variant="outline"
                className="h-40 flex flex-col items-center justify-center gap-4 text-lg hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
                onClick={() => setMode("theme")}
              >
                <Music className="h-12 w-12" />
                <span className="font-semibold">테마별 곡 추첨</span>
                <span className="text-sm text-muted-foreground">테마 파일로 맞춤 추첨</span>
              </Button>
              <Button
                variant="outline"
                className="h-40 flex flex-col items-center justify-center gap-4 text-lg hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
                onClick={() => setMode("megamix")}
              >
                <Grid3X3 className="h-12 w-12" />
                <span className="font-semibold">Megamix 채보 열람</span>
                <span className="text-sm text-muted-foreground">17+ 고레벨 채보 브라우저</span>
              </Button>
            </div>
          </div>
        </div>
      )}

      {mode === "random" && (
        <div className="container mx-auto px-4 py-8">
          <Button variant="ghost" className="mb-6" onClick={() => setMode("menu")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            메인으로 돌아가기
          </Button>
          <h1 className="text-3xl font-bold mb-8 text-center">Random Chart Picker</h1>
          <RandomChartPicker />
        </div>
      )}

      {mode === "theme" && (
        <div>
          <div className="container mx-auto px-4 pt-4">
            <Button variant="ghost" onClick={() => setMode("menu")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              메인으로 돌아가기
            </Button>
          </div>
          <ThemeSongPicker />
        </div>
      )}

      {mode === "megamix" && (
        <div>
          <div className="container mx-auto px-4 pt-4">
            <Button variant="ghost" onClick={() => setMode("menu")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              메인으로 돌아가기
            </Button>
            <h1 className="text-2xl font-bold mt-2">Megamix 채보 열람</h1>
          </div>
          <MegamixBrowser />
        </div>
      )}
    </main>
  )
}
