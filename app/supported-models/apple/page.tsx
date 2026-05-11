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

export default function AppleSupportedModelsPage() {
    const modelCategories = [
        {
            category: "Embedding Models",
            models: [
                "all-mini-lm-L6-v2",
                "all-mpnet-base-v2",
                "industry-bert-insurance",
                "industry-bert-contracts",
                "industry-bert-asset-management",
                "industry-bert-sec",
                "industry-bert-loans",
                "nomic-ai/nomic-embed-text-v1",
            ],
        },
        {
            category: "Jina Models",
            models: [
                "jina-reranker-tiny-ppt",
                "jina-reranker-turbo-ppt",
                "jina-reranker-tiny-onnx",
                "jina-reranker-turbo-onnx",
                "jina-reranker-v1-turbo-en",
                "jina-reranker-v1-tiny-en",
            ],
        },
        {
            category: "GPT Models",
            models: [
                "gpt-5.2-pro",
                "gpt-5.2",
                "gpt-5-mini",
                "gpt-5-nano",
                "gpt-4.1",
            ],
        },
        {
            category: "Claude Models",
            models: [
                "claude-opus-4-5",
                "claude-haiku-4-5",
                "claude-sonnet-4-5",
                "claude-sonnet-4-20250514",
                "claude-opus-4-20250514",
            ],
        },
        {
            category: "Gemini Models",
            models: [
                "gemini-3-pro-preview",
                "gemini-3-flash-preview",
                "gemini-2.5-pro",
                "gemini-2.5-flash",
                "gemini-2.5-flash-lite",
            ],
        },
        {
            category: "Qwen Models",
            models: [
                "qwen2.5-vl-3b-instruct-gguf",
                "qwen3-vl-8b-gguf",
                "qwen3-vl-4b-gguf",
                "qwen3-vl-30b-gguf",
                "bling-qwen-mini-tool",
                "bling-qwen-0.5b-gguf",
                "dragon-qwen-7b-gguf",
                "qwen2-7B-instruct-gguf",
                "qwen3-1.7b-gguf",
                "qwen3-4b-instruct-gguf",
                "qwen3-8b-gguf",
                "qwen3-14b-gguf",
                "qwen-3.5-4b-gguf",
                "qwen-3.5-9b-gguf",
                "qwen-3.5-27b-gguf",
                "qwen-3.5-35b-a3b-gguf",
                "qwen2-1.5b-instruct-gguf",
                "qwen2-0.5b-instruct-gguf",
                "qwen-2.5-7b-coder-gguf",
                "qwen-2.5-14b-instruct-gguf",
                "qwen2.5-32b-gguf",
                "qwen2.5-72b-gguf",
                "deepseek-qwen-14b-gguf",
                "deepseek-qwen-7b-gguf",
            ],
        },
        {
            category: "Llama-Based Models",
            models: [
                "llama-3.1-instruct-gguf",
                "llama-2-7b-chat-gguf",
                "llama-3-8b-instruct-gguf",
                "tiny-llama-chat-gguf",
                "llama-3.2-1b-instruct-gguf",
                "llama-3.2-3b-instruct-gguf",
                "dragon-llama-3.1-gguf",
            ],
        },
        {
            category: "Phi Models",
            models: [
                "bling-phi-3-gguf",
                "bling-phi-3.5-gguf",
                "phi-3.5-gguf",
                "phi-4-gguf",
                "phi-4-mini-gguf",
                "phi-4-mini-reasoning-gguf",
                "phi-3-gguf",
                "phi-3-ppt",
            ],
        },
        {
            category: "Mistral Models",
            models: [
                "dragon-mistral-0.3-gguf",
                "mistral-small-3.2-24b-gguf",
                "ministral-3-14b-gguf",
                "openhermes-2.5-mistral-7b-gguf",
                "zephyr-7b-beta-gguf",
                "starling-lm-7b-alpha-gguf",
                "mistral-7b-instruct-v0.3-gguf",
            ],
        },
        {
            category: "Yi Models",
            models: [
                "dragon-yi-9b-gguf",
                "dragon-yi-answer-tool",
            ],
        },
        {
            category: "Gemma Models",
            models: [
                "gemma-3-4b-gguf",
                "gemma-3-12b-gguf",
                "gemma-4-4b-gguf",
                "gemma-4-2b-gguf",
                "gemma-4-26b-gguf",
                "gemma-2-9b-instruct-gguf",
                "gemma-2-27b-instruct-gguf",
            ],
        },
        {
            category: "StableLM Models",
            models: ["bling-stablelm-3b-gguf"],
        },
        {
            category: "Dragon Models",
            models: [
                "dragon-llama-3.1-gguf",
                "dragon-mistral-0.3-gguf",
                "dragon-yi-9b-gguf",
                "dragon-qwen-7b-gguf",
                "bling-qwen-mini-tool",
                "bling-qwen-0.5b-gguf",
                "dragon-yi-answer-tool",
                "dragon-llama-answer-tool",
                "dragon-mistral-answer-tool",
            ],
        },
        {
            category: "Slim Models",
            models: [
                "slim-ner-tool",
                "slim-sentiment-tool",
                "slim-emotions-tool",
                "slim-ratings-tool",
                "slim-intent-tool",
                "slim-nli-tool",
                "slim-topics-tool",
                "slim-tags-tool",
                "slim-sql-tool",
                "bling-answer-tool",
                "slim-category-tool",
                "slim-xsum-tool",
                "slim-extract-tool",
                "slim-extract-phi-3-gguf",
                "slim-extract-qwen-1.5b-gguf",
                "slim-extract-qwen-nano-gguf",
                "slim-extract-tiny-tool",
                "slim-summary-tiny-tool",
                "slim-summary-phi-3-gguf",
                "slim-xsum-phi-3-gguf",
                "slim-boolean-tool",
                "slim-boolean-phi-3-gguf",
                "slim-sa-ner-phi-3-gguf",
                "slim-sa-ner-tool",
                "slim-tags-3b-tool",
                "slim-summary-tool",
                "slim-q-gen-phi-3-tool",
                "slim-q-gen-tiny-tool",
                "slim-qa-gen-tiny-tool",
                "slim-qa-gen-phi-3-tool",
            ],
        },
        {
            category: "Specialized Models",
            models: [
                "gpt-oss-20b-gguf",
                "olmo-13b-gguf",
                "granite-4-micro-gguf",
                "liquidai-lfm2-2.6b-gguf",
                "minicpm-2.6-gguf",
                "whisper-cpp-base-english",
            ],
        },
    ]

    return (
        <div className="w-full max-w-5xl mx-auto space-y-6 sm:space-y-6 px-2 sm:px-4 lg:px-6">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Apple Supported Models</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-3 sm:space-y-4">
                <div className="text-center space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <Cpu className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                            Apple Supported Models
                        </h1>
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-4xl mx-auto px-2 sm:px-4">
                        Comprehensive list of 120+ AI models optimized for Apple Silicon and Apple Neural Engine
                    </p>
                </div>

                <Alert>
                    <Info className="h-4 w-4 flex-shrink-0" />
                    <AlertDescription className="text-xs sm:text-sm lg:text-base">
                        These models are optimized for Apple Silicon processors and leverage Metal Performance Shaders and
                        the Apple Neural Engine for enhanced performance on macOS and iOS devices.
                    </AlertDescription>
                </Alert>
            </div>

            <Card>
                <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg lg:text-xl">
                        <Zap className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-purple-600" />
                        <span id="apple-optimization-features">Apple Optimization Features</span>
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm lg:text-base">
                        Key benefits of Apple-optimized models
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-2 sm:space-y-3">
                            <h4 className="font-semibold text-purple-900 dark:text-purple-400 text-sm sm:text-base">Performance Benefits</h4>
                            <ul className="text-xs sm:text-sm space-y-1 text-muted-foreground">
                                <li>• Optimized for Apple Silicon architectures (M-series chips)</li>
                                <li>• Enhanced inference speed with Metal Performance Shaders</li>
                                <li>• Power-efficient execution on Apple Neural Engine</li>
                                <li>• Unified memory architecture for fast data access</li>
                            </ul>
                        </div>
                        <div className="space-y-2 sm:space-y-3">
                            <h4 className="font-semibold text-purple-900 dark:text-purple-400 text-sm sm:text-base">Supported Hardware</h4>
                            <ul className="text-xs sm:text-sm space-y-1 text-muted-foreground">
                                <li>• Apple Silicon M1, M2, M3, and M4 series processors</li>
                                <li>• Apple Neural Engine (ANE)</li>
                                <li>• Apple integrated GPUs</li>
                                <li>• macOS and iOS devices</li>
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
                        <span id="apple-supported-models">Apple Supported Models</span>
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm lg:text-base">
                        Complete catalog of models optimized for Apple processors
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-0 sm:p-6">
                    <div className="overflow-x-auto">
                        <div className="min-w-full inline-block align-middle">
                            <table className="w-full border-collapse border border-border rounded-lg">
                                <thead>
                                    <tr className="bg-purple-50 dark:bg-purple-950">
                                        <th className="border border-border px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-left font-semibold text-xs sm:text-sm lg:text-base xl:text-lg text-purple-900 dark:text-purple-100">
                                            Model Type
                                        </th>
                                        <th className="border border-border px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-left font-semibold text-xs sm:text-sm lg:text-base xl:text-lg text-purple-900 dark:text-purple-100">
                                            Available Models
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {modelCategories.map((category, index) => (
                                        <tr key={category.category} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                                            <td className="border border-border px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 font-medium text-xs sm:text-sm align-top">
                                                <div className="break-words">
                                                    <Badge variant="secondary" className="text-xs">
                                                        {category.category}
                                                    </Badge>
                                                </div>
                                            </td>
                                            <td className="border border-border px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4">
                                                <div className="space-y-1 sm:space-y-2">
                                                    {category.models.map((model, modelIndex) => (
                                                        <div key={modelIndex} className="flex items-center gap-1 sm:gap-2">
                                                            <code className="text-xs sm:text-sm bg-muted px-1 sm:px-2 py-0.5 sm:py-1 rounded font-mono break-all">
                                                                {model}
                                                            </code>
                                                        </div>
                                                    ))}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
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
                    Getting Started with Apple Models
                </h2>
                <p className="text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4">
                    To use Apple-optimized models in Model HQ:
                </p>
                <ol className="text-xs sm:text-sm lg:text-base space-y-1 sm:space-y-2 ml-4 sm:ml-6">
                    <li>Ensure you have a device with Apple Silicon (M1 or later)</li>
                    <li>Select models optimized for Apple from the Models section</li>
                    <li>The system will automatically use Apple optimizations when available</li>
                    <li>Monitor performance improvements and power efficiency</li>
                </ol>

                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight mt-4 sm:mt-6 lg:mt-8 mb-2 sm:mb-3 lg:mb-4">
                    Technical Support
                </h2>
                <p className="text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4">
                    For Apple-specific optimization questions or issues, contact our technical support team at{" "}
                    <code className="bg-muted px-1 sm:px-1.5 py-0.5 rounded text-xs sm:text-sm">support@aibloks.com</code>
                </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg p-3 sm:p-4 lg:p-6">
                <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-purple-900 dark:text-purple-100 mb-2 sm:mb-3 lg:mb-4">
                    🚀 Performance Tip
                </h2>
                <p className="text-xs sm:text-sm lg:text-base text-purple-800 dark:text-purple-200 mb-2 sm:mb-3 lg:mb-4">
                    Apple-optimized models are designed for efficient on-device computing. They provide excellent
                    performance while maintaining low power consumption thanks to Apple Silicon's unified memory
                    architecture and Neural Engine.
                </p>
                <a
                    href="/system-configuration"
                    className="inline-flex items-center px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-purple-600 dark:bg-purple-700 text-white text-xs sm:text-sm lg:text-base rounded-md hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
                >
                    Check System Requirements
                </a>
            </div>
        </div>
    )
}
