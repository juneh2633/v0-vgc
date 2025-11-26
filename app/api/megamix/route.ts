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
