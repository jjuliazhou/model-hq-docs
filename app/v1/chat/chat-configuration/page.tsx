import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DocPageLayout } from "@/components/doc-page-layout"
import { references } from "./references"

export default function ChatConfigurationPage() {
  return (
    <DocPageLayout references={references}>
      <div className="space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Chat Configuration</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Chat Configuration</h1>
        </div>

        <div className="prose prose-gray max-w-none">
          <p>
            The Configure panel provides access to advanced generation and retrieval parameters that control how Model HQ processes queries, retrieves context, and generates responses. These settings enable fine-tuning of the chat experience for different use cases, from precise factual responses to creative outputs.
          </p>

          <p>
            Key configuration areas include:
          </p>

          <ul>
            <li><strong>Generation parameters</strong>: Temperature, max tokens, sampling behavior</li>
            <li><strong>Memory management</strong>: Chat history usage and retention</li>
            <li><strong>Retrieval options</strong>: Number of results, query strategies, similarity thresholds</li>
            <li><strong>Document processing</strong>: PDF parsing methods, table handling, CSV interpretation</li>
          </ul>

          <p>
            These values can be adjusted to control creativity, response length, and the degree to which retrieved context influences output. Understanding these parameters allows users to optimize Model HQ for specific workflows, whether prioritizing accuracy, speed, or contextual richness.
          </p>

          <h2 id="1-opening-the-configuration-panel">1. Opening the configuration panel</h2>

          <p>
            The configuration panel can be accessed by clicking the "⚙️" button located beneath the chat input box.
          </p>

          <img src="/v1/chat/chatConfig/chatConfig.png" alt="openChatConfig" />

          <h2 id="2-configuration-options">2. Configuration options</h2>

          <p>
            Once opened, the configuration panel presents a comprehensive set of options that control how memory, retrieval, and text generation behave in a Retrieval-Augmented Generation (RAG) setup.
          </p>

          <img src="/v1/chat/chatConfig/config.png" alt="config" />

          <h2 id="3-configuration-parameters-overview">3. Configuration parameters overview</h2>

          <p>
            The table below provides a quick reference of all available configuration parameters, their types, default values, and available options:
          </p>

          <div className="overflow-x-auto">
            {/* Desktop Table View */}
            <table className="hidden md:table w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left">Parameter</th>
                  <th className="border border-border px-4 py-2 text-left">Type</th>
                  <th className="border border-border px-4 py-2 text-left">Default</th>
                  <th className="border border-border px-4 py-2 text-left">Options/Range</th>
                  <th className="border border-border px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Use Memory in Chat</strong></td>
                  <td className="border border-border px-4 py-2">Toggle</td>
                  <td className="border border-border px-4 py-2">ON</td>
                  <td className="border border-border px-4 py-2">ON / OFF</td>
                  <td className="border border-border px-4 py-2">Controls whether conversation history is included as context</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Memory Apply Rule</strong></td>
                  <td className="border border-border px-4 py-2">Dropdown</td>
                  <td className="border border-border px-4 py-2">All / maximum possible</td>
                  <td className="border border-border px-4 py-2">All / maximum possible, Last / minimum</td>
                  <td className="border border-border px-4 py-2">Defines how much chat history is stored and reused</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Memory Apply Role</strong></td>
                  <td className="border border-border px-4 py-2">Dropdown</td>
                  <td className="border border-border px-4 py-2">Both</td>
                  <td className="border border-border px-4 py-2">Both, User, Assistant</td>
                  <td className="border border-border px-4 py-2">Specifies which messages are considered when building memory</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>context_top_n</strong></td>
                  <td className="border border-border px-4 py-2">Integer</td>
                  <td className="border border-border px-4 py-2">10</td>
                  <td className="border border-border px-4 py-2">5-20 (recommended)</td>
                  <td className="border border-border px-4 py-2">Number of top-ranked text chunks retrieved for context</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>context_target_size</strong></td>
                  <td className="border border-border px-4 py-2">Integer</td>
                  <td className="border border-border px-4 py-2">3000</td>
                  <td className="border border-border px-4 py-2">2000-8000 (recommended)</td>
                  <td className="border border-border px-4 py-2">Target token size for final context sent to model</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>max_output</strong></td>
                  <td className="border border-border px-4 py-2">Integer</td>
                  <td className="border border-border px-4 py-2">2048</td>
                  <td className="border border-border px-4 py-2">256-4096 (recommended)</td>
                  <td className="border border-border px-4 py-2">Maximum number of tokens the model can generate</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>temperature</strong></td>
                  <td className="border border-border px-4 py-2">Float</td>
                  <td className="border border-border px-4 py-2">0.3</td>
                  <td className="border border-border px-4 py-2">0.0-1.0</td>
                  <td className="border border-border px-4 py-2">Controls randomness and creativity in generation</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Query Strategy</strong></td>
                  <td className="border border-border px-4 py-2">Dropdown</td>
                  <td className="border border-border px-4 py-2">semantic</td>
                  <td className="border border-border px-4 py-2">semantic, keyword-or, keyword-and, exact</td>
                  <td className="border border-border px-4 py-2">Defines how queries are matched against documents</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Sample in Generation</strong></td>
                  <td className="border border-border px-4 py-2">Toggle</td>
                  <td className="border border-border px-4 py-2">ON</td>
                  <td className="border border-border px-4 py-2">ON / OFF</td>
                  <td className="border border-border px-4 py-2">Controls probabilistic sampling during text generation</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Table Only Mode</strong></td>
                  <td className="border border-border px-4 py-2">Toggle</td>
                  <td className="border border-border px-4 py-2">OFF</td>
                  <td className="border border-border px-4 py-2">ON / OFF</td>
                  <td className="border border-border px-4 py-2">Restricts retrieval to embedded tables only</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Interpret CSV as DB Table</strong></td>
                  <td className="border border-border px-4 py-2">Toggle</td>
                  <td className="border border-border px-4 py-2">OFF</td>
                  <td className="border border-border px-4 py-2">ON / OFF</td>
                  <td className="border border-border px-4 py-2">Treats CSV files as database tables for SQL-style queries</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>PDF Parsing Options</strong></td>
                  <td className="border border-border px-4 py-2">Dropdown</td>
                  <td className="border border-border px-4 py-2">Digital (Fastest)</td>
                  <td className="border border-border px-4 py-2">Digital (Fastest), OCR, Vision Model</td>
                  <td className="border border-border px-4 py-2">Controls how PDF files are processed</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Show Search Results and Context</strong></td>
                  <td className="border border-border px-4 py-2">Toggle</td>
                  <td className="border border-border px-4 py-2">OFF</td>
                  <td className="border border-border px-4 py-2">ON / OFF</td>
                  <td className="border border-border px-4 py-2">Displays retrieved search results and context in UI</td>
                </tr>
              </tbody>
            </table>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Use Memory in Chat</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Toggle</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">ON</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">ON / OFF</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Controls whether conversation history is included as context</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Memory Apply Rule</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Dropdown</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">All / maximum possible</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">All / maximum possible, Last / minimum</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Defines how much chat history is stored and reused</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Memory Apply Role</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Dropdown</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">Both</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">Both, User, Assistant</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Specifies which messages are considered when building memory</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>context_top_n</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Integer</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">10</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">5-20 (recommended)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Number of top-ranked text chunks retrieved for context</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>context_target_size</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Integer</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">3000</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">2000-8000 (recommended)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Target token size for final context sent to model</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>max_output</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Integer</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">2048</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">256-4096 (recommended)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Maximum number of tokens the model can generate</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>temperature</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Float</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">0.3</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">0.0-1.0</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Controls randomness and creativity in generation</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Query Strategy</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Dropdown</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">semantic</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">semantic, keyword-or, keyword-and, exact</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Defines how queries are matched against documents</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Sample in Generation</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Toggle</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">ON</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">ON / OFF</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Controls probabilistic sampling during text generation</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Table Only Mode</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Toggle</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">OFF</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">ON / OFF</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Restricts retrieval to embedded tables only</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Interpret CSV as DB Table</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Toggle</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">OFF</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">ON / OFF</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Treats CSV files as database tables for SQL-style queries</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>PDF Parsing Options</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Dropdown</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">Digital (Fastest)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">Digital (Fastest), OCR, Vision Model</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Controls how PDF files are processed</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Show Search Results and Context</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Toggle</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">OFF</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">ON / OFF</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Displays retrieved search results and context in UI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <blockquote data-type="note">
            <p>Some parameters have prerequisites. For example, <strong>Memory Apply Rule</strong> and <strong>Memory Apply Role</strong> only apply when <strong>Use Memory in Chat</strong> is ON.</p>
          </blockquote>

          <p>
            The following sections describe each configuration parameter in detail:
          </p>

          <h3 id="31-use-memory-in-chat">3.1 Use Memory in Chat</h3>

          <p>
            <strong>Options:</strong> ON / OFF
            <br />
            <strong>Default:</strong> ON
          </p>

          <p>
            This setting determines whether the conversation history is included as context when processing new queries.
          </p>

          <ul>
            <li><strong>ON:</strong> The system maintains awareness of previous exchanges, enabling contextual follow-up questions and maintaining conversation continuity. This is recommended for multi-turn dialogues where context from earlier messages is relevant to later queries.</li>
            <li><strong>OFF:</strong> Each query is processed independently without reference to prior messages. This mode is useful for unrelated, standalone queries or when privacy concerns require that no conversation history be retained.</li>
          </ul>

          <p>
            When memory is enabled, the model can reference earlier statements, pronouns, and context from the conversation, providing more coherent and contextually aware responses.
          </p>

          <h3 id="32-memory-apply-rule">3.2 Memory Apply Rule</h3>

          <p>
            <strong>Options:</strong> All / maximum possible, Last / minimum
            <br />
            <strong>Default:</strong> All / maximum possible
            <br />
            <strong>Prerequisite:</strong> Requires <strong>Use Memory in Chat</strong> to be ON
          </p>

          <p>
            This parameter controls the extent of conversation history that is included in the context window when processing a new query.
          </p>

          <ul>
            <li><strong>All / maximum possible:</strong> The entire available conversation history is included, up to the model's maximum context window. This provides the most complete context and is ideal for long, complex conversations where earlier details remain relevant throughout the session.</li>
            <li><strong>Last / minimum:</strong> Only the most recent user-assistant exchange is retained. This reduces token usage and speeds up processing, and is appropriate for conversations where only immediate context matters or when working within tight token budgets.</li>
          </ul>

          <p>
            The choice between these options involves a trade-off between contextual richness and computational efficiency. Longer histories consume more tokens but provide better continuity.
          </p>

          <h3 id="33-memory-apply-role">3.3 Memory Apply Role</h3>

          <p>
            <strong>Options:</strong> Both, User, Assistant
            <br />
            <strong>Default:</strong> Both
            <br />
            <strong>Prerequisite:</strong> Requires <strong>Use Memory in Chat</strong> to be ON
          </p>

          <p>
            This setting determines which participant's messages are included when constructing the conversation memory.
          </p>

          <ul>
            <li><strong>Both:</strong> Messages from both the user and the assistant are included in memory. This is the standard mode and preserves the full conversational flow, allowing the model to reference both its own previous responses and the user's queries.</li>
            <li><strong>User:</strong> Only the user's messages are retained in memory. This mode can be useful when the focus should be on user-provided information rather than the assistant's interpretations or generated content.</li>
            <li><strong>Assistant:</strong> Only the assistant's previous responses are included. This is a specialized mode that may be useful when tracking the model's own outputs across turns without including user prompts.</li>
          </ul>

          <p>
            In most standard chat scenarios, the <strong>Both</strong> option is recommended to maintain natural conversation flow and full contextual awareness.
          </p>

          <h3 id="34-context_top_n">3.4 context_top_n</h3>

          <p>
            <strong>Type:</strong> Integer
            <br />
            <strong>Default:</strong> 10
            <br />
            <strong>Recommended range:</strong> 5-20
          </p>

          <p>
            This parameter specifies the number of top-ranked text chunks that are retrieved from the document source and included in the context sent to the model.
          </p>

          <p>
            When a query is processed with RAG enabled, the retrieval system searches through indexed documents and ranks chunks by relevance. The <code>context_top_n</code> value determines how many of these highest-ranked chunks are selected for inclusion.
          </p>

          <ul>
            <li><strong>Lower values (5-10):</strong> Provide tighter, more focused context with only the most relevant passages. This reduces noise and token usage but may miss relevant information that ranks slightly lower. Recommended for precise, targeted queries where the relevant information is likely contained in a small number of highly relevant chunks.</li>
            <li><strong>Higher values (15-20+):</strong> Cast a wider net, including more context that may contain relevant information. This increases the likelihood of capturing all pertinent details but also introduces more noise and consumes more tokens. Recommended for exploratory queries or when relevant information may be distributed across multiple document sections.</li>
          </ul>

          <p>
            The optimal value depends on document structure, query specificity, and the trade-off between comprehensiveness and precision.
          </p>

          <h3 id="35-context_target_size">3.5 context_target_size</h3>

          <p>
            <strong>Type:</strong> Integer (tokens)
            <br />
            <strong>Default:</strong> 3000
            <br />
            <strong>Recommended range:</strong> 2000-8000
          </p>

          <p>
            This parameter sets a target token count for the total context that is assembled from retrieved chunks and sent to the model for generation.
          </p>

          <p>
            The retrieval system first selects the number of chunks specified by <code>context_top_n</code>. If these chunks do not reach the <code>context_target_size</code> token count, the system automatically includes additional lower-ranked chunks until the target is met or the available chunks are exhausted.
          </p>

          <p>
            This dynamic adjustment ensures that:
          </p>

          <ul>
            <li>Sufficient context is provided to the model, even when individual chunks are small</li>
            <li>The model has adequate information to generate comprehensive, well-informed responses</li>
            <li>Token budgets can be managed predictably across different queries</li>
          </ul>

          <p>
            The target size should be set based on:
          </p>

          <ul>
            <li>The model's maximum context window</li>
            <li>The typical length of relevant passages in the document corpus</li>
            <li>The balance between providing enough context and leaving room for the generated response</li>
          </ul>

          <p>
            For example, if working with a model that has an 8K context window and expect responses of ~1000 tokens, setting <code>context_target_size</code> to 3000-4000 leaves room for conversation history and generation while providing substantial retrieved context.
          </p>

          <h3 id="36-max_output">3.6 max_output</h3>

          <p>
            <strong>Type:</strong> Integer (tokens)
            <br />
            <strong>Default:</strong> 2048
            <br />
            <strong>Recommended range:</strong> 256-4096
          </p>

          <p>
            This parameter sets a hard limit on the number of tokens the model can generate in a single response.
          </p>

          <p>
            When the model reaches this token limit, generation stops, even if the response would otherwise continue. This serves several important functions:
          </p>

          <ul>
            <li><strong>Prevents runaway generation:</strong> Ensures the model doesn't produce excessively long outputs that consume unnecessary resources</li>
            <li><strong>Latency control:</strong> Shorter maximum outputs complete faster, improving response time</li>
            <li><strong>Resource management:</strong> Limits computational and memory usage per query</li>
            <li><strong>Predictable behavior:</strong> Provides consistent upper bounds on response length</li>
          </ul>

          <p>
            Recommended values by use case:
          </p>

          <ul>
            <li><strong>Short answers and summaries:</strong> 256-512 tokens</li>
            <li><strong>Standard conversational responses:</strong> 1024-2048 tokens</li>
            <li><strong>Detailed explanations and analysis:</strong> 2048-4096 tokens</li>
            <li><strong>Extended content generation:</strong> 4096+ tokens (if the model supports it)</li>
          </ul>

          <blockquote data-type="note">
            <p>Setting this value too low may result in truncated responses that end mid-sentence. Setting it too high may allow verbose outputs that could be more concise.</p>
          </blockquote>

          <h3 id="37-temperature">3.7 temperature</h3>

          <p>
            <strong>Type:</strong> Float
            <br />
            <strong>Range:</strong> 0.0 to 1.0
            <br />
            <strong>Default:</strong> 0.3
            <br />
            <strong>Recommended range:</strong> 0.0-0.7
          </p>

          <p>
            Temperature is a fundamental parameter that controls the randomness and creativity of the model's text generation by adjusting the probability distribution over possible next tokens.
          </p>

          <p>
            At each step of generation, the model calculates probabilities for all possible next tokens. Temperature scales these probabilities:
          </p>

          <ul>
            <li><strong>0.0 (Deterministic):</strong> The model always selects the highest-probability token. This produces consistent, predictable, and factual outputs. Recommended for:
              <ul>
                <li>Factual question answering</li>
                <li>Data extraction and structured outputs</li>
                <li>Tasks requiring consistent, reproducible results</li>
                <li>RAG scenarios where accuracy is paramount</li>
              </ul></li>
          </ul>

          <ul>
            <li><strong>0.3-0.5 (Low creativity):</strong> Slight randomness is introduced while still favoring likely tokens. This provides some variation without sacrificing accuracy. Recommended for:
              <ul>
                <li>General conversational AI</li>
                <li>Document summarization</li>
                <li>Professional writing assistance</li>
              </ul></li>
          </ul>

          <ul>
            <li><strong>0.6-0.8 (Moderate creativity):</strong> More diverse outputs with increased creativity and variation. Recommended for:
              <ul>
                <li>Creative writing assistance</li>
                <li>Brainstorming and ideation</li>
                <li>Generating multiple alternative phrasings</li>
              </ul></li>
          </ul>

          <ul>
            <li><strong>0.9-1.0 (High creativity):</strong> Maximum randomness, producing highly diverse and creative outputs that may include unexpected or unconventional responses. Use with caution as factual accuracy may decrease.</li>
          </ul>

          <blockquote data-type="tip">
            <p>For RAG-based question answering, lower temperatures (0.0-0.3) are generally recommended to ensure responses stay grounded in the retrieved context.</p>
          </blockquote>

          <h3 id="38-query-strategy">3.8 Query Strategy</h3>

          <p>
            <strong>Options:</strong> semantic, keyword-or, keyword-and, exact
            <br />
            <strong>Default:</strong> semantic
          </p>

          <p>
            This setting determines the algorithm used to match user queries against indexed document chunks during retrieval.
          </p>

          <ul>
            <li><strong>semantic:</strong> Uses embedding-based similarity to match the semantic meaning of the query against document chunks, regardless of exact wording. This is the most flexible and intelligent option, capable of understanding:
              <ul>
                <li>Synonyms and paraphrasing (e.g., "car" matches "automobile")</li>
                <li>Conceptual relationships (e.g., "climate change" matches passages about "global warming")</li>
                <li>Context and intent beyond literal keywords</li>
              </ul></li>
          </ul>

          <p>
            Recommended for most use cases, especially when users may phrase queries in varied ways.
          </p>

          <ul>
            <li><strong>keyword-or:</strong> Uses traditional keyword search with an OR operator. A chunk is retrieved if it contains <strong>any</strong> of the keywords from the query. This provides:
              <ul>
                <li>Broader recall (more results returned)</li>
                <li>Fast performance</li>
                <li>Simple, predictable behavior</li>
              </ul></li>
          </ul>

          <p>
            Useful when casting a wide net or when semantic search returns insufficient results.
          </p>

          <ul>
            <li><strong>keyword-and:</strong> Uses keyword search with an AND operator. A chunk is retrieved only if it contains <strong>all</strong> of the keywords from the query. This provides:
              <ul>
                <li>Higher precision (fewer, more targeted results)</li>
                <li>Fast performance</li>
                <li>Strict matching requirements</li>
              </ul></li>
          </ul>

          <p>
            Useful for precise queries where all terms must be present.
          </p>

          <ul>
            <li><strong>exact:</strong> Requires exact phrase matching, including word order and spacing. Only chunks containing the exact query string are retrieved. This is the most restrictive option and is useful for:
              <ul>
                <li>Finding specific quotes or passages</li>
                <li>Legal or compliance searches requiring exact language</li>
                <li>Debugging or verification tasks</li>
              </ul></li>
          </ul>

          <blockquote data-type="note">
            <p>For most conversational RAG applications, <strong>semantic</strong> search provides the best user experience by understanding intent rather than requiring precise keyword matching.</p>
          </blockquote>

          <h3 id="39-sample-in-generation">3.9 Sample in Generation</h3>

          <p>
            <strong>Options:</strong> ON / OFF
            <br />
            <strong>Default:</strong> ON
          </p>

          <p>
            This setting controls whether probabilistic sampling is used during the text generation process.
          </p>

          <ul>
            <li><strong>ON:</strong> The model uses sampling to select the next token based on the probability distribution adjusted by temperature and other parameters. This introduces controlled randomness, producing:
              <ul>
                <li>More diverse outputs across multiple generations of the same prompt</li>
                <li>More natural, human-like variation in phrasing</li>
                <li>Creative and less repetitive responses</li>
              </ul></li>
          </ul>

          <p>
            This is the standard mode for most conversational and creative applications.
          </p>

          <ul>
            <li><strong>OFF:</strong> The model uses greedy decoding, always selecting the highest-probability token at each step (similar to temperature=0.0). This produces:
              <ul>
                <li>Deterministic outputs (same input always produces the same output)</li>
                <li>Highly predictable and stable responses</li>
                <li>Less variation and creativity</li>
              </ul></li>
          </ul>

          <p>
            This mode is useful for testing, debugging, or applications requiring absolute consistency.
          </p>

          <blockquote data-type="tip">
            <p>When sampling is ON, the temperature parameter controls the degree of randomness. When sampling is OFF, temperature has no effect.</p>
          </blockquote>

          <h3 id="310-table-only-mode">3.10 Table Only Mode</h3>

          <p>
            <strong>Options:</strong> ON / OFF
            <br />
            <strong>Default:</strong> OFF
          </p>

          <p>
            This specialized mode restricts retrieval operations to only table structures that have been extracted and indexed from documents.
          </p>

          <ul>
            <li><strong>ON:</strong> The retrieval system searches exclusively within tables (e.g., data tables from PDFs, spreadsheets, or structured sections). Regular text passages are ignored. This is useful when:
              <ul>
                <li>The answer is known to be in tabular data</li>
                <li>Working with datasets, reports, or financial documents</li>
                <li>Querying structured information like pricing tables, feature comparisons, or statistical data</li>
              </ul></li>
          </ul>

          <p>
            This mode improves precision and reduces noise when the information needed is tabular in nature.
          </p>

          <ul>
            <li><strong>OFF:</strong> The retrieval system searches across all indexed content, including both tables and regular text. This is the default mode for general-purpose document Q&A.</li>
          </ul>

          <blockquote data-type="note">
            <p>Model HQ's parsers automatically detect and preserve table structure during document ingestion. When Table Only Mode is enabled, these preserved table structures are the sole source for retrieval.</p>
          </blockquote>

          <h3 id="311-interpret-csv-as-db-table">3.11 Interpret CSV as DB Table</h3>

          <p>
            <strong>Options:</strong> ON / OFF
            <br />
            <strong>Default:</strong> OFF
          </p>

          <p>
            This setting determines how CSV files are processed and made available for querying.
          </p>

          <ul>
            <li><strong>ON:</strong> When a CSV file is uploaded, Model HQ automatically parses it and creates an in-memory database table representation. This enables:
              <ul>
                <li>Natural language queries that are translated to SQL-style operations</li>
                <li>Structured data operations (filtering, aggregation, sorting)</li>
                <li>More accurate responses to quantitative questions about the data</li>
                <li>Proper understanding of column relationships and data types</li>
              </ul></li>
          </ul>

          <p>
            For example, queries like "What is the average sales figure?" or "Show me all entries where the status is active" can be processed as structured database queries rather than text search.
          </p>

          <ul>
            <li><strong>OFF:</strong> CSV files are treated as plain text documents. Each row may be chunked and indexed as text, but the structured nature of the data is not explicitly modeled. This mode uses standard text retrieval and may be less accurate for quantitative or structured queries.</li>
          </ul>

          <blockquote data-type="tip">
            <p>When working with datasets, spreadsheets, or any CSV containing structured information, enabling this option significantly improves query accuracy and enables powerful data analysis capabilities.</p>
          </blockquote>

          <h3 id="312-pdf-parsing-options">3.12 PDF Parsing Options</h3>

          <p>
            <strong>Options:</strong> Digital (Fastest), OCR, Vision Model
            <br />
            <strong>Default:</strong> Digital (Fastest)
          </p>

          <p>
            This setting controls the parsing method used to extract content from PDF files.
          </p>

          <ul>
            <li><strong>Digital (Fastest):</strong> Uses Model HQ's proprietary high-performance text extraction engine to read directly from the PDF's text layer. This is the default and recommended option for most PDFs, offering:
              <ul>
                <li>Fastest processing speed</li>
                <li>High accuracy for native digital PDFs</li>
                <li>Preservation of text structure and formatting</li>
                <li>Low computational overhead</li>
              </ul></li>
          </ul>

          <p>
            This method works well for PDFs that were created digitally (e.g., from Word, LaTeX, or web browsers) and contain an embedded text layer.
          </p>

          <ul>
            <li><strong>OCR (Optical Character Recognition):</strong> Uses embedded OCR technology to recognize and extract text from images within the PDF. This is necessary for:
              <ul>
                <li>Scanned documents without a text layer</li>
                <li>Image-based PDFs (e.g., scanned book pages, forms)</li>
                <li>Permission-restricted PDFs that block text extraction</li>
              </ul></li>
          </ul>

          <p>
            OCR processing is slower than digital extraction but enables access to content that would otherwise be unavailable. Accuracy depends on image quality, font clarity, and document layout.
          </p>

          <ul>
            <li><strong>Vision Model:</strong> Employs a multimodal vision-language model to interpret the PDF content. This advanced method is appropriate for:
              <ul>
                <li>Complex layouts with mixed text and graphics</li>
                <li>Documents where spatial relationships matter (e.g., forms, diagrams)</li>
                <li>Image-heavy PDFs where visual context is important</li>
                <li>PDFs with unconventional formatting that challenges standard parsers</li>
              </ul></li>
          </ul>

          <p>
            This is the most computationally intensive option but provides the most sophisticated understanding of document structure and visual elements.
          </p>

          <blockquote data-type="tip">
            <p>For troubleshooting document parsing issues or handling special PDF types, refer to the <a href="/chat/documentparsingissues">Document Parsing Issues guide</a>.</p>
          </blockquote>

          <h3 id="313-show-search-results-and-context">3.13 Show Search Results and Context</h3>

          <p>
            <strong>Options:</strong> ON / OFF
            <br />
            <strong>Default:</strong> OFF
          </p>

          <p>
            This setting controls whether the retrieved document chunks and context that informed the model's response are displayed in the user interface.
          </p>

          <ul>
            <li><strong>ON:</strong> The system displays the retrieved search results alongside the generated response. This provides:
              <ul>
                <li><strong>Transparency:</strong> Users can see exactly which document passages the model referenced</li>
                <li><strong>Verification:</strong> Source material can be reviewed to confirm accuracy</li>
                <li><strong>Trust:</strong> Users can validate that responses are grounded in the retrieved context</li>
                <li><strong>Learning:</strong> Understanding which sources were retrieved helps refine future queries</li>
              </ul></li>
          </ul>

          <p>
            This mode is particularly valuable in professional, research, or compliance scenarios where source verification is important.
          </p>

          <ul>
            <li><strong>OFF:</strong> Only the final generated response is shown. The retrieval process operates behind the scenes. This provides:
              <ul>
                <li><strong>Cleaner interface:</strong> Less visual clutter for end users</li>
                <li><strong>Focus on output:</strong> Attention remains on the response rather than the mechanics</li>
                <li><strong>Simplified experience:</strong> Appropriate for casual use cases where source transparency is less critical</li>
              </ul></li>
          </ul>

          <blockquote data-type="note">
            <p>Even when this option is OFF, the model still uses the retrieved context for generation—it simply isn't displayed to the user.</p>
          </blockquote>

          <h2 id="4-recommended-configurations-by-use-case">4. Recommended configurations by use case</h2>

          <p>
            The optimal configuration varies based on the intended application. Below are recommended starting points for common scenarios:
          </p>

          <h3 id="41-factual-qa-high-accuracy">4.1 Factual Q&A (High accuracy)</h3>

          <ul>
            <li><strong>Use Memory in Chat:</strong> ON</li>
            <li><strong>Temperature:</strong> 0.0-0.3</li>
            <li><strong>Query Strategy:</strong> semantic</li>
            <li><strong>Sample in Generation:</strong> OFF</li>
            <li><strong>Show Search Results and Context:</strong> ON</li>
          </ul>

          <h3 id="42-creative-writing-assistance">4.2 Creative writing assistance</h3>

          <ul>
            <li><strong>Use Memory in Chat:</strong> ON</li>
            <li><strong>Temperature:</strong> 0.7-0.9</li>
            <li><strong>max_output:</strong> 2048-4096</li>
            <li><strong>Sample in Generation:</strong> ON</li>
          </ul>

          <h3 id="43-data-analysis-with-csv">4.3 Data analysis (with CSV)</h3>

          <ul>
            <li><strong>Interpret CSV as DB Table:</strong> ON</li>
            <li><strong>Table Only Mode:</strong> ON (if querying only tabular data)</li>
            <li><strong>Temperature:</strong> 0.0</li>
            <li><strong>Query Strategy:</strong> semantic</li>
          </ul>

          <h3 id="44-exploratory-research">4.4 Exploratory research</h3>

          <ul>
            <li><strong>context_top_n:</strong> 15-20</li>
            <li><strong>context_target_size:</strong> 4000-6000</li>
            <li><strong>Query Strategy:</strong> semantic</li>
            <li><strong>Show Search Results and Context:</strong> ON</li>
          </ul>

          <p>
            These configurations can be adjusted based on specific requirements and observed performance.
          </p>

          <h2 id="conclusion">Conclusion</h2>

          <p>
            This document described the comprehensive set of configuration options available in Model HQ's Chat interface for controlling generation, retrieval, and memory behavior in RAG workflows. Key parameters include memory settings that control conversation history retention, retrieval parameters (context_top_n and context_target_size) that determine how much document context is included, generation controls (temperature, max_output, sampling) that influence response creativity and length, query strategies that affect how documents are searched, and document processing options for PDFs, CSVs, and images. Understanding and appropriately adjusting these parameters enables users to optimize Model HQ for specific use cases—whether prioritizing factual accuracy with lower temperatures and semantic search, managing token budgets through context limits, or accommodating different document types through specialized parsing options. The recommended configurations provided serve as starting points that can be fine-tuned based on observed performance, document characteristics, and application requirements.
          </p>

          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-400">
              For further assistance or to share feedback, please contact us at{' '}
              <a href="mailto:support@aibloks.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                support@aibloks.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </DocPageLayout>
  )
}