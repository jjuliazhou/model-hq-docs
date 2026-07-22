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

export default function AgentsModelHqClientSdkPage() {
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
            <BreadcrumbPage>Agents — Model HQ Client SDK</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Agents — Model HQ Client SDK</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          Agents are pre-built multi-step processes that automate tasks like document analysis, intake processing, or report generation. This guide covers how to discover available agents, inspect their inputs, and run them.
        </p>

        <h2 id="prerequisites">Prerequisites</h2>

        <p>
          This guide assumes the SDK is installed and importable. If you haven't set that up yet, follow the <a href="HELLO-WORLD.md">Hello World</a> prerequisites first.
        </p>

        <h2 id="quick-example">Quick example</h2>

        <CodeBlock language="python">
{`from modelhq.client import LLMWareClient

client = LLMWareClient(api_endpoint="http://localhost:8088", api_key="")

# List available agents
agents = client.get_all_agents()
for agent in agents.get("response", []):
    print(agent)

# Run an agent with a text input
result = client.run_agent(
    agent_name="intake_processing",
    agent_inputs={"User-Document": "customer_transcript.txt"}
)
print(result)`}
</CodeBlock>

        <h2 id="discovering-agents">Discovering agents</h2>

        <h3 id="list-all-agents">List all agents</h3>

        <CodeBlock language="python">
{`response = client.get_all_agents()
for i, agent in enumerate(response["response"]):
    print(f"agent {i}: {agent}")`}
</CodeBlock>

        <h3 id="get-agent-signature">Get agent signature</h3>

        <p>
          The signature describes what inputs an agent expects (names and types), what it outputs, and which parameters can be updated:
        </p>

        <CodeBlock language="python">
{`signature = client.get_agent_signature("intake_processing")
print(signature)`}
</CodeBlock>

        <p>
          The <code>inputs</code> field lists each required input as <code>[name, type, default]</code>. For example, <code>["User-Document", "document", ""]</code> means the agent needs a document file named <code>User-Document</code>.
        </p>

        <h3 id="get-agent-description">Get agent description</h3>

        <CodeBlock language="python">
{`description = client.get_agent_description("intake_processing")
print(description)`}
</CodeBlock>

        <h2 id="running-agents">Running agents</h2>

        <h3 id="basic-execution">Basic execution</h3>

        <p>
          Pass a dictionary of inputs matching the agent's signature. File paths are automatically uploaded:
        </p>

        <CodeBlock language="python">
{`result = client.run_agent(
    agent_name="intake_processing",
    agent_inputs={"User-Document": "path/to/transcript.txt"}
)
print(result)`}
</CodeBlock>

        <h3 id="streaming-execution">Streaming execution</h3>

        <p>
          <code>run_agent_generator</code> yields step-by-step output as each stage of the agent completes, useful for showing progress in a UI:
        </p>

        <CodeBlock language="python">
{`for step in client.run_agent_generator(
    agent_name="intake_processing",
    agent_inputs={"User-Document": "path/to/transcript.txt"}
):
    print(step)`}
</CodeBlock>

        <h3 id="calling-a-deployed-agent">Calling a deployed agent</h3>

        <p>
          If an agent has been pre-deployed as a named endpoint on the server, use <code>call_agent</code>:
        </p>

        <CodeBlock language="python">
{`result = client.call_agent(
    agent_name="intake_processing",
    agent_inputs={"User-Document": "path/to/transcript.txt"}
)
print(result)`}
</CodeBlock>

        <h2 id="retrieving-agent-output">Retrieving agent output</h2>

        <p>
          After an agent run completes, outputs can be retrieved by execution ID:
        </p>

        <CodeBlock language="python">
{`# Get JSON output
output = client.get_agent_output_json(id=execution_id)

# Download file outputs as a zip
result = client.get_agent_output_files(id=execution_id)
print("zip saved to:", result["response"]["zip_fp"])

# Get the general agent output
result = client.agent_output(id=execution_id)`}
</CodeBlock>

        <h2 id="managing-agents">Managing agents</h2>

        <h3 id="download-an-agent-from-the-server">Download an agent from the server</h3>

        <CodeBlock language="python">
{`result = client.download_agent("intake_processing")
print("downloaded to:", result["response"]["zip_fp"])`}
</CodeBlock>

        <h3 id="install-an-agent-from-a-zip-file">Install an agent from a zip file</h3>

        <CodeBlock language="python">
{`result = client.install_agent_zip("path/to/agent.zip")
print(result)`}
</CodeBlock>

        <h3 id="view-execution-logs">View execution logs</h3>

        <CodeBlock language="python">
{`logs = client.get_agent_execution_log_list(agent_name="intake_processing")
print(logs)`}
</CodeBlock>

        <h3 id="schedule-an-agent">Schedule an agent</h3>

        <CodeBlock language="python">
{`client.set_new_agent_schedule(
    agent_name="daily_report",
    frequency="daily",
    hour=9,
    minute=0
)

# List all scheduled agents
scheduled = client.get_all_scheduled_agents()
print(scheduled)`}
</CodeBlock>

        <h2 id="services-and-integrations">Services and integrations</h2>

        <p>
          Agents can use external services and integrations for web search, RAG, and other capabilities.
        </p>

        <CodeBlock language="python">
{`# List installed services
services = client.list_services()
print(services)

# Test a service
result = client.test_service(service_name="custom_analyzer")
print(result)

# List available integrations
integrations = client.list_integrations()
print(integrations)

# Web search (requires a configured search provider)
client.add_credential({"tavily_api_key": "tvly-..."})
results = client.web_search("What is quantum gravity?", engine="tavily")
print(results)`}
</CodeBlock>

        <h2 id="next-steps">Next steps</h2>

        <ul>
          <li><a href="CHAT.md">Chat</a> — run agents inside app sessions with chat interaction</li>
          <li><a href="RAG.md">RAG</a> — build knowledge bases for agents to query</li>
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