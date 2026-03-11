import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Cpu, Info, Zap, Database } from "lucide-react"

export default function IntelSupportedModelsPage() {
    const modelCategories = [
        {
            category: "Embedding Models",
            models: [
                { name: "industry-bert-contracts-ov", parameters: "NA" },
                { name: "industry-bert-insurance-ov", parameters: "NA" },
                { name: "industry-bert-asset-management-ov", parameters: "NA" },
                { name: "industry-bert-sec-ov", parameters: "NA" },
                { name: "industry-bert-loans-ov", parameters: "NA" },
                { name: "all-mini-lm-l6-v2-ov", parameters: "NA" },
                { name: "all-mpnet-base-v2-ov", parameters: "NA" },
                { name: "paraphrase-multilingual-MiniLM-L12-v2-ov", parameters: "NA" },
                { name: "gte-small-ov", parameters: "NA" },
                { name: "gte-base-ov", parameters: "NA" },
                { name: "gte-large-ov", parameters: "NA" },
                { name: "bge-small-en-v1.5-ov", parameters: "NA" },
                { name: "bge-base-en-v1.5-ov", parameters: "NA" },
                { name: "bge-large-en-v1.5-ov", parameters: "NA" },
                { name: "protectai-prompt-injection-ov", parameters: "NA" },
                { name: "malicious-url-detector-ov", parameters: "NA" },
                { name: "xlm-roberta-language-detector-ov", parameters: "NA" },
                { name: "valurank-bias-ov", parameters: "NA" },
                { name: "unitary-toxic-roberta-ov", parameters: "NA" },
                { name: "jina-reranker-v1-tiny-en-ov", parameters: "NA" },
                { name: "jina-reranker-v1-turbo-en-ov", parameters: "NA" },
                { name: "jina-reranker-tiny-onnx", parameters: "NA" },
                { name: "jina-reranker-turbo-onnx", parameters: "NA" },
                { name: "protectai-prompt-injection-onnx", parameters: "NA" },
                { name: "valurank-bias-onnx", parameters: "NA" },
                { name: "unitary-toxic-roberta-onnx", parameters: "NA" },
            ],
        },
        {
            category: "Qwen Models",
            models: [
                { name: "qwen2-vl-2b-instruct-ov", parameters: "2" },
                { name: "qwen2-vl-7b-instruct-ov", parameters: "7" },
                { name: "bling-qwen-500m-ov", parameters: "0.5" },
                { name: "bling-qwen-1.5b-ov", parameters: "1.5" },
                { name: "dragon-qwen-7b-ov", parameters: "7" },
                { name: "slim-extract-qwen-0.5b-ov", parameters: "0.5" },
                { name: "slim-extract-qwen-1.5b-ov", parameters: "1.5" },
                { name: "qwen2-7b-instruct-ov", parameters: "7" },
                { name: "qwen2-1.5b-instruct-ov", parameters: "1.5" },
                { name: "qwen2-0.5b-chat-ov", parameters: "0.5" },
                { name: "qwen2.5-1.5b-instruct-ov", parameters: "1.5" },
                { name: "qwen3-8b-ov", parameters: "8" },
                { name: "qwen3-1.7b-ov", parameters: "1.7" },
                { name: "qwen3-4b-ov", parameters: "4" },
                { name: "qwen3-14b-ov", parameters: "14" },
                { name: "qwen2.5-0.5b-instruct-ov", parameters: "0.5" },
                { name: "qwen2.5-3b-instruct-ov", parameters: "3" },
                { name: "qwen2.5-14b-instruct-ov", parameters: "14" },
                { name: "qwen2.5-32b-instruct-ov", parameters: "32" },
                { name: "qwen2.5-72b-instruct-ov", parameters: "72" },
                { name: "qwen2.5-coder-7b-instruct-ov", parameters: "7" },
                { name: "bling-qwen-mini-tool", parameters: "1.5" },
                { name: "bling-qwen-0.5b-gguf", parameters: "0.5" },
                { name: "dragon-qwen-7b-gguf", parameters: "7" },
                { name: "qwen2-7B-instruct-gguf", parameters: "7" },
                { name: "qwen3-1.7b-gguf", parameters: "1.7" },
                { name: "qwen3-4b-instruct-gguf", parameters: "4" },
                { name: "qwen3-8b-gguf", parameters: "8" },
                { name: "qwen3-14b-gguf", parameters: "14" },
                { name: "qwen2-1.5b-instruct-gguf", parameters: "1.5" },
                { name: "qwen2-0.5b-instruct-gguf", parameters: "0.5" },
                { name: "slim-extract-qwen-1.5b-gguf", parameters: "1.5" },
                { name: "slim-extract-qwen-nano-gguf", parameters: "0.5" },
                { name: "qwen-2.5-7b-coder-gguf", parameters: "7" },
                { name: "qwen-2.5-14b-instruct-gguf", parameters: "14" },
                { name: "deepseek-qwen-14b-gguf", parameters: "14" },
                { name: "deepseek-qwen-7b-gguf", parameters: "7" },
                { name: "qwen2.5-32b-gguf", parameters: "32" },
            ],
        },
        {
            category: "Llama-Based Models",
            models: [
                { name: "llama-11b-vision-instruct-ov", parameters: "11" },
                { name: "bling-tiny-llama-ov", parameters: "1.1" },
                { name: "bling-tiny-llama-npu-ov", parameters: "1.1" },
                { name: "dragon-llama2-ov", parameters: "7" },
                { name: "llama-2-chat-ov", parameters: "7" },
                { name: "llama-2-13b-chat-ov", parameters: "13" },
                { name: "tiny-llama-chat-ov", parameters: "1.1" },
                { name: "llama-3.1-instruct-ov", parameters: "8" },
                { name: "llama-3.1-8b-instruct-npu-ov", parameters: "8" },
                { name: "nvidia-llama3-chatqa-1.5-8b-ov", parameters: "8" },
                { name: "dolphin-2.9.4-llama3.1-8b-ov", parameters: "8" },
                { name: "llama-3.2-3b-instruct-ov", parameters: "3" },
                { name: "llama-3.2-3b-instruct-npu-ov", parameters: "3" },
                { name: "llama-3.2-1b-instruct-ov", parameters: "1.1" },
                { name: "llama-3.2-1b-instruct-npu-ov", parameters: "1.1" },
                { name: "bling-tiny-llama-onnx", parameters: "1.1" },
                { name: "llama-3.2-3b-onnx-qnn", parameters: "3" },
                { name: "llama-2-chat-onnx", parameters: "7" },
                { name: "llama-3.1-instruct-onnx", parameters: "8" },
                { name: "llama-3.2-1b-instruct-onnx", parameters: "1.3" },
                { name: "llama-3.2-3b-instruct-onnx", parameters: "3" },
                { name: "dragon-llama-3.1-gguf", parameters: "8" },
                { name: "dragon-llama-answer-tool", parameters: "7" },
                { name: "llama-3.1-instruct-gguf", parameters: "8" },
                { name: "llama-2-7b-chat-gguf", parameters: "7" },
                { name: "llama-3-8b-instruct-gguf", parameters: "8" },
                { name: "tiny-llama-chat-gguf", parameters: "1.1" },
                { name: "llama-3.2-1b-instruct-gguf", parameters: "1.3" },
                { name: "llama-3.2-3b-instruct-gguf", parameters: "3" },
            ],
        },
        {
            category: "Phi Models",
            models: [
                { name: "bling-phi-3-ov", parameters: "3.8" },
                { name: "slim-xsum-phi-3-ov", parameters: "3.8" },
                { name: "slim-boolean-phi-3-ov", parameters: "3.8" },
                { name: "slim-sa-ner-phi-3-ov", parameters: "3.8" },
                { name: "slim-summary-phi-3-ov", parameters: "3.8" },
                { name: "slim-sql-phi-3-ov", parameters: "3.8" },
                { name: "slim-extract-phi-3-ov", parameters: "3.8" },
                { name: "phi-3-ov", parameters: "3.8" },
                { name: "phi-3-npu-ov", parameters: "3.8" },
                { name: "phi-4-ov", parameters: "14" },
                { name: "phi-4-mini-ov", parameters: "4" },
                { name: "phi-4-mini-npu-ov", parameters: "4" },
                { name: "phi-4-npu-ov", parameters: "14" },
                { name: "bling-phi-3-onnx", parameters: "3.8" },
                { name: "phi-3-onnx", parameters: "3.8" },
                { name: "phi-3.5-onnx-qnn", parameters: "NA" },
                { name: "phi-3-vision-onnx", parameters: "3.8" },
                { name: "slim-summary-phi-3-onnx", parameters: "3.8" },
                { name: "slim-extract-phi-3-onnx", parameters: "3.8" },
                { name: "slim-boolean-phi-3-onnx", parameters: "3.8" },
                { name: "bling-phi-3-gguf", parameters: "3.8" },
                { name: "bling-phi-3.5-gguf", parameters: "3.8" },
                { name: "phi-3.5-gguf", parameters: "3.8" },
                { name: "phi-4-gguf", parameters: "14" },
                { name: "phi-4-mini-gguf", parameters: "4" },
                { name: "phi-4-mini-reasoning-gguf", parameters: "4" },
                { name: "phi-3-gguf", parameters: "3.8" },
                { name: "slim-extract-phi-3-gguf", parameters: "3.8" },
                { name: "slim-xsum-phi-3-gguf", parameters: "3.8" },
                { name: "slim-boolean-phi-3-gguf", parameters: "3.8" },
                { name: "slim-sa-ner-phi-3-gguf", parameters: "3.8" },
                { name: "slim-q-gen-phi-3-tool", parameters: "3.8" },
                { name: "slim-qa-gen-phi-3-tool", parameters: "3.8" },
            ],
        },
        {
            category: "Mistral Models",
            models: [
                { name: "dragon-mistral-ov", parameters: "7.3" },
                { name: "dragon-mistral-0.3-ov", parameters: "7.3" },
                { name: "mistral-7b-instruct-v0.3-ov", parameters: "7.3" },
                { name: "mistral-7b-v0.3-npu-ov", parameters: "7.3" },
                { name: "mistral-small-instruct-2409-ov", parameters: "22" },
                { name: "mistral-nemo-instruct-2407-ov", parameters: "12" },
                { name: "mistral-7b-instruct-v0.2-ov", parameters: "7.3" },
                { name: "zephyr-mistral-7b-chat-ov", parameters: "7.3" },
                { name: "teknium-open-hermes-2.5-mistral-ov", parameters: "7.3" },
                { name: "dolphin-2.9.3-mistral-7b-32k-ov", parameters: "7.3" },
                { name: "dragon-mistral-0.3-onnx", parameters: "7.3" },
                { name: "mistral-7b-instruct-v0.3-onnx", parameters: "7.3" },
                { name: "dragon-mistral-0.3-gguf", parameters: "7.3" },
                { name: "mistral-3.2-24b-gguf", parameters: "24" },
                { name: "openhermes-2.5-mistral-7b-gguf", parameters: "7.3" },
                { name: "zephyr-7b-beta-gguf", parameters: "7.3" },
                { name: "starling-lm-7b-alpha-gguf", parameters: "7" },
                { name: "dragon-mistral-answer-tool", parameters: "7.3" },
                { name: "mistral-7b-instruct-v0.3-gguf", parameters: "7.3" },
            ],
        },
        {
            category: "Yi Models",
            models: [
                { name: "dragon-yi-6b-ov", parameters: "5.8" },
                { name: "dragon-yi-9b-ov", parameters: "8.8" },
                { name: "yi-9b-chat-ov", parameters: "8.8" },
                { name: "yi-9b-npu-ov", parameters: "8.8" },
                { name: "yi-6b-1.5v-chat-ov", parameters: "5.8" },
                { name: "dragon-yi-9b-gguf", parameters: "8.8" },
                { name: "dragon-yi-answer-tool", parameters: "5.8" },
            ],
        },
        {
            category: "DRAGON Models",
            models: [
                { name: "dragon-qwen-7b-ov", parameters: "7" },
                { name: "dragon-llama2-ov", parameters: "7" },
                { name: "dragon-mistral-ov", parameters: "7.3" },
                { name: "dragon-mistral-0.3-ov", parameters: "7.3" },
                { name: "dragon-yi-6b-ov", parameters: "5.8" },
                { name: "dragon-yi-9b-ov", parameters: "8.8" },
                { name: "dragon-mistral-0.3-onnx", parameters: "7.3" },
                { name: "dragon-llama-3.1-gguf", parameters: "8" },
                { name: "dragon-mistral-0.3-gguf", parameters: "7.3" },
                { name: "dragon-yi-9b-gguf", parameters: "8.8" },
                { name: "dragon-qwen-7b-gguf", parameters: "7" },
                { name: "dragon-yi-answer-tool", parameters: "5.8" },
                { name: "dragon-llama-answer-tool", parameters: "7" },
                { name: "dragon-mistral-answer-tool", parameters: "7.3" },
            ],
        },
        {
            category: "Slim Models",
            models: [
                { name: "slim-sentiment-ov", parameters: "1.1" },
                { name: "slim-sentiment-npu-ov", parameters: "1.1" },
                { name: "slim-xsum-phi-3-ov", parameters: "3.8" },
                { name: "slim-boolean-phi-3-ov", parameters: "3.8" },
                { name: "slim-sa-ner-phi-3-ov", parameters: "3.8" },
                { name: "slim-summary-phi-3-ov", parameters: "3.8" },
                { name: "slim-sql-qwen-base-ov", parameters: "2" },
                { name: "slim-sql-phi-3-ov", parameters: "3.8" },
                { name: "slim-extract-phi-3-ov", parameters: "3.8" },
                { name: "slim-extract-tiny-ov", parameters: "1.1" },
                { name: "slim-extract-tiny-npu-ov", parameters: "1.1" },
                { name: "slim-extract-qwen-0.5b-ov", parameters: "0.5" },
                { name: "slim-extract-qwen-1.5b-ov", parameters: "1.5" },
                { name: "slim-summary-tiny-ov", parameters: "1.1" },
                { name: "slim-summary-tiny-npu-ov", parameters: "1.1" },
                { name: "slim-sql-ov", parameters: "1.1" },
                { name: "slim-sql-npu-ov", parameters: "1.1" },
                { name: "slim-emotions-ov", parameters: "1.1" },
                { name: "slim-emotions-npu-ov", parameters: "1.1" },
                { name: "slim-topics-ov", parameters: "1.1" },
                { name: "slim-topics-npu-ov", parameters: "1.1" },
                { name: "slim-ner-ov", parameters: "1.1" },
                { name: "slim-ner-npu-ov", parameters: "1.1" },
                { name: "slim-intent-ov", parameters: "1.1" },
                { name: "slim-category-ov", parameters: "1.1" },
                { name: "slim-intent-npu-ov", parameters: "1.1" },
                { name: "slim-tags-ov", parameters: "1.1" },
                { name: "slim-tags-npu-ov", parameters: "1.1" },
                { name: "slim-ratings-ov", parameters: "1.1" },
                { name: "slim-ratings-npu-ov", parameters: "1.1" },
                { name: "slim-q-gen-tiny-ov", parameters: "1.1" },
                { name: "slim-qa-gen-tiny-ov", parameters: "1.1" },
                { name: "slim-sentiment-onnx", parameters: "1.1" },
                { name: "slim-extract-tiny-onnx", parameters: "1.1" },
                { name: "slim-summary-tiny-onnx", parameters: "1.1" },
                { name: "slim-sql-onnx", parameters: "1.1" },
                { name: "slim-emotions-onnx", parameters: "1.1" },
                { name: "slim-topics-onnx", parameters: "1.1" },
                { name: "slim-ner-onnx", parameters: "1.1" },
                { name: "slim-intent-onnx", parameters: "1.1" },
                { name: "slim-tags-onnx", parameters: "1.1" },
                { name: "slim-ratings-onnx", parameters: "1.1" },
                { name: "slim-summary-phi-3-onnx", parameters: "3.8" },
                { name: "slim-extract-phi-3-onnx", parameters: "3.8" },
                { name: "slim-boolean-phi-3-onnx", parameters: "3.8" },
                { name: "slim-ner-tool", parameters: "1.1" },
                { name: "slim-sentiment-tool", parameters: "1.1" },
                { name: "slim-emotions-tool", parameters: "1.1" },
                { name: "slim-ratings-tool", parameters: "1.1" },
                { name: "slim-intent-tool", parameters: "1.1" },
                { name: "slim-nli-tool", parameters: "1.1" },
                { name: "slim-topics-tool", parameters: "1.1" },
                { name: "slim-tags-tool", parameters: "1.1" },
                { name: "slim-sql-tool", parameters: "1.1" },
                { name: "bling-answer-tool", parameters: "1.1" },
                { name: "slim-category-tool", parameters: "1.1" },
                { name: "slim-xsum-tool", parameters: "1.1" },
                { name: "slim-extract-tool", parameters: "2.8" },
                { name: "slim-extract-phi-3-gguf", parameters: "3.8" },
                { name: "slim-extract-qwen-1.5b-gguf", parameters: "1.5" },
                { name: "slim-extract-qwen-nano-gguf", parameters: "0.5" },
                { name: "slim-extract-tiny-tool", parameters: "1.1" },
                { name: "slim-summary-tiny-tool", parameters: "1.1" },
                { name: "slim-summary-phi-3-gguf", parameters: "1.1" },
                { name: "slim-xsum-phi-3-gguf", parameters: "3.8" },
                { name: "slim-boolean-tool", parameters: "2.8" },
                { name: "slim-boolean-phi-3-gguf", parameters: "3.8" },
                { name: "slim-sa-ner-phi-3-gguf", parameters: "3.8" },
                { name: "slim-sa-ner-tool", parameters: "2.8" },
                { name: "slim-tags-3b-tool", parameters: "2.8" },
                { name: "slim-summary-tool", parameters: "2.8" },
                { name: "slim-q-gen-phi-3-tool", parameters: "3.8" },
                { name: "slim-q-gen-tiny-tool", parameters: "1.1" },
                { name: "slim-qa-gen-tiny-tool", parameters: "1.1" },
                { name: "slim-qa-gen-phi-3-tool", parameters: "3.8" },
            ],
        },
        {
            category: "StableLM Models",
            models: [
                { name: "stablelm-zephyr-3b-ov", parameters: "2.8" },
                { name: "stablelm-2-zephyr-1_6b-ov", parameters: "1.6" },
                { name: "stablelm-2-12b-chat-ov", parameters: "12" },
                { name: "bling-stablelm-3b-gguf", parameters: "2.8" },
            ],
        },
        {
            category: "Gemma Models",
            models: [
                { name: "gemma-7b-it-ov", parameters: "7" },
                { name: "codegemma-7b-it-ov", parameters: "7" },
                { name: "gemma-2b-it-ov", parameters: "2" },
                { name: "gemma-2b-it-onnx", parameters: "2" },
                { name: "gemma-3-4b-gguf", parameters: "4" },
                { name: "gemma-3-12b-gguf", parameters: "12" },
                { name: "gemma-2-9b-instruct-gguf", parameters: "9" },
                { name: "gemma-2-27b-instruct-gguf", parameters: "27" },
            ],
        },
        {
            category: "Specialized Models",
            models: [
                { name: "intel-neural-chat-7b-v3-2-ov", parameters: "7" },
                { name: "tiny-dolphin-2.8-1.1b-ov", parameters: "1.1" },
                { name: "dreamgen-wizardlm-2-7b-ov", parameters: "7" },
                { name: "openchat-3.6-8b-20240522-ov", parameters: "8" },
                { name: "mathstral-7b-ov", parameters: "7.3" },
                { name: "whisper-cpp-base-english", parameters: "NA" },
            ],
        },
        {
            category: "Multimodal Models",
            models: [
                { name: "speech-t5-tts-ov", parameters: "NA" },
                { name: "lcm-dreamshaper-ov", parameters: "NA" },
            ],
        },
    ]

    const totalModels = modelCategories.reduce((sum, category) => sum + category.models.length, 0)

    return (
        <div className="w-full max-w-5xl mx-auto space-y-6 sm:space-y-6 px-2 sm:px-4 lg:px-6">
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

            <div className="space-y-3 sm:space-y-4">
                <div className="text-center space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <Cpu className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                            Intel Supported Models
                        </h1>
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-4xl mx-auto px-2 sm:px-4">
                        Comprehensive list of 225+ AI models optimized for Intel processors using OpenVINO runtime
                    </p>
                </div>
                <Alert>
                    <Info className="h-4 w-4 flex-shrink-0" />
                    <AlertDescription className="text-xs sm:text-sm lg:text-base">
                        These models are optimized for Intel processors and use the OpenVINO (OV) runtime for enhanced performance
                        on Intel hardware including CPUs, GPUs, and NPUs.
                    </AlertDescription>
                </Alert>
            </div>

            <Card>
                <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg lg:text-xl">
                        <Zap className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-blue-600" />
                        <span id="intel-optimization-features">Intel Optimization Features</span>
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm lg:text-base">
                        Key benefits of Intel-optimized models
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-2 sm:space-y-3">
                            <h4 className="font-semibold text-blue-900 dark:text-blue-400 text-sm sm:text-base">Performance Benefits</h4>
                            <ul className="text-xs sm:text-sm space-y-1 text-muted-foreground">
                                <li>• Optimized for Intel CPU, GPU, and NPU architectures</li>
                                <li>• Enhanced inference speed with OpenVINO runtime</li>
                                <li>• Reduced memory footprint and power consumption</li>
                                <li>• Hardware-specific optimizations for latest Intel chips</li>
                            </ul>
                        </div>
                        <div className="space-y-2 sm:space-y-3">
                            <h4 className="font-semibold text-blue-900 dark:text-blue-400 text-sm sm:text-base">Supported Hardware</h4>
                            <ul className="text-xs sm:text-sm space-y-1 text-muted-foreground">
                                <li>• Intel Core processors (Meteor Lake, Lunar Lake, Arrow Lake)</li>
                                <li>• Intel Xeon processors</li>
                                <li>• Intel Arc GPUs</li>
                                <li>• Intel Neural Processing Units (NPUs)</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Separator />

            <Card>
                <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg lg:text-xl">
                        <Database className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                        <span id="intel-supported-models">Intel Supported Models</span>
                    </CardTitle>
                    {/* <CardDescription className="text-xs sm:text-sm lg:text-base">
                        Complete catalog of {totalModels} models optimized for Intel processors
                    </CardDescription> */}
                    <CardDescription className="text-xs sm:text-sm lg:text-base">
                        Complete catalog of 228 models optimized for Intel processors
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-0 sm:p-6">
                    <div className="overflow-x-auto">
                        <div className="min-w-full inline-block align-middle">
                            <table className="w-full border-collapse border border-border rounded-lg">
                                <thead>
                                    <tr className="bg-blue-50 dark:bg-blue-950">
                                        <th className="border border-border px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-left font-semibold text-xs sm:text-sm lg:text-base xl:text-lg text-blue-900 dark:text-blue-100">
                                            Model Type
                                        </th>
                                        <th className="border border-border px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-left font-semibold text-xs sm:text-sm lg:text-base xl:text-lg text-blue-900 dark:text-blue-100">
                                            Available Models
                                        </th>
                                        <th className="border border-border px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-left font-semibold text-xs sm:text-sm lg:text-base xl:text-lg text-blue-900 dark:text-blue-100">
                                            Parameters
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {modelCategories.map((category, index) =>
                                        category.models.map((model, modelIndex) => (
                                            <tr
                                                key={`${category.category}-${modelIndex}`}
                                                className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}
                                            >
                                                {/* Only show Model Type (category) on first row using rowspan */}
                                                {modelIndex === 0 && (
                                                    <td
                                                        rowSpan={category.models.length}
                                                        className="border border-border px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 font-medium text-xs sm:text-sm align-top"
                                                    >
                                                        <div className="break-words">
                                                            <Badge variant="secondary" className="text-xs">
                                                                {category.category}
                                                            </Badge>
                                                        </div>
                                                    </td>
                                                )}

                                                {/* Model Name */}
                                                <td className="border border-border px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4">
                                                    <div className="flex items-center gap-1 sm:gap-2">
                                                        <code className="text-xs sm:text-sm bg-muted px-1 sm:px-2 py-0.5 sm:py-1 rounded font-mono break-all">
                                                            {model.name}
                                                        </code>
                                                    </div>
                                                </td>

                                                {/* Parameters */}
                                                <td className="border border-border px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4">
                                                    <div className="flex items-center gap-1 sm:gap-2">
                                                        <Badge
                                                            variant={model.parameters === "NA" ? "outline" : "default"}
                                                            className="text-xs"
                                                        >
                                                            {model.parameters}
                                                        </Badge>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="prose prose-gray max-w-none">
                <h2
                    id="getting-started"
                    className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight mt-4 sm:mt-6 lg:mt-8 mb-2 sm:mb-3 lg:mb-4"
                >
                    Getting Started with Intel Models
                </h2>
                <p className="text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4">
                    To use Intel-optimized models in Model HQ:
                </p>
                <ol className="text-xs sm:text-sm lg:text-base space-y-1 sm:space-y-2 ml-4 sm:ml-6">
                    <li>Ensure you have an Intel processor with OpenVINO support</li>
                    <li>Select models with the "-ov" suffix from the Models section</li>
                    <li>The system will automatically use Intel optimizations when available</li>
                    <li>Monitor performance improvements in the system metrics</li>
                </ol>

                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight mt-4 sm:mt-6 lg:mt-8 mb-2 sm:mb-3 lg:mb-4">
                    Technical Support
                </h2>
                <p className="text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4">
                    For Intel-specific optimization questions or issues, contact our technical support team at{" "}
                    <code className="bg-muted px-1 sm:px-1.5 py-0.5 rounded text-xs sm:text-sm">support@aibloks.com</code>
                </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-3 sm:p-4 lg:p-6">
                <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2 sm:mb-3 lg:mb-4">
                    🚀 Performance Tip
                </h2>
                <p className="text-xs sm:text-sm lg:text-base text-blue-800 dark:text-blue-200 mb-2 sm:mb-3 lg:mb-4">
                    For optimal performance on Intel hardware, choose models with the highest parameter count that your system can
                    support. Intel's optimization ensures efficient resource utilization.
                </p>
                <a
                    href="/system-configuration"
                    className="inline-flex items-center px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-blue-600 dark:bg-blue-70 text-white text-xs sm:text-sm lg:text-base rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                >
                    Check System Requirements
                </a>
            </div>
        </div>
    )
}
