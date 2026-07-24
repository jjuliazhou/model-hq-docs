export const CATEGORY_LABELS: Record<string, string> = {
  models: "Models",
  rag: "RAG",
  library: "Library Management",
  agent: "Agent Execution",
  server: "Utilities & Administration",
  services: "Services & Integrations",
  hq: "HQ Apps",
}

export const CATEGORY_SECTIONS: { category: string; title: string; description: string }[] = [
  {
    category: "models",
    title: "Models",
    description: "Core inference endpoints for text generation, vision analysis, and specialized model functions.",
  },
  {
    category: "rag",
    title: "RAG (Retrieval Augmented Generation)",
    description: "Document and library-based question answering with semantic search and context retrieval.",
  },
  {
    category: "library",
    title: "Library Management",
    description: "Create and manage document libraries for knowledge base construction and semantic search capabilities.",
  },
  {
    category: "agent",
    title: "Agent Execution",
    description: "Execute automated multi-step processes and workflows using pre-configured intelligent agents.",
  },
  {
    category: "server",
    title: "Utilities & Administration",
    description: "Server management, health checks, and administrative functions for monitoring and control.",
  },
  {
    category: "services",
    title: "Services & Integrations",
    description: "Connect the server to external services and run web searches through supported providers.",
  },
  {
    category: "hq",
    title: "HQ Apps",
    description: "App session management, chat interaction, and app-specific agent execution endpoints.",
  },
]
