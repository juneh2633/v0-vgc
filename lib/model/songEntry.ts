import { SongInfo } from "./songInfo"

export type SongEntry = {
  team: string
  teamNumber?: 1 | 2
  player: string
  songName: string
  info: SongInfo | null
  isStrategy: boolean
}
