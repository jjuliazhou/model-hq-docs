"use client"

import { useParams, useSearchParams } from "next/navigation"
import { ArrowLeft, ExternalLink, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { videoDescriptions } from "./video-descriptions"

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        {/* Back Button */}
        <Button variant="outline" asChild className="mb-4 w-full sm:w-auto">
          <a href="/resources/video-tutorials" className="flex items-center justify-center sm:justify-start gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Video Tutorials
          </a>
        </Button>

        <div className="space-y-6 sm:space-y-8">
          {/* Main Video Section */}
          <div className="space-y-4 sm:space-y-6">
            {/* Video Player */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Info */}
            <div className="space-y-4 px-2 sm:px-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                {decodeURIComponent(title)}
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b dark:border-gray-700">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full flex items-center justify-center">
                      <Youtube className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base">LLMWare</p>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">AI & ML Tutorials</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                    <a
                      href={`https://www.youtube.com/watch?v=${videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Watch on YouTube
                    </a>
                  </Button>
                  <Button size="sm" asChild className="w-full sm:w-auto">
                    <a
                      href="https://www.youtube.com/@llmware"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Youtube className="h-4 w-4" />
                      Subscribe
                    </a>
                  </Button>
                </div>
              </div>

              {/* Full Description */}
              <div className="prose dark:prose-invert max-w-none">
                <div className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {fullDescription}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
