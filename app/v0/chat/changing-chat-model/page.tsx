import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function ChangingChatModelPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/chat">Chat</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Changing Chat Model</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Changing the Chat Model Configuration</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          To update the default model used for the <strong>Chat</strong> feature (Small, Medium, or Large), follow the
          steps below.
        </p>

        <p>&nbsp;</p>

        <h3>Step 1: Open Configuration Panel</h3>
        <p>
          Click the <strong>Config</strong> button(⚙️) from the main Chat Interface.
          <br />
          You can locate it as shown below:
        </p>

        <img src="/v0/chat/modelConfig.png" alt="config" />

        <p>&nbsp;</p>

        <h3>Step 2: Access Model Settings</h3>
        <p>
          You will now be redirected to a configuration interface.
          <br />
          From here, select the <strong>Models</strong> tab:
        </p>

        <img src="/v0/chat/selectModesl.png" alt="config" />

        <p>&nbsp;</p>

        <h3>Step 3: Modify Default Chat Model</h3>
        <p>
          The <strong>Set Default Models</strong> section will open.
          <br />
          Scroll down to locate the <strong>Chat</strong> and <strong>RAG</strong> model settings, as shown below:
        </p>

        <img src="/v0/chat/changeModels.png" alt="config" />

        <p>
          From this interface, you can select your preferred model for both general chat and RAG-based interactions.
        </p>

        <blockquote data-type="tip">
          <p>
            <strong>TIP</strong>
            <br />
            Every model is different and has unique characteristics. Choose your models wisely and according to your
            specific use case.
          </p>
        </blockquote>

        <p>&nbsp;</p>

        <h3>Need Help?</h3>
        <p>
          If you encounter any issues while updating your model configuration, feel free to contact our support team at:
          <br />
          <code>support@aibloks.com</code>
        </p>
      </div>
    </div>
  )
}
