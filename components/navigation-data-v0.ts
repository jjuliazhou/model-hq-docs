import type { ComponentType } from "react"
import {
  Bot,
  MessageSquare,
  Search,
  Database,
  Cog,
  Share,
  Power,
  Code,
  Terminal,
  Code2,
  FlaskConical,
  BookOpen,
  BrainCircuit,
  Library,
  FileSearch,
  Server,
  Camera,
  Stethoscope,
} from "lucide-react"

type NavSubItem = {
  title: string
  url: string
  icon?: ComponentType<{ className?: string }>
}

type NavItem = {
  title: string
  url: string
  icon: ComponentType<{ className?: string }>
  items?: NavSubItem[]
}

export const v0NavigationData: NavItem[] = [
  {
    title: "Chat",
    url: "/v0/chat",
    icon: MessageSquare,
    items: [
      { title: "Chat Overview", url: "/v0/chat" },
      { title: "Changing Chat Model", url: "/v0/chat/changing-chat-model" },
      { title: "Error Handling", url: "/v0/chat/error-handling" },
    ],
  },
  {
    title: "Agents",
    url: "/v0/agent",
    icon: Bot,
    items: [
      { title: "Agent Overview", url: "/v0/agent" },
      { title: "Create New Agent", url: "/v0/agent/create-new-agent" },
      { title: "Agent Builder Menu", url: "/v0/agent/agent-builder-menu" },
      { title: "Edit Agent", url: "/v0/agent/edit-agent" },
      { title: "Batch Run", url: "/v0/agent/multi-docs-agent" },
      { title: "OpenAI and Anthropic", url: "/v0/agent/openAI-and-anthropic" },
    ],
  },
  {
    title: "Bots",
    url: "/v0/bots",
    icon: Bot,
  },
  {
    title: "RAG",
    url: "/v0/rag",
    icon: Search,
    items: [
      { title: "RAG Overview", url: "/v0/rag" },
      { title: "RAG Parsing", url: "/v0/rag/rag-parsing" },
      { title: "Document Parsing Issues", url: "/v0/rag/document-parsing-issues" },
      { title: "Error Handling", url: "/v0/rag/error-handling" },
    ],
  },
  {
    title: "Models",
    url: "/v0/models",
    icon: Database,
  },
  {
    title: "Testing Models",
    url: "/v0/testing-models",
    icon: FlaskConical,
  },
  {
    title: "Configs & Tools",
    url: "/v0/configs-tools",
    icon: Cog,
    items: [
      { title: "🔧 Tools", url: "/v0/tools" },
      { title: "⚙️ Configs", url: "/v0/configs" },
    ],
  },
  {
    title: "Share Your App",
    url: "/v0/share-your-app",
    icon: Share,
  },
  {
    title: "Shutdown",
    url: "/v0/shutdown",
    icon: Power,
  },
]

export const v0CodeDocumentation: NavItem[] = [
  {
    title: "Getting Started with SDK",
    url: "/v0/getting-started-with-model-hq-sdk",
    icon: Terminal,
  },
  {
    title: "Hello World",
    url: "/v0/hello-world",
    icon: Code2,
  },
  {
    title: "API Reference",
    url: "/v0/api-reference",
    icon: Code,
  },
]
