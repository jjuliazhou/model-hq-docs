import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DocPageLayout } from "@/components/doc-page-layout"
import { CodeBlock } from "@/components/code-block"
import { references } from "./references"

export default function RagModelHqClientSdkPage() {
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
            <BreadcrumbPage>RAG — Model HQ Client SDK</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">RAG — Model HQ Client SDK</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          Retrieval Augmented Generation (RAG) lets you ask questions about your own documents. Model HQ supports three approaches of increasing complexity: direct document inference, source-based inference, and library-based knowledge bases.
        </p>

        <h2 id="prerequisites">Prerequisites</h2>

        <p>
          This guide assumes the SDK is installed and importable. If you haven't set that up yet, follow the <a href="HELLO-WORLD.md">Hello World</a> prerequisites first.
        </p>

        <h2 id="quick-example-ask-a-question-about-a-single-document">Quick example — ask a question about a single document</h2>

        <p>
          No setup required. Upload a document and ask a question:
        </p>

        <CodeBlock language="python">{`import os
from modelhq.client import LLMWareClient

client = LLMWareClient(api_endpoint="http://localhost:8088", api_key="")

document_path = os.path.abspath("sample_files/contract.pdf")
question = "What is the annual rate of the base salary?"

response = client.document_inference(
    document_path,
    question,
    model_name="llama-3.2-3b-instruct-ov"
)
print(response["llm_response"])`}</CodeBlock>

        <h2 id="three-rag-approaches">Three RAG approaches</h2>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Approach</th>
              <th className="border border-border px-4 py-2 text-left">When to use</th>
              <th className="border border-border px-4 py-2 text-left">Setup required</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Document inference</strong></td>
              <td className="border border-border px-4 py-2">Quick Q&A on a single file</td>
              <td className="border border-border px-4 py-2">None</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Source inference</strong></td>
              <td className="border border-border px-4 py-2">Q&A across multiple pre-processed files</td>
              <td className="border border-border px-4 py-2">Build a source first</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Library inference</strong></td>
              <td className="border border-border px-4 py-2">Persistent knowledge base with semantic search</td>
              <td className="border border-border px-4 py-2">Create library, add files, install embeddings</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Approach</h5>
                <p className="text-sm mt-1 break-words"><strong>Document inference</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">When to use</h5>
                <p className="text-sm mt-1 break-words">Quick Q&A on a single file</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Setup required</h5>
                <p className="text-sm mt-1 break-words">None</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Approach</h5>
                <p className="text-sm mt-1 break-words"><strong>Source inference</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">When to use</h5>
                <p className="text-sm mt-1 break-words">Q&A across multiple pre-processed files</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Setup required</h5>
                <p className="text-sm mt-1 break-words">Build a source first</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Approach</h5>
                <p className="text-sm mt-1 break-words"><strong>Library inference</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">When to use</h5>
                <p className="text-sm mt-1 break-words">Persistent knowledge base with semantic search</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Setup required</h5>
                <p className="text-sm mt-1 break-words">Create library, add files, install embeddings</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <p>
          ---
        </p>

        <h2 id="1-document-inference">1. Document inference</h2>

        <p>
          Uploads a document, parses and chunks it, ranks relevant passages, and generates an answer — all in one call.
        </p>

        <CodeBlock language="python">{`response = client.document_inference(
    "path/to/document.pdf",
    "What are the termination conditions?",
    model_name="llama-3.2-3b-instruct-ov"
)
print(response["llm_response"])`}</CodeBlock>

        <p>
          For batch analysis across multiple documents and questions:
        </p>

        <CodeBlock language="python">{`response = client.document_batch_analysis(
    local_folder_path="path/to/documents/",
    question_list=[
        "What is the governing law?",
        "What is the termination notice period?"
    ]
)
print(response)`}</CodeBlock>

        <h2 id="2-source-inference">2. Source inference</h2>

        <p>
          A source is a pre-processed JSONL file built from one or more documents. It can be reused across multiple queries without re-parsing.
        </p>

        <h3 id="build-a-source">Build a source</h3>

        <CodeBlock language="python">{`source_fp = client.build_source(
    ["file1.pdf", "file2.pdf"],
    source_name="my_source"
)
print("source built at:", source_fp)`}</CodeBlock>

        <h3 id="query-the-source">Query the source</h3>

        <CodeBlock language="python">{`# Non-streaming
response = client.source_inference(
    source_fp,
    "What are the key conclusions?",
    model_name="llama-3.2-3b-instruct-ov"
)
print(response["llm_response"])

# Streaming
for token in client.source_stream_inference(
    source_fp,
    "What are the key conclusions?",
    model_name="llama-3.2-3b-instruct-ov"
):
    print(token, end="")`}</CodeBlock>

        <h3 id="build-context-only-without-inference">Build context only (without inference)</h3>

        <CodeBlock language="python">{`context = client.build_source_context(
    question="What are the key conclusions?",
    uploaded_source=source_fp,
    use_top_n_context=5
)
print(context)`}</CodeBlock>

        <h2 id="3-library-inference">3. Library inference</h2>

        <p>
          Libraries are persistent, server-side knowledge bases. Files are parsed, indexed, and can be searched semantically.
        </p>

        <h3 id="create-a-library">Create a library</h3>

        <CodeBlock language="python">{`client.create_new_library(library_name="contract_library")`}</CodeBlock>

        <h3 id="add-files">Add files</h3>

        <p>
          Point at a local folder — all files in it will be uploaded and indexed:
        </p>

        <CodeBlock language="python">{`client.add_files("contract_library", "path/to/documents/")`}</CodeBlock>

        <p>
          For non-blocking uploads on large collections:
        </p>

        <CodeBlock language="python">{`client.add_files("contract_library", "path/to/documents/", use_async=True)`}</CodeBlock>

        <h3 id="install-embeddings">Install embeddings</h3>

        <p>
          Embeddings enable semantic (meaning-based) search:
        </p>

        <CodeBlock language="python">{`client.install_embedding(
    "contract_library",
    model_name="all-mini-lm-l6-v2-ov"
)`}</CodeBlock>

        <p>
          For non-blocking installation on large libraries:
        </p>

        <CodeBlock language="python">{`client.install_embedding("contract_library", model_name="all-mini-lm-l6-v2-ov", use_async=True)`}</CodeBlock>

        <h3 id="query-the-library">Query the library</h3>

        <CodeBlock language="python">{`# Text query
results = client.query("contract_library", "termination clauses")
print(results)

# Semantic search (requires embeddings)
results = client.semantic_query("contract_library", "What are the exit conditions?")
print(results)`}</CodeBlock>

        <h3 id="library-inference-rag-with-context-ranking">Library inference (RAG with context ranking)</h3>

        <CodeBlock language="python">{`# Non-streaming
response = client.library_inference(
    "contract_library",
    "What is the annual base salary?",
    model_name="llama-3.2-3b-instruct-ov"
)
print(response)

# Streaming
for token in client.library_stream_inference(
    "contract_library",
    "What is the annual base salary?",
    model_name="llama-3.2-3b-instruct-ov"
):
    print(token, end="")`}</CodeBlock>

        <h3 id="manage-a-library">Manage a library</h3>

        <CodeBlock language="python">{`# Get library metadata
card = client.get_library_card(library_name="contract_library")
print(card)

# List documents in the library
docs = client.get_document_list(library_name="contract_library")
print(docs)

# Extract text from a specific document
text = client.get_document_text(library_name="contract_library", doc_id="1")
print(text)`}</CodeBlock>

        <h2 id="next-steps">Next steps</h2>

        <ul>
          <li><a href="AGENTS.md">Agents</a> — run agents that use RAG as a step in their workflow</li>
          <li><a href="CHAT.md">Chat</a> — interact with apps that combine RAG and agents</li>
          <li><a href="../api-reference/API.md">API Reference</a> — full endpoint specifications</li>
        </ul>

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