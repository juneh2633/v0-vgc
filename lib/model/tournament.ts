export 
interface TournamentData {
  team1: Team
  team2: Team
  rounds: [RoundData, RoundData, RoundData, RoundData]
  songInfoMap: SongInfoMap
  overtime: OvertimeData
}