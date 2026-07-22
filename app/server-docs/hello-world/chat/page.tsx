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

export default function ChatModelHqClientSdkPage() {
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
            <BreadcrumbPage>Chat — Model HQ Client SDK</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Chat — Model HQ Client SDK</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          Model HQ Apps combine agents, models, and configurations into a packaged experience. The chat API lets you interact with an app through a session, sending messages and receiving streamed responses.
        </p>

        <h2 id="prerequisites">Prerequisites</h2>

        <p>
          This guide assumes the SDK is installed and importable. If you haven't set that up yet, follow the <a href="HELLO-WORLD.md">Hello World</a> prerequisites first.
        </p>

        <h2 id="quick-example">Quick example</h2>

        <CodeBlock language="python">{`from modelhq.client import LLMWareClient

client = LLMWareClient(api_endpoint="http://localhost:8088", api_key="")

# Start a session for an installed app
session = client.start_app_session("contract_review")
session_id = session.get("session_id", "")
print("session started:", session_id)

# Send a message and stream the response
for step in client.chat(session_id=session_id, prompt="What is the base salary?"):
    print(step)

# Stop the session when done
client.stop_app_session(session_id)
`}</CodeBlock>

        <h2 id="starting-a-session">Starting a session</h2>

        <p>
          <code>start_app_session</code> creates a new session ID and instantiates the app state on the server. The app must already be installed on the server.
        </p>

        <CodeBlock language="python">{`session = client.start_app_session("app_name")
session_id = session.get("session_id", "")`}</CodeBlock>

        <p>
          Optional parameters let you preload models or source documents:
        </p>

        <CodeBlock language="python">{`session = client.start_app_session(
    "app_name",
    preload_models=True,
    model_name="llama-3.2-3b-instruct-ov",
    preload_source=True
)`}</CodeBlock>

        <h2 id="sending-messages">Sending messages</h2>

        <p>
          <code>chat</code> sends a user message and returns the response. By default it streams tokens line-by-line:
        </p>

        <CodeBlock language="python">{`for step in client.chat(session_id=session_id, prompt="Summarise the document"):
    print(step)`}</CodeBlock>

        <p>
          To get a single non-streaming response, set <code>stream=False</code>:
        </p>

        <CodeBlock language="python">{`response = client.chat(session_id=session_id, prompt="Summarise the document", stream=False)
print(response)`}</CodeBlock>

        <h2 id="running-an-agent-inside-a-session">Running an agent inside a session</h2>

        <p>
          Some apps expose agents that can be run within the session context. <code>run_app_agent</code> executes the agent and streams step-by-step output:
        </p>

        <CodeBlock language="python">{`for step in client.run_app_agent(
    session_id=session_id,
    agent_name="contract_analyzer",
    agent_inputs={"User-Document": "contract.pdf"}
):
    print(step)`}</CodeBlock>

        <h2 id="managing-sessions">Managing sessions</h2>

        <h3 id="check-session-state">Check session state</h3>

        <CodeBlock language="python">{`state = client.get_app_state(session_id)
print(state)`}</CodeBlock>

        <h3 id="export-a-transcript">Export a transcript</h3>

        <p>
          The transcript can be saved as docx, pptx, xlsx, csv, json, or txt:
        </p>

        <CodeBlock language="python">{`result = client.get_app_transcript(session_id, output_format="docx")
print("transcript saved to:", result["response"]["zip_fp"])`}</CodeBlock>

        <h3 id="stop-a-session">Stop a session</h3>

        <CodeBlock language="python">{`client.stop_app_session(session_id)`}</CodeBlock>

        <h2 id="listing-and-discovering-apps">Listing and discovering apps</h2>

        <CodeBlock language="python">{`# List all available apps
apps = client.get_all_apps()
for app in apps.get("app_list", []):
    print(app)

# Get details for a specific app
details = client.lookup_app("contract_review")
print(details)`}</CodeBlock>

        <h2 id="next-steps">Next steps</h2>

        <ul>
          <li><a href="AGENTS.md">Agents</a> — discover and run standalone agent processes</li>
          <li><a href="RAG.md">RAG</a> — build knowledge bases and ask questions over documents</li>
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