"use client"

import { useMemo, useRef, useState, useEffect, useCallback } from "react"
import { Search, X } from "lucide-react"
import type { ApiEndpoint } from "@/app/developer-docs/api-reference/api-endpoints-data"
import { CATEGORY_LABELS } from "./categories"
import { CategoryFilter } from "./category-filter"

export function EndpointSearch({
  endpoints,
  onNavigate,
}: {
  endpoints: ApiEndpoint[]
  onNavigate: (id: string) => void
}) {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("all")
  const [searchOpen, setSearchOpen] = useState(false)
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const q = query.trim().toLowerCase()

  const results = useMemo(() => {
    const filtered = category === "all" ? endpoints : endpoints.filter((e) => e.category === category)
    if (!q) return filtered
    return filtered.filter(
      (e) =>
        e.name.toLowerCase().includes(q) ||
        e.endpoint.toLowerCase().includes(q) ||
        CATEGORY_LABELS[e.category]?.toLowerCase().includes(q)
    )
  }, [q, category, endpoints])

  const handleSelect = useCallback(
    (id: string) => {
      setSearchOpen(false)
      setActiveIndex(-1)
      onNavigate(id)
    },
    [onNavigate]
  )

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setSearchOpen(false)
        setCategoryOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (activeIndex < 0 || !listRef.current) return
    const item = listRef.current.children[activeIndex] as HTMLElement | undefined
    item?.scrollIntoView({ block: "nearest" })
  }, [activeIndex])

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!searchOpen) {
      if (e.key === "ArrowDown") setSearchOpen(true)
      return
    }
    if (results.length === 0) return
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((i) => (i + 1) % results.length)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((i) => (i - 1 + results.length) % results.length)
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault()
      handleSelect(results[activeIndex].id)
    } else if (e.key === "Escape") {
      setSearchOpen(false)
    }
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl">
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            suppressHydrationWarning
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSearchOpen(true)
              setCategoryOpen(false)
              setActiveIndex(-1)
            }}
            onFocus={() => {
              setSearchOpen(true)
              setCategoryOpen(false)
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search endpoints by name or path…"
            className="w-full border border-border bg-background py-2.5 pl-9 pr-9 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("")
                inputRef.current?.focus()
              }}
              aria-label="Clear search"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <CategoryFilter
          value={category}
          open={categoryOpen}
          onOpenChange={(next) => {
            setCategoryOpen(next)
            if (next) setSearchOpen(false)
          }}
          onChange={(next) => {
            setCategory(next)
            setActiveIndex(-1)
          }}
        />
      </div>

      {searchOpen && (
        <div className="absolute z-50 mt-1 w-full border border-border bg-background shadow-md">
          {results.length > 0 ? (
            <>
              <div ref={listRef} className="max-h-[19rem] overflow-y-auto">
                {results.map((endpoint, i) => (
                  <button
                    key={endpoint.id}
                    type="button"
                    onMouseDown={(e) => {
                      e.preventDefault()
                      handleSelect(endpoint.id)
                    }}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`flex h-[3.75rem] w-full items-center justify-between px-4 text-left text-sm transition-colors ${
                      i === activeIndex ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"
                    }`}
                  >
                    <div className="flex min-w-0 flex-col gap-0.5">
                      <span className="truncate font-medium">{endpoint.name}</span>
                      <span className="truncate font-mono text-xs text-muted-foreground">
                        {endpoint.method} {endpoint.endpoint}
                      </span>
                    </div>
                    <span className="ml-3 shrink-0 border border-border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {CATEGORY_LABELS[endpoint.category]}
                    </span>
                  </button>
                ))}
              </div>
              <div className="border-t border-border px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {results.length} {results.length === 1 ? "endpoint" : "endpoints"}
              </div>
            </>
          ) : (
            <div className="px-4 py-6 text-center text-sm text-muted-foreground">
              No endpoints match &ldquo;{query}&rdquo;.
            </div>
          )}
        </div>
      )}
    </div>
  )
}
