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

export default function AgentServicesPage() {
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
            <BreadcrumbPage>Agent Services</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Agent Services</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          Services are the functional units that power every step of an agent workflow. Each service represents a distinct capability — from answering questions and extracting data, to querying databases, running classifiers, calling external APIs, and generating reports.
        </p>

        <p>
          Only services that have been added and enabled in the Services section of an agent are available for selection inside nodes. This keeps agents modular and predictable: you can see exactly what each agent is capable of at a glance, and adding or removing a service directly controls what nodes can do.
        </p>

        <p>
          Services are organized into five categories based on their purpose. The table in each section serves as a quick reference — the descriptions beneath provide the context you need to use each one effectively.
        </p>

        <img src="/v1/agents/editAgent/03_8services.png" alt="edit" />

        <h2 id="1-core-services">1. Core services</h2>

        <p>
          General building blocks for common tasks such as chat, retrieval, extraction, and logic control.
        </p>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Service Name</th>
              <th className="border border-border px-4 py-2 text-left">Instruction</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
              <th className="border border-border px-4 py-2 text-left">Context</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><strong>chat</strong></td>
              <td className="border border-border px-4 py-2">What is your question or instruction?</td>
              <td className="border border-border px-4 py-2">Answers a question or performs instruction</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code>, <code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>rag_batch</strong></td>
              <td className="border border-border px-4 py-2">Enter question or instruction</td>
              <td className="border border-border px-4 py-2">Performs RAG over batch of documents</td>
              <td className="border border-border px-4 py-2"><code>User-collection</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>rag_answer</strong></td>
              <td className="border border-border px-4 py-2">Ask question to longer document input</td>
              <td className="border border-border px-4 py-2">Answers a question based on a longer document input</td>
              <td className="border border-border px-4 py-2"><code>User-Source</code>, <code>Provide_instruction_or_query</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>vision</strong></td>
              <td className="border border-border px-4 py-2">Enter question to image file</td>
              <td className="border border-border px-4 py-2">Provides answer/description from image</td>
              <td className="border border-border px-4 py-2"><code>User-Image</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ocr_vision</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Performs OCR + vision-based understanding</td>
              <td className="border border-border px-4 py-2"><code>User-Document</code>, <code>User-Image</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ocr</strong></td>
              <td className="border border-border px-4 py-2">Enter name of new document source</td>
              <td className="border border-border px-4 py-2">Extracts content from image-based or protected documents</td>
              <td className="border border-border px-4 py-2"><code>User-Document</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>agent_report</strong></td>
              <td className="border border-border px-4 py-2">Enter title for agent report</td>
              <td className="border border-border px-4 py-2">Prepares report on agent output</td>
              <td className="border border-border px-4 py-2"><code>-</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>wikipedia_search</strong></td>
              <td className="border border-border px-4 py-2">Add Wikipedia Articles as Research Context</td>
              <td className="border border-border px-4 py-2">Adds Wikipedia articles as research context</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>prompt_builder</strong></td>
              <td className="border border-border px-4 py-2">Enter prompt instruction</td>
              <td className="border border-border px-4 py-2">Builds structured prompts</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>embedded_bot</strong></td>
              <td className="border border-border px-4 py-2">Optional</td>
              <td className="border border-border px-4 py-2">Pauses execution for user interaction</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>condition</strong></td>
              <td className="border border-border px-4 py-2">Enter expression</td>
              <td className="border border-border px-4 py-2">Evaluates logical condition</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>web_search</strong></td>
              <td className="border border-border px-4 py-2">Add query</td>
              <td className="border border-border px-4 py-2">Performs web search and returns structured results</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>boolean</strong></td>
              <td className="border border-border px-4 py-2">Provide yes/no question</td>
              <td className="border border-border px-4 py-2">Provides yes/no answer with explanation</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>extract</strong></td>
              <td className="border border-border px-4 py-2">Enter extraction key</td>
              <td className="border border-border px-4 py-2">Extracts key-value pair</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>answer</strong></td>
              <td className="border border-border px-4 py-2">What is your question?</td>
              <td className="border border-border px-4 py-2">Answers specific question from passage</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>chat</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">What is your question or instruction?</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Answers a question or performs instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code>, <code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>rag_batch</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter question or instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Performs RAG over batch of documents</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-collection</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>rag_answer</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Ask question to longer document input</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Answers a question based on a longer document input</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Source</code>, <code>Provide_instruction_or_query</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>vision</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter question to image file</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Provides answer/description from image</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Image</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ocr_vision</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Performs OCR + vision-based understanding</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Document</code>, <code>User-Image</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ocr</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter name of new document source</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Extracts content from image-based or protected documents</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Document</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>agent_report</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter title for agent report</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Prepares report on agent output</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>-</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>wikipedia_search</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Add Wikipedia Articles as Research Context</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Adds Wikipedia articles as research context</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>prompt_builder</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter prompt instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Builds structured prompts</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>embedded_bot</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Optional</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Pauses execution for user interaction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>condition</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter expression</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Evaluates logical condition</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>web_search</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Add query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Performs web search and returns structured results</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>boolean</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Provide yes/no question</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Provides yes/no answer with explanation</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>extract</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter extraction key</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Extracts key-value pair</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>answer</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">What is your question?</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Answers specific question from passage</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h3 id="11-chat">1.1 chat</h3>

        <p>
          The general-purpose model interaction node. Accepts a question or instruction and generates a response from the active language model. Works off <code>MAIN-INPUT</code>, <code>User-Text</code>, or no context at all — making it suitable for drafting, summarizing, reformatting, or any open-ended task at any point in the pipeline.
        </p>

        <p>
          <strong>Instruction:</strong> What is your question or instruction?
          <br />
          <strong>Context:</strong> <code>MAIN-INPUT</code>, <code>User-Text</code>, <code>None</code>
        </p>

        <h3 id="12-rag_batch">1.2 rag_batch</h3>

        <p>
          Answers a question across a collection of documents rather than a single file. It searches the entire <code>User-Collection</code> batch, retrieves the most relevant passages from each, and constructs a grounded response. Best suited for research pipelines and multi-file document review workflows.
        </p>

        <p>
          <strong>Instruction:</strong> Enter question or instruction
          <br />
          <strong>Context:</strong> <code>User-Document</code>
        </p>

        <h3 id="13-rag_answer">1.3 rag_answer</h3>

        <p>
          Designed for long single-document inputs where the source exceeds standard prompt limits. <code>rag_answer</code> chunks the document internally, retrieves the most relevant sections, and returns an answer grounded in the actual text — not the model's general knowledge.
        </p>

        <p>
          <strong>Instruction:</strong> Ask question to longer document input
          <br />
          <strong>Context:</strong> <code>User-Source</code>, <code>Provide_instruction_or_query</code>
        </p>

        <h3 id="14-vision">1.4 vision</h3>

        <p>
          Adds visual reasoning to the workflow. Supply an image, ask a question, and the service responds based on what the multimodal model sees — reading embedded text, identifying objects, describing scenes, or interpreting diagrams.
        </p>

        <p>
          <strong>Instruction:</strong> Enter question to image file
          <br />
          <strong>Context:</strong> <code>User-Image</code>
        </p>

        <h3 id="15-ocr_vision">1.5 ocr_vision</h3>

        <p>
          For documents and images where both text extraction and visual context matter. Applies OCR to extract the text first, then uses vision-based reasoning to interpret it in context — suited for scanned forms, annotated diagrams, and mixed-content PDFs.
        </p>

        <p>
          <strong>Instruction:</strong> Enter instruction
          <br />
          <strong>Context:</strong> <code>User-Document</code>, <code>User-Image</code>
        </p>

        <h3 id="16-ocr">1.6 ocr</h3>

        <p>
          Extracts text from image-based or copy-protected documents and registers the result as a named source in the agent state. The extracted content then becomes available to any downstream node — for RAG, extraction, or summarization — just like any regular document.
        </p>

        <p>
          <strong>Instruction:</strong> Enter name of new document source
          <br />
          <strong>Context:</strong> <code>User-Document</code>
        </p>

        <h3 id="17-agent_report">1.7 agent_report</h3>

        <p>
          Reads the accumulated agent state and compiles everything into a structured, titled report. Typically placed at the end of a workflow. No specific input context is required — it assembles from whatever the pipeline has produced up to that point.
        </p>

        <p>
          <strong>Instruction:</strong> Enter title for agent report
          <br />
          <strong>Context:</strong> <code>-</code>
        </p>

        <h3 id="18-wikipedia_search">1.8 wikipedia_search</h3>

        <p>
          Fetches Wikipedia article content and injects it into the agent state as research context. No pre-loaded documents are needed, making it a lightweight way to add factual grounding to any workflow without managing external sources.
        </p>

        <p>
          <strong>Instruction:</strong> Add Wikipedia Articles as Research Context
          <br />
          <strong>Context:</strong> <code>None</code>
        </p>

        <h3 id="19-prompt_builder">1.9 prompt_builder</h3>

        <p>
          Constructs a structured prompt dynamically from the current agent state rather than relying on a hardcoded string. Best placed immediately before a model-execution node to ensure the prompt is well-formed and adapts to the pipeline's state at runtime.
        </p>

        <p>
          <strong>Instruction:</strong> Enter prompt instruction
          <br />
          <strong>Context:</strong> <code>None</code>
        </p>

        <h3 id="110-embedded_bot">1.10 embedded_bot</h3>

        <p>
          Pauses workflow execution and surfaces an interactive interface for a human operator. Execution resumes once the operator provides input or confirms a decision. The instruction field is optional. This is the primary mechanism for human-in-the-loop pipelines.
        </p>

        <p>
          <strong>Instruction:</strong> Optional
          <br />
          <strong>Context:</strong> <code>None</code>
        </p>

        <h3 id="111-condition">1.11 condition</h3>

        <p>
          Evaluates a logical expression against the current agent state and routes execution accordingly. Acts as an if/else branch point in the pipeline — no external context required. The expression can reference any key present in the agent state.
        </p>

        <p>
          <strong>Instruction:</strong> Enter expression
          <br />
          <strong>Context:</strong> <code>None</code>
        </p>

        <h3 id="112-web_search">1.12 web_search</h3>

        <p>
          Queries the web at runtime and returns structured results — titles, snippets, and source URLs — for downstream nodes to act on. Useful when the workflow requires up-to-date or real-time information that is not available in any pre-loaded source.
        </p>

        <p>
          <strong>Instruction:</strong> Add query
          <br />
          <strong>Context:</strong> <code>None</code>
        </p>

        <h3 id="113-boolean">1.13 boolean</h3>

        <p>
          Takes a yes/no question, evaluates it against the input text, and returns a binary answer along with a brief explanation. Best placed at screening or validation steps where a clear true/false signal is needed before the workflow proceeds.
        </p>

        <p>
          <strong>Instruction:</strong> Provide yes/no question
          <br />
          <strong>Context:</strong> <code>MAIN-INPUT</code>, <code>User-Text</code>
        </p>

        <h3 id="114-extract">1.14 extract</h3>

        <p>
          Pulls a specific named value from unstructured text. Specify the key as the instruction, and the service returns the corresponding value from the input. Use it to surface discrete fields — dates, names, amounts, identifiers — and carry them forward in the agent state.
        </p>

        <p>
          <strong>Instruction:</strong> Enter extraction key
          <br />
          <strong>Context:</strong> <code>MAIN-INPUT</code>, <code>User-Text</code>
        </p>

        <h3 id="115-answer">1.15 answer</h3>

        <p>
          A context-constrained alternative to <code>chat</code>. Responds to a factual question using only the supplied input text — never the model's broader training knowledge. Use it wherever responses must be directly traceable to the provided passage.
        </p>

        <p>
          <strong>Instruction:</strong> What is your question?
          <br />
          <strong>Context:</strong> <code>MAIN-INPUT</code>, <code>User-Text</code>
        </p>

        <h2 id="2-classifiers">2. Classifiers</h2>

        <p>
          Lightweight text analysis tools for labeling or scoring content.
        </p>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Service Name</th>
              <th className="border border-border px-4 py-2 text-left">Instruction</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
              <th className="border border-border px-4 py-2 text-left">Context</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><strong>sentiment</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Analyzes sentiment</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>emotions</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Analyzes emotion</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>topics</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Classifies topic</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>tags</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Generates tags</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>intent</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Classifies intent</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ratings</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Rates positivity (1–5)</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ner</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Named entity recognition</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>xsum</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Generates extreme summary</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>summary</strong></td>
              <td className="border border-border px-4 py-2">Optional</td>
              <td className="border border-border px-4 py-2">Summarizes content</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>category</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Classifies category</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>q_gen</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Generates questions</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>sentiment</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Analyzes sentiment</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>emotions</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Analyzes emotion</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>topics</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Classifies topic</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>tags</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generates tags</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>intent</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Classifies intent</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ratings</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Rates positivity (1–5)</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ner</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Named entity recognition</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>xsum</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generates extreme summary</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>summary</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Optional</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Summarizes content</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>category</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Classifies category</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>q_gen</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generates questions</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h3 id="21-sentiment">2.1 sentiment</h3>

        <p>
          Runs sentiment analysis on the input text and returns a positive, negative, or neutral classification. No instruction is needed — the service operates directly on <code>MAIN-INPUT</code> or <code>User-Text</code>. Useful for customer feedback pipelines, review analysis, and any workflow where emotional tone needs to be assessed at scale.
        </p>

        <p>
          <strong>Instruction:</strong> No instruction required
          <br />
          <strong>Context:</strong> <code>MAIN-INPUT</code>, <code>User-Text</code>, Transformer Node (with selection of a previous output from an earlier agent step from a chat or vision bot, or dataset column that contains relevant text)
        </p>

        <h3 id="22-emotions">2.2 emotions</h3>

        <p>
          Goes a level deeper than sentiment by identifying the specific emotion present in the text — such as joy, frustration, surprise, or fear. Like all classifiers, it requires no instruction and runs directly on <code>MAIN-INPUT</code> or <code>User-Text</code>.
        </p>

        <p>
          <strong>Instruction:</strong> No instruction required
          <br />
          <strong>Context:</strong> <code>MAIN-INPUT</code>, <code>User-Text</code>, Transformer Node (with selection of a previous output from an earlier agent step from a chat or vision bot, or dataset column that contains relevant text)
        </p>

        <h3 id="23-topics">2.3 topics</h3>

        <p>
          Identifies the primary topic or subject area of the input text. No instruction is required. Useful for categorizing incoming content, routing documents to the right downstream nodes, or tagging records in bulk processing workflows.
        </p>

        <p>
          <strong>Instruction:</strong> No instruction required
          <br />
          <strong>Context:</strong> <code>MAIN-INPUT</code>, <code>User-Text</code>, Transformer Node (with selection of a previous output from an earlier agent step from a chat or vision bot, or dataset column that contains relevant text)
        </p>

        <h3 id="24-tags">2.4 tags</h3>

        <p>
          Generates a set of descriptive tags from the input text. No instruction is required. Tags can be used to index content, enable filtering in later nodes, or surface key themes across a batch of documents.
        </p>

        <p>
          <strong>Instruction:</strong> No instruction required
          <br />
          <strong>Context:</strong> <code>MAIN-INPUT</code>, <code>User-Text</code>, Transformer Node (with selection of a previous output from an earlier agent step from a chat or vision bot, or dataset column that contains relevant text)
        </p>

        <h3 id="25-intent">2.5 intent</h3>

        <p>
          Classifies the intent behind the input text — for example, whether the user is making a request, asking a question, expressing a complaint, or providing information. No instruction is needed. Particularly useful in customer-facing workflows or message triage pipelines.
        </p>

        <p>
          <strong>Instruction:</strong> No instruction required
          <br />
          <strong>Context:</strong> <code>MAIN-INPUT</code>, <code>User-Text</code>, Transformer Node (with selection of a previous output from an earlier agent step from a chat or vision bot, or dataset column that contains relevant text)
        </p>

        <h3 id="26-ratings">2.6 ratings</h3>

        <p>
          Scores the positivity of the input text on a 1–5 scale. No instruction is required. Provides a numeric signal that can be carried forward in the agent state, used in conditions, or aggregated across a batch for reporting purposes.
        </p>

        <p>
          <strong>Instruction:</strong> No instruction required
          <br />
          <strong>Context:</strong> <code>MAIN-INPUT</code>, <code>User-Text</code>, Transformer Node (with selection of a previous output from an earlier agent step from a chat or vision bot, or dataset column that contains relevant text)
        </p>

        <h3 id="27-ner">2.7 ner</h3>

        <p>
          Performs Named Entity Recognition on the input text, identifying and labeling entities such as people, organizations, locations, dates, and other proper nouns. No instruction is required. Outputs structured entity data that can be extracted and used in downstream nodes.
        </p>

        <p>
          <strong>Instruction:</strong> No instruction required
          <br />
          <strong>Context:</strong> <code>MAIN-INPUT</code>, <code>User-Text</code>, Transformer Node (with selection of a previous output from an earlier agent step from a chat or vision bot, or dataset column that contains relevant text)
        </p>

        <h3 id="28-xsum">2.8 xsum</h3>

        <p>
          Generates an extreme summary — a single, highly compressed sentence that captures the core meaning of the input. No instruction is required. Use it when you need the most concise possible distillation of a passage, such as for indexing, previews, or high-volume batch summarization.
        </p>

        <p>
          <strong>Instruction:</strong> No instruction required
          <br />
          <strong>Context:</strong> <code>MAIN-INPUT</code>, <code>User-Text</code>, Transformer Node (with selection of a previous output from an earlier agent step from a chat or vision bot, or dataset column that contains relevant text)
        </p>

        <h3 id="29-summary">2.9 summary</h3>

        <p>
          Produces a standard prose summary of the input text. The instruction field is optional — leaving it empty generates a general summary, while providing a specific instruction can focus the summary on a particular aspect of the content.
        </p>

        <p>
          <strong>Instruction:</strong> Optional
          <br />
          <strong>Context:</strong> <code>MAIN-INPUT</code>, <code>User-Text</code>, Transformer Node (with selection of a previous output from an earlier agent step from a chat or vision bot, or dataset column that contains relevant text)
        </p>

        <h3 id="210-category">2.10 category</h3>

        <p>
          Assigns the input text to a predefined category. No instruction is required. The category label is returned as a structured output in the agent state, where it can be used in condition nodes, filters, or downstream reporting.
        </p>

        <p>
          <strong>Instruction:</strong> No instruction required
          <br />
          <strong>Context:</strong> <code>MAIN-INPUT</code>, <code>User-Text</code>, Transformer Node (with selection of a previous output from an earlier agent step from a chat or vision bot, or dataset column that contains relevant text)
        </p>

        <h3 id="211-q_gen">2.11 q_gen</h3>

        <p>
          Generates a set of questions based on the input text. No instruction is required. Useful for creating evaluation datasets, populating FAQs, building comprehension assessments, or surfacing potential knowledge gaps in a document.
        </p>

        <p>
          <strong>Instruction:</strong> No instruction required
          <br />
          <strong>Context:</strong> <code>MAIN-INPUT</code>, <code>User-Text</code>, Transformer Node (with selection of a previous output from an earlier agent step from a chat or vision bot, or dataset column that contains relevant text)
        </p>

        <h2 id="3-datasets">3. Datasets</h2>

        <p>
          Tools for preparing, querying, and analyzing structured data.
        </p>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Service Name</th>
              <th className="border border-border px-4 py-2 text-left">Instruction</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
              <th className="border border-border px-4 py-2 text-left">Context</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><strong>build_dataset</strong></td>
              <td className="border border-border px-4 py-2">Enter dataset name</td>
              <td className="border border-border px-4 py-2">Create datasets from JSON</td>
              <td className="border border-border px-4 py-2"><code>JSON Input</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>select_keys</strong></td>
              <td className="border border-border px-4 py-2">Enter keys</td>
              <td className="border border-border px-4 py-2">Select specified keys from a JSON dictionary</td>
              <td className="border border-border px-4 py-2"><code>JSON Input</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>dataset_plot</strong></td>
              <td className="border border-border px-4 py-2">Enter visualization instruction</td>
              <td className="border border-border px-4 py-2">Visualize dataset</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>load_dataset</strong></td>
              <td className="border border-border px-4 py-2">Enter dataset name</td>
              <td className="border border-border px-4 py-2">Load saved datasets</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>create_json</strong></td>
              <td className="border border-border px-4 py-2">Enter keys list</td>
              <td className="border border-border px-4 py-2">Consolidate agent keys into JSON dictionary</td>
              <td className="border border-border px-4 py-2"><code>Agent-State</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_command_filter</strong></td>
              <td className="border border-border px-4 py-2">Enter filter command</td>
              <td className="border border-border px-4 py-2">Applies filter commands to a dataset</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_column_filter</strong></td>
              <td className="border border-border px-4 py-2">Enter column condition</td>
              <td className="border border-border px-4 py-2">Keep rows where a selected column meets condition</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_quick_stats</strong></td>
              <td className="border border-border px-4 py-2">Select column</td>
              <td className="border border-border px-4 py-2">Generate statistical report based on column</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_column_analysis</strong></td>
              <td className="border border-border px-4 py-2">Select column</td>
              <td className="border border-border px-4 py-2">Generate report based on selected column</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_report</strong></td>
              <td className="border border-border px-4 py-2">No instruction</td>
              <td className="border border-border px-4 py-2">Generate dataset + workflow report</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_column_select</strong></td>
              <td className="border border-border px-4 py-2">Select column</td>
              <td className="border border-border px-4 py-2">Return selected column from dataset</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_ask_dataset</strong></td>
              <td className="border border-border px-4 py-2">Enter query</td>
              <td className="border border-border px-4 py-2">Query dataset using natural language</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_readout</strong></td>
              <td className="border border-border px-4 py-2">Enter row range</td>
              <td className="border border-border px-4 py-2">Return text from selected rows</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_smart_filter</strong></td>
              <td className="border border-border px-4 py-2">Enter query</td>
              <td className="border border-border px-4 py-2">Semantic dataset filtering</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_keyword_filter</strong></td>
              <td className="border border-border px-4 py-2">Enter keyword</td>
              <td className="border border-border px-4 py-2">Exact keyword filtering</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_statistics</strong></td>
              <td className="border border-border px-4 py-2">No instruction</td>
              <td className="border border-border px-4 py-2">Perform deeper statistical analysis</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_stat_analysis</strong></td>
              <td className="border border-border px-4 py-2">No instruction</td>
              <td className="border border-border px-4 py-2">Statistical analysis of CSV dataset</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>build_dataset</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter dataset name</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Create datasets from JSON</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>JSON Input</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>select_keys</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter keys</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Select specified keys from a JSON dictionary</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>JSON Input</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>dataset_plot</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter visualization instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Visualize dataset</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>load_dataset</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter dataset name</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Load saved datasets</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>create_json</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter keys list</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Consolidate agent keys into JSON dictionary</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Agent-State</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_command_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter filter command</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Applies filter commands to a dataset</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_column_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter column condition</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Keep rows where a selected column meets condition</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_quick_stats</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Select column</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generate statistical report based on column</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_column_analysis</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Select column</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generate report based on selected column</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_report</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generate dataset + workflow report</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_column_select</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Select column</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Return selected column from dataset</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_ask_dataset</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Query dataset using natural language</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_readout</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter row range</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Return text from selected rows</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_smart_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Semantic dataset filtering</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_keyword_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter keyword</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Exact keyword filtering</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_statistics</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Perform deeper statistical analysis</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_stat_analysis</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Statistical analysis of CSV dataset</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h3 id="31-build_dataset">3.1 build_dataset</h3>

        <p>
          Creates a structured dataset from a JSON input. Provide a name for the dataset in the instruction field — the service parses the incoming JSON and registers the result as a named dataset in the agent state, making it available for all subsequent dataset operations.
        </p>

        <p>
          <strong>Instruction:</strong> Enter dataset name
          <br />
          <strong>Context:</strong> <code>JSON Input</code>
        </p>

        <h3 id="32-select_keys">3.2 select_keys</h3>

        <p>
          Filters a JSON dictionary down to only the keys you specify. Provide the key names in the instruction field, and the service returns a new JSON object containing only those fields. Useful for trimming large JSON objects before passing them into downstream nodes.
        </p>

        <p>
          <strong>Instruction:</strong> Enter keys
          <br />
          <strong>Context:</strong> <code>JSON Input</code>
        </p>

        <h3 id="33-dataset_plot">3.3 dataset_plot</h3>

        <p>
          Generates a visual chart or graph from the current dataset. Provide a visualization instruction — such as specifying the chart type or the columns to plot — and the service produces a visual output that can be included in reports or reviewed in the agent interface.
        </p>

        <p>
          <strong>Instruction:</strong> Enter visualization instruction
          <br />
          <strong>Context:</strong> <code>Dataset</code>
        </p>

        <h3 id="34-load_dataset">3.4 load_dataset</h3>

        <p>
          Loads a previously saved dataset back into the agent state by name. Provide the dataset name in the instruction field. Use this when a workflow needs to resume from a saved state or when a dataset created in an earlier run needs to be reused.
        </p>

        <p>
          <strong>Instruction:</strong> Enter dataset name
          <br />
          <strong>Context:</strong> <code>Dataset</code>
        </p>

        <h3 id="35-create_json">3.5 create_json</h3>

        <p>
          Consolidates selected keys from the agent state into a single JSON dictionary. Provide the list of keys in the instruction field, and the service assembles them into a structured JSON object. Useful for packaging results before passing them to extraction, export, or integration nodes.
        </p>

        <p>
          <strong>Instruction:</strong> Enter keys list
          <br />
          <strong>Context:</strong> <code>Agent-State</code>
        </p>

        <h3 id="36-ds_command_filter">3.6 ds_command_filter</h3>

        <p>
          Applies a filter command to the dataset using a structured expression. Provide the filter command in the instruction field. This service is suited for programmatic filtering where precise control over the filter logic is required.
        </p>

        <p>
          <strong>Instruction:</strong> Enter filter command
          <br />
          <strong>Context:</strong> <code>Dataset</code>
        </p>

        <h3 id="37-ds_column_filter">3.7 ds_column_filter</h3>

        <p>
          Keeps only the rows in the dataset where a selected column meets a specified condition. Provide the column and condition in the instruction field. Useful for narrowing a dataset to a relevant subset before analysis or reporting.
        </p>

        <p>
          <strong>Instruction:</strong> Enter column condition
          <br />
          <strong>Context:</strong> <code>Dataset</code>
        </p>

        <h3 id="38-ds_quick_stats">3.8 ds_quick_stats</h3>

        <p>
          Generates a statistical summary report for a selected column — including metrics like count, mean, min, max, and distribution. Provide the column name in the instruction field. Designed for fast exploratory analysis without running a full statistical pipeline.
        </p>

        <p>
          <strong>Instruction:</strong> Select column
          <br />
          <strong>Context:</strong> <code>Dataset</code>
        </p>

        <h3 id="39-ds_column_analysis">3.9 ds_column_analysis</h3>

        <p>
          Produces a detailed analytical report for a selected column, covering distribution, patterns, and outliers. More thorough than <code>ds_quick_stats</code>. Provide the column name in the instruction field.
        </p>

        <p>
          <strong>Instruction:</strong> Select column
          <br />
          <strong>Context:</strong> <code>Dataset</code>
        </p>

        <h3 id="310-ds_report">3.10 ds_report</h3>

        <p>
          Generates a combined dataset and workflow report with no additional instruction required. It summarizes the dataset contents alongside the workflow steps that produced them — useful as a closing node for data-heavy pipelines.
        </p>

        <p>
          <strong>Instruction:</strong> No instruction
          <br />
          <strong>Context:</strong> <code>Dataset</code>
        </p>

        <h3 id="311-ds_column_select">3.11 ds_column_select</h3>

        <p>
          Returns the values of a single selected column from the dataset. Provide the column name in the instruction field. Use it to isolate a specific column and surface its values for downstream extraction, filtering, or reporting.
        </p>

        <p>
          <strong>Instruction:</strong> Select column
          <br />
          <strong>Context:</strong> <code>Dataset</code>
        </p>

        <h3 id="312-ds_ask_dataset">3.12 ds_ask_dataset</h3>

        <p>
          Queries the dataset using a natural language question. Provide the question in the instruction field, and the service interprets the query, retrieves the relevant data, and returns a structured or prose answer. No SQL or filter syntax is required.
        </p>

        <p>
          <strong>Instruction:</strong> Enter query
          <br />
          <strong>Context:</strong> <code>Dataset</code>
        </p>

        <h3 id="313-ds_readout">3.13 ds_readout</h3>

        <p>
          Returns the raw text content from a specified row range in the dataset. Provide the row range in the instruction field. Useful for inspecting specific records, feeding row-level content into downstream model nodes, or sampling data from large datasets.
        </p>

        <p>
          <strong>Instruction:</strong> Enter row range
          <br />
          <strong>Context:</strong> <code>Dataset</code>
        </p>

        <h3 id="314-ds_smart_filter">3.14 ds_smart_filter</h3>

        <p>
          Filters the dataset semantically based on meaning rather than exact keyword or column matching. Provide a natural language query in the instruction field, and the service returns rows whose content is semantically relevant to that query.
        </p>

        <p>
          <strong>Instruction:</strong> Enter query
          <br />
          <strong>Context:</strong> <code>Dataset</code>
        </p>

        <h3 id="315-ds_keyword_filter">3.15 ds_keyword_filter</h3>

        <p>
          Filters the dataset by exact keyword match. Provide the keyword in the instruction field, and the service returns all rows containing that term. Best used when precision matters and semantic fuzzy-matching is not appropriate.
        </p>

        <p>
          <strong>Instruction:</strong> Enter keyword
          <br />
          <strong>Context:</strong> <code>Dataset</code>
        </p>

        <h3 id="316-ds_statistics">3.16 ds_statistics</h3>

        <p>
          Performs a deeper statistical analysis of the entire dataset — going beyond column-level summaries to examine distributions, correlations, and other aggregate patterns. No instruction is required.
        </p>

        <p>
          <strong>Instruction:</strong> No instruction
          <br />
          <strong>Context:</strong> <code>Dataset</code>
        </p>

        <h3 id="317-ds_stat_analysis">3.17 ds_stat_analysis</h3>

        <p>
          Runs a statistical analysis specifically on CSV-format datasets. Similar in scope to <code>ds_statistics</code> but optimized for CSV input structure. No instruction is required.
        </p>

        <p>
          <strong>Instruction:</strong> No instruction
          <br />
          <strong>Context:</strong> <code>Dataset</code>
        </p>

        <h2 id="4-specialized-services">4. Specialized services</h2>

        <p>
          Advanced utilities for targeted or complex workflows.
        </p>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Service Name</th>
              <th className="border border-border px-4 py-2 text-left">Instruction</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
              <th className="border border-border px-4 py-2 text-left">Context</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><strong>build_table</strong></td>
              <td className="border border-border px-4 py-2">Enter table name</td>
              <td className="border border-border px-4 py-2">Create table from CSV data</td>
              <td className="border border-border px-4 py-2"><code>User-Table</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>query_custom_table</strong></td>
              <td className="border border-border px-4 py-2">Enter query</td>
              <td className="border border-border px-4 py-2">Database lookup in natural language</td>
              <td className="border border-border px-4 py-2"><code>Table Output</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>json_extractor</strong></td>
              <td className="border border-border px-4 py-2">Enter schema</td>
              <td className="border border-border px-4 py-2">Convert embedded JSON text into structured dataset element</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>semantic_filter</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Meaning-based filtering</td>
              <td className="border border-border px-4 py-2"><code>User-Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>text_filter</strong></td>
              <td className="border border-border px-4 py-2">Enter keyword/topic</td>
              <td className="border border-border px-4 py-2">Rule-based filtering</td>
              <td className="border border-border px-4 py-2"><code>User-Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>document_filter</strong></td>
              <td className="border border-border px-4 py-2">Enter document name</td>
              <td className="border border-border px-4 py-2">Document-level filtering</td>
              <td className="border border-border px-4 py-2"><code>User-Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>table_filter</strong></td>
              <td className="border border-border px-4 py-2">No instruction</td>
              <td className="border border-border px-4 py-2">Structured table filtering</td>
              <td className="border border-border px-4 py-2"><code>User-Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>load_kb</strong></td>
              <td className="border border-border px-4 py-2">Enter KB name</td>
              <td className="border border-border px-4 py-2">Load knowledge base into agent state</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_ask_kb</strong></td>
              <td className="border border-border px-4 py-2">Enter query</td>
              <td className="border border-border px-4 py-2">Answer KB questions from dataset input</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>transformer</strong></td>
              <td className="border border-border px-4 py-2">Choose input</td>
              <td className="border border-border px-4 py-2">Text/data transformation tasks</td>
              <td className="border border-border px-4 py-2"><code>Agent-State</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>aggregate_context</strong></td>
              <td className="border border-border px-4 py-2">Enter context names</td>
              <td className="border border-border px-4 py-2">Consolidate multiple contexts</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>parse_document</strong></td>
              <td className="border border-border px-4 py-2">Enter name</td>
              <td className="border border-border px-4 py-2">Convert documents to text</td>
              <td className="border border-border px-4 py-2"><code>User-Document</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>create_context</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Build reusable context blocks from relevant passages</td>
              <td className="border border-border px-4 py-2"><code>User-Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>report_commentary</strong></td>
              <td className="border border-border px-4 py-2">Optional</td>
              <td className="border border-border px-4 py-2">Generate commentary from agent state</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>speech_gen</strong></td>
              <td className="border border-border px-4 py-2">Enter text</td>
              <td className="border border-border px-4 py-2">Generate audio output from text</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>image_gen</strong></td>
              <td className="border border-border px-4 py-2">Enter description</td>
              <td className="border border-border px-4 py-2">Generate images from text</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>get_stock_summary</strong></td>
              <td className="border border-border px-4 py-2">Enter ticker</td>
              <td className="border border-border px-4 py-2">Stock lookup</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>speech</strong></td>
              <td className="border border-border px-4 py-2">Enter input</td>
              <td className="border border-border px-4 py-2">Transcribe a speech file</td>
              <td className="border border-border px-4 py-2"><code>Audio Input</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>speech_batch</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Transcribe collection of speech files</td>
              <td className="border border-border px-4 py-2"><code>Audio Batch</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>vision_batch</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Answer questions from multiple images</td>
              <td className="border border-border px-4 py-2"><code>User-Document</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>parse_batch</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Create source from document batch</td>
              <td className="border border-border px-4 py-2"><code>User-Document</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>extract-tiny</strong></td>
              <td className="border border-border px-4 py-2">Enter key</td>
              <td className="border border-border px-4 py-2">Extract key-value pair (lightweight)</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>website_scraper</strong></td>
              <td className="border border-border px-4 py-2">Enter URL</td>
              <td className="border border-border px-4 py-2">Extract web content from allowed websites</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>extract_table</strong></td>
              <td className="border border-border px-4 py-2">Enter query</td>
              <td className="border border-border px-4 py-2">Extract tables from documents</td>
              <td className="border border-border px-4 py-2"><code>User-Document</code></td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>build_table</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter table name</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Create table from CSV data</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Table</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>query_custom_table</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Database lookup in natural language</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Table Output</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>json_extractor</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter schema</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Convert embedded JSON text into structured dataset element</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>semantic_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Meaning-based filtering</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>text_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter keyword/topic</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Rule-based filtering</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>document_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter document name</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Document-level filtering</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>table_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Structured table filtering</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>load_kb</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter KB name</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Load knowledge base into agent state</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_ask_kb</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Answer KB questions from dataset input</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>transformer</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Choose input</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Text/data transformation tasks</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Agent-State</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>aggregate_context</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter context names</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Consolidate multiple contexts</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>parse_document</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter name</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Convert documents to text</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Document</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>create_context</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Build reusable context blocks from relevant passages</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>report_commentary</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Optional</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generate commentary from agent state</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>speech_gen</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter text</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generate audio output from text</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>image_gen</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter description</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generate images from text</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>get_stock_summary</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter ticker</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Stock lookup</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>speech</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter input</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Transcribe a speech file</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Audio Input</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>speech_batch</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Transcribe collection of speech files</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Audio Batch</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>vision_batch</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Answer questions from multiple images</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Document</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>parse_batch</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Create source from document batch</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Document</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>extract-tiny</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter key</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Extract key-value pair (lightweight)</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>website_scraper</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter URL</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Extract web content from allowed websites</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>extract_table</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Extract tables from documents</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Document</code></p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h3 id="41-build_table">4.1 build_table</h3>

        <p>
          Creates a structured database table from CSV data. Provide a name for the table in the instruction field, and the service registers it in the agent state from a <code>User-Table</code> input. Once built, the table can be queried in natural language by <code>query_custom_table</code> in downstream nodes.
        </p>

        <p>
          <strong>Instruction:</strong> Enter table name
          <br />
          <strong>Context:</strong> <code>User-Table</code>
        </p>

        <h3 id="42-query_custom_table">4.2 query_custom_table</h3>

        <p>
          Queries a custom database table using a natural language question. Provide the query in the instruction field, and the service translates it into a structured lookup against the <code>Table Output</code> from a preceding <code>build_table</code> node. No SQL knowledge is required.
        </p>

        <p>
          <strong>Instruction:</strong> Enter query
          <br />
          <strong>Context:</strong> <code>Table Output</code>
        </p>

        <h3 id="43-json_extractor">4.3 json_extractor</h3>

        <p>
          Converts embedded JSON text found within unstructured content into a structured dataset element. Provide a schema in the instruction field to define the expected structure. Works on <code>MAIN-INPUT</code> or <code>User-Text</code> and is useful for processing API responses, log outputs, or any prose that contains inline JSON.
        </p>

        <p>
          <strong>Instruction:</strong> Enter schema
          <br />
          <strong>Context:</strong> <code>MAIN-INPUT</code>, <code>User-Text</code>
        </p>

        <h3 id="44-semantic_filter">4.4 semantic_filter</h3>

        <p>
          Filters a source collection based on semantic meaning rather than exact text matching. Provide a natural language instruction describing what content to keep, and the service returns passages from <code>User-Source</code> that are meaningfully relevant to that description.
        </p>

        <p>
          <strong>Instruction:</strong> Enter instruction
          <br />
          <strong>Context:</strong> <code>User-Source</code>
        </p>

        <h3 id="45-text_filter">4.5 text_filter</h3>

        <p>
          Applies rule-based filtering to a source collection using a keyword or topic. Provide the keyword or topic phrase in the instruction field, and the service returns matching passages from <code>User-Source</code>. Best used when you need deterministic, exact-match filtering rather than semantic relevance.
        </p>

        <p>
          <strong>Instruction:</strong> Enter keyword/topic
          <br />
          <strong>Context:</strong> <code>User-Source</code>
        </p>

        <h3 id="46-document_filter">4.6 document_filter</h3>

        <p>
          Filters a source collection down to content from a specific named document. Provide the document name in the instruction field, and the service returns only passages originating from that file within the <code>User-Source</code>. Useful when multiple documents are loaded as a source and you need to scope a node's input to just one.
        </p>

        <p>
          <strong>Instruction:</strong> Enter document name
          <br />
          <strong>Context:</strong> <code>User-Source</code>
        </p>

        <h3 id="47-table_filter">4.7 table_filter</h3>

        <p>
          Applies structured filtering logic to a source collection containing tabular data. No instruction is required — the service applies its own parsing and filtering rules to the <code>User-Source</code> input and returns the relevant structured content.
        </p>

        <p>
          <strong>Instruction:</strong> No instruction
          <br />
          <strong>Context:</strong> <code>User-Source</code>
        </p>

        <h3 id="48-load_kb">4.8 load_kb</h3>

        <p>
          Loads a pre-built knowledge base into the agent state by name. Provide the knowledge base name in the instruction field, and its content becomes available as context for downstream nodes. No document input is required — the KB is retrieved from storage directly.
        </p>

        <p>
          <strong>Instruction:</strong> Enter KB name
          <br />
          <strong>Context:</strong> <code>None</code>
        </p>

        <h3 id="49-ds_ask_kb">4.9 ds_ask_kb</h3>

        <p>
          Queries a knowledge base using a natural language question derived from a dataset input. Provide the question in the instruction field. The service retrieves relevant answers from the loaded knowledge base and returns them alongside dataset-level context.
        </p>

        <p>
          <strong>Instruction:</strong> Enter query
          <br />
          <strong>Context:</strong> <code>Dataset</code>
        </p>

        <h3 id="410-transformer">4.10 transformer</h3>

        <p>
          Applies a text or data transformation to the current agent state. Provide the transformation instruction or choose the input source in the instruction field. Use it to reshape, convert, reformat, or restructure data between nodes without invoking a full model inference step.
        </p>

        <p>
          <strong>Instruction:</strong> Choose input
          <br />
          <strong>Context:</strong> <code>Agent-State</code>
        </p>

        <h3 id="411-aggregate_context">4.11 aggregate_context</h3>

        <p>
          Merges multiple named context sources into a single unified context. Provide the names of the contexts to consolidate in the instruction field. Useful when several upstream nodes have produced separate context blocks that need to be combined before being passed to a model or report node.
        </p>

        <p>
          <strong>Instruction:</strong> Enter context names
          <br />
          <strong>Context:</strong> <code>None</code>
        </p>

        <h3 id="412-parse_document">4.12 parse_document</h3>

        <p>
          Converts a document file into plain text and registers it in the agent state under a given name. Provide the name in the instruction field. Accepts <code>User-Document</code> input and is typically used as a preprocessing step before extraction, RAG, or analysis nodes.
        </p>

        <p>
          <strong>Instruction:</strong> Enter name
          <br />
          <strong>Context:</strong> <code>User-Document</code>
        </p>

        <h3 id="413-create_context">4.13 create_context</h3>

        <p>
          Builds a reusable context block from the most relevant passages in a source collection. Provide a guiding instruction in the instruction field to direct which passages are selected, and the service constructs a focused context from <code>User-Source</code> that can be referenced by downstream nodes.
        </p>

        <p>
          <strong>Instruction:</strong> Enter instruction
          <br />
          <strong>Context:</strong> <code>User-Source</code>
        </p>

        <h3 id="414-report_commentary">4.14 report_commentary</h3>

        <p>
          Generates a narrative commentary based on the current agent state. The instruction field is optional — omitting it produces a general-purpose commentary, while providing a specific focus narrows the output. Useful for adding analytical interpretation to a report before it is finalized.
        </p>

        <p>
          <strong>Instruction:</strong> Optional
          <br />
          <strong>Context:</strong> <code>None</code>
        </p>

        <h3 id="415-speech_gen">4.15 speech_gen</h3>

        <p>
          Generates an audio file from a text input. Provide the text to be spoken in the instruction field, and the service returns an audio output. Useful for creating voice narrations, accessibility outputs, or audio summaries as part of a workflow.
        </p>

        <p>
          <strong>Instruction:</strong> Enter text
          <br />
          <strong>Context:</strong> <code>None</code>
        </p>

        <h3 id="416-image_gen">4.16 image_gen</h3>

        <p>
          Generates an image from a text description. Provide the description in the instruction field, and the service returns a generated image as output. Useful for workflows that produce visual assets alongside written content.
        </p>

        <p>
          <strong>Instruction:</strong> Enter description
          <br />
          <strong>Context:</strong> <code>None</code>
        </p>

        <h3 id="417-get_stock_summary">4.17 get_stock_summary</h3>

        <p>
          Retrieves a summary of stock information for a given ticker symbol. Provide the ticker in the instruction field, and the service returns relevant market data. Requires no input context and is typically used in financial analysis or market monitoring workflows.
        </p>

        <p>
          <strong>Instruction:</strong> Enter ticker
          <br />
          <strong>Context:</strong> <code>None</code>
        </p>

        <h3 id="418-speech">4.18 speech</h3>

        <p>
          Transcribes a single speech audio file into text. Provide the input reference in the instruction field, and the service returns the transcribed text from the <code>Audio Input</code> source. Use it as a preprocessing step before applying text-based analysis or extraction nodes.
        </p>

        <p>
          <strong>Instruction:</strong> Enter input
          <br />
          <strong>Context:</strong> <code>Audio Input</code>
        </p>

        <h3 id="419-speech_batch">4.19 speech_batch</h3>

        <p>
          Transcribes a collection of speech audio files into text. Provide an instruction to guide the transcription in the instruction field, and the service processes the entire <code>Audio Batch</code> input. Useful for bulk transcription pipelines such as interview analysis or call center review.
        </p>

        <p>
          <strong>Instruction:</strong> Enter instruction
          <br />
          <strong>Context:</strong> <code>Audio Batch</code>
        </p>

        <h3 id="420-vision_batch">4.20 vision_batch</h3>

        <p>
          Answers questions across multiple images by applying visual reasoning to a batch of <code>User-Document</code> inputs. Provide the question or instruction in the instruction field, and the service processes each image in the batch and aggregates the results.
        </p>

        <p>
          <strong>Instruction:</strong> Enter instruction
          <br />
          <strong>Context:</strong> <code>User-Document</code>
        </p>

        <h3 id="421-parse_batch">4.21 parse_batch</h3>

        <p>
          Parses a batch of documents into a unified text source. Provide a guiding instruction in the instruction field, and the service converts each document in the <code>User-Document</code> batch into text, combining them into a single source available to downstream nodes.
        </p>

        <p>
          <strong>Instruction:</strong> Enter instruction
          <br />
          <strong>Context:</strong> <code>User-Document</code>
        </p>

        <h3 id="422-extract-tiny">4.22 extract-tiny</h3>

        <p>
          A lightweight alternative to <code>extract</code> for simple key-value extraction tasks. Provide the key in the instruction field, and the service returns the corresponding value from <code>MAIN-INPUT</code> or <code>User-Text</code>. Best used when the extraction is straightforward and minimizing processing overhead matters.
        </p>

        <p>
          <strong>Instruction:</strong> Enter key
          <br />
          <strong>Context:</strong> <code>MAIN-INPUT</code>, <code>User-Text</code>
        </p>

        <h3 id="423-website_scraper">4.23 website_scraper</h3>

        <p>
          Extracts content from a specified web page. Provide the URL in the instruction field, and the service retrieves and returns the page's text content. Operates on allowed websites only and requires no input context — useful for pulling live web content directly into the agent state.
        </p>

        <p>
          <strong>Instruction:</strong> Enter URL
          <br />
          <strong>Context:</strong> <code>None</code>
        </p>

        <h3 id="424-extract_table">4.24 extract_table</h3>

        <p>
          Extracts structured table data from within a document. Provide the query or description of the table to extract in the instruction field, and the service locates and returns the matching table from the <code>User-Document</code> input as structured data.
        </p>

        <p>
          <strong>Instruction:</strong> Enter query
          <br />
          <strong>Context:</strong> <code>User-Document</code>
        </p>

        <h2 id="5-integrations">5. Integrations</h2>

        <p>
          Connect the agent to external systems or hosted models.
        </p>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Service Name</th>
              <th className="border border-border px-4 py-2 text-left">Instruction</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
              <th className="border border-border px-4 py-2 text-left">Context</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><strong>push_to_s3</strong></td>
              <td className="border border-border px-4 py-2">Enter path</td>
              <td className="border border-border px-4 py-2">Upload data to S3</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>pull_from_s3</strong></td>
              <td className="border border-border px-4 py-2">Enter path</td>
              <td className="border border-border px-4 py-2">Download data from S3</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>connect_library</strong></td>
              <td className="border border-border px-4 py-2">Enter library name</td>
              <td className="border border-border px-4 py-2">Connect to semantic library</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>query_library</strong></td>
              <td className="border border-border px-4 py-2">Enter query</td>
              <td className="border border-border px-4 py-2">Query semantic library</td>
              <td className="border border-border px-4 py-2"><code>Library Context</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>get_quote</strong></td>
              <td className="border border-border px-4 py-2">Enter symbol</td>
              <td className="border border-border px-4 py-2">Retrieve stock quote</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>get_company_financials</strong></td>
              <td className="border border-border px-4 py-2">Enter company/ticker</td>
              <td className="border border-border px-4 py-2">Retrieve financial data</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>send_email</strong></td>
              <td className="border border-border px-4 py-2">Enter email</td>
              <td className="border border-border px-4 py-2">Send email</td>
              <td className="border border-border px-4 py-2"><code>Select context</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>openai_chat</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">OpenAI chat completion</td>
              <td className="border border-border px-4 py-2"><code>Text Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>openai_rag</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">OpenAI RAG query</td>
              <td className="border border-border px-4 py-2"><code>Text Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>openai_rag_batch</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">OpenAI batch RAG</td>
              <td className="border border-border px-4 py-2"><code>Text Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>anthropic_chat</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Anthropic chat completion</td>
              <td className="border border-border px-4 py-2"><code>Text Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>gemini_chat</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Gemini chat completion</td>
              <td className="border border-border px-4 py-2"><code>Text Source</code></td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>push_to_s3</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter path</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Upload data to S3</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>pull_from_s3</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter path</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Download data from S3</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>connect_library</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter library name</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Connect to semantic library</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>query_library</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Query semantic library</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Library Context</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>get_quote</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter symbol</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Retrieve stock quote</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>get_company_financials</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter company/ticker</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Retrieve financial data</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>send_email</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter email</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Send email</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Select context</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>openai_chat</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">OpenAI chat completion</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Text Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>openai_rag</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">OpenAI RAG query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Text Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>openai_rag_batch</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">OpenAI batch RAG</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Text Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>anthropic_chat</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Anthropic chat completion</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Text Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>gemini_chat</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Gemini chat completion</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Text Source</code></p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h3 id="51-push_to_s3">5.1 push_to_s3</h3>

        <p>
          Uploads data from the agent state to an Amazon S3 bucket. Provide the destination path in the instruction field. No input context is required — the service reads directly from the agent state. Use it to persist workflow outputs to cloud storage as part of an automated pipeline.
        </p>

        <p>
          <strong>Instruction:</strong> Enter path
          <br />
          <strong>Context:</strong> <code>None</code>
        </p>

        <h3 id="52-pull_from_s3">5.2 pull_from_s3</h3>

        <p>
          Downloads data from an Amazon S3 bucket into the agent state. Provide the source path in the instruction field. No input context is required. Use it to bring external data files or previously stored outputs into a workflow without manual upload.
        </p>

        <p>
          <strong>Instruction:</strong> Enter path
          <br />
          <strong>Context:</strong> <code>None</code>
        </p>

        <h3 id="53-connect_library">5.3 connect_library</h3>

        <p>
          Establishes a connection to a semantic library by name. Provide the library name in the instruction field. Once connected, the library context becomes accessible to downstream nodes — particularly <code>query_library</code> — enabling semantic search over curated, pre-indexed content collections.
        </p>

        <p>
          <strong>Instruction:</strong> Enter library name
          <br />
          <strong>Context:</strong> <code>None</code>
        </p>

        <h3 id="54-query_library">5.4 query_library</h3>

        <p>
          Queries a connected semantic library using a natural language question. Provide the query in the instruction field, and the service retrieves the most relevant content from the <code>Library Context</code> established by a preceding <code>connect_library</code> node.
        </p>

        <p>
          <strong>Instruction:</strong> Enter query
          <br />
          <strong>Context:</strong> <code>Library Context</code>
        </p>

        <h3 id="55-get_quote">5.5 get_quote</h3>

        <p>
          Retrieves a real-time stock quote for a given symbol. Provide the ticker symbol in the instruction field, and the service returns current price and related market data. No input context is required. Used in financial workflows alongside <code>get_stock_summary</code> or <code>get_company_financials</code>.
        </p>

        <p>
          <strong>Instruction:</strong> Enter symbol
          <br />
          <strong>Context:</strong> <code>None</code>
        </p>

        <h3 id="56-get_company_financials">5.6 get_company_financials</h3>

        <p>
          Retrieves financial data for a specified company or ticker. Provide the company name or ticker in the instruction field, and the service returns structured financial information. No input context is required. Suited for investment research and financial reporting workflows.
        </p>

        <p>
          <strong>Instruction:</strong> Enter company/ticker
          <br />
          <strong>Context:</strong> <code>None</code>
        </p>

        <h3 id="57-send_email">5.7 send_email</h3>

        <p>
          Sends an email using content assembled from the agent state. Provide the recipient email address in the instruction field and select the context source to use as the email body. Useful for automated notification, report delivery, or alert workflows.
        </p>

        <p>
          <strong>Instruction:</strong> Enter email
          <br />
          <strong>Context:</strong> <code>Select context</code>
        </p>

        <h3 id="58-openai_chat">5.8 openai_chat</h3>

        <p>
          Sends a prompt to the OpenAI chat completion API and returns the response. Provide the instruction in the instruction field, and the service resolves it against the supplied <code>Text Source</code>. Use it when a specific workflow node requires OpenAI's models rather than a locally running model.
        </p>

        <p>
          <strong>Instruction:</strong> Enter instruction
          <br />
          <strong>Context:</strong> <code>Text Source</code>
        </p>

        <h3 id="59-openai_rag">5.9 openai_rag</h3>

        <p>
          Performs a Retrieval-Augmented Generation query using OpenAI's models against a <code>Text Source</code>. Provide the instruction in the instruction field. The service retrieves relevant passages and returns a grounded answer — functionally equivalent to <code>rag_answer</code> but routed through the OpenAI API.
        </p>

        <p>
          <strong>Instruction:</strong> Enter instruction
          <br />
          <strong>Context:</strong> <code>Text Source</code>
        </p>

        <h3 id="510-openai_rag_batch">5.10 openai_rag_batch</h3>

        <p>
          Runs RAG across a batch of text sources using OpenAI's models. Provide the instruction in the instruction field, and the service processes each source in the batch and returns consolidated results. The OpenAI-hosted equivalent of <code>rag_batch</code>.
        </p>

        <p>
          <strong>Instruction:</strong> Enter instruction
          <br />
          <strong>Context:</strong> <code>Text Source</code>
        </p>

        <h3 id="511-anthropic_chat">5.11 anthropic_chat</h3>

        <p>
          Sends a prompt to Anthropic's Claude API and returns the response. Provide the instruction in the instruction field, and the service resolves it against the supplied <code>Text Source</code>. Use it when Claude's capabilities are preferred over locally running or other hosted models for a specific node.
        </p>

        <p>
          <strong>Instruction:</strong> Enter instruction
          <br />
          <strong>Context:</strong> <code>Text Source</code>
        </p>

        <h3 id="512-gemini_chat">5.12 gemini_chat</h3>

        <p>
          Sends a prompt to Google's Gemini API and returns the response. Provide the instruction in the instruction field, and the service resolves it against the supplied <code>Text Source</code>. Use it when Gemini's multimodal or language capabilities are required for a specific step in the workflow.
        </p>

        <p>
          <strong>Instruction:</strong> Enter instruction
          <br />
          <strong>Context:</strong> <code>Text Source</code>
        </p>

        <h2 id="6-all-services">6. All services</h2>

        <p>
          Workspace-specific or user-defined services added for specialized use cases.
        </p>

        <p>
          Below is the list of supported services, their expected instruction formats, descriptions, and applicable context sources.
        </p>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Service Name</th>
              <th className="border border-border px-4 py-2 text-left">Instruction</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
              <th className="border border-border px-4 py-2 text-left">Context</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><strong>chat</strong></td>
              <td className="border border-border px-4 py-2">What is your question or instruction?</td>
              <td className="border border-border px-4 py-2">Answers a question or performs instruction</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code>, <code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>rag_batch</strong></td>
              <td className="border border-border px-4 py-2">Enter question or instruction</td>
              <td className="border border-border px-4 py-2">Performs RAG over batch of documents</td>
              <td className="border border-border px-4 py-2"><code>User-Document</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>rag_answer</strong></td>
              <td className="border border-border px-4 py-2">Ask question to longer document input</td>
              <td className="border border-border px-4 py-2">Answers a question based on a longer document input</td>
              <td className="border border-border px-4 py-2"><code>User-Source</code>, <code>Provide_instruction_or_query</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>vision</strong></td>
              <td className="border border-border px-4 py-2">Enter question to image file</td>
              <td className="border border-border px-4 py-2">Provides answer/description from image</td>
              <td className="border border-border px-4 py-2"><code>User-Image</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ocr_vision</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Performs OCR + vision-based understanding</td>
              <td className="border border-border px-4 py-2"><code>User-Document</code>, <code>User-Image</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ocr</strong></td>
              <td className="border border-border px-4 py-2">Enter name of new document source</td>
              <td className="border border-border px-4 py-2">Extracts content from image-based or protected documents</td>
              <td className="border border-border px-4 py-2"><code>User-Document</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>agent_report</strong></td>
              <td className="border border-border px-4 py-2">Enter title for agent report</td>
              <td className="border border-border px-4 py-2">Prepares report on agent output</td>
              <td className="border border-border px-4 py-2"><code>-</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>wikipedia_search</strong></td>
              <td className="border border-border px-4 py-2">Add Wikipedia Articles as Research Context</td>
              <td className="border border-border px-4 py-2">Adds Wikipedia articles as research context</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>prompt_builder</strong></td>
              <td className="border border-border px-4 py-2">Enter prompt instruction</td>
              <td className="border border-border px-4 py-2">Builds structured prompts</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>embedded_bot</strong></td>
              <td className="border border-border px-4 py-2">Optional</td>
              <td className="border border-border px-4 py-2">Pauses execution for user interaction</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>condition</strong></td>
              <td className="border border-border px-4 py-2">Enter expression</td>
              <td className="border border-border px-4 py-2">Evaluates logical condition</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>web_search</strong></td>
              <td className="border border-border px-4 py-2">Add query</td>
              <td className="border border-border px-4 py-2">Performs web search and returns structured results</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>boolean</strong></td>
              <td className="border border-border px-4 py-2">Provide yes/no question</td>
              <td className="border border-border px-4 py-2">Provides yes/no answer with explanation</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>extract</strong></td>
              <td className="border border-border px-4 py-2">Enter extraction key</td>
              <td className="border border-border px-4 py-2">Extracts key-value pair</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>answer</strong></td>
              <td className="border border-border px-4 py-2">What is your question?</td>
              <td className="border border-border px-4 py-2">Answers specific question from passage</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>sentiment</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Analyzes sentiment</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>emotions</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Analyzes emotion</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>topics</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Classifies topic</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>tags</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Generates tags</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>intent</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Classifies intent</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ratings</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Rates positivity (1–5)</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ner</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Named entity recognition</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>xsum</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Generates extreme summary</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>summary</strong></td>
              <td className="border border-border px-4 py-2">Optional</td>
              <td className="border border-border px-4 py-2">Summarizes content</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>category</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Classifies category</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>q_gen</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Generates questions</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>build_dataset</strong></td>
              <td className="border border-border px-4 py-2">Enter dataset name</td>
              <td className="border border-border px-4 py-2">Create datasets from JSON</td>
              <td className="border border-border px-4 py-2"><code>JSON Input</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>select_keys</strong></td>
              <td className="border border-border px-4 py-2">Enter keys</td>
              <td className="border border-border px-4 py-2">Select specified keys from a JSON dictionary</td>
              <td className="border border-border px-4 py-2"><code>JSON Input</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>dataset_plot</strong></td>
              <td className="border border-border px-4 py-2">Enter visualization instruction</td>
              <td className="border border-border px-4 py-2">Visualize dataset</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>load_dataset</strong></td>
              <td className="border border-border px-4 py-2">Enter dataset name</td>
              <td className="border border-border px-4 py-2">Load saved datasets</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>create_json</strong></td>
              <td className="border border-border px-4 py-2">Enter keys list</td>
              <td className="border border-border px-4 py-2">Consolidate agent keys into JSON dictionary</td>
              <td className="border border-border px-4 py-2"><code>Agent-State</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_command_filter</strong></td>
              <td className="border border-border px-4 py-2">Enter filter command</td>
              <td className="border border-border px-4 py-2">Applies filter commands to a dataset</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_column_filter</strong></td>
              <td className="border border-border px-4 py-2">Enter column condition</td>
              <td className="border border-border px-4 py-2">Keep rows where a selected column meets condition</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_quick_stats</strong></td>
              <td className="border border-border px-4 py-2">Select column</td>
              <td className="border border-border px-4 py-2">Generate statistical report based on column</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_column_analysis</strong></td>
              <td className="border border-border px-4 py-2">Select column</td>
              <td className="border border-border px-4 py-2">Generate report based on selected column</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_report</strong></td>
              <td className="border border-border px-4 py-2">No instruction</td>
              <td className="border border-border px-4 py-2">Generate dataset + workflow report</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_column_select</strong></td>
              <td className="border border-border px-4 py-2">Select column</td>
              <td className="border border-border px-4 py-2">Return selected column from dataset</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_ask_dataset</strong></td>
              <td className="border border-border px-4 py-2">Enter query</td>
              <td className="border border-border px-4 py-2">Query dataset using natural language</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_readout</strong></td>
              <td className="border border-border px-4 py-2">Enter row range</td>
              <td className="border border-border px-4 py-2">Return text from selected rows</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_smart_filter</strong></td>
              <td className="border border-border px-4 py-2">Enter query</td>
              <td className="border border-border px-4 py-2">Semantic dataset filtering</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_keyword_filter</strong></td>
              <td className="border border-border px-4 py-2">Enter keyword</td>
              <td className="border border-border px-4 py-2">Exact keyword filtering</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_statistics</strong></td>
              <td className="border border-border px-4 py-2">No instruction</td>
              <td className="border border-border px-4 py-2">Perform deeper statistical analysis</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_stat_analysis</strong></td>
              <td className="border border-border px-4 py-2">No instruction</td>
              <td className="border border-border px-4 py-2">Statistical analysis of CSV dataset</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>build_table</strong></td>
              <td className="border border-border px-4 py-2">Enter table name</td>
              <td className="border border-border px-4 py-2">Create table from CSV data</td>
              <td className="border border-border px-4 py-2"><code>User-Table</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>query_custom_table</strong></td>
              <td className="border border-border px-4 py-2">Enter query</td>
              <td className="border border-border px-4 py-2">Database lookup in natural language</td>
              <td className="border border-border px-4 py-2"><code>Table Output</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>json_extractor</strong></td>
              <td className="border border-border px-4 py-2">Enter schema</td>
              <td className="border border-border px-4 py-2">Convert embedded JSON text into structured dataset element</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>semantic_filter</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Meaning-based filtering</td>
              <td className="border border-border px-4 py-2"><code>User-Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>text_filter</strong></td>
              <td className="border border-border px-4 py-2">Enter keyword/topic</td>
              <td className="border border-border px-4 py-2">Rule-based filtering</td>
              <td className="border border-border px-4 py-2"><code>User-Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>document_filter</strong></td>
              <td className="border border-border px-4 py-2">Enter document name</td>
              <td className="border border-border px-4 py-2">Document-level filtering</td>
              <td className="border border-border px-4 py-2"><code>User-Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>table_filter</strong></td>
              <td className="border border-border px-4 py-2">No instruction</td>
              <td className="border border-border px-4 py-2">Structured table filtering</td>
              <td className="border border-border px-4 py-2"><code>User-Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>load_kb</strong></td>
              <td className="border border-border px-4 py-2">Enter KB name</td>
              <td className="border border-border px-4 py-2">Load knowledge base into agent state</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_ask_kb</strong></td>
              <td className="border border-border px-4 py-2">Enter query</td>
              <td className="border border-border px-4 py-2">Answer KB questions from dataset input</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>transformer</strong></td>
              <td className="border border-border px-4 py-2">Choose input</td>
              <td className="border border-border px-4 py-2">Text/data transformation tasks</td>
              <td className="border border-border px-4 py-2"><code>Agent-State</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>aggregate_context</strong></td>
              <td className="border border-border px-4 py-2">Enter context names</td>
              <td className="border border-border px-4 py-2">Consolidate multiple contexts</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>parse_document</strong></td>
              <td className="border border-border px-4 py-2">Enter name</td>
              <td className="border border-border px-4 py-2">Convert documents to text</td>
              <td className="border border-border px-4 py-2"><code>User-Document</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>create_context</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Build reusable context blocks from relevant passages</td>
              <td className="border border-border px-4 py-2"><code>User-Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>report_commentary</strong></td>
              <td className="border border-border px-4 py-2">Optional</td>
              <td className="border border-border px-4 py-2">Generate commentary from agent state</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>speech_gen</strong></td>
              <td className="border border-border px-4 py-2">Enter text</td>
              <td className="border border-border px-4 py-2">Generate audio output from text</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>image_gen</strong></td>
              <td className="border border-border px-4 py-2">Enter description</td>
              <td className="border border-border px-4 py-2">Generate images from text</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>get_stock_summary</strong></td>
              <td className="border border-border px-4 py-2">Enter ticker</td>
              <td className="border border-border px-4 py-2">Stock lookup</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>speech</strong></td>
              <td className="border border-border px-4 py-2">Enter input</td>
              <td className="border border-border px-4 py-2">Transcribe a speech file</td>
              <td className="border border-border px-4 py-2"><code>Audio Input</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>speech_batch</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Transcribe collection of speech files</td>
              <td className="border border-border px-4 py-2"><code>Audio Batch</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>vision_batch</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Answer questions from multiple images</td>
              <td className="border border-border px-4 py-2"><code>User-Document</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>parse_batch</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Create source from document batch</td>
              <td className="border border-border px-4 py-2"><code>User-Document</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>extract-tiny</strong></td>
              <td className="border border-border px-4 py-2">Enter key</td>
              <td className="border border-border px-4 py-2">Extract key-value pair (lightweight)</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>website_scraper</strong></td>
              <td className="border border-border px-4 py-2">Enter URL</td>
              <td className="border border-border px-4 py-2">Extract web content from allowed websites</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>extract_table</strong></td>
              <td className="border border-border px-4 py-2">Enter query</td>
              <td className="border border-border px-4 py-2">Extract tables from documents</td>
              <td className="border border-border px-4 py-2"><code>User-Document</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>push_to_s3</strong></td>
              <td className="border border-border px-4 py-2">Enter path</td>
              <td className="border border-border px-4 py-2">Upload data to S3</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>pull_from_s3</strong></td>
              <td className="border border-border px-4 py-2">Enter path</td>
              <td className="border border-border px-4 py-2">Download data from S3</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>connect_library</strong></td>
              <td className="border border-border px-4 py-2">Enter library name</td>
              <td className="border border-border px-4 py-2">Connect to semantic library</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>query_library</strong></td>
              <td className="border border-border px-4 py-2">Enter query</td>
              <td className="border border-border px-4 py-2">Query semantic library</td>
              <td className="border border-border px-4 py-2"><code>Library Context</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>get_quote</strong></td>
              <td className="border border-border px-4 py-2">Enter symbol</td>
              <td className="border border-border px-4 py-2">Retrieve stock quote</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>get_company_financials</strong></td>
              <td className="border border-border px-4 py-2">Enter company/ticker</td>
              <td className="border border-border px-4 py-2">Retrieve financial data</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>send_email</strong></td>
              <td className="border border-border px-4 py-2">Enter email</td>
              <td className="border border-border px-4 py-2">Send email</td>
              <td className="border border-border px-4 py-2"><code>Select context</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>openai_chat</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">OpenAI chat completion</td>
              <td className="border border-border px-4 py-2"><code>Text Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>openai_rag</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">OpenAI RAG query</td>
              <td className="border border-border px-4 py-2"><code>Text Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>openai_rag_batch</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">OpenAI batch RAG</td>
              <td className="border border-border px-4 py-2"><code>Text Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>anthropic_chat</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Anthropic chat completion</td>
              <td className="border border-border px-4 py-2"><code>Text Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>gemini_chat</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Gemini chat completion</td>
              <td className="border border-border px-4 py-2"><code>Text Source</code></td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>chat</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">What is your question or instruction?</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Answers a question or performs instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code>, <code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>rag_batch</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter question or instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Performs RAG over batch of documents</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Document</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>rag_answer</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Ask question to longer document input</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Answers a question based on a longer document input</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Source</code>, <code>Provide_instruction_or_query</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>vision</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter question to image file</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Provides answer/description from image</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Image</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ocr_vision</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Performs OCR + vision-based understanding</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Document</code>, <code>User-Image</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ocr</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter name of new document source</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Extracts content from image-based or protected documents</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Document</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>agent_report</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter title for agent report</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Prepares report on agent output</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>-</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>wikipedia_search</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Add Wikipedia Articles as Research Context</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Adds Wikipedia articles as research context</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>prompt_builder</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter prompt instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Builds structured prompts</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>embedded_bot</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Optional</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Pauses execution for user interaction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>condition</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter expression</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Evaluates logical condition</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>web_search</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Add query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Performs web search and returns structured results</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>boolean</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Provide yes/no question</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Provides yes/no answer with explanation</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>extract</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter extraction key</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Extracts key-value pair</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>answer</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">What is your question?</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Answers specific question from passage</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>sentiment</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Analyzes sentiment</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>emotions</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Analyzes emotion</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>topics</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Classifies topic</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>tags</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generates tags</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>intent</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Classifies intent</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ratings</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Rates positivity (1–5)</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ner</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Named entity recognition</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>xsum</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generates extreme summary</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>summary</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Optional</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Summarizes content</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>category</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Classifies category</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>q_gen</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generates questions</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>build_dataset</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter dataset name</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Create datasets from JSON</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>JSON Input</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>select_keys</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter keys</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Select specified keys from a JSON dictionary</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>JSON Input</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>dataset_plot</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter visualization instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Visualize dataset</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>load_dataset</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter dataset name</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Load saved datasets</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>create_json</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter keys list</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Consolidate agent keys into JSON dictionary</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Agent-State</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_command_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter filter command</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Applies filter commands to a dataset</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_column_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter column condition</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Keep rows where a selected column meets condition</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_quick_stats</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Select column</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generate statistical report based on column</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_column_analysis</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Select column</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generate report based on selected column</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_report</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generate dataset + workflow report</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_column_select</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Select column</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Return selected column from dataset</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_ask_dataset</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Query dataset using natural language</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_readout</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter row range</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Return text from selected rows</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_smart_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Semantic dataset filtering</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_keyword_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter keyword</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Exact keyword filtering</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_statistics</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Perform deeper statistical analysis</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_stat_analysis</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Statistical analysis of CSV dataset</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>build_table</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter table name</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Create table from CSV data</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Table</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>query_custom_table</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Database lookup in natural language</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Table Output</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>json_extractor</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter schema</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Convert embedded JSON text into structured dataset element</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>semantic_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Meaning-based filtering</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>text_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter keyword/topic</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Rule-based filtering</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>document_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter document name</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Document-level filtering</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>table_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Structured table filtering</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>load_kb</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter KB name</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Load knowledge base into agent state</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_ask_kb</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Answer KB questions from dataset input</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>transformer</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Choose input</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Text/data transformation tasks</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Agent-State</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>aggregate_context</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter context names</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Consolidate multiple contexts</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>parse_document</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter name</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Convert documents to text</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Document</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>create_context</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Build reusable context blocks from relevant passages</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>report_commentary</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Optional</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generate commentary from agent state</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>speech_gen</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter text</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generate audio output from text</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>image_gen</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter description</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generate images from text</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>get_stock_summary</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter ticker</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Stock lookup</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>speech</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter input</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Transcribe a speech file</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Audio Input</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>speech_batch</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Transcribe collection of speech files</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Audio Batch</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>vision_batch</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Answer questions from multiple images</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Document</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>parse_batch</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Create source from document batch</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Document</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>extract-tiny</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter key</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Extract key-value pair (lightweight)</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>website_scraper</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter URL</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Extract web content from allowed websites</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>extract_table</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Extract tables from documents</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Document</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>push_to_s3</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter path</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Upload data to S3</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>pull_from_s3</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter path</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Download data from S3</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>connect_library</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter library name</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Connect to semantic library</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>query_library</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Query semantic library</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Library Context</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>get_quote</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter symbol</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Retrieve stock quote</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>get_company_financials</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter company/ticker</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Retrieve financial data</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>send_email</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter email</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Send email</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Select context</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>openai_chat</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">OpenAI chat completion</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Text Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>openai_rag</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">OpenAI RAG query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Text Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>openai_rag_batch</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">OpenAI batch RAG</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Text Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>anthropic_chat</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Anthropic chat completion</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Text Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>gemini_chat</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Gemini chat completion</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Text Source</code></p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h2 id="conclusion">Conclusion</h2>

        <p>
          With 79 services spanning five categories, Model HQ agents can handle a wide range of tasks — from straightforward document Q&A and text classification, to multi-step data analysis pipelines, multimodal processing, and integrations with external systems and hosted AI providers.
        </p>

        <p>
          The right approach is to start with the services your workflow actually needs, enable only those, and build up from there. Each service is designed to compose cleanly with the others — the output of one node becomes the input of the next, and the agent state carries results forward through the entire pipeline.
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