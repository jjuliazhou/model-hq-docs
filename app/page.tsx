'use client'

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight, AlertTriangle } from "lucide-react"

const features = [
  {
    title: "100% Private",
    description:
      "Your data never leaves your device. Run models completely offline with full privacy control.",
  },
  {
    title: "Zero Coding",
    description:
      "No programming knowledge required. Build powerful AI applications with an intuitive interface.",
  },
  {
    title: "Local Processing",
    description:
      "Leverage your PC's hardware for fast, efficient AI processing without cloud dependencies.",
  },
  {
    title: "250+ Models",
    description:
      "Access a vast library of state-of-the-art models from 1B to 32B parameters.",
  },
  {
    title: "Custom Bots",
    description:
      "Create and customize intelligent bots for your specific use cases and workflows.",
  },
  {
    title: "Enterprise Ready",
    description:
      "Scalable solutions with enterprise templates and team collaboration features.",
  },
]

/** Crosshair markers that sit on the framing lines, like zed.dev */
function Crosshairs({ top = false, bottom = false }: { top?: boolean; bottom?: boolean }) {
  return (
    <>
      {top && (
        <>
          <span aria-hidden className="pointer-events-none absolute -left-[6.5px] -top-[6.5px] z-10 hidden text-foreground md:block">
            <PlusMark />
          </span>
          <span aria-hidden className="pointer-events-none absolute -right-[6.5px] -top-[6.5px] z-10 hidden text-foreground md:block">
            <PlusMark />
          </span>
        </>
      )}
      {bottom && (
        <>
          <span aria-hidden className="pointer-events-none absolute -left-[6.5px] -bottom-[6.5px] z-10 hidden text-foreground md:block">
            <PlusMark />
          </span>
          <span aria-hidden className="pointer-events-none absolute -right-[6.5px] -bottom-[6.5px] z-10 hidden text-foreground md:block">
            <PlusMark />
          </span>
        </>
      )}
    </>
  )
}

function PlusMark() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M6.5 0V13M0 6.5H13" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export default function HomePage() {
  const [activeVersion, setActiveVersion] = useState<'v0' | 'v1'>('v1')

  return (
    <>
      <div className="-mx-6 -mt-6 -mb-6 overflow-x-clip border-x border-border/60">
        {/* Centered framed column with vertical guide lines on both sides (Zed style) */}
        <div className="relative mx-auto w-full max-w-6xl border-x border-border">
          {/* Hero Section */}
          <section className="relative border-b border-border">
            <Crosshairs bottom />
            {/* noise texture backdrop — visible across the whole hero */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-90 mix-blend-multiply dark:opacity-20 dark:mix-blend-screen dark:invert"
              style={{
                backgroundImage: "url(/images/texture.png)",
              }}
            />
            <div className="relative px-6 py-24 md:py-36">
              <div className="flex flex-col items-center text-center">
                <span className="mb-7 inline-flex items-center gap-2 bg-background/70 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
                  <span className="h-px w-6 bg-brand" />
                  Zero coding required
                  <span className="h-px w-6 bg-brand" />
                </span>
                <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-brand md:text-7xl">
                  Run AI on your own machine
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                  Model HQ runs cutting-edge AI models directly on your PC.
                  Private, secure, and completely offline.
                </p>
                <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
                  <Button asChild size="lg" className="group h-12 rounded-none bg-brand px-6 text-base text-brand-foreground hover:bg-brand/90">
                    <a href="/start-here/getting-started">
                      Get started
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-12 rounded-none px-6 text-base">
                    <a href="/system-configuration">System requirements</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="relative border-b border-border">
            <Crosshairs bottom />
            <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-3">
              {[
                { value: "250+", label: "AI models available" },
                { value: "1B–32B", label: "Parameter range" },
                { value: "100%", label: "Private & offline" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-background px-6 py-10 text-center"
                >
                  <div className="text-4xl font-semibold tracking-tight">{stat.value}</div>
                  <div className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="relative border-b border-border">
            <Crosshairs bottom />
            <div className="px-6 py-16 md:py-20">
              <span className="font-mono text-xs uppercase tracking-widest text-brand">
                Why Model HQ
              </span>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                Built for privacy, speed, and simplicity
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Experience the power of AI without compromising on privacy or
                requiring technical expertise.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-px border-t border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative bg-background p-8 transition-colors hover:bg-muted/30"
                >
                  <span className="font-mono text-sm text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="mt-4 h-px w-8 bg-brand/40 transition-all group-hover:w-12" />
                  <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Supported Models Section */}
          <section className="relative border-b border-border">
            <Crosshairs bottom />
            <div className="px-6 pt-16 md:pt-20">
              <span className="font-mono text-xs uppercase tracking-widest text-brand">
                Hardware optimized
              </span>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                Processor-optimized models
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Explore AI models specifically optimized for your hardware architecture.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-px border-y border-border bg-border md:grid-cols-2">
                <div className="group flex flex-col bg-background p-8 transition-colors hover:bg-muted/30">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-semibold">Intel</h3>
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">OpenVINO</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    OpenVINO-optimized models for Intel processors.
                  </p>
                  <div className="mt-6 space-y-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-brand" /> GPU &amp; NPU support
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-brand" /> 150+ optimized models
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-muted-foreground">
                    Enhanced performance on Intel Core, Xeon processors, and Intel Arc
                    GPUs with hardware-specific optimizations in minutes.
                  </p>
                  <a
                    href="/supported-models/intel"
                    className="mt-auto inline-flex items-center pt-8 text-sm font-medium text-brand hover:underline"
                  >
                    Explore Intel models
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>

                <div className="group flex flex-col bg-background p-8 transition-colors hover:bg-muted/30">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-semibold">Qualcomm</h3>
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">QNN</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    QNN-optimized models for Snapdragon processors.
                  </p>
                  <div className="mt-6 space-y-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-brand" /> CPU &amp; NPU support
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-brand" /> 80+ optimized models
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-muted-foreground">
                    Power-efficient execution on Qualcomm Snapdragon processors with
                    optimizations for mobile and edge devices.
                  </p>
                  <a
                    href="/supported-models/qualcomm"
                    className="mt-auto inline-flex items-center pt-8 text-sm font-medium text-brand hover:underline"
                  >
                    Explore Qualcomm models
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
            </div>

            {/* Check system requirements banner */}
            <div className="flex flex-col items-start justify-between gap-4 bg-muted/20 px-6 py-8 sm:flex-row sm:items-center">
              <div>
                <p className="font-semibold">Not sure what your hardware supports?</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Check the system requirements to find the right models for your machine.
                </p>
              </div>
              <Button asChild variant="outline" className="group shrink-0 rounded-none">
                <a href="/system-configuration">
                  Check system requirements
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </section>

          {/* Resources Section */}
          <section className="relative border-b border-border">
            <Crosshairs bottom />
            <div className="px-6 pt-16 md:pt-20">
              <span className="font-mono text-xs uppercase tracking-widest text-brand">
                Learn
              </span>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
                Learning resources
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Comprehensive tutorials, guides, and insights to master Model HQ.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-px border-t border-border bg-border md:grid-cols-2">
                <a
                  href="/video-tutorials"
                  className="group flex flex-col bg-background p-8 transition-colors hover:bg-muted/30"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Watch &amp; learn
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                    Video tutorials
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Step-by-step video guides and walkthroughs covering AI agents, chat
                    features, Intel optimization, and more from the Model HQ team.
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-brand" /> 7+ comprehensive tutorials
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-brand" /> Expert insights from founders
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-brand" /> Real-world examples
                    </li>
                  </ul>
                  <span className="mt-auto inline-flex items-center pt-8 text-sm font-medium text-brand">
                    Watch tutorials
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>

                <a
                  href="/blogs-and-partner-solutions"
                  className="group flex flex-col bg-background p-8 transition-colors hover:bg-muted/30"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Read &amp; explore
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                    Blogs &amp; partner solutions
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    In-depth articles and technical insights, plus partner solutions
                    showcasing real-world AI implementations.
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-brand" /> Partner solutions available
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-brand" /> Technical deep-dives
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-brand" /> Industry insights
                    </li>
                  </ul>
                  <span className="mt-auto inline-flex items-center pt-8 text-sm font-medium text-brand">
                    Explore resources
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
            </div>
          </section>

          {/* Quick Navigation / Documentation */}
          <section className="relative border-b border-border" id="quick-navigation">
            <Crosshairs bottom />
            <div className="px-6 py-16 md:py-20">
              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                <div className="max-w-2xl">
                  <span className="font-mono text-xs uppercase tracking-widest text-brand">
                    Reference
                  </span>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                    Documentation
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Everything you need to get started with Model HQ.
                  </p>
                </div>

                {/* Version Toggle */}
                <div className="inline-flex items-center gap-1 rounded-md border border-border p-1">
                  <button
                    suppressHydrationWarning
                    onClick={() => setActiveVersion('v0')}
                    className={`rounded px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-all ${
                      activeVersion === 'v0'
                        ? 'bg-brand text-brand-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    v0 docs
                  </button>
                  <button
                    suppressHydrationWarning
                    onClick={() => setActiveVersion('v1')}
                    className={`rounded px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-all ${
                      activeVersion === 'v1'
                        ? 'bg-brand text-brand-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    v1 docs
                  </button>
                </div>
              </div>

              {/* V0 Documentation */}
              {activeVersion === 'v0' && (
                <div className="mt-12">
                  {/* Deprecation Warning */}
                  <div className="-mx-6 flex items-start gap-3 border-t border-border bg-muted/40 px-6 py-4">
                    <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-semibold">
                        Important: v0 will be deprecated soon
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Please migrate to v1 for continued support and new features.
                      </p>
                    </div>
                  </div>

                  <div className="-mx-6 grid grid-cols-1 gap-px border-y border-border bg-border md:grid-cols-2 [&>div]:bg-background">
                    {/* System Configuration */}
                    <div className="p-6">
                      <a href="/system-configuration" className="text-base font-semibold hover:text-brand hover:underline">
                        System Configuration
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Configure your environment and system requirements
                      </p>
                    </div>

                    {/* Getting Started */}
                    <div className="p-6">
                      <a href="/start-here/getting-started" className="text-base font-semibold hover:text-brand hover:underline">
                        Getting Started
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Begin your Model HQ journey with setup guides
                      </p>
                    </div>

                    {/* Chat */}
                    <div className="p-6">
                      <a href="/chat" className="text-base font-semibold hover:text-brand hover:underline">
                        Chat
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Explore chat functionality and model interactions
                      </p>
                      <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                        <li><a href="/chat" className="hover:text-foreground hover:underline">Chat Overview</a></li>
                        <li><a href="/chat/changing-chat-model" className="hover:text-foreground hover:underline">Changing Chat Model</a></li>
                        <li><a href="/chat/error-handling" className="hover:text-foreground hover:underline">Error Handling</a></li>
                      </ul>
                    </div>

                    {/* Agents */}
                    <div className="p-6">
                      <a href="/agent" className="text-base font-semibold hover:text-brand hover:underline">
                        Agents
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Create and manage intelligent agents
                      </p>
                      <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                        <li><a href="/agent" className="hover:text-foreground hover:underline">Agent Overview</a></li>
                        <li><a href="/agent/create-new-agent" className="hover:text-foreground hover:underline">Create New Agent</a></li>
                        <li><a href="/agent/agent-builder-menu" className="hover:text-foreground hover:underline">Agent Builder Menu</a></li>
                        <li><a href="/agent/edit-agent" className="hover:text-foreground hover:underline">Edit Agent</a></li>
                        <li><a href="/agent/multi-docs-agent" className="hover:text-foreground hover:underline">Batch Run</a></li>
                        <li><a href="/agent/openAI-and-anthropic" className="hover:text-foreground hover:underline">OpenAI and Anthropic</a></li>
                      </ul>
                    </div>

                    {/* Bots */}
                    <div className="p-6">
                      <a href="/bots" className="text-base font-semibold hover:text-brand hover:underline">
                        Bots
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Build and customize your own bots
                      </p>
                    </div>

                    {/* RAG */}
                    <div className="p-6">
                      <a href="/rag" className="text-base font-semibold hover:text-brand hover:underline">
                        RAG
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Retrieval-Augmented Generation workflows
                      </p>
                      <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                        <li><a href="/rag" className="hover:text-foreground hover:underline">RAG Overview</a></li>
                        <li><a href="/rag/rag-parsing" className="hover:text-foreground hover:underline">RAG Parsing</a></li>
                        <li><a href="/rag/document-parsing-issues" className="hover:text-foreground hover:underline">Document Parsing Issues</a></li>
                        <li><a href="/rag/error-handling" className="hover:text-foreground hover:underline">Error Handling</a></li>
                      </ul>
                    </div>

                    {/* Models */}
                    <div className="p-6">
                      <a href="/models" className="text-base font-semibold hover:text-brand hover:underline">
                        Models
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Discover and manage AI models
                      </p>
                    </div>

                    {/* Testing Models */}
                    <div className="p-6">
                      <a href="/testing-models" className="text-base font-semibold hover:text-brand hover:underline">
                        Testing Models
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Test the models before using them
                      </p>
                    </div>

                    {/* Tools */}
                    <div className="p-6">
                      <a href="/tools" className="text-base font-semibold hover:text-brand hover:underline">
                        Tools
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Powerful utilities for managing your local setup and parsing documents
                      </p>
                    </div>

                    {/* Configs */}
                    <div className="p-6">
                      <a href="/configs" className="text-base font-semibold hover:text-brand hover:underline">
                        Configs
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Centralized interface for managing Model HQ&apos;s core settings
                      </p>
                    </div>

                    {/* Share */}
                    <div className="p-6">
                      <a href="/share-your-app" className="text-base font-semibold hover:text-brand hover:underline">
                        Share Your App
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Share your Agents and Custom Chatbots with others
                      </p>
                    </div>

                    {/* Shutdown */}
                    <div className="p-6">
                      <a href="/shutdown" className="text-base font-semibold hover:text-brand hover:underline">
                        Shutdown
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Close the app safely as best practices and highly recommended
                      </p>
                    </div>
                  </div>

                  {/* Cookbooks */}
                  <div className="-mx-6 border-b border-border px-6 py-8" id="#cookbooks">
                    <h3 className="text-lg font-semibold">
                      Cookbooks
                      <span className="ml-2 text-sm font-normal text-muted-foreground">
                        Don&apos;t know how to cook? Read the recipes below 👇
                      </span>
                    </h3>
                    <ol className="mt-4 ml-5 list-decimal space-y-2 text-sm">
                      <li><a href="/cookbooks/v0/personalized-bot" className="hover:text-brand hover:underline">Create Your Personalized Bot in Minutes</a></li>
                      <li><a href="/cookbooks/v0/rag-bot" className="hover:text-brand hover:underline">Build Your Own Rag Bot</a></li>
                      <li><a href="/cookbooks/v0/document-review-and-analysis-tool" className="hover:text-brand hover:underline">Build a No-Code Document Review and Analysis Custom Agent Workflow in Model HQ</a></li>
                      <li><a href="/cookbooks/v0/hybrid-inferencing" className="hover:text-brand hover:underline">Hybrid Inferencing using Model HQ (AI PC + API Server)</a></li>
                      <li><a href="/cookbooks/v0/photo-to-email-automation" className="hover:text-brand hover:underline">Photo to Email Automation</a></li>
                      <li><a href="/cookbooks/v0/clinical-trial-screening-autmation" className="hover:text-brand hover:underline">Clinical Trial Screening Automation</a></li>
                    </ol>
                  </div>
                </div>
              )}

              {/* V1 Documentation */}
              {activeVersion === 'v1' && (
                <div className="mt-12">
                  <div className="-mx-6 grid grid-cols-1 gap-px border-y border-border bg-border md:grid-cols-2 [&>div]:bg-background">
                    {/* Chat */}
                    <div className="p-6">
                      <a href="/v1/chat" className="text-base font-semibold hover:text-brand hover:underline">
                        Chat
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Explore chat functionality and model interactions
                      </p>
                      <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                        <li><a href="/v1/chat" className="hover:text-foreground hover:underline">Chat Overview</a></li>
                        <li><a href="/v1/chat/chat-configuration" className="hover:text-foreground hover:underline">Chat Configuration</a></li>
                        <li><a href="/v1/chat/document-parsing-issues" className="hover:text-foreground hover:underline">Document Parsing Issues</a></li>
                        <li><a href="/v1/chat/error-handling" className="hover:text-foreground hover:underline">Error Handling</a></li>
                      </ul>
                    </div>

                    {/* Agents */}
                    <div className="p-6">
                      <a href="/v1/agents" className="text-base font-semibold hover:text-brand hover:underline">
                        Agents
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Explore agent functionality and model interactions
                      </p>
                      <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                        <li><a href="/v1/agents" className="hover:text-foreground hover:underline">Agents Overview</a></li>
                        <li><a href="/v1/agents/create-new-agent" className="hover:text-foreground hover:underline">Create New Agent</a></li>
                        <li><a href="/v1/agents/edit-agent" className="hover:text-foreground hover:underline">Edit Agent</a></li>
                        <li><a href="/v1/agents/agent-visual-builder" className="hover:text-foreground hover:underline">Agent Visual Builder</a></li>
                        <li><a href="/v1/agents/batch-processing" className="hover:text-foreground hover:underline">Batch Processing</a></li>
                        <li><a href="/v1/agents/agent-services" className="hover:text-foreground hover:underline">Agent Services</a></li>
                      </ul>
                    </div>

                    {/* Bots */}
                    <div className="p-6">
                      <a href="/v1/bots" className="text-base font-semibold hover:text-brand hover:underline">
                        Bots
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Build and customize your own bots
                      </p>
                      <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                        <li><a href="/v1/bots" className="hover:text-foreground hover:underline">Bots Overview</a></li>
                        <li><a href="/v1/bots/build-bot" className="hover:text-foreground hover:underline">Building a Bot</a></li>
                        <li><a href="/v1/bots/edit-bot" className="hover:text-foreground hover:underline">Editing a Bot</a></li>
                      </ul>
                    </div>

                    {/* Models */}
                    <div className="p-6">
                      <a href="/v1/models" className="text-base font-semibold hover:text-brand hover:underline">
                        Models
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Discover and manage AI models
                      </p>
                      <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                        <li><a href="/v1/models" className="hover:text-foreground hover:underline">Models Overview</a></li>
                        <li><a href="/v1/models/model-configuration" className="hover:text-foreground hover:underline">Model Configuration</a></li>
                        <li><a href="/v1/models/custom-test" className="hover:text-foreground hover:underline">Create Custom Test</a></li>
                        <li><a href="/v1/models/microsoft-foundry" className="hover:text-foreground hover:underline">Microsoft Foundry</a></li>
                      </ul>
                    </div>

                    {/* Source */}
                    <div className="p-6">
                      <a href="/v1/source" className="text-base font-semibold hover:text-brand hover:underline">
                        Source (RAG)
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Retrieval-Augmented Generation workflows
                      </p>
                      <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                        <li><a href="/v1/source" className="hover:text-foreground hover:underline">Source Overview</a></li>
                        <li><a href="/v1/source/parsing-in-source" className="hover:text-foreground hover:underline">Parsing in Source</a></li>
                        <li><a href="/v1/source/error-handling" className="hover:text-foreground hover:underline">Error Handling</a></li>
                      </ul>
                    </div>

                    {/* Dataset */}
                    <div className="p-6">
                      <a href="/v1/dataset" className="text-base font-semibold hover:text-brand hover:underline">
                        Dataset
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Work with structured CSV, XLSX, and JSON data in AI agent workflows
                      </p>
                    </div>

                    {/* Services */}
                    <div className="p-6">
                      <a href="/v1/services" className="text-base font-semibold hover:text-brand hover:underline">
                        Services
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Create reusable service components for agent workflows
                      </p>
                    </div>

                    {/* Integrations */}
                    <div className="p-6">
                      <a href="/v1/integrations" className="text-base font-semibold hover:text-brand hover:underline">
                        Integrations
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Connect external services, cloud platforms, and AI providers
                      </p>
                    </div>

                    {/* Configs & Tools */}
                    <div className="p-6">
                      <a href="/v1/configs-and-tools/configure" className="text-base font-semibold hover:text-brand hover:underline">
                        Configs &amp; Tools
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Comprehensive configuration controls and tools
                      </p>
                      <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                        <li><a href="/v1/configs-and-tools/configure" className="hover:text-foreground hover:underline">Configure</a></li>
                        <li><a href="/v1/configs-and-tools/tools" className="hover:text-foreground hover:underline">Tools</a></li>
                      </ul>
                    </div>

                    {/* Shutdown */}
                    <div className="p-6">
                      <a href="/v1/shutdown" className="text-base font-semibold hover:text-brand hover:underline">
                        Shutdown
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Close the app safely as best practices and highly recommended
                      </p>
                    </div>
                  </div>

                  {/* Cookbooks */}
                  <div className="-mx-6 border-b border-border px-6 py-8" id="#cookbooks">
                    <h3 className="text-lg font-semibold">
                      Cookbooks
                      <ol className="mt-4 ml-5 list-decimal space-y-2 text-sm">
                      <li><a href="/cookbooks/v1/building-contract-analyzer" className="hover:text-brand hover:underline">Build a No-Code Contract Analyzer Agent in Minutes</a></li>
                      <li><a href="/cookbooks/v1/sources-for-rag" className="hover:text-brand hover:underline">Process 500 PDFs On-Device for RAG — Build a Reusable Source in Minutes</a></li>
                      </ol>
                    </h3>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Quick Start CTA — centered with logo */}
          <section className="relative border-b border-border">
            <Crosshairs bottom />
            {/* noisy texture backdrop */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.18] dark:opacity-[0.12]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                backgroundSize: "180px 180px",
                maskImage:
                  "radial-gradient(ellipse 70% 80% at center, black 0%, transparent 75%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 70% 80% at center, black 0%, transparent 75%)",
              }}
            />
            <div className="relative flex flex-col items-center px-6 py-24 text-center md:py-32">
              <div className="relative">
                {/* glow behind the logo */}
                <div
                  aria-hidden
                  className="absolute left-1/2 top-1/2 -z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-3xl"
                />
                <img
                  src="/images/llmware-logo.png"
                  alt="LLMWare"
                  className="h-16 w-16 drop-shadow-[0_8px_24px_hsl(var(--accent-brand)/0.45)]"
                />
              </div>
              <h2 className="mt-8 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                Get started with Model HQ
              </h2>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                Run AI on your own machine. New to Model HQ? Follow the getting started guide to begin your journey.
              </p>
              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="group h-12 rounded-none bg-brand px-6 text-base text-brand-foreground hover:bg-brand/90">
                  <a href="/start-here/getting-started">
                    Get started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="group h-12 rounded-none px-6 text-base">
                  <a href="https://llmware.ai" target="_blank" rel="noopener noreferrer">
                    Visit LLMWare.ai
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="relative">
            <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
              <a
                href="/support"
                className="group flex flex-col items-start bg-background p-8 transition-colors hover:bg-muted/30 md:p-12"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-brand">
                  Support
                </span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  Contact our team
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Stuck on something? Our team is here to support you on your AI journey.
                </p>
                <span className="mt-auto inline-flex items-center pt-8 text-sm font-medium text-brand">
                  Contact support
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>

              <a
                href="/start-here/getting-started"
                className="group flex flex-col items-start bg-background p-8 transition-colors hover:bg-muted/30 md:p-12"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-brand">
                  Docs
                </span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  Read the documentation
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Browse guides, references, and tutorials to get the most out of Model HQ.
                </p>
                <span className="mt-auto inline-flex items-center pt-8 text-sm font-medium text-brand">
                  Get started
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
