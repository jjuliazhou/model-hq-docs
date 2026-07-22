---
title: "API Reference"
description: "Complete API reference for Model HQ endpoints"
---

# API Reference

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

- `sample` (boolean): Enable sampling during generation
- `temperature` (float): Sampling temperature for response generation
- `max_output` (integer): Maximum number of output tokens
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

### Inference with JSON

**POST** `/inference_json/`

Generate a complete inference response with JSON-encoded request body. Same as the standard inference endpoint but accepts parameters as a JSON payload rather than form data.

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
  "api_key": "your-api-key",

  "response": "client.inference_json(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "llm_response": "Artificial intelligence represents one of humanity's greatest..."
}
```

### Generate image

**POST** `/generate_image/`

Generate an image from a text prompt using a supported image generation model. Returns the file path to the saved image.

**Timeout:** 120s | **Response:** fp

#### Required Parameters

- `prompt` (string): Text description of the image to generate


#### Optional Parameters

- `model_name` (string): Image generation model to use
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "prompt": "A serene mountain landscape at sunset",
  "model_name": "sd-xl",
  "trusted_key": "your-trusted-key",

  "response": "client.generate_image(prompt=prompt, api_key=api_key)"
}
```

#### Example Response
```json
{
  "fp": "/path/to/generated/image.bmp"
}
```

### Generate speech

**POST** `/generate_speech/`

Generate speech audio from text using a supported text-to-speech model. Returns the file path to the saved audio file.

**Timeout:** 120s | **Response:** fp

#### Required Parameters

- `prompt` (string): Text to convert to speech


#### Optional Parameters

- `model_name` (string): TTS model to use
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "prompt": "Hello, welcome to Model HQ. This is a text to speech demonstration.",
  "model_name": "tts-model",
  "trusted_key": "your-trusted-key",

  "response": "client.generate_speech(prompt=prompt, api_key=api_key)"
}
```

#### Example Response
```json
{
  "fp": "/path/to/generated/speech.wav"
}
```

### Download model

**POST** `/model_download/`

Downloads a model directly from the Model HQ server to the local device, rather than from an external model repository.

**Timeout:** 120s | **Response:** response

#### Required Parameters

- `model_name` (string): Name of the model to download


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "model_name": "llama-3.2-1b-instruct-ov",
  "trusted_key": "your-trusted-key",

  "response": "client.model_download(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "response": {
    "status": "success",
    "zip_fp": "/path/to/downloaded/model.zip"
  }
}
```

### Batch test

**POST** `/test_batch/`

Sends a test file to the server for batch evaluation and returns aggregated results. Ideal for running a full test suite against a model in a single request.

**Timeout:** 1000s | **Response:** test_results

#### Required Parameters

- `model_name` (string): Name of the model to test
- `test_file` (file): Test file containing prompts and expected outputs


#### Optional Parameters

- `max_output` (integer): Maximum output tokens
- `temperature` (float): Sampling temperature
- `sample` (boolean): Enable sampling
- `api_key` (string): API key for authentication
- `context` (string): Context for the test
- `params` (object): Additional model parameters
- `fx` (string): Function name for function-call testing
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "model_name": "llama-3.2-3b-instruct-ov",
  "test_file": "test_suite.jsonl",
  "trusted_key": "your-trusted-key",

  "response": "client.test_batch(model_name='llama-3.2-3b-instruct-ov', test_file='test_suite.jsonl')"
}
```

#### Example Response
```json
{
  "test_results": {
    "total": 100,
    "passed": 95,
    "failed": 5,
    "accuracy": 0.95
  }
}
```

### Test model

**POST** `/test/`

Unpacks a test file and runs each test individually, returning per-test results. Designed for real-time command-line testing where you want to see each result as it completes.

**Timeout:** 60s | **Response:** test_results

#### Required Parameters

- `model_name` (string): Name of the model to test
- `test_file` (file): Test file containing prompts and expected outputs


#### Optional Parameters

- `max_output` (integer): Maximum output tokens
- `temperature` (float): Sampling temperature
- `sample` (boolean): Enable sampling
- `api_key` (string): API key for authentication
- `context` (string): Context for the test
- `params` (object): Additional model parameters
- `fx` (string): Function name for function-call testing
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "model_name": "llama-3.2-3b-instruct-ov",
  "test_file": "test_suite.jsonl",
  "trusted_key": "your-trusted-key",

  "response": "client.test(model_name='llama-3.2-3b-instruct-ov', test_file='test_suite.jsonl')"
}
```

#### Example Response
```json
{
  "test_results": [
    {"test_id": 1, "passed": true, "output": "..."},
    {"test_id": 2, "passed": false, "output": "..."}
  ]
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
- `rag` (boolean): Enable retrieval-augmented generation for enhanced context
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

### Library stream

**POST** `/library_stream_inference/`

Streaming version of Library Q&A. Ranks entries from a library and streams the generated response token by token for real-time display.

**Timeout:** 60s | **Response:** response | **Streaming:** Yes

#### Required Parameters

- `question` (string): Question to ask about the library content
- `library_name` (string): Name of the library to search
- `model_name` (string): LLM model to use for answering


#### Optional Parameters

- `db` (string): Database type (default: mongo)
- `vector_db` (string): Vector database type (default: milvus)
- `account_name` (string): Account identifier for multi-tenant setups
- `use_top_n_context` (integer): Number of top context chunks to use
- `result_count` (integer): Number of results to retrieve
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "question": "What are the key features of the product?",
  "library_name": "product_docs",
  "model_name": "llama-3.2-3b-instruct-ov",
  "api_key": "your-api-key",

  "response": "client.library_stream_inference(library_name=library_name, question=question, model_name=model_name)"
}
```

#### Example Response
```json
{
  "llm_response": "Based on the library content, the key features include..."
}
```

### Build source

**POST** `/build_source/`

Builds an indexed source file from a set of uploaded documents. Files are parsed, text chunked and organized into a single jsonl source file for efficient retrieval.

**Timeout:** 300s | **Response:** response

#### Required Parameters

- `uploaded_files` (array): Array of files to process into a source


#### Optional Parameters

- `text_chunk_size` (integer): Size of text chunks for processing
- `tables_only` (boolean): Whether to focus only on tables
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "uploaded_files": ["document1.pdf", "document2.pdf"],
  "text_chunk_size": 500,
  "api_key": "your-api-key",

  "response": "client.build_source(files, source_name='my_source')"
}
```

#### Example Response
```json
{
  "response": "/path/to/source/my_source.jsonl"
}
```

### Build source context

**POST** `/build_source_context/`

Executes the first half of a RAG query by comparing a question with a source document and returning the most relevant parts with metadata (file name, page number, etc.). The output can be passed separately to generate an answer.

**Timeout:** 60s | **Response:** response

#### Required Parameters

- `uploaded_source` (file): Source file to search
- `question` (string): Query to find relevant context for


#### Optional Parameters

- `use_top_n_context` (integer): Number of top context chunks to use (default: 5)
- `tables_only` (boolean): Whether to focus only on tables
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "uploaded_source": "my_source.jsonl",
  "question": "What are the termination clauses?",
  "use_top_n_context": 6,
  "api_key": "your-api-key",

  "response": "client.build_source_context(question=question, source_name='my_source')"
}
```

#### Example Response
```json
{
  "response": [
    {
      "doc_id": 1,
      "text": "Relevant passage from the source...",
      "score": 0.95,
      "page_num": 3
    }
  ]
}
```

### Source Q&A

**POST** `/source_inference/`

Executes a complete RAG inference on a prebuilt source file. Combines semantic ranking, context building, and LLM prompting to answer questions based on source content.

**Timeout:** 60s | **Response:** llm_response

#### Required Parameters

- `uploaded_source` (file): Source file to query
- `question` (string): Question to ask about the source content


#### Optional Parameters

- `model_name` (string): LLM model to use for answering
- `max_output` (integer): Maximum tokens to generate
- `use_top_n_context` (integer): Number of top context chunks to use
- `tables_only` (boolean): Whether to focus only on tables
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "uploaded_source": "my_source.jsonl",
  "question": "What are the key conclusions?",
  "model_name": "llama-3.2-3b-instruct-ov",
  "use_top_n_context": 6,
  "api_key": "your-api-key",

  "response": "client.source_inference(source_path, question, model_name=model_name)"
}
```

#### Example Response
```json
{
  "llm_response": "Based on the source content, the key conclusions are..."
}
```

### Source stream

**POST** `/source_stream_inference/`

Streaming version of Source Q&A. Executes RAG inference on a prebuilt source and streams the generated response token by token for real-time display.

**Timeout:** 60s | **Response:** llm_response | **Streaming:** Yes

#### Required Parameters

- `uploaded_source` (file): Source file to query
- `question` (string): Question to ask about the source content


#### Optional Parameters

- `model_name` (string): LLM model to use for answering
- `max_output` (integer): Maximum tokens to generate
- `use_top_n_context` (integer): Number of top context chunks to use
- `tables_only` (boolean): Whether to focus only on tables
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "uploaded_source": "my_source.jsonl",
  "question": "What are the key conclusions?",
  "model_name": "llama-3.2-3b-instruct-ov",
  "use_top_n_context": 6,
  "api_key": "your-api-key",

  "response": "client.source_stream_inference(source_path, question, model_name=model_name)"
}
```

#### Example Response
```json
{
  "llm_response": "Based on the source content, the key conclusions are..."
}
```

### Predictive model inference

**POST** `/inference_predictive_model/`

Runs a predictive model inference against a test file or dataset, returning batch analysis results. Useful for evaluating model performance on structured test data.

**Timeout:** 60s | **Response:** results

#### Required Parameters

- `test_file` (file): Test file containing evaluation data
- `dataset_name` (string): Name of the dataset to use for evaluation


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "test_file": "evaluation_data.jsonl",
  "dataset_name": "contract_qa_v1",
  "trusted_key": "your-trusted-key",

  "response": "client.inference_predictive_model(test_file='evaluation_data.jsonl', dataset_name='contract_qa_v1')"
}
```

#### Example Response
```json
{
  "results": {
    "accuracy": 0.92,
    "total_samples": 100,
    "passed": 92
  }
}
```

## Library Management

Create and manage document libraries for knowledge base construction and semantic search capabilities.

### Create library

**POST** `/library/create_new_library/`

Creates a new library which is a collection of documents that are parsed, indexed and organized for knowledge retrieval.

**Timeout:** 30s | **Response:** response

#### Required Parameters

- `library_name` (string): Name for the new library
- `account_name` (string): Account identifier for multi-tenant setups
- `db` (string): Database type (e.g., mongo)


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "library_name": "contract_library",
  "account_name": "user123",
  "db": "mongo",
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

**POST** `/library/add_files/`

Core method for adding files to a Library, which are parsed, text chunked and indexed automatically upon upload.

**Timeout:** 300s | **Response:** response

#### Required Parameters

- `library_name` (string): Name of the library to add files to
- `uploaded_files` (array): Array of files to upload and process
- `account_name` (string): Account identifier for multi-tenant setups
- `db` (string): Database type (e.g., mongo)


#### Optional Parameters

- `chunk_size` (integer): Size of text chunks for processing
- `smart_chunking` (boolean): Enable intelligent chunking
- `max_chunk_size` (integer): Maximum chunk size
- `get_images` (boolean): Extract images from documents
- `get_tables` (boolean): Extract tables from documents
- `table_strategy` (string): Strategy for table extraction
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

**POST** `/library/query/`

Execute a text-based query against an existing library to find relevant documents and passages.

**Timeout:** 60s | **Response:** response

#### Required Parameters

- `library_name` (string): Name of the library to query
- `account_name` (string): Account identifier for multi-tenant setups
- `user_query` (string): Search query text


#### Optional Parameters

- `result_count` (integer): Number of results to return
- `db` (string): Database type (default: mongo)
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "library_name": "contract_library",
  "account_name": "user123",
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

**POST** `/library/get_library_card/`

Get comprehensive metadata information about a library including document count, embedding status, and configuration.

**Timeout:** 10s | **Response:** response

#### Required Parameters

- `library_name` (string): Name of the library to get information for
- `account_name` (string): Account identifier for multi-tenant setups
- `db` (string): Database type (e.g., mongo)


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "library_name": "contract_library",
  "account_name": "user123",
  "db": "mongo",
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

**POST** `/library/install_embedding/`

Installs vector embeddings across a library and creates the appropriate vectors in the vector database for semantic search.

**Timeout:** 600s | **Response:** response

#### Required Parameters

- `library_name` (string): Name of the library to install embeddings for
- `account_name` (string): Account identifier for multi-tenant setups
- `model_name` (string): Embedding model to use for vector generation
- `vector_db` (string): Vector database to use
- `db` (string): Database type (e.g., mongo)


#### Optional Parameters

- `embedding_model` (string): Alternative embedding model name
- `batch_size` (integer): Batch size for processing
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "library_name": "contract_library",
  "account_name": "user123",
  "model_name": "all-mini-lm-l6-v2-ov",
  "vector_db": "milvus",
  "db": "mongo",
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

**POST** `/library/semantic_query/`

Executes a semantic/vector query against embeddings for more accurate content retrieval based on meaning rather than keywords.

**Timeout:** 60s | **Response:** response

#### Required Parameters

- `library_name` (string): Name of the library to search
- `account_name` (string): Account identifier for multi-tenant setups
- `user_query` (string): Semantic search query
- `vector_db` (string): Vector database type (default: milvus)
- `db` (string): Database type (default: mongo)
- `embedding_model` (string): Embedding model for query encoding


#### Optional Parameters

- `result_count` (integer): Number of results to return
- `build_context` (boolean): Build context passages from results
- `width_before` (integer): Characters of context before match
- `width_after` (integer): Characters of context after match
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "library_name": "contract_library",
  "user_query": "contract termination conditions",
  "account_name": "user123",
  "vector_db": "milvus",
  "db": "mongo",
  "embedding_model": "all-mini-lm-l6-v2-ov",
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

**POST** `/library/get_document_list/`

Returns a comprehensive list of all documents contained in a specific library with metadata.

**Timeout:** 30s | **Response:** response

#### Required Parameters

- `library_name` (string): Name of the library to list documents from
- `account_name` (string): Account identifier for multi-tenant setups
- `db` (string): Database type (e.g., mongo)


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "library_name": "contract_library",
  "account_name": "user123",
  "db": "mongo",
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

**POST** `/library/get_document_text/`

Returns the complete text extract of a selected document from a specified library for review or processing.

**Timeout:** 60s | **Response:** response

#### Required Parameters

- `library_name` (string): Name of the library containing the document
- `account_name` (string): Account identifier for multi-tenant setups
- `db` (string): Database type (e.g., mongo)


#### Optional Parameters

- `doc_id` (string): Document ID to extract text from
- `doc_fn` (string): Document filename to extract text from
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "library_name": "contract_library",
  "account_name": "user123",
  "db": "mongo",
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

### Add files async

**POST** `/library/add_files_async/`

Non-blocking version of add files. Files are uploaded and queued for processing, allowing the client to continue working while parsing and indexing completes in the background.

**Timeout:** 20s | **Response:** response

#### Required Parameters

- `library_name` (string): Name of the library to add files to
- `uploaded_files` (array): Array of files to upload and process
- `account_name` (string): Account identifier for multi-tenant setups
- `db` (string): Database type (e.g., mongo)


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key
- `chunk_size` (integer): Size of text chunks for processing
- `smart_chunking` (boolean): Enable intelligent chunking
- `max_chunk_size` (integer): Maximum chunk size
- `get_images` (boolean): Extract images from documents
- `get_tables` (boolean): Extract tables from documents
- `table_strategy` (string): Strategy for table extraction


#### Example Request

```json
{
  "library_name": "contract_library",
  "uploaded_files": ["contract1.pdf", "contract2.pdf"],
  "account_name": "user123",
  "db": "mongo",
  "api_key": "your-api-key",

  "response": "client.add_files(library_name, file_path, use_async=True)"
}
```

#### Example Response
```json
{
  "response": {
    "status": "queued",
    "message": "Files added for processing"
  }
}
```

### Install embeddings async

**POST** `/library/install_embedding_async/`

Non-blocking version of install embeddings. Starts the embedding process in the background and returns immediately, allowing the server to process large libraries without timing out.

**Timeout:** 10s | **Response:** response

#### Required Parameters

- `library_name` (string): Name of the library to install embeddings for
- `account_name` (string): Account identifier for multi-tenant setups
- `model_name` (string): Embedding model to use for vector generation
- `vector_db` (string): Vector database to use
- `db` (string): Database type (e.g., mongo)


#### Optional Parameters

- `embedding_model` (string): Alternative embedding model name
- `batch_size` (integer): Batch size for processing
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "library_name": "contract_library",
  "account_name": "user123",
  "model_name": "all-mini-lm-l6-v2-ov",
  "vector_db": "milvus",
  "db": "mongo",
  "api_key": "your-api-key",

  "response": "client.install_embedding(library_name, use_async=True, model_name=model_name)"
}
```

#### Example Response
```json
{
  "response": {
    "embedding_record": {},
    "status": "started"
  }
}
```

## Agent Execution

Execute automated multi-step processes and workflows using pre-configured intelligent agents. Agent execution follows a multi-step flow: **discovery** (find available agents and their signatures), **execution** (run agents with inputs), and **output retrieval** (access results by execution ID).

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

### Get agent signature

**POST** `/get_agent_signature/`

Retrieves detailed metadata about an agent including its required inputs (with names and types), outputs, description, number of steps, and updatable parameters. Essential first step before running an agent.

**Timeout:** 500s | **Response:** agent_signature

#### Required Parameters

- `process_name` (string): Name of the agent process to inspect


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "process_name": "contract_analyzer",
  "trusted_key": "your-trusted-key",

  "response": "client.get_agent_signature(process_name, trusted_key=trusted_key)"
}
```

#### Example Response
```json
{
  "agent_signature": {
    "name": "contract_analyzer",
    "inputs": [["User-Document", "document", ""]],
    "outputs": ["analysis_report"],
    "description": "Analyzes contracts for key terms",
    "steps": 4,
    "updatable_parameters": ["model_name", "temperature"]
  }
}
```

### Get agent description

**POST** `/get_agent_description/`

Returns a user-friendly text description of the agent process, including step-by-step breakdown of what the agent does.

**Timeout:** 5s | **Response:** agent_description

#### Required Parameters

- `process_name` (string): Name of the agent process to describe


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "process_name": "contract_analyzer",
  "trusted_key": "your-trusted-key",

  "response": "client.get_agent_description(process_name, trusted_key=trusted_key)"
}
```

#### Example Response
```json
{
  "agent_description": "This agent analyzes a contract document and extracts key terms including effective date, base salary, and termination provisions."
}
```

### Execute agent

**POST** `/run_agent/`

Executes a pre-configured agent process for automated multi-step document analysis and task completion. Returns an execution ID that can be used to retrieve outputs.

**Timeout:** 500s | **Response:** agent_output

#### Required Parameters

- `process_name` (string): Name of the agent process to execute
- Or `process_map` (object): Inline agent process definition


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key
- `text` (string): Text input for the agent
- `table_file` (file): Table/spreadsheet file for processing
- `image_file` (file): Image file for agent analysis
- `source_file` (file): Source code file for processing
- `document_file` (file): Document file for agent processing
- `process_zip` (file): Agent process zip file to upload and execute


#### Example Request

```json
{
  "process_name": "contract_analyzer",
  "document_file": "contract.pdf",
  "api_key": "your-api-key",

  "response": "client.run_agent(agent_name='contract_analyzer', agent_inputs={'User-Document': 'contract.pdf'})"
}
```

#### Example Response
```json
{
  "agent_output": {
    "agent_name": "contract_analyzer",
    "status": "completed",
    "execution_id": "d0f1ebb5-66ce-47e6-b1c0-f5767a88491e",
    "execution_time": "45s"
  }
}
```

### Execute agent with streaming

**POST** `/run_agent_generator/`

Executes an agent process and streams step-by-step updates in real time. Ideal for displaying progress in a UI as each step completes.

**Timeout:** 500s | **Response:** agent_output | **Streaming:** Yes

#### Required Parameters

- `agent_name` (string): Name of the agent process to execute


#### Optional Parameters

- `agent_inputs` (object): Dictionary of input values for the agent
- `process_zip_path` (string): Path to agent process zip file
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "agent_name": "contract_analyzer",
  "agent_inputs": {"User-Document": "contract.pdf"},
  "trusted_key": "your-trusted-key",

  "response": "client.run_agent_generator(agent_name='contract_analyzer', agent_inputs=inputs)"
}
```

#### Example Response
```json
{
  "agent_output": {
    "step": 1,
    "status": "processing",
    "message": "Parsing document..."
  }
}
```

### Call agent endpoint

**POST** `/agent/{agent_name}/`

Executes an agent through its dedicated endpoint path. Intended for production deployments where the agent has been pre-deployed as a named endpoint on the server. Supports both synchronous and asynchronous execution.

**Timeout:** 500s | **Response:** response

#### Required Parameters

- `agent_name` (string): Name of the deployed agent (in URL path)
- `agent_inputs` (object): Dictionary of input values for the agent


#### Optional Parameters

- `run_async` (boolean): Whether to run asynchronously (default: false)
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "agent_name": "contract_analyzer",
  "agent_inputs": {"User-Document": "contract.pdf"},
  "run_async": false,
  "trusted_key": "your-trusted-key",

  "response": "client.call_agent(agent_name='contract_analyzer', agent_inputs=inputs)"
}
```

#### Example Response
```json
{
  "response": {
    "execution_id": "d0f1ebb5-66ce-47e6-b1c0-f5767a88491e",
    "status": "completed"
  }
}
```

### Get agent output

**POST** `/agent_output/`

Retrieves the output from a completed agent run using its execution ID. Returns the general agent output response.

**Timeout:** 30s | **Response:** response

#### Required Parameters

- `id` (string): Execution ID of the agent run


#### Optional Parameters

- `agent_name` (string): Name of the agent
- `log_name` (string): Specific log name to retrieve
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "id": "d0f1ebb5-66ce-47e6-b1c0-f5767a88491e",
  "trusted_key": "your-trusted-key",

  "response": "client.agent_output(id=execution_id)"
}
```

#### Example Response
```json
{
  "response": {
    "status": "completed",
    "output": "Agent analysis completed successfully"
  }
}
```

### Get agent output (JSON)

**POST** `/get_agent_output_json/`

Retrieves the JSON output values from a completed agent run using its execution ID.

**Timeout:** 30s | **Response:** response

#### Required Parameters

- `id` (string): Execution ID of the agent run


#### Optional Parameters

- `agent_name` (string): Name of the agent
- `log_name` (string): Specific log name to retrieve
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "id": "d0f1ebb5-66ce-47e6-b1c0-f5767a88491e",
  "trusted_key": "your-trusted-key",

  "response": "client.get_agent_output_json(id=execution_id)"
}
```

#### Example Response
```json
{
  "response": {
    "effective_date": "2024-01-01",
    "base_salary": "$150,000",
    "termination_notice": "30 days"
  }
}
```

### Get agent output (files)

**POST** `/get_agent_output_files/`

Downloads the file outputs from a completed agent run as a zip archive using its execution ID.

**Timeout:** 30s | **Response:** response

#### Required Parameters

- `id` (string): Execution ID of the agent run


#### Optional Parameters

- `agent_name` (string): Name of the agent
- `log_name` (string): Specific log name to retrieve
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "id": "d0f1ebb5-66ce-47e6-b1c0-f5767a88491e",
  "trusted_key": "your-trusted-key",

  "response": "client.get_agent_output_files(id=execution_id)"
}
```

#### Example Response
```json
{
  "response": {
    "status": "success",
    "zip_fp": "/path/to/agent_output_d0f1ebb5.zip"
  }
}
```

### Get agent execution logs

**POST** `/get_agent_execution_log_list/`

Returns a list of all execution records for a specific agent on the device, including status and timestamps.

**Timeout:** 5s | **Response:** agent_list

#### Required Parameters

- `agent_name` (string): Name of the agent to get logs for


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "agent_name": "contract_analyzer",
  "trusted_key": "your-trusted-key",

  "response": "client.get_agent_execution_log_list(agent_name=agent_name)"
}
```

#### Example Response
```json
{
  "agent_logs": [
    {
      "execution_id": "d0f1ebb5-66ce-47e6-b1c0-f5767a88491e",
      "status": "completed",
      "timestamp": "2024-01-15T10:30:00Z"
    }
  ]
}
```

### Install agent

**POST** `/install_agent/`

Uploads a prepackaged agent process zip file to install it as a server endpoint.

**Timeout:** 10s | **Response:** agent_details

#### Required Parameters

- `process_zip` (file): Agent process zip file to install


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "process_zip": "contract_analyzer.zip",
  "trusted_key": "your-trusted-key",

  "response": "client.install_agent_zip(process_zip_fp='contract_analyzer.zip')"
}
```

#### Example Response
```json
{
  "agent_details": {
    "process_name": "contract_analyzer",
    "status": "installed"
  }
}
```

### Download agent

**POST** `/download_agent/`

Downloads a prepackaged agent process from the server to the local device as a zip file.

**Timeout:** 15s | **Response:** response

#### Required Parameters

- `process_name` (string): Name of the agent process to download


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "process_name": "contract_analyzer",
  "trusted_key": "your-trusted-key",

  "response": "client.download_agent(process_name='contract_analyzer')"
}
```

#### Example Response
```json
{
  "response": {
    "status": "success",
    "zip_fp": "/path/to/contract_analyzer.zip"
  }
}
```

### Get all scheduled agents

**POST** `/get_all_scheduled_agents/`

Returns a list of all agents that have been scheduled for automated execution on the server.

**Timeout:** 5s | **Response:** agent_list

#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "trusted_key": "your-trusted-key",

  "response": "client.get_all_scheduled_agents()"
}
```

#### Example Response
```json
{
  "scheduled_agents": [
    {
      "agent_name": "daily_report",
      "frequency": "daily",
      "next_run": "2024-01-16T09:00:00Z"
    }
  ]
}
```

### Schedule agent

**POST** `/set_new_agent_schedule/`

Schedules an agent to run automatically at a specified frequency and start time.

**Timeout:** 5s | **Response:** agent_list

#### Required Parameters

- `agent_name` (string): Name of the agent to schedule


#### Optional Parameters

- `frequency` (string): Frequency of execution - "one_time", "daily", "weekly", "monthly" (default: "one_time")
- `year` (integer): Year for scheduled start
- `month` (integer): Month for scheduled start
- `day` (integer): Day for scheduled start
- `hour` (integer): Hour for scheduled start (default: 9)
- `minute` (integer): Minute for scheduled start (default: 0)
- `day_of_week` (string): Day of week for weekly schedules (default: "mon")
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "agent_name": "daily_report",
  "frequency": "daily",
  "hour": 9,
  "minute": 0,
  "trusted_key": "your-trusted-key",

  "response": "client.set_new_agent_schedule(agent_name='daily_report', frequency='daily')"
}
```

#### Example Response
```json
{
  "new_schedule": {
    "agent_name": "daily_report",
    "frequency": "daily",
    "status": "scheduled"
  }
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

**POST** `/library/get_api_catalog/`

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

### App registration

**POST** `/app_register/`

Registers an application instance with the server to establish a connection for API access.

**Timeout:** 1s | **Response:** status

#### Optional Parameters

- —



#### Example Request

```json
{
  "api_key": "your-api-key",

  "response": "client.app_register(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "status": "registered"
}
```

### Register new user

**POST** `/register_new_user/`

Registers a new user on the server and returns credentials for API access.

**Timeout:** 3s | **Response:** credentials

#### Required Parameters

- `user_name` (string): Name of the new user
- `user_email` (string): Email address of the new user
- `user_token` (string): Token for user authentication


#### Optional Parameters

- —



#### Example Request

```json
{
  "user_name": "jane_doe",
  "user_email": "jane@example.com",
  "user_token": "setup-token",
  "api_key": "your-api-key",

  "response": "client.register_new_user(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "credentials": {
    "api_key": "new-api-key",
    "user_id": "user_12345"
  }
}
```

### Transaction log

**POST** `/get_transaction_log/`

Returns the server transaction log showing API usage history and timestamps.

**Timeout:** 5s | **Response:** logs

#### Optional Parameters

- —



#### Example Request

```json
{
  "api_key": "your-api-key",

  "response": "client.get_transaction_log(context=context, api_key=api_key)"
}
```

#### Example Response
```json
{
  "logs": [
    {
      "timestamp": "2024-01-15T10:30:00Z",
      "endpoint": "/inference/",
      "user": "user_12345"
    }
  ]
}
```

### Add credential

**POST** `/add_credential/`

Adds a set of credentials (e.g., API keys for external services) to the server, passed as key-value pairs.

**Timeout:** 10s | **Response:** response

#### Required Parameters

- `credentials` (object): Dictionary of credential key-value pairs


#### Optional Parameters

- —



#### Example Request

```json
{
  "credentials": {"tavily_api_key": "tvly-..."},
  "api_key": "your-api-key",

  "response": "client.add_credential(creds={'tavily_api_key': 'tvly-...'})"
}
```

#### Example Response
```json
{
  "response": {
    "status": "added",
    "credentials": ["tavily_api_key"]
  }
}
```

### Delete credential

**POST** `/delete_credential/`

Deletes a previously stored credential from the server by name.

**Timeout:** 10s | **Response:** response

#### Required Parameters

- `credential_name` (string): Name of the credential to delete


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "credential_name": "tavily_api_key",
  "trusted_key": "your-trusted-key",

  "response": "client.delete_credential(credential_name='tavily_api_key')"
}
```

#### Example Response
```json
{
  "response": {
    "status": "deleted"
  }
}
```

## Services & Integrations

Connect the server to external services and run web searches through supported providers.

### Install service

**POST** `/install_service/`

Installs a new custom service on the server based on a JSON service definition.

**Timeout:** 60s | **Response:** response

#### Required Parameters

- `service_name` (string): Name for the new service
- `service_dfn` (string): JSON service definition


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "service_name": "custom_analyzer",
  "service_dfn": "{...}",
  "trusted_key": "your-trusted-key",

  "response": "client.install_service(name='custom_analyzer', service_dfn='{...}')"
}
```

#### Example Response
```json
{
  "response": {
    "service_name": "custom_analyzer",
    "status": "installed"
  }
}
```

### List services

**POST** `/list_services/`

Returns a list of all installed custom services on the server.

**Timeout:** 60s | **Response:** response

#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "trusted_key": "your-trusted-key",

  "response": "client.list_services()"
}
```

#### Example Response
```json
{
  "response": [
    {
      "service_name": "custom_analyzer",
      "status": "active"
    }
  ]
}
```

### Test service

**POST** `/test_service/`

Tests an installed custom service to verify it is working correctly.

**Timeout:** 60s | **Response:** response

#### Required Parameters

- `service_name` (string): Name of the service to test


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "service_name": "custom_analyzer",
  "trusted_key": "your-trusted-key",

  "response": "client.test_service(service_name='custom_analyzer')"
}
```

#### Example Response
```json
{
  "response": {
    "service_name": "custom_analyzer",
    "status": "operational"
  }
}
```

### List integrations

**POST** `/list_integrations/`

Returns a list of all available integration connections configured on the server.

**Timeout:** 60s | **Response:** response

#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "trusted_key": "your-trusted-key",

  "response": "client.list_integrations()"
}
```

#### Example Response
```json
{
  "response": [
    {
      "name": "tavily",
      "type": "web_search",
      "status": "configured"
    }
  ]
}
```

### Get integration info

**POST** `/get_integration_info/`

Returns detailed information about a specific integration, including configuration status and capabilities.

**Timeout:** 60s | **Response:** response

#### Required Parameters

- `integration_name` (string): Name of the integration to inspect


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "integration_name": "tavily",
  "trusted_key": "your-trusted-key",

  "response": "client.get_integration_info(integration_name='tavily')"
}
```

#### Example Response
```json
{
  "response": {
    "name": "tavily",
    "type": "web_search",
    "status": "configured",
    "capabilities": ["web_search"]
  }
}
```

### Web search

**POST** `/web_search/`

Executes a web search using a configured search provider. Supports tavily, serp_api, news_api_org, and wikipedia.

**Timeout:** 30s | **Response:** response

#### Required Parameters

- `query` (string): Search query text
- `engine` (string): Search engine provider (tavily, serp_api, news_api_org, wikipedia)


#### Optional Parameters

- `result_count` (integer): Number of results to return (default: 10)
- `api_token` (string): API token for the search provider
- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "query": "What is quantum gravity?",
  "engine": "tavily",
  "result_count": 5,
  "trusted_key": "your-trusted-key",

  "response": "client.web_search(query='What is quantum gravity?', engine='tavily')"
}
```

#### Example Response
```json
{
  "response": [
    {
      "title": "Quantum Gravity Explained",
      "url": "https://example.com/quantum-gravity",
      "snippet": "Quantum gravity is..."
    }
  ]
}
```

## HQ Apps

Run and manage custom Model HQ applications over API. Apps combine resources, agents, models, and configurations into a packaged experience.

### Start app session

**POST** `/start_app_session/`

Initiates a new app session by creating a unique session ID and instantiating the app chat state on the server.

**Timeout:** 60s | **Response:** session_id

#### Required Parameters

- `app_name` (string): Name of the app to start a session for


#### Optional Parameters

- `preload_models` (boolean): Whether to preload models for the session
- `model_name` (string): Specific model to use
- `apply_instructions` (string): Apply custom instructions
- `apply_memory` (boolean): Enable session memory
- `preload_source` (boolean): Preload source documents
- `file_list` (array): Files to preload into the session


#### Example Request

```json
{
  "app_name": "contract_review",
  "api_key": "your-api-key",

  "response": "client.start_app_session(app_name='contract_review')"
}
```

#### Example Response
```json
{
  "session_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "status": "started"
}
```

### Chat

**POST** `/chat/`

Main interaction API for communicating with an app using a session ID. Supports streaming responses for real-time chat.

**Timeout:** 600s | **Response:** response | **Streaming:** Yes

#### Required Parameters

- `session_id` (string): Session ID from start app session
- `user_msg` (string): The user message or prompt


#### Optional Parameters

- `app_name` (string): Name of the app


#### Example Request

```json
{
  "session_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "user_msg": "What is the annual rate of the base salary?",
  "api_key": "your-api-key",

  "response": "client.chat(session_id=session_id, prompt=prompt)"
}
```

#### Example Response
```json
{
  "llm_response": {
    "text": "The annual base salary is $150,000...",
    "sources": ["contract.pdf"]
  }
}
```

### Run app agent

**POST** `/run_app_agent/`

Executes an agent process inside an app session with streaming step-by-step output. Ideal for displaying real-time progress in the UI.

**Timeout:** 1200s | **Response:** response | **Streaming:** Yes

#### Required Parameters

- `session_id` (string): Session ID from start app session
- `agent_name` (string): Name of the agent to run


#### Optional Parameters

- `inputs` (object): Dictionary of input values for the agent
- `updates` (object): Parameter updates for the agent


#### Example Request

```json
{
  "session_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "agent_name": "contract_analyzer",
  "inputs": {"User-Document": "contract.pdf"},
  "api_key": "your-api-key",

  "response": "client.run_app_agent(session_id=session_id, agent_name='contract_analyzer', agent_inputs=inputs)"
}
```

#### Example Response
```json
{
  "response": {
    "step": 1,
    "status": "processing",
    "message": "Analyzing document..."
  }
}
```

### Get app transcript

**POST** `/get_app_transcript/`

Generates a transcript of the chat history for an app session in the requested output format.

**Timeout:** 15s | **Response:** response

#### Required Parameters

- `session_id` (string): Session ID to generate transcript for


#### Optional Parameters

- `output_format` (string): Output format - docx, pptx, xlsx, csv, json, txt (default: "docx")


#### Example Request

```json
{
  "session_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "output_format": "docx",

  "response": "client.get_app_transcript(session_id=session_id, output_format='docx')"
}
```

#### Example Response
```json
{
  "response": {
    "status": "success",
    "zip_fp": "/path/to/transcript.zip"
  }
}
```

### Get app state

**POST** `/get_app_state/`

Returns the current state parameters of a selected app session, including loaded resources and configuration.

**Timeout:** 6s | **Response:** response

#### Required Parameters

- `session_id` (string): Session ID to query


#### Optional Parameters

- —

#### Example Request

```json
{
  "session_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",

  "response": "client.get_app_state(session_id=session_id)"
}
```

#### Example Response
```json
{
  "response": {
    "status": "active",
    "resources": ["document1.pdf"],
    "chat_history_length": 5
  }
}
```

### Update app state

**POST** `/update_app_state/`

Updates selected configuration parameters of an active app session.

**Timeout:** 60s | **Response:** response

#### Required Parameters

- `session_id` (string): Session ID to update
- `updates` (object): Key-value pairs of parameters to update


#### Optional Parameters

- —



#### Example Request

```json
{
  "session_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "updates": {"model_name": "llama-3.2-3b-instruct-ov"},

  "response": "client.update_app_state(session_id=session_id, updates=updates)"
}
```

#### Example Response
```json
{
  "response": {
    "status": "updated",
    "session_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
  }
}
```

### Stop app session

**POST** `/stop_app_session/`

Ends an active app session by removing the chat state from the server.

**Timeout:** 10s | **Response:** response

#### Required Parameters

- `session_id` (string): Session ID to stop


#### Optional Parameters

- `app_name` (string): Name of the app


#### Example Request

```json
{
  "session_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "api_key": "your-api-key",

  "response": "client.stop_app_session(session_id=session_id)"
}
```

#### Example Response
```json
{
  "response": {
    "status": "stopped"
  }
}
```

### List all apps

**POST** `/get_all_apps/`

Returns a list of all available apps on the server.

**Timeout:** 5s | **Response:** app_list

#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "trusted_key": "your-trusted-key",

  "response": "client.get_all_apps()"
}
```

#### Example Response
```json
{
  "app_list": [
    {
      "app_name": "contract_review",
      "version": "1.0.0"
    }
  ]
}
```

### Lookup app

**POST** `/lookup_app/`

Returns detailed metadata about a specific app, including its resources and configuration.

**Timeout:** 3s | **Response:** app_details

#### Required Parameters

- `app_name` (string): Name of the app to look up


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "app_name": "contract_review",
  "trusted_key": "your-trusted-key",

  "response": "client.lookup_app(app_name='contract_review')"
}
```

#### Example Response
```json
{
  "app_details": {
    "app_name": "contract_review",
    "version": "1.0.0",
    "agents": ["contract_analyzer"],
    "models": ["llama-3.2-3b-instruct-ov"]
  }
}
```

### Get active app sessions

**POST** `/get_active_app_sessions/`

Returns a list of all currently active app sessions on the server.

**Timeout:** 6s | **Response:** response

#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "trusted_key": "your-trusted-key",

  "response": "client.get_active_app_sessions()"
}
```

#### Example Response
```json
{
  "response": [
    {
      "session_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "app_name": "contract_review",
      "status": "active"
    }
  ]
}
```

### Download app

**POST** `/download_app/`

Downloads an app package from the server as a zip file for local deployment or backup.

**Timeout:** 15s | **Response:** response

#### Required Parameters

- `app_name` (string): Name of the app to download


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "app_name": "contract_review",
  "trusted_key": "your-trusted-key",

  "response": "client.download_app(app_name='contract_review')"
}
```

#### Example Response
```json
{
  "response": {
    "status": "success",
    "zip_fp": "/path/to/contract_review.zip"
  }
}
```

### Install app

**POST** `/install_app/`

Uploads and installs an app package from a zip file onto the server.

**Timeout:** 10s | **Response:** app_details

#### Required Parameters

- `app_zip` (file): App package zip file to install


#### Optional Parameters

- `trusted_key` (string): Trusted authentication key


#### Example Request

```json
{
  "app_zip": "contract_review.zip",
  "trusted_key": "your-trusted-key",

  "response": "client.install_app(app_zip_fp='contract_review.zip')"
}
```

#### Example Response
```json
{
  "app_details": {
    "app_name": "contract_review",
    "status": "installed"
  }
}
```
