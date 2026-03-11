import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function MultiDocAgentPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/agent">Agents</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Multi-Doc Agent</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Batch Run</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to process multiple documents simultaneously with Model HQ's Batch Run feature
        </p>
      </div>

      <p>&nbsp;</p>

      <div className="prose prose-gray max-w-none">
        <h2 id="batch-run-overview">Batch Run Overview</h2>
        <p>
          In this Section, we will explore using the <strong>Batch Run</strong> capabilities of Model HQ.
        </p>

        <p>
          <strong>Batch Run</strong> is designed to automate the execution of an Agent process across multiple documents
          at once, without the user having to load each document one-by-one.
        </p>

        <img src="/v0/agent/batchRun.png" alt="batch run" />

        <p>
          We will use the <strong>Contract Analyzer</strong> example we covered in Agents to provide an example of a
          Batch Run and how to use this feature. (A video of this agent process running in Batch Run mode can also be
          found in our YouTube Channel:&nbsp;
          <a href="https://youtu.be/FSjpAgIZnPM" target="_blank" rel="noopener noreferrer" style={{ color: "red" }}>
            https://youtu.be/FSjpAgIZnPM
          </a>
          )
        </p>

        <p>&nbsp;</p>

        <h2 id="uploading-documents-for-batch-processing">Uploading Documents for Batch Processing</h2>
        <p>
          Once you have selected <strong>&apos;Batch Run&apos;</strong>, you will be directed to the{" "}
          <strong>Upload Documents for Batch Processing</strong> page.
        </p>

        <img src="/v0/agent/uploadDocs.png" alt="batch run" />

        <p>&nbsp;</p>

        <p>
          From here, select for our example the first 5 agreements from the sample files that are provided in the Model
          HQ package that can be found under <code>c:\users\{"{user name}"}\llmware_data\sample_files\agreements</code>
        </p>

        <img src="/v0/agent/filePath.png" alt="batch run" />

        <p>&nbsp;</p>

        <p>
          Then select <code>&apos;&gt;&apos;</code> to start the batch run.
        </p>

        <p>&nbsp;</p>

        <h2 id="batch-run-results">Batch Run Results</h2>
        <p>
          Within a few minutes, each of the 5 contracts will be processed in this Batch Run. Here are the examples of
          the results:
        </p>

        <img src="/v0/agent/final.png" alt="batch run" />

        <p>&nbsp;</p>

        <p>
          Once the <strong>Batch Run</strong> is completed, the user will have access to the results via a{" "}
          <strong>Word document</strong> or a <strong>JSON file</strong>, depending on the use case.
        </p>

        <p>
          Batch Run can be applied to almost any Agent workflow where a user needs to apply the workflow against a
          number of various files.
        </p>

        <br />

        <h2>Conclusion</h2>
        <p>
          The Batch Run feature significantly enhances productivity by allowing you to process multiple documents in a
          single operation. This is particularly valuable for tasks like contract analysis, document classification, or
          data extraction across large document sets.
        </p>

        <p>
          If you have any questions or feedback about the Batch Run feature, please reach out to us at{" "}
          <code>support@aibloks.com</code>.
        </p>
      </div>
    </div>
  )
}
