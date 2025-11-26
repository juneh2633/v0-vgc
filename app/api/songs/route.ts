import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch("https://juneh2633.ddns.net/chart/meta", {
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }

    const data = await response.json()
    console.log("[v0] Server-side API Response keys:", Object.keys(data))
    console.log("[v0] chartData length:", data.chartData?.length)
    if (data.chartData?.[0]) {
      console.log("[v0] First item keys:", Object.keys(data.chartData[0]))
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ error: "Failed to fetch song data" }, { status: 500 })
  }
}
