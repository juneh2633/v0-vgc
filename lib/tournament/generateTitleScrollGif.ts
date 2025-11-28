import GIF from "gif.js"
import { BASE_CARD_HEIGHT, BASE_CARD_WIDTH, CARD_FONT_FAMILY } from "../constant/card"
import { SongEntry } from "../model/songEntry"
import { drawSongCard } from "./drawSongCard"

export async function generateTitleScrollGif(
  song: SongEntry,
  jacketImg: HTMLImageElement | null,
  options: {
    cardWidth: number
    cardHeight: number
    team1Name: string
    backgroundImg?: HTMLImageElement | null
  },
): Promise<string> {
  const { cardWidth, cardHeight, team1Name, backgroundImg } = options

  const canvas = document.createElement("canvas")
  canvas.width = cardWidth
  canvas.height = cardHeight

  const ctx =
    canvas.getContext("2d", { willReadFrequently: true }) ||
    canvas.getContext("2d")

  if (!ctx) {
    throw new Error("Canvas 2D context not available")
  }

  // === 제목 폭 측정 ===
  const scaleX = cardWidth / BASE_CARD_WIDTH
  const scaleY = cardHeight / BASE_CARD_HEIGHT
  const s = Math.min(scaleX, scaleY)

  const TITLE_FONT_SIZE = 37 * s
  ctx.font = `bold ${TITLE_FONT_SIZE}px ${CARD_FONT_FAMILY}`

  const rawTitle = song.songName || ""
  const cleanTitle = (() => {
    if (!rawTitle) return ""
    if (!song.info?.type) return rawTitle
    const typeUpper = song.info.type.toUpperCase().trim()
    const suffix = " " + typeUpper
    if (rawTitle.toUpperCase().endsWith(suffix)) {
      return rawTitle.slice(0, -suffix.length)
    }
    return rawTitle
  })()

  const textWidth = ctx.measureText(cleanTitle).width
  const visibleWidth = 547 * s

  // 짧아서 그냥 한 화면에 다 들어가면 PNG로 반환
  if (textWidth <= visibleWidth) {
    drawSongCard(ctx, song, 0, 0, jacketImg, {
      cardWidth,
      cardHeight,
      jacketSize: 300,
      team1Name,
      backgroundImg,
      titleMode: "static",
    })
    return canvas.toDataURL("image/png")
  }

  // === 스크롤 범위 계산 ===
  const startOffset = 0

  // 🔹 끝: 기존과 동일하게, 마지막 글자가 오른쪽 끝까지 오는 지점
  const endOffset = -(textWidth - visibleWidth)

  // === 타이밍 설정 ===
  const FRAME_DELAY = 70 // ms (약 14fps)

  const HOLD_BEFORE_MS = 1000 // 시작 후 3초 정지
  const SCROLL_MS = 8000      // 천천히 8초 동안 이동
  const HOLD_AFTER_MS = 1500  // 끝에서 1.5초 정지

  const HOLD_BEFORE_FRAMES = Math.round(HOLD_BEFORE_MS / FRAME_DELAY)
  const SCROLL_FRAMES = Math.round(SCROLL_MS / FRAME_DELAY)
  const HOLD_AFTER_FRAMES = Math.round(HOLD_AFTER_MS / FRAME_DELAY)

  // 부드러운 easeInOut 곡선
  const easeInOut = (t: number) =>
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2

  // ✅ 매 호출마다 "새" GIF 인스턴스 생성
  const gif = new GIF({
    workers: 2,
    workerScript: "/gif.worker.js",
    quality: 20,
    width: cardWidth,
    height: cardHeight,
  })

  return new Promise<string>((resolve, reject) => {
    gif.on("finished", (blob: Blob) => {
      const url = URL.createObjectURL(blob)
      resolve(url)
    })

    gif.on("abort", () => {
      reject(new Error("GIF rendering aborted"))
    })


    // 1) 시작 위치에서 3초 정지
    for (let i = 0; i < HOLD_BEFORE_FRAMES; i++) {
      ctx.clearRect(0, 0, cardWidth, cardHeight)
      drawSongCard(ctx, song, 0, 0, jacketImg, {
        cardWidth,
        cardHeight,
        jacketSize: 300,
        team1Name,
        backgroundImg,
        titleMode: "scroll",
        titleOffsetX: startOffset,
      })
      gif.addFrame(canvas, { copy: true, delay: FRAME_DELAY })
    }

    // 2) easeInOut으로 천천히 왼쪽으로 이동
    for (let i = 0; i < SCROLL_FRAMES; i++) {
      const t = i / (SCROLL_FRAMES - 1) // 0 ~ 1
      const eased = easeInOut(t)
      const offset = startOffset + (endOffset - startOffset) * eased

      ctx.clearRect(0, 0, cardWidth, cardHeight)
      drawSongCard(ctx, song, 0, 0, jacketImg, {
        cardWidth,
        cardHeight,
        jacketSize: 300,
        team1Name,
        backgroundImg,
        titleMode: "scroll",
        titleOffsetX: offset,
      })
      gif.addFrame(canvas, { copy: true, delay: FRAME_DELAY })
    }

    // 3) 끝 위치에서 1.5초 정지
    for (let i = 0; i < HOLD_AFTER_FRAMES; i++) {
      ctx.clearRect(0, 0, cardWidth, cardHeight)
      drawSongCard(ctx, song, 0, 0, jacketImg, {
        cardWidth,
        cardHeight,
        jacketSize: 300,
        team1Name,
        backgroundImg,
        titleMode: "scroll",
        titleOffsetX: endOffset,
      })
      gif.addFrame(canvas, { copy: true, delay: FRAME_DELAY })
    }

    // ✅ 딱 한 번만 호출
    gif.render()
  })
}
