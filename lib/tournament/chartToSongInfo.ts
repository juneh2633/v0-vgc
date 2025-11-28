import { FlattenedChart } from "../model/flattenedChart";
import { SongInfo } from "../model/songInfo";

export const chartToSongInfo = (chart: FlattenedChart): SongInfo => ({
  // name: formatSongName(chart), // Removed, as name is not part of SongInfo interface
  title: chart.title,
  artist: chart.artist,
  jacket: chart.jacket,
  level: chart.level,
  type: chart.type,
  date: chart.date,
})