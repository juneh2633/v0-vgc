import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const minLevel = searchParams.get("minLevel") || "17"
  const maxLevel = searchParams.get("maxLevel") || "20"
  const minVersion = searchParams.get("minVersion") || "1"
  const maxVersion = searchParams.get("maxVersion") || "6"

  const apiUrl = `https://juneh2633.ddns.net/chart/megamix?minLevel=${minLevel}&maxLevel=${maxLevel}&minVersion=${minVersion}&maxVersion=${maxVersion}`

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      },
    })

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch data" }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("[v0] Megamix API Error:", error)
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 })
  }
}
