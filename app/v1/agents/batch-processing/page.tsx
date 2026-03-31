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

export default function BatchProcessingOrMultidocAgentPage() {
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
            <BreadcrumbPage>Batch processing or multi-doc agent</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Batch processing or multi-doc agent</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          This section explores the <strong>Batch Run</strong> capabilities of Model HQ, which enable automated execution of agent processes across multiple documents simultaneously.
        </p>

        <p>
          <strong>Batch Run</strong> lets you run an agent on many documents at the same time—so you don’t have to upload and process each file one by one. It’s ideal for tasks where you need the same analysis across a large set of documents, like contract reviews, invoice processing, research summaries, or compliance checks. Every document is handled using the same logic and output format, saving time and reducing manual work.
        </p>

        <p>
          Batch run is suitable only for agent processes that require the same agent workflow for batches of similar input - i.e., similar contracts or a batch of images.
        </p>

        <p>
          In this example, we’ll use the <strong>Contract Analyzer</strong> from the Agents documentation to show how Batch Run works. The interface makes it easy to upload multiple files, start processing, track progress, and download results in formats like Word or JSON. This turns a single-document agent into a scalable workflow that can handle large volumes of documents efficiently.
        </p>

        <h2 id="batch-run-workflow">Batch run workflow</h2>

        <p>
          Select the desired Agent process then &quot;&gt;&quot;. Select <strong>&#39;Batch Run&#39;</strong> and once it has been selected, the user will be directed to the <strong>Upload Documents for Batch Processing</strong> page.
        </p>

        <img src="/v1/agents/05_batchRun.png" alt="batch run" />

        <p>
          From this interface, the first 5 agreements from the sample files provided in the Model HQ package can be selected. These files are located at:
        </p>

        <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">c:\users\{'{'+'user_name'+'}'+'\\llmware_data\\sample_files\\agreements'}</code>
        </pre>

        <img src="/v1/agents/09_filePath.png" alt="batch run" />

        <p>
          After selecting the files, the <code>'&gt;'</code> button can be clicked to initiate the batch run.
        </p>

        <p>
          Within a few minutes, each of the 5 contracts will be processed during this Batch Run. Examples of the results are shown below:
        </p>

        <img src="/v1/agents/10_final.png" alt="batch run" />

        <p>
          Once the <strong>Batch Run</strong> is completed, results will be accessible via a <strong>Word document</strong> or a <strong>JSON file</strong>, depending on the use case requirements.
        </p>

        <h2 id="conclusion">Conclusion</h2>

        <p>
          Batch Run functionality can be applied to almost any agent workflow where consistent processing needs to be applied across multiple files. This capability is particularly valuable for enterprise scenarios involving contract analysis, financial document processing, research report summarization, compliance checking, or data extraction from large document collections. By automating the execution of agent workflows across document sets, Batch Run eliminates repetitive manual tasks, ensures consistent analysis methodologies, and accelerates time-to-insight for document-intensive processes. The structured output formats enable downstream integration with business intelligence tools, dashboards, APIs, and enterprise systems, making Batch Run a critical feature for scaling Model HQ agents from individual use cases to production-grade document processing pipelines.
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