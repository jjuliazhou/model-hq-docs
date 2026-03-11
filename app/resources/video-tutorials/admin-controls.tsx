"use client"

import { useState, useEffect } from "react"
import { Plus, Edit, Trash2, Copy, Check, Settings, Eye, EyeOff, FileCode, X, Loader2, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { VideoData } from "./video-data"
import { videoDescriptions } from "./watch/[videoId]/video-descriptions"

interface AdminControlsProps {
  videos: VideoData[]
  onAddVideo: (video: VideoData) => void
  onUpdateVideo: (video: VideoData) => void
  onDeleteVideo: (videoId: string) => void
  onEditVideo: (video: VideoData) => void
  onRefreshVideos?: (videos: VideoData[]) => void
}

interface VideoFormData {
  title: string
  description: string
  videoUrl: string
  duration: string
  views: string
  tags: string
  thumbnail: string
  fullDescription: string
}

const isDevelopment = process.env.NODE_ENV === "development"

export default function AdminControls({
  videos,
  onAddVideo,
  onUpdateVideo,
  onDeleteVideo,
  onEditVideo,
  onRefreshVideos,
}: AdminControlsProps) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingVideo, setEditingVideo] = useState<VideoData | null>(null)
  const [activeTab, setActiveTab] = useState<string>("videos")
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [showCodePreview, setShowCodePreview] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const [formData, setFormData] = useState<VideoFormData>({
    title: "",
    description: "",
    videoUrl: "",
    duration: "",
    views: "",
    tags: "",
    thumbnail: "",
    fullDescription: "",
  })

  // Show status message temporarily
  const showStatus = (type: "success" | "error", text: string) => {
    setStatusMessage({ type, text })
    setTimeout(() => setStatusMessage(null), 3000)
  }

  const extractVideoId = (url: string): string => {
    const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
    const match = url.match(regex)
    return match ? match[1] : ""
  }

  // Fetch videos from API (reads from file)
  const refreshVideos = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/video-admin")
      if (response.ok) {
        const data = await response.json()
        if (onRefreshVideos && data.videos) {
          onRefreshVideos(data.videos)
          showStatus("success", "Videos refreshed from file")
        }
      } else {
        showStatus("error", "Failed to refresh videos")
      }
    } catch (error) {
      showStatus("error", "Error refreshing videos")
    } finally {
      setIsLoading(false)
    }
  }

  // Add video via API (writes to file)
  const handleAddVideo = async () => {
    const videoId = extractVideoId(formData.videoUrl)
    if (!videoId) {
      alert("Please enter a valid YouTube URL")
      return
    }

    if (!formData.title.trim()) {
      alert("Please enter a title")
      return
    }

    setIsSaving(true)

    const newVideo: VideoData = {
      id: videoId,
      title: formData.title,
      description: formData.description,
      duration: formData.duration || "0:00",
      views: formData.views || "0",
      thumbnail: formData.thumbnail || `/youtube/${videoId}.png?height=180&width=320`,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      isManuallyAdded: false,
      publishedAt: new Date().toISOString(),
    }

    try {
      const response = await fetch("/api/video-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          video: newVideo,
          fullDescription: formData.fullDescription || undefined,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        if (data.videos && onRefreshVideos) {
          onRefreshVideos(data.videos)
        } else {
          onAddVideo(newVideo)
        }
        showStatus("success", "Video added and saved to file!")
        resetForm()
        setIsAddDialogOpen(false)
      } else {
        const error = await response.json()
        showStatus("error", error.error || "Failed to add video")
      }
    } catch (error) {
      showStatus("error", "Error saving video")
      console.error("Error adding video:", error)
    } finally {
      setIsSaving(false)
    }
  }

  const handleEditClick = (video: VideoData) => {
    setEditingVideo(video)
    setFormData({
      title: video.title,
      description: video.description,
      videoUrl: `https://www.youtube.com/watch?v=${video.id}`,
      duration: video.duration,
      views: video.views,
      tags: video.tags?.join(", ") || "",
      thumbnail: video.thumbnail,
      fullDescription: videoDescriptions[video.id] || "",
    })
    setIsAddDialogOpen(true)
  }

  // Update video via API (writes to file)
  const handleUpdateVideo = async () => {
    if (!editingVideo) return

    setIsSaving(true)

    const updatedVideo: VideoData = {
      ...editingVideo,
      title: formData.title,
      description: formData.description,
      duration: formData.duration,
      views: formData.views,
      thumbnail: formData.thumbnail,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    }

    try {
      const response = await fetch("/api/video-admin", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          video: updatedVideo,
          fullDescription: formData.fullDescription || undefined,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        if (data.videos && onRefreshVideos) {
          onRefreshVideos(data.videos)
        } else {
          onUpdateVideo(updatedVideo)
        }
        showStatus("success", "Video updated and saved to file!")
        resetForm()
        setIsAddDialogOpen(false)
      } else {
        const error = await response.json()
        showStatus("error", error.error || "Failed to update video")
      }
    } catch (error) {
      showStatus("error", "Error updating video")
      console.error("Error updating video:", error)
    } finally {
      setIsSaving(false)
    }
  }

  // Delete video via API (writes to file)
  const handleDeleteVideo = async (videoId: string) => {
    if (!confirm("Are you sure you want to delete this video? This will remove it from the source file.")) {
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch(`/api/video-admin?id=${videoId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        const data = await response.json()
        if (data.videos && onRefreshVideos) {
          onRefreshVideos(data.videos)
        } else {
          onDeleteVideo(videoId)
        }
        showStatus("success", "Video deleted from file!")
      } else {
        const error = await response.json()
        showStatus("error", error.error || "Failed to delete video")
      }
    } catch (error) {
      showStatus("error", "Error deleting video")
      console.error("Error deleting video:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      videoUrl: "",
      duration: "",
      views: "",
      tags: "",
      thumbnail: "",
      fullDescription: "",
    })
    setEditingVideo(null)
  }

  // Generate code snippets for copy
  const generateVideoDataCode = (video: VideoData) => {
    return `  {
    id: "${video.id}",
    title: "${video.title}",
    description: "${video.description.replace(/"/g, '\\"')}",
    duration: "${video.duration}",
    views: "${video.views}",
    thumbnail: "${video.thumbnail}",
    tags: [${video.tags?.map((t) => `"${t}"`).join(", ") || ""}],
    isManuallyAdded: ${video.isManuallyAdded || false},
  },`
  }

  const generateDescriptionCode = (videoId: string, description: string) => {
    return `  "${videoId}": \`
${description}
  \`,`
  }

  const generateAllVideosCode = () => {
    return `// Video data - copy to video-data.ts
export const playlistVideos: VideoData[] = [
${videos.map((v) => generateVideoDataCode(v)).join("\n")}
]`
  }

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedCode(id)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  // Don't show admin controls in production
  if (!isDevelopment) {
    return null
  }

  return (
    <div className="space-y-4">
      {/* Status Message */}
      {statusMessage && (
        <div
          className={`p-3 rounded-lg text-sm font-medium ${
            statusMessage.type === "success"
              ? "bg-green-100 text-green-800 border border-green-200"
              : "bg-red-100 text-red-800 border border-red-200"
          }`}
        >
          {statusMessage.text}
        </div>
      )}

      {/* Admin Toggle */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-100 dark:bg-amber-900 rounded-full">
            <Settings className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h3 className="font-semibold text-amber-900 dark:text-amber-100">Development Mode</h3>
            <p className="text-sm text-amber-700 dark:text-amber-300">
              Changes are saved directly to source files
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={isAdmin ? "default" : "outline"}
            size="sm"
            onClick={() => setIsAdmin(!isAdmin)}
            className={isAdmin ? "bg-amber-600 hover:bg-amber-700" : ""}
          >
            {isAdmin ? (
              <>
                <EyeOff className="h-4 w-4 mr-2" />
                Exit Admin
              </>
            ) : (
              <>
                <Eye className="h-4 w-4 mr-2" />
                Admin Mode
              </>
            )}
          </Button>
          {isAdmin && (
            <Badge variant="secondary" className="bg-amber-100 text-amber-800">
              Admin Active
            </Badge>
          )}
        </div>
      </div>

      {/* Admin Panel */}
      {isAdmin && (
        <Card className="border-amber-200 dark:border-amber-800">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between flex-wrap gap-2">
              <span>Video Management</span>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={refreshVideos}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <RefreshCw className="h-4 w-4 mr-2" />
                  )}
                  Refresh
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowCodePreview(!showCodePreview)}
                >
                  <FileCode className="h-4 w-4 mr-2" />
                  {showCodePreview ? "Hide Code" : "Show Code"}
                </Button>
                <Dialog
                  open={isAddDialogOpen}
                  onOpenChange={(open) => {
                    setIsAddDialogOpen(open)
                    if (!open) resetForm()
                  }}
                >
                  <DialogTrigger asChild>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Video
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>
                        {editingVideo ? "Edit Video" : "Add New Video"}
                      </DialogTitle>
                      <DialogDescription>
                        {editingVideo
                          ? "Update the video information. Changes will be saved to the source file."
                          : "Add a new video. It will be saved to video-data.ts automatically."}
                      </DialogDescription>
                    </DialogHeader>
                    <Tabs defaultValue="basic" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="basic">Basic Info</TabsTrigger>
                        <TabsTrigger value="description">Full Description</TabsTrigger>
                      </TabsList>
                      <TabsContent value="basic" className="space-y-4 mt-4">
                        <div className="grid gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="videoUrl">YouTube URL *</Label>
                            <Input
                              id="videoUrl"
                              placeholder="https://www.youtube.com/watch?v=..."
                              value={formData.videoUrl}
                              onChange={(e) =>
                                setFormData({ ...formData, videoUrl: e.target.value })
                              }
                              disabled={!!editingVideo}
                            />
                            {formData.videoUrl && (
                              <p className="text-xs text-muted-foreground">
                                Video ID: {extractVideoId(formData.videoUrl) || "Invalid URL"}
                              </p>
                            )}
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="title">Title *</Label>
                            <Input
                              id="title"
                              placeholder="Video title"
                              value={formData.title}
                              onChange={(e) =>
                                setFormData({ ...formData, title: e.target.value })
                              }
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="description">Short Description</Label>
                            <Textarea
                              id="description"
                              placeholder="Brief video description (shown in card)"
                              value={formData.description}
                              onChange={(e) =>
                                setFormData({ ...formData, description: e.target.value })
                              }
                              rows={3}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="duration">Duration</Label>
                              <Input
                                id="duration"
                                placeholder="15:42"
                                value={formData.duration}
                                onChange={(e) =>
                                  setFormData({ ...formData, duration: e.target.value })
                                }
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="views">Views</Label>
                              <Input
                                id="views"
                                placeholder="25.3K"
                                value={formData.views}
                                onChange={(e) =>
                                  setFormData({ ...formData, views: e.target.value })
                                }
                              />
                            </div>
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="thumbnail">Thumbnail Path</Label>
                            <Input
                              id="thumbnail"
                              placeholder="/youtube/video-name.png"
                              value={formData.thumbnail}
                              onChange={(e) =>
                                setFormData({ ...formData, thumbnail: e.target.value })
                              }
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="tags">Tags (comma separated)</Label>
                            <Input
                              id="tags"
                              placeholder="RAG, Tutorial, Model HQ"
                              value={formData.tags}
                              onChange={(e) =>
                                setFormData({ ...formData, tags: e.target.value })
                              }
                            />
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="description" className="space-y-4 mt-4">
                        <div className="grid gap-2">
                          <Label htmlFor="fullDescription">
                            Full Description (for watch page)
                          </Label>
                          <Textarea
                            id="fullDescription"
                            placeholder="Detailed description shown on the video watch page. This will be saved to video-descriptions.ts"
                            value={formData.fullDescription}
                            onChange={(e) =>
                              setFormData({ ...formData, fullDescription: e.target.value })
                            }
                            rows={12}
                            className="font-mono text-sm"
                          />
                          <p className="text-xs text-muted-foreground">
                            This will be automatically added to video-descriptions.ts
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                    <DialogFooter className="mt-4">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsAddDialogOpen(false)
                          resetForm()
                        }}
                        disabled={isSaving}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={editingVideo ? handleUpdateVideo : handleAddVideo}
                        disabled={isSaving}
                      >
                        {isSaving ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Saving...
                          </>
                        ) : editingVideo ? (
                          "Update & Save"
                        ) : (
                          "Add & Save"
                        )}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="videos">Videos ({videos.length})</TabsTrigger>
                <TabsTrigger value="code">Generated Code</TabsTrigger>
              </TabsList>

              <TabsContent value="videos" className="mt-4">
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-3">
                    {videos.map((video) => (
                      <div
                        key={video.id}
                        className="flex items-start gap-4 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="w-24 h-16 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate">{video.title}</h4>
                          <p className="text-xs text-muted-foreground truncate">
                            ID: {video.id} | {video.duration} | {video.views} views
                          </p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {video.tags?.slice(0, 3).map((tag, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {video.isManuallyAdded && (
                              <Badge className="text-xs bg-amber-100 text-amber-800">
                                Manual
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleEditClick(video)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() =>
                              copyToClipboard(generateVideoDataCode(video), video.id)
                            }
                          >
                            {copiedCode === video.id ? (
                              <Check className="h-4 w-4 text-green-600" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-red-600 hover:text-red-700"
                            onClick={() => handleDeleteVideo(video.id)}
                            disabled={isLoading}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>

              <TabsContent value="code" className="mt-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Generated Code (auto-saved)</h4>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(generateAllVideosCode(), "all")}
                    >
                      {copiedCode === "all" ? (
                        <>
                          <Check className="h-4 w-4 mr-2 text-green-600" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy All Videos
                        </>
                      )}
                    </Button>
                  </div>
                  <ScrollArea className="h-[350px]">
                    <pre className="p-4 bg-gray-100 dark:bg-gray-900 rounded-lg text-xs overflow-x-auto">
                      {generateAllVideosCode()}
                    </pre>
                  </ScrollArea>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}

      {/* Code Preview Overlay */}
      {showCodePreview && isAdmin && (
        <Card className="border-blue-200 dark:border-blue-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center justify-between">
              <span>Quick Copy - video-descriptions.ts</span>
              <Button size="sm" variant="ghost" onClick={() => setShowCodePreview(false)}>
                <X className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground mb-2">
              Video descriptions are now auto-saved when you add them in the Full Description tab.
            </p>
            <ScrollArea className="h-[200px]">
              <div className="space-y-2">
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className="flex items-center justify-between p-2 border rounded text-xs"
                  >
                    <span className="truncate flex-1">{video.title}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        copyToClipboard(
                          generateDescriptionCode(video.id, video.description),
                          `desc-${video.id}`
                        )
                      }
                    >
                      {copiedCode === `desc-${video.id}` ? (
                        <Check className="h-3 w-3 text-green-600" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
