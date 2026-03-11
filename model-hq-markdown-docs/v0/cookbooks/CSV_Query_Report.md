# Benchmarking Classification and CSV Querying in Model HQ

## Use Case

Evaluate model performance for:

* Text classification (long context inputs \~760 tokens)
* CSV querying and retrieval-augmented generation (RAG)
* Dataset creation workflows

This report demonstrates comparative testing between **Qwen Coder** and **Llama family** models, with insights into best practices for CSV-heavy workloads.

&nbsp; 

## Who This Is For

* ML engineers benchmarking LLM inference
* Analysts running classification tests on long-form documents
* Developers handling CSV-based data pipelines
* Business users exploring no-code dataset creation in Model HQ

&nbsp;  

## Ingredients (Prerequisites)

* **Model HQ installed** and configured
* Access to classification agent (or test harness in Model HQ)
* Sample inputs: \~760-token passages (approx. 570–600 words, \~1–1.2 pages single-spaced)
* Models available in Model HQ:

  * `Qwen-2.5-Coder-7B-OV`
  * `Qwen-2.5-7B`
  * `Qwen-2.5-0.5B` (for dataset creation)
  * `Llama-3.2-3b-instruct-ov`
  * `Llama-3.1-instruct-ov`
  * `Phi-4-ov`

&nbsp;  

## How-To Covered

This walkthrough covers how to:

* Run classification benchmarks
* Compare processing speed between models
* Generate your own test dataset (JSON) in 1-click
* Optimize model selection for CSV-heavy workloads
* Avoid common pitfalls in CSV + RAG chat use cases

&nbsp;  

## Step-by-Step Recipe

### 1. Run Classification Benchmark

**Goal**: Measure inference speed for long-context classification.

#### Steps:

* Open **Models > Test > Select Model**
* Choose dataset with \~200 classification questions (\~760 tokens each)
* Run the evaluation

**Results:**

| Model                 | Total Time (200 Qs) | Avg Time / Inference | Notes                   |
| --------------------- | ------------------- | -------------------- | ----------------------- |
| Qwen-2.5-Coder-7B-OV  | 329.53 secs         | **1.647 secs**       | Faster, optimized build |
| Qwen-2.5-7B (No Code) | 355.50 secs         | **1.777 secs**       | Slightly slower         |

 

### 2. Create Your Own Dataset (Beta)

**Goal**: Generate custom test set in JSON for classification.

#### Steps:

* Go to **Models > Test > \[Select Model] > Generate Sample**
* Pick **Qwen-2.5-0.5B** for lightweight dataset generation
* Define your test set parameters (categories, size)
* Click **Generate** → JSON file is downloadable
* One-click run against chosen model

 

### 3. Optimize Models for CSV Workloads

**Goal**: Identify best-performing models for querying CSVs.

#### Observations:

* **Llama family models** handle CSV structures better
* Llama-based models also power some of the best open-source **Text-to-SQL** pipelines

**Recommended Defaults:**

| Workload Size | Recommended Model          | Notes                           |
| ------------- | -------------------------- | ------------------------------- |
| Small         | `Llama-3.2-3b-instruct-ov` | Even `1b-ov` variant is decent  |
| Medium        | `Llama-3.1-instruct-ov`    | Strong balance                  |
| Large         | `Phi-4-ov`                 | Handles long context, wide CSVs |

⚠️ **Avoid NPU variants**: Shorter context window, poor results on wide CSVs (e.g., 424+ columns).

 

### 4. Query CSVs in Chat Mode

**Goal**: Compare RAG performance with different library setups.

#### Steps:

* Load a library with **only CSVs** → `Llama-3.1-instruct-ov` performs very well.
* Mix **CSVs + long PDFs (100+ pages)** → `Llama-3.2-3b-instruct-ov` may drift by pulling irrelevant clauses.

**Example:**
When mixing CSV + financial statements, the model introduced **remediation clauses** not present in the CSV.

 

### 5. Understand Challenges with CSVs

CSV data presents unique issues for LLMs:

1. **Context limits** – Wide/long CSVs exceed model window sizes.
2. **Weak math skills** – LLMs often miscalculate; external engines (SQL, Pandas) needed.
3. **Schema confusion** – Cryptic column names require metadata and examples.
4. **Retrieval drift** – Pure embeddings struggle; hybrid retrieval + rerankers perform better.
5. **Narrow generalization** – Best for precise, structured queries only.

&nbsp;  

## Summary Table

| Step              | Action                                         |
| ----------------- | ---------------------------------------------- |
| Run Benchmark     | Compare processing times of Qwen variants      |
| Create Dataset    | Generate JSON test set with Qwen-2.5-0.5B      |
| Select Models     | Use Llama for CSV-heavy tasks                  |
| Test in Chat Mode | Compare CSV-only vs CSV+PDF performance        |
| Note Challenges   | Plan around context limits, math, schema drift |

&nbsp;  

## Why It Works

* Qwen models are efficient for classification with long contexts.
* Llama models are best for **CSV-heavy RAG workflows**, especially Text-to-SQL.
* Hybrid retrieval and external math engines improve reliability.
* Dataset creation in Model HQ makes iterative testing simple.

&nbsp;  

If you encounter any issues while updating your model configuration, feel free to contact our support team at:
**`support@aibloks.com`**
