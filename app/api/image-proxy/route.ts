import { type NextRequest, NextResponse } from "next/server"

const REQUEST_TIMEOUT_MS = 30000
const MAX_REDIRECTS = 5
const RETRY_DELAYS_MS = [0, 400, 1000]

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const fetchImage = async (
  url: string,
  redirectCount = 0,
): Promise<{ buffer: Buffer; contentType: string; status: number }> => {
  const parsedUrl = new URL(url)
  parsedUrl.pathname = parsedUrl.pathname.replace(/\/{2,}/g, "/")

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const response = await fetch(parsedUrl, {
      redirect: "manual",
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; v0-vgc-image-proxy/1.0; +https://vercel.app)",
        Accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        Referer: `${parsedUrl.origin}/`,
      },
    })

    const location = response.headers.get("location")
    if (
      response.status >= 300 &&
      response.status < 400 &&
      location &&
      redirectCount < MAX_REDIRECTS
    ) {
      return fetchImage(new URL(location, parsedUrl).toString(), redirectCount + 1)
    }

    const arrayBuffer = await response.arrayBuffer()
    return {
      buffer: Buffer.from(arrayBuffer),
      contentType: response.headers.get("content-type") || "image/jpeg",
      status: response.status,
    }
  } finally {
    clearTimeout(timeout)
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get("url")

  if (!url) {
    return new NextResponse("Missing url parameter", { status: 400 })
  }

  try {
    new URL(url)
  } catch {
    return new NextResponse("Invalid url parameter", { status: 400 })
  }

  let lastResponse: { buffer: Buffer; contentType: string; status: number } | null = null

  for (const [attemptIndex, delay] of RETRY_DELAYS_MS.entries()) {
    if (delay > 0) await sleep(delay)

    try {
      const response = await fetchImage(url)
      lastResponse = response

      if (response.status >= 200 && response.status < 300) {
        if (!response.contentType.toLowerCase().startsWith("image/")) {
          return new NextResponse("URL did not return an image", { status: 415 })
        }

        return new NextResponse(new Uint8Array(response.buffer), {
          headers: {
            "Content-Type": response.contentType,
            "Cache-Control": "public, max-age=604800, s-maxage=604800, stale-while-revalidate=86400",
            "Access-Control-Allow-Origin": "*",
          },
        })
      }

      if (![408, 425, 429, 500, 502, 503, 504].includes(response.status)) {
        break
      }
    } catch (error) {
      console.error(`[v0] Image proxy attempt ${attemptIndex + 1} error:`, error)
    }
  }

  return new NextResponse("Failed to proxy image", { status: lastResponse?.status || 500 })
}
