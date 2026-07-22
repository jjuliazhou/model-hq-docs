import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { CodeBlock } from "@/components/code-block"
import { DocPageLayout } from "@/components/doc-page-layout"
import { references } from "./references"

export default function ServerDeploymentPage() {
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
            <BreadcrumbPage>Server Deployment</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Server Deployment</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          Model HQ Server is a scalable API server designed for multi-user deployments on Linux. It provides a larger model catalogue, an enhanced set of RAG capabilities (including vector databases and full semantic search), and support for concurrent client access.
        </p>

        <h2 id="requirements">Requirements</h2>

        <ul>
          <li>A valid Model HQ Server license.</li>
          <li>A Linux environment — physical server, virtual machine, or container.</li>
          <li>Network connectivity configured so that client machines can reach the server endpoint.</li>
          <li>The Model HQ Server binary (provided with the license).</li>
          <li>Python 3.8 or later on client machines, with <code>requests</code> and <code>psutil</code> installed.</li>
        </ul>

        <h2 id="starting-the-server">Starting the server</h2>

        <p>
          The server binary should be started from the command line:
        </p>

        <CodeBlock>./modelhq_api_server_10125_062326</CodeBlock>

        <p>
          The terminal should be kept open while the service is in use. The server will bind to the configured IP address and port (default: <code>http://localhost:8088</code>).
        </p>

        <p>
          You should see output confirming the server is running, for example:
        </p>

        <CodeBlock>Uvicorn running on http://10.0.224.73:8088</CodeBlock>

        <h2 id="connecting-to-the-server">Connecting to the server</h2>

        <p>
          Client machines can connect to the server using the Model HQ Client SDK.
        </p>

        <h3 id="same-local-network">Same local network</h3>

        <p>
          If the client machine and the server are on the same LAN, the SDK can be pointed at the server's IP directly:
        </p>

        <CodeBlock language="python">{`from modelhq.client import LLMWareClient

client = LLMWareClient(api_endpoint="http://10.0.224.73:8088", api_key="")`}</CodeBlock>

        <p>
          No SSH or tunnelling is required.
        </p>

        <h3 id="remote-access-via-ssh-tunnel">Remote access via SSH tunnel</h3>

        <p>
          If the server is behind a jump host and only reachable over SSH, port forwarding should be used.
        </p>

        <p>
          <strong>Step 1 — Open a tunnel:</strong>
        </p>

        <CodeBlock>{`ssh -L 8088:<SERVER_IP>:8088 <USER>@<HOST>`}</CodeBlock>

        <p>
          The <code>&lt;SERVER_IP&gt;</code> must match the address the API server binds to (visible in server logs: <code>Uvicorn running on http://&lt;IP&gt;:8088</code>). For example:
        </p>

        <CodeBlock>ssh -L 8088:10.0.224.73:8088 user@host</CodeBlock>

        <p>
          <strong>Step 2 — On the local machine</strong>, point the SDK at <code>127.0.0.1:8088</code> (the tunnel forwards requests to the server):
        </p>

        <CodeBlock language="python">client = LLMWareClient(api_endpoint="http://127.0.0.1:8088", api_key="")</CodeBlock>

        <h2 id="verifying-the-connection">Verifying the connection</h2>

        <p>
          Run a quick health check to confirm the server is reachable:
        </p>

        <CodeBlock language="python">{`from modelhq.client import LLMWareClient

client = LLMWareClient(api_endpoint="http://127.0.0.1:8088", api_key="")
print(client.ping())`}</CodeBlock>

        <p>
          Then list available models to confirm the server is operational:
        </p>

        <CodeBlock language="python">{`models = client.list_all_models()
for m in models.get("response", []):
    print(m)`}</CodeBlock>

        <h2 id="multi-user-considerations">Multi-user considerations</h2>

        <p>
          Model HQ Server supports concurrent client access. Each client creates its own <code>LLMWareClient</code> instance pointing at the same server endpoint. The server manages model loading, library storage, and agent execution centrally.
        </p>

        <p>
          For access control, use the <code>trusted_key</code> parameter when launching the server and pass it in SDK calls:
        </p>

        <CodeBlock language="python">{`client = LLMWareClient(api_endpoint="http://10.0.224.73:8088", api_key="")
response = client.inference(prompt="Hello", model_name="llama-3.2-1b-instruct-ov", trusted_key="your-key")`}</CodeBlock>

        <h2 id="further-reading">Further reading</h2>

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
              <td className="border border-border px-4 py-2">SDK installation and first call</td>
              <td className="border border-border px-4 py-2"><a href="/server-docs/getting-started-with-sdk">Getting Started</a></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Hello world example</td>
              <td className="border border-border px-4 py-2"><a href="/server-docs/hello-world/hello-world">Hello World</a></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Chat with app sessions</td>
              <td className="border border-border px-4 py-2"><a href="/server-docs/hello-world/chat">Chat</a></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Run agents</td>
              <td className="border border-border px-4 py-2"><a href="/server-docs/hello-world/agents">Agents</a></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Build knowledge bases</td>
              <td className="border border-border px-4 py-2"><a href="/server-docs/hello-world/rag">RAG</a></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">SDK method reference</td>
              <td className="border border-border px-4 py-2"><a href="/server-docs/hello-world/sdk-reference">SDK Reference</a></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Full endpoint specifications</td>
              <td className="border border-border px-4 py-2"><a href="/server-docs/api-reference">API Reference</a></td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Topic</h5>
                <p className="text-sm mt-1 break-words">SDK installation and first call</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Document</h5>
                <p className="text-sm mt-1 break-words"><a href="/server-docs/getting-started-with-sdk">Getting Started</a></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Topic</h5>
                <p className="text-sm mt-1 break-words">Hello world example</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Document</h5>
                <p className="text-sm mt-1 break-words"><a href="/server-docs/hello-world/hello-world">Hello World</a></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Topic</h5>
                <p className="text-sm mt-1 break-words">Chat with app sessions</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Document</h5>
                <p className="text-sm mt-1 break-words"><a href="/server-docs/hello-world/chat">Chat</a></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Topic</h5>
                <p className="text-sm mt-1 break-words">Run agents</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Document</h5>
                <p className="text-sm mt-1 break-words"><a href="/server-docs/hello-world/agents">Agents</a></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Topic</h5>
                <p className="text-sm mt-1 break-words">Build knowledge bases</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Document</h5>
                <p className="text-sm mt-1 break-words"><a href="/server-docs/hello-world/rag">RAG</a></p>
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
                <p className="text-sm mt-1 break-words"><a href="/server-docs/hello-world/sdk-reference">SDK Reference</a></p>
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
                <p className="text-sm mt-1 break-words"><a href="/server-docs/api-reference">API Reference</a></p>
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