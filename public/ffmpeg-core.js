// ffmpeg.wasm 지연 로딩
let ffmpegInstancePromise:
  | Promise<{
      ffmpeg: any
      fetchFile: (input: Blob | ArrayBuffer | Uint8Array) => Promise<Uint8Array>
    }>
  | null = null

async function getFfmpegInstance() {
  if (!ffmpegInstancePromise) {
    ffmpegInstancePromise = (async () => {
      const { createFFmpeg, fetchFile } = await import("@ffmpeg/ffmpeg")
      const ffmpeg = createFFmpeg({
        corePath: "/ffmpeg-core.js", // public/ffmpeg-core.js 에 배치
        log: false,
      })
      await ffmpeg.load()
      return { ffmpeg, fetchFile }
    })()
  }
  return ffmpegInstancePromise
}
