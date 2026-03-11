"use client"

import { useState } from "react"
import { Play, ExternalLink, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { VideoData, playlistVideos } from "./video-data"
import AdminControls from "./admin-controls"

export default function VideoTutorialsPage() {
  const [videos, setVideos] = useState<VideoData[]>(playlistVideos)

  const handleVideoClick = (videoId: string, title: string) => {
    window.location.href = `/resources/video-tutorials/watch/${videoId}?title=${encodeURIComponent(title)}`
  }

  const handleAddVideo = (newVideo: VideoData) => {
    setVideos([newVideo, ...videos])
  }

  const handleUpdateVideo = (updatedVideo: VideoData) => {
    setVideos(videos.map((v) => (v.id === updatedVideo.id ? updatedVideo : v)))
  }

  const handleDeleteVideo = (videoId: string) => {
    setVideos(videos.filter((v) => v.id !== videoId))
  }

  const handleEditVideo = (video: VideoData) => {
    // Handled by AdminControls internally
  }

  const handleRefreshVideos = (newVideos: VideoData[]) => {
    setVideos(newVideos)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <div className="p-2 sm:p-3 bg-red-100 rounded-full bg-gradient-to-br from-red-500 to-rose-700 dark:from-red-950 dark:to-rose-700">
              <Play className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">Video Tutorials</h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
            Learn Model HQ through comprehensive video tutorials covering everything from basic setup to advanced AI
            model deployment and business applications.
          </p>
        </div>

        {/* Admin Controls - Only visible in development mode */}
        <AdminControls
          videos={videos}
          onAddVideo={handleAddVideo}
          onUpdateVideo={handleUpdateVideo}
          onDeleteVideo={handleDeleteVideo}
          onEditVideo={handleEditVideo}
          onRefreshVideos={handleRefreshVideos}
        />

        {/* YouTube Channel Section */}
        <div className="bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950 dark:to-rose-900 rounded-xl p-4 sm:p-6 border border-red-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
              <div className="p-2 sm:p-3 bg-red-600 rounded-full">
                <Youtube className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-primary">LLMWare YouTube Channel</h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Subscribe for the latest tutorials and updates</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a
                  href="https://www.youtube.com/playlist?list=PL1-dn33KwsmBiKZDobr9QT-4xI8bNJvIU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Play className="h-4 w-4" />
                  View Playlist
                </a>
              </Button>
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto">
                <a
                  href="https://www.youtube.com/@llmware"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Youtube className="h-4 w-4" />
                  Visit Channel
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-red-300 relative"
              onClick={() => handleVideoClick(video.id, video.title)}
            >
              <div className="relative">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 rounded-t-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="bg-red-600 bg-opacity-90 rounded-full p-2 sm:p-3">
                      <Play className="h-6 w-6 sm:h-8 sm:w-8 text-white fill-current" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
                {video.isManuallyAdded && (
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="text-xs">
                      Featured 🌠
                    </Badge>
                  </div>
                )}
              </div>
              <CardHeader className="pb-2 p-3 sm:p-6">
                <CardTitle className="text-base sm:text-lg font-semibold line-clamp-2 group-hover:text-red-600 transition-colors">
                  {video.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 p-3 sm:p-6 sm:pt-0">
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-3">
                  {video.description}
                </CardDescription>

                {/* Tags */}
                {video.tags && video.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {video.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 dark:bg-black border border-gray-200 dark:border-blue-800 rounded-xl p-6 sm:p-8 text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Need Help?</h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
            Cannot find what you are looking for? Check out our documentation or contact support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <a href="/getting-started">View Documentation</a>
            </Button>
            <Button asChild className="w-full sm:w-auto">
              <a href="/support">Contact Support</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}