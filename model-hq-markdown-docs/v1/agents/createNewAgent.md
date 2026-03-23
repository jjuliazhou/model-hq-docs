# Creating a new agent in Model HQ
The Agent creation interface in Model HQ provides multiple pathways for building custom workflows that automate document processing, data extraction, question answering, and complex multi-step analysis tasks. Agents can be created from scratch using step-by-step configuration, derived from existing agent templates, built visually using a drag-and-drop node editor, or imported from pre-packaged agent files. Each approach serves different use cases: step-based creation offers precise control over execution logic and service configuration, visual building provides intuitive workflow design through graphical interfaces, and template-based creation accelerates development by leveraging pre-built patterns for common scenarios.

This guide provides a comprehensive walkthrough for creating new agents using the Model HQ platform, covering interface navigation, configuration options, and setup procedures for different agent types. Users will learn how to initiate agent creation, select appropriate building modes, configure agent properties such as name and input requirements, and establish the foundational workflow structure. Whether building a simple single-step agent or a complex multi-stage pipeline with branching logic and conditional execution, understanding the agent creation interface is essential for transforming business requirements into automated, repeatable processes.

The documentation covers three primary agent building approaches: the Visual Builder for interactive node-based design, the Multi-Step Agent builder for structured sequential workflows, and the Prompting Agent builder for conversational AI implementations. Each mode has distinct advantages depending on the complexity of the workflow, the technical background of the user, and the specific use case requirements. Additional information on advanced topics such as service selection, context management, and output configuration will be covered in subsequent sections of the agent development documentation series.

## 1. Launching the interface
To begin creating a new agent, the following steps should be performed:

1. The **Main Menu** should be navigated to.
2. The **Agents** section should be selected.
3. The `Build New` option should be clicked to initiate a new agent.

![create_agents](agents/createAgent/01_agentsMenu.png)

The `>` button can be clicked to proceed to the next step.

## 2. Agent builder overview
When starting to build a new agent, two primary options are presented:
- **Option #1** - Start building a new process from scratch or derive from an existing process
- **Option #2** - Upload an agent from a pre-packaged agent template zip file

The first option (building from scratch or deriving from existing workflows) will be discussed first, followed by the upload process for pre-built agent templates.

When building an agent, multiple creation modes are available:
1. Visual Builder
2. Build Multi-Step Agent
3. Build Prompting Agent

## 3.1 Visual builder
The **Visual Builder** provides an interactive drag-and-drop interface for creating agents using a node-and-wire paradigm. This mode is particularly useful for users who prefer visual workflow design over text-based configuration. The Visual Builder allows nodes representing different services (such as document parsing, RAG retrieval, data extraction, or model inference) to be placed on a canvas and connected to define execution flow and data dependencies. Each node can be configured with specific instructions, input contexts, and output mappings through intuitive forms and dropdowns.

The Visual Builder excels at creating complex workflows with branching logic, conditional execution, and parallel processing paths, as these structures are more easily understood and modified in graphical form. The interface includes features for zooming, panning, rearranging nodes, and validating connections to ensure data flows correctly between steps. Once the visual workflow is complete, it can be executed directly from the builder, exported as a JSON configuration file, or further refined using the step-based editor.

For comprehensive information about using the Visual Builder, including detailed walkthroughs of node types, connection rules, configuration options, and best practices for visual workflow design, the [Agent Visual Builder]() documentation should be consulted.

## 3.2 Build multi-step agent
The **Multi-Step Agent** builder creates agents as linear sequences of services executed from start to finish.

**Agent setup: Getting started**
Basic information about the agent should be configured:

* **Name the agent**
  A unique, descriptive name should be provided for the agent that clearly indicates its purpose (e.g., "Contract Analyzer", "Invoice Processor", "Research Summarizer").

* **Define the input into the agent process**
  Input types that will be provided by the user should be selected when starting the process. By default, 'text' is defined as `MAIN-INPUT`, and any additional inputs such as `User-Document`, `User-Table`, `User-Image`, or `User-Source` can be enabled as needed.

* **Start process from scratch or derive from existing process**
  The agent can be built from scratch (default) with a blank workflow, or it can be derived from an existing agent template to leverage pre-built logic and structure.


## 3.3 Build prompting agent

The **Prompting Agent** builder is designed for creating conversational AI workflows that focus on natural language interactions and prompt-based model invocations.

