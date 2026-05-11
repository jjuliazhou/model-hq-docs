// V1 Documentation URL Mappings and Configuration
// TODO: Update these mappings as V1 documentation is added

export const V1_BASE_URL = 'https://model-hq-docs.vercel.app';
export const V1_BASE_IMAGE_URL = 'https://model-hq-docs.vercel.app/v1';

// Exact path mappings for V1 documentation
export const V1_EXACT_MAPPINGS: Record<string, string> = {
  // Code Documentation - V1 (TODO: Add V1 API documentation paths when available)
  'model-hq-code-documentation/v1/api-reference/API.md': '/v1/api-reference',
  'model-hq-code-documentation/v1/getting-started-with-SDK/GETTING_STARTED.md': '/v1/getting-started-with-model-hq-sdk',
  'model-hq-code-documentation/v1/hello-world/HELLO_WORD.md': '/v1/hello-world',
  
  // System & Setup (in start-here folder)
  'systemConfiguration/': '/start-here/system-configuration',
  'gettingStarted/': '/start-here/getting-started',
  'gettingStarted/README.md': '/start-here/getting-started',
  
  // Supported Models (shared - not in v1 folder)
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
  
  // Chat - V1
  'chat/v1/': '/v1/chat',
  'chat/v1/README.md': '/v1/chat',
  'chat/v1/chat.md': '/v1/chat',
  'chat/v1/chatConfiguration.md': '/v1/chat/chat-configuration',
  'chat/v1/documentParsingIssues.md': '/v1/chat/document-parsing-issues',
  'chat/v1/error.md': '/v1/chat/error-handling',
  'chat/v1/chat-configuration': '/v1/chat/chat-configuration',
  'chat/v1/document-parsing-issues': '/v1/chat/document-parsing-issues',
  'chat/v1/error-handling': '/v1/chat/error-handling',
  
  // Models - V1
  'models/v1/': '/v1/models',
  'models/v1/README.md': '/v1/models',
  'models/v1/models.md': '/v1/models',
  'models/v1/modelConfiguration.md': '/v1/models/model-configuration',
  'models/v1/customTest.md': '/v1/models/custom-test',
  'models/v1/microsoftFoundry.md': '/v1/models/microsoft-foundry',
  'models/v1/microsoft-foundry': '/v1/models/microsoft-foundry',
  'models/v1/model-configuration': '/v1/models/model-configuration',
  'models/v1/custom-test': '/v1/models/custom-test',
  
  // Bots - V1
  'bots/v1/': '/v1/bots',
  'bots/v1/README.md': '/v1/bots',
  'bots/v1/botsOverview.md': '/v1/bots',
  'bots/v1/buildBot.md': '/v1/bots/build-bot',
  'bots/v1/editBot.md': '/v1/bots/edit-bot',
  'bots/v1/build-bot': '/v1/bots/build-bot',
  'bots/v1/edit-bot': '/v1/bots/edit-bot',
  
  // Source (RAG) - V1
  'source/v1/': '/v1/source',
  'source/v1/README.md': '/v1/source',
  'source/v1/source.md': '/v1/source',
  'source/v1/parsing.md': '/v1/source/parsing-in-source',
  'source/v1/error.md': '/v1/source/error-handling',
  'source/v1/parsing-in-source': '/v1/source/parsing-in-source',
  'source/v1/error-handling': '/v1/source/error-handling',
  'rag/v1/': '/v1/source',
  'rag/v1/README.md': '/v1/source',
  
  // Shutdown - V1
  'shutdown/v1/': '/v1/shutdown',
  'shutdown/v1/README.md': '/v1/shutdown',
  'shutdown/v1/shutdown.md': '/v1/shutdown',
  
  // Services - V1
  'services/v1/': '/v1/services',
  'services/v1/README.md': '/v1/services',
  'services/v1/services.md': '/v1/services',
  
  // Integrations - V1
  'integrations/v1/': '/v1/integrations',
  'integrations/v1/README.md': '/v1/integrations',
  'integrations/v1/integrations.md': '/v1/integrations',
  
  // Configure - V1
  'configure/v1/': '/v1/configs-and-tools/configure',
  'configure/v1/README.md': '/v1/configs-and-tools/configure',
  'configure/v1/configure.md': '/v1/configs-and-tools/configure',
  'configs-and-tools/configure': '/v1/configs-and-tools/configure',
  
  // Tools - V1
  'tools/v1/': '/v1/configs-and-tools/tools',
  'tools/v1/README.md': '/v1/configs-and-tools/tools',
  'tools/v1/tools.md': '/v1/configs-and-tools/tools',
  'configs-and-tools/tools': '/v1/configs-and-tools/tools',
  
  // Dataset - V1
  'dataset/v1/': '/v1/dataset',
  'dataset/v1/README.md': '/v1/dataset',
  'dataset/v1/dataset.md': '/v1/dataset',
  'dataset/dataset.md': '/v1/dataset',
  'v1/dataset': '/v1/dataset',
  
  // Agents - V1
  'agents/v1/': '/v1/agents',
  'agents/v1/README.md': '/v1/agents',
  'agents/v1/agents.md': '/v1/agents',
  'agents/v1/create-new-agent': '/v1/agents/create-new-agent',
  'agents/v1/createNewAgent.md': '/v1/agents/create-new-agent',
  'agents/v1/edit-agent': '/v1/agents/edit-agent',
  'agents/v1/editAgent.md': '/v1/agents/edit-agent',
  'agents/v1/agent-visual-builder': '/v1/agents/agent-visual-builder',
  'agents/v1/agentVisualBuilder.md': '/v1/agents/agent-visual-builder',
  'agents/v1/batch-processing': '/v1/agents/batch-processing',
  'agents/v1/batchProcessing.md': '/v1/agents/batch-processing',
  'agents/v1/agent-services': '/v1/agents/agent-services',
  'agents/v1/agentServices.md': '/v1/agents/agent-services',
  'v1/agents': '/v1/agents',
  
  // Cookbooks V1 (TODO: Add V1 cookbooks when available)
  'cookbooks/v1/': '/cookbooks/v1',
  'cookbooks/v1/personalized-bot': '/cookbooks/v1/personalized-bot',
  'cookbooks/v1/rag-bot': '/cookbooks/v1/rag-bot',
  'cookbooks/v1/document-review-and-analysis-tool': '/cookbooks/v1/document-review-and-analysis-tool',
  'cookbooks/v1/hybrid-inferencing': '/cookbooks/v1/hybrid-inferencing',
  'cookbooks/v1/photo-to-email-automation': '/cookbooks/v1/photo-to-email-automation',
  'cookbooks/v1/clinical-trial-screening-autmation': '/cookbooks/v1/clinical-trial-screening-autmation',
  
  // About / Home
  'about/': '/',
};

// Folder mappings for V1 documentation
export const V1_FOLDER_MAPPINGS: Record<string, string> = {
  'gettingStarted': '/start-here/getting-started',
  'systemConfiguration': '/start-here/system-configuration',
  'chat': '/v1/chat',
  'models': '/v1/models',
  'bots': '/v1/bots',
  'source': '/v1/source',
  'rag': '/v1/source',
  'shutdown': '/v1/shutdown',
  'services': '/v1/services',
  'configure': '/v1/configs-and-tools/configure',
  'tools': '/v1/configs-and-tools/tools',
  'configs-and-tools': '/v1/configs-and-tools',
  'dataset': '/v1/dataset',
  'agents': '/v1/agents',
  'cookbooks': '/cookbooks',
  'video-tutorials': '/resources/video-tutorials',
  'blogs-and-partner-solutions': '/resources/blogs-and-partner-solutions',
  'about': '/',
};

// Available documentation pages for V1
export const V1_AVAILABLE_PAGES = `
About & Overview:
- About Model HQ (What is Model HQ, Features, Overview): /start-here/about-model-hq
- Getting Started: /start-here/getting-started

Code & API Documentation (V1):
- API Reference (Complete API documentation with all endpoints): ${V1_BASE_URL}/v1/api-reference
- Getting Started with SDK (Backend setup, configuration, code examples): ${V1_BASE_URL}/v1/getting-started-with-model-hq-sdk
- Hello World (Basic inference and stream examples): ${V1_BASE_URL}/v1/hello-world

System & Setup:
- System Configuration: /start-here/system-configuration

Supported Models:
- AMD Supported Models: /supported-models/amd
- Apple Supported Models: /supported-models/apple
- Intel Supported Models: /supported-models/intel
- NVIDIA Supported Models: /supported-models/nvidia
- Qualcomm Supported Models: /supported-models/qualcomm

Learning Resources:
- Video Tutorials: /resources/video-tutorials
- Blogs & Partner Solutions: /resources/blogs-and-partner-solutions

Chat (V1):
- Chat Overview (Launching interface, model selector, sources, prompts, web search): ${V1_BASE_URL}/v1/chat
- Chat Configuration (Memory, context, temperature, query strategy, PDF parsing): ${V1_BASE_URL}/v1/chat/chat-configuration
- Document Parsing Issues (Handling unparsable documents, OCR activation): ${V1_BASE_URL}/v1/chat/document-parsing-issues
- Chat Error Handling (Model download errors, troubleshooting): ${V1_BASE_URL}/v1/chat/error-handling

Models (V1):
- Models Overview (Download, test, my models, all models, refresh, troubleshoot): ${V1_BASE_URL}/v1/models
- Model Configuration (Visibility, naming, defaults, generation, task-specific, automation): ${V1_BASE_URL}/v1/models/model-configuration
- Custom Test (Creating custom tests, test types, sample generation, mapper): ${V1_BASE_URL}/v1/models/custom-test
- Microsoft Foundry (Installing Foundry Local, integration activation, using in Chat and Agents, downloading and testing models): ${V1_BASE_URL}/v1/models/microsoft-foundry

Bots (V1):
- Bots Overview (Building, loading, demo mode, agents integration): ${V1_BASE_URL}/v1/bots
- Build Bot (Creating custom bots, configuration, demo features, JSON schema): ${V1_BASE_URL}/v1/bots/build-bot
- Edit Bot (Models, files, agents, prompts, RAG, UI, controls, JSON editor): ${V1_BASE_URL}/v1/bots/edit-bot

Source / RAG (V1):
- Source Overview (Creating knowledge bases, standard vs dataset sources): ${V1_BASE_URL}/v1/source
- Parsing in Source (Document parsing options, RAG configuration): ${V1_BASE_URL}/v1/source/parsing-in-source
- Source Error Handling (Troubleshooting source issues): ${V1_BASE_URL}/v1/source/error-handling

Shutdown (V1):
- Shutdown (Proper shutdown procedures, preventing background processes): ${V1_BASE_URL}/v1/shutdown

Services (V1):
- Services Overview (Agent services, REST API services, MCP services): ${V1_BASE_URL}/v1/services
- Agents as Service (Convert agents into reusable service components): ${V1_BASE_URL}/v1/services#31-agents-as-service
- REST API Endpoint as Service (External API integration): ${V1_BASE_URL}/v1/services#32-rest-api-endpoint-as-service
- MCP as Service (Model Context Protocol tool integration): ${V1_BASE_URL}/v1/services#33-mcp-as-service-beta

Configs & Tools (V1):
- Configure (App settings, services, UI, RAG, DB, server, controls): ${V1_BASE_URL}/v1/configs-and-tools/configure
- Tools (Backend server, CLI, SDK, demos, share, updates, system info): ${V1_BASE_URL}/v1/configs-and-tools/tools

Dataset (V1):
- Dataset Overview (Structured CSV, XLSX, JSON data in AI agent workflows, four-step index setup): ${V1_BASE_URL}/v1/dataset
- Creating a Dataset (Build new, field mapping, schema confirmation, configuration): ${V1_BASE_URL}/v1/dataset#2-creating-a-dataset
- Dataset Configuration Setup (RAG columns, ID column, KPI definition, agent input): ${V1_BASE_URL}/v1/dataset#24-dataset-configuration-setup
- Dataset Search (Semantic, keyword, exact-phrase queries on structured data): ${V1_BASE_URL}/v1/dataset#25-search
- Test Set / ML Training (Predictive model training on dataset columns): ${V1_BASE_URL}/v1/dataset#26-test-set-beta-may-not-be-available-in-all-versions
- Analyze Dataset (Statistical overview, mean, std dev, KPI summaries): ${V1_BASE_URL}/v1/dataset#27-analyze

Agents (V1):
- Agents Overview (Launch agents interface, load templates, run demo, batch run, share, upload): ${V1_BASE_URL}/v1/agents
- Create New Agent (Visual Builder mode, Multi-Step Agent builder, Prompting Agent builder): ${V1_BASE_URL}/v1/agents/create-new-agent
- Edit Agent (Step-based editor, details view, legend, action buttons, Visual Builder editing): ${V1_BASE_URL}/v1/agents/edit-agent
- Agent Visual Builder (All node types: Input, Node, Classifier, Bot, Condition, Transformer, Files, Services): ${V1_BASE_URL}/v1/agents/agent-visual-builder
- Batch Processing (Run agents across multiple documents in a single batch operation): ${V1_BASE_URL}/v1/agents/batch-processing
- Agent Services (Full reference: core services, classifiers, datasets, specialized, integrations): ${V1_BASE_URL}/v1/agents/agent-services

Cookbooks (V1):
- Personalized Bot: ${V1_BASE_URL}/cookbooks/v1/personalized-bot
- RAG Bot: ${V1_BASE_URL}/cookbooks/v1/rag-bot
- Document Review Tool: ${V1_BASE_URL}/cookbooks/v1/document-review-and-analysis-tool
- Hybrid Inferencing: ${V1_BASE_URL}/cookbooks/v1/hybrid-inferencing
- Photo to Email Automation: ${V1_BASE_URL}/cookbooks/v1/photo-to-email-automation
- Clinical Trial Screening: ${V1_BASE_URL}/cookbooks/v1/clinical-trial-screening-autmation
`;

// Image mappings for V1
export const V1_AVAILABLE_IMAGES = `
Main Interface & Setup:
- Main Menu Dashboard: ![Main Menu Dashboard](${V1_BASE_IMAGE_URL}/main_menu.png)
- Landing Interface (Initial Setup Screen): ![Landing Interface](${V1_BASE_IMAGE_URL}/getting-started/landing_interface.png)
- System Configuration (Laptop Settings): ![System Configuration](${V1_BASE_IMAGE_URL}/laptop_config.png)

Chat Interface (V1):
- Main Menu - Chat Button Location: ![Main Menu Chat Button](/v1/chat/01_mainMenu.png)
- Model Download Progress Indicator: ![Downloading Model](/v1/chat/02_downloadingModel.png)
- Complete Chat Interface Layout: ![Chat Interface Overview](/v1/chat/03_chatInterface.png)
- Interactive Chat Demo (Animated): ![Chat Demo Animation](/v1/chat/04_AniDemo.gif)
- Model Selection Dropdown Menu: ![Model Selector Dropdown](/v1/chat/05_modelsExpanded.png)
- Source/RAG Document Upload Interface: ![Apply Source Documents](/v1/chat/06_applySource.png)
- Source RAG Query Demo: ![Source Query Example](/v1/chat/07_sourceDemo.png)
- Prompt Configuration Panel: ![Configure System Prompts](/v1/chat/08_promptConfig.png)
- Prompt Usage Demonstration: ![Prompt in Action](/v1/chat/09_promptDemo.png)
- Web Search Integration Options: ![Web Search Configuration](/v1/chat/10_webSearch.png)
- Chat Session Information Panel: ![Chat Info Display](/v1/chat/11_info.png)
- Export/Download Chat Transcript: ![Download Chat History](/v1/chat/12_download.png)

Models Management (V1):
- Main Menu - Models Card: ![Models Section Card](/v1/models/01_models.png)
- Models Interface Dashboard: ![Models Management Interface](/v1/models/02_modelsInterface.png)
- Expanded Model Details Card: ![Model Card Information](/v1/models/03_modelCard.png)
- Model Download Interface: ![Download Model Process](/v1/models/04_downloadModel.png)
- Model Testing Interface: ![Test Model Functionality](/v1/models/04_test.png)
- My Downloaded Models View: ![My Models Library](/v1/models/05_myModels.png)
- Complete Model Catalog View: ![All Available Models](/v1/models/06_allModels.png)
- Troubleshooting Tools Interface: ![Model Troubleshoot Panel](/v1/models/08_troubleshoot.png)
- Models Storage Information: ![Models Info & Storage](/v1/models/09_info.png)

Microsoft Foundry (V1):
- Install Foundry Local: ![Install Foundry Local](/v1/models/microsoftFoundry/Picture1.png)
- Main Menu Integrations: ![Main Menu Integrations](/v1/models/microsoftFoundry/Picture2.png)
- Integrations Menu: ![Integrations Menu](/v1/models/microsoftFoundry/Picture3.png)
- Select Windows Foundry Local: ![Select Windows Foundry Local](/v1/models/microsoftFoundry/Picture4.png)
- Foundry Local Selected: ![Foundry Local Integration Selected](/v1/models/microsoftFoundry/Picture5.png)
- Test Connection: ![Test Foundry Connection](/v1/models/microsoftFoundry/Picture6.png)
- Chat Model Selector with Foundry Local: ![Chat Model Selector](/v1/models/microsoftFoundry/Picture7.png)
- Chat Interface with Foundry Local Active: ![Chat Interface Foundry Local](/v1/models/microsoftFoundry/Picture8.png)
- Agent Builder Method Selection: ![Agent Builder Method](/v1/models/microsoftFoundry/Picture9.png)
- Visual Builder Selected: ![Visual Builder Selected](/v1/models/microsoftFoundry/Picture10.png)
- Name Agent Process: ![Name Agent Process](/v1/models/microsoftFoundry/Picture11.png)
- Visual Builder Canvas: ![Visual Builder Canvas](/v1/models/microsoftFoundry/Picture12.png)
- Visual Builder Left Panel: ![Visual Builder Left Panel](/v1/models/microsoftFoundry/Picture13.png)
- Agent Settings Model Selection: ![Agent Settings Foundry Local](/v1/models/microsoftFoundry/Picture14.png)
- Agent Settings Model Chosen: ![Agent Model Chosen](/v1/models/microsoftFoundry/Picture15.png)
- Agent Settings Model Confirmed: ![Agent Model Confirmed](/v1/models/microsoftFoundry/Picture16.png)
- Test Agent Nodes Connected: ![Test Agent Nodes](/v1/models/microsoftFoundry/Picture17.png)
- Agent Run Text Input: ![Agent Run Input](/v1/models/microsoftFoundry/Picture18.png)
- Agent Output Inference Result: ![Agent Output](/v1/models/microsoftFoundry/Picture19.png)
- Agent Run Completed: ![Agent Run Completed](/v1/models/microsoftFoundry/Picture20.png)

Bots Creation & Management (V1):
- Main Menu - Bots Section: ![Bots Main Menu Button](/v1/bots/01_bots.png)
- Bots Management Interface: ![Bots Dashboard Interface](/v1/bots/02_botsInterface.png)
- Bot Details Information Panel: ![Bot Configuration Info](/v1/bots/03_botInfo.png)
- Demo Bot Execution Example: ![Demo Bot in Action](/v1/bots/04_demoBotdemo.png)
- Edit Bot Configuration Options: ![Edit Bot Settings](/v1/bots/05_demoBotEdit.png)
- Bot Feature Selection Menu: ![Bot Options Menu](/v1/bots/06_demoBotOptions.png)
- Bot Agent Integration Panel: ![Bot Agent Configuration](/v1/bots/07_demoBotAgent.png)
- Run Bot Execution Interface: ![Execute Bot Process](/v1/bots/08_demoBotRun.png)
- Bot Editor Interface: ![Bot Editor Dashboard](/v1/bots/09_editBot.png)
- Share Bot Export Options: ![Share Bot Configuration](/v1/bots/10_share.png)
- Upload Bot Import Interface: ![Upload/Import Bot](/v1/bots/11_uploadBot.png)

Source / RAG Knowledge Base (V1):
- Main Menu - Source/RAG Section: ![Source Main Menu Button](/v1/source/01_source.png)
- Source Builder Interface: ![Source Management Interface](/v1/source/02_sourceInterface.png)
- Standard Source Configuration: ![Create Standard Source](/v1/source/03_standardSource.png)
- Source Actions & Options Menu: ![Source Options Panel](/v1/source/04_standardSourceOptions.png)
- Document Upload Interface: ![Upload Documents to Source](/v1/source/05_standardSourceUploadDocs.png)
- Parsing Configuration Settings: ![Configure Document Parsing](/v1/source/06_standardSourceConfigure.png)
- Source Search Query Interface: ![Search Source Documents](/v1/source/07_standardSourceSearch.png)
- Source Testing & Validation: ![Test Source Responses](/v1/source/08_standardSourceTest.png)
- Sample Document Examples: ![Sample Source Documents](/v1/source/09_sampleDoc.png)
- Financial Table Query Example: ![Query Financial Data](/v1/source/10_finanQuery.png)
- Financial Query Results: ![Financial Query Results](/v1/source/11_finanResult.png)
- Employment Agreement Query: ![Query Employment Document](/v1/source/12_employQuery.png)
- Employment Query Results: ![Employment Query Results](/v1/source/13_employResult.png)
- Dataset Source Configuration: ![Create Dataset Source](/v1/source/14_datasetSource.png)

Shutdown & System Control (V1):
- Shutdown Power Button Location: ![Shutdown Button Interface](/v1/shutdown/01_shutdown.png)
- Auto-Restart Configuration: ![Unintended Shutdown Settings](/v1/shutdown/02_unintended.png)

Services Integration (V1):
- Services Interface: ![Services Dashboard](/v1/services/servicesInterface.png)
- Agent Services Configuration: ![Agent Services Panel](/v1/services/agentServices.png)
- REST API Services Setup: ![REST API Services](/v1/services/restServices.png)
- MCP Services Integration: ![MCP Services](/v1/services/mcpServices.png)

Configure Settings (V1):
- Configure Main Interface: ![Configure Dashboard](/v1/configs/configureInterface.png)
- Configuration Menu: ![Configuration Menu](/v1/configs/configure.png)
- App Configuration Settings: ![App Settings](/v1/configs/app.png)
- Services Configuration Panel: ![Services Config](/v1/configs/services.png)
- UI Customization Settings: ![UI Settings](/v1/configs/ui.png)
- RAG Configuration: ![RAG Settings](/v1/configs/rag.png)
- Database Configuration: ![DB Settings](/v1/configs/db.png)
- Server Configuration: ![Server Settings](/v1/configs/server.png)
- Controls & Permissions: ![Controls Panel](/v1/configs/controls.png)
- Templates Management: ![Templates Editor](/v1/configs/templates.png)
- Templates Navigation: ![Templates Next](/v1/configs/templatesNext.png)
- Connections Management: ![Connections Panel](/v1/configs/connections.png)
- Reset Configuration: ![Reset Settings](/v1/configs/reset.png)
- Theme Toggle: ![Theme Toggler](/v1/configs/themeToggler.png)

Tools & Utilities (V1):
- Tools Main Interface: ![Tools Dashboard](/v1/tools/toolsInterface.png)
- Tools Menu: ![Tools Menu](/v1/tools/tools.png)
- Backend Server Panel: ![Backend Server](/v1/tools/backend.png)
- CLI Interface: ![Command Line Interface](/v1/tools/cli.png)
- SDK Integration: ![SDK Tools](/v1/tools/sdk.png)
- Demo Applications: ![Demos Panel](/v1/tools/demos.png)
- Share Connection: ![Share Settings](/v1/tools/share.png)
- Share Confirmation: ![Share Confirm](/v1/tools/shareConform.png)
- Updates Management: ![Updates Panel](/v1/tools/updates.png)
- Model Downloader: ![Model Download Tool](/v1/tools/modelDownloader.png)
- Sample Documents: ![Sample Docs](/v1/tools/sampleDocs.png)
- Text Parser: ![Text Parser Tool](/v1/tools/textParser.png)
- System Information: ![System Info](/v1/tools/systemInfo.png)

Dataset (V1):
- Dataset Setup Animation: ![Dataset Setup Overview](/v1/dataset/dataset.gif)
- Dataset Menu Button: ![Dataset Interface](/v1/dataset/01_dataset.png)
- Dataset Source Selection: ![Dataset Source](/v1/dataset/01_datasetSource.png)
- Dataset Create Interface: ![Create Dataset](/v1/dataset/02_datasetCreate.png)
- Dataset Build / File Upload: ![Build Dataset](/v1/dataset/02_datasetBuild.png)
- Dataset Schema Mapping: ![Dataset Source Mapping](/v1/dataset/04_datasetSourceMapping.png)
- Confirm Dataset Schema: ![Confirm Dataset Schema](/v1/dataset/05_datasetSourceConfirm.png)
- Dataset Configuration Step 1 (RAG Columns): ![Dataset Config RAG](/v1/dataset/06_datasetConfig.png)
- Dataset Configuration RAG Column Selection: ![Dataset Config RAG 2](/v1/dataset/06_datasetConfig2.png)
- Dataset ID Column Selection: ![Dataset ID Column](/v1/dataset/06_datasetId.png)
- Dataset KPI Definition: ![Dataset KPI](/v1/dataset/06_datasetKPI.png)
- Dataset Configuration Confirmation: ![Confirm Dataset Config](/v1/dataset/06_datasetSourceConfirmConfig.png)
- Dataset Final Configuration: ![Dataset Config Complete](/v1/dataset/10_datasetConfig.png)
- Dataset ML Training Interface: ![Dataset Train](/v1/dataset/08_datasetSourceTrain.png)
- Dataset Analysis Overview: ![Dataset Analysis](/v1/dataset/09_datasetAnalysis.png)

Agents (V1):
- Agents Main Menu Button: ![Agents Main Menu](/v1/agents/01_agents.png)
- Agents Interface Dashboard: ![Agents Interface](/v1/agents/02_agentsInterface.png)
- Agent Templates List: ![Agent Templates](/v1/agents/03_agentTemplates.png)
- Agent Confirm Screen: ![Confirm Agent](/v1/agents/04_confirmAgent.png)
- Agent Run Interface: ![Run Agent](/v1/agents/05_runAgent.png)
- Agent Run Demo: ![Agent Demo](/v1/agents/06_runDemo.png)
- Agent Run Details: ![Agent Run Details](/v1/agents/07_runDetails.png)
- Agent Inference History: ![Inference History](/v1/agents/08_inferenceHistory.png)
- Agent Files Created: ![Files Created](/v1/agents/09_filesCreated.png)
- Agent Batch Run: ![Batch Run](/v1/agents/10_batchRun.png)
- Share Agent: ![Share Agent](/v1/agents/11_shareAgent.png)
- Upload Agent: ![Upload Agent](/v1/agents/12_uploadAgent.png)
- Agent Visual Builder Interface: ![Visual Builder](/v1/agents/agentVisualBuilder/01_visualBuilder.png)
- Create New Agent Interface: ![Create New Agent](/v1/agents/createAgent/01_createAgent.png)
- Create Multi-Step Agent: ![Multi-Step Agent](/v1/agents/createAgent/02_multiStepAgent.png)
- Create Prompting Agent: ![Prompting Agent](/v1/agents/createAgent/03_promptingAgent.png)
- Edit Agent Interface: ![Edit Agent](/v1/agents/editAgent/01_editAgent.png)
- Edit Agent Steps View: ![Edit Agent Steps](/v1/agents/editAgent/02_editAgentSteps.png)
- Batch Processing Interface: ![Batch Processing](/v1/agents/batchProcessing/01_batchProcessing.png)

Model HQ SDK & Code Documentation (V1):
- Tools Menu Location: ![SDK Tools Menu Location](${V1_BASE_IMAGE_URL}/getting-started-with-sdk/v1/menu.png)
- Tools Interface Dashboard: ![SDK Tools Interface](${V1_BASE_IMAGE_URL}/getting-started-with-sdk/v1/tools.png)
- Backend Server Initialization: ![Initialize Backend Server](${V1_BASE_IMAGE_URL}/getting-started-with-sdk/v1/backend.png)
- Backend Launch Process: ![Launch Backend Server](${V1_BASE_IMAGE_URL}/getting-started-with-sdk/v1/launch.png)
- Backend Configuration Panel: ![Configure Backend Settings](${V1_BASE_IMAGE_URL}/getting-started-with-sdk/v1/backend.png)
- SDK Download Interface: ![Download SDK Package](${V1_BASE_IMAGE_URL}/getting-started-with-sdk/v1/download.png)
- SDK File Structure: ![SDK Downloaded Files](${V1_BASE_IMAGE_URL}/getting-started-with-sdk/v1/files.png)
- Backend Shutdown Process: ![Close Backend Server](${V1_BASE_IMAGE_URL}/getting-started-with-sdk/v1/close.png)
`;
