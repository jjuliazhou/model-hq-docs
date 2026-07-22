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

export default function VisionMediaModelHqClientSdkPage() {
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
            <BreadcrumbPage>Vision &amp; Media — Model HQ Client SDK</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Vision &amp; Media — Model HQ Client SDK</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          Model HQ supports multimodal inference for image analysis, image generation, and text-to-speech. All media endpoints accept prompts and return file paths or streamed text.
        </p>

        <h2 id="prerequisites">Prerequisites</h2>

        <p>
          This guide assumes the SDK is installed and importable. If you haven't set that up yet, follow the <a href="HELLO-WORLD.md">Hello World</a> prerequisites first.
        </p>

        <h2 id="image-analysis">Image analysis</h2>

        <h3 id="non-streaming">Non-streaming</h3>

        <p>
          Upload an image and ask a question about it:
        </p>

        <CodeBlock language="python">{`from modelhq.client import LLMWareClient

client = LLMWareClient(api_endpoint="http://localhost:8088", api_key="")

response = client.vision(
    image_fp="path/to/image.jpg",
    prompt="Describe what is shown in this image"
)
print(response)`}</CodeBlock>

        <h3 id="streaming">Streaming</h3>

        <p>
          Stream the analysis token-by-token. There is an initial delay of 10-15 seconds while the image is encoded, then generation is fast:
        </p>

        <CodeBlock language="python">{`for token in client.vision_stream(
    image_fp="path/to/image.jpg",
    prompt="Describe what is shown in this image"
):
    print(token, end="")`}</CodeBlock>

        <h2 id="image-generation">Image generation</h2>

        <p>
          Generate an image from a text prompt. The result is saved to disk and the file path is returned:
        </p>

        <CodeBlock language="python">{`save_path = client.generate_image(
    prompt="A watercolour painting of a mountain landscape at sunset",
    file_path="output/landscape.bmp"   # optional — defaults to tmp folder
)
print("image saved to:", save_path)`}</CodeBlock>

        <h2 id="text-to-speech">Text-to-speech</h2>

        <p>
          Convert text to speech audio. The result is saved as a <code>.wav</code> file:
        </p>

        <CodeBlock language="python">{`save_path = client.generate_speech(
    prompt="Welcome to Model HQ. Let me walk you through the key features.",
    file_path="output/intro.wav"   # optional — defaults to tmp folder
)
print("audio saved to:", save_path)`}</CodeBlock>

        <h2 id="web-search">Web search</h2>

        <p>
          Search the web using a configured provider (tavily, serp_api, news_api_org, or wikipedia). Requires a provider API key stored as a credential:
        </p>

        <CodeBlock language="python">{`# Store the provider API key
client.add_credential({"tavily_api_key": "tvly-..."})

# Run a search
results = client.web_search(
    query="What is quantum gravity?",
    engine="tavily",
    result_count=5
)
print(results)`}</CodeBlock>

        <h2 id="next-steps">Next steps</h2>

        <ul>
          <li><a href="RAG.md">RAG</a> — combine vision with retrieval for document-heavy workflows</li>
          <li><a href="AGENTS.md">Agents</a> — agents can use vision and search as steps in a pipeline</li>
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