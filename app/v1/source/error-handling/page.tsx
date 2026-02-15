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

export default function WhyDoesTheModelNotLoadASourceOrADocumentAndWhatShouldBeDonePage() {
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
            <BreadcrumbPage>Why does the model not load a source or a document and what should be done?</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Why does the model not load a source or a document and what should be done?</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          There can be a number of reasons why a document cannot be parsed so that the information can be accessed via RAG. One of the most common reasons is if security or authentication has been placed on the document or if the document is password protected. In this case, the document cannot be parsed, and the contents may need to be accessed through a vision model.
        </p>

        <p>
          Another common scenario involves PDFs with many images embedded within them that make parsing very difficult. For these PDFs, <strong>OCR</strong> or <strong>Vision Model</strong> is recommended.
        </p>

        <p>
          Another common error is encountered with PPTx documents that are created via conversions from Canva or other services. In this case, the file parser does not recognize the PPTx as such and will reject the document, and an error stating <code>"Unfortunately, source could not be loaded"</code> will be displayed. In this case, it is recommended to convert this PPTx document to a PDF format to attempt to parse it digitally, or OCR or Vision can be used, depending on the content and length of the document.
        </p>

        <p>
          To select other options to query a document, <strong>OCR</strong> or <strong>Vision</strong> Model can be selected, depending on the document, by clicking the ⚙️ (Configs) button below the chat box and making the selection in RAG + Generation Config Options.
        </p>

        <h2 id="conclusion">Conclusion</h2>

        <p>
          This document described common issues that may prevent documents from being loaded or parsed in Model HQ. The most frequent causes include password protection, security restrictions, image-heavy PDFs, and improperly formatted PPTx files from conversion tools. When standard parsing fails, alternative methods such as OCR for scanned or image-heavy documents, or Vision models for complex layouts, can be selected through the configuration panel. Understanding these common parsing limitations and available workarounds enables more successful document ingestion and RAG functionality across a wider variety of file types and formats.
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