import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ServiceTable } from "@/components/service-table"

export default function AgentBuilderPage() {
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
            <BreadcrumbPage>Agent Builder Menu</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Exploring Agent Builder Menu</h1>
        <p className="text-lg text-muted-foreground">
          This is where you construct the core logic of your agent. Learn about all the available options and features
          in the Agent Builder interface.
        </p>
      </div>

      <div className="prose prose-gray max-w-none">
        <img src="/v0/agent/builder.png" alt="create_agents" />

        <h2 id="building-the-process">Building the Process</h2>
        <p>To define each step in the agent workflow:</p>

        <ol>
          <li>
            <strong>Select a Service</strong> — Choose the service the agent will use in this step.
          </li>
          <li>
            <strong>Add Instructions</strong> — Provide the agent with a prompt or directive (e.g., a question).
          </li>
          <li>
            <strong>Select Context</strong> — Optionally provide source material or background data to assist the agent.
          </li>
        </ol>

        <p>
          Click <code>+ (Add)</code> to append a new step, or <code>- (Minus)</code> to remove the last one.
        </p>

        <p>The Agent Builder also includes the following options:</p>
        <ul>
          <li>
            <strong>Inputs</strong>: This section lets you configure or update the user inputs defined earlier during
            setup.
          </li>
          <li>
            <strong>Files</strong>: This button allows the user to Add files that will be used in the Agent workflow
            with the option to explicitly indicate whether the file type is a Document, Table, Image or a Source (a mix
            of different file types, typically larger in size). In addition, the user can also query a pre-built
            aggregated source to be used in the agent workflow.
          </li>
          <li>
            <strong>Load</strong>: This button allows the user to Load a pre-built Agent workflow to use or to modify
            the workflow. Please note that the Load button will replace any current process on the screen, and all edits
            to existing workflows must start with the Loaded Workflow first.
          </li>
          <li>
            <strong>Run</strong>: Takes the user to the confirmation screen asking the user to select &apos;&gt;&apos;
            to proceed to the agent process or to select &apos;Home&apos; to return to the previous screen.
          </li>
          <li>
            <strong>Reset (🗑️)</strong>: Resets the entire screen.
          </li>
          <li>
            <strong>Home</strong>: Takes the user to the Main Menu
          </li>
        </ul>

        <p>Let&apos;s review each of these options in detail.</p>

        <h2 id="inputs">Inputs</h2>
        <p>
          The <strong>Inputs</strong> section lets you configure or update the user inputs defined earlier during setup.
        </p>

        <img src="/v0/agent/inputs.png" alt="create_agents" />

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

        <blockquote data-type="caution">
          <p>
            As the Agent process is being built, the <code>+ Inputs</code> selection button gives the developer of an
            Agent process the ability to modify the Input list (select or deselect the input list) depending on the
            Agent process being created.
          </p>
        </blockquote>

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

        <p>
          Once configured, click <code>&gt;</code> to proceed.
        </p>

        <p>&nbsp;</p>

        <h2 id="files">Files</h2>
        <p>Upload supporting files for the agent&apos;s process logic. Supported formats include:</p>
        <p>
          <code>.pdf</code>, <code>.pptx</code>, <code>.docx</code>, <code>.xlsx</code>, <code>.csv</code>,{" "}
          <code>.txt</code>, <code>.md</code>, <code>.wav</code>, <code>.png</code>, <code>.jpg</code>,{" "}
          <code>.zip</code>
        </p>

        <p>
          Click <code>Save + Exit</code> after uploading your files. To delete a file, click the bin icon (🗑️).
        </p>

        <p>&nbsp;</p>

        <h2 id="load">Load</h2>
        <p>Use this option to import an existing agent process. This will override your current session.</p>

        <img src="/v0/agent/load.png" alt="create_agents" />

        <p>&nbsp;</p>

        <h2 id="run">Run</h2>
        <p>Execute the agent workflow you&apos;ve just created to test and validate its behavior.</p>

        <p>
          Once the agent has been fully constructed, a summary view will display the configuration and logic flow. This
          view helps you verify the structure and ensure all steps have been defined as expected.
        </p>

        <img src="/v0/agent/finalDemo.png" alt="create_agents" />

        <p>
          Click on the <code>Run</code> button to proceed. Now you&apos;ll be asked to add a text or attach a file to
          process your created agent.
        </p>
        <img src="/v0/agent/runNext.png" alt="create_agents" />

        <p>Once done, you agent will start working and give you the output like below:</p>
        <img src="/v0/agent/finalOutput.png" alt="create_agents" />
        <p>&nbsp;</p>

        <h2 id="reset">Reset (🗑️)</h2>
        <p>This will clear the current agent configuration and start fresh.</p>

        <blockquote data-type="warning">
          <p>
            This action is irreversible and will permanently delete your progress.
          </p>
        </blockquote>

        <p>&nbsp;</p>

        <h2>Conclusion</h2>
        <p>In this section, you have explored the Agent Builder Options in more detail.</p>

        <p>
          If you require further assistance or wish to provide feedback, feel free to contact us at{" "}
          <code>support@aibloks.com</code>.
        </p>
      </div>
    </div>
  )
}
