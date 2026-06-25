'use client'

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Loader2, Paperclip, X, CheckCircle2 } from "lucide-react"
import { PageFrame, FrameSection } from "@/components/page-frame"

const issueTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "trial", label: "Free Trial Access Code Request" },
  { value: "technical", label: "Technical Issue" },
  { value: "bug", label: "Bug Report" },
  { value: "feature", label: "Feature Request" },
  { value: "documentation", label: "Documentation Feedback" },
  { value: "other", label: "Other" },
]

export default function SupportPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [issueType, setIssueType] = useState("general")
  const [subject, setSubject] = useState("")
  const [body, setBody] = useState("")
  const [files, setFiles] = useState<File[]>([])
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)])
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    setErrorMsg("")

    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("email", email)
      formData.append("issueType", issueType)
      formData.append("subject", subject)
      formData.append("body", body)
      files.forEach((file, i) => formData.append(`file_${i}`, file))

      const res = await fetch("/api/support", { method: "POST", body: formData })

      if (res.ok) {
        setStatus("success")
        setName("")
        setEmail("")
        setIssueType("general")
        setSubject("")
        setBody("")
        setFiles([])
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(data?.error || "Something went wrong. Please try again.")
        setStatus("error")
      }
    } catch {
      setErrorMsg("Network error. Please try again.")
      setStatus("error")
    }
  }

  const inputClass =
    "w-full rounded-none border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand/40 placeholder:text-muted-foreground"

  return (
    <PageFrame>
      {/* Hero */}
      <FrameSection>
        <div className="px-6 py-16 md:py-24">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            Support
          </span>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            How can we help?
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Have a question, found a bug, or need a trial access code? Send us a
            message and our team will get back to you.
          </p>
        </div>
      </FrameSection>

      {/* Contact channels */}
      <FrameSection>
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
          <a
            href="mailto:support@llmware.ai"
            className="group flex flex-col items-start bg-background p-8 transition-colors hover:bg-muted/30 md:p-12"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-brand">Email</span>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">support@llmware.ai</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Reach the team directly for any support questions.
            </p>
            <span className="mt-auto inline-flex items-center pt-8 text-sm font-medium text-brand">
              Send an email
              <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>

          <a
            href="https://llmware.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start bg-background p-8 transition-colors hover:bg-muted/30 md:p-12"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-brand">Website</span>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">LLMWare.ai</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore products, resources, and the latest from the team.
            </p>
            <span className="mt-auto inline-flex items-center pt-8 text-sm font-medium text-brand">
              Visit website
              <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>
      </FrameSection>

      {/* Form */}
      <FrameSection last>
        {/* Centered column with two vertical guide lines framing the form */}
        <div className="mx-auto max-w-3xl border-x border-border px-6 py-16 md:px-12 md:py-20">
          <div className="text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-brand">
              Contact form
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Send us a message
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Fill out the form below and we&apos;ll respond as soon as possible.
            </p>
          </div>

          {status === "success" ? (
            <div className="mt-10 flex items-start gap-3 border border-border bg-muted/30 p-6">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
              <div>
                <p className="font-semibold">Message sent</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Thanks for reaching out. We&apos;ll get back to you shortly. You can
                  send another message anytime.
                </p>
                <Button
                  variant="outline"
                  className="mt-4 rounded-none"
                  onClick={() => setStatus("idle")}
                >
                  Send another message
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-6 text-left">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="issueType" className="mb-2 block text-sm font-medium">
                  Issue type
                </label>
                <select
                  id="issueType"
                  value={issueType}
                  onChange={(e) => setIssueType(e.target.value)}
                  className={inputClass}
                >
                  {issueTypes.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={inputClass}
                  placeholder="Brief summary of your request"
                />
              </div>

              <div>
                <label htmlFor="body" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="body"
                  required
                  rows={6}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className={`${inputClass} resize-y`}
                  placeholder="Describe your issue or question in detail..."
                />
              </div>

              {/* Attachments */}
              <div>
                <label className="mb-2 block text-sm font-medium">Attachments</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  onChange={handleFiles}
                  className="hidden"
                />
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-none"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Paperclip className="mr-2 h-4 w-4" />
                  Add files
                </Button>

                {files.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {files.map((file, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-between border border-border bg-muted/20 px-3 py-2 text-sm"
                      >
                        <span className="truncate">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          className="ml-3 text-muted-foreground transition-colors hover:text-foreground"
                          aria-label="Remove file"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {status === "error" && (
                <p className="text-sm text-destructive">{errorMsg}</p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "submitting"}
                className="h-12 w-full rounded-none bg-brand px-6 text-base text-brand-foreground hover:bg-brand/90"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send message"
                )}
              </Button>
            </form>
          )}
        </div>
      </FrameSection>
    </PageFrame>
  )
}
