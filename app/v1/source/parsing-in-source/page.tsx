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

export default function WhatIsParsingPage() {
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
            <BreadcrumbPage>What is parsing?</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">What is parsing?</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          Parsing is the process of <strong>taking apart a document and turning it into structured information that a computer can understand.</strong>
        </p>

        <p>
          When a file is uploaded—such as a PDF, Word document, or even a scanned image—the raw content is not always in a form that an AI model can easily read. For example, text in a PDF might be stored in fragments, out of order, or even as part of an image.
          <br />
          Parsing is the step that:
        </p>

        <ul>
          <li><strong>Extracts the text</strong> from the document</li>
          <li><strong>Identifies structure</strong> such as paragraphs, headings, tables, and lists</li>
          <li><strong>Organizes the content</strong> so it can be searched, analyzed, or fed into an AI model</li>
        </ul>

        <p>
          Parsing can be thought of as <strong>translating a messy document into a clean, machine-readable format.</strong> Without it, the AI might miss key information, read text in the wrong order, or ignore data entirely.
        </p>

        <p>
          In short: <em>Parsing is how Model HQ ensures documents are cleanly understood before any AI tasks—like answering questions, summarizing, or running analysis—are applied.</em>
        </p>

        <h2 id="1-document-parsing-options">1. Document parsing options</h2>

        <p>
          Model HQ provides multiple parsing modes to ensure accuracy and speed across different types of documents.
        </p>

        <ul>
          <li><strong>Digital (Default)</strong> The <strong>Digital parser</strong> is the fastest option and works extremely well for the majority of text-based documents. It is optimized for performance and should be used as the primary method whenever possible. Digital parser does not work for image-based documents - OCR or Vision Model parsings are recommended for these types of documents.</li>
        </ul>

        <ul>
          <li><strong>OCR Parsing</strong> Some documents may be <strong>image-based</strong> (such as scanned PDFs or files with embedded text as images). Image-based documents cannot be parsed by the Digital Parser, and the user should select OCR for these documents. In these cases, Optical Character Recognition (OCR) parsing is required to accurately extract text.</li>
        </ul>

        <ul>
          <li><strong>Vision Model Parsing</strong> For documents that include <strong>many images, complex layouts, or require multimodal understanding</strong>, a Vision model can be used. This option leverages advanced AI vision capabilities to interpret both text and visual content.</li>
        </ul>

        <h2 id="2-how-to-select-parsing-options-for-rag-use-cases-for-chat-interfaces">2. How to select parsing options for RAG use cases for chat interfaces</h2>

        <ol>
          <li>In Chat or Bot: The ⚙ icon below the chat box can be clicked.</li>
          <li>In the <strong>RAG + Generation Config Options</strong> under "PDF Parsing Options", selection can be made among:
            <ul>
              <li><strong>Digital</strong> (default, fastest)</li>
              <li><strong>OCR</strong> (for image-based documents)</li>
              <li><strong>Vision Model</strong> (for documents rich in images or requiring visual context)</li>
            </ul></li>
        </ol>

        <h2 id="conclusion">Conclusion</h2>

        <p>
          This document described what parsing is and how Model HQ uses different parsing methods to extract and structure information from uploaded documents. Parsing is the critical first step that transforms raw document content into machine-readable format, enabling AI models to accurately search, analyze, and answer questions about the content. Model HQ provides three parsing options—Digital Parser for standard text-based documents, OCR for image-based or scanned documents, and Vision Model for complex layouts with multimodal content. The appropriate parsing method can be selected based on document type and content complexity to ensure optimal accuracy and performance.
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