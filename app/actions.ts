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
  const {
    minLevel,
    maxLevel,
    minVersion,
    maxVersion,
    count = 1,
    isMegamix = false,
  } = params

  const queryParams = new URLSearchParams()

  if (minLevel !== undefined) queryParams.append("minLevel", String(minLevel))
  if (maxLevel !== undefined) queryParams.append("maxLevel", String(maxLevel))
  if (minVersion !== undefined) queryParams.append("minVersion", String(minVersion))
  if (maxVersion !== undefined) queryParams.append("maxVersion", String(maxVersion))
  queryParams.append("count", String(count))


  const baseUrl = "https://juneh2633.ddns.net"
  const endpoint = isMegamix ? "/chart/random/megamix" : "/chart/random"
  const url = `${baseUrl}${endpoint}?${queryParams.toString()}`

  console.log("[fetchCharts] Fetching URL:", url)

  const response = await fetch(url, {
    method: "GET",
    cache: "no-store",
  })

  if (!response.ok) {
    const text = await response.text()
    console.error("[fetchCharts] Response not ok:", response.status, text)
    throw new Error(`API request failed with status ${response.status}`)
  }

  const data = await response.json() as { data?: RandomChart[] }

  console.log("[fetchCharts] raw data:", data)

  // 🔥 실제 응답 구조: { data: [...] }
  const chartData: RandomChart[] = Array.isArray(data.data) ? data.data : []

  console.log("[fetchCharts] chartData items:", chartData.length)

  return chartData
}
