"use client"

import { useState } from "react"
import { Play, ArrowUpRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VideoData, playlistVideos } from "./video-data"
import AdminControls from "./admin-controls"
import { PageFrame, FrameSection } from "@/components/page-frame"

export default function VideoTutorialsPage() {
  const [videos, setVideos] = useState<VideoData[]>(playlistVideos)

  const handleVideoClick = (videoId: string, title: string) => {
    window.location.href = `/resources/video-tutorials/watch/${videoId}?title=${encodeURIComponent(title)}`
  }

  const handleAddVideo = (newVideo: VideoData) => setVideos([newVideo, ...videos])
  const handleUpdateVideo = (updatedVideo: VideoData) =>
    setVideos(videos.map((v) => (v.id === updatedVideo.id ? updatedVideo : v)))
  const handleDeleteVideo = (videoId: string) => setVideos(videos.filter((v) => v.id !== videoId))
  const handleEditVideo = (_video: VideoData) => {}
  const handleRefreshVideos = (newVideos: VideoData[]) => setVideos(newVideos)

  return (
    <PageFrame>
      {/* Hero */}
      <FrameSection>
        <div className="px-6 py-16 md:py-24">
          <span className="font-mono text-xs uppercase tracking-widest text-red-600">
            Resources
          </span>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Video tutorials
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Learn Model HQ through comprehensive video guides — from basic setup
            to advanced AI model deployment and business applications.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="group h-12 rounded-none bg-red-600 px-6 text-base text-white hover:bg-red-700">
              <a
                href="https://www.youtube.com/@llmware"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit YouTube channel
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-none px-6 text-base">
              <a
                href="https://www.youtube.com/playlist?list=PL1-dn33KwsmBiKZDobr9QT-4xI8bNJvIU"
                target="_blank"
                rel="noopener noreferrer"
              >
                View full playlist
              </a>
            </Button>
          </div>
        </div>
      </FrameSection>

      {/* Admin Controls (dev only) */}
      <div className="px-6">
        <AdminControls
          videos={videos}
          onAddVideo={handleAddVideo}
          onUpdateVideo={handleUpdateVideo}
          onDeleteVideo={handleDeleteVideo}
          onEditVideo={handleEditVideo}
          onRefreshVideos={handleRefreshVideos}
        />
      </div>

      {/* Video grid */}
      <FrameSection>
        <div className="px-6 pt-16 md:pt-20">
          <span className="font-mono text-xs uppercase tracking-widest text-red-600">
            Watch &amp; learn
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            All tutorials
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px border-t border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => handleVideoClick(video.id, video.title)}
              className="group flex flex-col bg-background text-left transition-colors hover:bg-muted/30"
            >
              <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted/30">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <Play className="h-5 w-5 fill-current" />
                  </div>
                </div>
                {video.duration && (
                  <div className="absolute bottom-2 right-2 bg-background/90 px-2 py-0.5 font-mono text-xs">
                    {video.duration}
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="line-clamp-2 text-base font-semibold leading-snug tracking-tight transition-colors group-hover:text-red-600">
                  {video.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {video.description}
                </p>
                {video.tags && video.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {video.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="border border-border px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <span className="mt-auto inline-flex items-center pt-6 text-sm font-medium text-red-600">
                  Watch video
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </FrameSection>

      {/* CTA */}
      <FrameSection last>
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
          <a
            href="/getting-started"
            className="group flex flex-col items-start bg-background p-8 transition-colors hover:bg-muted/30 md:p-12"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-brand">Docs</span>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">Read the documentation</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Can&apos;t find what you&apos;re looking for? Browse the full docs.
            </p>
            <span className="mt-auto inline-flex items-center pt-8 text-sm font-medium text-brand">
              View documentation
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>

          <a
            href="/support"
            className="group flex flex-col items-start bg-background p-8 transition-colors hover:bg-muted/30 md:p-12"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-brand">Support</span>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">Contact our team</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Still stuck? Reach out and we&apos;ll help you out.
            </p>
            <span className="mt-auto inline-flex items-center pt-8 text-sm font-medium text-brand">
              Contact support
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>
      </FrameSection>
    </PageFrame>
  )
}
