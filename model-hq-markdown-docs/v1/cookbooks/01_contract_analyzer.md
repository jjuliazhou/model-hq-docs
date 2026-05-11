# Build a No-Code Contract Analyzer Agent in Minutes (Offline, On-Device)

## Use Case

Build a **no-code Contract Analyzer agent** that reads contracts and pulls out the same key details every time — automatically.

It runs **fully on your device**. No Wi-Fi. No data leaving your machine.

In this cookbook we build a **Music License Agreement Analyzer** using the **Visual Builder** in Model HQ — no code needed.

The agent answers simple but useful questions like:

- Who are the parties?
- What is the effective date?
- What is the royalty payment?
- Is there an advance payment? If yes, how much?

Behind the scenes it uses **RAG (Retrieval-Augmented Generation)** with re-ranking to pick the most relevant parts of each contract and give grounded answers.

Once it works on one document, you can run it on many contracts at once with **Batch Mode** and export the results.

The complete no-code set-up for this agent (this example shows 5 nodes — but you can have as few as 2 if you only ask one question):

![Contract Analyzer canvas overview](/cookbooks/v1/01_main.png)

&nbsp;

## Who This Is For

This is useful for:

- **Legal and compliance teams** reviewing contracts (NDAs, licenses, vendor agreements)
- **Business teams** (HR, Operations, Procurement, Finance)
- **Analysts** doing repetitive document review
- **Developers** prototyping document workflows with RAG
- Anyone who needs to extract the **same information from many similar documents**

&nbsp;

## What You'll Learn

- How to build a contract analyzer using the **Visual Builder**
- How to connect a document input to multiple **RAG answer steps**
- How re-ranking improves accuracy on long documents
- How to test the agent on a **single document**
- How to run it on **many documents at once (Batch Mode)**
- How to export results for reporting or automation

&nbsp;

## Ingredients (What You Need)

- Model HQ installed on your device.
- A local model that supports chat / RAG (we use **Llama 3.2 3B** by default). It downloads automatically the first time you run the agent.
- A few sample music license agreements (already included with Model HQ), located at: `C:\Users\<username>\llmware_data\sample_files\AgreementsLarge\`. Good ones to try: *Cybele Music License Agreement.pdf*, *Diana Music License Agreement.pdf*, *Circe License Agreement for Copyrighted Music.pdf*.
- **No coding required.**

> [!NOTE]
> Don't see the sample files? You probably skipped the **Full-download** option during setup. To get them now: click the **Tools** icon (top-right) → **Sample Docs** → **Documents**. They'll land in `C:\Users\<username>\llmware_data\sample_files\AgreementsLarge\`.

> [!TIP]
> Once the model is downloaded, **everything runs locally** — parsing, retrieval, ranking, and answering. You can unplug the Wi-Fi and it still works.

&nbsp;

## Watch the Demo

Want to follow along on video? Here's the full walkthrough on the Model HQ YouTube channel — *"Contract Analyzer Agent in Minutes (No-Code + Offline) | Model HQ Demo"*. Useful timestamps are called out in each step below.

https://www.youtube.com/watch?v=9n7gXz6knbM

&nbsp;

## Quick Steps (Build It in 5 Minutes)

If you just want to copy what's in the screenshot, follow this short version. The detailed walkthrough is right after — read it whenever you want the *why*.

1. Open **Agents → Build New → Visual Builder**, click **`>`**.
2. Name the agent: `Music_License_Agent`.
3. Drag an **Input** node onto the canvas → set **Choose input type** to `document`.
4. Drag a **Node**, set service to `rag_answer`, instruction: `Who are the parties to the agreement?`. Wire it back to the Input node.
5. Repeat step 4 three more times with these questions:
    - `What is the effective date of the agreement?`
    - `What is the royalty payment to the licensor?`
    - `What is the advance payment to the licensor?`
6. (Optional) Add one more node with service `agent_report` to get a polished Word/JSON summary.
7. Click **Save Agent**, then **Run**, and upload one of the sample PDFs from `AgreementsLarge\`.
8. Once it works, go back and click **Batch Run** to process several contracts at once.

That's the whole agent. The rest of this cookbook explains each step in plain English.

&nbsp;

## Why Model HQ Builds Agents Differently

Most agent builders run against a big cloud model. Model HQ takes a different approach:

- Each task is **broken into its own small node**.
- **Small, specialized models** are stacked together — one to parse, one to rank, one to answer.
- The whole workflow runs **on your device**.

The result: accurate, repeatable answers, without sending your contracts anywhere.

&nbsp;

## Step-by-Step Walkthrough

### 1. Open the Agents Interface

*Goal: get to the agent builder.* (Min Time Required: ~3:45)

1. From the **Home Screen**, click **Agents** in the left sidebar.
2. In the *Agent Menu*, choose **Build New**.
3. Click **`>`** to continue.
4. On the *Build New Agent* screen, pick **Visual Builder**.

The Visual Builder canvas opens. This is the drag-and-drop space where the agent gets put together.

> [!TIP]
> The Visual Builder is great for agents that take **one input** — like a contract. If your agent needs more than one input type at the same time (say, a document **and** an image), use **Build Multi-Step Agent** instead.

&nbsp;

### 2. Name the Agent

At the top of the canvas, give the agent a name. We'll call ours:

```
Music_License_Agent
```

A clear name makes it easy to find later under **Load Existing**, and easy to recognize when you share it with a teammate.

&nbsp;

### 3. Add the Input Node (Document)

*Goal: tell the agent what kind of input it should expect.* (Min Time Required: ~4:19)

1. On the left sidebar, click and drag the **Input** option onto the canvas.
2. Open the node and set:
    - **Choose input type**: `document`
    - **Description**: `Music license agreement (PDF, DOCX, PPTX, TXT, or MD).`

Now Model HQ knows that, when this agent runs, it should ask the user to upload a document. That document becomes the source for every question we ask next.

> [!IMPORTANT]
> The Visual Builder allows **only one input node** per agent. If you need multiple inputs (e.g. a document plus an image), switch to **Build Multi-Step Agent**.

&nbsp;

### 4. Add the First RAG Answer Node — *Parties*

*Goal: ask the first question — and tell the agent to answer it from the uploaded document.*

1. Drag a **Node** from the left sidebar onto the canvas.
2. In the node's **Choose service** dropdown, pick `rag_answer`.
3. In the **Instruction** field (this is where you "prompt" the model), type: `Who are the parties to the agreement?`
4. **Wire** the **Input node → this RAG answer node** by dragging a line between their connection dots.

A quick tip on prompting: keep the instruction short, plain, and direct — like you're asking a colleague. *"Who are the parties to the agreement?"* works far better than a long, formal prompt.

> [!NOTE]
> `rag_answer` is the service that pulls the most relevant passages from a long document and writes a grounded answer. Use it instead of `chat` whenever the answer should come from a specific document, not from the model's general knowledge.

> [!IMPORTANT]
> Every RAG question should wire **directly to the Input (document) node** — *not* to the previous RAG node. Each `rag_answer` step looks at the document on its own. Chaining them serially would feed the answer of one into the next, which isn't what we want here.

&nbsp;

### 5. Add Three More RAG Answer Nodes

Repeat step 4 for each question. For our Music License Analyzer we add three more `rag_answer` nodes — each wired back to the **Input node**:

| # | Service | Instruction (the prompt) |
| - | ------- | ------------------------ |
| 2 | `rag_answer` | `What is the effective date of the agreement?` |
| 3 | `rag_answer` | `What is the royalty payment to the licensor?` |
| 4 | `rag_answer` | `What is the advance payment to the licensor?` |

Your canvas should now look like a fan: one Input node feeding four parallel RAG answer nodes.

> [!TIP]
> Add as many or as few questions as you like. Common additions for license / contract review: *territory*, *term length*, *renewal*, *termination*, *exclusivity*, *governing law*, *audit rights*.

&nbsp;

### 6. Confirm the Model and Services

Click any node to check:

- **Model** — `Llama 3.2 3B` (the default chat / RAG model). A check mark next to a model name means it's already on your device. A download icon means it'll be downloaded the first time the agent runs.
- **Services** — make sure `rag_answer` and `parse_document` are turned on in the **Services** catalog (left sidebar → *Services*).

> [!NOTE]
> Behind the scenes, `rag_answer` quietly does three things, all locally:
> 1. parses the PDF / DOCX into ~100+ text chunks,
> 2. re-ranks those chunks by relevance to your question,
> 3. uses the answering model to write the final response from the top chunks.

&nbsp;

### 7. Save and Run on One Contract

1. Click **Save Agent** (left sidebar).
2. Click **Run**.
3. When prompted, upload a sample agreement, e.g. `C:\Users\<username>\llmware_data\sample_files\AgreementsLarge\Cybele Music License Agreement.pdf`.
4. Click **`>`** to start.

Model HQ will parse the document, run each `rag_answer` step, and show the results in a **Summary Report Table**.

#### Example Output (Cybele Music License Agreement)

| Step | Question | Answer |
| ---- | -------- | ------ |
| `rag_answer_1` | Who are the parties to the agreement? | The parties are **Cybele** and **Lotus Music Company**. |
| `rag_answer_2` | What is the effective date? | **February 1, 2020.** |
| `rag_answer_3` | What is the royalty payment? | *(royalty schedule extracted from the contract)* |
| `rag_answer_4` | What is the advance payment? | *(advance amount extracted from the contract)* |

You also get:

- An **Inference History** table — tokens used, first-token latency, and total time per step.
- A **Files Created** section — generated reports and artifacts.

> [!TIP]
> Click **Run Again** and try a second document, like *Diana Music License Agreement.pdf*. If a question genuinely doesn't apply (e.g. *no advance payment* in Diana), the agent will say so — it won't make up a number.

&nbsp;

### 8. (Optional) Add an Agent Report Step

Want a polished output? Add a final reporting node:

1. Drag a new **Node** onto the canvas after the last RAG answer.
2. Set its service to `agent_report`.
3. Use a clear instruction, e.g. `Music License Agreement — Summary of Key Terms`.
4. Wire the previous nodes' outputs into it (use a **Transformer** node set to `Agent-State` if you need to pass everything along).

`agent_report` produces a Word document, a JSON file, and a Markdown summary — automatically pulling in each `rag_answer` result.

&nbsp;

### 9. Run It in Batch Mode (Many Contracts at Once)

Once it works on one contract, scale it up.

1. Go to **Agents → Load Existing** and pick **Music_License_Agent**.
2. Click **`>`**.
3. Choose **Batch Run** (instead of *Run (Details)* or *Run (Demo)*).
4. In *Upload Documents for Batch Processing*, select several files, e.g.:
    - *Circe License Agreement for Copyrighted Music.pdf*
    - *Cybele Music License Agreement.pdf*
    - *Diana Music License Agreement.pdf*
    - *Eos License Agreement for Copyrighted Music.pdf*
5. Click **`>`** to start.

Model HQ runs the full agent on each file independently and bundles the results.

> [!NOTE]
> For **file inputs** (like ours), if you upload **N** files the agent runs **N** times — once per document. For **text inputs**, large files get chunked and each chunk is its own work item. See the [Batch Processing](/v1/agents/batch-processing) docs for details.

#### Batch Outputs

When the batch is done, you can download:

| File | What it is |
| ---- | ---------- |
| `<agent_name>_batch_results.json` | Per-document, per-question answers in JSON. Great for dashboards and APIs. |
| `<agent_name>_batch_report.docx` | One Word doc with all answers and a per-document summary. |
| Per-document artifacts | Each contract also produces its own report, mermaid chart, and take-aways file. |

These plug nicely into BI tools, ticketing systems, CLM platforms, or audit trails.

&nbsp;

### 10. (Optional) Share or Deploy the Agent

Once it works, share it without rebuilding:

- **Share by ZIP** — *Agents → Load Existing → Music_License_Agent → Share*. The ZIP contains only configuration and documents (no executable code), so it's safe to email.
- **Upload on another machine** — On your colleague's Model HQ install: *Agents → Build New → Upload* (or the Upload button next to *Load Existing*) and pick the ZIP. The agent shows up in their *Load Existing* list right away.
- **Run via the Model HQ API Server** — Expose the agent over a local HTTP endpoint so other apps can use it.
- **Add a Demo mode** — Before sharing, set up a demo so colleagues can run the agent end-to-end with one click and immediately see what it does.

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

- **One input** — the contract.
- **Several parallel RAG answers** — each one looks at the contract on its own.
- **One optional report** — for a polished, shareable summary.

&nbsp;

## Summary Table

| Step | Action | Outcome |
| ---- | ------ | ------- |
| 1 | Open Agents → Build New → Visual Builder | New blank canvas |
| 2 | Name the agent (`Music_License_Agent`) | Easy to find later |
| 3 | Add Input node (`document`) | Defines runtime upload |
| 4–5 | Add `rag_answer` nodes wired to Input | Each question answered from the contract |
| 6 | Confirm model & services | `Llama 3.2 3B`, `rag_answer`, `parse_document` |
| 7 | Save & Run on one contract | Validate the answers |
| 8 | (Opt.) Add `agent_report` | Polished Word / JSON output |
| 9 | Batch Run across many contracts | Scaled, repeatable execution |
| 10 | Share / Deploy | Send to colleagues or call from an app |

&nbsp;

## Related Documentation

- [Agents Overview](/v1/agents)
- [Create a New Agent](/v1/agents/create-new-agent)
- [Agent Visual Builder](/v1/agents/agent-visual-builder)
- [Editing an Agent](/v1/agents/edit-agent)
- [Batch Processing](/v1/agents/batch-processing)
- [Services Catalog](/v1/agents/agent-services)
# Build a No-Code Contract Analyzer Agent in Minutes (Offline, On-Device)
