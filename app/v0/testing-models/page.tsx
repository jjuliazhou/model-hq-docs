import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function TestingModelsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Testing Models</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Testing Models in Model HQ</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          This guide explains how to test models within <strong>Model HQ</strong>. You will learn how to launch the
          testing interface, select a model, configure test options, and use additional features such as mapping and
          sample generation.
        </p>

        <p>&nbsp;</p>

        <h2 id="lauching-test-interface">1. Launching the Test Interface</h2>

        <ol>
          <li>
            From the <strong>main menu</strong>, click on <strong>Models</strong>.
            <br />
            <img src="/v0/test/models.png" alt="models" />
          </li>
          <li>
            Then, click on the <strong>Test</strong> button.
            <br />
            <img src="/v0/test/test.png" alt="test" />
          </li>
        </ol>

        <p>&nbsp;</p>

        <h2>2. Selecting a Model</h2>

        <p>
          After clicking <strong>Test</strong>, you will be prompted to select a model.
        </p>

        <img src="/v0/test/selectModel.png" alt="selectModel" />

        <p></p>

        <ul>
          <li>
            Use the dropdown menu to view available models. They are arranged from{" "}
            <strong>lower to higher parameter sizes</strong>.
          </li>
          <li>
            If you are unsure which model to choose, click <strong>Choose for me</strong>, and Model HQ will
            automatically select the most suitable model based on your{" "}
            <a href="https://model-hq-docs.vercel.app/system-configuration">system specification</a>.
          </li>
        </ul>

        <blockquote data-type="tip">
          <p>
            For demonstration, the <code>llama-3.2-1b</code> model has been selected.
          </p>
        </blockquote>

        <p>&nbsp;</p>

        <h2 id="configuring-test-options">3. Configuring Test Options</h2>

        <p>
          Once a model is selected, you will be taken to the <strong>Test Options</strong> interface.
        </p>

        <img src="/v0/test/testOptions.png" alt="testOptions" />

        <p></p>

        <p>Here, you can choose from three test types:</p>

        <ol>
          <li>
            <strong>Sandbox</strong> – Manual testing through direct queries.
          </li>
          <li>
            <strong>Standard</strong> – Predefined test samples provided by Model HQ.
          </li>
          <li>
            <strong>Custom</strong> – Upload your own dataset in JSON or CSV format.
          </li>
        </ol>

        <h3 id="sandbox-testing">Sandbox Testing</h3>

        <ol>
          <li>
            Select <strong>Sandbox Testing</strong> (auto-selected by default).
          </li>
          <li>
            Enter a query in the provided text area.
            <br />
            <img src="/v0/test/sandboxPrompt.png" alt="sandbox" />
          </li>
          <li>
            Click <strong>{">"}</strong> to run the test.
            <br />
            <img src="/v0/test/sandboxResults.png" alt="sandbox" />
          </li>
        </ol>

        <p>
          If the output is unexpected, please reach out to us at{" "}
          <strong>
            <a href="mailto:support@aibloks.com">support@aibloks.com</a>
          </strong>
          .
        </p>

        <h3 id="standard-testing">Standard Testing</h3>

        <ol>
          <li>
            Select <strong>Standard Testing</strong>.
            <br />
            <img src="/v0/test/standardTesting.png" alt="standard" />
          </li>
          <li>
            Tests will run automatically using preloaded sample data in Model HQ.
            <br />
            <img src="/v0/test/standardResults.png" alt="standardResults" />
          </li>
        </ol>

        <h3 id="custom-testing">Custom Testing</h3>

        <ol>
          <li>
            Select <strong>Custom Testing</strong>.
            <br />
            <img src="/v0/test/customTesting.png" alt="customTesting" />
          </li>
          <li>Upload your dataset (JSON or CSV).</li>
          <li>
            Click <strong>{">"}</strong> to begin testing.
            <br />
            <img src="/v0/test/customResults.png" alt="customResults" />
          </li>
        </ol>

        <p>
          <strong>Custom Dataset Requirements</strong>
        </p>

        <ul>
          <li>
            <strong>CSV</strong>: Must include headers with columns <code>query</code>, <code>context</code>, and{" "}
            <code>answer</code>.
          </li>
          <li>
            <strong>JSON</strong>: Must include rows with <code>query</code>, <code>context</code>, and{" "}
            <code>answer</code> keys.
            <br />
            Example:
            <pre>
              <code>{`{
  "query": "What is the capital of France?",
  "answer": "Paris",
  "context": "France is a country in Europe."
}`}</code>
            </pre>
          </li>
          <li>
            The <strong>Mapper</strong> tool allows you to align your dataset schema with Model HQ's expected format.
          </li>
        </ul>

        <p>&nbsp;</p>

        <h2>Additional Features</h2>

        <h3 id="mapper">Mapper</h3>

        <p>
          If you are using a custom dataset, click <strong>Mapper</strong> to align your schema to Model HQ's required
          format.
        </p>

        <ul>
          <li>
            <strong>Required field</strong>: <code>query</code>
          </li>
          <li>
            <strong>Optional fields</strong>: <code>answer</code>, <code>context</code>
          </li>
        </ul>

        <img src="/v0/test/mapper.png" alt="mapper" />

        <p>&nbsp;</p>

        <h3 id="generate-sample">Generate Sample</h3>

        <p>
          The <strong>Generate Sample</strong> feature allows you to automatically create test cases.
        </p>

        <img src="/v0/test/generateSample.png" alt="generateSample" />

        <blockquote>
          <p>
            Keep sample sets under <strong>20 entries</strong> for optimal results.
          </p>
        </blockquote>

        <p>
          <strong>Steps to Generate:</strong>
        </p>

        <ol>
          <li>
            Enter a prompt such as:
            <br />
            <em>"Write 10 samples about U.S. states asking for their capitals."</em>
            <br />
            <img src="/v0/test/samplePrompt.png" alt="samplePrompt" />
          </li>
          <li>
            Click <strong>{">"}</strong> to generate samples in JSON format.
            <br />
            <img src="/v0/test/generatedSample.png" alt="generatedSample" />
          </li>
          <li>Once generated, download the dataset.</li>
          <li>
            The generated samples are already mapped and ready to use.
            <br />
            <img src="/v0/test/mappedSample.png" alt="mappedSample" />
          </li>
          <li>
            Click <strong>{">"}</strong> to begin testing with the generated dataset.
          </li>
        </ol>

        <p>&nbsp;</p>

        <h2>Tips & Best Practices</h2>

        <ol>
          <li>
            After configuring tests, click <strong>{">"}</strong>.
            <ul>
              <li>
                If the model is not yet downloaded, it will be fetched from the Model HQ Model Catalog (requires
                internet).
              </li>
              <li>
                If already available locally, it will load directly.
                <br />
                <img src="/v0/test/loadModel.png" alt="loadModel" />
              </li>
            </ul>
          </li>
          <li>
            You can also <strong>download test results</strong> for offline review and analysis.
          </li>
        </ol>

        <p>&nbsp;</p>

        <h2>Conclusion</h2>

        <p>
          Model HQ makes it easy to test models using sandbox queries, built-in samples, or your own datasets. You can
          further enhance testing with mapping tools and automated sample generation.
        </p>

        <p>
          For questions, issues, or feedback, please contact us at <code>support@aibloks.com</code>.
        </p>
      </div>
    </div>
  )
}
