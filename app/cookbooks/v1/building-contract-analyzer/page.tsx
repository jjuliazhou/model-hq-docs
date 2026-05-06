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

export default function BuildANocodeContractAnalyzerAgentInMinutesOfflineOndevicePage() {
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
            <BreadcrumbPage>Build a No-Code Contract Analyzer Agent in Minutes (Offline, On-Device)</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="space-y-3 sm:space-y-4 border-b border-gray-200 dark:border-gray-800 pb-6 sm:pb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 leading-[1.2] break-words">Build a No-Code Contract Analyzer Agent in Minutes (Offline, On-Device)</h1>
        
      </header>

      <div className="space-y-10 sm:space-y-12">
      <section id="use-case" className="scroll-mt-24 space-y-4">
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Build a <strong>no-code Contract Analyzer agent</strong> that reviews recurring agreements (e.g. music license agreements, NDAs, employment contracts) and automatically extracts the same set of key commercial terms every time — fully on-device, with no Wi-Fi required and no data leaving the user's machine.</p>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">In this walkthrough, a <strong>Music License Agreement Analyzer</strong> is built from scratch using the <strong>Visual Builder</strong> in Model HQ. The agent answers business-critical questions such as:</p>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>Who are the parties to the agreement?</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>What is the effective date?</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>What is the royalty payment?</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>Is there an advance payment to the licensor (and how much)?</span>
            </div>
          </li>
        </ul>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">The agent uses <strong>RAG (Retrieval-Augmented Generation) + re-ranking</strong> to pull the most relevant passages from each contract and generate accurate, grounded answers. Once validated on a single document, the same agent is then executed in <strong>Batch Mode</strong> across multiple agreements, with results exported for downstream review and workflow automation.</p>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">This walkthrough is also demonstrated on the <strong>Model HQ YouTube channel</strong>: <em>"Contract Analyzer Agent in Minutes (No-Code + Offline) | Model HQ Demo"</em>.</p>
        <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm bg-black my-4">
          <iframe
            src="https://www.youtube.com/embed/9n7gXz6knbM?rel=0"
            title="YouTube video"
            className="w-full h-full"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section id="who-this-is-for" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">Who This Is For</h2>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span><strong>Legal & Compliance teams</strong> reviewing recurring agreements (licenses, NDAs, vendor contracts)</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span><strong>Business users</strong> in HR, Operations, Procurement, and Finance</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span><strong>Analysts</strong> automating repetitive document review</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span><strong>Developers</strong> prototyping custom RAG-based document workflows</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>Anyone who needs to extract the <strong>same set of fields</strong> from many similar documents</span>
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
              <span>How to build a no-code contract analyzer agent using the <strong>Visual Builder</strong></span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>How to wire an <strong>Input (document) node</strong> into multiple <strong>RAG answer</strong> nodes</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>How re-ranking and the on-device parser improve answer quality on long documents</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>How to run the agent against a <strong>single document</strong> and validate its responses</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>How to run the same agent in <strong>Batch Mode</strong> across many contracts at once</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>How to export results for review, dashboards, and workflow automation</span>
            </div>
          </li>
        </ul>
      </section>

      <section id="ingredients-prerequisites" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">Ingredients (Prerequisites)</h2>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span><strong>Model HQ</strong> installed on the local device</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>A <strong>chat / RAG-capable model</strong> available locally (e.g. <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Llama 3.2 3B</code> — the default chat model used in this walkthrough). The model will be pulled automatically on first run if not yet cached.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>Sample music license agreements provided with Model HQ, located at: <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200"> C:\Users\&lt;username&gt;\llmware_data\sample_files\AgreementsLarge\ </code> Example documents:</span>
              <ul className="list-[circle] list-outside pl-6 space-y-1 mt-2 marker:text-gray-400 dark:marker:text-gray-500">
                <li className="text-[0.95em] text-gray-700 dark:text-gray-300"><em>Cybele Music License Agreement.pdf</em></li>
                <li className="text-[0.95em] text-gray-700 dark:text-gray-300"><em>Diana Music License Agreement.pdf</em></li>
                <li className="text-[0.95em] text-gray-700 dark:text-gray-300"><em>Circe License Agreement for Copyrighted Music.pdf</em></li>
              </ul>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span><strong>No coding knowledge required.</strong></span>
            </div>
          </li>
        </ul>
        <aside className="border-l-4 border-l-blue-500 bg-blue-50/60 dark:bg-blue-950/30 rounded-r-md px-4 py-3 my-4">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Once models have been downloaded, <strong>no internet connection is required</strong> to run the agent. All inference, parsing, retrieval, and re-ranking happen locally on the device.</p>
        </aside>
      </section>

      <section id="why-model-hq-builds-agents-differently" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">Why Model HQ Builds Agents Differently</h2>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Most agent builders are designed to execute against a frontier model in the cloud. Model HQ takes a different approach:</p>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>Each task is <strong>broken out discretely</strong> into its own node.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span><strong>Small, specialized language models</strong> are stacked together to handle each step.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span>The end-to-end workflow runs <strong>on-device</strong> — using the local parser, the ranker model, and a RAG-tuned answering model in coordination.</span>
            </div>
          </li>
        </ul>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">This produces accurate, reproducible results while preserving privacy and eliminating per-call cloud costs.</p>
      </section>

      <section id="step-by-step-recipe" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">Step-by-Step Recipe</h2>
        <h3 id="1-open-the-agents-interface" className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 pt-2 scroll-mt-24">1. Open the Agents Interface</h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Goal</strong>: Navigate to the agent builder.</p>
        <h4 id="steps" className="text-lg font-semibold text-gray-900 dark:text-gray-100 pt-1 scroll-mt-24">Steps:</h4>
        <ol className="list-decimal list-outside pl-6 space-y-2 marker:text-gray-500 dark:marker:text-gray-400 marker:font-semibold">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">From the <strong>Main Menu / Home Screen</strong>, select <strong>Agents</strong> in the left sidebar.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">In the <em>Agent Menu</em>, choose the <strong>Build New</strong> option.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Click <strong><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">&gt;</code></strong> to proceed.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">In the <em>Build New Agent</em> screen, select <strong>Visual Builder</strong>.</li>
        </ol>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">The Visual Builder canvas opens — this is the drag-and-drop, click-and-connect environment where the agent will be assembled.</p>
        <aside className="border-l-4 border-l-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-r-md px-4 py-3 my-4">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">The Visual Builder is ideal for single-input agents like a contract analyzer. For workflows requiring <strong>multiple input types</strong> (e.g. document <strong>and</strong> image), use <strong>Build Multi-Step Agent</strong> instead. See the <a href="/v1/agents/creating-new-agent" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Create New Agent</a> and <a href="/v1/agents/agent-visual-builder" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Agent Visual Builder</a> documentation.</p>
        </aside>
        <h3 id="2-name-the-agent" className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 pt-2 scroll-mt-24">2. Name the Agent</h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">At the top of the canvas, set the agent name to:</p>
        <div className="my-4">
          <CodeBlock language="text">{`Music_License_Agent
`}</CodeBlock>
        </div>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">A descriptive name makes the agent easy to find later under <strong>Load Existing</strong>, and easy to identify when shared with colleagues.</p>
        <h3 id="3-add-the-input-node-document" className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 pt-2 scroll-mt-24">3. Add the Input Node (Document)</h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Goal</strong>: Define what the agent receives at runtime.</p>
        <h4 id="steps" className="text-lg font-semibold text-gray-900 dark:text-gray-100 pt-1 scroll-mt-24">Steps:</h4>
        <ol className="list-decimal list-outside pl-6 space-y-2 marker:text-gray-500 dark:marker:text-gray-400 marker:font-semibold">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">From the left sidebar, drag an <strong>Input</strong> node onto the canvas.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Open the node and configure it:
            <ul className="list-[circle] list-outside pl-6 mt-2 space-y-1 marker:text-gray-400 dark:marker:text-gray-500">
              <li className="text-gray-700 dark:text-gray-300 text-[0.95em]"><strong>Choose input type</strong>: <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">document</code></li>
              <li className="text-gray-700 dark:text-gray-300 text-[0.95em]"><strong>Description</strong>: <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Music license agreement (PDF, DOCX, PPTX, TXT, or MD).</code></li>
            </ul></li>
        </ol>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">This input node tells Model HQ that, at runtime, the user will be prompted to upload a document file. The uploaded file becomes the source of truth for every downstream RAG step.</p>
        <aside className="border-l-4 border-l-violet-500 bg-violet-50/60 dark:bg-violet-950/30 rounded-r-md px-4 py-3 my-4">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">The Visual Builder supports <strong>only one input node</strong> per agent. For multi-input workflows, switch to <strong>Build Multi-Step Agent</strong>.</p>
        </aside>
        <h3 id="4-add-the-first-rag-answer-node-parties" className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 pt-2 scroll-mt-24">4. Add the First RAG Answer Node — <em>Parties</em></h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Goal</strong>: Ask the first business question against the uploaded document.</p>
        <h4 id="steps" className="text-lg font-semibold text-gray-900 dark:text-gray-100 pt-1 scroll-mt-24">Steps:</h4>
        <ol className="list-decimal list-outside pl-6 space-y-2 marker:text-gray-500 dark:marker:text-gray-400 marker:font-semibold">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Drag a <strong>Node</strong> from the left sidebar onto the canvas.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">In the node's <strong>Choose service</strong> dropdown, select <strong><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code></strong>.</li>
        </ol>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">&gt; <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code> is the Model HQ service that retrieves the most relevant passages from a long document and generates a grounded answer. Use it instead of <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">chat</code> whenever the answer must come from a specific document rather than the model's general knowledge.</p>
        <ol className="list-decimal list-outside pl-6 space-y-2 marker:text-gray-500 dark:marker:text-gray-400 marker:font-semibold">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">In the <strong>Instruction</strong> field, enter: <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200"> Who are the parties to the agreement? </code></li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1"><strong>Connect</strong> the <strong>Input node → RAG answer node</strong> by drawing a wire between their connection handles.</li>
        </ol>
        <aside className="border-l-4 border-l-violet-500 bg-violet-50/60 dark:bg-violet-950/30 rounded-r-md px-4 py-3 my-4">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Every RAG question must be wired <strong>directly to the Input (document) node</strong> — <em>not</em> to the previous RAG node. Each <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code> step independently retrieves passages from the source document. Chaining them serially would feed one answer into the next, which is not the intent here.</p>
        </aside>
        <h3 id="5-add-additional-rag-answer-nodes" className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 pt-2 scroll-mt-24">5. Add Additional RAG Answer Nodes</h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Repeat <strong>Step 4</strong> for each business question. For the Music License Analyzer, add three more <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code> nodes, each wired back to the <strong>Input node</strong>:</p>
        <div className="my-5 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
          <table className="min-w-full text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 whitespace-nowrap">Node</th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 whitespace-nowrap">Service</th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 whitespace-nowrap">Instruction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">RAG Answer 2</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">What is the effective date of the agreement?</code></td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">RAG Answer 3</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">What is the royalty payment to the licensor?</code></td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">RAG Answer 4</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">What is the advance payment to the licensor?</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">The final canvas should look like a <strong>fan-out</strong>: one Input (document) node feeding four parallel RAG answer nodes.</p>
        <aside className="border-l-4 border-l-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-r-md px-4 py-3 my-4">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Add as many or as few questions as needed. Common additions for license/contract review include: <em>territory</em>, <em>term length</em>, <em>renewal terms</em>, <em>termination triggers</em>, <em>exclusivity</em>, <em>governing law</em>, and <em>audit rights</em>.</p>
        </aside>
        <h3 id="6-confirm-the-model-configuration" className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 pt-2 scroll-mt-24">6. Confirm the Model Configuration</h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">In the Visual Builder, open any node to verify:</p>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-gray-400 dark:marker:text-gray-500">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Model</strong> — <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Llama 3.2 3B</code> (default chat / RAG model). A check mark next to a model name means it is already cached locally; a download icon means it will be pulled the first time the agent runs.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Services</strong> — confirm <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code> and <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">parse_document</code> are enabled in the <strong>Services</strong> catalog (left sidebar → <em>Services</em>). For dataset- or table-based variants, also enable <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">All-Datasets</code> or <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">query_custom_table</code> as needed.</li>
        </ul>
        <aside className="border-l-4 border-l-blue-500 bg-blue-50/60 dark:bg-blue-950/30 rounded-r-md px-4 py-3 my-4">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Behind the scenes, <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code> automatically invokes:
<em> the <strong>document parser</strong> (chunks the PDF/DOCX into ~100+ text passages),
</em> the <strong>ranker model</strong> (re-orders passages by relevance to the question),
* the <strong>answering model</strong> (generates the final response from top-ranked passages).

All three components run locally.</p>
        </aside>
        <h3 id="7-save-run-on-a-single-document" className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 pt-2 scroll-mt-24">7. Save & Run on a Single Document</h3>
        <h4 id="steps" className="text-lg font-semibold text-gray-900 dark:text-gray-100 pt-1 scroll-mt-24">Steps:</h4>
        <ol className="list-decimal list-outside pl-6 space-y-2 marker:text-gray-500 dark:marker:text-gray-400 marker:font-semibold">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Click <strong>Save Agent</strong> (left sidebar in the Visual Builder) to persist the workflow as a JSON definition.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Click <strong>Run</strong>.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">When prompted, upload a sample agreement, e.g.: <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200"> C:\Users\&lt;username&gt;\llmware_data\sample_files\AgreementsLarge\Cybele Music License Agreement.pdf </code></li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Click <strong><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">&gt;</code></strong> to start execution.</li>
        </ol>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Model HQ will:</p>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-gray-400 dark:marker:text-gray-500">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed">Parse the document into text chunks,</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed">Run each <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code> node in turn against the parsed source,</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed">Display results in a <strong>Summary Report Table</strong>.</li>
        </ul>
        <h4 id="example-output-cybele-music-license-agreement" className="text-lg font-semibold text-gray-900 dark:text-gray-100 pt-1 scroll-mt-24">Example Output (Cybele Music License Agreement)</h4>
        <div className="my-5 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
          <table className="min-w-full text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 whitespace-nowrap">Step</th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 whitespace-nowrap">Question</th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 whitespace-nowrap">Answer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer_1</code></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Who are the parties to the agreement?</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">The parties to the agreement are <strong>Cybele</strong> and <strong>Lotus Music Company</strong>.</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer_2</code></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">What is the effective date of the agreement?</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><strong>February 1, 2020.</strong></td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer_3</code></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">What is the royalty payment to the licensor?</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><em>(royalty payment schedule extracted from contract)</em></td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer_4</code></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">What is the advance payment to the licensor?</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><em>(advance payment amount extracted from contract)</em></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Each output is also accompanied by:</p>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-gray-400 dark:marker:text-gray-500">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed">an <strong>Inference History</strong> table showing tokens used, first-token latency, and total processing time per step,</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed">a <strong>Files Created</strong> section with the generated reports and artifacts.</li>
        </ul>
        <aside className="border-l-4 border-l-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-r-md px-4 py-3 my-4">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Click <strong>Run Again</strong> to test the same agent against a second document — for example <em>Diana Music License Agreement.pdf</em> — to validate consistency. If a question genuinely doesn't apply (e.g. <em>no advance payment</em> exists in the Diana agreement), the agent will correctly report that the value is <strong>not mentioned</strong>, rather than hallucinating a number.</p>
        </aside>
        <h3 id="8-optional-add-an-agent-report-step" className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 pt-2 scroll-mt-24">8. (Optional) Add an Agent Report Step</h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">To produce a polished, shareable output, add a final reporting node:</p>
        <ol className="list-decimal list-outside pl-6 space-y-2 marker:text-gray-500 dark:marker:text-gray-400 marker:font-semibold">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Drag a new <strong>Node</strong> onto the canvas after the last RAG answer.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Set its service to <strong><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">agent_report</code></strong>.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Set the instruction to a descriptive title, e.g.: <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200"> Music License Agreement — Summary of Key Terms </code></li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Wire the previous nodes' outputs into it (via a <strong>Transformer</strong> node set to <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Agent-State</code> if multi-input aggregation is needed).</li>
        </ol>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">agent_report</code> produces a structured Word document, JSON, and Markdown summary, automatically incorporating each <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code> result.</p>
        <h3 id="9-run-in-batch-mode-across-multiple-contracts" className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 pt-2 scroll-mt-24">9. Run in Batch Mode Across Multiple Contracts</h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Once validated on a single document, scale the agent across many contracts at once.</p>
        <h4 id="steps" className="text-lg font-semibold text-gray-900 dark:text-gray-100 pt-1 scroll-mt-24">Steps:</h4>
        <ol className="list-decimal list-outside pl-6 space-y-2 marker:text-gray-500 dark:marker:text-gray-400 marker:font-semibold">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Return to <strong>Agents → Load Existing</strong> and select <strong>Music_License_Agent</strong>.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Click <strong><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">&gt;</code></strong> to enter the run screen.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Choose <strong>Batch Run</strong> (instead of <em>Run (Details)</em> or <em>Run (Demo)</em>).</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">In <em>Upload Documents for Batch Processing</em>, select multiple files, e.g.:
            <ul className="list-[circle] list-outside pl-6 mt-2 space-y-1 marker:text-gray-400 dark:marker:text-gray-500">
              <li className="text-gray-700 dark:text-gray-300 text-[0.95em]"><em>Circe License Agreement for Copyrighted Music.pdf</em></li>
              <li className="text-gray-700 dark:text-gray-300 text-[0.95em]"><em>Cybele Music License Agreement.pdf</em></li>
              <li className="text-gray-700 dark:text-gray-300 text-[0.95em]"><em>Diana Music License Agreement.pdf</em></li>
              <li className="text-gray-700 dark:text-gray-300 text-[0.95em]"><em>Eos License Agreement for Copyrighted Music.pdf</em></li>
            </ul></li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed pl-1">Click <strong><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">&gt;</code></strong> to start the batch run.</li>
        </ol>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Model HQ will:</p>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-gray-400 dark:marker:text-gray-500">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed">Treat each uploaded file as a <strong>separate work item</strong>,</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed">Run the full agent workflow on each file independently,</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed">Aggregate results into batch output artifacts.</li>
        </ul>
        <aside className="border-l-4 border-l-blue-500 bg-blue-50/60 dark:bg-blue-950/30 rounded-r-md px-4 py-3 my-4">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">For <strong>file-based</strong> input (as configured here), if <strong>N</strong> files are uploaded, the agent runs <strong>N</strong> times — once per document. For <strong>text-based</strong> inputs, large files are decomposed into chunks and each chunk becomes a separate work item. See the <a href="/v1/agents/batch-processing" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Batch Processing</a> documentation for details.</p>
        </aside>
        <h4 id="batch-outputs" className="text-lg font-semibold text-gray-900 dark:text-gray-100 pt-1 scroll-mt-24">Batch Outputs</h4>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">When the batch completes, the following files are made available for download:</p>
        <div className="my-5 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
          <table className="min-w-full text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 whitespace-nowrap">File</th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-300 whitespace-nowrap">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">&lt;agent_name&gt;_batch_results.json</code></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Per-document, per-question answers in structured JSON. Ideal for downstream pipelines, dashboards, and APIs.</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">&lt;agent_name&gt;_batch_report.docx</code></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Consolidated Word document containing all answers, contracts and a per-document summary table.</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Per-document artifacts</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Each document also produces its own individual report, mermaid chart, and take-aways files.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">These outputs can feed directly into BI tools, ticketing systems, CLM platforms, or audit trails.</p>
        <h3 id="10-optional-share-or-deploy-the-agent" className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 pt-2 scroll-mt-24">10. (Optional) Share or Deploy the Agent</h3>
        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">Once the agent is working, it can be distributed across the organization without re-building:</p>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-gray-400 dark:marker:text-gray-500">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Share by ZIP</strong> — From <em>Agents → Load Existing → Music_License_Agent → Share</em>, download the agent ZIP file. The ZIP contains <strong>only configuration and documents</strong>, no executable code, making it safe to email or attach in chat.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Upload on another machine</strong> — On a colleague's Model HQ install, choose <em>Agents → Build New → Upload</em> (or the Upload button next to <em>Load Existing</em>) and select the ZIP. The agent appears in their <em>Load Existing</em> list immediately.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Run via the Model HQ API Server</strong> — Expose the agent over a local HTTP endpoint for integration into internal apps, RPA workflows, or backend services.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Add Demo mode</strong> — Before sharing, enable a demo configuration so colleagues can run the agent end-to-end with a sample document and immediately see what it does.</li>
        </ul>
      </section>

      <section id="anatomy-of-the-final-agent" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">Anatomy of the Final Agent</h2>
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
        └──▶ [ agent_report: Summary of Key Terms ]   (optional)
`}</CodeBlock>
        </div>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-gray-400 dark:marker:text-gray-500">
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>One input</strong> — the contract under review.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>Multiple parallel RAG retrievals</strong> — each independently queries the same source.</li>
          <li className="text-gray-800 dark:text-gray-200 leading-relaxed"><strong>One consolidated report</strong> — for human review and downstream automation.</li>
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
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Open Agents → Build New → Visual Builder</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">New blank canvas</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">2</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Name the agent (<code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Music_License_Agent</code>)</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Agent identifiable in <em>Load Existing</em></td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">3</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Add Input node (<code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">document</code>)</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Defines runtime upload</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">4–5</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Add <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code> nodes wired to Input</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Each question independently retrieves from the contract</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">6</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Confirm model & services</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed"><code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">Llama 3.2 3B</code>, <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">rag_answer</code>, <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">parse_document</code></td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">7</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Save & Run on one contract</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Validate per-question answers</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">8</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">(Opt.) Add <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-[0.875em] font-mono text-gray-800 dark:text-gray-200">agent_report</code></td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Generate polished Word/JSON output</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">9</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Batch Run across many contracts</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Scaled, repeatable execution</td>
              </tr>
              <tr className="hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">10</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Share / Deploy</td>
                <td className="px-4 py-3 text-gray-800 dark:text-gray-200 align-top leading-relaxed">Distribute to colleagues or via API</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="why-this-pattern-works" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">Why This Pattern Works</h2>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span><strong>Domain-agnostic</strong> — swap the questions and the same skeleton works for NDAs, MSAs, employment contracts, lease agreements, or any recurring document type.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span><strong>Grounded answers</strong> — RAG + re-ranking means the model answers from the document, not from memory, so wrong-document hallucinations are minimized.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span><strong>Honest "not found" responses</strong> — if a clause genuinely isn't present, the agent says so (as demonstrated by the <em>Diana</em> agreement, which correctly reported no advance payment).</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span><strong>Fully on-device</strong> — no contract content ever leaves the laptop. Critical for legal, regulated, and confidentiality-sensitive workflows.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span><strong>Scalable</strong> — the same agent runs on 1 contract or 1,000 via Batch Mode.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="flex-1 text-gray-800 dark:text-gray-200 leading-relaxed">
              <span><strong>Shareable</strong> — package as a ZIP and stand up the same agent on any teammate's Model HQ install in seconds.</span>
            </div>
          </li>
        </ul>
      </section>

      <section id="related-documentation" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50 border-b border-gray-200 dark:border-gray-800 pb-2">Related Documentation</h2>
        <div className="grid gap-3 sm:grid-cols-2">
        <a
          href="/v1/agents"
          className="group flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-950/30 transition-colors"
        >
          <span className="text-gray-800 dark:text-gray-200 font-medium">Agents Overview</span>
          <span className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" aria-hidden="true">→</span>
        </a>
        <a
          href="/v1/agents/create-new-agent"
          className="group flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-950/30 transition-colors"
        >
          <span className="text-gray-800 dark:text-gray-200 font-medium">Create a New Agent</span>
          <span className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" aria-hidden="true">→</span>
        </a>
        <a
          href="/v1/agents/agent-visual-builder"
          className="group flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-950/30 transition-colors"
        >
          <span className="text-gray-800 dark:text-gray-200 font-medium">Agent Visual Builder</span>
          <span className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" aria-hidden="true">→</span>
        </a>
        <a
          href="/v1/agents/edit-agent"
          className="group flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-950/30 transition-colors"
        >
          <span className="text-gray-800 dark:text-gray-200 font-medium">Editing an Agent</span>
          <span className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" aria-hidden="true">→</span>
        </a>
        <a
          href="/v1/agents/batch-processing"
          className="group flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-950/30 transition-colors"
        >
          <span className="text-gray-800 dark:text-gray-200 font-medium">Batch Processing</span>
          <span className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" aria-hidden="true">→</span>
        </a>
        <a
          href="/v1/agents/agent-services"
          className="group flex items-center justify-between gap-3 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/40 dark:hover:bg-blue-950/30 transition-colors"
        >
          <span className="text-gray-800 dark:text-gray-200 font-medium">Services Catalog</span>
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