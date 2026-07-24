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
  // Qwen
  "qwen2-vl-2b-instruct-ov": "2", "qwen2-vl-7b-instruct-ov": "7", "bling-qwen-500m-ov": "0.5",
  "bling-qwen-1.5b-ov": "1.5", "dragon-qwen-7b-ov": "7", "slim-extract-qwen-0.5b-ov": "0.5",
  "slim-extract-qwen-1.5b-ov": "1.5", "qwen2-7b-instruct-ov": "7", "qwen2-1.5b-instruct-ov": "1.5",
  "qwen2-0.5b-chat-ov": "0.5", "qwen2.5-1.5b-instruct-ov": "1.5", "qwen3-8b-ov": "8",
  "qwen3-1.7b-ov": "1.7", "qwen3-4b-ov": "4", "qwen3-14b-ov": "14", "qwen2.5-0.5b-instruct-ov": "0.5",
  "qwen2.5-3b-instruct-ov": "3", "qwen2.5-14b-instruct-ov": "14", "qwen2.5-32b-instruct-ov": "32",
  "qwen2.5-72b-instruct-ov": "72", "qwen2.5-coder-7b-instruct-ov": "7", "bling-qwen-mini-tool": "1.5",
  "bling-qwen-0.5b-gguf": "0.5", "dragon-qwen-7b-gguf": "7", "qwen2-7B-instruct-gguf": "7",
  "qwen3-1.7b-gguf": "1.7", "qwen3-4b-instruct-gguf": "4", "qwen3-8b-gguf": "8", "qwen3-14b-gguf": "14",
  "qwen2-1.5b-instruct-gguf": "1.5", "qwen2-0.5b-instruct-gguf": "0.5", "slim-extract-qwen-1.5b-gguf": "1.5",
  "slim-extract-qwen-nano-gguf": "0.5", "qwen-2.5-7b-coder-gguf": "7", "qwen-2.5-14b-instruct-gguf": "14",
  "deepseek-qwen-14b-gguf": "14", "deepseek-qwen-7b-gguf": "7", "qwen2.5-32b-gguf": "32",
  "slim-sql-qwen-base-ov": "2",
  // Llama
  "llama-11b-vision-instruct-ov": "11", "bling-tiny-llama-ov": "1.1", "bling-tiny-llama-npu-ov": "1.1",
  "dragon-llama2-ov": "7", "llama-2-chat-ov": "7", "llama-2-13b-chat-ov": "13", "tiny-llama-chat-ov": "1.1",
  "llama-3.1-instruct-ov": "8", "llama-3.1-8b-instruct-npu-ov": "8", "nvidia-llama3-chatqa-1.5-8b-ov": "8",
  "dolphin-2.9.4-llama3.1-8b-ov": "8", "llama-3.2-3b-instruct-ov": "3", "llama-3.2-3b-instruct-npu-ov": "3",
  "llama-3.2-1b-instruct-ov": "1.1", "llama-3.2-1b-instruct-npu-ov": "1.1", "bling-tiny-llama-onnx": "1.1",
  "llama-3.2-3b-onnx-qnn": "3", "llama-2-chat-onnx": "7", "llama-3.1-instruct-onnx": "8",
  "llama-3.2-1b-instruct-onnx": "1.3", "llama-3.2-3b-instruct-onnx": "3", "dragon-llama-3.1-gguf": "8",
  "dragon-llama-answer-tool": "7", "llama-3.1-instruct-gguf": "8", "llama-3.2-1b-instruct-gguf": "1.3",
  "llama-3.2-3b-instruct-gguf": "3",
  // Phi
  "bling-phi-3-ov": "3.8", "slim-xsum-phi-3-ov": "3.8", "slim-boolean-phi-3-ov": "3.8",
  "slim-sa-ner-phi-3-ov": "3.8", "slim-summary-phi-3-ov": "3.8", "slim-sql-phi-3-ov": "3.8",
  "slim-extract-phi-3-ov": "3.8", "phi-3-ov": "3.8", "phi-3-npu-ov": "3.8", "phi-4-ov": "14",
  "phi-4-mini-ov": "4", "phi-4-mini-npu-ov": "4", "phi-4-npu-ov": "14", "bling-phi-3-onnx": "3.8",
  "phi-3-onnx": "3.8", "phi-3-vision-onnx": "3.8", "slim-summary-phi-3-onnx": "3.8",
  "slim-extract-phi-3-onnx": "3.8", "slim-boolean-phi-3-onnx": "3.8", "bling-phi-3-gguf": "3.8",
  "bling-phi-3.5-gguf": "3.8", "phi-3.5-gguf": "3.8", "phi-4-gguf": "14", "phi-4-mini-gguf": "4",
  "phi-4-mini-reasoning-gguf": "4", "phi-3-gguf": "3.8", "slim-extract-phi-3-gguf": "3.8",
  "slim-xsum-phi-3-gguf": "3.8", "slim-boolean-phi-3-gguf": "3.8", "slim-sa-ner-phi-3-gguf": "3.8",
  "slim-q-gen-phi-3-tool": "3.8", "slim-qa-gen-phi-3-tool": "3.8", "slim-summary-phi-3-gguf": "1.1",
  // Mistral
  "dragon-mistral-ov": "7.3", "dragon-mistral-0.3-ov": "7.3", "mistral-7b-instruct-v0.3-ov": "7.3",
  "mistral-7b-v0.3-npu-ov": "7.3", "mistral-small-instruct-2409-ov": "22", "mistral-nemo-instruct-2407-ov": "12",
  "mistral-7b-instruct-v0.2-ov": "7.3", "zephyr-mistral-7b-chat-ov": "7.3", "teknium-open-hermes-2.5-mistral-ov": "7.3",
  "dolphin-2.9.3-mistral-7b-32k-ov": "7.3", "dragon-mistral-0.3-onnx": "7.3", "mistral-7b-instruct-v0.3-onnx": "7.3",
  "dragon-mistral-0.3-gguf": "7.3", "mistral-3.2-24b-gguf": "24", "openhermes-2.5-mistral-7b-gguf": "7.3",
  "zephyr-7b-beta-gguf": "7.3", "starling-lm-7b-alpha-gguf": "7", "dragon-mistral-answer-tool": "7.3",
  "mistral-7b-instruct-v0.3-gguf": "7.3",
  // Yi
  "dragon-yi-6b-ov": "5.8", "dragon-yi-9b-ov": "8.8", "yi-9b-chat-ov": "8.8", "yi-9b-npu-ov": "8.8",
  "yi-6b-1.5v-chat-ov": "5.8", "dragon-yi-9b-gguf": "8.8", "dragon-yi-answer-tool": "5.8",
  // Slim
  "slim-sentiment-ov": "1.1", "slim-sentiment-npu-ov": "1.1", "slim-extract-tiny-ov": "1.1",
  "slim-extract-tiny-npu-ov": "1.1", "slim-summary-tiny-ov": "1.1", "slim-summary-tiny-npu-ov": "1.1",
  "slim-sql-ov": "1.1", "slim-sql-npu-ov": "1.1", "slim-emotions-ov": "1.1", "slim-emotions-npu-ov": "1.1",
  "slim-topics-ov": "1.1", "slim-topics-npu-ov": "1.1", "slim-ner-ov": "1.1", "slim-ner-npu-ov": "1.1",
  "slim-intent-ov": "1.1", "slim-category-ov": "1.1", "slim-intent-npu-ov": "1.1", "slim-tags-ov": "1.1",
  "slim-tags-npu-ov": "1.1", "slim-ratings-ov": "1.1", "slim-ratings-npu-ov": "1.1", "slim-q-gen-tiny-ov": "1.1",
  "slim-qa-gen-tiny-ov": "1.1", "slim-sentiment-onnx": "1.1", "slim-extract-tiny-onnx": "1.1",
  "slim-summary-tiny-onnx": "1.1", "slim-sql-onnx": "1.1", "slim-emotions-onnx": "1.1", "slim-topics-onnx": "1.1",
  "slim-ner-onnx": "1.1", "slim-intent-onnx": "1.1", "slim-tags-onnx": "1.1", "slim-ratings-onnx": "1.1",
  "slim-ner-tool": "1.1", "slim-sentiment-tool": "1.1", "slim-emotions-tool": "1.1", "slim-ratings-tool": "1.1",
  "slim-intent-tool": "1.1", "slim-nli-tool": "1.1", "slim-topics-tool": "1.1", "slim-tags-tool": "1.1",
  "slim-sql-tool": "1.1", "bling-answer-tool": "1.1", "slim-category-tool": "1.1", "slim-xsum-tool": "1.1",
  "slim-extract-tool": "2.8", "slim-extract-tiny-tool": "1.1", "slim-summary-tiny-tool": "1.1",
  "slim-boolean-tool": "2.8", "slim-sa-ner-tool": "2.8", "slim-tags-3b-tool": "2.8", "slim-summary-tool": "2.8",
  "slim-q-gen-tiny-tool": "1.1", "slim-qa-gen-tiny-tool": "1.1",
  // StableLM
  "stablelm-zephyr-3b-ov": "2.8", "stablelm-2-zephyr-1_6b-ov": "1.6", "stablelm-2-12b-chat-ov": "12",
  "bling-stablelm-3b-gguf": "2.8",
  // Gemma
  "gemma-7b-it-ov": "7", "codegemma-7b-it-ov": "7", "gemma-2b-it-ov": "2", "gemma-2b-it-onnx": "2",
  "gemma-3-4b-gguf": "4", "gemma-3-12b-gguf": "12", "gemma-2-9b-instruct-gguf": "9", "gemma-2-27b-instruct-gguf": "27",
  // Specialized
  "intel-neural-chat-7b-v3-2-ov": "7", "tiny-dolphin-2.8-1.1b-ov": "1.1", "dreamgen-wizardlm-2-7b-ov": "7",
  "openchat-3.6-8b-20240522-ov": "8", "mathstral-7b-ov": "7.3",
}

// Reclassified model catalog (see INTEL_MODELS.md)
const MODEL_GROUPS: ModelGroup[] = [
  {
    group: "CPU Models",
    blurb: "GGUF and tool models that run on the CPU alone — no GPU or NPU required.",
    sections: [
      {
        type: "Agentic",
        models: [
          "slim-extract-phi-3-gguf", "slim-extract-qwen-1.5b-gguf", "slim-extract-qwen-nano-gguf",
          "slim-summary-phi-3-gguf", "slim-xsum-phi-3-gguf", "slim-boolean-phi-3-gguf",
          "slim-sa-ner-phi-3-gguf", "slim-q-gen-phi-3-tool", "slim-qa-gen-phi-3-tool", "slim-ner-tool",
          "slim-sentiment-tool", "slim-emotions-tool", "slim-ratings-tool", "slim-intent-tool",
          "slim-nli-tool", "slim-topics-tool", "slim-tags-tool", "slim-sql-tool", "slim-category-tool",
          "slim-xsum-tool", "slim-extract-tool", "slim-extract-tiny-tool", "slim-summary-tiny-tool",
          "slim-boolean-tool", "slim-sa-ner-tool", "slim-tags-3b-tool", "slim-summary-tool",
          "slim-q-gen-tiny-tool", "slim-qa-gen-tiny-tool",
        ],
      },
      { type: "Coding", models: ["qwen-2.5-7b-coder-gguf"] },
      {
        type: "General Chat",
        models: [
          "qwen3-1.7b-gguf", "qwen3-8b-gguf", "qwen3-14b-gguf", "qwen2.5-32b-gguf", "deepseek-qwen-14b-gguf",
          "deepseek-qwen-7b-gguf", "dragon-llama-3.1-gguf", "phi-3-gguf", "phi-3.5-gguf", "phi-4-gguf",
          "phi-4-mini-gguf", "phi-4-mini-reasoning-gguf", "mistral-3.2-24b-gguf", "openhermes-2.5-mistral-7b-gguf",
          "zephyr-7b-beta-gguf", "starling-lm-7b-alpha-gguf", "gemma-3-4b-gguf", "gemma-3-12b-gguf",
        ],
      },
      {
        type: "Instruct",
        models: [
          "qwen2-7B-instruct-gguf", "qwen3-4b-instruct-gguf", "qwen2-1.5b-instruct-gguf",
          "qwen2-0.5b-instruct-gguf", "qwen-2.5-14b-instruct-gguf", "mistral-7b-instruct-v0.3-gguf",
          "gemma-2-9b-instruct-gguf", "gemma-2-27b-instruct-gguf",
        ],
      },
      {
        type: "Question-answer",
        models: [
          "bling-qwen-0.5b-gguf", "dragon-qwen-7b-gguf", "bling-phi-3-gguf", "bling-phi-3.5-gguf",
          "dragon-mistral-0.3-gguf", "dragon-yi-9b-gguf", "bling-stablelm-3b-gguf", "bling-qwen-mini-tool",
          "bling-answer-tool", "dragon-mistral-answer-tool", "dragon-yi-answer-tool", "dragon-llama-answer-tool",
          "bling-tiny-llama-onnx", "bling-phi-3-onnx", "bling-phi-3-ov", "bling-qwen-500m-ov",
          "bling-qwen-1.5b-ov", "bling-tiny-llama-ov",
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
          "slim-sentiment-onnx", "slim-extract-tiny-onnx", "slim-summary-tiny-onnx", "slim-sql-onnx",
          "slim-emotions-onnx", "slim-topics-onnx", "slim-ner-onnx", "slim-intent-onnx", "slim-tags-onnx",
          "slim-ratings-onnx", "slim-summary-phi-3-onnx", "slim-extract-phi-3-onnx", "slim-boolean-phi-3-onnx",
          "slim-sentiment-ov", "slim-xsum-phi-3-ov", "slim-boolean-phi-3-ov", "slim-sa-ner-phi-3-ov",
          "slim-summary-phi-3-ov", "slim-sql-qwen-base-ov", "slim-sql-phi-3-ov", "slim-extract-phi-3-ov",
          "slim-extract-tiny-ov", "slim-extract-qwen-0.5b-ov", "slim-extract-qwen-1.5b-ov", "slim-summary-tiny-ov",
          "slim-sql-ov", "slim-emotions-ov", "slim-topics-ov", "slim-ner-ov", "slim-intent-ov", "slim-category-ov",
          "slim-tags-ov", "slim-ratings-ov", "slim-q-gen-tiny-ov", "slim-qa-gen-tiny-ov",
        ],
      },
      { type: "Coding", models: ["qwen2.5-coder-7b-instruct-ov", "codegemma-7b-it-ov"] },
      {
        type: "Embedding",
        models: [
          "industry-bert-contracts-ov", "industry-bert-insurance-ov", "industry-bert-asset-management-ov",
          "industry-bert-sec-ov", "industry-bert-loans-ov", "all-mini-lm-l6-v2-ov", "all-mpnet-base-v2-ov",
          "paraphrase-multilingual-MiniLM-L12-v2-ov", "gte-small-ov", "gte-base-ov", "gte-large-ov",
          "bge-small-en-v1.5-ov", "bge-base-en-v1.5-ov", "bge-large-en-v1.5-ov",
        ],
      },
      {
        type: "General Chat",
        models: [
          "llama-2-chat-onnx", "qwen2-0.5b-chat-ov", "phi-3-ov", "phi-4-ov", "phi-4-mini-ov", "qwen3-8b-ov",
          "qwen3-1.7b-ov", "qwen3-4b-ov", "qwen3-14b-ov", "llama-2-chat-ov", "llama-2-13b-chat-ov",
          "tiny-llama-chat-ov", "dolphin-2.9.3-mistral-7b-32k-ov", "dolphin-2.9.4-llama3.1-8b-ov",
          "zephyr-mistral-7b-chat-ov", "teknium-open-hermes-2.5-mistral-ov", "yi-9b-chat-ov", "yi-6b-1.5v-chat-ov",
          "stablelm-zephyr-3b-ov", "stablelm-2-zephyr-1_6b-ov", "stablelm-2-12b-chat-ov",
          "intel-neural-chat-7b-v3-2-ov", "tiny-dolphin-2.8-1.1b-ov", "dreamgen-wizardlm-2-7b-ov",
          "openchat-3.6-8b-20240522-ov", "lcm-dreamshaper-ov",
        ],
      },
      {
        type: "Instruct",
        models: [
          "llama-3.1-instruct-onnx", "llama-3.2-1b-instruct-onnx", "llama-3.2-3b-instruct-onnx", "phi-3-onnx",
          "mistral-7b-instruct-v0.3-onnx", "gemma-2b-it-onnx", "qwen2-vl-2b-instruct-ov", "qwen2-vl-7b-instruct-ov",
          "qwen2-7b-instruct-ov", "qwen2-1.5b-instruct-ov", "qwen2.5-1.5b-instruct-ov", "qwen2.5-0.5b-instruct-ov",
          "qwen2.5-3b-instruct-ov", "qwen2.5-14b-instruct-ov", "qwen2.5-32b-instruct-ov", "qwen2.5-72b-instruct-ov",
          "llama-3.1-instruct-ov", "llama-3.2-3b-instruct-ov", "llama-3.2-1b-instruct-ov",
          "mistral-7b-instruct-v0.3-ov", "mistral-small-instruct-2409-ov", "mistral-nemo-instruct-2407-ov",
          "mistral-7b-instruct-v0.2-ov", "gemma-7b-it-ov", "gemma-2b-it-ov",
        ],
      },
      { type: "Math", models: ["mathstral-7b-ov"] },
      {
        type: "Prompt Safety",
        models: [
          "protectai-prompt-injection-onnx", "valurank-bias-onnx", "unitary-toxic-roberta-onnx",
          "protectai-prompt-injection-ov", "malicious-url-detector-ov", "xlm-roberta-language-detector-ov",
          "valurank-bias-ov", "unitary-toxic-roberta-ov",
        ],
      },
      {
        type: "Question-answer",
        models: [
          "dragon-mistral-0.3-onnx", "dragon-qwen-7b-ov", "dragon-llama2-ov", "nvidia-llama3-chatqa-1.5-8b-ov",
          "dragon-mistral-ov", "dragon-mistral-0.3-ov",
        ],
      },
      {
        type: "Re-ranker",
        models: [
          "jina-reranker-tiny-onnx", "jina-reranker-turbo-onnx", "jina-reranker-v1-tiny-en-ov",
          "jina-reranker-v1-turbo-en-ov",
        ],
      },
      { type: "Text-to-speech", models: ["speech-t5-tts-ov"] },
      { type: "Vision", models: ["phi-3-vision-onnx", "llama-11b-vision-instruct-ov"] },
    ],
  },
  {
    group: "NPU Models",
    blurb: "Models designed to run on Neural Processing Units for efficient, low-power inference.",
    sections: [
      {
        type: "NPU Models",
        models: [
          "bling-tiny-llama-npu-ov", "llama-3.1-8b-instruct-npu-ov", "llama-3.2-3b-instruct-npu-ov",
          "llama-3.2-1b-instruct-npu-ov", "phi-3-npu-ov", "phi-4-mini-npu-ov", "phi-4-npu-ov",
          "mistral-7b-v0.3-npu-ov", "yi-9b-npu-ov", "slim-sentiment-npu-ov", "slim-extract-tiny-npu-ov",
          "slim-summary-tiny-npu-ov", "slim-sql-npu-ov", "slim-emotions-npu-ov", "slim-topics-npu-ov",
          "slim-ner-npu-ov", "slim-intent-npu-ov", "slim-tags-npu-ov", "slim-ratings-npu-ov",
          "llama-3.2-3b-onnx-qnn", "phi-3.5-onnx-qnn",
        ],
      },
    ],
  },
]

const TOTAL_MODELS = MODEL_GROUPS.reduce(
  (sum, g) => sum + g.sections.reduce((s, sec) => s + sec.models.length, 0),
  0,
)

export default function IntelSupportedModelsPage() {
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
                  <BreadcrumbPage>Intel Supported Models</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="mt-8 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-brand">Hardware optimized</span>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                Intel Supported Models
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground">
                A complete catalog of {TOTAL_MODELS} AI models optimized for Intel processors with the OpenVINO
                runtime — enhanced performance across Intel CPUs, GPUs, and NPUs.
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
              { value: "OpenVINO", label: "Runtime" },
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
            <span className="font-mono text-xs uppercase tracking-widest text-brand">Why Intel</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Intel optimization features
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              OpenVINO-optimized models deliver faster inference with a smaller footprint on Intel hardware.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px border-t border-border bg-border md:grid-cols-2">
            <div className="bg-background p-8">
              <h3 className="text-lg font-semibold">Performance benefits</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Optimized for Intel CPU, GPU, and NPU architectures</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Enhanced inference speed with the OpenVINO runtime</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Reduced memory footprint and power consumption</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Hardware-specific optimizations for the latest Intel chips</li>
              </ul>
            </div>
            <div className="bg-background p-8">
              <h3 className="text-lg font-semibold">Supported hardware</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Intel Core (Meteor Lake, Lunar Lake, Arrow Lake)</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Intel Xeon processors</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Intel Arc GPUs</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Intel Neural Processing Units (NPUs)</li>
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
              Getting started with Intel models
            </h2>
            <ol className="mt-6 max-w-2xl space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-mono text-sm text-brand">01</span>
                Ensure you have an Intel processor with OpenVINO support.
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-sm text-brand">02</span>
                Select models with the <code className="bg-muted px-1 py-0.5 font-mono text-xs">-ov</code> suffix from the Models section.
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-sm text-brand">03</span>
                The system automatically applies Intel optimizations when available.
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
              For Intel-specific optimization questions, contact our technical support team at{" "}
              <code className="bg-muted px-1.5 py-0.5 font-mono text-xs">support@aibloks.com</code>.
            </p>
          </div>
        </FrameSection>
      </PageFrame>
    </ModelEncyclopediaProvider>
  )
}
