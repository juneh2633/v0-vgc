import { FlattenedChart } from "../model/flattenedChart"
import { RoundData } from "../model/round"
import { SongInfo } from "../model/songInfo"
import { drawSongCard } from "./drawSongCard"
import { findSongInfoByName } from "./findSongInfoByName"
const CARD_FONT_FAMILY = `'Meiryo', 'Arial', system-ui, sans-serif`

export async function generateStrategyListImage(
  round: RoundData,
  allCharts: FlattenedChart[],
  options: {
    cardBgImg: HTMLImageElement | null
    jacketLoader: (title: string) => HTMLImageElement | null
    team1Name: string
  }
): Promise<string> {

  const cardWidth = 1080
  const cardHeight = 380

  const strategies: {
    team: string
    target: string
    selected: string
    info: SongInfo
  }[] = []

  // 팀1
  if (round.team1StrategyUsed && round.team1StrategyTarget) {
    const selected = round.team1StrategySelected || round.team1StrategyTarget
    const info = findSongInfoByName(selected, allCharts)
    if (info) {
      strategies.push({
        team: options.team1Name,
        target: round.team1StrategyTarget,
        selected,
        info,
      })
    }
  }

  // 팀2
  if (round.team2StrategyUsed && round.team2StrategyTarget) {
    const selected = round.team2StrategySelected || round.team2StrategyTarget
    const info = findSongInfoByName(selected, allCharts)
    if (info) {
      strategies.push({
        team: "TEAM2",
        target: round.team2StrategyTarget,
        selected,
        info,
      })
    }
  }

  if (strategies.length === 0) {
    throw new Error("No strategies used in this round.")
  }

  const canvas = document.createElement("canvas")
  canvas.width = cardWidth
  canvas.height = strategies.length * cardHeight

  const ctx = canvas.getContext("2d", { willReadFrequently: true })!

  strategies.forEach((st, index) => {
    const y = index * cardHeight

    const jacketImg = options.jacketLoader(st.selected)

    drawSongCard(
      ctx,
      {
        team: st.team,
        player: "",
        songName: st.selected,
        info: st.info,
        isStrategy: true,
      },
      0,
      y,
      jacketImg,
      {
        cardWidth,
        cardHeight,
        jacketSize: 300,
        team1Name: options.team1Name,
        backgroundImg: options.cardBgImg,
      }
    )
  })

  return canvas.toDataURL("image/png")
}
