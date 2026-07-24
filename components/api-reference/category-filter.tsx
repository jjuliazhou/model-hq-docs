"use client"

import { useEffect, useRef } from "react"
import { ChevronDown, Check } from "lucide-react"
import { CATEGORY_LABELS } from "./categories"

const OPTIONS = [{ value: "all", label: "All categories" }].concat(
  Object.entries(CATEGORY_LABELS).map(([value, label]) => ({ value, label }))
)

export function CategoryFilter({
  value,
  onChange,
  open,
  onOpenChange,
}: {
  value: string
  onChange: (value: string) => void
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onOpenChange(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [onOpenChange])

  const selected = OPTIONS.find((o) => o.value === value) ?? OPTIONS[0]

  return (
    <div ref={containerRef} className="relative shrink-0">
      <button
        suppressHydrationWarning
        type="button"
        onClick={() => onOpenChange(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-2 border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors hover:bg-accent/50 focus:border-brand sm:w-52"
      >
        <span className="truncate">{selected.label}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 z-50 mt-1 max-h-[13.5rem] w-full min-w-52 overflow-y-auto border border-border bg-background shadow-md"
        >
          {OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={option.value === value}
              onClick={() => {
                onChange(option.value)
                onOpenChange(false)
              }}
              className={`flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left text-sm transition-colors ${
                option.value === value ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"
              }`}
            >
              <span className="truncate">{option.label}</span>
              {option.value === value && <Check className="h-4 w-4 shrink-0" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
