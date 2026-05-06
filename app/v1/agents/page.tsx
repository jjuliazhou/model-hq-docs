import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DocPageLayout } from "@/components/doc-page-layout"
import { RelatedVideos } from "@/components/related-videos"
import { references } from "./references"

export default function ExploringAgentsInModelHqPage() {
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
            <BreadcrumbPage>Exploring agents in Model HQ</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Exploring agents in Model HQ</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          From the <strong>Main Menu</strong>, open the <strong>Agents</strong> section to start building automated workflows. <strong>Agents</strong> chain together document parsing, RAG retrieval, model inference, and structured output generation into a single repeatable process — useful for jobs like contract analysis, customer support, research summarization, financial data extraction, and image tagging.
        </p>

        <p>
          You can run an agent on one file or many at once, with results delivered as Word reports, CSVs, JSON, summaries, or plain text. The <strong>Agents interface</strong> lets you build agents from scratch (drag-and-drop visual builder or multi-step no-code editor), run ready-made templates, edit and share workflows, and create demos to illustrate use cases. Pre-built examples are included and fully customizable.
        </p>

        <p>
          Each run executes step-by-step — parsing documents, answering RAG questions, filtering CSV data, and auto-generating reports — while inference logs surface model responses, token usage, processing time, and confidence scores at every step.
        </p>

        <p>
          This guide covers loading and running existing agents, interpreting outputs and logs, batch processing across multiple files, sharing and uploading custom agents, and using the visual builder for workflow creation and editing — everything you need to automate complex document workflows and integrate agents into broader enterprise systems.
        </p>

        <RelatedVideos
          title="Watch: Build & Run Agents"
          description="See real-world agent workflows — vision, RAG, classification, contracts, and more."
          videoIds={[
            "UTNQxspDi3I",
            "D3cZyenzelY",
            "FGmY9whUkaA",
            "yBj6wfdCoFc",
            "9n7gXz6knbM",
            "fW8_-_EdsrM",
            "R1fAogEIDMc",
            "1xE07RNHDM0",
            "FSjpAgIZnPM",
          ]}
        />

        <h2 id="1-launching-the-agents-interface">1. Launching the agents interface</h2>

        <p>
          The <strong>Agent</strong> button in the main menu sidebar can be selected, or the agents option can be chosen from the home page as shown in the attached image.
        </p>

        <img src="/v1/agents/01_mainMenu.png" alt="agents" />

        <h2 id="2-agent-interface-overview">2. Agent interface overview</h2>

        <p>
          The Agents interface allows agents to be run, built, edited, shared, and deleted.
        </p>

        <img src="/v1/agents/02_agentsInterface.png" alt="agents" />

        <p>
          Here is a breakdown of the key components:
        </p>

        <ol>
          <li><strong>Build New & Load Existing Options</strong>
            <ul>
              <li><strong>Build New</strong>: Creates a new agent from scratch.</li>
              <li><strong>Load Existing</strong>: Loads an existing agent, either a pre-created template included in Model HQ or one previously built by the user.</li>
            </ul></li>
        </ol>

        <ol>
          <li><strong>Visual</strong>: Builds agents with an open visual builder by connecting nodes and wires (no-code, easy to use agent creation mode, enabling quick workflow creation or diagrammatic understanding of agent workflows).</li>
        </ol>

        <ol>
          <li><strong>Edit</strong>: Modifies an existing agent.</li>
        </ol>

        <ol>
          <li><strong>Share</strong>: Shares an agent with others.</li>
        </ol>

        <ol>
          <li><strong>Upload</strong>: Quickly builds an agent by uploading a pre-built file.</li>
        </ol>

        <ol>
          <li><strong>Delete</strong>: Deletes an agent.</li>
        </ol>

        <ol>
          <li><strong>Info Icon</strong>: Provides metadata and step-by-step information and process diagram about an agent workflow for users</li>
        </ol>

        <blockquote data-type="note">
            <p>This documentation does not cover building and editing agents in detail. For creating a new agent, the <a href="/v1/agents/creating-new-agent">Create New Agent</a> documentation should be consulted, and for editing an agent, the <a href="/v1/agents/edit-an-agent">Edit an Agent</a> documentation should be followed. The visual builder mode is discussed in <a href="/v1/agent/agent-visual-builder">Agent Visual Builder</a>.</p>
        </blockquote>

        <p>
          In this documentation, an existing agent will be run, and other options such as share and upload will be explained in detail.
        </p>

        <h3 id="21-loading-an-existing-agent">2.1 Loading an existing agent</h3>

        <p>
          To load an existing agent, <code>load existing</code> can be selected (if not already selected), and then any of the pre-existing agents can be chosen.
        </p>

        <h4 id="available-pre-created-agent-templates-in-model-hq">Available Pre-Created Agent Templates in Model HQ</h4>

        <ul>
          <li><strong>AC Field Tech Support</strong></li>
          <li><strong>Cloud API Agent</strong></li>
          <li><strong>Conditional Agent</strong></li>
          <li><strong>Contract Analyzer</strong></li>
          <li><strong>Customer Support</strong></li>
          <li><strong>Financial Data Extractor</strong></li>
          <li><strong>Handwriting Reading Agent</strong></li>
          <li><strong>Image Tagger</strong></li>
          <li><strong>Image Generation Agent</strong></li>
          <li><strong>Intake Processing</strong></li>
          <li><strong>Intune Device Risk Agent</strong></li>
          <li><strong>Music License Royalty Agent</strong></li>
          <li><strong>Research Process</strong></li>
          <li><strong>Stock Research Agent</strong></li>
          <li><strong>Summarize Website</strong></li>
        </ul>

        <p>
          Select any agent from the list and click the <code>&gt;</code> button to continue.
        </p>

        <p>
          For this walkthrough, <strong>Contract Analyzer</strong> has been selected, which was specifically designed to demonstrate how complex Employment Agreements can be quickly queried using pre-built agents.
        </p>

        <h2 id="22-confirming-the-agent">2.2 Confirming the agent</h2>

        <p>
          After selecting an agent, the following interface will be displayed:
        </p>

        <img src="/v1/agents/03_contractAnalyzer.png" alt="agents" />

        <p>
          Once the user selects and agent and clicks &quot;&gt;&quot;, details about the agent will be provided along with the complete process flow from input to output by expanding the top bar with the agent name and the number of steps.
        </p>

        <p>
          In the Run agent section, 2-3 options will typically be available:
        </p>

        <ul>
          <li>Run (Details)</li>
          <li>Run (Demo)</li>
          <li>Batch Run</li>
        </ul>

        <h2 id="23-running-the-agent">2.3 Running the Agent</h2>

        <h3 id="231-run-demo">2.3.1 Run (Demo)</h3>

        <p>
          Demo mode is available for all of the Pre-Created Agent templates listed above in Section 2.1. When you select this mode, the agent will run automatically from start to finish. You’ll see a clear explanation of the input, watch each step as it runs, and view the final output.
        </p>

        <ul>
        </ul>

        <h3 id="232-run-details">2.3.2 Run (Details)</h3>

        <p>
          Run (Details) enables the agent to be executed.
        </p>

        <p>
          User input will be requested based on the agent's configuration, such as text input or file upload.
        </p>

        <blockquote data-type="note">
            <p>If the required model(s) are not downloaded to run this agent, the models will be downloaded step-by-step as needed.</p>
        </blockquote>

        <p>
          In the selected agent (Contract Analyzer), a file is required as input. Since it is a contract analyzer agent, a contract document is needed for analysis. The complete breakdown of all steps for this agent is as follows:
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">Step 1 - parse_document - my_contract
Step 2 - rag_answer - When is the effective date of the executive employment agreement?
Step 3 - rag_answer - What is the annual rate of the base salary?
Step 4 - rag_answer - How many vacation day?
Step 5 - agent_report - Contract Analysis Report
Step 6 - END - Process end.
</code>
        </pre>

        <p>
          <strong>Uploading a File as Input</strong>
        </p>

        <img src="/v1/agents/04_runDetails1.png" alt="agents" />

        <p>
          Model HQ includes sample executive employment agreement documents that can be used to test this agent. These files are located in:
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">c:\users\{'{'+'user name'+'}'}\llmware_data\sample_files\agreements</code>
        </pre>

        <p>
          This sample agent demonstrates how documents can be queried using pre-built agents in an automated workflow, using one of the provided Executive Employment Agreements as an example.
        </p>

        <p>
          (Supported file types are <code>.pdf</code>, <code>.pptx</code>, <code>.docx</code>, <code>.txt</code>, and <code>.md</code>.)
        </p>

        <p>
          Once the file has been added, the process can proceed to the next step.
        </p>

        <p>
          Once the file is uploaded, the agent will begin executing the defined workflow automatically.
        </p>

        <p>
          No further user action is required at this stage.
        </p>

        <p>
          The agent will process the input and generate output as defined in its configuration.
        </p>

        <img src="/v1/agents/04_agentOutput1.png" alt="agents" />

        <p>
          Once all processes have been completed, a summary report table will be created according to the 5th step (<code>agent_report - Contract Analysis Report</code>).
        </p>

        <img src="/v1/agents/04_agentOutput2.png" alt="agents" />

        <p>
          For every output, inference history and created files will also be available.
        </p>

        <h4 id="2321-inference-history">2.3.2.1 Inference history</h4>

        <p>
          The Inference History table provides detailed logs of each inference performed by the language model, enabling transparency, performance tracking, and auditing. This is particularly useful for AI-driven processes such as contract analysis, customer support, and research workflows.
        </p>

        <img src="/v1/agents/04_inference.png" alt="agents" />

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Column</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><strong>inference</strong></td>
              <td className="border border-border px-4 py-2">A sequential identifier for each inference operation.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>llm_response</strong></td>
              <td className="border border-border px-4 py-2">The text response generated by the language model (LLM) based on the input context.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>confidence_score</strong></td>
              <td className="border border-border px-4 py-2">The model's confidence level (if available). <code>NA</code> indicates not applicable.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>tokens</strong></td>
              <td className="border border-border px-4 py-2">Token statistics, including input tokens, output tokens, and total tokens processed.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>first token</strong></td>
              <td className="border border-border px-4 py-2">Time (in seconds) taken to generate the first token of the response.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>processing time</strong></td>
              <td className="border border-border px-4 py-2">Total time (in seconds) taken to process and return the complete response.</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Column</h5>
                <p className="text-sm mt-1 break-words"><strong>inference</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">A sequential identifier for each inference operation.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Column</h5>
                <p className="text-sm mt-1 break-words"><strong>llm_response</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">The text response generated by the language model (LLM) based on the input context.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Column</h5>
                <p className="text-sm mt-1 break-words"><strong>confidence_score</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">The model's confidence level (if available). <code>NA</code> indicates not applicable.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Column</h5>
                <p className="text-sm mt-1 break-words"><strong>tokens</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Token statistics, including input tokens, output tokens, and total tokens processed.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Column</h5>
                <p className="text-sm mt-1 break-words"><strong>first token</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Time (in seconds) taken to generate the first token of the response.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Column</h5>
                <p className="text-sm mt-1 break-words"><strong>processing time</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Total time (in seconds) taken to process and return the complete response.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h4 id="2322-files-created">2.3.2.2 Files created</h4>

        <p>
          This section lists the output files generated by the <strong>Contract Analyzer Agent</strong>. Each file captures a distinct part of the analysis—ranging from visual diagrams to raw metadata and final summaries—making it easier to trace the agent's behavior and audit results.
        </p>

        <img src="/v1/agents/04_createdFiles.png" alt="Agent Output" />

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">File Name</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><code>agent_name.png</code></td>
              <td className="border border-border px-4 py-2">A visual representation (e.g., diagram or flowchart) of the contract analysis process or structure.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>agent_name_mermaid_chart.md</code></td>
              <td className="border border-border px-4 py-2">A markdown file containing a Mermaid.js chart definition that visually maps the agent’s workflow.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>agent_name.json</code></td>
              <td className="border border-border px-4 py-2">A structured JSON file containing the raw data or metadata extracted by the agent from the contract.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>agent_process_report_technical.docx</code></td>
              <td className="border border-border px-4 py-2">A detailed technical report describing the internal processing steps, models used, and outcomes.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>agent_name_take_aways.txt</code></td>
              <td className="border border-border px-4 py-2">A human-readable text summary highlighting key insights and findings from the contract.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>agent_name_take_aways.json</code></td>
              <td className="border border-border px-4 py-2">A structured version of the takeaways in JSON format for use in APIs, dashboards, or further parsing.</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">File Name</h5>
                <p className="text-sm mt-1 break-words"><code>agent_name.png</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">A visual representation (e.g., diagram or flowchart) of the contract analysis process or structure.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">File Name</h5>
                <p className="text-sm mt-1 break-words"><code>agent_name_mermaid_chart.md</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">A markdown file containing a Mermaid.js chart definition that visually maps the agent’s workflow.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">File Name</h5>
                <p className="text-sm mt-1 break-words"><code>agent_name.json</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">A structured JSON file containing the raw data or metadata extracted by the agent from the contract.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">File Name</h5>
                <p className="text-sm mt-1 break-words"><code>agent_process_report_technical.docx</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">A detailed technical report describing the internal processing steps, models used, and outcomes.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">File Name</h5>
                <p className="text-sm mt-1 break-words"><code>agent_name_take_aways.txt</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">A human-readable text summary highlighting key insights and findings from the contract.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">File Name</h5>
                <p className="text-sm mt-1 break-words"><code>agent_name_take_aways.json</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">A structured version of the takeaways in JSON format for use in APIs, dashboards, or further parsing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <blockquote data-type="important">
            <p>In the screenshots above and below, the name <code>contract_analyzer</code> is used (as mentioned before). This is because these outputs were generated while testing the Contract Analyzer Agent.</p>
        </blockquote>

        <h3 id="233-batch-run">2.3.3 Batch run</h3>

        <p>
          Batch Run allows multiple files to be selected at once as input to the agent.
        </p>

        <img src="/v1/agents/05_batchRun.png" alt="agents" />

        <p>
          More details about this feature are available in the <a href="/v1/agents/batch-processing">Batch Processing</a> documentation.
        </p>

        <h2 id="24-share-your-agent">2.4 Share your agent</h2>

        <p>
          The Share option in the agents interface allows an agent to be downloaded for sharing purposes.
        </p>

        <p>
          When this option is clicked, a <code>.zip</code> file will be created and made ready for download. The user can download the file and share the ZIP file by email or any file-sharing method. Another Model HQ user can then upload it by following the upload steps.
        </p>

        <p>
          When sharing agents, it’s recommended to include a Demo mode so others can easily see how the agent works and what it’s designed to do.
        </p>

        <img src="/v1/agents/06_share.png" alt="agents" />

        <h2 id="25-uploading-an-agent">2.5 Uploading an agent</h2>

        <p>
          The Upload option in the agents interface allows agents to be uploaded.
        </p>

        <img src="/v1/agents/07_upload.png" alt="agents" />

        <p>
          If a downloaded agent zip file is available, a custom agent can be created directly by uploading the zip file, and it will be automatically installed in the list of available agents with the option to edit it further.
        </p>

        <h2 id="26-agent-visual-builder">2.6 Agent visual builder</h2>

        <p>
          The Visual option in the agent interface allows a visual view of an agent to be quickly obtained, along with the ability to edit that agent.
        </p>

        <img src="/v1/agents/08_visual.png" alt="agents" />

        <p>
          A drag-and-drop based interface is provided that allows any new agent to be built or edited quickly.
        </p>

        <blockquote data-type="note">
            <p>Further information about this mode is available in the <a href="/v1/agents/agent-visual-builder">Agent Visual Builder</a> documentation.</p>
        </blockquote>

        <h2 id="conclusion">Conclusion</h2>

        <p>
          This document provided comprehensive guidance on the Agents interface in Model HQ, covering how to run, share, upload, and visualize agents within the platform. Agents represent automated workflows that combine document parsing, retrieval-augmented generation, language model inference, and structured output generation into repeatable, scalable processes. Pre-built agents such as Contract Analyzer, Customer Support, Financial Data Extractor, and Research Process demonstrate common use cases and serve as templates that can be customized to meet specific organizational requirements.
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