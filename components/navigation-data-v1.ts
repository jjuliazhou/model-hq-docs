// V1 Navigation Data

import type { ComponentType } from "react"
import {
  MessageSquare,
  Database,
  BookOpen,
  Bot,
  Workflow,
  FileSearch,
  Power,
  FlaskConical,
  Settings,
  Wrench,
  Network,
  Plug,
  TableProperties,
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

export const v1NavigationData: NavItem[] = [
  {
    title: "Chat",
    url: "/v1/chat",
    icon: MessageSquare,
    items: [
      { title: "Chat Overview", url: "/v1/chat" },
      { title: "Chat Configuration", url: "/v1/chat/chat-configuration" },
      { title: "Document Parsing Issues", url: "/v1/chat/document-parsing-issues" },
      { title: "Error Handling", url: "/v1/chat/error-handling" },
    ],
  },
  {
    title: "Agents",
    url: "/v1/agents",
    icon: Workflow,
    items: [
      { title: "Agents Overview", url: "/v1/agents" },
      { title: "Create New Agent", url: "/v1/agents/create-new-agent" },
      { title: "Edit Agent", url: "/v1/agents/edit-agent" },
      { title: "Agent Visual Builder", url: "/v1/agents/agent-visual-builder" },
      { title: "Batch Processing", url: "/v1/agents/batch-processing" },
      { title: "Agent Services", url: "/v1/agents/agent-services" },
    ],
  },
  {
    title: "Bots",
    url: "/v1/bots",
    icon: Bot,
    items: [
      { title: "Bots Overview", url: "/v1/bots" },
      { title: "Building a Bot", url: "/v1/bots/build-bot" },
      { title: "Editing a Bot", url: "/v1/bots/edit-bot" },
    ],
  },
  {
    title: "Models",
    url: "/v1/models",
    icon: Database,
    items: [
      { title: "Models Overview", url: "/v1/models" },
      { title: "Model Configuration", url: "/v1/models/model-configuration" },
      { title: "Create Custom Test", url: "/v1/models/custom-test" },
      { title: "Microsoft Foundry", url: "/v1/models/microsoft-foundry" },
    ],
  },
  {
    title: "Source",
    url: "/v1/source",
    icon: FileSearch,
    items: [
      { title: "Source Overview", url: "/v1/source" },
      { title: "Parsing in Source", url: "/v1/source/parsing-in-source" },
      { title: "Error Handling", url: "/v1/source/error-handling" },
    ],
  },
  {
    title: "Dataset",
    url: "/v1/dataset",
    icon: TableProperties,
  },
  {
    title: "Services",
    url: "/v1/services",
    icon: Network,
  },
  {
    title: "Integrations",
    url: "/v1/integrations",
    icon: Plug,
  },
  {
    title: "Configs & Tools",
    url: "/v1/configs-and-tools",
    icon: Settings,
    items: [
      { title: "Tools", url: "/v1/configs-and-tools/tools" },
      { title: "Configure", url: "/v1/configs-and-tools/configure" },
    ],
  },
  {
    title: "Shutdown",
    url: "/v1/shutdown",
    icon: Power,
  },
]

export const v1CodeDocumentation: NavItem[] = []
