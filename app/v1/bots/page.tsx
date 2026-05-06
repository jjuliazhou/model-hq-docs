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

export default function ExploringBotsInModelHqPage() {
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
            <BreadcrumbPage>Exploring Bots in Model HQ</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Exploring Bots in Model HQ</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          After completing the initial setup, users will be directed to the <strong>Main Menu</strong>. This document describes the Bots feature, which allows users to create custom Chat and RAG bots for either AI PC/edge device use cases (for either standalone or bots to be incorporated into an agent workflow) or via API deployment (Model HQ API Server Biz Bot).
        </p>

        <RelatedVideos
          title="Watch: Building & Sharing Bots"
          description="See bots built, demoed, and shared end-to-end — from chat to RAG to tables."
          videoIds={[
            "zP2v8DixQaA",
            "il48-IaEfxw",
            "uy53WKrMOXc",
            "evbLEX-eA8o",
            "T1AOuUF7oQ8",
            "cd_08qQ5Z2o",
          ]}
        />

        <h2 id="1-launching-the-bots-interface">1. Launching the bots interface</h2>

        <p>
          The Bots interface can be accessed by clicking the <strong>Bots</strong> button from the main menu.
        </p>

        <img src="/v1/bots/01_bots.png" alt="bots" />

        <h2 id="2-bots-interface-overview">2. Bots interface overview</h2>

        <p>
          After selecting Bots, an interface similar to the one shown below will be presented.
        </p>

        <img src="/v1/bots/02_botsInterface.png" alt="bots" />

        <p>
          The interface provides multiple control options. The following subsections describe each control and recommended usage.
        </p>

        <p>
          Available options:
        </p>

        <ol>
          <li>Options — choose whether to create a new bot or load an existing one.
            <ul>
              <li>Build new: Create a new bot from scratch.</li>
              <li>Load Existing: Load a previously created or existing bot.</li>
            </ul></li>
          <li>Next or <code>&gt;</code> — proceed to the next step.</li>
          <li>Edit — modify an existing bot configuration.</li>
          <li>Share — export and share bot configurations.</li>
          <li>Upload — import a bot from a shared file.</li>
          <li>Delete — remove a bot from the interface.</li>
        </ol>

        <blockquote data-type="note">
            <p>By default, the <strong>Load Existing</strong> option is selected, which allows pre-existing bots to be run immediately.</p>
        </blockquote>

        <h3 id="21-building-a-new-bot">2.1 Building a new bot</h3>

        <p>
          To build a bot, <code>build new</code> can be selected and then the <code>&gt;</code> button clicked.
        </p>

        <p>
          For detailed instructions, see <a href="https://github.com/BloksAdmin/model-hq-docs/blob/master/v1/bots/buildBot">Building a Bot</a>.
        </p>

        <h3 id="22-loading-an-existing-bot">2.2 Loading an existing bot</h3>

        <p>
          To load an existing bot, <code>load existing</code> can be selected (if not already selected) and then the <code>&gt;</code> button clicked.
        </p>

        <h4 id="221-launching-bot-demo-bot-example">2.2.1 <strong>Launching Bot: Demo Bot Example</strong></h4>

        <p>
          Once the bot is selected, user is able to get a description of the Bot as well as other details such as whether a source such as a document is appended to the bot for queries. In this example, the bot has an example Employment Agreement that is attached so the user can query the document by accessing it as a source.
        </p>

        <img src="/v1/bots/03_botInfo.png" alt="bots" />

        <h4 id="222-demo-mode">2.2.2 <strong>Demo Mode</strong></h4>

        <p>
          Bots that have been created with a demo will be able to be pre-viewed with a Demo Mode. In the Demo Bot example, when the user selects Demo Mode, the Demo Bot will automatically launch the conversation turns that the creator pre-set, as shown in the Description section. In addition, if there is a YouTube video of the bot in action or a related tutorial by LLMWare, the Video section will link to the specific video.
        </p>

        <img src="/v1/bots/04_demoBotdemo.png" alt="bots" />

        <h4 id="223-bot-with-agents">2.2.3 <strong>Bot with Agents</strong></h4>

        <p>
          Users have the ability to incorporate agents into custom bots. To add pre-created agents into a bot, select a bot, then "Agents".
        </p>

        <img src="/v1/bots/05_demoBotEdit.png" alt="bots" />

        <p>
          Once "Agents" is selected, the user will have the option to pick the agents they would like incorporated into the bot (note: the following is an example only and the agent list will vary depending on the user's agents).
        </p>

        <img src="/v1/bots/06_demoBotOptions.png" alt="bots" />

        <p>
          The User will select ONE root agent as shown below. The ROOT AGENT is the only agent that will have access to all of the other information in the chat and also with any other agents in the bot so that this agent can consolidate or have a holistic view of the interactions that took place amongst other agents in this bot interaction.
        </p>

        <img src="/v1/bots/07_demoBotAgent.png" alt="bots" />

        <p>
          Once incorporated, the user may select the Agent now shown below the chat box and run the agent.
        </p>

        <img src="/v1/bots/08_demoBotRun.png" alt="bots" />

        <blockquote data-type="important">
            <p>If the model used in the bot is not pre-downloaded, it will be downloaded automatically. This typically takes 1-2 minutes depending on internet connectivity.</p>
        </blockquote>

        <h3 id="23-edit">2.3 Edit</h3>

        <p>
          The Edit control allows existing bots to be modified. The editing process for a bot is the same as creating a new bot.
        </p>

        <img src="/v1/bots/09_editBot.png" alt="bots" />

        <p>
          For a complete editing overview, see <a href="https://github.com/BloksAdmin/model-hq-docs/blob/master/v1/bots/editBot">Editing a Bot</a>.
        </p>

        <h3 id="24-share">2.4 Share</h3>

        <p>
          The Share control allows bots to be exported and shared with others. When the Share button is clicked, a downloadable zip file will be created. The bot configuration can then be imported by others using the Upload feature.
        </p>

        <img src="/v1/bots/10_share.png" alt="bots" />

        <h3 id="25-upload">2.5 Upload</h3>

        <p>
          The Upload control allows bots to be imported from a zip file that is shared by another Model HQ user via email or other method of sharing files. The zip file should be one that was previously shared using the Share feature.
        </p>

        <img src="/v1/bots/11_uploadBot.png" alt="bots" />

        <h2 id="conclusion">Conclusion</h2>

        <p>
          This section is designed to give users a high-level overview of the Bots section of Model HQ. Please see our documentation for Building and Editing Bots for more information.
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