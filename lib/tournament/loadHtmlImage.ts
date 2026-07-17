const IMAGE_LOAD_RETRY_DELAYS_MS = [0, 350, 900]

const wait = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms))

export const getProxiedImageUrl = (src: string) =>
  src.startsWith("data:") ? src : `/api/image-proxy?url=${encodeURIComponent(src)}`

export const loadHtmlImage = async (src: string): Promise<HTMLImageElement | null> => {
  if (!src) return null

  for (const [attemptIndex, delay] of IMAGE_LOAD_RETRY_DELAYS_MS.entries()) {
    if (delay > 0) await wait(delay)

    const image = await new Promise<HTMLImageElement | null>((resolve) => {
      const img = new window.Image()
      img.crossOrigin = "anonymous"
      img.onload = () => resolve(img)
      img.onerror = () => {
        console.log(`[v0] Image load failed (attempt ${attemptIndex + 1}), using placeholder`, src)
        resolve(null)
      }
      img.src = getProxiedImageUrl(src)
    })

    if (image) return image
  }

  return null
}
