# RAG — Model HQ Client SDK

Retrieval Augmented Generation (RAG) lets you ask questions about your own documents. Model HQ supports three approaches of increasing complexity: direct document inference, source-based inference, and library-based knowledge bases.

## Prerequisites

This guide assumes the SDK is installed and importable. If you haven't set that up yet, follow the [Hello World](HELLO_WORLD.md) prerequisites first.

## Quick example — ask a question about a single document

No setup required. Upload a document and ask a question:

```python
import os
from modelhq.client import LLMWareClient

client = LLMWareClient(api_endpoint="http://localhost:8088", api_key="")

document_path = os.path.abspath("sample_files/contract.pdf")
question = "What is the annual rate of the base salary?"

response = client.document_inference(
    document_path,
    question,
    model_name="llama-3.2-3b-instruct-ov"
)
print(response["llm_response"])
```

## Three RAG approaches

| Approach | When to use | Setup required |
|---|---|---|
| **Document inference** | Quick Q&A on a single file | None |
| **Source inference** | Q&A across multiple pre-processed files | Build a source first |
| **Library inference** | Persistent knowledge base with semantic search | Create library, add files, install embeddings |

---

## 1. Document inference

Uploads a document, parses and chunks it, ranks relevant passages, and generates an answer — all in one call.

```python
response = client.document_inference(
    "path/to/document.pdf",
    "What are the termination conditions?",
    model_name="llama-3.2-3b-instruct-ov"
)
print(response["llm_response"])
```

For batch analysis across multiple documents and questions:

```python
response = client.document_batch_analysis(
    local_folder_path="path/to/documents/",
    question_list=[
        "What is the governing law?",
        "What is the termination notice period?"
    ]
)
print(response)
```

## 2. Source inference

A source is a pre-processed JSONL file built from one or more documents. It can be reused across multiple queries without re-parsing.

### Build a source

```python
source_fp = client.build_source(
    ["file1.pdf", "file2.pdf"],
    source_name="my_source"
)
print("source built at:", source_fp)
```

### Query the source

```python
# Non-streaming
response = client.source_inference(
    source_fp,
    "What are the key conclusions?",
    model_name="llama-3.2-3b-instruct-ov"
)
print(response["llm_response"])

# Streaming
for token in client.source_stream_inference(
    source_fp,
    "What are the key conclusions?",
    model_name="llama-3.2-3b-instruct-ov"
):
    print(token, end="")
```

### Build context only (without inference)

```python
context = client.build_source_context(
    question="What are the key conclusions?",
    uploaded_source=source_fp,
    use_top_n_context=5
)
print(context)
```

## 3. Library inference

Libraries are persistent, server-side knowledge bases. Files are parsed, indexed, and can be searched semantically.

### Create a library

```python
client.create_new_library(library_name="contract_library")
```

### Add files

Point at a local folder — all files in it will be uploaded and indexed:

```python
client.add_files("contract_library", "path/to/documents/")
```

For non-blocking uploads on large collections:

```python
client.add_files("contract_library", "path/to/documents/", use_async=True)
```

### Install embeddings

Embeddings enable semantic (meaning-based) search:

```python
client.install_embedding(
    "contract_library",
    model_name="all-mini-lm-l6-v2-ov"
)
```

For non-blocking installation on large libraries:

```python
client.install_embedding("contract_library", model_name="all-mini-lm-l6-v2-ov", use_async=True)
```

### Query the library

```python
# Text query
results = client.query("contract_library", "termination clauses")
print(results)

# Semantic search (requires embeddings)
results = client.semantic_query("contract_library", "What are the exit conditions?")
print(results)
```

### Library inference (RAG with context ranking)

```python
# Non-streaming
response = client.library_inference(
    "contract_library",
    "What is the annual base salary?",
    model_name="llama-3.2-3b-instruct-ov"
)
print(response)

# Streaming
for token in client.library_stream_inference(
    "contract_library",
    "What is the annual base salary?",
    model_name="llama-3.2-3b-instruct-ov"
):
    print(token, end="")
```

### Manage a library

```python
# Get library metadata
card = client.get_library_card(library_name="contract_library")
print(card)

# List documents in the library
docs = client.get_document_list(library_name="contract_library")
print(docs)

# Extract text from a specific document
text = client.get_document_text(library_name="contract_library", doc_id="1")
print(text)
```

## Next steps

- [Agents](AGENTS.md) — run agents that use RAG as a step in their workflow
- [Chat](CHAT.md) — interact with apps that combine RAG and agents
- [API Reference](../api-reference/API.md) — full endpoint specifications
