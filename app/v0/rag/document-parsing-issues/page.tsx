import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function TroubleshootingDocumentParsingPage() {
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
            <BreadcrumbPage>Troubleshooting Document Parsing</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Troubleshooting Document Parsing and Limitations
        </h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          Model HQ includes proprietary high-performance parsers designed to process PDFs and other common
          document types with exceptional speed and accuracy. These parsers extract text, structure, and
          metadata efficiently, supporting a wide range of use cases for retrieval, RAG workflows, and agentic AI.
        </p>

        <p>However, some documents—particularly PDFs—may present unique challenges:</p>

        <ul>
          <li>
            <strong>Image-based PDFs</strong>: Certain PDFs are saved entirely as images (e.g., scanned documents),
            meaning there is no underlying text layer to extract. These require OCR (Optical Character Recognition)
            to process the content.
          </li>
          <li>
            <strong>Permission-restricted PDFs</strong>: Some PDFs use encrypted permissions that limit actions
            such as text extraction, copying, or printing. These restrictions may prevent direct parsing without
            prior decryption or appropriate access rights.
          </li>
        </ul>

        <p>
          When encountering such files, additional preprocessing steps may be required before they can be
          ingested and indexed by Model HQ.
        </p>

        <p>&nbsp;</p>

        <h2 id="handling-documents-that-cannot-be-natively-parsed">Handling Documents That Cannot Be Natively Parsed</h2>

        <p>
          In some cases, a document cannot be parsed by Model HQ's native proprietary parsers due to being
          fully image-based or having restrictive permissions.
        </p>

        <h3>In Chat:</h3>

        <p>When attempting to load such a document, the system will respond with:</p>

        <blockquote data-type="warning">
          <p>
            "Unfortunately, source could not be loaded."
          </p>
        </blockquote>

        <h3>In Agents:</h3>

        <p>
          The Parsing step within the workload will complete but return 0 text blocks parsed, indicating that
          no extractable text was found and the Rag Answer step will not return responses.
        </p>

        <p>&nbsp;</p>

        <h2 id="fallback-solution">Fallback Solution:</h2>

        <p>
          Model HQ includes an embedded OCR (Optical Character Recognition) capability that can be activated
          to process such documents. Enabling OCR allows Model HQ to detect and extract text from images,
          scanned pages, or restricted PDFs, making them fully searchable and usable in RAG and agent workflows.
        </p>

        <h3 id="how-to-acitvate-ocr">How to Activate OCR:</h3>

        <p>
          <strong>In Chat or Bots</strong>, in the Dialogue section, select the icon beneath the chat box '⚙️'
        </p>

        <img src="/v0/chat/ocr.png" alt="activateOCR" />

        <p>Once in <strong>RAG + Generation Config Options</strong>, go to:</p>

        <p>
          <strong>PDF Parsing Options</strong>, Select <strong>OCR</strong> and click '&gt;'. Your document
          will be accessed via OCR and a previously locked PDF document will now be searchable.
        </p>

        <img src="/v0/chat/pdfParsing.png" alt="pdfParsing" />

        <p></p>

        <p>
          <strong>In Agents</strong>, in lieu of Parse Documents, Select <strong>OCR</strong>.
        </p>

        <blockquote data-type="tip">
          <p>
            OCR Agent and OCR in RAG step does not accept PPTx as a file input.
          </p>
        </blockquote>

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
