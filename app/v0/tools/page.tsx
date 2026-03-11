import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function ToolsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Tools</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Exploring Tools in Model HQ</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          Once the initial setup is complete, navigate to the <strong>Main Menu</strong>.
          <br />
          Located on the top left corner of this menu, you will find the <strong>Tools</strong> section, denoted by the
          🔧 icon.
        </p>

        <p>
          The Tools section provides powerful utilities for managing your local setup and parsing documents. It includes
          system diagnostics, command-line interface (CLI) access, text parsing tools, and sample document downloads to
          streamline document ingestion workflows.
        </p>

        <p>&nbsp;</p>

        <h2 id="launching-the-tools-interface">1. Launching the Tools Interface</h2>
        <p>
          To begin, click on the <strong>Tools</strong> button (🔧 ) from the main menu present in the top right side.
          <br />
          <img src="/v0/tools/tools.png" alt="tools" />
        </p>

        <p>&nbsp;</p>

        <h2 id="overview-of-the-tools-interface">2. Overview of the Tools Interface</h2>
        <p>
          After launching the Tools section, the interface displays the following key options:
          <br />
          <img src="/v0/tools/toolsInterface.png" alt="tools interface" />
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-muted">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Option</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Backend</td>
                <td className="border border-gray-300 px-4 py-2">Launches the internal API server.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">CLI</td>
                <td className="border border-gray-300 px-4 py-2">
                  Opens a terminal window to run commands without interrupting your UI session.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Share</td>
                <td className="border border-gray-300 px-4 py-2">
                  Allows sharing your session over an external IP for collaboration.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Text Parser</td>
                <td className="border border-gray-300 px-4 py-2">
                  Upload documents in various formats and convert them into flattened text files using customizable
                  chunk sizes.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Sample Docs</td>
                <td className="border border-gray-300 px-4 py-2">
                  Download pre-curated document packages to test and validate your parsing and model workflows.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">System Info</td>
                <td className="border border-gray-300 px-4 py-2">
                  Automatically detects your system configuration, such as available memory, processor type, disk space,
                  and GPU availability.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Home</td>
                <td className="border border-gray-300 px-4 py-2">Returns to the main menu.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>&nbsp;</p>

        <h3 id="backend">Backend</h3>
        <p>
          Select the <b>Backend</b> option from the tools interface. This initiates the backend API server in a headless mode,
          shutting down the user interface and enabling direct access via APIs.
        </p>
        <p>
          This is ideal for lightweight, modular deployment scenarios. Once launched, the server runs as a background service
          and can be accessed either via `localhost` or over an external IP address—enabling private, local inference workflows.
        </p>
        <p>
          You will be provided with a download link for the <b>Model HQ SDK</b>, which contains all the necessary libraries,
          sample code, and examples to get started. Simply unzip the SDK package, open your preferred IDE, and start coding
          with direct access to the backend APIs.
          <br />
        </p>
        <p>
          <img src="/v0/tools/backend.png" alt="backend" />
        </p>

        <p>The backend interface includes two main options:</p>
        <ul>
          <li>
            <b>Launch</b>: Starts the backend server immediately.
          </li>
          <li>
            <b>Configure</b>: Opens the configuration settings before starting the server.
          </li>
        </ul>

        <p>&nbsp;</p>

        <h3 id="cli">CLI (Command Line Interface)</h3>
        <p>
          Selecting this option opens a separate CLI window allowing you to run commands directly.
        </p>
        <p>
          <img src="/v0/tools/cli.png" alt="cli" />
        </p>
        <p>
          By selecting to open the App in a command-line terminal, a second instance of the App will be created, exposed
          through a new terminal. You can use the CLI to start running chats, in parallel, while using the main app UI.
          <br />
          To get started, once the command line interface opens, enter 'help' - and a list of options will be provided to
          get started.
        </p>

        <p>Example usage with llmware Python client:</p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>
            {`from llmware.web_services import LLMWareClient
  client = LLMWareClient(api_endpoint="http://0.0.0.0:8088")
  response = client.inference(prompt="Who was the U.S. President in 1996?", model_name="phi-3-ov")
  print("llm response:", response)`}
          </code>
        </pre>

        <p>Use this interface for advanced usage, scripting, or automation.</p>

        <p>
          For Getting Started with CLI, enter <b>help</b> in the terminal to get all the commands or actions you can perform using
          the CLI.
        </p>

        <p>&nbsp;</p>

        <h3 id="share">Share</h3>
        <p>
          Use Share Connection to transfer your session to an external IP address. This is particularly useful for collaboration
          or accessing the interface from another machine. Note: this will close the localhost connection, and transfer the
          connection to your Model HQ app to be an externally available IP address, accessible over the network.
          You can then use any device to access the App, provided that it has corporate network access to that IP address.
          Try with a smart phone, tablet or another PC.
          <br />
          <img src="/v0/tools/share.png" alt="share" />
        </p>

        <blockquote data-type="warning">
          <p>
            <strong>WARNING</strong>
            <br />
            Sharing will stop the current session and relaunch it with a new IP configuration.
          </p>
        </blockquote>

        <p>
          Confirm the operation by clicking on the <code>&gt;</code> button:
          <br />
          <img src="/v0/tools/shareConform.png" alt="share confirm" />
        </p>

        <p>&nbsp;</p>

        <h3 id="text-parser">Text Parser</h3>
        <p>The Parse and Extract utility allows ingestion of documents in the following formats:</p>
        <ul>
          <li>
            <code>PDF</code>, <code>DOCX</code>, <code>PPTX</code>, <code>XLSX</code>
          </li>
          <li>
            <code>TXT</code>, <code>CSV</code>, <code>MD</code>
          </li>
          <li>
            <code>WAV</code> (for audio parsing)
          </li>
          <li>
            <code>ZIP</code> (containing supported formats)
          </li>
        </ul>

        <p>
          Click Upload Docs and choose your file and then click on the <code>&gt;</code> button. All documents will be
          parsed into flat text chunks.
          <br />
          <img src="/v0/tools/textParser.png" alt="text parser" />
        </p>

        <h4 id="configure">Configure (⚙️):</h4>
        <p>
          Click Update Text Chunk Size to define how large each text segment should be during parsing. This impacts how
          text is tokenized for downstream use in models.
          <br />
          <img src="/v0/tools/settings.png" alt="settings" />
        </p>

        <blockquote data-type="tip">
          <p>
            Text chunk size in parsing refers to the amount of text, measured in tokens, that is processed as a single
            unit during analysis or transformation of the file to a searchable body of text. Selecting the right text
            chunk size is important because it affects how accurately and efficiently a model can understand, process,
            and retrieve information—too small, and context may be lost; too large, and it may exceed model limits or
            reduce performance.
          </p>
        </blockquote>

        <p>&nbsp;</p>

        <h3 id="sample-docs">Sample Docs</h3>
        <p>This option allows you to download example document packages. These samples are useful for:</p>
        <ul>
          <li>Testing parsing pipelines</li>
          <li>Benchmarking extraction workflows</li>
          <li>Understanding document ingestion formats</li>
        </ul>

        <p>
          Select your preferred package and it will be downloaded into your local workspace.
          <br />
          <img src="/v0/tools/sampleDocs.png" alt="sample docs" />
        </p>

        <p>&nbsp;</p>

        <h3 id="system-info">System Info</h3>
        <p>
          Click on System Info to view hardware and software configurations detected by Model HQ.
          <br />
          <img src="/v0/tools/systemInfo.png" alt="system info" />
        </p>

        <blockquote data-type="important">
          <p>
            Here, app version is the version name of Model HQ. Make sure you're on the latest version.
          </p>
        </blockquote>

        <p>
          This check ensures your setup can properly download and run models.
          See the <a href="/system-configuration" style={{ color: "#5a5b5fff", textDecoration: "underline" }}> system configuration</a> for details.
        </p>

        <p>&nbsp;</p>

        <h2>Conclusion</h2>
        <p>
          The <strong>Tools</strong> section in Model HQ is designed to provide developers with the resources they need
          for efficient model development and environment management.
        </p>

        <p>
          If you have any questions or feedback, please contact us at <code>support@aibloks.com</code>.
        </p>
      </div>
    </div>
  )
}
