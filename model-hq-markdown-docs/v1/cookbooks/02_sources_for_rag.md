# Process 500 PDFs On-Device for RAG — Build a Reusable Source in Minutes

## Use Case

Build a **Source** in Model HQ — a bundle of documents (books, PDFs, manuals, handbooks, anything text-y) that becomes a **shared source of truth** for your chats, bots, and agents to query in plain English.

Once a Source is built, you can:

- ask it questions in natural language (RAG),
- reuse the same Source across **Chat**, **Bots**, and **Agents**,
- scale it up — in this cookbook we ingest **500 UN resolution PDFs in real time** on an Intel **Lunar Lake** AI PC.

It runs **fully on your device**. No Wi-Fi. No data leaving your machine.

```
![Sources in Model HQ — RAG over many documents at once](/cookbooks/v1/<imagePathHere>
```

&nbsp;

## Who This Is For

This is useful for:

- **HR teams** bundling employee handbooks and policies for a self-serve assistant
- **Field tech / engineering teams** packaging product manuals and runbooks
- **Legal teams** keeping a shared library of templates and clauses
- **Operations / Compliance** with hundreds of regulatory PDFs to search
- **Anyone** building a chatbot, agent, or workflow that needs to look things up across many files

&nbsp;

## What You'll Learn

- How to create a **Standard Source** in seconds
- How to add and ingest documents (including the sample files that come with Model HQ)
- How parsing works (Digital vs OCR vs Vision Model) and when to switch
- How to test a Source with **Semantic, Keyword (AND/OR), and Exact** search
- How to tune **Context Top-N** and **Context Target Size** for better answers
- How to use the same Source inside **Chat** (and later in Bots and Agents)
- How to scale up — watch 500 UN resolution PDFs ingest in real time on a Lunar Lake AI PC

&nbsp;

## Ingredients (What You Need)

- Model HQ installed on your device.
- A local model that supports chat / RAG (we use **Llama 3.2 3B** by default). It downloads automatically the first time you run it.
- Some documents to bundle. The sample files that ship with Model HQ work great. They live at `C:\Users\<username>\llmware_data\sample_files\`. Try the *Books* folder for a small bundle, or the *UN resolutions* folder for a big one.
- **No coding required.**

> [!NOTE]
> Don't see the sample files? You probably skipped the **Full-download** option during setup. To get them now: **Tools** icon (top-right) → **Sample Docs** → **Documents**. They'll land in `C:\Users\<username>\llmware_data\sample_files\`.

> [!TIP]
> Sources are a **building block**. The Source you create here can be plugged straight into a Chat, a Bot, or an Agent later — without rebuilding anything. See the [Source Overview](/v1/source) docs for the full reference.

&nbsp;

## Watch the Demo

Want to follow along on video? Here's the full walkthrough on the Model HQ YouTube channel — *"Process 500 PDFs On-Device for RAG and Agents in 30 seconds?! Model HQ Sources Demo (Real-Time)"*. Useful timestamps are called out in each step below.

https://www.youtube.com/watch?v=Vz48X6SWwrQ

&nbsp;

## Quick Steps (Build a Source in 2 Minutes)

If you just want to copy what's in the video, here's the short version. The detailed walkthrough is right after.

1. Open **Source → Build New**, click **`>`**.
2. Name the Source (e.g. `ebooks`). Leave **Encrypt Source** off (these are public docs). **Source Type**: `Standard`.
3. Click **Add Docs** → browse to `C:\Users\<username>\llmware_data\sample_files\` → pick a few PDFs (e.g. *Bill Gates biography*, *The Beatles*, *The Great Gatsby*) → **Save + Exit**.
4. Test it: under **Test**, pick **All Documents**, type a natural-language question (e.g. *"Where did Bill Gates go to school?"*), pick a model (e.g. `Llama 3.2 3B`), click **Run**.
5. Save and exit. You now have a reusable Source.
6. (Optional) Use it in **Chat** — open Chat, attach the saved Source, ask a question, and Model HQ will retrieve passages from your Source before answering.
7. (Optional) Scale up — repeat steps 1–3 with **500 UN resolution PDFs** to see ingestion at scale.

That's the whole thing. The rest of this cookbook explains the *why* and shows what good queries look like.

&nbsp;

## What Is a Source, Exactly?

A **Source** in Model HQ is a bundle of documents that becomes a single, queryable knowledge base. Think of it as a folder with super-powers:

- **Bundle** — drop in PDFs, DOCX, PPTX, XLSX, CSV, TXT, MD, WAV, PNG, JPG, even ZIPs.
- **Parse + index** — Model HQ parses each file, splits it into text chunks, and indexes them on-device. (See [What is parsing?](/v1/source/parsing-in-source).)
- **Query** — ask questions in plain English; Model HQ retrieves the most relevant chunks (RAG) and the model answers from them.
- **Reuse** — the same Source works in Chat, Bots, and Agents.

There are two flavors:

- **Standard Source** — for multi-format documents (PDF, PPTX, DOCX, XLSX, PNG, JPEG, …). This is what we'll use.
- **Dataset Source** — for structured data (CSV, JSON). Different interface; covered separately under [Dataset](/v1/dataset).

&nbsp;

## Step-by-Step Walkthrough

### 1. Open the Source Interface

*Goal: get to the Source builder.* (Video: ~1:08)

1. From the **Home Screen**, click **Source** in the left sidebar.
2. Click **Build New** to start a new Source.
3. Click **`>`** to continue.

> [!NOTE]
> RAG stands for **Retrieval-Augmented Generation** — a fancy way of saying "search your documents, then let the model answer from what it finds." Sources are the bundle the search runs against.

&nbsp;

### 2. Configure the Source — Name, Encryption, Type

*Goal: set up the basics.* (Video: ~1:46)

Fill in the **RAG Builder – Source** form:

- **Source Name** — something descriptive. We'll use `ebooks`. This is the name you'll see later in Chat / Bots / Agents when attaching it.
- **Encrypt Source** — leave **off** for public documents; turn **on** for sensitive material (encrypts the Source at rest on disk).
- **Source Type** — pick **Standard** (multi-format documents). Choose **Dataset** instead only if you're bundling CSV / JSON.

> [!TIP]
> Pick a name your future self (and teammates) will recognize. The Source name is exactly what shows up later when attaching it inside Chat, Bots, and Agents.

&nbsp;

### 3. Add Documents to the Source

*Goal: drop the actual files into the bundle.* (Video: ~2:08)

1. On the RAG Builder page, click **Add Docs**.
2. Browse to `C:\Users\<username>\llmware_data\sample_files\`.
3. For our `ebooks` bundle, pick three very different books:
    - *Bill Gates biography*
    - *The Beatles*
    - *The Great Gatsby*
4. Click **`>`** to add each one, then **Save + Exit** when you're done.

Model HQ parses each document on-device, splitting it into searchable text chunks.

> [!NOTE]
> Supported file types include `.pdf`, `.pptx`, `.docx`, `.xlsx`, `.csv`, `.txt`, `.md`, `.wav`, `.png`, `.jpg`, and `.zip`. You can mix and match in a single Source — text documents, screenshots of tables, images, all in one bundle.

&nbsp;

### 4. (Optional) Tune Parsing Options

*Goal: choose how documents are turned into searchable text.*

Click the **Configure (⚙️)** icon on the upload screen to control parsing:

| Option | Default | When to change |
| ------ | ------- | -------------- |
| **PDF Parsing Options** | `Digital` (fastest) | Switch to **OCR** for scanned PDFs / image-based PDFs. |
| **Image Parsing Options** | `OCR` | Switch to **Vision Model** when you need richer descriptions of image content. |
| **Text Chunk Size** | 400–600 tokens | Smaller = more precise retrieval. Larger = more context per chunk. |
| **Interpret CSV as DB Table** | `OFF` | Turn on if your CSV is structured tabular data (allows accurate column queries). |

> [!TIP]
> If your PDFs are mostly typed text, the **Digital** parser is the fastest and best default. If retrieval quality feels off on scanned documents, switch to **OCR**. See [What is parsing?](/v1/source/parsing-in-source) for more.

&nbsp;

### 5. Test the Source — Pick a Search Strategy

*Goal: make sure the bundle actually contains what you think it does.* (Video: ~3:17)

The RAG Builder offers two ways to interrogate a Source: **Search** and **Test**.

#### Search (no model needed)

Use **Search** to retrieve raw passages without invoking a chat model. Pick one of four strategies:

| Strategy | What it matches | Example |
| -------- | --------------- | ------- |
| **Semantic** | Related meanings, even if exact words differ | `benefits of eating apples` → matches "health advantages of apples" |
| **Keyword-OR** | Any of the words | `apple OR orange` |
| **Keyword-AND** | All of the words | `apple AND orange` |
| **Exact** | Exact phrase, same order | `"artificial intelligence"` |

Semantic is the default — it's the most natural for "ask my docs" questions. Keyword and Exact are great when you know specific terms or phrases must appear.

#### Test (full RAG with a model)

Use **Test** to run an actual end-to-end RAG query: retrieve passages **and** have the model write a grounded answer. Inputs:

- **Select Test Document** — a single uploaded document, or **All Documents**.
- **Question** — a plain-English question (e.g. `Where did Bill Gates go to school?`).
- **Model** — pick from your local models. `Llama 3.2 3B` is a solid default.
- **context_top_n** — how many top-matching chunks to feed to the model (more on this in step 8).
- **context_target_size** — target token size for the assembled context. If `top_n` chunks don't fill it, more chunks are added until they do.

Try a question for each book in the bundle:

- `Where did Bill Gates go to school?` → should hit the Gates biography.
- `Where did Bill Gates go to university?` → also Gates biography.
- `Who is Daisy?` → should hit *The Great Gatsby*.

Each answer also shows the **context** — the exact passages it used and their source (file name, page).

> [!TIP]
> Keep test questions short and specific, like you're asking a colleague. *"Who is Daisy?"* works far better than a long, formal prompt. If a Bill Gates question hits *The Great Gatsby*, something's off — wrong files, wrong chunk size, or too small a `context_top_n`.

&nbsp;

### 6. Save the Source

Once you're happy with the test results, click **Save + Exit** and head **Home**. You'll now see the Source listed under **Load Existing**, ready to be reused anywhere in Model HQ.

&nbsp;

### 7. Use the Source in Chat

*Goal: ask the same questions from a regular chat — without re-uploading anything.* (Video: ~4:48)

1. Open **Chat** from the left sidebar.
2. Pick a chat model (e.g. `Llama 3.2 3B`).
3. Attach a **Saved Source** — pick `ebooks`.
4. Ask a question like: `Who are Bill Gates's children?`

Chat will show the retrieved passages first (the *context*), then write an answer grounded in them. Same Source you built in step 6 — no rebuild, no re-upload.

> [!TIP]
> The Chat config has its own **PDF Parsing Options** under the ⚙ icon, so you can switch between Digital / OCR / Vision Model per chat session. Same Source, different parsing if you need it.

&nbsp;

### 8. Scale Up — 500 PDFs in One Source

*Goal: prove this works at real-world scale.* (Video: ~5:46)

Let's build a much bigger Source.

1. Go back to **Source → Build New**.
2. Name it `UN_resolutions`. Encryption off, **Standard** type.
3. Click **Add Docs** and select the **500 UN resolution PDFs** from your sample files. Each is roughly 1.5–5 pages long.
4. Click **`>`** to start ingestion.

On the demo machine (Intel **Lunar Lake**, 32 GB), all 500 PDFs were parsed and indexed in roughly **30 seconds**, real time, with no internet connection. (Speed depends on hardware — AI PCs with NPU acceleration are particularly quick.)

The Source view will list all 500 ingested documents. Save and exit when you're done.

> [!NOTE]
> The point: this isn't a toy demo. Sources scale to hundreds of documents on a single laptop, and that same Source becomes the knowledge base for any Chat / Bot / Agent in Model HQ.

&nbsp;

### 9. Query a Large Source — and Tune Context Top-N

*Goal: ask the 500-PDF Source a real question, then dial in how many passages it retrieves.* (Video: ~7:21)

1. From the `UN_resolutions` Source, open **Test**.
2. Type: `What are resolutions on women and agriculture?`
3. Model: `Llama 3.2 3B`. Leave `context_top_n` at the default **5**.
4. Click **Run**.

Model HQ digs through all 500 PDFs and returns the top resolutions touching on women, agriculture, sustainable inclusion, etc. — along with the source passages it used.

Now turn the dial:

- Change **context_top_n** from `5` to `10`.
- Re-run the same question.

The model now sees **10** chunks instead of 5, giving you a broader answer with more cited resolutions.

> [!TIP]
> More context isn't always better:
> - **Lower top-n** (e.g. 3–5) → sharper, more focused answers; faster.
> - **Higher top-n** (e.g. 10–20) → broader coverage; great for "list all resolutions about X" questions.
> - **`context_target_size`** acts as a safety net — if `top_n` chunks don't reach the target token budget, more chunks get added automatically.

&nbsp;

### 10. (Next) Plug the Source into Bots and Agents

You've now got a reusable Source. Two natural next steps:

- **Bots** — build a chatbot that always uses this Source as its knowledge base. See the [Bots Overview](/v1/bots).
- **Agents** — build a multi-step workflow that searches this Source as one of its actions. See the [Agents Overview](/v1/agents) and the [Contract Analyzer cookbook](/cookbooks/v1/building-contract-analyzer) for an example.

The Source you built once is the same Source those bots and agents will use — no duplication, no re-ingestion.

&nbsp;

## Other Useful Source Actions

The RAG Builder also gives you a few utilities:

- **Library** — export the Source to the local library database.
- **Download** — export the Source as a Markdown text file.
- **Links** — if the Source was built from a web search, list just the links found.
- **Delete** — remove the Source from the system.

&nbsp;

## Anatomy of a Source

```
[ Source: ebooks ]
        │
        ├── Bill_Gates_biography.pdf
        ├── The_Beatles.pdf
        └── The_Great_Gatsby.pdf
                │
                ▼
   Parsed (Digital / OCR / Vision) → Chunked → Indexed (on-device)
                │
                ▼
   Used by:  Chat   |   Bots   |   Agents
```

- **One bundle** — many documents, parsed once.
- **Reusable** — Chat, Bots, and Agents all read from the same Source.
- **Local** — files never leave your device.

&nbsp;

## Summary Table

| Step | Action | Outcome |
| ---- | ------ | ------- |
| 1 | Open Source → Build New | Blank Source |
| 2 | Name it, pick **Standard** type | Source configured |
| 3 | Add Docs from `sample_files\` | Documents ingested |
| 4 | (Opt.) Tune parsing (Digital / OCR / Vision) | Right parser for the right docs |
| 5 | Test with Search + Test | Validated retrieval quality |
| 6 | Save + Exit | Source ready to reuse |
| 7 | Attach Source in Chat | Chat answers from your bundle |
| 8 | Build a 500-PDF Source | Real-world scale on-device |
| 9 | Tune `context_top_n` / `context_target_size` | Dial answer breadth vs precision |
| 10 | Plug into Bots / Agents | Source becomes a building block |

&nbsp;

## Related Documentation

- [Source Overview](/v1/source)
- [What is parsing?](/v1/source/parsing-in-source)
- [Source Error Handling](/v1/source/error-handling)
- [Chat Overview](/v1/chat)
- [Bots Overview](/v1/bots)
- [Agents Overview](/v1/agents)
- [Building a Contract Analyzer (Cookbook)](/cookbooks/v1/building-contract-analyzer)
