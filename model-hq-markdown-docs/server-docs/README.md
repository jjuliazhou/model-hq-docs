# Model HQ Client SDK

Python SDK for interacting with a Model HQ API server (llmware). Supports inference, RAG, agents, vision, and admin operations via a simple client interface.

---

## Installation

```bash
pip install requests psutil
```

Or install from the bundled requirements:

```bash
pip install -r modelhq/client/requirements.txt
```

---

## Connecting to the Server

### Same Local Network

If your machine and the server are on the same LAN, point the SDK at the server's IP directly:

```python
from modelhq.client import LLMWareClient

client = LLMWareClient(api_endpoint="http://10.0.224.73:8088", api_key="")
```

No SSH or tunneling required.

### Remote Access via SSH Tunnel

If the server is behind a jump host and only reachable over SSH, use port forwarding.

**1. Open a tunnel:**

```bash
ssh -L 8088:<SERVER_IP>:8088 <USER>@<HOST>
```

The `<SERVER_IP>` must match the address the API server binds to (check server logs: `Uvicorn running on http://<IP>:8088`).

If the server logs show `http://10.0.224.73:8088`:

```bash
ssh -L 8088:10.0.224.73:8088 user@host
```

**2. On the server**, start the API server binary:

```bash
./modelhq_api_server_10125_062326
```

Keep this terminal open.

**3. On your local machine**, point the SDK at `127.0.0.1:8088` (the tunnel forwards to the server):

```python
client = LLMWareClient(api_endpoint="http://127.0.0.1:8088", api_key="")
```

---

## Making the SDK Importable

The SDK is a local library, not an installed package. Choose one option:

| Option | Command |
|---|---|
| Run from parent directory | `cd path\to\modelhq` then run Python |
| Set `PYTHONPATH` (per session) | `$env:PYTHONPATH = "path\to\modelhq"` |
| Install as editable package (once) | `pip install -e path\to\modelhq` |

---

## Quick Start

```python
from modelhq.client import LLMWareClient

client = LLMWareClient(api_endpoint="http://127.0.0.1:8088", api_key="")

# Ping
print(client.ping())

# List models
models = client.list_all_models()
for m in models.get("models_available", []):
    print(m)

# Inference
resp = client.inference(prompt="Hello!", model_name="llama-3.2-1b-instruct-ov", max_output=100)
print(resp)
```

---

## Examples

Ready-to-run examples are in `modelhq/examples/`. Each covers a specific category.

### `models.py`

Covers inference, streaming, vision, document inference, and model listing.

```python
# Streaming
for token in client.stream(prompt="...", model_name="llama-3.2-1b-instruct-ov", max_output=1000):
    print(token, end="")

# Non-streaming
response = client.inference(prompt="...", model_name="llama-3.2-1b-instruct-ov", max_output=100)

# Vision (image Q&A)
for token in client.vision_stream("path/to/image.jpg", "Describe this image"):
    print(token, end="")

# Document RAG (no setup required)
response = client.document_inference("path/to/doc.pdf", "What are the terms?", model_name="...")

# List all available models
model_list = client.list_all_models()
```

### `admin.py`

Server administration — ping, API catalog, system info, model load/unload.

```python
client.ping()
client.get_api_catalog()
client.system_info()
client.model_load("model_name")
client.model_unload("model_name")
client.model_lookup("model_name")
```

### `agents.py`

Agent discovery, execution (sync/async), output retrieval, and scheduling.

```python
# List available agents
agents = client.get_all_agents()

# Get agent signature and description
sig = client.get_agent_signature("agent_name")
desc = client.get_agent_description("agent_name")

# Run agent
output = client.call_agent(agent_name="contract_analyzer", agent_inputs={...})

# Stream agent steps
for step in client.run_agent_generator(agent_name="contract_analyzer", agent_inputs={...}):
    print(step)

# Retrieve outputs by execution ID
json_out = client.get_agent_output_json(id="execution-id")
files = client.get_agent_output_files(id="execution-id")
```

### `rag_libraries.py`

Create libraries, add documents, install embeddings, and run semantic queries.

```python
# Create library
client.create_new_library(library_name="my_lib")

# Add documents
client.add_files("my_lib", "path/to/docs/")

# Install embeddings
client.install_embedding("my_lib", model_name="all-mini-lm-l6-v2-ov")

# Semantic query
client.semantic_query("my_lib", "How many people lack drinking water?")

# RAG inference (non-streaming)
client.library_inference("my_lib", "Question?", model_name="...")

# RAG inference (streaming)
for token in client.library_stream_inference("my_lib", "Question?", model_name="..."):
    print(token, end="")
```

### `rag_sources.py`

Build reusable indexed sources from files and run RAG without a library.

```python
# Build source from files
client.build_source(["file1.pdf", "file2.pdf"], source_name="my_source")

# Source inference (non-streaming)
client.source_inference("path/to/source.jsonl", "Question?", model_name="...")

# Source inference (streaming)
for token in client.source_stream_inference("path/to/source.jsonl", "Question?", model_name="..."):
    print(token, end="")

# Build context only (for custom pipeline)
client.build_source_context("Question?", uploaded_source="path/to/source.jsonl")
```

### `openai_compatible_endpoint.py`

Use any OpenAI-compatible tooling against a Model HQ server (requires `pip install openai`).

```python
from openai import OpenAI

client = OpenAI(
    api_key="not-needed",
    base_url="http://127.0.0.1:8088/v1"
)

chat_completion = client.chat.completions.create(
    messages=[{"role": "user", "content": "Write a short essay."}],
    model="llama-3.2-3b-instruct-ov",
    stream=True
)
```

### `web_search.py`

Web search via supported providers (Tavily, SerpAPI, NewsAPI, Wikipedia).

```python
# Add API credentials first
client.add_credential({"tavily_api_key": "tvly-..."})

# Search
response = client.web_search("What is quantum gravity?", "tavily")
```

### `ui_stream.py`

Minimal web UI example using `pywebio` to stream model output in a browser.

```python
from pywebio.output import put_text

for token in client.stream(prompt="...", model_name="phi-4-ov", max_output=1000):
    put_text(token, inline=True)
```

### `hq_apps.py`

Interact with custom Model HQ Apps — start sessions, chat, get transcripts.

```python
# Start a session
session = client.start_app_session("app_name")
session_id = session.get("session_id", "")

# Chat (streaming)
for step in client.chat(session_id=session_id, prompt="What is the base salary?"):
    print(step)

# Get transcript
client.get_app_transcript(session_id, output_format="pptx")

# Stop session
client.stop_app_session(session_id)
```

---

## Using Raw REST APIs (No SDK)

The SDK wraps HTTP POST requests. You can call the server directly with any HTTP client.

### curl

```bash
curl -X POST http://127.0.0.1:8088/ping/
curl -X POST http://127.0.0.1:8088/list_all_models/
curl -X POST http://127.0.0.1:8088/inference/ -d "model_name=llama-3.2-1b-instruct-ov&prompt=Hello&max_output=100"
```

### Python requests

```python
import requests, json

resp = requests.post(
    "http://127.0.0.1:8088/inference/",
    data={"model_name": "llama-3.2-1b-instruct-ov", "prompt": "Hello!", "max_output": 100},
    headers={"Authorization": "Bearer "}
)
print(json.loads(resp.text))
```

All endpoints and parameters are documented in `modelhq/client/api_service_catalog.py`.

---
