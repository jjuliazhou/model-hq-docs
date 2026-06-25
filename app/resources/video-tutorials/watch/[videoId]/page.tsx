"use client"

import { useParams, useSearchParams } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { videoDescriptions } from "./video-descriptions"
import { PageFrame, FrameSection } from "@/components/page-frame"

export default function VideoWatchPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const videoId = params.videoId as string
  const title = searchParams.get("title") || "Model HQ Tutorial"

  // Get the full description for the current video
  const fullDescription =
    videoDescriptions[videoId] ||
    `
    This comprehensive tutorial covers everything you need to know about using Model HQ effectively.
    Follow along with step-by-step instructions and practical examples to master AI model deployment and
    management.

    Whether you're a beginner or an experienced developer, this video will help you understand the key
    concepts and best practices for working with Model HQ's powerful features.

    **What You'll Learn:**
    • Core concepts and fundamentals
    • Practical implementation techniques
    • Best practices and optimization strategies
    • Real-world use cases and examples
    • Troubleshooting and problem-solving approaches

    **Prerequisites:**
    • Basic understanding of AI and machine learning concepts
    • Model HQ installation and setup
    • Familiarity with your operating system

    This tutorial is designed to be accessible to users of all skill levels while providing valuable insights
    for advanced practitioners.
  `

  return (
    <PageFrame>
      <FrameSection last>
        <div className="px-6 py-12 md:py-16">
          {/* Back */}
          <Button asChild variant="outline" className="rounded-none">
            <a href="/resources/video-tutorials" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to video tutorials
            </a>
          </Button>

          {/* Player */}
          <div className="mt-8 aspect-video overflow-hidden border border-border bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Info */}
          <div className="mt-8 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-red-600">
              LLMWare · AI &amp; ML Tutorials
            </span>
            <h1 className="mt-3 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
              {decodeURIComponent(title)}
            </h1>
          </div>
        </div>

        {/* Channel bar — full width, lines connect to the frame */}
        <div className="flex flex-col items-start justify-between gap-4 border-y border-border px-6 py-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-semibold">Subscribe to the LLMWare channel</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Stay updated with the latest tutorials, walkthroughs, and product news.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="outline" className="group rounded-none">
              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on YouTube
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
            <Button asChild className="group rounded-none bg-red-600 text-white hover:bg-red-700">
              <a
                href="https://www.youtube.com/@llmware"
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="px-6 py-12 md:py-16">
          <div className="prose prose-neutral max-w-3xl whitespace-pre-line dark:prose-invert">
            {fullDescription}
          </div>
        </div>
      </FrameSection>
    </PageFrame>
  )
}
