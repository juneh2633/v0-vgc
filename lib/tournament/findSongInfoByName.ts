import { FlattenedChart } from "../model/flattenedChart"
import { SongInfo } from "../model/songInfo"

export function findSongInfoByName(title: string, allCharts: FlattenedChart[]): SongInfo | null {
  const chart = allCharts.find(c => c.title === title)
  if (!chart) return null

  return {
    title: chart.title,
    artist: chart.artist,
    jacket: chart.jacket,
    level: chart.level,
    type: chart.type,
    date: chart.date,
  }
}
