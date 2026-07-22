# SDK Reference — Model HQ Client SDK

A quick-reference for the most commonly used SDK methods, grouped by category. For full parameter details see the [API Reference](../api-reference/API.md).

## Prerequisites

This guide assumes the SDK is installed and importable. If you haven't set that up yet, follow the [Hello World](HELLO_WORLD.md) prerequisites first.

## Client setup

```python
from modelhq.client import LLMWareClient, get_url_string

# Auto-detect endpoint
client = LLMWareClient(api_endpoint=get_url_string())

# Or specify directly
client = LLMWareClient(api_endpoint="http://localhost:8088", api_key="")
```

---

## Inference

| Method | Description |
|---|---|
| `client.inference(prompt, model_name)` | Complete response |
| `client.stream(prompt, model_name)` | Streaming generator |
| `client.inference_json(prompt, model_name)` | Response formatted as JSON |

---

## Vision & media

| Method | Description |
|---|---|
| `client.vision(image_fp, prompt)` | Analyse an image |
| `client.vision_stream(image_fp, prompt)` | Stream image analysis |
| `client.generate_image(prompt)` | Generate an image |
| `client.generate_speech(prompt)` | Generate speech audio |

---

## Model management

| Method | Description |
|---|---|
| `client.list_all_models()` | List all available models |
| `client.model_lookup(model_name)` | Get model card info |
| `client.model_load(model_name)` | Load a model into memory |
| `client.model_unload(model_name)` | Unload a model from memory |

---

## RAG — document inference

| Method | Description |
|---|---|
| `client.document_inference(doc_path, question)` | Single-document Q&A |
| `client.document_batch_analysis(folder, questions)` | Multi-document batch Q&A |

---

## RAG — source inference

| Method | Description |
|---|---|
| `client.build_source(files, source_name)` | Build a reusable source |
| `client.build_source_context(question, uploaded_source)` | Build context only |
| `client.source_inference(source_path, question)` | Query a source |
| `client.source_stream_inference(source_path, question)` | Stream query a source |

---

## RAG — library inference

| Method | Description |
|---|---|
| `client.create_new_library(library_name)` | Create a library |
| `client.add_files(library_name, folder)` | Add files to a library |
| `client.add_files(library_name, folder, use_async=True)` | Add files asynchronously |
| `client.install_embedding(library_name, model_name=...)` | Install embeddings |
| `client.install_embedding(library_name, ..., use_async=True)` | Install embeddings asynchronously |
| `client.query(library_name, user_query)` | Text query |
| `client.semantic_query(library_name, query)` | Semantic search |
| `client.library_inference(library_name, question)` | RAG inference with ranking |
| `client.library_stream_inference(library_name, question)` | Streaming RAG inference |
| `client.get_library_card(library_name=...)` | Library metadata |
| `client.get_document_list(library_name=...)` | List documents |
| `client.get_document_text(library_name=..., doc_id=...)` | Extract document text |

---

## Agents

| Method | Description |
|---|---|
| `client.get_all_agents()` | List available agents |
| `client.get_agent_signature(process_name)` | Get agent input/output spec |
| `client.get_agent_description(process_name)` | Get human-readable description |
| `client.run_agent(agent_name, agent_inputs)` | Execute an agent |
| `client.run_agent_generator(agent_name, agent_inputs)` | Stream agent execution |
| `client.call_agent(agent_name, agent_inputs)` | Call a deployed agent endpoint |
| `client.agent_output(id=...)` | Retrieve agent output |
| `client.get_agent_output_json(id=...)` | Retrieve agent JSON output |
| `client.get_agent_output_files(id=...)` | Download agent file outputs |
| `client.download_agent(process_name)` | Download agent zip from server |
| `client.install_agent_zip(zip_path)` | Install agent from zip |
| `client.get_agent_execution_log_list(agent_name=...)` | View execution logs |
| `client.get_all_scheduled_agents()` | List scheduled agents |
| `client.set_new_agent_schedule(agent_name, frequency)` | Schedule an agent |

---

## HQ Apps (chat)

| Method | Description |
|---|---|
| `client.start_app_session(app_name)` | Start a session |
| `client.chat(session_id, prompt)` | Send a message (streaming) |
| `client.run_app_agent(session_id, agent_name)` | Run an agent inside a session |
| `client.get_app_state(session_id)` | Check session state |
| `client.update_app_state(session_id, updates)` | Update session config |
| `client.get_app_transcript(session_id)` | Export session transcript |
| `client.stop_app_session(session_id)` | End a session |
| `client.get_all_apps()` | List all apps |
| `client.lookup_app(app_name)` | Get app details |
| `client.get_active_app_sessions()` | List active sessions |

---

## Services & integrations

| Method | Description |
|---|---|
| `client.install_service(service_name, service_dfn)` | Install a service |
| `client.list_services()` | List services |
| `client.test_service(service_name)` | Test a service |
| `client.list_integrations()` | List integrations |
| `client.get_integration_info(integration_name)` | Get integration details |
| `client.web_search(query, engine)` | Web search |
| `client.add_credential(creds)` | Store API credentials |
| `client.delete_credential(credential_name=...)` | Remove a credential |

---

## Administration

| Method | Description |
|---|---|
| `client.ping()` | Health check |
| `client.system_info()` | Server system info |
| `client.get_api_catalog()` | List all API endpoints |
| `client.get_db_info()` | Database info |
| `client.app_register()` | Register an app |
| `client.register_new_user(...)` | Register a new user |
| `client.get_transaction_log()` | View transaction log |
| `client.server_stop()` | Stop the server |

---

For complete endpoint details, parameters, and example responses, see the [API Reference](../api-reference/API.md).
