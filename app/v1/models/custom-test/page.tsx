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

export default function HowToUseAndCreateACustomTestForModelInferencingPage() {
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
              <BreadcrumbPage>Use and Create a Custom Test for Model Inferencing</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">How to Use and Create a Custom Test for Model Inferencing</h1>
        </div>

        <div className="prose prose-gray max-w-none">
          <p>
            Before deploying a model to production or using it for critical tasks, it is important to validate its performance and behavior across different scenarios. Model HQ provides a comprehensive testing framework designed to enable users to evaluate, benchmark, and validate model performance in a controlled and reproducible manner. Whether the goal is to verify basic functionality with quick experiments, establish performance baselines, or evaluate model responses against custom datasets, the testing tools available in Model HQ can accommodate a wide range of testing requirements and workflows.
          </p>

          <img src="/v1/models/customTest/01_test.png" alt="customTest" />

          <h2 id="1-overview">1. Overview</h2>

          <p>
            Model HQ's testing framework includes three distinct testing modes, each suited to different validation scenarios and user preferences. This section describes the available test types, file upload requirements, and the action buttons used to execute tests. The testing interface is designed to accommodate different use cases, from quick exploratory testing to structured batch evaluations with custom datasets.
          </p>

          <h3 id="11-test-types">1.1 Test types</h3>

          <p>
            The testing mode defines how the model will be evaluated. Three options are available to suit different testing requirements:
          </p>

          <ol>
            <li><strong>Sandbox</strong> The Sandbox mode runs an interactive test session that allows real-time experimentation.
              <ul>
                <li>Best suited for quick experimentation.</li>
                <li>Manual prompts can be entered and responses inspected in real time.</li>
                <li>This is the default option for exploratory testing.</li>
              </ul></li>
          </ol>

          <ol>
            <li><strong>Standard</strong> The Standard mode runs a predefined, system-controlled test using one of LLMWare's pre-made datasets, which are largely designed to test a model's capability for RAG comprehension and answer generation.
              <ul>
                <li>Useful for repeatable validation checks.</li>
                <li>No custom input files are required.</li>
                <li>Suitable for baseline validation.</li>
              </ul></li>
          </ol>

          <ol>
            <li><strong>Custom</strong> The Custom mode allows tests to be run using user-provided data.
              <ul>
                <li>Batch evaluation is enabled.</li>
                <li>A JSON or CSV file must be uploaded.</li>
                <li>Designed for structured testing and benchmarking.</li>
              </ul></li>
          </ol>

          <h3 id="12-file-upload">1.2 File upload</h3>

          <p>
            File upload is used exclusively when the Custom test type is selected. The uploaded file provides the test dataset that will be used for evaluation.
          </p>

          <ul>
            <li>A JSON or CSV file can be uploaded.</li>
            <li>CSV files must include headers: <code>query</code>, <code>context</code>, <code>answer</code>.</li>
            <li>JSON files must contain entries with keys: <code>query</code>, <code>context</code>, <code>answer</code>.</li>
            <li>Each row or entry represents one test case.</li>
          </ul>

          <h3 id="13-action-buttons">1.3 Action buttons</h3>

          <p>
            The testing interface provides several action buttons to control test execution and file generation.
          </p>

          <h4 id="131-run-test-">1.3.1 Run test (&gt;)</h4>

          <p>
            The Run Test button initiates the selected test type using the current configuration.
          </p>

          <ul>
            <li>Sandbox, Standard, or Custom tests can be executed.</li>
            <li>If Custom mode is selected, the uploaded file will be used.</li>
          </ul>

          <h4 id="132-generate-sample">1.3.2 Generate sample</h4>

          <p>
            The Generate Sample button automatically creates a sample test file.
          </p>

          <ul>
            <li>This helps users understand the expected file format.</li>
            <li>Useful as a starting template for custom tests.</li>
          </ul>

          <h4 id="133-mapper">1.3.3 Mapper</h4>

          <p>
            The Mapper button opens the field mapping interface for custom test files.
          </p>

          <ul>
            <li>Mapping of uploaded file columns to required fields can be configured.</li>
            <li>Useful when column names do not exactly match expected keys (<code>query</code>, <code>answer</code>, <code>context</code>).</li>
            <li>Schema-related test failures can be prevented.</li>
            <li>Existing datasets can be used without reformatting.</li>
          </ul>

          <p>
            Default mapping values:
          </p>

          <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm">{`{
 "query": "query",
 "answer": "answer",
 "context": "context"
}
`}</code>
          </pre>

          <blockquote data-type="important">
            <p>When using a custom dataset, the schema should be mapped to the expected fields: <code>query</code>, <code>answer</code>, and <code>context</code>. Note: <code>query</code> input is required, while <code>answer</code> and <code>context</code> are optional.</p>
          </blockquote>

          <h2 id="2-creating-a-custom-test">2. Creating a custom test</h2>

          <p>
            This section describes how custom tests can be created using Model HQ's testing framework. Two primary workflows are available: generating test samples automatically or using existing CSV/JSON files with the custom mapper.
          </p>

          <h3 id="21-generating-custom-test-samples">2.1 Generating custom test samples</h3>

          <p>
            A sample test file can be created automatically to help users understand the expected format and structure. This feature can be accessed under:
          </p>

          <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm">Models {'>'} [Select Model from Dropdown] {'>'} Test {'>'} Generate Sample
            </code>
          </pre>

          <p>
            When the Generate Sample option is selected, a text box will prompt the user to specify the test sample that should be created.
          </p>

          <img src="/v1/models/customTest/02_customTestQuestion.png" alt="customTest" />

          <p>
            Once the query is input, a JSON test set will be created and displayed in an editor interface.
          </p>

          <img src="/v1/models/customTest/03_customTestEditor.png" alt="customTest" />

          <p>
            The auto-generated test set can be reviewed, edited, and modified directly on the screen if desired. After review, clicking "{'>'}" will prompt the user to either download the test set for later use or run the test immediately.
          </p>

          <img src="/v1/models/customTest/04_customTestSet.png" alt="customTest" />

          <p>
            If the "RUN the TEST" option is selected, the model will be tested using the test set that was just created. This test will provide information about token usage, processing time, and first token speed.
          </p>

          <img src="/v1/models/customTest/05_customTestAndRun.png" alt="customTest" />

          <p>
            Once the test is complete, the option to either download the test results or return home will be presented.
          </p>

          <blockquote data-type="note">
            <p>The model will download prior to testing unless the model has already been downloaded and is available in the user's cache. Download time depends on model size and network speed.</p>
          </blockquote>

          <h3 id="22-using-existing-datasets-with-custom-mapper">2.2 Using existing datasets with custom mapper</h3>

          <p>
            For users who have existing CSV or JSON files that they would like to use as test datasets, the Custom Mapper feature provides a streamlined workflow.
          </p>

          <ul>
            <li>Mapping of uploaded file columns to required fields can be configured.</li>
            <li>Expected keys can be quickly and exactly matched for fast testing without having to re-create a complex CSV.</li>
            <li>Schema-related test failures can be prevented.</li>
            <li>Existing datasets can be used without reformatting.</li>
          </ul>

          <p>
            This feature can be accessed under:
          </p>

          <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm">Models {'>'} [select model] {'>'} Test {'>'} Mapper
            </code>
          </pre>

          <p>
            Default mapping values are as follows:
          </p>

          <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm">{`{
 "query": "query",
 "answer": "answer",
 "context": "context"
}
`}</code>
          </pre>

          <p>
            The mapping values represent:
          </p>

          <ul>
            <li><strong>Query</strong>: The test question.</li>
            <li><strong>Answer</strong>: The gold answer or correct answer to the test question.</li>
            <li><strong>Context</strong>: Any additional context or instructions to the model for running the test.</li>
          </ul>

          <h4 id="221-example-workflow">2.2.1 Example workflow</h4>

          <p>
            To demonstrate the custom mapper workflow, an example using the Salesworkload CSV file is provided. This file is included as part of the test files in Model HQ and can be accessed via:
          </p>

          <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
            <code className="text-sm">C:\Users\[user name]\llmware_data\sample_tables\salesworkload.csv
            </code>
          </pre>

          <img src="/v1/models/customTest/06_customTestFilePath.png" alt="customTest" />

          <p>
            This sample CSV contains representative sales data for a retailer. To test whether the model can accurately determine the country of a physical store based on the city, the mapping values can be configured accordingly.
          </p>

          <p>
            For this test, the "query", "answer", and "context" values on the right-hand side should be mapped to the correct columns as shown, and "Apply Mappings" should be selected.
          </p>

          <img src="/v1/models/customTest/07_customTestMapping.png" alt="customTest" />

          <p>
            The next screen will prompt the user to select a file. The <strong>Custom</strong> button should be selected, and the file to be used as the test set should be chosen. Clicking "{'>'}" will start the test.
          </p>

          <img src="/v1/models/customTest/08_customTestChosenFile.png" alt="customTest" />

          <p>
            The model will process each row of the test and provide the response to the query, along with other helpful information such as processing time and first token speed.
          </p>

          <img src="/v1/models/customTest/09_customTestResults.png" alt="customTest" />

          <h3 id="23-stopping-a-model-test">2.3 Stopping a model test</h3>

          <p>
            A model test can be stopped at any time by clicking "X".
          </p>

          <h3 id="24-file-upload-requirements">2.4 File upload requirements</h3>

          <p>
            When using the Custom test type, the following file requirements should be observed:
          </p>

          <ul>
            <li>A JSON or CSV file can be uploaded.</li>
            <li>CSV files must include headers: <code>query</code>, <code>context</code>, <code>answer</code>.</li>
            <li>JSON files must contain entries with keys: <code>query</code>, <code>context</code>, <code>answer</code>.</li>
            <li>Each row or entry represents one test case.</li>
          </ul>

          <h2 id="conclusion">Conclusion</h2>

          <p>
            This section described Model HQ's testing framework and how custom tests can be created and executed. Three testing modes are available: Sandbox for interactive experimentation, Standard for predefined validation checks, and Custom for structured batch evaluations with user-provided datasets. The Generate Sample feature allows test templates to be created automatically, while the Custom Mapper enables existing CSV or JSON files to be used without reformatting. These tools provide flexible options for validating model performance across different use cases and datasets.
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
