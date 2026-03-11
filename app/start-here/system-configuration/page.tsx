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
import { Laptop, Database, Info } from "lucide-react"

export default function SystemConfigurationPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 px-4 sm:px-6 lg:px-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>System Configuration</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4 sm:space-y-6">
        <div className="text-center space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">System Configuration</h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Ensure your system meets the requirements for optimal Model HQ performance
          </p>
        </div>

        <Alert>
          <Info className="h-4 w-4 flex-shrink-0" />
          <AlertDescription className="text-sm sm:text-base">
            Check your system configuration before downloading the app. These requirements are critical for optimized
            model downloading and performance.
          </AlertDescription>
        </Alert>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <Laptop className="h-5 w-5 flex-shrink-0" />
            <span id="laptop-configuration">Laptop Configuration</span>
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            System requirements for PC and laptop installations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src="/laptop_config.png"
            alt="Laptop Configuration Requirements"
            className="w-full rounded-lg border"
          />
        </CardContent>
      </Card>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <Database className="h-5 w-5 flex-shrink-0" />
            <span id="technical-datasheet">Technical Datasheet</span>
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Comprehensive technical specifications and requirements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="min-w-full inline-block align-middle">
              <table className="w-full border-collapse border border-border rounded-lg">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base lg:text-lg">
                      Category
                    </th>
                    <th className="border border-border px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm:text-base lg:text-lg">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      category: "Processors Supported*",
                      details: (
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              x86_64
                            </Badge>
                            <span className="text-xs sm:text-sm text-muted-foreground">CPU, GPU, NPU</span>
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              ARM64
                            </Badge>
                            <span className="text-xs sm:text-sm text-muted-foreground">CPU, NPU</span>
                          </div>
                        </div>
                      ),
                    },
                    {
                      category: "System Requirements",
                      details: (
                        <Badge variant="destructive" className="text-xs">
                          16 GB RAM minimum
                        </Badge>
                      ),
                    },
                    {
                      category: "Supported Device",
                      details:
                        "Runs best with latest Intel AI PC devices – (i.e., Meteor Lake, Lunar Lake and Arrow Lake) and Xeon",
                    },
                    {
                      category: "Inferencing Technologies",
                      details: (
                        <div className="flex flex-wrap gap-1">
                          {["OpenVINO", "ONNX", "GGUF", "QNN"].map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      ),
                    },
                    {
                      category: "Operating Systems Supported",
                      details: (
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="text-xs">
                            Windows
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            Linux
                          </Badge>
                        </div>
                      ),
                    },
                    {
                      category: "API and Data Center Connectivity",
                      details:
                        "Supports secure, low-latency API connections to on-premise and cloud data centers for real-time data access, model deployment, and orchestration.",
                    },
                    {
                      category: "Models Supported",
                      details:
                        "DeepSeek, Qwen, LLaMA, Mistral, Yi, Phi, StableLM, Falcon, TinyLLaMA, Gemma, Pythia, RedPajama, BERT, RoBERTa, LLMWare SLIM, BLING and DRAGON models",
                    },
                    {
                      category: "Model Types",
                      details:
                        "Generative, Embedding, Rerankers, Classifiers, Image to Text (Vision), Text to SQL, Function-Calling and Enterprise custom models",
                    },
                    {
                      category: "Databases Supported",
                      details: (
                        <div className="flex flex-wrap gap-1">
                          {["PostgreSQL", "MongoDB", "SQLite"].map((db) => (
                            <Badge key={db} variant="outline" className="text-xs">
                              {db}
                            </Badge>
                          ))}
                        </div>
                      ),
                    },
                    {
                      category: "Vector DBs",
                      details: "Milvus, Qdrant, Chroma, FAISS, LanceDB, Redis, PGVector, Neo4j",
                    },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                      <td className="border border-border px-3 sm:px-6 py-3 sm:py-4 font-medium text-xs sm:text-sm">
                        <div className="break-words">{row.category}</div>
                      </td>
                      <td className="border border-border px-3 sm:px-6 py-3 sm:py-4">
                        {typeof row.details === "string" ? (
                          <span className="text-xs sm:text-sm leading-relaxed break-words">{row.details}</span>
                        ) : (
                          row.details
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mt-4">
            * Execution requires Model HQ-specific Processor version to be installed.
          </p>
        </CardContent>
      </Card>

      <div className="prose prose-gray max-w-none">
        <h2
          id="technical-support"
          className="text-xl sm:text-2xl font-semibold tracking-tight mt-6 sm:mt-8 mb-3 sm:mb-4"
        >
          Technical Support
        </h2>
        <p className="text-sm sm:text-base leading-relaxed mb-4">
          Technical support services can be requested by email:{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded text-xs sm:text-sm">support@aibloks.com</code>. Send us a
          message and we will respond to you as quickly as we can.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mt-6 sm:mt-8 mb-3 sm:mb-4">
          Questions and Feedback
        </h2>
        <p className="text-sm sm:text-base leading-relaxed mb-4">
          Go to{" "}
          <strong>
            <a
              href="https://llmware.ai/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://llmware.ai/contact-us
            </a>
          </strong>{" "}
          and send us a message!
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          AI Bloks LLC dba LLMWare.ai may make changes to specifications and product descriptions at any time, without
          notice.
        </p>
      </div>

      <div className="mt-16 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">🚀 Quick Start</h2>
        <p className="text-blue-800 dark:text-blue-200 mb-4">
          New to Model HQ? Check out our getting started guide to begin your journey.
        </p>
        <a
          href="/getting-started"
          className="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
        >
          Get Started
        </a>
      </div>
    </div>
  )
}
