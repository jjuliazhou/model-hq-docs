import type { Metadata } from "next"
import { ApiEndpointSection } from "@/components/api-endpoint-section"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "API Reference - Model HQ",
  description: "Complete API reference for Model HQ endpoints",
}

const endpoints = [
  // MODELS CATEGORY - Core Inference Methods
  {
    id: "stream",
    name: "Create stream",
    method: "POST",
    endpoint: "/stream/",
    description:
      "Generate a streaming inference response from a selected model. The response will be streamed back in real-time as the model generates tokens.",
    category: "models",
    timeout: 60,
    requiredParams: [
      { name: "model_name", type: "string", description: "The name of the model to use for inference" },
      { name: "prompt", type: "string", description: "The input text prompt to generate a response for" },
    ],
    optionalParams: [
      { name: "max_output", type: "integer", description: "Maximum number of tokens to generate", default: "100" },
      {
        name: "temperature",
        type: "number",
        description: "Controls randomness in generation (0.0-1.0)",
        default: "0.0",
      },
      { name: "sample", type: "boolean", description: "Whether to use sampling for generation", default: "true" },
      { name: "context", type: "string", description: "Additional context to provide to the model" },
      { name: "api_key", type: "string", description: "Your API authentication key" },
      { name: "trusted_key", type: "string", description: "Alternative trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      model_name: "phi-3-ov",
      prompt: "Explain quantum computing in simple terms",
      max_output: 300,
      temperature: 0.7,
      api_key: "your-api-key",
    },
    exampleResponse: { llm_response: "Quantum computing is a revolutionary approach..." },
    isStreaming: true,
  },
  {
    id: "inference",
    name: "Create inference",
    method: "POST",
    endpoint: "/inference/",
    description:
      "Generate a complete inference response from a selected model. The response will be the complete generation from the model returned as a single response.",
    category: "models",
    timeout: 60,
    requiredParams: [
      { name: "prompt", type: "string", description: "The input text prompt to generate a response for" },
      { name: "model_name", type: "string", description: "The name of the model to use for inference" },
    ],
    optionalParams: [
      { name: "max_output", type: "integer", description: "Maximum number of tokens to generate", default: "100" },
      {
        name: "temperature",
        type: "number",
        description: "Controls randomness in generation (0.0-1.0)",
        default: "0.7",
      },
      { name: "sample", type: "boolean", description: "Whether to use sampling for generation", default: "true" },
      { name: "api_key", type: "string", description: "Your API authentication key" },
      { name: "context", type: "string", description: "Additional context to provide to the model" },
      { name: "params", type: "object", description: "Additional model-specific parameters" },
      { name: "fx", type: "string", description: "Function execution parameters" },
      { name: "trusted_key", type: "string", description: "Alternative trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      prompt: "Write a short story about artificial intelligence",
      model_name: "llama-3.2-3b-instruct-ov",
      max_output: 100,
      temperature: 0.8,
      api_key: "your-api-key",
    },
    exampleResponse: { llm_response: "Artificial intelligence represents one of humanity's greatest..." },
    isStreaming: false,
  },
  {
    id: "function_call",
    name: "Function call",
    method: "POST",
    endpoint: "/function_call/",
    description: "Execute a specialized function call with SLIM model for structured outputs and specific tasks.",
    category: "models",
    timeout: 60,
    requiredParams: [
      { name: "model_name", type: "string", description: "The SLIM model name to use for function calling" },
      { name: "context", type: "string", description: "The context or input text for the function" },
    ],
    optionalParams: [
      { name: "prompt", type: "string", description: "Additional prompt instructions" },
      { name: "params", type: "object", description: "Function-specific parameters" },
      { name: "function", type: "string", description: "Specific function to execute" },
      { name: "api_key", type: "string", description: "Your API authentication key" },
      { name: "get_logits", type: "boolean", description: "Whether to return model logits" },
      { name: "max_output", type: "integer", description: "Maximum tokens to generate" },
      { name: "temperature", type: "number", description: "Sampling temperature" },
      { name: "sample", type: "boolean", description: "Whether to use sampling" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      model_name: "phi-3-ov",
      context: "John Smith works at Acme Corp as a Software Engineer. He can be reached at john@acme.com.",
      function: "extract_entities",
      api_key: "your-api-key",
    },
    exampleResponse: {
      llm_response:
        '{"name": "John Smith", "company": "Acme Corp", "role": "Software Engineer", "email": "john@acme.com"}',
    },
    isStreaming: false,
  },
  {
    id: "sentiment",
    name: "Sentiment analysis",
    method: "POST",
    endpoint: "/sentiment/",
    description: "Execute sentiment analysis using a specialized SLIM sentiment model.",
    category: "models",
    timeout: 60,
    requiredParams: [{ name: "context", type: "string", description: "The text to analyze for sentiment" }],
    optionalParams: [
      { name: "model_name", type: "string", description: "Sentiment model to use" },
      { name: "get_logits", type: "boolean", description: "Whether to return model logits" },
      { name: "max_output", type: "integer", description: "Maximum tokens to generate" },
      { name: "temperature", type: "number", description: "Sampling temperature" },
      { name: "sample", type: "boolean", description: "Whether to use sampling" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      context: "I absolutely love this new product! It's amazing and works perfectly.",
      api_key: "your-api-key",
    },
    exampleResponse: { llm_response: '{"sentiment": "positive", "confidence": 0.95}' },
    isStreaming: false,
  },
  {
    id: "extract",
    name: "Extract information",
    method: "POST",
    endpoint: "/extract/",
    description: "Execute information extraction using a SLIM extract model to pull specific data from text.",
    category: "models",
    timeout: 60,
    requiredParams: [
      { name: "context", type: "string", description: "The text to extract information from" },
      { name: "extract_keys", type: "array", description: "List of keys/fields to extract from the text" },
    ],
    optionalParams: [
      { name: "get_logits", type: "boolean", description: "Whether to return model logits" },
      { name: "max_output", type: "integer", description: "Maximum tokens to generate" },
      { name: "temperature", type: "number", description: "Sampling temperature" },
      { name: "sample", type: "boolean", description: "Whether to use sampling" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      context: "Invoice #12345 dated March 15, 2024. Total amount: $1,250.00. Customer: ABC Corp.",
      extract_keys: ["invoice_number", "date", "total_amount", "customer"],
      api_key: "your-api-key",
    },
    exampleResponse: {
      llm_response:
        '{"invoice_number": "12345", "date": "March 15, 2024", "total_amount": "$1,250.00", "customer": "ABC Corp"}',
    },
    isStreaming: false,
  },
  {
    id: "vision",
    name: "Vision inference",
    method: "POST",
    endpoint: "/vision/",
    description: "Execute vision model inference to analyze and describe images with text prompts.",
    category: "models",
    timeout: 360,
    requiredParams: [
      { name: "uploaded_files", type: "array", description: "Array of image files to analyze" },
      { name: "prompt", type: "string", description: "Text prompt describing what to analyze in the image" },
    ],
    optionalParams: [
      { name: "max_output", type: "integer", description: "Maximum tokens to generate" },
      { name: "model_name", type: "string", description: "Vision model to use" },
      { name: "temperature", type: "number", description: "Sampling temperature" },
      { name: "sample", type: "boolean", description: "Whether to use sampling" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      uploaded_files: ["image1.jpg"],
      prompt: "Describe what you see in this image",
      model_name: "mistral-7b-instruct-v0.3-ov",
      api_key: "your-api-key",
    },
    exampleResponse: { llm_response: "I can see a beautiful landscape with mountains in the background..." },
    isStreaming: false,
  },
  {
    id: "vision_stream",
    name: "Vision stream",
    method: "POST",
    endpoint: "/vision_stream/",
    description: "Generate a streaming inference response from vision model for real-time image analysis.",
    category: "models",
    timeout: 360,
    requiredParams: [
      { name: "uploaded_files", type: "array", description: "Array of image files to analyze" },
      { name: "model_name", type: "string", description: "Vision model to use for streaming" },
      { name: "prompt", type: "string", description: "Text prompt for image analysis" },
    ],
    optionalParams: [
      { name: "max_output", type: "integer", description: "Maximum tokens to generate" },
      { name: "temperature", type: "number", description: "Sampling temperature" },
      { name: "sample", type: "boolean", description: "Whether to use sampling" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      uploaded_files: ["image1.jpg"],
      model_name: "llama-3.2-3b-instruct-ov",
      prompt: "Analyze this image and describe the scene",
      api_key: "your-api-key",
    },
    exampleResponse: { llm_response: "The image shows a bustling city street..." },
    isStreaming: true,
  },
  {
    id: "rank",
    name: "Semantic ranking",
    method: "POST",
    endpoint: "/rank/",
    description: "Execute semantic similarity ranking with reranker model to rank documents by relevance to a query.",
    category: "models",
    timeout: 60,
    requiredParams: [
      { name: "query", type: "string", description: "The search query to rank documents against" },
      { name: "documents", type: "array", description: "Array of documents to rank" },
    ],
    optionalParams: [
      { name: "model_name", type: "string", description: "Reranker model to use" },
      { name: "text_chunk_size", type: "integer", description: "Size of text chunks for processing" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      query: "machine learning algorithms",
      documents: ["Document about neural networks", "Article on cooking recipes", "Paper on deep learning"],
      api_key: "your-api-key",
    },
    exampleResponse: {
      llm_response: '[{"doc_id": 0, "score": 0.95}, {"doc_id": 2, "score": 0.87}, {"doc_id": 1, "score": 0.12}]',
    },
    isStreaming: false,
  },
  {
    id: "classify",
    name: "Text classification",
    method: "POST",
    endpoint: "/classify/",
    description: "Execute text classification inference, primarily used for safety controls and content moderation.",
    category: "models",
    timeout: 60,
    requiredParams: [
      { name: "model_name", type: "string", description: "Classification model to use" },
      { name: "context", type: "string", description: "Text to classify" },
    ],
    optionalParams: [
      { name: "text_chunk_size", type: "integer", description: "Size of text chunks for processing" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      model_name: "phi-4-ov",
      context: "This is a sample text to classify for safety",
      api_key: "your-api-key",
    },
    exampleResponse: { llm_response: '{"classification": "safe", "confidence": 0.98}' },
    isStreaming: false,
  },
  {
    id: "embedding",
    name: "Generate embeddings",
    method: "POST",
    endpoint: "/embedding/",
    description: "Generate vector embeddings for text using embedding models for semantic search and similarity.",
    category: "models",
    timeout: 60,
    requiredParams: [
      { name: "model_name", type: "string", description: "Embedding model to use" },
      { name: "context", type: "string", description: "Text to generate embeddings for" },
    ],
    optionalParams: [
      { name: "text_chunk_size", type: "integer", description: "Size of text chunks for processing" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["embeddings"],
    exampleRequest: {
      model_name: "llama-3.2-3b-instruct-ov",
      context: "This is a sample text to embed",
      api_key: "your-api-key",
    },
    exampleResponse: { embeddings: [0.1, -0.2, 0.3, 0.4, -0.1] },
    isStreaming: false,
  },
  {
    id: "list_all_models",
    name: "List models",
    method: "POST",
    endpoint: "/list_all_models/",
    description: "Returns a list of all models available on the server.",
    category: "models",
    timeout: 3,
    requiredParams: [],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      trusted_key: "your-trusted-key",
    },
    exampleResponse: {
      response: ["llama-3.2-1b-instruct-ov", "llama-3.2-3b-instruct-ov", "mistral-7b-instruct-v0.3-ov", "phi-4-ov"],
    },
    isStreaming: false,
  },
  {
    id: "system_info",
    name: "System information",
    method: "POST",
    endpoint: "/system_info/",
    description: "Returns key information about the system and server configuration.",
    category: "models",
    timeout: 3,
    requiredParams: [],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      trusted_key: "your-trusted-key",
    },
    exampleResponse: { response: { version: "1.0.0", gpu_count: 2, memory: "32GB", status: "active" } },
    isStreaming: false,
  },
  {
    id: "model_lookup",
    name: "Model information",
    method: "POST",
    endpoint: "/model_lookup/",
    description: "Returns detailed model card information about a selected model.",
    category: "models",
    timeout: 3,
    requiredParams: [{ name: "model_name", type: "string", description: "Name of the model to look up" }],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      model_name: "mistral-7b-instruct-v0.3-ov",
      trusted_key: "your-trusted-key",
    },
    exampleResponse: {
      response: { name: "mistral-7b-instruct-v0.3-ov", parameters: "7B", context_length: 4096, loaded: true },
    },
    isStreaming: false,
  },
  {
    id: "model_load",
    name: "Load model",
    method: "POST",
    endpoint: "/model_load/",
    description: "Explicitly loads a selected model into memory on the API server, useful as a preparation step.",
    category: "models",
    timeout: 120,
    requiredParams: [{ name: "model_name", type: "string", description: "Name of the model to load into memory" }],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      model_name: "phi-4-ov",
      trusted_key: "your-trusted-key",
    },
    exampleResponse: { response: { model_name: "phi-4-ov", status: "loaded", memory_usage: "6.2GB" } },
    isStreaming: false,
  },
  {
    id: "model_unload",
    name: "Unload model",
    method: "POST",
    endpoint: "/model_unload/",
    description: "Explicitly unloads a selected model from memory on the API server.",
    category: "models",
    timeout: 30,
    requiredParams: [{ name: "model_name", type: "string", description: "Name of the model to unload from memory" }],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      model_name: "llama-3.2-1b-instruct-ov",
      trusted_key: "your-trusted-key",
    },
    exampleResponse: {
      response: { model_name: "llama-3.2-1b-instruct-ov", status: "unloaded", memory_freed: "6.2GB" },
    },
    isStreaming: false,
  },
  // RAG CATEGORY
  {
    id: "document_inference",
    name: "Document Q&A",
    method: "POST",
    endpoint: "/document_inference/",
    description:
      "Specialized inference to ask questions about uploaded documents. Combines document parsing, semantic search, and LLM inference.",
    category: "rag",
    timeout: 60,
    requiredParams: [
      { name: "question", type: "string", description: "Question to ask about the document" },
      { name: "uploaded_document", type: "file", description: "Document file to analyze" },
    ],
    optionalParams: [
      { name: "model_name", type: "string", description: "LLM model to use for answering" },
      { name: "text_chunk_size", type: "integer", description: "Size of text chunks for processing" },
      { name: "tables_only", type: "boolean", description: "Whether to focus only on tables" },
      { name: "use_top_n_context", type: "integer", description: "Number of top context chunks to use" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      question: "What is the main conclusion of this research paper?",
      uploaded_document: "research_paper.pdf",
      model_name: "phi-3-ov",
      api_key: "your-api-key",
    },
    exampleResponse: { response: "Based on the document analysis, the main conclusion is..." },
    isStreaming: false,
  },
  {
    id: "library_inference",
    name: "Library Q&A",
    method: "POST",
    endpoint: "/library_inference/",
    description:
      "Specialized RAG inference that ranks entries from a library and generates responses based on retrieved content.",
    category: "rag",
    timeout: 60,
    requiredParams: [
      { name: "question", type: "string", description: "Question to ask about the library content" },
      { name: "library_name", type: "string", description: "Name of the library to search" },
      { name: "model_name", type: "string", description: "LLM model to use for answering" },
    ],
    optionalParams: [
      { name: "use_top_n_context", type: "integer", description: "Number of top context chunks to use" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      question: "What are the key features of the product?",
      library_name: "product_docs",
      model_name: "llama-3.2-3b-instruct-ov",
      api_key: "your-api-key",
    },
    exampleResponse: { response: "Based on the library content, the key features include..." },
    isStreaming: false,
  },
  {
    id: "document_batch_analysis",
    name: "Batch document analysis",
    method: "POST",
    endpoint: "/document_batch_analysis/",
    description:
      "Analyzes multiple documents with a set of questions, ideal for processing contracts, invoices, or reports with consistent queries.",
    category: "rag",
    timeout: 600,
    requiredParams: [
      { name: "uploaded_files", type: "array", description: "Array of documents to analyze" },
      { name: "question_list", type: "array", description: "List of questions to ask each document" },
    ],
    optionalParams: [
      { name: "model_name", type: "string", description: "LLM model to use for analysis" },
      { name: "reranker", type: "string", description: "Reranker model for result optimization" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      uploaded_files: ["contract1.pdf", "contract2.pdf"],
      question_list: ["What is the governing law?", "What is the termination notice period?"],
      model_name: "mistral-7b-instruct-v0.3-ov",
      api_key: "your-api-key",
    },
    exampleResponse: {
      response: {
        results: [
          { document: "contract1.pdf", answers: ["Delaware", "30 days"] },
          { document: "contract2.pdf", answers: ["California", "60 days"] },
        ],
      },
    },
    isStreaming: false,
  },
  // LIBRARY MANAGEMENT CATEGORY
  {
    id: "create_new_library",
    name: "Create library",
    method: "POST",
    endpoint: "/create_new_library/",
    description:
      "Creates a new library which is a collection of documents that are parsed, indexed and organized for knowledge retrieval.",
    category: "library",
    timeout: 30,
    requiredParams: [{ name: "library_name", type: "string", description: "Name for the new library" }],
    optionalParams: [
      { name: "account_id", type: "string", description: "Account identifier" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      account_id: "user123",
      api_key: "your-api-key",
    },
    exampleResponse: { response: { library_name: "contract_library", status: "created", doc_count: 0 } },
    isStreaming: false,
  },
  {
    id: "add_files",
    name: "Add files to library",
    method: "POST",
    endpoint: "/add_files/",
    description:
      "Core method for adding files to a Library, which are parsed, text chunked and indexed automatically upon upload.",
    category: "library",
    timeout: 300,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library to add files to" },
      { name: "uploaded_files", type: "array", description: "Array of files to upload and process" },
    ],
    optionalParams: [
      { name: "account_id", type: "string", description: "Account identifier" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      uploaded_files: ["contract1.pdf", "contract2.pdf"],
      api_key: "your-api-key",
    },
    exampleResponse: { response: { files_processed: 2, chunks_created: 45, status: "completed" } },
    isStreaming: false,
  },
  {
    id: "query",
    name: "Query library",
    method: "POST",
    endpoint: "/query/",
    description: "Execute a text-based query against an existing library to find relevant documents and passages.",
    category: "library",
    timeout: 60,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library to query" },
      { name: "user_query", type: "string", description: "Search query text" },
    ],
    optionalParams: [
      { name: "result_count", type: "integer", description: "Number of results to return" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      user_query: "termination clauses",
      result_count: 10,
      api_key: "your-api-key",
    },
    exampleResponse: { response: [{ doc_id: 1, text: "Termination clause content...", score: 0.95 }] },
    isStreaming: false,
  },
  {
    id: "get_library_card",
    name: "Get library info",
    method: "POST",
    endpoint: "/get_library_card/",
    description:
      "Get comprehensive metadata information about a library including document count, embedding status, and configuration.",
    category: "library",
    timeout: 10,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library to get information for" },
    ],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      api_key: "your-api-key",
    },
    exampleResponse: {
      response: {
        library_name: "contract_library",
        doc_count: 25,
        embedding_status: "installed",
        created_date: "2024-01-15",
      },
    },
    isStreaming: false,
  },
  {
    id: "install_embedding",
    name: "Install embeddings",
    method: "POST",
    endpoint: "/install_embedding/",
    description:
      "Installs vector embeddings across a library and creates the appropriate vectors in the vector database for semantic search.",
    category: "library",
    timeout: 600,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library to install embeddings for" },
    ],
    optionalParams: [
      { name: "embedding_model", type: "string", description: "Embedding model to use" },
      { name: "vector_db", type: "string", description: "Vector database to use" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      embedding_model: "llama-3.2-1b-instruct-ov",
      api_key: "your-api-key",
    },
    exampleResponse: { response: { embeddings_created: 1250, vector_db: "milvus", status: "completed" } },
    isStreaming: false,
  },
  {
    id: "semantic_query",
    name: "Semantic search",
    method: "POST",
    endpoint: "/semantic_query/",
    description:
      "Executes a semantic/vector query against embeddings for more accurate content retrieval based on meaning rather than keywords.",
    category: "library",
    timeout: 60,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library to search" },
      { name: "user_query", type: "string", description: "Semantic search query" },
    ],
    optionalParams: [
      { name: "result_count", type: "integer", description: "Number of results to return" },
      { name: "db", type: "string", description: "Database type", default: "mongo" },
      { name: "vector_db", type: "string", description: "Vector database type", default: "milvus" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      user_query: "contract termination conditions",
      result_count: 5,
      api_key: "your-api-key",
    },
    exampleResponse: { response: [{ doc_id: 1, similarity_score: 0.92, text: "Contract termination..." }] },
    isStreaming: false,
  },
  {
    id: "get_document_list",
    name: "List documents",
    method: "POST",
    endpoint: "/get_document_list/",
    description: "Returns a comprehensive list of all documents contained in a specific library with metadata.",
    category: "library",
    timeout: 30,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library to list documents from" },
    ],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      api_key: "your-api-key",
    },
    exampleResponse: {
      response: [
        { doc_id: 1, filename: "contract1.pdf", pages: 12, upload_date: "2024-01-15" },
        { doc_id: 2, filename: "contract2.pdf", pages: 8, upload_date: "2024-01-16" },
      ],
    },
    isStreaming: false,
  },
  {
    id: "get_document_text",
    name: "Extract document text",
    method: "POST",
    endpoint: "/get_document_text/",
    description:
      "Returns the complete text extract of a selected document from a specified library for review or processing.",
    category: "library",
    timeout: 60,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library containing the document" },
    ],
    optionalParams: [
      { name: "doc_id", type: "string", description: "Document ID to extract text from" },
      { name: "doc_fn", type: "string", description: "Document filename to extract text from" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      doc_id: "1",
      api_key: "your-api-key",
    },
    exampleResponse: { response: { doc_id: 1, filename: "contract1.pdf", text: "Full document text content..." } },
    isStreaming: false,
  },
  // AGENT CATEGORY
  {
    id: "run_agent",
    name: "Execute agent",
    method: "POST",
    endpoint: "/run_agent/",
    description:
      "Executes a pre-configured agent process for automated multi-step document analysis and task completion.",
    category: "agent",
    timeout: 300,
    requiredParams: [{ name: "process_name", type: "string", description: "Name of the agent process to execute" }],
    optionalParams: [
      { name: "process_zip", type: "file", description: "Agent process zip file to upload and execute" },
      { name: "input_list", type: "array", description: "List of inputs for the agent process" },
      { name: "text", type: "string", description: "Text input for the agent" },
      { name: "snippet", type: "string", description: "Code or text snippet input" },
      { name: "document_file", type: "file", description: "Document file for agent processing" },
      { name: "table_file", type: "file", description: "Table/spreadsheet file for processing" },
      { name: "image_file", type: "file", description: "Image file for agent analysis" },
      { name: "source_file", type: "file", description: "Source code file for processing" },
      { name: "user_files", type: "array", description: "Additional user files for processing" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      process_name: "contract_analyzer",
      document_file: "contract.pdf",
      input_list: ["analysis_type", "text", "comprehensive"],
      api_key: "your-api-key",
    },
    exampleResponse: {
      response: {
        agent_name: "contract_analyzer",
        status: "completed",
        results: { effective_date: "2024-01-01", base_salary: "$150,000" },
        execution_time: "45s",
      },
    },
    isStreaming: false,
  },
  {
    id: "lookup_agent",
    name: "Find agent",
    method: "POST",
    endpoint: "/lookup_agent/",
    description: "Checks if a specific agent process exists and is available on the server for execution.",
    category: "agent",
    timeout: 10,
    requiredParams: [{ name: "process_name", type: "string", description: "Name of the agent process to look up" }],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      process_name: "contract_analyzer",
      trusted_key: "your-trusted-key",
    },
    exampleResponse: {
      response: {
        process_name: "contract_analyzer",
        available: true,
        description: "Analyzes contracts for key terms",
        version: "1.2.0",
      },
    },
    isStreaming: false,
  },
  {
    id: "get_all_agents",
    name: "List all agents",
    method: "POST",
    endpoint: "/get_all_agents/",
    description: "Returns a comprehensive list of all available agent processes on the server with their capabilities.",
    category: "agent",
    timeout: 10,
    requiredParams: [],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      trusted_key: "your-trusted-key",
    },
    exampleResponse: {
      response: [
        { name: "contract_analyzer", description: "Contract analysis agent", version: "1.2.0" },
        { name: "invoice_processor", description: "Invoice processing agent", version: "1.0.1" },
      ],
    },
    isStreaming: false,
  },
  // UTILITY CATEGORY
  {
    id: "ping",
    name: "Health check",
    method: "POST",
    endpoint: "/ping/",
    description: "Quick health check to verify if the API server is responsive and operational.",
    category: "utility",
    timeout: 5,
    requiredParams: [],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      trusted_key: "your-trusted-key",
    },
    exampleResponse: { response: { status: "ok", timestamp: "2024-01-15T10:30:00Z", version: "1.0.0" } },
    isStreaming: false,
  },
  {
    id: "server_stop",
    name: "Stop server",
    method: "POST",
    endpoint: "/server_stop/",
    description: "Gracefully stops the API server. Use with caution as this will terminate all active connections.",
    category: "utility",
    timeout: 10,
    requiredParams: [],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      trusted_key: "your-trusted-key",
    },
    exampleResponse: { response: { status: "stopping", message: "Server shutdown initiated" } },
    isStreaming: false,
  },
  {
    id: "get_api_catalog",
    name: "API catalog",
    method: "POST",
    endpoint: "/get_api_catalog/",
    description: "Returns a complete catalog of all available API endpoints with their specifications and parameters.",
    category: "utility",
    timeout: 10,
    requiredParams: [],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      trusted_key: "your-trusted-key",
    },
    exampleResponse: {
      response: [
        { api_name: "inference", endpoint: "/inference/", method: "POST", timeout: 60 },
        { api_name: "stream", endpoint: "/stream/", method: "POST", timeout: 60 },
      ],
    },
    isStreaming: false,
  },
  {
    id: "get_db_info",
    name: "Database info",
    method: "POST",
    endpoint: "/get_db_info/",
    description: "Returns information about registered databases and vector databases available on the server.",
    category: "utility",
    timeout: 10,
    requiredParams: [],
    optionalParams: [{ name: "trusted_key", type: "string", description: "Trusted authentication key" }],
    response: ["response"],
    exampleRequest: {
      trusted_key: "your-trusted-key",
    },
    exampleResponse: {
      response: {
        databases: ["mongo", "sqlite"],
        vector_databases: ["milvus", "faiss"],
        default_db: "mongo",
        default_vector_db: "milvus",
      },
    },
    isStreaming: false,
  },
]

export default function ApiReferencePage() {
  // Group endpoints by category
  const modelEndpoints = endpoints.filter((e) => e.category === "models")
  const ragEndpoints = endpoints.filter((e) => e.category === "rag")
  const libraryEndpoints = endpoints.filter((e) => e.category === "library")
  const agentEndpoints = endpoints.filter((e) => e.category === "agent")
  const utilityEndpoints = endpoints.filter((e) => e.category === "utility")

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>API Reference</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">API Reference</h1>
        <p className="text-base text-muted-foreground max-w-3xl">
          The Model HQ API provides programmatic access to the core Model HQ platform with APIs for model inference, RAG
          and Agent processing.
        </p>
      </div>

      <div className="prose prose-gray max-w-none">
        <h2 id="how-to-access">How to access</h2>
        <p>
          <strong>Model HQ App (with UI)</strong> - to convert to API programmatic access, you should shift to "backend
          mode" which can be found on the main tools bar in the upper right hand corner of the app. You can configure
          the backend before launching, e.g., localhost vs. external IP (set to localhost by default), port (set to 8088
          by default), and optional trusted_key to be used when calling an API. You will also see a download Model HQ
          Client SDK link on the page, which you should download, and open as a new project in your favorite IDE. After
          shifting to programmatic mode, models and agents created in the UI are available to be accessed through APIs.
          If you set a trusted_key in the configuration, then the key will be checked and validated on each API call
          (you can leave blank for development use).
        </p>

        <p>
          <strong>Model HQ Dev (no UI)</strong> - this product provides the backend development server directly with
          only programmatic access, and can be started, stopped, and configured entirely with code (requires a separate
          license). The Model HQ Client SDK is included with the product, along with separate directions for activating
          the license key on first use.
        </p>

        <p>
          <strong>Model HQ Server (Linux - no UI)</strong> - this is a scalable API server with multi-user scalability,
          larger model catalog, and an enhanced set of RAG capabilities (requires a separate license).
        </p>

        <p>
          Most of the text below was written from the perspective of using the APIs on device (Model HQ App, or Model HQ
          Dev), although the APIs apply to Model HQ Server as well.
        </p>

        <h2 id="model-hq-client-sdk">Model HQ Client SDK</h2>
        <p>
          The client SDK exposes the APIs through a Python interface to make it to easy to integrate into other Agent,
          RAG and generative AI pipelines.
        </p>

        <p>The first step is to create a client, similar to Open AI and other API-based model services.</p>

        <p>
          In most cases, you can see the auto-detect setup convenience function <code>get_url_string()</code> to
          automatically connect to the server.
        </p>

        <pre>
          <code className="language-python">{`from llmware_client_sdk import LLMWareClient, get_url_string

# create client interface into model hq windows background server
api_endpoint = get_url_string()

# alt: direct
# api_endpoint = "http://localhost:8088"

client = LLMWareClient(api_endpoint=api_endpoint)`}</code>
        </pre>

        <p>Once you have created the client, API calls can be initiated through methods implemented on the client.</p>

        <h2 id="getting-started">Getting Started</h2>
        <p>
          Model inferencing takes place on device, and upon first invocation of a selected model, the model will be
          pulled from a secure LLMWare repository, and cached onto the local device. Depending upon the size of the
          model and the wifi/network connection, it can take between 30 seconds and a few minutes to download the model
          the first time. After that, upon each subsequent use, the model will be loaded from disk, and generally takes
          no more than a few seconds to load.
        </p>

        <p>
          <strong>Example # 1 - Inference</strong> - this is the core API for accessing a model
        </p>

        <pre>
          <code className="language-python">{`prompt = "What are the best sites to see in France?"
model_name = "llama-3.2-1b-instruct-ov"

print("\\nStarting 'Hello World'")
print(f"Prompt: {prompt}")
print(f"Model: {model_name}\\n")

# this is the main inference API

response = client.inference(prompt=prompt,model_name=model_name, max_output=100, trusted_key="")

# note: will stop at output of 100 tokens and will provide a 'complete' response (e.g., not streamed)

print("\\nhello world test # 1 - inference response: ", response)`}</code>
        </pre>

        <p>
          <strong>Example #2 - Stream</strong> - this is the streaming version of the core model inference API
        </p>

        <pre>
          <code className="language-python">{`model_name = "llama-3.2-3b-instruct-ov"
prompt = "What are the main theoretical challenges with quantum gravity?"

print("\\nRunning Model Locally in Streaming Mode")
print(f"Prompt: {prompt}")
print(f"Model: {model_name}\\n")

# the stream method is called and consumed as a generator function

for token in client.stream(prompt=prompt,
                           model_name=model_name,max_output=300,
                           trusted_key=""):

    print(token,end="")`}</code>
        </pre>

        <p>
          For many use cases, just using the two APIs above will give you the ability to easily access and integrate a
          wide range of models.
        </p>

        <p>
          <strong>Example #3 - Finding Models</strong>
        </p>

        <p>There are several key utility APIs that help to find available models:</p>

        <p>
          <strong>list_all_models</strong> - generally models in the catalog can be invoked using inference/stream with
          the unique identifier of <code>model_name</code>.
        </p>

        <pre>
          <code className="language-python">{`# what models are available? 

model_list = client.list_all_models()

# print it out the list to screen
print("model list: ", model_list)
for i, mod in enumerate(model_list["response"]):
  print("model: ", i, mod)`}</code>
        </pre>

        <p>
          <strong>model_lookup</strong> - Lookup Specific Model with more details from the Model Card
        </p>

        <pre>
          <code className="language-python">{`print("\\nmodel lookup example\\n")

response = client.model_lookup(model_name, **kwargs)

print("response: ", response)`}</code>
        </pre>

        <p>
          <strong>model_load</strong> - load a selected model into memory
        </p>

        <pre>
          <code className="language-python">{`print("\\nmodel load test example\\n")

response = client.model_load(model_name, **kwargs)

print("response: ", response)`}</code>
        </pre>

        <p>
          <strong>model_unload</strong> - unload a selected model from memory
        </p>

        <pre>
          <code className="language-python">{`print("\\nmodel unload test example\\n")

response = client.model_unload(model_name, **kwargs)

print("response: ", response)`}</code>
        </pre>

        <h2 id="rag">RAG</h2>
        <p>
          In addition to pure model inferencing, there are several methods provided to integrate documents into an
          inference. A more enhanced set of RAG capabilities (including vector db and full semantic search) are provided
          on the Model HQ Server.
        </p>

        <p>
          <strong>document_inference</strong> - ask question to a document over API
        </p>

        <pre>
          <code className="language-python">{`# rag one step api process

document_path = os.path.abspath(".\\\\modelhq_client\\\\sample_files\\\\Bia EXECUTIVE EMPLOYMENT AGREEMENT.pdf")
question = "What is the annual rate of the base salary?"
model_name = "llama-3.2-3b-instruct-ov"

print(f"\\n\\nRAG Example - {question}\\n")

response = client.document_inference(document_path, question, model_name=model_name)

print("document inference response - ", response['llm_response'])`}</code>
        </pre>

        <h2 id="agents">Agents</h2>
        <p>You can create an agent process in the UI, and then invoke and run the agent over API as follows:</p>

        <pre>
          <code className="language-python">{`# selected process
process_name = "intake_processing"

# input to the agent
fp = os.path.abspath(".\\\\sample_files\\\\customer_transcript_1.txt")
text = open(fp, "r").read()

# call and run the agent process
response = client.run_agent(process_name=process_name, text=text, trusted_key="")

print("--run_agent intake_processing: ", response)`}</code>
        </pre>

        <p>
          <strong>get_all_agents</strong> - provides a list of agents available
        </p>

        <pre>
          <code className="language-python">{`# show all agents available on the background server

agent_response = client.get_all_agents()

for i, agent in enumerate(agent_response["response"]):
    print("--agents available: ", i, agent)`}</code>
        </pre>

        <h2 id="useful-admin-functions">Useful Admin Functions</h2>
        <p>
          <strong>ping</strong> - check that the platform is running and that the client is connected
        </p>

        <pre>
          <code className="language-python">{`response = client.ping()

print("response: ", response)`}</code>
        </pre>

        <p>
          <strong>system_info</strong> - get information about the system
        </p>

        <pre>
          <code className="language-python">{`# get system info
x = client.system_info()
print("system info: ", x)

# get details about the backend process
details = get_server_details()
print("server details: ", details)`}</code>
        </pre>

        <p>
          <strong>stop_server</strong> - stop the Model HQ platform (running as a background service on Windows)
        </p>

        <pre>
          <code className="language-python">{`stop_server()`}</code>
        </pre>

        <h2 id="trusted-key">Trusted Key</h2>
        <p>
          Since the Model HQ platform is designed for self-hosted deployment (and generally for internal enterprise user
          access - not consumer-scale deployment), we provide flexible options to enable separate API key
          implementations on top of the platform. We provide a flexible, easy-to-configure 'trusted_key' parameter which
          can be set at the time of launching the backend platform.
        </p>

        <p>
          Note: for most development stage activities, this can be skipped entirely, and no trusted_key needs to be set,
          especially for on device use.
        </p>

        <p>&nbsp;</p>
      </div>

      {/* Models Category */}
      <div className="border-b">
        <div className="py-8">
          <h2 className="text-3xl font-bold mb-4">Models</h2>
          <p className="text-muted-foreground mb-8">
            Core inference endpoints for text generation, vision analysis, and specialized model functions.
          </p>
        </div>
      </div>

      {modelEndpoints.map((endpoint, index) => (
        <ApiEndpointSection key={endpoint.id} endpoint={endpoint} isLast={false} />
      ))}

      {/* RAG Category */}
      <div className="border-b">
        <div className="py-8">
          <h2 className="text-3xl font-bold mb-4">RAG (Retrieval Augmented Generation)</h2>
          <p className="text-muted-foreground mb-8">
            Document and library-based question answering with semantic search and context retrieval.
          </p>
        </div>
      </div>

      {ragEndpoints.map((endpoint, index) => (
        <ApiEndpointSection key={endpoint.id} endpoint={endpoint} isLast={false} />
      ))}

      {/* Library Management Category */}
      <div className="border-b">
        <div className="py-8">
          <h2 className="text-3xl font-bold mb-4">Library Management</h2>
          <p className="text-muted-foreground mb-8">
            Create and manage document libraries for knowledge base construction and semantic search capabilities.
          </p>
        </div>
      </div>

      {libraryEndpoints.map((endpoint, index) => (
        <ApiEndpointSection key={endpoint.id} endpoint={endpoint} isLast={false} />
      ))}

      {/* Agent Category */}
      <div className="border-b">
        <div className="py-8">
          <h2 className="text-3xl font-bold mb-4">Agent Execution</h2>
          <p className="text-muted-foreground mb-8">
            Execute automated multi-step processes and workflows using pre-configured intelligent agents.
          </p>
        </div>
      </div>

      {agentEndpoints.map((endpoint, index) => (
        <ApiEndpointSection key={endpoint.id} endpoint={endpoint} isLast={false} />
      ))}

      {/* Utility Category */}
      <div className="border-b">
        <div className="py-8">
          <h2 className="text-3xl font-bold mb-4">Utilities & Administration</h2>
          <p className="text-muted-foreground mb-8">
            Server management, health checks, and administrative functions for monitoring and control.
          </p>
        </div>
      </div>

      {utilityEndpoints.map((endpoint, index) => (
        <ApiEndpointSection key={endpoint.id} endpoint={endpoint} isLast={index === utilityEndpoints.length - 1} />
      ))}
    </div>
  )
}
