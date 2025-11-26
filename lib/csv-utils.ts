import type { ThemeData, Theme, ThemeSong } from "./types"

export function exportToCSV(data: ThemeData): string {
  const lines: string[] = []

  // Header
  lines.push("themeName,songIdx,chartIdx,title,artist,jacket,level,type,comment,weight")

  // Data rows
  data.themes.forEach((theme) => {
    theme.songs.forEach((song) => {
      const escapedTitle = `"${song.title.replace(/"/g, '""')}"`
      const escapedArtist = `"${song.artist.replace(/"/g, '""')}"`
      const escapedComment = `"${song.comment.replace(/"/g, '""')}"`
      const escapedThemeName = `"${theme.name.replace(/"/g, '""')}"`
      lines.push(
        `${escapedThemeName},${song.songIdx},${song.chartIdx},${escapedTitle},${escapedArtist},${song.jacket},${song.level},${song.type},${escapedComment},${song.weight || 1}`,
      )
    })
  })

  return lines.join("\n")
}

export function parseCSV(csvContent: string): ThemeData {
  const lines = csvContent.split("\n").filter((line) => line.trim())
  const themes: Theme[] = []
  const themeMap = new Map<string, ThemeSong[]>()

  // Skip header
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i]
    const values = parseCSVLine(line)

    if (values.length >= 10) {
      const [themeName, songIdx, chartIdx, title, artist, jacket, level, type, comment, weight] = values

      if (!themeMap.has(themeName)) {
        themeMap.set(themeName, [])
      }

      themeMap.get(themeName)!.push({
        songIdx: Number.parseInt(songIdx, 10),
        chartIdx: Number.parseInt(chartIdx, 10),
        title,
        artist,
        jacket,
        level: Number.parseInt(level, 10),
        type,
        comment: comment || "",
        weight: Number.parseInt(weight, 10) || 1,
      })
    }
  }

  themeMap.forEach((songs, name) => {
    themes.push({ name, songs })
  })

  return { themes }
}

function parseCSVLine(line: string): string[] {
  const result: string[] = []
  let current = ""
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (char === "," && !inQuotes) {
      result.push(current)
      current = ""
    } else {
      current += char
    }
  }

  result.push(current)
  return result
}

export function downloadCSV(content: string, filename: string) {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
