export interface ApiEndpoint {
  id: string
  name: string
  method: "POST"
  endpoint: string
  description: string
  category: "models" | "rag" | "library" | "agent" | "server" | "services" | "hq"
  timeout: number
  requiredParams: { name: string; type: string; description: string }[]
  optionalParams: { name: string; type: string; description: string; default?: string }[]
  response: string[]
  exampleRequest: Record<string, any>
  exampleResponse: Record<string, any>
  isStreaming: boolean
}

export const endpoints: ApiEndpoint[] = [
  // ----------------------------------------------
  // Models
  // ----------------------------------------------
  {
    id: "stream",
    name: "Create stream",
    method: "POST",
    endpoint: "/stream/",
    description: "Generate a streaming inference response from a selected model. The response will be streamed back in real-time as the model generates tokens.",
    category: "models",
    timeout: 60,
    requiredParams: [
      { name: "model_name", type: "string", description: "The name of the model to use for inference" },
      { name: "prompt", type: "string", description: "The input text prompt to generate a response for" },
    ],
    optionalParams: [
      { name: "max_output", type: "integer", description: "Maximum number of tokens to generate", default: "100" },
      { name: "temperature", type: "number", description: "Controls randomness in generation (0.0-1.0)", default: "0.0" },
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
    },
    exampleResponse: {
      llm_response: "Quantum computing is a revolutionary approach...",
    },
    isStreaming: true,
  },
  {
    id: "inference",
    name: "Create inference",
    method: "POST",
    endpoint: "/inference/",
    description: "Generate a complete inference response from a selected model. The response will be the complete generation from the model returned as a single response.",
    category: "models",
    timeout: 60,
    requiredParams: [
      { name: "prompt", type: "string", description: "The input text prompt to generate a response for" },
      { name: "model_name", type: "string", description: "The name of the model to use for inference" },
    ],
    optionalParams: [
      { name: "max_output", type: "integer", description: "Maximum number of tokens to generate", default: "100" },
      { name: "temperature", type: "number", description: "Controls randomness in generation (0.0-1.0)", default: "0.7" },
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
    },
    exampleResponse: {
      llm_response: "Artificial intelligence represents one of humanity's greatest...",
    },
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
    },
    exampleResponse: {
      llm_response: '{"name": "John Smith", "company": "Acme Corp", "role": "Software Engineer", "email": "john@acme.com"}',
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
    requiredParams: [
      { name: "context", type: "string", description: "The text to analyze for sentiment" },
    ],
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
    },
    exampleResponse: {
      llm_response: '{"sentiment": "positive", "confidence": 0.95}',
    },
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
    },
    exampleResponse: {
      llm_response: '{"invoice_number": "12345", "date": "March 15, 2024", "total_amount": "$1,250.00", "customer": "ABC Corp"}',
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
    },
    exampleResponse: {
      llm_response: "I can see a beautiful landscape with mountains in the background...",
    },
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
    },
    exampleResponse: {
      llm_response: "The image shows a bustling city street...",
    },
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
      documents: [
        "Document about neural networks",
        "Article on cooking recipes",
        "Paper on deep learning",
      ],
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
    },
    exampleResponse: {
      llm_response: '{"classification": "safe", "confidence": 0.98}',
    },
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
    },
    exampleResponse: {
      embeddings: [0.1, -0.2, 0.3, 0.4, -0.1],
    },
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
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {},
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
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {},
    exampleResponse: {
      response: {
        version: "1.0.0",
        gpu_count: 2,
        memory: "32GB",
        status: "active",
      },
    },
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
    requiredParams: [
      { name: "model_name", type: "string", description: "Name of the model to look up" },
    ],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      model_name: "mistral-7b-instruct-v0.3-ov",
    },
    exampleResponse: {
      response: {
        name: "mistral-7b-instruct-v0.3-ov",
        parameters: "7B",
        context_length: 4096,
        loaded: true,
      },
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
    requiredParams: [
      { name: "model_name", type: "string", description: "Name of the model to load into memory" },
    ],
    optionalParams: [
      { name: "sample", type: "boolean", description: "Enable sampling during generation" },
      { name: "temperature", type: "float", description: "Sampling temperature for response generation" },
      { name: "max_output", type: "integer", description: "Maximum number of output tokens" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      model_name: "phi-4-ov",
    },
    exampleResponse: {
      response: {
        model_name: "phi-4-ov",
        status: "loaded",
        memory_usage: "6.2GB",
      },
    },
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
    requiredParams: [
      { name: "model_name", type: "string", description: "Name of the model to unload from memory" },
    ],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      model_name: "llama-3.2-1b-instruct-ov",
    },
    exampleResponse: {
      response: {
        model_name: "llama-3.2-1b-instruct-ov",
        status: "unloaded",
        memory_freed: "6.2GB",
      },
    },
    isStreaming: false,
  },
  {
    id: "inference_json",
    name: "Inference with JSON",
    method: "POST",
    endpoint: "/inference_json/",
    description: "Generate a complete inference response with JSON-encoded request body. Same as the standard inference endpoint but accepts parameters as a JSON payload rather than form data.",
    category: "models",
    timeout: 60,
    requiredParams: [
      { name: "prompt", type: "string", description: "The input text prompt to generate a response for" },
      { name: "model_name", type: "string", description: "The name of the model to use for inference" },
    ],
    optionalParams: [
      { name: "max_output", type: "integer", description: "Maximum number of tokens to generate", default: "100" },
      { name: "temperature", type: "number", description: "Controls randomness in generation (0.0-1.0)", default: "0.7" },
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
    },
    exampleResponse: {
      llm_response: "Artificial intelligence represents one of humanity's greatest...",
    },
    isStreaming: false,
  },
  {
    id: "generate_image",
    name: "Generate image",
    method: "POST",
    endpoint: "/generate_image/",
    description: "Generate an image from a text prompt using a supported image generation model. Returns the file path to the saved image.",
    category: "models",
    timeout: 120,
    requiredParams: [
      { name: "prompt", type: "string", description: "Text description of the image to generate" },
    ],
    optionalParams: [
      { name: "model_name", type: "string", description: "Image generation model to use" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["fp"],
    exampleRequest: {
      prompt: "A serene mountain landscape at sunset",
      model_name: "sd-xl",
    },
    exampleResponse: {
      fp: "/path/to/generated/image.bmp",
    },
    isStreaming: false,
  },
  {
    id: "generate_speech",
    name: "Generate speech",
    method: "POST",
    endpoint: "/generate_speech/",
    description: "Generate speech audio from text using a supported text-to-speech model. Returns the file path to the saved audio file.",
    category: "models",
    timeout: 120,
    requiredParams: [
      { name: "prompt", type: "string", description: "Text to convert to speech" },
    ],
    optionalParams: [
      { name: "model_name", type: "string", description: "TTS model to use" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["fp"],
    exampleRequest: {
      prompt: "Hello, welcome to Model HQ. This is a text to speech demonstration.",
      model_name: "tts-model",
    },
    exampleResponse: {
      fp: "/path/to/generated/speech.wav",
    },
    isStreaming: false,
  },
  {
    id: "model_download",
    name: "Download model",
    method: "POST",
    endpoint: "/model_download/",
    description: "Downloads a model directly from the Model HQ server to the local device, rather than from an external model repository.",
    category: "models",
    timeout: 120,
    requiredParams: [
      { name: "model_name", type: "string", description: "Name of the model to download" },
    ],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      model_name: "llama-3.2-1b-instruct-ov",
    },
    exampleResponse: {
      response: {
        status: "success",
        zip_fp: "/path/to/downloaded/model.zip",
      },
    },
    isStreaming: false,
  },
  {
    id: "test_batch",
    name: "Batch test",
    method: "POST",
    endpoint: "/test_batch/",
    description: "Sends a test file to the server for batch evaluation and returns aggregated results. Ideal for running a full test suite against a model in a single request.",
    category: "models",
    timeout: 1000,
    requiredParams: [
      { name: "model_name", type: "string", description: "Name of the model to test" },
      { name: "test_file", type: "file", description: "Test file containing prompts and expected outputs" },
    ],
    optionalParams: [
      { name: "max_output", type: "integer", description: "Maximum output tokens" },
      { name: "temperature", type: "float", description: "Sampling temperature" },
      { name: "sample", type: "boolean", description: "Enable sampling" },
      { name: "api_key", type: "string", description: "API key for authentication" },
      { name: "context", type: "string", description: "Context for the test" },
      { name: "params", type: "object", description: "Additional model parameters" },
      { name: "fx", type: "string", description: "Function name for function-call testing" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["test_results"],
    exampleRequest: {
      model_name: "llama-3.2-3b-instruct-ov",
      test_file: "test_suite.jsonl",
    },
    exampleResponse: {
      test_results: {
        total: 100,
        passed: 95,
        failed: 5,
        accuracy: 0.95,
      },
    },
    isStreaming: false,
  },
  {
    id: "test",
    name: "Test model",
    method: "POST",
    endpoint: "/test/",
    description: "Unpacks a test file and runs each test individually, returning per-test results. Designed for real-time command-line testing where you want to see each result as it completes.",
    category: "models",
    timeout: 60,
    requiredParams: [
      { name: "model_name", type: "string", description: "Name of the model to test" },
      { name: "test_file", type: "file", description: "Test file containing prompts and expected outputs" },
    ],
    optionalParams: [
      { name: "max_output", type: "integer", description: "Maximum output tokens" },
      { name: "temperature", type: "float", description: "Sampling temperature" },
      { name: "sample", type: "boolean", description: "Enable sampling" },
      { name: "api_key", type: "string", description: "API key for authentication" },
      { name: "context", type: "string", description: "Context for the test" },
      { name: "params", type: "object", description: "Additional model parameters" },
      { name: "fx", type: "string", description: "Function name for function-call testing" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["test_results"],
    exampleRequest: {
      model_name: "llama-3.2-3b-instruct-ov",
      test_file: "test_suite.jsonl",
    },
    exampleResponse: {
      test_results: [
        { test_id: 1, passed: true, output: "..." },
        { test_id: 2, passed: false, output: "..." },
      ],
    },
    isStreaming: false,
  },

  // ----------------------------------------------
  // RAG
  // ----------------------------------------------
  {
    id: "document_inference",
    name: "Document Q&A",
    method: "POST",
    endpoint: "/document_inference/",
    description: "Specialized inference to ask questions about uploaded documents. Combines document parsing, semantic search, and LLM inference.",
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
    },
    exampleResponse: {
      response: "Based on the document analysis, the main conclusion is...",
    },
    isStreaming: false,
  },
  {
    id: "library_inference",
    name: "Library Q&A",
    method: "POST",
    endpoint: "/library_inference/",
    description: "Specialized RAG inference that ranks entries from a library and generates responses based on retrieved content.",
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
    },
    exampleResponse: {
      response: "Based on the library content, the key features include...",
    },
    isStreaming: false,
  },
  {
    id: "document_batch_analysis",
    name: "Batch document analysis",
    method: "POST",
    endpoint: "/document_batch_analysis/",
    description: "Analyzes multiple documents with a set of questions, ideal for processing contracts, invoices, or reports with consistent queries.",
    category: "rag",
    timeout: 600,
    requiredParams: [
      { name: "uploaded_files", type: "array", description: "Array of documents to analyze" },
      { name: "question_list", type: "array", description: "List of questions to ask each document" },
    ],
    optionalParams: [
      { name: "model_name", type: "string", description: "LLM model to use for analysis" },
      { name: "reranker", type: "string", description: "Reranker model for result optimization" },
      { name: "rag", type: "boolean", description: "Enable retrieval-augmented generation for enhanced context" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      uploaded_files: ["contract1.pdf", "contract2.pdf"],
      question_list: [
        "What is the governing law?",
        "What is the termination notice period?",
      ],
      model_name: "mistral-7b-instruct-v0.3-ov",
    },
    exampleResponse: {
      response: {
        results: [
          {
            document: "contract1.pdf",
            answers: ["Delaware", "30 days"],
          },
          {
            document: "contract2.pdf",
            answers: ["California", "60 days"],
          },
        ],
      },
    },
    isStreaming: false,
  },
  {
    id: "library_stream_inference",
    name: "Library stream",
    method: "POST",
    endpoint: "/library_stream_inference/",
    description: "Streaming version of Library Q&A. Ranks entries from a library and streams the generated response token by token for real-time display.",
    category: "rag",
    timeout: 60,
    requiredParams: [
      { name: "question", type: "string", description: "Question to ask about the library content" },
      { name: "library_name", type: "string", description: "Name of the library to search" },
      { name: "model_name", type: "string", description: "LLM model to use for answering" },
    ],
    optionalParams: [
      { name: "db", type: "string", description: "Database type", default: "mongo" },
      { name: "vector_db", type: "string", description: "Vector database type", default: "milvus" },
      { name: "account_name", type: "string", description: "Account identifier for multi-tenant setups" },
      { name: "use_top_n_context", type: "integer", description: "Number of top context chunks to use" },
      { name: "result_count", type: "integer", description: "Number of results to retrieve" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      question: "What are the key features of the product?",
      library_name: "product_docs",
      model_name: "llama-3.2-3b-instruct-ov",
    },
    exampleResponse: {
      llm_response: "Based on the library content, the key features include...",
    },
    isStreaming: true,
  },
  {
    id: "build_source",
    name: "Build source",
    method: "POST",
    endpoint: "/build_source/",
    description: "Builds an indexed source file from a set of uploaded documents. Files are parsed, text chunked and organized into a single jsonl source file for efficient retrieval.",
    category: "rag",
    timeout: 300,
    requiredParams: [
      { name: "uploaded_files", type: "array", description: "Array of files to process into a source" },
    ],
    optionalParams: [
      { name: "text_chunk_size", type: "integer", description: "Size of text chunks for processing" },
      { name: "tables_only", type: "boolean", description: "Whether to focus only on tables" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      uploaded_files: ["document1.pdf", "document2.pdf"],
      text_chunk_size: 500,
    },
    exampleResponse: {
      response: "/path/to/source/my_source.jsonl",
    },
    isStreaming: false,
  },
  {
    id: "build_source_context",
    name: "Build source context",
    method: "POST",
    endpoint: "/build_source_context/",
    description: "Executes the first half of a RAG query by comparing a question with a source document and returning the most relevant parts with metadata (file name, page number, etc.). The output can be passed separately to generate an answer.",
    category: "rag",
    timeout: 60,
    requiredParams: [
      { name: "uploaded_source", type: "file", description: "Source file to search" },
      { name: "question", type: "string", description: "Query to find relevant context for" },
    ],
    optionalParams: [
      { name: "use_top_n_context", type: "integer", description: "Number of top context chunks to use", default: "5" },
      { name: "tables_only", type: "boolean", description: "Whether to focus only on tables" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      uploaded_source: "my_source.jsonl",
      question: "What are the termination clauses?",
      use_top_n_context: 6,
    },
    exampleResponse: {
      response: [
        {
          doc_id: 1,
          text: "Relevant passage from the source...",
          score: 0.95,
          page_num: 3,
        },
      ],
    },
    isStreaming: false,
  },
  {
    id: "source_inference",
    name: "Source Q&A",
    method: "POST",
    endpoint: "/source_inference/",
    description: "Executes a complete RAG inference on a prebuilt source file. Combines semantic ranking, context building, and LLM prompting to answer questions based on source content.",
    category: "rag",
    timeout: 60,
    requiredParams: [
      { name: "uploaded_source", type: "file", description: "Source file to query" },
      { name: "question", type: "string", description: "Question to ask about the source content" },
    ],
    optionalParams: [
      { name: "model_name", type: "string", description: "LLM model to use for answering" },
      { name: "max_output", type: "integer", description: "Maximum tokens to generate" },
      { name: "use_top_n_context", type: "integer", description: "Number of top context chunks to use" },
      { name: "tables_only", type: "boolean", description: "Whether to focus only on tables" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      uploaded_source: "my_source.jsonl",
      question: "What are the key conclusions?",
      model_name: "llama-3.2-3b-instruct-ov",
      use_top_n_context: 6,
    },
    exampleResponse: {
      llm_response: "Based on the source content, the key conclusions are...",
    },
    isStreaming: false,
  },
  {
    id: "source_stream_inference",
    name: "Source stream",
    method: "POST",
    endpoint: "/source_stream_inference/",
    description: "Streaming version of Source Q&A. Executes RAG inference on a prebuilt source and streams the generated response token by token for real-time display.",
    category: "rag",
    timeout: 60,
    requiredParams: [
      { name: "uploaded_source", type: "file", description: "Source file to query" },
      { name: "question", type: "string", description: "Question to ask about the source content" },
    ],
    optionalParams: [
      { name: "model_name", type: "string", description: "LLM model to use for answering" },
      { name: "max_output", type: "integer", description: "Maximum tokens to generate" },
      { name: "use_top_n_context", type: "integer", description: "Number of top context chunks to use" },
      { name: "tables_only", type: "boolean", description: "Whether to focus only on tables" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      uploaded_source: "my_source.jsonl",
      question: "What are the key conclusions?",
      model_name: "llama-3.2-3b-instruct-ov",
      use_top_n_context: 6,
    },
    exampleResponse: {
      llm_response: "Based on the source content, the key conclusions are...",
    },
    isStreaming: true,
  },
  {
    id: "inference_predictive_model",
    name: "Predictive model inference",
    method: "POST",
    endpoint: "/inference_predictive_model/",
    description: "Runs a predictive model inference against a test file or dataset, returning batch analysis results. Useful for evaluating model performance on structured test data.",
    category: "rag",
    timeout: 60,
    requiredParams: [
      { name: "test_file", type: "file", description: "Test file containing evaluation data" },
      { name: "dataset_name", type: "string", description: "Name of the dataset to use for evaluation" },
    ],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["results"],
    exampleRequest: {
      test_file: "evaluation_data.jsonl",
      dataset_name: "contract_qa_v1",
    },
    exampleResponse: {
      results: {
        accuracy: 0.92,
        total_samples: 100,
        passed: 92,
      },
    },
    isStreaming: false,
  },

  // ----------------------------------------------
  // Library Management
  // ----------------------------------------------
  {
    id: "create_new_library",
    name: "Create library",
    method: "POST",
    endpoint: "/library/create_new_library/",
    description: "Creates a new library which is a collection of documents that are parsed, indexed and organized for knowledge retrieval.",
    category: "library",
    timeout: 30,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name for the new library" },
      { name: "account_name", type: "string", description: "Account identifier for multi-tenant setups" },
      { name: "db", type: "string", description: "Database type (e.g., mongo)" },
    ],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      account_name: "user123",
      db: "mongo",
    },
    exampleResponse: {
      response: {
        library_name: "contract_library",
        status: "created",
        doc_count: 0,
      },
    },
    isStreaming: false,
  },
  {
    id: "add_files",
    name: "Add files to library",
    method: "POST",
    endpoint: "/library/add_files/",
    description: "Core method for adding files to a Library, which are parsed, text chunked and indexed automatically upon upload.",
    category: "library",
    timeout: 300,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library to add files to" },
      { name: "uploaded_files", type: "array", description: "Array of files to upload and process" },
      { name: "account_name", type: "string", description: "Account identifier for multi-tenant setups" },
      { name: "db", type: "string", description: "Database type (e.g., mongo)" },
    ],
    optionalParams: [
      { name: "chunk_size", type: "integer", description: "Size of text chunks for processing" },
      { name: "smart_chunking", type: "boolean", description: "Enable intelligent chunking" },
      { name: "max_chunk_size", type: "integer", description: "Maximum chunk size" },
      { name: "get_images", type: "boolean", description: "Extract images from documents" },
      { name: "get_tables", type: "boolean", description: "Extract tables from documents" },
      { name: "table_strategy", type: "string", description: "Strategy for table extraction" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      uploaded_files: ["contract1.pdf", "contract2.pdf"],
    },
    exampleResponse: {
      response: {
        files_processed: 2,
        chunks_created: 45,
        status: "completed",
      },
    },
    isStreaming: false,
  },
  {
    id: "query",
    name: "Query library",
    method: "POST",
    endpoint: "/library/query/",
    description: "Execute a text-based query against an existing library to find relevant documents and passages.",
    category: "library",
    timeout: 60,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library to query" },
      { name: "account_name", type: "string", description: "Account identifier for multi-tenant setups" },
      { name: "user_query", type: "string", description: "Search query text" },
    ],
    optionalParams: [
      { name: "result_count", type: "integer", description: "Number of results to return" },
      { name: "db", type: "string", description: "Database type", default: "mongo" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      account_name: "user123",
      user_query: "termination clauses",
      result_count: 10,
    },
    exampleResponse: {
      response: [
        {
          doc_id: 1,
          text: "Termination clause content...",
          score: 0.95,
        },
      ],
    },
    isStreaming: false,
  },
  {
    id: "get_library_card",
    name: "Get library info",
    method: "POST",
    endpoint: "/library/get_library_card/",
    description: "Get comprehensive metadata information about a library including document count, embedding status, and configuration.",
    category: "library",
    timeout: 10,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library to get information for" },
      { name: "account_name", type: "string", description: "Account identifier for multi-tenant setups" },
      { name: "db", type: "string", description: "Database type (e.g., mongo)" },
    ],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      account_name: "user123",
      db: "mongo",
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
    endpoint: "/library/install_embedding/",
    description: "Installs vector embeddings across a library and creates the appropriate vectors in the vector database for semantic search.",
    category: "library",
    timeout: 600,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library to install embeddings for" },
      { name: "account_name", type: "string", description: "Account identifier for multi-tenant setups" },
      { name: "model_name", type: "string", description: "Embedding model to use for vector generation" },
      { name: "vector_db", type: "string", description: "Vector database to use" },
      { name: "db", type: "string", description: "Database type (e.g., mongo)" },
    ],
    optionalParams: [
      { name: "embedding_model", type: "string", description: "Alternative embedding model name" },
      { name: "batch_size", type: "integer", description: "Batch size for processing" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      account_name: "user123",
      model_name: "all-mini-lm-l6-v2-ov",
      vector_db: "milvus",
      db: "mongo",
    },
    exampleResponse: {
      response: {
        embeddings_created: 1250,
        vector_db: "milvus",
        status: "completed",
      },
    },
    isStreaming: false,
  },
  {
    id: "semantic_query",
    name: "Semantic search",
    method: "POST",
    endpoint: "/library/semantic_query/",
    description: "Executes a semantic/vector query against embeddings for more accurate content retrieval based on meaning rather than keywords.",
    category: "library",
    timeout: 60,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library to search" },
      { name: "account_name", type: "string", description: "Account identifier for multi-tenant setups" },
      { name: "user_query", type: "string", description: "Semantic search query" },
      { name: "embedding_model", type: "string", description: "Embedding model for query encoding" },
    ],
    optionalParams: [
      { name: "vector_db", type: "string", description: "Vector database type", default: "milvus" },
      { name: "db", type: "string", description: "Database type", default: "mongo" },
      { name: "result_count", type: "integer", description: "Number of results to return" },
      { name: "build_context", type: "boolean", description: "Build context passages from results" },
      { name: "width_before", type: "integer", description: "Characters of context before match" },
      { name: "width_after", type: "integer", description: "Characters of context after match" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      user_query: "contract termination conditions",
      account_name: "user123",
      vector_db: "milvus",
      db: "mongo",
      embedding_model: "all-mini-lm-l6-v2-ov",
      result_count: 5,
    },
    exampleResponse: {
      response: [
        {
          doc_id: 1,
          similarity_score: 0.92,
          text: "Contract termination...",
        },
      ],
    },
    isStreaming: false,
  },
  {
    id: "get_document_list",
    name: "List documents",
    method: "POST",
    endpoint: "/library/get_document_list/",
    description: "Returns a comprehensive list of all documents contained in a specific library with metadata.",
    category: "library",
    timeout: 30,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library to list documents from" },
      { name: "account_name", type: "string", description: "Account identifier for multi-tenant setups" },
      { name: "db", type: "string", description: "Database type (e.g., mongo)" },
    ],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      account_name: "user123",
      db: "mongo",
    },
    exampleResponse: {
      response: [
        {
          doc_id: 1,
          filename: "contract1.pdf",
          pages: 12,
          upload_date: "2024-01-15",
        },
        {
          doc_id: 2,
          filename: "contract2.pdf",
          pages: 8,
          upload_date: "2024-01-16",
        },
      ],
    },
    isStreaming: false,
  },
  {
    id: "get_document_text",
    name: "Extract document text",
    method: "POST",
    endpoint: "/library/get_document_text/",
    description: "Returns the complete text extract of a selected document from a specified library for review or processing.",
    category: "library",
    timeout: 60,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library containing the document" },
      { name: "account_name", type: "string", description: "Account identifier for multi-tenant setups" },
      { name: "db", type: "string", description: "Database type (e.g., mongo)" },
    ],
    optionalParams: [
      { name: "doc_id", type: "string", description: "Document ID to extract text from" },
      { name: "doc_fn", type: "string", description: "Document filename to extract text from" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      account_name: "user123",
      db: "mongo",
      doc_id: "1",
    },
    exampleResponse: {
      response: {
        doc_id: 1,
        filename: "contract1.pdf",
        text: "Full document text content...",
      },
    },
    isStreaming: false,
  },
  {
    id: "add_files_async",
    name: "Add files async",
    method: "POST",
    endpoint: "/library/add_files_async/",
    description: "Non-blocking version of add files. Files are uploaded and queued for processing, allowing the client to continue working while parsing and indexing completes in the background.",
    category: "library",
    timeout: 20,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library to add files to" },
      { name: "uploaded_files", type: "array", description: "Array of files to upload and process" },
      { name: "account_name", type: "string", description: "Account identifier for multi-tenant setups" },
      { name: "db", type: "string", description: "Database type (e.g., mongo)" },
    ],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
      { name: "chunk_size", type: "integer", description: "Size of text chunks for processing" },
      { name: "smart_chunking", type: "boolean", description: "Enable intelligent chunking" },
      { name: "max_chunk_size", type: "integer", description: "Maximum chunk size" },
      { name: "get_images", type: "boolean", description: "Extract images from documents" },
      { name: "get_tables", type: "boolean", description: "Extract tables from documents" },
      { name: "table_strategy", type: "string", description: "Strategy for table extraction" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      uploaded_files: ["contract1.pdf", "contract2.pdf"],
      account_name: "user123",
      db: "mongo",
    },
    exampleResponse: {
      response: {
        status: "queued",
        message: "Files added for processing",
      },
    },
    isStreaming: false,
  },
  {
    id: "install_embedding_async",
    name: "Install embeddings async",
    method: "POST",
    endpoint: "/library/install_embedding_async/",
    description: "Non-blocking version of install embeddings. Starts the embedding process in the background and returns immediately, allowing the server to process large libraries without timing out.",
    category: "library",
    timeout: 10,
    requiredParams: [
      { name: "library_name", type: "string", description: "Name of the library to install embeddings for" },
      { name: "account_name", type: "string", description: "Account identifier for multi-tenant setups" },
      { name: "model_name", type: "string", description: "Embedding model to use for vector generation" },
      { name: "vector_db", type: "string", description: "Vector database to use" },
      { name: "db", type: "string", description: "Database type (e.g., mongo)" },
    ],
    optionalParams: [
      { name: "embedding_model", type: "string", description: "Alternative embedding model name" },
      { name: "batch_size", type: "integer", description: "Batch size for processing" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      library_name: "contract_library",
      account_name: "user123",
      model_name: "all-mini-lm-l6-v2-ov",
      vector_db: "milvus",
      db: "mongo",
    },
    exampleResponse: {
      response: {
        embedding_record: {},
        status: "started",
      },
    },
    isStreaming: false,
  },

  // ----------------------------------------------
  // Agent Execution
  // ----------------------------------------------
  {
    id: "get_all_agents",
    name: "List all agents",
    method: "POST",
    endpoint: "/get_all_agents/",
    description: "Returns a comprehensive list of all available agent processes on the server with their capabilities.",
    category: "agent",
    timeout: 10,
    requiredParams: [],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {},
    exampleResponse: {
      response: [
        {
          name: "contract_analyzer",
          description: "Contract analysis agent",
          version: "1.2.0",
        },
        {
          name: "invoice_processor",
          description: "Invoice processing agent",
          version: "1.0.1",
        },
      ],
    },
    isStreaming: false,
  },
  {
    id: "get_agent_signature",
    name: "Get agent signature",
    method: "POST",
    endpoint: "/get_agent_signature/",
    description: "Retrieves detailed metadata about an agent including its required inputs (with names and types), outputs, description, number of steps, and updatable parameters. Essential first step before running an agent.",
    category: "agent",
    timeout: 500,
    requiredParams: [
      { name: "process_name", type: "string", description: "Name of the agent process to inspect" },
    ],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["agent_signature"],
    exampleRequest: {
      process_name: "contract_analyzer",
    },
    exampleResponse: {
      agent_signature: {
        name: "contract_analyzer",
        inputs: [["User-Document", "document", ""]],
        outputs: ["analysis_report"],
        description: "Analyzes contracts for key terms",
        steps: 4,
        updatable_parameters: ["model_name", "temperature"],
      },
    },
    isStreaming: false,
  },
  {
    id: "get_agent_description",
    name: "Get agent description",
    method: "POST",
    endpoint: "/get_agent_description/",
    description: "Returns a user-friendly text description of the agent process, including step-by-step breakdown of what the agent does.",
    category: "agent",
    timeout: 5,
    requiredParams: [
      { name: "process_name", type: "string", description: "Name of the agent process to describe" },
    ],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["agent_description"],
    exampleRequest: {
      process_name: "contract_analyzer",
    },
    exampleResponse: {
      agent_description: "This agent analyzes a contract document and extracts key terms including effective date, base salary, and termination provisions.",
    },
    isStreaming: false,
  },
  {
    id: "run_agent",
    name: "Execute agent",
    method: "POST",
    endpoint: "/run_agent/",
    description: "Executes a pre-configured agent process for automated multi-step document analysis and task completion. Returns an execution ID that can be used to retrieve outputs.",
    category: "agent",
    timeout: 500,
    requiredParams: [
      { name: "process_name", type: "string", description: "Name of the agent process to execute" },
    ],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
      { name: "text", type: "string", description: "Text input for the agent" },
      { name: "table_file", type: "file", description: "Table/spreadsheet file for processing" },
      { name: "image_file", type: "file", description: "Image file for agent analysis" },
      { name: "source_file", type: "file", description: "Source code file for processing" },
      { name: "document_file", type: "file", description: "Document file for agent processing" },
      { name: "process_zip", type: "file", description: "Agent process zip file to upload and execute" },
    ],
    response: ["agent_output"],
    exampleRequest: {
      process_name: "contract_analyzer",
      document_file: "contract.pdf",
    },
    exampleResponse: {
      agent_output: {
        agent_name: "contract_analyzer",
        status: "completed",
        execution_id: "d0f1ebb5-66ce-47e6-b1c0-f5767a88491e",
        execution_time: "45s",
      },
    },
    isStreaming: false,
  },
  {
    id: "run_agent_generator",
    name: "Execute agent with streaming",
    method: "POST",
    endpoint: "/run_agent_generator/",
    description: "Executes an agent process and streams step-by-step updates in real time. Ideal for displaying progress in a UI as each step completes.",
    category: "agent",
    timeout: 500,
    requiredParams: [
      { name: "agent_name", type: "string", description: "Name of the agent process to execute" },
    ],
    optionalParams: [
      { name: "agent_inputs", type: "object", description: "Dictionary of input values for the agent" },
      { name: "process_zip_path", type: "string", description: "Path to agent process zip file" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["agent_output"],
    exampleRequest: {
      agent_name: "contract_analyzer",
      agent_inputs: { "User-Document": "contract.pdf" },
    },
    exampleResponse: {
      agent_output: {
        step: 1,
        status: "processing",
        message: "Parsing document...",
      },
    },
    isStreaming: true,
  },
  {
    id: "call_agent",
    name: "Call agent endpoint",
    method: "POST",
    endpoint: "/agent/{agent_name}/",
    description: "Executes an agent through its dedicated endpoint path. Intended for production deployments where the agent has been pre-deployed as a named endpoint on the server. Supports both synchronous and asynchronous execution.",
    category: "agent",
    timeout: 500,
    requiredParams: [
      { name: "agent_name", type: "string", description: "Name of the deployed agent (in URL path)" },
      { name: "agent_inputs", type: "object", description: "Dictionary of input values for the agent" },
    ],
    optionalParams: [
      { name: "run_async", type: "boolean", description: "Whether to run asynchronously", default: "false" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      agent_name: "contract_analyzer",
      agent_inputs: { "User-Document": "contract.pdf" },
      run_async: false,
    },
    exampleResponse: {
      response: {
        execution_id: "d0f1ebb5-66ce-47e6-b1c0-f5767a88491e",
        status: "completed",
      },
    },
    isStreaming: false,
  },
  {
    id: "agent_output",
    name: "Get agent output",
    method: "POST",
    endpoint: "/agent_output/",
    description: "Retrieves the output from a completed agent run using its execution ID. Returns the general agent output response.",
    category: "agent",
    timeout: 30,
    requiredParams: [
      { name: "id", type: "string", description: "Execution ID of the agent run" },
    ],
    optionalParams: [
      { name: "agent_name", type: "string", description: "Name of the agent" },
      { name: "log_name", type: "string", description: "Specific log name to retrieve" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      id: "d0f1ebb5-66ce-47e6-b1c0-f5767a88491e",
    },
    exampleResponse: {
      response: {
        status: "completed",
        output: "Agent analysis completed successfully",
      },
    },
    isStreaming: false,
  },
  {
    id: "get_agent_output_json",
    name: "Get agent output (JSON)",
    method: "POST",
    endpoint: "/get_agent_output_json/",
    description: "Retrieves the JSON output values from a completed agent run using its execution ID.",
    category: "agent",
    timeout: 30,
    requiredParams: [
      { name: "id", type: "string", description: "Execution ID of the agent run" },
    ],
    optionalParams: [
      { name: "agent_name", type: "string", description: "Name of the agent" },
      { name: "log_name", type: "string", description: "Specific log name to retrieve" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      id: "d0f1ebb5-66ce-47e6-b1c0-f5767a88491e",
    },
    exampleResponse: {
      response: {
        effective_date: "2024-01-01",
        base_salary: "$150,000",
        termination_notice: "30 days",
      },
    },
    isStreaming: false,
  },
  {
    id: "get_agent_output_files",
    name: "Get agent output (files)",
    method: "POST",
    endpoint: "/get_agent_output_files/",
    description: "Downloads the file outputs from a completed agent run as a zip archive using its execution ID.",
    category: "agent",
    timeout: 30,
    requiredParams: [
      { name: "id", type: "string", description: "Execution ID of the agent run" },
    ],
    optionalParams: [
      { name: "agent_name", type: "string", description: "Name of the agent" },
      { name: "log_name", type: "string", description: "Specific log name to retrieve" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      id: "d0f1ebb5-66ce-47e6-b1c0-f5767a88491e",
    },
    exampleResponse: {
      response: {
        status: "success",
        zip_fp: "/path/to/agent_output_d0f1ebb5.zip",
      },
    },
    isStreaming: false,
  },
  {
    id: "get_agent_execution_log_list",
    name: "Get agent execution logs",
    method: "POST",
    endpoint: "/get_agent_execution_log_list/",
    description: "Returns a list of all execution records for a specific agent on the device, including status and timestamps.",
    category: "agent",
    timeout: 5,
    requiredParams: [
      { name: "agent_name", type: "string", description: "Name of the agent to get logs for" },
    ],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["agent_logs"],
    exampleRequest: {
      agent_name: "contract_analyzer",
    },
    exampleResponse: {
      agent_logs: [
        {
          execution_id: "d0f1ebb5-66ce-47e6-b1c0-f5767a88491e",
          status: "completed",
          timestamp: "2024-01-15T10:30:00Z",
        },
      ],
    },
    isStreaming: false,
  },
  {
    id: "install_agent",
    name: "Install agent",
    method: "POST",
    endpoint: "/install_agent/",
    description: "Uploads a prepackaged agent process zip file to install it as a server endpoint.",
    category: "agent",
    timeout: 10,
    requiredParams: [
      { name: "process_zip", type: "file", description: "Agent process zip file to install" },
    ],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["agent_details"],
    exampleRequest: {
      process_zip: "contract_analyzer.zip",
    },
    exampleResponse: {
      agent_details: {
        process_name: "contract_analyzer",
        status: "installed",
      },
    },
    isStreaming: false,
  },
  {
    id: "download_agent",
    name: "Download agent",
    method: "POST",
    endpoint: "/download_agent/",
    description: "Downloads a prepackaged agent process from the server to the local device as a zip file.",
    category: "agent",
    timeout: 15,
    requiredParams: [
      { name: "process_name", type: "string", description: "Name of the agent process to download" },
    ],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      process_name: "contract_analyzer",
    },
    exampleResponse: {
      response: {
        status: "success",
        zip_fp: "/path/to/contract_analyzer.zip",
      },
    },
    isStreaming: false,
  },
  {
    id: "get_all_scheduled_agents",
    name: "Get all scheduled agents",
    method: "POST",
    endpoint: "/get_all_scheduled_agents/",
    description: "Returns a list of all agents that have been scheduled for automated execution on the server.",
    category: "agent",
    timeout: 5,
    requiredParams: [],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["agent_list"],
    exampleRequest: {},
    exampleResponse: {
      scheduled_agents: [
        {
          agent_name: "daily_report",
          frequency: "daily",
          next_run: "2024-01-16T09:00:00Z",
        },
      ],
    },
    isStreaming: false,
  },
  {
    id: "set_new_agent_schedule",
    name: "Schedule agent",
    method: "POST",
    endpoint: "/set_new_agent_schedule/",
    description: "Schedules an agent to run automatically at a specified frequency and start time.",
    category: "agent",
    timeout: 5,
    requiredParams: [
      { name: "agent_name", type: "string", description: "Name of the agent to schedule" },
    ],
    optionalParams: [
      { name: "frequency", type: "string", description: 'Frequency of execution - "one_time", "daily", "weekly", "monthly"', default: "one_time" },
      { name: "year", type: "integer", description: "Year for scheduled start" },
      { name: "month", type: "integer", description: "Month for scheduled start" },
      { name: "day", type: "integer", description: "Day for scheduled start" },
      { name: "hour", type: "integer", description: "Hour for scheduled start", default: "9" },
      { name: "minute", type: "integer", description: "Minute for scheduled start", default: "0" },
      { name: "day_of_week", type: "string", description: "Day of week for weekly schedules", default: "mon" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["new_schedule"],
    exampleRequest: {
      agent_name: "daily_report",
      frequency: "daily",
      hour: 9,
      minute: 0,
    },
    exampleResponse: {
      new_schedule: {
        agent_name: "daily_report",
        frequency: "daily",
        status: "scheduled",
      },
    },
    isStreaming: false,
  },

  // ----------------------------------------------
  // Utilities & Administration
  // ----------------------------------------------
  {
    id: "ping",
    name: "Health check",
    method: "POST",
    endpoint: "/ping/",
    description: "Quick health check to verify if the API server is responsive and operational.",
    category: "server",
    timeout: 5,
    requiredParams: [],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {},
    exampleResponse: {
      response: {
        status: "ok",
        timestamp: "2024-01-15T10:30:00Z",
        version: "1.0.0",
      },
    },
    isStreaming: false,
  },
  {
    id: "server_stop",
    name: "Stop server",
    method: "POST",
    endpoint: "/server_stop/",
    description: "Gracefully stops the API server. Use with caution as this will terminate all active connections.",
    category: "server",
    timeout: 10,
    requiredParams: [],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {},
    exampleResponse: {
      response: {
        status: "stopping",
        message: "Server shutdown initiated",
      },
    },
    isStreaming: false,
  },
  {
    id: "get_api_catalog",
    name: "API catalog",
    method: "POST",
    endpoint: "/library/get_api_catalog/",
    description: "Returns a complete catalog of all available API endpoints with their specifications and parameters.",
    category: "server",
    timeout: 10,
    requiredParams: [],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {},
    exampleResponse: {
      response: [
        {
          api_name: "inference",
          endpoint: "/inference/",
          method: "POST",
          timeout: 60,
        },
        {
          api_name: "stream",
          endpoint: "/stream/",
          method: "POST",
          timeout: 60,
        },
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
    category: "server",
    timeout: 10,
    requiredParams: [],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {},
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
  {
    id: "app_register",
    name: "App registration",
    method: "POST",
    endpoint: "/app_register/",
    description: "Registers an application instance with the server to establish a connection for API access.",
    category: "server",
    timeout: 1,
    requiredParams: [],
    optionalParams: [],
    response: ["status"],
    exampleRequest: {},
    exampleResponse: {
      status: "registered",
    },
    isStreaming: false,
  },
  {
    id: "register_new_user",
    name: "Register new user",
    method: "POST",
    endpoint: "/register_new_user/",
    description: "Registers a new user on the server and returns credentials for API access.",
    category: "server",
    timeout: 3,
    requiredParams: [
      { name: "user_name", type: "string", description: "Name of the new user" },
      { name: "user_email", type: "string", description: "Email address of the new user" },
      { name: "user_token", type: "string", description: "Token for user authentication" },
    ],
    optionalParams: [],
    response: ["credentials"],
    exampleRequest: {
      user_name: "jane_doe",
      user_email: "jane@example.com",
      user_token: "setup-token",
    },
    exampleResponse: {
      credentials: {
        api_key: "new-api-key",
        user_id: "user_12345",
      },
    },
    isStreaming: false,
  },
  {
    id: "get_transaction_log",
    name: "Transaction log",
    method: "POST",
    endpoint: "/get_transaction_log/",
    description: "Returns the server transaction log showing API usage history and timestamps.",
    category: "server",
    timeout: 5,
    requiredParams: [],
    optionalParams: [],
    response: ["logs"],
    exampleRequest: {},
    exampleResponse: {
      logs: [
        {
          timestamp: "2024-01-15T10:30:00Z",
          endpoint: "/inference/",
          user: "user_12345",
        },
      ],
    },
    isStreaming: false,
  },
  {
    id: "add_credential",
    name: "Add credential",
    method: "POST",
    endpoint: "/add_credential/",
    description: "Adds a set of credentials (e.g., API keys for external services) to the server, passed as key-value pairs.",
    category: "server",
    timeout: 10,
    requiredParams: [
      { name: "credentials", type: "object", description: "Dictionary of credential key-value pairs" },
    ],
    optionalParams: [],
    response: ["response"],
    exampleRequest: {
      credentials: { tavily_api_key: "tvly-..." },
    },
    exampleResponse: {
      response: {
        status: "added",
        credentials: ["tavily_api_key"],
      },
    },
    isStreaming: false,
  },
  {
    id: "delete_credential",
    name: "Delete credential",
    method: "POST",
    endpoint: "/delete_credential/",
    description: "Deletes a previously stored credential from the server by name.",
    category: "server",
    timeout: 10,
    requiredParams: [
      { name: "credential_name", type: "string", description: "Name of the credential to delete" },
    ],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      credential_name: "tavily_api_key",
    },
    exampleResponse: {
      response: {
        status: "deleted",
      },
    },
    isStreaming: false,
  },

  // ----------------------------------------------
  // Services & Integrations
  // ----------------------------------------------
  {
    id: "install_service",
    name: "Install service",
    method: "POST",
    endpoint: "/install_service/",
    description: "Installs a new custom service on the server based on a JSON service definition.",
    category: "services",
    timeout: 60,
    requiredParams: [
      { name: "service_name", type: "string", description: "Name for the new service" },
      { name: "service_dfn", type: "string", description: "JSON service definition" },
    ],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      service_name: "custom_analyzer",
      service_dfn: "{...}",
    },
    exampleResponse: {
      response: {
        service_name: "custom_analyzer",
        status: "installed",
      },
    },
    isStreaming: false,
  },
  {
    id: "list_services",
    name: "List services",
    method: "POST",
    endpoint: "/list_services/",
    description: "Returns a list of all installed custom services on the server.",
    category: "services",
    timeout: 60,
    requiredParams: [],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {},
    exampleResponse: {
      response: [
        {
          service_name: "custom_analyzer",
          status: "active",
        },
      ],
    },
    isStreaming: false,
  },
  {
    id: "test_service",
    name: "Test service",
    method: "POST",
    endpoint: "/test_service/",
    description: "Tests an installed custom service to verify it is working correctly.",
    category: "services",
    timeout: 60,
    requiredParams: [
      { name: "service_name", type: "string", description: "Name of the service to test" },
    ],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      service_name: "custom_analyzer",
    },
    exampleResponse: {
      response: {
        service_name: "custom_analyzer",
        status: "operational",
      },
    },
    isStreaming: false,
  },
  {
    id: "list_integrations",
    name: "List integrations",
    method: "POST",
    endpoint: "/list_integrations/",
    description: "Returns a list of all available integration connections configured on the server.",
    category: "services",
    timeout: 60,
    requiredParams: [],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {},
    exampleResponse: {
      response: [
        {
          name: "tavily",
          type: "web_search",
          status: "configured",
        },
      ],
    },
    isStreaming: false,
  },
  {
    id: "get_integration_info",
    name: "Get integration info",
    method: "POST",
    endpoint: "/get_integration_info/",
    description: "Returns detailed information about a specific integration, including configuration status and capabilities.",
    category: "services",
    timeout: 60,
    requiredParams: [
      { name: "integration_name", type: "string", description: "Name of the integration to inspect" },
    ],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      integration_name: "tavily",
    },
    exampleResponse: {
      response: {
        name: "tavily",
        type: "web_search",
        status: "configured",
        capabilities: ["web_search"],
      },
    },
    isStreaming: false,
  },
  {
    id: "web_search",
    name: "Web search",
    method: "POST",
    endpoint: "/web_search/",
    description: "Executes a web search using a configured search provider. Supports tavily, serp_api, news_api_org, and wikipedia.",
    category: "services",
    timeout: 30,
    requiredParams: [
      { name: "query", type: "string", description: "Search query text" },
      { name: "engine", type: "string", description: "Search engine provider (tavily, serp_api, news_api_org, wikipedia)" },
    ],
    optionalParams: [
      { name: "result_count", type: "integer", description: "Number of results to return", default: "10" },
      { name: "api_token", type: "string", description: "API token for the search provider" },
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      query: "What is quantum gravity?",
      engine: "tavily",
      result_count: 5,
    },
    exampleResponse: {
      response: [
        {
          title: "Quantum Gravity Explained",
          url: "https://example.com/quantum-gravity",
          snippet: "Quantum gravity is...",
        },
      ],
    },
    isStreaming: false,
  },

  // ----------------------------------------------
  // HQ Apps
  // ----------------------------------------------
  {
    id: "start_app_session",
    name: "Start app session",
    method: "POST",
    endpoint: "/start_app_session/",
    description: "Initiates a new app session by creating a unique session ID and instantiating the app chat state on the server.",
    category: "hq",
    timeout: 60,
    requiredParams: [
      { name: "app_name", type: "string", description: "Name of the app to start a session for" },
    ],
    optionalParams: [
      { name: "preload_models", type: "boolean", description: "Whether to preload models for the session" },
      { name: "model_name", type: "string", description: "Specific model to use" },
      { name: "apply_instructions", type: "string", description: "Apply custom instructions" },
      { name: "apply_memory", type: "boolean", description: "Enable session memory" },
      { name: "preload_source", type: "boolean", description: "Preload source documents" },
      { name: "file_list", type: "array", description: "Files to preload into the session" },
    ],
    response: ["session_id"],
    exampleRequest: {
      app_name: "contract_review",
    },
    exampleResponse: {
      session_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      status: "started",
    },
    isStreaming: false,
  },
  {
    id: "chat",
    name: "Chat",
    method: "POST",
    endpoint: "/chat/",
    description: "Main interaction API for communicating with an app using a session ID. Supports streaming responses for real-time chat.",
    category: "hq",
    timeout: 600,
    requiredParams: [
      { name: "session_id", type: "string", description: "Session ID from start app session" },
      { name: "user_msg", type: "string", description: "The user message or prompt" },
    ],
    optionalParams: [
      { name: "app_name", type: "string", description: "Name of the app" },
    ],
    response: ["llm_response"],
    exampleRequest: {
      session_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      user_msg: "What is the annual rate of the base salary?",
    },
    exampleResponse: {
      llm_response: {
        text: "The annual base salary is $150,000...",
        sources: ["contract.pdf"],
      },
    },
    isStreaming: true,
  },
  {
    id: "run_app_agent",
    name: "Run app agent",
    method: "POST",
    endpoint: "/run_app_agent/",
    description: "Executes an agent process inside an app session with streaming step-by-step output. Ideal for displaying real-time progress in the UI.",
    category: "hq",
    timeout: 1200,
    requiredParams: [
      { name: "session_id", type: "string", description: "Session ID from start app session" },
      { name: "agent_name", type: "string", description: "Name of the agent to run" },
    ],
    optionalParams: [
      { name: "inputs", type: "object", description: "Dictionary of input values for the agent" },
      { name: "updates", type: "object", description: "Parameter updates for the agent" },
    ],
    response: ["response"],
    exampleRequest: {
      session_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      agent_name: "contract_analyzer",
      inputs: { "User-Document": "contract.pdf" },
    },
    exampleResponse: {
      response: {
        step: 1,
        status: "processing",
        message: "Analyzing document...",
      },
    },
    isStreaming: true,
  },
  {
    id: "get_app_transcript",
    name: "Get app transcript",
    method: "POST",
    endpoint: "/get_app_transcript/",
    description: "Generates a transcript of the chat history for an app session in the requested output format.",
    category: "hq",
    timeout: 15,
    requiredParams: [
      { name: "session_id", type: "string", description: "Session ID to generate transcript for" },
    ],
    optionalParams: [
      { name: "output_format", type: "string", description: "Output format - docx, pptx, xlsx, csv, json, txt", default: "docx" },
    ],
    response: ["response"],
    exampleRequest: {
      session_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      output_format: "docx",
    },
    exampleResponse: {
      response: {
        status: "success",
        zip_fp: "/path/to/transcript.zip",
      },
    },
    isStreaming: false,
  },
  {
    id: "get_app_state",
    name: "Get app state",
    method: "POST",
    endpoint: "/get_app_state/",
    description: "Returns the current state parameters of a selected app session, including loaded resources and configuration.",
    category: "hq",
    timeout: 6,
    requiredParams: [
      { name: "session_id", type: "string", description: "Session ID to query" },
    ],
    optionalParams: [],
    response: ["response"],
    exampleRequest: {
      session_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    },
    exampleResponse: {
      response: {
        status: "active",
        resources: ["document1.pdf"],
        chat_history_length: 5,
      },
    },
    isStreaming: false,
  },
  {
    id: "update_app_state",
    name: "Update app state",
    method: "POST",
    endpoint: "/update_app_state/",
    description: "Updates selected configuration parameters of an active app session.",
    category: "hq",
    timeout: 60,
    requiredParams: [
      { name: "session_id", type: "string", description: "Session ID to update" },
      { name: "updates", type: "object", description: "Key-value pairs of parameters to update" },
    ],
    optionalParams: [],
    response: ["response"],
    exampleRequest: {
      session_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      updates: { model_name: "llama-3.2-3b-instruct-ov" },
    },
    exampleResponse: {
      response: {
        status: "updated",
        session_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      },
    },
    isStreaming: false,
  },
  {
    id: "stop_app_session",
    name: "Stop app session",
    method: "POST",
    endpoint: "/stop_app_session/",
    description: "Ends an active app session by removing the chat state from the server.",
    category: "hq",
    timeout: 10,
    requiredParams: [
      { name: "session_id", type: "string", description: "Session ID to stop" },
    ],
    optionalParams: [
      { name: "app_name", type: "string", description: "Name of the app" },
    ],
    response: ["response"],
    exampleRequest: {
      session_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    },
    exampleResponse: {
      response: {
        status: "stopped",
      },
    },
    isStreaming: false,
  },
  {
    id: "get_all_apps",
    name: "List all apps",
    method: "POST",
    endpoint: "/get_all_apps/",
    description: "Returns a list of all available apps on the server.",
    category: "hq",
    timeout: 5,
    requiredParams: [],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["app_list"],
    exampleRequest: {},
    exampleResponse: {
      app_list: [
        {
          app_name: "contract_review",
          version: "1.0.0",
        },
      ],
    },
    isStreaming: false,
  },
  {
    id: "lookup_app",
    name: "Lookup app",
    method: "POST",
    endpoint: "/lookup_app/",
    description: "Returns detailed metadata about a specific app, including its resources and configuration.",
    category: "hq",
    timeout: 3,
    requiredParams: [
      { name: "app_name", type: "string", description: "Name of the app to look up" },
    ],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["app_details"],
    exampleRequest: {
      app_name: "contract_review",
    },
    exampleResponse: {
      app_details: {
        app_name: "contract_review",
        version: "1.0.0",
        agents: ["contract_analyzer"],
        models: ["llama-3.2-3b-instruct-ov"],
      },
    },
    isStreaming: false,
  },
  {
    id: "get_active_app_sessions",
    name: "Get active app sessions",
    method: "POST",
    endpoint: "/get_active_app_sessions/",
    description: "Returns a list of all currently active app sessions on the server.",
    category: "hq",
    timeout: 6,
    requiredParams: [],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {},
    exampleResponse: {
      response: [
        {
          session_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
          app_name: "contract_review",
          status: "active",
        },
      ],
    },
    isStreaming: false,
  },
  {
    id: "download_app",
    name: "Download app",
    method: "POST",
    endpoint: "/download_app/",
    description: "Downloads an app package from the server as a zip file for local deployment or backup.",
    category: "hq",
    timeout: 15,
    requiredParams: [
      { name: "app_name", type: "string", description: "Name of the app to download" },
    ],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["response"],
    exampleRequest: {
      app_name: "contract_review",
    },
    exampleResponse: {
      response: {
        status: "success",
        zip_fp: "/path/to/contract_review.zip",
      },
    },
    isStreaming: false,
  },
  {
    id: "install_app",
    name: "Install app",
    method: "POST",
    endpoint: "/install_app/",
    description: "Uploads and installs an app package from a zip file onto the server.",
    category: "hq",
    timeout: 10,
    requiredParams: [
      { name: "app_zip", type: "file", description: "App package zip file to install" },
    ],
    optionalParams: [
      { name: "trusted_key", type: "string", description: "Trusted authentication key" },
    ],
    response: ["app_details"],
    exampleRequest: {
      app_zip: "contract_review.zip",
    },
    exampleResponse: {
      app_details: {
        app_name: "contract_review",
        status: "installed",
      },
    },
    isStreaming: false,
  },
]
