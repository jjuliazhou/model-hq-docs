import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function WhatIsParsingPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/chat">RAG</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>RAG Parsing?</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight" id="what-is-parsing">
          What is Parsing?
        </h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          Parsing is simply the process of{" "}
          <strong>
            taking apart a document and turning it into structured information that a computer can understand.
          </strong>
        </p>

        <p>
          When you upload a file—like a PDF, Word document, or even a scanned image—the raw content isn't always in a
          form that an AI model can easily read. For example, text in a PDF might be stored in fragments, out of order,
          or even as part of an image.
        </p>

        <p>Parsing is the step that:</p>

        <ul>
          <li>
            <strong>Extracts the text</strong> from the document.
          </li>
          <li>
            <strong>Identifies structure</strong> such as paragraphs, headings, tables, and lists.
          </li>
          <li>
            <strong>Organizes the content</strong> so it can be searched, analyzed, or fed into an AI model.
          </li>
        </ul>

        <p>
          Think of parsing like <strong>translating a messy document into a clean, machine-readable format.</strong>{" "}
          Without it, the AI might miss key information, read text in the wrong order, or ignore data entirely.
        </p>

        <p>
          In short:{" "}
          <em>
            Parsing is how Model HQ makes sure your documents are cleanly understood before any AI tasks—like answering
            questions, summarizing, or running analysis—are applied.
          </em>
        </p>

        <h2 id="document-parsing-options">Document Parsing Options</h2>

        <p>
          Model HQ provides multiple parsing modes to ensure accuracy and speed across different types of documents.
        </p>

        <ul>
          <li>
            <strong>Native Parser (Default)</strong>
            <br />
            The <strong>native parser</strong> is the fastest option and works extremely well for the majority of
            text-based documents. It is optimized for performance and should be used as the primary method whenever
            possible.
          </li>
          <li>
            <strong>OCR Parsing</strong>
            <br />
            Some documents may be <strong>image-based</strong> (such as scanned PDFs or files with embedded text as
            images). In these cases, Optical Character Recognition (OCR) parsing is required to accurately extract text.
          </li>
          <li>
            <strong>Vision Model Parsing</strong>
            <br />
            For documents that include{" "}
            <strong>many images, complex layouts, or require multimodal understanding</strong>, you can use a Vision
            model. This option leverages advanced AI vision capabilities to interpret both text and visual content.
          </li>
        </ul>

        <h2 id="parsing-options">How to Select Parsing Options for RAG use cases for Chat Interfaces</h2>

        <ol>
          <li>In Chat or Bot: Click on the ⚙ icon below the chat box.</li>
          <li>
            In the <strong>RAG + Generation Config Options</strong>, choose between:
            <ul>
              <li>
                <strong>Native Parser</strong> (default, fastest)
              </li>
              <li>
                <strong>OCR</strong> (for image-based documents)
              </li>
              <li>
                <strong>Vision Model</strong> (for documents rich in images or requiring visual context)
              </li>
            </ul>
          </li>
        </ol>

        <h2>Conclusion</h2>
        <p>
          In this documentation, we explored the <strong>RAG</strong> source-building functionality in Model HQ.
          <br />
          We covered how to create new and load existing RAG sources, and utilize tools like document upload, semantic
          search, testing, and configuration settings.
        </p>

        <p>
          If you have any questions or feedback, please contact us at <code>support@aibloks.com</code>.
        </p>
      </div>
    </div>
  )
}
