// V1 Navigation Data

import type { ComponentType } from "react"
import {
  MessageSquare,
  Database,
  BookOpen,
  Bot,
  FileSearch,
  Power,
  FlaskConical,
  Settings,
  Wrench,
  Network,
  Plug,
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
