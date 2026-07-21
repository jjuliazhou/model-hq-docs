# Agents — Model HQ Client SDK

Agents are pre-built multi-step processes that automate tasks like document analysis, intake processing, or report generation. This guide covers how to discover available agents, inspect their inputs, and run them.

## Prerequisites

This guide assumes the SDK is installed and importable. If you haven't set that up yet, follow the [Hello World](HELLO_WORLD.md) prerequisites first.

## Quick example

```python
from modelhq.client import LLMWareClient

client = LLMWareClient(api_endpoint="http://localhost:8088", api_key="")

# List available agents
agents = client.get_all_agents()
for agent in agents.get("response", []):
    print(agent)

# Run an agent with a text input
result = client.run_agent(
    agent_name="intake_processing",
    agent_inputs={"User-Document": "customer_transcript.txt"}
)
print(result)
```

## Discovering agents

### List all agents

```python
response = client.get_all_agents()
for i, agent in enumerate(response["response"]):
    print(f"agent {i}: {agent}")
```

### Get agent signature

The signature describes what inputs an agent expects (names and types), what it outputs, and which parameters can be updated:

```python
signature = client.get_agent_signature("intake_processing")
print(signature)
```

The `inputs` field lists each required input as `[name, type, default]`. For example, `["User-Document", "document", ""]` means the agent needs a document file named `User-Document`.

### Get agent description

```python
description = client.get_agent_description("intake_processing")
print(description)
```

## Running agents

### Basic execution

Pass a dictionary of inputs matching the agent's signature. File paths are automatically uploaded:

```python
result = client.run_agent(
    agent_name="intake_processing",
    agent_inputs={"User-Document": "path/to/transcript.txt"}
)
print(result)
```

### Streaming execution

`run_agent_generator` yields step-by-step output as each stage of the agent completes, useful for showing progress in a UI:

```python
for step in client.run_agent_generator(
    agent_name="intake_processing",
    agent_inputs={"User-Document": "path/to/transcript.txt"}
):
    print(step)
```

### Calling a deployed agent

If an agent has been pre-deployed as a named endpoint on the server, use `call_agent`:

```python
result = client.call_agent(
    agent_name="intake_processing",
    agent_inputs={"User-Document": "path/to/transcript.txt"}
)
print(result)
```

## Retrieving agent output

After an agent run completes, outputs can be retrieved by execution ID:

```python
# Get JSON output
output = client.get_agent_output_json(id=execution_id)

# Download file outputs as a zip
result = client.get_agent_output_files(id=execution_id)
print("zip saved to:", result["response"]["zip_fp"])

# Get the general agent output
result = client.agent_output(id=execution_id)
```

## Managing agents

### Download an agent from the server

```python
result = client.download_agent("intake_processing")
print("downloaded to:", result["response"]["zip_fp"])
```

### Install an agent from a zip file

```python
result = client.install_agent_zip("path/to/agent.zip")
print(result)
```

### View execution logs

```python
logs = client.get_agent_execution_log_list(agent_name="intake_processing")
print(logs)
```

### Schedule an agent

```python
client.set_new_agent_schedule(
    agent_name="daily_report",
    frequency="daily",
    hour=9,
    minute=0
)

# List all scheduled agents
scheduled = client.get_all_scheduled_agents()
print(scheduled)
```

## Services and integrations

Agents can use external services and integrations for web search, RAG, and other capabilities.

```python
# List installed services
services = client.list_services()
print(services)

# Test a service
result = client.test_service(service_name="custom_analyzer")
print(result)

# List available integrations
integrations = client.list_integrations()
print(integrations)

# Web search (requires a configured search provider)
client.add_credential({"tavily_api_key": "tvly-..."})
results = client.web_search("What is quantum gravity?", engine="tavily")
print(results)
```

## Next steps

- [Chat](CHAT.md) — run agents inside app sessions with chat interaction
- [RAG](RAG.md) — build knowledge bases for agents to query
- [API Reference](../api-reference/API.md) — full endpoint specifications
