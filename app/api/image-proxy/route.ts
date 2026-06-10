import { type NextRequest, NextResponse } from "next/server"
import http from "node:http"
import https from "node:https"

const fetchImage = (
  url: string,
  redirectCount = 0,
): Promise<{ buffer: Buffer; contentType: string; status: number }> =>
  new Promise((resolve, reject) => {
    const parsedUrl = new URL(url)
    parsedUrl.pathname = parsedUrl.pathname.replace(/\/{2,}/g, "/")
    const client = parsedUrl.protocol === "http:" ? http : https

    const request = client.get(
      parsedUrl,
      {
        headers: { "User-Agent": "node" },
      },
      (response) => {
        const status = response.statusCode ?? 500
        const location = response.headers.location

        if (status >= 300 && status < 400 && location && redirectCount < 5) {
          response.resume()
          const redirectUrl = new URL(location, parsedUrl).toString()
          fetchImage(redirectUrl, redirectCount + 1).then(resolve).catch(reject)
          return
        }

        const chunks: Buffer[] = []
        response.on("data", (chunk) => chunks.push(Buffer.from(chunk)))
        response.on("end", () => {
          resolve({
            buffer: Buffer.concat(chunks),
            contentType: response.headers["content-type"] || "image/jpeg",
            status,
          })
        })
      },
    )

    request.on("error", reject)
    request.setTimeout(15000, () => {
      request.destroy(new Error("Image request timed out"))
    })
  })

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get("url")

  if (!url) {
    return new NextResponse("Missing url parameter", { status: 400 })
  }

  try {
    const response = await fetchImage(url)

    if (response.status < 200 || response.status >= 300) {
      return new NextResponse("Failed to fetch image", { status: response.status })
    }

    return new NextResponse(new Uint8Array(response.buffer), {
      headers: {
        "Content-Type": response.contentType,
        "Cache-Control": "public, max-age=86400",
        "Access-Control-Allow-Origin": "*",
      },
    })
  } catch (error) {
    console.error("[v0] Image proxy error:", error)
    return new NextResponse("Failed to proxy image", { status: 500 })
  }
}
