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

export default function Process500PdfsOndeviceForRagBuildAReusableSourceInMinutesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 text-[17px] leading-relaxed">
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
            <BreadcrumbPage>Process 500 PDFs On-Device for RAG — Build a Reusable Source in Minutes</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="space-y-3 sm:space-y-4 border-b border-gray-200 dark:border-gray-800 pb-6 sm:pb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 leading-[1.2] break-words">Process 500 PDFs On-Device for RAG — Build a Reusable Source in Minutes</h1>
        
      </header>

      <div className="space-y-10 sm:space-y-12">
      <section id="use-case" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">Use Case</h2>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Build a <strong>Source</strong> in Model HQ — a bundle of documents (books, PDFs, manuals, handbooks, anything text-y) that becomes a <strong>shared source of truth</strong> for your chats, bots, and agents to query in plain English.</p>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Once a Source is built, you can:</p>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>ask it questions in natural language (RAG),</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>reuse the same Source across <strong>Chat</strong>, <strong>Bots</strong>, and <strong>Agents</strong>,</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>scale it up — in this cookbook we ingest <strong>500 UN resolution PDFs in real time</strong> on an Intel <strong>Lunar Lake</strong> AI PC.</span>
            </div>
          </li>
        </ul>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">It runs <strong>fully on your device</strong>. No Wi-Fi. No data leaving your machine.</p>
        <div className="my-4">
          <CodeBlock language="text">{`![Sources in Model HQ — RAG over many documents at once](/cookbooks/v1/<imagePathHere>`}</CodeBlock>
        </div>
      </section>

      <section id="who-this-is-for" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">Who This Is For</h2>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">This is useful for:</p>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span><strong>HR teams</strong> bundling employee handbooks and policies for a self-serve assistant</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span><strong>Field tech / engineering teams</strong> packaging product manuals and runbooks</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span><strong>Legal teams</strong> keeping a shared library of templates and clauses</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span><strong>Operations / Compliance</strong> with hundreds of regulatory PDFs to search</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span><strong>Anyone</strong> building a chatbot, agent, or workflow that needs to look things up across many files</span>
            </div>
          </li>
        </ul>
      </section>

      <section id="what-youll-learn" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">What You'll Learn</h2>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>How to create a <strong>Standard Source</strong> in seconds</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>How to add and ingest documents (including the sample files that come with Model HQ)</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>How parsing works (Digital vs OCR vs Vision Model) and when to switch</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>How to test a Source with <strong>Semantic, Keyword (AND/OR), and Exact</strong> search</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>How to tune <strong>Context Top-N</strong> and <strong>Context Target Size</strong> for better answers</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>How to use the same Source inside <strong>Chat</strong> (and later in Bots and Agents)</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>How to scale up — watch 500 UN resolution PDFs ingest in real time on a Lunar Lake AI PC</span>
            </div>
          </li>
        </ul>
      </section>

      <section id="ingredients-what-you-need" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">Ingredients (What You Need)</h2>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-gray-400 dark:marker:text-gray-500">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed">Model HQ installed on your device.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed">A local model that supports chat / RAG (we use <strong>Llama 3.2 3B</strong> by default). It downloads automatically the first time you run it.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed">Some documents to bundle. The sample files that ship with Model HQ work great. They live at <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">C:\Users\&lt;username&gt;\llmware_data\sample_files\</code>. Try the <em>Books</em> folder for a small bundle, or the <em>UN resolutions</em> folder for a big one.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>No coding required.</strong></li>
        </ul>
        <aside className="border-l-4 border-l-blue-500 bg-blue-50/60 dark:bg-blue-950/30 rounded-r-md px-4 py-3 my-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Don't see the sample files? You probably skipped the <strong>Full-download</strong> option during setup. To get them now: <strong>Tools</strong> icon (top-right) → <strong>Sample Docs</strong> → <strong>Documents</strong>. They'll land in <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">C:\Users\&lt;username&gt;\llmware_data\sample_files\</code>.</p>
        </aside>
        <aside className="border-l-4 border-l-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-r-md px-4 py-3 my-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Sources are a <strong>building block</strong>. The Source you create here can be plugged straight into a Chat, a Bot, or an Agent later — without rebuilding anything. See the <a href="/v1/source" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Source Overview</a> docs for the full reference.</p>
        </aside>
      </section>

      <section id="watch-the-demo" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">Watch the Demo</h2>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Want to follow along on video? Here's the full walkthrough on the Model HQ YouTube channel — <em>"Process 500 PDFs On-Device for RAG and Agents in 30 seconds?! Model HQ Sources Demo (Real-Time)"</em>. Useful timestamps are called out in each step below.</p>
        <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm bg-black my-4">
          <iframe
            src="https://www.youtube.com/embed/Vz48X6SWwrQ?rel=0"
            title="YouTube video"
            className="w-full h-full"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section id="quick-steps-build-a-source-in-2-minutes" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">Quick Steps (Build a Source in 2 Minutes)</h2>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">If you just want to copy what's in the video, here's the short version. The detailed walkthrough is right after.</p>
        <ol className="list-decimal list-outside pl-6 space-y-2 marker:text-gray-500 dark:marker:text-gray-400 marker:font-semibold">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Open <strong>Source → Build New</strong>, click <strong><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">&gt;</code></strong>.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Name the Source (e.g. <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">ebooks</code>). Leave <strong>Encrypt Source</strong> off (these are public docs). <strong>Source Type</strong>: <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Standard</code>.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Click <strong>Add Docs</strong> → browse to <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">C:\Users\&lt;username&gt;\llmware_data\sample_files\</code> → pick a few PDFs (e.g. <em>Bill Gates biography</em>, <em>The Beatles</em>, <em>The Great Gatsby</em>) → <strong>Save + Exit</strong>.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Test it: under <strong>Test</strong>, pick <strong>All Documents</strong>, type a natural-language question (e.g. <em>"Where did Bill Gates go to school?"</em>), pick a model (e.g. <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Llama 3.2 3B</code>), click <strong>Run</strong>.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Save and exit. You now have a reusable Source.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">(Optional) Use it in <strong>Chat</strong> — open Chat, attach the saved Source, ask a question, and Model HQ will retrieve passages from your Source before answering.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">(Optional) Scale up — repeat steps 1–3 with <strong>500 UN resolution PDFs</strong> to see ingestion at scale.</li>
        </ol>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">That's the whole thing. The rest of this cookbook explains the <em>why</em> and shows what good queries look like.</p>
      </section>

      <section id="what-is-a-source-exactly" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">What Is a Source, Exactly?</h2>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">A <strong>Source</strong> in Model HQ is a bundle of documents that becomes a single, queryable knowledge base. Think of it as a folder with super-powers:</p>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-gray-400 dark:marker:text-gray-500">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Bundle</strong> — drop in PDFs, DOCX, PPTX, XLSX, CSV, TXT, MD, WAV, PNG, JPG, even ZIPs.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Parse + index</strong> — Model HQ parses each file, splits it into text chunks, and indexes them on-device. (See <a href="/v1/source/parsing-in-source" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">What is parsing?</a>.)</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Query</strong> — ask questions in plain English; Model HQ retrieves the most relevant chunks (RAG) and the model answers from them.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Reuse</strong> — the same Source works in Chat, Bots, and Agents.</li>
        </ul>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">There are two flavors:</p>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-gray-400 dark:marker:text-gray-500">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Standard Source</strong> — for multi-format documents (PDF, PPTX, DOCX, XLSX, PNG, JPEG, …). This is what we'll use.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Dataset Source</strong> — for structured data (CSV, JSON). Different interface; covered separately under <a href="/v1/dataset" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Dataset</a>.</li>
        </ul>
      </section>

      <section id="step-by-step-walkthrough" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">Step-by-Step Walkthrough</h2>
        <h3 id="1-open-the-source-interface" className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 pt-2 scroll-mt-24">1. Open the Source Interface</h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed"><em>Goal: get to the Source builder.</em> (Video: ~1:08)</p>
        <ol className="list-decimal list-outside pl-6 space-y-2 marker:text-gray-500 dark:marker:text-gray-400 marker:font-semibold">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">From the <strong>Home Screen</strong>, click <strong>Source</strong> in the left sidebar.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Click <strong>Build New</strong> to start a new Source.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Click <strong><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">&gt;</code></strong> to continue.</li>
        </ol>
        <aside className="border-l-4 border-l-blue-500 bg-blue-50/60 dark:bg-blue-950/30 rounded-r-md px-4 py-3 my-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">RAG stands for <strong>Retrieval-Augmented Generation</strong> — a fancy way of saying "search your documents, then let the model answer from what it finds." Sources are the bundle the search runs against.</p>
        </aside>
        <h3 id="2-configure-the-source-name-encryption-type" className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 pt-2 scroll-mt-24">2. Configure the Source — Name, Encryption, Type</h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed"><em>Goal: set up the basics.</em> (Video: ~1:46)</p>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Fill in the <strong>RAG Builder – Source</strong> form:</p>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-gray-400 dark:marker:text-gray-500">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Source Name</strong> — something descriptive. We'll use <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">ebooks</code>. This is the name you'll see later in Chat / Bots / Agents when attaching it.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Encrypt Source</strong> — leave <strong>off</strong> for public documents; turn <strong>on</strong> for sensitive material (encrypts the Source at rest on disk).</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Source Type</strong> — pick <strong>Standard</strong> (multi-format documents). Choose <strong>Dataset</strong> instead only if you're bundling CSV / JSON.</li>
        </ul>
        <aside className="border-l-4 border-l-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-r-md px-4 py-3 my-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Pick a name your future self (and teammates) will recognize. The Source name is exactly what shows up later when attaching it inside Chat, Bots, and Agents.</p>
        </aside>
        <h3 id="3-add-documents-to-the-source" className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 pt-2 scroll-mt-24">3. Add Documents to the Source</h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed"><em>Goal: drop the actual files into the bundle.</em> (Video: ~2:08)</p>
        <ol className="list-decimal list-outside pl-6 space-y-2 marker:text-gray-500 dark:marker:text-gray-400 marker:font-semibold">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">On the RAG Builder page, click <strong>Add Docs</strong>.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Browse to <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">C:\Users\&lt;username&gt;\llmware_data\sample_files\</code>.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">For our <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">ebooks</code> bundle, pick three very different books:
            <ul className="list-[circle] list-outside pl-6 mt-2 space-y-1 marker:text-gray-400 dark:marker:text-gray-500">
              <li className="text-gray-700 dark:text-gray-300 text-[0.95em]"><em>Bill Gates biography</em></li>
              <li className="text-gray-700 dark:text-gray-300 text-[0.95em]"><em>The Beatles</em></li>
              <li className="text-gray-700 dark:text-gray-300 text-[0.95em]"><em>The Great Gatsby</em></li>
            </ul></li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Click <strong><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">&gt;</code></strong> to add each one, then <strong>Save + Exit</strong> when you're done.</li>
        </ol>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Model HQ parses each document on-device, splitting it into searchable text chunks.</p>
        <aside className="border-l-4 border-l-blue-500 bg-blue-50/60 dark:bg-blue-950/30 rounded-r-md px-4 py-3 my-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Supported file types include <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">.pdf</code>, <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">.pptx</code>, <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">.docx</code>, <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">.xlsx</code>, <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">.csv</code>, <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">.txt</code>, <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">.md</code>, <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">.wav</code>, <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">.png</code>, <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">.jpg</code>, and <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">.zip</code>. You can mix and match in a single Source — text documents, screenshots of tables, images, all in one bundle.</p>
        </aside>
        <h3 id="4-optional-tune-parsing-options" className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 pt-2 scroll-mt-24">4. (Optional) Tune Parsing Options</h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed"><em>Goal: choose how documents are turned into searchable text.</em></p>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Click the <strong>Configure (⚙️)</strong> icon on the upload screen to control parsing:</p>
        <div className="my-5 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
          <table className="min-w-full text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 whitespace-nowrap">Option</th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 whitespace-nowrap">Default</th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 whitespace-nowrap">When to change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><strong>PDF Parsing Options</strong></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Digital</code> (fastest)</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Switch to <strong>OCR</strong> for scanned PDFs / image-based PDFs.</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><strong>Image Parsing Options</strong></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">OCR</code></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Switch to <strong>Vision Model</strong> when you need richer descriptions of image content.</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><strong>Text Chunk Size</strong></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">400–600 tokens</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Smaller = more precise retrieval. Larger = more context per chunk.</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><strong>Interpret CSV as DB Table</strong></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">OFF</code></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Turn on if your CSV is structured tabular data (allows accurate column queries).</td>
              </tr>
            </tbody>
          </table>
        </div>
        <aside className="border-l-4 border-l-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-r-md px-4 py-3 my-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">If your PDFs are mostly typed text, the <strong>Digital</strong> parser is the fastest and best default. If retrieval quality feels off on scanned documents, switch to <strong>OCR</strong>. See <a href="/v1/source/parsing-in-source" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">What is parsing?</a> for more.</p>
        </aside>
        <h3 id="5-test-the-source-pick-a-search-strategy" className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 pt-2 scroll-mt-24">5. Test the Source — Pick a Search Strategy</h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed"><em>Goal: make sure the bundle actually contains what you think it does.</em> (Video: ~3:17)</p>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">The RAG Builder offers two ways to interrogate a Source: <strong>Search</strong> and <strong>Test</strong>.</p>
        <h4 id="search-no-model-needed" className="text-lg font-semibold text-gray-900 dark:text-gray-100 pt-1 scroll-mt-24">Search (no model needed)</h4>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Use <strong>Search</strong> to retrieve raw passages without invoking a chat model. Pick one of four strategies:</p>
        <div className="my-5 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
          <table className="min-w-full text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 whitespace-nowrap">Strategy</th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 whitespace-nowrap">What it matches</th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 whitespace-nowrap">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><strong>Semantic</strong></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Related meanings, even if exact words differ</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">benefits of eating apples</code> → matches "health advantages of apples"</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><strong>Keyword-OR</strong></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Any of the words</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">apple OR orange</code></td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><strong>Keyword-AND</strong></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">All of the words</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">apple AND orange</code></td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><strong>Exact</strong></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Exact phrase, same order</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">"artificial intelligence"</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Semantic is the default — it's the most natural for "ask my docs" questions. Keyword and Exact are great when you know specific terms or phrases must appear.</p>
        <h4 id="test-full-rag-with-a-model" className="text-lg font-semibold text-gray-900 dark:text-gray-100 pt-1 scroll-mt-24">Test (full RAG with a model)</h4>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Use <strong>Test</strong> to run an actual end-to-end RAG query: retrieve passages <strong>and</strong> have the model write a grounded answer. Inputs:</p>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-gray-400 dark:marker:text-gray-500">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Select Test Document</strong> — a single uploaded document, or <strong>All Documents</strong>.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Question</strong> — a plain-English question (e.g. <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Where did Bill Gates go to school?</code>).</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Model</strong> — pick from your local models. <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Llama 3.2 3B</code> is a solid default.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>context_top_n</strong> — how many top-matching chunks to feed to the model (more on this in step 8).</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>context_target_size</strong> — target token size for the assembled context. If <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">top_n</code> chunks don't fill it, more chunks are added until they do.</li>
        </ul>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Try a question for each book in the bundle:</p>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-gray-400 dark:marker:text-gray-500">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Where did Bill Gates go to school?</code> → should hit the Gates biography.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Where did Bill Gates go to university?</code> → also Gates biography.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Who is Daisy?</code> → should hit <em>The Great Gatsby</em>.</li>
        </ul>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Each answer also shows the <strong>context</strong> — the exact passages it used and their source (file name, page).</p>
        <aside className="border-l-4 border-l-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-r-md px-4 py-3 my-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Keep test questions short and specific, like you're asking a colleague. <em>"Who is Daisy?"</em> works far better than a long, formal prompt. If a Bill Gates question hits <em>The Great Gatsby</em>, something's off — wrong files, wrong chunk size, or too small a <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">context_top_n</code>.</p>
        </aside>
        <h3 id="6-save-the-source" className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 pt-2 scroll-mt-24">6. Save the Source</h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Once you're happy with the test results, click <strong>Save + Exit</strong> and head <strong>Home</strong>. You'll now see the Source listed under <strong>Load Existing</strong>, ready to be reused anywhere in Model HQ.</p>
        <h3 id="7-use-the-source-in-chat" className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 pt-2 scroll-mt-24">7. Use the Source in Chat</h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed"><em>Goal: ask the same questions from a regular chat — without re-uploading anything.</em> (Video: ~4:48)</p>
        <ol className="list-decimal list-outside pl-6 space-y-2 marker:text-gray-500 dark:marker:text-gray-400 marker:font-semibold">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Open <strong>Chat</strong> from the left sidebar.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Pick a chat model (e.g. <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Llama 3.2 3B</code>).</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Attach a <strong>Saved Source</strong> — pick <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">ebooks</code>.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Ask a question like: <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Who are Bill Gates's children?</code></li>
        </ol>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Chat will show the retrieved passages first (the <em>context</em>), then write an answer grounded in them. Same Source you built in step 6 — no rebuild, no re-upload.</p>
        <aside className="border-l-4 border-l-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-r-md px-4 py-3 my-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">The Chat config has its own <strong>PDF Parsing Options</strong> under the ⚙ icon, so you can switch between Digital / OCR / Vision Model per chat session. Same Source, different parsing if you need it.</p>
        </aside>
        <h3 id="8-scale-up-500-pdfs-in-one-source" className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 pt-2 scroll-mt-24">8. Scale Up — 500 PDFs in One Source</h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed"><em>Goal: prove this works at real-world scale.</em> (Video: ~5:46)</p>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Let's build a much bigger Source.</p>
        <ol className="list-decimal list-outside pl-6 space-y-2 marker:text-gray-500 dark:marker:text-gray-400 marker:font-semibold">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Go back to <strong>Source → Build New</strong>.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Name it <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">UN_resolutions</code>. Encryption off, <strong>Standard</strong> type.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Click <strong>Add Docs</strong> and select the <strong>500 UN resolution PDFs</strong> from your sample files. Each is roughly 1.5–5 pages long.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Click <strong><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">&gt;</code></strong> to start ingestion.</li>
        </ol>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">On the demo machine (Intel <strong>Lunar Lake</strong>, 32 GB), all 500 PDFs were parsed and indexed in roughly <strong>30 seconds</strong>, real time, with no internet connection. (Speed depends on hardware — AI PCs with NPU acceleration are particularly quick.)</p>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">The Source view will list all 500 ingested documents. Save and exit when you're done.</p>
        <aside className="border-l-4 border-l-blue-500 bg-blue-50/60 dark:bg-blue-950/30 rounded-r-md px-4 py-3 my-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">The point: this isn't a toy demo. Sources scale to hundreds of documents on a single laptop, and that same Source becomes the knowledge base for any Chat / Bot / Agent in Model HQ.</p>
        </aside>
        <h3 id="9-query-a-large-source-and-tune-context-top-n" className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 pt-2 scroll-mt-24">9. Query a Large Source — and Tune Context Top-N</h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed"><em>Goal: ask the 500-PDF Source a real question, then dial in how many passages it retrieves.</em> (Video: ~7:21)</p>
        <ol className="list-decimal list-outside pl-6 space-y-2 marker:text-gray-500 dark:marker:text-gray-400 marker:font-semibold">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">From the <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">UN_resolutions</code> Source, open <strong>Test</strong>.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Type: <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">What are resolutions on women and agriculture?</code></li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Model: <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Llama 3.2 3B</code>. Leave <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">context_top_n</code> at the default <strong>5</strong>.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Click <strong>Run</strong>.</li>
        </ol>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Model HQ digs through all 500 PDFs and returns the top resolutions touching on women, agriculture, sustainable inclusion, etc. — along with the source passages it used.</p>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Now turn the dial:</p>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-gray-400 dark:marker:text-gray-500">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed">Change <strong>context_top_n</strong> from <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">5</code> to <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">10</code>.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed">Re-run the same question.</li>
        </ul>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">The model now sees <strong>10</strong> chunks instead of 5, giving you a broader answer with more cited resolutions.</p>
        <aside className="border-l-4 border-l-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-r-md px-4 py-3 my-4 space-y-2">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">More context isn't always better:<br />- <strong>Lower top-n</strong> (e.g. 3–5) → sharper, more focused answers; faster.<br />- <strong>Higher top-n</strong> (e.g. 10–20) → broader coverage; great for "list all resolutions about X" questions.<br />- <strong><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">context_target_size</code></strong> acts as a safety net — if <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">top_n</code> chunks don't reach the target token budget, more chunks get added automatically.</p>
        </aside>
        <h3 id="10-next-plug-the-source-into-bots-and-agents" className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 pt-2 scroll-mt-24">10. (Next) Plug the Source into Bots and Agents</h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">You've now got a reusable Source. Two natural next steps:</p>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-gray-400 dark:marker:text-gray-500">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Bots</strong> — build a chatbot that always uses this Source as its knowledge base. See the <a href="/v1/bots" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Bots Overview</a>.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Agents</strong> — build a multi-step workflow that searches this Source as one of its actions. See the <a href="/v1/agents" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Agents Overview</a> and the <a href="/cookbooks/v1/building-contract-analyzer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Contract Analyzer cookbook</a> for an example.</li>
        </ul>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">The Source you built once is the same Source those bots and agents will use — no duplication, no re-ingestion.</p>
      </section>

      <section id="other-useful-source-actions" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">Other Useful Source Actions</h2>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">The RAG Builder also gives you a few utilities:</p>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-gray-400 dark:marker:text-gray-500">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Library</strong> — export the Source to the local library database.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Download</strong> — export the Source as a Markdown text file.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Links</strong> — if the Source was built from a web search, list just the links found.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Delete</strong> — remove the Source from the system.</li>
        </ul>
      </section>

      <section id="anatomy-of-a-source" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">Anatomy of a Source</h2>
        <div className="my-4">
          <CodeBlock language="text">{`[ Source: ebooks ]
        │
        ├── Bill_Gates_biography.pdf
        ├── The_Beatles.pdf
        └── The_Great_Gatsby.pdf
                │
                ▼
   Parsed (Digital / OCR / Vision) → Chunked → Indexed (on-device)
                │
                ▼
   Used by:  Chat   |   Bots   |   Agents`}</CodeBlock>
        </div>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-gray-400 dark:marker:text-gray-500">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>One bundle</strong> — many documents, parsed once.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Reusable</strong> — Chat, Bots, and Agents all read from the same Source.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Local</strong> — files never leave your device.</li>
        </ul>
      </section>

      <section id="summary-table" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">Summary Table</h2>
        <div className="my-5 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
          <table className="min-w-full text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 whitespace-nowrap">Step</th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 whitespace-nowrap">Action</th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 whitespace-nowrap">Outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">1</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Open Source → Build New</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Blank Source</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">2</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Name it, pick <strong>Standard</strong> type</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Source configured</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">3</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Add Docs from <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">sample_files\</code></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Documents ingested</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">4</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">(Opt.) Tune parsing (Digital / OCR / Vision)</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Right parser for the right docs</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">5</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Test with Search + Test</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Validated retrieval quality</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">6</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Save + Exit</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Source ready to reuse</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">7</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Attach Source in Chat</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Chat answers from your bundle</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">8</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Build a 500-PDF Source</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Real-world scale on-device</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">9</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Tune <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">context_top_n</code> / <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">context_target_size</code></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Dial answer breadth vs precision</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">10</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Plug into Bots / Agents</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Source becomes a building block</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="related-documentation" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">Related Documentation</h2>
        <div className="grid gap-3 sm:grid-cols-2">
        <a
          href="/v1/source"
          className="group flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-950/30 transition-colors"
        >
          <span className="text-gray-800 dark:text-gray-200 font-medium">Source Overview</span>
          <span className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" aria-hidden="true">→</span>
        </a>
        <a
          href="/v1/source/parsing-in-source"
          className="group flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-950/30 transition-colors"
        >
          <span className="text-gray-800 dark:text-gray-200 font-medium">What is parsing?</span>
          <span className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" aria-hidden="true">→</span>
        </a>
        <a
          href="/v1/source/error-handling"
          className="group flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-950/30 transition-colors"
        >
          <span className="text-gray-800 dark:text-gray-200 font-medium">Source Error Handling</span>
          <span className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" aria-hidden="true">→</span>
        </a>
        <a
          href="/v1/chat"
          className="group flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-950/30 transition-colors"
        >
          <span className="text-gray-800 dark:text-gray-200 font-medium">Chat Overview</span>
          <span className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" aria-hidden="true">→</span>
        </a>
        <a
          href="/v1/bots"
          className="group flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-950/30 transition-colors"
        >
          <span className="text-gray-800 dark:text-gray-200 font-medium">Bots Overview</span>
          <span className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" aria-hidden="true">→</span>
        </a>
        <a
          href="/v1/agents"
          className="group flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-950/30 transition-colors"
        >
          <span className="text-gray-800 dark:text-gray-200 font-medium">Agents Overview</span>
          <span className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" aria-hidden="true">→</span>
        </a>
        <a
          href="/cookbooks/v1/building-contract-analyzer"
          className="group flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-950/30 transition-colors"
        >
          <span className="text-gray-800 dark:text-gray-200 font-medium">Building a Contract Analyzer (Cookbook)</span>
          <span className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" aria-hidden="true">→</span>
        </a>
        </div>
      </section>

      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Need help with this cookbook? Reach out to us at{' '}
          <a href="mailto:support@aibloks.com" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
            support@aibloks.com
          </a>
        </p>
      </div>
      </div>
    </div>
  )
}