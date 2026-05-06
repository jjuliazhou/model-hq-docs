import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DocPageLayout } from "@/components/doc-page-layout"
import { RelatedVideos } from "@/components/related-videos"
import { references } from "./references"

export default function DatasetPage() {
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
            <BreadcrumbPage>Dataset</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Exploring datasets in Model HQ</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          After the initial setup is complete, the <strong>Main Menu</strong> will be presented, from which all of Model HQ&apos;s features — including <strong>Datasets</strong> — can be accessed.
        </p>

        <p>
          <strong>Datasets</strong> is a feature designed for working with structured data files such as <strong>CSV</strong>, <strong>XLSX</strong>, and <strong>JSON</strong> directly within AI agent workflows. Unlike regular document sources — which handle unstructured content such as PDFs or text files — datasets are built for <strong>structured, table-based data</strong>, meaning rows and columns with clearly defined fields.
        </p>

        <p>
          When a dataset is created in Model HQ, the following configuration steps are completed:
        </p>

        <ul>
          <li>Structured data (CSV, XLSX, or JSON) is uploaded as the dataset source.</li>
          <li>The columns containing searchable text are identified for RAG/retrieval indexing.</li>
          <li>A unique ID column is designated for precise record referencing.</li>
          <li>Key performance indicator (KPI) fields are marked for analytical and predictive tasks.</li>
          <li>The columns most relevant to agent workflows are selected to streamline interaction.</li>
        </ul>

        <p>
          Once configured, datasets enable AI agents to perform a wide range of data-driven operations:
        </p>

        <ul>
          <li>Structured data can be searched across rows using semantic, keyword, or exact-phrase queries.</li>
          <li>Results can be filtered by row number, keyword match, or natural language query.</li>
          <li>Classification tasks — such as sentiment, emotion, topic, or ratings analysis — can be applied to selected rows, with output exported in CSV format.</li>
          <li>Questions can be answered and summaries generated from filtered results.</li>
          <li>Trend and pattern analysis can be performed on selected columns, with detailed reports produced in Word format.</li>
          <li>Data-driven insights and predictions can be generated from designated KPI fields.</li>
        </ul>

        <p>
          In summary, the Datasets feature transforms spreadsheets and structured data files into intelligent, searchable knowledge bases that AI agents can reason over with accuracy and efficiency.
        </p>

        <RelatedVideos
          title="Watch: Datasets & Structured Data"
          description="See CSVs, spreadsheets, and structured data turned into AI-powered workflows."
          videoIds={[
            "K1JaG9AwORE",
            "9YP-nDhXRJY",
            "cd_08qQ5Z2o",
            "T1AOuUF7oQ8",
          ]}
        />

        <h2 id="quick-setup">Quick setup</h2>

        <p>
          The following animation provides an overview of the full dataset creation and configuration workflow — from launching the interface to completing the four-step index configuration.
        </p>

        <img src="/v1/dataset/dataset.gif" alt="dataset setup overview" />

        <p>
          For a detailed walkthrough of each step, refer to the sections below.
        </p>

        <h2 id="1-launching-the-dataset-interface">1. Launching the dataset interface</h2>

        <p>
          To begin, the <strong>Dataset</strong> button in the main menu sidebar can be selected.
        </p>

        <img src="/v1/dataset/01_dataset.png" alt="dataset" />

        <h2 id="2-creating-a-dataset">2. Creating a dataset</h2>

        <p>
          To create a dataset, the <strong>Build New</strong> button can be selected. If datasets have been created previously, both <strong>Load Existing</strong> and <strong>Build New</strong> options will be visible; otherwise, only <strong>Build New</strong> will be available.
        </p>

        <p>
          When <strong>Build New</strong> is selected, a creation interface will be presented in which a dataset name and encryption type can be specified.
        </p>

        <img src="/v1/dataset/01_datasetSource.png" alt="source" />

        <img src="/v1/dataset/02_datasetCreate.png" alt="source" />

        <h3 id="21-adding-a-dataset">2.1 Adding a dataset</h3>

        <p>
          Once the creation form is completed, a file upload prompt will be presented. The file should have a well-defined row-column structure and will serve as the dataset source. Supported file types include <code>.csv</code>, <code>.xlsx</code>, and <code>.json</code>.
        </p>

        <img src="/v1/dataset/02_datasetBuild.png" alt="source" />

        <h3 id="211-master-schema">2.1.1 Master schema</h3>

        <p>
          If a previous dataset source exists, it can be leveraged to establish a master schema for the dataset currently being created. This enables structural consistency across multiple datasets with similar field layouts.
        </p>

        <h3 id="22-mapping">2.2 Mapping</h3>

        <p>
          Once a file has been added, the schema will be automatically fetched and field mapping will be performed. The mapping can be reviewed for accuracy and updated as needed to ensure proper field alignment and data type classification.
        </p>

        <img src="/v1/dataset/04_datasetSourceMapping.png" alt="source" />

        <p>
          The <strong>Remove Empty Columns</strong> button can be used to remove any columns that contain no data.
        </p>

        <p>
          The <strong>refresh</strong> icon can be used to restore the dataset to its original state if any changes were made in error.
        </p>

        <p>
          Additionally, through the custom mapping screen, the following manual adjustments can be made:
        </p>

        <ol>
          <li>Unnecessary columns — particularly those that will not be used in agent workflows — can be removed. This is especially useful when working with large datasets.</li>
          <li>Columns can be renamed, which is helpful when original column names are lengthy or when a more descriptive designation is preferred.</li>
        </ol>

        <blockquote data-type="note">
            <p>Care should be taken to preserve the JSON structure (i.e., quotation marks, colons, and commas) when making manual edits to the mapping. Malformed JSON will prevent the dataset from saving correctly.</p>
        </blockquote>

        <p>
          Once the mapping has been reviewed and adjusted, the <strong>&gt;</strong> button can be selected to proceed to the next step.
        </p>

        <h3 id="23-confirm-the-dataset-schema">2.3 Confirm the dataset schema</h3>

        <p>
          In this step, confirmation of the dataset schema will be requested. Comprehensive dataset details — including an automated dataset analysis and instructions for dataset setup — will be provided for review before proceeding.
        </p>

        <img src="/v1/dataset/05_datasetSourceConfirm.png" alt="source" />

        <h3 id="24-dataset-configuration-setup">2.4 Dataset configuration setup</h3>

        <p>
          This is a four-step configuration process in which three foundational questions will be presented. One or more fields from the dataset should be selected at each step to define how the dataset will be indexed and queried.
        </p>

        <img src="/v1/dataset/06_datasetConfig.png" alt="source" />

        <p>
          <strong>Step 1: RAG/retrieval columns</strong>
          <br />
          <em>"Which columns have the text to be used for RAG/Retrieval processes?"</em>
        </p>

        <p>
          Model HQ automatically identifies and pre-selects column(s) containing text data suitable for language queries and analysis. These columns form the basis of semantic search and retrieval within the dataset, and can also serve as the foundation for AI-driven classification tasks such as topic detection, intent recognition, sentiment analysis, emotion detection, and ratings evaluation — applied to the text content of each row.
        </p>

        <p>
          Any additional columns suitable for these types of tasks should be checked before proceeding.
        </p>

        <img src="/v1/dataset/06_datasetConfig2.png" alt="source" />

        <p>
          <strong>Selection guidance:</strong>
        </p>

        <ul>
          <li><strong>Purpose</strong>: Columns selected here will be indexed for keyword filtering, semantic similarity search, and AI analyses such as topic classification, sentiment, emotion, and ratings evaluation. These columns are also searched when natural language questions are posed to the dataset.</li>
          <li><strong>Examples</strong>: In a product dataset, columns such as "Product Description", "Features", or "Customer Reviews" would be appropriate RAG columns. In an HR dataset, columns like "Job Description", "Requirements", or "Responsibilities" would be suitable.</li>
          <li><strong>Multiple selections</strong>: Multiple columns can be selected when textual information is distributed across several fields — for example, a dataset may contain both "Title" and "Content" columns that should both be indexed.</li>
          <li><strong>Impact</strong>: Only columns selected here will be included in the semantic search index. Unselected columns can still be used for filtering or display purposes, but will not contribute to relevance ranking.</li>
        </ul>

        <p>
          <strong>Step 2: ID column</strong>
          <br />
          <em>"Which column(s), if any, represent a unique identifier for each row, e.g., reference number?"</em>
        </p>

        <p>
          An ID column serves as the primary key for each record in the dataset, enabling precise referencing and tracking of individual rows during retrieval and analysis.
        </p>

        <img src="/v1/dataset/06_datasetId.png" alt="source" />

        <p>
          <strong>Selection guidance:</strong>
        </p>

        <ul>
          <li><strong>Purpose</strong>: ID columns uniquely identify each row in the dataset. They serve as primary keys that distinguish one record from all others.</li>
          <li><strong>Examples</strong>: In a product dataset, "Product ID" or "SKU" would serve as ID columns. In a customer database, "Customer ID" or "Email" might function as identifiers. In a document collection, "Document ID" or "Reference Number" would be appropriate.</li>
          <li><strong>Single or multiple</strong>: While a single ID column is typically preferred, some datasets may use composite identifiers in which multiple columns together form a unique key.</li>
          <li><strong>Impact</strong>: When query results are returned, the ID column allows users to identify exactly which records were retrieved — a critical factor for data integrity and downstream processing.</li>
          <li><strong>Optional</strong>: If no clear identifier exists in the dataset, this field can be left empty. The system will still function, though individual record tracking will be less precise.</li>
        </ul>

        <p>
          <strong>Step 3: KPI definition</strong>
          <br />
          <em>"Define the main performance indicators for the dataset"</em>
        </p>

        <p>
          Key Performance Indicators (KPIs) are quantifiable metrics that represent important business or analytical values within the dataset. These fields are typically used for aggregation, trend analysis, predictive modeling, and performance evaluation tasks.
        </p>

        <img src="/v1/dataset/06_datasetKPI.png" alt="source" />

        <p>
          <strong>Selection guidance:</strong>
        </p>

        <ul>
          <li><strong>Purpose</strong>: KPIs are numerical or categorical fields that represent important metrics or measurable outcomes. These columns are prioritized for predictive modeling, trend detection, and performance benchmarking.</li>
          <li><strong>Examples</strong>: In a sales or marketing dataset, KPIs might include "Ratings", "Revenue", "Sales Amount", "Conversion Rate", or "Customer Lifetime Value". In a healthcare dataset, relevant KPIs could be "Patient Recovery Time", "Treatment Success Rate", or "Cost per Treatment". In an analytics dataset, "Click-Through Rate", "Engagement Score", or "User Growth" would be appropriate KPIs.</li>
          <li><strong>Multiple indicators</strong>: Several KPI columns can be designated when the dataset tracks more than one important metric — for example, an e-commerce dataset might define both "Sales" and "Customer Satisfaction Score" as KPIs.</li>
          <li><strong>Numerical vs. categorical</strong>: KPIs are typically numerical (such as revenue or count), but categorical KPIs (such as "Status: Active/Inactive") can also be meaningful for classification and analysis.</li>
          <li><strong>Impact</strong>: Designated KPIs allow the AI model to focus analytical and predictive operations on the most business-critical fields, enabling more targeted insights and comparative trend tracking.</li>
        </ul>

        <p>
          Once the three configuration steps are completed, a final review of the dataset configuration will be presented for confirmation.
        </p>

        <img src="/v1/dataset/06_datasetSourceConfirmConfig.png" alt="source" />

        <p>
          <strong>Step 4: Agent input</strong>
          <br />
          <em>"Define the key columns that should be shared in Agent processes"</em>
        </p>

        <p>
          This step identifies the columns that will be exposed as actionable data within agent workflows. Only the columns selected here will be available when the dataset is attached to an agent as a file source. It is recommended that only the columns intended for active querying, analysis, or interaction in agents be selected — a leaner column structure results in more focused and manageable agent workflows.
        </p>

        <p>
          <strong>Confirm build index</strong>
        </p>

        <p>
          Once the dataset index has been configured and reviewed, confirmation can be submitted by selecting <strong>Yes</strong>. If further edits to any previous step are required, <strong>No</strong> can be selected to return and make adjustments.
        </p>

        <p>
          Upon confirming by selecting <strong>Yes</strong>, the Dataset Configuration screen for the newly created dataset will be displayed.
        </p>

        <img src="/v1/dataset/10_datasetConfig.png" alt="source" />

        <h3 id="25-search">2.5 Search</h3>

        <p>
          The search functionality for dataset sources operates identically to the standard source search described in the [Source documentation](). Queries can be formulated using semantic search (which returns the top 20 matches), keyword-based matching, or exact phrase matching to retrieve relevant records from the dataset.
        </p>

        <h3 id="26-test-set-beta-may-not-be-available-in-all-versions">2.6 Test set (BETA) (may not be available in all versions)</h3>

        <p>
          The <strong>Test</strong> option enables a target variable to be defined that will be predicted or fitted using a machine learning model. This feature allows predictive models to be built and evaluated against dataset columns.
        </p>

        <img src="/v1/dataset/08_datasetSourceTrain.png" alt="source" />

        <p>
          In this step, the <strong>train variable</strong> — for example, a target outcome column — that represents the output the model should learn to predict can be specified.
        </p>

        <ul>
          <li><strong>Train variable</strong>: The name of the column to be used as the training target should be entered. This is the variable the ML model will attempt to predict based on the other features present in the dataset.
            <ul>
              <li>If the column already exists in the dataset, it will be used directly.</li>
              <li>If the column name does not exist in the current schema, it will be added.</li>
              <li>If the field is left blank, the training configuration will be ignored and no ML model will be trained.</li>
            </ul></li>
        </ul>

        <blockquote data-type="note">
            <p>The train variable should correspond to a column with clear, well-defined values. Sparse or incomplete columns may result in degraded model performance.</p>
        </blockquote>

        <p>
          Once the target variable has been specified, confirmation will be requested to finalize and begin training an ML model on the dataset.
        </p>

        <h3 id="27-analyze">2.7 Analyze</h3>

        <p>
          The <strong>Analyze</strong> tab provides an overview analysis of the dataset. By expanding the <em>Analysis</em> section, statistical information can be reviewed — including mean, standard deviation, minimum and maximum values, average text length, KPI column summaries, and other analytical metadata about the dataset.
        </p>

        <img src="/v1/dataset/09_datasetAnalysis.png" alt="source" />

        <h3 id="download-dataset">Download dataset</h3>

        <p>
          The CSV of the configured dataset can be downloaded by selecting the download icon in the dataset interface.
        </p>

        <h3 id="dataset-information">Dataset information</h3>

        <p>
          Detailed information about the original dataset — including row count, column count, and the full schema — can be reviewed by selecting the <strong>i</strong> icon.
        </p>

        <h3 id="delete-dataset">Delete dataset</h3>

        <p>
          A specific dataset can be permanently removed from Model HQ by selecting the delete option associated with that dataset in the interface.
        </p>

        <h2 id="conclusion">Conclusion</h2>

        <p>
          This document described how to work with the Datasets feature in Model HQ — a specialized capability designed for structured data sources such as CSV, XLSX, and JSON files. Once a dataset has been created and configured through the four-step index setup, it becomes a queryable, AI-ready knowledge base that can be attached to agent workflows for search, classification, analysis, and prediction tasks.
        </p>

        <p>
          The configuration process — covering RAG/retrieval columns, ID columns, KPI definitions, and agent input columns — ensures that the AI model has the structural context needed to reason over the data accurately. It is recommended to invest care in the initial mapping and column selection steps, as these decisions directly influence retrieval quality and agent performance.
        </p>

        <p>
          For information on how datasets can be used within agent workflows, refer to the [WILL BE ADDED SOON].
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