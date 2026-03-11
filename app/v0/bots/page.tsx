import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function BotsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 overflow-x-hidden">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Bots</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Exploring Bots in Model HQ</h1>
      </div>

      <div className="prose prose-gray max-w-none overflow-x-hidden">
        <p>
          Once you complete the initial setup, you will be directed to the <strong>Main Menu</strong>.
          <br />
          This interface offers multiple functionalities; in this section, we will focus specifically on the{" "}
          <strong>Bots</strong> feature. The Bots feature allows users to create their own custom Chat and RAG bots
          seamlessly for either the AI PC/edge device use case (Fast Start Chatbot and Model HQ Biz Bot) or via API
          deployment (Model HQ API Server Biz Bot).
        </p>

        <p>&nbsp;</p>

        <h2 id="launching-the-bots-interface">1. Launching the Bots Interface</h2>
        <p>
          Click on the <strong>Bots</strong> button from the main menu to get started.
          <br />
          <img src="/v0/bots.png" alt="bots" />
        </p>

        <p>&nbsp;</p>

        <h2 id="understanding-the-bots-interface">2. Understanding the Bots Interface</h2>
        <p>
          You will land on an interface similar to the one shown in the screenshot.
          <br />
          <img src="/v0/bots/bots.png" alt="bots" />
        </p>

        <p>Here you will get multiple options. Let us briefly go over each button:</p>

        <ol>
          <li>
            <strong>Options</strong>: Allows you to choose whether you want to create your own custom bot or load an
            existing one.
            <ul>
              <li>
                <strong>Build new</strong>: Create a new bot from scratch.
              </li>
              <li>
                <strong>Load Existing</strong>: Load a previously created or existing bot.
              </li>
            </ul>
          </li>
          <li>
            <strong>Dropdown</strong>: Allows you to switch between the existing bots.
          </li>
          <li>
            <strong>
              Next or <code>&gt;</code>
            </strong>
            : Proceed button.
          </li>
          <li>
            <strong>Edit</strong>: Allows you to edit the selected bot.
          </li>
          <li>
            <strong>Home</strong>: Takes you back to the main menu.
          </li>
        </ol>

        <p>&nbsp;</p>

        <p>
          Manually, the <strong>Load Existing</strong> button is selected, so let us try it out first.
        </p>

        <h2 id="loading-an-existing-bot">3. Loading an Existing Bot</h2>

        <p>
          To load an existing bot, just select a bot from the dropdown (or leave it as the already selected one), and
          then click on the <code>&gt;</code> button.
        </p>

        <p>
          The bot will begin loading and will look like this:
          <br />
          <img src="/v0/bots/loading.png" alt="bots" />
        </p>

        <p>
          It usually takes less than a minute to load (depending on your internet speed). After that, you will land on
          the <a href="/chat">Chat Interface</a>.
        </p>

        <p>&nbsp;</p>

        <h2 id="creating-a-new-bot">4. Creating a New Bot</h2>

        <p>
          To create a new bot from scratch, choose <strong>Build new</strong> and click <code>&gt;</code>. If you choose{" "}
          <strong>Build new</strong>, you will first be prompted to name your Bot. Enter the name of the Bot in the
          Configure Bot screen and click <code>&gt;</code> to proceed.
        </p>

        <h2 id="configuring-a-new-bot-or-editing-an-existing-bot">
          5. Configuring a New Bot or Editing an existing bot
        </h2>

        <p>
          The interface for creating a new bot or editing an existing one (after you click the <strong>Edit</strong>{" "}
          button) is the same. Both have the same options. For this tutorial, we will show how to edit a Fast Start
          Chatbot. If you are creating a new bot, follow the same steps as shown in Models button below.
        </p>

        <p>
          Click on the <strong>Edit</strong> button in the bots screen or You will land on this screen:
          <br />
          <img src="/v0/bots/edit.png" alt="bots" />
        </p>

        <p>Now we will look into each button one by one:</p>

        <ul>
          <li>Models</li>
          <li>Files</li>
          <li>RAG</li>
          <li>Options</li>
          <li>Run</li>
          <li>Export</li>
          <li>Delete (🗑️)</li>
          <li>Home</li>
        </ul>

        <h3 id="models-button">a. Models button</h3>
        <p>This is one of the most important buttons while building or customizing a bot.</p>

        <p>
          The <strong>Models</strong> button allows you to select models from the catalog to be implemented in the bot
          and to specify a variety of related configurations. You can select the chat model, ranker model, vision model,
          and SQL model. Based on the size of the model, the dropdown shows you available options.
        </p>

        <p>
          -&gt; <u>Model Size and Model Selection</u>: When you select the Model Size (choices are Small, Medium or
          Large), you will see the corresponding models in the next dropdown - Model Selection.
        </p>

        <p>
          -&gt; <u>Model User Input</u>: This allows the developer to indicate whether the end user will be permitted to
          select the model or whether the end user will use the model preselected for them in this configuration screen.
        </p>

        <p>
          -&gt; <u>Execution Mode</u>: Specifies whether the model will be run locally, via an API or whether the user
          will have a choice to select between the two modes.
        </p>

        <p>
          -&gt; <u>Specialized Agents</u>: The chatbots also have the ability to ingest tables, .csv files, images and
          documents for text-to-SQL capabilities, document searching (RAG) or image processing (Vision). The developer
          will have the opportunity to indicate whether one or more of these three Specialized Agents capabilities will
          be permitted within the chatbots and to make a model selection (for Vision).
        </p>

        <p>
          You can also select the <strong>execution mode</strong> and <strong>generation settings</strong> by
          indicating:
        </p>
        <ul>
          <li>whether the capability to Sample is ON or OFF</li>
          <li>the max output token limit</li>
          <li>the temperature.</li>
        </ul>

        <p>
          "<strong>Sampling</strong>" in AI model inferencing is the process of selecting possible output values (such
          as words or tokens) from a probability distribution generated by the model, often to introduce variability or
          control randomness in the response. Sample OFF ensures repeatability of results whereas Sample ON provides
          more variability in responses.
        </p>

        <p>
          "<strong>Max Output</strong>" determines the maximum length of response of the model.
        </p>

        <p>
          "<strong>Temperature</strong>" controls the randomness of the model's output, with higher values producing
          more diverse and creative responses, and lower values yielding more focused and deterministic results.
        </p>

        <p>
          If you do not make a selection, the default options will be chosen based on the best models available for the
          size.
        </p>

        <p>
          Once configured, click on <code>&gt;</code> to save your changes.
        </p>

        <img src="/v0/bots/models.png" alt="bots" />

        <h3 id="files-button">b. Files button</h3>
        <p>Another crucial button for your bot.</p>

        <p>
          You will be prompted to attach files that will act as sources for the bot. After attaching a file, select its
          type from the radio options. Supported types include: <code>.pdf</code>, <code>.pptx</code>,{" "}
          <code>.docx</code>, <code>.xlsx</code>, <code>.csv</code>, <code>.txt</code>, <code>.md</code>,{" "}
          <code>.wav</code>, <code>.png</code>, <code>.jpg</code>, <code>.zip</code>.
        </p>

        <p>
          Click on <code>Save + Exit</code> to save the source. If you want to reuse sources later, select them directly
          from the <strong>Sources</strong> section. Sources indicate a group of one or more documents that have been
          previously uploaded that a user may want to reuse in a query at a later time. To delete a saved source, select
          it and click on the delete icon (🗑️).
        </p>

        <p>
          To add multiple files, click the{" "}
          <strong>
            <code>+</code>
          </strong>{" "}
          icon.
        </p>

        <blockquote data-type="caution">
          <p>
            <strong>Caution:</strong> If you do not select any files, the bot will behave as a normal chatbot. You can
            still add sources later from the <a href="/chat">chat interface</a>, but they will not persist after
            restarting.
          </p>
        </blockquote>

        <img src="/v0/bots/files.png" alt="bots" />

        <h3 id="rag-button">c. RAG button</h3>
        <p>
          Update the RAG configurations for your custom bot. It allows you to choose what you want as a source and other
          context-related settings that can impact the result of the output for maximum control and flexibilty for the
          developer.
        </p>

        <img src="/v0/bots/rag.png" alt="bots" />

        <p>
          -&gt; <u>Supported Modes of Additional Source Information</u>: This allows the developer to control whether
          the user will be able to connect to additional sources of information from files, library connection (API
          connection), Tables, Images, Sources (previously saved grouping of files) and/or Wikipedia.
        </p>

        <p>
          -&gt; <u>Text Chunk Size</u>: Text chunk size in parsing refers to the amount of text, measured in tokens,
          that is processed as a single unit during analysis or transformation of the file to a searchable body of text.
          Selecting the right text chunk size is important because it affects how accurately and efficiently a model can
          understand, process, and retrieve information—too small, and context may be lost; too large, and it may exceed
          model limits or reduce performance.
        </p>

        <p>
          -&gt; <u>Context top n</u>: Context Top N refers to selecting the top N most relevant pieces of information
          (e.g., text chunks) from a larger context based on similarity to a query, and it's important because it
          ensures the model focuses on the most pertinent data to generate accurate and relevant responses.
        </p>

        <p>
          -&gt; <u>Context target size</u>: Context target size is the predefined maximum amount of text (in tokens)
          that can be included in a model's input, and it balances the trade-off between including enough relevant
          information and staying within the model's processing limits to ensure efficient and coherent responses.
        </p>

        <p>
          -&gt; <u>Reranker max samples</u>: Max samples in a reranker model refers to the maximum number of candidate
          items (e.g., documents, passages, or text chunks) that the model will consider and score for relevance, and
          it's important because it sets a limit to ensure computational efficiency while still allowing the model to
          choose the most relevant results from a sufficiently broad pool.
        </p>

        <p>
          -&gt; <u>Prompt instruction added to prompt context to compare multiple source documents</u>: Default
          instructions are included but please feel free to experiment.
        </p>

        <p>
          -&gt; <u>Prompt instruction passed to RAG</u>: No default instructions are added. Developer is free to
          experiment.
        </p>

        <p>
          -&gt; <u>Use Wikipedia as Source</u>: This button allows the user access to Wikipedia as a reference while
          using the chatbot.
        </p>

        <h3 id="options-button">d. Options button</h3>
        <p>This optional but important section gives you more control over your bot, UI, upload settings, etc.</p>

        <img src="/v0/bots/options.png" alt="bots" />

        <p>Here is a breakdown of each sub-option:</p>
        <ul>
          <li>
            <strong>Controls</strong>: Allows developers more configuration options by offering settings like logs,
            validation, model pull repository selection, download controls, pattern redaction, and classifier tests.
            <br />
            <img src="/v0/bots/controls.png" alt="bots" />
          </li>
          <p>
            <strong>Control Configuration Options</strong> includes many Safety and Security features of Model HQ:
          </p>
          <ul>
            <li>
              <u>LLMWare Model Repository</u>: Option includes ability to download models directly from LLMWare's private
              model repository in Azure (recommended) or Huggingface. Please note that Huggingface faces outages and
              downtimes, as well as changes to their code, which sometimes interferes with the ability to access their
              repository.
            </li>
            <li>
              <u>Validate Model Hash on Download</u>: Important safety feature that ensures the file hasn't been tampered
              with or corrupted during download, protecting against malicious code and safeguarding data integrity. It
              also ensures reproducibility by confirming you're using the exact version intended by the model provider.
            </li>
            <li>
              <u>Validate on Every Load of the Model or Skip Validation</u>: Determines the frequency of the model safety
              hash check.
            </li>
            <li>
              <u>Pattern Redaction</u>: Allows for automatic redaction on various forms of personally identifiable
              information data including US Social security numbers, ABA routing numbers, email addresses, credit card
              information, driver's license numbers, passport information, dates, IBAN information, Indian PAN number (in
              pan), url, crypto or phone numbers.
            </li>
            <li>
              <u>Classifier Tests</u>: By selecting any of the boxes such as prompt injection detection, toxic detection,
              language detection, bias detection or malicious url detection, Model HQ auto-runs a model to detect any of
              the selected forms of safety checks before displaying the inference results.
            </li>
          </ul>
        </ul>



        <ul>
          <li>
            <strong>UI</strong>: Allows for fast and easy customization of the UI, bot name, icons, color, and other
            visual elements.
            <br />
            <img src="/v0/bots/ui.png" alt="bots" />
          </li>
          <li>
            <strong>Upload</strong>: Already have a bot zip file? Upload it here to automatically install it in Model
            HQ.
            <br />
            <img src="/v0/bots/upload.png" alt="bots" />
          </li>
          <li>
            <strong>JSON Editor</strong>: Want a simple way to create or edit a bot? Use the built-in JSON editor.
            Templates are available to guide you. If you already have a JSON file, upload it via the{" "}
            <strong>Upload</strong> button.
            <br />
            <img src="/v0/bots/editor.png" alt="bots" />
          </li>
        </ul>

        <p>Here is a sample:</p>
        <div className="overflow-x-auto w-full">
          <pre className="text-xs whitespace-pre-wrap break-words max-w-full">
            <code className="block">
              {`{
  "name": "fast_start_simple_chatbot",
  "display_name": "Fast Start Chatbot",
  "model_name": "phi-3-ov",
  "execution_mode": "Local",
  "user_select_model": "Choose for User",
  "description": "Fast Start simple bot configuration",
  "max_output": 1000,
  "temperature": 0,
  "sample": false,
  "text_chunk_size": 600,
  "top_n_sources": 3,
  "supporting_models": [
    "vision_model", 
    "sql_model", 
    "ranker_model"
  ],
  "table_support": true,
  "vision_model": "qwen2-vl-2b-instruct-ov",
  "sql_model": "slim-sql-ov",
  "ranker_model": "jina-reranker-v1-tiny-en-ov",
  "local_exec": true,
  "connected_library": [],
  "connection_types": [
    "File Upload",
    "Library Connection",
    "Images",
    "Tables",
    "Sources",
    "Wikipedia"
  ],
  "source_name": [],
  "api_exec": false,
  "api_endpoint": null,
  "web_search": null,
  "web_search_config": null,
  "patterns": [
    "us_ssn", 
    "email", 
    "credit_card"
  ],
  "classifiers": [],
  "write_to_db": false,
  "model_repo": "Azure",
  "allow_download_chat_history": true,
  "allow_generation_config": true,
  "single_app_mode": "Standard Mode",
  "files": [],
  "install_bot_files": [],
  "ui_configs": {
    "theme": "dark",
    "app_title": "Model HQ",
    "title": "Model HQ",
    "company_name": "LLMWare",
    "company_url": "https://www.llmware.ai",
    "header_color": "#31384E",
    "footer_color": "#31384E",
    "main_color": "#1A1F2E"
  },
  "last_modified": "2025-05-24_052544",
  "created": "2025-05-24_052544",
  "author": "Radhika Sharma",
  "bot_table_files": [],
  "bot_image_files": [],
  "bot_document_files": [],
  "rag_compare_instruction": "Attached are several sources - please use as the basis for answering questions, and cite the specific source, if used, in generating your answer.",
  "rag_aggregate_instruction": "",
  "use_wikipedia": true
}`}
            </code>
          </pre>
        </div>

        <ul>
          <li>
            <strong>Delete (🗑️)</strong>: Deletes all changes you have made.
          </li>
        </ul>

        <p>&nbsp;</p>

        <h3 id="run-button">e. Run button</h3>
        <p>
          This button takes you to the <a href="/chat">Chat Interface</a>.
        </p>

        <p>&nbsp;</p>

        <h3 id="export-button">f. Export button</h3>

        <p>
          Custom bots can be exported to share with others easily.
          <br />
          <img src="/v0/bots/export.png" alt="bots" />
        </p>

        <ul>
          <li>
            <strong>Build</strong>: Packages all config and source files into a zip (no executable code).
            <br />
            <img src="/v0/bots/build.png" alt="bots" />
          </li>
          <li>
            <strong>Meta</strong>: Add metadata such as description and author before publishing. Requires a ModelHQ API
            server for publishing.
            <br />
            <img src="/v0/bots/meta.png" alt="bots" />
          </li>
          <li>
            <strong>Peer to Peer Sharing</strong>: Use the zip file to upload the custom bot to another AI PC.
          </li>
        </ul>

        <p>&nbsp;</p>

        <h3 id="delete" >g. Delete</h3>
        <p>
          Deletes the bot you're currently creating or editing. Existing bots can be deleted by clicking{" "}
          <code>Bots</code>, selecting the Bot's name from the scroll menu, <code>edit</code>, then the{" "}
          <code>delete (trash can icon)</code> and confirming the deletion.
        </p>

        <p>&nbsp;</p>

        <h2>Conclusion</h2>
        <p>
          In this documentation, we explored the <strong>Bots</strong> functionality of Model HQ. We covered how to load
          an existing bot and how to create your own custom bot using various configuration options.
        </p>

        <p>
          If you have any questions or feedback, please reach out to us at <code>support@aibloks.com</code>.
        </p>
      </div>
    </div>
  )
}
