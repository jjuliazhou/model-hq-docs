import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function ChatPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Chat</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Exploring Chat in Model HQ</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          Once you complete the initial setup, you will be directed to the <strong>Main Menu</strong>.
          <br />
          This interface offers multiple functionalities; in this section, we will focus specifically on the{" "}
          <strong>Chat</strong> feature. The Chat feature allows users a fast way to start experimenting with chat
          models of various sizes, from Small (1-3 billion parameters), Medium (7-8 billion parameters) to Large (9 and
          above, up to 32 billion parameters).
        </p>

        <p>
          Users are able to select which size model they would like to interact with going through{" "}
          <a href="/chat/changing-chat-model">Changing Chat Model in Model HQ</a>.
        </p>

        <p>&nbsp;</p>

        <h2 id="launching-the-chat-interface">1. Launching the Chat Interface</h2>
        <p>
          Click on the <strong>Chat</strong> button from the main menu to get started.
          <br />
          <img src="/v0/chat/chat.png" alt="chat" />
        </p>

        <p>&nbsp;</p>

        <h2 id="selecting-a-model">2. Selecting a Model</h2>
        <p>
          You will be prompted with a screen asking you to choose a model for Chat or Retrieval Augmented Generation
          (RAG).
          <br />
          Model HQ provides options based on performance, size, and speed — allowing you to select a model that fits
          your requirements.
          <br />
          Once you have selected a model, click the <code>&gt;</code> button to proceed.
        </p>

        <img src="/v0/chat/next1.png" alt="chatNext" />

        <h4>Available Model Options:</h4>
        <ul>
          <li>
            <strong>Small Model</strong>:
            <br />
            ~1-3 billion parameters — Fastest response time, suitable for basic chat.
          </li>
          <li>
            <strong>Medium Model</strong>:
            <br />
            ~7-8 billion parameters — Balanced performance, ideal for chat, data analysis and standard RAG tasks.
          </li>
          <li>
            <strong>Large Model</strong>:
            <br />
            ~9 up to 32 billion parameters — Most powerful chat, RAG and best for advanced and complex analytical
            workloads.
          </li>
        </ul>

        <img src="/v0/chat/next2.png" alt="chatNext" />

        <p>&nbsp;</p>

        <h2 id="downloading-models">3. Downloading Models</h2>
        <p>
          For demonstration purposes, we are selecting the <strong>Small Model</strong>.
          <br />
          If no models have been downloaded previously (e.g., in the <strong>No Setup</strong>,{" "}
          <strong>Fast Setup</strong>, or <strong>Full Setup</strong> paths), the selected model will begin downloading
          automatically.
          <br />
          This process typically takes <strong>2–7 minutes</strong>, depending on the model you selected and your
          internet speed.
        </p>

        <img src="/v0/chat/download.png" alt="download" />

        <p>
          Once the model download is complete, it will be automatically loaded (this typically takes less than a
          minute). After loading, you can begin interacting with the model through the Chat interface.
        </p>

        <blockquote data-type="tip">
          <p>
            <strong>TIP</strong>
            <br />
            If you encounter an error while downloading the model, please refer to the{" "}
            <a href="/chat/error">Model Download Error Guide</a> for troubleshooting steps and solutions.
          </p>
        </blockquote>

        <p>&nbsp;</p>

        <h2 id="4-understanding-the-chat-interface">4. Understanding the Chat Interface</h2>

        <p>
          Once your model is loaded, you will be taken to the <strong>Chat Interface</strong>.
          <br />
          <img src="/v0/chat/chatInterface.png" alt="chat" />
        </p>

        <p>
          This interface offers several powerful tools to interact with your model. We will explore each feature one by
          one:
        </p>

        <ol>
          <li>Info Button</li>
          <li>Configuration Button</li>
          <li>Source Button</li>
          <li>Save Button</li>
        </ol>

        <p>
          But before diving into these features, let us quickly try interacting with the chatbot using some demo
          questions — without enabling RAG (Retrieval Augmented Generation).
        </p>

        <p>
          For instance, we asked the model, What is the most famous equation given by Euclid? and clicked on the{" "}
          <strong>
            <code>&gt;</code>
          </strong>{" "}
          button. Check the result below:
          <br />
          <img src="/v0/chat/test1.png" alt="chat" />
        </p>

        <p>
          Feel free to experiment on your own — this is a basic chatbot setup. We will enable RAG functionality in the
          upcoming sections.
        </p>

        <blockquote data-type="note">
          <p>
            <strong>NOTE</strong>
            <br />
            For this documentation, we are using the <strong>Medium Model</strong>. Previously, we demonstrated features
            using the <strong>Small Model</strong>. You can switch between models as needed.
            <br />
            Refer to: <a href="/chat/changing-chat-model">Changing Chat Model in Model HQ</a>
          </p>
        </blockquote>

        <p>&nbsp;</p>

        <h3 id="info-button">Info Button</h3>

        <p>
          The <strong>Info</strong> button displays the current configuration settings for your chat model.
          <br />
          <img src="/v0/chat/info.png" alt="chat" />
        </p>

        <p>This provides clarity on which model is in use and the configuration parameters currently applied.</p>

        <p>&nbsp;</p>

        <h3 id="configuration-button">Configuration Button</h3>

        <p>
          The <strong>Configuration</strong> button allows you to adjust the model settings for both RAG and generation.
          <br />
          Here, you can customize parameters such as:
        </p>

        <ul>
          <li>Number of top text chunks</li>
          <li>Target token size</li>
          <li>Maximum output size</li>
          <li>Temperature</li>
          <li>Sampling settings</li>
        </ul>

        <p>
          For example, the <strong>temperature</strong> setting controls the randomness of the model's output.
        </p>

        <img src="/v0/chat/config.png" alt="chat" />

        <p>
          Once you have modified the configuration, click{" "}
          <strong>
            <code>&gt;</code>
          </strong>{" "}
          to save your changes. You can click the <strong>Info</strong> button again to verify your updates.
        </p>

        <p>
          To see this in action, we asked, <em>"What is an Apple?"</em> using the same model but with different
          configuration settings.
          <br />
          <img src="/v0/chat/test2.png" alt="chat" />
        </p>

        <p>&nbsp;</p>

        <h3 id="source-button-enabling-rag--chatting-with-documents">
          Source Button (Enabling RAG / Chatting with Documents)
        </h3>

        <p>
          The <strong>Source</strong> button enables you to load external documents or use Wikipedia to enhance your model's responses.
          <br />
          <img src="/v0/chat/sources.png" alt="chat" />
        </p>

        <p>You have several options here:</p>

        <h4>1. Upload a File</h4>

        <p>Upload a document and chat within its context. Supported file formats include:</p>

        <p>
          <code>.pdf</code>, <code>.pptx</code>, <code>.docx</code>, <code>.xlsx</code>, <code>.csv</code>,{" "}
          <code>.txt</code>, <code>.md</code>, <code>.wav</code>, <code>.png</code>, <code>.jpg</code>
        </p>

        <p>
          Currently, the model is able to accept up to ~5 documents at once (depending on file size) for most file
          types, but cannot accept more than 1 .png, .jpg or .wav file at a time.
        </p>

        <p>
          For demonstration, we used a ~800-page PDF:{" "}
          <em>"Ray Monk - Ludwig Wittgenstein: The Duty of Genius (1991)"</em>.
          <br />
          We asked, <em>"How many children did Wittgenstein have?"</em> and received an great response — with references
          and match score.
        </p>

        <img src="/v0/chat/test3.png" alt="chat" />

        <blockquote>
          <p>
            Try it yourself and share your feedback at: <strong>support@aibloks.com</strong>
            <br />
            <em>(Model used: Dolphin)</em>
          </p>
        </blockquote>

        <p>
          To remove the current source, simply click the <strong>Source</strong> button again.
          <br />
          <img src="/v0/chat/sourceOff1.png" alt="chat" />
        </p>

        <p>
          Reopening the Source interface now shows an additional section: <strong>Loaded Sources</strong>. These remain
          available during the current Model HQ session.
        </p>

        <img src="/v0/chat/loadedSources.png" alt="chat" />

        <h4>2. Saved Sources</h4>

        <p>This option lets you access previously uploaded files from your local storage.</p>

        <blockquote>
          <p>
            <em>Note: Files are not stored on any external server.</em>
          </p>
        </blockquote>

        <h4>3. Wikipedia as a Source</h4>

        <p>Select Wikipedia as a source for more factually accurate and up-to-date responses.</p>

        <p>
          For example, we asked about the Spiral Theory. The chatbot responded with an in-depth answer along with source references.
        </p>

        <img src="/v0/chat/test4.png" alt="chat" />

        <img src="/v0/chat/wikiSources.png" alt="chat" />

        <p>
          To stop using Wikipedia, click the Source button again.
          <br />
          <img src="/v0/chat/sourceOff2.png" alt="chat" />
        </p>

        <p>&nbsp;</p>

        <h3 id="save-button">Save Button</h3>

        <p>
          The <strong>Save</strong> button lets you export your chat session as a <code>.md</code> (Markdown) file.
          <br />
          <img src="/v0/chat/save.png" alt="chat" />
        </p>

        <p>
          You can open this file with any text editor. Markdown-supporting editors will show it with proper formatting;
          others will display plain text. Below image shows the exported chat in a text editor i.e. as a plain text.
        </p>

        <img src="/v0/chat/savedFile.png" alt="chat" />

        <p>&nbsp;</p>

        <h2>Conclusion</h2>

        <p>
          In this section, we explored the <strong>Chat Interface</strong> in Model HQ — from basic interactions to
          configuring the model and using RAG with external sources.
        </p>

        <p>
          To change the chat model, refer to the guide:
          <a href="/chat/changing-chat-model">Changing Chat Model in Model HQ</a>
        </p>

        <p>
          For further assistance or to share feedback, please contact us at <code>support@aibloks.com</code>
        </p>
      </div>
    </div>
  )
}
