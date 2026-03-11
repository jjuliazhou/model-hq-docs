# RAG Bot
The RAG Bot offers a fast and flexible way to analyze and extract insights from enterprise documents like executive employment agreements, MSAs, and NDAs. Using a Retrieval-Augmented Generation (RAG) architecture, this bot supports multiple modes of interaction including chatbot, agent, batch processing, and API integration; making it ideal for business users, analysts, and developers alike. With no setup code required, users can quickly ask natural language questions, run multi-step agent workflows, and scale analysis across large volumes of documents, all from a single no-code platform.

This walkthrough is also demonstrated step-by-step on our YouTube video "Private AI for Document Analysis in AI PC": [https://youtu.be/uy53WKrMOXc](https://youtu.be/FSjpAgIZnPM)

## Use Case

Analyze and extract key information from executive employment agreements (a stand-in for many enterprise documents like MSAs, NDAs, research papers, etc.) using Model HQ’s **Chat**, **Agent**, and **API** modes.

&nbsp;

## Prerequisites

* Model HQ installed locally
* A set of executive employment agreement PDFs (located at:
  `C:\users\[username]\llmware_data\sample_files\agreements\[list of 12 executive employment agreements]`)
* An AI PC or local server
* *(Optional)* Python development environment for API integration

&nbsp;

## Step-by-Step Recipe

### 1. Start with Local Chatbot Mode (Fast Start)

**Purpose**: Quickly chat with a document using an out-of-the-box RAG bot.

#### Steps:

* Launch Model HQ locally
* Open the **Fast Start**, select **Medium Chatbot**
* Attach an Executive Employment Agreement document
  (e.g., 15-page PDF found at:
  `C:\users\[username]\llmware_data\sample_files\agreements\`)
* Model HQ auto-ingests, parses, and chunks the document (\~1s)
* Ask natural language questions like:

  * “What’s the effective date of the agreement?”
  * “How many vacation days is the executive entitled to?”
  * “What is the executive’s annual base salary?”

Model HQ will return:

* Detailed answers
* Source page references
* Option to save/download chat transcripts

&nbsp;

### 2. Run Agent-Based Analysis (Single Document)

**Purpose**: Automate multi-step document review using a reusable agent.

#### Steps:

* Switch to **Agent Mode** from Home
* Select the built-in **Contract Analyzer Agent**
* Upload a document from the `agreements` folder found in: `C:\users\[username]\llmware_data\sample_files\agreements\[list of 12 executive employment agreements]`
* Agent will run 3 predefined questions (e.g., effective date, annual rate of base salary, number of vacation days)
* Output includes:

  * Full inference log
  * Files in `.json`, `.docx`, and `.txt` formats

> *Bonus*: Customize the questions, add/delete steps, or expand as needed.

&nbsp;

### 3. Scale with Batch Agent Mode (Multiple Documents)

**Purpose**: Analyze dozens or hundreds of agreements in one go.

#### Steps:

* Go to **Agent > Load Existing**, select **ContractAnalyzer**
* Choose **Batch Run** in the UI
* Upload multiple documents (e.g., first 5 from the sample agreements folder for this example)
  `C:\users\[username]\llmware_data\sample_files\agreements\`
* Agent will iterate through each document and apply consistent questions

**Final Output**:

* Consolidated table of answers
* Downloadable spreadsheet or report
* Supports aggregation, comparison, and audit workflows

&nbsp;

### 4. Enable Backend API Mode (For Developers)

**Purpose**: Integrate Model HQ into custom applications via API.

#### Steps:

1. Launch Model HQ as a local backend server:

   * Option 1: Localhost
   * Option 2: Mini API server for LAN access

2. Access the API using the Model HQ Python client

#### Two Integration Modes:

**a. Agent Run via API**

```python
from modelhq_client import ModelHQ

client = ModelHQ()
result = client.run_agent(file="mycontract.pdf", agent="contract_analyzer")
```

**b. Batch Folder Run via API**

```python
questions = ["How much is the base salary?", "What is the termination clause?"]
client.batch_analyze(folder="agreements_folder", questions=questions)
```

**Output Includes**:

* Answers per document per question
* Extracted text (optional) for storage or audits

&nbsp;

## 🧪 Output Options

* Word report (`.docx`)
* Excel spreadsheet (`.xlsx`)
* API JSON payload
* Raw extracted text
* Full inference history

&nbsp;

## 🛠 Example Use Cases

* HR team reviewing executive compensation
* Legal comparing MSA clauses
* Compliance tracking employment clauses
* Developers building internal search tools

&nbsp;

## Summary of Interaction Modes

| Mode             | User Type      | Input               | Output                                    |
| ---------------- | -------------- | ------------------- | ----------------------------------------- |
| **Chatbot (UI)** | Non-technical  | Single document     | Chat + answers + source references        |
| **Agent (UI)**   | Analysts, HR   | Single document     | Structured report                         |
| **Batch Agent**  | Ops/Compliance | Folder of documents | Consolidated output, bulk analysis        |
| **API**          | Developers     | Files, questions    | JSON/text for apps, dashboards, workflows |

&nbsp;

If you encounter any issues while updating your model configuration, feel free to contact our support team at:  
**`support@aibloks.com`**
