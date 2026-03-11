// Video data structure
export interface VideoData {
  id: string
  title: string
  description: string
  duration: string
  views: string
  thumbnail: string
  publishedAt?: string
  tags?: string[]
  isManuallyAdded?: boolean
}

export const playlistVideos: VideoData[] = [
  {
    id: "Dbxb5qfsMaM",
    title: "LLMWare Model HQ Splash Video",
    description:
      "Introducing Model HQ for AI PCs powered by Intel",
    duration: "0:32",
    views: "0",
    thumbnail: "/youtube/intro.png",
    tags: ["Promo", "Launch"],
    isManuallyAdded: true,
  },
  {
    id: "9YP-nDhXRJY",
    title: "I Ran Semantic Search on 33k Reviews in CSV… with No Code - Model HQ Demo",
    description:
      "What happens when you run generative AI on a 33,000-row dataset — with zero code?",
    duration: "7:58",
    views: "0",
    thumbnail: "/youtube/new/semantic.jpg",
    tags: ["Semantic", "CSV", "No Code"],
    isManuallyAdded: false,
  },

  {
    id: "K1JaG9AwORE",
    title: "Stop Struggling with CSVs 🚀 Filter, Analyze & Use AI Like a Data Scientist (No Code!) with Model HQ",
    description:
      "Getting insights from CSV files for work can be painful.",
    duration: "13:31",
    views: "0",
    thumbnail: "/youtube/new/csv.jpg",
    tags: ["CSV", "Filter", "Analyze"],
    isManuallyAdded: false,
  },

  {
    id: "D3cZyenzelY",
    title: "Build Live Demos for AI Agents | Model HQ Agent Demo Mode",
    description:
      "In this video, I show you how to build, template, and demo complex AI agents inside Model HQ — completely private, fully local, and 100% no-code.",
    duration: "11:45",
    views: "0",
    thumbnail: "/youtube/new/liveDemo.jpg",
    tags: ["AI Agents", "Live Demo"],
    isManuallyAdded: false,
  },

  {
    id: "il48-IaEfxw",
    title: "One-Click Live Demos for AI Chatbots — No Wi-Fi, No Stress | Model HQ Demo Mode",
    description:
      "Live demos are hard. Prompts go sideways, Wi-Fi fails, and it’s tough to consistently show your chatbot at its best.",
    duration: "9:30",
    views: "0",
    thumbnail: "/youtube/new/oneClick.jpg",
    tags: ["Chatbot", "Wifi-less"],
    isManuallyAdded: false,
  },
  {
    id: "fW8_-_EdsrM",
    title: "Handwriting-Reading Agent with On-Device AI | Prescription Reading Agent (no code, private)",
    description:
      "In this video, I will show you something pretty amazing — a vision agent that reads handwritten prescriptions and turns messy handwriting into clean, structured data.",
    duration: "7:27",
    views: "0",
    thumbnail: "/youtube/new/hragent.jpg",
    tags: ["Handwriting Reading", "Agent"],
    isManuallyAdded: false,
  },

  {
    id: "FGmY9whUkaA",
    title: "Sharing Agents with No Hardware Lock-In on Model HQ (Intel ↔ Qualcomm, Zero Changes)",
    description:
      "You’re about to see something you probably haven’t seen anywhere else. 👀",
    duration: "10:46",
    views: "0",
    thumbnail: "/youtube/new/agent.jpg",
    tags: ["Intel", "Agent"],
    isManuallyAdded: false,
  },

{
    id: "yBj6wfdCoFc",
    title: "2 On-Device Agent Demos on Snapdragon X Elite (RAG + Vision) | Model HQ + Microsoft Foundry Models",
    description:
      "In this demo for Qualcomm AI PCs (Snapdragon X Elite and X2 Elite), I’m walking through two simple but powerful on-device agent workflows in Model HQ—the same demo Qualcomm showcased at CES Las Vegas (January 2026).",
    duration: "10:39",
    views: "0",
    thumbnail: "/youtube/new/qcagents.jpg",
    tags: ["Qualcomm", "Agent"],
    isManuallyAdded: false,
  },

{
    id: "qhO-Zlu4nYI",
    title: "Private On-Device AI on Snapdragon X Elite: Download + Test NPU Models in Model HQ",
    description:
      "In this video, I walk through Model HQ’s model catalogue and capabilities — this time running fully on a Qualcomm Snapdragon X Elite device.",
    duration: "7:02",
    views: "0",
    thumbnail: "/youtube/new/qc.jpg",
    tags: ["Qualcomm", "Snapdragon"],
    isManuallyAdded: false,
  },

  {
    id: "odTepwd8Xr0",
    title: "Testing NPU Model Sizes for on-device RAG (3B vs 7B vs 14B) | Model HQ",
    description:
      "In this Model HQ demo, I test different NPU-optimized model sizes to answer a key question every on-device AI user asks:",
    duration: "7:39",
    views: "0",
    thumbnail: "/youtube/new/npu.jpg",
    tags: ["NPU", "RAG"],
    isManuallyAdded: false,
  },

  {
    id: "Vz48X6SWwrQ",
    title: "Process 500 PDFs On-Device for RAG and Agents in 30 seconds?! Model HQ Sources Demo (Real-Time)",
    description:
      "In this demo, I will show you how to create Sources in Model HQ—bundles or collection of documents (books, PDFs, manuals, handbooks, and more) that become a shared source of truth for your bots and agent workflows, including 500 PDF Documents being ingested real time on-device on Intel Lunar Lake.",
    duration: "9:44",
    views: "0",
    thumbnail: "/youtube/new/pdf.jpg",
    tags: ["On-Device RAG", "Ingest PDF"],
    isManuallyAdded: false,
  },

  {
    id: "7EiTHPtjbbU",
    title: "Model HQ Overview Demo for Intel Devices: 250+ Models + No-Code Agents (Chat, RAG, Vision)",
    description:
      "In this demo for Intel devices, I will walk through an overview of Model HQ — a private, local, no-code platform that brings together 250+ models for chat and agent workflows, with no Wi-Fi required once models are downloaded.",
    duration: "10:25",
    views: "0",
    thumbnail: "/youtube/new/intel.jpg",
    tags: ["intel", "no code", "250 models"],
    isManuallyAdded: false,
  },

  {
    id: "zP2v8DixQaA",
    title: "Build a Custom AI Bot in Minutes (No-Code + Offline) | Model HQ Demo",
    description:
      "In this demo, I'll show you how to build a custom AI bot in Model HQ in just a few minutes—no code required.",
    duration: "9:30",
    views: "0",
    thumbnail: "/youtube/new/bot.jpg",
    tags: ["Bot", "No Code"],
    isManuallyAdded: false,
  },

  {
    id: "R1fAogEIDMc",
    title: "No-Code Sentiment & Emotion Detection Agent in Model HQ (On-Device + Private AI)",
    description:
      "In this Model HQ demo, I’ll show you how to build a no-code agentic workflow for sentiment analysis, emotion detection, ratings, and topic classification—all running locally on your device for fast, private, on-device AI.",
    duration: "6:41",
    views: "0",
    thumbnail: "/youtube/new/sedagent.jpg",
    tags: ["Sentiment & Motion Detection", "Agent"],
    isManuallyAdded: false,
  },

  {
    id: "1xE07RNHDM0",
    title: "Private, Local Image Agents in Model HQ: Describe Images + Extract Numbers (Fast!)",
    description:
      "In this video, I’ll show you how to build image-reading agents in Model HQ—fully on-device, private, and no-code. Once your models are downloaded, you can run vision workflows without Wi-Fi, keeping your data secure and local.",
    duration: "5:02",
    views: "0",
    thumbnail: "/youtube/new/iragent.jpg",
    tags: ["Image Reading", "Agent"],
    isManuallyAdded: false,
  },

  {
    id: "9n7gXz6knbM",
    title: "Contract Analyzer Agent in Minutes (No-Code + Offline) | Model HQ Demo",
    description:
      "In this Model HQ demo, I’ll show you how to build a no-code contract analyzer agent for real day-to-day work—perfect for reviewing agreements you see over and over again and extracting the same key terms every time.",
    duration: "10:58",
    views: "0",
    thumbnail: "/youtube/new/caagent.jpg",
    tags: ["Contract Analyzer", "Agent"],
    isManuallyAdded: false,
  },

  {
    id: "JazySdXT2IE",
    title: "Build a No-Code Classification Test or Use Custom Test Sets to Test Models (Root Cause Analysis)",
    description:
      "In Part 2 of our Models series, I’ll show you how to go beyond “download a model” and start testing models with custom test sets—all no-code and fully on-device in Model HQ.",
    duration: "10:21",
    views: "0",
    thumbnail: "/youtube/new/model2.jpg",
    tags: ["Models", "Classification", "Custom Test"],
    isManuallyAdded: false,
  },

  {
    id: "XT5wZ4TAsHM",
    title: "150+ AI Models Running Offline?! | Model HQ Demo (No Code + Private AI), Part 1",
    description:
      "In this Model HQ demo, I’ll walk you through Model HQ’s model capabilities—including how to browse and run 150+ models locally on your laptop or PC with no code and no Wi-Fi needed once models are downloaded.",
    duration: "10:34",
    views: "0",
    thumbnail: "/youtube/new/model1.jpg",
    tags: ["Models", "No Code", "Private AI"],
    isManuallyAdded: false,
  },

  {
    id: "yNkcSH73vKc",
    title: "Chat in Model HQ in Under 5 Minutes - How to use On-Device AI Getting Started with Chat",
    description:
      "In this quick walkthrough, I'll show you how to get started with Chat in Model HQ - the fastest and easiest way to begin experimenting with AI on your laptop or PC - all No Code.",
    duration: "6:40",
    views: "0",
    thumbnail: "/youtube/new/chat.jpg",
    tags: ["RAG", "Chat"],
    isManuallyAdded: false,
  },
  {
    id: "g1g9UbAzv9c",
    title: "Will It Run? Testing AI PC App on a 5-Year old Laptop",
    description:
      "Can you really run today's advanced AI PC apps on old hardware? In this video, we take a nearly 5-year-old laptop -- Dell XPS 13 (11th Gen i7, Tiger Lake, 32 GB) running Windows 10 Home",
    duration: "13:21",
    views: "12K",
    thumbnail: "/youtube/will-it-run.png?height=180&width=320&text=AI+Agents+No+Code",
    tags: ["Testing", "5 Years Old Machine"],
    isManuallyAdded: false,
  },
  {
    id: "T1AOuUF7oQ8",
    title: "Build a Table Reading Bot in Minutes - No Code on AI PC",
    description:
      "Unlock powerful document intelligence — right on your AI PC! 🚀 In this video, we show you exactly how to build a PDF Embedded Tables Bot in just a few minutes — no code required — using Model HQ running locally on an Intel® AI PC (Arrow Lake).",
    duration: "13:23",
    views: "12K",
    thumbnail: "/youtube/tr-bot.png?height=180&width=320&text=AI+Agents+No+Code",
    tags: ["Table Reading Bot"],
    isManuallyAdded: false,
  },
  {
    id: "cd_08qQ5Z2o",
    title: "Talk to Your Spreadsheets with AI: No Code SQL Bot on AI PC",
    description:
      "Tired of digging through giant spreadsheets? This video shows you how to easily talk to your spreadsheets using natural language—with full privacy, no code, and zero token costs with Model HQ.",
    duration: "11:33",
    views: "12K",
    thumbnail: "/youtube/sql-bot.png?height=180&width=320&text=AI+Agents+No+Code",
    tags: ["SpreadSheet", "SQL Bot", "No Code"],
    isManuallyAdded: false,
  },
  {
    id: "evbLEX-eA8o",
    title: "Share & Deploy Custom AI Chatbots - (Part 2 of 2)",
    description:
      "We walk through exactly how to share and distribute your custom-built chatbot from Model HQ—built in under 10 minutes with no code (in Part 1 of this Series called Build a Custom Chat/Rag-Bot in Under 10 Min).",
    duration: "10:43",
    views: "12K",
    thumbnail: "/youtube/share.png?height=180&width=320&text=AI+Agents+No+Code",
    tags: ["Share", "Chat Bot", "RAG Bot", "AI PC"],
    isManuallyAdded: false,
  },
  {
    id: "uy53WKrMOXc",
    title: "Build a Custom Chat/RAG-Bot in 10 min with No Code on AI PC (part 1 of 2)",
    description:
      "Rapidly build and deploy custom enterprise bots – no code, no cloud, fully local.",
    duration: "10:00",
    views: "12K",
    thumbnail: "/youtube/chat-rag-bot.png?height=180&width=320&text=AI+Agents+No+Code",
    tags: ["Chat Bot", "RAG Bot", "AI PC"],
    isManuallyAdded: false,
  },
  {
    id: "lMQwcw0TeVM",
    title: "Unlock Hybrid AI: AI PC + API Server",
    description:
      "Unlock the Power of Hybrid AI – Local (AI PC) + Server, Working Together.",
    duration: "8:53",
    views: "12K",
    thumbnail: "/youtube/api-server.png?height=180&width=320&text=AI+Agents+No+Code",
    tags: ["AI PC", "API Server"],
    isManuallyAdded: false,
  },
  {
    id: "nhf0VwUpV3c",
    title: "Model HQ for Intel AI PCs - Getting Started Video",
    description:
      "Complete getting started guide for using Model HQ on Intel AI PCs. Learn about Intel-specific optimizations and how to maximize performance on Intel hardware.",
    duration: "9:51",
    views: "174K",
    thumbnail: "/youtube/intel-ai.png?height=180&width=320&text=Intel+AI+PC+Start",
    tags: ["Intel", "AI PC", "Getting Started", "Hardware"],
    isManuallyAdded: false,
  },
  {
    id: "UTNQxspDi3I",
    title: "Build and Deploy AI Agents in Minutes on AI PCs - No Code Needed",
    description:
      "Learn how to quickly build and deploy AI agents on AI PCs without any coding required. This comprehensive tutorial walks you through the entire process using Model HQ's intuitive interface.",
    duration: "10:14",
    views: "12K",
    thumbnail: "/youtube/no-code.png?height=180&width=320&text=AI+Agents+No+Code",
    tags: ["AI Agents", "No Code", "AI PC", "Getting Started"],
    isManuallyAdded: false,
  },
  {
    id: "FSjpAgIZnPM",
    title: "Analyze Executive Agreements with AI - on AI PC",
    description:
      "Discover how to use AI to analyze complex executive agreements and contracts directly on your AI PC. This tutorial demonstrates practical business applications of Model HQ.",
    duration: "12:35",
    views: "11K",
    thumbnail: "/youtube/analyze.png?height=180&width=320&text=Executive+Agreements",
    tags: ["Business", "Document Analysis", "AI PC", "Executive"],
    isManuallyAdded: false,
  },
  {
    id: "kov4rvjEBbE",
    title: "*Model HQ* SQL and Tables - Chat Deepdive Part 2",
    description:
      "Deep dive into Model HQ's SQL capabilities and table management features. Part 2 of our comprehensive chat features series covering advanced database interactions.",
    duration: "8:51",
    views: "202K",
    thumbnail: "/youtube/sql.png?height=180&width=320&text=SQL+Tables+Chat",
    tags: ["SQL", "Database", "Chat Features", "Advanced"],
    isManuallyAdded: false,
  },
  {
    id: "6z3kyUpsGys",
    title: "Model HQ - Chat Features Deepdive Part 1 with Darren Oberst, Co-Founder and CTO",
    description:
      "Join Darren Oberst, Co-Founder and CTO, for an in-depth exploration of Model HQ's chat features. Learn about the architecture and capabilities from the creator himself.",
    duration: "10:54",
    views: "172K",
    thumbnail: "/youtube/chat.png?height=180&width=320&text=Chat+Features+CTO",
    tags: ["Chat Features", "CTO", "Deep Dive", "Architecture"],
    isManuallyAdded: false,
  },
  {
    id: "9eXwW6rKfBk",
    title: "Model HQ for Intel",
    description:
      "Quick overview of Model HQ's Intel integration and optimization features. Learn how Model HQ leverages Intel's AI acceleration capabilities.",
    duration: "1:57",
    views: "302K",
    thumbnail: "/youtube/intel.png?height=180&width=320&text=Model+HQ+Intel",
    tags: ["Intel", "Integration", "Overview", "Performance"],
    isManuallyAdded: false,
  },
  {
    id: "8VTg0a-q_Zo",
    title: "Model HQ - Founder's Talk",
    description:
      "Hear directly from the founders about the vision, mission, and future roadmap of Model HQ. An inspiring talk about the journey and what's coming next.",
    duration: "17:02",
    views: "7K",
    thumbnail: "/youtube/founder.png?height=180&width=320&text=Founders+Talk",
    tags: ["Founders", "Vision", "Roadmap", "Company"],
    isManuallyAdded: false,
  },
]
