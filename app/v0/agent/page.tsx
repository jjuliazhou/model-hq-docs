import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function AgentPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Agents</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Exploring Agents in Model HQ</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          Once you complete the initial setup, you will be directed to the <strong>Main Menu</strong>.
          <br />
          This interface provides access to a range of functionalities. In this section, we will focus specifically on
          the <strong>Agent</strong> feature.
        </p>

        <p>&nbsp;</p>

        <h2 id="1-launching-the-agent-interface">1. Launching the Agent Interface</h2>
        <p>
          To begin, click on the <strong>Agent</strong> button from the main menu.
          <br />
          <img src="/v0/agent/agent.png" alt="Launch Agent Interface" />
        </p>

        <p>&nbsp;</p>

        <h2 id="2-understanding-the-agent-menu">2. Understanding the Agent Menu</h2>
        <p>
          Upon entering the Agent interface, you will be presented with a variety of options.
          <br />
          <img src="/v0/agent/agentInterface.png" alt="Agent Menu Overview" />
        </p>

        <p>Here is a breakdown of the key components:</p>

        <ol>
          <li>
            <strong>Options</strong>:
            <ul>
              <li>
                <strong>Build New</strong>: Create a new agent from scratch.
              </li>
              <li>
                <strong>Load Existing</strong>: Load an existing agent, either a pre-created template included in Model
                HQ or previously built by you.
              </li>
            </ul>
          </li>
          <li>
            <strong>Dropdown</strong>: Displays all available agents, including both pre-created and user-created
            agents.
          </li>
          <li>
            <strong>&gt; (Next)</strong>: Proceeds with the selected agent or action.
          </li>
          <li>
            <strong>Edit</strong>: Modify or delete an existing agent.
          </li>
          <li>
            <strong>Batch Run</strong>: Upload files that will be treated as separate input work items and passed
            one-by-one into the process.
          </li>
          <li>
            <strong>🗑️</strong>: Delete an existing agent from the dropdown list.
          </li>
          <li>
            <strong>Home</strong>: Return to the main menu.
          </li>
        </ol>

        <p>&nbsp;</p>

        <p>
          For the purpose of this documentation, we will use the <strong>Load Existing</strong> option to explore the
          Agent workflow.
        </p>

        <h4>Available Pre-Created Agents in Model HQ:</h4>
        <ul>
          <li>
            <strong>Contract Analyzer</strong>
          </li>
          <li>
            <strong>Customer Support</strong>
          </li>
          <li>
            <strong>Financial Data Extractor</strong>
          </li>
          <li>
            <strong>Image Tagger</strong>
          </li>
          <li>
            <strong>Intake Processing</strong>
          </li>
          <li>
            <strong>Research Process</strong>
          </li>
        </ul>

        <img src="/v0/agent/agentOptions.png" alt="Select Agent" />

        <p>
          Select any agent from the list and click the <code>&gt;</code> button to continue.
          <br />
          For this walkthrough, we have selected <strong>Contract Analyzer</strong> which was specifically designed to
          demonstrate how complex Employment Agreements can be quickly queried using pre-built agents. (Detailed information about this Agent workflow can also be found in LLMWare&apos;s YouTube channel-{" "}
          <a href="https://youtu.be/FSjpAgIZnPM?si=6UMkLD4HMdXxmxcg" target="_blank" rel="noopener noreferrer" style={{ color: "red" }} >
            https://youtu.be/FSjpAgIZnPM?si=6UMkLD4HMdXxmxcg
          </a>
          )
        </p>

        <p>&nbsp;</p>

        <h2 id="3-confirming-the-agent">3. Confirming the Agent</h2>
        <p>
          After selection, you will be presented with a confirmation screen summarizing the chosen agent along with a
          detailed description.
        </p>

        <p>
          Each agent includes a summary of the processes it will perform. Click the <strong>Details</strong> button to
          review these processes.
        </p>

        <p>
          If the selected agent requires changes, click <strong>Exit</strong>, return to the previous menu, and use the{" "}
          <strong>Edit</strong> button to modify the configuration.
          <br />
          <em>(Documentation for editing agents is available separately.)</em>
        </p>

        <p>
          If everything looks good, proceed by clicking the <strong>RUN</strong> button.
          <br />
          <img src="/v0/agent/agent2.png" alt="Confirm Agent" />
        </p>

        <p>&nbsp;</p>

        <h2 id="4-uploading-an-input-file">4. Uploading an Input File</h2>
        <p>
          In this step, upload the file that the agent will process. Model HQ includes sample executive employment
          agreements documents for you to try for this test agent use case in{" "}
          <strong>c:\users\{"{user name}"}\llmware_data\sample_files\agreements</strong>. This sample agent is designed
          to show how you can query documents using pre-built agents in an automated workflow using one of the provided <b>Executive Employment Agreements</b> as an example.
        </p>

        <p>
          (The supported file types are <code>.pdf</code>, <code>.pptx</code>, <code>.docx</code>, <code>.txt</code>,
          and <code>.md</code>.)
        </p>

        <p>
          This screen is straightforward—simply upload an example file of an Executive Employment Agreement from the file path above and click the{" "}
          <code>&gt;</code> button to proceed.
          <br />
          <img src="/v0/agent/agent3.png" alt="Upload File" />
        </p>

        <p>&nbsp;</p>

        <h2 id="5-receiving-the-output">5. Receiving the Output</h2>
        <p>
          Once the file is uploaded, the agent will begin executing the defined workflow automatically.
          <br />
          No further user action is required at this stage.
        </p>

        <p>The agent will process the input and generate the output as defined in its configuration.</p>

        <img src="/v0/agent/agentOutput1.png" alt="Agent Output" />
        <img src="/v0/agent/agentOutput2.png" alt="Agent Output" />

        <p>&nbsp;</p>

        <h2 id="6-inference-history">6. Inference History</h2>
        <p>
          The Inference History table provides detailed logs of each inference performed by the language model, allowing
          for transparency, performance tracking, and auditing. This is particularly useful for AI-driven contract
          analysis, customer support, research process, etc.
        </p>

        <table>
          <thead>
            <tr>
              <th>Column</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>inference</strong>
              </td>
              <td>A sequential identifier for each inference operation.</td>
            </tr>
            <tr>
              <td>
                <strong>llm_response</strong>
              </td>
              <td>The text response generated by the language model (LLM) based on input context.</td>
            </tr>
            <tr>
              <td>
                <strong>confidence_score</strong>
              </td>
              <td>
                The model&apos;s confidence level (if available). <code>NA</code> indicates not applicable.
              </td>
            </tr>
            <tr>
              <td>
                <strong>tokens</strong>
              </td>
              <td>Shows token statistics, including input, output, and total tokens processed.</td>
            </tr>
            <tr>
              <td>
                <strong>first token</strong>
              </td>
              <td>Time (in seconds) taken to generate the first token of the response.</td>
            </tr>
            <tr>
              <td>
                <strong>processing time</strong>
              </td>
              <td>Total time (in seconds) taken to process and return the complete response.</td>
            </tr>
          </tbody>
        </table>

        <img src="/v0/agent/inference.png" alt="Agent Output" />

        <p>&nbsp;</p>

        <h2 id="7-files-created">7. Files Created</h2>
        <p>
          This section lists the output files generated by a specific <strong>Contract Analyzer Agent</strong>. Each
          file captures a distinct part of the analysis—ranging from visual diagrams to raw metadata and final
          summaries—making it easier to trace the agent&apos;s behavior and audit the results.
        </p>

        <table>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>agent_name.png</code>
              </td>
              <td>
                A visual representation (e.g., diagram or flowchart) of the contract analysis process or structure.
              </td>
            </tr>
            <tr>
              <td>
                <code>agent_name_mermaid_chart.md</code>
              </td>
              <td>
                A markdown file containing a Mermaid.js chart definition that visually maps the agent&apos;s workflow.
              </td>
            </tr>
            <tr>
              <td>
                <code>agent_name.json</code>
              </td>
              <td>
                A structured JSON file containing the raw data or metadata extracted by the agent from the contract.
              </td>
            </tr>
            <tr>
              <td>
                <code>agent_process_report_technical.docx</code>
              </td>
              <td>A detailed technical report describing the internal processing steps, models used, and outcomes.</td>
            </tr>
            <tr>
              <td>
                <code>agent_name_take_aways.txt</code>
              </td>
              <td>A human-readable text summary highlighting the key insights and findings from the contract.</td>
            </tr>
            <tr>
              <td>
                <code>agent_name_take_aways.json</code>
              </td>
              <td>
                A structured version of the takeaways in JSON format for use in APIs, dashboards, or further parsing.
              </td>
            </tr>
          </tbody>
        </table>

        <img src="/v0/agent/createdFiles.png" alt="Agent Output" />

        <blockquote>
          <p>
            In the screenshots above and below, you&apos;ll notice the name <code>contract_analyzer</code> being used
            (as mentioned before). This is because these outputs were generated while testing the Contract Analyzer
            Agent.
          </p>
        </blockquote>

        <br />

        <h4>contract_analyzer.png</h4>
        <p>
          A graphical image that provides a visual representation of the contract analysis process or its extracted
          structure. It might include hierarchical clause trees, entity relationships, or summary visualizations.
        </p>
        <img src="/v0/agent/file1.png" alt="Agent Output" />

        <br />

        <h4>contract_analyzer_mermaid_chart.md</h4>
        <p>
          A Markdown file that contains a Mermaid.js diagram definition. This chart helps visually explain the logic,
          flow, or state transitions followed by the agent during contract analysis.
        </p>

        <p>It looks like this:</p>
        <pre>
  <code>{`
flowchart TD
  A[start_agent] -->|start_agent - Starting Process - Setting up Models + Services| B[parse_document]
  B[parse_document] -->|parse_document - parse_document| C[rag_answer]
  C[rag_answer] -->|rag_answer - rag_answer| D[rag_answer]
  D[rag_answer] -->|rag_answer - rag_answer| E[rag_answer]
  E[rag_answer] -->|rag_answer - rag_answer| F[agent_report]
  F[agent_report] -->|agent_report - agent_report| G[END]
`}</code>
</pre>

        <br />

        <h4>contract_analyzer.json</h4>
        <p>
          A structured JSON file containing the full set of metadata, entities, or extracted fields identified by the
          agent. This file is particularly useful for integrations or detailed audits.
        </p>

        <details>
          <summary className="text-pink-500">View JSON structure (click to expand)</summary>
          <pre>
            <code>{`{
  "agent": {
    "process_name": "contract_analyzer",
    "display_name": "Contract Analyzer",
    "description": {},
    "node_wrappers": [
      "view_execution"
    ],
    "input_heads": [
      {
        "name": "AddDocumentInputHead",
        "kwargs": {
          "process_name": "contract_analyzer"
        }
      }
    ],
    "reranker_max_samples": 1000,
    "derive_from_process": "",
    "sql_model": "slim-sql-ov",
    "include_source_info": false,
    "rag_answer_model": "llama-3.2-3b-instruct-ov",
    "context_id_list": [
      {
        "context_id": "User-Document",
        "type": "document_file",
        "node": 0,
        "service": "AddDocumentInputHead",
        "value": "",
        "source": "input_head"
      },
      {
        "context_id": "my_contract",
        "type": "doc_source",
        "node": 1,
        "service": "parse_document",
        "value": "my_contract",
        "source": "process"
      },
      {
        "context_id": "my_contract",
        "type": "source",
        "node": 1,
        "service": "parse_document",
        "value": "my_contract",
        "source": "process"
      }
    ],
    "sub_process": null,
    "filter_large_doc_state": true,
    "chat_model": "llama-3.2-3b-instruct-ov",
    "install_agent_files": [],
    "global_named_vars_list": [
      {
        "key": "rag_answer_2",
        "value": "",
        "service": "rag_answer",
        "node": 2
      },
      {
        "key": "rag_answer_3",
        "value": "",
        "service": "rag_answer",
        "node": 3
      },
      {
        "key": "rag_answer_4",
        "value": "",
        "service": "rag_answer",
        "node": 4
      }
    ],
    "auto_optimize": true,
    "api_exec": false,
    "preload_models": true,
    "library_search_results": 20,
    "process_inputs": [
      [
        "User-Document",
        "document_file"
      ]
    ],
    "compare_or_aggregate_mode": "aggregate",
    "rag_compare_instruction": "Attached are several sources - please use as the basis for answering questions, and cite the specific source, if used, in generating your answer.\\n",
    "chat_instruction": "",
    "max_output": 1000,
    "test_input": "",
    "api_key": null,
    "api_endpoint": {},
    "answer_model": "bling-tiny-llama-ov",
    "text_chunk_size": 600,
    "rag_aggregate_instruction": "",
    "wiki_article_count": 3,
    "context_target_size": 500,
    "context_top_n": 3
  },
  "controls": {
    "check_hash": true,
    "sensitive": [],
    "classifiers": [],
    "exclusion_list": [],
    "invisible_text": false
  },
  "report_configs": {
    "tech_report": {
      "format": "docx",
      "elements": [
        "report",
        "report_commentary",
        "research_list",
        "response_list",
        "safety_record",
        "usage_history",
        "inference_history"
      ]
    },
    "report_types": [
      "Technical"
    ],
    "take_aways": {},
    "compliance_report": {
      "format": "docx",
      "elements": [
        "report",
        "research_list",
        "response_list",
        "scratch_pad",
        "journal"
      ]
    },
    "business_report": {
      "format": "docx",
      "elements": [
        "report",
        "report_commentary"
      ]
    }
  },
  "process": {
    "node0": {
      "service": "parse_document",
      "inputs": {
        "doc_source_name": "my_contract",
        "fp": "{{User-Document}}"
      }
    },
    "node1": {
      "service": "rag_answer",
      "inputs": {
        "query": "When is the effective date of the executive employment agreement?",
        "doc_state": "{{my_contract}}"
      }
    },
    "node2": {
      "service": "rag_answer",
      "inputs": {
        "query": "What is the annual rate of the base salary?",
        "doc_state": "{{my_contract}}"
      }
    },
    "node3": {
      "service": "rag_answer",
      "inputs": {
        "query": "How many vacation day?",
        "doc_state": "{{my_contract}}"
      }
    },
    "node4": {
      "service": "agent_report",
      "inputs": {
        "title": "Contract Analysis Report"
      }
    },
    "node5": {
      "service": "END"
    }
  }
}`}</code>
          </pre>
        </details>

        <br />

        <h4>agent_process_report_technical.docx</h4>
        <p>
          This is a technical report in Word format that documents the internal workings of the agent. It includes
          inference logic, model details, parameters used, and evaluation outcomes.
        </p>
        <img src="/v0/agent/file2.png" alt="Agent Output" />

        <br />

        <h4>contract_analyzer_take_aways.txt</h4>
        <p>
          A plain text summary containing the key findings from the contract. It includes every detail of the agent
          workflow in text format stating everything happened in a particular step.
        </p>
        <p>
          Checkout here:&nbsp;
          <a
            href="https://github.com/RS-labhub/ModelHQ-Docs/blob/master/agent/contract_analyzer_take_aways.txt"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00aaff" }}
          >
            TEXT OUTPUT
          </a>
        </p>

        <br />

        <h4>contract_analyzer_take_aways.json</h4>
        <p>
          A machine-readable version of the takeaways file. This JSON structure makes it easier to import the key
          insights that are generated by running this agent. It also contains the same information as of{" "}
          <code>contract_analyzer_take_aways.txt</code> but just in JSON format.
        </p>
        <p>
          Checkout here:&nbsp;
          <a
            href="https://github.com/RS-labhub/ModelHQ-Docs/blob/master/agent/contract_analyzer_take_aways.json"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00aaff" }}
          >
            JSON OUTPUT
          </a>
        </p>

        <p>&nbsp;</p>

        <h2 id="8-exiting-agents">8. Exiting Agents</h2>
        <p>
          Once the Agent workflow is complete, scroll to the bottom of your screen to either &apos;Run Again&apos; which
          will run the process again or click on &apos;🛖&apos; icon to exit and return to the Main Menu.
        </p>

        <h2>Conclusion</h2>
        <p>
          This concludes the walkthrough of the <strong>Agent</strong> interface in Model HQ.
          <br />
          In subsequent sections, we will explore how to build, edit and customize your own agents from scratch or run
          the workflow in batches (run multiple documents at once). Please go to the <a href="/agent/create-new-agent" style={{ color: "#00aaff" }} >Creating New Agent</a>, <a href="/agent/edit-agent" style={{ color: "#00aaff" }} >Edit Agent</a> or{" "}
          <a href="/agent/multi-doc" style={{ color: "#00aaff" }} >Batch Run</a> Sections of this documentation.
        </p>

        <p>
          If you have any questions or feedback, please reach out to us at <code>support@aibloks.com</code>.
        </p>
      </div>
    </div>
  )
}
