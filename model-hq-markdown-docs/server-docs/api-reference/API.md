---
title: "API Reference"
description: "Complete API reference for Model HQ endpoints"
---

# API Reference

The Model HQ API provides programmatic access to the core Model HQ platform with APIs for model inference, RAG and Agent processing. 

## How to access

**Model HQ App (with UI)** - to convert to API programmatic access, you should shift to "backend mode" which can be found on the main tools bar in the upper right hand corner of the app. You can configure the backend before launching, e.g., localhost vs. external IP (set to localhost by default), port (set to 8088 by default), and optional trusted_key to be used when calling an API. You will also see a download Model HQ Client SDK link on the page, which you should download, and open as a new project in your favorite IDE.  After shifting to programmatic mode, models and agents created in the UI are available to be accessed through APIs.  If you set a trusted_key in the configuration, then the key will be checked and validated on each API call (you can leave blank for development use).

**Model HQ Dev (no UI)** - this product provides the backend development server directly with only programmatic access, and can be started, stopped, and configured entirely with code (requires a separate license). The Model HQ Client SDK is included with the product, along with separate directions for activating the license key on first use.

**Model HQ Server (Linux - no UI)** - this is a scalable API server with multi-user scalability, larger model catalog, and an enhanced set of RAG capabilities (requires a separate license).

Most of the text below was written from the perspective of using the APIs on device (Model HQ App, or Model HQ Dev), although the APIs apply to Model HQ Server as well. 

## Model HQ Client SDK

The client SDK exposes the APIs through a Python interface to make it to easy to integrate into other Agent, RAG and generative AI pipelines. 

The first step is to create a client, similar to Open AI and other API-based model services.

In most cases, you can see the auto-detect setup convenience function `get_url_string()` to automatically connect to the server. 

```python
from llmware_client_sdk import LLMWareClient, get_url_string

# create client interface into model hq windows background server
api_endpoint = get_url_string()

# alt: direct
# api_endpoint = "http://localhost:8088"

client = LLMWareClient(api_endpoint=api_endpoint)
```

Once you have created the client, API calls can be initiated through methods implemented on the client.  

## Getting Started

Model inferencing takes place on device, and upon first invocation of a selected model, the model will be pulled from a secure LLMWare repository, and cached onto the local device.  Depending upon the size of the model and the wifi/network connection, it can take between 30 seconds and a few minutes to download the model the first time.  After that, upon each subsequent use, the model will be loaded from disk, and generally takes no more than a few seconds to load.

**Example # 1 - Inference** - this is the core API for accessing a model

```python
prompt = "What are the best sites to see in France?"
model_name = "llama-3.2-1b-instruct-ov"

print("\nStarting 'Hello World'")
print(f"Prompt: {prompt}")
print(f"Model: {model_name}\n")

# this is the main inference API
response = client.inference(
    prompt=prompt,
    model_name=model_name,
    max_output=100,
    trusted_key=""
)

# note: will stop at output of 100 tokens and will provide a 'complete' response (e.g., not streamed)
print("\nhello world test # 1 - inference response: ", response)
```

**Example #2 - Stream** - this is the streaming version of the core model inference API

```python
model_name = "llama-3.2-3b-instruct-ov"
prompt = "What are the main theoretical challenges with quantum gravity?"

print("\nRunning Model Locally in Streaming Mode")
print(f"Prompt: {prompt}")
print(f"Model: {model_name}\n")

# the stream method is called and consumed as a generator function
for token in client.stream(
    prompt=prompt,
    model_name=model_name,
    max_output=300,
    trusted_key=""
):
    print(token, end="")
```

For many use cases, just using the two APIs above will give you the ability to easily access and integrate a wide range of models.  

**Example #3 - Finding Models**

There are several key utility APIs that help to find available models:

**list_all_models** - generally models in the catalog can be invoked using inference/stream with the unique identifier of `model_name`.  

```python

# what models are available? 

model_list = client.list_all_models()

# print it out the list to screen
print("model list: ", model_list)
for i, mod in enumerate(model_list["response"]):
  print("model: ", i, mod)
```

**model_lookup** - Lookup Specific Model with more details from the Model Card

```python
print("\nmodel lookup example\n")
response = client.model_lookup(model_name, **kwargs)
print("response: ", response)
```

**model_load** - load a selected model into memory

```python
print("\nmodel load test example\n")
response = client.model_load(model_name, **kwargs)
print("response: ", response)
```

**model_unload** - unload a selected model from memory

```python
print("\nmodel unload test example\n")
response = client.model_unload(model_name, **kwargs)
print("response: ", response)
```

## RAG

In addition to pure model inferencing, there are several methods provided to integrate documents into an inference. A more enhanced set of RAG capabilities (including vector db and full semantic search) are provided on the Model HQ Server.

**document_inference** - ask question to a document over API

```python
# rag one step api process

document_path = os.path.abspath(
    ".\\modelhq_client\\sample_files\\Bia EXECUTIVE EMPLOYMENT AGREEMENT.pdf"
)
question = "What is the annual rate of the base salary?"
model_name = "llama-3.2-3b-instruct-ov"

print(f"\n\nRAG Example - {question}\n")
response = client.document_inference(document_path, question, model_name=model_name)
print("document inference response - ", response['llm_response'])
```

## Agents

You can create an agent process in the UI, and then invoke and run the agent over API as follows:

```python
# selected process
process_name = "intake_processing"

# input to the agent
fp = os.path.abspath(".\\sample_files\\customer_transcript_1.txt")
with open(fp, "r") as f:
    text = f.read()

# call and run the agent process
response = client.run_agent(process_name=process_name, text=text, trusted_key="")
print("--run_agent intake_processing: ", response)
```

**get_all_agents** - provides a list of agents available

```python
# show all agents available on the background server
agent_response = client.get_all_agents()
for i, agent in enumerate(agent_response["response"]):
    print("--agents available: ", i, agent)
```

## Useful Admin Functions 

**ping** - check that the platform is running and that the client is connected

```python
response = client.ping()
print("response: ", response)
```

**system_info** - get information about the system

```python
# get system info
x = client.system_info()
print("system info: ", x)

# get details about the backend process
details = get_server_details()
print("server details: ", details)
```

**stop_server** - stop the Model HQ platform (running as a background service on Windows)

```python
stop_server()
```

## Trusted Key

Since the Model HQ platform is designed for self-hosted deployment (and generally for internal enterprise user access - not consumer-scale deployment), we provide flexible options to enable separate API key implementations on top of the platform.  We provide a flexible, easy-to-configure 'trusted_key' parameter which can be set at the time of launching the backend platform.

Note: for most development stage activities, this can be skipped entirely, and no trusted_key needs to be set, especially for on device use.  


## Models

Core inference endpoints for text generation, vision analysis, and specialized model functions.

### Create stream

**POST** `/stream/`

Generate a streaming inference response from a selected model. The response will be streamed back in real-time as the model generates tokens.

**Timeout:** 60s | **Response:** llm_response | **Streaming:** Yes

#### Required Parameters

- `model_name` (string): The name of the model to use for inference
- `prompt` (string): The input text prompt to generate a response for


#### Optional Parameters

- `max_output` (integer): Maximum number of tokens to generate (default: 100)
- `temperature` (number): Controls randomness in generation (0.0-1.0) (default: 0.0)
- `sample` (boolean): Whether to use sampling for generation (default: true)
- `context` (string): Additional context to provide to the model
- `api_key` (string): Your API authentication key
- `trusted_key` (string): Alternative trusted authentication key


#### Example Request

```json
{
  "model_name": "phi-3-ov",
  "prompt": "Explain quantum computing in simple terms",
  "max_output": 300,
  "temperature": 0.7,
  "api_key": "your-api-key", # Optional

  "response": "client.stream(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "llm_response": "Quantum computing is a revolutionary approach..."
}
```

### Create inference

**POST** `/inference/`

Generate a complete inference response from a selected model. The response will be the complete generation from the model returned as a single response.

**Timeout:** 60s | **Response:** llm_response

#### Required Parameters

- `prompt` (string): The input text prompt to generate a response for
- `model_name` (string): The name of the model to use for inference


#### Optional Parameters

- `max_output` (integer): Maximum number of tokens to generate (default: 100)
- `temperature` (number): Controls randomness in generation (0.0-1.0) (default: 0.7)
- `sample` (boolean): Whether to use sampling for generation (default: true)
- `api_key` (string): Your API authentication key
- `context` (string): Additional context to provide to the model
- `params` (object): Additional model-specific parameters
- `fx` (string): Function execution parameters
- `trusted_key` (string): Alternative trusted authentication key


#### Example Request

```json
{
  "prompt": "Write a short story about artificial intelligence",
  "model_name": "llama-3.2-3b-instruct-ov",
  "max_output": 100,
  "temperature": 0.8,
  "api_key": "your-api-key", # Optional

  "response": "client.inference(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "llm_response": "Artificial intelligence represents one of humanity's greatest..."
}
```

### Function call

**POST** `/function_call/`

Execute a specialized function call with SLIM model for structured outputs and specific tasks.

**Timeout:** 60s | **Response:** llm_response

#### Required Parameters

- `model_name` (string): The SLIM model name to use for function calling
- `context` (string): The context or input text for the function


#### Optional Parameters

- `prompt` (string): Additional prompt instructions
- `params` (object): Function-specific parameters
- `function` (string): Specific function to execute
- `api_key` (string): Your API authentication key
- `get_logits` (boolean): Whether to return model logits
- `max_output` (integer): Maximum tokens to generate
- `temperature` (number): Sampling temperature
- `sample` (boolean): Whether to use sampling
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "model_name": "phi-3-ov",
  "context": "John Smith works at Acme Corp as a Software Engineer. He can be reached at [john@acme.com](mailto:john@acme.com).",
  "function": "extract_entities",
  "api_key": "your-api-key", # Optional

  "response": "client.function_call(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "llm_response": "{\"name\": \"John Smith\", \"company\": \"Acme Corp\", \"role\": \"Software Engineer\", \"email\": \"john@acme.com\"}"
}
```

### Sentiment analysis

**POST** `/sentiment/`

Execute sentiment analysis using a specialized SLIM sentiment model.

**Timeout:** 60s | **Response:** llm_response

#### Required Parameters

- `context` (string): The text to analyze for sentiment


#### Optional Parameters

- `model_name` (string): Sentiment model to use
- `get_logits` (boolean): Whether to return model logits
- `max_output` (integer): Maximum tokens to generate
- `temperature` (number): Sampling temperature
- `sample` (boolean): Whether to use sampling
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "context": "I absolutely love this new product! It's amazing and works perfectly.",
  "api_key": "your-api-key", # Optional

  "response": "client.sentiment(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "llm_response": "{\"sentiment\": \"positive\", \"confidence\": 0.95}"
}
```

### Extract information

**POST** `/extract/`

Execute information extraction using a SLIM extract model to pull specific data from text.

**Timeout:** 60s | **Response:** llm_response

#### Required Parameters

- `context` (string): The text to extract information from
- `extract_keys` (array): List of keys/fields to extract from the text


#### Optional Parameters

- `get_logits` (boolean): Whether to return model logits
- `max_output` (integer): Maximum tokens to generate
- `temperature` (number): Sampling temperature
- `sample` (boolean): Whether to use sampling
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "context": "Invoice #12345 dated March 15, 2024. Total amount: $1,250.00. Customer: ABC Corp.",
  "extract_keys": ["invoice_number", "date", "total_amount", "customer"],
  "api_key": "your-api-key", # Optional

  "response": "client.extract(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "llm_response": "{\"invoice_number\": \"12345\", \"date\": \"March 15, 2024\", \"total_amount\": \"$1,250.00\", \"customer\": \"ABC Corp\"}"
}
```

### Vision inference

**POST** `/vision/`

Execute vision model inference to analyze and describe images with text prompts.

**Timeout:** 360s | **Response:** llm_response

#### Required Parameters

- `uploaded_files` (array): Array of image files to analyze
- `prompt` (string): Text prompt describing what to analyze in the image


#### Optional Parameters

- `max_output` (integer): Maximum tokens to generate
- `model_name` (string): Vision model to use
- `temperature` (number): Sampling temperature
- `sample` (boolean): Whether to use sampling
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "uploaded_files": ["image1.jpg"],
  "prompt": "Describe what you see in this image",
  "model_name": "mistral-7b-instruct-v0.3-ov",
  "api_key": "your-api-key", # Optional

  "response": "client.vision(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "llm_response": "I can see a beautiful landscape with mountains in the background..."
}
```

### Vision stream

**POST** `/vision_stream/`

Generate a streaming inference response from vision model for real-time image analysis.

**Timeout:** 360s | **Response:** llm_response | **Streaming:** Yes

#### Required Parameters

- `uploaded_files` (array): Array of image files to analyze
- `model_name` (string): Vision model to use for streaming
- `prompt` (string): Text prompt for image analysis


#### Optional Parameters

- `max_output` (integer): Maximum tokens to generate
- `temperature` (number): Sampling temperature
- `sample` (boolean): Whether to use sampling
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "uploaded_files": ["image1.jpg"],
  "model_name": "llama-3.2-3b-instruct-ov",
  "prompt": "Analyze this image and describe the scene",
  "api_key": "your-api-key", # Optional

  "response": "client.vision_stream(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "llm_response": "The image shows a bustling city street..."
}
```

### Semantic ranking

**POST** `/rank/`

Execute semantic similarity ranking with reranker model to rank documents by relevance to a query.

**Timeout:** 60s | **Response:** llm_response

#### Required Parameters

- `query` (string): The search query to rank documents against
- `documents` (array): Array of documents to rank


#### Optional Parameters

- `model_name` (string): Reranker model to use
- `text_chunk_size` (integer): Size of text chunks for processing
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "query": "machine learning algorithms",
  "documents": [
    "Document about neural networks",
    "Article on cooking recipes",
    "Paper on deep learning"
  ],
  "api_key": "your-api-key" # Optional

  "response": "client.rank(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "llm_response": "[{\"doc_id\": 0, \"score\": 0.95}, {\"doc_id\": 2, \"score\": 0.87}, {\"doc_id\": 1, \"score\": 0.12}]"
}
```

### Text classification

**POST** `/classify/`

Execute text classification inference, primarily used for safety controls and content moderation.

**Timeout:** 60s | **Response:** llm_response

#### Required Parameters

- `model_name` (string): Classification model to use
- `context` (string): Text to classify


#### Optional Parameters

- `text_chunk_size` (integer): Size of text chunks for processing
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "model_name": "phi-4-ov",
  "context": "This is a sample text to classify for safety",
  "api_key": "your-api-key" # Optional

  "response": "client.classify(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "llm_response": "{\"classification\": \"safe\", \"confidence\": 0.98}"
}
```

### Generate embeddings

**POST** `/embedding/`

Generate vector embeddings for text using embedding models for semantic search and similarity.

**Timeout:** 60s | **Response:** embeddings

#### Required Parameters

- `model_name` (string): Embedding model to use
- `context` (string): Text to generate embeddings for


#### Optional Parameters

- `text_chunk_size` (integer): Size of text chunks for processing
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "model_name": "llama-3.2-3b-instruct-ov",
  "context": "This is a sample text to embed",
  "api_key": "your-api-key" # Optional

  "response": "client.embedding(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "embeddings": [0.1, -0.2, 0.3, 0.4, -0.1]
}
```

### List models

**POST** `/list_all_models/`

Returns a list of all models available on the server.

**Timeout:** 3s | **Response:** response

#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "trusted_key": "your-trusted-key",

  "response": "client.list_all_models(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": ["llama-3.2-1b-instruct-ov", "llama-3.2-3b-instruct-ov", "mistral-7b-instruct-v0.3-ov", "phi-4-ov"]
}
```

### System information

**POST** `/system_info/`

Returns key information about the system and server configuration.

**Timeout:** 3s | **Response:** response

#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "trusted_key": "your-trusted-key",

  "response": "client.system_info(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": {
    "version": "1.0.0",
    "gpu_count": 2,
    "memory": "32GB",
    "status": "active"
  }
}
```

### Model information

**POST** `/model_lookup/`

Returns detailed model card information about a selected model.

**Timeout:** 3s | **Response:** response

#### Required Parameters

- `model_name` (string): Name of the model to look up


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "model_name": "mistral-7b-instruct-v0.3-ov",
  "trusted_key": "your-trusted-key",

  "response": "client.model_lookup(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": {
    "name": "mistral-7b-instruct-v0.3-ov",
    "parameters": "7B",
    "context_length": 4096,
    "loaded": true
  }
}
```

### Load model

**POST** `/model_load/`

Explicitly loads a selected model into memory on the API server, useful as a preparation step.

**Timeout:** 120s | **Response:** response

#### Required Parameters

- `model_name` (string): Name of the model to load into memory


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "model_name": "phi-4-ov",
  "trusted_key": "your-trusted-key",

  "response": "client.model_load(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": {
    "model_name": "phi-4-ov",
    "status": "loaded",
    "memory_usage": "6.2GB"
  }
}
```

### Unload model

**POST** `/model_unload/`

Explicitly unloads a selected model from memory on the API server.

**Timeout:** 30s | **Response:** response

#### Required Parameters

- `model_name` (string): Name of the model to unload from memory


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "model_name": "llama-3.2-1b-instruct-ov",
  "trusted_key": "your-trusted-key",

  "response": "client.model_unload(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": {
    "model_name": "llama-3.2-1b-instruct-ov",
    "status": "unloaded",
    "memory_freed": "6.2GB"
  }
}
```

## RAG (Retrieval Augmented Generation)

Document and library-based question answering with semantic search and context retrieval.

### Document Q&A

**POST** `/document_inference/`

Specialized inference to ask questions about uploaded documents. Combines document parsing, semantic search, and LLM inference.

**Timeout:** 60s | **Response:** response

#### Required Parameters

- `question` (string): Question to ask about the document
- `uploaded_document` (file): Document file to analyze


#### Optional Parameters

- `model_name` (string): LLM model to use for answering
- `text_chunk_size` (integer): Size of text chunks for processing
- `tables_only` (boolean): Whether to focus only on tables
- `use_top_n_context` (integer): Number of top context chunks to use
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "question": "What is the main conclusion of this research paper?",
  "uploaded_document": "research_paper.pdf",
  "model_name": "phi-3-ov",
  "api_key": "your-api-key" # Optional

  "response": "client.document_inference(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": "Based on the document analysis, the main conclusion is..."
}
```

### Library Q&A

**POST** `/library_inference/`

Specialized RAG inference that ranks entries from a library and generates responses based on retrieved content.

**Timeout:** 60s | **Response:** response

#### Required Parameters

- `question` (string): Question to ask about the library content
- `library_name` (string): Name of the library to search
- `model_name` (string): LLM model to use for answering


#### Optional Parameters

- `use_top_n_context` (integer): Number of top context chunks to use
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "question": "What are the key features of the product?",
  "library_name": "product_docs",
  "model_name": "llama-3.2-3b-instruct-ov",
  "api_key": "your-api-key" # Optional

  "response": "client.library_inference(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": "Based on the library content, the key features include..."
}
```

### Batch document analysis

**POST** `/document_batch_analysis/`

Analyzes multiple documents with a set of questions, ideal for processing contracts, invoices, or reports with consistent queries.

**Timeout:** 600s | **Response:** response

#### Required Parameters

- `uploaded_files` (array): Array of documents to analyze
- `question_list` (array): List of questions to ask each document


#### Optional Parameters

- `model_name` (string): LLM model to use for analysis
- `reranker` (string): Reranker model for result optimization
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "uploaded_files": ["contract1.pdf", "contract2.pdf"],
  "question_list": [
    "What is the governing law?",
    "What is the termination notice period?"
  ],
  "model_name": "mistral-7b-instruct-v0.3-ov",
  "api_key": "your-api-key" # Optional

  "response": "client.document_batch_analysis(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": {
    "results": [
      {
        "document": "contract1.pdf",
        "answers": ["Delaware", "30 days"]
      },
      {
        "document": "contract2.pdf",
        "answers": ["California", "60 days"]
      }
    ]
  }
}
```

## Library Management

Create and manage document libraries for knowledge base construction and semantic search capabilities.

### Create library

**POST** `/create_new_library/`

Creates a new library which is a collection of documents that are parsed, indexed and organized for knowledge retrieval.

**Timeout:** 30s | **Response:** response

#### Required Parameters

- `library_name` (string): Name for the new library


#### Optional Parameters

- `account_id` (string): Account identifier
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "library_name": "contract_library",
  "account_id": "user123",
  "api_key": "your-api-key" # Optional

  "response": "client.create_new_library(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": {
    "library_name": "contract_library",
    "status": "created",
    "doc_count": 0
  }
}
```

### Add files to library

**POST** `/add_files/`

Core method for adding files to a Library, which are parsed, text chunked and indexed automatically upon upload.

**Timeout:** 300s | **Response:** response

#### Required Parameters

- `library_name` (string): Name of the library to add files to
- `uploaded_files` (array): Array of files to upload and process


#### Optional Parameters

- `account_id` (string): Account identifier
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "library_name": "contract_library",
  "uploaded_files": ["contract1.pdf", "contract2.pdf"],
  "api_key": "your-api-key" # Optional

  "response": "client.add_files(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": {
    "files_processed": 2,
    "chunks_created": 45,
    "status": "completed"
  }
}
```

### Query library

**POST** `/query/`

Execute a text-based query against an existing library to find relevant documents and passages.

**Timeout:** 60s | **Response:** response

#### Required Parameters

- `library_name` (string): Name of the library to query
- `user_query` (string): Search query text


#### Optional Parameters

- `result_count` (integer): Number of results to return
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "library_name": "contract_library",
  "user_query": "termination clauses",
  "result_count": 10,
  "api_key": "your-api-key" # Optional

  "response": "client.query(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": [
    {
      "doc_id": 1,
      "text": "Termination clause content...",
      "score": 0.95
    }
  ]
}
```

### Get library info

**POST** `/get_library_card/`

Get comprehensive metadata information about a library including document count, embedding status, and configuration.

**Timeout:** 10s | **Response:** response

#### Required Parameters

- `library_name` (string): Name of the library to get information for


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "library_name": "contract_library",
  "api_key": "your-api-key" # Optional

  "response": "client.get_library_card(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": {
    "library_name": "contract_library",
    "doc_count": 25,
    "embedding_status": "installed",
    "created_date": "2024-01-15"
  }
}
```

### Install embeddings

**POST** `/install_embedding/`

Installs vector embeddings across a library and creates the appropriate vectors in the vector database for semantic search.

**Timeout:** 600s | **Response:** response

#### Required Parameters

- `library_name` (string): Name of the library to install embeddings for


#### Optional Parameters

- `embedding_model` (string): Embedding model to use
- `vector_db` (string): Vector database to use
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "library_name": "contract_library",
  "embedding_model": "llama-3.2-1b-instruct-ov",
  "api_key": "your-api-key" # Optional

  "response": "client.install_embedding(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": {
    "embeddings_created": 1250,
    "vector_db": "milvus",
    "status": "completed"
  }
}
```

### Semantic search

**POST** `/semantic_query/`

Executes a semantic/vector query against embeddings for more accurate content retrieval based on meaning rather than keywords.

**Timeout:** 60s | **Response:** response

#### Required Parameters

- `library_name` (string): Name of the library to search
- `user_query` (string): Semantic search query


#### Optional Parameters

- `result_count` (integer): Number of results to return
- `db` (string): Database type (default: mongo)
- `vector_db` (string): Vector database type (default: milvus)
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "library_name": "contract_library",
  "user_query": "contract termination conditions",
  "result_count": 5,
  "api_key": "your-api-key" # Optional

  "response": "client.semantic_query(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": [
    {
      "doc_id": 1,
      "similarity_score": 0.92,
      "text": "Contract termination..."
    }
  ]
}
```

### List documents

**POST** `/get_document_list/`

Returns a comprehensive list of all documents contained in a specific library with metadata.

**Timeout:** 30s | **Response:** response

#### Required Parameters

- `library_name` (string): Name of the library to list documents from


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "library_name": "contract_library",
  "api_key": "your-api-key" # Optional

  "response": "client.get_document_list(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": [
    {
      "doc_id": 1,
      "filename": "contract1.pdf",
      "pages": 12,
      "upload_date": "2024-01-15"
    },
    {
      "doc_id": 2,
      "filename": "contract2.pdf",
      "pages": 8,
      "upload_date": "2024-01-16"
    }
  ]
}
```

### Extract document text

**POST** `/get_document_text/`

Returns the complete text extract of a selected document from a specified library for review or processing.

**Timeout:** 60s | **Response:** response

#### Required Parameters

- `library_name` (string): Name of the library containing the document


#### Optional Parameters

- `doc_id` (string): Document ID to extract text from
- `doc_fn` (string): Document filename to extract text from
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "library_name": "contract_library",
  "doc_id": "1",
  "api_key": "your-api-key" # Optional

  "response": "client.get_document_text(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": {
    "doc_id": 1,
    "filename": "contract1.pdf",
    "text": "Full document text content..."
  }
}
```

## Agent Execution

Execute automated multi-step processes and workflows using pre-configured intelligent agents.

### Execute agent

**POST** `/run_agent/`

Executes a pre-configured agent process for automated multi-step document analysis and task completion.

**Timeout:** 300s | **Response:** response

#### Required Parameters

- `process_name` (string): Name of the agent process to execute


#### Optional Parameters

- `process_zip` (file): Agent process zip file to upload and execute
- `input_list` (array): List of inputs for the agent process
- `text` (string): Text input for the agent
- `snippet` (string): Code or text snippet input
- `document_file` (file): Document file for agent processing
- `table_file` (file): Table/spreadsheet file for processing
- `image_file` (file): Image file for agent analysis
- `source_file` (file): Source code file for processing
- `user_files` (array): Additional user files for processing
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "process_name": "contract_analyzer",
  "document_file": "contract.pdf",
  "input_list": ["analysis_type", "text", "comprehensive"],
  "api_key": "your-api-key" # Optional

  "response": "client.run_agent(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": {
    "agent_name": "contract_analyzer",
    "status": "completed",
    "results": {
      "effective_date": "2024-01-01",
      "base_salary": "$150,000"
    },
    "execution_time": "45s"
  }
}
```

### Find agent

**POST** `/lookup_agent/`

Checks if a specific agent process exists and is available on the server for execution.

**Timeout:** 10s | **Response:** response

#### Required Parameters

- `process_name` (string): Name of the agent process to look up


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "process_name": "contract_analyzer",
  "trusted_key": "your-trusted-key",

  "response": "client.lookup_agent(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": {
    "process_name": "contract_analyzer",
    "available": true,
    "description": "Analyzes contracts for key terms",
    "version": "1.2.0"
  }
}
```

### List all agents

**POST** `/get_all_agents/`

Returns a comprehensive list of all available agent processes on the server with their capabilities.

**Timeout:** 10s | **Response:** response

#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "trusted_key": "your-trusted-key",

  "response": "client.get_all_agents(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": [
    {
      "name": "contract_analyzer",
      "description": "Contract analysis agent",
      "version": "1.2.0"
    },
    {
      "name": "invoice_processor",
      "description": "Invoice processing agent",
      "version": "1.0.1"
    }
  ]
}
```

## Utilities & Administration

Server management, health checks, and administrative functions for monitoring and control.

### Health check

**POST** `/ping/`

Quick health check to verify if the API server is responsive and operational.

**Timeout:** 5s | **Response:** response

#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "trusted_key": "your-trusted-key",

  "response": "client.ping(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": {
    "status": "ok",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "1.0.0"
  }
}
```

### Stop server

**POST** `/server_stop/`

Gracefully stops the API server. Use with caution as this will terminate all active connections.

**Timeout:** 10s | **Response:** response

#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "trusted_key": "your-trusted-key",

  "response": "client.server_stop(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": {
    "status": "stopping",
    "message": "Server shutdown initiated"
  }
}
```

### API catalog

**POST** `/get_api_catalog/`

Returns a complete catalog of all available API endpoints with their specifications and parameters.

**Timeout:** 10s | **Response:** response

#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "trusted_key": "your-trusted-key",

  "response": "client.get_api_catalog(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": [
    {
      "api_name": "inference",
      "endpoint": "/inference/",
      "method": "POST",
      "timeout": 60
    },
    {
      "api_name": "stream",
      "endpoint": "/stream/",
      "method": "POST",
      "timeout": 60
    }
  ]
}
```

### Database info

**POST** `/get_db_info/`

Returns information about registered databases and vector databases available on the server.

**Timeout:** 10s | **Response:** response

#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "trusted_key": "your-trusted-key",

  "response": "client.get_db_info(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": {
    "databases": ["mongo", "sqlite"],
    "vector_databases": ["milvus", "faiss"],
    "default_db": "mongo",
    "default_vector_db": "milvus"
  }
}
```
