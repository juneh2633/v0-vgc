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
  if (isMegamix) queryParams.append("isMegamix", "true")

  const baseUrl =  "https://juneh2633.ddns.net"
  const url = `${baseUrl}/api/random?${queryParams.toString()}`

  console.log("[v0] Fetching from:", url)

  const response = await fetch(url, {
    cache: "no-store",
  })

  if (!response.ok) {
    console.log("[v0] Response not ok:", response.status)
    throw new Error(`API request failed with status ${response.status}`)
  }

  const data = await response.json()
  console.log("[v0] Received data keys:", Object.keys(data))
  console.log("[v0] chartData:", data.chartData?.length || 0, "items")

  return data.chartData || []
}
