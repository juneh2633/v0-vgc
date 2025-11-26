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
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "application/json",
        "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      },
    })

    if (!response.ok) {
      console.log("[v0] API Error:", response.status, response.statusText)
      return NextResponse.json({ error: "API request failed" }, { status: response.status })
    }

    const data = await response.json()

    return NextResponse.json({ chartData: data.data || [] })
  } catch (error) {
    console.error("[v0] Fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 })
  }
}
