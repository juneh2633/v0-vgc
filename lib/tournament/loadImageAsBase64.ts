export const loadImageAsBase64 = async (url: string): Promise<string | null> => {
  return new Promise((resolve) => {
    const img = new window.Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas")
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext("2d")
        if (ctx) {
          ctx.drawImage(img, 0, 0)
          resolve(canvas.toDataURL("image/jpeg", 0.8))
        } else {
          resolve(null)
        }
      } catch (e) {
        console.log("[v0] Failed to convert image to base64:", e)
        resolve(null)
      }
    }
    img.onerror = () => {
      console.log("[v0] Failed to load image:", url)
      resolve(null)
    }
    img.src = `/api/image-proxy?url=${encodeURIComponent(url)}`
  })
}
