import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { PageFrame, FrameSection } from "@/components/page-frame"
import { ModelEncyclopediaProvider } from "@/components/model-encyclopedia"
import { ModelCatalog, type ModelGroup } from "@/components/model-catalog"
import { ArrowRight, Info } from "lucide-react"

// Parameter lookup (in billions). Anything not listed renders as "NA".
const PARAM_MAP: Record<string, string> = {
  "slim-ner-tool": "1.1", "slim-sentiment-tool": "1.1", "slim-emotions-tool": "1.1", "slim-ratings-tool": "1.1", 
  "slim-intent-tool": "1.1", "slim-nli-tool": "1.1", "slim-topics-tool": "1.1", "slim-tags-tool": "1.1", 
  "slim-sql-tool": "1.1", "slim-category-tool": "1.1", "slim-xsum-tool": "1.1", "slim-extract-tool": "1.1", 
  "slim-extract-phi-3-gguf": "3.8", "slim-extract-qwen-1.5b-gguf": "1.5", "slim-extract-qwen-nano-gguf": "0.5", 
  "slim-extract-tiny-tool": "1.1", "slim-summary-tiny-tool": "1.1", "slim-summary-phi-3-gguf": "3.8", 
  "slim-xsum-phi-3-gguf": "3.8", "slim-boolean-tool": "1.1", "slim-boolean-phi-3-gguf": "3.8", "slim-sa-ner-phi-3-gguf": 
  "3.8", "slim-sa-ner-tool": "1.1", "slim-tags-3b-tool": "3", "slim-summary-tool": "1.1", "slim-q-gen-phi-3-tool": "3.8", 
  "slim-q-gen-tiny-tool": "1.1", "slim-qa-gen-tiny-tool": "1.1", "slim-qa-gen-phi-3-tool": "3.8", 
  "qwen-2.5-7b-coder-gguf": "7", "all-mini-lm-L6-v2": "0.02", "all-mpnet-base-v2": "0.1", "industry-bert-insurance": "0.1", 
  "industry-bert-contracts": "0.1", "industry-bert-asset-management": "0.1", "industry-bert-sec": "0.1", 
  "industry-bert-loans": "0.1", "nomic-ai/nomic-embed-text-v1": "0.1", "llama-2-7b-chat-gguf": "7", 
  "dragon-llama-3.1-gguf": "8", "tiny-llama-chat-gguf": "1.1", "qwen3-1.7b-gguf": "1.7", "qwen3-8b-gguf": "8", 
  "qwen3-14b-gguf": "14", "qwen-3.5-4b-gguf": "4", "qwen-3.5-9b-gguf": "9", "qwen-3.5-27b-gguf": "27", 
  "qwen-3.5-35b-a3b-gguf": "35", "qwen2.5-32b-gguf": "32", "qwen2.5-72b-gguf": "72", "deepseek-qwen-14b-gguf": "14", 
  "deepseek-qwen-7b-gguf": "7", "phi-3-gguf": "3.8", "phi-3.5-gguf": "3.8", "phi-4-gguf": "14", "phi-4-mini-gguf": "3.8", 
  "phi-4-mini-reasoning-gguf": "3.8", "mistral-small-3.2-24b-gguf": "24", "ministral-3-14b-gguf": "14", 
  "openhermes-2.5-mistral-7b-gguf": "7", "zephyr-7b-beta-gguf": "7", "starling-lm-7b-alpha-gguf": "7", 
  "gemma-3-4b-gguf": "4", "gemma-3-12b-gguf": "12", "gemma-4-4b-gguf": "4", "gemma-4-2b-gguf": "2", 
  "gemma-4-26b-gguf": "26", "gpt-oss-20b-gguf": "20", "olmo-13b-gguf": "13", "granite-4-micro-gguf": "1.1", 
  "liquidai-lfm2-2.6b-gguf": "2.6", "minicpm-2.6-gguf": "4", "gemma-2-9b-instruct-gguf": "9", 
  "gemma-2-27b-instruct-gguf": "27", "llama-3.1-instruct-gguf": "8", "llama-3-8b-instruct-gguf": "8", 
  "llama-3.2-1b-instruct-gguf": "1.1", "llama-3.2-3b-instruct-gguf": "3", "mistral-7b-instruct-v0.3-gguf": "7", 
  "qwen2.5-vl-3b-instruct-gguf": "3", "qwen2-7B-instruct-gguf": "7", "qwen3-4b-instruct-gguf": "4", 
  "qwen2-1.5b-instruct-gguf": "1.5", "qwen2-0.5b-instruct-gguf": "0.5", "qwen-2.5-14b-instruct-gguf": "14", 
  "jina-reranker-tiny-ppt": "0.1", "jina-reranker-turbo-ppt": "0.6", "jina-reranker-tiny-onnx": "0.1", 
  "jina-reranker-turbo-onnx": "0.6", "jina-reranker-v1-turbo-en": "0.6", "jina-reranker-v1-tiny-en": "0.1", 
  "whisper-cpp-base-english": "0.07", "bling-qwen-mini-tool": "1.5", "dragon-qwen-7b-gguf": "7", "bling-phi-3-gguf": "3.8", 
  "bling-phi-3.5-gguf": "3.8", "dragon-mistral-0.3-gguf": "7", "dragon-yi-9b-gguf": "9", "dragon-yi-answer-tool": "6", 
  "bling-stablelm-3b-gguf": "3", "bling-answer-tool": "1.1", "dragon-llama-answer-tool": "7", 
  "dragon-mistral-answer-tool": "7", "qwen2.5-vl-3b-instruct-gguf": "3", "qwen3-vl-8b-gguf": "8", 
  "qwen3-vl-4b-gguf": "4", "qwen3-vl-30b-gguf": "30",
}

// Reclassified model catalog (see NVIDIA_MODELS.md)
const MODEL_GROUPS: ModelGroup[] = [
  {  
    group: "All Supported Models",
    blurb: "Models optimized for NVIDIA GPUs and accelerators",
    sections: [
      {
        type: "Agentic",
        models: [
          "slim-ner-tool", "slim-sentiment-tool", "slim-emotions-tool", "slim-ratings-tool", "slim-intent-tool", 
          "slim-nli-tool", "slim-topics-tool", "slim-tags-tool", "slim-sql-tool", "slim-category-tool", 
          "slim-xsum-tool", "slim-extract-tool", "slim-extract-phi-3-gguf", "slim-extract-qwen-1.5b-gguf", 
          "slim-extract-qwen-nano-gguf", "slim-extract-tiny-tool", "slim-summary-tiny-tool", "slim-summary-phi-3-gguf", 
          "slim-xsum-phi-3-gguf", "slim-boolean-tool", "slim-boolean-phi-3-gguf", "slim-sa-ner-phi-3-gguf", 
          "slim-sa-ner-tool", "slim-tags-3b-tool", "slim-summary-tool", "slim-q-gen-phi-3-tool", "slim-q-gen-tiny-tool", 
          "slim-qa-gen-tiny-tool", "slim-qa-gen-phi-3-tool",
        ],
      },
      {
        type: "Cloud",
        models: [
          "claude-opus-4-5", "claude-haiku-4-5", "claude-sonnet-4-5", "claude-sonnet-4-20250514", 
          "claude-opus-4-20250514", "gemini-3-pro-preview", "gemini-3-flash-preview", "gemini-2.5-pro", 
          "gemini-2.5-flash", "gemini-2.5-flash-lite", "gpt-5.2-pro", "gpt-5.2", "gpt-5-mini", "gpt-5-nano", "gpt-4.1",
        ],
      },
      { type: "Coding", models: ["qwen-2.5-7b-coder-gguf"] },
      {
        type: "Embedding",
        models: [
          "all-mini-lm-L6-v2", "all-mpnet-base-v2", "industry-bert-insurance", "industry-bert-contracts", 
          "industry-bert-asset-management", "industry-bert-sec", "industry-bert-loans", "nomic-ai/nomic-embed-text-v1",
        ],
      },
      {
        type: "General Chat",
        models: [
          "llama-2-7b-chat-gguf", "dragon-llama-3.1-gguf", "tiny-llama-chat-gguf", "qwen3-1.7b-gguf", "qwen3-8b-gguf", 
          "qwen3-14b-gguf", "qwen-3.5-4b-gguf", "qwen-3.5-9b-gguf", "qwen-3.5-27b-gguf", "qwen-3.5-35b-a3b-gguf", 
          "qwen2.5-32b-gguf", "qwen2.5-72b-gguf", "deepseek-qwen-14b-gguf", "deepseek-qwen-7b-gguf", "phi-3-gguf", 
          "phi-3.5-gguf", "phi-4-gguf", "phi-4-mini-gguf", "phi-4-mini-reasoning-gguf", "mistral-small-3.2-24b-gguf", 
          "ministral-3-14b-gguf", "openhermes-2.5-mistral-7b-gguf", "zephyr-7b-beta-gguf", "starling-lm-7b-alpha-gguf", 
          "gemma-3-4b-gguf", "gemma-3-12b-gguf", "gemma-4-4b-gguf", "gemma-4-2b-gguf", "gemma-4-26b-gguf", 
          "gpt-oss-20b-gguf", "olmo-13b-gguf", "granite-4-micro-gguf", "liquidai-lfm2-2.6b-gguf", "minicpm-2.6-gguf",
        ],
      },
      {
        type: "Instruct",
        models: [
          "gemma-2-9b-instruct-gguf", "gemma-2-27b-instruct-gguf", "llama-3.1-instruct-gguf", "llama-3-8b-instruct-gguf", 
          "llama-3.2-1b-instruct-gguf", "llama-3.2-3b-instruct-gguf", "mistral-7b-instruct-v0.3-gguf", 
          "qwen2.5-vl-3b-instruct-gguf", "qwen2-7B-instruct-gguf", "qwen3-4b-instruct-gguf", "qwen2-1.5b-instruct-gguf", 
          "qwen2-0.5b-instruct-gguf", "qwen-2.5-14b-instruct-gguf",
        ],
      },
      {
        type: "Re-ranker",
        models: [
          "jina-reranker-tiny-ppt", "jina-reranker-turbo-ppt", "jina-reranker-tiny-onnx", "jina-reranker-turbo-onnx", 
          "jina-reranker-v1-turbo-en", "jina-reranker-v1-tiny-en",
        ],
      },
      { type: "Speech-to-text", models: ["whisper-cpp-base-english"] },
      {
        type: "Question-answer",
        models: [
          "bling-qwen-mini-tool", "dragon-qwen-7b-gguf", "bling-phi-3-gguf", "bling-phi-3.5-gguf", 
          "dragon-mistral-0.3-gguf", "dragon-yi-9b-gguf", "dragon-yi-answer-tool", "bling-stablelm-3b-gguf", 
          "bling-answer-tool", "dragon-llama-answer-tool", "dragon-mistral-answer-tool",
        ],
      },
      { type: "Vision", models: ["qwen2.5-vl-3b-instruct-gguf", "qwen3-vl-8b-gguf", "qwen3-vl-4b-gguf", "qwen3-vl-30b-gguf"] },
    ],
  },
]

const TOTAL_MODELS = MODEL_GROUPS.reduce(
  (sum, g) => sum + g.sections.reduce((s, sec) => s + sec.models.length, 0),
  0,
)

export default function NVIDIASupportedModelsPage() {
  return (
    <ModelEncyclopediaProvider>
      <PageFrame>
        {/* Hero */}
        <FrameSection>
          <div className="px-6 py-16 md:py-20">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>NVIDIA Supported Models</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="mt-8 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-brand">Hardware optimized</span>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                NVIDIA Supported Models
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground">
                A complete catalog of {TOTAL_MODELS} AI models optimized optimized for NVIDIA GPUs and accelerators.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                Hover the Encyclopedia tab on the right, or tap any
                <Info className="inline h-4 w-4" /> icon to learn what a model type does.
              </span>
            </div>
          </div>
        </FrameSection>

        {/* Stats */}
        <FrameSection>
          <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-3">
            {[
              { value: `${TOTAL_MODELS}`, label: "Optimized models" },
              { value: "CUDA", label: "Runtime" },
              { value: "NVIDIA GPU", label: "Hardware target" },
            ].map((stat) => (
              <div key={stat.label} className="bg-background px-6 py-10 text-center">
                <div className="text-3xl font-semibold tracking-tight md:text-4xl">{stat.value}</div>
                <div className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FrameSection>

        {/* Optimization features */}
        <FrameSection>
          <div className="px-6 py-16 md:py-20">
            <span className="font-mono text-xs uppercase tracking-widest text-brand">Why NVIDIA</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              NVIDIA optimization features
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              These models are optimized for enhanced performance on NVIDIA GB10 devices (DGX Spark). 
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px border-t border-border bg-border md:grid-cols-2">
            <div className="bg-background p-8">
              <h3 className="text-lg font-semibold">Performance benefits</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Optimized for NVIDIA GPUs such as GB10, GeForce, and RTX</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Enhanced AI inference performance with NVIDIA GPUs</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> High-throughput execution for demanding AI workloads</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Hardware-specific optimizations for latest NVIDIA GPUs</li>
              </ul>
            </div>
            <div className="bg-background p-8">
              <h3 className="text-lg font-semibold">Supported hardware</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> NVIDIA DGX Spark</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> NVIDIA GB10 GPUs</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> NVIDIA GeForce GPUs</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> NVIDIA RTX GPUs</li>
              </ul>
            </div>
          </div>
        </FrameSection>

        {/* Searchable model catalog */}
        <ModelCatalog groups={MODEL_GROUPS} params={PARAM_MAP} />

        {/* Getting started + CTA */}
        <FrameSection last>
          <div className="px-6 py-16 md:py-20">
            <span className="font-mono text-xs uppercase tracking-widest text-brand">Next steps</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Getting started with NVIDIA models
            </h2>
            <ol className="mt-6 max-w-2xl space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-mono text-sm text-brand">01</span>
                Ensure you have a device with compatible NVIDIA GPU. 
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-sm text-brand">02</span>
                Select models optimized for NVIDIA from the Models section.
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-sm text-brand">03</span>
                The system automatically applies NVIDIA optimizations when available.
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-sm text-brand">04</span>
                Monitor performance improvements in the system metrics.
              </li>
            </ol>

            <div className="mt-10 flex flex-col items-start justify-between gap-4 border border-border bg-muted/20 p-6 sm:flex-row sm:items-center">
              <div>
                <p className="font-semibold">Not sure what your hardware supports?</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Check the system requirements to find the right models for your machine.
                </p>
              </div>
              <a
                href="/system-configuration"
                className="group inline-flex shrink-0 items-center border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-background"
              >
                Check system requirements
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              For NVIDIA-specific optimization questions, contact our technical support team at{" "}
              <code className="bg-muted px-1.5 py-0.5 font-mono text-xs">support@aibloks.com</code>.
            </p>
          </div>
        </FrameSection>
      </PageFrame>
    </ModelEncyclopediaProvider>
  )
}
