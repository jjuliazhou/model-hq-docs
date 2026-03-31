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

export default function BuildingeditingAgentsWithVisualBuilderPage() {
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
            <BreadcrumbPage>Building/Editing Agents with Visual Builder</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Building/Editing Agents with Visual Builder</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          The <strong>Visual Builder</strong> lets you create agents using a drag-and-drop interface. Instead of working step-by-step in text, you can place and connect nodes on a canvas to define how your workflow runs.
        </p>

        <p>
          Each node represents a task — such as document parsing, RAG question answering, data extraction, or running a model. You can easily configure each step using simple forms, set inputs, and control what outputs are passed to the next step.
        </p>

        <p>
          The Visual Builder makes it easy to see how everything is connected and how data moves through your workflow. You can rearrange steps, zoom in and out, and quickly adjust connections as needed.
        </p>

        <p>
          Once your workflow is ready, you can run it directly, export it, or switch to the step-based editor for further edits.
        </p>

        <p>
          The Visual Builder excels at creating complex workflows with branching logic, conditional execution, and parallel processing paths, as these structures are more easily understood and modified in graphical form. The interface includes features for zooming, panning, rearranging nodes, and validating connections to ensure data flows correctly between steps. Once the visual workflow is complete, it can be executed directly from the builder, exported as a JSON configuration file, or further refined using the step-based editor.
        </p>

        <h3 id="31-builder-overview">3.1 Builder overview</h3>

        <p>
          The canvas represents the full execution flow of an agent, from input to final output. Each block is a node, and connections define how data moves between steps.
        </p>

        <img src="/v1/agents/editAgent/04_visualBuilder.png" alt="edit" />

        <p>
          All components are fully visual and configurable directly in the builder.
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
          <li><strong>Bot</strong> Allows user to include a Bot interface in the agent.</li>
        </ul>

        <ul>
          <li><strong>Condition</strong> Adds branching logic based on rules or outputs.</li>
        </ul>

        <ul>
          <li><strong>Transformer</strong> Allows user to specify which data to use in the agent process as it moves to the next step.</li>
        </ul>

        <h3 id="33-agent-configurations">3.3 Agent Configurations:</h3>

        <ul>
          <li><strong>Files</strong>: This section is used to upload, manage, and associate data assets with the agent.</li>
        </ul>

        <ul>
          <li><strong>Services</strong>: It serves as a service catalog for the agent. It determines which capabilities are available when building workflows.</li>
        </ul>

        <ul>
          <li><strong>Settings</strong>: Allows to set Agent global configurations from selecting models to overall control in the agent.</li>
        </ul>

        <h3 id="34-canvas-controls">3.4 Canvas controls</h3>

        <p>
          On the canvas, the following actions can be performed:
        </p>

        <ul>
          <li>Nodes can be dragged to reposition them</li>
          <li>Nodes can be connected to define execution flow</li>
          <li>Nodes can be selected to edit their instructions and configuration</li>
        </ul>

        <ul>
          <li>Note: The number of the node indicates the order in which the User added that node on the canvas, and does not indicate the order in which the services or the node will be activated. The order of agent execution follows the order of the nodes and how they are linked to each other, rather than the node number.</li>
        </ul>

        <h3 id="35-zoom-and-utility-actions">3.5 Zoom and utility actions</h3>

        <p>
          The bottom-left controls allow the following operations:
        </p>

        <ul>
          <li>Zoom in</li>
          <li>Zoom out</li>
          <li>Clear the canvas</li>
        </ul>

        <h3 id="36-action-buttons">3.6 Action buttons</h3>

        <p>
          Below the utility buttons, quick access to key actions is provided:
        </p>

        <ul>
          <li><strong>Save Agent</strong> Saves the agent definition as a JSON file. This file can later be uploaded to instantly recreate the agent.</li>
        </ul>

        <ul>
          <li><strong>Run</strong> Executes the agent with the current configuration.</li>
        </ul>

        <ul>
          <li><strong>Home</strong> Returns to the main dashboard.</li>
        </ul>

        <h2 id="4-input-node">4. Input Node</h2>

        <p>
          The <strong>Input Node</strong> defines how data enters the agent workflow. It is typically the starting point on the canvas and determines the format and structure of the data that downstream nodes will receive.
        </p>

        <img src="/v1/agents/visualBuilder/input.png" alt="visualBuilder" />

        <p>
          Each Input Node can be configured by selecting an <strong>input type</strong> and adding a short <strong>description</strong> to guide users on what to provide. This makes the agent easier to use and ensures consistent input formatting.
        </p>

        <h3 id="available-input-types">Available Input Types</h3>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Input Type</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2">text</td>
              <td className="border border-border px-4 py-2">Accepts plain text input. Useful for prompts, queries, or instructions provided directly by the user.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">document</td>
              <td className="border border-border px-4 py-2">Accepts uploaded documents such as PDFs, Word files, PPTx or similar formats for parsing or analysis.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">dataset</td>
              <td className="border border-border px-4 py-2">Used for structured datasets, typically containing multiple records for batch processing or analytics.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">table</td>
              <td className="border border-border px-4 py-2">Accepts tabular data with rows and columns, suitable for structured data operations.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">image</td>
              <td className="border border-border px-4 py-2">Accepts image files for tasks like OCR, visual analysis, or classification.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">source</td>
              <td className="border border-border px-4 py-2">Represents a reference input such as a URL, repository, or external data source.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">collection</td>
              <td className="border border-border px-4 py-2">A grouped set of related items, often used for retrieval or search-based workflows.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">snippet</td>
              <td className="border border-border px-4 py-2">Accepts smaller pieces of content, such as code snippets or short text blocks.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">json</td>
              <td className="border border-border px-4 py-2">Accepts structured JSON input for precise schema-driven workflows.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">form</td>
              <td className="border border-border px-4 py-2">Captures multiple fields of user input in a structured form format.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">folder</td>
              <td className="border border-border px-4 py-2">Accepts a directory containing multiple files for bulk processing.</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Input Type</h5>
                <p className="text-sm mt-1 break-words">text</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Accepts plain text input. Useful for prompts, queries, or instructions provided directly by the user.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Input Type</h5>
                <p className="text-sm mt-1 break-words">document</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Accepts uploaded documents such as PDFs, Word files, PPTx or similar formats for parsing or analysis.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Input Type</h5>
                <p className="text-sm mt-1 break-words">dataset</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Used for structured datasets, typically containing multiple records for batch processing or analytics.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Input Type</h5>
                <p className="text-sm mt-1 break-words">table</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Accepts tabular data with rows and columns, suitable for structured data operations.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Input Type</h5>
                <p className="text-sm mt-1 break-words">image</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Accepts image files for tasks like OCR, visual analysis, or classification.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Input Type</h5>
                <p className="text-sm mt-1 break-words">source</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Represents a reference input such as a URL, repository, or external data source.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Input Type</h5>
                <p className="text-sm mt-1 break-words">collection</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">A grouped set of related items, often used for retrieval or search-based workflows.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Input Type</h5>
                <p className="text-sm mt-1 break-words">snippet</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Accepts smaller pieces of content, such as code snippets or short text blocks.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Input Type</h5>
                <p className="text-sm mt-1 break-words">json</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Accepts structured JSON input for precise schema-driven workflows.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Input Type</h5>
                <p className="text-sm mt-1 break-words">form</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Captures multiple fields of user input in a structured form format.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Input Type</h5>
                <p className="text-sm mt-1 break-words">folder</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Accepts a directory containing multiple files for bulk processing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h3 id="notes">Notes</h3>

        <ul>
          <li>The selected input type directly impacts how downstream nodes interpret and process data.</li>
          <li>Clear descriptions improve usability, especially when agents are shared or reused.</li>
        </ul>

        <h2 id="5-node">5. Node</h2>

        <p>
          The <strong>Node</strong> represents a general-purpose processing step in the agent workflow. It is used to execute a specific <strong>service</strong> and pass the result forward to the next connected node.
        </p>

        <img src="/v1/agents/visualBuilder/node.png" alt="visualBuilder" />

        <p>
          Each Node acts as a bridge between data and capability, allowing the agent to perform operations such as reasoning, transformation, retrieval, or external service interaction.
        </p>

        <h3 id="service-selection">Service Selection</h3>

        <p>
          Every Node includes a <strong>“Choose service”</strong> dropdown. This list is dynamically populated from the <strong>Services</strong> section in the agent configuration.
        </p>

        <ul>
          <li>Only services that are added and enabled in the <strong>Services</strong> section will appear here</li>
          <li>This ensures that the Node operates within the capabilities explicitly defined for the agent</li>
          <li>Services can include model-based operations, data processing tools, integrations, or custom logic</li>
        </ul>

        <h3 id="instruction-field">Instruction Field</h3>

        <p>
          Each Node provides an <strong>Instruction</strong> field where you define how the selected service should behave.
        </p>

        <ul>
          <li>Instructions guide the execution of the service</li>
          <li>They can include prompts, rules, or task-specific directions</li>
          <li>Clear and precise instructions improve output quality and consistency</li>
        </ul>

        <h3 id="custom-datasets-as-services">Custom Datasets as Services</h3>

        <p>
          In addition to predefined services, custom datasets can also be used within a Node:
        </p>

        <ul>
          <li>Datasets must first be configured in the main Datasets section  <strong> [ROHAN: Add link here to Datasets] </strong></li>
          <li>Once created, datasets must then be added as a file in the agent process in the <strong>Files</strong> section</li>
          <li>Once listed, the dataset and each of the columns specified in the Dataset creation become selectable in the transformer node</li>
          <li>To use dataset-related Agent workflow services, select <em>All-Datasets</em> in the Services catalog (left side nav in visual editor)</li>
          <li>This allows workflows to directly interact with structured or domain-specific data with dataset-related services</li>
        </ul>

        <h3 id="key-characteristics">Key Characteristics</h3>

        <ul>
          <li>Nodes process incoming data and produce outputs for downstream steps</li>
          <li>They can be chained to create multi-step workflows</li>
          <li>The behavior of a Node is fully determined by the selected service and its instruction</li>
          <li>Nodes are reusable and can be reconfigured without affecting the overall structure</li>
        </ul>

        <h3 id="notes">Notes</h3>

        <ul>
          <li>If a required service is not visible, ensure it has been added in the <strong>Services</strong> section</li>
          <li>Keep instructions concise but explicit to avoid ambiguity</li>
          <li>Nodes can be combined with conditions and transformers to build complex logic flows</li>
        </ul>

        <h2 id="6-classifier-node">6. Classifier Node</h2>

        <p>
          The <strong>Classifier Node</strong> is used to categorize or label input data based on predefined classification types. It enables routing, filtering, and decision-making within workflows by assigning structured outputs such as labels, categories, or extracted information.
        </p>

        <img src="/v1/agents/visualBuilder/classifier.png" alt="visualBuilder" />

        <h3 id="classifier-selection">Classifier Selection</h3>

        <p>
          Each Classifier Node includes a <strong>“Choose classifier”</strong> dropdown with a fixed set of available classifiers.
        </p>

        <ul>
          <li>These classifiers are <strong>not dynamically generated</strong> from the Services section</li>
          <li>However, corresponding capabilities may still be configured or supported through Services if needed</li>
          <li>The dropdown provides a consistent and standardized set of classification options</li>
          <li>Select the Classifier you wish to choose in the Service Catalog (left side nav in visual editor) and click &quot;&gt;&quot;</li>
          <li>This enables the Classifier node to update when you select and place it on the canvas workspace</li>
        </ul>

        <h3 id="available-classifiers">Available Classifiers</h3>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Classifier</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2">sentiment</td>
              <td className="border border-border px-4 py-2">Determines the overall sentiment of the input, such as positive, negative, or neutral.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">emotions</td>
              <td className="border border-border px-4 py-2">Identifies emotional tone, such as happiness, anger, sadness, or surprise.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">topics</td>
              <td className="border border-border px-4 py-2">Classifies the input into broad subject areas or themes.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">tags</td>
              <td className="border border-border px-4 py-2">Assigns relevant keywords or labels to the input for easier organization and retrieval.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">intent</td>
              <td className="border border-border px-4 py-2">Detects the underlying purpose or intent behind the input.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">ratings</td>
              <td className="border border-border px-4 py-2">Assigns a score or rating based on defined criteria.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">ner</td>
              <td className="border border-border px-4 py-2">Performs Named Entity Recognition to extract entities like names, locations, and organizations.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">xsum</td>
              <td className="border border-border px-4 py-2">Generates extremely concise summaries of the input content.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">summary</td>
              <td className="border border-border px-4 py-2">Produces a general summary capturing the main points of the input.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">category</td>
              <td className="border border-border px-4 py-2">Classifies input into predefined categories for structured grouping.</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">q_gen</td>
              <td className="border border-border px-4 py-2">Generates relevant questions based on the input content.</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Classifier</h5>
                <p className="text-sm mt-1 break-words">sentiment</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Determines the overall sentiment of the input, such as positive, negative, or neutral.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Classifier</h5>
                <p className="text-sm mt-1 break-words">emotions</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Identifies emotional tone, such as happiness, anger, sadness, or surprise.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Classifier</h5>
                <p className="text-sm mt-1 break-words">topics</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Classifies the input into broad subject areas or themes.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Classifier</h5>
                <p className="text-sm mt-1 break-words">tags</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Assigns relevant keywords or labels to the input for easier organization and retrieval.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Classifier</h5>
                <p className="text-sm mt-1 break-words">intent</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Detects the underlying purpose or intent behind the input.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Classifier</h5>
                <p className="text-sm mt-1 break-words">ratings</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Assigns a score or rating based on defined criteria.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Classifier</h5>
                <p className="text-sm mt-1 break-words">ner</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Performs Named Entity Recognition to extract entities like names, locations, and organizations.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Classifier</h5>
                <p className="text-sm mt-1 break-words">xsum</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generates extremely concise summaries of the input content.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Classifier</h5>
                <p className="text-sm mt-1 break-words">summary</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Produces a general summary capturing the main points of the input.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Classifier</h5>
                <p className="text-sm mt-1 break-words">category</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Classifies input into predefined categories for structured grouping.</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Classifier</h5>
                <p className="text-sm mt-1 break-words">q_gen</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Generates relevant questions based on the input content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h3 id="key-characteristics">Key Characteristics</h3>

        <ul>
          <li>Outputs are structured and can be used for conditional routing</li>
          <li>Helps in building branching logic when combined with Condition nodes</li>
          <li>Works well with both raw and preprocessed inputs</li>
          <li>Can be chained with other nodes for multi-step analysis</li>
        </ul>

        <h3 id="notes">Notes</h3>

        <ul>
          <li>Since classifiers are predefined, customization is limited to how their outputs are used downstream</li>
          <li>For advanced behavior, combine classifiers with Nodes and Transformers</li>
          <li>Ensure the selected classifier aligns with the expected output format for the next step in the workflow</li>
        </ul>

        <h2 id="7-bot-node">7. Bot Node</h2>

        <p>
          The <strong>Bot Node</strong> is used to integrate and execute a pre-configured bot within the agent workflow. It allows you to delegate specific tasks to a reusable bot that has already been defined with its own logic, instructions, and capabilities.
        </p>

        <img src="/v1/agents/visualBuilder/bot.png" alt="visualBuilder" />

        <h3 id="bot-selection">Bot Selection</h3>

        <p>
          Each Bot Node references a bot selected from the <strong>Embedded Agent Bots</strong> available in the <strong>Settings</strong> section.
        </p>

        <ul>
          <li>The list includes both <strong>pre-built bots</strong> and <strong>user-created bots</strong></li>
          <li>User-created bots are those configured in the <strong>Bots</strong> section</li>
          <li>Only bots that are properly set up and available in settings can be selected</li>
        </ul>

        <p>
          This ensures that all bot executions are consistent with their predefined configurations.
        </p>

        <h3 id="how-it-works">How It Works</h3>

        <ul>
          <li>The Bot Node receives input from previous nodes - user is encouraged to link a transformer with the appropriate data state (i.e. Agent State)</li>
          <li>It passes the input to the selected bot</li>
          <li>The bot processes the request based on its internal configuration</li>
          <li>The output is returned and passed to the next node in the workflow</li>
          <li>The user is then able to query the bot with the knowledge it has received in the workflow</li>
          <li>If using the bot in the middle of a workflow, the user must interact with the bot and indicate that they are finished interacting with the bot before the agent workflow will continue to the next steps</li>
        </ul>

        <h3 id="key-characteristics">Key Characteristics</h3>

        <ul>
          <li>Encapsulates complex logic into reusable components</li>
          <li>Reduces duplication by reusing existing bot configurations</li>
          <li>Maintains consistency across workflows using the same bot</li>
          <li>Supports both simple and advanced multi-step reasoning within a single node</li>
        </ul>

        <h3 id="when-to-use">When to Use</h3>

        <ul>
          <li>When a task has already been defined as a reusable bot</li>
          <li>When you want to standardize behavior across multiple workflows</li>
          <li>When delegating complex reasoning or interactions to a dedicated component</li>
        </ul>

        <h3 id="notes">Notes</h3>

        <ul>
          <li>Changes made to a bot in the <strong>Bots</strong> section will reflect across all Bot Nodes using it</li>
          <li>Ensure the selected bot is properly configured before using it in a workflow</li>
          <li>Bot Nodes can be combined with Classifiers and Conditions for dynamic execution paths</li>
        </ul>

        <h2 id="8-condition-node">8. Condition Node</h2>

        <p>
          The <strong>Condition Node</strong> introduces decision-making into the workflow by evaluating a condition and routing execution based on the result. It enables branching logic, allowing the agent to follow different paths depending on the data it receives.
        </p>

        <img src="/v1/agents/visualBuilder/condition.png" alt="visualBuilder" />

        <h3 id="value-selection">Value Selection</h3>

        <p>
          The <strong>“Choose value”</strong> dropdown determines what data the condition will evaluate.
        </p>

        <h4 id="default-values">Default Values</h4>

        <ul>
          <li><strong>agent-state</strong> Represents the current internal state of the agent</li>
          <li><strong>user-document</strong> Refers to the input provided by the user, especially in document-based workflows</li>
          <li><strong>none</strong> Used when no predefined value is required</li>
        </ul>

        <h3 id="conditional-operators">Conditional Operators</h3>

        <p>
          The second dropdown defines how the selected value is evaluated. The available operators are:
        </p>

        <div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">
              <th className="border border-border px-4 py-2 text-left">Operator</th>
              <th className="border border-border px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2">equal</td>
              <td className="border border-border px-4 py-2">Checks if the value matches the defined condition exactly</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">greater</td>
              <td className="border border-border px-4 py-2">Evaluates if the value is greater than the condition</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">less than</td>
              <td className="border border-border px-4 py-2">Evaluates if the value is less than the condition</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2">read & eval</td>
              <td className="border border-border px-4 py-2">Interprets and evaluates the value using custom logic or expressions</td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Operator</h5>
                <p className="text-sm mt-1 break-words">equal</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Checks if the value matches the defined condition exactly</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Operator</h5>
                <p className="text-sm mt-1 break-words">greater</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Evaluates if the value is greater than the condition</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Operator</h5>
                <p className="text-sm mt-1 break-words">less than</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Evaluates if the value is less than the condition</p>
              </div>
            </div>
          </div>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Operator</h5>
                <p className="text-sm mt-1 break-words">read & eval</p>
              </div>
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                <p className="text-sm mt-1 break-words">Interprets and evaluates the value using custom logic or expressions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

        <h3 id="define-condition">Define Condition</h3>

        <p>
          The <strong>Define condition</strong> field is where the comparison value or expression is specified.
        </p>

        <ul>
          <li>Can be a static value, keyword, or expression</li>
          <li>Works in combination with the selected operator</li>
          <li>Should align with the data type of the selected value</li>
        </ul>

        <h3 id="outputs">Outputs</h3>

        <p>
          The Condition Node has two possible execution paths:
        </p>

        <ul>
          <li><strong>True (Green output)</strong> → Followed when the condition is satisfied</li>
          <li><strong>False (Red output)</strong> → Followed when the condition is not satisfied</li>
        </ul>

        <h3 id="key-characteristics">Key Characteristics</h3>

        <ul>
          <li>Enables branching and control flow within the agent</li>
          <li>Works with both predefined and dynamic values</li>
          <li>Integrates seamlessly with outputs from previous nodes</li>
          <li>Supports simple comparisons as well as advanced evaluations</li>
        </ul>

        <h3 id="notes">Notes</h3>

        <ul>
          <li>Ensure the selected value exists in the workflow before using it in a condition</li>
          <li>Use clear and predictable outputs from previous nodes to avoid ambiguity</li>
          <li>Combine with Classifier Nodes for more intelligent routing decisions</li>
        </ul>

        <h2 id="9-transformer-node">9. Transformer Node</h2>

        <p>
          The <strong>Transformer Node</strong> is used to access, extract, and reshape data from different stages of the agent’s execution. It enables you to work with intermediate outputs and reuse them in downstream steps.
        </p>

        <img src="/v1/agents/visualBuilder/transformer.png" alt="visualBuilder" />

        <p>
          Unlike standard processing nodes, Transformers focus on <strong>state access and data transformation</strong>, making them essential for building flexible, multi-step workflows.
        </p>

        <h3 id="purpose">Purpose</h3>

        <p>
          Transformers allow you to:
        </p>

        <ul>
          <li>Retrieve data from any step in the agent’s process</li>
          <li>Reuse outputs without recomputing them</li>
          <li>Restructure or prepare data for the next node</li>
        </ul>

        <p>
          For example, if an agent workflow has 5 steps, a Transformer can pull data from <strong>any intermediate state</strong> (step 1, 2, 3, etc.) and pass it forward for further processing.
        </p>

        <h3 id="input-selection">Input Selection</h3>

        <p>
          The <strong>“Choose input”</strong> dropdown defines which data source the Transformer will use.
        </p>

        <h4 id="default-inputs">Default Inputs</h4>

        <ul>
          <li><strong>agent-state</strong> Provides access to the internal state of the agent across all steps</li>
          <li><strong>user-document</strong> Refers to the original input provided by the user</li>
          <li><strong>none</strong> Used when no predefined input is required</li>
        </ul>

        <h4 id="dynamic-key-inputs">Dynamic Key Inputs</h4>

        <p>
          Dynamic Key inputs may include:
        </p>

        <ul>
          <li><code>rag_answer</code></li>
          <li><code>rag_sources</code></li>
          <li><code>agent_report</code></li>
          <li><code>description</code></li>
          <li>Any other fields produced during execution</li>
        </ul>

        <p>
          These dynamic options are created based on previous agent activity and allow Transformers to integrate seamlessly with the evolving data flow of the agent.
        </p>

        <h3 id="how-it-works">How It Works</h3>

        <ol>
          <li>The Transformer displays a specific input (state or output)</li>
          <li>It extracts or reshapes the data</li>
          <li>The transformed result is passed to the next connected node depending on user selection and intent</li>
        </ol>

        <h3 id="key-characteristics">Key Characteristics</h3>

        <ul>
          <li>Enables access to <strong>intermediate and final outputs</strong></li>
          <li>Supports <strong>data reuse across multiple steps</strong></li>
          <li>Decouples data retrieval from processing logic</li>
          <li>Improves modularity and flexibility of workflows</li>
        </ul>

        <h3 id="when-to-use">When to Use</h3>

        <ul>
          <li>When you need to reference outputs from earlier steps</li>
          <li>When preparing data for another node (e.g., Bot, Classifier, Condition)</li>
          <li>When working with multi-step or stateful agent flows</li>
          <li>Extremely useful in dealing with CSVs or other data structures when filtering, sorting, or searching prior to continuing to a next agent state/node of activity</li>
        </ul>

        <h3 id="notes">Notes</h3>

        <ul>
          <li>Ensure the selected input exists in the workflow before using it</li>
          <li>Use meaningful outputs in earlier nodes to simplify transformations</li>
          <li>Transformers are especially powerful when combined with Conditions and Nodes for dynamic execution paths</li>
        </ul>

        <h2 id="10-files">10. Files</h2>

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

        <h2 id="11-services">11. Services</h2>

        <p>
          The Services section defines all the capabilities available to an agent. These services power the execution of Node, Classifier, Bot, and Transformer components in the workflow.
        </p>

        <p>
          Only services that are added and enabled in this section will be available for selection inside nodes. This ensures controlled, predictable, and modular agent behavior.
        </p>

        <img src="/v1/agents/editAgent/03_8services.png" alt="edit" />

        <h3 id="core-services">Core services</h3>

        <p>
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

        <h3 id="classifiers">Classifiers</h3>

        <p>
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

        <h3 id="datasets">Datasets</h3>

        <p>
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

        <h3 id="specialized-services">Specialized services</h3>

        <p>
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

        <h3 id="integrations">Integrations</h3>

        <p>
          Connect the agent to external systems or hosted models.
        </p>

        <p>
          Examples include storage services, email, and external model providers.
        </p>

        <h3 id="custom-services">Custom services</h3>

        <p>
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
              <td className="border border-border px-4 py-2"><strong>ds_plot</strong></td>
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
              <td className="border border-border px-4 py-2">Transcribe Collection of speech files (Needs Collection Input)</td>
              <td className="border border-border px-4 py-2"><code>Audio Batch</code></td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2"><strong>vision_batch</strong></td>
              <td className="border border-border px-4 py-2">Enter instruction</td>
              <td className="border border-border px-4 py-2">Reads Collection of images (Needs Collection Input)</td>
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
                <p className="text-sm mt-1 break-words"><strong>ds_plot</strong></p>
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
                <p className="text-sm mt-1 break-words">Transcribe Collection of speech files (Needs Collection Input)</p>
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
                <p className="text-sm mt-1 break-words">Reads Collection of images (Needs Collection Input)</p>
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
      </div>

        <h2 id="conclusion">Conclusion</h2>

        <p>
          The <strong>Visual Builder</strong> establishes a clear and structured approach to agent design by translating complex workflows into an intuitive visual format. By organizing execution into interconnected nodes—covering inputs, processing, decision-making, and transformation—it enables users to construct both simple and highly sophisticated agents within a single, unified canvas.
        </p>

        <p>
          Throughout the system, emphasis is placed on <strong>modularity, reusability, and controlled capability exposure</strong>. Components such as Nodes, Classifiers, Bots, Conditions, and Transformers work together to create flexible pipelines, while the <strong>Services</strong> and <strong>Files</strong> sections ensure that only explicitly configured resources and capabilities are used. This not only improves maintainability but also promotes consistency across different agent implementations.
        </p>

        <p>
          Key mechanisms like <strong>Condition nodes</strong> introduce dynamic branching, and <strong>Transformer nodes</strong> provide access to intermediate execution states, allowing workflows to evolve beyond linear processing into adaptive, state-aware systems. At the same time, reusable bots and services reduce duplication and streamline development.
        </p>

        <p>
          Finally, the use of concise instruction fields and UI-oriented labels maintains clarity for end users without disrupting the overall documentation style. Together, these elements position the Visual Builder as a scalable and user-friendly framework for designing, managing, and executing agent workflows with both precision and flexibility.
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