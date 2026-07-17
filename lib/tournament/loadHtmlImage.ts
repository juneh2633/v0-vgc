const IMAGE_LOAD_RETRY_DELAYS_MS = [0, 350, 900]
const IMAGE_LOAD_TIMEOUT_MS = 12000

const wait = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms))

export const getProxiedImageUrl = (src: string, cacheKey?: string) => {
  if (src.startsWith("data:")) return src

  const params = new URLSearchParams({ url: src })
  if (cacheKey) params.set("cacheKey", cacheKey)

  return `/api/image-proxy?${params.toString()}`
}

export const loadHtmlImage = async (src: string): Promise<HTMLImageElement | null> => {
  if (!src) return null

  for (const [attemptIndex, delay] of IMAGE_LOAD_RETRY_DELAYS_MS.entries()) {
    if (delay > 0) await wait(delay)

    const image = await new Promise<HTMLImageElement | null>((resolve) => {
      const img = new window.Image()
      const timeout = window.setTimeout(() => {
        img.onload = null
        img.onerror = null
        console.log(
          `[v0] Image load timed out (attempt ${attemptIndex + 1}), using placeholder`,
          src,
        )
        resolve(null)
      }, IMAGE_LOAD_TIMEOUT_MS)

      const settle = (result: HTMLImageElement | null) => {
        window.clearTimeout(timeout)
        resolve(result)
      }

      img.crossOrigin = "anonymous"
      img.onload = () => settle(img)
      img.onerror = () => {
        console.log(`[v0] Image load failed (attempt ${attemptIndex + 1}), using placeholder`, src)
        settle(null)
      }
      img.src = getProxiedImageUrl(src, `html-${Date.now()}-${attemptIndex}`)
    })

    if (image) return image
  }

  return null
}
