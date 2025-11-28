import { SongInfo } from "./songInfo"

export type SongEntry = {
  team: string
  player: string
  songName: string
  info: SongInfo | null
  isStrategy: boolean
}