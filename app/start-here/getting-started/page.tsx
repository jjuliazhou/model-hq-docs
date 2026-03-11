import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@radix-ui/react-separator"
import { Laptop } from "lucide-react"

export default function GettingStartedPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Getting Started</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Getting Started with Model HQ</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <Laptop className="h-5 w-5 flex-shrink-0" />
            <span id="laptop-configuration">Laptop Configuration</span>
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            System requirements for PC and laptop installations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src="/laptop_config.png"
            alt="Laptop Configuration Requirements"
            className="w-full rounded-lg border"
          />
        </CardContent>
      </Card>

      <div className="prose prose-gray max-w-none">
        <blockquote data-type="tip">
          <p>
            It is critical to set the screen hibernation and sleep mode as shown for initial batch downloading of models. Model transfers
            may fail because internet connectivity will be interrupted if the machine goes into hibernation or sleep mode during download.
          </p>
        </blockquote>
      </div>

      <Separator />

      <p>&nbsp;</p>

      <div className="prose prose-gray max-w-none">
        <p>
          After installing the <strong>llmware</strong> application and checking the system requirements on your system, launch the application. You will be
          presented with an interface similar to the one shown below:
        </p>

        <img src="/getting-started/landing_interface.png" alt="landing interface" />

        <p>
          The application will automatically detect your system information. Click on the{" "}
          <code>System Info Auto Detected</code> section to expand it.
          <br />
          Ensure that your system meets the <a href="/system-configuration">Model HQ System Requirements</a> before
          proceeding.
        </p>

        <p>&nbsp;</p>

        <h3 id="setup-options">Setup Options</h3>

        <p>Once your system compatibility is confirmed, you will be presented with the following setup options:</p>

        <ol>
          <li>
            <strong>Full Setup</strong>
            <br />
            This option automatically configures your environment by pre-loading 25 curated models along with a set of
            test cases.
            <br />
            This setup is ideal for Demo set-up and for users who want a ready-to-use environment with minimal manual
            configuration.
            <br />
            <em>Estimated setup time: ~30 minutes.</em>
          </li>
          <li>
            <strong>Fast Setup</strong>
            <br />
            Quickly set up an environment with a curated selection of 3 small models to get going.
            <br />
            <em>Estimated setup time: ~2-3 minutes.</em>
          </li>
          <li>
            <strong>No Setup</strong>
            <br />
            Customize your environment manually by selecting and configuring only the models you need. Recommended for
            advanced users who prefer full control over their setup. The models will be loaded as they are selected and
            will take time to load.
          </li>
          <li>
            <strong>Enterprise Template</strong>
            <br />
            Use a pre-configured enterprise-grade template designed to streamline deployment across large teams. Best
            suited for organizational adoption with minimal configuration overhead.
          </li>
        </ol>

        <p>&nbsp;</p>

        <h2 id="getting-started-with-full-setup">Getting Started with Full Setup</h2>
        <p>
          The <strong>Full Setup</strong> option allows you to configure Model HQ with a comprehensive environment that
          includes 25 of the most accurate and powerful models available. This setup is ideal for users who want to get
          started without any custom configuration. We recommend this for DEMOs. This set up still allows for other
          models to be added when selected.
          <br />
          This documentation outlines what the Full Setup process includes and how to get started.
        </p>

        <ol>
          <li>
            On the setup options screen, select the <code>Full Setup</code> option and click the <code>&gt;</code>{" "}
            button to proceed.
            <br />
            <img src="/getting-started/fullSetup/fullSetup.png" alt="full-setup" />
          </li>
          <li>
            To use this option, it is important that you configure your laptop or PC setting as shown in the [Set-Up
            Guide], so that you adjust the screen, sleep and hibernate time-outs to at least 2 hours so that screen
            timeouts do not interrupt the initial model download.
          </li>
          <li>
            You will be presented with a screen displaying the list of models that will be downloaded as part of the
            setup.
            <br />
            Review the list, and optionally deselect any models you do not wish to include to reduce setup time.
            <br />
            Once satisfied with the selection, click <code>&gt;</code> to begin the download process. (it will typically
            takes ~30 minutes if you download all the listed models, depending on your Wi-Fi speed)
            <br />
            Choose the source for model downloads — either <strong>Azure</strong> (recommended) or{" "}
            <strong>Hugging Face</strong>. Once ready, click <code>&gt;</code>.
            <br />
            <img src="/getting-started/fullSetup/nextPage.png" alt="full-setup" />
          </li>
          <li>
            After the setup completes, you will be directed to the <strong>Main Menu</strong> of Model HQ, where you can
            begin using your fully configured environment.
            <br />
            <img src="/getting-started/main_menu.png" alt="main-menu" />
          </li>
        </ol>

        <p>&nbsp;</p>

        <h2 id="getting-started-with-fast-setup">Getting Started with Fast Setup</h2>
        <p>
          Looking to explore Model HQ with minimal setup time? The <strong>Fast Setup</strong> option is designed for a
          quick start experience.
          <br />
          It loads a set of lightweight models (approximately 1 billion parameters each or similar) and sets up your
          environment in just a few minutes.
          <br />
          This setup is ideal for initial testing and quick evaluation of Model HQ. You will still be able to manually
          download models in the product as needed.
        </p>

        <ol>
          <li>
            On the setup options screen, select the <code>Fast Setup</code> option and click the <code>&gt;</code>{" "}
            button to proceed.
            <br />
            <img src="/getting-started/fastSetup/fastSetup.png" alt="fast-setup" />
          </li>
          <li>
            You will now see a list of small models (around 5) available for download.
            <br />
            You can deselect models to minimize the download time.
            <br />
            Choose the source for model downloads — either <strong>Azure</strong> (recommended) or{" "}
            <strong>Hugging Face</strong>. Once ready, click <code>&gt;</code>.
            <br />
            <img src="/getting-started/fastSetup/next1.png" alt="fast-setup" />
          </li>
          <li>
            The selected models will begin downloading.
            <br />
            Typical download time: ~1–2 minutes per model.
            <br />
            Please do not close the screen during this process.
            <br />
            <img src="/getting-started/fastSetup/next.png" alt="fast-setup" />
          </li>
          <li>
            Once the setup is complete, you will be directed to the <strong>Main Menu</strong> of Model HQ where you can
            begin working with your environment.
            <br />
            <img src="/getting-started/main_menu.png" alt="main-menu" />
          </li>
        </ol>

        <p>&nbsp;</p>

        <h2 id="getting-started-with-no-setup">Getting Started with No Setup</h2>
        <p>
          Looking to configure <strong>Model HQ</strong> your way? The <strong>No Setup</strong> option provides
          complete flexibility to customize your environment and workflows where you will manually download each model
          as selected. This documentation will guide you through each step and help you explore all available features.
        </p>

        <ol>
          <li>
            In the setup options screen, select the <code>No Setup</code> option and click on the <code>&gt;</code>{" "}
            button to proceed.
            <br />
            <img src="/getting-started/noSetup/noSetup.png" alt="no-setup" />
          </li>
          <li>
            You will be directed to the <strong>Main Menu</strong> interface of Model HQ, as shown below.
            <br />
            This is the central workspace where you can manually load models, configure settings, and fully customize
            your Model HQ environment.
            <br />
            <img src="/getting-started/main_menu.png" alt="no-setup-next" />
          </li>
        </ol>

        <p>&nbsp;</p>

        <h2 id="getting-started-with-enterprise-template">Getting Started with Enterprise Template</h2>
        <p>
          The <strong>Enterprise Template</strong> is a fully pre-configured setup tailored specifically for enterprise needs,
          and enables a standard configuration for all users, including a common set of custom Bots, Agents and other
          configurations.
          <br />
          If you have received an Enterprise Template from your IT or development team, you can launch the Model HQ
          application by selecting this option. You will then be prompted to upload the template zip file.  Once you
          upload the template zip file, the configuration template will be installed, and you will all set and ready
          to get started!
        </p>

        <ol>
          <li>
            On the setup options screen, select the <code>Enterprise Template</code> option and click the{" "}
            <code>&gt;</code> button to proceed.
            <br />
            <img src="/getting-started/enterpriseTemplate/enterpriseTemplate.png" alt="enterprise-template" />
          </li>
          <li>
            The system will automatically configure your environment with the enterprise-grade template.
            <br />
            This includes pre-selected models and workflows optimized for organizational use.
            <br />
            You do not need to manually select or configure any models.
          </li>
          <li>
            Once the setup is complete, you will be directed to the <strong>Main Menu</strong> of Model HQ, where you
            can begin working with your enterprise-configured environment.
            <br />
            <img src="/getting-started/main_menu.png" alt="enterprise-template-next" />
          </li>
        </ol>

        <h2>Conclusion</h2>
        <p>
          You have now successfully set up Model HQ using one of the available options. You can start exploring the
          features, downloading additional models, and customizing your environment to suit your needs.
          <br />
        </p>

        <p>
          For further assistance or to share feedback, please contact us at <code>support@aibloks.com</code>
        </p>
      </div>
    </div>
  )
}
