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
  // CPU
  "slim-sentiment-tool": "1.1", "slim-extract-tool": "1.1", "slim-summary-tool": "1.1", "slim-boolean-tool": "1.1", 
  "slim-tags-tool": "1.1", "slim-xsum-tool": "1.1", "slim-emotions-tool": "1.1", "slim-topics-tool": "1.1", 
  "slim-sql-tool": "1.1", "slim-extract-qwen-1.5b": "1.5", "slim-ner-tool": "1.1", "slim-sa-ner-tool": "1.1", 
  "slim-tags-3b-tool": "3", "slim-extract-tiny-tool": "1.1", "slim-ratings-tool": "1.1", "slim-intent-tool": "1.1", 
  "slim-category-tool": "1.1", "slim-nli-tool": "1.1", "slim-q-gen-phi-3-tool": "3.8", "slim-summary-tiny-tool": "1.1", 
  "slim-qa-gen-phi-3-tool": "3.8", "slim-qa-gen-tiny-tool": "1.1", "slim-summary-tiny": "1.1", "qwen2.5-7b-coder": "7",
  "tiny-llama-chat": "1.1", "llama-2-7b-chat": "7", "qwen2.5-32b": "32", "bling-qwen-0.5b": "0.5", 
  "bling-qwen-1.5b": "1.5", "openhermes-2.5-mistral": "7", "dragon-llama-3.1": "8", "zephyr-7b-beta": "7", 
  "starling-lm-7b-alpha": "7", "miniCPM-V-2_6": "4", "qwen-2.5-14b-instruct": "14", "qwen2-7B-instruct": "7", 
  "qwen-2-0.5b-instruct": "0.5", "qwen2-1.5-instruct": "1.5", "llama-3.1-instruct": "8", "llama-3.2-ib-instruct": "3", 
  "llama-3.2-1b-instruct": "1.1", "llama-3-8b-instruct": "8", "mistral-7b-instruct-v0.3": "7", "gemma-2-9b-instruct": "9", 
  "gemma-2-27b-instruct": "27", "gemma-2b-it": "2", "dragon-yi-answer-tool": "6", "dragon-llama-answer-tool": "7", 
  "dragon-mistral-answer-tool": "7", "bling-answer-tool": "1.1", "bling-tiny-llama": "1.1", "bling-phi-3": "3.8", 
  "bling-phi-3.5": "3.8", "dragon-mistral-0.3": "7", "dragon-yi-9b": "9", "dragon-qwen-7b": "7", "bling-stablelm-3b": "3",
  // GPU/CPU/NPU
  "slim-extract-phi-3": "3.8", "slim-boolean-phi-3": "3.8", "slim-summary-phi-3": "3.8", "slim-emotions": "1.1",
  "slim-topics": "1.1", "slim-sql": "1.1", "slim-sentiment": "1.1", "slim-extract-tiny": "1.1", 
  "slim-intent": "1.1", "slim-tags": "1.1", "slim-ratings": "1.1", "slim-ner": "1.1", "slim-extract-qwen-nano": "0.5", 
  "slim-sa-ner-phi-3": "3.8","slim-xsum-phi-3": "3.8", "llama-2-chat": "7", "phi-3": "3.8", "phi-3.5": "3.8", 
  "llama-3.2-3b-instruct-onnx": "3", "protectai-prompt-injection": "0.3", "unitary-unbiased-toxic-roberta": "0.1", 
  "valurank-distilroberta-bias": "0.1", "dragon-mistral-0.3": "7", "dragon-yi-9b": "9", "dragon-qwen-7b": "7", 
  "jina-reranker-turbo": "0.6", "jina-reranker-tiny": "0.1", "phi-3-vision": "4.2",
  // NPU - General Chat
  "llama-3.2-3b-onnx-qnn": "3",
}

// Reclassified model catalog (see QUALCOMM_MODELS.md)
const MODEL_GROUPS: ModelGroup[] = [
  {
    group: "CPU Models",
    blurb: "GGUF and tool models that run on the CPU alone — no GPU or NPU required.",
    sections: [
      {
        type: "Agentic",
        models: [
          "slim-sentiment-tool", "slim-extract-tool", "slim-summary-tool", "slim-boolean-tool", "slim-tags-tool", 
          "slim-xsum-tool", "slim-emotions-tool", "slim-topics-tool", "slim-sql-tool", "slim-extract-qwen-1.5b", 
          "slim-ner-tool", "slim-sa-ner-tool", "slim-tags-3b-tool", "slim-extract-tiny-tool", "slim-ratings-tool", 
          "slim-intent-tool", "slim-category-tool", "slim-nli-tool", "slim-q-gen-phi-3-tool", "slim-summary-tiny-tool", 
          "slim-qa-gen-phi-3-tool", "slim-qa-gen-tiny-tool", "slim-summary-tiny",
        ],
      },
      { type: "Coding", models: ["qwen2.5-7b-coder"] },
      {
        type: "General Chat",
        models: [
          "tiny-llama-chat", "llama-2-7b-chat", "qwen2.5-32b", "bling-qwen-0.5b", "bling-qwen-1.5b", 
          "openhermes-2.5-mistral", "dragon-llama-3.1", "zephyr-7b-beta", "starling-lm-7b-alpha", "miniCPM-V-2_6",
        ],
      },
      {
        type: "Instruct",
        models: [
          "qwen-2.5-14b-instruct", "qwen2-7B-instruct", "qwen-2-0.5b-instruct", "qwen2-1.5-instruct", 
          "llama-3.1-instruct", "llama-3.2-ib-instruct", "llama-3.2-1b-instruct", "llama-3-8b-instruct", 
          "mistral-7b-instruct-v0.3", "gemma-2-9b-instruct", "gemma-2-27b-instruct", "gemma-2b-it",
        ],
      },
      {
        type: "Question-answer",
        models: [
          "dragon-yi-answer-tool", "dragon-llama-answer-tool", "dragon-mistral-answer-tool", "bling-answer-tool", 
          "bling-tiny-llama", "bling-phi-3", "bling-phi-3.5", "dragon-mistral-0.3", "dragon-yi-9b", "dragon-qwen-7b", 
          "bling-stablelm-3b",
        ],
      },
    ],
  },
  {
    group: "GPU/CPU/NPU Models",
    blurb: "OpenVINO (OV) and ONNX models that run on the available GPU, CPU, or NPU.",
    sections: [
      {
        type: "Agentic",
        models: [
          "slim-extract-phi-3", "slim-boolean-phi-3", "slim-summary-phi-3", "slim-emotions", "slim-topics", "slim-sql", 
          "slim-sentiment", "slim-extract-tiny", "slim-intent", "slim-tags", "slim-ratings", "slim-ner", 
          "slim-extract-qwen-nano", "slim-sa-ner-phi-3", "slim-xsum-phi-3",
        ],
      },
      { type: "General Chat", models: ["llama-2-chat", "phi-3", "phi-3.5"] },
      {
        type: "Instruct",
        models: [
          "qwen-2.5-14b-instruct", "qwen2-7B-instruct", "qwen-2-0.5b-instruct", "qwen2-1.5-instruct", 
          "llama-3.2-3b-instruct-onnx", "llama-3.1-instruct", "llama-3.2-1b-instruct", "llama-3-8b-instruct", 
          "mistral-7b-instruct-v0.3", "gemma-2b-it",
        ],
      },
      {
        type: "Prompt Safety",
        models: [
          "protectai-prompt-injection", "unitary-unbiased-toxic-roberta", "valurank-distilroberta-bias",
        ],
      },
      { type: "Question-answer", models: ["dragon-mistral-0.3", "dragon-yi-9b", "dragon-qwen-7b"] },
      { type: "Re-ranker", models: ["jina-reranker-turbo", "jina-reranker-tiny"] },
      { type: "Vision", models: ["phi-3-vision"] },
    ],
  },
  {
    group: "NPU Models",
    blurb: "Models designed to run on Neural Processing Units for efficient, low-power inference.",
    sections: [
      { type: "Vision", models: ["llama-3.2-3b-onnx-qnn"] },
    ],
  },
]

const TOTAL_MODELS = MODEL_GROUPS.reduce(
  (sum, g) => sum + g.sections.reduce((s, sec) => s + sec.models.length, 0),
  0,
)

export default function QualcommSupportedModelsPage() {
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
                  <BreadcrumbPage>Qualcomm Supported Models</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="mt-8 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-brand">Hardware optimized</span>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                Qualcomm Supported Models
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground">
                A complete catalog of {TOTAL_MODELS} AI models optimized for Qualcomm Snapdragon processors using QNN 
                runtime.
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
              { value: "QNN SDK", label: "Runtime" },
              { value: "CPU · GPU · NPU", label: "Hardware targets" },
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
            <span className="font-mono text-xs uppercase tracking-widest text-brand">Why Qualcomm</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Qualcomm optimization features
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Snapdragon-optimized models deliver faster inference by leveraging the Qualcomm Neural Network (QNN) SDK across Snapdragon hardware.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px border-t border-border bg-border md:grid-cols-2">
            <div className="bg-background p-8">
              <h3 className="text-lg font-semibold">Performance benefits</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Optimized for Qualcomm Snapdragon architectures</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Enhanced inference speed with QNN runtime</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Power-efficient execution on mobile and edge devices</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Hardware-specific optimizations for Hexagon DSP and Adreno GPU</li>
              </ul>
            </div>
            <div className="bg-background p-8">
              <h3 className="text-lg font-semibold">Supported hardware</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Qualcomm Snapdragon processors</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Hexagon Digital Signal Processors (DSP)</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Adreno GPUs</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Qualcomm AI Engine and NPUs</li>
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
              Getting started with Qualcomm models
            </h2>
            <ol className="mt-6 max-w-2xl space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-mono text-sm text-brand">01</span>
                Ensure you have a Qualcomm Snapdragon processor with QNN support.
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-sm text-brand">02</span>
                Select models optimized for Qualcomm from the Models section.
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-sm text-brand">03</span>
                The system automatically applies Qualcomm optimizations when available.
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
              For Qualcomm-specific optimization questions, contact our technical support team at{" "}
              <code className="bg-muted px-1.5 py-0.5 font-mono text-xs">support@aibloks.com</code>.
            </p>
          </div>
        </FrameSection>
      </PageFrame>
    </ModelEncyclopediaProvider>
  )
}
