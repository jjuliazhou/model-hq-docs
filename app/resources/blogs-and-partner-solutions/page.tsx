"use client"

import {
  BookOpen,
  ArrowRight,
  Users,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Calendar,
  User,
  Cpu,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState, useRef } from "react"

export default function BlogsPage() {
  const [showAllIntelSolutions, setShowAllIntelSolutions] = useState(false)
  const [showAllQualcommSolutions, setShowAllQualcommSolutions] = useState(false)
  const [showAllBlogs, setShowAllBlogs] = useState(false)

  const intelViewMoreButtonRef = useRef<HTMLDivElement>(null)
  const qualcommViewMoreButtonRef = useRef<HTMLDivElement>(null)
  const blogViewMoreButtonRef = useRef<HTMLDivElement>(null)

  const intelSolutions = [
    {
      id: 1,
      title: "LLMWare.ai Model HQ-Local AI Partner Brief",
      description: "Securely deploy and scale AI across the enterprise with Intel's cutting-edge AI PC technology",
      image: "/partner-solutions/PS1.png",
      link: "https://www.intel.com/content/www/us/en/content-details/856277/llmware-ai-model-hq-local-ai-partner-brief.html",
      category: "Enterprise AI",
      featured: true,
    },
    {
      id: 2,
      title: "Local AI—No Code, More Secure with AI PCs and the Private Cloud",
      description: "Leverage Intel AI PCs and Private Cloud infrastructure for secure, no-code AI deployment",
      image: "/partner-solutions/PS2.png",
      link: "https://www.intel.com/content/www/us/en/content-details/854280/local-ai-no-code-more-secure-with-ai-pcs-and-the-private-cloud.html",
      category: "Security & Privacy",
      featured: false,
    },
    {
      id: 3,
      title: "Model HQ Now Serving Arrow Lake",
      description: "Optimized performance and efficiency with Intel's latest Arrow Lake architecture",
      image: "/partner-solutions/PS3.png",
      link: "https://github.com/user-attachments/files/18292873/IPA.Optimization.Summary.LLMWare.1.pdf",
      category: "Performance",
      featured: false,
    },
    {
      id: 4,
      title: "LLMWare Unleashes the Power of the Intel AI PC",
      description: "Achieve superior cost, performance, and security wins with Intel AI PC technology",
      image: "/partner-solutions/PS4.png",
      link: "https://www.intel.com/content/www/us/en/content-details/844173/llmware-unleashes-the-power-of-the-intel-ai-pc-with-cost-performance-and-security-wins.html",
      category: "Cost Optimization",
      featured: true,
    },
  ]

  const qualcommSolutions = [
    // Add Qualcomm solutions here when available
    {
      id: 1,
      title: "Model HQ by LLMWare.ai: Run language models and use AI agents on Snapdragon X Series devices",
      description: "Running LLMs on device has two issues: memory footprint and efficiency. To address both problems, LLMWare’s Model HQ provides a fast, efficient on-ramp to deploying and managing Gen AI models on local devices.",
      image: "/partner-solutions/PS5.png",
      link: "https://www.qualcomm.com/developer/blog/2025/03/model-hq-llmware-run-language-models-use-ai-agents-on-snapdragon-x-series-devices",
      category: "Snapdragon X Series",
      featured: true,
    },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "How to Run AI Models Privately on Your AI PC with Model HQ; No Cloud, No Code",
      description:
        "In an era where efficiency and data privacy are paramount, Model HQ by LLMWare emerges as a game-changer for professionals and enthusiasts alike. Built by LLMWare, Model HQ is a groundbreaking desktop application that transforms your own PC or laptop into a fully private, high-performance AI workstation.",
      author: "Rohan Sharma",
      publishDate: "2025-07-01",
      readTime: "5 min read",
      category: "Getting Started",
      link: "https://dev.to/llmware/how-to-run-ai-models-privately-on-your-ai-pc-with-model-hq-no-cloud-no-code-3o9k",
      featured: true,
      image: "/blogs/blog1.png",
    },
    {
      id: 2,
      title: "How to Create a Local Chatbot Without Coding in Less Than 10 Minutes on AI PCs",
      description:
        "In this guide, we'll walk you through how to create your own local chatbot using Model HQ ; a revolutionary AI desktop app by LLMWare.ai. Whether you're a student, developer, or a professional looking for a private and offline AI assistant, this tool puts the power of cutting-edge AI models directly on your laptop.",
      author: "Rohan Sharma",
      publishDate: "2025-06-27",
      readTime: "6 min read",
      category: "Chat Feature",
      link: "https://dev.to/llmware/how-to-create-a-local-chatbot-without-coding-in-less-than-10-minutes-on-ai-pcs-2ajl",
      featured: false,
      image: "/blogs/blog2.png",
    },
  ]

  const displayedIntelSolutions = showAllIntelSolutions ? intelSolutions : intelSolutions.slice(0, 3)
  const displayedQualcommSolutions = showAllQualcommSolutions ? qualcommSolutions : qualcommSolutions.slice(0, 3)
  const displayedBlogs = showAllBlogs ? blogPosts : blogPosts.slice(0, 3)

  const handleIntelViewToggle = () => {
    if (showAllIntelSolutions) {
      setShowAllIntelSolutions(false)
      setTimeout(() => {
        intelViewMoreButtonRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
      }, 100)
    } else {
      setShowAllIntelSolutions(true)
    }
  }

  const handleQualcommViewToggle = () => {
    if (showAllQualcommSolutions) {
      setShowAllQualcommSolutions(false)
      setTimeout(() => {
        qualcommViewMoreButtonRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
      }, 100)
    } else {
      setShowAllQualcommSolutions(true)
    }
  }

  const handleBlogViewToggle = () => {
    if (showAllBlogs) {
      setShowAllBlogs(false)
      setTimeout(() => {
        blogViewMoreButtonRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
      }, 100)
    } else {
      setShowAllBlogs(true)
    }
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      "Getting Started": "bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300",
      "Chat Feature": "bg-green-100 dark:bg-green-950 text-green-800 dark:text-green-300",
      Security: "bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-300",
      Architecture: "bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300",
      Research: "bg-orange-100 dark:bg-orange-950 text-orange-800 dark:text-orange-300",
      Infrastructure: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300",
      "Enterprise AI": "bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300",
      "Security & Privacy": "bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-300",
      Performance: "bg-green-100 dark:bg-green-950 text-green-800 dark:text-green-300",
      "Cost Optimization": "bg-yellow-100 dark:bg-yellow-950 text-yellow-800 dark:text-yellow-300",
      "Mobile AI": "bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300"
  }

  const PartnerSolutionCard = ({ solution, partner }: { solution: any; partner: "intel" | "qualcomm" }) => (
    <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 rounded-2xl shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="relative">
        {solution.featured && (
          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-3 py-1 shadow-lg">
              Featured
            </Badge>
          </div>
        )}
        <div className="absolute top-4 right-4 z-10">
          <Badge
            variant="secondary"
            className={`${partner === "intel" ? "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300" : "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300"} font-medium shadow-sm`}
          >
            {solution.category}
          </Badge>
        </div>
        <div className="relative w-full h-48 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          <Image
            src={solution.image || "/placeholder.svg"}
            alt={solution.title}
            width={400}
            height={192}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {solution.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">{solution.description}</p>
        </div>
        <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
          <button
            suppressHydrationWarning
            onClick={() => window.open(solution.link, "_blank")}
            className={`w-full relative overflow-hidden ${
              partner === "intel"
                ? "bg-gradient-to-r from-[#0072CE] to-[#00C7FD] hover:from-[#005BA1] hover:to-[#0099CC]"
                : "bg-gradient-to-r from-[#E60012] to-[#FF4444] hover:from-[#CC0010] hover:to-[#E60012]"
            } text-white font-medium py-3 px-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] group/btn`}
          >
            <div className="relative flex items-center justify-center gap-2">
              <span>Read Full Article</span>
              <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-xl" />
          </button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            Resources & Insights
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our latest blogs, partner solutions, and technical insights about AI model deployment and
            management.
          </p>
        </div>

        {/* Blogs Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 mb-8">
            {/* <div className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 rounded-2xl shadow-sm">
              <BookOpen className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div> */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">Latest Blogs</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Stay updated with our latest insights and tutorials</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {displayedBlogs.map((blog) => (
              <Card
                key={blog.id}
                suppressHydrationWarning
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 rounded-2xl shadow-lg cursor-pointer bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
                onClick={() => window.open(blog.link, "_blank")}
              >
                <div className="relative">
                  {blog.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-3 py-1 shadow-lg">
                        Featured
                      </Badge>
                    </div>
                  )}
                  {blog.image ? (
                    <img
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-52 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-500">
                      <BookOpen className="h-16 w-16 text-gray-400 group-hover:text-gray-500 transition-colors duration-300" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge className={getCategoryColor(blog.category)}>{blog.category}</Badge>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 leading-relaxed">{blog.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(blog.publishDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300 pt-2">
                    <span className="text-sm font-medium">Read Article</span>
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {blogPosts.length > 3 && (
            <div className="flex justify-center" ref={blogViewMoreButtonRef}>
              <Button
                suppressHydrationWarning
                onClick={handleBlogViewToggle}
                variant="outline"
                size="lg"
                className="flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 rounded-xl px-6 py-3"
              >
                {showAllBlogs ? (
                  <>
                    <span>View Less</span>
                    <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    <span>View More Blog Posts</span>
                    <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}
        </section>

        {/* Partner Solutions Section */}
        <section className="space-y-12">
          <div className="flex items-center gap-4 mb-8">
            {/* <div className="p-4 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 rounded-2xl shadow-sm">
              <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div> */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">Partner Solutions</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Discover our partnerships with leading technology companies</p>
            </div>
          </div>

          {/* Intel Solutions */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-xl">
                <Cpu className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
                  Intel Partnership Solutions
                  <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    {intelSolutions.length} Solutions
                  </Badge>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Powered by Intel's cutting-edge AI PC technology</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedIntelSolutions.map((solution) => (
                <PartnerSolutionCard key={solution.id} solution={solution} partner="intel" />
              ))}
            </div>

            {intelSolutions.length > 3 && (
              <div className="flex justify-center" ref={intelViewMoreButtonRef}>
                <Button
                  suppressHydrationWarning
                  onClick={handleIntelViewToggle}
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 rounded-xl px-6 py-3"
                >
                  {showAllIntelSolutions ? (
                    <>
                      <span>View Less Intel Solutions</span>
                      <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      <span>View More Intel Solutions</span>
                      <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>

          {/* Qualcomm Solutions */}
          {qualcommSolutions.length > 0 && (
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 rounded-xl">
                  <Zap className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-3">
                    Qualcomm Partnership Solutions
                    <Badge variant="secondary" className="bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300">
                      {qualcommSolutions.length} Solutions
                    </Badge>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Enhanced mobile AI capabilities with Snapdragon technology
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedQualcommSolutions.map((solution) => (
                  <PartnerSolutionCard key={solution.id} solution={solution} partner="qualcomm" />
                ))}
              </div>

              {qualcommSolutions.length > 3 && (
                <div className="flex justify-center" ref={qualcommViewMoreButtonRef}>
                  <Button
                    suppressHydrationWarning
                    onClick={handleQualcommViewToggle}
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/30 border-2 border-red-200 dark:border-red-800 hover:border-red-300 dark:hover:border-red-700 text-red-700 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 rounded-xl px-6 py-3"
                  >
                    {showAllQualcommSolutions ? (
                      <>
                        <span>View Less Qualcomm Solutions</span>
                        <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        <span>View More Qualcomm Solutions</span>
                        <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Coming Soon for Qualcomm if no solutions */}
          {qualcommSolutions.length === 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
                  <Zap className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Qualcomm Partnership Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Enhanced mobile AI capabilities with Snapdragon technology
                  </p>
                </div>
              </div>

              <Card className="border-2 border-dashed border-gray-300 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl">
                <CardContent className="p-12 text-center space-y-4">
                  <div className="p-4 bg-red-100 dark:bg-red-950 rounded-full w-fit mx-auto">
                    <Zap className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Qualcomm Solutions Coming Soon</h4>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                    We're working on exciting new partnerships with Qualcomm to bring you enhanced mobile AI
                    capabilities. Stay tuned for updates!
                  </p>
                  <Badge variant="secondary" className="bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300">
                    Coming Soon
                  </Badge>
                </CardContent>
              </Card>
            </div>
          )}
        </section>

        {/* Alternative Resources */}
        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 dark:from-black rounded-2xl p-8 sm:p-12 text-center border border-gray-200 dark:border-blue-900 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">Explore More Resources</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover additional resources to get started with Model HQ and maximize your AI deployment success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 dark:border-gray-600 rounded-xl">
              <a href="/video-tutorials" className="flex items-center justify-center gap-2">
                <BookOpen className="h-5 w-5" />
                Watch Video Tutorials
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl"
            >
              <a href="/getting-started" className="flex items-center justify-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Get Started Guide
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 dark:border-gray-600 rounded-xl">
              <a href="/support" className="flex items-center justify-center gap-2">
                <Users className="h-5 w-5" />
                Contact Support
              </a>
            </Button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-2xl p-8 sm:p-12 text-center border-2 border-blue-100 dark:border-blue-800 shadow-sm">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full w-fit mx-auto">
              <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-200" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Stay Updated</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Be the first to know when we publish new content, partner solutions, and product updates
            </p>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Follow our updates and announcements through our official channels and documentation for the latest
                insights and features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

