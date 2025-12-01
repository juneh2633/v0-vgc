import { FlattenedChart } from "../model/flattenedChart"
import { RoundData } from "../model/round"
import { drawSongCard } from "./drawSongCard"
import { findSongInfoByName } from "./findSongInfoByName"

export function exportSingleStrategyCard(
  round: RoundData,
  title: string,
  allCharts: FlattenedChart[],
  cardBgImg: HTMLImageElement | null,
  jacketImg: HTMLImageElement | null,
  team1Name: string
) {
  const info = findSongInfoByName(title, allCharts)
  if (!info) return

  const cardWidth = 1080
  const cardHeight = 380

  const canvas = document.createElement("canvas")
  canvas.width = cardWidth
  canvas.height = cardHeight
  const ctx = canvas.getContext("2d")!

  ctx.clearRect(0, 0, cardWidth, cardHeight)

  drawSongCard(
    ctx,
    {
      team: team1Name,
      player: "",
      songName: title,
      info,
      isStrategy: true,
    },
    0,
    0,
    jacketImg,
    {
      cardWidth,
      cardHeight,
      jacketSize: 300,
      team1Name,
      backgroundImg: cardBgImg,
    }
  )

  const url = canvas.toDataURL("image/png")
  const a = document.createElement("a")
  a.href = url
  a.download = `strategy_${title}.png`
  a.click()
}
