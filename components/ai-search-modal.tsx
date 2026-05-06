"use client"

import { useState, useEffect, useRef } from "react"
import { X, Send, Loader2, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface Message {
  role: "user" | "assistant"
  content: string
}

interface AiSearchModalProps {
  isOpen: boolean
  onClose: () => void
  initialQuery?: string
}

export function AiSearchModal({ isOpen, onClose, initialQuery = "" }: AiSearchModalProps) {
  const [query, setQuery] = useState(initialQuery)
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [version, setVersion] = useState<'v0' | 'v1'>('v1')
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery)
      if (initialQuery && messages.length === 0) {
        handleSearch(initialQuery)
      }
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen, initialQuery])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Global ESC key handler
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey)
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [isOpen])

  const handleSearch = async (searchQuery: string = query) => {
    if (!searchQuery.trim()) return

    const userMessage: Message = { role: "user", content: searchQuery }
    setMessages((prev) => [...prev, userMessage])
    setQuery("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/ai-search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: searchQuery,
          conversationHistory: messages,
          version: version,
        }),
      })

      const data = await response.json()

      if (data.success) {
        const assistantMessage: Message = {
          role: "assistant",
          content: data.answer,
        }
        setMessages((prev) => [...prev, assistantMessage])
      } else {
        const errorMessage: Message = {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        }
        setMessages((prev) => [...prev, errorMessage])
      }
    } catch (error) {
      console.error("Error calling AI search:", error)
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I couldn't process your request. Please try again.",
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSearch()
    }
    if (e.key === "Escape") {
      onClose()
    }
  }

  const handleClose = () => {
    setMessages([])
    setQuery("")
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop with blur */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        <div
          className="bg-background border rounded-lg shadow-2xl w-full max-w-3xl max-h-[70vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">AI Search</h2>
                <span className="text-xs text-muted-foreground">
                  Ask anything about Model HQ
                </span>
              </div>

              <div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            {/* Version toggle commented out - v1 is always selected
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center gap-1 border rounded-md p-1">
                <Button
                  variant={version === 'v0' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setVersion('v0')}
                  className="h-7 px-3 text-xs"
                >
                  v0
                </Button>
                <Button
                  variant={version === 'v1' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setVersion('v1')}
                  className="h-7 px-3 text-xs"
                >
                  v1
                </Button>
              </div>
            </div>
            */}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground py-8">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary/50" />
                <p className="text-lg font-medium">Ask me anything about Model HQ</p>
                <p className="text-sm mt-2">
                  I'll search through the documentation to help you find answers
                </p>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.role === "user" ? (
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  ) : (
                    <>
                      <div className="text-sm prose prose-sm dark:prose-invert max-w-none prose-p:my-2 prose-headings:my-2 prose-li:my-0 prose-img:my-4 prose-img:rounded-lg prose-img:border prose-img:border-border prose-img:shadow-md prose-table:my-4 prose-th:border prose-th:border-border prose-th:px-3 prose-th:py-2 prose-td:border prose-td:border-border prose-td:px-3 prose-td:py-2">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            a: ({ node, ...props }) => (
                              <a
                                {...props}
                                className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                              />
                            ),
                            img: ({ node, ...props }) => (
                              <img
                                {...props}
                                className="rounded-lg border border-border shadow-md my-4 max-w-full h-auto"
                                loading="lazy"
                              />
                            ),
                            table: ({ node, ...props }) => (
                              <table
                                {...props}
                                className="min-w-full border-collapse border border-border my-4"
                              />
                            ),
                            thead: ({ node, ...props }) => (
                              <thead
                                {...props}
                                className="bg-muted"
                              />
                            ),
                            th: ({ node, ...props }) => (
                              <th
                                {...props}
                                className="border border-border px-3 py-2 text-left font-semibold"
                              />
                            ),
                            td: ({ node, ...props }) => (
                              <td
                                {...props}
                                className="border border-border px-3 py-2"
                              />
                            ),
                            code: ({ node, ...props }) => (
                              <code
                                {...props}
                                className="bg-muted-foreground/10 px-1 py-0.5 rounded text-xs"
                              />
                            ),
                            pre: ({ node, ...props }) => (
                              <pre
                                {...props}
                                className="bg-muted-foreground/10 p-2 rounded overflow-x-auto"
                              />
                            ),
                          }}
                        >
                          {message.content}
                        </ReactMarkdown>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2  border-t border-border/50 pt-2">
                        AI can make mistakes. Please refer to the documentation for accurate and verified information.
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg p-3">
                  <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  placeholder="Ask a question..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                  className="flex-1 !border-blue-200 focus-visible:!ring-blue-200 focus-visible:!border-blue-200"
                />
              <Button
                onClick={() => handleSearch()}
                disabled={isLoading || !query.trim()}
                size="icon"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Press Enter to send, Escape to close
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
