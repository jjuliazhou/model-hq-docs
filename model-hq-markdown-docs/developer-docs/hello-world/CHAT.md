# Chat — Model HQ Client SDK

Model HQ Apps combine agents, models, and configurations into a packaged experience. The chat API lets you interact with an app through a session, sending messages and receiving streamed responses.

## Prerequisites

This guide assumes the SDK is installed and importable. If you haven't set that up yet, follow the [Hello World](HELLO_WORLD.md) prerequisites first.

## Quick example

```python
from modelhq.client import LLMWareClient

client = LLMWareClient(api_endpoint="http://localhost:8088", api_key="")

# Start a session for an installed app
session = client.start_app_session("contract_review")
session_id = session.get("session_id", "")
print("session started:", session_id)

# Send a message and stream the response
for step in client.chat(session_id=session_id, prompt="What is the base salary?"):
    print(step)

# Stop the session when done
client.stop_app_session(session_id)
```

## Starting a session

`start_app_session` creates a new session ID and instantiates the app state on the server. The app must already be installed on the server.

```python
session = client.start_app_session("app_name")
session_id = session.get("session_id", "")
```

Optional parameters let you preload models or source documents:

```python
session = client.start_app_session(
    "app_name",
    preload_models=True,
    model_name="llama-3.2-3b-instruct-ov",
    preload_source=True
)
```

## Sending messages

`chat` sends a user message and returns the response. By default it streams tokens line-by-line:

```python
for step in client.chat(session_id=session_id, prompt="Summarise the document"):
    print(step)
```

To get a single non-streaming response, set `stream=False`:

```python
response = client.chat(session_id=session_id, prompt="Summarise the document", stream=False)
print(response)
```

## Running an agent inside a session

Some apps expose agents that can be run within the session context. `run_app_agent` executes the agent and streams step-by-step output:

```python
for step in client.run_app_agent(
    session_id=session_id,
    agent_name="contract_analyzer",
    agent_inputs={"User-Document": "contract.pdf"}
):
    print(step)
```

## Managing sessions

### Check session state

```python
state = client.get_app_state(session_id)
print(state)
```

### Export a transcript

The transcript can be saved as docx, pptx, xlsx, csv, json, or txt:

```python
result = client.get_app_transcript(session_id, output_format="docx")
print("transcript saved to:", result["response"]["zip_fp"])
```

### Stop a session

```python
client.stop_app_session(session_id)
```

## Listing and discovering apps

```python
# List all available apps
apps = client.get_all_apps()
for app in apps.get("app_list", []):
    print(app)

# Get details for a specific app
details = client.lookup_app("contract_review")
print(details)
```

## Next steps

- [Agents](AGENTS.md) — discover and run standalone agent processes
- [RAG](RAG.md) — build knowledge bases and ask questions over documents
- [API Reference](../api-reference/API.md) — full endpoint specifications
