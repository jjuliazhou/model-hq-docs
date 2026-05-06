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

export default function LaunchingTheInterfacePage() {
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
            <BreadcrumbPage>1. Launching the interface</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">1. Launching the interface</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          To begin creating a new agent, the following steps should be performed:
        </p>

        <RelatedVideos
          title="Watch: Creating Agents"
          description="See how agents are built end-to-end \u2014 vision, RAG, classification, and contracts."
          videoIds={[
            "UTNQxspDi3I",
            "D3cZyenzelY",
            "9n7gXz6knbM",
            "fW8_-_EdsrM",
            "1xE07RNHDM0",
            "R1fAogEIDMc",
          ]}
        />

        <ol>
          <li>The <strong>Main Menu</strong> should be navigated to.</li>
          <li>The <strong>Agents</strong> section should be selected.</li>
          <li>The <strong>Build New</strong> option should be clicked to initiate a new agent.</li>
        </ol>

        <img src="/v1/agents/createAgent/01_agentsMenu.png" alt="create_agents" />

        <p>
          The <strong>&gt;</strong> button can be selected to proceed to the next step.
        </p>

        <h2 id="2-agent-builder-overview">2. Agent builder overview</h2>

        <p>
          When the agent creation flow is initiated, two primary options are presented:
        </p>

        <ul>
          <li><strong>Option 1</strong> — A new process can be built from scratch, or an existing agent can be used as the starting point by deriving from it.</li>
          <li><strong>Option 2</strong> — A pre-packaged agent template can be uploaded from a <code>.zip</code> file to import a fully configured agent.</li>
        </ul>

        <img src="/v1/agents/createAgent/02_agentBuilder.png" alt="create_agents" />

        <p>
          The sections below cover Option 1 in detail, walking through each of the available creation modes. When building an agent from scratch or from an existing workflow, three modes are available:
        </p>

        <ol>
          <li>Visual Builder</li>
          <li>Build Multi-Step Agent</li>
          <li>Build Prompting Agent</li>
        </ol>

        <h2 id="31-visual-builder">3.1 Visual builder</h2>

        <p>
          The <strong>Visual Builder</strong> provides an interactive drag-and-drop interface for creating agents using a node-and-wire paradigm. This mode is particularly suited for users who prefer visual workflow design over text-based configuration. Nodes representing different services — such as document parsing, RAG retrieval, data extraction, or model inference — can be placed on a canvas and connected to define execution flow and data dependencies. Each node can be individually configured with specific instructions, input contexts, and output mappings through intuitive forms and dropdowns.
        </p>

        <p>
          The Visual Builder excels at creating complex workflows involving branching logic, conditional execution, and parallel processing paths, as these structures are more readily understood and modified in graphical form. The interface includes support for zooming, panning, rearranging nodes, and validating connections to ensure data flows correctly between steps. Once a visual workflow is complete, it can be executed directly from the builder, exported as a JSON configuration file, or further refined using the step-based editor.
        </p>

        <p>
          For comprehensive information about the Visual Builder — including detailed walkthroughs of node types, connection rules, configuration options, and best practices for visual workflow design — the <a href="/v1/agents/agent-visual-builder" className="text-blue-600 dark:text-blue-400 hover:underline">Agent Visual Builder Mode</a> documentation should be consulted.
        </p>

        <h2 id="32-build-multi-step-agent">3.2 Build multi-step agent</h2>

        <p>
          The <strong>Multi-Step Agent</strong> builder creates agents as ordered sequences of services that are executed from start to finish. This mode is well-suited for structured, predictable workflows in which each step has a clearly defined role and passes its output to the next.
        </p>

        <p>
          <strong>Agent setup: Getting started</strong>
        </p>

        <p>
          Basic information about the agent should be configured at this stage:
        </p>

        <ul>
          <li><strong>Agent name</strong>: A unique, descriptive name should be provided that clearly indicates the agent's purpose — for example, Contract Analyzer, Invoice Processor, or Research Summarizer.</li>
        </ul>

        <ul>
          <li><strong>Input definition</strong>: The input types that will be provided when the agent is run should be selected. By selecting a user input, this will define the first step in the agent process. By default, text is defined as MAIN-INPUT. Additional input types — such as User-Document, User-Table, User-Image, or User-Source — can be enabled as required by the workflow.</li>
        </ul>

        <p>
          Select the type of input that will kick off the agent process and describe the input that is expected in the Description section so that the user will have a clear indication of what type of file or input is intended to work with the agent.
        </p>

        <p>
          Note: The Visual Builder only accepts one input node and will not work with multiple input nodes. For workflows needing multiple inputs or input types, it is recommended to work with the <em>Multi-Step</em> Agent builder that can be accessed by selecting "Build Multi-Step Agent".
        </p>

        <p>
          Example 1: For an agent process in which the user is expected to input a document AND an image to run the agent process, use "Build Multi-Step Agent".
        </p>

        <p>
          Example 2: For an agent process that uses a single input such as a PDF file or an Image for RAG answering or Vision model execution, use "Visual Builder."
        </p>

        <p>
          Example 3: For agents requiring Batch processing, either type of builder can be used for building the agent itself.
        </p>

        <ul>
          <li><strong>Derive Agent</strong>: The agent can be built from scratch with a blank workflow (the default), or an existing agent can be selected as the base to derive from, inheriting its pre-built logic and structure.</li>
        </ul>

        <h2 id="33-build-prompting-agent">3.3 Build prompting agent</h2>

        <p>
          The <strong>Prompting Agent</strong> builder is designed for creating conversational AI workflows that centre on natural language interactions and prompt-based model invocations. This mode is the simplest entry point for deploying a language model with custom instructions, making it well-suited for question-answering agents, summarisation assistants, and other single-model interaction patterns.
        </p>

        <img src="/v1/agents/createAgent/03_promptingAgent.png" alt="create_agents" />

        <blockquote data-type="note">
            <p>The configuration steps for the Prompting Agent — including name, input definition, and starting point — follow the same structure as described in the Multi-Step Agent setup above. For details on subsequent configuration options such as services, controls, and plan, refer to the <a href="/v1/agents/edit-agent" className="text-blue-600 dark:text-blue-400 hover:underline">Editing Agents</a> documentation.</p>
        </blockquote>

        <h2 id="conclusion">Conclusion</h2>

        <p>
          This document described the agent creation interface in Model HQ and the three primary modes available for building new agents: the Visual Builder, the Multi-Step Agent builder, and the Prompting Agent builder. Each mode provides a different entry point into the agent development process, and the appropriate choice will depend on the complexity of the intended workflow and the preferred working style of the user.
        </p>

        <p>
          Regardless of the mode selected, the foundational steps remain consistent: a meaningful agent name should be assigned, the correct input types should be defined, and a decision should be made on whether to start from a blank slate or derive from an existing agent. These initial choices shape the structure of the workflow and influence how the agent will be configured and maintained over time.
        </p>

        <p>
          For next steps, the <a href="/v1/agents/agent-visual-builder" className="text-blue-600 dark:text-blue-400 hover:underline">Agent Visual Builder</a> documentation covers the Visual Builder in detail, and the <a href="/v1/agents/edit-agent" className="text-blue-600 dark:text-blue-400 hover:underline">Editing Agents</a> documentation provides a full reference for all configuration options available after the initial setup — including steps, services, controls, plans, and output settings.
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