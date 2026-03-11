import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function ConfigsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Configs</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Exploring Configure in Model HQ</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          Once the initial setup is complete, navigate to the <strong>Main Menu</strong>.
          <br />
          Located on the top left corner of this menu, you will find the <strong>Configure</strong> section, denoted by
          the ⚙️ icon.
        </p>

        <p>
          The Configure section provides a centralized interface for managing Model HQ's core settings—ranging from
          appearance customization and model configuration to database setup, RAG controls, and advanced safety and
          security options.
        </p>

        <p>&nbsp;</p>

        <h3 id="launching-the-configure-interface">1. Launching the configure Interface</h3>
        <p>
          To begin, click on the <strong>configure</strong> button ( ❃ ) from the main menu present in the top right
          side.
          <br />
          <img src="/v0/configs/configure.png" alt="configure" />
        </p>

        <p>&nbsp;</p>

        <h3 id="overview-of-the-configure-interface">2. Overview of the configure Interface</h3>
        <p>
          After launching the configure section, the interface displays the following key options:
          <br />
          <img src="/v0/configs/configureInterface.png" alt="configure interface" />
        </p>

        <p>It includes:</p>
        <ul>
          <li>
            <strong>App</strong>
          </li>
          <li>
            <strong>UI</strong>
          </li>
          <li>
            <strong>Models</strong>
          </li>
          <li>
            <strong>RAG</strong>
          </li>
          <li>
            <strong>DB</strong>
          </li>
          <li>
            <strong>Controls</strong>
          </li>
          <li>
            <strong>Templates</strong>
          </li>
          <li>
            <strong>Credentials</strong>
          </li>
          <li>
            <strong>Reset</strong>
          </li>
          <li>
            <strong>Display mode</strong> 🕸️ (light-dark mode toggle button)
          </li>
          <li>
            <strong>Home</strong>
          </li>
        </ul>

        <p>&nbsp;</p>

        <h3 id="app-button">App button</h3>
        <p>
          App button is basically provides Model HQ Application Settings options.
          <br />
          <img src="/v0/configs/app.png" alt="app configuration" />
        </p>

        <p>It's faciliates you with the following options:</p>

        <p>
          <strong>1. Dev Mode</strong>
          <br />
          Turn 'on' to view developer and build options. Turn 'off' to deploy to end users.
        </p>

        <blockquote data-type="warning">
          <p>
            If you turn OFF the dev mode (by default it's 'ON'), you won't be able to see the{" "}
            <code>models buttons</code> in the main-menu, and much of the instructions or helper text designed for
            developer will not be visible to end users.
          </p>
        </blockquote>

        <p>
          <strong>2. App Mode</strong>
          <br />
          Turn 'on' to display available Apps.
        </p>

        <blockquote data-type="warning">
          <p>
            If you turn OFF the app mode, then you will only be able to see the applications (like chat, rag, etc.)
            you've created.
          </p>
        </blockquote>

        <p>
          <strong>3. Connected Enterprise Servers</strong>
          <br />
          If you have an enterprise account, and want to be able to connect to enterprise Model HQ servers.
        </p>

        <p>
          <strong>4. Air Gap Mode</strong>
          <br />
          Use Model HQ in a way that is disconnected from all external sources (no Wi-Fi mode), including no data 'in'.
        </p>

        <p>
          <strong>5. Main Menu App Options</strong>
          <br />
          Select/deselect Apps to Show on Main Menu.
        </p>

        <p>
          <strong>6. Agent Processes</strong>
          <br />
          Add pre-built agent processes in the Agents on Main Menu.
        </p>

        <p>
          <strong>7. Custom Bot Apps</strong>
          <br />
          Add pre-built custom bots in the Chat from the provided options.
        </p>

        <p>
          If you're done with your changes, then click on <code>&gt;</code> to save and proceed.
        </p>

        <blockquote data-type="tip">
          <p>
            In case, you want to restore the settings to the default options, then click on{" "}
            <code>restore defaults</code> button.
          </p>
        </blockquote>

        <p>&nbsp;</p>

        <h3 id="ui-button">UI button</h3>
        <p>
          Allows fast and easy customization of the UI, bot name, icons, color, and other visual elements.
          <br />
          <img src="/v0/configs/ui.png" alt="ui configuration" />
        </p>

        <p>
          This option helps to customize the whole Model HQ appearance. You can change the <code>theme</code>,{" "}
          <code>title</code>, <code>app title</code>, <code>company name</code>, <code>company website</code>,{" "}
          <code>icon</code>, <code>header color</code>, <code>footer color</code>, and <code>background color</code>. It
          is designed for quick and easy enterprise customization of Model HQ according to their own unique branding.
        </p>

        <p>&nbsp;</p>

        <h3 id="models-button">Models button</h3>
        <p>
          Select the default models, and the corresponding model settings like max_output, temperature, etc,.
          <br />
          <img src="/v0/configs/models.png" alt="models configuration" />
        </p>

        <p>Let's go one-by-one with all the features:</p>

        <ul>
          <li>
            <strong>Auto Select Models</strong> - Set to 'ON' to enable automatic model selection.
          </li>
          <li>
            <strong>Enable NPU Optimized Models</strong> - Warning: Ensure your hardware system supports NPU models - if
            not, this may lead to unpredictable results.
          </li>
          <li>
            <strong>CPU Only Mode</strong> - Use only CPU - and do not use GPU/NPU - option provided.
          </li>
          <li>
            <strong>Show Cached Models Only</strong> - Set to 'ON' to limit model options to models on system.
          </li>
          <li>
            <strong>Show Model Types</strong> - Select which model types will be displayed in search options. The
            available options are <code>ov</code>, <code>onnx</code>, <code>gguf</code>. This selection will be
            over-ridden by the NPU, CPU selections you make above.
          </li>
          <li>
            <strong>Model Naming Convention</strong> - Do you prefer simpler model naming or more details?
          </li>
          <li>
            <strong>Model Choices</strong> - Do you prefer to see only top models, or a wider selection?
          </li>
          <li>
            <strong>Model Display Sorting</strong> - Do you prefer to see largest models first, or smallest ones
            according to the model size?
          </li>
          <li>
            <strong>Small Model Default</strong> - Select default 'small' model from the available models in the
            dropdown.
          </li>
          <li>
            <strong>Medium Model Default</strong> - Select default 'medium' model from the available models in the
            dropdown.
          </li>
          <li>
            <strong>Large Model Default</strong> - Select default 'large' model from the available models in the
            dropdown.
          </li>
          <li>
            <strong>max_output</strong> - Set maximum output size in tokens. It determines the maximum length of
            response of the model.
          </li>
          <li>
            <strong>temperature</strong> - Set temperature value between 0.0 - 1.0. Increasing the temperature level
            will add more randomness in the output and will lead to more creative answers. The recommended temperature
            setting for RAG or other fact/data driven workflows is 0.
          </li>
          <li>
            <strong>Sample in Generation</strong> - Turning 'sample' to ON enables more variety in generation and
            variable inference results. The recommended setting for RAG or other fact/data driven workflows is OFF.
          </li>
          <li>
            <strong>Chat Model</strong> - Select the default Chat model.
          </li>
          <li>
            <strong>RAG Model</strong> - Select the default RAG model.
          </li>
          <li>
            <strong>Vision Model</strong> - Select the default Vision-to-Text model.
          </li>
          <li>
            <strong>Table Reading Model</strong> - Select the default Model for Reading Tables.
          </li>
          <li>
            <strong>Summarizer Model</strong> - Select the default model for Summarizing.
          </li>
          <li>
            <strong>Text2SQL Model</strong> - Select the default Text-to-SQL model.
          </li>
          <li>
            <strong>Overall Default</strong> - Default model to be used when no other information available.
          </li>
          <li>
            <strong>Max Model Size</strong> - Select the maxium size of the model to be installed or used. In most
            cases, this is set automatically by machine memory size, and should not be adjusted.
          </li>
          <li>
            <strong>Max Model Local Cache Size</strong> - Maximum space allocated for local model caching.
          </li>
        </ul>

        <p>
          If you're done with your changes, then click on <code>&gt;</code> to save and exit.
        </p>

        <p>&nbsp;</p>

        <h3 id="rag-button">RAG button</h3>
        <p>
          A specialized button to configure the RAG settings.
          <br />
          <img src="/v0/configs/rag.png" alt="rag configuration" />
        </p>

        <ul>
          <li>
            <strong>text_chunk_size</strong> - Set target size of text chunk in parsing.
          </li>
        </ul>

        <blockquote data-type="tip">
          <p>
            Text chunk size in parsing refers to the amount of text, measured in tokens, that is processed as a single
            unit during analysis or transformation of the file to a searchable body of text. Selecting the right text
            chunk size is important because it affects how accurately and efficiently a model can understand, process,
            and retrieve information—too small, and context may be lost; too large, and it may exceed model limits or
            reduce performance.
          </p>
        </blockquote>

        <ul>
          <li>
            <strong>context_top_n</strong> - Number of Top Text Chunks to use to create Context for Model.
          </li>
        </ul>

        <blockquote data-type="tip">
          <p>
            Context Top N refers to selecting the top N most relevant pieces of information (e.g., number of text
            chunks) from a larger context based on similarity to a query, and it's important because it ensures the
            model focuses on the most pertinent data to generate accurate and relevant responses.
          </p>
        </blockquote>

        <ul>
          <li>
            <strong>context_target_size</strong> - Target token size for the context. If target size not reached with
            selected top_n, then will add more text chunks to reach target size.
          </li>
        </ul>

        <blockquote data-type="tip">
          <p>
            Context target size is the predefined maximum amount of text (in tokens) that can be included in a model's
            input, and it balances the trade-off between including enough relevant information and staying within the
            model's processing limits to ensure efficient and coherent responses.
          </p>
        </blockquote>

        <ul>
          <li>
            <strong>reranker_max_samples</strong> - Max samples to be evaluated in memory using reranker.
          </li>
        </ul>

        <blockquote data-type="tip">
          <p>
            Max samples in a reranker model refers to the maximum number of candidate items (e.g., documents, passages,
            or text chunks) that the model will consider and score for relevance, and it's important because it sets a
            limit to ensure computational efficiency while still allowing the model to choose the most relevant results
            from a sufficiently broad pool.
          </p>
        </blockquote>

        <ul>
          <li>
            <strong>Prompt instruction text area</strong>
          </li>
          <li>
            <strong>RAG Model</strong> - Select RAG model.
          </li>
          <li>
            <strong>Reranker Model</strong> - Select Semantic Ranking model.
          </li>
          <li>
            <strong>Embedding Model</strong> - Select Embedding model.
          </li>
          <li>
            <strong>Use Wikipedia as Source</strong> - Turn 'on' to allow use of Wikipedia in Sources.
          </li>
        </ul>

        <p>&nbsp;</p>

        <h3 id="db-button">DB button</h3>
        <p>
          DB helps you to manage resources on local Model HQ DB.
          <br />
          <img src="/v0/configs/db.png" alt="database configuration" />
        </p>

        <p>
          Configure Local Model HQ Database - build, view, delete and manage resources on local Model HQ database - used
          for querying of SQL tables in Chat and Agents.
        </p>

        <p>
          Click on <code>&gt;</code> to select your existed DB or click on <code>Build</code> button to configure a new
          local DB.
        </p>

        <p>&nbsp;</p>

        <h3 id="controls-button">Controls button</h3>
        <p>
          Controls or Set controls button provides extra controlling feature over Model HQ. It allows developers more
          configuration options by offering settings like logs, validation, model pull repository selection, download
          controls, pattern redaction, and classifier tests.
          <br />
          <img src="/v0/configs/controls.png" alt="controls configuration" />
        </p>

        <p>
          <strong>Control Configuration Options</strong> includes many Safety and Security features of Model HQ:
        </p>

        <ul>
          <li>
            <strong>LLMWare Model Repository</strong>: Option includes ability to download models directly from
            LLMWare's private model repository in Azure (recommended) or Huggingface. Please note that Huggingface faces
            outages and downtimes, as well as changes to their code, which sometimes interferes with the ability to
            access their repository.
          </li>
          <li>
            <strong>Validate Model Hash on Download</strong>: Important safety feature that ensures the file hasn't been
            tampered with or corrupted during download, protecting against malicious code and safeguarding data
            integrity. It also ensures reproducibility by confirming you're using the exact version intended by the
            model provider.
          </li>
          <li>
            <strong>Validate on Every Load of the Model or Skip Validation</strong>: Determines the frequency of the
            model safety hash check.
          </li>
          <li>
            <strong>Pattern Redaction</strong>: Allows for automatic redaction on various forms of personally
            identifiable information data including US Social security numbers, ABA routing numbers, email addresses,
            credit card information, driver's license numbers, passport information, dates, IBAN information, Indian PAN
            number (in pan), url, crypto or phone numbers.
          </li>
          <li>
            <strong>Classifier Tests</strong>: By selecting any of the boxes such as prompt injection detection, toxic
            detection, language detection, bias detection or malicious url detection, Model HQ auto-runs a model to
            detect any of the selected forms of safety checks before displaying the inference results.
          </li>
        </ul>

        <p>&nbsp;</p>

        <h3 id="templates-button">Templates button</h3>
        <p>Create your own custom template to build bots, agents, etc. way more faster.</p>

        <p>
          The template buttons ask you to build a new template or to edit/view the existing one.
          <br />
          <img src="/v0/configs/templates.png" alt="templates configuration" />
        </p>

        <p>
          Hit <code>&gt;</code> to proceed with your choice. For demonstration, we are going with <code>build new</code>{" "}
          option.
          <br />
          <img src="/v0/configs/templatesNext.png" alt="templates next step" />
        </p>

        <p>Here you will a lot of options. Play with it.</p>

        <p>&nbsp;</p>

        <h3 id="credentials">Credentials</h3>
        <p>
          This section allows users to enter secret keys for using external APIs. Examples of external APIs currently supported through Model HQ are:
        </p>

        <ul>
          <li>OpenAI</li>
          <li>Anthropic</li>
          <li>Azure OpenAI endpoint</li>
          <li>Azure OpenAI</li>
          <li>Azure API</li>
          <li>Gmail</li>
          <li>Serp API</li>
          <li>Tavily API</li>
        </ul>

        <p>
          <img src="/v0/configs/credentials.png" alt="credentials" />
          <br />
          To access any of these external APIs, including access to models such as <code>OpenAI</code> and <code>Anthropic</code>, a user must enter the API key prior to usage. Credentials are stored encrypted in local machines only and no credential information is shared with LLMWare. Please do not save or transmit credential information unless as needed.
        </p>

        <p>
          You can delete credentials by clicking on the <b>Refresh</b> button.
        </p>

        <p>&nbsp;</p>

        <h3 id="reset-button">Reset button</h3>
        <p>
          Reset the app or app configurations.
          <br />
          <img src="/v0/configs/reset.png" alt="reset configuration" />
        </p>

        <ul>
          <li>Reset Model Catalog</li>
          <li>Reset App Configs</li>
          <li>Delete All Models</li>
          <li>Delete Custom Apps</li>
          <li>Delete Custom Processes</li>
          <li>Delete All Model HQ Artifacts</li>
          <li>Do Nothing</li>
        </ul>

        <blockquote data-type="warning">
          <p>
            Reset at your own risk. Once reset, your models, custom apps and other files related to Model HQ will be
            deleted and you will have to re-create/re-download them.
          </p>
        </blockquote>

        <p>&nbsp;</p>

        <h3>Conclusion</h3>
        <p>
          In this documentation, we explored the <strong>Configure</strong> section of Model HQ.
        </p>

        <p>
          If you have any questions or feedback, please reach out to us at <code>support@aibloks.com</code>.
        </p>
      </div>
    </div>
  )
}
