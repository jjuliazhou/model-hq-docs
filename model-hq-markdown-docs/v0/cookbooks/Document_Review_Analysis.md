# Build a No-Code Document Review and Analysis Custom Agent Workflow in Model HQ

## Use Case

Custom analysis of music license royalty agreements as an example, derived from an existing **Contract Analyzer** agent.

This walkthrough is also demonstrated step-by-step on our YouTube video "Build a Custom Chat/RAG Bot in 10 Minutes": https://youtu.be/uy53WKrMOXc

&nbsp;

## Who This Is For

* Business users (HR, Legal, Ops)
* Developers building custom workflows
* Analysts automating document review

&nbsp;

## Ingredients (Prerequisites)

* Model HQ installed
* A sample agent (e.g., **Contract Analyzer**) available as a template in Model HQ
* A sample PDF — e.g., *Circe License Agreement for Copyrighted Music* - sample document provided as part of Model HQ
  (Path: `C:\users\[username]\llmware_data\sample_files\AgreementsLarge\Circe License Agreement for Copyrighted Music.pdf`)
* No coding knowledge required!

&nbsp;

## How-To Covered

Use the no-code visual editor to:

* Add/remove rows
* Update question text
* Reuse the same RAG answer service block

&nbsp;

## Step-by-Step Recipe

### 1. Start a New Agent Workflow

**Goal**: Create a new custom agent by cloning an existing one.

#### Steps:

* Open **Agents > Select Build New** then click '>'
* Next, select **Start Building** in *Configure Agent*
* Input process name in *Set Up Agent*, e.g., **License Agreement**
* Set input type to **User Document** (indicates PDF upload)

> **Note**: The input type selection is critical in Model HQ—determining how the agent receives input. Multiple input sources can be configured in advanced use cases.

* Derive from existing agent: select **Contract Analyzer**
  (Preset to work with employment agreements, which we’ll adapt for music license royalty agreements)

&nbsp;

### 2. Understand the Template Process (Contract Analyzer)

You’ll see pre-loaded steps for this template which was designed for employment agreements, which we will modify for the new contracts related to music license royalty agreements:

1. Parse the uploaded document
2. Run RAG answer agent on 3 default questions:

   * When is the effective date?
   * What is the annual rate of the base salary?
   * How many vacation days?
3. Output results to a report

&nbsp;

### 3. Customize the Workflow for New Use Case

**Scenario**: We’re now analyzing music license royalty agreements, not employment contracts.

#### Steps:

* **Keep**:

  * **Parse Document** (critical for extracting text from non-`.txt` files)

* **Modify Questions**:

  * Change 2nd row to: “When is the effective date of the agreement?”
  * Change 3rd row to: “Who are the parties to the agreement?”
  * Change 4th row to: “What are the royalty terms, including amount and calculation method?”

&nbsp;

### 4. Enhance Output: Add a Commentary Step

**Optional Twist**: Replace the basic report with a smarter summary.

#### Steps:

* Add a new block: **Report Commentary**
* Pass in all previous answers
* Skip generating Word reports—commentary replaces it
* Output: Natural language summary of findings

How to in the workflow:

* At the end of Row 5, click the **‘+’** button

* Select **Report Commentary** in the *Service* dropdown

* Input: `Natural Language Summary of Findings`

* Context: **None**

* Click `>` then `Run` then in *Action* click `>`

* Upload the document:
  `C:\users\[username]\llmware_data\sample_files\AgreementsLarge\Circe License Agreement for Copyrighted Music.pdf`

&nbsp;

### 5. Test the Agent on a Single Document

#### Steps:

* Click **Run**
* Upload a music license agreement PDF
* Model HQ will:

  * Parse the document (e.g., \~17 text chunks)
  * Run the RAG agent for all 4 custom questions
  * Generate a clean summary commentary of the findings

&nbsp;

### 6. Batch Run the Agent on Multiple Documents

#### Steps:

* Switch to **Batch Mode**:
  Go to **Agents > Load Existing > License Agreement** (your custom agent), then select **Batch Run**
* Select 3–4 music license agreements, e.g.:

  * *Circe License Agreement for Copyrighted Music*
  * *Cybele Music License Agreement*
  * *Eos License Agreement for Copyrighted Music*

> Folder path: `C:\users\[username]\llmware_data\sample_files\AgreementsLarge\`

* In **Upload Documents for Batch Processing**, after selecting documents, click `>` to begin the batch process

Model HQ will:

* Run the agent on each file
* Output per document:

  * Question-answer results
  * One commentary summary
  * Ready for export or further analysis

&nbsp;

### 7. (Optional) Share or Integrate

You can now:

* Email the agent to a colleague (they can upload & run it)
* Save it to a shared **Model HQ** repository
* Deploy it via **Model HQ API Server** to integrate into an app
* Expose the workflow programmatically to backend services

&nbsp;

## Summary Table

| Step              | Action                                 |
| ----------------- | -------------------------------------- |
| Derive New Agent  | Based on Contract Analyzer             |
| Modify Questions  | Remove irrelevant, add domain-specific |
| Add Commentary    | Auto-generate summary from answers     |
| Run Single Test   | Validate logic and structure           |
| Run Batch Test    | Scale to many docs at once             |
| Share / Integrate | Via file or backend API                |

&nbsp;

## Why It Works

* Fast adaptation using no-code UI
* Domain-agnostic: works for any document type
* Test, tweak, and deploy in minutes
* Empowers analysts and business users without developer time

&nbsp;

If you encounter any issues while updating your model configuration, feel free to contact our support team at:  
**`support@aibloks.com`**
