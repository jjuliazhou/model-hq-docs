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

export default function ExploringServicesInModelHqPage() {
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
            <BreadcrumbPage>Exploring services in Model HQ</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Exploring services in Model HQ</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          The Services section in Model HQ lets you turn useful functions into reusable building blocks. These building blocks can be plugged into agent workflows, connected to outside systems, or used as part of larger automated processes.
        </p>

        <p>
          Think of a service as a way to take something that works on its own — like an agent or an API — and make it something other agents can call and use. For example, an agent can:
        </p>

        <ul>
          <li>Call another agent</li>
          <li>Connect to an external REST API</li>
          <li>Use tools through an MCP server</li>
        </ul>

        <p>
          This makes it possible to build more advanced, multi-step agent systems where each service clearly defines what it takes in (inputs) and what it returns (outputs).
        </p>

        <p>
          Model HQ supports three main types of services:
          <br />
          1) Agent Services – Turn an existing agent into something other agents can call.
          <br />
          2) REST API Services – Connect outside APIs into your agent workflows.
          <br />
          3) MCP Services – Connect MCP tools so agents can use them.
        </p>

        <p>
          Each service is set up in a structured way where you define:
        </p>

        <ul>
          <li>What inputs it needs</li>
          <li>Any runtime settings</li>
          <li>Authentication details (if required)</li>
          <li>What outputs it produces</li>
        </ul>

        <p>
          Because every service follows the same structure, agents can easily work together and connect smoothly with outside systems and tools.
        </p>

        <p>
          The Services interface in Model HQ enables the creation of modular, reusable components that can be integrated into agent workflows, external systems, and orchestrated processes. Services act as building blocks that transform standalone functionality into composable units, allowing agents to invoke other agents, call external REST APIs, or interact with Model Context Protocol (MCP) servers. This capability supports the development of complex, multi-layered agent architectures where each service maintains a well-defined input-output contract.
        </p>

        <p>
          This document provides comprehensive guidance on creating and configuring all three service types within Model HQ. It covers the service interface overview, detailed configuration steps for each service type, and best practices for defining input contexts, runtime parameters, and output structures. Understanding the Services interface is essential for building scalable agent systems, integrating external data sources, and creating reusable components that can be shared across multiple workflows and use cases.
        </p>

        <h2 id="1-launching-the-services-interface">1. Launching the services interface</h2>

        <p>
          The <strong>Services</strong> button in the main menu sidebar can be selected, or the service option can be chosen from the home page as shown in the screenshot.
        </p>

        <img src="/v1/services/01_mainMenu.png" alt="services" />

        <h2 id="2-services-interface-overview">2. Services interface overview</h2>

        <p>
          The Services interface allows three types of services to be created. When no pre-built services exist, an option to build a new service will be displayed as shown in the screenshot.
        </p>

        <img src="/v1/services/02_servicesInterface1.png" alt="services" />

        <p>
          However, when services have been created previously or are already available, the interface will appear as follows:
        </p>

        <img src="/v1/services/02_servicesInterface2.png" alt="services" />

        <p>
          When service creation is initiated, three options will be presented:
        </p>

        <ol>
          <li>Agent</li>
          <li>Rest API Endpoint</li>
          <li>MCP Server</li>
        </ol>

        <img src="/v1/services/03_servicesBuilder.png" alt="services" />

        <p>
          Detailed information about each service type can be found in the sections below.
        </p>

        <h2 id="31-agents-as-service">3.1 Agents as service</h2>

        <p>
          Any agent can be converted into a service, which enables the creation of 'Agents inside Agents' and allows agents to be used as building blocks for more complex agent architectures.
        </p>

        <p>
          To build an agent as a service, the <strong>Agents</strong> option should be selected. A prompt will then appear to choose an existing agent process workflow, which will enable the creation of another agent inside the pre-created agent.
        </p>

        <img src="/v1/services/04_agentServices1.png" alt="services" />

        <p>
          Following this selection, a choice between default and custom service configurations will be presented.
        </p>

        <img src="/v1/services/04_agentServices2.png" alt="services" />

        <p>
          These options serve the following purposes:
        </p>

        <ul>
          <li><strong>Default</strong> - In most cases, the agent can be auto-mapped into a service based on the agent's inputs and outputs.</li>
          <li><strong>Custom</strong> - When more control over how the agent is packaged as a service is needed, inputs and outputs can be customized.</li>
        </ul>

        <h3 id="311-agent-as-service-setup">3.1.1 Agent as service setup</h3>

        <p>
          An Agent can be exposed as a reusable service that can be consumed by other Agents. The service contract is defined by clearly specifying inputs, runtime parameters, shared variables, and outputs.
        </p>

        <img src="/v1/services/04_agentServices3.png" alt="services" />

        <blockquote data-type="note">
            <p>This option will be available when Custom is selected over Default in the previous interface.</p>
        </blockquote>

        <h4 id="3111-configure-service-from-agent">3.1.1.1 Configure service from agent</h4>

        <p>
          This section defines how the Agent behaves when invoked as a service by another Agent.
        </p>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Section</th>
              <th className="border border-border px-4 py-2 text-left">What it Defines</th>
              <th className="border border-border px-4 py-2 text-left">Why it Matters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2">Input Context</td>
              <td className="border border-border px-4 py-2">Primary input object required by the service</td>
              <td className="border border-border px-4 py-2">Ensures the service receives the right data</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Kwargs</td>
              <td className="border border-border px-4 py-2">Runtime configuration parameters</td>
              <td className="border border-border px-4 py-2">Enables flexible and dynamic execution</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Global Variables</td>
              <td className="border border-border px-4 py-2">Variables passed into the service</td>
              <td className="border border-border px-4 py-2">Allows data reuse across Agents</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Output Contexts</td>
              <td className="border border-border px-4 py-2">Data returned by the service</td>
              <td className="border border-border px-4 py-2">Controls what downstream Agents receive</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Section</h5>
                <p className="text-sm mt-1 break-words">Input Context</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">What it Defines</h5>
                <p className="text-sm mt-1 break-words">Primary input object required by the service</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Why it Matters</h5>
                <p className="text-sm mt-1 break-words">Ensures the service receives the right data</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Section</h5>
                <p className="text-sm mt-1 break-words">Kwargs</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">What it Defines</h5>
                <p className="text-sm mt-1 break-words">Runtime configuration parameters</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Why it Matters</h5>
                <p className="text-sm mt-1 break-words">Enables flexible and dynamic execution</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Section</h5>
                <p className="text-sm mt-1 break-words">Global Variables</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">What it Defines</h5>
                <p className="text-sm mt-1 break-words">Variables passed into the service</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Why it Matters</h5>
                <p className="text-sm mt-1 break-words">Allows data reuse across Agents</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Section</h5>
                <p className="text-sm mt-1 break-words">Output Contexts</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">What it Defines</h5>
                <p className="text-sm mt-1 break-words">Data returned by the service</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Why it Matters</h5>
                <p className="text-sm mt-1 break-words">Controls what downstream Agents receive</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h4 id="3112-input-context">3.1.1.2 Input context</h4>

        <p>
          <strong>Purpose</strong>
          <br />
          Defines the main input object expected by the service during execution.
        </p>

        <p>
          <strong>Details</strong>
          <br />
          A context type such as an image, text, document, or other supported object should be selected. This determines what kind of data the calling Agent must supply.
        </p>

        <p>
          <strong>Optional vs Required</strong>
        </p>

        <ul>
          <li><strong>Context is optional</strong>: The service can execute without this input.</li>
          <li><strong>Context is required</strong>: The calling Agent must provide this input for the service to run.</li>
        </ul>

        <p>
          The context should be marked as required when the Agent logic depends on this input to function correctly.
        </p>

        <h4 id="3113-kwargs">3.1.1.3 Kwargs</h4>

        <p>
          <strong>Purpose</strong>
          <br />
          Defines structured runtime parameters passed to the Agent.
        </p>

        <p>
          <strong>Details</strong>
          <br />
          Kwargs are provided as a JSON key-value object and are injected at runtime when the service is invoked.
        </p>

        <p>
          <strong>Common use cases</strong>
        </p>

        <ul>
          <li>Configuration flags</li>
          <li>Processing modes</li>
          <li>Threshold values</li>
          <li>Feature toggles</li>
        </ul>

        <p>
          This allows the same service to behave differently based on runtime parameters without requiring modification of the Agent.
        </p>

        <h4 id="3114-global-variables">3.1.1.4 Global variables</h4>

        <p>
          <strong>Purpose</strong>
          <br />
          Controls which global variables are forwarded into the service.
        </p>

        <p>
          <strong>Details</strong>
          <br />
          Only selected variables are made available inside the service Agent. This ensures clear data boundaries and prevents unintended variable leakage.
        </p>

        <p>
          <strong>Typical usage</strong>
        </p>

        <ul>
          <li>Passing model identifiers</li>
          <li>Sharing query results</li>
          <li>Reusing RAG outputs</li>
          <li>Forwarding intermediate computations</li>
        </ul>

        <h4 id="3115-output-contexts">3.1.1.5 Output contexts</h4>

        <p>
          <strong>Purpose</strong>
          <br />
          Defines what the service returns to the calling Agent.
        </p>

        <p>
          <strong>Details</strong>
          <br />
          Multiple output types such as images, tables, documents, text, sources, or reports can be exposed.
        </p>

        <p>
          Only selected outputs are returned, forming a clean and predictable service interface for downstream Agents.
        </p>

        <h4 id="3116-confirm-agent-service-configuration">3.1.1.6 Confirm agent service configuration</h4>

        <p>
          Once confirmed, the Agent becomes discoverable and callable by other Agents, and all interactions follow the defined input and output contract.
        </p>

        <h3 id="312-json-service-configuration">3.1.2 JSON service configuration</h3>

        <p>
          Once the "Agent as Service" setup is completed, a JSON editor will be provided for reviewing or modifying the configuration.
        </p>

        <p>
          This allows minor corrections or edits to be made directly.
        </p>

        <img src="/v1/services/04_agentServices4.png" alt="services" />

        <p>
          This completes the process of adding Agents as a Service.
        </p>

        <blockquote data-type="note">
            <p>This option will be available for both the Custom and Default options while setting up agents as services.</p>
        </blockquote>

        <h2 id="32-rest-api-endpoint-as-service">3.2 Rest API endpoint as service</h2>

        <p>
          This workflow allows an external REST API to be registered as a callable service that can be invoked by Agents. The API metadata, connection details, inputs, and outputs are defined, creating a clear and reusable service contract.
        </p>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Step</th>
              <th className="border border-border px-4 py-2 text-left">What It Configures</th>
              <th className="border border-border px-4 py-2 text-left">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2">1. Service Description</td>
              <td className="border border-border px-4 py-2">Service identity and intent</td>
              <td className="border border-border px-4 py-2">Makes the service discoverable and understandable</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">2. IP Endpoint Setup</td>
              <td className="border border-border px-4 py-2">Network and authentication details</td>
              <td className="border border-border px-4 py-2">Defines how the API is called</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">3. Service Input Setup</td>
              <td className="border border-border px-4 py-2">Input schema and context</td>
              <td className="border border-border px-4 py-2">Controls what data is sent</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">4. Service Output Setup</td>
              <td className="border border-border px-4 py-2">Output definitions</td>
              <td className="border border-border px-4 py-2">Specifies what the service returns</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Step</h5>
                <p className="text-sm mt-1 break-words">1. Service Description</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">What It Configures</h5>
                <p className="text-sm mt-1 break-words">Service identity and intent</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Purpose</h5>
                <p className="text-sm mt-1 break-words">Makes the service discoverable and understandable</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Step</h5>
                <p className="text-sm mt-1 break-words">2. IP Endpoint Setup</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">What It Configures</h5>
                <p className="text-sm mt-1 break-words">Network and authentication details</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Purpose</h5>
                <p className="text-sm mt-1 break-words">Defines how the API is called</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Step</h5>
                <p className="text-sm mt-1 break-words">3. Service Input Setup</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">What It Configures</h5>
                <p className="text-sm mt-1 break-words">Input schema and context</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Purpose</h5>
                <p className="text-sm mt-1 break-words">Controls what data is sent</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Step</h5>
                <p className="text-sm mt-1 break-words">4. Service Output Setup</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">What It Configures</h5>
                <p className="text-sm mt-1 break-words">Output definitions</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Purpose</h5>
                <p className="text-sm mt-1 break-words">Specifies what the service returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h3 id="step-1-of-4---service-description">Step 1 of 4 - Service description</h3>

        <p>
          This step defines how the service is identified and described within the system.
        </p>

        <img src="/v1/services/05_agentAPI1.png" alt="services" />

        <h4 id="11-service-name">1.1 Service name</h4>

        <p>
          A unique, system-friendly identifier for the service. This is used internally and should follow a consistent naming convention.
        </p>

        <h4 id="12-display-name">1.2 Display name</h4>

        <p>
          A human-readable name shown in the UI. This helps users quickly understand what the service does.
        </p>

        <h4 id="13-description">1.3 Description</h4>

        <p>
          A concise explanation of the service's purpose and behavior. This should clearly state what the API does and when it should be used.
        </p>

        <h3 id="step-2-of-4-ip-endpoint-setup">Step 2 of 4 – IP endpoint setup</h3>

        <p>
          This step defines how the platform connects to and authenticates with the external REST API.
        </p>

        <h4 id="21-ip-address">2.1 IP address</h4>

        <p>
          The hostname or IP address where the API is hosted.
        </p>

        <p>
          <strong>Example:</strong> <code>api.example.com</code>, <code>192.168.1.16</code>
        </p>

        <h4 id="22-endpoint-method">2.2 Endpoint method</h4>

        <p>
          The specific API route that will be called on the host.
        </p>

        <p>
          <strong>Example:</strong> <code>/customer</code>, <code>/v1/orders/search</code>
        </p>

        <h4 id="23-ip-port">2.3 IP port</h4>

        <p>
          The network port used by the API. This is optional if the API uses standard ports.
        </p>

        <p>
          <strong>Example:</strong>
        </p>

        <ul>
          <li><code>443</code> for HTTPS</li>
          <li><code>8080</code> for custom services</li>
        </ul>

        <h4 id="24-protocol">2.4 Protocol</h4>

        <p>
          Specifies whether the API uses a secure or non-secure connection.
        </p>

        <ul>
          <li><strong>HTTPS</strong> is recommended for production environments.</li>
          <li><strong>HTTP</strong> may be used for internal or local services.</li>
        </ul>

        <h4 id="25-request-method">2.5 Request method</h4>

        <p>
          Defines how data is sent to the API.
        </p>

        <ul>
          <li><strong>GET</strong> for fetching data</li>
          <li><strong>POST</strong> for sending request payloads</li>
        </ul>

        <p>
          <strong>Example:</strong>
        </p>

        <ul>
          <li>GET <code>/users?id=123</code></li>
          <li>POST <code>/users/search</code></li>
        </ul>

        <h4 id="26-content-type">2.6 Content type</h4>

        <p>
          Specifies the format of the request payload.
        </p>

        <ul>
          <li><code>application/json</code> for structured JSON requests</li>
          <li><code>application/x-www-form-urlencoded</code> for form-style submissions</li>
          <li><code>plain/text</code> for raw text payloads</li>
        </ul>

        <h4 id="27-credential-location">2.7 Credential location</h4>

        <p>
          Determines where authentication credentials are included.
        </p>

        <ul>
          <li><strong>Header</strong> for tokens or API keys in headers</li>
          <li><strong>Body</strong> for credentials passed in the request payload.</li>
        </ul>

        <p>
          <strong>Example:</strong>
        </p>

        <ul>
          <li>Header: <code>Authorization: Bearer &lt;token&gt;</code></li>
          <li>Body: <code>{`{ "api_key": "xxxx" }`}</code></li>
        </ul>

        <h4 id="28-endpoint-credential-name">2.8 Endpoint credential name</h4>

        <p>
          The key name used by the API to read the credential.
        </p>

        <p>
          <strong>Examples:</strong>
        </p>

        <ul>
          <li><code>Authorization</code></li>
          <li><code>api_key</code></li>
          <li><code>x-api-key</code></li>
        </ul>

        <h4 id="29-endpoint-credential-value">2.9 Endpoint credential value</h4>

        <p>
          The actual credential required to authenticate the request.
        </p>

        <p>
          <strong>Examples:</strong>
        </p>

        <ul>
          <li><code>Bearer eyJhbGciOi...</code></li>
          <li><code>abcd1234apikey</code></li>
        </ul>

        <p>
          This configuration ensures the service can securely and reliably communicate with the external REST API.
        </p>

        <h3 id="step-3-of-4-service-input-setup">Step 3 of 4 – Service input setup</h3>

        <p>
          This step defines how inputs are collected, structured, and passed to the service at runtime.
        </p>

        <h4 id="31-main-input-key">3.1 Main input key</h4>

        <p>
          The primary parameter name expected by the service or API. This key is used to map user input to the request payload.
        </p>

        <p>
          <strong>Example:</strong> <code>user_id</code>, <code>order_id</code>, <code>query</code>
        </p>

        <h4 id="32-input-description">3.2 Input description</h4>

        <p>
          A short hint that explains what value should be provided for the main input. This is shown to users interacting with the service.
        </p>

        <p>
          <strong>Example:</strong> <code>Enter user_id</code>, <code>Provide order number</code>
        </p>

        <h4 id="33-input-context-optional">3.3 Input context (Optional)</h4>

        <p>
          An optional reference to an additional context object that can be passed along with the main input. This is useful when the service needs supporting data.
        </p>

        <p>
          <strong>Example:</strong> <code>user_profile</code>, <code>document.pdf</code>, <code>uploaded_image</code>
        </p>

        <h4 id="34-input-context-type-optional">3.4 Input context type (Optional)</h4>

        <p>
          This field defines how input is collected from the user or passed into the service. It also determines how the platform interprets and structures the input at runtime.
        </p>

        <p>
          <strong>Available Input Context Types</strong>:
        </p>

        <ul>
          <li><strong>Text Input – standard chat-style text box</strong>
          <p>
          Used for free-form text input similar to a chat interface. Best suited for prompts, queries, or natural language instructions.
        </p></li>
        </ul>

        <ul>
          <li><strong>Short snippet of text input – standard input style box</strong><p>
          Designed for brief, single-line text such as IDs, keywords, or short commands.
        </p></li>
        </ul>

        <ul>
          <li><strong>Document File Input – any file type</strong><p>
          Allows documents or files to be uploaded. Commonly used for PDFs, text files, or reports that need to be processed by the service.
        </p></li>
        </ul>

        <ul>
          <li><strong>Image File Input – png, jpg and common image formats</strong><p>
          Accepts image files as input. Useful for vision-based workflows such as OCR, object detection, or image analysis.
        </p></li>
        </ul>

        <ul>
          <li><strong>Dataset File Input – pre-build json dataset</strong><p>
          Used for structured datasets provided as pre-built JSON files. Ideal for batch processing or data-driven workflows.
        </p></li>
        </ul>

        <ul>
          <li><strong>Structured Data File – csv, json with database-like rows/columns</strong><p>
          Accepts tabular or structured data formats. Useful when the service expects records, rows, or schema-based input.
        </p></li>
        </ul>

        <ul>
          <li><strong>Multiple Files (Source) – aggregate documents into a single source</strong><p>
          Combines multiple uploaded files into one unified source context. Best for search, RAG, or document aggregation use cases.
        </p></li>
        </ul>

        <ul>
          <li><strong>Multiple Files (Collection) – input a list of documents</strong><p>
          Passes multiple files as separate items in a collection. Suitable when each document needs to be processed individually.
        </p></li>
        </ul>

        <ul>
          <li><strong>JSON File – consisting of key-value pairs</strong><p>
          Accepts a JSON file where data is structured as key-value pairs. Useful for configuration-driven or structured requests.
        </p></li>
        </ul>

        <ul>
          <li><strong>Custom Form – consisting of key-value pairs</strong><p>
          Creates a custom form interface where users can input structured data fields. Ideal for controlled and validated inputs.
        </p><p>
          Selecting the appropriate input context type ensures the service receives data in the expected format and improves execution reliability.
        </p></li>
        </ul>

        <h4 id="35-service-input-presets">3.5 Service input presets</h4>

        <p>
          Optional JSON key-value pairs that are automatically included in every request. These are useful for static parameters, defaults, or fixed configuration values.
        </p>

        <p>
          <strong>Example:</strong>
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">{`{
  "source": "agent_service",
  "version": "v1"
}
`}</code>
        </pre>

        <p>
          This setup ensures the service receives all required inputs in a consistent and predictable format.
        </p>

        <h3 id="step-4-of-4---service-output-setup">Step 4 of 4 - Service output setup</h3>

        <p>
          Defines what outputs are exposed to the calling Agent.
        </p>

        <img src="/v1/services/05_agentAPI4.png" alt="services" />

        <h4 id="41-output-name">4.1 Output name</h4>

        <p>
          The name under which the API response or extracted data is returned.
        </p>

        <h4 id="42-multiple-outputs">4.2 Multiple outputs</h4>

        <p>
          The add button can be used to define additional outputs if the API returns multiple values.
        </p>

        <p>
          Once the configuration is completed, the service becomes registered and available for Agent workflows, chaining, and orchestration.
        </p>

        <h2 id="33-mcp-as-service-beta">3.3 MCP as service (Beta)</h2>

        <p>
          This workflow allows an MCP tool to be exposed as a first-class service that can be discovered and invoked by Agents. It bridges MCP servers with the agent ecosystem by defining inputs, context handling, runtime parameters, and endpoint configuration, all wrapped in a reusable service contract.
        </p>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Section</th>
              <th className="border border-border px-4 py-2 text-left">What It Configures</th>
              <th className="border border-border px-4 py-2 text-left">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2">MCP Service Definition</td>
              <td className="border border-border px-4 py-2">Service identity and MCP tool mapping</td>
              <td className="border border-border px-4 py-2">Makes the MCP tool usable as a service</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Input and Context Setup</td>
              <td className="border border-border px-4 py-2">User input, context, and parameters</td>
              <td className="border border-border px-4 py-2">Controls how data is passed to the MCP tool</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Runtime Configuration</td>
              <td className="border border-border px-4 py-2">Kwargs, globals, and outputs</td>
              <td className="border border-border px-4 py-2">Enables flexible execution and data sharing</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">MCP Endpoint Setup</td>
              <td className="border border-border px-4 py-2">MCP server connection details</td>
              <td className="border border-border px-4 py-2">Defines how the MCP server is called</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">Review and Confirm</td>
              <td className="border border-border px-4 py-2">Final JSON configuration</td>
              <td className="border border-border px-4 py-2">Allows validation and fine tuning</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Section</h5>
                <p className="text-sm mt-1 break-words">MCP Service Definition</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">What It Configures</h5>
                <p className="text-sm mt-1 break-words">Service identity and MCP tool mapping</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Purpose</h5>
                <p className="text-sm mt-1 break-words">Makes the MCP tool usable as a service</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Section</h5>
                <p className="text-sm mt-1 break-words">Input and Context Setup</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">What It Configures</h5>
                <p className="text-sm mt-1 break-words">User input, context, and parameters</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Purpose</h5>
                <p className="text-sm mt-1 break-words">Controls how data is passed to the MCP tool</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Section</h5>
                <p className="text-sm mt-1 break-words">Runtime Configuration</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">What It Configures</h5>
                <p className="text-sm mt-1 break-words">Kwargs, globals, and outputs</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Purpose</h5>
                <p className="text-sm mt-1 break-words">Enables flexible execution and data sharing</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Section</h5>
                <p className="text-sm mt-1 break-words">MCP Endpoint Setup</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">What It Configures</h5>
                <p className="text-sm mt-1 break-words">MCP server connection details</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Purpose</h5>
                <p className="text-sm mt-1 break-words">Defines how the MCP server is called</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Section</h5>
                <p className="text-sm mt-1 break-words">Review and Confirm</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">What It Configures</h5>
                <p className="text-sm mt-1 break-words">Final JSON configuration</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Purpose</h5>
                <p className="text-sm mt-1 break-words">Allows validation and fine tuning</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h3 id="331-add-new-mcp-tool-as-service">3.3.1 Add New MCP Tool as Service</h3>

        <p>
          This section defines the full service configuration for exposing an MCP tool.
        </p>

        {/* Summary Table for MCP Service Configuration Fields */}
        <div className="my-6 overflow-x-auto">
          <table className="min-w-full border-collapse border border-border">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border px-4 py-2 text-left font-semibold">Field Name</th>
                <th className="border border-border px-4 py-2 text-left font-semibold">Description</th>
                <th className="border border-border px-4 py-2 text-left font-semibold">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">MCP Service Name</td>
                <td className="border border-border px-4 py-2">Unique, system-friendly identifier for the service</td>
                <td className="border border-border px-4 py-2"><code>customer_lookup</code></td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">Display Name</td>
                <td className="border border-border px-4 py-2">Human-readable name shown to users</td>
                <td className="border border-border px-4 py-2"><code>Customer Lookup Service</code></td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">Description</td>
                <td className="border border-border px-4 py-2">Brief explanation of what the service does</td>
                <td className="border border-border px-4 py-2"><code>Fetches customer details using the MCP customer lookup tool</code></td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">MCP Tool Name</td>
                <td className="border border-border px-4 py-2">Exact name of the MCP tool to be invoked</td>
                <td className="border border-border px-4 py-2"><code>getCustomerInfo</code></td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">Input Instruction</td>
                <td className="border border-border px-4 py-2">Variable name for the main text input</td>
                <td className="border border-border px-4 py-2"><code>customer_id</code>, <code>query</code></td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">Input Hint Placeholder</td>
                <td className="border border-border px-4 py-2">Hint text shown in the input field</td>
                <td className="border border-border px-4 py-2"><code>Enter customer ID</code></td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">Input Context</td>
                <td className="border border-border px-4 py-2">Optional context object name</td>
                <td className="border border-border px-4 py-2"><code>user_profile</code>, <code>support_ticket</code></td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">Input Context Type</td>
                <td className="border border-border px-4 py-2">Defines how input/context is collected</td>
                <td className="border border-border px-4 py-2">Text Input, Document File, JSON File</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">Kwargs</td>
                <td className="border border-border px-4 py-2">Optional JSON key-value pairs for runtime configuration</td>
                <td className="border border-border px-4 py-2"><code>{`{"source": "agent", "env": "prod"}`}</code></td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">Global Vars</td>
                <td className="border border-border px-4 py-2">Output variable shared globally across workflows</td>
                <td className="border border-border px-4 py-2"><code>customer_status</code></td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">Output Context</td>
                <td className="border border-border px-4 py-2">Name of output context for other services</td>
                <td className="border border-border px-4 py-2"><code>customer_details</code></td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">Output Context Type</td>
                <td className="border border-border px-4 py-2">Specifies how output is structured</td>
                <td className="border border-border px-4 py-2">Text Output, JSON Output, Document Output</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">IP Address</td>
                <td className="border border-border px-4 py-2">Base IP address or hostname of MCP server</td>
                <td className="border border-border px-4 py-2"><code>mcp.example.com</code>, <code>192.168.1.16</code></td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">IP Port</td>
                <td className="border border-border px-4 py-2">Optional port used by the MCP server</td>
                <td className="border border-border px-4 py-2"><code>443</code>, <code>8080</code></td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">Protocol</td>
                <td className="border border-border px-4 py-2">Specifies HTTP or HTTPS access</td>
                <td className="border border-border px-4 py-2">HTTPS (recommended), HTTP</td>
              </tr>
              <tr>
                <td className="border border-border px-4 py-2 font-medium">MCP Route</td>
                <td className="border border-border px-4 py-2">Route on MCP server used to invoke tools</td>
                <td className="border border-border px-4 py-2"><code>/mcp</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 id="3311-mcp-service-name">3.3.1.1 MCP service name</h4>

        <p>
          A unique, system-friendly identifier for the service.
        </p>

        <p>
          <strong>Example:</strong> <code>customer_lookup</code>
        </p>

        <h4 id="3312-display-name">3.3.1.2 Display name</h4>

        <p>
          A human-readable name shown to users when selecting the service.
        </p>

        <p>
          <strong>Example:</strong> <code>Customer Lookup Service</code>
        </p>

        <h4 id="3313-description">3.3.1.3 Description</h4>

        <p>
          A brief explanation of what the service does. This is shown to users to help them understand the purpose of the MCP service.
        </p>

        <p>
          <strong>Example:</strong> <code>Fetches customer details using the MCP customer lookup tool</code>
        </p>

        <h4 id="3314-mcp-tool-name">3.3.1.4 MCP tool name</h4>

        <p>
          The exact name of the MCP tool that should be invoked on the MCP server.
        </p>

        <p>
          <strong>Example:</strong> <code>getCustomerInfo</code>
        </p>

        <h4 id="3315-input-instruction">3.3.1.5 Input instruction</h4>

        <p>
          Defines the variable name for the main text input provided by the user. This input maps directly to a string parameter expected by the MCP tool.
        </p>

        <p>
          <strong>Example:</strong> <code>customer_id</code>, <code>query</code>
        </p>

        <h4 id="3316-input-hint-placeholder">3.3.1.6 Input hint placeholder</h4>

        <p>
          Hint text shown in the input field to guide the user.
        </p>

        <p>
          <strong>Example:</strong> <code>Enter customer ID</code>
        </p>

        <h4 id="3317-input-context">3.3.1.7 Input context</h4>

        <p>
          Optional context object name expected by the service, if any.
        </p>

        <p>
          <strong>Example:</strong> <code>user_profile</code>, <code>support_ticket</code>
        </p>

        <h4 id="3318-input-context-type">3.3.1.8 Input context type</h4>

        <p>
          Defines how the input or context is collected and interpreted.
        </p>

        <p>
          <strong>Example:</strong>
        </p>

        <ul>
          <li>Text Input – standard chat-style text box</li>
          <li>Document File Input</li>
          <li>JSON File</li>
          <li>Custom Form</li>
        </ul>

        <h4 id="3319-kwargs">3.3.1.9 Kwargs</h4>

        <p>
          Optional JSON key-value pairs passed to the MCP tool at runtime. Useful for static configuration or flags.
        </p>

        <p>
          <strong>Example:</strong>
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">{`{
  "source": "agent",
  "env": "prod"
}
`}</code>
        </pre>

        <h4 id="33110-global-vars">3.3.1.10 Global vars</h4>

        <p>
          Defines the name of any output variable that should be shared globally across the agent workflow. Typically used for short text values.
        </p>

        <p>
          <strong>Example:</strong> <code>customer_status</code>
        </p>

        <h4 id="33111-output-context">3.3.1.11 Output context</h4>

        <p>
          Defines the name of the output context that other services or agents can consume.
        </p>

        <p>
          <strong>Example:</strong> <code>customer_details</code>
        </p>

        <h4 id="33112-output-context-type">3.3.1.12 Output context type</h4>

        <p>
          Specifies how the output is structured and exposed.
        </p>

        <p>
          <strong>Example:</strong>
        </p>

        <ul>
          <li>Text Output</li>
          <li>JSON Output</li>
          <li>Document Output</li>
        </ul>

        <h4 id="33113-ip-address">3.3.1.13 IP address</h4>

        <p>
          The base IP address or hostname of the MCP server.
        </p>

        <p>
          <strong>Example:</strong> <code>mcp.example.com</code>, <code>192.168.1.16</code>
        </p>

        <h4 id="33114-ip-port">3.3.1.14 IP port</h4>

        <p>
          Optional port used by the MCP server.
        </p>

        <p>
          <strong>Example:</strong>
        </p>

        <ul>
          <li><code>443</code> for HTTPS</li>
          <li><code>8080</code> for custom MCP servers</li>
        </ul>

        <h4 id="33115-protocol">3.3.1.15 Protocol</h4>

        <p>
          Specifies whether the MCP server is accessed via HTTP or HTTPS.
        </p>

        <ul>
          <li><strong>HTTPS</strong> recommended for production</li>
          <li><strong>HTTP</strong> for local or internal setups</li>
        </ul>

        <h4 id="33116-mcp-route">3.3.1.16 MCP route</h4>

        <p>
          The route on the MCP server used to invoke tools.
        </p>

        <p>
          <strong>Example:</strong> <code>/mcp</code>
        </p>

        <h3 id="332-json-service-configuration">3.3.2 JSON service configuration</h3>

        <p>
          This step displays the complete JSON service configuration generated from the form inputs.
        </p>

        <p>
          <strong>Purpose</strong>
          <br />
          Allows advanced users to review, validate, and make small corrections directly in the JSON before finalizing the service.
        </p>

        <p>
          <strong>What can be done here</strong>
        </p>

        <ul>
          <li>Endpoint URL, method, and credentials can be verified</li>
          <li>Headers or credential placement can be adjusted</li>
          <li>Tool mapping and runtime flags can be confirmed</li>
          <li>Outputs and context definitions can be ensured to be correct</li>
        </ul>

        <p>
          Once confirmed, the MCP tool is registered as a service and becomes available for agent workflows, chaining, and orchestration.
        </p>

        <h2 id="conclusion">Conclusion</h2>

        <p>
          All service types follow the same structured setup process. You define:
        </p>

        <ul>
          <li>What inputs the service needs</li>
          <li>Any runtime settings</li>
          <li>How authentication works</li>
          <li>What outputs it returns</li>
        </ul>

        <p>
          Because everything follows the same format, agents, external systems, and MCP tools can work together easily, even if they are built differently underneath.
        </p>

        <p>
          The Services interface also supports different kinds of inputs. These can range from simple text fields to file uploads, structured datasets, or custom forms. This gives you flexibility in how data is collected and passed to services.
        </p>

        <p>
          By using Services, developers can build scalable agent systems using reusable components. They can connect outside data sources and APIs, and combine multiple agents and tools into more advanced workflows.
        </p>

        <p>
          Services turn Model HQ from a standalone tool into a flexible platform where:
        </p>

        <ul>
          <li>Agents can collaborate</li>
          <li>External systems can connect smoothly</li>
          <li>Complex workflows can be broken into smaller, reusable pieces</li>
        </ul>

        <p>
          When services are set up properly, organizations can develop faster, avoid repeating work, standardize integrations, and build reliable multi-agent systems that handle real-world business use cases.
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