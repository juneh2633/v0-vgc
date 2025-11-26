"use server"

export interface RandomChart {
  title: string
  level: number
  version: number
  date: string
  jacket?: string
  type?: string
}

interface FetchChartsParams {
  minLevel?: number
  maxLevel?: number
  minVersion?: number
  maxVersion?: number
  count?: number
  isMegamix?: boolean
}

export async function fetchCharts(params: FetchChartsParams): Promise<RandomChart[]> {
  const { minLevel, maxLevel, minVersion, maxVersion, count = 1, isMegamix = false } = params

  const queryParams = new URLSearchParams()

  if (minLevel !== undefined) queryParams.append("minLevel", minLevel.toString())
  if (maxLevel !== undefined) queryParams.append("maxLevel", maxLevel.toString())
  if (minVersion !== undefined) queryParams.append("minVersion", minVersion.toString())
  if (maxVersion !== undefined) queryParams.append("maxVersion", maxVersion.toString())
  if (count !== undefined) queryParams.append("count", count.toString())


  const baseUrl =  "https://juneh2633.ddns.net"
  const endpoint = isMegamix
      ? "/chart/random/megamix"
      : "/chart/random"

    const url = `${baseUrl}${endpoint}?${queryParams.toString()}`

    console.log("[fetchCharts] Fetching URL:", url)

    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
    })

    if (!response.ok) {
      console.error("[fetchCharts] Error:", response.status)
      throw new Error(`API request failed with status ${response.status}`)
    }

    const data = await response.json()

    console.log("[fetchCharts] chartData items:", data.chartData?.length || 0)

    return data.chartData || []
}