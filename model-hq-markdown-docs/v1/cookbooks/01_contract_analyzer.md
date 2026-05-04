# Build a No-Code Contract Analyzer Agent in Minutes (Offline, On-Device)

## Use Case

Build a **no-code Contract Analyzer agent** that reviews recurring agreements (e.g. music license agreements, NDAs, employment contracts) and automatically extracts the same set of key commercial terms every time — fully on-device, with no Wi-Fi required and no data leaving the user's machine.

In this walkthrough, a **Music License Agreement Analyzer** is built from scratch using the **Visual Builder** in Model HQ. The agent answers business-critical questions such as:

* Who are the parties to the agreement?
* What is the effective date?
* What is the royalty payment?
* Is there an advance payment to the licensor (and how much)?

The agent uses **RAG (Retrieval-Augmented Generation) + re-ranking** to pull the most relevant passages from each contract and generate accurate, grounded answers. Once validated on a single document, the same agent is then executed in **Batch Mode** across multiple agreements, with results exported for downstream review and workflow automation.

This walkthrough is also demonstrated on the **Model HQ YouTube channel**: *"Contract Analyzer Agent in Minutes (No-Code + Offline) | Model HQ Demo"*.

https://www.youtube.com/watch?v=9n7gXz6knbM

&nbsp;

## Who This Is For

* **Legal & Compliance teams** reviewing recurring agreements (licenses, NDAs, vendor contracts)
* **Business users** in HR, Operations, Procurement, and Finance
* **Analysts** automating repetitive document review
* **Developers** prototyping custom RAG-based document workflows
* Anyone who needs to extract the **same set of fields** from many similar documents

&nbsp;

## What You'll Learn

* How to build a no-code contract analyzer agent using the **Visual Builder**
* How to wire an **Input (document) node** into multiple **RAG answer** nodes
* How re-ranking and the on-device parser improve answer quality on long documents
* How to run the agent against a **single document** and validate its responses
* How to run the same agent in **Batch Mode** across many contracts at once
* How to export results for review, dashboards, and workflow automation

&nbsp;

## Ingredients (Prerequisites)

* **Model HQ** installed on the local device
* A **chat / RAG-capable model** available locally (e.g. `Llama 3.2 3B` — the default chat model used in this walkthrough). The model will be pulled automatically on first run if not yet cached.
* Sample music license agreements provided with Model HQ, located at:
  ```
  C:\Users\<username>\llmware_data\sample_files\AgreementsLarge\
  ```
  Example documents:
  * *Cybele Music License Agreement.pdf*
  * *Diana Music License Agreement.pdf*
  * *Circe License Agreement for Copyrighted Music.pdf*
* **No coding knowledge required.**

> [!NOTE]
> Once models have been downloaded, **no internet connection is required** to run the agent. All inference, parsing, retrieval, and re-ranking happen locally on the device.

&nbsp;

## Why Model HQ Builds Agents Differently

Most agent builders are designed to execute against a frontier model in the cloud. Model HQ takes a different approach:

* Each task is **broken out discretely** into its own node.
* **Small, specialized language models** are stacked together to handle each step.
* The end-to-end workflow runs **on-device** — using the local parser, the ranker model, and a RAG-tuned answering model in coordination.

This produces accurate, reproducible results while preserving privacy and eliminating per-call cloud costs.

&nbsp;

## Step-by-Step Recipe

### 1. Open the Agents Interface

**Goal**: Navigate to the agent builder.

#### Steps:

1. From the **Main Menu / Home Screen**, select **Agents** in the left sidebar.
2. In the *Agent Menu*, choose the **Build New** option.
3. Click **`>`** to proceed.
4. In the *Build New Agent* screen, select **Visual Builder**.

The Visual Builder canvas opens — this is the drag-and-drop, click-and-connect environment where the agent will be assembled.

> [!TIP]
> The Visual Builder is ideal for single-input agents like a contract analyzer. For workflows requiring **multiple input types** (e.g. document **and** image), use **Build Multi-Step Agent** instead. See the [Create New Agent](/v1/agents/creating-new-agent) and [Agent Visual Builder](/v1/agents/agent-visual-builder) documentation.

&nbsp;

### 2. Name the Agent

At the top of the canvas, set the agent name to:

```
Music_License_Agent
```

A descriptive name makes the agent easy to find later under **Load Existing**, and easy to identify when shared with colleagues.

&nbsp;

### 3. Add the Input Node (Document)

**Goal**: Define what the agent receives at runtime.

#### Steps:

1. From the left sidebar, drag an **Input** node onto the canvas.
2. Open the node and configure it:
   * **Choose input type**: `document`
   * **Description**: `Music license agreement (PDF, DOCX, PPTX, TXT, or MD).`

This input node tells Model HQ that, at runtime, the user will be prompted to upload a document file. The uploaded file becomes the source of truth for every downstream RAG step.

> [!IMPORTANT]
> The Visual Builder supports **only one input node** per agent. For multi-input workflows, switch to **Build Multi-Step Agent**.

&nbsp;

### 4. Add the First RAG Answer Node — *Parties*

**Goal**: Ask the first business question against the uploaded document.

#### Steps:

1. Drag a **Node** from the left sidebar onto the canvas.
2. In the node's **Choose service** dropdown, select **`rag_answer`**.

   > `rag_answer` is the Model HQ service that retrieves the most relevant passages from a long document and generates a grounded answer. Use it instead of `chat` whenever the answer must come from a specific document rather than the model's general knowledge.

3. In the **Instruction** field, enter:
   ```
   Who are the parties to the agreement?
   ```
4. **Connect** the **Input node → RAG answer node** by drawing a wire between their connection handles.

> [!IMPORTANT]
> Every RAG question must be wired **directly to the Input (document) node** — *not* to the previous RAG node. Each `rag_answer` step independently retrieves passages from the source document. Chaining them serially would feed one answer into the next, which is not the intent here.

&nbsp;

### 5. Add Additional RAG Answer Nodes

Repeat **Step 4** for each business question. For the Music License Analyzer, add three more `rag_answer` nodes, each wired back to the **Input node**:

| Node | Service | Instruction |
| ---- | ------- | ----------- |
| RAG Answer 2 | `rag_answer` | `What is the effective date of the agreement?` |
| RAG Answer 3 | `rag_answer` | `What is the royalty payment to the licensor?` |
| RAG Answer 4 | `rag_answer` | `What is the advance payment to the licensor?` |

The final canvas should look like a **fan-out**: one Input (document) node feeding four parallel RAG answer nodes.

> [!TIP]
> Add as many or as few questions as needed. Common additions for license/contract review include: *territory*, *term length*, *renewal terms*, *termination triggers*, *exclusivity*, *governing law*, and *audit rights*.

&nbsp;

### 6. Confirm the Model Configuration

In the Visual Builder, open any node to verify:

* **Model** — `Llama 3.2 3B` (default chat / RAG model). A check mark next to a model name means it is already cached locally; a download icon means it will be pulled the first time the agent runs.
* **Services** — confirm `rag_answer` and `parse_document` are enabled in the **Services** catalog (left sidebar → *Services*). For dataset- or table-based variants, also enable `All-Datasets` or `query_custom_table` as needed.

> [!NOTE]
> Behind the scenes, `rag_answer` automatically invokes:
> * the **document parser** (chunks the PDF/DOCX into ~100+ text passages),
> * the **ranker model** (re-orders passages by relevance to the question),
> * the **answering model** (generates the final response from top-ranked passages).
>
> All three components run locally.

&nbsp;

### 7. Save & Run on a Single Document

#### Steps:

1. Click **Save Agent** (left sidebar in the Visual Builder) to persist the workflow as a JSON definition.
2. Click **Run**.
3. When prompted, upload a sample agreement, e.g.:
   ```
   C:\Users\<username>\llmware_data\sample_files\AgreementsLarge\Cybele Music License Agreement.pdf
   ```
4. Click **`>`** to start execution.

Model HQ will:
* Parse the document into text chunks,
* Run each `rag_answer` node in turn against the parsed source,
* Display results in a **Summary Report Table**.

#### Example Output (Cybele Music License Agreement)

| Step | Question | Answer |
| ---- | -------- | ------ |
| `rag_answer_1` | Who are the parties to the agreement? | The parties to the agreement are **Cybele** and **Lotus Music Company**. |
| `rag_answer_2` | What is the effective date of the agreement? | **February 1, 2020.** |
| `rag_answer_3` | What is the royalty payment to the licensor? | *(royalty payment schedule extracted from contract)* |
| `rag_answer_4` | What is the advance payment to the licensor? | *(advance payment amount extracted from contract)* |

Each output is also accompanied by:
* an **Inference History** table showing tokens used, first-token latency, and total processing time per step,
* a **Files Created** section with the generated reports and artifacts.

> [!TIP]
> Click **Run Again** to test the same agent against a second document — for example *Diana Music License Agreement.pdf* — to validate consistency. If a question genuinely doesn't apply (e.g. *no advance payment* exists in the Diana agreement), the agent will correctly report that the value is **not mentioned**, rather than hallucinating a number.

&nbsp;

### 8. (Optional) Add an Agent Report Step

To produce a polished, shareable output, add a final reporting node:

1. Drag a new **Node** onto the canvas after the last RAG answer.
2. Set its service to **`agent_report`**.
3. Set the instruction to a descriptive title, e.g.:
   ```
   Music License Agreement — Summary of Key Terms
   ```
4. Wire the previous nodes' outputs into it (via a **Transformer** node set to `Agent-State` if multi-input aggregation is needed).

`agent_report` produces a structured Word document, JSON, and Markdown summary, automatically incorporating each `rag_answer` result.

&nbsp;

### 9. Run in Batch Mode Across Multiple Contracts

Once validated on a single document, scale the agent across many contracts at once.

#### Steps:

1. Return to **Agents → Load Existing** and select **Music_License_Agent**.
2. Click **`>`** to enter the run screen.
3. Choose **Batch Run** (instead of *Run (Details)* or *Run (Demo)*).
4. In *Upload Documents for Batch Processing*, select multiple files, e.g.:
   * *Circe License Agreement for Copyrighted Music.pdf*
   * *Cybele Music License Agreement.pdf*
   * *Diana Music License Agreement.pdf*
   * *Eos License Agreement for Copyrighted Music.pdf*
5. Click **`>`** to start the batch run.

Model HQ will:
* Treat each uploaded file as a **separate work item**,
* Run the full agent workflow on each file independently,
* Aggregate results into batch output artifacts.

> [!NOTE]
> For **file-based** input (as configured here), if **N** files are uploaded, the agent runs **N** times — once per document. For **text-based** inputs, large files are decomposed into chunks and each chunk becomes a separate work item. See the [Batch Processing](/v1/agents/batch-processing) documentation for details.

#### Batch Outputs

When the batch completes, the following files are made available for download:

| File | Description |
| ---- | ----------- |
| `<agent_name>_batch_results.json` | Per-document, per-question answers in structured JSON. Ideal for downstream pipelines, dashboards, and APIs. |
| `<agent_name>_batch_report.docx` | Consolidated Word document containing all answers, contracts and a per-document summary table. |
| Per-document artifacts | Each document also produces its own individual report, mermaid chart, and take-aways files. |

These outputs can feed directly into BI tools, ticketing systems, CLM platforms, or audit trails.

&nbsp;

### 10. (Optional) Share or Deploy the Agent

Once the agent is working, it can be distributed across the organization without re-building:

* **Share by ZIP** — From *Agents → Load Existing → Music_License_Agent → Share*, download the agent ZIP file. The ZIP contains **only configuration and documents**, no executable code, making it safe to email or attach in chat.
* **Upload on another machine** — On a colleague's Model HQ install, choose *Agents → Build New → Upload* (or the Upload button next to *Load Existing*) and select the ZIP. The agent appears in their *Load Existing* list immediately.
* **Run via the Model HQ API Server** — Expose the agent over a local HTTP endpoint for integration into internal apps, RPA workflows, or backend services.
* **Add Demo mode** — Before sharing, enable a demo configuration so colleagues can run the agent end-to-end with a sample document and immediately see what it does.

&nbsp;

## Anatomy of the Final Agent

```
[ Input: document ]
        │
        ├──▶ [ rag_answer: Who are the parties? ]
        │
        ├──▶ [ rag_answer: Effective date? ]
        │
        ├──▶ [ rag_answer: Royalty payment? ]
        │
        ├──▶ [ rag_answer: Advance payment? ]
        │
        └──▶ [ agent_report: Summary of Key Terms ]   (optional)
```

* **One input** — the contract under review.
* **Multiple parallel RAG retrievals** — each independently queries the same source.
* **One consolidated report** — for human review and downstream automation.

&nbsp;

## Summary Table

| Step | Action | Outcome |
| ---- | ------ | ------- |
| 1 | Open Agents → Build New → Visual Builder | New blank canvas |
| 2 | Name the agent (`Music_License_Agent`) | Agent identifiable in *Load Existing* |
| 3 | Add Input node (`document`) | Defines runtime upload |
| 4–5 | Add `rag_answer` nodes wired to Input | Each question independently retrieves from the contract |
| 6 | Confirm model & services | `Llama 3.2 3B`, `rag_answer`, `parse_document` |
| 7 | Save & Run on one contract | Validate per-question answers |
| 8 | (Opt.) Add `agent_report` | Generate polished Word/JSON output |
| 9 | Batch Run across many contracts | Scaled, repeatable execution |
| 10 | Share / Deploy | Distribute to colleagues or via API |

&nbsp;

## Why This Pattern Works

* **Domain-agnostic** — swap the questions and the same skeleton works for NDAs, MSAs, employment contracts, lease agreements, or any recurring document type.
* **Grounded answers** — RAG + re-ranking means the model answers from the document, not from memory, so wrong-document hallucinations are minimized.
* **Honest "not found" responses** — if a clause genuinely isn't present, the agent says so (as demonstrated by the *Diana* agreement, which correctly reported no advance payment).
* **Fully on-device** — no contract content ever leaves the laptop. Critical for legal, regulated, and confidentiality-sensitive workflows.
* **Scalable** — the same agent runs on 1 contract or 1,000 via Batch Mode.
* **Shareable** — package as a ZIP and stand up the same agent on any teammate's Model HQ install in seconds.

&nbsp;

## Related Documentation

* [Agents Overview](/v1/agents)
* [Create a New Agent](/v1/agents/create-new-agent)
* [Agent Visual Builder](/v1/agents/agent-visual-builder)
* [Editing an Agent](/v1/agents/edit-agent)
* [Batch Processing](/v1/agents/batch-processing)
* [Services Catalog](/v1/agents/agent-services)

&nbsp;

If any issues are encountered while building, running, or sharing the Contract Analyzer agent, contact the Model HQ support team at:
**`support@aibloks.com`**
