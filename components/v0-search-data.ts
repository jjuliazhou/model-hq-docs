import type { SearchResult } from "./search-result";

export const v0SearchData: SearchResult[] = [
  // Start Here Pages
   {
    title: "System Configuration",
    url: "/system-configuration",
    type: "page",
    description: "Configure your environment and system requirements",
  },
  {
    title: "Getting Started",
    url: "/getting-started",
    type: "page",
    description: "Begin your Model HQ journey with setup guides",
  },
  {
    title: "Chat",
    url: "/chat",
    type: "page",
    description: "Explore chat functionality and model interactions",
  },
  {
    title: "Changing Chat Model",
    url: "/chat/changing-chat-model",
    type: "page",
    description: "Update the default model used for Chat",
  },
  {
    title: "Error Handling",
    url: "/chat/error-handling",
    type: "page",
    description: "Troubleshoot chat-related issues",
  },
  {
    title: "Document Parsing Issues",
    url: "/rag/document-parsing-issues",
    type: "page",
    description: "Troubleshooting Document Parsing and Limitations",
  },
  {
    title: "RAG Parsing",
    url: "/rag/rag-parsing",
    type: "page",
    description: "What is parsing in Model HQ?",
  },
  {
    title: "Bots",
    url: "/bots",
    type: "page",
    description: "Build and customize your own bots",
  },
  {
    title: "RAG",
    url: "/rag",
    type: "page",
    description: "Retrieval-Augmented Generation workflows",
  },
  {
    title: "Models",
    url: "/models",
    type: "page",
    description: "Discover and manage AI models",
  },
  {
    title: "Testing Models",
    url: "/testing-models",
    type: "page",
    description: "Test the models before using them",
  },
  {
    title: "Tools",
    url: "/tools",
    type: "page",
    description: "System utilities and document parsing tools",
  },
  {
    title: "Configs",
    url: "/configs",
    type: "page",
    description: "Configuration management and settings",
  },
  {
    title: "Share Your App",
    url: "/share-your-app",
    type: "page",
    description: "Share your Agents and Custom Chatbots with others",
  },
  {
    title: "Shutdown",
    url: "/shutdown",
    type: "page",
    description:
      "Close the app safely as best practices and highly recommended",
  },
  // {
  //   title: "Getting Started With Model HQ SDK",
  //   url: "/getting-started-with-model-hq-sdk",
  //   type: "page",
  //   description: "Learn how to get started with the SDK of Model HQ",
  // },
  // {
  //   title: "Hello World with LLMWare's Model HQ SDK",
  //   url: "/hello-world",
  //   type: "page",
  //   description: "Start with the Quick Hello World Example",
  // },
  // {
  //   title: "API References",
  //   url: "/api-references",
  //   type: "page",
  //   description:
  //     "Detailed list of all the endpoints and the availble parameters",
  // },

  // Supported Models pages
  {
    title: "AMD Supported Models",
    url: "/supported-models/amd",
    type: "page",
    description: "Models optimized for AMD processors and accelerators (coming soon)",
  },
  {
    title: "Apple Supported Models",
    url: "/supported-models/apple",
    type: "page",
    description: "Models optimized for Apple Silicon and Apple Neural Engine",
  },
  {
    title: "Intel Supported Models",
    url: "/supported-models/intel",
    type: "page",
    description: "Models optimized for Intel processors using OpenVINO runtime",
  },
  {
    title: "NVIDIA Supported Models",
    url: "/supported-models/nvidia",
    type: "page",
    description: "Models optimized for NVIDIA GPUs and accelerators (coming soon)",
  },
  {
    title: "Qualcomm Supported Models",
    url: "/supported-models/qualcomm",
    type: "page",
    description:
      "Models optimized for Qualcomm Snapdragon processors using QNN",
  },

  // System Configuration headings
  {
    title: "Laptop Configuration",
    url: "/system-configuration#laptop-configuration",
    type: "heading",
    parentPage: "System Configuration",
  },
  {
    title: "Technical Datasheet",
    url: "/system-configuration#technical-datasheet",
    type: "heading",
    parentPage: "System Configuration",
  },
  {
    title: "Technical Support",
    url: "/system-configuration#technical-support",
    type: "heading",
    parentPage: "System Configuration",
  },

  // Getting Started headings
  {
    title: "Setup Options",
    url: "/getting-started#setup-options",
    type: "heading",
    parentPage: "Getting Started",
  },
  {
    title: "Full Setup",
    url: "/getting-started#getting-started-with-full-setup",
    type: "heading",
    parentPage: "Getting Started",
  },
  {
    title: "Fast Setup",
    url: "/getting-started#getting-started-with-fast-setup",
    type: "heading",
    parentPage: "Getting Started",
  },
  {
    title: "No Setup",
    url: "/getting-started#getting-started-with-no-setup",
    type: "heading",
    parentPage: "Getting Started",
  },
  {
    title: "Enterprise Template",
    url: "/getting-started#getting-started-with-enterprise-template",
    type: "heading",
    parentPage: "Getting Started",
  },

  // Chat headings
  {
    title: "Launching Chat Interface",
    url: "/chat#launching-the-chat-interface",
    type: "heading",
    parentPage: "Chat",
  },
  {
    title: "Selecting a Model",
    url: "/chat#selecting-a-model",
    type: "heading",
    parentPage: "Chat",
  },
  {
    title: "Downloading Models",
    url: "/chat#downloading-models",
    type: "heading",
    parentPage: "Chat",
  },
  {
    title: "Chat Interface",
    url: "/chat#understanding-the-chat-interface",
    type: "heading",
    parentPage: "Chat",
  },
  {
    title: "Info Button",
    url: "/chat#info-button",
    type: "heading",
    parentPage: "Chat",
  },
  {
    title: "Configuration Button",
    url: "/chat#configuration-button",
    type: "heading",
    parentPage: "Chat",
  },
  {
    title: "Source Button",
    url: "/chat#source-button-enabling-rag--chatting-with-documents",
    type: "heading",
    parentPage: "Chat",
  },
  {
    title: "Save Button",
    url: "/chat#save-button",
    type: "heading",
    parentPage: "Chat",
  },

  // Chat Error Handling
  {
    title: "Unfortunately, something has gone wrong loading _model_name_",
    url: "/chat/error-handling#unfortunately-something-has-gone-wrong-loading-model-name",
    type: "heading",
    parentPage: "Error Handling",
  },
  {
    title:
      "Why does the model not load a source or a document and what should I do?",
    url: "/chat/error-handling#why-does-the-model-not-load-a-source-or-a-document-and-what-should-i-do",
    type: "heading",
    parentPage: "Error Handling",
  },

  // Document Parsing Issues
  {
    title: "Handling Documents That Cannot Be Natively Parsed",
    url: "/rag/document-parsing-issues#handling-documents-that-cannot-be-natively-parsed",
    type: "heading",
    parentPage: "Document Parsing Issues",
  },
  {
    title: "Fallback Solution",
    url: "/rag/document-parsing-issues#fallback-solution",
    type: "heading",
    parentPage: "Document Parsing Issues",
  },
  {
    title: "How to Activate OCR",
    url: "/rag/document-parsing-issues#how-to-acitvate-ocr",
    type: "heading",
    parentPage: "Document Parsing Issues",
  },

  // RAG Parsing
  {
    title: "Document Parsing Option",
    url: "/rag/rag-parsing#document-parsing-options",
    type: "heading",
    parentPage: "RAG Parsing",
  },
  {
    title:
      "How to Select Parsing Options for RAG use cases for Chat Interfaces",
    url: "/rag/rag-parsing#parsing-options",
    type: "heading",
    parentPage: "RAG Parsing",
  },

  // Models headings
  {
    title: "Launching Models Interface",
    url: "/models#launching-the-models-interface",
    type: "heading",
    parentPage: "Models",
  },
  {
    title: "Discover",
    url: "/models#discover",
    type: "heading",
    parentPage: "Models",
  },
  {
    title: "My Models",
    url: "/models#my-models",
    type: "heading",
    parentPage: "Models",
  },
  {
    title: "History",
    url: "/models#history",
    type: "heading",
    parentPage: "Models",
  },
  { title: "Test", url: "/models#test", type: "heading", parentPage: "Models" },
  {
    title: "Update Catalog",
    url: "/models#update-catalog",
    type: "heading",
    parentPage: "Models",
  },
  {
    title: "Reset Catalog",
    url: "/models#reset-catalog",
    type: "heading",
    parentPage: "Models",
  },

  // RAG headings
  {
    title: "Launching RAG Interface",
    url: "/rag#launching-the-rag-interface",
    type: "heading",
    parentPage: "RAG",
  },
  {
    title: "Understanding RAG Interface",
    url: "/rag#understanding-the-rag-interface",
    type: "heading",
    parentPage: "RAG",
  },
  {
    title: "Creating New RAG Source",
    url: "/rag#creating-a-new-rag-source",
    type: "heading",
    parentPage: "RAG",
  },
  {
    title: "Loading Existing RAG Source",
    url: "/rag#loading-an-existing-rag-source",
    type: "heading",
    parentPage: "RAG",
  },
  {
    title: "Add Docs",
    url: "/rag#add-docs",
    type: "heading",
    parentPage: "RAG",
  },
  { title: "Search", url: "/rag#search", type: "heading", parentPage: "RAG" },
  { title: "Test", url: "/rag#test", type: "heading", parentPage: "RAG" },

  // Bots headings
  {
    title: "Launching Bots Interface",
    url: "/bots#launching-the-bots-interface",
    type: "heading",
    parentPage: "Bots",
  },
  {
    title: "Understanding Bots Interface",
    url: "/bots#understanding-the-bots-interface",
    type: "heading",
    parentPage: "Bots",
  },
  {
    title: "Loading Existing Bot",
    url: "/bots#loading-an-existing-bot",
    type: "heading",
    parentPage: "Bots",
  },
  {
    title: "Creating New Bot",
    url: "/bots#creating-a-new-bot",
    type: "heading",
    parentPage: "Bots",
  },
  {
    title: "Configuring Bot",
    url: "/bots#configuring-a-new-bot-or-editing-an-existing-bot",
    type: "heading",
    parentPage: "Bots",
  },
  {
    title: "Models Button",
    url: "/bots#models-button",
    type: "heading",
    parentPage: "Bots",
  },
  {
    title: "Files Button",
    url: "/bots#files-button",
    type: "heading",
    parentPage: "Bots",
  },
  {
    title: "RAG Button",
    url: "/bots#rag-button",
    type: "heading",
    parentPage: "Bots",
  },
  {
    title: "Options Button",
    url: "/bots#options-button",
    type: "heading",
    parentPage: "Bots",
  },
  {
    title: "Export Button",
    url: "/bots#export-button",
    type: "heading",
    parentPage: "Bots",
  },
  {
    title: "Delete Button",
    url: "/bots#delete",
    type: "heading",
    parentPage: "Bots",
  },

  // Testing Models headings
  {
    title: "Launching Test Interface",
    url: "/testing-models#lauching-test-interface",
    type: "heading",
    parentPage: "Testing Models",
  },
  {
    title: "Configuring Test Options",
    url: "/testing-models#configuring-test-options",
    type: "heading",
    parentPage: "Testing Models",
  },
  {
    title: "Sandbox Testing",
    url: "/testing-models#sandbox-testing",
    type: "heading",
    parentPage: "Testing Models",
  },
  {
    title: "Standard Testing",
    url: "/testing-models#standard-testing",
    type: "heading",
    parentPage: "Testing Models",
  },
  {
    title: "Custom Testing",
    url: "/testing-models#custom-testing",
    type: "heading",
    parentPage: "Testing Models",
  },
  {
    title: "Mapper",
    url: "/testing-models#mapper",
    type: "heading",
    parentPage: "Testing Models",
  },
  {
    title: "Generate Sample",
    url: "/testing-models#generate-sample",
    type: "heading",
    parentPage: "Testing Models",
  },

  // Tools headings
  {
    title: "Launching Tools Interface",
    url: "/tools#launching-the-tools-interface",
    type: "heading",
    parentPage: "Tools",
  },
  {
    title: "Overview Tools Interface",
    url: "/tools#overview-of-the-tools-interface",
    type: "heading",
    parentPage: "Tools",
  },
  {
    title: "Backend",
    url: "/tools#backend",
    type: "heading",
    parentPage: "Tools",
  },
  {
    title: "Command Line Interface (CLI)",
    url: "/tools#cli",
    type: "heading",
    parentPage: "Tools",
  },
  { title: "Share", url: "/tools#share", type: "heading", parentPage: "Tools" },
  {
    title: "Text Parser",
    url: "/tools#text-parser",
    type: "heading",
    parentPage: "Tools",
  },
  {
    title: "Sample Docs",
    url: "/tools#sample-docs",
    type: "heading",
    parentPage: "Tools",
  },
  {
    title: "System Info",
    url: "/tools#system-info",
    type: "heading",
    parentPage: "Tools",
  },

  // Configs headings
  {
    title: "Launching Configure Interface",
    url: "/configs#launching-the-configure-interface",
    type: "heading",
    parentPage: "Configs",
  },
  {
    title: "Configure Interface Overview",
    url: "/configs#overview-of-the-configure-interface",
    type: "heading",
    parentPage: "Configs",
  },
  {
    title: "App Button",
    url: "/configs#app-button",
    type: "heading",
    parentPage: "Configs",
  },
  {
    title: "UI Button",
    url: "/configs#ui-button",
    type: "heading",
    parentPage: "Configs",
  },
  {
    title: "Models Button",
    url: "/configs#models-button",
    type: "heading",
    parentPage: "Configs",
  },
  {
    title: "RAG Button",
    url: "/configs#rag-button",
    type: "heading",
    parentPage: "Configs",
  },
  {
    title: "DB Button",
    url: "/configs#db-button",
    type: "heading",
    parentPage: "Configs",
  },
  {
    title: "Controls Button",
    url: "/configs#controls-button",
    type: "heading",
    parentPage: "Configs",
  },
  {
    title: "Templates Button",
    url: "/configs#templates-button",
    type: "heading",
    parentPage: "Configs",
  },
  {
    title: "Credentials",
    url: "/configs#credentials",
    type: "heading",
    parentPage: "Configs",
  },
  {
    title: "Reset Button",
    url: "/configs#reset-button",
    type: "heading",
    parentPage: "Configs",
  },

  // AMD page headings
  {
    title: "AMD Supported Models",
    url: "/supported-models/amd#amd-supported-models",
    type: "heading",
    parentPage: "AMD Supported Models",
  },

  // Apple page headings
  {
    title: "Apple Optimization Features",
    url: "/supported-models/apple#apple-optimization-features",
    type: "heading",
    parentPage: "Apple Supported Models",
  },
  {
    title: "Apple Supported Models",
    url: "/supported-models/apple#apple-supported-models",
    type: "heading",
    parentPage: "Apple Supported Models",
  },

  // Intel page headings
  {
    title: "Intel Optimization Features",
    url: "/supported-models/intel#intel-optimization-features",
    type: "heading",
    parentPage: "Intel Supported Models",
  },
  {
    title: "Intel Supported Models",
    url: "/supported-models/intel#intel-supported-models",
    type: "heading",
    parentPage: "Intel Supported Models",
  },

  // NVIDIA page headings
  {
    title: "NVIDIA Supported Models",
    url: "/supported-models/nvidia#nvidia-supported-models",
    type: "heading",
    parentPage: "NVIDIA Supported Models",
  },

  // Qualcomm page headings
  {
    title: "Qualcomm Optimization Features",
    url: "/supported-models/qualcomm#qualcomm-optimization-features",
    type: "heading",
    parentPage: "Qualcomm Supported Models",
  },
  {
    title: "Qualcomm Supported Models",
    url: "/supported-models/qualcomm#qualcomm-supported-models",
    type: "heading",
    parentPage: "Qualcomm Supported Models",
  },

  // Agent pages
  {
    title: "Agents",
    url: "/agent",
    type: "page",
    description:
      "Create and manage intelligent agents for automated document processing",
  },
  {
    title: "Create New Agent",
    url: "/agent/create-new-agent",
    type: "page",
    description: "Create a new agent from scratch",
  },
  {
    title: "Agent Builder Menu",
    url: "/agent/agent-builder-menu",
    type: "page",
    description: "Construct the core logic of your agent",
  },
  {
    title: "Edit Agent",
    url: "/agent/edit-agent",
    type: "page",
    description: "Edit or Modify the existing agent",
  },
  {
    title: "Batch Run",
    url: "/agent/batch-run",
    type: "page",
    description: "Process multiple documents simultaneously with Batch Run",
  },
  {
    title: "OpenAI and Anthropic Models",
    url: "/agent/openAI-and-anthropic",
    type: "page",
    description:
      "Add external llm providers like OpenAI and Anthropic to your agents",
  },

  // Agent page headings
  {
    title: "Launching the Agent Interface",
    url: "/agent#1-launching-the-agent-interface",
    type: "heading",
    parentPage: "Agents",
  },
  {
    title: "Understanding the Agent Menu",
    url: "/agent#2-understanding-the-agent-menu",
    type: "heading",
    parentPage: "Agents",
  },
  {
    title: "Confirming the Agent",
    url: "/agent#3-confirming-the-agent",
    type: "heading",
    parentPage: "Agents",
  },
  {
    title: "Uploading an Input File",
    url: "/agent#4-uploading-an-input-file",
    type: "heading",
    parentPage: "Agents",
  },
  {
    title: "Receiving the Output",
    url: "/agent#5-receiving-the-output",
    type: "heading",
    parentPage: "Agents",
  },
  {
    title: "Inference History",
    url: "/agent#6-inference-history",
    type: "heading",
    parentPage: "Agents",
  },
  {
    title: "Files Created",
    url: "/agent#7-files-created",
    type: "heading",
    parentPage: "Agents",
  },
  {
    title: "Exiting Agents",
    url: "/agent#8-exiting-agents",
    type: "heading",
    parentPage: "Agents",
  },

  // Multi-Doc Agent page headings
  {
    title: "Batch Run Overview",
    url: "/agent/multi-docs-agent#batch-run-overview",
    type: "heading",
    parentPage: "Multi-Doc Agent",
  },
  {
    title: "Uploading Documents for Batch Processing",
    url: "/agent/multi-docs-agent#uploading-documents-for-batch-processing",
    type: "heading",
    parentPage: "Multi-Doc Agent",
  },
  {
    title: "Batch Run Results",
    url: "/agent/multi-docs-agent#batch-run-results",
    type: "heading",
    parentPage: "Multi-Doc Agent",
  },

  // Creating New Agent headings
  {
    title: "Configure Agent",
    url: "/agent/create-new-agent#configure-agent",
    type: "heading",
    parentPage: "Creating New Agent",
  },
  {
    title: "Inputs",
    url: "/agent/create-new-agent#input",
    type: "heading",
    parentPage: "Creating New Agent",
  },
  {
    title: "Agent Setup",
    url: "/agent/create-new-agent#agent-setup",
    type: "heading",
    parentPage: "Creating New Agent",
  },
  {
    title: "Agent Builder",
    url: "/agent/create-new-agent#agent-builder",
    type: "heading",
    parentPage: "Creating New Agent",
  },
  {
    title: "Building the Process",
    url: "/agent/create-new-agent#building-the-process",
    type: "heading",
    parentPage: "Creating New Agent",
  },
  {
    title: "Service Table",
    url: "/agent/create-new-agent#service-table",
    type: "heading",
    parentPage: "Creating New Agent",
  },
  {
    title: "Creating an Agent",
    url: "/agent/create-new-agent#how-to-create-an-agent-from-agent-builder",
    type: "heading",
    parentPage: "Creating New Agent",
  },
  {
    title: "Creating a Demo_Agent",
    url: "/agent/create-new-agent#creating-a-demo_agent",
    type: "heading",
    parentPage: "Creating New Agent",
  },
  {
    title: "Details",
    url: "/agent/create-new-agent#details",
    type: "heading",
    parentPage: "Creating New Agent",
  },
  {
    title: "Documentation",
    url: "/agent/create-new-agent#documentation",
    type: "heading",
    parentPage: "Creating New Agent",
  },
  {
    title: "Agent Legend",
    url: "/agent/create-new-agent#agent-legend",
    type: "heading",
    parentPage: "Creating New Agent",
  },
  {
    title: "Building a Demo_Agent",
    url: "/agent/create-new-agent#building-a-demo_agent",
    type: "heading",
    parentPage: "Creating New Agent",
  },

  // Agent Builder Options headings
  {
    title: "Building the Process",
    url: "/agent/agent-builder-menu#building-the-process",
    type: "heading",
    parentPage: "Agent Builder Options",
  },
  {
    title: "Inputs",
    url: "/agent/agent-builder-menu#inputs",
    type: "heading",
    parentPage: "Agent Builder Options",
  },
  {
    title: "Files",
    url: "/agent/agent-builder-menu#files",
    type: "heading",
    parentPage: "Agent Builder Options",
  },
  {
    title: "Load",
    url: "/agent/agent-builder-menu#load",
    type: "heading",
    parentPage: "Agent Builder Options",
  },
  {
    title: "Run",
    url: "/agent/agent-builder-menu#run",
    type: "heading",
    parentPage: "Agent Builder Options",
  },
  {
    title: "Reset",
    url: "/agent/agent-builder-menu#reset",
    type: "heading",
    parentPage: "Agent Builder Options",
  },

  // Editing Agents headings
  {
    title: "Open the Edit Interface",
    url: "/agent/edit-agent#open-the-edit-interface",
    type: "heading",
    parentPage: "Editing Agents",
  },
  {
    title: "Edit Interface",
    url: "/agent/edit-agent#edit-interface",
    type: "heading",
    parentPage: "Editing Agents",
  },
  {
    title: "How to Edit an Agent",
    url: "/agent/edit-agent#edit-agent",
    type: "heading",
    parentPage: "Editing Agents",
  },
  {
    title: "Editing a Copy of an Existing Process",
    url: "/agent/edit-agent#copy-process",
    type: "heading",
    parentPage: "Editing Agents",
  },
  {
    title: "Process",
    url: "/agent/edit-agent#process",
    type: "heading",
    parentPage: "Editing Agents",
  },
  {
    title: "Run",
    url: "/agent/edit-agent#run",
    type: "heading",
    parentPage: "Editing Agents",
  },
  {
    title: "Export",
    url: "/agent/edit-agent#export",
    type: "heading",
    parentPage: "Editing Agents",
  },
  {
    title: "Build",
    url: "/agent/edit-agent#build",
    type: "heading",
    parentPage: "Editing Agents",
  },
  {
    title: "Meta",
    url: "/agent/edit-agent#meta",
    type: "heading",
    parentPage: "Editing Agents",
  },
  {
    title: "Options",
    url: "/agent/edit-agent#options",
    type: "heading",
    parentPage: "Editing Agents",
  },
  {
    title: "JSON Editor",
    url: "/agent/edit-agent#json-editor",
    type: "heading",
    parentPage: "Editing Agents",
  },
  {
    title: "Files",
    url: "/agent/edit-agent#files",
    type: "heading",
    parentPage: "Editing Agents",
  },
  {
    title: "Reports",
    url: "/agent/edit-agent#reports",
    type: "heading",
    parentPage: "Editing Agents",
  },
  {
    title: "Outputs",
    url: "/agent/edit-agent#outputs",
    type: "heading",
    parentPage: "Editing Agents",
  },
  {
    title: "Global",
    url: "/agent/edit-agent#global",
    type: "heading",
    parentPage: "Editing Agents",
  },
  {
    title: "Controls",
    url: "/agent/edit-agent#controls",
    type: "heading",
    parentPage: "Editing Agents",
  },
  {
    title: "Upload",
    url: "/agent/edit-agent#upload",
    type: "heading",
    parentPage: "Editing Agents",
  },
  // OpenAI and Anthropic page headings
  {
    title: "Using OpenAI or Anthropic Models",
    url: "/agent/openAI-and-anthropic#default-setup",
    type: "heading",
    parentPage: "OpenAi and Anthropic",
  },
  {
    title: "Switching to OpenAI",
    url: "/agent/openAI-and-anthropic#switching-to-openAI",
    type: "heading",
    parentPage: "OpenAi and Anthropic",
  },

  // Share Your App
  {
    title: "Sharing Agents and Chatbots with Others",
    url: "/share-your-app#sharing-agents-and-chatbots-with-others",
    type: "heading",
    parentPage: "Share your App",
  },
  {
    title: "Sharing Agent Processes",
    url: "/share-your-app#sharing-agent-processes",
    type: "heading",
    parentPage: "Share your App",
  },
  {
    title: "To upload and use a shared Agent process",
    url: "/share-your-app#upload-and-use-a-shared-agent-process",
    type: "heading",
    parentPage: "Share your App",
  },
  {
    title: "Sharing Chatbots",
    url: "/share-your-app#sharing-chatbots",
    type: "heading",
    parentPage: "Share your App",
  },
  {
    title: "To upload and use a shared custom Bot",
    url: "/share-your-app#upload-and-use-a-shared-custom-bot",
    type: "heading",
    parentPage: "Share your App",
  },

  // Getting Started With Model HQ SDK
  {
    title: "Launching the Backend Server",
    url: "/getting-started-with-model-hq-sdk#launching-the-backend-server",
    type: "heading",
    parentPage: "Getting Started With Model HQ SDK",
  },
  {
    title: "Launch Backend Inference Server Guide",
    url: "/getting-started-with-model-hq-sdk#launch-backend-inference-server-guide",
    type: "heading",
    parentPage: "Getting Started With Model HQ SDK",
  },
  {
    title: "Stopping the Server",
    url: "/getting-started-with-model-hq-sdk#stopping-the-server",
    type: "heading",
    parentPage: "Getting Started With Model HQ SDK",
  },
  {
    title: "Sample Code: Hello World",
    url: "/getting-started-with-model-hq-sdk#sample-code-hello-world",
    type: "heading",
    parentPage: "Getting Started With Model HQ SDK",
  },
  {
    title: "Configure or Configure Backend API Server for 'Headless' Mode",
    url: "/getting-started-with-model-hq-sdk#configure-backend-api-server",
    type: "heading",
    parentPage: "Getting Started With Model HQ SDK",
  },
  {
    title: "Downloading the Model HQ SDK",
    url: "/getting-started-with-model-hq-sdk#downloading-the-model-hq-sdk",
    type: "heading",
    parentPage: "Getting Started With Model HQ SDK",
  },
  {
    title: "Closing Backend Server",
    url: "/getting-started-with-model-hq-sdk#closing-backend-server",
    type: "heading",
    parentPage: "Getting Started With Model HQ SDK",
  },

  // Cookbooks
  {
    title: "Personalized Bot",
    url: "/cookbooks/personalized-bot",
    type: "cookbook",
    parentPage: "Cookbooks",
  },
  {
    title: "RAG Bot",
    url: "/cookbooks/rag-bot",
    type: "cookbook",
    parentPage: "Cookbooks",
  },
  {
    title:
      "Build a No-Code Document Review and Analysis Custom Agent Workflow in Model HQ",
    url: "/cookbooks/document-review-and-analysis-tool",
    type: "cookbook",
    parentPage: "Cookbooks",
  },
  {
    title: "Hybrid Inferencing using Model HQ (AI PC + API Server)",
    url: "/cookbooks/hybrid-inferencing",
    type: "cookbook",
    parentPage: "Cookbooks",
  },
  {
    title: "From Data Plate to Inbox (Photo to Email Automation)",
    url: "/cookbooks/photo-to-email-automation",
    type: "cookbook",
    parentPage: "Cookbooks",
  },
  {
    title: "From Chart to Match (Clinical Trial Screening Automation)",
    url: "/cookbooks/clinical-trial-screening-autmation",
    type: "cookbook",
    parentPage: "Cookbooks",
  },
];
