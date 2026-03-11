import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import {
  FileText,
  MessageSquare,
  Settings,
  Users,
  Code,
  CheckCircle,
  ExternalLink,
  Lightbulb,
  Download,
  BarChart3,
  Shield,
  Clock,
  Folder,
} from "lucide-react"

export default function RAGBotPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 px-4 sm:px-6 lg:px-8 py-6 bg-white dark:bg-gray-950">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Cookbooks</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>RAG Bot</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">RAG Bot</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Fast and flexible document analysis using Retrieval-Augmented Generation
        </p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
        {/* Introduction */}
        <div className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-950 dark:to-slate-900 rounded-lg p-6 border dark:border-gray-800">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            The RAG Bot offers a fast and flexible way to analyze and extract insights from enterprise documents like
            executive employment agreements, MSAs, and NDAs. Using a Retrieval-Augmented Generation (RAG) architecture,
            this bot supports multiple modes of interaction including chatbot, agent, batch processing, and API
            integration; making it ideal for business users, analysts, and developers alike. With no setup code
            required, users can quickly ask natural language questions, run multi-step agent workflows, and scale
            analysis across large volumes of documents, all from a single no-code platform.
          </p>
        </div>

        {/* Video Tutorial */}
        <Card className="border-l-4 border-l-red-500 bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950 dark:to-rose-900 dark:border-l-red-300">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div>
                <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">Video Tutorial Available</h3>
                <p className="text-red-800 dark:text-red-100 mb-3">
                  This walkthrough is also demonstrated step-by-step on our YouTube video:
                </p>
                <a
                  href="https://youtu.be/uy53WKrMOXc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-600 dark:text-red-200 hover:text-red-700 dark:hover:text-red-100 font-medium"
                >
                  "Private AI for Document Analysis in AI PC"
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Use Case */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Use Case</h2>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-950 dark:to-slate-900 rounded-lg p-6 border dark:border-gray-800">
            <p className="text-gray-800 dark:text-gray-200">
              Analyze and extract key information from executive employment agreements (a stand-in for many enterprise
              documents like MSAs, NDAs, research papers, etc.) using Model HQ's <strong>Chat</strong>,{" "}
              <strong>Agent</strong>, and <strong>API</strong> modes.
            </p>
          </div>
        </section>

        {/* Prerequisites */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Prerequisites</h2>
          </div>
          <Card className="border dark:border-gray-800 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800">
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gray-600 dark:text-gray-300 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 dark:text-gray-200">Model HQ installed locally</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gray-600 dark:text-gray-300 mt-0.5 flex-shrink-0" />
                  <div className="text-gray-800 dark:text-gray-200">
                    <span>A set of executive employment agreement PDFs (located at:</span>
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm mt-1 block">
                      C:\users\[username]\llmware_data\sample_files\agreements\[list of 12 executive employment
                      agreements]
                    </code>
                    <div className="my-4">
                      <img
                        src="/cookbooks/v0/rag-bot/docPath.png"
                        alt="doc path"
                        className="rounded-lg shadow-md border dark:border-gray-800 w-full"
                      />
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gray-600 dark:text-gray-300 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 dark:text-gray-200">An AI PC or local server</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gray-600 dark:text-gray-300 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800 dark:text-gray-200">
                    <em>(Optional)</em> Python development environment for API integration
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Step-by-Step Process */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Step-by-Step Recipe</h2>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex items-baseline gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Start with Local Chatbot Mode (Fast Start)</h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                          <MessageSquare className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                          <p className="font-semibold text-gray-900 dark:text-gray-100">
                            Purpose: Quickly chat with a document using an out-of-the-box RAG bot.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Steps:</h4>
                          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                1
                              </span>
                              <span>Launch Model HQ locally</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                2
                              </span>
                              <span>
                                Open the <strong>Fast Start</strong>, select <strong>Medium Chatbot</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                3
                              </span>
                              <div>
                                <span>Attach an Executive Employment Agreement document</span>
                                <div className="text-sm text-gray-600 mt-1">
                                  (e.g., 15-page PDF found at:{" "}
                                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                                    C:\users\[username]\llmware_data\sample_files\agreements\
                                  </code>
                                  )
                                </div>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                4
                              </span>
                              <span>Model HQ auto-ingests, parses, and chunks the document (~1s)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                5
                              </span>
                              <div>
                                <span>Ask natural language questions like:</span>
                                <ul className="ml-4 mt-1 space-y-1 text-sm">
                                  <li>"What's the effective date of the agreement?"</li>
                                  <li>"How many vacation days is the executive entitled to?"</li>
                                  <li>"What is the executive's annual base salary?"</li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                          <p className="text-gray-800 dark:text-gray-200 mb-2">Model HQ will return:</p>
                          <ul className="space-y-1 text-gray-700 dark:text-gray-200 text-sm">
                            <li>Detailed answers</li>
                            <li>Source page references</li>
                            <li>Option to save/download chat transcripts</li>
                          </ul>
                        </div>

                        <div className="my-4">
                          <img
                            src="/cookbooks/v0/rag-bot/executiveEmploymentAgreement.png"
                            alt="Executive Employment Agreement"
                            className="rounded-lg shadow-md border dark:border-gray-800 w-full"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex items-baseline gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Run Agent-Based Analysis (Single Document)</h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                          <Settings className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                          <p className="font-semibold text-gray-900 dark:text-gray-100">
                            Purpose: Automate multi-step document review using a reusable agent.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Steps:</h4>
                          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                1
                              </span>
                              <span>
                                Switch to <strong>Agent Mode</strong> from Home
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                2
                              </span>
                              <span>
                                Select the built-in <strong>Contract Analyzer Agent</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                3
                              </span>
                              <div>
                                <span>
                                  Upload a document from the{" "}
                                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">agreements</code> folder found in:
                                </span>
                                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs mt-1 block">
                                  C:\users\[username]\llmware_data\sample_files\agreements\[list of 12 executive
                                  employment agreements]
                                </code>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                4
                              </span>
                              <span>
                                Agent will run 3 predefined questions (effective date, annual rate of base salary,
                                number of vacation days)
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="my-4">
                          <img
                            src="/cookbooks/v0/rag-bot/contractAnalyzer.png"
                            alt="Contract Analyzer"
                            className="rounded-lg shadow-md border dark:border-gray-800 w-full"
                          />
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                          <p className="text-gray-800 dark:text-gray-200 mb-2">Output includes:</p>
                          <ul className="space-y-1 text-gray-700 dark:text-gray-200 text-sm">
                            <li>Full inference log</li>
                            <li>
                              Files in <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">.json</code>,{" "}
                              <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">.docx</code>, and{" "}
                              <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">.txt</code> formats
                            </li>
                          </ul>
                        </div>

                        <Card className="bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-950 dark:to-amber-900 border-yellow-200 dark:border-yellow-800">
                          <CardContent className="p-4">
                            <div className="flex items-start gap-2">
                              <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-300 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="font-semibold text-yellow-800 dark:text-yellow-100">Bonus</p>
                                <p className="text-yellow-700 dark:text-yellow-200 text-sm">
                                  Customize the questions, add/delete steps, or expand as needed. Read more about this{" "}
                                  <a
                                    href="https://model-hq-docs.vercel.app/agent/create-new-agent"
                                    className="text-yellow-600 dark:text-yellow-200 hover:text-yellow-700 dark:hover:text-yellow-100 underline"
                                  >
                                    here
                                  </a>
                                  .
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex items-baseline gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Scale with Batch Agent Mode (Multiple Documents)
                  </h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                          <Folder className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                          <p className="font-semibold text-gray-900 dark:text-gray-100">
                            Purpose: Analyze dozens or hundreds of agreements in one go.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Steps:</h4>
                          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                1
                              </span>
                              <span>
                                Go to <strong>Agent → Load Existing</strong>, select <strong>ContractAnalyzer</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                2
                              </span>
                              <span>
                                Choose <strong>Batch Run</strong> in the UI
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                3
                              </span>
                              <div>
                                <span>
                                  Upload multiple documents (e.g., first 5 from the sample agreements folder for this
                                  example)
                                </span>
                                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs mt-1 block">
                                  C:\users\[username]\llmware_data\sample_files\agreements\
                                </code>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                4
                              </span>
                              <span>Agent will iterate through each document and apply consistent questions</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                          <p className="text-gray-800 dark:text-gray-200 mb-2">
                            <strong>Final Output:</strong>
                          </p>
                          <ul className="space-y-1 text-gray-700 dark:text-gray-200 text-sm">
                            <li>Consolidated table of answers</li>
                            <li>Downloadable spreadsheet or report</li>
                            <li>Supports aggregation, comparison, and audit workflows</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex items-baseline gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Enable Backend API Mode (For Developers)</h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                          <Code className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                          <p className="font-semibold text-gray-900 dark:text-gray-100">
                            Purpose: Integrate Model HQ into custom applications via API.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Steps:</h4>
                          <ol className="space-y-2 text-gray-800 dark:text-gray-200">
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                1
                              </span>
                              <div>
                                <span>Launch Model HQ as a local backend server:</span>
                                <ul className="ml-4 mt-1 space-y-1 text-sm">
                                  <li>Option 1: Localhost</li>
                                  <li>Option 2: Mini API server for LAN access</li>
                                </ul>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                2
                              </span>
                              <span>Access the API using the Model HQ Python client</span>
                            </li>
                          </ol>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Two Integration Modes:</h4>

                          <div className="space-y-4">
                            <div>
                              <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">a. Agent Run via API</p>
                              <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4">
                                <pre className="text-sm font-mono text-gray-800 dark:text-gray-200 overflow-x-auto">
                                  <code>{`from modelhq_client import ModelHQ

client = ModelHQ()
result = client.run_agent(
    file="mycontract.pdf", 
    agent="contract_analyzer"
)`}</code>
                                </pre>
                              </div>
                            </div>

                            <div>
                              <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">b. Batch Folder Run via API</p>
                              <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4">
                                <pre className="text-sm font-mono text-gray-800 dark:text-gray-200 overflow-x-auto">
                                  <code>{`questions = [
    "How much is the base salary?", 
    "What is the termination clause?"
]
client.batch_analyze(
    folder="agreements_folder", 
    questions=questions
)`}</code>
                                </pre>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                          <p className="text-gray-800 dark:text-gray-200 mb-2">
                            <strong>Output Includes:</strong>
                          </p>
                          <ul className="space-y-1 text-gray-700 dark:text-gray-200 text-sm">
                            <li>Answers per document per question</li>
                            <li>Extracted text (optional) for storage or audits</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Output Options */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <Download className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Output Options</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Word Report</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">.docx</code>
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Excel Spreadsheet</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">.xlsx</code>
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">API JSON</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">JSON payload</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Raw Text</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Extracted text</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Inference History</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Full processing log</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Use Cases */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <Users className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Example Use Cases</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 dark:border-l-blue-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">HR Team</h3>
                    <p className="text-blue-700 dark:text-blue-200 text-sm">Reviewing executive compensation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-green-500 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 dark:border-l-green-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-green-600 dark:text-green-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Legal Team</h3>
                    <p className="text-green-700 dark:text-green-200 text-sm">Comparing MSA clauses</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-purple-500 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 dark:border-l-purple-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-purple-600 dark:text-purple-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Compliance</h3>
                    <p className="text-purple-700 dark:text-purple-200 text-sm">Tracking employment clauses</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-orange-500 bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950 dark:to-amber-900 dark:border-l-orange-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Code className="h-6 w-6 text-orange-600 dark:text-orange-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Developers</h3>
                    <p className="text-orange-700 dark:text-orange-200 text-sm">Building internal search tools</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Summary Table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Summary of Interaction Modes</h2>

          {/* Desktop Table */}
          <div className="hidden md:block">
            <Card className="overflow-hidden">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">Mode</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">
                      User Type
                    </th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">Input</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">Output</th>
                  </tr>
                </thead>
                <tbody className="dark:text-gray-200">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">
                      <strong>Chatbot (UI)</strong>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Non-technical</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Single document</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Chat + answers + source references</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">
                      <strong>Agent (UI)</strong>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Analysts, HR</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Single document</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Structured report</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">
                      <strong>Batch Agent</strong>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Ops/Compliance</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Folder of documents</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Consolidated output, bulk analysis</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">
                      <strong>API</strong>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Developers</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Files, questions</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">JSON/text for apps, dashboards, workflows</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            <Card className="border-l-4 border-l-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 dark:border-l-blue-300">
              <CardContent className="p-4">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Chatbot (UI)
                </h3>
                <div className="space-y-2 text-sm dark:text-gray-200">
                  <div>
                    <span className="font-medium">User Type:</span> Non-technical
                  </div>
                  <div>
                    <span className="font-medium">Input:</span> Single document
                  </div>
                  <div>
                    <span className="font-medium">Output:</span> Chat + answers + source references
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-green-500 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 dark:border-l-green-300">
              <CardContent className="p-4">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Agent (UI)
                </h3>
                <div className="space-y-2 text-sm dark:text-gray-200">
                  <div>
                    <span className="font-medium">User Type:</span> Analysts, HR
                  </div>
                  <div>
                    <span className="font-medium">Input:</span> Single document
                  </div>
                  <div>
                    <span className="font-medium">Output:</span> Structured report
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-purple-500 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 dark:border-l-purple-300">
              <CardContent className="p-4">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                  <Folder className="h-5 w-5" />
                  Batch Agent
                </h3>
                <div className="space-y-2 text-sm dark:text-gray-200">
                  <div>
                    <span className="font-medium">User Type:</span> Ops/Compliance
                  </div>
                  <div>
                    <span className="font-medium">Input:</span> Folder of documents
                  </div>
                  <div>
                    <span className="font-medium">Output:</span> Consolidated output, bulk analysis
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-orange-500 bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950 dark:to-amber-900 dark:border-l-orange-300">
              <CardContent className="p-4">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  API
                </h3>
                <div className="space-y-2 text-sm dark:text-gray-200">
                  <div>
                    <span className="font-medium">User Type:</span> Developers
                  </div>
                  <div>
                    <span className="font-medium">Input:</span> Files, questions
                  </div>
                  <div>
                    <span className="font-medium">Output:</span> JSON/text for apps, dashboards, workflows
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Support */}
        <div className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-950 dark:to-slate-900 rounded-lg p-6 border dark:border-gray-800 text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Need Help?</h3>
          <p className="text-gray-700 dark:text-gray-200">
            If you encounter any issues while updating your model configuration, feel free to contact our support team
            at <a
                href="mailto:support@aibloks.com"
                className="text-green-800 dark:text-green-200 underline hover:text-green-900 dark:hover:text-green-100"
              >
                support@aibloks.com
              </a>
              .
          </p>
        </div>
      </div>
    </div>
  )
}
