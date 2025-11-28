export interface SongInfo {
  title: string
  artist: string
  jacket: string
  jacketBase64?: string // Add base64 jacket field
  level: number
  type: string
  date: string
}