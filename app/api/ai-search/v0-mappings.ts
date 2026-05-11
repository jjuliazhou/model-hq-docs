// V0 Documentation URL Mappings and Configuration

export const V0_BASE_URL = 'https://model-hq-docs.vercel.app';
export const V0_BASE_IMAGE_URL = 'https://model-hq-docs.vercel.app/v0';

// Exact path mappings for V0 documentation
export const V0_EXACT_MAPPINGS: Record<string, string> = {
  // Code Documentation - Now in v0
  'model-hq-code-documentation/api-reference/API.md': '/v0/api-reference',
  'model-hq-code-documentation/getting-started-with-SDK/GETTING_STARTED.md': '/v0/getting-started-with-model-hq-sdk',
  'model-hq-code-documentation/hello-world/HELLO_WORD.md': '/v0/hello-world',
  
  // System & Setup (in start-here folder)
  'systemConfiguration/': '/start-here/system-configuration',
  'gettingStarted/': '/start-here/getting-started',
  'gettingStarted/README.md': '/start-here/getting-started',
  
  // Supported Models (shared - not in v0 folder)
  'supported-models/AMD_MODELS.md': '/supported-models/amd',
  'supported-models/APPLE_MODELS.md': '/supported-models/apple',
  'supported-models/INTEL_MODELS.md': '/supported-models/intel',
  'supported-models/NVIDIA_MODELS.md': '/supported-models/nvidia',
  'supported-models/QUALCOMM_MODELS.md': '/supported-models/qualcomm',
  'models/amd/': '/supported-models/amd',
  'models/apple/': '/supported-models/apple',
  'models/intel/': '/supported-models/intel',
  'models/nvidia/': '/supported-models/nvidia',
  'models/qualcomm/': '/supported-models/qualcomm',
  
  // Learning Resources (in resources folder)
  'video-tutorials/': '/resources/video-tutorials',
  'blogs-and-partner-solutions/': '/resources/blogs-and-partner-solutions',
  
  // Chat - Now in v0
  'chat/': '/v0/chat',
  'chat/README.md': '/v0/chat',
  'chat/changing-chat-model': '/v0/chat/changing-chat-model',
  'chat/error-handling': '/v0/chat/error-handling',
  
  // Agents - Now in v0
  'agent/': '/v0/agent',
  'agent/README.md': '/v0/agent',
  'agent/SERVICE.md': '/v0/agent/create-new-agent#service-table',
  'agent/create-new-agent': '/v0/agent/create-new-agent',
  'agent/agent-builder-menu': '/v0/agent/agent-builder-menu',
  'agent/edit-agent': '/v0/agent/edit-agent',
  'agent/multi-docs-agent': '/v0/agent/multi-docs-agent',
  'agent/openAI-and-anthropic': '/v0/agent/openAI-and-anthropic',
  
  // Bots - Now in v0
  'bots/': '/v0/bots',
  
  // RAG - Now in v0
  'rag/': '/v0/rag',
  'rag/PARSING.md': '/v0/rag/rag-parsing',
  'rag/rag-parsing': '/v0/rag/rag-parsing',
  'rag/document-parsing-issues': '/v0/rag/document-parsing-issues',
  'rag/error-handling': '/v0/rag/error-handling',
  
  // Models & Testing - Now in v0
  'models/': '/v0/models',
  'test/': '/v0/testing-models',
  
  // Configs & Tools - Now in v0
  'tools/': '/v0/tools',
  'configure/': '/v0/configs',
  
  // Share & Shutdown - Now in v0
  'share/': '/v0/share-your-app',
  'shutdown/': '/v0/shutdown',
  
  // Cookbooks V0
  'cookbooks/v0/personalized-bot': '/cookbooks/personalized-bot',
  'cookbooks/v0/rag-bot': '/cookbooks/rag-bot',
  'cookbooks/v0/document-review-and-analysis-tool': '/cookbooks/document-review-and-analysis-tool',
  'cookbooks/v0/hybrid-inferencing': '/cookbooks/hybrid-inferencing',
  'cookbooks/v0/photo-to-email-automation': '/cookbooks/photo-to-email-automation',
  'cookbooks/v0/clinical-trial-screening-autmation': '/cookbooks/clinical-trial-screening-autmation',
  
  // Legacy cookbook paths (for backward compatibility)
  'cookbooks/personalized-bot': '/cookbooks/personalized-bot',
  'cookbooks/rag-bot': '/cookbooks/rag-bot',
  'cookbooks/document-review-and-analysis-tool': '/cookbooks/document-review-and-analysis-tool',
  'cookbooks/hybrid-inferencing': '/cookbooks/hybrid-inferencing',
  'cookbooks/photo-to-email-automation': '/cookbooks/photo-to-email-automation',
  'cookbooks/clinical-trial-screening-autmation': '/cookbooks/clinical-trial-screening-autmation',
  
  // About / Home
  'about/': '/',
};

// Folder mappings for V0 documentation
export const V0_FOLDER_MAPPINGS: Record<string, string> = {
  'gettingStarted': '/start-here/getting-started',
  'agent': '/v0/agent',
  'bots': '/v0/bots',
  'chat': '/v0/chat',
  'configure': '/v0/configs',
  'models': '/v0/models',
  'rag': '/v0/rag',
  'share': '/v0/share-your-app',
  'shutdown': '/v0/shutdown',
  'systemConfiguration': '/start-here/system-configuration',
  'test': '/v0/testing-models',
  'tools': '/v0/tools',
  'cookbooks': '/cookbooks',
  'video-tutorials': '/resources/video-tutorials',
  'blogs-and-partner-solutions': '/resources/blogs-and-partner-solutions',
  'about': '/',
};

// Available documentation pages for V0
export const V0_AVAILABLE_PAGES = `
About & Overview:
- About Model HQ (What is Model HQ, Features, Overview): ${V0_BASE_URL}/
- Getting Started: ${V0_BASE_URL}/start-here/getting-started

Code & API Documentation (V0):
- API Reference (Complete API documentation with all endpoints): ${V0_BASE_URL}/v0/api-reference
- Getting Started with SDK (Backend setup, configuration, code examples): ${V0_BASE_URL}/v0/getting-started-with-model-hq-sdk
- Hello World (Basic inference and stream examples): ${V0_BASE_URL}/v0/hello-world

System & Setup:
- System Configuration: ${V0_BASE_URL}/start-here/system-configuration

Supported Models:
- AMD Supported Models: ${V0_BASE_URL}/supported-models/amd
- Apple Supported Models: ${V0_BASE_URL}/supported-models/apple
- Intel Supported Models: ${V0_BASE_URL}/supported-models/intel
- NVIDIA Supported Models: ${V0_BASE_URL}/supported-models/nvidia
- Qualcomm Supported Models: ${V0_BASE_URL}/supported-models/qualcomm

Learning Resources:
- Video Tutorials: ${V0_BASE_URL}/resources/video-tutorials
- Blogs & Partner Solutions: ${V0_BASE_URL}/resources/blogs-and-partner-solutions

Chat (V0):
- Chat Overview: ${V0_BASE_URL}/v0/chat
- Changing Chat Models: ${V0_BASE_URL}/v0/chat/changing-chat-model
- Chat Error Handling: ${V0_BASE_URL}/v0/chat/error-handling

Agents (V0):
- Agents Overview (includes list of all available services): ${V0_BASE_URL}/v0/agent
- Available Services List: ${V0_BASE_URL}/v0/agent/create-new-agent#service-table
- Create New Agent: ${V0_BASE_URL}/v0/agent/create-new-agent
- Agent Builder Menu: ${V0_BASE_URL}/v0/agent/agent-builder-menu
- Edit Agents: ${V0_BASE_URL}/v0/agent/edit-agent
- Batch Run (Multi-Docs): ${V0_BASE_URL}/v0/agent/multi-docs-agent
- OpenAI/Anthropic Models: ${V0_BASE_URL}/v0/agent/openAI-and-anthropic

Bots (V0):
- Bots: ${V0_BASE_URL}/v0/bots

RAG (V0):
- RAG Overview: ${V0_BASE_URL}/v0/rag
- RAG Parsing: ${V0_BASE_URL}/v0/rag/rag-parsing
- Document Parsing Issues: ${V0_BASE_URL}/v0/rag/document-parsing-issues
- RAG Error Handling: ${V0_BASE_URL}/v0/rag/error-handling

Models & Testing (V0):
- Models: ${V0_BASE_URL}/v0/models
- Testing Models: ${V0_BASE_URL}/v0/testing-models

Configs & Tools (V0):
- Tools: ${V0_BASE_URL}/v0/tools
- Configs: ${V0_BASE_URL}/v0/configs

Share & Shutdown (V0):
- Share Your App: ${V0_BASE_URL}/v0/share-your-app
- Shutdown: ${V0_BASE_URL}/v0/shutdown

Cookbooks (V0):
- Personalized Bot: ${V0_BASE_URL}/cookbooks/personalized-bot
- RAG Bot: ${V0_BASE_URL}/cookbooks/rag-bot
- Document Review Tool: ${V0_BASE_URL}/cookbooks/document-review-and-analysis-tool
- Hybrid Inferencing: ${V0_BASE_URL}/cookbooks/hybrid-inferencing
- Photo to Email Automation: ${V0_BASE_URL}/cookbooks/photo-to-email-automation
- Clinical Trial Screening: ${V0_BASE_URL}/cookbooks/clinical-trial-screening-autmation
`;

// Image mappings for V0
export const V0_AVAILABLE_IMAGES = `
Main Interface:
- Main Menu: ![Main Menu](${V0_BASE_IMAGE_URL}/main_menu.png)
- Landing Interface or setup options or entry page or getting started: ![Landing Interface](${V0_BASE_IMAGE_URL}/getting-started/landing_interface.png)
- System Config: ![Laptop Config](${V0_BASE_IMAGE_URL}/laptop_config.png)

Agents:
- Agent Builder: ![Agent Builder](${V0_BASE_IMAGE_URL}/agent/agentBuilder.png)
- Agent Interface: ![Agent Interface](${V0_BASE_IMAGE_URL}/agent/agentInterface.png)
- Create New Agent: ![New Agent](${V0_BASE_IMAGE_URL}/agent/agentNew.png)
- Agent Process: ![Agent Process](${V0_BASE_IMAGE_URL}/agent/agentProcess.png)
- Service Examples: ![Service 1](${V0_BASE_IMAGE_URL}/agent/service1.png)

Chat:
- Chat Interface: ![Chat Interface](${V0_BASE_IMAGE_URL}/chat/chatInterface.png)
- Change Models: ![Change Models](${V0_BASE_IMAGE_URL}/chat/changeModels.png)
- Model Config: ![Model Config](${V0_BASE_IMAGE_URL}/chat/modelConfig.png)

Bots:
- Bots Interface: ![Bots](${V0_BASE_IMAGE_URL}/bots.png)

RAG:
- RAG Interface: ![RAG](${V0_BASE_IMAGE_URL}/rag.png)
- PDF Parsing: ![PDF Parsing](${V0_BASE_IMAGE_URL}/chat/pdfParsing.png)
- OCR: ![OCR](${V0_BASE_IMAGE_URL}/chat/ocr.png)

Models:
- Models Interface: ![Models](${V0_BASE_IMAGE_URL}/models.png)

Shutdown:
- Shutdown: ![Shutdown](${V0_BASE_IMAGE_URL}/shutdown.png)

Model HQ SDK Or Code Documentation or Getting Started with SDK:
- ![Tools Location](${V0_BASE_IMAGE_URL}/getting-started-with-sdk/menu.png)
- ![Tools Interface](${V0_BASE_IMAGE_URL}/getting-started-with-sdk/tools.png)
- ![Initiate Backend](${V0_BASE_IMAGE_URL}/getting-started-with-sdk/backend.png)
- ![Launching Backend](${V0_BASE_IMAGE_URL}/getting-started-with-sdk/launch.png)
- ![Backend Configure](${V0_BASE_IMAGE_URL}/getting-started-with-sdk/backend.png)
- ![Download SDK](${V0_BASE_IMAGE_URL}/getting-started-with-sdk/download.png)
- ![Inside Downloaded SDK Files](${V0_BASE_IMAGE_URL}/getting-started-with-sdk/files.png)
- ![Closing Backend](${V0_BASE_IMAGE_URL}/getting-started-with-sdk/close.png)
`;
