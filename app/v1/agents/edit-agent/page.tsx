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

export default function EditingAgentsInModelHqPage() {
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
              <BreadcrumbPage>Editing agents in Model HQ</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Editing agents in Model HQ</h1>
        </div>

        <div className="prose prose-gray max-w-none">
          <p>
            The <strong>Edit Agent</strong> feature in Model HQ lets you change and improve agents after they’ve been created. You can make simple updates or completely redesign how the workflow works.
          </p>

          <p>
            You can:
          </p>

          <ul>
            <li>Add or remove steps</li>
            <li>Add or remove files used in the agent process</li>
            <li>Change settings such as models</li>
            <li>Update outputs and formats</li>
          </ul>

          <p>
            This makes it easy to update agents as your needs change, without starting from scratch.
          </p>

          <p>
            There are two ways to edit an agent:
          </p>

          <ol>
            <li><strong>Step-by-step editor</strong></li>
            <ul>  
              <li>Shows the workflow as a simple list of steps</li>
              <li>Best for quick changes and precise control</li>
            </ul>
          </ol>

          <ol>
            <li><strong>Visual Builder</strong></li>
            <ul>
              <li>Shows the workflow as a diagram</li>
              <li>Best for visual understanding of the workflow</li>
            </ul>
          </ol>

          <p>
            Both views work on the same agent, so you can switch between them anytime.
          </p>

          <p>
            This guide will show you how to:
          </p>

          <ul>
            <li>Open and use the Edit interface</li>
            <li>Understand key sections like inputs, outputs, and settings</li>
            <li>Use action buttons (like Run, Files, Reports, and Controls)</li>
            <li>Edit workflows using the Visual Builder</li>
          </ul>

          <p>
            Learning how to edit agents is important for keeping them up to date, improving performance, and reusing them for different use cases.
          </p>

          <h2 id="1-launching-the-edit-interface">1. Launching the edit interface</h2>

          <p>
            Editing an existing agent process is straightforward in Model HQ.
          </p>

          <p>
            The agent to be edited should be selected from the dropdown, and the edit button can be clicked.
          </p>

          <img src="/v1/agents/editAgent/01_editInterface.png" alt="edit" />

          <p>
            Once clicked, an option to use the Visual Builder for editing the agent will be presented.
          </p>

          <img src="/v1/agents/editAgent/02_visualBuilder.png" alt="edit" />

          <p>
            The Visual Builder shows your agent as a node-and-connection diagram, making it easy to see how steps are linked and how data flows through the workflow.
          </p>

          <p>
            When you make changes in the Visual Builder, you’ll still review everything in a step-by-step format before saving, so you can clearly confirm the final sequence.
          </p>

          <p>
            For editing, the step-based editor can be the easiest and fastest option—it makes it simple to add, remove, or adjust individual steps (by adding or deleting rows) without navigating a visual layout.
          </p>

          <p>
            The choice between the two editing modes is entirely optional. If detailed information about the Visual Builder is required, the <a href="/v1/agents/agent-visual-builder" className="text-blue-600 dark:text-blue-400 hover:underline">Agent Visual Builder Mode</a> documentation should be consulted.
          </p>

          <p>
            Both editing approaches will be covered in this document. The step-based editor (without Visual Builder) will be explained first.
          </p>

          <h2 id="2-editing-an-agent-without-visual-builder">2. Editing an agent (without visual builder)</h2>

          <p>
            This section explains how agents can be edited using the step-based editor. An agent is defined as a linear sequence of steps where each step connects a service, an instruction, and a context. Execution always happens sequentially from the first step to END.
          </p>

          <img src="/v1/agents/editAgent/03_editingAgent.png" alt="edit" />

          <h3 id="21-details-view">2.1 Details view</h3>

          <p>
            The <strong>Details</strong> view is collapsible by default and provides a high-level, read-only overview of the agent.
          </p>

          <p>
            The view includes:
          </p>

          <ul>
            <li>A flowchart visualizing the complete execution path from Start to End</li>
            <li>A numbered list of steps showing the order of execution</li>
            <li>A short description of what each step performs</li>
          </ul>

          <p>
            This view is primarily used to understand the agent flow without modifying it.
          </p>

          <h3 id="22-agent-legend">2.2 Agent legend</h3>

          <p>
            The <strong>Agent Legend</strong> appears below the Details view and summarizes all key components used by the agent.
          </p>

          <p>
            The legend includes:
          </p>

          <ul>
            <li><strong>User Inputs</strong> such as text input or image input</li>
            <li><strong>Contexts</strong> including files, tables, parsed documents, and intermediate outputs</li>
            <li><strong>Named Variables</strong> created during execution and reused across steps</li>
          </ul>

          <p>
            Named variables must be referenced inside instructions using <code>{'{{variable_name}}'}</code>.
          </p>

          <p>
            This section helps track how data moves through the agent.
          </p>

          <h3 id="23-editing-steps">2.3 Editing steps</h3>

          <p>
            Each row in the Agent Builder represents a single step. Each step can be deleted by clicking on the "-" in the same row. A step or a row will be created directly <strong>after</strong> the current row by clicking "+" to add a step.
          </p>

          <p>
            The number next to the context column connotes the numbered order of the agent step. This is helpful when referencing that particular step in the agent process in a future agentic step.
          </p>

          <p>
            Every step is composed of:
          </p>

          <ul>
            <li><strong>Service</strong> Selects the capability used in that step. There is an extensive list of supported services. The services displayed in Service Name depends on the selection in the <em>services</em> button at the bottom of the Step-Based editor or the side nav of the Visual Editor. User must check the service name in order for that particular service to be displayed as an option.</li>
          </ul>

          <ul>
            <li><strong>Instruction</strong> A natural language instruction describing what the service should do. (note: some services do not require any input and will be denoted as such) Instructions may also reference named variables <code>{'{{variable_name}}'}</code> (i.e., the result of an earlier step in an agent process).</li>
          </ul>

          <ul>
            <li><strong>Context</strong> Defines the input source used by the service.</li>
          </ul>

          <p>
            Steps are always executed from top to bottom in the order shown.
          </p>

          <p>
            Below is the list of supported services, their expected instruction formats, descriptions, and applicable context sources.
          </p>

          <h3 id="24-example-ac-field-tech-support-agent">2.4 Example: AC field tech support agent</h3>

          <p>
            The example below demonstrates an <strong>AC Field Tech Support</strong> agent configured with <strong>8 sequential steps</strong>.
          </p>

          <h4 id="241-step-based-execution-flow">2.4.1 Step-based execution flow</h4>

          <p>
            The agent executes steps from top to bottom. Each step can produce outputs that are reused in later steps using named variables.
          </p>

          <p>
            Execution order in this example:
          </p>

          <ul>
            <li>Build structured data from CSV</li>
            <li>Read information from an image</li>
            <li>Extract a specific value</li>
            <li>Query structured data</li>
            <li>Query structured data again using a variable</li>
            <li>Parse a technical document</li>
            <li>Answer a question using retrieved context</li>
            <li>End the process</li>
          </ul>

          <h3 id="25-action-buttons">2.5 Action buttons</h3>

          <p>
            The Action Buttons provide quick access to configure inputs, manage files, execute the agent, inspect metadata, review outputs, and control the overall agent lifecycle. Each button opens a focused view related to a specific stage of the agent workflow.
          </p>

          <h4 id="251-visual-editor">2.5.1 Visual editor</h4>

          <p>
            The <strong>Visual Editor</strong> opens the drag-and-drop canvas used to build and edit the agent workflow.
          </p>

          <p>
            This interface opens the visual builder, where you can:
          </p>

          <ul>
            <li>Nodes can be added, connected, and reordered</li>
            <li>Services and inputs can be configured</li>
            <li>Execution flow can be visually inspected</li>
          </ul>

          <h4 id="252-run">2.5.2 Run</h4>

          <p>
            The <strong>Run</strong> action executes a test run of the agent using the currently configured inputs, files, and workflow.
          </p>

          <p>
            During execution:
          </p>

          <ul>
            <li>Nodes are executed sequentially from top to bottom</li>
            <li>Intermediate outputs are generated and stored as named variables</li>
            <li>Any configuration or logic issues surface immediately during the run</li>
          </ul>

          <p>
            This mode is primarily used for validation, debugging, and iteration before publishing or sharing the agent.
          </p>

          <h4 id="253-inputs">2.5.3 Inputs</h4>

          <p>
            The <strong>Inputs</strong> button can be used to configure or update the user inputs required to run the agent.
          </p>

          <p>
            Supported input types:
          </p>

          <ul>
            <li><code>MAIN-INPUT</code> – primary text input</li>
            <li><code>User-Document</code> – documents in various formats</li>
            <li><code>User-Image</code> – image files such as PNG or JPG</li>
            <li><code>User-Table</code> – structured data like CSV or JSON</li>
            <li><code>User-Source</code> – a collection of multiple files treated as one source</li>
            <li><code>User-Text</code> – short text snippets</li>
            <li><code>None</code> – no user input required</li>
          </ul>

          <p>
            Selecting the correct inputs is critical. The user must provide values for all selected input types when running the agent. By default, <code>MAIN-INPUT (text)</code> is enabled.
          </p>

          <p>
            Input-specific notes:
          </p>

          <ul>
            <li><strong>MAIN-INPUT (text)</strong> Free-form text can be pasted into a text field. The current limit is 5000 characters, roughly two pages of text.</li>
          </ul>

          <ul>
            <li><strong>User-Document</strong> Used for larger documents. These must be processed first using the <code>parse_document</code> service before being used by downstream services such as <code>rag_answer</code>, <code>semantic_filter</code>, or <code>create_context</code>.</li>
          </ul>

          <ul>
            <li><strong>User-Table</strong> Accepts CSV or JSON files. Tables must first be processed with the <code>build_table</code> service to extract data and store it in a local SQL table. Once built, the table can be queried using <code>query_custom_table</code>.</li>
          </ul>

          <p>
            Typical flow:
          </p>

          <ol>
          </ol>

          <ul>
            <li><strong>User-Image</strong> Image files such as PNG or JPEG. Images must first be processed with the <code>vision</code> service, which converts visual content into text-based output that can be reused by later steps.</li>
          </ul>

          <ul>
            <li><strong>User-Text</strong> Optional secondary context provided by the user.</li>
          </ul>

          <ul>
            <li><strong>User-Source</strong> Allows users to upload multiple files as a single object. Parsing, table building, and vision processing are handled automatically. For best results, it is recommended to apply <code>semantic_filter</code> and <code>create_context</code> early in the workflow.</li>
          </ul>

          <h4 id="254-files">2.5.4 Files</h4>

          <p>
            The <strong>Files</strong> section is used to upload, manage, and associate assets with the agent.
          </p>

          <img src="/v1/agents/editAgent/03_2files.png" alt="edit" />

          <p>
            Capabilities include:
          </p>

          <ul>
            <li>Uploading documents, images, tables, datasets, or zipped sources</li>
            <li>Assigning file types such as document, image, dataset, table, or source</li>
            <li>Reusing existing datasets or sources already available in the workspace</li>
          </ul>

          <p>
            Uploaded files become available as contexts that can be selected by agent services such as <code>parse_document</code>, <code>build_table</code>, or <code>vision</code>. Multiple files can be added before saving and exiting.
          </p>

          <h4 id="255-meta">2.5.5 Meta</h4>

          <p>
            The <strong>Meta</strong> section allows descriptive and presentation-related information for the agent to be defined.
          </p>

          <img src="/v1/agents/editAgent/03_4meta.png" alt="edit" />

          <p>
            This typically includes:
          </p>

          <ul>
            <li>A short description of what the agent does</li>
            <li>Optional demo links</li>
            <li>A user-facing image associated with the agent</li>
          </ul>

          <p>
            Meta information does not affect execution but is used for documentation, discovery, and presentation.
          </p>

          <h4 id="256-outputs">2.5.6 Outputs</h4>

          <p>
            The <strong>Outputs</strong> section controls what the agent returns after execution.
          </p>

          <img src="/v1/agents/editAgent/03_5outputs.png" alt="edit" />

          <p>
            Options include:
          </p>

          <ul>
            <li>Standard or custom output selection</li>
            <li>JSON or text-based output formats</li>
            <li>Selecting specific variables, contexts, or intermediate results to expose</li>
          </ul>

          <p>
            This allows fine-grained control over what consumers of the agent actually receive, rather than returning all internal state by default.
          </p>

          <h4 id="257-reports">2.5.7 Reports</h4>

          <p>
            The <strong>Reports</strong> section controls how agent execution results are packaged into structured, downloadable documents for different audiences such as business users, engineers, or compliance reviewers.
          </p>

          <img src="/v1/agents/editAgent/03_6reports.png" alt="edit" />

          <p>
            One or more report types can be generated simultaneously:
          </p>

          <ul>
            <li><strong>Business</strong> – high-level summaries focused on outcomes and insights</li>
            <li><strong>Technical</strong> – detailed execution logs and system behavior for debugging</li>
            <li><strong>Compliance</strong> – safety, audit, and governance records</li>
          </ul>

          <p>
            Each report type allows selection of which elements should be included:
          </p>

          <ul>
            <li><code>report</code> – final results or conclusions</li>
            <li><code>research_list</code> – sources or references used during execution</li>
            <li><code>response_list</code> – responses generated by each node or step</li>
            <li><code>safety_record</code> – redactions, filters, and control actions applied</li>
            <li><code>usage_history</code> – token usage, runtime, and performance statistics</li>
            <li><code>inference_history</code> – model calls and inference details</li>
            <li><code>scratch_pad</code> – shared state and intermediate variables</li>
            <li><code>journal</code> – chronological execution log</li>
            <li><code>process_map</code> – visual representation of the workflow</li>
            <li><code>tool_list</code> – tools and services used</li>
            <li><code>report_commentary</code> – optional notes or annotations</li>
          </ul>

          <p>
            Output formats:
          </p>

          <ul>
            <li><strong>Word (.docx)</strong> – formatted and presentation-ready</li>
            <li><strong>Text (.txt)</strong> – plain logs or lightweight exports</li>
          </ul>

          <p>
            Reports can be regenerated at any time after a run.
          </p>

          <h4 id="258-controls">2.5.8 Controls</h4>

          <p>
            The <strong>Controls</strong> section applies safety, privacy, and content protections automatically during agent execution. These safeguards help prevent sensitive data exposure, unsafe outputs, and malicious inputs without requiring changes to the workflow itself.
          </p>

          <img src="/v1/agents/editAgent/03_7controls.png" alt="edit" />

          <p>
            <strong>Pattern redaction</strong>
            <br />
            Sensitive data is automatically detected and masked before it is processed.
          </p>

          <p>
            Supported patterns include:
          </p>

          <ul>
            <li>SSN</li>
            <li>ABA routing numbers</li>
            <li>Email</li>
            <li>Credit card</li>
            <li>Driver’s license</li>
            <li>Passport</li>
            <li>Dates</li>
            <li>IBAN</li>
            <li>PAN</li>
            <li>URLs</li>
            <li>Crypto addresses</li>
            <li>Phone numbers</li>
          </ul>

          <p>
            Detected values are redacted or replaced automatically.
          </p>

          <p>
            <strong>Classifier tests</strong>
            <br />
            Automated content checks are applied:
          </p>

          <ul>
            <li><code>prompt_injection_detection</code> – blocks malicious or manipulative prompts</li>
            <li><code>toxic_detection</code> – flags unsafe or harmful language</li>
            <li><code>language_detection</code> – identifies the language of the input</li>
            <li><code>bias_detection</code> – detects potentially biased or sensitive content</li>
          </ul>

          <p>
            <strong>Exclusion list</strong>
            <br />
            Custom words or phrases (comma-separated) can be specified to be blocked or ignored during execution.
          </p>

          <h4 id="259-services">2.5.9 Services</h4>

          <p>
            The <strong>Services</strong> section is the service catalog for the agent. It determines which capabilities are available when building workflows. Only enabled services can be added as nodes.
          </p>

          <img src="/v1/agents/editAgent/03_8services.png" alt="edit" />

          <p>
            <strong>Core services</strong>
            <br />
            General building blocks for common tasks such as chat, retrieval, extraction, and logic control.
          </p>

          <p>
            Examples:
          </p>

          <ul>
            <li><code>chat</code> – conversational responses</li>
            <li><code>rag_answer</code> – retrieval-augmented answers</li>
            <li><code>vision</code> – image understanding</li>
            <li><code>ocr</code> – text extraction from images</li>
            <li><code>web_search</code> – online search retrieval</li>
            <li><code>extract</code> – structured field extraction</li>
            <li><code>answer</code> – direct question answering</li>
            <li><code>prompt_builder</code> – dynamic prompt creation</li>
            <li><code>agent_report</code> – report generation</li>
            <li><code>embedded_bot</code> – embedded execution</li>
            <li><code>condition</code> – branching logic</li>
            <li><code>boolean</code> – rule evaluation</li>
          </ul>

          <p>
            <strong>Classifiers</strong>
            <br />
            Lightweight text analysis tools for labeling or scoring content.
          </p>

          <ul>
            <li>sentiment – positive/negative tone detection</li>
            <li>emotions – emotional classification</li>
            <li>topics – topic categorization</li>
            <li>tags – keyword tagging</li>
            <li>intent – intent recognition</li>
            <li>ratings – scoring or grading</li>
            <li>ner – named entity recognition</li>
            <li>summary – concise text summaries</li>
            <li>category – predefined grouping</li>
            <li>q_gen – question generation</li>
          </ul>

          <p>
            <strong>Datasets</strong>
            <br />
            Tools for preparing, querying, and analyzing structured data.
          </p>

          <ul>
            <li>select_keys - selects specified keys from a JSON dictionary</li>
            <li>build_dataset – create datasets from JSON</li>
            <li>ds_command_filter - applies filter commands to a dataset</li>
            <li>ds_column_filter - keep rows where a selected column meets your condition</li>
            <li>ds_quick_stats – generates a statistical report based on selected column</li>
            <li>ds_column_analysis - generates a report based on selected column</li>
            <li>ds_report - generate a report of the dataset and the workflow results based on the agent run</li>
            <li>ds_column_select - returns the selcted column from the dataset</li>
            <li>ds_ask_dataset - use a natural language question to retrieve relevant information from the dataset</li>
            <li>ds_readout - returns the text from a set of rows from the dataset for display</li>
            <li>ds_smart_filter – find rows that match the meaning of your query</li>
            <li>ds_keyword_filter - filter rows based on exact text matches in the selected column</li>
            <li>dataset_plot – visualize data</li>
            <li>ds_statistics – perform deeper statistical analysis and generate insights</li>
            <li>load_dataset – load saved datasets</li>
            <li>create_json – provide a list of agent keys to consolidate into a new JSON dictionary</li>
            <li>ds_stat_analysis - generate statistical analysis of input data csv file</li>
          </ul>

          <p>
            <strong>Specialized services</strong>
            <br />
            Advanced utilities for targeted or complex workflows.
          </p>

          <ul>
            <li>build_table - create table from CSV data</li>
            <li>query_custom_table - database look-up in natural language</li>
            <li>json_extractor - converts a text chunk with embedded json into a structured dataset element</li>
            <li>semantic_filter – meaning-based filtering</li>
            <li>text_filter – rule-based text filtering</li>
            <li>document_filter – document-level filtering</li>
            <li>table_filter – structured table filtering</li>
            <li>load_kb - load knowledge base into agent state used in 'ask_kb' calls</li>
            <li>ds_ask_kb - answers knowledge base questions from a dataset input</li>
            <li>transformer – text transformation tasks</li>
            <li>aggregate_context - provide a list of context names to consolidate</li>
            <li>parse_document – convert documents to text files</li>
            <li>create_context – build reusable context blocks from the most relevant passages in a source based on query</li>
            <li>report_commentary – generate commentary of key process results from the agent-state - no input context required</li>
            <li>speech_gen – generate audio output from text</li>
            <li>image_gen – generate images from text</li>
            <li>get_stock_summary - stock ticker look-up (requires internet access)</li>
            <li>speech - transcribe a speech file</li>
            <li>speech_batch - transcribe a collection of speec</li>
            <li>vision_batch - answer question based on a collection of image files</li>
            <li>parse_batch - create source from document batch</li>
            <li>extract_tiny - extracts a key-value pair</li>
            <li>website_scraper – extract web content from allowed websites (note: many websites prevent this)</li>
            <li>extract_table – extract tables from documents based on query</li>
          </ul>

          <p>
            <strong>Integrations</strong>
            <br />
            Connect the agent to external systems or hosted models.
          </p>

          <p>
            Examples include storage services, email, and external model providers.
          </p>

          <p>
            <strong>Custom services</strong>
            <br />
            Workspace-specific or user-defined services added for specialized use cases.
          </p>

          <p>
          Below is the list of supported services, their expected instruction formats, descriptions, and applicable context sources.
        </p>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Service Name</th>
              <th className="border border-border px-4 py-2 text-left">Instruction</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
              <th className="border border-border px-4 py-2 text-left">Context</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><strong>chat</strong></td>
              <td className="border border-border px-4 py-2">What is your question or instruction?</td>
              <td className="border border-border px-4 py-2">Answers a question or performs instruction</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code>, <code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>rag_batch</strong></td>
              <td className="border border-border px-4 py-2">Enter question or instruction</td>
              <td className="border border-border px-4 py-2">Performs RAG over batch of documents</td>
              <td className="border border-border px-4 py-2"><code>User-Document</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>rag_answer</strong></td>
              <td className="border border-border px-4 py-2">Ask question to longer document input</td>
              <td className="border border-border px-4 py-2">Answers a question based on a longer document input</td>
              <td className="border border-border px-4 py-2"><code>User-Source</code>, <code>Provide_instruction_or_query</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>vision</strong></td>
              <td className="border border-border px-4 py-2">Enter question to image file</td>
              <td className="border border-border px-4 py-2">Provides answer/description from image</td>
              <td className="border border-border px-4 py-2"><code>User-Image</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ocr_vision</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Performs OCR + vision-based understanding</td>
              <td className="border border-border px-4 py-2"><code>User-Document</code>, <code>User-Image</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ocr</strong></td>
              <td className="border border-border px-4 py-2">Enter name of new document source</td>
              <td className="border border-border px-4 py-2">Extracts content from image-based or protected documents</td>
              <td className="border border-border px-4 py-2"><code>User-Document</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>agent_report</strong></td>
              <td className="border border-border px-4 py-2">Enter title for agent report</td>
              <td className="border border-border px-4 py-2">Prepares report on agent output</td>
              <td className="border border-border px-4 py-2"><code>-</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>wikipedia_search</strong></td>
              <td className="border border-border px-4 py-2">Add Wikipedia Articles as Research Context</td>
              <td className="border border-border px-4 py-2">Adds Wikipedia articles as research context</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>prompt_builder</strong></td>
              <td className="border border-border px-4 py-2">Enter prompt instruction</td>
              <td className="border border-border px-4 py-2">Builds structured prompts</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>embedded_bot</strong></td>
              <td className="border border-border px-4 py-2">Optional</td>
              <td className="border border-border px-4 py-2">Pauses execution for user interaction</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>condition</strong></td>
              <td className="border border-border px-4 py-2">Enter expression</td>
              <td className="border border-border px-4 py-2">Evaluates logical condition</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>web_search</strong></td>
              <td className="border border-border px-4 py-2">Add query</td>
              <td className="border border-border px-4 py-2">Performs web search and returns structured results</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>boolean</strong></td>
              <td className="border border-border px-4 py-2">Provide yes/no question</td>
              <td className="border border-border px-4 py-2">Provides yes/no answer with explanation</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>extract</strong></td>
              <td className="border border-border px-4 py-2">Enter extraction key</td>
              <td className="border border-border px-4 py-2">Extracts key-value pair</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>answer</strong></td>
              <td className="border border-border px-4 py-2">What is your question?</td>
              <td className="border border-border px-4 py-2">Answers specific question from passage</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>sentiment</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Analyzes sentiment</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>emotions</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Analyzes emotion</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>topics</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Classifies topic</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>tags</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Generates tags</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>intent</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Classifies intent</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ratings</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Rates positivity (1–5)</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ner</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Named entity recognition</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>xsum</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Generates extreme summary</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>summary</strong></td>
              <td className="border border-border px-4 py-2">Optional</td>
              <td className="border border-border px-4 py-2">Summarizes content</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>category</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Classifies category</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>q_gen</strong></td>
              <td className="border border-border px-4 py-2">No instruction required</td>
              <td className="border border-border px-4 py-2">Generates questions</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>build_dataset</strong></td>
              <td className="border border-border px-4 py-2">Enter dataset name</td>
              <td className="border border-border px-4 py-2">Create datasets from JSON</td>
              <td className="border border-border px-4 py-2"><code>JSON Input</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>select_keys</strong></td>
              <td className="border border-border px-4 py-2">Enter keys</td>
              <td className="border border-border px-4 py-2">Select specified keys from a JSON dictionary</td>
              <td className="border border-border px-4 py-2"><code>JSON Input</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>dataset_plot</strong></td>
              <td className="border border-border px-4 py-2">Enter visualization instruction</td>
              <td className="border border-border px-4 py-2">Visualize dataset</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>load_dataset</strong></td>
              <td className="border border-border px-4 py-2">Enter dataset name</td>
              <td className="border border-border px-4 py-2">Load saved datasets</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>create_json</strong></td>
              <td className="border border-border px-4 py-2">Enter keys list</td>
              <td className="border border-border px-4 py-2">Consolidate agent keys into JSON dictionary</td>
              <td className="border border-border px-4 py-2"><code>Agent-State</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_command_filter</strong></td>
              <td className="border border-border px-4 py-2">Enter filter command</td>
              <td className="border border-border px-4 py-2">Applies filter commands to a dataset</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_column_filter</strong></td>
              <td className="border border-border px-4 py-2">Enter column condition</td>
              <td className="border border-border px-4 py-2">Keep rows where a selected column meets condition</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_quick_stats</strong></td>
              <td className="border border-border px-4 py-2">Select column</td>
              <td className="border border-border px-4 py-2">Generate statistical report based on column</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_column_analysis</strong></td>
              <td className="border border-border px-4 py-2">Select column</td>
              <td className="border border-border px-4 py-2">Generate report based on selected column</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_report</strong></td>
              <td className="border border-border px-4 py-2">No instruction</td>
              <td className="border border-border px-4 py-2">Generate dataset + workflow report</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_column_select</strong></td>
              <td className="border border-border px-4 py-2">Select column</td>
              <td className="border border-border px-4 py-2">Return selected column from dataset</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_ask_dataset</strong></td>
              <td className="border border-border px-4 py-2">Enter query</td>
              <td className="border border-border px-4 py-2">Query dataset using natural language</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_readout</strong></td>
              <td className="border border-border px-4 py-2">Enter row range</td>
              <td className="border border-border px-4 py-2">Return text from selected rows</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_smart_filter</strong></td>
              <td className="border border-border px-4 py-2">Enter query</td>
              <td className="border border-border px-4 py-2">Semantic dataset filtering</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_keyword_filter</strong></td>
              <td className="border border-border px-4 py-2">Enter keyword</td>
              <td className="border border-border px-4 py-2">Exact keyword filtering</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_statistics</strong></td>
              <td className="border border-border px-4 py-2">No instruction</td>
              <td className="border border-border px-4 py-2">Perform deeper statistical analysis</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_stat_analysis</strong></td>
              <td className="border border-border px-4 py-2">No instruction</td>
              <td className="border border-border px-4 py-2">Statistical analysis of CSV dataset</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>build_table</strong></td>
              <td className="border border-border px-4 py-2">Enter table name</td>
              <td className="border border-border px-4 py-2">Create table from CSV data</td>
              <td className="border border-border px-4 py-2"><code>User-Table</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>query_custom_table</strong></td>
              <td className="border border-border px-4 py-2">Enter query</td>
              <td className="border border-border px-4 py-2">Database lookup in natural language</td>
              <td className="border border-border px-4 py-2"><code>Table Output</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>json_extractor</strong></td>
              <td className="border border-border px-4 py-2">Enter schema</td>
              <td className="border border-border px-4 py-2">Convert embedded JSON text into structured dataset element</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>semantic_filter</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Meaning-based filtering</td>
              <td className="border border-border px-4 py-2"><code>User-Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>text_filter</strong></td>
              <td className="border border-border px-4 py-2">Enter keyword/topic</td>
              <td className="border border-border px-4 py-2">Rule-based filtering</td>
              <td className="border border-border px-4 py-2"><code>User-Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>document_filter</strong></td>
              <td className="border border-border px-4 py-2">Enter document name</td>
              <td className="border border-border px-4 py-2">Document-level filtering</td>
              <td className="border border-border px-4 py-2"><code>User-Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>table_filter</strong></td>
              <td className="border border-border px-4 py-2">No instruction</td>
              <td className="border border-border px-4 py-2">Structured table filtering</td>
              <td className="border border-border px-4 py-2"><code>User-Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>load_kb</strong></td>
              <td className="border border-border px-4 py-2">Enter KB name</td>
              <td className="border border-border px-4 py-2">Load knowledge base into agent state</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>ds_ask_kb</strong></td>
              <td className="border border-border px-4 py-2">Enter query</td>
              <td className="border border-border px-4 py-2">Answer KB questions from dataset input</td>
              <td className="border border-border px-4 py-2"><code>Dataset</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>transformer</strong></td>
              <td className="border border-border px-4 py-2">Choose input</td>
              <td className="border border-border px-4 py-2">Text/data transformation tasks</td>
              <td className="border border-border px-4 py-2"><code>Agent-State</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>aggregate_context</strong></td>
              <td className="border border-border px-4 py-2">Enter context names</td>
              <td className="border border-border px-4 py-2">Consolidate multiple contexts</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>parse_document</strong></td>
              <td className="border border-border px-4 py-2">Enter name</td>
              <td className="border border-border px-4 py-2">Convert documents to text</td>
              <td className="border border-border px-4 py-2"><code>User-Document</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>create_context</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Build reusable context blocks from relevant passages</td>
              <td className="border border-border px-4 py-2"><code>User-Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>report_commentary</strong></td>
              <td className="border border-border px-4 py-2">Optional</td>
              <td className="border border-border px-4 py-2">Generate commentary from agent state</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>speech_gen</strong></td>
              <td className="border border-border px-4 py-2">Enter text</td>
              <td className="border border-border px-4 py-2">Generate audio output from text</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>image_gen</strong></td>
              <td className="border border-border px-4 py-2">Enter description</td>
              <td className="border border-border px-4 py-2">Generate images from text</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>get_stock_summary</strong></td>
              <td className="border border-border px-4 py-2">Enter ticker</td>
              <td className="border border-border px-4 py-2">Stock lookup</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>speech</strong></td>
              <td className="border border-border px-4 py-2">Enter input</td>
              <td className="border border-border px-4 py-2">Transcribe a speech file</td>
              <td className="border border-border px-4 py-2"><code>Audio Input</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>speech_batch</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Transcribe collection of speech files</td>
              <td className="border border-border px-4 py-2"><code>Audio Batch</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>vision_batch</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Answer questions from multiple images</td>
              <td className="border border-border px-4 py-2"><code>User-Document</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>parse_batch</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Create source from document batch</td>
              <td className="border border-border px-4 py-2"><code>User-Document</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>extract-tiny</strong></td>
              <td className="border border-border px-4 py-2">Enter key</td>
              <td className="border border-border px-4 py-2">Extract key-value pair (lightweight)</td>
              <td className="border border-border px-4 py-2"><code>MAIN-INPUT</code>, <code>User-Text</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>website_scraper</strong></td>
              <td className="border border-border px-4 py-2">Enter URL</td>
              <td className="border border-border px-4 py-2">Extract web content from allowed websites</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>extract_table</strong></td>
              <td className="border border-border px-4 py-2">Enter query</td>
              <td className="border border-border px-4 py-2">Extract tables from documents</td>
              <td className="border border-border px-4 py-2"><code>User-Document</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>push_to_s3</strong></td>
              <td className="border border-border px-4 py-2">Enter path</td>
              <td className="border border-border px-4 py-2">Upload data to S3</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>pull_from_s3</strong></td>
              <td className="border border-border px-4 py-2">Enter path</td>
              <td className="border border-border px-4 py-2">Download data from S3</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>connect_library</strong></td>
              <td className="border border-border px-4 py-2">Enter library name</td>
              <td className="border border-border px-4 py-2">Connect to semantic library</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>query_library</strong></td>
              <td className="border border-border px-4 py-2">Enter query</td>
              <td className="border border-border px-4 py-2">Query semantic library</td>
              <td className="border border-border px-4 py-2"><code>Library Context</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>get_quote</strong></td>
              <td className="border border-border px-4 py-2">Enter symbol</td>
              <td className="border border-border px-4 py-2">Retrieve stock quote</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>get_company_financials</strong></td>
              <td className="border border-border px-4 py-2">Enter company/ticker</td>
              <td className="border border-border px-4 py-2">Retrieve financial data</td>
              <td className="border border-border px-4 py-2"><code>None</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>send_email</strong></td>
              <td className="border border-border px-4 py-2">Enter email</td>
              <td className="border border-border px-4 py-2">Send email</td>
              <td className="border border-border px-4 py-2"><code>Select context</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>openai_chat</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">OpenAI chat completion</td>
              <td className="border border-border px-4 py-2"><code>Text Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>openai_rag</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">OpenAI RAG query</td>
              <td className="border border-border px-4 py-2"><code>Text Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>openai_rag_batch</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">OpenAI batch RAG</td>
              <td className="border border-border px-4 py-2"><code>Text Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>anthropic_chat</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Anthropic chat completion</td>
              <td className="border border-border px-4 py-2"><code>Text Source</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>gemini_chat</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Gemini chat completion</td>
              <td className="border border-border px-4 py-2"><code>Text Source</code></td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>chat</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">What is your question or instruction?</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Answers a question or performs instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code>, <code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>rag_batch</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter question or instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Performs RAG over batch of documents</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Document</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>rag_answer</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Ask question to longer document input</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Answers a question based on a longer document input</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Source</code>, <code>Provide_instruction_or_query</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>vision</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter question to image file</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Provides answer/description from image</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Image</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ocr_vision</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Performs OCR + vision-based understanding</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Document</code>, <code>User-Image</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ocr</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter name of new document source</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Extracts content from image-based or protected documents</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Document</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>agent_report</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter title for agent report</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Prepares report on agent output</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>-</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>wikipedia_search</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Add Wikipedia Articles as Research Context</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Adds Wikipedia articles as research context</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>prompt_builder</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter prompt instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Builds structured prompts</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>embedded_bot</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Optional</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Pauses execution for user interaction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>condition</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter expression</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Evaluates logical condition</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>web_search</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Add query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Performs web search and returns structured results</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>boolean</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Provide yes/no question</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Provides yes/no answer with explanation</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>extract</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter extraction key</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Extracts key-value pair</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>answer</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">What is your question?</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Answers specific question from passage</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>sentiment</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Analyzes sentiment</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>emotions</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Analyzes emotion</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>topics</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Classifies topic</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>tags</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generates tags</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>intent</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Classifies intent</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ratings</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Rates positivity (1–5)</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ner</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Named entity recognition</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>xsum</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generates extreme summary</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>summary</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Optional</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Summarizes content</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>category</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Classifies category</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>q_gen</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction required</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generates questions</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>build_dataset</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter dataset name</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Create datasets from JSON</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>JSON Input</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>select_keys</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter keys</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Select specified keys from a JSON dictionary</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>JSON Input</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>dataset_plot</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter visualization instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Visualize dataset</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>load_dataset</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter dataset name</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Load saved datasets</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>create_json</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter keys list</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Consolidate agent keys into JSON dictionary</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Agent-State</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_command_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter filter command</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Applies filter commands to a dataset</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_column_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter column condition</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Keep rows where a selected column meets condition</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_quick_stats</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Select column</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generate statistical report based on column</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_column_analysis</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Select column</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generate report based on selected column</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_report</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generate dataset + workflow report</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_column_select</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Select column</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Return selected column from dataset</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_ask_dataset</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Query dataset using natural language</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_readout</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter row range</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Return text from selected rows</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_smart_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Semantic dataset filtering</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_keyword_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter keyword</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Exact keyword filtering</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_statistics</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Perform deeper statistical analysis</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_stat_analysis</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Statistical analysis of CSV dataset</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>build_table</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter table name</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Create table from CSV data</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Table</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>query_custom_table</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Database lookup in natural language</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Table Output</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>json_extractor</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter schema</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Convert embedded JSON text into structured dataset element</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>semantic_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Meaning-based filtering</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>text_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter keyword/topic</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Rule-based filtering</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>document_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter document name</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Document-level filtering</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>table_filter</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">No instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Structured table filtering</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>load_kb</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter KB name</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Load knowledge base into agent state</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>ds_ask_kb</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Answer KB questions from dataset input</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Dataset</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>transformer</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Choose input</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Text/data transformation tasks</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Agent-State</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>aggregate_context</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter context names</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Consolidate multiple contexts</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>parse_document</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter name</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Convert documents to text</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Document</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>create_context</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Build reusable context blocks from relevant passages</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>report_commentary</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Optional</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generate commentary from agent state</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>speech_gen</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter text</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generate audio output from text</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>image_gen</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter description</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generate images from text</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>get_stock_summary</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter ticker</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Stock lookup</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>speech</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter input</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Transcribe a speech file</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Audio Input</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>speech_batch</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Transcribe collection of speech files</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Audio Batch</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>vision_batch</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Answer questions from multiple images</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Document</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>parse_batch</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Create source from document batch</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Document</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>extract-tiny</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter key</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Extract key-value pair (lightweight)</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>MAIN-INPUT</code>, <code>User-Text</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>website_scraper</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter URL</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Extract web content from allowed websites</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>extract_table</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Extract tables from documents</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>User-Document</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>push_to_s3</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter path</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Upload data to S3</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>pull_from_s3</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter path</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Download data from S3</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>connect_library</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter library name</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Connect to semantic library</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>query_library</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Query semantic library</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Library Context</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>get_quote</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter symbol</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Retrieve stock quote</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>get_company_financials</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter company/ticker</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Retrieve financial data</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>None</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>send_email</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter email</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Send email</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Select context</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>openai_chat</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">OpenAI chat completion</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Text Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>openai_rag</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">OpenAI RAG query</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Text Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>openai_rag_batch</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">OpenAI batch RAG</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Text Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>anthropic_chat</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Anthropic chat completion</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Text Source</code></p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service Name</h5>
                <p className="text-sm mt-1 break-words"><strong>gemini_chat</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Instruction</h5>
                <p className="text-sm mt-1 break-words">Enter instruction</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Gemini chat completion</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Context</h5>
                <p className="text-sm mt-1 break-words"><code>Text Source</code></p>
              </div>
            </div>
          </div>
        </div>

          <h4 id="2510-json-editor">2.5.10 JSON editor</h4>

          <p>
            The <strong>JSON Editor</strong> displays the complete agent configuration in raw JSON format.
          </p>

          <p>
            This view shows the full structure of the agent, including services, nodes, inputs, contexts, and execution settings, allowing precise inspection and modification of how the workflow is defined.
          </p>

          <img src="/v1/agents/editAgent/03_11jsonEditor.png" alt="edit" />

          <p>
            Common sections include:
          </p>

          <ul>
            <li><code>service</code> – service assigned to each node</li>
            <li><code>node</code> – execution order</li>
            <li><code>process_inputs</code> – required user inputs</li>
            <li><code>context_id_list</code> – data passed between steps</li>
            <li><code>sample_files</code> – example inputs</li>
            <li>configuration metadata</li>
          </ul>

          <p>
            Changes made in this editor directly update the agent configuration.
          </p>

          <h2 id="3-editing-an-agent-with-visual-builder">3. Editing an agent (with visual builder)</h2>

          <p>
            The Visual Builder allows agents to be edited using a point-and-click, drag-and-drop interface. This makes it easy to understand, modify, and extend agent logic without writing code.
          </p>

          <p>
            Note: The number displayed on each node represents the order in which they were placed on the canvas by the user only. The number does not indicate the order in which the nodes will run. The sequence of agent action is determined by the connectors between each node in the process, and not the number on the node.
          </p>

          <img src="/v1/agents/editAgent/04_visualBuilder.png" alt="edit" />

          <h3 id="31-builder-overview">3.1 Builder overview</h3>

          <p>
            The canvas represents the full execution flow of an agent, from input to final output. Each block is a node, and connections define how data moves between steps.
          </p>

          <p>
            Up to <strong>Transformers</strong>, all components are fully visual and configurable directly in the builder. The remaining options are covered in detail in the dedicated Visual Builder documentation.
          </p>

          <h3 id="32-left-panel-node-types">3.2 Left panel (node types)</h3>

          <p>
            The left sidebar contains the core building blocks that can be dragged onto the canvas:
          </p>

          <ul>
            <li><strong>Input</strong> Defines how data enters the agent (for example text, image, or file input).</li>
          </ul>

          <ul>
            <li><strong>Node</strong> General-purpose processing steps that pass data forward.</li>
          </ul>

          <ul>
            <li><strong>Classifier</strong> Routes execution based on intent or classification logic.</li>
          </ul>

          <ul>
            <li><strong>Bot</strong> Handles LLM-powered reasoning or responses.</li>
          </ul>

          <ul>
            <li><strong>Condition</strong> Adds branching logic based on rules or outputs.</li>
          </ul>

          <ul>
            <li><strong>Transformer</strong> Transforms or enriches data before it moves to the next step.</li>
          </ul>

          <h3 id="33-canvas-controls">3.3 Canvas controls</h3>

          <p>
            On the canvas, the following actions can be performed:
          </p>

          <ul>
            <li>Nodes can be dragged to reposition them</li>
            <li>Nodes can be connected to define execution flow</li>
            <li>Nodes can be selected to edit their instructions and configuration</li>
          </ul>

          <h3 id="34-zoom-and-utility-actions">3.4 Zoom and utility actions</h3>

          <p>
            The bottom-left controls allow the following operations:
          </p>

          <ul>
            <li>Zoom in</li>
            <li>Zoom out</li>
            <li>Clear the canvas</li>
          </ul>

          <h3 id="35-action-buttons">3.5 Action buttons</h3>

          <p>
            Below the utility buttons, quick access to key actions is provided:
          </p>

          <ul>
            <li><strong>Download Agent</strong> Downloads the agent definition as a JSON file. This file can later be uploaded to instantly recreate the agent.</li>
          </ul>

          <ul>
            <li><strong>Run</strong> Executes the agent with the current configuration.</li>
          </ul>

          <ul>
            <li><strong>Home</strong> Returns to the main dashboard.</li>
          </ul>

          <p>
            Additional information about the Visual Builder can be found in the <a href="/v1/agents/agent-visual-builder" className="text-blue-600 dark:text-blue-400 hover:underline">Agent Visual Builder Mode</a> documentation.
          </p>

          <h2 id="conclusion">Conclusion</h2>

          <p>
            This document provided comprehensive guidance on editing agents in Model HQ using both the step-based editor and the Visual Builder interface. The Edit Agent functionality enables existing workflows to be refined, extended, and optimized by modifying services, adjusting execution order, configuring inputs and outputs, and applying safety controls. The step-based editor offers precise control over linear agent workflows through a structured interface where services, instructions, and contexts can be configured for each execution step. The Visual Builder provides an intuitive drag-and-drop canvas for visualizing complex workflows, making structural changes, and understanding data flow through node-and-wire representations.
          </p>

          <p>
            Key editing capabilities include configuring input types (text, documents, images, tables, sources), managing files and assets, executing test runs for validation, defining metadata and presentation elements, controlling output formats, generating structured reports for different audiences, and applying automated safety controls such as pattern redaction and content classification. The Services catalog determines which capabilities are available within the agent, ranging from core services like chat and RAG to specialized utilities for web scraping, image generation, and email automation. Advanced features such as the Plan section enable natural language descriptions to be used for workflow generation, while the JSON Editor provides direct access to the underlying agent configuration for precise modifications.
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
    </div>
    </DocPageLayout>
  )
}