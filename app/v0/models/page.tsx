import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function ModelsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Models</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Exploring Models in Model HQ</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          Once the initial setup is complete, you will be directed to the <strong>Main Menu</strong>.
          <br />
          This interface provides access to various features. In this section, we will focus exclusively on the{" "}
          <strong>Models</strong> functionality.
        </p>

        <p>
          The <strong>Models</strong> section allows you to explore, manage, and test models within Model HQ. You can
          discover new models, manage downloaded models, review inference history, and run benchmark tests — all from a
          single interface.
        </p>

        <p>&nbsp;</p>

        <h2 id="launching-the-models-interface">1. Launching the Models Interface</h2>
        <p>
          To begin, click on the <strong>Models</strong> button from the main menu.
        </p>

        <img src="/v0/models.png" alt="models" />

        <p>&nbsp;</p>

        <h2 id="overview-of-the-models-interface">2. Overview of the Models Interface</h2>
        <p>
          After launching the Models section, you will be presented with an interface similar to the one shown below:
        </p>

        <img src="/v0/models/models.png" alt="models" />

        <p>The interface includes the following key options:</p>

        <ol>
          <li>
            <strong>Discover</strong>
            <br />
            Explore new Chat, RAG, or Function-calling models available in the catalog.
          </li>
          <li>
            <strong>My Models</strong>
            <br />
            Manage your downloaded models — test, troubleshoot, or remove them.
          </li>
          <li>
            <strong>History</strong>
            <br />
            Review a historical log of your model inference transactions.
          </li>
          <li>
            <strong>Test</strong>
            <br />
            Run standardized test cases on any selected model.
          </li>
          <li>
            <strong>Update Catalog</strong>
            <br />
            Pull the latest version of the model catalog.
          </li>
          <li>
            <strong>Reset Catalog</strong>
            <br />
            Reset the current catalog to fetch new or updated models.
          </li>
          <li>
            <strong>Home</strong>
            <br />
            Return to the main menu.
          </li>
        </ol>

        <p>&nbsp;</p>

        <h2 id="discover">3. Discover</h2>
        <p>
          The <strong>Discover</strong> option allows you to browse and evaluate new models. You can review detailed
          descriptions, test models using predefined use cases, or interact with them through the chat interface.
        </p>

        <p>
          Upon selecting <strong>Discover</strong>, you will be prompted to choose a model category:
        </p>

        <img src="/v0/models/discover.png" alt="models" />

        <p>The available categories include:</p>
        <ul>
          <li>Chat</li>
          <li>RAG</li>
          <li>Function-Calling</li>
        </ul>

        <img src="/v0/models/options.png" alt="models" />

        <p>
          Select the category you're interested in, and click <code>&gt;</code> to proceed. A list of models relevant to
          that category will appear:
        </p>

        <img src="/v0/models/selectModels.png" alt="models" />

        <p>
          For demonstration purposes, we'll proceed with the default model, <code>qwen--0.5B</code>. Click{" "}
          <code>&gt;</code> again to continue.
        </p>

        <blockquote data-type="tip">
          <p>
            <strong>TIP</strong>
            <br />
            Not sure which model to choose? Click <strong>Choose for me</strong> to let the system select one for you.
          </p>
        </blockquote>

        <p>You will then be taken to the detailed page with model description and the model card contact:</p>

        <img src="/v0/models/selectedModels.png" alt="models" />

        <p>Here you can:</p>
        <ul>
          <li>View a full description of the selected model</li>
          <li>
            Choose from three actions:
            <ul>
              <li>
                <strong>Chat</strong>: This selection with take you to the chat interface for this model. Navigate to
                the <a href="/chat">Chat Interface</a>
              </li>
              <li>
                <strong>Test</strong>: Evaluate the model using predefined performance bench mark test. You can view the
                context passage that is passed to the model by selecting the Context Passage window, and compare the LLM
                response versus the Gold Answer (i.e., the correct answer). Additionally, the performance test shows
                other relevant metrics such as input and output tokens, total processing time for the response and first
                token speed.
                <br />
                <img src="/v0/models/test2.png" alt="models" />
                Optionally, download the results for offline review. You can terminate the process anytime by pressing
                "x" key.
              </li>
              <li>
                <strong>Models</strong>: Return to the model discovery menu
              </li>
            </ul>
          </li>
        </ul>

        <p>&nbsp;</p>

        <h2 id="my-models">4. My Models</h2>
        <p>
          The <strong>My Models</strong> section lists all locally downloaded models along with their disk usage.
        </p>

        <p>You will be prompted to select a model from your local list:</p>

        <img src="/v0/models/selectModel.png" alt="models" />

        <p>
          Click <code>&gt; Select</code> to proceed. The interface will now display information about the selected model
          and offer several actions:
        </p>

        <ul>
          <li>
            <strong>Chat</strong>: Access the <a href="/chat">Chat Interface</a>
          </li>
          <li>
            <strong>Test</strong>: Run benchmark tests with predefined use cases
          </li>
          <li>
            <strong>Troubleshoot</strong>: Resolve issues such as incomplete downloads
            <br />
            <img src="/v0/models/troubleshoot.png" alt="models" />
            <br />
            If any issues are detected, you can:
            <ul>
              <li>
                <strong>Confirm</strong>: Download troubleshooting logs
              </li>
              <li>
                <strong>Delete</strong>: Remove the log file
              </li>
              <li>
                <strong>Repair</strong>: Reinstall the model
              </li>
              <li>
                <strong>No action</strong>: Return to the main menu
              </li>
            </ul>
          </li>
          <li>
            <strong>Delete</strong>: Remove the model from local storage
          </li>
        </ul>

        <p>&nbsp;</p>

        <h2 id="history">5. History</h2>
        <p>
          The <strong>History</strong> section provides a tabular record of your inference activity. You can also
          download the history for analysis or auditing purposes. To activate History, the user must first select
          Configuration Icon (⚙️) in top right hand corner, <code>controls</code>, then select <strong>Save</strong> for
          "Save all inferences to local database."
        </p>

        <img src="/v0/models/history.png" alt="models" />

        <p>&nbsp;</p>

        <h2 id="test">6. Test</h2>
        <p>
          The <strong>Test</strong> functionality allows you to benchmark any available model using predefined
          scenarios. This is helpful for comparing model performance across different use cases.
        </p>

        <p>Results can be downloaded and reviewed to assist in model selection.</p>

        <img src="/v0/models/test.png" alt="models" />

        <p>&nbsp;</p>

        <h2 id="update-catalog">7. Update Catalog</h2>
        <p>
          Use <strong>Update Catalog</strong> to fetch the latest available models. Previous versions of the catalog are
          maintained for reference. You can choose to pull any version, preferably the latest one.
        </p>

        <img src="/v0/models/catalog.png" alt="models" />

        <p>&nbsp;</p>

        <h2 id="reset-catalog">8. Reset Catalog</h2>
        <p>
          If needed, you can reset your existing catalog using this option. Once reset, you can then fetch a fresh
          catalog from the <strong>Update Catalog</strong> section.
          <br />
          Note that models will not be accessible until a new catalog is pulled.
        </p>

        <img src="/v0/models/reset.png" alt="models" />

        <p>&nbsp;</p>

        <h2>Conclusion</h2>
        <p>
          In this documentation, we explored the <strong>Models</strong> section of Model HQ. We detailed the purpose
          and functionality of each action available, including discovering, managing, testing, and troubleshooting
          models.
        </p>

        <p>
          For further assistance or to share feedback, please contact us at <code>support@aibloks.com</code>
        </p>
      </div>
    </div>
  )
}
