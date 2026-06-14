export interface RoundData {
  roomNumber: string
  deadline: string
  team1Players?: [string, string]
  team2Players?: [string, string]
  team1Songs?: [string, string, string]
  team2Songs?: [string, string, string]
  team1BannedSong?: string
  team2BannedSong?: string
  team1Player?: string
  team2Player?: string
  team1SongsLong?: [string, string, string, string, string]
  team2SongsLong?: [string, string, string, string, string]
  team1Songs2?: [string, string]
  team2Songs2?: [string, string]
  team1BannedSong4?: string
  team2BannedSong4?: string
  team1ArenaPlayer?: string
  team2ArenaPlayer?: string
  team1DesignatedSong?: string
  team2DesignatedSong?: string
  stage3DesignatedSong?: string
  stage4DesignatedSong?: string
  team1StrategyOptions?: [string, string, string]
  team2StrategyOptions?: [string, string, string]
  team1StrategyUsed: boolean
  team2StrategyUsed: boolean
  team1StrategySelected?: string
  team2StrategySelected?: string
  team1StrategyTarget?: string
  team2StrategyTarget?: string
  team1Strategy17?: [string, string, string]
  team1Strategy18?: [string, string, string]
  team2Strategy17?: [string, string, string]
  team2Strategy18?: [string, string, string]
}
