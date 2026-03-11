"use client"

import { useState, useEffect } from "react"
import { X, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useHeaderVisibility } from "@/contexts/header-visibility-context"
import { usePathname } from "next/navigation"

export function DeprecationBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { isHeaderVisible } = useHeaderVisibility()
  const pathname = usePathname()
  
  // Only show banner on v0 pages, home page, or cookbooks/v0
  const shouldShowBanner = pathname === '/' || pathname.startsWith('/v0') || pathname.includes('/cookbooks/v0')

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    // Always show banner on relevant pages (no localStorage check)
    if (shouldShowBanner) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [shouldShowBanner, pathname, isMounted])

  const handleDismiss = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div 
      className={`sticky z-30 left-0 right-0 bg-orange-50 dark:bg-orange-950/50 border-b-2 border-orange-200 dark:border-orange-800 transition-all duration-300 ${
        isHeaderVisible ? 'top-16' : 'top-0'
      }`}
    >
      <div className="px-6 py-3">
        <div className="flex items-start gap-3 max-w-full">
          <AlertTriangle className="h-7 w-7 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <p className="text-sm font-medium text-orange-900 dark:text-orange-100">
                <span className="font-semibold">Important Notice:</span> Model HQ v0 will be deprecated soon.
              </p>
              <a
                href="/v1"
                className="text-sm font-semibold text-orange-700 dark:text-orange-300 hover:text-orange-800 dark:hover:text-orange-200 underline underline-offset-2 whitespace-nowrap"
              >
                Migrate to v1 →
              </a>
            </div>
            <p className="text-xs text-orange-800 dark:text-orange-200 mt-1">
              Please upgrade to Model HQ v1 to continue receiving updates, new features, and support.
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDismiss}
            className="h-6 w-6 p-0 hover:bg-orange-500/20 flex-shrink-0"
            aria-label="Dismiss announcement"
          >
            <X className="h-4 w-4 text-orange-700 dark:text-orange-300" />
          </Button>
        </div>
      </div>
    </div>
  )
}
