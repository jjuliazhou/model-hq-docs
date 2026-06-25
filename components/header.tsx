"use client"

import type React from "react"
import SearchResult, { type SearchResult as SearchResultType } from "./search-result"
import { useState, useEffect, useRef } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, Hash, BookOpen, WandSparkles } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { v0SearchData } from "./v0-search-data"
import { v1SearchData } from "./v1-search-data"
import { ThemeToggle } from "./theme-toggle"
import { AiSearchModal } from "./ai-search-modal"
import { Button } from "./ui/button"
import { useHeaderVisibility } from "@/contexts/header-visibility-context"

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResultType[]>([])
  const [showResults, setShowResults] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [showBorder, setShowBorder] = useState(true)
  const [showAiModal, setShowAiModal] = useState(false)
  const [aiQuery, setAiQuery] = useState("")
  const [searchVersion, setSearchVersion] = useState<'v0' | 'v1'>('v1')
  const { setIsHeaderVisible } = useHeaderVisibility()
  const router = useRouter()
  const pathname = usePathname()
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Determine which search data to use based on current page
  const currentSearchData = searchVersion === 'v0' ? v0SearchData : v1SearchData;

  // Keyboard shortcut for AI search (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setShowAiModal(true)
        setAiQuery(searchQuery)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [searchQuery])

  // Scroll behavior for header visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY <= 10) {
        // Always show header at the top
        setIsVisible(true)
        setIsHeaderVisible(true)
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsVisible(false)
        setIsHeaderVisible(false)
      } else {
        // Scrolling up - show header
        setIsVisible(true)
        setIsHeaderVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, setIsHeaderVisible])

  // Comprehensive search data including pages and their headings
  // handled in search-data.ts now

  const performSearch = (query: string): SearchResultType[] => {
    if (!query.trim()) return []

    const normalizedQuery = query.toLowerCase()
    const results: SearchResultType[] = []

    currentSearchData.forEach((item) => {
      const titleMatch = item.title.toLowerCase().includes(normalizedQuery)
      const descriptionMatch = item.description?.toLowerCase().includes(normalizedQuery)
      const parentPageMatch = item.parentPage?.toLowerCase().includes(normalizedQuery)

      if (titleMatch || descriptionMatch || parentPageMatch) {
        results.push(item)
      }
    })

    // Sort results: exact matches first, then partial matches
    return results
      .sort((a, b) => {
        const aExact = a.title.toLowerCase() === normalizedQuery
        const bExact = b.title.toLowerCase() === normalizedQuery
        if (aExact && !bExact) return -1
        if (!aExact && bExact) return 1

        // Type-based sorting
        const typePriority = { page: 0, cookbook: 1, heading: 2 }
        return typePriority[a.type] - typePriority[b.type]
      })
      .slice(0, 8) // Limit to 8 results
  }

  // Helper function to check if query is a question
  const isQuestion = (query: string): boolean => {
    const questionWords = ["how", "what", "why", "when", "where", "who", "can", "does", "is", "are"]
    const lowerQuery = query.toLowerCase()
    return (
      query.includes("?") ||
      questionWords.some((word) => lowerQuery.startsWith(word + " ")) ||
      lowerQuery.split(" ").length > 4 // Longer queries are more likely questions
    )
  }

  useEffect(() => {
    const results = performSearch(searchQuery)
    setSearchResults(results)
    setShowResults(searchQuery.length > 0)
    setSelectedIndex(-1)
  }, [searchQuery])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
        setIsSearchFocused(false)
        // Wait for contraction animation to complete before showing border
        setTimeout(() => {
          setShowBorder(true)
        }, 300)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Function to clear any existing highlights
  const clearExistingHighlights = () => {
    const existingHighlights = document.querySelectorAll(".search-highlight")
    existingHighlights.forEach((element) => {
      element.classList.remove("search-highlight")
    })
  }

  // Function to apply highlight to target element
  const applyHighlight = (targetId: string) => {
    // Clear any existing highlights first
    clearExistingHighlights()

    // Find the target element
    const element = document.getElementById(targetId)
    if (element) {
      // Add highlight class
      element.classList.add("search-highlight")

      // Scroll to element with proper offset
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Remove highlight after 5 seconds
      setTimeout(() => {
        element.classList.remove("search-highlight")
      }, 7000)

      return true
    }
    return false
  }

  // Function to handle navigation with highlighting
  const navigateToResult = (result: SearchResultType) => {
    // Close the search dropdown immediately
    setSearchQuery("")
    setShowResults(false)
    setIsSearchFocused(false)
    setTimeout(() => {
      setShowBorder(true)
    }, 300)
    inputRef.current?.blur()

    // Parse the URL to get path and hash
    const [path, hash] = result.url.split("#")
    const currentPath = pathname

    if (path === currentPath && hash) {
      // Same page, just scroll to the section and highlight
      applyHighlight(hash)
    } else if (hash) {
      // Different page with hash - navigate and then highlight
      router.push(result.url)

      // Use multiple strategies to ensure highlighting works
      const attemptHighlight = (attempts = 0) => {
        if (attempts > 10) return // Give up after 10 attempts

        setTimeout(
          () => {
            const success = applyHighlight(hash)
            if (!success) {
              // If element not found, try again
              attemptHighlight(attempts + 1)
            }
          },
          attempts === 0 ? 100 : 200,
        ) // First attempt after 100ms, subsequent after 200ms
      }

      attemptHighlight()
    } else {
      // No hash, just navigate
      router.push(result.url)
    }
  }

  // Listen for URL changes to handle highlighting on page load
  useEffect(() => {
    const hash = window.location.hash.substring(1)
    if (hash) {
      // Small delay to ensure page is rendered
      setTimeout(() => {
        applyHighlight(hash)
      }, 500)
    }
  }, [pathname])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        if (showResults) {
          setSelectedIndex((prev) => (prev < searchResults.length - 1 ? prev + 1 : prev))
        }
        break
      case "ArrowUp":
        e.preventDefault()
        if (showResults) {
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
        }
        break
      case "Enter":
        e.preventDefault()
        if (selectedIndex >= 0 && searchResults[selectedIndex]) {
          // Navigate to selected result
          navigateToResult(searchResults[selectedIndex])
        } else if (searchQuery.trim().length > 0 && searchResults.length === 0 && isQuestion(searchQuery)) {
          // No results and looks like a question - trigger AI search
          setShowAiModal(true)
          setAiQuery(searchQuery)
          setSearchQuery("")
          setShowResults(false)
          inputRef.current?.blur()
        } else if (searchQuery.trim().length > 0 && searchResults.length === 0) {
          // No results but not a question - still trigger AI search for any query
          setShowAiModal(true)
          setAiQuery(searchQuery)
          setSearchQuery("")
          setShowResults(false)
          inputRef.current?.blur()
        }
        break
      case "Escape":
        setShowResults(false)
        setIsSearchFocused(false)
        setTimeout(() => {
          setShowBorder(true)
        }, 300)
        inputRef.current?.blur()
        break
    }
  }

  const handleResultClick = (result: SearchResultType) => {
    navigateToResult(result)
  }

  return (
    <>
      <header
        className={`sticky top-0 z-40 flex h-16 shrink-0 items-center gap-2 border-b border-border bg-background/80 px-2 backdrop-blur sm:px-4 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <SidebarTrigger className="-ml-1 flex-shrink-0 rounded-none" suppressHydrationWarning />
        <Separator orientation="vertical" className="mr-2 h-4 flex-shrink-0" />
        <div className="flex flex-1 items-center justify-between gap-2 min-w-0">
          <div className="flex items-center gap-2 min-w-0 flex-shrink">
            <h1 className="text-base sm:text-lg font-semibold truncate">Model HQ</h1>
            <span className="hidden md:inline font-mono text-xs uppercase tracking-widest text-muted-foreground whitespace-nowrap">Documentation</span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Theme Toggle - hidden on mobile, will be in sidebar instead */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            {/* Version Toggle commented out - v1 is always selected
            <div className="hidden sm:flex items-center gap-1 border rounded-md p-0.5">
              <Button
                variant={searchVersion === 'v0' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setSearchVersion('v0')}
                className="h-6 px-2 text-xs"
              >
                v0
              </Button>
              <Button
                variant={searchVersion === 'v1' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setSearchVersion('v1')}
                className="h-6 px-2 text-xs"
              >
                v1
              </Button>
            </div>
            */}
            {/* Search Input - responsive width */}
            <div 
              className={`relative transition-all duration-300 ease-in-out ${
                isSearchFocused ? 'w-[180px] sm:w-[300px] md:w-[400px]' : 'w-[120px] sm:w-[200px] md:w-[280px]'
              }`} 
              ref={searchRef}
            >
              <div className="relative">
                <Search className={`absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors duration-200 z-10 ${
                  isSearchFocused ? 'text-foreground' : 'text-muted-foreground'
                }`} />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search... (⌘ + K for AI)"
                  className={`w-full pl-8 pr-3 text-sm h-9 rounded-none outline-none transition-colors duration-200 ease-in-out ${
                    isSearchFocused 
                      ? 'bg-accent/50 dark:bg-accent/30' 
                      : 'bg-background'
                  } ${
                    showBorder && !isSearchFocused
                      ? 'border border-input'
                      : 'border-none'
                  }`}
                  style={{ 
                    boxShadow: 'none',
                    outline: 'none'
                  }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onFocus={() => {
                    setShowBorder(false)
                    setIsSearchFocused(true)
                    searchQuery && setShowResults(true)
                  }}
                  onBlur={() => {
                    // Delay to allow click events on search results to fire first
                    setTimeout(() => {
                      setIsSearchFocused(false)
                      // Wait for contraction animation to complete before showing border
                      setTimeout(() => {
                        setShowBorder(true)
                      }, 300)
                    }, 150)
                  }}
                  suppressHydrationWarning
                />

                {/* Search Results Dropdown */}
                {showResults && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-none shadow-lg z-[60] max-h-96 overflow-y-auto">
                    <SearchResult 
                      results={searchResults} 
                      onResultClick={handleResultClick}
                      selectedIndex={selectedIndex}
                    />
                  </div>
                )}
              </div>
            </div>
            
            {/* AI Search Button */}
            <button
              onClick={() => {
                setShowAiModal(true)
                setAiQuery("")
              }}
              className="group h-9 px-3 rounded-none border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-2"
              title="AI Search (⌘K or Ctrl+K)"
              suppressHydrationWarning
            >
              <WandSparkles className="h-4 w-4 text-brand transition-transform group-hover:scale-110 group-hover:rotate-12" />
              <span className="hidden sm:inline font-mono text-xs uppercase tracking-wider">AI</span>
            </button>
          </div>
        </div>
      </header>

      {/* AI Search Modal */}
      <AiSearchModal
        isOpen={showAiModal}
        onClose={() => {
          setShowAiModal(false)
          setAiQuery("")
        }}
        initialQuery={aiQuery}
      />
    </>
  )
}
