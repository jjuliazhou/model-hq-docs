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

export default function HelloWorldModelHqClientSdkPage() {
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
            <BreadcrumbPage>Hello World — Model HQ Client SDK</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Hello World — Model HQ Client SDK</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          A quick-start guide to connect to a running Model HQ server and perform your first inference. Follow the steps below and you should see a response within a minute.
        </p>

        <h2 id="prerequisites">Prerequisites</h2>

        <ul>
          <li>Python 3.8 or later</li>
          <li><code>requests</code> and <code>psutil</code> installed (<code>pip install requests psutil</code>)</li>
          <li>A running Model HQ server on <code>http://localhost:8088</code> (see <a href="../server-deployment/SERVER-DEPLOYMENT.md">Server Deployment</a> for Linux setup)</li>
          <li>The SDK made importable — choose one of:</li>
        </ul>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Option</th>
              <th className="border border-border px-4 py-2 text-left">Command</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2">Run from the parent directory</td>
              <td className="border border-border px-4 py-2"><code>cd path\to\modelhq</code> then run Python</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Set <code>PYTHONPATH</code> (per session)</td>
              <td className="border border-border px-4 py-2"><code>$env:PYTHONPATH = "path\to\modelhq"</code> (PowerShell)</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Install as an editable package (once)</td>
              <td className="border border-border px-4 py-2"><code>pip install -e path\to\modelhq</code></td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Option</h5>
                <p className="text-sm mt-1 break-words">Run from the parent directory</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Command</h5>
                <p className="text-sm mt-1 break-words"><code>cd path\to\modelhq</code> then run Python</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Option</h5>
                <p className="text-sm mt-1 break-words">Set <code>PYTHONPATH</code> (per session)</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Command</h5>
                <p className="text-sm mt-1 break-words"><code>$env:PYTHONPATH = "path\to\modelhq"</code> (PowerShell)</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Option</h5>
                <p className="text-sm mt-1 break-words">Install as an editable package (once)</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Command</h5>
                <p className="text-sm mt-1 break-words"><code>pip install -e path\to\modelhq</code></p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h2 id="complete-example">Complete example</h2>

        <p>
          Save the script below and run it. It initialises a client, runs a non-streaming inference, streams a longer response, and cleans up.
        </p>

        <CodeBlock language="python">
{`from modelhq.client import LLMWareClient, get_url_string

# Connect to the server (auto-detect or specify the address)
api_endpoint = get_url_string()
client = LLMWareClient(api_endpoint=api_endpoint)

# --- Non-streaming inference ---
prompt = "What are the best sites to see in France?"
model_name = "llama-3.2-1b-instruct-ov"

response = client.inference(prompt=prompt, model_name=model_name, max_output=100)
print("inference response:", response)

# --- Streaming inference ---
long_prompt = "What are the main theoretical challenges with quantum gravity?"

for token in client.stream(prompt=long_prompt, model_name=model_name, max_output=300):
    print(token, end="")

# --- Clean up ---
client.model_unload(model_name)`}
</CodeBlock>

        <h2 id="what-the-output-looks-like">What the output looks like</h2>

        <CodeBlock language="text">
{`inference response: {'llm_response': 'Some suggestions for places to visit in France are the Eiffel Tower...'}
Some suggestions for places to visit in France are the Eiffel Tower, Mont Saint-Michel, the French Riviera...`}
</CodeBlock>

        <h2 id="trying-a-different-model">Trying a different model</h2>

        <p>
          Change <code>model_name</code> to any model available on the server. Run <code>client.list_all_models()</code> to see what is installed. Smaller models like <code>phi-3-ov</code> load faster; larger ones like <code>llama-3.2-3b-instruct-ov</code> are more capable.
        </p>

        <p>
          If the model is not yet on the device it will be downloaded automatically on first use.
        </p>

        <h2 id="next-steps">Next steps</h2>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Topic</th>
              <th className="border border-border px-4 py-2 text-left">Document</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2">Chat with an app session</td>
              <td className="border border-border px-4 py-2"><a href="CHAT.md">Chat</a></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Run pre-built agents</td>
              <td className="border border-border px-4 py-2"><a href="AGENTS.md">Agents</a></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Build a knowledge base with libraries</td>
              <td className="border border-border px-4 py-2"><a href="RAG.md">RAG</a></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Image analysis, generation, and speech</td>
              <td className="border border-border px-4 py-2"><a href="VISION.md">Vision & Media</a></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">SDK method reference</td>
              <td className="border border-border px-4 py-2"><a href="SDK-REFERENCE.md">SDK Reference</a></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Full endpoint specifications</td>
              <td className="border border-border px-4 py-2"><a href="../api-reference/API.md">API Reference</a></td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Topic</h5>
                <p className="text-sm mt-1 break-words">Chat with an app session</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Document</h5>
                <p className="text-sm mt-1 break-words"><a href="CHAT.md">Chat</a></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Topic</h5>
                <p className="text-sm mt-1 break-words">Run pre-built agents</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Document</h5>
                <p className="text-sm mt-1 break-words"><a href="AGENTS.md">Agents</a></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Topic</h5>
                <p className="text-sm mt-1 break-words">Build a knowledge base with libraries</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Document</h5>
                <p className="text-sm mt-1 break-words"><a href="RAG.md">RAG</a></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Topic</h5>
                <p className="text-sm mt-1 break-words">Image analysis, generation, and speech</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Document</h5>
                <p className="text-sm mt-1 break-words"><a href="VISION.md">Vision & Media</a></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Topic</h5>
                <p className="text-sm mt-1 break-words">SDK method reference</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Document</h5>
                <p className="text-sm mt-1 break-words"><a href="SDK-REFERENCE.md">SDK Reference</a></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Topic</h5>
                <p className="text-sm mt-1 break-words">Full endpoint specifications</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Document</h5>
                <p className="text-sm mt-1 break-words"><a href="../api-reference/API.md">API Reference</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

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