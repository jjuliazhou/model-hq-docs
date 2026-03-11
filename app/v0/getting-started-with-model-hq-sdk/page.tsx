import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function GettingStartedPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Getting Started With Model HQ SDK</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Getting Started with Model HQ SDK</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          This guide walks you through the initial steps to launch and configure the backend inference server in{" "}
          <strong>Model HQ</strong>, enabling seamless programmatic access to over 40+ APIs through the Model HQ SDK.
        </p>

        <p>&nbsp;</p>

        <h2 id="launching-the-tools-interface">1. Launching the Tools Interface</h2>
        <p>
          To begin, navigate to the main menu at the top-right corner of the interface and click on the{" "}
          <strong>Tools</strong> button (🔧).
        </p>

        <img src="/v0/getting-started-with-sdk/menu.png" alt="Tools Interface" />

        <p>The tools page should look like this:</p>

        <img src="/v0/getting-started-with-sdk/tools.png" alt="Tools Interface" />

        <p>&nbsp;</p>

        <h2 id="launching-the-backend-server">2. Launching the Backend Server</h2>
        <p>
          Select the <strong>Backend</strong> option from the tools interface. This initiates the backend API server in
          a headless mode, shutting down the user interface and enabling direct access via APIs.
        </p>

        <p>
          This is ideal for lightweight, modular deployment scenarios. Once launched, the server runs as a background
          service and can be accessed either via <code>localhost</code> or over an external IP address—enabling private,
          local inference workflows.
        </p>

        <p>
          You will be provided with a download link for the <strong>Model HQ SDK</strong>, which contains all the
          necessary libraries, sample code, and examples to get started. Simply unzip the SDK package, open your
          preferred IDE, and start coding with direct access to the backend APIs.
        </p>

        <img src="/v0/getting-started-with-sdk/backend.png" alt="Backend Launch" />

        <p>The backend interface includes two main options:</p>
        <ul>
          <li>
            <strong>Launch</strong>: Starts the backend server immediately.
          </li>
          <li>
            <strong>Configure</strong>: Opens the configuration settings before starting the server.
          </li>
        </ul>

        <p>&nbsp;</p>

        <h2 id="launch-backend-inference-server-guide">Launch Backend Inference Server Guide</h2>

        <img src="/v0/getting-started-with-sdk/launch.png" alt="Launch" />

        <h3 id="starting-the-server">Starting the Server</h3>
        <p>
          To start the backend inference server, simply click <strong>Launch</strong> or use the CLI tools provided in
          the SDK. Once launched, the server is accessible at:
        </p>

        <pre>
          <code>Server URL: http://192.168.29.93:8088</code>
        </pre>

        <p>&nbsp;</p>

        <h3 id="stopping-the-server">Stopping the Server</h3>
        <p>You can stop the backend server using any of the following methods:</p>

        <ol>
          <li>
            <strong>From the Model HQ UI</strong>
            <ul>
              <li>Open the Model HQ application.</li>
              <li>
                Navigate to <strong>Server Configuration</strong>.
              </li>
              <li>Use the provided control to shut down the server gracefully.</li>
            </ul>
          </li>
          <li>
            <strong>Using the Client SDK</strong>
            <ul>
              <li>
                Invoke the <code>stop_server()</code> method from the SDK to terminate the server programmatically.
              </li>
            </ul>
          </li>
          <li>
            <strong>Via Windows Task Manager</strong>
            <ul>
              <li>
                Use the SDK's <code>get_server_details()</code> to retrieve the process ID.
              </li>
              <li>Open Task Manager and manually stop the corresponding process.</li>
            </ul>
          </li>
        </ol>

        <p>&nbsp;</p>

        <h3 id="sample-code-hello-world">Sample Code: Hello World</h3>
        <p>Below is a basic example demonstrating how to make an inference call to the backend server using the SDK:</p>

        <pre>
          <code>{`# simple 'hello world' example using the development kit.
from llmware_client_sdk import LLMWareClient

client = LLMWareClient(api_endpoint='http://192.168.29.93:8088')

response = client.inference(prompt='Who was the U.S. President in 1996?', model_name='phi-3-ov')

print('llm response: ', response)`}</code>
        </pre>

        <p>&nbsp;</p>

        <h2 id="configure-backend-api-server">Configure or Configure Backend API Server for 'Headless' Mode</h2>

        <img src="/v0/getting-started-with-sdk/backend.png" alt="Backend Configure" />

        <p>
          Before launching the backend in headless mode, you may choose to configure the server using the{" "}
          <strong>Configure</strong> option. Below are the available settings:
        </p>

        <h3 id="host-type">Host Type</h3>
        <ul>
          <li>
            <strong>Localhost</strong>: Restricts access to the local machine only.
          </li>
          <li>
            <strong>External IP</strong>: Allows access from other devices on the network.
          </li>
        </ul>

        <h3 id="ip-address">IP Address</h3>
        <ul>
          <li>
            <strong>Default</strong>: <code>127.0.0.1</code>
          </li>
          <li>
            <strong>Example</strong>: <code>192.168.29.93</code>
          </li>
        </ul>

        <h3 id="port">Port</h3>
        <ul>
          <li>
            <strong>Default</strong>: <code>8088</code>
          </li>
          <li>This can be modified as needed to avoid port conflicts.</li>
        </ul>

        <h3 id="worker-threads">Worker Threads</h3>
        <ul>
          <li>
            <strong>Default</strong>: <code>4</code>
          </li>
          <li>Recommended for lightweight concurrency; adjust only if needed for performance tuning.</li>
        </ul>

        <h3 id="trusted-key">Trusted Key (Optional)</h3>
        <ul>
          <li>
            <strong>Enable Key Requirement</strong>: All API calls must include a trusted key.
          </li>
          <li>
            <strong>No Key Required</strong>: Skip key-based authentication.
          </li>
        </ul>

        <p>
          Save your changes by clicking on <code>&gt;</code> button.
        </p>

        <p>&nbsp;</p>

        <h2 id="downloading-the-model-hq-sdk">Downloading the Model HQ SDK</h2>

        <img src="/v0/getting-started-with-sdk/download.png" alt="SDK" />

        <p>
          Clicking on the <strong>Download Model HQ Development Kit</strong> button will download a <code>.zip</code>{" "}
          file. Once extracted, it will contain the following files:
        </p>

        <img src="/v0/getting-started-with-sdk/files.png" alt="SDK Files" />

        <pre>
          <code>{`
├── __init__.py
├── agent_examples.py
├── api_service_catalog.py
├── examples.py
├── hello_world.py
├── llmware_client_sdk.py
├── README.txt
├── requirements.txt
├── test_file_admin.py
├── test_file_models.py
├── test_file_rag.py`}</code>
        </pre>

        <p>
          Each script serves a different purpose—from demonstrating API usage to running test cases. Refer to{" "}
          <code>README.txt</code> for detailed usage instructions.
        </p>

        <p>&nbsp;</p>

        <h2 id="closing-backend-server">Closing Backend Server</h2>
        <ul>
          <li>Close the Model HQ UI.</li>
          <li>Open the Model HQ again.</li>
          <li>Go to tools &gt; backend.</li>
          <li>
            You will be asked to "Would you like to stop current server?". Click on <code>Yes</code>.
          </li>
        </ul>

        <img src="/v0/getting-started-with-sdk/close.png" alt="SDK Files" />

        <p>&nbsp;</p>

        <h2>Conclusion</h2>
        <p>
          You're now ready to begin building applications using the Model HQ backend inference server. For more advanced topics,
          refer to{" "}
          <a
            href="/api-references"
            style={{ fontWeight: "bold", color: "#0070f3" }}
          >
            API Reference Guide
          </a>{" "}
          and the <strong>Inside Model HQ SDK</strong>.
        </p>
        <p>
          If you have any questions or feedback, please contact us at <code>support@aibloks.com</code>.
        </p>
      </div>
    </div>
  )
}
