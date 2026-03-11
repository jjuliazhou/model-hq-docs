# From Patient Chart to Trial Match: Automate Clinical Trial Screening with One Upload 

Imagine sorting through hundreds of patient charts to identify those who might qualify for a specific clinical trial. Now imagine doing it in seconds—with zero manual review and with no sensitive data leaving your machine or private data center. 

That’s the power of this Model HQ Clinical Trial Recruiting Agent. Designed to reduce screening friction, improve accuracy, and ensure no eligible patient slips through the cracks. 

And it’s not just for clinical trials… 

This pattern can be adapted across regulated industries where document-based decision-making is critical, such as: 

🏥 Medical eligibility screening (e.g., surgery clearance, insurance validation) 

🧾 Regulatory intake for safety or compliance 

📄 Legal discovery (e.g., identifying parties, dates, and claims from large files) 

📋 Insurance: Fraud detection or claim qualification 

One document → One workflow → One eligibility decision. 

📄 Upload. Analyze. Screen. 

With this Clinical Trial Recruiting Agent, all you need is a patient document (e.g., intake form, EMR export, or referral note). 

Here's how it works: 

### Step 1: Upload Patient Document 

Upload any text-based patient file (PDF, DOCX, TXT). 

The agent automatically parses and prepares the content for AI-powered review. 

Shape 

### Step 2: Run Eligibility Questions (RAG + Boolean) 

The agent applies a series of retrieval-augmented queries to extract trial-relevant data points, including: 

✅ Diabetes history – current or past (RAG + logic confirmation)  
🎂 Patient age  
🤰 Pregnancy or family planning status  
🩸 Dialysis treatment  
🩹 Allergies to medical-grade adhesive  
🧴 Allergies to isopropyl alcohol  
🧠 Cognitive or mental conditions that could interfere with protocol compliance  

Each of these checks is handled using natural language understanding, not rigid forms or keyword matching. 

Shape 

### Step 3: Eligibility Decision 

A Boolean logic step evaluates the presence and explanation of diabetes references. 

Output can be fed into a CRM, database, or downstream agent to trigger next steps like: 

- Contacting eligible patients  
- Sending consent forms  
- Notifying study coordinators  

Shape 

Why It Matters 

This agent doesn’t just help recruiters — it ensures no candidate is overlooked due to inconsistencies or hidden data in unstructured files. 

It’s fast, consistent, and auditable. 

Shape 

Step-by-Step Guide to Building the Clinical Trial Recruiting Tool 

Select or enter the following Service, Instruction and Context to re-create this tool yourself. 

Provided Files: We are using an example of a clinical trial available as public information in [https://clinicaltrials.gov/study/NCT04959552?cond=diabetes&page=2&rank=14](https://clinicaltrials.gov/study/NCT04959552?cond=diabetes&page=2&rank=14). We have no association with anyone who is running this trial and are using this as only example purposes so you can see some sample inclusion and exclusion criteria. 

We also downloaded some sample publicly available medical files which can be accessed here. Although these files were from public sources, please note that these files may contain explicit and sensitive medical content and user discretion is advised. We are providing these files for testing purposes only. 

### Preparing to build: 

Select Agents > Build New > Start Building then complete the Process Name.  

We named it Clinical Trial Recruiting Tool (but since this may already be a template in your version Model HQ, please feel free to give it a different name). Press > 

### Defining Inputs to Agent Process: 

You will then be asked to Define Inputs to Agent Process. This is the step where we will specify how the agent will receive its input to start taking action. The pre-set input is Main-Input (which is the standard chat style text input), but in this use case, we will be asking the Agent to review a patient file. 

- **DE-SELECT the Main Input**  
- To add Files as the input type, click ‘+’ and select ‘Document File Input – any file type’ as Input Type and in Description, type in:  
  _‘Upload Patient Medical File or Description’_ which specifies to the user what document this step is expecting.

To indicate that this step is complete, it is important to  
Click `>` then 'Save + Exit’  

> [!NOTE]
> Not clicking ‘Save+Exit’ will assume you have other documents and may ask you to repeat the last 2 steps

You will now enter the Agent building screen and you can start your build per instructions below. 

&nbsp;

## Step-by-Step Build Guide (Agent Rows)

Each step includes the:  
- **Service** (what the node does)  
- **Instruction** (the question or task)  
- **Context** (the document or variable used)  

&nbsp;

### Row 1: Parse the Patient Document  
**Service**: `parse_document`  
**Instruction**: Patient Files  
**Context**: User-Document  
**Purpose**: Prepares and parses the uploaded patient document for semantic querying in later steps.  

&nbsp;

### Row 2: RAG Answer – Diabetes Mention  
**Service**: `rag_answer`  
**Instruction**: whether the patient has diabetes now or in the past  
**Context**: Patient_Files  
**Purpose**: Checks the document for any mention of diabetes (past or present).  

&nbsp;

### Row 3: Boolean Check – Diabetes Confirmation  
**Service**: `boolean`  
**Instruction**: in `{{rag_answer_2}}` does the text state the patient has diabetes  
**Context**: doc_extract_1  
**Purpose**: Verifies if the document actually confirms diabetes using the output from the previous RAG answer.  

&nbsp;

### Row 4: RAG Answer – Patient Age  
**Service**: `rag_answer`  
**Instruction**: how old is the patient  
**Context**: Patient_Files  
**Purpose**: Extracts the patient’s age for trial eligibility filtering.  

&nbsp;

### Row 5: RAG Answer – Pregnancy Status  
**Service**: `rag_answer`  
**Instruction**: is the patient pregnant or attempting to be pregnant  
**Context**: Patient_Files  
**Purpose**: Determines reproductive status (a key trial exclusion criterion).  

&nbsp;

### Row 6: RAG Answer – Dialysis Status  
**Service**: `rag_answer`  
**Instruction**: is the patient on dialysis  
**Context**: Patient_Files  
**Purpose**: Identifies patients with advanced renal impairment.  

&nbsp;

### Row 7: RAG Answer – Allergy to Medical-Grade Adhesive  
**Service**: `rag_answer`  
**Instruction**: does the text mention if the patient is allergic to medical grade adhesive  
**Context**: Patient_Files  
**Purpose**: Screens for skin-related contraindications for the study.  

&nbsp;

### Row 8: RAG Answer – Allergy to Isopropyl Alcohol  
**Service**: `rag_answer`  
**Instruction**: does the text mention if the patient is allergic to isopropyl alcohol  
**Context**: Patient_Files  
**Purpose**: Further screens for known chemical sensitivities for the study.  

&nbsp;

### Row 9: RAG Answer – Mental/Cognitive Limitations  
**Service**: `rag_answer`  
**Instruction**: does the text mention if the patient suffers from any mental conditions that would deter him or her from following instructions or protocols  
**Context**: Patient_Files  
**Purpose**: Checks cognitive readiness and consent capacity.  

&nbsp;

### Row 10: End Node  
**Service**: `END`  
**Instruction**: End of process.  
**Context**: None  
**Purpose**: Marks completion of the workflow.  

&nbsp;

**Final Notes**:  
Be sure to upload a document (e.g., PDF, DOCX) to User-Document before running this agent – try one of the sample files provided.  

This workflow is extensible — you can add inclusion/exclusion filters or eligibility tags in later nodes and also run this in batches for production.  

&nbsp;

📈 **Expand This Pattern**  
You can easily adapt this flow to:  

- Pre-screen based on inclusion/exclusion criteria  
- Analyze investigator site files  
- Validate adherence risks  
- Recommend alternative trials or study arms  
```
