"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { Play } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { playlistVideos, type VideoData } from "@/app/resources/video-tutorials/video-data"

interface RelatedVideosProps {
  /** List of YouTube video IDs to feature in the section. Order is preserved. */
  videoIds: string[]
  /** Optional title (kept for backwards compatibility — no longer rendered). */
  title?: string
  /** Optional description (kept for backwards compatibility — no longer rendered). */
  description?: string
  /** Auto-scroll speed in pixels per second. Default 50. */
  speed?: number
}

// Newer videos use thumbnails under /youtube/new/. Anything else (except the
// manually-pinned splash/promo entries) is treated as part of the older library
// and gets an "Old" tag overlay.
function isOldVideo(video: VideoData): boolean {
  const t = video.thumbnail || ""
  if (t.includes("/youtube/new/")) return false
  if (video.isManuallyAdded) return false
  return true
}

export function RelatedVideos({ videoIds, speed = 50 }: RelatedVideosProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const pausedRef = useRef(false)

  // Resolve and de-dupe videos in the order provided
  const seen = new Set<string>()
  const videos: VideoData[] = videoIds
    .map((id) => playlistVideos.find((v) => v.id === id))
    .filter((v): v is VideoData => {
      if (!v) return false
      if (seen.has(v.id)) return false
      seen.add(v.id)
      return true
    })

  // Duplicate the list so scrolling can loop seamlessly
  const looped = videos.length > 0 ? [...videos, ...videos] : []

  useEffect(() => {
    pausedRef.current = isPaused
  }, [isPaused])

  // Auto-scroll using requestAnimationFrame. Pauses on hover/focus and respects
  // the user's reduced-motion preference. Uses a fractional accumulator so slow
  // speeds don't get truncated away by integer scrollLeft.
  useEffect(() => {
    const el = scrollerRef.current
    if (!el || videos.length === 0) return

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    let raf = 0
    let lastTime = performance.now()
    let pos = el.scrollLeft

    const onScroll = () => {
      if (Math.abs(el.scrollLeft - pos) > 2) pos = el.scrollLeft
    }
    el.addEventListener("scroll", onScroll, { passive: true })

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1)
      lastTime = now

      if (!pausedRef.current && el.scrollWidth > el.clientWidth) {
        const half = el.scrollWidth / 2
        pos += speed * dt
        if (half > 0 && pos >= half) pos -= half
        el.scrollLeft = pos
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener("scroll", onScroll)
    }
  }, [videos.length, speed])

  if (looped.length === 0) return null

  return (
    <section
      aria-label="Related video tutorials"
      className="not-prose mt-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="relative">
        {/* Edge fades */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent z-10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent z-10"
        />

        <div
          ref={scrollerRef}
          className="flex items-start gap-4 overflow-x-auto pb-2 scrollbar-thin"
          style={{ scrollbarWidth: "thin" }}
        >
          {looped.map((video, idx) => {
            const old = isOldVideo(video)
            return (
              <Link
                key={`${video.id}-${idx}`}
                href={`/resources/video-tutorials/watch/${video.id}?title=${encodeURIComponent(video.title)}`}
                aria-hidden={idx >= videos.length || undefined}
                tabIndex={idx >= videos.length ? -1 : undefined}
                className="group shrink-0 w-[240px] sm:w-[280px] rounded-lg border border-border bg-card hover:border-red-300 dark:hover:border-red-700 hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col"
              >
                {/* `mqdefault.jpg` is YouTube's native 320×180 (true 16:9, no
                    letterboxing) thumbnail. The image's intrinsic dimensions
                    drive the height of the card, with no aspect-ratio wrapper
                    or absolute positioning — so there is no extra blank space
                    above or below the image. */}
                <div className="relative leading-[0] overflow-hidden">
                  <img
                    src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    width={320}
                    height={180}
                    loading="lazy"
                    decoding="async"
                    className="block w-full h-auto align-top transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget
                      if (video.thumbnail && target.src !== video.thumbnail) {
                        target.src = video.thumbnail
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-red-600/95 rounded-full p-2.5 shadow-lg">
                        <Play className="h-5 w-5 text-white fill-current" />
                      </div>
                    </div>
                  </div>
                  {old && (
                    <span className="absolute top-2.5 right-2.5 z-10 inline-flex items-center bg-amber-100 text-amber-900 text-[11px] font-semibold uppercase tracking-wider leading-none px-2.5 py-1.5 rounded-md shadow">
                      Old
                    </span>
                  )}
                  {video.duration && (
                    <span className="absolute bottom-2.5 right-2.5 z-10 inline-flex items-center bg-white/90 text-gray-800 text-[11px] font-semibold leading-none px-2.5 py-1.5 rounded-md shadow">
                      {video.duration}
                    </span>
                  )}
                </div>
                <div className="px-3 pt-1 pb-2 -mt-px">
                  <h4 className="text-[13px] sm:text-sm font-semibold leading-snug line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {video.title}
                  </h4>
                  {video.tags && video.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {video.tags.slice(0, 2).map((tag, tagIdx) => (
                        <Badge key={tagIdx} variant="outline" className="text-[10px] px-1.5 py-0 leading-4">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
