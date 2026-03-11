# Exploring agents in Model HQ
After completing the initial setup, users will be directed to the **Main Menu** where they can access the Agents interface. Agents in Model HQ represent automated workflows that combine document parsing, retrieval-augmented generation (RAG), language model inference, and structured output generation into cohesive, repeatable processes. Each agent is designed to solve specific tasks such as contract analysis, customer support automation, research summarization, financial data extraction, or image tagging, among others. Agents can be executed with single inputs or batch-processed across multiple files, and their outputs include structured reports, JSON data, markdown summaries, and visual workflow diagrams.

The Agents interface provides comprehensive capabilities for running pre-built agents, creating custom agents from scratch, editing existing workflows, sharing agents with collaborators, and visualizing agent logic through a drag-and-drop interface. Pre-created agents demonstrate common use cases and serve as templates that can be customized to meet specific requirements. When an agent is executed, it follows a defined sequence of steps that may include document parsing, RAG-based question answering, data extraction, report generation, and file output creation. Each step can be monitored through inference logs that track model responses, token usage, processing time, and confidence scores.

This document provides comprehensive guidance on the Agents interface, including how to load and run existing agents, interpret agent outputs and inference logs, utilize batch processing for multiple files, share agents with others, upload custom agents, and leverage the visual builder for workflow creation and editing. Understanding the Agents framework is essential for automating complex document workflows, building custom AI-powered processes, and integrating agent capabilities into broader enterprise systems.

## 1. Launching the agents interface
The **Agent** button in the main menu sidebar can be selected, or the agents option can be chosen from the home page as shown in the attached image.

![agents](agents/01_mainMenu.png)

## 2. Agent interface overview
The Agents interface allows agents to be run, built, edited, shared, and deleted.

![agents](agents/02_agentsInterface.png)

Here is a breakdown of the key components:
1. **Build New & Load Existing Options**
   - **Build New**: Creates a new agent from scratch.
   - **Load Existing**: Loads an existing agent, either a pre-created template included in Model HQ or one previously built by the user.

2. **Edit**: Modifies or deletes an existing agent.

3. **Share**: Shares an agent with others.

4. **Upload**: Quickly builds an agent by uploading a pre-built file.

5. **Visual**: Builds agents with an open visual builder by connecting nodes and wires (low-effort agent creation mode, enabling quick workflow creation or diagrammatic understanding of agent workflows).

6. **Delete**: Deletes an agent.

> [!NOTE]
> This documentation does not cover building and editing agents in detail. For creating a new agent, the [Create New Agent](/v1/agents/creating-new-agent) documentation should be consulted, and for editing an agent, the [Edit an Agent](/v1/agents/edit-an-agent) documentation should be followed. The visual builder mode is discussed in [Agent Visual Builder](/v1/agent/agent-visual-builder).

In this documentation, an existing agent will be run, and other options such as share and upload will be explained in detail.

### 2.1 Loading an existing agent
To load an existing agent, `load existing` can be selected (if not already selected), and then any of the pre-existing agents can be chosen. 

#### Available Pre-Created Agents in Model HQ
- **AC Field Tech Support**
- **Cloud API Agent**
- **Conditional Agent**
- **Contract Analyzer**
- **Customer Support**
- **Dataset Analysis**
- **Financial Data Extractor**
- **Image Tagger**
- **Image Generation Agent**
- **Intake Processing**
- **Music License Royalty Agent**
- **Research Process**
- **Summarize Website**

Select any agent from the list and click the `>` button to continue. 

For this walkthrough, **Contract Analyzer** has been selected, which was specifically designed to demonstrate how complex Employment Agreements can be quickly queried using pre-built agents.

## 2.2 Confirming the agent
After selecting an agent, the following interface will be displayed:

![agents](agents/03_contractAnalyzer.png)

Details about the agent will be provided along with the complete process flow from input to output.

In the Run agent section, 2-3 options will typically be available:
- Run (Details)
- Run (Demo) [OPTIONAL, may not be present]
- Batch Run

### 2.2.1 Run (Details)
Run (Details) enables the agent to be executed. 

User input will be requested based on the agent's configuration, such as text input or file upload.

>[!NOTE]
> If the required model(s) are not downloaded to run this agent, the models will be downloaded step-by-step as needed.

In the selected agent (Contract Analyzer), a file is required as input. Since it is a contract analyzer agent, a contract document is needed for analysis. The complete breakdown of all steps for this agent is as follows:
```
Step 1 - parse_document - my_contract
Step 2 - rag_answer - When is the effective date of the executive employment agreement?
Step 3 - rag_answer - What is the annual rate of the base salary?
Step 4 - rag_answer - How many vacation day?
Step 5 - agent_report - Contract Analysis Report
Step 6 - END - Process end.
```

**Uploading a File as Input** 

![agents](agents/04_runDetails1.png)

Model HQ includes sample executive employment agreement documents that can be used to test this agent. These files are located in:
```
c:\users\{user name}\llmware_data\sample_files\agreements
```
This sample agent demonstrates how documents can be queried using pre-built agents in an automated workflow, using one of the provided Executive Employment Agreements as an example. 

(Supported file types are `.pdf`, `.pptx`, `.docx`, `.txt`, and `.md`.)

Once the file has been added, the process can proceed to the next step.

Once the file is uploaded, the agent will begin executing the defined workflow automatically.

No further user action is required at this stage.

The agent will process the input and generate output as defined in its configuration.

![agents](agents/04_agentOutput1.png)

Once all processes have been completed, a summary report table will be created according to the 5th step (`agent_report - Contract Analysis Report`).

![agents](agents/04_agentOutput2.png)

For every output, inference history and created files will also be available.

#### 2.2.1.1 Inference history
The Inference History table provides detailed logs of each inference performed by the language model, enabling transparency, performance tracking, and auditing. This is particularly useful for AI-driven processes such as contract analysis, customer support, and research workflows.

![agents](agents/04_inference.png)

| **Column**            | **Description**                                                                        |
| --------------------- | -------------------------------------------------------------------------------------- |
| **inference**         | A sequential identifier for each inference operation.                                  |
| **llm\_response**     | The text response generated by the language model (LLM) based on the input context.    |
| **confidence\_score** | The model's confidence level (if available). `NA` indicates not applicable.            |
| **tokens**            | Token statistics, including input tokens, output tokens, and total tokens processed.   |
| **first token**       | Time (in seconds) taken to generate the first token of the response.                   |
| **processing time**   | Total time (in seconds) taken to process and return the complete response.             |

#### 2.2.1.2 Files created
This section lists the output files generated by the **Contract Analyzer Agent**. Each file captures a distinct part of the analysis—ranging from visual diagrams to raw metadata and final summaries—making it easier to trace the agent's behavior and audit results.

![Agent Output](agents/04_createdFiles.png)

| **File Name**                         | **Description**                                                                                       |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `agent_name.png`               | A visual representation (e.g., diagram or flowchart) of the contract analysis process or structure.   |
| `agent_name_mermaid_chart.md`  | A markdown file containing a Mermaid.js chart definition that visually maps the agent’s workflow.     |
| `agent_name.json`              | A structured JSON file containing the raw data or metadata extracted by the agent from the contract.  |
| `agent_process_report_technical.docx` | A detailed technical report describing the internal processing steps, models used, and outcomes.      |
| `agent_name_take_aways.txt`    | A human-readable text summary highlighting key insights and findings from the contract.           |
| `agent_name_take_aways.json`   | A structured version of the takeaways in JSON format for use in APIs, dashboards, or further parsing. |

> [!IMPORTANT]
> In the screenshots above and below, the name `contract_analyzer` is used (as mentioned before). This is because these outputs were generated while testing the Contract Analyzer Agent.


### 2.2.2 Run (Demo)
Run (Demo) executes the demonstration that was built during agent creation.

It provides a self-explanatory overview and demonstration of how the agent functions.

The presence of this button depends on whether a demo was added to the agent during its creation. However, this option is always available to be added in the edit agent section.

### 2.2.3 Batch run
Batch Run allows multiple files to be selected at once as input to the agent.

![agents](agents/05_batchRun.png)

More details about this feature are available in the [Batch Processing](/v1/agents/batch-processing) documentation.

## 2.3 Share your agent
The Share option in the agents interface allows an agent to be downloaded for sharing purposes.

When this option is clicked, a `.zip` file will be created and made ready for download.

![agents](agents/06_share.png)

## 2.4 Uploading an agent
The Upload option in the agents interface allows agents to be uploaded.

![agents](agents/07_upload.png)

If a downloaded agent zip file is available, a custom agent can be created directly by uploading the zip file, and it will be automatically installed with the option to edit it further.

## 2.5 Agent visual builder
The Visual option in the agent interface allows a visual view of an agent to be quickly obtained, along with the ability to edit that agent.

![agents](agents/08_visual.png)

A drag-and-drop based interface is provided that allows any new agent to be built or edited quickly.

>[!NOTE]
> Further information about this mode is available in the [Agent Visual Builder](/v1/agents/agent-visual-builder) documentation.

## Conclusion
This document provided comprehensive guidance on the Agents interface in Model HQ, covering how to run, share, upload, and visualize agents within the platform. Agents represent automated workflows that combine document parsing, retrieval-augmented generation, language model inference, and structured output generation into repeatable, scalable processes. Pre-built agents such as Contract Analyzer, Customer Support, Financial Data Extractor, and Research Process demonstrate common use cases and serve as templates that can be customized to meet specific organizational requirements.