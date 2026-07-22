"use client"

import { useState, useEffect } from "react"
import { Check, Copy, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface CodeExample {
  curl: string
  python: string
  javascript: string
}

interface CodeBlockWithCopyProps {
  title: string
  code: CodeExample | string
  language?: "curl" | "python" | "javascript"
  showLanguageSelector?: boolean
}

export function CodeBlockWithCopy({
  title,
  code,
  language = "python",
  showLanguageSelector = false,
}: CodeBlockWithCopyProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<"curl" | "python" | "javascript">(language)
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const getCodeContent = () => {
    if (typeof code === "string") {
      return code
    }
    return code[selectedLanguage]
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getCodeContent())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const getLanguageLabel = (lang: "curl" | "python" | "javascript") => {
    if (lang === "curl") return "cURL"
    if (lang === "python") return "Python"
    return "JavaScript"
  }

  if (!mounted) {
    return (
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-medium">{title}</h4>
          <div className="flex items-center gap-2">
            {showLanguageSelector && typeof code === "object" && (
              <div className="h-8 w-16 bg-muted rounded animate-pulse" />
            )}
            <div className="h-8 w-8 bg-muted rounded animate-pulse" />
          </div>
        </div>
        <div className="bg-slate-950 text-slate-50 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm">
            <code>{typeof code === "string" ? code : code[selectedLanguage]}</code>
          </pre>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-medium">{title}</h4>
        <div className="flex items-center gap-2">
          {showLanguageSelector && typeof code === "object" && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8 px-3">
                  {getLanguageLabel(selectedLanguage)}
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setSelectedLanguage("curl")}>cURL</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedLanguage("python")}>Python</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedLanguage("javascript")}>JavaScript</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
            <Button variant="outline" size="sm" className="h-8 w-8 p-0" onClick={copyToClipboard}>
              {copied ? <Check className="h-3 w-3 text-green-600" /> : <Copy className="h-3 w-3" />}
            </Button>
          </div>
        </div>
        <div className="bg-slate-950 text-slate-50 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm">
            <code>{getCodeContent()}</code>
          </pre>
        </div>
      </div>
    )
}
