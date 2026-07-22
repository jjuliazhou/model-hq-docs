"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CodeBlockProps {
  children: string
  language?: string
  title?: string
}

export function CodeBlock({ children, language = "python", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="relative group">
      {title && (
        <div className="bg-slate-800 text-slate-200 px-4 py-2 text-sm font-medium rounded-t-lg border-b border-slate-700">
          {title}
        </div>
      )}
      <div className="relative bg-slate-950 rounded-lg overflow-hidden border border-slate-800">
        <Button
          onClick={copyToClipboard}
          size="sm"
          variant="ghost"
          className="absolute top-2 right-2 h-8 w-8 p-0 text-slate-400 hover:text-slate-200 hover:bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity z-10"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
        <pre className={`p-4 overflow-x-auto text-sm !bg-slate-950 !text-slate-200 !m-0 font-mono ${title ? "rounded-t-none" : "rounded-lg"}`}>
          <code className="!bg-transparent !p-0 !m-0 !rounded-none !text-slate-200 font-mono">{children}</code>
        </pre>
      </div>
    </div>
  )
}
