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
  Server,
  Laptop,
  Database,
  MessageSquare,
  Settings,
  Library,
  Upload,
  Search,
  Zap,
  Users,
  Shield,
  Cloud,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Play,
  FileText,
  Network,
  Lightbulb,
  Target,
} from "lucide-react"

export default function HybridInferencingPage() {
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
            <BreadcrumbPage>Hybrid Inferencing</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Hybrid Inferencing using Model HQ (AI PC + API Server)
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Seamlessly combine local and server-based inference modes for maximum flexibility
        </p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
        {/* Goal Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Goal</h2>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-950 dark:to-slate-900 rounded-lg p-6 border dark:border-gray-800">
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              Seamlessly combine local and server-based inference modes—chat, agents, and semantic search—all from one
              interface.
            </p>
            <p className="text-gray-700 dark:text-gray-200">
              This walkthrough is built for developers or technical practitioners looking to toggle between local AI PC
              inferencing and API server-based inference, including how to access remote vector libraries, run agents
              remotely, and build enterprise-wide RAG pipelines.
            </p>
          </div>
        </section>

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
                  href="https://youtu.be/lMQwcw0TeVM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-600 dark:text-red-200 hover:text-red-700 dark:hover:text-red-100 font-medium"
                >
                  "Unlock Hybrid AI: AI PC + API Server"
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Requirements Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Requirements</h2>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block">
            <Card className="overflow-hidden">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">Tool</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">Purpose</th>
                  </tr>
                </thead>
                <tbody className="dark:text-gray-200">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Model HQ (on AI PC)</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Run local inference and manage flows</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Model HQ API Server</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Run inference remotely; host vector DB</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Vector DB</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                      Store document embeddings (included in Model HQ)
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Sample PDFs/Text Docs</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                      Created from source material included with Model HQ
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            <Card className="border-l-4 border-l-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 dark:border-l-blue-300">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Laptop className="h-6 w-6 text-blue-600 dark:text-blue-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Model HQ (on AI PC)</h3>
                    <p className="text-blue-700 dark:text-blue-200 text-sm">Run local inference and manage flows</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-green-500 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 dark:border-l-green-300">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Server className="h-6 w-6 text-green-600 dark:text-green-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-900 dark:text-green-100 mb-1">Model HQ API Server</h3>
                    <p className="text-green-700 dark:text-green-200 text-sm">Run inference remotely; host vector DB</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-purple-500 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 dark:border-l-purple-300">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Database className="h-6 w-6 text-purple-600 dark:text-purple-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">Vector DB</h3>
                    <p className="text-purple-700 dark:text-purple-200 text-sm">Store document embeddings (included in Model HQ)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-orange-500 bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950 dark:to-amber-900 dark:border-l-orange-300">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <FileText className="h-6 w-6 text-orange-600 dark:text-orange-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-1">Sample PDFs/Text Docs</h3>
                    <p className="text-orange-700 dark:text-orange-200 text-sm">Created from source material included with Model HQ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Step-by-Step Process</h2>
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Connect Model HQ Desktop to the API Server
                  </h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                            <Settings className="h-5 w-5" />
                            1.1 Launch the Model HQ App on your AI PC
                          </h4>
                          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                1
                              </span>
                              <span>Ensure your AI PC is network-accessible to the API server</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                2
                              </span>
                              <span>
                                Select the <strong>Configure</strong> button on the top right of the app
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                3
                              </span>
                              <span>
                                Go to <strong>App</strong> in the Model HQ Configuration Center
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                4
                              </span>
                              <span>
                                Toggle <strong>Connected Enterprise Servers</strong> to <strong>ON</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                5
                              </span>
                              <span>
                                Click <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">&gt;</code> at the bottom of the
                                screen
                              </span>
                            </li>
                          </ul>

                          <div className="my-4">
                            <img
                              src="/cookbooks/v0/hybrid-inferencing/enterprise.png"
                              alt="Turn ON Enterprise"
                              className="rounded-lg shadow-md border dark:border-gray-800 w-full"
                            />
                          </div>

                          <Card className="bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-950 dark:to-amber-900 border-yellow-200 dark:border-yellow-800 mt-4">
                            <CardContent className="p-4">
                              <div className="flex items-start gap-2">
                                <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-300 dark:text-yellow-300 mt-0.5 flex-shrink-0" />
                                <div>
                                  <p className="font-semibold text-yellow-800 dark:text-yellow-100">Note</p>
                                  <p className="text-yellow-700 dark:text-yellow-200 text-sm">
                                    If you do not have an API connection pre-established, you will be directed to the
                                    'Add New API Connection' screen, where you can enter the API Name, IP Address, Port
                                    and Secret Key information to establish a connection.
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                            <CheckCircle className="h-5 w-5" />
                            1.2 Confirm Server Discoverability
                          </h4>
                          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                            <li className="flex items-start gap-2">
                              <Library className="h-4 w-4 mt-1 flex-shrink-0" />
                              <span>
                                When connected, a <strong>Library</strong> button appears on the Main Menu bar
                              </span>
                            </li>
                          </ul>

                          <div className="my-4">
                            <img
                              src="/cookbooks/v0/hybrid-inferencing/library.png"
                              alt="Library Button"
                              className="rounded-lg shadow-md border dark:border-gray-800 w-full"
                            />
                          </div>

                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                            <p className="text-gray-800 dark:text-gray-200 mb-2">This unlocks access to:</p>
                            <ul className="space-y-1 text-gray-700 dark:text-gray-200 text-sm">
                              <li>Chats and agents locally or through API</li>
                              <li>Vector search libraries hosted on the API server</li>
                              <li>Remote model options (e.g., larger LLMs)</li>
                              <li>Server-side agents</li>
                            </ul>
                          </div>
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Run Chat Inference Locally or via Server</h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                            <MessageSquare className="h-5 w-5" />
                            2.1 Start a New Chatbot Session
                          </h4>
                          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                1
                              </span>
                              <span>
                                From the Main Menu, go to <strong>Bots</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                2
                              </span>
                              <span>
                                You'll see local bots like <strong>Fast Start Chatbot</strong> or{" "}
                                <strong>Model HQ Biz Bot</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                3
                              </span>
                              <span>
                                You'll also see server-based bots like <strong>Model HQ API Server Biz Bot</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                4
                              </span>
                              <span>
                                Select the Model HQ{" "}
                                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">API Server Biz Bot</code> and click{" "}
                                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">&gt;</code>
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                5
                              </span>
                              <span>
                                Choose a model (e.g., <strong>Phi-4-ov</strong>) running on the server
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                6
                              </span>
                              <span>Begin chatting with the model</span>
                            </li>
                          </ul>

                          <div className="my-4">
                            <img
                              src="/cookbooks/v0/hybrid-inferencing/phi4.png"
                              alt="phi4-ov"
                              className="rounded-lg shadow-md border dark:border-gray-800 w-full"
                            />
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                            <Zap className="h-5 w-5" />
                            2.2 What Happens Behind the Scenes
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <Card className="bg-gradient-to-br from-gray-100 to-slate-200 dark:from-gray-800 dark:to-slate-700 border dark:border-gray-700">
                              <CardContent className="p-4">
                                <div className="flex items-start gap-2">
                                  <Laptop className="h-5 w-5 text-gray-700 dark:text-gray-200 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Local Mode</h5>
                                    <p className="text-gray-700 dark:text-gray-200 text-sm">Query processed by local model (e.g., 7B)</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                            <Card className="bg-gradient-to-br from-gray-100 to-slate-200 dark:from-gray-800 dark:to-slate-700 border dark:border-gray-700">
                              <CardContent className="p-4">
                                <div className="flex items-start gap-2">
                                  <Server className="h-5 w-5 text-gray-700 dark:text-gray-200 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Server Mode</h5>
                                    <p className="text-gray-700 dark:text-gray-200 text-sm">Request sent over API to Model HQ Server</p>
                                    <ul className="text-xs text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                                      <li>Can be hosted on cloud, datacenter, or office server</li>
                                      <li>Example: 14B parameter model</li>
                                      <li>Response is returned and shown in chat</li>
                                    </ul>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
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
                    Use Remote Knowledge with Local Inference (Hybrid RAG)
                  </h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                            <MessageSquare className="h-5 w-5" />
                            3.1 Start a Local Chat Session
                          </h4>
                          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                1
                              </span>
                              <span>
                                From the Main Menu, select <strong>Chat</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                2
                              </span>
                              <span>
                                Choose <strong>Medium (7B) – Analysis and Typical RAG</strong>, then click{" "}
                                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">&gt;</code>
                              </span>
                            </li>
                          </ul>

                          <div className="my-4">
                            <img
                              src="/cookbooks/v0/hybrid-inferencing/mediumBot.png"
                              alt="Medium Bot"
                              className="rounded-lg shadow-md border dark:border-gray-800 w-full"
                            />
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                            <Database className="h-5 w-5" />
                            3.2 Connect to Remote Knowledge Base
                          </h4>
                          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                1
                              </span>
                              <span>
                                Once chatbot is open, click <strong>Source</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                2
                              </span>
                              <div>
                                <span>
                                  Select a server-hosted library (e.g.,{" "}
                                  <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">UN_Resolutions_0527</code>)
                                </span>
                                <p className="text-sm text-gray-600 mt-1">
                                  If no pre-created source exists, follow Step 5 to build one
                                </p>
                              </div>
                            </li>
                          </ul>

                          <div className="my-4">
                            <img
                              src="/cookbooks/v0/hybrid-inferencing/source.png"
                              alt="Source"
                              className="rounded-lg shadow-md border dark:border-gray-800 w-full"
                            />
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                            <Search className="h-5 w-5" />
                            3.3 Enter a RAG-style Question
                          </h4>
                          <Card className="bg-gradient-to-br from-gray-100 to-slate-200 dark:from-gray-800 dark:to-slate-700 border dark:border-gray-700">
                            <CardContent className="p-4">
                              <p className="text-gray-800 dark:text-gray-200 mb-2">Example:</p>
                              <p className="font-semibold text-gray-900 dark:text-gray-100">
                                "What are the resolutions related to Ukraine?"
                              </p>
                            </CardContent>
                          </Card>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                            <Zap className="h-5 w-5" />
                            3.4 What Happens
                          </h4>
                          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                            <li className="flex items-start gap-2">
                              <Search className="h-4 w-4 mt-1 flex-shrink-0" />
                              <span>Vector search is executed on the API server</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Database className="h-4 w-4 mt-1 flex-shrink-0" />
                              <span>Retrieved documents are returned to your AI PC</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Laptop className="h-4 w-4 mt-1 flex-shrink-0" />
                              <span>Local model performs inference over those chunks</span>
                            </li>
                          </ul>

                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mt-4">
                            <p className="text-gray-800 dark:text-gray-200 mb-2">You see:</p>
                            <ul className="space-y-1 text-gray-700 dark:text-gray-200 text-sm">
                              <li>Full source references</li>
                              <li>Answer generated on-device</li>
                              <li>No tokens leave your machine</li>
                            </ul>
                          </div>

                          <div className="my-4">
                            <img
                              src="/cookbooks/v0/hybrid-inferencing/results.png"
                              alt="Output"
                              className="rounded-lg shadow-md border dark:border-gray-800 w-full"
                            />
                          </div>
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Run Agent Workflows on the API Server</h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                            <Settings className="h-5 w-5" />
                            4.1 Choose a Prebuilt or Custom Agent
                          </h4>
                          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                1
                              </span>
                              <span>
                                From the Main Menu, go to <strong>Agents</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                2
                              </span>
                              <span>
                                Select <strong>Intake Processing</strong>, then click <strong>Run as API</strong>
                              </span>
                            </li>
                          </ul>

                          <div className="my-4">
                            <img
                              src="/cookbooks/v0/hybrid-inferencing/API.png"
                              alt="Run as API"
                              className="rounded-lg shadow-md border dark:border-gray-800 w-full"
                            />
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                            <Upload className="h-5 w-5" />
                            4.2 Provide Input
                          </h4>
                          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                1
                              </span>
                              <span>
                                On the input screen, click <strong>Choose File</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                2
                              </span>
                              <div>
                                <span>Select:</span>
                                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs mt-1 block">
                                  C:\Users\[username]\llmware_data\sample_files\customer_transcripts\customer_transcript_1.txt
                                </code>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                3
                              </span>
                              <span>
                                Click <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">&gt;</code>, confirm input
                                appears, then continue
                              </span>
                            </li>
                          </ul>

                          <div className="my-4">
                            <img
                              src="/cookbooks/v0/hybrid-inferencing/chooseFile.png"
                              alt="Choose Files"
                              className="rounded-lg shadow-md border dark:border-gray-800 w-full"
                            />
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                            <Zap className="h-5 w-5" />
                            4.3 What Happens
                          </h4>
                          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                            <li className="flex items-start gap-2">
                              <Upload className="h-4 w-4 mt-1 flex-shrink-0" />
                              <span>Agent process and input are sent over API</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Server className="h-4 w-4 mt-1 flex-shrink-0" />
                              <span>Agent runs fully on the API Server</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Laptop className="h-4 w-4 mt-1 flex-shrink-0" />
                              <span>Results are returned to the AI PC and displayed</span>
                            </li>
                          </ul>

                          <div className="my-4">
                            <img
                              src="/cookbooks/v0/hybrid-inferencing/Details.png"
                              alt="Detailed output"
                              className="rounded-lg shadow-md border dark:border-gray-800 w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="flex items-baseline gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Build a Shared Semantic Library with Vector DB
                  </h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                            <Library className="h-5 w-5" />
                            5.1 Create a New Library
                          </h4>
                          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                1
                              </span>
                              <span>
                                Click <strong>Library</strong> from the Main Menu
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                2
                              </span>
                              <span>
                                Select <strong>Build New</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                3
                              </span>
                              <span>
                                Name your library (e.g., <strong>agreements</strong>)
                              </span>
                            </li>
                          </ul>

                          <div className="my-4">
                            <img
                              src="/cookbooks/v0/hybrid-inferencing/newLibrary.png"
                              alt="New Library"
                              className="rounded-lg shadow-md border dark:border-gray-800 w-full"
                            />
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                            <Upload className="h-5 w-5" />
                            5.2 Upload Source Files
                          </h4>
                          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                1
                              </span>
                              <span>
                                Click <strong>+Add Files</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                2
                              </span>
                              <div>
                                <span>Choose ~20 PDFs from:</span>
                                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs mt-1 block">
                                  C:\Users\[username]\llmware_data\sample_files\UN-Resolutions-500
                                </code>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                3
                              </span>
                              <span>
                                Select <strong>Done</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                4
                              </span>
                              <span>Files are sent to the API server</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                            <Settings className="h-5 w-5" />
                            5.3 Configure Embedding Settings
                          </h4>
                          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                1
                              </span>
                              <div>
                                <span>Go to:</span>
                                <div className="font-semibold mt-1">
                                  Library Actions → Library → [your library name]
                                </div>
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                2
                              </span>
                              <span>
                                Click <strong>Create Embedding</strong>
                              </span>
                            </li>
                          </ul>

                          <div className="my-4">
                            <img
                              src="/cookbooks/v0/hybrid-inferencing/embedding.png"
                              alt="Create Embedding"
                              className="rounded-lg shadow-md border dark:border-gray-800 w-full"
                            />
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                            <Play className="h-5 w-5" />
                            5.4 Trigger Embedding
                          </h4>
                          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                1
                              </span>
                              <span>
                                Select an embedding model (e.g., <strong>all-mini-lm-l6-v2-ov</strong>)
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                2
                              </span>
                              <span>
                                Click <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">&gt;</code> to start embedding
                                process
                              </span>
                            </li>
                          </ul>

                          <div className="my-4">
                            <img
                              src="/cookbooks/v0/hybrid-inferencing/mini.png"
                              alt="Trigger"
                              className="rounded-lg shadow-md border dark:border-gray-800 w-full"
                            />
                          </div>

                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                            <p className="text-gray-800 dark:text-gray-200 mb-2">
                              <strong>Model HQ will:</strong>
                            </p>
                            <ul className="space-y-1 text-gray-700 dark:text-gray-200 text-sm">
                              <li>Parse and chunk documents</li>
                              <li>Create embeddings</li>
                              <li>Store them in the server-hosted vector DB</li>
                            </ul>
                          </div>

                          <p className="text-gray-800 dark:text-gray-200 mt-4">
                            Once complete, you'll see the library info and embeddings summary.
                          </p>

                          <div className="my-4">
                            <img
                              src="/cookbooks/v0/hybrid-inferencing/final.png"
                              alt="Final State"
                              className="rounded-lg shadow-md border dark:border-gray-800 w-full"
                            />
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                            <CheckCircle className="h-5 w-5" />
                            5.5 What You Now Have
                          </h4>
                          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                            <li className="flex items-start gap-2">
                              <Database className="h-4 w-4 mt-1 flex-shrink-0" />
                              <span>A shareable, queryable knowledge base</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Server className="h-4 w-4 mt-1 flex-shrink-0" />
                              <span>Indexed and hosted on the API server</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Users className="h-4 w-4 mt-1 flex-shrink-0" />
                              <span>Accessible to any Model HQ user connected to the server</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="relative">
              <div className="flex items-baseline gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">
                    6
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Use That Library in Any Chat or Agent Flow</h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                            <MessageSquare className="h-5 w-5" />
                            6.1 Return to Chat
                          </h4>
                          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                1
                              </span>
                              <span>Open a local or server-run chat</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                                2
                              </span>
                              <span>
                                In <strong>Sources</strong>, select your newly created vector library
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                            <Search className="h-5 w-5" />
                            6.2 Ask Questions
                          </h4>
                          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                            <li className="flex items-start gap-2">
                              <MessageSquare className="h-4 w-4 mt-1 flex-shrink-0" />
                              <span>Type natural-language queries related to your document domain</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                            <Zap className="h-5 w-5" />
                            6.3 See Results
                          </h4>
                          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
                            <li className="flex items-start gap-2">
                              <Search className="h-4 w-4 mt-1 flex-shrink-0" />
                              <span>Vector search occurs remotely</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Database className="h-4 w-4 mt-1 flex-shrink-0" />
                              <span>Context is retrieved</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Laptop className="h-4 w-4 mt-1 flex-shrink-0" />
                              <span>Inference runs locally or on the server (your choice)</span>
                            </li>
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

        {/* Summary Table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Summary: Hybrid Modes You Can Mix and Match</h2>

          {/* Desktop Table */}
          <div className="hidden md:block">
            <Card className="overflow-hidden">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">Pattern</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">
                      Vector Search
                    </th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">
                      Inference
                    </th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">
                      Trigger From
                    </th>
                  </tr>
                </thead>
                <tbody className="dark:text-gray-200">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Local-Only</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Local files</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">AI PC</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Desktop</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Server-Only</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Server KB</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">API Server</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Desktop</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Hybrid RAG</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Server KB</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">AI PC</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Desktop</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Remote Agent</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">N/A or Server</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">API Server</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Desktop</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Full API</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">All remote</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">API Server</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">External app</td>
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
                  <Laptop className="h-5 w-5" />
                  Local-Only
                </h3>
                <div className="space-y-2 text-sm dark:text-gray-200">
                  <div>
                    <span className="font-medium">Vector Search:</span> Local files
                  </div>
                  <div>
                    <span className="font-medium">Inference:</span> AI PC
                  </div>
                  <div>
                    <span className="font-medium">Trigger From:</span> Desktop
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-green-500 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 dark:border-l-green-300">
              <CardContent className="p-4">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  Server-Only
                </h3>
                <div className="space-y-2 text-sm dark:text-gray-200">
                  <div>
                    <span className="font-medium">Vector Search:</span> Server KB
                  </div>
                  <div>
                    <span className="font-medium">Inference:</span> API Server
                  </div>
                  <div>
                    <span className="font-medium">Trigger From:</span> Desktop
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-purple-500 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 dark:border-l-purple-300">
              <CardContent className="p-4">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                  <Network className="h-5 w-5" />
                  Hybrid RAG
                </h3>
                <div className="space-y-2 text-sm dark:text-gray-200">
                  <div>
                    <span className="font-medium">Vector Search:</span> Server KB
                  </div>
                  <div>
                    <span className="font-medium">Inference:</span> AI PC
                  </div>
                  <div>
                    <span className="font-medium">Trigger From:</span> Desktop
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-orange-500 bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950 dark:to-amber-900 dark:border-l-orange-300">
              <CardContent className="p-4">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Remote Agent
                </h3>
                <div className="space-y-2 text-sm dark:text-gray-200">
                  <div>
                    <span className="font-medium">Vector Search:</span> N/A or Server
                  </div>
                  <div>
                    <span className="font-medium">Inference:</span> API Server
                  </div>
                  <div>
                    <span className="font-medium">Trigger From:</span> Desktop
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-indigo-500 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 dark:border-l-indigo-300">
              <CardContent className="p-4">
                <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2 flex items-center gap-2">
                  <Cloud className="h-5 w-5" />
                  Full API
                </h3>
                <div className="space-y-2 text-sm dark:text-gray-200">
                  <div>
                    <span className="font-medium">Vector Search:</span> All remote
                  </div>
                  <div>
                    <span className="font-medium">Inference:</span> API Server
                  </div>
                  <div>
                    <span className="font-medium">Trigger From:</span> External app
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pro Tips */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Pro Tips</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-green-500 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 dark:border-l-green-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-green-600 dark:text-green-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Privacy & Offline Access</h3>
                    <p className="text-green-700 dark:text-green-200 text-sm">
                      Use <strong>local inference</strong> when privacy or offline access is important
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 dark:border-l-blue-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Server className="h-6 w-6 text-blue-600 dark:text-blue-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Scale & Performance</h3>
                    <p className="text-blue-700 dark:text-blue-200 text-sm">
                      Use <strong>server inference</strong> for larger models or batch processing
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-purple-500 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 dark:border-l-purple-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Team Collaboration</h3>
                    <p className="text-purple-700 dark:text-purple-200 text-sm">
                      Build <strong>shared vector libraries</strong> for team-wide semantic search
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-orange-500 bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950 dark:to-amber-900 dark:border-l-orange-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Settings className="h-6 w-6 text-orange-600 dark:text-orange-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Easy Configuration</h3>
                    <p className="text-orange-700 dark:text-orange-200 text-sm">
                      All toggles and source configurations are available in a single UI—no CLI required
                    </p>
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
            If you encounter any issues while setting up hybrid inferencing, feel free to contact our support team at {" "} 
            <a
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




