# Hello World — Model HQ Client SDK

A quick-start guide to connect to a running Model HQ server and perform your first inference. Follow the steps below and you should see a response within a minute.

## Prerequisites

- Python 3.8 or later
- `requests` and `psutil` installed (`pip install requests psutil`)
- A running Model HQ server on `http://localhost:8088` (see [Server Deployment](../server-deployment/SERVER_DEPLOYMENT.md) for Linux setup)
- The SDK made importable — choose one of:

| Option | Command |
|---|---|
| Run from the parent directory | `cd path\to\modelhq` then run Python |
| Set `PYTHONPATH` (per session) | `$env:PYTHONPATH = "path\to\modelhq"` (PowerShell) |
| Install as an editable package (once) | `pip install -e path\to\modelhq` |

## Complete example

Save the script below and run it. It initialises a client, runs a non-streaming inference, streams a longer response, and cleans up.

```python
from modelhq.client import LLMWareClient, get_url_string

# Connect to the server (auto-detect or specify the address)
api_endpoint = get_url_string()
client = LLMWareClient(api_endpoint=api_endpoint)

# --- Non-streaming inference ---
prompt = "What are the best sites to see in France?"
model_name = "llama-3.2-1b-instruct-ov"

response = client.inference(prompt=prompt, model_name=model_name, max_output=100)
print("inference response:", response)

# --- Streaming inference ---
long_prompt = "What are the main theoretical challenges with quantum gravity?"

for token in client.stream(prompt=long_prompt, model_name=model_name, max_output=300):
    print(token, end="")

# --- Clean up ---
client.model_unload(model_name)
```

## What the output looks like

```
inference response: {'llm_response': 'Some suggestions for places to visit in France are the Eiffel Tower...'}
Some suggestions for places to visit in France are the Eiffel Tower, Mont Saint-Michel, the French Riviera...
```

## Trying a different model

Change `model_name` to any model available on the server. Run `client.list_all_models()` to see what is installed. Smaller models like `phi-3-ov` load faster; larger ones like `llama-3.2-3b-instruct-ov` are more capable.

If the model is not yet on the device it will be downloaded automatically on first use.

## Next steps

| Topic | Document |
|---|---|
| Chat with an app session | [Chat](CHAT.md) |
| Run pre-built agents | [Agents](AGENTS.md) |
| Build a knowledge base with libraries | [RAG](RAG.md) |
| Image analysis, generation, and speech | [Vision & Media](VISION.md) |
| SDK method reference | [SDK Reference](SDK_REFERENCE.md) |
| Full endpoint specifications | [API Reference](../api-reference/API.md) |
