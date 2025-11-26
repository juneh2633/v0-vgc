import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const queryParams = new URLSearchParams()

  const minLevel = searchParams.get("minLevel")
  const maxLevel = searchParams.get("maxLevel")
  const minVersion = searchParams.get("minVersion")
  const maxVersion = searchParams.get("maxVersion")
  const count = searchParams.get("count")
  const isMegamix = searchParams.get("isMegamix")

  if (minLevel) queryParams.append("minLevel", minLevel)
  if (maxLevel) queryParams.append("maxLevel", maxLevel)
  if (minVersion) queryParams.append("minVersion", minVersion)
  if (maxVersion) queryParams.append("maxVersion", maxVersion)
  if (count) queryParams.append("count", count)

  const baseEndpoint =
    isMegamix === "true" ? "https://juneh2633.ddns.net/chart/random/megamix" : "https://juneh2633.ddns.net/chart/random"

  const url = `${baseEndpoint}?${queryParams.toString()}`

  console.log("[v0] Fetching random charts from:", url)

  try {
    const response = await fetch(url, {
      cache: "no-store",
    })

    if (!response.ok) {
      console.log("[v0] API Error:", response.status, response.statusText)
      return NextResponse.json({ error: "API request failed" }, { status: response.status })
    }

    const data = await response.json()
    console.log("[v0] Random API Response keys:", Object.keys(data))
    console.log("[v0] data exists:", !!data.data)
    if (data.data) {
      console.log("[v0] data length:", data.data.length)
      if (data.data.length > 0) {
        console.log("[v0] First chart keys:", Object.keys(data.data[0]))
        console.log("[v0] First chart sample:", JSON.stringify(data.data[0]).substring(0, 500))
      }
    }

    return NextResponse.json({ chartData: data.data || [] })
  } catch (error) {
    console.error("[v0] Fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 })
  }
}
