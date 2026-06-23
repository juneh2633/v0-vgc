"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Upload, Plus, Pencil } from "lucide-react"
import { ThemeEditor } from "./theme-editor"
import { ThemeDrawer } from "./theme-drawer"
import type { ThemeData } from "@/lib/types"
import { parseCSV } from "@/lib/csv-utils"

type Mode = "home" | "new" | "draw" | "edit"

export function ThemeSongPicker() {
  const [mode, setMode] = useState<Mode>("home")
  const [importedData, setImportedData] = useState<ThemeData | null>(null)

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>, nextMode: "draw" | "edit") => {
    const file = e.target.files?.[0]
    if (!file) return

    const text = await file.text()
    const data = parseCSV(text)
    setImportedData(data)
    setMode(nextMode)
    e.target.value = ""
  }

  const handleBack = () => {
    setMode("home")
    setImportedData(null)
  }

  if (mode === "new") {
    return <ThemeEditor onBack={handleBack} />
  }

  if (mode === "edit" && importedData) {
    return <ThemeEditor initialData={importedData} onBack={handleBack} />
  }

  if (mode === "draw" && importedData) {
    return <ThemeDrawer data={importedData} onBack={handleBack} onEdit={() => setMode("edit")} />
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-md mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Music className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">테마별 곡 추첨</CardTitle>
          <CardDescription>테마를 만들고 곡을 추가하여 랜덤 추첨을 해보세요</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full h-16 text-lg bg-transparent" onClick={() => setMode("new")}>
            <Plus className="w-5 h-5 mr-2" />
            새로 만들기
          </Button>

          <div className="relative">
            <Button variant="outline" className="w-full h-16 text-lg bg-transparent" asChild>
              <label htmlFor="csv-import" className="cursor-pointer flex items-center justify-center">
                <Upload className="w-5 h-5 mr-2" />
                가져오기 (Import)
              </label>
            </Button>
            <input
              id="csv-import"
              type="file"
              accept=".csv"
              className="hidden"
              onChange={(e) => handleImport(e, "draw")}
            />
          </div>

          <div className="relative">
            <Button variant="outline" className="w-full h-16 text-lg bg-transparent" asChild>
              <label htmlFor="csv-edit-import" className="cursor-pointer flex items-center justify-center">
                <Pencil className="w-5 h-5 mr-2" />
                가져와서 수정하기
              </label>
            </Button>
            <input
              id="csv-edit-import"
              type="file"
              accept=".csv"
              className="hidden"
              onChange={(e) => handleImport(e, "edit")}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
