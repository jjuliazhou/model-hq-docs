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

export default function QualcommSupportedModelsPage() {
    const modelCategories = [
        {
            category: "Qwen Models",
            models: [
                "qwen-2.5-14b-instruct",
                "qwen2.5-32b",
                "qwen2-7B-instruct",
                "qwen2.5-7b-coder",
                "qwen-2-0.5b-instruct",
                "qwen2-1.5-instruct",
                "bling-qwen-0.5b",
                "bling-qwen-1.5b",
            ],
        },
        {
            category: "Llama-Based Models",
            models: [
                "llama-3.2-3b-onnx-qnn",
                "llama-3.2-3b-instruct-onnx",
                "llama-2-chat",
                "llama-3.1-instruct",
                "llama-3.2-ib-instruct",
                "tiny-llama-chat",
                "bling-tiny-llama",
                "llama-2-7b-chat",
                "llama-3.2-1b-instruct",
                "llama-3-8b-instruct",
            ],
        },
        {
            category: "Phi Models",
            models: ["phi-3.5", "phi-3-vision", "phi-3", "bling-phi-3", "bling-phi-3.5"],
        },
        {
            category: "Mistral Models",
            models: ["mistral-7b-instruct-v0.3", "openhermes-2.5-mistral"],
        },
        {
            category: "Gemma Models",
            models: ["gemma-2b-it", "gemma-2-9b-instruct", "gemma-2-27b-instruct"],
        },
        {
            category: "Dragon Models",
            models: [
                "dragon-mistral-0.3",
                "dragon-llama-3.1",
                "dragon-yi-answer-tool",
                "dragon-llama-answer-tool",
                "dragon-mistral-answer-tool",
                "dragon-yi-9b",
                "dragon-qwen-7b",
            ],
        },
        {
            category: "Slim Models",
            models: [
                "slim-extract-phi-3",
                "slim-boolean-phi-3",
                "slim-summary-phi-3",
                "slim-emotions",
                "slim-topics",
                "slim-sql",
                "slim-summary-tiny",
                "slim-sentiment",
                "slim-extract-tiny",
                "slim-intent",
                "slim-tags",
                "slim-ratings",
                "slim-ner",
                "slim-extract-qwen-nano",
                "slim-sa-ner-phi-3",
                "slim-xsum-phi-3",
                "slim-sentiment-tool",
                "slim-extract-tool",
                "slim-summary-tool",
                "slim-boolean-tool",
                "slim-tags-tool",
                "slim-xsum-tool",
                "slim-emotions-tool",
                "slim-topics-tool",
                "slim-sql-tool",
                "slim-extract-qwen-1.5b",
                "slim-ner-tool",
                "slim-sa-ner-tool",
                "slim-tags-3b-tool",
                "slim-extract-tiny-tool",
                "slim-ratings-tool",
                "slim-intent-tool",
                "slim-category-tool",
                "slim-nli-tool",
                "slim-q-gen-phi-3-tool",
                "slim-summary-tiny-tool",
                "slim-qa-gen-phi-3-tool",
                "slim-qa-gen-tiny-tool",
            ],
        },
        {
            category: "StableLM Models",
            models: ["bling-stablelm-3b"],
        },
        {
            category: "Jina Models",
            models: ["jina-reranker-turbo", "jina-reranker-tiny"],
        },
        {
            category: "Specialized Models",
            models: ["unitary-unbiased-toxic-roberta", "valurank-distilroberta-bias"],
        },
        {
            category: "Other Models",
            models: [
                "protectai-prompt-injection",
                "zephyr-7b-beta",
                "starling-1m-7b-alpha",
                "miniCPM-V-2_6",
                "bling-answer-tool",
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
                        <BreadcrumbPage>Qualcomm Supported Models</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-3 sm:space-y-4">
                <div className="text-center space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <Cpu className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                            Qualcomm Supported Models
                        </h1>
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-4xl mx-auto px-2 sm:px-4">
                        Comprehensive list of AI models optimized for Qualcomm Snapdragon processors using QNN runtime
                    </p>
                </div>

                <Alert>
                    <Info className="h-4 w-4 flex-shrink-0" />
                    <AlertDescription className="text-xs sm:text-sm lg:text-base">
                        These models are optimized for Qualcomm Snapdragon processors and leverage the Qualcomm Neural Network (QNN)
                        SDK for enhanced performance on Qualcomm hardware including CPUs, GPUs, and NPUs.
                    </AlertDescription>
                </Alert>
            </div>

            <Card>
                <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg lg:text-xl">
                        <Zap className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-green-600" />
                        <span id="qualcomm-optimization-features">Qualcomm Optimization Features</span>
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm lg:text-base">
                        Key benefits of Qualcomm-optimized models
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-2 sm:space-y-3">
                            <h4 className="font-semibold text-green-900 dark:text-green-400 text-sm sm:text-base">Performance Benefits</h4>
                            <ul className="text-xs sm:text-sm space-y-1 text-muted-foreground">
                                <li>• Optimized for Qualcomm Snapdragon architectures</li>
                                <li>• Enhanced inference speed with QNN runtime</li>
                                <li>• Power-efficient execution on mobile and edge devices</li>
                                <li>• Hardware-specific optimizations for Hexagon DSP and Adreno GPU</li>
                            </ul>
                        </div>
                        <div className="space-y-2 sm:space-y-3">
                            <h4 className="font-semibold text-green-900 dark:text-green-400 text-sm sm:text-base">Supported Hardware</h4>
                            <ul className="text-xs sm:text-sm space-y-1 text-muted-foreground">
                                <li>• Qualcomm Snapdragon processors</li>
                                <li>• Hexagon Digital Signal Processors (DSP)</li>
                                <li>• Adreno GPUs</li>
                                <li>• Qualcomm AI Engine and NPUs</li>
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
                        <span id="qualcomm-supported-models">Qualcomm Supported Models</span>
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm lg:text-base">
                        Complete catalog of models optimized for Qualcomm processors
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-0 sm:p-6">
                    <div className="overflow-x-auto">
                        <div className="min-w-full inline-block align-middle">
                            <table className="w-full border-collapse border border-border rounded-lg">
                                <thead>
                                    <tr className="bg-green-50 dark:bg-green-950">
                                        <th className="border border-border px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-left font-semibold text-xs sm:text-sm lg:text-base xl:text-lg text-green-900 dark:text-green-100">
                                            Model Type
                                        </th>
                                        <th className="border border-border px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-left font-semibold text-xs sm:text-sm lg:text-base xl:text-lg text-green-900 dark:text-green-100">
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
                    Getting Started with Qualcomm Models
                </h2>
                <p className="text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4">
                    To use Qualcomm-optimized models in Model HQ:
                </p>
                <ol className="text-xs sm:text-sm lg:text-base space-y-1 sm:space-y-2 ml-4 sm:ml-6">
                    <li>Ensure you have a Qualcomm Snapdragon processor with QNN support</li>
                    <li>Select models optimized for Qualcomm from the Models section</li>
                    <li>The system will automatically use Qualcomm optimizations when available</li>
                    <li>Monitor performance improvements and power efficiency</li>
                </ol>

                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight mt-4 sm:mt-6 lg:mt-8 mb-2 sm:mb-3 lg:mb-4">
                    Technical Support
                </h2>
                <p className="text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4">
                    For Qualcomm-specific optimization questions or issues, contact our technical support team at{" "}
                    <code className="bg-muted px-1 sm:px-1.5 py-0.5 rounded text-xs sm:text-sm">support@aibloks.com</code>
                </p>
            </div>

            <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-3 sm:p-4 lg:p-6">
                <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-green-900 dark:text-green-100 mb-2 sm:mb-3 lg:mb-4">
                    🚀 Performance Tip
                </h2>
                <p className="text-xs sm:text-sm lg:text-base text-green-800 dark:text-green-200 mb-2 sm:mb-3 lg:mb-4">
                    Qualcomm-optimized models are designed for efficient mobile and edge computing. They provide excellent
                    performance while maintaining low power consumption for extended battery life.
                </p>
                <a
                    href="/system-configuration"
                    className="inline-flex items-center px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-green-600 dark:bg-green-700 text-white text-xs sm:text-sm lg:text-base rounded-md hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
                >
                    Check System Requirements
                </a>
            </div>
        </div>
    )
}
