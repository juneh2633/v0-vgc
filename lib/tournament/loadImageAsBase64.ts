const IMAGE_LOAD_RETRY_DELAYS_MS = [0, 350, 900]
const IMAGE_FETCH_TIMEOUT_MS = 12000

const wait = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms))

const blobToDataUrl = (blob: Blob): Promise<string | null> =>
  new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : null)
    reader.onerror = () => resolve(null)
    reader.readAsDataURL(blob)
  })

export const loadImageAsBase64 = async (url: string): Promise<string | null> => {
  if (!url) return null
  if (url.startsWith("data:")) return url

  for (const [attemptIndex, delay] of IMAGE_LOAD_RETRY_DELAYS_MS.entries()) {
    if (delay > 0) {
      await wait(delay)
    }

    try {
      const controller = new AbortController()
      const timeout = window.setTimeout(() => controller.abort(), IMAGE_FETCH_TIMEOUT_MS)
      const proxyUrl = `/api/image-proxy?url=${encodeURIComponent(url)}&cacheKey=base64-${Date.now()}-${attemptIndex}`
      const response = await fetch(proxyUrl, { cache: "no-store", signal: controller.signal }).finally(() =>
        window.clearTimeout(timeout),
      )

      if (!response.ok) {
        console.log(
          `[v0] Failed to fetch image for base64 (attempt ${attemptIndex + 1}):`,
          response.status,
          url,
        )
        continue
      }

      const blob = await response.blob()
      const dataUrl = await blobToDataUrl(blob)
      if (dataUrl) return dataUrl
    } catch (error) {
      console.log(
        `[v0] Failed to load image for base64 (attempt ${attemptIndex + 1}):`,
        url,
        error,
      )
    }
  }

  return null
}
