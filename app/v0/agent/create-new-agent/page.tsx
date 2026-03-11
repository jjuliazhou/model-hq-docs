import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ServiceTable } from "@/components/service-table"

export default function CreateAgentPage() {
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
            <BreadcrumbPage>Creating New Agent</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Creating a New Agent</h1>
        <p className="text-lg text-muted-foreground">
          This guide provides a step-by-step walkthrough for creating a new agent using the platform. You will learn how
          to initiate a new agent, configure its properties, build its process logic, and finalize its setup.
        </p>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>&nbsp;</p>

        <h2 id="agent-menu">Agent Menu</h2>
        <p>To begin creating a new agent:</p>
        <ol>
          <li>
            Navigate to the <strong>Main Menu</strong>.
          </li>
          <li>
            Go to the <strong>Agents</strong> section.
          </li>
          <li>
            Select the <code>Build New</code> option to initiate a new agent.
          </li>
        </ol>

        <img src="/v0/agent/agentNew.png" alt="create_agents" />

        <p>
          Click on <code>&gt;</code> to proceed to the next step.
        </p>

        <p>&nbsp;</p>

        <h2 id="configure-agent">Configure Agent</h2>
        <p>
          Click on <strong>Start Building</strong> to begin the agent development process.
        </p>

        <img src="/v0/agent/configure.png" alt="create_agents" />

        <p>&nbsp;</p>

        <h2 id="agent-setup">Agent Setup</h2>
        <p>In this section, you will define the foundational settings for your agent.</p>

        <img src="/v0/agent/setup.png" alt="create_agents" />

        <h3 id="inputs" >Inputs</h3>
        <ol>
          <li>
            <strong>Name the Agent</strong> — Provide a unique and descriptive name for your agent.
          </li>
          <li>
            <strong>Define Inputs</strong> — Specify the input types required from users to initiate the agent. This is
            a critical step as it is VERY IMPORTANT to <strong>select the correct inputs that will be used</strong> in
            the Agent process - the inputs may also be modified as you are creating the agent but you will always need
            to select the necessary inputs. By default, <code>MAIN-INPUT (text)</code> is set.
          </li>
        </ol>

        <ul>
          <li>
            <code>MAIN-INPUT (text)</code>: refers to a piece of text that will be typed or copied and pasted into the
            text field - the current limit is 5000 characters for this text field (approximately up to 2 pages of text).
          </li>
          <li>
            <code>User-Document</code>: A larger document which must be PARSED first via the &apos;parse_document&apos;
            service in the Agent &apos;Select Service&apos; prior to being used in an agent workflow.{" "}
            <strong>
              Important: A User Document must almost always be processed first via the &apos;parse_document&apos;
              service
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
          <li>Upload a table,</li>
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
            <code>User-Source</code>: A User Source allows the user to upload a grouping of indefinite number of
            documents, images, etc. that can all be packaged as a source to be treated as one object. While most use
            cases have single or few inputs, this allows for more dynamic, flexible method of allowing for variable user
            input. If you select User Source, you do not need to go through the Parse_Document, Build_Table, or Vision
            services as these services will automatically be applied.{" "}
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

        <ol start={3}>
          <li>
            <strong>Start Process</strong> — Choose to start from scratch or derive from an existing agent workflow.
          </li>
        </ol>

        <blockquote data-type="important">
          <p>
            If you prefer not to create an agent from scratch, you can use the <code>Derive from Existing Process</code>{" "}
            option to build upon or modify an existing agent template for your specific use case.
          </p>
        </blockquote>

        <blockquote data-type="tip">
          <p>
            Check out our YouTube video for a tutorial on &quot;how to edit an existing agent process&quot;:{" "}
            <a href="https://youtu.be/UTNQxspDi3I">https://youtu.be/UTNQxspDi3I</a>
          </p>
        </blockquote>

        <p>
          For this example, we&apos;ll continue using the default settings and name our agent <code>demo</code>.
        </p>

        <p>&nbsp;</p>

        <h2 id="agent-builder">Agent Builder</h2>
        <p>This is where you construct the core logic of your agent.</p>

        <img src="/v0/agent/builder.png" alt="create_agents" />

        <h2 id="building-the-process">🏗️ Building the Process</h2>
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
            setup. (See detailed instructions about Inputs above)
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
            <strong>Run</strong>: Takes the user to the confirmation screen asking the user to select <code>&gt;</code>{" "}
            to proceed to the agent process or to select &apos;Home&apos; to return to the previous screen.
          </li>
          <li>
            <strong>Reset (🗑️)</strong>: Resets the entire screen.
          </li>
          <li>
            <strong>Home</strong>: Takes the user to the Main Menu
          </li>
        </ul>

        <blockquote data-type="note">
          <p>
            Find the detailed description of every button in the <a href="/agent/builder">Agent Builder Options</a>{" "}
            section.
          </p>
        </blockquote>

        <p>&nbsp;</p>

        {/* ServiceTable is intentionally not rendered here */}
        <div id="service-table"></div>
        <ServiceTable />
        
        <p>&nbsp;</p>

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

        <p>&nbsp;</p>

        <h1 id="how-to-create-an-agent-from-agent-builder">How to create an Agent from Agent Builder</h1>
        <p>
          This guide outlines how to use the Agent Builder to create custom multi-step AI agents. The interface provides
          a visual and structured way to define services, instructions, and contexts for each step in your agent&apos;s
          workflow.
        </p>
        <img src="/v0/agent/agentBuilder.png" alt="create_agents" />

        <p>&nbsp;</p>

        <h2 id="creating-a-demo_agent">Creating a &quot;Demo Agent&quot;</h2>
        <p>
          After understanding the Agent Builder section, let&apos;s try to make a <code>demo agent</code>. Before start
          creating, here is a preview of what our <code>demo agent</code> going to look like.
        </p>
        <img src="/v0/agent/agentBuilderUI.png" alt="create_agents" />

        <blockquote data-type="note">
          <p>
            As we build our agent, the agent builder page will update in real-time after adding every new service to our
            agent.
          </p>
        </blockquote>

        <p>Before starting, let&apos;s discuss what these sections mean:</p>

        <h3 id="details" >1. Details – &lt;agent_name&gt; – &lt;n&gt; steps</h3>
        <ul>
          <li>Flowchart view of the full agent execution sequence.</li>
          <li>
            Each service block is labeled (e.g. <code>build_table → query_custom_table → semantic_filter</code>) and
            ends with <code>Select Service</code>.
          </li>
          <li>
            Below the flowchart, each step is listed with:
            <ul>
              <li>Step number</li>
              <li>Service name</li>
              <li>Brief service summary</li>
            </ul>
          </li>
        </ul>

        <h3 id="documentation" >2. Documentation – documentation-&lt;service_name&gt;</h3>
        <ul>
          <li>Displays structured JSON documentation for the selected service.</li>
          <li>
            This includes:
            <ul>
              <li>
                <code>Service</code>
              </li>
              <li>
                <code>Node</code>
              </li>
              <li>
                <code>Description</code>
              </li>
              <li>
                <code>Example</code>
              </li>
              <li>
                <code>Input Context options</code>, etc,.
              </li>
            </ul>
          </li>
        </ul>

        <blockquote data-type="note">
          <p>
            You must select least one service.
          </p>
        </blockquote>

        <h3 id="agent-legend" >3. Agent Legend</h3>
        <p>This section summarizes the configuration and available tools for the current agent.</p>

        <ul>
          <li>
            <strong>User Inputs</strong>:
            <ul>
              <li>
                <code>MAIN-INPUT</code>: Text input from user
              </li>
              <li>
                <code>User-Document</code>: Document upload (any format)
              </li>
              <li>
                <code>User-Image</code>: Image file (png, jpg)
              </li>
              <li>
                <code>User-Table</code>: Table file (csv, json)
              </li>
              <li>
                <code>User-Source</code>: Source (multiple files)
              </li>
              <li>
                <code>User-Text</code>: Snippet (short plain text)
              </li>
            </ul>
          </li>
          <li>
            <strong>Contexts</strong>:
            <ul>
              <li>Dynamically generated and labeled based on service usage.</li>
              <li>
                For example: <code>Provide_instruction_or_query</code>, <code>filter_3</code>
              </li>
            </ul>
          </li>
          <li>
            <strong>Named Variables</strong>:
            <ul>
              <li>You can reference any output from a service by using variable syntax.</li>
            </ul>
          </li>
        </ul>

        <blockquote data-type="caution">
          <p>
            To use a variable in an instruction, enclose it in double curly braces like so:
            <br />
            <code>{`{{query_custom_table_2}}`}</code>
          </p>
        </blockquote>

        <p>&nbsp;</p>

        <h2 id="building-a-demo_agent" >Building a Demo_Agent</h2>
        <p>
          Finally, it&apos;s time to create a demo agent, and we&apos;ll name it <code>Demo_Agent</code>. Since this is
          just an example, you may name your agent anything you prefer. In the previous section, we used the name
          &apos;demo&apos;—you can continue with that if you&apos;d like.
        </p>

        <h3>Step 1: Add More INPUT</h3>
        <p>
          Click the <code>+ Inputs</code> button and select the inputs as shown in the image below:
        </p>
        <img src="/v0/agent/inputsDemo.png" alt="create_agents" />

        <p>
          Adding these inputs will allow the user to enter or upload text as <code>MAIN-INPUT</code>, upload a document
          as <code>User-Document</code>, and upload an image as <code>User-Image</code>.
        </p>

        <p>
          Click on <code>&gt;</code> to proceed—you will be returned to the Agent Builder page.
        </p>

        <p>&nbsp;</p>

        <h3>Step 2: Add Service</h3>
        <p>
          This is the main step in agent creation. When you run the agent, it will execute the services in the order
          they are added.
        </p>

        <blockquote data-type="caution">
          <p>
            Keep in mind that this is a sample agent setup to illustrate how to build an agent. We will select various
            services and generate successful outputs.
          </p>
        </blockquote>

        <p>Let&apos;s add the services one by one:</p>

        <ol>
          <li>
            <strong>Adding parse_document</strong>
            <br />
            For this service, the context is <code>User_Document</code> (refer to the service table and{" "}
            <strong>Define Inputs</strong> section above for the proper context to add to this service). We&apos;ve
            entered &quot;Music License Agreement&quot; as the instruction to define this agreement.
            <br />
            <img src="/v0/agent/service1.png" alt="create_agents" />
            <br />
            Now, click the &quot;➕&quot; icon to add a new service. The &quot;➖&quot; icon removes a service.
          </li>
          <li>
            <strong>Adding rag_answer</strong>
            <br />
            This service uses the context <code>User-Source</code> or <code>Provide_instruction_or_query</code>. You can
            query the document with meaningful instructions related to the document. Here, we use the previously defined
            &quot;Music License Agreement&quot; as the context and ask, &quot;What is the commission rate?&quot; as the
            instruction.
            <br />
            <img src="/v0/agent/service2.png" alt="create_agents" />
            <br />
            Click the &quot;➕&quot; icon to add another service.
          </li>
          <li>
            <strong>Adding vision</strong>
            <br />
            This service uses <code>User_Image</code> as context (refer to <strong>Define Inputs</strong> and the
            Service Table for more information). We&apos;ve entered &quot;Describe this picture&quot; as the instruction
            so that we can build general textual context but you can also ask a more specific question.
            <br />
            <img src="/v0/agent/service3.png" alt="create_agents" />
            <br />
            Click the &quot;➕&quot; icon to continue.
          </li>
          <li>
            <strong>Adding emotions</strong>
            <br />
            This service uses <code>MAIN-INPUT</code> or <code>User-Text</code> as context. We selected{" "}
            <code>User_Text</code> and used <code>vision_3</code> (in your case, it might be <code>vision_1</code>) as
            context since we are trying to assess the emotions in the picture.
            <br />
            Note: This service does <strong>not</strong> require any instruction.
            <br />
            <img src="/v0/agent/service4.png" alt="create_agents" />
            <br />
            Click the &quot;➕&quot; icon to proceed.
          </li>
          <li>
            <strong>Adding sentiment</strong>
            <br />
            This service also accepts <code>MAIN-INPUT</code> or <code>User-Text</code> as context. We used{" "}
            <code>MAIN-INPUT</code> as the context.
            <br />
            Note: This service also does <strong>not</strong> require any instruction.
            <br />
            <img src="/v0/agent/service5.png" alt="create_agents" />
            <br />
            Click the &quot;➕&quot; icon to continue.
          </li>
          <li>
            <strong>Ending the Service</strong>
            <br />
            Once you&apos;ve added a sufficient number of services, conclude the process. You may add as many services
            as you&apos;d like—feel free to experiment.
            <br />
            For the final step, simply select <code>END</code> as the service. No additional input is needed. The
            context will automatically be set to <code>NONE</code>.
          </li>
        </ol>

        <p>The final agent will look like this:</p>
        <img src="/v0/agent/service6.png" alt="create_agents" />

        <h3>Getting Service Information</h3>
        <p>
          Each numbered button (e.g., 1) beside a service step lets you <strong>view more information</strong> about
          that service. Clicking the number reveals details like what the service does, expected input formats, and
          usage tips.
        </p>
        <img src="/v0/agent/numbered.png" alt="create_agents" />

        <p>
          Below is an example for the <code>build_table</code> service after clicking on it:
        </p>
        <img src="/v0/agent/numberdButton.png" alt="create_agents" />

        <p>&nbsp;</p>

        <h3>Step 3: Confirming the Agent</h3>
        <p>
          Now that the agent is built, it&apos;s time to test it. Click the run icon. You&apos;ll see a summary of your
          configured agent.
          <br />
          This page also asks you to confirm the agent. If anything is missing, go back and make the necessary edits.
        </p>

        <img src="/v0/agent/finalDemo.png" alt="create_agents" />

        <p>
          Once satisfied, click on <code>&gt;</code> to proceed.
        </p>

        <p>&nbsp;</p>

        <h3>Step 4: Uploading Inputs</h3>
        <p>
          Upload the necessary files as either text, document, or image input.
          <br />
          You must upload all the inputs required by your agent.
        </p>

        <p>
          In our case, we need 3 inputs: one text (for the <code>sentiment</code> service), one document (for the{" "}
          <code>parse_document</code> service), and one image (for the <code>vision</code> service).
        </p>

        <p>Here&apos;s what we&apos;ve added as input:</p>

        <ul>
          <li>
            <strong>Text</strong>:{" "}
            <em>The musician creates joyful, vibrant music for young adults, perfect for celebrations and holidays.</em>
          </li>
          <li>
            <strong>Document</strong>: Upload any document related to music per the instruction &quot;Music License
            Agreement&quot;.
          </li>
          <li>
            <strong>Image</strong>: We uploaded the following image:
            <br />
            <img src="/v0/agent/image.png" alt="create_agents" />
          </li>
        </ul>

        <p>&nbsp;</p>

        <h3>Step 5: Running the Agent and Getting an Output</h3>
        <p>
          Once you&apos;ve uploaded all the required inputs, click on <code>&gt;</code> to start the agent.
          <br />
          The agent will begin processing, and depending on your file sizes and internet connection, it will return an
          output within a minute.
        </p>

        <p>The final output looks like this:</p>
        <img src="/v0/agent/finalOutput.png" alt="create_agents" />

        <p>
          Click <a href="/agent#6-inference-history" style={{ color: "#00aaff" }} >Inference History</a> and{" "}
          <a href="/agent#7-files-created" style={{ color: "#00aaff" }} >Files Created</a> to learn more.
        </p>

        <p>&nbsp;</p>

        <h2>Conclusion</h2>
        <p>
          You have now successfully created a new agent. To learn how to modify or enhance your agent, please refer to
          the <a href="/agent/edit" style={{ color: "#00aaff" }} >Edit Agent</a>  Documentation.
        </p>

        <p>
          If you require further assistance or wish to provide feedback, feel free to contact us at{" "}
          <code>support@aibloks.com</code>.
        </p>
      </div>
    </div>
  )
}
