# Exploring datasets in Model HQ
After setup is complete, you’ll land on the **Main Menu**, where you can access all of Model HQ’s features.

One important feature is **Datasets**. This allows you to upload and use structured data files like **CSV** or **JSON** inside your Agents.

Datasets are different from regular document sources. Documents (like PDFs or text files) contain unstructured content. Datasets are built for **structured, table-based data** — meaning rows and columns with clearly defined fields.

When you create a Dataset in Model HQ, you can:

* Upload structured data (CSV or JSON)
* Tell the system which columns contain searchable text
* Identify unique ID columns
* Mark important metrics or key fields
* Identify the key columns that will be used in future agent workflows (i.e., what are the columns you want to interact with or extract information from)

This setup allows your AI agents to:

* Search across structured data
* Filter based on row numbers, keyword, natural langauge query
* Provide classification tasks for each selected or filtered row such as sentiment, emotion, topic or ratings analysis and output in CSV format
* Answer questions, provide summaries of selected results, etc.
* Analyze trends or patterns for a selected column and provide a detailed report in Word format
* Perform data-driven insights and predictions

In short, Datasets let you turn spreadsheets and structured data into intelligent, searchable knowledge bases that your Agents can reason over accurately and efficiently.


## 1. Launching the dataset interface
To begin, the **Dataset** button in the main menu sidebar can be selected.

![dataset](dataset/01_dataset.png)

## 2. Creating a dataset
To create a dataset, the **build new** button can be selected. If previous datasets have been created, both **load existing** and **build new** options will be visible; otherwise, only **build new** will be available.

When `build new` is selected, an interface will be presented where the user can pick the dataset name and the encryption type.


![source](dataset/01_datasetSource.png)

[Rohan, Add screenshot of Create Dataset Dataset Name here after the previous picture]


### 2.1 Adding a Dataset
Once the form is completed, a file upload prompt will be presented. The file should have a well-defined row-column structure and will serve as the dataset source. Supported file types include `.csv`, `xlsx` and `.json`.

[Rohan, add screenshot of Build Dataset Source here]


### 2.1.1 Master schema
If a previous dataset source exists, that dataset can be leveraged to establish a master schema for the current dataset being created. This enables consistency across multiple datasets with similar structures.


### 2.2 Mapping
Once a file is added, the schema will be automatically fetched and mapping will be performed automatically. The mapping can be cross-checked for accuracy and updated as needed to ensure proper field alignment and data type classification.

[Rohan, update screenshot as emailed]

The *Remove Empty Columns* button can be used to remove any columns without data.

The *refresh* icon can be used to restore the dataset to its original state if any changes were made in error.

In addition, by directly making the changes on the custom mapping screen, the user can:

1) Remove unnecessary columns or columns that will not be used - especially useful when working with very large datasets; and
2) Rename columns - especially useful when columns have long names or when the user wants to re-designate a column name

Please be careful to preserve the JSON structure (i.e., quotation marks, colons and commas) when making changes or the dataset will not save properly.

Once the changes are made, the user can select > to proceed to the next step.

### 2.3 Confirm the dataset schema
In this window, confirmation of the dataset schema will be requested. Comprehensive dataset details—including dataset analysis and instructions for dataset setup—will be provided for review.

[Rohan, update screenshot]

### 2.4 Dataset configuration setup
This is a four-step configuration process in which three essential questions will be presented. One or multiple fields from the provided dataset should be selected for each step to define how the dataset will be indexed and queried.

[Rohan, add screenshot]

**Step 1: RAG/Retrieval Columns**
"Which columns have the text to be used for RAG/Retrieval processes?"

Model HQ automatically identifies and checks the column(s) with text data that can be used for text or language queries or analysis. These columns form the basis of semantic search and retrieval in the dataset and can also be used as the basis for analyzing topics, intent, emotion, sentiment, ratings, etc. based on the *text* provided in each row of that column. 

Please make check any additional columns that are suitable for these types of tasks.

[Rohan, add screenshot]

**Selection guidance:**
- **Purpose**: Columns selected here will be indexed for keyword filtering, semantic similarity search, or other AI analyses such as determining topic, sentiment, emotion, ratings, and other classification tasks based on text. When users ask questions, the AI model will also search these columns to find relevant information.
- **Examples**: In a product dataset, columns like "Product Description", "Features", or "Customer Reviews" would be RAG columns. In an HR dataset, columns like "Job Description", "Requirements", or "Responsibilities" would be appropriate for RAG.
- **Multiple selections**: Multiple columns can be selected if textual information is distributed across several fields. For example, a dataset might have both "Title" and "Content" columns that should both be searchable.
- **Impact**: Only columns selected here will be included in the semantic search index. Unselected columns can still be used for filtering or display but won't contribute to relevance ranking.

**Step 2: ID Column**
"Which column(s), if any, represent a unique identifier for each row, e.g., reference number?"

This is for clarifying which ID column is important in identifying the unique records for each row. ID columns establish unique identifiers for each record in the dataset, enabling precise referencing and tracking of individual records during retrieval and analysis.

[Rohan, add screenshot]

**Selection guidance:**
- **Purpose**: ID columns uniquely identify each row in the dataset. They serve as primary keys that distinguish one record from all others.
- **Examples**: In a product dataset, "Product ID" or "SKU" would be ID columns. In a customer database, "Customer ID" or "Email" might serve as identifiers. In a document collection, "Document ID" or "Reference Number" would be appropriate.
- **Single or multiple**: While typically one ID column is preferred, some datasets might use composite IDs (multiple columns together form the unique identifier).
- **Impact**: When results are returned from a query, the ID column helps users identify exactly which records were retrieved. This is crucial for data integrity and tracking.
- **Optional**: If no clear identifier exists, this field can be left empty. The system will still function, but individual record tracking will be less precise.

**Step 3: KPI Definition**
"Define the main performance indicators for the dataset"

Key Performance Indicators (KPIs) are quantifiable metrics that represent important business or analytical values within the dataset. These fields are often used for aggregation, analysis, and prediction tasks.

[Rohan, add screenshot]

**Selection guidance:**
- **Purpose**: KPIs are numerical or categorical fields that represent important metrics or outcomes being tracked. These columns are often used for predictive modeling, trend analysis, and performance evaluation.
- **Examples**: In a sales or marketing dataset, KPIs might include "Ratings", "Revenue", "Sales Amount", "Conversion Rate", or "Customer Lifetime Value". In a healthcare dataset, KPIs could be "Patient Recovery Time", "Treatment Success Rate", or "Cost per Treatment". In an analytics dataset, "Click-Through Rate", "Engagement Score", or "User Growth" would be KPIs.
- **Multiple indicators**: Several KPI columns can be defined if the dataset tracks multiple important metrics. For instance, an e-commerce dataset might have both "Sales" and "Customer Satisfaction Score" as KPIs.
- **Numerical vs. Categorical**: KPIs are typically numerical (like revenue or count), but categorical KPIs (like "Status: Active/Inactive") can also be important for analysis.
- **Impact**: Designated KPIs enable the AI model to focus analysis and predictions on the most business-critical fields. They also facilitate comparative analysis and trend tracking over time.

Once these three steps are completed, confirmation of the dataset configuration will be requested again.

![source](dataset/06_datasetSourceConfirmConfig.png)

**Step 4: Agent Input**
"Define the key columns that should be shared in Agent processes"

This selection is critical for identifying the columns that will be shared as actionable data in the Agent process for this dataset. Only the selected columns will be displayed as an option in Agents when this dataset is attached to agent processes as a file source. It is highly recommended that you select only those columns you will actively work with to query, analyze or interact with in agents, as a bulky column structure can be cumbersome when creating workflows.

[Rohan, add screenshot]

**Confirm Build Index**

Once the Dataset Index has been configured and verified, confirm the *Yes* or Select *No* if you wish to make any edits to the previous selection. 

[Rohan add screenshot]

Once you confirm the Dataset Index by selecting *Yes*, you will see a Dataset Configuration Screen for the dataset.

[Rohan add screenshot]


### 2.5 Search
The search functionality for dataset sources operates identically to the standard source search described in the [Source documentation](). Queries can be formulated using semantic search (returns the top 20 matches), keyword-based matching, or exact phrase matching to retrieve relevant records from the dataset.

### 2.6 Test Set (BETA) (may not be in some versions)
The **Train** option enables a target variable to be defined that will be predicted or fitted using a machine learning model. This feature allows predictive models to be built on dataset columns. 

![source](dataset/08_datasetSourceTrain.png)

In this step, the **train variable** (for example, a target outcome column) that represents the output the model should learn to predict can be specified.

* **Train Variable**
  The name of the column to be used as the training target should be entered. This is the variable that the ML model will attempt to predict based on other features in the dataset.

  * If the column already exists in the dataset, it will be used directly.
  * If the column name does not exist in the current schema, it will be added.
  * If the field is left blank, the training configuration will be ignored and no ML model will be trained.

> [!NOTE]
> The train variable should be a column that has clear, well-defined values. Sparse or incomplete columns may result in poor model performance.

After clicking next, confirmation will be requested to finalize and begin training an ML model on this dataset with the specified target variable.

### 2.7 Analyze

This provides an overview analysis of the Dataset. By expanding the *Analysis* tab, users can find analysis of various mean, standard deviation, min and max information, avg length, KPI column information and other analytical information about the dataset.

[Rohan add screenshot]

### Dataset Download Icon

Downloads the CSV of the newly configured dataset.

### Dataset Information Icon

Provides detailed information on the original dataset such as the row count, column count and schema.

### Dataset Trash Icon

Allows user to delete a specific dataset from Model HQ.

## Conclusion

This document described how to work with datasets in Model HQ, a specialized feature designed for structured data sources such as CSV and JSON files. Once configured, datasets provide a complete workflow from data ingestion through search, analysis, classification and use in agent workflows. 
