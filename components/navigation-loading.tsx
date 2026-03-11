"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export function NavigationLoading() {
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    // Store original router methods
    const originalPush = router.push
    const originalReplace = router.replace

    // Override router.push to show loading
    router.push = (...args) => {
      setIsLoading(true)
      setProgress(0)

      // Call the original push method
      const result = originalPush.apply(router, args)

      // Handle completion with setTimeout instead of relying on Promise
      setTimeout(() => {
        setProgress(100)
        setTimeout(() => setIsLoading(false), 200)
      }, 300)

      return result
    }

    // Override router.replace to show loading
    router.replace = (...args) => {
      setIsLoading(true)
      setProgress(0)

      // Call the original replace method
      const result = originalReplace.apply(router, args)

      // Handle completion with setTimeout instead of relying on Promise
      setTimeout(() => {
        setProgress(100)
        setTimeout(() => setIsLoading(false), 200)
      }, 300)

      return result
    }

    // Handle browser back/forward buttons
    const handlePopState = () => {
      setIsLoading(true)
      setProgress(0)
      setTimeout(() => {
        setProgress(100)
        setTimeout(() => setIsLoading(false), 200)
      }, 300)
    }

    window.addEventListener("popstate", handlePopState)

    // Cleanup
    return () => {
      router.push = originalPush
      router.replace = originalReplace
      window.removeEventListener("popstate", handlePopState)
    }
  }, [router])

  // Check if element is search-related
  const isSearchElement = (element: HTMLElement): boolean => {
    // Check if element or any parent has search-related classes
    let current: HTMLElement | null = element
    while (current) {
      const classList = current.classList
      if (
        classList.contains("search") ||
        classList.contains("search-input") ||
        classList.contains("search-results") ||
        classList.contains("search-result") ||
        current.getAttribute("role") === "search" ||
        current.getAttribute("type") === "search" ||
        current.closest('[role="search"]') ||
        current.closest(".search") ||
        current.closest("[data-search]")
      ) {
        return true
      }
      current = current.parentElement
    }
    return false
  }

  // Handle link clicks
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Don't show loading for search-related interactions
      if (isSearchElement(target)) {
        return
      }

      const link = target.closest("a")

      if (link && link.href) {
        // Skip loading for TOC links
        if (link.hasAttribute("data-toc-link") || link.closest("[data-toc]")) {
          return
        }

        const url = new URL(link.href)
        const currentUrl = new URL(window.location.href)
        
        // Skip loading for same-page anchor/hash links
        if (url.pathname === currentUrl.pathname && url.hash) {
          return
        }
        
        // Skip loading for external links
        if (!link.href.startsWith(window.location.origin)) {
          return
        }

        setIsLoading(true)
        setProgress(0)
      }
    }

    document.addEventListener("click", handleLinkClick)
    return () => document.removeEventListener("click", handleLinkClick)
  }, [])

  // Animate progress bar
  useEffect(() => {
    if (isLoading && progress === 0) {
      const timer = setTimeout(() => setProgress(70), 100)
      return () => clearTimeout(timer)
    }
  }, [isLoading, progress])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-6 p-8">
        {/* Logo with enhanced animation */}
        {/* <div className="relative w-20 h-20">
          <Image src="/images/modelhq-logo.png" alt="Model HQ" fill className="object-contain animate-pulse" />
        </div> */}

        {/* Enhanced Loading Spinner */}
        <div className="relative">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
          {/* Inner spinning circle */}
          <div className="absolute inset-2 w-8 h-8 border-2 border-gray-100 border-b-blue-400 rounded-full animate-spin animate-reverse"></div>
        </div>

        {/* Bouncing dots */}
        {/* <div className="flex space-x-1">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div> */}

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading Model HQ</h2>
          <p className="text-sm text-gray-600">Please wait while we prepare your documentation...</p>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Progress percentage */}
        <div className="text-xs text-gray-500 font-medium">{progress}%</div>
      </div>
    </div>
  )
}
