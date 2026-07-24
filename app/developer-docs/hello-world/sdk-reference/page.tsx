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

export default function SdkReferenceModelHqClientSdkPage() {
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
            <BreadcrumbPage>SDK Reference — Model HQ Client SDK</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">SDK Reference — Model HQ Client SDK</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          A quick-reference for the most commonly used SDK methods, grouped by category. For full parameter details see the <a href="../api-reference/API.md">API Reference</a>.
        </p>

        <h2 id="prerequisites">Prerequisites</h2>

        <p>
          This guide assumes the SDK is installed and importable. If you haven't set that up yet, follow the <a href="HELLO-WORLD.md">Hello World</a> prerequisites first.
        </p>

        <h2 id="client-setup">Client setup</h2>

        <CodeBlock language="python">
{`from modelhq.client import LLMWareClient, get_url_string

# Auto-detect endpoint
client = LLMWareClient(api_endpoint=get_url_string())

# Or specify directly
client = LLMWareClient(api_endpoint="http://localhost:8088", api_key="")`}
</CodeBlock>

        <p>
          ---
        </p>

        <h2 id="inference">Inference</h2>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Method</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.inference(prompt, model_name)</code></td>
              <td className="border border-border px-4 py-2">Complete response</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.stream(prompt, model_name)</code></td>
              <td className="border border-border px-4 py-2">Streaming generator</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.inference_json(prompt, model_name)</code></td>
              <td className="border border-border px-4 py-2">Response formatted as JSON</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.inference(prompt, model_name)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Complete response</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.stream(prompt, model_name)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Streaming generator</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.inference_json(prompt, model_name)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Response formatted as JSON</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <p>
          ---
        </p>

        <h2 id="vision-media">Vision & media</h2>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Method</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.vision(image_fp, prompt)</code></td>
              <td className="border border-border px-4 py-2">Analyse an image</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.vision_stream(image_fp, prompt)</code></td>
              <td className="border border-border px-4 py-2">Stream image analysis</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.generate_image(prompt)</code></td>
              <td className="border border-border px-4 py-2">Generate an image</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.generate_speech(prompt)</code></td>
              <td className="border border-border px-4 py-2">Generate speech audio</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.vision(image_fp, prompt)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Analyse an image</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.vision_stream(image_fp, prompt)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Stream image analysis</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.generate_image(prompt)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generate an image</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.generate_speech(prompt)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generate speech audio</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <p>
          ---
        </p>

        <h2 id="model-management">Model management</h2>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Method</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.list_all_models()</code></td>
              <td className="border border-border px-4 py-2">List all available models</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.model_lookup(model_name)</code></td>
              <td className="border border-border px-4 py-2">Get model card info</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.model_load(model_name)</code></td>
              <td className="border border-border px-4 py-2">Load a model into memory</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.model_unload(model_name)</code></td>
              <td className="border border-border px-4 py-2">Unload a model from memory</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.list_all_models()</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">List all available models</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.model_lookup(model_name)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Get model card info</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.model_load(model_name)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Load a model into memory</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.model_unload(model_name)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Unload a model from memory</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <p>
          ---
        </p>

        <h2 id="rag-document-inference">RAG — document inference</h2>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Method</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.document_inference(doc_path, question)</code></td>
              <td className="border border-border px-4 py-2">Single-document Q&A</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.document_batch_analysis(folder, questions)</code></td>
              <td className="border border-border px-4 py-2">Multi-document batch Q&A</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.document_inference(doc_path, question)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Single-document Q&A</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.document_batch_analysis(folder, questions)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Multi-document batch Q&A</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <p>
          ---
        </p>

        <h2 id="rag-source-inference">RAG — source inference</h2>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Method</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.build_source(files, source_name)</code></td>
              <td className="border border-border px-4 py-2">Build a reusable source</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.build_source_context(question, uploaded_source)</code></td>
              <td className="border border-border px-4 py-2">Build context only</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.source_inference(source_path, question)</code></td>
              <td className="border border-border px-4 py-2">Query a source</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.source_stream_inference(source_path, question)</code></td>
              <td className="border border-border px-4 py-2">Stream query a source</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.build_source(files, source_name)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Build a reusable source</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.build_source_context(question, uploaded_source)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Build context only</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.source_inference(source_path, question)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Query a source</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.source_stream_inference(source_path, question)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Stream query a source</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <p>
          ---
        </p>

        <h2 id="rag-library-inference">RAG — library inference</h2>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Method</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.create_new_library(library_name)</code></td>
              <td className="border border-border px-4 py-2">Create a library</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.add_files(library_name, folder)</code></td>
              <td className="border border-border px-4 py-2">Add files to a library</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.add_files(library_name, folder, use_async=True)</code></td>
              <td className="border border-border px-4 py-2">Add files asynchronously</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.install_embedding(library_name, model_name=...)</code></td>
              <td className="border border-border px-4 py-2">Install embeddings</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.install_embedding(library_name, ..., use_async=True)</code></td>
              <td className="border border-border px-4 py-2">Install embeddings asynchronously</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.query(library_name, user_query)</code></td>
              <td className="border border-border px-4 py-2">Text query</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.semantic_query(library_name, query)</code></td>
              <td className="border border-border px-4 py-2">Semantic search</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.library_inference(library_name, question)</code></td>
              <td className="border border-border px-4 py-2">RAG inference with ranking</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.library_stream_inference(library_name, question)</code></td>
              <td className="border border-border px-4 py-2">Streaming RAG inference</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.get_library_card(library_name=...)</code></td>
              <td className="border border-border px-4 py-2">Library metadata</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.get_document_list(library_name=...)</code></td>
              <td className="border border-border px-4 py-2">List documents</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.get_document_text(library_name=..., doc_id=...)</code></td>
              <td className="border border-border px-4 py-2">Extract document text</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.create_new_library(library_name)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Create a library</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.add_files(library_name, folder)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Add files to a library</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.add_files(library_name, folder, use_async=True)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Add files asynchronously</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.install_embedding(library_name, model_name=...)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Install embeddings</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.install_embedding(library_name, ..., use_async=True)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Install embeddings asynchronously</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.query(library_name, user_query)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Text query</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.semantic_query(library_name, query)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Semantic search</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.library_inference(library_name, question)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">RAG inference with ranking</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.library_stream_inference(library_name, question)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Streaming RAG inference</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.get_library_card(library_name=...)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Library metadata</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.get_document_list(library_name=...)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">List documents</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.get_document_text(library_name=..., doc_id=...)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Extract document text</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <p>
          ---
        </p>

        <h2 id="agents">Agents</h2>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Method</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.get_all_agents()</code></td>
              <td className="border border-border px-4 py-2">List available agents</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.get_agent_signature(process_name)</code></td>
              <td className="border border-border px-4 py-2">Get agent input/output spec</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.get_agent_description(process_name)</code></td>
              <td className="border border-border px-4 py-2">Get human-readable description</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.run_agent(agent_name, agent_inputs)</code></td>
              <td className="border border-border px-4 py-2">Execute an agent</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.run_agent_generator(agent_name, agent_inputs)</code></td>
              <td className="border border-border px-4 py-2">Stream agent execution</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.call_agent(agent_name, agent_inputs)</code></td>
              <td className="border border-border px-4 py-2">Call a deployed agent endpoint</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.agent_output(id=...)</code></td>
              <td className="border border-border px-4 py-2">Retrieve agent output</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.get_agent_output_json(id=...)</code></td>
              <td className="border border-border px-4 py-2">Retrieve agent JSON output</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.get_agent_output_files(id=...)</code></td>
              <td className="border border-border px-4 py-2">Download agent file outputs</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.download_agent(process_name)</code></td>
              <td className="border border-border px-4 py-2">Download agent zip from server</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.install_agent_zip(zip_path)</code></td>
              <td className="border border-border px-4 py-2">Install agent from zip</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.get_agent_execution_log_list(agent_name=...)</code></td>
              <td className="border border-border px-4 py-2">View execution logs</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.get_all_scheduled_agents()</code></td>
              <td className="border border-border px-4 py-2">List scheduled agents</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.set_new_agent_schedule(agent_name, frequency)</code></td>
              <td className="border border-border px-4 py-2">Schedule an agent</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.get_all_agents()</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">List available agents</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.get_agent_signature(process_name)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Get agent input/output spec</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.get_agent_description(process_name)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Get human-readable description</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.run_agent(agent_name, agent_inputs)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Execute an agent</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.run_agent_generator(agent_name, agent_inputs)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Stream agent execution</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.call_agent(agent_name, agent_inputs)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Call a deployed agent endpoint</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.agent_output(id=...)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Retrieve agent output</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.get_agent_output_json(id=...)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Retrieve agent JSON output</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.get_agent_output_files(id=...)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Download agent file outputs</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.download_agent(process_name)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Download agent zip from server</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.install_agent_zip(zip_path)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Install agent from zip</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.get_agent_execution_log_list(agent_name=...)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">View execution logs</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.get_all_scheduled_agents()</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">List scheduled agents</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.set_new_agent_schedule(agent_name, frequency)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Schedule an agent</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <p>
          ---
        </p>

        <h2 id="hq-apps-chat">HQ Apps (chat)</h2>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Method</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.start_app_session(app_name)</code></td>
              <td className="border border-border px-4 py-2">Start a session</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.chat(session_id, prompt)</code></td>
              <td className="border border-border px-4 py-2">Send a message (streaming)</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.run_app_agent(session_id, agent_name)</code></td>
              <td className="border border-border px-4 py-2">Run an agent inside a session</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.get_app_state(session_id)</code></td>
              <td className="border border-border px-4 py-2">Check session state</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.update_app_state(session_id, updates)</code></td>
              <td className="border border-border px-4 py-2">Update session config</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.get_app_transcript(session_id)</code></td>
              <td className="border border-border px-4 py-2">Export session transcript</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.stop_app_session(session_id)</code></td>
              <td className="border border-border px-4 py-2">End a session</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.get_all_apps()</code></td>
              <td className="border border-border px-4 py-2">List all apps</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.lookup_app(app_name)</code></td>
              <td className="border border-border px-4 py-2">Get app details</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.get_active_app_sessions()</code></td>
              <td className="border border-border px-4 py-2">List active sessions</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.start_app_session(app_name)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Start a session</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.chat(session_id, prompt)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Send a message (streaming)</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.run_app_agent(session_id, agent_name)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Run an agent inside a session</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.get_app_state(session_id)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Check session state</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.update_app_state(session_id, updates)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Update session config</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.get_app_transcript(session_id)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Export session transcript</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.stop_app_session(session_id)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">End a session</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.get_all_apps()</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">List all apps</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.lookup_app(app_name)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Get app details</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.get_active_app_sessions()</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">List active sessions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <p>
          ---
        </p>

        <h2 id="services-integrations">Services & integrations</h2>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Method</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.install_service(service_name, service_dfn)</code></td>
              <td className="border border-border px-4 py-2">Install a service</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.list_services()</code></td>
              <td className="border border-border px-4 py-2">List services</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.test_service(service_name)</code></td>
              <td className="border border-border px-4 py-2">Test a service</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.list_integrations()</code></td>
              <td className="border border-border px-4 py-2">List integrations</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.get_integration_info(integration_name)</code></td>
              <td className="border border-border px-4 py-2">Get integration details</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.web_search(query, engine)</code></td>
              <td className="border border-border px-4 py-2">Web search</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.add_credential(creds)</code></td>
              <td className="border border-border px-4 py-2">Store API credentials</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.delete_credential(credential_name=...)</code></td>
              <td className="border border-border px-4 py-2">Remove a credential</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.install_service(service_name, service_dfn)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Install a service</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.list_services()</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">List services</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.test_service(service_name)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Test a service</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.list_integrations()</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">List integrations</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.get_integration_info(integration_name)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Get integration details</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.web_search(query, engine)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Web search</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.add_credential(creds)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Store API credentials</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.delete_credential(credential_name=...)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Remove a credential</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <p>
          ---
        </p>

        <h2 id="administration">Administration</h2>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Method</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.ping()</code></td>
              <td className="border border-border px-4 py-2">Health check</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.system_info()</code></td>
              <td className="border border-border px-4 py-2">Server system info</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.get_api_catalog()</code></td>
              <td className="border border-border px-4 py-2">List all API endpoints</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.get_db_info()</code></td>
              <td className="border border-border px-4 py-2">Database info</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.app_register()</code></td>
              <td className="border border-border px-4 py-2">Register an app</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.register_new_user(...)</code></td>
              <td className="border border-border px-4 py-2">Register a new user</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.get_transaction_log()</code></td>
              <td className="border border-border px-4 py-2">View transaction log</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>client.server_stop()</code></td>
              <td className="border border-border px-4 py-2">Stop the server</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.ping()</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Health check</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.system_info()</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Server system info</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.get_api_catalog()</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">List all API endpoints</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.get_db_info()</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Database info</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.app_register()</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Register an app</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.register_new_user(...)</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Register a new user</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.get_transaction_log()</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">View transaction log</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Method</h5>
                <p className="text-sm mt-1 break-words"><code>client.server_stop()</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Stop the server</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <p>
          ---
        </p>

        <p>
          For complete endpoint details, parameters, and example responses, see the <a href="../api-reference/API.md">API Reference</a>.
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