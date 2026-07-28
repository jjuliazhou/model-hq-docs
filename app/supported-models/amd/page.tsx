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
  "slim-boolean-phi-3-gguf": "3.8", "slim-extract-phi-3-gguf": "3.8", "slim-extract-qwen-1.5b-gguf": "1.5", 
  "slim-extract-qwen-nano-gguf": "0.5", "slim-sa-ner-phi-3-gguf": "3.8", "slim-summary-phi-3-gguf": "3.8", 
  "slim-xsum-phi-3-gguf": "3.8", "slim-boolean-tool": "1.1", "slim-category-tool": "1.1", "slim-emotions-tool": "1.1", 
  "slim-extract-tool": "1.1", "slim-intent-tool": "1.1", "slim-ner-tool": "1.1", "slim-nli-tool": "1.1", 
  "slim-q-gen-phi-3-tool": "3.8", "slim-q-gen-tiny-tool": "1.1", "slim-qa-gen-phi-3-tool": "3.8", 
  "slim-qa-gen-tiny-tool": "1.1", "slim-ratings-tool": "1.1", "slim-sa-ner-tool": "1.1", "slim-sentiment-tool": "1.1", 
  "slim-sql-tool": "1.1", "slim-summary-tiny-tool": "1.1", "slim-summary-tool": "1.1", "slim-tags-3b-tool": "3", 
  "slim-tags-tool": "1.1", "slim-topics-tool": "1.1", "slim-xsum-tool": "1.1", 
  "qwen2.5-coder-0.5b-instruct-generic-cpu:4-foundry": "0.5", "qwen2.5-coder-1.5b-instruct-generic-cpu:4-foundry": "1.5", 
  "qwen2.5-coder-14b-instruct-generic-cpu:4-foundry": "14", "qwen2.5-coder-7b-instruct-generic-cpu:4-foundry": "7", 
  "qwen-2.5-7b-coder-gguf": "7", "deepseek-r1-distill-qwen-14b-generic-cpu:4-foundry": "14", 
  "deepseek-r1-distill-qwen-7b-generic-cpu:4-foundry": "7", "qwen3-0.6b-generic-cpu:4-foundry": "0.6", 
  "qwen3-1.7b-generic-cpu:2-foundry": "1.7", "qwen3-14b-generic-cpu:2-foundry": "14", "qwen3-4b-generic-cpu:3-foundry": "4", 
  "qwen3-8b-generic-cpu:2-foundry": "8", "Phi-4-mini-reasoning-generic-cpu:3-foundry": "3.8", 
  "Phi-4-generic-cpu:2-foundry": "14", "qwen3.5-0.8b-generic-cpu:2-foundry": "0.8", "qwen3.5-2b-generic-cpu:2-foundry": "2", 
  "qwen3.5-4b-generic-cpu:2-foundry": "4", "qwen3.5-9b-generic-cpu:2-foundry": "9", "deepseek-qwen-14b-gguf": "14", 
  "deepseek-qwen-7b-gguf": "7", "dragon-llama-3.1-gguf": "8", "gemma-3-12b-gguf": "12", "gemma-3-4b-gguf": "4", 
  "gemma-4-26b-gguf": "26", "gemma-4-2b-gguf": "2", "gemma-4-4b-gguf": "4", "gpt-oss-20b-gguf": "20", 
  "granite-4-micro-gguf": "1.1", "llama-2-7b-chat-gguf": "7", "liquidai-lfm2-2.6b-gguf": "2.6", 
  "ministral-3-14b-gguf": "14", "minicpm-2.6-gguf": "4", "mistral-small-3.2-24b-gguf": "24", "olmo-13b-gguf": "13", 
  "openhermes-2.5-mistral-7b-gguf": "7", "phi-3-gguf": "3.8", "phi-3.5-gguf": "3.8", "phi-4-gguf": "14", 
  "phi-4-mini-gguf": "3.8", "phi-4-mini-reasoning-gguf": "3.8", "qwen-3.5-27b-gguf": "27", "qwen-3.5-35b-a3b-gguf": "35", 
  "qwen-3.5-4b-gguf": "4", "qwen-3.5-9b-gguf": "9", "qwen2.5-32b-gguf": "32", "qwen2.5-72b-gguf": "72", 
  "qwen3-1.7b-gguf": "1.7", "qwen3-14b-gguf": "14", "qwen3-8b-gguf": "8", "starling-lm-7b-alpha-gguf": "7", 
  "tiny-llama-chat-gguf": "1.1", "zephyr-7b-beta-gguf": "7", "qwen2.5-0.5b-instruct-generic-cpu:4-foundry": "0.5", 
  "qwen2.5-1.5b-instruct-generic-cpu:4-foundry": "1.5", "qwen2.5-14b-instruct-generic-cpu:4-foundry": "14", 
  "qwen2.5-7b-instruct-generic-cpu:4-foundry": "7", "Phi-4-mini-instruct-generic-cpu:5-foundry": "3.8", 
  "mistralai-Mistral-7B-Instruct-v0-2-generic-cpu:3-foundry": "7", "Phi-3-mini-128k-instruct-generic-cpu:3-foundry": "3.8", 
  "Phi-3-mini-4k-instruct-generic-cpu:3-foundry": "3.8", "Phi-3.5-mini-instruct-generic-cpu:2-foundry": "3.8", 
  "gemma-2-27b-instruct-gguf": "27", "gemma-2-9b-instruct-gguf": "9", "llama-3-8b-instruct-gguf": "8", 
  "llama-3.1-instruct-gguf": "8", "llama-3.2-1b-instruct-gguf": "1.1", "llama-3.2-3b-instruct-gguf": "3", 
  "mistral-7b-instruct-v0.3-gguf": "7", "qwen-2.5-14b-instruct-gguf": "14", "qwen2-0.5b-instruct-gguf": "0.5", 
  "qwen2-1.5b-instruct-gguf": "1.5", "qwen2-7B-instruct-gguf": "7", "qwen3-4b-instruct-gguf": "4", 
  "bling-qwen-0.5b-gguf": "0.5", "bling-tiny-llama-onnx": "1.1", "bling-phi-3-onnx": "3.8", "bling-qwen-1.5b-ov": "1.5", 
  "bling-tiny-llama-ov": "1.1", "bling-phi-3-ov": "3.8", "bling-qwen-mini-tool": "1.5", "dragon-qwen-7b-gguf": "7", 
  "dragon-mistral-0.3-gguf": "7", "dragon-yi-9b-gguf": "9", "dragon-llama-answer-tool": "7", 
  "dragon-mistral-answer-tool": "7", "dragon-yi-answer-tool": "6", "qwen2.5-vl-3b-instruct-gguf": "3", 
  "qwen3-vl-30b-gguf": "30", "qwen3-vl-4b-gguf": "4", "qwen3-vl-8b-gguf": "8",
  // GPU/CPU/NPU
  "slim-boolean-phi-3-onnx": "3.8", "slim-emotions-onnx": "1.1", "slim-extract-phi-3-onnx": "3.8", 
  "slim-extract-tiny-onnx": "1.1", "slim-intent-onnx": "1.1", "slim-ner-onnx": "1.1", "slim-ratings-onnx": "1.1", 
  "slim-sentiment-onnx": "1.1", "slim-sql-onnx": "1.1", "slim-summary-phi-3-onnx": "3.8", "slim-summary-tiny-onnx": "1.1", 
  "slim-tags-onnx": "1.1", "slim-topics-onnx": "1.1", "slim-boolean-phi-3-ov": "3.8", "slim-category-ov": "1.1", 
  "slim-emotions-ov": "1.1", "slim-extract-phi-3-ov": "3.8", "slim-extract-qwen-0.5b-ov": "0.5", 
  "slim-extract-qwen-1.5b-ov": "1.5", "slim-extract-tiny-ov": "1.1", "slim-intent-ov": "1.1", "slim-ner-ov": "1.1", 
  "slim-q-gen-tiny-ov": "1.1", "slim-qa-gen-tiny-ov": "1.1", "slim-ratings-ov": "1.1", "slim-sa-ner-phi-3-ov": "3.8", 
  "slim-sentiment-ov": "1.1", "slim-sql-ov": "1.1", "slim-sql-phi-3-ov": "3.8", "slim-sql-qwen-base-ov": "1.5", 
  "slim-summary-phi-3-ov": "3.8", "slim-summary-tiny-ov": "1.1", "slim-tags-ov": "1.1", "slim-topics-ov": "1.1", 
  "slim-xsum-phi-3-ov": "3.8", "codegemma-7b-it-ov": "7", "qwen2.5-coder-7b-instruct-ov": "7", 
  "all-mini-lm-l6-v2-onnx": "0.02", "bge-base-en-v1.5-onnx": "0.11", "bge-large-en-v1.5-onnx": "0.33", 
  "bge-small-en-v1.5-onnx": "0.03", "gte-base-onnx": "0.11", "gte-large-onnx": "0.33", "gte-small-onnx": "0.03", 
  "industry-bert-contracts-onnx": "0.11", "industry-bert-insurance-onnx": "0.11", "all-mini-lm-l6-v2-ov": "0.02", 
  "all-mpnet-base-v2-ov": "0.11", "bge-base-en-v1.5-ov": "0.11", "bge-large-en-v1.5-ov": "0.33", 
  "bge-small-en-v1.5-ov": "0.03", "gte-base-ov": "0.11", "gte-large-ov": "0.33", "gte-small-ov": "0.03", 
  "industry-bert-asset-management-ov": "0.11", "industry-bert-contracts-ov": "0.11", "industry-bert-insurance-ov": "0.11", 
  "industry-bert-loans-ov": "0.11", "industry-bert-sec-ov": "0.11", "paraphrase-multilingual-MiniLM-L12-v2-ov": "0.12", 
  "gpt-oss-20b-generic-gpu:1-foundry": "20", "deepseek-r1-distill-qwen-14b-generic-gpu:4-foundry": "14", 
  "qwen3-0.6b-generic-gpu:2-foundry": "0.6", "qwen3-1.7b-generic-gpu:2-foundry": "1.7", 
  "qwen3-14b-generic-gpu:2-foundry": "14", "qwen3-4b-generic-gpu:2-foundry": "4", "qwen3-8b-generic-gpu:2-foundry": "8", 
  "Phi-4-mini-reasoning-generic-gpu:3-foundry": "3.8", "deepseek-r1-distill-qwen-7b-generic-gpu:4-foundry": "7", 
  "Phi-4-generic-gpu:2-foundry": "14", "qwen3.5-0.8b-generic-gpu:2-foundry": "0.8", "qwen3.5-2b-generic-gpu:2-foundry": "2", 
  "qwen3.5-4b-generic-gpu:2-foundry": "4", "qwen3.5-9b-generic-gpu:2-foundry": "9", "qwen2-0.5b-chat-ov": "0.5", 
  "qwen3-1.7b-ov": "1.7", "qwen3-14b-ov": "14", "qwen3-4b-ov": "4", "qwen3-8b-ov": "8", "dolphin-2.9.4-llama3.1-8b-ov": "8", 
  "llama-2-13b-chat-ov": "13", "llama-2-chat-ov": "7", "tiny-llama-chat-ov": "1.1", "phi-3-ov": "3.8", "phi-4-ov": "14", 
  "phi-4-mini-ov": "3.8", "dolphin-2.9.3-mistral-7b-32k-ov": "7", "teknium-open-hermes-2.5-mistral-ov": "7", 
  "zephyr-mistral-7b-chat-ov": "7", "yi-1.5-34b-ov": "34", "yi-6b-1.5v-chat-ov": "6", "yi-9b-chat-ov": "9", 
  "gemma-2-27b-ov": "27", "gemma-2b-it-ov": "2", "gemma-7b-it-ov": "7", "stablelm-2-12b-chat-ov": "12", 
  "stablelm-2-zephyr-1_6b-ov": "1.6", "stablelm-zephyr-3b-ov": "3", "dreamgen-wizardlm-2-7b-ov": "7", 
  "granite-4-micro-ov": "1.1", "intel-neural-chat-7b-v3-2-ov": "7", "openchat-3.6-8b-20240522-ov": "8", 
  "tiny-dolphin-2.8-1.1b-ov": "1.1", "lcm-dreamshaper-ov": "1.1", "qwen2.5-0.5b-instruct-generic-gpu:4-foundry": "0.5", 
  "qwen2.5-1.5b-instruct-generic-gpu:4-foundry": "1.5", "qwen2.5-14b-instruct-generic-gpu:4-foundry": "14", 
  "qwen2.5-7b-instruct-generic-gpu:4-foundry": "7", "qwen2.5-coder-0.5b-instruct-generic-gpu:4-foundry": "0.5", 
  "qwen2.5-coder-1.5b-instruct-generic-gpu:4-foundry": "1.5", "qwen2.5-coder-14b-instruct-generic-gpu:4-foundry": "14", 
  "qwen2.5-coder-7b-instruct-generic-gpu:4-foundry": "7", "Phi-4-mini-instruct-generic-gpu:5-foundry": "3.8", 
  "mistralai-Mistral-7B-Instruct-v0-2-generic-gpu:2-foundry": "7", "Phi-3-mini-128k-instruct-generic-gpu:2-foundry": "3.8", 
  "Phi-3-mini-4k-instruct-generic-gpu:2-foundry": "3.8", "Phi-3.5-mini-instruct-generic-gpu:2-foundry": "3.8", 
  "llama-3.1-instruct-onnx": "8", "llama-3.2-1b-instruct-onnx": "1.1", "llama-3.2-3b-instruct-onnx": "3", 
  "llama-2-chat-onnx": "7", "tiny-llama-chat-onnx": "1.1", "phi-3-onnx": "3.8", "mistral-7b-instruct-v0.3-onnx": "7", 
  "gemma-2b-it-onnx": "2", "qwen2-1.5b-instruct-ov": "1.5", "qwen2-7b-instruct-ov": "7", "qwen2.5-0.5b-instruct-ov": "0.5", 
  "qwen2.5-1.5b-instruct-ov": "1.5", "qwen2.5-14b-instruct-ov": "14", "qwen2.5-32b-instruct-ov": "32", 
  "qwen2.5-3b-instruct-ov": "3", "qwen2.5-72b-instruct-ov": "72", "llama-3.1-instruct-ov": "8", "llama-3.2-1b-instruct-ov": "1.1", 
  "llama-3.2-3b-instruct-ov": "3", "mistral-7b-instruct-v0.2-ov": "7", "mistral-7b-instruct-v0.3-ov": "7", 
  "mistral-nemo-instruct-2407-ov": "12", "mistral-small-instruct-2409-ov": "22", "xlm-roberta-language-detector-ov": "0.28", 
  "mathstral-7b-ov": "7", "protectai-prompt-injection-onnx": "0.3", "unitary-toxic-roberta-onnx": "0.1", 
  "valurank-bias-onnx": "0.1", "malicious-url-detector-ov": "0.1", "protectai-prompt-injection-ov": "0.3", 
  "unitary-toxic-roberta-ov": "0.1", "valurank-bias-ov": "0.1", "dragon-mistral-0.3-onnx": "7", "dragon-qwen-7b-ov": "7", 
  "dragon-llama2-ov": "7", "nvidia-llama3-chatqa-1.5-8b-ov": "8", "dragon-mistral-0.3-ov": "7", "dragon-mistral-ov": "7", 
  "dragon-yi-6b-ov": "6", "dragon-yi-9b-ov": "9", "jina-reranker-tiny-onnx": "0.1", "jina-reranker-turbo-onnx": "0.6", 
  "jina-reranker-v1-tiny-en-ov": "0.1", "jina-reranker-v1-turbo-en-ov": "0.6", "speech-t5-tts-ov": "0.6", 
  "phi-3-vision-onnx": "4.2", "qwen2.5-vl-3b-ov": "3", "qwen2.5-vl-7b-ov": "7", "qwen2-vl-2b-instruct-ov": "2", 
  "qwen2-vl-7b-instruct-ov": "7",
  // NPU
  "slim-emotions-npu-ov": "1.1", "slim-extract-tiny-npu-ov": "1.1", "slim-intent-npu-ov": "1.1", "slim-ner-npu-ov": "1.1", 
  "slim-ratings-npu-ov": "1.1", "slim-sentiment-npu-ov": "1.1", "slim-sql-npu-ov": "1.1", "slim-summary-tiny-npu-ov": "1.1", 
  "slim-tags-npu-ov": "1.1", "slim-topics-npu-ov": "1.1", "DeepSeek-R1-Distill-Qwen-7B-vitis-npu:2-foundry": "7", 
  "Phi-4-mini-reasoning-vitis-npu:2-foundry": "3.8", "mistral-7b-v0.3-npu-ov": "7", "yi-9b-npu-ov": "9", 
  "qwen2.5-0.5b-instruct-vitis-npu:3-foundry": "0.5", "qwen2.5-7b-instruct-vitis-npu:2-foundry": "7", 
  "qwen2.5-coder-0.5b-instruct-vitis-npu:2-foundry": "0.5", "qwen2.5-coder-1.5b-instruct-vitis-npu:2-foundry": "1.5", 
  "qwen2.5-coder-7b-instruct-vitis-npu:2-foundry": "7", "Phi-4-mini-instruct-vitis-npu:2-foundry": "3.8", 
  "Mistral-7B-Instruct-v0-2-vitis-npu:2-foundry": "7", "phi-3-mini-128k-instruct-vitis-npu:2-foundry": "3.8", 
  "Phi-3-mini-4k-instruct-vitis-npu:2-foundry": "3.8", "phi-4-mini-instruct-vitis-npu:2-foundry": "3.8",
}

// Reclassified model catalog (see AMD_MODELS.md)
const MODEL_GROUPS: ModelGroup[] = [
  {
    group: "CPU Models",
    blurb: "GGUF and tool models that run on the CPU alone — no GPU or NPU required.",
    sections: [
      {
        type: "Agentic",
        models: [
          "slim-boolean-phi-3-gguf", "slim-extract-phi-3-gguf", "slim-extract-qwen-1.5b-gguf", "slim-extract-qwen-nano-gguf", 
          "slim-sa-ner-phi-3-gguf", "slim-summary-phi-3-gguf", "slim-xsum-phi-3-gguf", "slim-boolean-tool", 
          "slim-category-tool", "slim-emotions-tool", "slim-extract-tool", "slim-intent-tool", "slim-ner-tool", "slim-nli-tool", 
          "slim-q-gen-phi-3-tool", "slim-q-gen-tiny-tool", "slim-qa-gen-phi-3-tool", "slim-qa-gen-tiny-tool", "slim-ratings-tool", 
          "slim-sa-ner-tool", "slim-sentiment-tool", "slim-sql-tool", "slim-summary-tiny-tool", "slim-summary-tool", 
          "slim-tags-3b-tool", "slim-tags-tool", "slim-topics-tool", "slim-xsum-tool",
        ],
      },
      {
        type: "Coding",
        models: [
          "qwen2.5-coder-0.5b-instruct-generic-cpu:4-foundry", "qwen2.5-coder-1.5b-instruct-generic-cpu:4-foundry", 
          "qwen2.5-coder-14b-instruct-generic-cpu:4-foundry", "qwen2.5-coder-7b-instruct-generic-cpu:4-foundry", 
          "qwen-2.5-7b-coder-gguf",
        ],
      },
      {
        type: "General Chat",
        models: [
          "gpt-oss-20b-generic-cpu:1-foundry", "deepseek-r1-distill-qwen-14b-generic-cpu:4-foundry", 
          "deepseek-r1-distill-qwen-7b-generic-cpu:4-foundry", "qwen3-0.6b-generic-cpu:4-foundry", 
          "qwen3-1.7b-generic-cpu:2-foundry", "qwen3-14b-generic-cpu:2-foundry", "qwen3-4b-generic-cpu:3-foundry", 
          "qwen3-8b-generic-cpu:2-foundry", "Phi-4-mini-reasoning-generic-cpu:3-foundry", "Phi-4-generic-cpu:2-foundry", 
          "qwen3.5-0.8b-generic-cpu:2-foundry", "qwen3.5-2b-generic-cpu:2-foundry", "qwen3.5-4b-generic-cpu:2-foundry", 
          "qwen3.5-9b-generic-cpu:2-foundry",
        ],
      },
      {
        type: "General Chat - GGUF",
        models: [
          "deepseek-qwen-14b-gguf", "deepseek-qwen-7b-gguf", "dragon-llama-3.1-gguf", "gemma-3-12b-gguf", "gemma-3-4b-gguf", 
          "gemma-4-26b-gguf", "gemma-4-2b-gguf", "gemma-4-4b-gguf", "gpt-oss-20b-gguf", "granite-4-micro-gguf", 
          "llama-2-7b-chat-gguf", "liquidai-lfm2-2.6b-gguf", "ministral-3-14b-gguf", "minicpm-2.6-gguf", 
          "mistral-small-3.2-24b-gguf", "olmo-13b-gguf", "openhermes-2.5-mistral-7b-gguf", "phi-3-gguf", "phi-3.5-gguf", 
          "phi-4-gguf", "phi-4-mini-gguf", "phi-4-mini-reasoning-gguf", "qwen-3.5-27b-gguf", "qwen-3.5-35b-a3b-gguf", 
          "qwen-3.5-4b-gguf", "qwen-3.5-9b-gguf", "qwen2.5-32b-gguf", "qwen2.5-72b-gguf", "qwen3-1.7b-gguf", "qwen3-14b-gguf", 
          "qwen3-8b-gguf", "starling-lm-7b-alpha-gguf", "tiny-llama-chat-gguf", "zephyr-7b-beta-gguf",
        ],
      },
      {
        type: "Instruct",
        models: [
          "qwen2.5-0.5b-instruct-generic-cpu:4-foundry", "qwen2.5-1.5b-instruct-generic-cpu:4-foundry", 
          "qwen2.5-14b-instruct-generic-cpu:4-foundry", "qwen2.5-7b-instruct-generic-cpu:4-foundry", 
          "Phi-4-mini-instruct-generic-cpu:5-foundry", "mistralai-Mistral-7B-Instruct-v0-2-generic-cpu:3-foundry", 
          "Phi-3-mini-128k-instruct-generic-cpu:3-foundry", "Phi-3-mini-4k-instruct-generic-cpu:3-foundry", 
          "Phi-3.5-mini-instruct-generic-cpu:2-foundry",
        ],
      },
      {
        type: "Instruct - GGUF",
        models: [
          "gemma-2-27b-instruct-gguf", "gemma-2-9b-instruct-gguf", "llama-3-8b-instruct-gguf", "llama-3.1-instruct-gguf", 
          "llama-3.2-1b-instruct-gguf", "llama-3.2-3b-instruct-gguf", "mistral-7b-instruct-v0.3-gguf", 
          "qwen-2.5-14b-instruct-gguf", "qwen2-0.5b-instruct-gguf", "qwen2-1.5b-instruct-gguf", "qwen2-7B-instruct-gguf", 
          "qwen3-4b-instruct-gguf",
        ],
      },
      {
        type: "Question-answer",
        models: [
          "bling-qwen-0.5b-gguf", "bling-tiny-llama-onnx", "bling-phi-3-onnx", "bling-qwen-1.5b-ov", "bling-tiny-llama-ov", 
          "bling-phi-3-ov", "bling-qwen-mini-tool", "dragon-qwen-7b-gguf", "dragon-mistral-0.3-gguf", "dragon-yi-9b-gguf", 
          "dragon-llama-answer-tool", "dragon-mistral-answer-tool", "dragon-yi-answer-tool",
        ],
      },
      {
        type: "Vision",
        models: [
            "qwen2.5-vl-3b-instruct-gguf", "qwen3-vl-30b-gguf", "qwen3-vl-4b-gguf", "qwen3-vl-8b-gguf",
        ],
      },
    ],
  },
  {
    group: "GPU/CPU/NPU Models",
    blurb: "ONNX and OpenVINO (OV) models that run on the available GPU, CPU, or NPU.",
    sections: [
      {
        type: "Agentic - ONNX",
        models: [
          "slim-boolean-phi-3-onnx", "slim-emotions-onnx", "slim-extract-phi-3-onnx", "slim-extract-tiny-onnx", 
          "slim-intent-onnx", "slim-ner-onnx", "slim-ratings-onnx", "slim-sentiment-onnx", "slim-sql-onnx", 
          "slim-summary-phi-3-onnx", "slim-summary-tiny-onnx", "slim-tags-onnx", "slim-topics-onnx",
        ],
      },
      {
        type: "Agentic - OV",
        models: [
          "slim-boolean-phi-3-ov", "slim-category-ov", "slim-emotions-ov", "slim-extract-phi-3-ov", 
          "slim-extract-qwen-0.5b-ov", "slim-extract-qwen-1.5b-ov", "slim-extract-tiny-ov", "slim-intent-ov", "slim-ner-ov", 
          "slim-q-gen-tiny-ov", "slim-qa-gen-tiny-ov", "slim-ratings-ov", "slim-sa-ner-phi-3-ov", "slim-sentiment-ov", 
          "slim-sql-ov", "slim-sql-phi-3-ov", "slim-sql-qwen-base-ov", "slim-summary-phi-3-ov", "slim-summary-tiny-ov", 
          "slim-tags-ov", "slim-topics-ov", "slim-xsum-phi-3-ov",
        ],
      },
      { type: "Coding", models: ["codegemma-7b-it-ov", "qwen2.5-coder-7b-instruct-ov"] },
      {
        type: "Embedding - ONNX",
        models: [
          "all-mini-lm-l6-v2-onnx", "bge-base-en-v1.5-onnx", "bge-large-en-v1.5-onnx", "bge-small-en-v1.5-onnx", 
          "gte-base-onnx", "gte-large-onnx", "gte-small-onnx", "industry-bert-contracts-onnx", "industry-bert-insurance-onnx",
        ],
      },
      {
        type: "Embedding - OV",
        models: [
          "all-mini-lm-l6-v2-ov", "all-mpnet-base-v2-ov", "bge-base-en-v1.5-ov", "bge-large-en-v1.5-ov", 
          "bge-small-en-v1.5-ov", "gte-base-ov", "gte-large-ov", "gte-small-ov", "industry-bert-asset-management-ov", 
          "industry-bert-contracts-ov", "industry-bert-insurance-ov", "industry-bert-loans-ov", "industry-bert-sec-ov", 
          "paraphrase-multilingual-MiniLM-L12-v2-ov",
        ],
      },
      {
        type: "General Chat",
        models: [
          "gpt-oss-20b-generic-gpu:1-foundry", "deepseek-r1-distill-qwen-14b-generic-gpu:4-foundry", 
          "qwen3-0.6b-generic-gpu:2-foundry", "qwen3-1.7b-generic-gpu:2-foundry", "qwen3-14b-generic-gpu:2-foundry", 
          "qwen3-4b-generic-gpu:2-foundry", "qwen3-8b-generic-gpu:2-foundry", "Phi-4-mini-reasoning-generic-gpu:3-foundry", 
          "deepseek-r1-distill-qwen-7b-generic-gpu:4-foundry", "Phi-4-generic-gpu:2-foundry", 
          "qwen3.5-0.8b-generic-gpu:2-foundry", "qwen3.5-2b-generic-gpu:2-foundry", "qwen3.5-4b-generic-gpu:2-foundry", 
          "qwen3.5-9b-generic-gpu:2-foundry",
        ],
      },
      {
        type: "General Chat - OV",
        models: [
          "qwen2-0.5b-chat-ov", "qwen3-1.7b-ov", "qwen3-14b-ov", "qwen3-4b-ov", "qwen3-8b-ov", "dolphin-2.9.4-llama3.1-8b-ov", 
          "llama-2-13b-chat-ov", "llama-2-chat-ov", "tiny-llama-chat-ov", "phi-3-ov", "phi-4-ov", "phi-4-mini-ov", 
          "dolphin-2.9.3-mistral-7b-32k-ov", "teknium-open-hermes-2.5-mistral-ov", "zephyr-mistral-7b-chat-ov", "yi-1.5-34b-ov", 
          "yi-6b-1.5v-chat-ov", "yi-9b-chat-ov", "gemma-2-27b-ov", "gemma-2b-it-ov", "gemma-7b-it-ov", "stablelm-2-12b-chat-ov", 
          "stablelm-2-zephyr-1_6b-ov", "stablelm-zephyr-3b-ov", "dreamgen-wizardlm-2-7b-ov", "granite-4-micro-ov", 
          "intel-neural-chat-7b-v3-2-ov", "openchat-3.6-8b-20240522-ov", "tiny-dolphin-2.8-1.1b-ov", "lcm-dreamshaper-ov",
        ],
      },
      {
        type: "Instruct",
        models: [
          "qwen2.5-0.5b-instruct-generic-gpu:4-foundry", "qwen2.5-1.5b-instruct-generic-gpu:4-foundry", 
          "qwen2.5-14b-instruct-generic-gpu:4-foundry", "qwen2.5-7b-instruct-generic-gpu:4-foundry", 
          "qwen2.5-coder-0.5b-instruct-generic-gpu:4-foundry", "qwen2.5-coder-1.5b-instruct-generic-gpu:4-foundry", 
          "qwen2.5-coder-14b-instruct-generic-gpu:4-foundry", "qwen2.5-coder-7b-instruct-generic-gpu:4-foundry", 
          "Phi-4-mini-instruct-generic-gpu:5-foundry", "mistralai-Mistral-7B-Instruct-v0-2-generic-gpu:2-foundry", 
          "Phi-3-mini-128k-instruct-generic-gpu:2-foundry", "Phi-3-mini-4k-instruct-generic-gpu:2-foundry", 
          "Phi-3.5-mini-instruct-generic-gpu:2-foundry",
        ],
      },
      {
        type: "Instruct - ONNX",
        models: [
          "llama-3.1-instruct-onnx", "llama-3.2-1b-instruct-onnx", "llama-3.2-3b-instruct-onnx", "llama-2-chat-onnx", 
          "tiny-llama-chat-onnx", "phi-3-onnx", "mistral-7b-instruct-v0.3-onnx", "gemma-2b-it-onnx",
        ],
      },
      {
        type: "Instruct - OV",
        models: [
          "qwen2-1.5b-instruct-ov", "qwen2-7b-instruct-ov", "qwen2.5-0.5b-instruct-ov", "qwen2.5-1.5b-instruct-ov", 
          "qwen2.5-14b-instruct-ov", "qwen2.5-32b-instruct-ov", "qwen2.5-3b-instruct-ov", "qwen2.5-72b-instruct-ov", 
          "llama-3.1-instruct-ov", "llama-3.2-1b-instruct-ov", "llama-3.2-3b-instruct-ov", "mistral-7b-instruct-v0.2-ov", 
          "mistral-7b-instruct-v0.3-ov", "mistral-nemo-instruct-2407-ov", "mistral-small-instruct-2409-ov",
        ],
      },
      { type: "Language Detector", models: ["xlm-roberta-language-detector-ov"] },
      { type: "Math", models: ["mathstral-7b-ov"] },
      {
        type: "Prompt Safety",
        models: [
          "protectai-prompt-injection-onnx", "unitary-toxic-roberta-onnx", "valurank-bias-onnx", "malicious-url-detector-ov", 
          "protectai-prompt-injection-ov", "unitary-toxic-roberta-ov", "valurank-bias-ov",
        ],
      },
      {
        type: "Question-answer",
        models: [
          "dragon-mistral-0.3-onnx", "dragon-qwen-7b-ov", "dragon-llama2-ov", "nvidia-llama3-chatqa-1.5-8b-ov", 
          "dragon-mistral-0.3-ov", "dragon-mistral-ov", "dragon-yi-6b-ov", "dragon-yi-9b-ov",
        ],
      },
      {
        type: "Re-ranker",
        models: [
          "jina-reranker-tiny-onnx", "jina-reranker-turbo-onnx", "jina-reranker-v1-tiny-en-ov", "jina-reranker-v1-turbo-en-ov",
        ],
      },
      { type: "Text-to-speech", models: ["speech-t5-tts-ov"] },
      {
        type: "Vision", 
        models: [
          "phi-3-vision-onnx", "qwen2.5-vl-3b-ov", "qwen2.5-vl-7b-ov", "qwen2-vl-2b-instruct-ov", "qwen2-vl-7b-instruct-ov",
        ] 
      },
    ],
  },
  {
    group: "NPU Models",
    blurb: "Models designed to run on Neural Processing Units for efficient, low-power inference.",
    sections: [
      {
        type: "Agentic",
        models: [
          "slim-emotions-npu-ov", "slim-extract-tiny-npu-ov", "slim-intent-npu-ov", "slim-ner-npu-ov", "slim-ratings-npu-ov", 
          "slim-sentiment-npu-ov", "slim-sql-npu-ov", "slim-summary-tiny-npu-ov", "slim-tags-npu-ov", "slim-topics-npu-ov",
        ],
      },
      {
        type: "General Chat",
        models: [
          "DeepSeek-R1-Distill-Qwen-7B-vitis-npu:2-foundry", "Phi-4-mini-reasoning-vitis-npu:2-foundry",
          "mistral-7b-v0.3-npu-ov", "yi-9b-npu-ov",
        ],
      },
      {
        type: "Instruct",
        models: [
          "qwen2.5-0.5b-instruct-vitis-npu:3-foundry", "qwen2.5-7b-instruct-vitis-npu:2-foundry", 
          "qwen2.5-coder-0.5b-instruct-vitis-npu:2-foundry", "qwen2.5-coder-1.5b-instruct-vitis-npu:2-foundry", 
          "qwen2.5-coder-7b-instruct-vitis-npu:2-foundry", "Phi-4-mini-instruct-vitis-npu:2-foundry", 
          "Mistral-7B-Instruct-v0-2-vitis-npu:2-foundry", "phi-3-mini-128k-instruct-vitis-npu:2-foundry", 
          "Phi-3-mini-4k-instruct-vitis-npu:2-foundry", "phi-4-mini-instruct-vitis-npu:2-foundry",
        ],
      },
    ],
  },
  {
  group: "Cloud Models",
    blurb: "Models that run on remote servers over the internet, increasing speed and complex capabilities.",
    sections: [
      {
        type: "Cloud",
        models: [
          "gpt-5.2-pro", "gpt-5.2", "gpt-5-mini", "gpt-5-nano", "gpt-4.1", "claude-opus-4-5", "claude-haiku-4-5", 
          "claude-sonnet-4-5", "claude-sonnet-4-20250514", "claude-opus-4-20250514", "gemini-3-pro-preview", 
          "gemini-3-flash-preview", "gemini-2.5-pro", "gemini-2.5-flash", "gemini-2.5-flash-lite",
        ],
      },
    ],
  },
]

const TOTAL_MODELS = MODEL_GROUPS.reduce(
  (sum, g) => sum + g.sections.reduce((s, sec) => s + sec.models.length, 0),
  0,
)

export default function AMDSupportedModelsPage() {
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
                  <BreadcrumbPage>AMD Supported Models</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="mt-8 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-brand">Hardware optimized</span>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                AMD Supported Models
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground">
                A complete catalog of {TOTAL_MODELS} AI models optimized for enhanced performance across AMD CPUs, GPUs, and NPUs.
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
              { value: "ONNX", label: "Runtime" },
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
            <span className="font-mono text-xs uppercase tracking-widest text-brand">Why AMD</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              AMD optimization features
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              These models are optimized for enhanced performance on AMD hardware devices. 
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px border-t border-border bg-border md:grid-cols-2">
            <div className="bg-background p-8">
              <h3 className="text-lg font-semibold">Performance benefits</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Optimized for AMD CPU, GPU, and NPU architectures</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Enhanced inference speed with ONNX Runtime and VITIS AI acceleration</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Efficient execution of AI models with optimized hardware utilization</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Streamlined AI inference for AMD Ryzen AI and Radeon platforms</li>
              </ul>
            </div>
            <div className="bg-background p-8">
              <h3 className="text-lg font-semibold">Supported hardware</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> AMD x86_64 CPU </li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> AMD Ryzen AI </li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> AMD GPUs and NPUs</li>
                <li className="flex items-start gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" /> Windows 11 devices</li>
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
              Getting started with AMD models
            </h2>
            <ol className="mt-6 max-w-2xl space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-mono text-sm text-brand">01</span>
                Ensure you have a device with compatible AMD hardware.
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-sm text-brand">02</span>
                Select models optimized for AMD from the Models section.
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-sm text-brand">03</span>
                The system automatically applies AMD optimizations when available.
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
              For AMD-specific optimization questions, contact our technical support team at{" "}
              <code className="bg-muted px-1.5 py-0.5 font-mono text-xs">support@aibloks.com</code>.
            </p>
          </div>
        </FrameSection>
      </PageFrame>
    </ModelEncyclopediaProvider>
  )
}
