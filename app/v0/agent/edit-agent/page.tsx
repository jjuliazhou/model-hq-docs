import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ServiceTable } from "@/components/service-table"

export default function EditAgentPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/agent">Agents</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Editing Agents</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Editing Agents in Model HQ</h1>
        <p className="text-lg text-muted-foreground">
          In this section, we will explore how to edit an existing Agent. Learn about the edit interface, process
          configuration, and advanced customization options.
        </p>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>&nbsp;</p>

        <h2 id="open-the-edit-interface">Open the Edit Interface</h2>
        <p>Editing an existing Agent process is straightforward in Model HQ.</p>

        <p>Select the Agent you want to edit from the dropdown.</p>

        <img src="/v0/agent/editAgent.png" alt="edit" />

        <p>
          We will use the Contract Analyzer example to illustrate this process. (Editing the Contract Analyzer Agent
          process is also shown in our YouTube video:{" "}
          <a href="https://youtu.be/UTNQxspDi3I">https://youtu.be/UTNQxspDi3I</a>)
        </p>

        <p>
          Click the <code>Edit</code> button.
        </p>

        <h2 id="edit-agent">How to Edit an Agent?</h2>
        <p>
          To edit an existing Agent, select the Agent Process you wish to modify and click <code>Edit</code>.
        </p>

        <p>
          Next, click on <code>Process</code>. This opens the detailed view of all the steps within the Agent Process.
        </p>

        <ol>
          <li>Use <code>+</code> or <code>–</code> to add or remove rows.</li>
          <li>Modify the <strong>Service</strong>, <strong>Instruction</strong>, or <strong>Context</strong> fields as needed.</li>
        </ol>

        <blockquote data-type="tip">
          <p><strong>Important</strong></p>
          <p>
            We recommend clicking <code>&gt;</code> after editing each row. This confirms and saves your changes. <br />
            If you skip this, the new Context or step modifications will <strong>not be saved</strong>.
          </p>
        </blockquote>

        <p>
          Depending on the nature of your changes, you may also need to redefine the following:
        </p>

        <ul>
          <li><code>+ Inputs</code></li>
          <li><code>+ Files</code></li>
        </ul>

        <h2 id="copy-process">Editing a Copy of an Existing Process</h2>

        <p>
          If you intend to make significant or permanent changes, we suggest editing a <strong>copy</strong> of the process.
        </p>

        <p>
          <img src="/v0/agent/agentProcess.png" alt="agent process" />
        </p>

        <ol>
          <li>Go to <code>Agents &gt; Build New &gt; Start Building</code>.</li>
          <li>In <strong>Process Name</strong>, enter a name for the new process.</li>
          <li>Under <strong>Derive from Existing Process</strong>, select the Agent you wish to copy.</li>
          <li>Click <code>&gt;</code> to confirm.</li>
        </ol>

        <p>
          You'll now be able to edit a copy of the selected process — without affecting the original Agent Process.
        </p>

        <p>&nbsp;</p>

        <h2 id="edit-interface">Edit Interface</h2>
        <p>You will now see the following screen:</p>

        <img src="/v0/agent/editInterface.png" alt="edit" />

        <p>At the top, there is a brief instructional guide.</p>

        <p>
          Below it, you&apos;ll find the <code>details</code> section. Since we selected &quot;contract_analyzer&quot;,
          it contains the corresponding details in JSON format. This includes every configuration related to the agent.
        </p>

        <p>
          In the <strong>Configure</strong> menu, you will find several options, including:
        </p>
        <ul>
          <li>
            <strong>Process</strong>
          </li>
          <li>
            <strong>Run</strong>
          </li>
          <li>
            <strong>Export</strong>
          </li>
          <li>
            <strong>Options</strong>
          </li>
          <li>
            <strong>Home</strong>
          </li>
        </ul>

        <p>Let&apos;s review each button in detail.</p>

        <h2 id="process">Process</h2>
        <p>To define each step in the agent workflow:</p>

        <ol>
          <li>
            <strong>Select a Service</strong> — Choose the service the agent will use in this step.
          </li>
          <li>
            <strong>Add Instructions</strong> — Provide a prompt or directive for the agent (e.g., a question).
          </li>
          <li>
            <strong>Select Context</strong> — Optionally provide background data or source material to assist the agent.
          </li>
        </ol>

        <p>
          Click <code>+ (Add)</code> to append a new step, or <code>- (Minus)</code> to remove the last one.
        </p>

        <ServiceTable />

        <blockquote data-type="tip">
          <p>
            <strong>Building and Querying a Custom Table</strong>
          </p>
          <p>
            When you build a custom table, a database is created and stored in memory using the <b><code>table name</code> specified in the Instruction
              field</b>. <br /> If you later update or replace the table with new data, you <b>must also change the table name in the Instruction
                field</b>. This signals to the system that a new database should be created. <br /> Otherwise,
            it will continue referencing the previous version of the table.
          </p>
        </blockquote>

        <p>The Agent Builder also includes the following options:</p>
        <ul>
          <li>
            <strong>Inputs</strong>: Configure or update the user inputs defined during initial setup.
          </li>
        </ul>

        <p>Supported input types:</p>
        <ul>
          <li>
            <code>MAIN-INPUT</code> — primary text input
          </li>
          <li>
            <code>User-Document</code> — documents in various formats
          </li>
          <li>
            <code>User-Image</code> — image files (e.g., PNG, JPG)
          </li>
          <li>
            <code>User-Table</code> — structured data (CSV, JSON)
          </li>
          <li>
            <code>User-Source</code> — multiple file sources
          </li>
          <li>
            <code>User-Text</code> — short snippets
          </li>
          <li>
            <code>None</code> — no user input required
          </li>
        </ul>

        <p>
          Specify the input types required from users to initiate the agent. This is a critical step as it is VERY
          IMPORTANT to <strong>select all of the correct inputs that will be used</strong> in the Agent process. By
          default, <code>MAIN-INPUT (text)</code> is set.
        </p>

        <ul>
          <li>
            <code>MAIN-INPUT (text)</code>: refers to a piece of text that will be copied and pasted into the text field
            - the current limit is 5000 characters for this text field (approximately up to 2 pages of text).
          </li>
          <li>
            <code>User-Document</code>: A larger document which must be PARSED first via the &apos;parse_document&apos;
            service in the Agent &apos;Select Service&apos; prior to being used in an agent workflow.{" "}
            <strong>
              Important: A User Document must almost always be processed first via the &apos;parse_document&apos;
            </strong>
            , which then breaks up the document text into smaller chunks, prior to being used for other Agent Services
            such as Rag_Answer, Semantic_Filter, Document_Filter or Create_Context.
          </li>
          <li>
            <code>User-Table</code>: A user can upload a .CSV or JSON that the agent will attempt to interpret as a
            table with labelled columns and a consistent set of rows that it can label.{" "}
            <strong>Important: A User Table must first be processed via &apos;build-table&apos; service</strong> prior
            to being used in an Agent process from the &apos;Select Service&apos; dropdown. The Build Table service will
            attempt to extract relevant information and save the information in a local SQL database in Model HQ prior
            to using any table in an Agent process.
          </li>
        </ul>

        <p>The agent process must:</p>
        <ol>
          <li>upload a table,</li>
          <li>
            &apos;Build_Table&apos; from the Agent &apos;Select Service&apos; dropdown (this service extracts all the
            information and attempts to build a database table from the information submitted), and
          </li>
          <li>
            &apos;Query_Custom_Table&apos; (this service expects an input context that is a table inference from the
            &apos;Build_Table&apos; service) which allows a user to ask a simple natural language question from the
            Table.
          </li>
        </ol>

        <ul>
          <li>
            <code>User-Image</code>: A user can upload an image file such as .PNG or .JPEG for image processing in an
            agent workflow.{" "}
            <strong>Important: A User Image must first be processed via the &apos;vision&apos; service</strong> prior to
            being used in an Agent Process from the &apos;Select Service&apos; dropdown menu. The Vision service will
            take an image file along with a text input of a question or instruction, then returns a text output context
            with the answer based on the contents of the image.
          </li>
          <li>
            <code>User-Text</code>: Designed to be a secondary piece of additional context that a user can provide in an
            Agent workflow.
          </li>
          <li>
            <code>User-Source</code>: A User Source allows the user to upload an indefinite number of documents, images,
            etc. that can all be packaged as a source to be treated as one object. While most use cases have single or
            few inputs, this allows for more dynamic, flexible method of allowing for variable user input. If you select
            User Source, you do not need to go through the Parse_Document, Build_Table, or Vision services as these
            services will automatically be applied.{" "}
            <strong>
              Important: It is recommended to use &apos;Text_Filter&apos;&gt; &apos;Semantic_Filter&apos; &gt;
              &apos;Create_Context&apos; first
            </strong>{" "}
            when being used in an agent process to surface the most relevant text chunks. As you get more advanced in
            Agent building, this order can change.
          </li>
        </ul>

        <blockquote data-type="important">
          <p>
            It is important to select only the user inputs you expect to use in the process. The user will be expected
            to designate all of the inputs selected to run the process.
          </p>
        </blockquote>

        <blockquote data-type="tip">
          <p>
            Specify the input types required from users to initiate the agent. This is a critical step as it is VERY
            IMPORTANT to select all of the correct inputs that will be used in the Agent process. By default, MAIN-INPUT
            (text) is set. MAIN-INPUT (text) refers to a piece of text that will be copied and pasted into the text
            field - the current limit is 5000 characters for this text field (approximately up to 2 pages of text).
          </p>
        </blockquote>

        <blockquote data-type="danger">
          <p>
            As the Agent process is being built, the <code>+ Inputs</code> selection button gives the developer of an
            Agent process the ability to modify the Input list (select or deselect the input list) depending on the
            Agent process being created.
          </p>
        </blockquote>

        <p>
          Once configured, click <code>&gt;</code> to proceed.
        </p>

        <ul>
          <li>
            <strong>Files</strong>: Upload files to be used in the agent workflow. Specify the file type as Document,
            Table, Image, or Source (a combination of different file types, usually large in size). You can also query a
            pre-built aggregated source for use in the workflow.
          </li>
          <li>
            <strong>Load</strong>: Load a pre-built agent workflow to use or modify.
          </li>
        </ul>

        <blockquote data-type="caution">
          <p>
            Using the Load button will replace any current process on the screen. Edits must begin from the loaded
            workflow.
          </p>
        </blockquote>

        <ul>
          <li>
            <strong>Run</strong>: Navigate to the confirmation screen. Click <code>&gt;</code> to proceed or select
            &apos;Home&apos; to return to the previous page.
          </li>
          <li>
            <strong>Reset (🗑️)</strong>: Clears the screen and resets the configuration.
          </li>
          <li>
            <strong>Home</strong>: Returns to the Main Menu.
          </li>
        </ul>

        <blockquote data-type="note">
          <p>
            Find the detailed description of every button in the <a href="/agent/builder">Agent Builder Options</a>{" "}
            section.
          </p>
        </blockquote>

        <p>&nbsp;</p>

        <h2 id="run">Run</h2>
        <p>Runs the existing Agent without making any changes.</p>

        <p>&nbsp;</p>

        <h2 id="export">Export</h2>
        <p>Custom agents can be exported for easy sharing with colleagues who have Model HQ installed.</p>

        <img src="/v0/agent/editExport.png" alt="edit" />

        <p>The Export section provides two options:</p>

        <h3 id="build" >1. Build</h3>
        <p>
          Packages all configuration settings and source files into a <code>.zip</code> file.
        </p>
        <blockquote>
          <p>
            📦 The zip contains no executable code; only documents and configuration files—so it can be easily shared
            and imported on another system.
          </p>
        </blockquote>

        <img src="/v0/agent/editBuild.png" alt="edit" />

        <h3 id="meta" >2. Meta</h3>
        <p>
          Allows you to add useful metadata like instructions for the user such as description of the agent process,
          instructions for usage (ex: which types of inputs the user is expected to provide that works with this agent
          process) and author information.
        </p>

        <img src="/v0/agent/editBuild.png" alt="edit" />

        <p>You can add the following metadata:</p>
        <ul>
          <li>
            <strong>Process Description</strong>: Displayed to help users understand the purpose of the agent.
          </li>
          <li>
            <strong>Sample Input</strong>: Add a sample input or attach a file for testing and demonstration purposes.
          </li>
        </ul>

        <p>&nbsp;</p>

        <h2 id="options">Options</h2>
        <p>Opens a &quot;Configure [Agent Process Name]&quot; screen with the following configuration options:</p>

        <img src="/v0/agent/editOptions.png" alt="edit" />

        <h3 id="json-editor">JSON Editor</h3>
        <p>
          Enables advanced users to modify the agent process directly in JSON. You can edit inline or upload a
          pre-configured JSON file.
        </p>
        <img src="/v0/agent/editJSON.png" alt="edit" />

        <h3 id="files">Files</h3>
        <p>
          Attach source files directly to the Agent. These files will be available in the Process Builder and included
          in exported packages.
        </p>
        <img src="/v0/agent/editFiles.png" alt="edit" />

        <h3 id="reports">Reports</h3>
        <p>Configure the types of reports the agent can generate. This includes:</p>
        <ul>
          <li>Report Types to Generate</li>
          <li>Business Report Elements</li>
          <li>Business Report Document Format</li>
          <li>Technical Report Elements</li>
          <li>Compliance Report Elements</li>
        </ul>
        <img src="/v0/agent/editReports.png" alt="edit" />

        <h3 id="outputs">Outputs</h3>
        <p>
          Customize the output format of the agent process. By default, the agent returns a JSON dictionary with key
          takeaways. You can:
        </p>
        <ul>
          <li>Modify the output keys</li>
          <li>Switch to a text-only format</li>
          <li>
            Use the <code>standard</code> option to ignore custom settings and include all default keys
          </li>
        </ul>
        <img src="/v0/agent/editOutput.png" alt="edit" />

        <h3 id="global">Global</h3>
        <p>Set global configuration options such as chat models and custom instructions.</p>
        <img src="/v0/configs/rag.png" alt="edit" />

        <h3 id="controls">Controls</h3>
        <p>
          Configure controls like Model Hash Checks, Pattern Redaction, and Classifier Tests used during the agent
          process.
        </p>
        <img src="/v0/configs/controls.png" alt="edit" />

        <h3 id="upload">Upload</h3>
        <p>
          Upload an agent <code>.zip</code> file to build a custom agent. Once uploaded, the agent will be installed and
          can be further edited.
        </p>
        <img src="/v0/agent/editUpload.png" alt="edit" />

        <h3>Home</h3>
        <p>Returns to the previous Agent Menu screen.</p>

        <p>&nbsp;</p>

        <h2>Conclusion</h2>
        <p>
          In this section, we covered how to edit agents using the multiple configuration options provided in Model HQ.
          From modifying workflows to customizing exports and adding global settings, Model HQ offers a complete
          interface to refine your agents with ease.
        </p>

        <p>
          If you require further assistance or would like to provide feedback, please contact us at{" "}
          <code>support@aibloks.com</code>.
        </p>
      </div>
    </div>
  )
}
