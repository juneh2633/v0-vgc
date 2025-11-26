import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch("https://juneh2633.ddns.net/chart/meta", {
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "application/json",
        "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      },
    })

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ error: "Failed to fetch song data" }, { status: 500 })
  }
}
