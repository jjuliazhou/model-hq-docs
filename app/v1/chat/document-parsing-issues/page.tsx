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

export default function TroubleshootingDocumentParsingAndLimitationsPage() {
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
              <BreadcrumbPage>Troubleshooting Document Parsing and Limitations</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Troubleshooting Document Parsing and Limitations</h1>
        </div>

        <div className="prose prose-gray max-w-none">
          <p>
            Model HQ includes proprietary high-performance parsers designed to process PDFs and other common document types with exceptional speed and accuracy. These parsers extract text, structure, and metadata efficiently, supporting a wide range of use cases for retrieval, RAG workflows, and agentic AI.
          </p>

          <p>
            However, some documents—particularly PDFs—may present unique challenges:
          </p>

          <ul>
            <li><strong>Image-based PDFs</strong>: Certain PDFs are saved entirely as images (e.g., scanned documents), meaning there is no underlying text layer to extract. These require OCR (Optical Character Recognition) to process the content.</li>
          </ul>

          <ul>
            <li><strong>Permission-restricted PDFs</strong>: Some PDFs use encrypted permissions that limit actions such as text extraction, copying, or printing. These restrictions may prevent direct parsing without prior decryption or appropriate access rights.</li>
          </ul>

          <p>
            When such files are encountered, additional preprocessing steps may be required before they can be ingested and indexed by Model HQ.
          </p>

          <h2 id="1-handling-documents-that-cannot-be-natively-parsed">1. Handling documents that cannot be natively parsed</h2>

          <p>
            In some cases, a document cannot be parsed by Model HQ's native proprietary parsers due to being fully image-based or having restrictive permissions.
          </p>

          <h3 id="11-in-chat">1.1 In Chat</h3>

          <p>
            When attempting to load such a document, the system will respond with:
          </p>

          <blockquote data-type="important">
            <p>“Unfortunately, source could not be loaded.”</p>
          </blockquote>

          <h3 id="12-in-agents">1.2 In Agents</h3>

          <p>
            The Parsing step within the workload will complete but return 0 text blocks parsed, indicating that no extractable text was found and the RAG Answer step will not return responses.
          </p>

          <h2 id="2-fallback-solution">2. Fallback solution</h2>

          <p>
            Model HQ includes an embedded OCR (Optical Character Recognition) capability that can be activated to process such documents. Enabling OCR allows Model HQ to detect and extract text from images, scanned pages, or restricted PDFs, making them fully searchable and usable in RAG and agent workflows.
          </p>

          <h3 id="21-how-to-activate-ocr">2.1 How to activate OCR:</h3>

          <p>
            <strong>In Chat or Bots</strong>, the icon beneath the chat box '⚙️' can be selected in the Dialogue section.
          </p>

          <img src="/v1/chat/activateOcr/01_chatConfig.png" alt="activateOCR" />

          <p>
            Once in <strong>RAG + Generation Config Options</strong>, the following steps can be followed:
          </p>

          <p>
            Navigate to <strong>PDF Parsing Options</strong>, select <strong>OCR</strong> and click '&gt;'. The document will be accessed via OCR and a previously locked PDF document will now be searchable.
          </p>

          <img src="/v1/chat/activateOcr/02_activateOcr.png" alt="pdfParsing" />

          <p>
            <strong>In Agents</strong>, <strong>OCR</strong> can be selected in lieu of Parse Documents or Rag-Answer if in Visual editing mode (OCR available for Intel AI PC only - Jan 2026).
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