import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function ChatErrorPage() {
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
            <BreadcrumbPage>Error Handling</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight" id="unfortunately-something-has-gone-wrong-loading-model-name">
          Possible Error: Unfortunately, something has gone wrong loading _model_name_
        </h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>If you encounter any such issues during the download—such as the error prompt below:</p>

        <img src="/v0/chat/error1.png" alt="error" />

        <p>
          Click <strong>"Yes"</strong> to retry and continue the download.
        </p>
        <blockquote data-type="warning">
          <p>
            Clicking <strong>"No"</strong> will return you to the <strong>Main Menu</strong>.
          </p>
        </blockquote>

        <p>After confirming, the interface should update to:</p>

        <img src="/v0/chat/error2.png" alt="error" />

        <p>Once you confirm and continue the download, the interface will update to the following:</p>

        <img src="/v0/chat/chatLoad.png" alt="chatLoad" />

        <p>
          At this stage, the selected models will begin loading automatically after the download completes.
          <br />
          Please wait for the loading process to finish before proceeding to use the Chat feature.
        </p>

        <p>
          Most common causes of errors are usually attributed to not enough memory on device, disrupted WiFi connection,
          or device interruption of model download due to hibernation mode (refer to{" "}
          <strong>System Configuration guide</strong> for recommended system settings prior to downloading models).
        </p>

        <p>
          If the bug still persists, then reach out to us at <code>support@aibloks.com</code>.
        </p>
      </div>

      <p>&nbsp;</p>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight" id="why-does-the-model-not-load-a-source-or-a-document-and-what-should-i-do">
          Why does the model not load a source or a document and what should I do?
        </h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          There can be a number of reasons why a document cannot be parsed so that the information can be accessed via RAG. One 
          of the most common reasons is if there is security or authentication placed on the document or if the document is 
          password protected. In this case, we cannot parse this document, and you may have to access the contents through a vision model.
        </p>

        <p>
          One other common scenario is for PDFs with many images embedded within them that make parsing very 
          difficult. For these PDFs, we recommend <b>OCR</b> if possible.
        </p>

        <p>
          Another common error we encounter is for PPTx documents that are created via conversions from Canva or other services. 
          In this case, the file parser does not recognize the PPTx as such and will reject the document, and you will get an 
          error stating <code>"Unfortunately, source could not be loaded."</code> In this case, we recommend converting this PPTx document 
          to a PDF format to try to parse digitally, or use OCR or Vision, depending on the content and length of the document.
        </p>

        <p>
          To select other options to query a document, you can select <b>OCR</b> or <b>Vision</b> Model, depending on the document,
          by selecting ⚙️ (Configs) below the chat box, and making the selection in Rag + Generation Config Options.
        </p>

        <p>
          If the bug still persists, then reach out to us at <code>support@aibloks.com</code>.
        </p>
      </div>
    </div>
  )
}
