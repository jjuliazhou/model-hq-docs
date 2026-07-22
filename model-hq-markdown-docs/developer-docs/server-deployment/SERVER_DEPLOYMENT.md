# Server deployment — Model HQ Server (Linux)

Model HQ Server is a scalable API server designed for multi-user deployments on Linux. It provides a larger model catalogue, an enhanced set of RAG capabilities (including vector databases and full semantic search), and support for concurrent client access.

## Requirements

- A valid Model HQ Server license.
- A Linux environment — physical server, virtual machine, or container.
- Network connectivity configured so that client machines can reach the server endpoint.
- The Model HQ Server binary (provided with the license).
- Python 3.8 or later on client machines, with `requests` and `psutil` installed.

## Starting the server

The server binary should be started from the command line:

```bash
./modelhq_api_server_10125_062326
```

The terminal should be kept open while the service is in use. The server will bind to the configured IP address and port (default: `http://localhost:8088`).

You should see output confirming the server is running, for example:

```
Uvicorn running on http://10.0.224.73:8088
```

## Connecting to the server

Client machines can connect to the server using the Model HQ Client SDK.

### Same local network

If the client machine and the server are on the same LAN, the SDK can be pointed at the server's IP directly:

```python
from modelhq.client import LLMWareClient

client = LLMWareClient(api_endpoint="http://10.0.224.73:8088", api_key="")
```

No SSH or tunnelling is required.

### Remote access via SSH tunnel

If the server is behind a jump host and only reachable over SSH, port forwarding should be used.

**Step 1 — Open a tunnel:**

```bash
ssh -L 8088:<SERVER_IP>:8088 <USER>@<HOST>
```

The `<SERVER_IP>` must match the address the API server binds to (visible in server logs: `Uvicorn running on http://<IP>:8088`). For example:

```bash
ssh -L 8088:10.0.224.73:8088 user@host
```

**Step 2 — On the local machine**, point the SDK at `127.0.0.1:8088` (the tunnel forwards requests to the server):

```python
client = LLMWareClient(api_endpoint="http://127.0.0.1:8088", api_key="")
```

## Verifying the connection

Run a quick health check to confirm the server is reachable:

```python
from modelhq.client import LLMWareClient

client = LLMWareClient(api_endpoint="http://127.0.0.1:8088", api_key="")
print(client.ping())
```

Then list available models to confirm the server is operational:

```python
models = client.list_all_models()
for m in models.get("response", []):
    print(m)
```

## Multi-user considerations

Model HQ Server supports concurrent client access. Each client creates its own `LLMWareClient` instance pointing at the same server endpoint. The server manages model loading, library storage, and agent execution centrally.

For access control, use the `trusted_key` parameter when launching the server and pass it in SDK calls:

```python
client = LLMWareClient(api_endpoint="http://10.0.224.73:8088", api_key="")
response = client.inference(prompt="Hello", model_name="llama-3.2-1b-instruct-ov", trusted_key="your-key")
```

## Further reading

| Topic | Document |
|---|---|
| SDK installation and first call | [Getting Started](../getting-started-with-SDK/GETTING_STARTED.md) |
| Hello world example | [Hello World](../hello-world/HELLO_WORLD.md) |
| Chat with app sessions | [Chat](../hello-world/CHAT.md) |
| Run agents | [Agents](../hello-world/AGENTS.md) |
| Build knowledge bases | [RAG](../hello-world/RAG.md) |
| SDK method reference | [SDK Reference](../hello-world/SDK_REFERENCE.md) |
| Full endpoint specifications | [API Reference](../api-reference/API.md) |
