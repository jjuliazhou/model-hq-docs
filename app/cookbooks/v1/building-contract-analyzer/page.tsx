"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { CheckCircle } from "lucide-react"
import { PageFrame, FrameSection } from "@/components/page-frame"
import { useState } from "react"
import { Copy } from "lucide-react"


function CodeBlock({ children, title, language = "text" }: { children: string; title?: string; language?: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children.trim())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-sm">
      {title && (
        <div className="flex items-center justify-between bg-slate-900 text-slate-300 px-4 py-2 text-xs font-mono border-b border-slate-800">
          <span className="truncate">{title}</span>
          <span className="uppercase tracking-wider text-[10px] text-slate-500 ml-3 flex-shrink-0">{language}</span>
        </div>
      )}
      <div className="relative group">
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-1.5 bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-slate-700 rounded-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-200 z-10"
          title="Copy code"
          aria-label="Copy code"
        >
          {copied ? <CheckCircle className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5 text-slate-300" />}
        </button>
        <pre className="text-sm overflow-x-auto p-4 leading-[1.6] whitespace-pre">
          <code className="text-slate-100 font-mono">{children.replace(/^\n+|\n+$/g, "")}</code>
        </pre>
      </div>
    </div>
  )
}

export default function BuildANocodeContractAnalyzerAgentInMinutesOfflineOndevicePage() {
  return (
    <PageFrame>
      <FrameSection last>
        <div className="text-[17px] leading-relaxed">
      <header className="space-y-4 px-6 py-12 md:px-12 md:py-16">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/cookbooks/v1">Cookbooks</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Build a No-Code Contract Analyzer Agent in Minutes (Offline, On-Device)</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
        <h1 className="max-w-5xl text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] break-words">Build a No-Code Contract Analyzer Agent in Minutes (Offline, On-Device)</h1>
        
      </header>

      <section id="use-case" className="scroll-mt-24 border-t border-border px-6 py-10 md:px-12 md:py-12">
        <div className="max-w-5xl space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Use Case</h2>
        <p className="text-foreground/90 leading-relaxed">Build a <strong>no-code Contract Analyzer agent</strong> that reads contracts and pulls out the same key details every time — automatically.</p>
        <p className="text-foreground/90 leading-relaxed">It runs <strong>fully on your device</strong>. No Wi-Fi. No data leaving your machine.</p>
        <p className="text-foreground/90 leading-relaxed">In this cookbook we build a <strong>Music License Agreement Analyzer</strong> using the <strong>Visual Builder</strong> in Model HQ — no code needed.</p>
        <p className="text-foreground/90 leading-relaxed">The agent answers simple but useful questions like:</p>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-brand">
          <li className="text-foreground/90 leading-relaxed">Who are the parties?</li>
          <li className="text-foreground/90 leading-relaxed">What is the effective date?</li>
          <li className="text-foreground/90 leading-relaxed">What is the royalty payment?</li>
          <li className="text-foreground/90 leading-relaxed">Is there an advance payment? If yes, how much?</li>
        </ul>
        <p className="text-foreground/90 leading-relaxed">Behind the scenes it uses <strong>RAG (Retrieval-Augmented Generation)</strong> with re-ranking to pick the most relevant parts of each contract and give grounded answers.</p>
        <p className="text-foreground/90 leading-relaxed">Once it works on one document, you can run it on many contracts at once with <strong>Batch Mode</strong> and export the results.</p>
        <p className="text-foreground/90 leading-relaxed">The complete no-code set-up for this agent (this example shows 5 nodes — but you can have as few as 2 if you only ask one question):</p>
        <figure className="my-6">
          <img
            src="/cookbooks/v1/01_main.png"
            alt="Contract Analyzer canvas overview"
            className="w-full border border-border"
          />
          <figcaption className="mt-2 text-center font-mono text-xs uppercase tracking-wider text-muted-foreground">Contract Analyzer canvas overview</figcaption>
        </figure>
        </div>
      </section>

      <section id="who-this-is-for" className="scroll-mt-24 border-t border-border px-6 py-10 md:px-12 md:py-12">
        <div className="max-w-5xl space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Who This Is For</h2>
        <p className="text-foreground/90 leading-relaxed">This is useful for:</p>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-brand">
          <li className="text-foreground/90 leading-relaxed"><strong>Legal and compliance teams</strong> reviewing contracts (NDAs, licenses, vendor agreements)</li>
          <li className="text-foreground/90 leading-relaxed"><strong>Business teams</strong> (HR, Operations, Procurement, Finance)</li>
          <li className="text-foreground/90 leading-relaxed"><strong>Analysts</strong> doing repetitive document review</li>
          <li className="text-foreground/90 leading-relaxed"><strong>Developers</strong> prototyping document workflows with RAG</li>
          <li className="text-foreground/90 leading-relaxed">Anyone who needs to extract the <strong>same information from many similar documents</strong></li>
        </ul>
        </div>
      </section>

      <section id="what-youll-learn" className="scroll-mt-24 border-t border-border px-6 py-10 md:px-12 md:py-12">
        <div className="max-w-5xl space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What You'll Learn</h2>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-brand">
          <li className="text-foreground/90 leading-relaxed">How to build a contract analyzer using the <strong>Visual Builder</strong></li>
          <li className="text-foreground/90 leading-relaxed">How to connect a document input to multiple <strong>RAG answer steps</strong></li>
          <li className="text-foreground/90 leading-relaxed">How re-ranking improves accuracy on long documents</li>
          <li className="text-foreground/90 leading-relaxed">How to test the agent on a <strong>single document</strong></li>
          <li className="text-foreground/90 leading-relaxed">How to run it on <strong>many documents at once (Batch Mode)</strong></li>
          <li className="text-foreground/90 leading-relaxed">How to export results for reporting or automation</li>
        </ul>
        </div>
      </section>

      <section id="ingredients-what-you-need" className="scroll-mt-24 border-t border-border px-6 py-10 md:px-12 md:py-12">
        <div className="max-w-5xl space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ingredients (What You Need)</h2>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-brand">
          <li className="text-foreground/90 leading-relaxed">Model HQ installed on your device.</li>
          <li className="text-foreground/90 leading-relaxed">A local model that supports chat / RAG (we use <strong>Llama 3.2 3B</strong> by default). It downloads automatically the first time you run the agent.</li>
          <li className="text-foreground/90 leading-relaxed">A few sample music license agreements (already included with Model HQ), located at: <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">C:\Users\&lt;username&gt;\llmware_data\sample_files\AgreementsLarge\</code>. Good ones to try: <em>Cybele Music License Agreement.pdf</em>, <em>Diana Music License Agreement.pdf</em>, <em>Circe License Agreement for Copyrighted Music.pdf</em>.</li>
          <li className="text-foreground/90 leading-relaxed"><strong>No coding required.</strong></li>
        </ul>
        <aside className="border-l-4 border-l-blue-500 bg-blue-50/60 dark:bg-blue-950/30 rounded-r-md px-4 py-3 my-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Don't see the sample files? You probably skipped the <strong>Full-download</strong> option during setup. To get them now: click the <strong>Tools</strong> icon (top-right) → <strong>Sample Docs</strong> → <strong>Documents</strong>. They'll land in <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">C:\Users\&lt;username&gt;\llmware_data\sample_files\AgreementsLarge\</code>.</p>
        </aside>
        <aside className="border-l-4 border-l-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-r-md px-4 py-3 my-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Once the model is downloaded, <strong>everything runs locally</strong> — parsing, retrieval, ranking, and answering. You can unplug the Wi-Fi and it still works.</p>
        </aside>
        </div>
      </section>

      <section id="watch-the-demo" className="scroll-mt-24 border-t border-border px-6 py-10 md:px-12 md:py-12">
        <div className="max-w-5xl space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Watch the Demo</h2>
        <p className="text-foreground/90 leading-relaxed">Want to follow along on video? Here's the full walkthrough on the Model HQ YouTube channel — <em>"Contract Analyzer Agent in Minutes (No-Code + Offline) | Model HQ Demo"</em>. Useful timestamps are called out in each step below.</p>
        <div className="aspect-video w-full overflow-hidden border border-border bg-black my-4">
          <iframe
            src="https://www.youtube.com/embed/9n7gXz6knbM?rel=0"
            title="YouTube video"
            className="w-full h-full"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        </div>
      </section>

      <section id="quick-steps-build-it-in-5-minutes" className="scroll-mt-24 border-t border-border px-6 py-10 md:px-12 md:py-12">
        <div className="max-w-5xl space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Quick Steps (Build It in 5 Minutes)</h2>
        <p className="text-foreground/90 leading-relaxed">If you just want to copy what's in the screenshot, follow this short version. The detailed walkthrough is right after — read it whenever you want the <em>why</em>.</p>
        <ol className="list-decimal list-outside pl-6 space-y-2 marker:text-brand marker:font-semibold">
          <li className="text-foreground/90 leading-relaxed pl-1">Open <strong>Agents → Build New → Visual Builder</strong>, click <strong><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">&gt;</code></strong>.</li>
          <li className="text-foreground/90 leading-relaxed pl-1">Name the agent: <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Music_License_Agent</code>.</li>
          <li className="text-foreground/90 leading-relaxed pl-1">Drag an <strong>Input</strong> node onto the canvas → set <strong>Choose input type</strong> to <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">document</code>.</li>
          <li className="text-foreground/90 leading-relaxed pl-1">Drag a <strong>Node</strong>, set service to <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code>, instruction: <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Who are the parties to the agreement?</code>. Wire it back to the Input node.</li>
          <li className="text-foreground/90 leading-relaxed pl-1">Repeat step 4 three more times with these questions:
            <ul className="list-[circle] list-outside pl-6 mt-2 space-y-1 marker:text-muted-foreground">
              <li className="text-muted-foreground text-[0.95em]"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">What is the effective date of the agreement?</code></li>
              <li className="text-muted-foreground text-[0.95em]"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">What is the royalty payment to the licensor?</code></li>
              <li className="text-muted-foreground text-[0.95em]"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">What is the advance payment to the licensor?</code></li>
            </ul></li>
          <li className="text-foreground/90 leading-relaxed pl-1">(Optional) Add one more node with service <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">agent_report</code> to get a polished Word/JSON summary.</li>
          <li className="text-foreground/90 leading-relaxed pl-1">Click <strong>Save Agent</strong>, then <strong>Run</strong>, and upload one of the sample PDFs from <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">AgreementsLarge\</code>.</li>
          <li className="text-foreground/90 leading-relaxed pl-1">Once it works, go back and click <strong>Batch Run</strong> to process several contracts at once.</li>
        </ol>
        <p className="text-foreground/90 leading-relaxed">That's the whole agent. The rest of this cookbook explains each step in plain English.</p>
        </div>
      </section>

      <section id="why-model-hq-builds-agents-differently" className="scroll-mt-24 border-t border-border px-6 py-10 md:px-12 md:py-12">
        <div className="max-w-5xl space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why Model HQ Builds Agents Differently</h2>
        <p className="text-foreground/90 leading-relaxed">Most agent builders run against a big cloud model. Model HQ takes a different approach:</p>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-brand">
          <li className="text-foreground/90 leading-relaxed">Each task is <strong>broken into its own small node</strong>.</li>
          <li className="text-foreground/90 leading-relaxed"><strong>Small, specialized models</strong> are stacked together — one to parse, one to rank, one to answer.</li>
          <li className="text-foreground/90 leading-relaxed">The whole workflow runs <strong>on your device</strong>.</li>
        </ul>
        <p className="text-foreground/90 leading-relaxed">The result: accurate, repeatable answers, without sending your contracts anywhere.</p>
        </div>
      </section>

      <section id="step-by-step-walkthrough" className="scroll-mt-24 border-t border-border px-6 py-10 md:px-12 md:py-12">
        <div className="max-w-5xl space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Step-by-Step Walkthrough</h2>
        <h3 id="1-open-the-agents-interface" className="text-xl sm:text-2xl font-semibold tracking-tight pt-2 scroll-mt-24">1. Open the Agents Interface</h3>
        <p className="text-foreground/90 leading-relaxed"><em>Goal: get to the agent builder.</em> (Min Time Required: ~3:45)</p>
        <ol className="list-decimal list-outside pl-6 space-y-2 marker:text-brand marker:font-semibold">
          <li className="text-foreground/90 leading-relaxed pl-1">From the <strong>Home Screen</strong>, click <strong>Agents</strong> in the left sidebar.</li>
          <li className="text-foreground/90 leading-relaxed pl-1">In the <em>Agent Menu</em>, choose <strong>Build New</strong>.</li>
          <li className="text-foreground/90 leading-relaxed pl-1">Click <strong><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">&gt;</code></strong> to continue.</li>
          <li className="text-foreground/90 leading-relaxed pl-1">On the <em>Build New Agent</em> screen, pick <strong>Visual Builder</strong>.</li>
        </ol>
        <p className="text-foreground/90 leading-relaxed">The Visual Builder canvas opens. This is the drag-and-drop space where the agent gets put together.</p>
        <aside className="border-l-4 border-l-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-r-md px-4 py-3 my-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">The Visual Builder is great for agents that take <strong>one input</strong> — like a contract. If your agent needs more than one input type at the same time (say, a document <strong>and</strong> an image), use <strong>Build Multi-Step Agent</strong> instead.</p>
        </aside>
        <h3 id="2-name-the-agent" className="text-xl sm:text-2xl font-semibold tracking-tight pt-2 scroll-mt-24">2. Name the Agent</h3>
        <p className="text-foreground/90 leading-relaxed">At the top of the canvas, give the agent a name. We'll call ours:</p>
        <div className="my-4">
          <CodeBlock language="text">{`Music_License_Agent`}</CodeBlock>
        </div>
        <p className="text-foreground/90 leading-relaxed">A clear name makes it easy to find later under <strong>Load Existing</strong>, and easy to recognize when you share it with a teammate.</p>
        <h3 id="3-add-the-input-node-document" className="text-xl sm:text-2xl font-semibold tracking-tight pt-2 scroll-mt-24">3. Add the Input Node (Document)</h3>
        <p className="text-foreground/90 leading-relaxed"><em>Goal: tell the agent what kind of input it should expect.</em> (Min Time Required: ~4:19)</p>
        <ol className="list-decimal list-outside pl-6 space-y-2 marker:text-brand marker:font-semibold">
          <li className="text-foreground/90 leading-relaxed pl-1">On the left sidebar, click and drag the <strong>Input</strong> option onto the canvas.</li>
          <li className="text-foreground/90 leading-relaxed pl-1">Open the node and set:
            <ul className="list-[circle] list-outside pl-6 mt-2 space-y-1 marker:text-muted-foreground">
              <li className="text-muted-foreground text-[0.95em]"><strong>Choose input type</strong>: <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">document</code></li>
              <li className="text-muted-foreground text-[0.95em]"><strong>Description</strong>: <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Music license agreement (PDF, DOCX, PPTX, TXT, or MD).</code></li>
            </ul></li>
        </ol>
        <p className="text-foreground/90 leading-relaxed">Now Model HQ knows that, when this agent runs, it should ask the user to upload a document. That document becomes the source for every question we ask next.</p>
        <aside className="border-l-4 border-l-violet-500 bg-violet-50/60 dark:bg-violet-950/30 rounded-r-md px-4 py-3 my-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">The Visual Builder allows <strong>only one input node</strong> per agent. If you need multiple inputs (e.g. a document plus an image), switch to <strong>Build Multi-Step Agent</strong>.</p>
        </aside>
        <h3 id="4-add-the-first-rag-answer-node-parties" className="text-xl sm:text-2xl font-semibold tracking-tight pt-2 scroll-mt-24">4. Add the First RAG Answer Node — <em>Parties</em></h3>
        <p className="text-foreground/90 leading-relaxed"><em>Goal: ask the first question — and tell the agent to answer it from the uploaded document.</em></p>
        <ol className="list-decimal list-outside pl-6 space-y-2 marker:text-brand marker:font-semibold">
          <li className="text-foreground/90 leading-relaxed pl-1">Drag a <strong>Node</strong> from the left sidebar onto the canvas.</li>
          <li className="text-foreground/90 leading-relaxed pl-1">In the node's <strong>Choose service</strong> dropdown, pick <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code>.</li>
          <li className="text-foreground/90 leading-relaxed pl-1">In the <strong>Instruction</strong> field (this is where you "prompt" the model), type: <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Who are the parties to the agreement?</code></li>
          <li className="text-foreground/90 leading-relaxed pl-1"><strong>Wire</strong> the <strong>Input node → this RAG answer node</strong> by dragging a line between their connection dots.</li>
        </ol>
        <p className="text-foreground/90 leading-relaxed">A quick tip on prompting: keep the instruction short, plain, and direct — like you're asking a colleague. <em>"Who are the parties to the agreement?"</em> works far better than a long, formal prompt.</p>
        <aside className="border-l-4 border-l-blue-500 bg-blue-50/60 dark:bg-blue-950/30 rounded-r-md px-4 py-3 my-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code> is the service that pulls the most relevant passages from a long document and writes a grounded answer. Use it instead of <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">chat</code> whenever the answer should come from a specific document, not from the model's general knowledge.</p>
        </aside>
        <aside className="border-l-4 border-l-violet-500 bg-violet-50/60 dark:bg-violet-950/30 rounded-r-md px-4 py-3 my-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Every RAG question should wire <strong>directly to the Input (document) node</strong> — <em>not</em> to the previous RAG node. Each <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code> step looks at the document on its own. Chaining them serially would feed the answer of one into the next, which isn't what we want here.</p>
        </aside>
        <h3 id="5-add-three-more-rag-answer-nodes" className="text-xl sm:text-2xl font-semibold tracking-tight pt-2 scroll-mt-24">5. Add Three More RAG Answer Nodes</h3>
        <p className="text-foreground/90 leading-relaxed">Repeat step 4 for each question. For our Music License Analyzer we add three more <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code> nodes — each wired back to the <strong>Input node</strong>:</p>
        <div className="my-5 overflow-x-auto border border-border">
          <table className="min-w-full text-sm sm:text-base">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-4 py-3 text-left font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">#</th>
                <th className="px-4 py-3 text-left font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">Service</th>
                <th className="px-4 py-3 text-left font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">Instruction (the prompt)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-muted/30">
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">2</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code></td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">What is the effective date of the agreement?</code></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">3</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code></td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">What is the royalty payment to the licensor?</code></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">4</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code></td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">What is the advance payment to the licensor?</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-foreground/90 leading-relaxed">Your canvas should now look like a fan: one Input node feeding four parallel RAG answer nodes.</p>
        <aside className="border-l-4 border-l-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-r-md px-4 py-3 my-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Add as many or as few questions as you like. Common additions for license / contract review: <em>territory</em>, <em>term length</em>, <em>renewal</em>, <em>termination</em>, <em>exclusivity</em>, <em>governing law</em>, <em>audit rights</em>.</p>
        </aside>
        <h3 id="6-confirm-the-model-and-services" className="text-xl sm:text-2xl font-semibold tracking-tight pt-2 scroll-mt-24">6. Confirm the Model and Services</h3>
        <p className="text-foreground/90 leading-relaxed">Click any node to check:</p>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-brand">
          <li className="text-foreground/90 leading-relaxed"><strong>Model</strong> — <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Llama 3.2 3B</code> (the default chat / RAG model). A check mark next to a model name means it's already on your device. A download icon means it'll be downloaded the first time the agent runs.</li>
          <li className="text-foreground/90 leading-relaxed"><strong>Services</strong> — make sure <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code> and <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">parse_document</code> are turned on in the <strong>Services</strong> catalog (left sidebar → <em>Services</em>).</li>
        </ul>
        <aside className="border-l-4 border-l-blue-500 bg-blue-50/60 dark:bg-blue-950/30 rounded-r-md px-4 py-3 my-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Behind the scenes, <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code> quietly does three things, all locally:<br />1. parses the PDF / DOCX into ~100+ text chunks,<br />2. re-ranks those chunks by relevance to your question,<br />3. uses the answering model to write the final response from the top chunks.</p>
        </aside>
        <h3 id="7-save-and-run-on-one-contract" className="text-xl sm:text-2xl font-semibold tracking-tight pt-2 scroll-mt-24">7. Save and Run on One Contract</h3>
        <ol className="list-decimal list-outside pl-6 space-y-2 marker:text-brand marker:font-semibold">
          <li className="text-foreground/90 leading-relaxed pl-1">Click <strong>Save Agent</strong> (left sidebar).</li>
          <li className="text-foreground/90 leading-relaxed pl-1">Click <strong>Run</strong>.</li>
          <li className="text-foreground/90 leading-relaxed pl-1">When prompted, upload a sample agreement, e.g. <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">C:\Users\&lt;username&gt;\llmware_data\sample_files\AgreementsLarge\Cybele Music License Agreement.pdf</code>.</li>
          <li className="text-foreground/90 leading-relaxed pl-1">Click <strong><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">&gt;</code></strong> to start.</li>
        </ol>
        <p className="text-foreground/90 leading-relaxed">Model HQ will parse the document, run each <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code> step, and show the results in a <strong>Summary Report Table</strong>.</p>
        <h4 id="example-output-cybele-music-license-agreement" className="text-lg font-semibold pt-1 scroll-mt-24">Example Output (Cybele Music License Agreement)</h4>
        <div className="my-5 overflow-x-auto border border-border">
          <table className="min-w-full text-sm sm:text-base">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-4 py-3 text-left font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">Step</th>
                <th className="px-4 py-3 text-left font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">Question</th>
                <th className="px-4 py-3 text-left font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">Answer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-muted/30">
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer_1</code></td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">Who are the parties to the agreement?</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">The parties are <strong>Cybele</strong> and <strong>Lotus Music Company</strong>.</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer_2</code></td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">What is the effective date?</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90"><strong>February 1, 2020.</strong></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer_3</code></td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">What is the royalty payment?</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90"><em>(royalty schedule extracted from the contract)</em></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer_4</code></td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">What is the advance payment?</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90"><em>(advance amount extracted from the contract)</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-foreground/90 leading-relaxed">You also get:</p>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-brand">
          <li className="text-foreground/90 leading-relaxed">An <strong>Inference History</strong> table — tokens used, first-token latency, and total time per step.</li>
          <li className="text-foreground/90 leading-relaxed">A <strong>Files Created</strong> section — generated reports and artifacts.</li>
        </ul>
        <aside className="border-l-4 border-l-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-r-md px-4 py-3 my-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Click <strong>Run Again</strong> and try a second document, like <em>Diana Music License Agreement.pdf</em>. If a question genuinely doesn't apply (e.g. <em>no advance payment</em> in Diana), the agent will say so — it won't make up a number.</p>
        </aside>
        <h3 id="8-optional-add-an-agent-report-step" className="text-xl sm:text-2xl font-semibold tracking-tight pt-2 scroll-mt-24">8. (Optional) Add an Agent Report Step</h3>
        <p className="text-foreground/90 leading-relaxed">Want a polished output? Add a final reporting node:</p>
        <ol className="list-decimal list-outside pl-6 space-y-2 marker:text-brand marker:font-semibold">
          <li className="text-foreground/90 leading-relaxed pl-1">Drag a new <strong>Node</strong> onto the canvas after the last RAG answer.</li>
          <li className="text-foreground/90 leading-relaxed pl-1">Set its service to <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">agent_report</code>.</li>
          <li className="text-foreground/90 leading-relaxed pl-1">Use a clear instruction, e.g. <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Music License Agreement — Summary of Key Terms</code>.</li>
          <li className="text-foreground/90 leading-relaxed pl-1">Wire the previous nodes' outputs into it (use a <strong>Transformer</strong> node set to <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Agent-State</code> if you need to pass everything along).</li>
        </ol>
        <p className="text-foreground/90 leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">agent_report</code> produces a Word document, a JSON file, and a Markdown summary — automatically pulling in each <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code> result.</p>
        <h3 id="9-run-it-in-batch-mode-many-contracts-at-once" className="text-xl sm:text-2xl font-semibold tracking-tight pt-2 scroll-mt-24">9. Run It in Batch Mode (Many Contracts at Once)</h3>
        <p className="text-foreground/90 leading-relaxed">Once it works on one contract, scale it up.</p>
        <ol className="list-decimal list-outside pl-6 space-y-2 marker:text-brand marker:font-semibold">
          <li className="text-foreground/90 leading-relaxed pl-1">Go to <strong>Agents → Load Existing</strong> and pick <strong>Music_License_Agent</strong>.</li>
          <li className="text-foreground/90 leading-relaxed pl-1">Click <strong><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">&gt;</code></strong>.</li>
          <li className="text-foreground/90 leading-relaxed pl-1">Choose <strong>Batch Run</strong> (instead of <em>Run (Details)</em> or <em>Run (Demo)</em>).</li>
          <li className="text-foreground/90 leading-relaxed pl-1">In <em>Upload Documents for Batch Processing</em>, select several files, e.g.:
            <ul className="list-[circle] list-outside pl-6 mt-2 space-y-1 marker:text-muted-foreground">
              <li className="text-muted-foreground text-[0.95em]"><em>Circe License Agreement for Copyrighted Music.pdf</em></li>
              <li className="text-muted-foreground text-[0.95em]"><em>Cybele Music License Agreement.pdf</em></li>
              <li className="text-muted-foreground text-[0.95em]"><em>Diana Music License Agreement.pdf</em></li>
              <li className="text-muted-foreground text-[0.95em]"><em>Eos License Agreement for Copyrighted Music.pdf</em></li>
            </ul></li>
          <li className="text-foreground/90 leading-relaxed pl-1">Click <strong><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">&gt;</code></strong> to start.</li>
        </ol>
        <p className="text-foreground/90 leading-relaxed">Model HQ runs the full agent on each file independently and bundles the results.</p>
        <aside className="border-l-4 border-l-blue-500 bg-blue-50/60 dark:bg-blue-950/30 rounded-r-md px-4 py-3 my-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">For <strong>file inputs</strong> (like ours), if you upload <strong>N</strong> files the agent runs <strong>N</strong> times — once per document. For <strong>text inputs</strong>, large files get chunked and each chunk is its own work item. See the <a href="/v1/agents/batch-processing" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Batch Processing</a> docs for details.</p>
        </aside>
        <h4 id="batch-outputs" className="text-lg font-semibold pt-1 scroll-mt-24">Batch Outputs</h4>
        <p className="text-foreground/90 leading-relaxed">When the batch is done, you can download:</p>
        <div className="my-5 overflow-x-auto border border-border">
          <table className="min-w-full text-sm sm:text-base">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-4 py-3 text-left font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">File</th>
                <th className="px-4 py-3 text-left font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">What it is</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-muted/30">
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">&lt;agent_name&gt;_batch_results.json</code></td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">Per-document, per-question answers in JSON. Great for dashboards and APIs.</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">&lt;agent_name&gt;_batch_report.docx</code></td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">One Word doc with all answers and a per-document summary.</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">Per-document artifacts</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">Each contract also produces its own report, mermaid chart, and take-aways file.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-foreground/90 leading-relaxed">These plug nicely into BI tools, ticketing systems, CLM platforms, or audit trails.</p>
        <h3 id="10-optional-share-or-deploy-the-agent" className="text-xl sm:text-2xl font-semibold tracking-tight pt-2 scroll-mt-24">10. (Optional) Share or Deploy the Agent</h3>
        <p className="text-foreground/90 leading-relaxed">Once it works, share it without rebuilding:</p>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-brand">
          <li className="text-foreground/90 leading-relaxed"><strong>Share by ZIP</strong> — <em>Agents → Load Existing → Music_License_Agent → Share</em>. The ZIP contains only configuration and documents (no executable code), so it's safe to email.</li>
          <li className="text-foreground/90 leading-relaxed"><strong>Upload on another machine</strong> — On your colleague's Model HQ install: <em>Agents → Build New → Upload</em> (or the Upload button next to <em>Load Existing</em>) and pick the ZIP. The agent shows up in their <em>Load Existing</em> list right away.</li>
          <li className="text-foreground/90 leading-relaxed"><strong>Run via the Model HQ API Server</strong> — Expose the agent over a local HTTP endpoint so other apps can use it.</li>
          <li className="text-foreground/90 leading-relaxed"><strong>Add a Demo mode</strong> — Before sharing, set up a demo so colleagues can run the agent end-to-end with one click and immediately see what it does.</li>
        </ul>
        </div>
      </section>

      <section id="anatomy-of-the-final-agent" className="scroll-mt-24 border-t border-border px-6 py-10 md:px-12 md:py-12">
        <div className="max-w-5xl space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Anatomy of the Final Agent</h2>
        <div className="my-4">
          <CodeBlock language="text">{`[ Input: document ]
        │
        ├──▶ [ rag_answer: Who are the parties? ]
        │
        ├──▶ [ rag_answer: Effective date? ]
        │
        ├──▶ [ rag_answer: Royalty payment? ]
        │
        ├──▶ [ rag_answer: Advance payment? ]
        │
        └──▶ [ agent_report: Summary of Key Terms ]   (optional)`}</CodeBlock>
        </div>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-brand">
          <li className="text-foreground/90 leading-relaxed"><strong>One input</strong> — the contract.</li>
          <li className="text-foreground/90 leading-relaxed"><strong>Several parallel RAG answers</strong> — each one looks at the contract on its own.</li>
          <li className="text-foreground/90 leading-relaxed"><strong>One optional report</strong> — for a polished, shareable summary.</li>
        </ul>
        </div>
      </section>

      <section id="summary-table" className="scroll-mt-24 border-t border-border px-6 py-10 md:px-12 md:py-12">
        <div className="max-w-5xl space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Summary Table</h2>
        <div className="my-5 overflow-x-auto border border-border">
          <table className="min-w-full text-sm sm:text-base">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-4 py-3 text-left font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">Step</th>
                <th className="px-4 py-3 text-left font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">Action</th>
                <th className="px-4 py-3 text-left font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-nowrap">Outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="hover:bg-muted/30">
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">1</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">Open Agents → Build New → Visual Builder</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">New blank canvas</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">2</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">Name the agent (<code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Music_License_Agent</code>)</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">Easy to find later</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">3</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">Add Input node (<code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">document</code>)</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">Defines runtime upload</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">4–5</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">Add <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code> nodes wired to Input</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">Each question answered from the contract</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">6</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">Confirm model & services</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Llama 3.2 3B</code>, <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code>, <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">parse_document</code></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">7</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">Save & Run on one contract</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">Validate the answers</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">8</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">(Opt.) Add <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">agent_report</code></td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">Polished Word / JSON output</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">9</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">Batch Run across many contracts</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">Scaled, repeatable execution</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">10</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">Share / Deploy</td>
                <td className="px-4 py-3 align-top leading-relaxed text-foreground/90">Send to colleagues or call from an app</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </section>

      <section id="related-documentation" className="scroll-mt-24 border-t border-border">
        <div className="px-6 pt-10 md:px-12 md:pt-12">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Related Documentation</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-px border-t border-border bg-border sm:grid-cols-2">
          <a
            href="/v1/agents"
            className="group flex items-center justify-between gap-3 bg-background p-6 transition-colors hover:bg-muted/30"
          >
            <span className="font-medium">Agents Overview</span>
            <span className="text-brand transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
          </a>
          <a
            href="/v1/agents/create-new-agent"
            className="group flex items-center justify-between gap-3 bg-background p-6 transition-colors hover:bg-muted/30"
          >
            <span className="font-medium">Create a New Agent</span>
            <span className="text-brand transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
          </a>
          <a
            href="/v1/agents/agent-visual-builder"
            className="group flex items-center justify-between gap-3 bg-background p-6 transition-colors hover:bg-muted/30"
          >
            <span className="font-medium">Agent Visual Builder</span>
            <span className="text-brand transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
          </a>
          <a
            href="/v1/agents/edit-agent"
            className="group flex items-center justify-between gap-3 bg-background p-6 transition-colors hover:bg-muted/30"
          >
            <span className="font-medium">Editing an Agent</span>
            <span className="text-brand transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
          </a>
          <a
            href="/v1/agents/batch-processing"
            className="group flex items-center justify-between gap-3 bg-background p-6 transition-colors hover:bg-muted/30"
          >
            <span className="font-medium">Batch Processing</span>
            <span className="text-brand transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
          </a>
          <a
            href="/v1/agents/agent-services"
            className="group flex items-center justify-between gap-3 bg-background p-6 transition-colors hover:bg-muted/30"
          >
            <span className="font-medium">Services Catalog</span>
            <span className="text-brand transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <div className="border-t border-border px-6 py-10 md:px-12 md:py-12">
        <span className="font-mono text-xs uppercase tracking-widest text-brand">Need help?</span>
        <p className="mt-3 text-muted-foreground">
          Reach out to our team at{' '}
          <a href="mailto:support@aibloks.com" className="font-medium text-brand hover:underline">
            support@aibloks.com
          </a>
        </p>
      </div>
        </div>
      </FrameSection>
    </PageFrame>
  )
}