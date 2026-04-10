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

export default function WorkingWithMicrosoftFoundryLocalModelsInModelHqPage() {
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
            <BreadcrumbPage>Working with Microsoft Foundry Local models in Model HQ</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Working with Microsoft Foundry Local models in Model HQ</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          <strong>Foundry Local</strong> is an on-device solution from Microsoft that enables AI models to be run locally on a device. Once downloaded, Foundry Local models can be accessed and used within Model HQ just like any other model in the model repository.
        </p>

        <p>
          Model HQ supports the use of Foundry Local models in both Chat and Agent workflow capabilities. For users who have already downloaded models with Foundry Local, Model HQ provides seamless integration to access and use those models directly.
        </p>

        <p>
          For more information about Foundry Local, visit the <a href="https://learn.microsoft.com/en-us/azure/foundry-local/what-is-foundry-local">Microsoft documentation</a>.
        </p>

        <h2 id="1-installing-foundry-local">1. Installing Foundry Local</h2>

        <p>
          Before Foundry Local models can be used in Model HQ, Foundry Local must be installed on the device. New users can install Foundry Local by following the step shown below.
        </p>

        <img src="/v1/models/microsoftFoundry/Picture1.png" alt="Install Foundry Local" />

        <p>
          Once Foundry Local has been installed, its models will be available for download and use in chatbots and agents within Model HQ.
        </p>

        <blockquote data-type="note">
            <p>It is strongly recommended that Foundry Local be updated periodically to ensure the latest version is installed, which is required for successful model downloading.</p>
        </blockquote>

        <h2 id="2-foundry-local-integration-with-model-hq">2. Foundry Local integration with Model HQ</h2>

        <p>
          In order to view and download Foundry Local models, the Foundry Local integration must first be activated in Model HQ. Integration typically completes within a few seconds.
        </p>

        <blockquote data-type="note">
            <p>Once a model has been downloaded to the device, the Foundry Local integration does not need to be re-activated in order to use that model for Chat or Agents.</p>
        </blockquote>

        <p>
          From the main page in Model HQ, <strong>Integrations</strong> can be selected in the left-hand side menu.
        </p>

        <img src="/v1/models/microsoftFoundry/Picture2.png" alt="Main menu — Integrations" />

        <img src="/v1/models/microsoftFoundry/Picture3.png" alt="Integrations menu" />

        <p>
          In the <strong>Manage Integrations</strong> dropdown, <strong>Windows Foundry Local</strong> should be selected as shown, then the <strong>&gt;</strong> button can be selected to proceed.
        </p>

        <img src="/v1/models/microsoftFoundry/Picture4.png" alt="Select Windows Foundry Local" />

        <img src="/v1/models/microsoftFoundry/Picture5.png" alt="Foundry Local integration — Windows Foundry Local selected" />

        <p>
          The connection can be verified by selecting the <strong>Test</strong> button after the integration step.
        </p>

        <img src="/v1/models/microsoftFoundry/Picture6.png" alt="Test connection — Integration confirmation" />

        <p>
          Once a successful Windows Foundry Local connection has been confirmed, the Integrations section can be exited by selecting the <strong>Home</strong> icon button.
        </p>

        <h2 id="3-using-foundry-local-models-in-chat">3. Using Foundry Local models in Chat</h2>

        <p>
          The <strong>Chat</strong> option can be selected in the left-hand side menu to open the Fast Start Chatbot.
        </p>

        <p>
          The <strong>Model</strong> selector can then be used to choose which model — including any Foundry Local model — will power the Chat session.
        </p>

        <ul>
          <li>Models that have already been downloaded to the device will be marked with a checkmark.</li>
          <li>Models that have not yet been downloaded will show a download symbol, indicating they are available. If such a model is selected, Model HQ will download it before running the chat inference.</li>
        </ul>

        <p>
          To download models outside of the Chat interface, refer to <a href="#5-downloading-and-testing-foundry-local-models">Section 5: Downloading and testing Foundry Local models</a>.
        </p>

        <blockquote data-type="note">
            <p>The example shown below is for Intel devices. Models available for Qualcomm devices will differ.</p>
        </blockquote>

        <img src="/v1/models/microsoftFoundry/Picture7.png" alt="Chat model selector with Foundry Local model" />

        <img src="/v1/models/microsoftFoundry/Picture8.png" alt="Chat interface — Foundry Local model active" />

        <h2 id="4-using-foundry-local-models-in-agents">4. Using Foundry Local models in agents</h2>

        <p>
          The <strong>Agents</strong> card can be selected from the main screen. The <strong>Build New</strong> option should then be selected, followed by the <strong>&gt;</strong> button.
        </p>

        <p>
          The method for building the new agent can then be chosen. The <strong>Visual Builder</strong> option should be selected for building no-code agents.
        </p>

        <img src="/v1/models/microsoftFoundry/Picture9.png" alt="Agent builder — method selection" />

        <img src="/v1/models/microsoftFoundry/Picture10.png" alt="Visual Builder selected" />

        <p>
          A process name should be typed in the provided field, then the <strong>&gt;</strong> button can be selected to proceed.
        </p>

        <img src="/v1/models/microsoftFoundry/Picture11.png" alt="Name the agent process" />

        <p>
          A blank canvas-style screen will be presented for building the no-code agent, with options for adding agent building cards and configuring settings on the left-hand side.
        </p>

        <img src="/v1/models/microsoftFoundry/Picture12.png" alt="Visual Builder canvas" />

        <img src="/v1/models/microsoftFoundry/Picture13.png" alt="Visual Builder left panel and options" />

        <p>
          Before adding nodes, <strong>Settings</strong> should be selected in the left-hand side menu. From here, the desired Foundry Local model for Chat or RAG can be chosen for use in the agent process.
        </p>

        <p>
          Once the desired model has been selected, the <strong>&gt;</strong> button at the bottom of the screen can be clicked to confirm.
        </p>

        <ul>
          <li>Models that have already been downloaded will be marked with a checkmark.</li>
          <li>Models that have not yet been downloaded will show a download symbol and can be downloaded for use.</li>
          <li>If a model that has not been downloaded is selected for an agent process, Model HQ will download it prior to running the agent process for the first time.</li>
        </ul>

        <p>
          To download models outside of the Agent interface, refer to <a href="#5-downloading-and-testing-foundry-local-models">Section 5: Downloading and testing Foundry Local models</a>.
        </p>

        <img src="/v1/models/microsoftFoundry/Picture14.png" alt="Agent settings — Foundry Local model selection" />

        <img src="/v1/models/microsoftFoundry/Picture15.png" alt="Agent settings — model chosen" />

        <img src="/v1/models/microsoftFoundry/Picture16.png" alt="Agent settings — model selection confirmed" />

        <p>
          To create a simple test agent, an input card and a node card should be dragged onto the canvas and connected as shown. The default <strong>text</strong> and <strong>chat</strong> options should be left unchanged for this initial test.
        </p>

        <p>
          In the instruction field for Node 2 (chat), the following model prompt should be entered: <em>Write a funny story about this</em>. This constitutes the first simple agent for getting started with a Foundry Local model.
        </p>

        <img src="/v1/models/microsoftFoundry/Picture17.png" alt="Test agent — input and chat nodes connected" />

        <p>
          The <strong>&gt;</strong> button in the side menu can then be selected to run the agent.
        </p>

        <p>
          The text input box will appear. A phrase such as <em>Mary had a bright orange lamb</em> — or any other text — can be entered so the model can generate a funny story. The <strong>&gt;</strong> button should then be pressed to submit.
        </p>

        <img src="/v1/models/microsoftFoundry/Picture18.png" alt="Agent run — text input" />

        <p>
          The model will run and produce the inference output — a funny story will be generated as the result.
        </p>

        <img src="/v1/models/microsoftFoundry/Picture19.png" alt="Agent output — inference result" />

        <img src="/v1/models/microsoftFoundry/Picture20.png" alt="Agent run completed successfully" />

        <h2 id="5-downloading-and-testing-foundry-local-models">5. Downloading and testing Foundry Local models</h2>

        <p>
          To download or test downloaded models, the <strong>Models</strong> card can be selected from the main screen.
        </p>

        <p>
          In the Models interface, <strong>All</strong> should be selected to view the full model catalogue.
        </p>

        <p>
          A comprehensive model catalogue will be displayed, listing all models available for the device — including Foundry Local models — available via download or API.
        </p>

        <blockquote data-type="note">
            <p>The selection shown below is for a Qualcomm device. Model selection for Intel devices will differ.</p>
        </blockquote>

        <p>
          A model can then be selected to download or test it.
        </p>

        <ul>
          <li>The model can be downloaded by selecting the download (<strong>↓</strong>) option. Once downloaded, the model will be immediately available for testing or for use in Chat and Agents.</li>
          <li>Alternatively, the model can be tested directly by selecting the <strong>Test</strong> button.</li>
        </ul>

        <p>
          The <strong>Standard</strong> test option should be selected to run a standard LLMWare RAG inferencing test set against the model and evaluate its accuracy.
        </p>

        <blockquote data-type="note">
            <p>The Standard test feature is designed to evaluate RAG capabilities for Chat models. It will not function for Speech models (such as Whisper) or Vision models.</p>
        </blockquote>

        <p>
          If the model to be tested has already been downloaded via Foundry Local, the test will begin immediately. If the model has not yet been downloaded, it will be downloaded first and the test will run upon completion.
        </p>

        <h2 id="conclusion">Conclusion</h2>

        <p>
          This document described how to set up and use Microsoft Foundry Local models within Model HQ, covering Foundry Local installation, integration activation, and model usage across both Chat and Agent workflows. Once the integration has been configured and the desired models have been downloaded, Foundry Local models can be used interchangeably with any other model in the Model HQ repository.
        </p>

        <p>
          The <strong>Downloading and Testing</strong> section (Section 5) provides a complete reference for managing the model catalogue, downloading new models, and evaluating model accuracy using the Standard test set.
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