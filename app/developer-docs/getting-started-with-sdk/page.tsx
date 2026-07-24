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

export default function GettingStartedWithCodeOnModelHqPage() {
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
            <BreadcrumbPage>Getting Started with Code on Model HQ</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Getting Started with Code on Model HQ</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          This guide walks you through the initial steps to launch and configure the backend inference server in <strong>Model HQ</strong>, enabling seamless programmatic access to over 40+ APIs through the Model HQ SDK.
        </p>

        <h2 id="1-launching-the-tools-interface">1. Launching the Tools Interface</h2>

        <p>
          To begin, navigate to the main menu at the top-right corner of the interface and click on the <strong>Tools</strong> button (🔧).
        </p>

        <img src="/getting-started-with-sdk/menu.png" alt="Tools Interface" />

        <p>
          The tools page should look like this:
        </p>

        <img src="/getting-started-with-sdk/tools.png" alt="Tools Interface" />

        <h2 id="2-launching-the-backend-server">2. Launching the Backend Server</h2>

        <p>
          Select the <strong><code>Backend</code></strong> option from the tools interface. This initiates the backend API server in a headless mode, shutting down the user interface and enabling direct access via APIs.
        </p>

        <p>
          This is ideal for lightweight, modular deployment scenarios. Once launched, the server runs as a background service and can be accessed either via <code>localhost</code> or over an external IP address—enabling private, local inference workflows.
        </p>

        <p>
          You will be provided with a download link for the <strong>Model HQ SDK</strong>, which contains all the necessary libraries, sample code, and examples to get started. Simply unzip the SDK package, open your preferred IDE, and start coding with direct access to the backend APIs.
        </p>

        <img src="/getting-started-with-sdk/backend.png" alt="Backend Launch" />

        <p>
          The backend interface includes two main options:
        </p>

        <ul>
          <li><strong>Launch</strong>: Starts the backend server immediately.</li>
          <li><strong>Configure</strong>: Opens the configuration settings before starting the server.</li>
        </ul>

        <h2 id="launch-backend-inference-server-guide">Launch Backend Inference Server Guide</h2>

        <img src="/getting-started-with-sdk/launch.png" alt="Launch" />

        <h3 id="starting-the-server">Starting the Server</h3>

        <p>
          To start the backend inference server, simply click <strong>Launch</strong> or use the CLI tools provided in the SDK. Once launched, the server is accessible at:
        </p>

        <CodeBlock>
          Server URL: http://192.168.29.93:8088
        </CodeBlock>

        <h3 id="stopping-the-server">Stopping the Server</h3>

        <p>
          You can stop the backend server using any of the following methods:
        </p>

        <ol>
          <li><strong>From the Model HQ UI</strong>
            <ul>
              <li>Open the Model HQ application.</li>
              <li>Navigate to <strong>Server Configuration</strong>.</li>
              <li>Use the provided control to shut down the server gracefully.</li>
            </ul></li>
          <li><strong>Using the Client SDK</strong>
            <ul>
              <li>Invoke the <code>stop_server()</code> method from the SDK to terminate the server programmatically.</li>
            </ul></li>
          <li><strong>Via Windows Task Manager</strong>
            <ul>
              <li>Use the SDK’s <code>get_server_details()</code> to retrieve the process ID.</li>
              <li>Open Task Manager and manually stop the corresponding process.</li>
            </ul></li>
        </ol>

        <h3 id="sample-code-hello-world">Sample Code: Hello World</h3>

        <p>
          Below is a basic example demonstrating how to make an inference call to the backend server using the SDK:
        </p>

        <CodeBlock language="python">
{`from modelhq.client import LLMWareClient

client = LLMWareClient(api_endpoint="http://192.168.29.93:8088", api_key="")
response = client.inference(prompt="Who was the U.S. President in 1996?", model_name="phi-3-ov")
print("llm response:", response)`}
</CodeBlock>

        <h2 id="configure-or-configure-backend-api-sever-for-headless-mode">Configure or Configure Backend API Sever for 'Headless' Mode</h2>

        <img src="/getting-started-with-sdk/backend.png" alt="Backend Configure" />

        <p>
          Before launching the backend in headless mode, you may choose to configure the server using the <strong>Configure</strong> option. Below are the available settings:
        </p>

        <h3 id="host-type">Host Type</h3>

        <ul>
          <li><strong>Localhost</strong>: Restricts access to the local machine only.</li>
          <li><strong>External IP</strong>: Allows access from other devices on the network.</li>
        </ul>

        <h3 id="ip-address">IP Address</h3>

        <ul>
          <li><strong>Default</strong>: <code>127.0.0.1</code></li>
          <li><strong>Example</strong>: <code>192.168.29.93</code></li>
        </ul>

        <h3 id="port">Port</h3>

        <ul>
          <li><strong>Default</strong>: <code>8088</code></li>
          <li>This can be modified as needed to avoid port conflicts.</li>
        </ul>

        <h3 id="worker-threads">Worker Threads</h3>

        <ul>
          <li><strong>Default</strong>: <code>4</code></li>
          <li>Recommended for lightweight concurrency; adjust only if needed for performance tuning.</li>
        </ul>

        <h3 id="trusted-key-optional">Trusted Key (Optional)</h3>

        <ul>
          <li><strong>Enable Key Requirement</strong>: All API calls must include a trusted key.</li>
          <li><strong>No Key Required</strong>: Skip key-based authentication.</li>
        </ul>

        <p>
          Save your changes by clicking on <code>&gt;</code> button.
        </p>

        <h2 id="downloading-the-model-hq-sdk">Downloading the Model HQ SDK</h2>

        <img src="/getting-started-with-sdk/download.png" alt="SDK" />

        <p>
          Clicking on the <strong>Download Model HQ Development Kit</strong> button will download a <code>.zip</code> file. Once extracted, the SDK is organized as a Python package:
        </p>

        <CodeBlock>
{`modelhq/
├── modelhq/
│   ├── client/
│   │   ├── __init__.py
│   │   ├── sdk.py              # LLMWareClient class
│   │   ├── api_service_catalog.py
│   │   └── requirements.txt
│   ├── examples/
│   ├── sample_files/
│   ├── tests/
│   └── README.txt`}
</CodeBlock>

        <p>
          Refer to <code>README.txt</code> for detailed usage instructions.
        </p>

        <h2 id="making-the-sdk-importable">Making the SDK importable</h2>

        <p>
          The SDK is a local Python package rather than an installed library. After extracting the download, one of the following approaches should be used so Python can find the <code>modelhq</code> module:
        </p>

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

        <p>
          Once this is done you can import the client in any Python script:
        </p>

        <CodeBlock language="python">
{`from modelhq.client import LLMWareClient

client = LLMWareClient(api_endpoint="http://127.0.0.1:8088", api_key="")`}
</CodeBlock>

        <h2 id="closing-backend-server">Closing Backend Server</h2>

        <ul>
          <li>Close the Model HQ UI.</li>
          <li>Open the Model HQ again.</li>
          <li>Go to tools &gt; backend.</li>
          <li>You will be asked to "Would you like to stop current server?". Click on <code>Yes</code>.</li>
        </ul>

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
              <td className="border border-border px-4 py-2">First inference and streaming</td>
              <td className="border border-border px-4 py-2"><a href="../hello-world/HELLO-WORLD.md">Hello World</a></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Chat with app sessions</td>
              <td className="border border-border px-4 py-2"><a href="../hello-world/CHAT.md">Chat</a></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Run pre-built agents</td>
              <td className="border border-border px-4 py-2"><a href="../hello-world/AGENTS.md">Agents</a></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Build knowledge bases and ask questions</td>
              <td className="border border-border px-4 py-2"><a href="../hello-world/RAG.md">RAG</a></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Image analysis, generation, and speech</td>
              <td className="border border-border px-4 py-2"><a href="../hello-world/VISION.md">Vision & Media</a></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">SDK method reference</td>
              <td className="border border-border px-4 py-2"><a href="../hello-world/SDK-REFERENCE.md">SDK Reference</a></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Full endpoint specifications</td>
              <td className="border border-border px-4 py-2"><a href="../api-reference/API.md">API Reference</a></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Linux server deployment</td>
              <td className="border border-border px-4 py-2"><a href="../server-deployment/SERVER-DEPLOYMENT.md">Server Deployment</a></td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Topic</h5>
                <p className="text-sm mt-1 break-words">First inference and streaming</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Document</h5>
                <p className="text-sm mt-1 break-words"><a href="../hello-world/HELLO-WORLD.md">Hello World</a></p>
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
                <p className="text-sm mt-1 break-words"><a href="../hello-world/CHAT.md">Chat</a></p>
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
                <p className="text-sm mt-1 break-words"><a href="../hello-world/AGENTS.md">Agents</a></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Topic</h5>
                <p className="text-sm mt-1 break-words">Build knowledge bases and ask questions</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Document</h5>
                <p className="text-sm mt-1 break-words"><a href="../hello-world/RAG.md">RAG</a></p>
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
                <p className="text-sm mt-1 break-words"><a href="../hello-world/VISION.md">Vision & Media</a></p>
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
                <p className="text-sm mt-1 break-words"><a href="../hello-world/SDK-REFERENCE.md">SDK Reference</a></p>
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
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Topic</h5>
                <p className="text-sm mt-1 break-words">Linux server deployment</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Document</h5>
                <p className="text-sm mt-1 break-words"><a href="../server-deployment/SERVER-DEPLOYMENT.md">Server Deployment</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h2 id="conclusion">Conclusion</h2>

        <p>
          You’re now ready to begin building applications using the Model HQ backend inference server. For more advanced topics, refer to the <a href="https://model-hq-docs.vercel.app/api-reference">API Reference Guide</a>
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