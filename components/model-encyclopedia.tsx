'use client'

import { createContext, useContext, useEffect, useRef, useState } from "react"
import { ChevronDown, Info, X } from "lucide-react"

// Shared model type / format glossary (see encyclopedia.md)
export const ENCYCLOPEDIA: { term: string; purpose: string }[] = [
  { term: "Agentic", purpose: "Complete multi-step tasks and make decisions autonomously to accomplish a goal." },
  { term: "BLING", purpose: '"Best Little Instruction-following No-GPU-required". Run on CPU.' },
  { term: "Cloud", purpose: "Run on remote servers over the internet, increasing speed and complex capabilities." },
  { term: "Coding", purpose: "Specifically designed to write computer code." },
  { term: "CPU Models", purpose: "Designed to be able to run on CPU (Computer Processing Unit) alone." },
  { term: "Embedding", purpose: "Convert text to lists of numbers (vectors) to compare and search for similar content (semantic search)." },
  { term: "General Chat", purpose: "Intended for broad use, able to complete a wide range of tasks." },
  { term: "GGUF", purpose: "A model format that enables large language models (LLMs) to run on local computers using CPU. Highly recommended for Mac users." },
  { term: "GPU/CPU/NPU Models", purpose: "Designed to run on the available GPU (Graphics Processing Unit), CPU (Computer Processing Unit), or NPU (Neural Processing Unit)." },
  { term: "Instruct", purpose: "Follow human instructions, including answering questions and completing tasks." },
  { term: "Language Detector", purpose: "Identify the language of a given piece of text." },
  { term: "Math", purpose: "Specialized for mathematical reasoning and solving numeric problems." },
  { term: "NPU Models", purpose: "Designed to run on NPUs (Neural Processing Units), like a human brain's neural network." },
  { term: "ONNX", purpose: 'A general-purpose AI model format that allows models to run across different types of devices as a "common language".' },
  { term: "Prompt Safety", purpose: "Detect unsafe or malicious prompts to filter them out before they reach a language model." },
  { term: "Re-ranker", purpose: "Compares, scores, and reorders a list of documents against a query based on similarity and relevance." },
  { term: "Speech-to-text", purpose: "Convert spoken audio to written text." },
  { term: "Text-to-speech", purpose: "Convert written text to spoken audio." },
  { term: "Tool", purpose: "Custom models that perform a particular task, made smaller and faster (quantized) to run better in agent workflows." },
  { term: "Question-answer", purpose: "Specifically designed to answer questions." },
  { term: "Vision", purpose: "Understand and analyze images." },
]

const ENCYCLOPEDIA_TERMS = new Set(ENCYCLOPEDIA.map((e) => e.term))

const EncyclopediaContext = createContext<{ openTerm: (term: string) => void } | null>(null)

// Wrap a page with this to enable the slide-out encyclopedia and <TermInfo /> buttons.
export function ModelEncyclopediaProvider({ children }: { children: React.ReactNode }) {
  const [activeTerm, setActiveTerm] = useState<string | null>(null)
  const [pinned, setPinned] = useState(false)
  const [hovered, setHovered] = useState(false)
  const open = hovered || pinned

  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({})
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }
  const openHover = () => {
    cancelClose()
    setHovered(true)
  }
  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = setTimeout(() => setHovered(false), 140)
  }

  const openTerm = (term: string) => {
    setActiveTerm(term)
    setPinned(true)
  }

  useEffect(() => () => cancelClose(), [])

  useEffect(() => {
    if (open && activeTerm && itemRefs.current[activeTerm]) {
      itemRefs.current[activeTerm]?.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }, [open, activeTerm])

  return (
    <EncyclopediaContext.Provider value={{ openTerm }}>
      {children}

      {pinned && <div className="fixed inset-0 z-40" onClick={() => setPinned(false)} aria-hidden />}

      <div
        onMouseEnter={openHover}
        onMouseLeave={scheduleClose}
        className={`fixed right-0 top-1/2 z-50 flex -translate-y-1/2 items-stretch transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-80"
        }`}
      >
        <button
          suppressHydrationWarning
          onClick={() => setPinned(!pinned)}
          aria-label="Open encyclopedia"
          className="flex select-none items-center border-y border-l border-border bg-brand px-2 py-4 text-brand-foreground shadow-lg transition-colors hover:bg-brand/90"
        >
          <span className="font-mono text-xs uppercase tracking-widest [writing-mode:vertical-rl]">
            Encyclopedia
          </span>
        </button>

        <div className="flex h-[70vh] max-h-[560px] w-80 flex-col border-y border-l border-border bg-background shadow-xl">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-brand">Reference</span>
              <h2 className="text-base font-semibold tracking-tight">Encyclopedia</h2>
            </div>
            {pinned && (
              <button
                suppressHydrationWarning
                onClick={() => setPinned(false)}
                aria-label="Close encyclopedia"
                className="rounded-none p-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <ul className="scrollbar-thin flex-1 divide-y divide-border overflow-y-auto">
            {ENCYCLOPEDIA.map((entry) => {
              const isActive = entry.term === activeTerm
              return (
                <li
                  key={entry.term}
                  ref={(el) => {
                    itemRefs.current[entry.term] = el
                  }}
                  className={isActive ? "bg-muted/40" : ""}
                >
                  <button
                    suppressHydrationWarning
                    onClick={() => setActiveTerm(isActive ? null : entry.term)}
                    className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left transition-colors hover:bg-muted/30"
                  >
                    <span className="text-base font-medium">{entry.term}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isActive && (
                    <p className="px-4 pb-3 text-sm leading-relaxed text-muted-foreground">{entry.purpose}</p>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </EncyclopediaContext.Provider>
  )
}

// Small info button that opens the encyclopedia to a given term.
export function TermInfo({ term }: { term: string }) {
  const ctx = useContext(EncyclopediaContext)
  if (!ctx || !ENCYCLOPEDIA_TERMS.has(term)) return null
  return (
    <button
      suppressHydrationWarning
      onClick={() => ctx.openTerm(term)}
      aria-label={`What is ${term}?`}
      title={`What is ${term}?`}
      className="text-muted-foreground transition-colors hover:text-brand"
    >
      <Info className="h-4 w-4" />
    </button>
  )
}
