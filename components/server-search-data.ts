import type { SearchResult } from "./search-result";

export const serverSearchData: SearchResult[] = [
  // ==================== GETTING STARTED ====================
  {
    title: "Getting Started with Code on Model HQ",
    url: "/server-docs/getting-started-with-sdk",
    type: "page",
    description: "Set up and launch the Model HQ backend server, configure the SDK, and make your first inference call",
  },
  {
    title: "Launching the Tools Interface",
    url: "/server-docs/getting-started-with-sdk#1-launching-the-tools-interface",
    type: "heading",
    parentPage: "Getting Started with Code on Model HQ",
  },
  {
    title: "Launching the Backend Server",
    url: "/server-docs/getting-started-with-sdk#2-launching-the-backend-server",
    type: "heading",
    parentPage: "Getting Started with Code on Model HQ",
  },
  {
    title: "Launch Backend Inference Server Guide",
    url: "/server-docs/getting-started-with-sdk#launch-backend-inference-server-guide",
    type: "heading",
    parentPage: "Getting Started with Code on Model HQ",
  },
  {
    title: "Configure Backend API Server for Headless Mode",
    url: "/server-docs/getting-started-with-sdk#configure-or-configure-backend-api-sever-for-headless-mode",
    type: "heading",
    parentPage: "Getting Started with Code on Model HQ",
  },
  {
    title: "Downloading the Model HQ SDK",
    url: "/server-docs/getting-started-with-sdk#downloading-the-model-hq-sdk",
    type: "heading",
    parentPage: "Getting Started with Code on Model HQ",
  },
  {
    title: "Making the SDK Importable",
    url: "/server-docs/getting-started-with-sdk#making-the-sdk-importable",
    type: "heading",
    parentPage: "Getting Started with Code on Model HQ",
  },
  {
    title: "Closing Backend Server",
    url: "/server-docs/getting-started-with-sdk#closing-backend-server",
    type: "heading",
    parentPage: "Getting Started with Code on Model HQ",
  },

  // ==================== SERVER DEPLOYMENT ====================
  {
    title: "Server Deployment",
    url: "/server-docs/server-deployment",
    type: "page",
    description: "Deploy Model HQ Server on Linux for multi-user, scalable API access",
  },
  {
    title: "Requirements",
    url: "/server-docs/server-deployment#requirements",
    type: "heading",
    parentPage: "Server Deployment",
  },
  {
    title: "Starting the Server",
    url: "/server-docs/server-deployment#starting-the-server",
    type: "heading",
    parentPage: "Server Deployment",
  },
  {
    title: "Connecting to the Server",
    url: "/server-docs/server-deployment#connecting-to-the-server",
    type: "heading",
    parentPage: "Server Deployment",
  },
  {
    title: "Remote Access via SSH Tunnel",
    url: "/server-docs/server-deployment#remote-access-via-ssh-tunnel",
    type: "heading",
    parentPage: "Server Deployment",
  },
  {
    title: "Verifying the Connection",
    url: "/server-docs/server-deployment#verifying-the-connection",
    type: "heading",
    parentPage: "Server Deployment",
  },
  {
    title: "Multi-user Considerations",
    url: "/server-docs/server-deployment#multi-user-considerations",
    type: "heading",
    parentPage: "Server Deployment",
  },

  // ==================== HELLO WORLD ====================
  {
    title: "Hello World — Model HQ Client SDK",
    url: "/server-docs/hello-world/hello-world",
    type: "page",
    description: "Quick-start guide to connect to a Model HQ server and run your first inference",
  },
  {
    title: "Complete Example",
    url: "/server-docs/hello-world/hello-world#complete-example",
    type: "heading",
    parentPage: "Hello World — Model HQ Client SDK",
  },
  {
    title: "What the Output Looks Like",
    url: "/server-docs/hello-world/hello-world#what-the-output-looks-like",
    type: "heading",
    parentPage: "Hello World — Model HQ Client SDK",
  },
  {
    title: "Trying a Different Model",
    url: "/server-docs/hello-world/hello-world#trying-a-different-model",
    type: "heading",
    parentPage: "Hello World — Model HQ Client SDK",
  },

  // ==================== CHAT ====================
  {
    title: "Chat — Model HQ Client SDK",
    url: "/server-docs/hello-world/chat",
    type: "page",
    description: "Interact with Model HQ apps through sessions, send messages and receive streamed responses",
  },
  {
    title: "Starting a Session",
    url: "/server-docs/hello-world/chat#starting-a-session",
    type: "heading",
    parentPage: "Chat — Model HQ Client SDK",
  },
  {
    title: "Sending Messages",
    url: "/server-docs/hello-world/chat#sending-messages",
    type: "heading",
    parentPage: "Chat — Model HQ Client SDK",
  },
  {
    title: "Running an Agent Inside a Session",
    url: "/server-docs/hello-world/chat#running-an-agent-inside-a-session",
    type: "heading",
    parentPage: "Chat — Model HQ Client SDK",
  },
  {
    title: "Managing Sessions",
    url: "/server-docs/hello-world/chat#managing-sessions",
    type: "heading",
    parentPage: "Chat — Model HQ Client SDK",
  },
  {
    title: "Listing and Discovering Apps",
    url: "/server-docs/hello-world/chat#listing-and-discovering-apps",
    type: "heading",
    parentPage: "Chat — Model HQ Client SDK",
  },

  // ==================== AGENTS ====================
  {
    title: "Agents — Model HQ Client SDK",
    url: "/server-docs/hello-world/agents",
    type: "page",
    description: "Discover, inspect and run pre-built multi-step agent processes via the SDK",
  },
  {
    title: "Discovering Agents",
    url: "/server-docs/hello-world/agents#discovering-agents",
    type: "heading",
    parentPage: "Agents — Model HQ Client SDK",
  },
  {
    title: "Running Agents",
    url: "/server-docs/hello-world/agents#running-agents",
    type: "heading",
    parentPage: "Agents — Model HQ Client SDK",
  },
  {
    title: "Retrieving Agent Output",
    url: "/server-docs/hello-world/agents#retrieving-agent-output",
    type: "heading",
    parentPage: "Agents — Model HQ Client SDK",
  },
  {
    title: "Managing Agents",
    url: "/server-docs/hello-world/agents#managing-agents",
    type: "heading",
    parentPage: "Agents — Model HQ Client SDK",
  },
  {
    title: "Schedule an Agent",
    url: "/server-docs/hello-world/agents#schedule-an-agent",
    type: "heading",
    parentPage: "Agents — Model HQ Client SDK",
  },
  {
    title: "Services and Integrations",
    url: "/server-docs/hello-world/agents#services-and-integrations",
    type: "heading",
    parentPage: "Agents — Model HQ Client SDK",
  },

  // ==================== RAG ====================
  {
    title: "RAG — Model HQ Client SDK",
    url: "/server-docs/hello-world/rag",
    type: "page",
    description: "Build knowledge bases with document inference, source inference, and library-based RAG",
  },
  {
    title: "Three RAG Approaches",
    url: "/server-docs/hello-world/rag#three-rag-approaches",
    type: "heading",
    parentPage: "RAG — Model HQ Client SDK",
  },
  {
    title: "Document Inference",
    url: "/server-docs/hello-world/rag#1-document-inference",
    type: "heading",
    parentPage: "RAG — Model HQ Client SDK",
  },
  {
    title: "Source Inference",
    url: "/server-docs/hello-world/rag#2-source-inference",
    type: "heading",
    parentPage: "RAG — Model HQ Client SDK",
  },
  {
    title: "Library Inference",
    url: "/server-docs/hello-world/rag#3-library-inference",
    type: "heading",
    parentPage: "RAG — Model HQ Client SDK",
  },
  {
    title: "Create a Library",
    url: "/server-docs/hello-world/rag#create-a-library",
    type: "heading",
    parentPage: "RAG — Model HQ Client SDK",
  },
  {
    title: "Install Embeddings",
    url: "/server-docs/hello-world/rag#install-embeddings",
    type: "heading",
    parentPage: "RAG — Model HQ Client SDK",
  },
  {
    title: "Query the Library",
    url: "/server-docs/hello-world/rag#query-the-library",
    type: "heading",
    parentPage: "RAG — Model HQ Client SDK",
  },
  {
    title: "Manage a Library",
    url: "/server-docs/hello-world/rag#manage-a-library",
    type: "heading",
    parentPage: "RAG — Model HQ Client SDK",
  },

  // ==================== VISION & MEDIA ====================
  {
    title: "Vision & Media — Model HQ Client SDK",
    url: "/server-docs/hello-world/vision",
    type: "page",
    description: "Image analysis, image generation, text-to-speech, and web search via the SDK",
  },
  {
    title: "Image Analysis",
    url: "/server-docs/hello-world/vision#image-analysis",
    type: "heading",
    parentPage: "Vision & Media — Model HQ Client SDK",
  },
  {
    title: "Image Generation",
    url: "/server-docs/hello-world/vision#image-generation",
    type: "heading",
    parentPage: "Vision & Media — Model HQ Client SDK",
  },
  {
    title: "Text-to-Speech",
    url: "/server-docs/hello-world/vision#text-to-speech",
    type: "heading",
    parentPage: "Vision & Media — Model HQ Client SDK",
  },
  {
    title: "Web Search",
    url: "/server-docs/hello-world/vision#web-search",
    type: "heading",
    parentPage: "Vision & Media — Model HQ Client SDK",
  },

  // ==================== SDK REFERENCE ====================
  {
    title: "SDK Reference — Model HQ Client SDK",
    url: "/server-docs/hello-world/sdk-reference",
    type: "page",
    description: "Quick-reference for all commonly used SDK methods grouped by category",
  },
  {
    title: "Client Setup",
    url: "/server-docs/hello-world/sdk-reference#client-setup",
    type: "heading",
    parentPage: "SDK Reference — Model HQ Client SDK",
  },
  {
    title: "Inference Methods",
    url: "/server-docs/hello-world/sdk-reference#inference",
    type: "heading",
    parentPage: "SDK Reference — Model HQ Client SDK",
  },
  {
    title: "Vision & Media Methods",
    url: "/server-docs/hello-world/sdk-reference#vision-media",
    type: "heading",
    parentPage: "SDK Reference — Model HQ Client SDK",
  },
  {
    title: "Model Management Methods",
    url: "/server-docs/hello-world/sdk-reference#model-management",
    type: "heading",
    parentPage: "SDK Reference — Model HQ Client SDK",
  },
  {
    title: "RAG Methods",
    url: "/server-docs/hello-world/sdk-reference#rag-document-inference",
    type: "heading",
    parentPage: "SDK Reference — Model HQ Client SDK",
  },
  {
    title: "Agent Methods",
    url: "/server-docs/hello-world/sdk-reference#agents",
    type: "heading",
    parentPage: "SDK Reference — Model HQ Client SDK",
  },

  // ==================== API REFERENCE ====================
  {
    title: "API Reference",
    url: "/server-docs/api-reference",
    type: "page",
    description: "Full endpoint specifications for all 81 Model HQ server APIs",
  },
  {
    title: "Models API",
    url: "/server-docs/api-reference",
    type: "heading",
    parentPage: "API Reference",
    description: "Core inference endpoints — stream, inference, function call, sentiment, extraction, vision, embeddings, classification",
  },
  {
    title: "RAG API",
    url: "/server-docs/api-reference",
    type: "heading",
    parentPage: "API Reference",
    description: "Retrieval Augmented Generation endpoints — document inference, source inference, batch analysis, semantic ranking",
  },
  {
    title: "Library Management API",
    url: "/server-docs/api-reference",
    type: "heading",
    parentPage: "API Reference",
    description: "Create, query, and manage document libraries — add files, install embeddings, text search, library inference",
  },
  {
    title: "Agent Execution API",
    url: "/server-docs/api-reference",
    type: "heading",
    parentPage: "API Reference",
    description: "Run agents, streaming agent output, agent signatures, download/install agents, scheduling",
  },
  {
    title: "Utilities & Administration API",
    url: "/server-docs/api-reference",
    type: "heading",
    parentPage: "API Reference",
    description: "Server management endpoints — ping, system info, list models, model load/unload, server shutdown",
  },
  {
    title: "Services & Integrations API",
    url: "/server-docs/api-reference",
    type: "heading",
    parentPage: "API Reference",
    description: "External service endpoints — install/test services, list integrations, web search",
  },
  {
    title: "HQ Apps API",
    url: "/server-docs/api-reference",
    type: "heading",
    parentPage: "API Reference",
    description: "App session management — start/stop sessions, chat, run app agents, install/list apps, app transcripts",
  },
];
