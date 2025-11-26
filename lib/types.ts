export interface ChartData {
  songIdx: number
  title: string
  artist: string
  ascii: string
  asciiTitle: string
  asciiArtist: string
  titleYomigana: string
  artistYomigana: string
  version: number
  mainBpm: number | null
  bpm: string
  genreTxt: string
  date: string
  konaste: boolean
  chart: Chart[]
}

export interface Chart {
  chartIdx: number
  songIdx: number
  level: number
  type: string
  jacket: string
  effector: string
  illustrator: string
  maxExscore: number
  maxChain: number
  chipCount: number
  holdCount: number
  tsumamiCount: number
  radar: Radar
}

export interface Radar {
  idx: number
  chartIdx: number
  notes: number
  peak: number
  tsumami: number
  tricky: number
  handtrip: number
  onehand: number
}

export interface ThemeSong {
  songIdx: number
  chartIdx: number
  title: string
  artist: string
  jacket: string
  level: number
  type: string
  comment: string
  weight: number // 가중치 필드 추가 (기본값 1)
  uniqueId?: string // 중복 차트 지원을 위한 고유 ID 필드 추가
}

export interface Theme {
  name: string
  songs: ThemeSong[]
}

export interface ThemeData {
  themes: Theme[]
}
