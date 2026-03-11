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

export default function ExploringToolsInModelHqPage() {
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
            <BreadcrumbPage>Exploring tools in Model HQ</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Exploring tools in Model HQ</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          The Tools section provides powerful utilities for managing local setup, development workflows, and system diagnostics within Model HQ. This centralized interface includes backend server controls, CLI access, development SDKs, model management utilities, and system information displays.
        </p>

        <p>
          The Tools section in Model HQ gives you helpful features to set up, manage, and check how the system is working.
        </p>

        <p>
          In one place, you can control the backend server, use the command line (CLI), connect with developer tools (SDKs), download and manage models, and view system information about your computer.
        </p>

        <p>
          After setup, these tools help both regular users and developers get more done. You can run Model HQ in the background, automate tasks with commands, download sample files to test, install models, and check that your system is ready.
        </p>

        <p>
          These features also let you connect Model HQ to bigger systems, fix problems, and make sure everything runs fast and smoothly.
        </p>

        <p>
          Learning how to use the Tools section is important if you want to do more advanced work, like running Model HQ as a behind-the-scenes AI service instead of just using the app.
        </p>

        <h2 id="1-launching-the-tools-interface">1. Launching the tools interface</h2>

        <p>
          To begin, the <strong>Tools</strong> button (🔧) located in the top right side of the main menu can be selected.
        </p>

        <img src="/v1/tools/01_mainMenu.png" alt="tools" />

        <h2 id="2-tools-interface-overview">2. Tools interface overview</h2>

        <p>
          After launching the Tools section, the interface displays the following key options:
        </p>

        <img src="/v1/tools/02_toolsInterface.png" alt="tools" />

        <p>
          The tools interface provides access to the following utilities:
        </p>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Option</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Backend</strong></td>
              <td className="border border-border px-4 py-2">Launches the internal API server in headless mode for programmatic access</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Demos</strong></td>
              <td className="border border-border px-4 py-2">Accesses pre-built demonstrations for bots and agents</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>SDK</strong></td>
              <td className="border border-border px-4 py-2">Downloads the Model HQ Client Tools Kit for IDE-based development</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>CLI</strong></td>
              <td className="border border-border px-4 py-2">Opens a command-line interface terminal for advanced operations</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Share</strong></td>
              <td className="border border-border px-4 py-2">Enables session sharing over an external IP address for collaboration</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Updates</strong></td>
              <td className="border border-border px-4 py-2">Checks for and downloads new content, agents, templates, and SDK updates</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Test Server</strong></td>
              <td className="border border-border px-4 py-2">Verifies that the Model HQ server is functioning correctly</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Model Downloader</strong></td>
              <td className="border border-border px-4 py-2">Manages model downloads and completes standard model set installations</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Inference Log</strong></td>
              <td className="border border-border px-4 py-2">Stores and displays inference transaction logs from the database</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Sample Docs</strong></td>
              <td className="border border-border px-4 py-2">Downloads pre-curated document packages for testing parsing and RAG workflows</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>System Info</strong></td>
              <td className="border border-border px-4 py-2">Displays detected system configuration including memory, processor, disk, and GPU details</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Option</h5>
                <p className="text-sm mt-1 break-words"><strong>Backend</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Launches the internal API server in headless mode for programmatic access</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Option</h5>
                <p className="text-sm mt-1 break-words"><strong>Demos</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Accesses pre-built demonstrations for bots and agents</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Option</h5>
                <p className="text-sm mt-1 break-words"><strong>SDK</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Downloads the Model HQ Client Tools Kit for IDE-based development</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Option</h5>
                <p className="text-sm mt-1 break-words"><strong>CLI</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Opens a command-line interface terminal for advanced operations</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Option</h5>
                <p className="text-sm mt-1 break-words"><strong>Share</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Enables session sharing over an external IP address for collaboration</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Option</h5>
                <p className="text-sm mt-1 break-words"><strong>Updates</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Checks for and downloads new content, agents, templates, and SDK updates</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Option</h5>
                <p className="text-sm mt-1 break-words"><strong>Test Server</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Verifies that the Model HQ server is functioning correctly</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Option</h5>
                <p className="text-sm mt-1 break-words"><strong>Model Downloader</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Manages model downloads and completes standard model set installations</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Option</h5>
                <p className="text-sm mt-1 break-words"><strong>Inference Log</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Stores and displays inference transaction logs from the database</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Option</h5>
                <p className="text-sm mt-1 break-words"><strong>Sample Docs</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Downloads pre-curated document packages for testing parsing and RAG workflows</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Option</h5>
                <p className="text-sm mt-1 break-words"><strong>System Info</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Displays detected system configuration including memory, processor, disk, and GPU details</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <p>
          Each tool serves a specific purpose in the development, deployment, and diagnostic workflow of Model HQ.
        </p>

        <h2 id="31-backend">3.1 Backend</h2>

        <p>
          The Backend option can be selected from the tools interface to initiate the backend API server in headless mode, which closes the user interface and enables direct API access.
        </p>

        <p>
          This deployment mode is ideal for lightweight, modular scenarios where Model HQ operates as a backend service. Once launched, the server runs as a background process and can be accessed via <code>localhost</code> or over an external IP address—enabling private, local inference workflows or integration into larger systems.
        </p>

        <p>
          A download link for the <strong>Model HQ SDK</strong> will be provided, containing all necessary libraries, sample code, and examples. The SDK package can be unzipped, opened in any preferred IDE, and used to interact with the backend APIs programmatically.
        </p>

        <img src="/v1/tools/03_backend1.png" alt="Backend Launch" />

        <p>
          The backend interface includes two main options:
        </p>

        <ul>
          <li><strong>Launch</strong>: The backend server can be started immediately.</li>
          <li><strong>Configure</strong>: Configuration settings can be adjusted before starting the server.</li>
        </ul>

        <p>
          Example usage with llmware Python client:
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">from llmware.web_services import LLMWareClient
client = LLMWareClient(api_endpoint="http://0.0.0.0:8088")
response = client.inference(prompt="Who was the U.S. President in 1996?", model_name="phi-3-ov")
print("llm response:", response)
</code>
        </pre>

        <h3 id="311-launching-backend-server">3.1.1 Launching backend server</h3>

        <p>
          Once the launch button is clicked, the backend will be initiated. Helpful tips will be displayed as shown in the screenshot.
        </p>

        <img src="/v1/tools/03_backend2.png" alt="Backend Launch" />

        <h3 id="312-configuring-backend-server">3.1.2 Configuring backend server</h3>

        <p>
          This step configures the Backend API Server for <strong>Headless mode</strong> operation. The backend server exposes APIs that agents, services, or external systems can invoke without relying on the graphical user interface.
        </p>

        <img src="/v1/tools/03_backend3.png" alt="Backend Launch" />

        <p>
          This configuration defines the server's network location, access method, concurrency limits, and optional security controls.
        </p>

        <h4 id="3121-server-mode-localhost-or-external-ip">3.1.2.1 Server Mode: Localhost or External IP</h4>

        <p>
          Choose how the backend server should be exposed.
        </p>

        <p>
          <strong>Options:</strong>
        </p>

        <ul>
          <li><strong>Localhost</strong> The server is bound to the local machine only. It will be accessible as <code>127.0.0.1</code> and cannot be reached from other devices or machines.</li>
          <li><strong>External IP</strong> The server is bound to a network accessible IP address, allowing other machines, agents, or services to connect.</li>
        </ul>

        <p>
          <strong>When to use:</strong>
        </p>

        <ul>
          <li>Use <strong>Localhost</strong> for development, testing, or single machine setups.</li>
          <li>Use <strong>External IP</strong> for shared environments, distributed agents, or production deployments.</li>
        </ul>

        <h4 id="3122-ip-address">3.1.2.2 IP Address</h4>

        <p>
          Specifies the IP address on which the backend server will listen.
        </p>

        <p>
          <strong>Behavior:</strong>
        </p>

        <ul>
          <li>If <strong>Localhost</strong> is selected, this is automatically treated as <code>127.0.0.1</code>.</li>
          <li>If <strong>External IP</strong> is selected, provide a valid internal or public IP address.</li>
        </ul>

        <p>
          <strong>Example:</strong>
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">192.168.29.93
</code>
        </pre>

        <h4 id="3123-port">3.1.2.3 Port</h4>

        <p>
          Defines the network port used by the backend server.
        </p>

        <p>
          <strong>Default example:</strong>
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">8088
</code>
        </pre>

        <p>
          <strong>Notes:</strong>
        </p>

        <ul>
          <li>Change this only if the default port is already in use.</li>
          <li>Ensure the port is open and allowed through firewalls if using an External IP.</li>
        </ul>

        <h4 id="3124-workers">3.1.2.4 Workers</h4>

        <p>
          Controls the number of lightweight worker processes handling concurrent requests.
        </p>

        <p>
          <strong>Example:</strong>
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">4
</code>
        </pre>

        <p>
          <strong>Guidelines:</strong>
        </p>

        <ul>
          <li>Keep this value low by default.</li>
          <li>Increase only if you observe request bottlenecks or specific performance issues.</li>
          <li>Higher values may increase memory and CPU usage.</li>
        </ul>

        <h4 id="3125-trusted-key">3.1.2.5 Trusted Key</h4>

        <p>
          An optional shared secret used to secure API access.
        </p>

        <p>
          <strong>Behavior:</strong>
        </p>

        <ul>
          <li>Can be left blank if security is handled elsewhere.</li>
          <li>If provided, clients must supply this key in API requests when key enforcement is enabled.</li>
        </ul>

        <p>
          <strong>Example:</strong>
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">my-secure-backend-key
</code>
        </pre>

        <h4 id="3126-require-trusted-key">3.1.2.6 Require Trusted Key</h4>

        <p>
          Controls whether the Trusted Key is mandatory for all API calls.
        </p>

        <p>
          <strong>Options:</strong>
        </p>

        <ul>
          <li><strong>Require Key</strong> All incoming API requests must include the trusted key.</li>
          <li><strong>No Key</strong> API requests are accepted without authentication.</li>
        </ul>

        <p>
          <strong>Recommendation:</strong>
        </p>

        <ul>
          <li>Enable <strong>Require Key</strong> for production or shared environments.</li>
          <li>Use <strong>No Key</strong> only for local development or isolated networks.</li>
        </ul>

        <h4 id="3127-result">3.1.2.7 Result</h4>

        <p>
          Once configured, the backend API server will start in headless mode using the defined network settings, concurrency limits, and security rules. This server becomes the primary execution and integration point for agents, MCP services, and external systems.
        </p>

        <h2 id="32-demos">3.2 Demos</h2>

        <p>
          The <strong>Demos</strong> section is designed to make demos of bots and agents easy for users. This section contains all demonstrations that have been created by the user as well as some Model HQ pre-packaged demos for bots and agents. Demos are often packaged with pre-loaded prompts or queries and are designed to run automatically with the pre-loaded prompts to illustrate the bot or agent.
        </p>

        <p>
          Demonstrations can be executed directly from this interface.
        </p>

        <img src="/v1/tools/04_demos.png" alt="Backend Launch" />

        <p>
          This provides quick access to test workflows and example implementations without navigating through the full bot or agent creation process.
        </p>

        <p>
          ![Note]
          <br />
          To create Demos to be added to this section, go to Bots &gt; [select the name of bot] &gt; Edit &gt; Demo. In this section you will see either the option to build an input list of prompts OR a list of prompts (if the demo has already been created for the Bot). For a tutorial of how to create a demo for your custom bot, please watch our YouTube video, "One-Click Live Demos for Your AI Chabots": https://youtu.be/il48-IaEfxw
        </p>

        <h2 id="33-sdk">3.3 SDK</h2>

        <p>
          The <strong>Model HQ Client Tools Kit</strong> (or Model HQ SDK) enables Model HQ to be run within an IDE environment and allows the backend server to be operated as described in the Backend section.
        </p>

        <img src="/v1/tools/05_sdk.png" alt="Backend Launch" />

        <p>
          The SDK provides all necessary libraries, documentation, and code examples for programmatic integration with Model HQ's backend services.
        </p>

        <h2 id="34-cli">3.4 CLI</h2>

        <p>
          The CLI option can be selected to open a separate command-line interface window where commands can be executed directly.
        </p>

        <img src="/v1/tools/06_cli.png" alt="tools" />

        <p>
          By selecting the CLI option, a second instance of the application will be created and exposed through a new terminal window. The CLI can be used to run chat sessions in parallel while the main application UI remains active.
        </p>

        <p>
          To get started with CLI operations, the <strong>help</strong> command can be entered in the terminal to display all available commands and actions.
        </p>

        <h2 id="35-share">3.5 Share</h2>

        <p>
          The <strong>Share Connection</strong> feature can be used to transfer the session to an external IP address. This is particularly useful for collaboration or accessing the interface from another machine.
        </p>

        <img src="/v1/tools/07_share.png" alt="tools" />

        <p>
          When sharing is enabled, the localhost connection will be closed and the Model HQ application will be transferred to an externally accessible IP address available over the network. Any device with corporate network access to that IP address can then be used to access the application, including smartphones, tablets, or other PCs.
        </p>

        <blockquote data-type="warning">
            <p>Sharing will stop the current session and relaunch it with a new IP configuration.</p>
        </blockquote>

        <blockquote data-type="note">
            <p>The IP address and port should be entered into a browser on any network-connected machine to access the shared session.</p>
        </blockquote>

        <blockquote data-type="important">
            <p>Firewall port settings may need to be adjusted to enable external connections.</p>
        </blockquote>

        <h2 id="36-updates">3.6 Updates</h2>

        <p>
          The <strong>Updates</strong> feature can be used to check for additional content, including new agents, templates, demonstrations, and SDK tools.
        </p>

        <img src="/v1/tools/08_updates.png" alt="tools" />

        <p>
          The update button can be clicked to check for and download newly available content and features.
        </p>

        <h2 id="37-test-server">3.7 Test server</h2>

        <p>
          The <strong>Test Server</strong> utility verifies whether the Model HQ server is functioning correctly.
        </p>

        <p>
          This diagnostic tool confirms server responsiveness and basic operational status.
        </p>

        <h2 id="38-model-downloader">3.8 Model downloader</h2>

        <p>
          The <strong>Model Downloader</strong> manages the installation of the standard model set.
        </p>

        <img src="/v1/tools/09_modelDownloader.png" alt="tools" />

        <p>
          The interface displays which models remain to be downloaded to complete the standard model set installation. Models can be selected and downloaded as needed based on use case requirements.
        </p>

        <h2 id="39-inference-logs">3.9 Inference logs</h2>

        <p>
          Inference transactions can be stored in the database for logging and analysis purposes.
        </p>

        <p>
          This feature maintains a record of all inference operations, enabling performance tracking, debugging, and usage analytics.
        </p>

        <h2 id="310-sample-documents">3.10 Sample documents</h2>

        <p>
          The <strong>Sample Docs</strong> option allows example document packages to be downloaded. These samples are useful for:
        </p>

        <ul>
          <li>Testing parsing pipelines</li>
          <li>Benchmarking extraction workflows</li>
          <li>Understanding document ingestion formats</li>
        </ul>

        <img src="/v1/tools/10_sampleDocs.png" alt="tools" />

        <p>
          The preferred document package can be selected and will be downloaded into the local workspace for testing and validation purposes.
        </p>

        <h2 id="311-system-information">3.11 System information</h2>

        <p>
          The <strong>System Info</strong> option can be selected to view hardware and software configurations detected by Model HQ.
        </p>

        <img src="/v1/tools/11_systemInfo.png" alt="tools" />

        <p>
          This diagnostic display helps assess whether the environment is suitable for downloading and running specific models. The system information includes details about available memory, processor type, disk space, and GPU availability. For detailed system requirements, the <a href="/systemconfiguration/system-configuration">System Configurations</a> documentation can be consulted.
        </p>

        <h2 id="conclusion">Conclusion</h2>

        <p>
          This document explains the Tools section in Model HQ. The Tools area gives you helpful features for setting up, managing, and running the system more easily.
        </p>

        <p>
          It includes things like the Backend Server, which lets Model HQ run in the background, the CLI, which lets you use commands instead of buttons, and the SDK, which helps developers connect Model HQ to their own apps or programs. The Share feature also makes it easy to give others access.
        </p>

        <p>
          There are tools to check that everything works correctly. System Info shows what your computer can handle, and Test Server makes sure the server is running properly before you launch your models.
        </p>

        <p>
          The Model Downloader helps you install models quickly, and Sample Documents give you test files to practice with. The Demos section includes ready-made examples you can try right away, and Updates keeps your agents, templates, and tools up to date.
        </p>

        <p>
          All together, these tools make Model HQ more than just a simple app — they turn it into a flexible platform that developers, teams, and organizations can customize and connect to bigger systems.
        </p>

        <p>
          Learning how to use the Tools section is especially helpful for advanced users and teams running Model HQ in real-world projects.
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