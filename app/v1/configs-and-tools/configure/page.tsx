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

export default function ExploringConfigurationInModelHqPage() {
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
            <BreadcrumbPage>Exploring configuration in Model HQ</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Exploring configuration in Model HQ</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          The Configure section is the main place where you control how Model HQ works and looks. You can change things like the design, choose your models, set up databases, manage RAG settings, and turn on safety and security options.
        </p>

        <p>
          After setup, you get access to all these controls in one spot. Think of it like a control panel for the whole app. You can adjust how bots behave, how the screen looks, how data is stored, and how Model HQ connects to other tools.
        </p>

        <p>
          These settings help users customize Model HQ to fit their own needs, workflows, and rules.
        </p>

        <p>
          After completing the initial setup, users gain access to comprehensive configuration controls that shape how Model HQ behaves, appears, and integrates with external systems. The Configure interface serves as the central control panel for tailoring the application to specific use cases, organizational requirements, and security policies. Settings can be adjusted to control default bot behavior, user interface appearance, RAG performance parameters, database connections, safety controls, and enterprise integrations.
        </p>

        <p>
          These configurations enable organizations to transform Model HQ from a general-purpose AI application into a customized solution that aligns with their unique workflows, branding guidelines, and compliance requirements.
        </p>

        <p>
          Understanding these configuration options is essential for optimizing Model HQ's performance, security posture, and user experience across different deployment scenarios.
        </p>

        <h2 id="1-launching-the-configuration-interface">1. Launching the configuration interface</h2>

        <p>
          To begin, the <strong>Configure</strong> button (⚙️) located in the top right side of the main menu can be selected.
        </p>

        <img src="/v1/configure/01_mainMenu.png" alt="tools" />

        <h2 id="2-configuration-interface-overview">2. Configuration interface overview</h2>

        <p>
          After launching the configuration section, the interface displays the following key options:
        </p>

        <img src="/v1/configure/02_configureInterface.png" alt="tools" />

        <p>
          The configuration interface is organized into the following main sections:
        </p>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Configuration Section</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><strong>App</strong></td>
              <td className="border border-border px-4 py-2">Controls global application behavior, default bots, feature visibility, and runtime modes</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Services</strong></td>
              <td className="border border-border px-4 py-2">Configures service catalog available in Agents</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>UI</strong></td>
              <td className="border border-border px-4 py-2">Customizes visual appearance including themes, colors, branding, and interface elements</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Models</strong></td>
              <td className="border border-border px-4 py-2">Configures model options ranging from type of moodels displayed to users, default model selections and max token output sizes</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>RAG</strong></td>
              <td className="border border-border px-4 py-2">Configures retrieval-augmented generation parameters for document search and context building</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>DB</strong></td>
              <td className="border border-border px-4 py-2">Manages database connections and storage configurations</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Prompts</strong></td>
              <td className="border border-border px-4 py-2">Defines system-level prompts and instruction templates</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Server</strong></td>
              <td className="border border-border px-4 py-2">Configures backend server settings, ports, and API endpoints</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Controls</strong></td>
              <td className="border border-border px-4 py-2">Sets Model downloading options and safety controls, content filtering, and security policies (only for users who have <strong>Connected Enterprise Servers</strong> ON in <strong>Config &gt; App</strong>)</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Templates</strong></td>
              <td className="border border-border px-4 py-2">Manages pre-built templates for agents, bots, and workflows</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Connections</strong></td>
              <td className="border border-border px-4 py-2">Handles external service integrations and API credentials</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Reset</strong></td>
              <td className="border border-border px-4 py-2">Provides options to reset bots, agents and model configurations to default values</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>Display Toggler</strong></td>
              <td className="border border-border px-4 py-2">Quick toggle between light and dark display modes</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Configuration Section</h5>
                <p className="text-sm mt-1 break-words"><strong>App</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Controls global application behavior, default bots, feature visibility, and runtime modes</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Configuration Section</h5>
                <p className="text-sm mt-1 break-words"><strong>Services</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Configures service catalog available in Agents</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Configuration Section</h5>
                <p className="text-sm mt-1 break-words"><strong>UI</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Customizes visual appearance including themes, colors, branding, and interface elements</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Configuration Section</h5>
                <p className="text-sm mt-1 break-words"><strong>Models</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Configures model options ranging from type of moodels displayed to users, default model selections and max token output sizes</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Configuration Section</h5>
                <p className="text-sm mt-1 break-words"><strong>RAG</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Configures retrieval-augmented generation parameters for document search and context building</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Configuration Section</h5>
                <p className="text-sm mt-1 break-words"><strong>DB</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Manages database connections and storage configurations</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Configuration Section</h5>
                <p className="text-sm mt-1 break-words"><strong>Prompts</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Defines system-level prompts and instruction templates</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Configuration Section</h5>
                <p className="text-sm mt-1 break-words"><strong>Server</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Configures backend server settings, ports, and API endpoints</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Configuration Section</h5>
                <p className="text-sm mt-1 break-words"><strong>Controls</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Sets Model downloading options and safety controls, content filtering, and security policies (only for users who have <strong>Connected Enterprise Servers</strong> ON in <strong>Config &gt; App</strong>)</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Configuration Section</h5>
                <p className="text-sm mt-1 break-words"><strong>Templates</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Manages pre-built templates for agents, bots, and workflows</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Configuration Section</h5>
                <p className="text-sm mt-1 break-words"><strong>Connections</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Handles external service integrations and API credentials</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Configuration Section</h5>
                <p className="text-sm mt-1 break-words"><strong>Reset</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Provides options to reset bots, agents and model configurations to default values</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Configuration Section</h5>
                <p className="text-sm mt-1 break-words"><strong>Display Toggler</strong></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Quick toggle between light and dark display modes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <p>
          Each section provides granular control over specific aspects of Model HQ's functionality, enabling customization tailored to organizational needs and deployment environments.
        </p>

        <h2 id="31-app">3.1 App</h2>

        <p>
          The <strong>App</strong> section controls global application behavior, default experiences, visibility of features, and runtime modes within Model HQ. These settings determine how users interact with bots, agents, datasets, services, and enterprise integrations.
        </p>

        <img src="/v1/configure/03_app.png" alt="tools" />

        <h3 id="311-default-bot">3.1.1 Default Bot</h3>

        <p>
          Defines which bot is launched by default when the application starts - the listed bots include Bots that are Model HQ template bots as well as any bots the user may have created with Model HQ.
        </p>

        <p>
          <strong>Available Options:</strong>
        </p>

        <ul>
          <li>AC Repair Bot</li>
          <li>Bot with Agents</li>
          <li>Dataset Bot</li>
          <li>Demo Bot</li>
          <li>Fast Start Chatbot</li>
          <li>Model HQ Embedded Agent Bot</li>
          <li>Model HQ API Server Bot</li>
          <li>Model HQ Model Sampler</li>
          <li>Persona Bot</li>
          <li>SQL Bot</li>
        </ul>

        <p>
          <strong>Recommendation:</strong>
        </p>

        <ul>
          <li>Use <strong>Fast Start Chatbot</strong> for quick onboarding and general usage.</li>
          <li>Use <strong>API Server Bots</strong> when running Model HQ primarily as a backend service.</li>
          <li>Use <strong>Bot with Agents</strong> for multi-agent workflows.</li>
        </ul>

        <h3 id="312-agent-process-run-mode">3.1.2 Agent Process Run Mode</h3>

        <p>
          Controls how agent execution details are displayed during runtime.
        </p>

        <p>
          <strong>Options:</strong>
        </p>

        <ul>
          <li><strong>Detailed Process</strong> Shows step-by-step execution details for each agent.</li>
          <li><strong>Summary View</strong> Displays a concise execution summary.</li>
        </ul>

        <p>
          <strong>When to use:</strong>
        </p>

        <ul>
          <li>Detailed Process for debugging and development.</li>
          <li>Summary View for end-user or production environments.</li>
        </ul>

        <h3 id="313-dev-mode">3.1.3 Dev Mode</h3>

        <p>
          Toggles developer-focused features and build options.
        </p>

        <p>
          <strong>Options:</strong>
        </p>

        <ul>
          <li><strong>ON</strong> Enables developer tools, configuration panels, and advanced options.</li>
          <li><strong>OFF</strong> Hides developer options for end-user deployment.</li>
        </ul>

        <p>
          <strong>Recommendation:</strong>
        </p>

        <ul>
          <li>Enable during development.</li>
          <li>Disable before deploying to non-technical users.</li>
        </ul>

        <h3 id="314-app-mode">3.1.4 App Mode</h3>

        <p>
          Controls whether application-level apps are displayed.
        </p>

        <p>
          <strong>Options:</strong>
        </p>

        <ul>
          <li><strong>ON</strong> Displays available apps within the UI.</li>
          <li><strong>OFF</strong> Hides app-level UI elements.</li>
        </ul>

        <h3 id="315-connected-enterprise-servers">3.1.5 Connected Enterprise Servers</h3>

        <p>
          Enables connectivity to enterprise Model HQ servers.
        </p>

        <p>
          <strong>Options:</strong>
        </p>

        <ul>
          <li><strong>ON</strong> Allows connection to enterprise accounts and managed servers.</li>
          <li><strong>OFF</strong> Disables all enterprise server connections.</li>
        </ul>

        <p>
          <strong>Requirement:</strong>
        </p>

        <ul>
          <li>Must be enabled if using enterprise-hosted Model HQ infrastructure.</li>
        </ul>

        <h3 id="316-air-gap-mode">3.1.6 Air Gap Mode</h3>

        <p>
          Runs the application completely disconnected from external networks.
        </p>

        <p>
          <strong>Options:</strong>
        </p>

        <ul>
          <li><strong>ON</strong> Blocks all external connections, including data ingestion.</li>
          <li><strong>OFF</strong> Allows internet and external system access.</li>
        </ul>

        <p>
          <strong>Use cases:</strong>
        </p>

        <ul>
          <li>Secure or regulated environments.</li>
          <li>Offline or isolated deployments.</li>
        </ul>

        <h3 id="317-main-menu-cards">3.1.7 Main Menu Cards</h3>

        <p>
          Controls which primary feature cards appear in the main menu.
        </p>

        <p>
          <strong>Available Cards:</strong>
        </p>

        <ul>
          <li>Agents</li>
          <li>Bots</li>
          <li>Sources</li>
          <li>Datasets</li>
          <li>Services</li>
          <li>Integrations</li>
          <li>Projects</li>
          <li>Models</li>
        </ul>

        <p>
          <strong>Purpose:</strong>
        </p>

        <ul>
          <li>Customize UI visibility based on user roles or use cases.</li>
          <li>Simplify the interface for focused workflows.</li>
        </ul>

        <h3 id="318-agent-processes">3.1.8 Agent Processes</h3>

        <p>
          Select specific agent processes to expose in the main menu.
        </p>

        <p>
          <strong>Examples:</strong>
        </p>

        <ul>
          <li>AC Field Tech Support</li>
          <li>Cloud API Agent</li>
          <li>Conditional Agent</li>
          <li>Contract Analyzer</li>
          <li>Customer Support</li>
          <li>Dataset Analysis</li>
          <li>Financial Data Extractor</li>
          <li>Image Tagger</li>
          <li>Image Generation Agent</li>
          <li>Research Process</li>
          <li>Summarize Website</li>
        </ul>

        <p>
          <strong>Behavior:</strong>
        </p>

        <ul>
          <li>Only selected agents appear as quick-access options.</li>
          <li>Useful for role-based or task-specific setups.</li>
        </ul>

        <h3 id="319-custom-bot-apps">3.1.9 Custom Bot Apps</h3>

        <p>
          Choose which custom bots appear in the main menu.
        </p>

        <p>
          <strong>Available Bots:</strong>
        </p>

        <ul>
          <li>Bot with Agents</li>
          <li>Dataset Bot</li>
          <li>Demo Bot</li>
          <li>Fast Start Chatbot</li>
          <li>Model HQ Embedded Agent Bot</li>
          <li>Model HQ API Server Bot</li>
          <li>Model HQ Model Sampler</li>
          <li>Model HQ API Server Biz Bot</li>
          <li>Model HQ Biz Bot</li>
          <li>Persona Bot</li>
          <li>SQL Bot</li>
        </ul>

        <p>
          <strong>Purpose:</strong>
        </p>

        <ul>
          <li>Control bot availability per deployment.</li>
          <li>Reduce UI clutter.</li>
        </ul>

        <h3 id="3110-source-cards">3.1.10 Source Cards</h3>

        <p>
          Select source configurations to display in the main menu.
        </p>

        <p>
          <strong>Examples:</strong>
        </p>

        <ul>
          <li><code>test_source.jsonl</code></li>
        </ul>

        <p>
          Used to provide quick access to predefined data sources.
        </p>

        <h3 id="3111-dataset-cards">3.1.11 Dataset Cards</h3>

        <p>
          Controls which datasets are accessible from the main menu.
        </p>

        <p>
          <strong>Examples:</strong>
        </p>

        <ul>
          <li><code>test_dataset.jsonl</code></li>
        </ul>

        <p>
          Ideal for fast dataset-driven workflows.
        </p>

        <h3 id="3112-custom-service-cards">3.1.12 Custom Service Cards</h3>

        <p>
          Displays custom service integrations in the main menu.
        </p>

        <p>
          <strong>Examples:</strong>
        </p>

        <ul>
          <li><code>AC_Field_Tech_Support</code></li>
        </ul>

        <p>
          Used to expose REST, MCP, or backend services directly in the UI.
        </p>

        <h3 id="3113-auto-restart-ui">3.1.13 Auto-Restart UI</h3>

        <p>
          Controls automatic UI restart behavior if a session or connection drops.
        </p>

        <p>
          <strong>Options:</strong>
        </p>

        <ul>
          <li><strong>ON</strong> Automatically restarts the UI on disconnect.</li>
          <li><strong>OFF</strong> Requires manual restart.</li>
        </ul>

        <p>
          <strong>Note:</strong>
        </p>

        <ul>
          <li>If enabled, use the on-screen shutdown button to stop the application.</li>
        </ul>

        <h3 id="3114-reset-defaults">3.1.14 Reset Defaults</h3>

        <p>
          Resets all App settings to their default values.
        </p>

        <p>
          <strong>Use case:</strong>
        </p>

        <ul>
          <li>Recover from misconfiguration.</li>
          <li>Quickly revert experimental changes.</li>
        </ul>

        <p>
          These App settings allow fine-grained control over user experience, security posture, feature exposure, and runtime behavior across development, enterprise, and air-gapped deployments.
        </p>

        <h2 id="32-services">3.2 Services</h2>

        <p>
          This is a master panel of services that are available to use in creating agents. Making the selection here will ensure that each of these services are displayed as an option in the Nodes in agents. (Note: Services outside of this master list can be selected at time of use in the agent canvas if not pre-selected here.)
        </p>

        <img src="/v1/configure/03_services.png" alt="tools" />

        <h2 id="321-core-services">3.2.1 Core Services</h2>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Service</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><code>chat</code></td>
              <td className="border border-border px-4 py-2">General conversational interface for interacting with the model. Supports multi-turn dialogue with contextual memory.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>rag_answer</code></td>
              <td className="border border-border px-4 py-2">Retrieval-Augmented Generation service that retrieves relevant knowledge from connected data sources before generating a response.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>vision</code></td>
              <td className="border border-border px-4 py-2">Enables image understanding and visual reasoning from uploaded images.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>generate_word_doc</code></td>
              <td className="border border-border px-4 py-2">Generates structured Microsoft Word documents programmatically with formatting and organized content.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>ocr_vision</code></td>
              <td className="border border-border px-4 py-2">Visual reasoning to extract and interpret text or images from PDFs. Use for multi-page PDFs with images or handwriting.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>ocr</code></td>
              <td className="border border-border px-4 py-2">Optical Character Recognition Extracts raw text from PDFs without deeper visual reasoning. Recommended for multi-page PDF documents with mostly text.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>agent_report</code></td>
              <td className="border border-border px-4 py-2">Produces structured reports summarizing agent activities, outputs, and analysis.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>wikipedia_search</code></td>
              <td className="border border-border px-4 py-2">Retrieves structured information directly from Wikipedia.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>prompt_builder</code></td>
              <td className="border border-border px-4 py-2">Assists in constructing optimized and structured prompts for AI workflows.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>embedded_bot</code></td>
              <td className="border border-border px-4 py-2">Deployable chatbot service that can be embedded into applications or websites.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>condition</code></td>
              <td className="border border-border px-4 py-2">Provides conditional logic capabilities to branch workflows dynamically.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>web_search</code></td>
              <td className="border border-border px-4 py-2">Performs real-time web searches to retrieve current and relevant information.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>boolean</code></td>
              <td className="border border-border px-4 py-2">Executes logical operations that return true or false outputs.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>extract</code></td>
              <td className="border border-border px-4 py-2">Extracts structured or key information from unstructured text inputs.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>answer</code></td>
              <td className="border border-border px-4 py-2">Provides direct question answering without maintaining conversational state.</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>chat</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">General conversational interface for interacting with the model. Supports multi-turn dialogue with contextual memory.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>rag_answer</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Retrieval-Augmented Generation service that retrieves relevant knowledge from connected data sources before generating a response.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>vision</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Enables image understanding and visual reasoning from uploaded images.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>generate_word_doc</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generates structured Microsoft Word documents programmatically with formatting and organized content.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>ocr_vision</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Visual reasoning to extract and interpret text or images from PDFs. Use for multi-page PDFs with images or handwriting.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>ocr</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Optical Character Recognition Extracts raw text from PDFs without deeper visual reasoning. Recommended for multi-page PDF documents with mostly text.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>agent_report</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Produces structured reports summarizing agent activities, outputs, and analysis.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>wikipedia_search</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Retrieves structured information directly from Wikipedia.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>prompt_builder</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Assists in constructing optimized and structured prompts for AI workflows.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>embedded_bot</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Deployable chatbot service that can be embedded into applications or websites.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>condition</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Provides conditional logic capabilities to branch workflows dynamically.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>web_search</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Performs real-time web searches to retrieve current and relevant information.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>boolean</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Executes logical operations that return true or false outputs.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>extract</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Extracts structured or key information from unstructured text inputs.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>answer</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Provides direct question answering without maintaining conversational state.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h3 id="322-classifiers">3.2.2 Classifiers</h3>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Service</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><code>sentiment</code></td>
              <td className="border border-border px-4 py-2">Determines sentiment polarity such as positive, negative, or neutral.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>emotions</code></td>
              <td className="border border-border px-4 py-2">Detects emotional tone within text such as joy, anger, or sadness.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>topics</code></td>
              <td className="border border-border px-4 py-2">Identifies major topics discussed within a text.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>tags</code></td>
              <td className="border border-border px-4 py-2">Generates relevant tags or labels based on content.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>intent</code></td>
              <td className="border border-border px-4 py-2">Identifies user intent from textual input.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>ratings</code></td>
              <td className="border border-border px-4 py-2">Predicts rating scores derived from textual feedback from 1-5.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>ner</code></td>
              <td className="border border-border px-4 py-2">Performs Named Entity Recognition to identify entities such as people, organizations, and locations.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>xsum</code></td>
              <td className="border border-border px-4 py-2">Generates highly concise summaries optimized for brevity.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>summary</code></td>
              <td className="border border-border px-4 py-2">Produces structured and comprehensive summaries of content.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>category</code></td>
              <td className="border border-border px-4 py-2">Assigns predefined categories to text inputs.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>q_gen</code></td>
              <td className="border border-border px-4 py-2">Generates questions based on provided content.</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>sentiment</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Determines sentiment polarity such as positive, negative, or neutral.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>emotions</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Detects emotional tone within text such as joy, anger, or sadness.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>topics</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Identifies major topics discussed within a text.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>tags</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generates relevant tags or labels based on content.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>intent</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Identifies user intent from textual input.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>ratings</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Predicts rating scores derived from textual feedback from 1-5.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>ner</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Performs Named Entity Recognition to identify entities such as people, organizations, and locations.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>xsum</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generates highly concise summaries optimized for brevity.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>summary</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Produces structured and comprehensive summaries of content.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>category</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Assigns predefined categories to text inputs.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>q_gen</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generates questions based on provided content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h3 id="323-datasets">3.2.3 Datasets</h3>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Service</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><code>select_keys</code></td>
              <td className="border border-border px-4 py-2">Selects specific keys from structured data objects such as a larger JSON dictionary.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>build_dataset</code></td>
              <td className="border border-border px-4 py-2">Converts a selected input JSON dictionary into a dataset.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>ds_command_filter</code></td>
              <td className="border border-border px-4 py-2">Applies command-based filtering logic to datasets.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>ds_column_filter</code></td>
              <td className="border border-border px-4 py-2">Keep rows where a selected column meets your condition.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>ds_column_analysis</code></td>
              <td className="border border-border px-4 py-2">Generates a detailed report based on selected column.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>ds_report</code></td>
              <td className="border border-border px-4 py-2">Generates a report of the dataset and the workflow results based on the agent run.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>ds_column_select</code></td>
              <td className="border border-border px-4 py-2">Returns the selected column from the dataset.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>ds_ask_dataset</code></td>
              <td className="border border-border px-4 py-2">Uses a natural language question to retrieve relevant information from the dataset.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>ds_readout</code></td>
              <td className="border border-border px-4 py-2">Displays a selection from the dataset for display.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>ds_smart_filter</code></td>
              <td className="border border-border px-4 py-2">Find rows that match the meaning of your query.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>ds_keyword_filter</code></td>
              <td className="border border-border px-4 py-2">Filter rows based on exact text matches in the selected column.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>ds_plot</code></td>
              <td className="border border-border px-4 py-2">Generates a visual plot chart from the selected dataset.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>ds_statistics</code></td>
              <td className="border border-border px-4 py-2">Perform deeper statistical analysis and generate insights.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>load_dataset</code></td>
              <td className="border border-border px-4 py-2">Loads datasets into Agent state.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>create_json</code></td>
              <td className="border border-border px-4 py-2">Converts structured data into JSON format.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>ds_stats_analysis</code></td>
              <td className="border border-border px-4 py-2">Performs advanced statistical analysis on datasets.</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>select_keys</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Selects specific keys from structured data objects such as a larger JSON dictionary.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>build_dataset</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Converts a selected input JSON dictionary into a dataset.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>ds_command_filter</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Applies command-based filtering logic to datasets.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>ds_column_filter</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Keep rows where a selected column meets your condition.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>ds_column_analysis</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generates a detailed report based on selected column.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>ds_report</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generates a report of the dataset and the workflow results based on the agent run.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>ds_column_select</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Returns the selected column from the dataset.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>ds_ask_dataset</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Uses a natural language question to retrieve relevant information from the dataset.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>ds_readout</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Displays a selection from the dataset for display.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>ds_smart_filter</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Find rows that match the meaning of your query.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>ds_keyword_filter</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Filter rows based on exact text matches in the selected column.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>ds_plot</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generates a visual plot chart from the selected dataset.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>ds_statistics</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Perform deeper statistical analysis and generate insights.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>load_dataset</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Loads datasets into Agent state.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>create_json</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Converts structured data into JSON format.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>ds_stats_analysis</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Performs advanced statistical analysis on datasets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h3 id="324-specialized-services">3.2.4 Specialized Services</h3>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Service</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><code>build_table</code></td>
              <td className="border border-border px-4 py-2">Constructs structured tables from input data.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>query_custom_table</code></td>
              <td className="border border-border px-4 py-2">Executes queries on custom-defined tables.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>semantic_filter</code></td>
              <td className="border border-border px-4 py-2">Filters content based on semantic similarity.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>text_filter</code></td>
              <td className="border border-border px-4 py-2">Applies keyword-based filtering logic to text.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>document_filter</code></td>
              <td className="border border-border px-4 py-2">Filters documents based on defined criteria.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>table_filter</code></td>
              <td className="border border-border px-4 py-2">Filters table rows using specified conditions.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>transformer</code></td>
              <td className="border border-border px-4 py-2">Applies transformation models for rewriting or modifying text.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>aggregate_context</code></td>
              <td className="border border-border px-4 py-2">Combines multiple context sources into a unified reasoning context.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>create_context</code></td>
              <td className="border border-border px-4 py-2">Builds structured contextual memory for agent workflows.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>parse_document</code></td>
              <td className="border border-border px-4 py-2">Parses structured documents into defined components.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>report_commentary</code></td>
              <td className="border border-border px-4 py-2">Generates commentary and analysis on structured reports.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>speech_gen</code></td>
              <td className="border border-border px-4 py-2">Converts text input into speech output.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>image_gen</code></td>
              <td className="border border-border px-4 py-2">Generates images from text prompts.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>get_stock_summary</code></td>
              <td className="border border-border px-4 py-2">Retrieves summarized financial stock information.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>vision_batch</code></td>
              <td className="border border-border px-4 py-2">Processes multiple images in batch mode.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>parse_batch</code></td>
              <td className="border border-border px-4 py-2">Parses multiple documents or inputs in batch processing.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>extract-tiny</code></td>
              <td className="border border-border px-4 py-2">Lightweight extraction service optimized for speed and efficiency.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>website_scraper</code></td>
              <td className="border border-border px-4 py-2">Extracts structured information from websites.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>extract_table</code></td>
              <td className="border border-border px-4 py-2">Extracts tabular data from documents such as PDFs or scanned files.</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>build_table</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Constructs structured tables from input data.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>query_custom_table</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Executes queries on custom-defined tables.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>semantic_filter</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Filters content based on semantic similarity.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>text_filter</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Applies keyword-based filtering logic to text.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>document_filter</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Filters documents based on defined criteria.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>table_filter</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Filters table rows using specified conditions.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>transformer</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Applies transformation models for rewriting or modifying text.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>aggregate_context</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Combines multiple context sources into a unified reasoning context.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>create_context</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Builds structured contextual memory for agent workflows.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>parse_document</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Parses structured documents into defined components.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>report_commentary</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generates commentary and analysis on structured reports.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>speech_gen</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Converts text input into speech output.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>image_gen</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generates images from text prompts.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>get_stock_summary</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Retrieves summarized financial stock information.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>vision_batch</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Processes multiple images in batch mode.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>parse_batch</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Parses multiple documents or inputs in batch processing.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>extract-tiny</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Lightweight extraction service optimized for speed and efficiency.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>website_scraper</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Extracts structured information from websites.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>extract_table</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Extracts tabular data from documents such as PDFs or scanned files.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h3 id="325-integrations">3.2.5 Integrations</h3>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Service</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2"><code>push_to_s3</code></td>
              <td className="border border-border px-4 py-2">Uploads files or structured data to Amazon S3 storage.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>pull_from_s3</code></td>
              <td className="border border-border px-4 py-2">Retrieves files or data from Amazon S3 storage.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>connect_library</code></td>
              <td className="border border-border px-4 py-2">Connects to external or internal knowledge libraries.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>query_library</code></td>
              <td className="border border-border px-4 py-2">Executes queries against connected knowledge libraries.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>get_quote</code></td>
              <td className="border border-border px-4 py-2">Retrieves financial stock quote data.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>get_company_financials</code></td>
              <td className="border border-border px-4 py-2">Retrieves company financial reports and structured financial data.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>send_email</code></td>
              <td className="border border-border px-4 py-2">Sends automated emails through configured systems.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>openai_chat</code></td>
              <td className="border border-border px-4 py-2">Integrates OpenAI chat-based model capabilities.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>openai_rag</code></td>
              <td className="border border-border px-4 py-2">Integrates OpenAI-powered Retrieval-Augmented Generation.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>openai_rag_batch</code></td>
              <td className="border border-border px-4 py-2">Performs batch Retrieval-Augmented Generation using OpenAI services.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>anthropic_chat</code></td>
              <td className="border border-border px-4 py-2">Integrates Anthropic chat model capabilities.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><code>gemini_chat</code></td>
              <td className="border border-border px-4 py-2">Integrates Google Gemini chat model capabilities.</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>push_to_s3</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Uploads files or structured data to Amazon S3 storage.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>pull_from_s3</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Retrieves files or data from Amazon S3 storage.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>connect_library</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Connects to external or internal knowledge libraries.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>query_library</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Executes queries against connected knowledge libraries.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>get_quote</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Retrieves financial stock quote data.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>get_company_financials</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Retrieves company financial reports and structured financial data.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>send_email</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Sends automated emails through configured systems.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>openai_chat</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Integrates OpenAI chat-based model capabilities.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>openai_rag</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Integrates OpenAI-powered Retrieval-Augmented Generation.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>openai_rag_batch</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Performs batch Retrieval-Augmented Generation using OpenAI services.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>anthropic_chat</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Integrates Anthropic chat model capabilities.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Service</h5>
                <p className="text-sm mt-1 break-words"><code>gemini_chat</code></p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Integrates Google Gemini chat model capabilities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h3 id="326-custom-services">3.2.6 Custom Services</h3>

        <p>
          Custom services were described as those services that had been created within Model HQ to support domain-specific workflows, specialized automation, or organization-specific requirements. These services extend the standard catalog by incorporating tailored logic, configurations, and business rules.
        </p>

        <h2 id="33-ui">3.3 UI</h2>

        <p>
          The <strong>UI</strong> section enables fast and comprehensive customization of Model HQ's visual appearance, including bot names, icons, colors, and other interface elements.
        </p>

        <img src="/v1/configure/04_ui.png" alt="tools" />

        <p>
          This configuration panel allows the entire Model HQ appearance to be customized according to organizational branding requirements. The following elements can be modified:
        </p>

        <ul>
          <li><strong>Theme</strong>: Light or dark mode selection</li>
          <li><strong>Title</strong>: Application window title</li>
          <li><strong>App Title</strong>: Display name shown in the interface</li>
          <li><strong>Company Name</strong>: Organization name displayed throughout the application</li>
          <li><strong>Company Website</strong>: URL link associated with the organization</li>
          <li><strong>Icon</strong>: Custom application icon/logo</li>
          <li><strong>Header Color</strong>: Color scheme for the top navigation bar</li>
          <li><strong>Footer Color</strong>: Color scheme for the bottom interface elements</li>
          <li><strong>Background Color</strong>: Main interface background color</li>
        </ul>

        <p>
          These customization options are designed to enable quick and seamless enterprise branding, allowing organizations to align Model HQ with their unique visual identity and corporate standards.
        </p>

        <h2 id="34-rag">3.4 RAG</h2>

        <p>
          The <strong>RAG (Retrieval Augmented Generation)</strong> section controls how Model HQ retrieves, ranks, and injects external knowledge into model prompts. These settings directly affect answer quality, relevance, performance, and memory usage when working with documents and sources.
        </p>

        <img src="/v1/configure/05_rag.png" alt="tools" />

        <h3 id="341-text-chunk-size">3.4.1 Text Chunk Size</h3>

        <p>
          Defines the target size of text segments created during document parsing.
        </p>

        <p>
          <strong>Purpose:</strong>
        </p>

        <ul>
          <li>Controls how source documents are split before embedding.</li>
          <li>Smaller chunks improve precision.</li>
          <li>Larger chunks preserve more context.</li>
        </ul>

        <p>
          <strong>Example:</strong>
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">600</code>
        </pre>

        <p>
          <strong>Guidance:</strong>
        </p>

        <ul>
          <li>Use smaller values for highly structured or technical documents.</li>
          <li>Use larger values for narrative or long-form content.</li>
        </ul>

        <h3 id="342-context-top-n">3.4.2 Context Top N</h3>

        <p>
          Specifies the number of top-ranked text chunks selected to build the context for the model.
        </p>

        <p>
          <strong>Purpose:</strong>
        </p>

        <ul>
          <li>Limits how many chunks are initially considered relevant.</li>
          <li>Improves speed by narrowing the search space.</li>
        </ul>

        <p>
          <strong>Example:</strong>
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">5</code>
        </pre>

        <h3 id="343-context-target-size">3.4.3 Context Target Size</h3>

        <p>
          Defines the target token size for the final context passed to the model.
        </p>

        <p>
          <strong>Behavior:</strong>
        </p>

        <ul>
          <li>If the target size is not reached using the selected top N chunks, additional chunks are added until the target is met.</li>
        </ul>

        <p>
          <strong>Example:</strong>
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">500</code>
        </pre>

        <p>
          <strong>Impact:</strong>
        </p>

        <ul>
          <li>Larger values provide more context but increase token usage.</li>
          <li>Smaller values reduce latency and cost.</li>
        </ul>

        <h3 id="344-reranker-max-samples">3.4.4 Reranker Max Samples</h3>

        <p>
          Sets the maximum number of text chunks evaluated in memory by the reranker.
        </p>

        <p>
          <strong>Purpose:</strong>
        </p>

        <ul>
          <li>Controls how many candidates are semantically re-scored.</li>
          <li>Higher values improve ranking accuracy but increase memory and compute usage.</li>
        </ul>

        <p>
          <strong>Example:</strong>
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">1000</code>
        </pre>

        <h3 id="345-context-comparison-prompt">3.4.5 Context Comparison Prompt</h3>

        <p>
          Adds a system instruction to the prompt when multiple source documents are used.
        </p>

        <p>
          <strong>Default Example:</strong>
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">Here are several sources - please use as the basis for answering questions, and cite the specific source, if used, in generating your answer.</code>
        </pre>

        <p>
          <strong>Use case:</strong>
        </p>

        <ul>
          <li>Ensures answers reference and differentiate between multiple documents.</li>
          <li>Encourages source-aware responses.</li>
        </ul>

        <h3 id="346-rag-prompt-instruction">3.4.6 RAG Prompt Instruction</h3>

        <p>
          Custom instruction passed directly into the RAG pipeline.
        </p>

        <p>
          <strong>Purpose:</strong>
        </p>

        <ul>
          <li>Guides how retrieved context should be interpreted.</li>
          <li>Can enforce tone, citation format, or reasoning style.</li>
        </ul>

        <p>
          <strong>Example Use Cases:</strong>
        </p>

        <ul>
          <li>Enforce strict citation requirements.</li>
          <li>Limit answers to retrieved content only.</li>
          <li>Control summarization vs extraction behavior.</li>
        </ul>

        <h3 id="347-rag-model">3.4.7 RAG Model</h3>

        <p>
          Selects the language model used to generate responses using retrieved context.
        </p>

        <p>
          <strong>Example:</strong>
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">llama-3.2-3b-instruct-ov</code>
        </pre>

        <p>
          <strong>Recommendation:</strong>
        </p>

        <ul>
          <li>Use instruction-tuned models for best RAG performance.</li>
          <li>Smaller models improve speed, larger models improve reasoning.</li>
        </ul>

        <h3 id="348-reranker-model">3.4.8 Reranker Model</h3>

        <p>
          Defines the semantic ranking model used to reorder retrieved text chunks.
        </p>

        <p>
          <strong>Example:</strong>
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">jina-reranker-v1-tiny-en-ov</code>
        </pre>

        <p>
          <strong>Role:</strong>
        </p>

        <ul>
          <li>Improves relevance by re-ranking chunks beyond vector similarity.</li>
          <li>Critical for multi-document or noisy datasets.</li>
        </ul>

        <h3 id="349-embedding-model">3.4.9 Embedding Model</h3>

        <p>
          Selects the model used to convert text into vector embeddings.
        </p>

        <p>
          <strong>Example:</strong>
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">all-mini-lm-l6-v2-ov</code>
        </pre>

        <p>
          <strong>Impact:</strong>
        </p>

        <ul>
          <li>Affects retrieval accuracy and embedding performance.</li>
          <li>Smaller models are faster, larger models capture deeper semantics.</li>
        </ul>

        <h3 id="3410-use-wikipedia-as-source">3.4.10 Use Wikipedia as Source</h3>

        <p>
          Controls whether Wikipedia is included as an external retrieval source.
        </p>

        <p>
          <strong>Options:</strong>
        </p>

        <ul>
          <li><strong>ON</strong> Allows Wikipedia content to be used during retrieval.</li>
          <li><strong>OFF</strong> Restricts retrieval to configured sources only.</li>
        </ul>

        <p>
          <strong>Recommendation:</strong>
        </p>

        <ul>
          <li>Enable for general knowledge queries.</li>
          <li>Disable for enterprise or private datasets.</li>
        </ul>

        <h3 id="3411-update-behavior">3.4.11 Update Behavior</h3>

        <p>
          RAG settings can be updated at any time.
        </p>

        <p>
          <strong>Notes:</strong>
        </p>

        <ul>
          <li>Changes take effect immediately for new queries.</li>
          <li>No restart is required.</li>
        </ul>

        <p>
          These RAG configurations allow fine-tuned control over document retrieval, ranking, and prompt construction, enabling accurate, scalable, and context-aware AI responses across diverse data sources.
        </p>

        <h2 id="35-db">3.5 DB</h2>

        <p>
          The <strong>DB</strong> section provides tools for managing resources on the local Model HQ database.
        </p>

        <img src="/v1/configure/06_db.png" alt="tools" />

        <p>
          The local Model HQ database can be configured to build, view, delete, and manage resources. This database is utilized for querying SQL tables in Chat and Agents, enabling structured data interactions and query-based workflows. Database management capabilities include schema creation, table configuration, and resource cleanup operations.
        </p>

        <h2 id="36-prompts">3.6 Prompts</h2>

        <p>
          The <strong>Prompts</strong> section allows system-level prompts to be added and pre-configured for reuse across sessions.
        </p>

        <img src="/v1/configure/07_prompts.png" alt="tools" />

        <p>
          Custom prompt templates can be created and stored for consistent behavior across different workflows. These pre-configured prompts help standardize model interactions, enforce specific response formats, and maintain consistent tone or style requirements throughout the application.
        </p>

        <h2 id="37-server">3.7 Server</h2>

        <p>
          The <strong>Server</strong> section configures the Backend API Server when running Model HQ in <strong>Headless mode</strong>. These settings define how external clients, agents, or applications connect to Model HQ without using the built-in UI.
        </p>

        <img src="/v1/configure/08_server.png" alt="tools" />

        <h3 id="371-localhost-or-external-ip">3.7.1 Localhost or External IP</h3>

        <p>
          Determines whether the backend server is accessible only on the local machine or exposed over the network.
        </p>

        <p>
          <strong>Options:</strong>
        </p>

        <ul>
          <li><strong>Localhost</strong> Restricts access to the local machine only.</li>
          <li><strong>External IP</strong> Allows other machines and services to connect.</li>
        </ul>

        <p>
          <strong>Guidance:</strong>
        </p>

        <ul>
          <li>Use <strong>Localhost</strong> for development and testing.</li>
          <li>Use <strong>External IP</strong> for production or shared environments.</li>
        </ul>

        <h3 id="372-ip-address">3.7.2 IP Address</h3>

        <p>
          Specifies the IP address the backend server binds to.
        </p>

        <p>
          <strong>Behavior:</strong>
        </p>

        <ul>
          <li>When <strong>Localhost</strong> is selected, this is automatically set to <code>127.0.0.1</code>.</li>
          <li>When <strong>External IP</strong> is selected, provide a valid local or public IP.</li>
        </ul>

        <p>
          <strong>Example:</strong>
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">192.168.29.93</code>
        </pre>

        <h3 id="373-port">3.7.3 Port</h3>

        <p>
          Defines the port on which the Backend API Server listens.
        </p>

        <p>
          <strong>Default:</strong>
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">8088</code>
        </pre>

        <p>
          <strong>Notes:</strong>
        </p>

        <ul>
          <li>Change only if the default port is already in use.</li>
          <li>Ensure the port is open in firewall and security group rules if exposed externally.</li>
        </ul>

        <h3 id="374-workers">3.7.4 Workers</h3>

        <p>
          Controls the number of lightweight worker processes handling incoming requests.
        </p>

        <p>
          <strong>Purpose:</strong>
        </p>

        <ul>
          <li>Enables basic concurrency for API calls.</li>
          <li>Designed to remain lightweight.</li>
        </ul>

        <p>
          <strong>Example:</strong>
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">4</code>
        </pre>

        <p>
          <strong>Recommendation:</strong>
        </p>

        <ul>
          <li>Keep this value low.</li>
          <li>Increase only if you experience measurable performance bottlenecks.</li>
        </ul>

        <h3 id="375-trusted-key">3.7.5 Trusted Key</h3>

        <p>
          Optional shared secret used to authenticate API requests.
        </p>

        <p>
          <strong>Usage:</strong>
        </p>

        <ul>
          <li>Acts as a simple access control mechanism.</li>
          <li>Must be provided by clients when authentication is enabled.</li>
        </ul>

        <p>
          <strong>Example:</strong>
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">my-secure-trusted-key</code>
        </pre>

        <h3 id="376-require-trusted-key">3.7.6 Require Trusted Key</h3>

        <p>
          Controls whether the Trusted Key is mandatory for API access.
        </p>

        <p>
          <strong>Options:</strong>
        </p>

        <ul>
          <li><strong>Require Key</strong> All API requests must include the trusted key.</li>
          <li><strong>No Key</strong> API is accessible without authentication.</li>
        </ul>

        <p>
          <strong>Security Guidance:</strong>
        </p>

        <ul>
          <li>Enable <strong>Require Key</strong> for any network-exposed or production deployment.</li>
          <li>Use <strong>No Key</strong> only in isolated or local environments.</li>
        </ul>

        <h3 id="377-access-behavior">3.7.7 Access Behavior</h3>

        <p>
          When enabled and configured correctly:
        </p>

        <ul>
          <li>Agents and services can communicate with Model HQ via REST APIs.</li>
          <li>Headless mode allows full automation without the UI.</li>
        </ul>

        <h3 id="378-applying-changes">3.7.8 Applying Changes</h3>

        <p>
          Server configuration updates take effect immediately.
        </p>

        <p>
          <strong>Notes:</strong>
        </p>

        <ul>
          <li>Restart is not required unless explicitly prompted.</li>
          <li>Verify connectivity after changes using a test API call.</li>
        </ul>

        <p>
          This configuration enables secure and flexible deployment of Model HQ as a backend service, supporting both local development and production-grade headless integrations.
        </p>

        <h2 id="38-controls">3.8 Controls</h2>

        <p>
          The <strong>Controls</strong> section defines global governance, security, validation, and safety behaviors for model execution and inference. These settings influence how models are loaded, validated, executed, and how sensitive data is handled across the platform.
        </p>

        <img src="/v1/configure/09_controls.png" alt="tools" />

        <h3 id="381-inference-persistence">3.8.1 Inference Persistence</h3>

        <p>
          Controls whether inference results are stored locally.
        </p>

        <p>
          <strong>Options:</strong>
        </p>

        <ul>
          <li><strong>Do Not Save</strong> Inference data is not persisted.</li>
          <li><strong>Save</strong> All inference outputs are saved to the local database.</li>
        </ul>

        <p>
          <strong>Guidance:</strong>
        </p>

        <ul>
          <li>Disable saving for privacy sensitive or transient workloads.</li>
          <li>Enable saving for debugging, audits, or analytics.</li>
        </ul>

        <h3 id="382-model-repository-source">3.8.2 Model Repository Source</h3>

        <p>
          Specifies the repository used to download models.
        </p>

        <p>
          <strong>Options:</strong>
        </p>

        <ul>
          <li><strong>Hugging Face</strong> Pulls models from the Hugging Face ecosystem.</li>
          <li><strong>Azure</strong> Pulls models from Azure based model storage.</li>
        </ul>

        <p>
          <strong>Use Case:</strong>
        </p>

        <ul>
          <li>Select <strong>Azure</strong> for enterprise managed environments.</li>
          <li>Select <strong>Hugging Face</strong> for broader open model access.</li>
        </ul>

        <h3 id="383-model-validation-on-download">3.8.3 Model Validation on Download</h3>

        <p>
          Controls hash verification when a model is first downloaded.
        </p>

        <p>
          <strong>Options:</strong>
        </p>

        <ul>
          <li><strong>Validate on Download</strong> Ensures model integrity at download time.</li>
          <li><strong>Skip Validation</strong> Downloads without integrity checks.</li>
        </ul>

        <p>
          <strong>Recommendation:</strong>
        </p>

        <ul>
          <li>Keep validation enabled in production environments.</li>
        </ul>

        <h3 id="384-model-validation-on-load">3.8.4 Model Validation on Load</h3>

        <p>
          Controls whether integrity checks occur each time a model is loaded from disk.
        </p>

        <p>
          <strong>Options:</strong>
        </p>

        <ul>
          <li><strong>Validate on Every Load</strong> Verifies model consistency on every read.</li>
          <li><strong>Skip Validation</strong> Skips repeated validation for faster startup.</li>
        </ul>

        <p>
          <strong>Tradeoff:</strong>
        </p>

        <ul>
          <li>Validation improves safety.</li>
          <li>Skipping improves performance.</li>
        </ul>

        <h3 id="385-cloud-api-access">3.8.5 Cloud API Access</h3>

        <p>
          Controls whether public cloud APIs can be used.
        </p>

        <p>
          <strong>Options:</strong>
        </p>

        <ul>
          <li><strong>Enable Cloud API</strong> Allows use of external cloud based model APIs.</li>
          <li><strong>Disable Cloud API</strong> Restricts execution to local models only.</li>
        </ul>

        <p>
          <strong>Security Note:</strong>
        </p>

        <ul>
          <li>Disable cloud APIs for air gapped or compliance restricted environments.</li>
        </ul>

        <h3 id="386-prompt-preview">3.8.6 Prompt Preview</h3>

        <p>
          Controls visibility of the final prompt before execution.
        </p>

        <p>
          <strong>Options:</strong>
        </p>

        <ul>
          <li><strong>On</strong> Displays the constructed prompt.</li>
          <li><strong>Off</strong> Executes without preview.</li>
        </ul>

        <p>
          <strong>Use Case:</strong>
        </p>

        <ul>
          <li>Enable during development and debugging.</li>
          <li>Disable for streamlined end user experiences.</li>
        </ul>

        <h3 id="387-enforcement-action">3.8.7 Enforcement Action</h3>

        <p>
          Defines how the system responds when sensitive patterns are detected.
        </p>

        <p>
          <strong>Options:</strong>
        </p>

        <ul>
          <li><strong>Redact</strong> Automatically masks detected content.</li>
          <li><strong>Warn</strong> Flags content but allows execution.</li>
        </ul>

        <h3 id="388-pattern-redaction">3.8.8 Pattern Redaction</h3>

        <p>
          Specifies which sensitive data patterns are detected and handled.
        </p>

        <p>
          <strong>Available Patterns:</strong>
        </p>

        <ul>
          <li><code>us_ssn</code></li>
          <li><code>aba_routing_numbers</code></li>
          <li><code>email</code></li>
          <li><code>credit_card</code></li>
          <li><code>us_dl</code></li>
          <li><code>us_passport</code></li>
          <li><code>date</code></li>
          <li><code>iban</code></li>
          <li><code>in_pan</code></li>
          <li><code>url</code></li>
          <li><code>crypto</code></li>
          <li><code>phone_number</code></li>
        </ul>

        <p>
          <strong>Behavior:</strong>
        </p>

        <ul>
          <li>Selected patterns are either redacted or warned based on the configured action.</li>
        </ul>

        <h3 id="389-classifier-tests">3.8.9 Classifier Tests</h3>

        <p>
          Enables built in content classifiers for safety and quality.
        </p>

        <p>
          <strong>Available Tests:</strong>
        </p>

        <ul>
          <li><code>prompt_injection_detection</code></li>
          <li><code>toxic_detection</code></li>
          <li><code>language_detection</code></li>
          <li><code>bias_detection</code></li>
        </ul>

        <p>
          <strong>Purpose:</strong>
        </p>

        <ul>
          <li>Detects unsafe, malicious, or policy violating content.</li>
          <li>Improves trust and governance across model usage.</li>
        </ul>

        <h3 id="3810-automated-configuration">3.8.10 Automated Configuration</h3>

        <p>
          <strong>Choose For Me</strong> automatically selects recommended defaults based on environment and use case.
        </p>

        <p>
          <strong>Use Case:</strong>
        </p>

        <ul>
          <li>Quick setup for new deployments.</li>
          <li>Safe baseline configuration for most users.</li>
        </ul>

        <p>
          The <strong>Controls</strong> section provides centralized enforcement of security, compliance, and safety policies, ensuring consistent and governed model behavior across all applications and agents.
        </p>

        <h2 id="39-templates">3.9 Templates</h2>

        <p>
          The <strong>Templates</strong> section enables custom templates to be created for accelerated bot and agent development.
        </p>

        <img src="/v1/configure/10_templates.png" alt="tools" />

        <p>
          Template management provides options to build new templates or edit and view existing ones. Custom templates streamline the creation process by providing pre-configured structures, default settings, and reusable components. This significantly reduces development time when building multiple bots or agents with similar configurations or workflow patterns.
        </p>

        <h2 id="310-connections">3.10 Connections</h2>

        <p>
          The <strong>Connections</strong> screen allows backend API endpoints to be configured for Model HQ connectivity.
        </p>

        <img src="/v1/configure/11_connections.png" alt="tools" />

        <h3 id="3101-api-name">3.10.1 API Name</h3>

        <p>
          A descriptive label to identify the connection within the UI can be provided.
        </p>

        <p>
          <strong>Example:</strong> <code>Model HQ Server</code>
        </p>

        <h3 id="3102-ip-address">3.10.2 IP Address</h3>

        <p>
          The address of the API server should be specified.
        </p>

        <p>
          <strong>Example:</strong> <code>127.0.0.1</code> for local server
        </p>

        <h3 id="3103-port">3.10.3 Port</h3>

        <p>
          The port where the server is running should be entered.
        </p>

        <p>
          <strong>Example:</strong> <code>52640</code>
        </p>

        <h3 id="3104-secret-key">3.10.4 Secret Key</h3>

        <p>
          An optional key used to authenticate requests between Model HQ and the server can be provided.
        </p>

        <h3 id="3105-protocol">3.10.5 Protocol</h3>

        <p>
          The connection protocol should be selected based on the deployment environment.
        </p>

        <ul>
          <li><strong>HTTP</strong> for local or internal setups</li>
          <li><strong>HTTPS</strong> for secure or remote connections</li>
        </ul>

        <h3 id="3106-transfer-local-credentials">3.10.6 Transfer local credentials</h3>

        <p>
          If enabled, local app credentials are copied to the server.
          <br />
          Use only in trusted environments.
        </p>

        <h3 id="3107-activate-connection">3.10.7 Activate Connection</h3>

        <p>
          Turns the connection on or off.
        </p>

        <blockquote data-type="note">
            <p>Only active connections are used.</p>
        </blockquote>

        <h2 id="311-reset">3.11 Reset</h2>

        <p>
          The <strong>Reset</strong> section provides options to reset the application or specific configurations.
        </p>

        <img src="/v1/configure/12_reset.png" alt="tools" />

        <p>
          The following reset options are available:
        </p>

        <ul>
          <li><strong>Default Bots</strong>: Restores default bot configurations</li>
          <li><strong>Default Agents</strong>: Restores default agent configurations</li>
          <li><strong>Reset Model Catalog</strong>: Refreshes the model catalog to default state</li>
          <li><strong>Delete Models</strong>: Removes downloaded models from local storage</li>
          <li><strong>Clear All</strong>: Clears all loaded state for agents, bots, and sources</li>
        </ul>

        <blockquote data-type="caution">
            <p>Reset operations should be performed with caution. Once reset, models, custom applications, and other Model HQ-related files will be deleted and will need to be re-created or re-downloaded.</p>
        </blockquote>

        <h2 id="312-theme-toggler">3.12 Theme toggler</h2>

        <p>
          The theme toggler provides a quick switch between light and dark display modes for the interface.
        </p>

        <img src="/v1/configure/13_themeToggler.png" alt="tools" />

        <h2 id="conclusion">Conclusion</h2>

        <p>
          This document described the comprehensive configuration options available in Model HQ's Configure interface. The configuration system enables fine-grained control over application behavior, visual appearance, RAG performance, database connectivity, safety controls, and enterprise integrations. Key configuration areas include App settings for controlling feature visibility and runtime modes, UI customization for branding and appearance, RAG parameters for optimizing document retrieval and context building, Server settings for headless deployments, Controls for safety and compliance enforcement, and Connections for backend API integration. Understanding and properly configuring these settings enables organizations to optimize Model HQ for their specific use cases—whether prioritizing security in air-gapped environments, customizing branding for enterprise deployments, tuning RAG performance for document-heavy workflows, or establishing robust safety controls for production systems. The flexibility provided by these configuration options allows Model HQ to adapt from development environments to production deployments while maintaining consistent behavior, appearance, and security posture across different scenarios.
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