import { OvertimeData } from "./overtimeData"
import { RoundData } from "./round"
import { Team } from "./team"
import { SongInfo } from "./songInfo"

export type SongInfoMap = Record<string, SongInfo>

export interface TournamentData {
  team1: Team
  team2: Team
  rounds: [RoundData, RoundData, RoundData, RoundData]
  songInfoMap: SongInfoMap
  overtime: OvertimeData
}