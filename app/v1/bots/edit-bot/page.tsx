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

export default function EditingABotPage() {
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
              <BreadcrumbPage>Editing a bot</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Editing a bot</h1>
        </div>

        <div className="prose prose-gray max-w-none">
          <p>
            This document describes how to configure and edit bots in Model HQ.
          </p>

          <blockquote data-type="important">
            <p>The configuration process is the same for both existing bots and creating new bots.</p>
          </blockquote>

          <RelatedVideos
            title="Watch: Configure & Edit Bots"
            description="See bot configuration, RAG, demos, and sharing in real-world walkthroughs."
            videoIds={[
              "zP2v8DixQaA",
              "il48-IaEfxw",
              "uy53WKrMOXc",
              "evbLEX-eA8o",
              "T1AOuUF7oQ8",
            ]}
          />

          <h2 id="1-configuring-a-bot">1. Configuring a bot</h2>

          <p>
            Although configuration is identical for both scenarios, since the process for <a href="/bots/buildbot">building a new bot</a> has already been covered, this section focuses on editing an existing bot.
          </p>

          <p>
            The Edit button can be clicked to begin editing the bot selected in the dropdown.
          </p>

          <img src="/v1/bots/editBot/01_editInterface.png" alt="editBot" />

          <p>
            The main configuration options are:
          </p>

          <ul>
            <li>Models</li>
            <li>Files</li>
            <li>Agents</li>
            <li>RAG</li>
          </ul>

          <p>
            Other optional options:
          </p>

          <ul>
            <li>Prompts</li>
            <li>UI</li>
            <li>Controls</li>
          </ul>

          <p>
            Additional options:
          </p>

          <ul>
            <li>JSON Editor</li>
            <li>Demo</li>
            <li>Meta</li>
            <li>Run</li>
            <li>Delete</li>
          </ul>

          <p>
            Each option is described in detail in the following subsections.
          </p>

          <h3 id="11-models">1.1 Models</h3>

          <p>
            This is one of the most important configuration panels when building or customizing a bot.
          </p>

          <p>
            The <strong>Models</strong> panel allows models to be selected from the catalog and various related configurations to be specified. Chat models, re-ranker models, vision models, and SQL models can be selected. Available options are displayed based on the selected model size.
          </p>

          <img src="/v1/bots/editBot/02_models.png" alt="editBot" />

          <ul>
            <li><strong>Model Size and Model Selection</strong> When Model Size is selected (choices are Small, Medium, or Large), the corresponding models will be displayed in the Model Selection dropdown.</li>
          </ul>

          <ul>
            <li><strong>Model User Input</strong> This setting allows developers to specify whether end users will be permitted to select the model or whether they will use a preselected model from the configuration screen.</li>
          </ul>

          <p>
            Options:
          </p>

          <ul>
          </ul>

          <ul>
            <li><strong>Execution Mode</strong> Specifies whether the model will be run locally, via an API, or whether the user will have the option to choose between the two modes.</li>
          </ul>

          <ul>
            <li><strong>Specialized Model Capabilities</strong> Chatbots can ingest tables, <code>.csv</code> files, images, and documents for text-to-SQL capabilities, document searching (RAG), or image processing (Vision). Developers can indicate whether one or more of these three capabilities will be permitted within the chatbot and make a model selection.</li>
          </ul>

          <p>
            The <strong>execution mode</strong> and <strong>generation settings</strong> can also be configured by specifying:
          </p>

          <ul>
          </ul>

          <ul>
            <li><strong>Sampling</strong> Sampling in AI model inferencing is the process of selecting possible output values (such as words or tokens) from a probability distribution generated by the model, often to introduce variability or control randomness in the response. Sample OFF ensures repeatability of results, whereas Sample ON provides more variability in responses. Where the user is working with business data or retrieval of information, it is recommending to turn Sampling OFF. If the user wants to use the Bot for more creative works such as story writing, Sampling can be turned ON.</li>
          </ul>

          <ul>
            <li><strong>Max Output</strong> Determines the maximum length of the model's response.</li>
          </ul>

          <ul>
            <li><strong>Temperature</strong> Temperature controls the randomness of the model's output; higher values produce more diverse and creative responses, while lower values yield more focused and deterministic results.</li>
          </ul>

          <p>
            If no selection is made, default options will be chosen based on the best models available for the selected size.
          </p>

          <p>
            Once configuration is complete, the <code>&gt;</code> button can be clicked to save changes.
          </p>

          <h3 id="12-files">1.2 Files</h3>

          <p>
            The Files feature allows the user to attach one or more specific files for use by the custom bot that will be appended to the bot when used later or when shared with others. This is useful for example if there is a specific technical documentation that the bot should query in its interaction, as an example. Using this feature will allow the user to specifically append one or more document, image, dataset, table, source (a collection of documents or information) or a dataset that the user has already created to be used by the bot in its interactions.
          </p>

          <p>
            After selecting Files, you’ll be prompted to attach files that will act as sources for the bot. After attaching a file, select its type from the radio options. Supported types include: <code>.pdf</code>, <code>.pptx</code>, <code>.docx</code>, <code>.xlsx</code>, <code>.csv</code>, <code>.txt</code>, <code>.md</code>, <code>.wav</code>, <code>.png</code>, <code>.jpg</code>, <code>.zip</code>.
          </p>

          <img src="/v1/bots/editBot/03_files.png" alt="editBot" />

          <p>
            The <code>Save + Exit</code> button can be clicked to save the source.
          </p>

          <p>
            Sources represent a group of one or more documents that have been previously uploaded and may be reused in queries at a later time.
          </p>

          <p>
            To add multiple files or sources, the <strong><code>+</code></strong> icon can be clicked and used repeatedly until the desired files are appended.
          </p>

          <blockquote data-type="caution">
            <p>If no files are selected, the bot will behave as a normal chatbot. Sources can still be added later from the <a href="/chat/chat">chat interface</a>, but they will not persist after restarting or be packaged with the bot for use by others if shared.</p>
          </blockquote>

          <blockquote data-type="tip">
            <p>To query a file that has been included with the bot, the user will select the <strong>Source</strong> button under the chat interface then in Loaded Sources, select the desired file that has been appended with the bot.
            </p>
            <p>!<a href="editBot/03-source.png">editBot</a></p>
          </blockquote>

          <h3 id="13-agents">1.3 Agents</h3>

          <p>
            Specialized agents can be added to the bot.
          </p>

          <img src="/v1/bots/editBot/04_agents.png" alt="editBot" />

          <details>
            <summary>Here's a brief takedown of every pre-existing Agent</summary>

            <ul className="mt-2 space-y-4 list-none pl-0">
              <li>
                <strong>AC Field Tech Support</strong>
                <p>
                  Assists field technicians by providing troubleshooting steps, diagnostics guidance, and on site support instructions. Optimized for quick issue resolution during deployments or maintenance.
                </p>
              </li>

              <li>
                <strong>Cloud API Agent</strong>
                <p>
                  Handles interactions with cloud based APIs including request formation, authentication, and response parsing. Useful for integrating external cloud services into workflows.
                </p>
              </li>

              <li>
                <strong>Contract Analyzer</strong>
                <p>
                  Reviews contracts to extract key clauses, obligations, risks, and timelines. Helps teams quickly understand legal documents without manual scanning.
                </p>
              </li>

              <li>
                <strong>Customer Support</strong>
                <p>
                  Responds to customer queries, resolves common issues, and provides product or service information. Designed to reduce support load and improve response times.
                </p>
              </li>

              <li>
                <strong>Customer Support Edit 7.28</strong>
                <p>
                  An updated or customized version of the Customer Support agent with refined logic or responses. Typically used for testing or iterative improvements.
                </p>
              </li>

              <li>
                <strong>Dataset Analysis</strong>
                <p>
                  Analyzes structured datasets to uncover trends, anomalies, and insights. Supports exploratory analysis, summaries, and basic statistical reasoning.
                </p>
              </li>

              <li>
                <strong>demo</strong>
                <p>
                  A lightweight agent used for demonstrations or proof of concept flows. Not intended for production workloads.
                </p>
              </li>

              <li>
                <strong>Demo_Agent</strong>
                <p>
                  Another demo focused agent used to showcase agent orchestration or specific capabilities. Often used in presentations or internal testing.
                </p>
              </li>

              <li>
                <strong>Financial Data Extractor</strong>
                <p>
                  Extracts financial information such as totals, line items, or metrics from documents or reports. Useful for accounting, audits, and financial reviews.
                </p>
              </li>

              <li>
                <strong>Image Tagger</strong>
                <p>
                  Automatically detects and assigns descriptive tags to images. Helps with image organization, search, and metadata generation.
                </p>
              </li>

              <li>
                <strong>Image Generation Agent</strong>
                <p>
                  Generates images based on text prompts or structured inputs. Commonly used for creative assets, mockups, or visual experimentation.
                </p>
              </li>

              <li>
                <strong>Intake Processing</strong>
                <p>
                  Processes incoming requests, forms, or documents and routes them appropriately. Acts as the first step in automated workflows.
                </p>
              </li>

              <li>
                <strong>Music License Royalty Agent</strong>
                <p>
                  Analyzes music licensing data to calculate royalties and usage details. Supports compliance and accurate royalty reporting.
                </p>
              </li>

              <li>
                <strong>Research Process</strong>
                <p>
                  Assists with structured research by gathering sources, synthesizing information, and producing summaries. Useful for technical, market, or academic research.
                </p>
              </li>

              <li>
                <strong>Summarize Website</strong>
                <p>
                  Fetches and summarizes the main content of a website or webpage. Designed for quick understanding without reading full pages.
                </p>
              </li>

              <li>
                <strong>test</strong>
                <p>
                  A sandbox agent used for experimentation and validation. Typically not connected to real workflows or data.
                </p>
              </li>
            </ul>

          </details>

          <blockquote data-type="note">
            <p>Custom agents can be created and added to the bot. Once an agent is created, it will be automatically listed here.</p>
          </blockquote>

          <h3 id="14-prompts">1.4 Prompts</h3>

          <p>
            This section allows the user to add prompts that will persistently be added to each chat and interaction with the bot. For example, if the user adds the prompt for the custom bot to answer only in French, the bot will do as instructed for every interaction.
          </p>

          <img src="/v1/bots/editBot/06_prompts.png" alt="editBot" />

          <p>
            The instruction above will result in a French-only answer by the bot as shown:
          </p>

          <img src="/v1/bots/editBot/06_promptResponse.png" alt="editBot" />

          <h3 id="15-rag">1.5 RAG</h3>

          <p>
            RAG configurations can be updated for the custom bot. This allows selection of sources and other context-related settings that can impact output quality, providing maximum control and flexibility for users.
          </p>

          <img src="/v1/bots/editBot/05_rag.png" alt="editBot" />

          <ul>
            <li><strong>Preload Source</strong> Pre-existing sources can be loaded. Sources saved from the Source option will automatically appear here.</li>
          </ul>

          <ul>
            <li><strong>Supported Modes of Additional Source Information</strong> This setting allows developers to control whether users will be able to connect to additional sources of information from multiple options:
              <ul>
                <li>File Upload</li>
                <li>Library Connection</li>
                <li>Tables</li>
                <li>Images</li>
                <li>Sources</li>
                <li>Wikipedia</li>
                <li>Tavily</li>
                <li>Serp API</li>
                <li>NewsAPI.org</li>
                <li>Finnhub.io</li>
                <li>AWS S3 Buckets</li>
                <li>Azure Blob Storage</li>
                <li>OneDrive</li>
              </ul></li>
          </ul>

          <ul>
            <li><strong>Text Chunk Size</strong> Text chunk size in parsing refers to the amount of text, measured in tokens, that is processed as a single unit during analysis or transformation of the file to a searchable body of text. Selecting the right text chunk size is important because it affects how accurately and efficiently a model can understand, process, and retrieve information—too small, and context may be lost; too large, and it may exceed model limits or reduce performance.</li>
          </ul>

          <ul>
            <li><strong>Context top n</strong> Context Top N refers to selecting the top N most relevant pieces of information (e.g., text chunks) from a larger context based on similarity to a query. This ensures the model focuses on the most pertinent data to generate accurate and relevant responses.</li>
          </ul>

          <ul>
            <li><strong>Context target size</strong> Context target size is the predefined maximum amount of text (in tokens) that can be included in a model's input. It balances the trade-off between including enough relevant information and staying within the model's processing limits to ensure efficient and coherent responses.</li>
          </ul>

          <ul>
            <li><strong>Reranker max samples</strong> Max samples in a reranker model refers to the maximum number of candidate items (e.g., documents, passages, or text chunks) that the model will consider and score for relevance. This setting ensures computational efficiency while still allowing the model to choose the most relevant results from a sufficiently broad pool.</li>
          </ul>

          <ul>
            <li><strong>Library Search Results</strong> Controls how many results are returned from the semantic search library. Higher values provide broader context but may increase noise.</li>
          </ul>

          <ul>
            <li><strong>Wiki Article Count</strong> Defines the number of Wikipedia articles retrieved during search. This setting is used when Wikipedia is enabled as a source.</li>
          </ul>

          <ul>
            <li><strong>Prompt Instruction for Source Comparison</strong> Adds guidance instructing the model to compare multiple retrieved sources. Useful for synthesis, validation, and cross-referencing.</li>
          </ul>

          <ul>
            <li><strong>Prompt Instruction Passed to RAG</strong> Custom instruction injected into the retrieval-augmented generation pipeline. Helps steer how retrieved context is used in responses.</li>
          </ul>

          <ul>
            <li><strong>Use Wikipedia as Source</strong> Enables Wikipedia content as part of the retrieval sources. Useful for general knowledge and background information.</li>
          </ul>

          <ul>
            <li><strong>Table Only Mode</strong> Restricts retrieval to extracted tables within documents. Best used for data-heavy queries and structured analysis.</li>
          </ul>

          <ul>
            <li><strong>Interpret CSV as DB Table</strong> Automatically treats uploaded CSV files as database tables. Enables natural language queries that translate to SQL-style operations.</li>
          </ul>

          <ul>
            <li><strong>PDF Parsing Options</strong> Controls how PDFs are processed. Digital is fastest, OCR is for scanned text, Vision Model is best for image-heavy documents.</li>
          </ul>

          <ul>
            <li><strong>Show Search Results and Context</strong> Displays retrieved documents and context used for generation. Helpful for debugging and transparency.</li>
          </ul>

          <ul>
            <li><strong>Show Post Prompt Reference / Explanation</strong> Shows references and explanations after the model response when available. Useful for understanding how answers were generated.</li>
          </ul>

          <ul>
            <li><strong>Include Source Information in Context</strong> Adds metadata such as document name and page number into the context. Improves traceability of answers.</li>
          </ul>

          <ul>
            <li><strong>Use Memory in Chat</strong> Allows the system to retain conversation history across turns. Enables more contextual and continuous interactions.</li>
          </ul>

          <ul>
            <li><strong>Memory Apply Rule</strong> Controls how much history is stored. "All" saves maximum context, "Last" saves only the most recent turn.</li>
          </ul>

          <ul>
            <li><strong>Memory Apply Role</strong> Defines whose messages are stored in memory. Can include user messages, assistant messages, or both.</li>
          </ul>

          <h2 id="other-optional-configuration-options">Other optional configuration options</h2>

          <h3 id="16-ui">1.6 UI</h3>

          <p>
            The UI panel enables fast and easy customization of the bot name, icons, colors, and other visual elements. The custom bot will be displayed to the user with the specific UI choices when accessed.
          </p>

          <img src="/v1/bots/editBot/07_ui.png" alt="bots" />

          <h3 id="17-controls">1.7 Controls</h3>

          <p>
            The Controls panel provides additional configuration options including logs, validation, model pull repository selection, download controls, pattern redaction, and classifier tests.
          </p>

          <img src="/v1/bots/editBot/08_controls.png" alt="bots" />

          <p>
            <strong>Control Configuration Options</strong> includes many Safety and Security features of Model HQ:
          </p>

          <ul>
            <li><strong>LLMWare Model Repository</strong> This option allows models to be downloaded directly from LLMWare's private model repository in Azure (recommended) or Huggingface. Note that Huggingface may experience outages and downtimes, as well as code changes, which can sometimes interfere with the ability to access their repository.</li>
          </ul>

          <ul>
            <li><strong>Validate Model Hash on Download</strong> Important safety feature that ensures the file has not been tampered with or corrupted during download, protecting against malicious code and safeguarding data integrity. It also ensures reproducibility by confirming that the exact version intended by the model provider is being used.</li>
          </ul>

          <ul>
            <li><strong>Validate on Every Load of the Model or Skip Validation</strong> Determines the frequency of the model safety hash check.</li>
          </ul>

          <ul>
            <li><strong>Safety Feature: Pattern Redaction</strong> Allows automatic redaction of various forms of personally identifiable information including US Social Security numbers, ABA routing numbers, email addresses, credit card information, driver's license numbers, passport information, dates, IBAN information, Indian PAN numbers, URLs, cryptocurrency addresses, or phone numbers.</li>
          </ul>

          <ul>
            <li><strong>Safety Feature: Classifier Tests</strong> By selecting any of the available options such as prompt injection detection, toxic detection, language detection, bias detection, or malicious URL detection, Model HQ will automatically run a model to detect any of the selected forms of safety checks before displaying the inference results.</li>
          </ul>

          <h2 id="additional-configuration-options">Additional configuration options</h2>

          <h3 id="18-json-editor">1.8 JSON editor</h3>

          <p>
            The JSON Editor can be used to make small correction edits directly on the JSON schema of the bot that has been built.
          </p>

          <p>
            A full bot can also be created from scratch using this editor, but this requires knowledge of the entire schema; therefore, this option is not widely promoted.
          </p>

          <details><summary>Sample JSON Configuration of `Bots with Agent` bot</summary>

            <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
              <code className="text-sm">{`{
  "name": "bot_with_agents",
  "display_name": "Bot with Agents",
  "model_name": "llama-3.2-1b-instruct-ov",
  "execution_mode": "Local",
  "user_select_model": "Choose for User",
  "description": "This bot is an example of integrating custom Agents into a Bot. The bot is designed to run on the NPU, while the Agent processes run on CPU, or the option to use a cloud-based service - all can be run concurrently.  To use the Anthropic service, you will need a separate Anthropic subscription, and provide your Anthropic API key in Credentials (on the configuration panel).",
  "agent_list": [
    "Cloud_API_Agent",
    "Summarize_Website"
  ],
  "root_agents": [],
  "max_output": 1000,
  "temperature": 0,
  "sample": false,
  "text_chunk_size": 600,
  "wiki_article_count": 3,
  "library_search_results": 20,
  "context_top_n": 3,
  "context_target_size": 500,
  "supporting_models": [
    "ranker_model"
  ],
  "vision_model": "qwen2-vl-2b-instruct-ov",
  "sql_model": "slim-sql-ov",
  "ranker_model": "jina-reranker-v1-tiny-en-ov",
  "local_exec": true,
  "connected_library": [],
  "connection_types": [
    "File Upload",
    "Library Connection",
    "Tables",
    "Images",
    "Sources",
    "Wikipedia"
  ],
  "source_name": [],
  "api_exec": false,
  "api_endpoint": {},
  "web_search": null,
  "web_search_config": null,
  "patterns": [],
  "classifiers": [],
  "write_to_db": null,
  "model_repo": "Azure",
  "allow_download_chat_history": true,
  "allow_generation_config": true,
  "show_explanation": true,
  "show_prompts": true,
  "show_web_search": true,
  "show_bot_config": true,
  "single_app_mode": false,
  "model_size": "small",
  "files": [],
  "install_bot_files": [],
  "ui_configs": {
    "theme": "dark",
    "app_title": "Model HQ",
    "title": "Model HQ",
    "company_name": "LLMWare",
    "company_url": "https://www.llmware.ai",
    "header_color": "#31384e",
    "footer_color": "#31384e",
    "main_color": "#1a1f2e",
    "apply_custom_ui": true,
    "icon_image": "llmware_logo_color_icon_square_48x48.ico",
    "main_icon": "llmware_logo_color_icon_square_48x48.ico"
  },
  "last_modified": "2026-01-08_191148",
  "created": "2025-07-06_135720",
  "author": "llmware",
  "bot_table_files": [],
  "bot_image_files": [],
  "bot_document_files": [],
  "bot_source_files": [],
  "bot_dataset_files": [],
  "rag_compare_instruction": "Here are several sources - please use as the basis for answering questions, and cite the specific source, if used, in generating your answer.\\n",
  "rag_aggregate_instruction": "",
  "system_instruction": "",
  "use_wikipedia": true,
  "show_search_and_context": true,
  "table_only_mode": false,
  "parse_pdf_by_ocr": false,
  "parse_pdf_by_vision": false,
  "include_source_info": false,
  "interpret_csv_as_table": false,
  "apply_memory": false,
  "memory_role": "both",
  "memory_rule": "max",
  "integrations": [],
  "prompt_list": [],
  "max_turns": -1,
  "demo_inputs": [],
  "demo_video": "",
  "demo_description": "",
  "chat_history": [],
  "preload_active_source": ""
}`}</code>
            </pre>

          </details>

          <h3 id="19-demo">1.9 Demo</h3>

          <p>
            The Demo feature allows predefined conversation flows to be configured and run, showcasing a bot's capabilities without manual input. It is primarily used for demonstrations, onboarding, and validating bot behavior using realistic example prompts.
          </p>

          <p>
            Demo inputs can be added, with each input acting as a step in the demo sequence that will be executed in the order they are added. The plus button can be used to add more inputs, or the reset option can be used to clear the sequence.
          </p>

          <img src="/v1/bots/editBot/09_demo1.png" alt="editBot" />

          <p>
            Once the sequence is ready, the Next (<code>&gt;</code>) button can be clicked. The interface then switches to the demo details view, where a short description can be provided explaining what the demo shows. An optional video link can also be added if a recorded demo or walkthrough is available.
          </p>

          <img src="/v1/bots/editBot/09_demo2.png" alt="editBOt" />

          <p>
            Once the demo has been configured, running the bot presents an additional Demo option in the subsequent interface.
          </p>

          <img src="/v1/bots/editBot/09_demo3.png" alt="editBot" />

          <p>
            Selecting the Demo option initiates the predefined demo flow. The bot then executes the configured sequence step by step, displaying the conversation and behavior as described in the demo setup. This allows viewers to experience the intended functionality without providing manual input.
          </p>

          <h3 id="110-meta">1.10 Meta</h3>

          <p>
            The Meta section is used to add descriptive information about the bot before sharing or publishing it. This information helps users understand the purpose, ownership, and intended usage of the bot.
          </p>

          <img src="/v1/bots/editBot/10_meta.png" alt="editBot" />

          <p>
            The <strong>Bot Use Case</strong> field can be defined to explain what the bot does, who it is for, and any important requirements or constraints. This description is shown as contextual information and does not affect bot behavior.
          </p>

          <p>
            The <strong>Author</strong> field identifies the creator or organization responsible for the bot. This is useful for attribution, discovery, and internal reference.
          </p>

          <h3 id="111-run">1.11 Run</h3>

          <p>
            After a bot is configured, it can be tested or used directly by clicking the Run button.
          </p>

          <h3 id="112-delete">1.12 Delete</h3>

          <p>
            If a bot needs to be removed or the configuration needs to be reset, the Delete button can be clicked to start fresh.
          </p>

          <h2 id="conclusion">Conclusion</h2>

          <p>
            This document covered the process of editing and configuring bots in Model HQ, from model selection and file attachment to RAG configuration, UI customization, and safety controls. Each configuration option provides developers with granular control over bot behavior, sources, and user experience. Once configured, bots can be tested locally, shared with others, or deployed for production use.
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
