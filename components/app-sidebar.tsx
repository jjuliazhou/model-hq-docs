"use client"

import type * as React from "react"
import { usePathname } from "next/navigation"
import {
  Bot,
  Play,
  ChevronRight,
  Settings,
  PanelLeft,
  Cpu,
  Video,
  BookOpen,
  Radio,
  BrainCircuit,
  Library,
  FileSearch,
  Server,
  Camera,
  Stethoscope,
  Info,
  Mail,
  Rocket,
  BookMarked,
  BookCopy,
  Code2,
  Zap,
  Monitor,
  Hexagon,
  MessageSquare,
  Workflow,
  Image,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { v0NavigationData, v0CodeDocumentation } from "./navigation-data-v0"
import { v1NavigationData, v1CodeDocumentation } from "./navigation-data-v1"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

// Custom V0 and V1 icons
const V0Icon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1"/>
    <text x="12" y="17" fontSize="14" fontWeight="bold" fill="currentColor" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">v0</text>
  </svg>
)

const V1Icon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1"/>
    <text x="12" y="17" fontSize="14" fontWeight="bold" fill="currentColor" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">v1</text>
  </svg>
)

type NavItem = {
  title: string
  url: string
  icon: React.ComponentType<{ className?: string }>
  items?: { 
    title: string; 
    url: string; 
    icon?: React.ComponentType<{ className?: string }> 
  }[]
}

const developerDocs: NavItem[] = [
  {
    title: "Getting Started",
    url: "/developer-docs/getting-started-with-sdk",
    icon: Play,
  },
  {
    title: "Hello World",
    url: "/developer-docs/hello-world/hello-world",
    icon: Code2,
    items: [
      { title: "Hello World", url: "/developer-docs/hello-world/hello-world", icon: Code2 },
      { title: "Chat Example", url: "/developer-docs/hello-world/chat", icon: MessageSquare },
      { title: "Agents Example", url: "/developer-docs/hello-world/agents", icon: Workflow },
      { title: "RAG Example", url: "/developer-docs/hello-world/rag", icon: Library },
      { title: "Vision Example", url: "/developer-docs/hello-world/vision", icon: Image },
      { title: "SDK Reference", url: "/developer-docs/hello-world/sdk-reference", icon: BookOpen },
    ],
  },
  {
    title: "API Reference",
    url: "/developer-docs/api-reference",
    icon: Code2,
  },
  {
    title: "Server Deployment",
    url: "/developer-docs/server-deployment",
    icon: Server,
  },
]

const navigationData = {
  startHere: [
    {
      title: "About Model HQ",
      url: "/start-here/about-model-hq",
      icon: Info,
    },
    {
      title: "Getting Started",
      url: "/start-here/getting-started",
      icon: Play,
    },
    {
      title: "System Configuration",
      url: "/start-here/system-configuration",
      icon: Settings,
    },
  ],
  v0: v0NavigationData,
  v1: v1NavigationData as NavItem[],
  codeDocumentation: v0CodeDocumentation,
  v1CodeDocumentation: v1CodeDocumentation,
  supportedModels: [
    {
      title: "AMD Supported Models",
      url: "/supported-models/amd",
      icon: Zap,
    },
    {
      title: "Apple Supported Models",
      url: "/supported-models/apple",
      icon: Monitor,
    },
    {
      title: "Intel Supported Models",
      url: "/supported-models/intel",
      icon: Cpu,
    },
    {
      title: "NVIDIA Supported Models",
      url: "/supported-models/nvidia",
      icon: Hexagon,
    },
    {
      title: "Qualcomm Supported Models",
      url: "/supported-models/qualcomm",
      icon: Radio,
    },
  ],
  resources: [
    {
      title: "Video Tutorials",
      url: "/resources/video-tutorials",
      icon: Video,
    },
    {
      title: "Blogs and Partner Solutions",
      url: "/resources/blogs-and-partner-solutions",
      icon: BookOpen,
    },
  ],
  // Cookbooks sections - defined separately from v0/v1 docs
  cookbooksV0: [
    { 
      title: "Clinical Trial Screening Automation", 
      url: "/cookbooks/v0/clinical-trial-screening-autmation",
      icon: Stethoscope,
    },
    { 
      title: "Document Review and Analysis Tool", 
      url: "/cookbooks/v0/document-review-and-analysis-tool",
      icon: FileSearch,
    },
    { 
      title: "Hybrid Inferencing", 
      url: "/cookbooks/v0/hybrid-inferencing",
      icon: Server,
    },
    { 
      title: "Personalized Bot", 
      url: "/cookbooks/v0/personalized-bot",
      icon: BrainCircuit,
    },
    { 
      title: "Photo to Email Automation", 
      url: "/cookbooks/v0/photo-to-email-automation",
      icon: Camera,
    },
    { 
      title: "RAG Bot", 
      url: "/cookbooks/v0/rag-bot",
      icon: Library,
    },
  ] as NavItem[],
  cookbooksV1: [
    {
      title: "Building a Contract Analyzer",
      url: "/cookbooks/v1/building-contract-analyzer",
      icon: FileSearch,
    },
    {
      title: "Sources for RAG",
      url: "/cookbooks/v1/sources-for-rag",
      icon: Library,
    },
  ] as NavItem[],
}

// Helper component for collapsed state with hover menu
function CollapsedNavItem({ 
  item, 
  pathname, 
  hasSubItems = false 
}: { 
  item: NavItem
  pathname: string
  hasSubItems?: boolean
}) {
  const isActive = pathname === item.url || (item.items && item.items.some(sub => pathname === sub.url))
  
  if (hasSubItems && item.items) {
    return (
      <HoverCard openDelay={100} closeDelay={100}>
        <HoverCardTrigger asChild>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip={item.title}
              isActive={isActive}
              suppressHydrationWarning
              className="justify-center"
            >
              <a href={item.url}>
                {item.icon && <item.icon className="size-4" />}
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </HoverCardTrigger>
        <HoverCardContent side="right" align="start" className="w-56 p-2">
          <div className="font-semibold text-sm mb-2 px-2">{item.title}</div>
          <div className="space-y-1">
            {item.items.map((subItem) => (
              <a
                key={subItem.url}
                href={subItem.url}
                className={`block px-2 py-1.5 text-sm rounded-md hover:bg-accent transition-colors ${
                  pathname === subItem.url ? 'bg-accent text-accent-foreground font-medium' : ''
                }`}
              >
                {subItem.title}
              </a>
            ))}
          </div>
        </HoverCardContent>
      </HoverCard>
    )
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        tooltip={item.title}
        isActive={pathname === item.url}
        suppressHydrationWarning
        className="justify-center"
      >
        <a href={item.url}>
          {item.icon && <item.icon className="size-4" />}
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

// Helper component for collapsed section header with hover menu
function CollapsedSectionWithHover({ 
  icon: Icon, 
  title, 
  items, 
  pathname 
}: { 
  icon: React.ComponentType<{ className?: string }>
  title: string
  items: NavItem[]
  pathname: string
}) {
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip={title}
            suppressHydrationWarning
            className="justify-center"
            isActive={items.some(item => pathname === item.url || (item.items && item.items.some(sub => pathname === sub.url)))}
          >
            <Icon className="size-4" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </HoverCardTrigger>
      <HoverCardContent side="right" align="start" className="w-64 p-2 max-h-80 overflow-y-auto">
        <div className="font-semibold text-sm mb-2 px-2">{title}</div>
        <div className="space-y-1">
          {items.map((item) => (
            <div key={item.url}>
              <a
                href={item.url}
                className={`flex items-center gap-2 px-2 py-1.5 text-sm rounded-md hover:bg-accent transition-colors ${
                  pathname === item.url ? 'bg-accent text-accent-foreground font-medium' : ''
                }`}
              >
                {item.icon && <item.icon className="size-4 shrink-0" />}
                <span className="truncate">{item.title}</span>
              </a>
              {item.items && (
                <div className="ml-6 space-y-1 mt-1">
                  {item.items.map((subItem) => (
                    <a
                      key={subItem.url}
                      href={subItem.url}
                      className={`block px-2 py-1 text-xs rounded-md hover:bg-accent transition-colors ${
                        pathname === subItem.url ? 'bg-accent text-accent-foreground font-medium' : ''
                      }`}
                    >
                      {subItem.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const { state, toggleSidebar } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Sidebar collapsible="icon" {...props} className="[&_[data-sidebar=content]]:scrollbar-thin [&_[data-sidebar=content]]:scrollbar-thumb-border [&_[data-sidebar=content]]:scrollbar-track-transparent">
      <SidebarHeader className="h-16 justify-center border-b border-border p-0 px-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center justify-between w-full gap-2">
              <SidebarMenuButton size="lg" asChild className={`h-14 flex-1 rounded-none ${isCollapsed ? "px-0 justify-center" : "px-3"}`}>
                <a href="/">
                  <div
                    className={`flex aspect-square ${isCollapsed ? "size-9" : "size-10"} items-center justify-center rounded-md border border-border bg-white p-1.5 shadow-sm mx-auto`}
                  >
                    <img src="/images/llmware-logo.png" alt="Model HQ" className="size-full object-contain" />
                  </div>
                  {!isCollapsed && (
                    <div className="grid flex-1 text-left leading-tight ml-3">
                      <span className="truncate text-lg font-bold">Model HQ</span>
                      <span className="truncate font-mono text-xs uppercase tracking-widest text-muted-foreground">Documentation</span>
                    </div>
                  )}
                </a>
              </SidebarMenuButton>
              {/* Theme Toggle - only visible on mobile in sidebar */}
              {!isCollapsed && (
                <div className="md:hidden pr-3">
                  <div className="rounded-md p-1 border border-border dark:border-border">
                    <ThemeToggle />
                  </div>
                </div>
              )}
            </div>
          </SidebarMenuItem>
          {state === "collapsed" && (
            <SidebarMenuItem>
              <div title="Expand Sidebar">
                <Button variant="ghost" size="sm" onClick={toggleSidebar} className="h-8 w-8 p-0">
                  <PanelLeft className="h-4 w-4" />
                  <span className="sr-only">Expand Sidebar</span>
                </Button>
              </div>
            </SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {isCollapsed ? (
          // COLLAPSED STATE - Show icons with hover menus
          <>
            {/* Start Here - Icons */}
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationData.startHere.map((item) => (
                    <CollapsedNavItem key={item.title} item={item} pathname={pathname} />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Separator */}
            <div className="mx-2 my-1 h-px bg-border" />

            {/* Model HQ v0 - Single icon with hover menu */}
            {/*
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <CollapsedSectionWithHover
                    icon={V0Icon}
                    title="Model HQ v0 Docs"
                    items={[...navigationData.v0, ...navigationData.codeDocumentation] as NavItem[]}
                    pathname={pathname}
                  />
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            */}

            {/* Model HQ v1 - Single icon with hover menu */}
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <CollapsedSectionWithHover
                    icon={V1Icon}
                    title="Model HQ Core Docs"
                    items={navigationData.v1}
                    pathname={pathname}
                  />
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Developer Docs - Single icon with hover menu */}
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <CollapsedSectionWithHover
                    icon={Code2}
                    title="Developer Docs"
                    items={developerDocs}
                    pathname={pathname}
                  />
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Separator */}
            <div className="mx-2 my-1 h-px bg-border" />

            {/* Supported Models - Icons */}
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationData.supportedModels.map((item) => (
                    <CollapsedNavItem key={item.title} item={item} pathname={pathname} />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Separator */}
            <div className="mx-2 my-1 h-px bg-border" />

            {/* Resources - Icons */}
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationData.resources.map((item) => (
                    <CollapsedNavItem key={item.title} item={item} pathname={pathname} />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Separator */}
            <div className="mx-2 my-1 h-px bg-border" />

            {/* Cookbooks v0 - Single icon with hover menu */}
            {/*
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <CollapsedSectionWithHover
                    icon={BookMarked}
                    title="Cookbooks v0"
                    items={navigationData.cookbooksV0}
                    pathname={pathname}
                  />
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            */}

            {/* Cookbooks v1 - Single icon with hover menu */}
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <CollapsedSectionWithHover
                    icon={BookCopy}
                    title="Cookbooks (new)"
                    items={navigationData.cookbooksV1.length > 0 ? navigationData.cookbooksV1 : [{ title: "Coming soon...", url: "#", icon: Info }]}
                    pathname={pathname}
                  />
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </>
        ) : (
          // EXPANDED STATE - Full navigation
          <>
        {/* Start Here - Always visible at top */}
        <SidebarGroup>
          <SidebarGroupLabel>Start Here</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.startHere.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={pathname === item.url}
                    suppressHydrationWarning
                  >
                    <a href={item.url}>
                      {item.icon && <item.icon className="size-4" />}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Model HQ v0 Documentation - Collapsible (commented out) */}
        {false && (
        <Collapsible defaultOpen={pathname.startsWith('/v0') || pathname.startsWith('/getting-started-with-model-hq-sdk') || pathname.startsWith('/hello-world') || pathname.startsWith('/api-reference')} className="group/v0-collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="w-full flex items-center justify-between hover:bg-sidebar-accent/80 rounded-md px-3 py-2 cursor-pointer transition-colors" suppressHydrationWarning>
                <span className="font-semibold text-sm">Model HQ v0 Docs</span>
                <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/v0-collapsible:rotate-90" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent className="relative ml-3 overflow-visible">
                {/* Vertical line for tree structure */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
                <SidebarMenu className="space-y-1 overflow-visible">
              {navigationData.v0.map((item) => {
                // If item has sub-items, render as collapsible
                if (item.items) {
                  return (
                    <Collapsible
                      key={item.title}
                      asChild
                      defaultOpen={pathname.startsWith(item.url)}
                      className="group/collapsible"
                    >
                      <SidebarMenuItem className="relative overflow-visible">
                        {/* Horizontal branch line */}
                        <div className="absolute left-0 top-[18px] w-3 h-px bg-border" />
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            tooltip={item.title}
                            isActive={pathname === item.url}
                            suppressHydrationWarning
                            className="pl-4 overflow-visible"
                          >
                            {item.icon && <item.icon className="size-4 shrink-0" />}
                            <span className="truncate">{item.title}</span>
                            <ChevronRight className="ml-auto size-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="overflow-visible">
                          <SidebarMenuSub className="relative ml-3 border-l border-border pl-3 overflow-visible">
                            {item.items.map((subItem, index) => (
                              <SidebarMenuSubItem key={subItem.title} className="relative overflow-visible">
                                {/* Horizontal branch line for sub-items */}
                                <div className="absolute left-0 top-1/2 w-3 h-px bg-border -translate-y-1/2 -ml-3" />
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={pathname === subItem.url}
                                  suppressHydrationWarning
                                  className="overflow-visible"
                                >
                                  <a href={subItem.url} className="truncate">
                                    <span className="truncate">{subItem.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  )
                }

                // If item has no sub-items, render as simple link
                return (
                  <SidebarMenuItem key={item.title} className="relative overflow-visible">
                    {/* Horizontal branch line */}
                    <div className="absolute left-0 top-[18px] w-3 h-px bg-border" />
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      isActive={pathname === item.url}
                      suppressHydrationWarning
                      className="pl-4 overflow-visible"
                    >
                      <a href={item.url} className="truncate flex items-center gap-2">
                        {item.icon && <item.icon className="size-4 shrink-0" />}
                        <span className="truncate">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>

          {/* SDK Documentation Subsection within v0 */}
          <SidebarGroup className="relative ml-3 mt-2 overflow-visible">
            {/* Vertical line continuation */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
            <div className="relative overflow-visible">
              {/* Horizontal branch for SDK section */}
              <div className="absolute left-0 top-4 w-3 h-px bg-border" />
              <SidebarGroupLabel className="pl-4">SDK Documentation</SidebarGroupLabel>
            </div>
            <SidebarGroupContent className="relative ml-3 overflow-visible">
              {/* Vertical line for SDK items */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              <SidebarMenu className="space-y-1 overflow-visible">
                {navigationData.codeDocumentation.map((item) => (
                  <SidebarMenuItem key={item.title} className="relative overflow-visible">
                    {/* Horizontal branch line */}
                    <div className="absolute left-0 top-[18px] w-3 h-px bg-border" />
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      isActive={pathname === item.url}
                      suppressHydrationWarning
                      className="pl-4 overflow-visible"
                    >
                      <a href={item.url} className="truncate flex items-center gap-2">
                        {item.icon && <item.icon className="size-4 shrink-0" />}
                        <span className="text-sm truncate">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
    )}

    {/* Model HQ v1 Documentation - Collapsible */}
    <Collapsible defaultOpen={pathname.startsWith('/v1')} className="group/v1-collapsible">
      <SidebarGroup>
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger className="w-full flex items-center justify-between hover:bg-sidebar-accent/80 rounded-md px-3 py-2 cursor-pointer transition-colors" suppressHydrationWarning>
            <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-sidebar-foreground/60">Model HQ Core Docs</span>
            <ChevronRight className="ml-auto size-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]/v1-collapsible:rotate-90" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent className="relative ml-3 mr-1 overflow-visible">
            {/* Vertical line for tree structure */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
            <SidebarMenu className="space-y-1 overflow-visible">
              {navigationData.v1.length === 0 ? (
                <SidebarMenuItem className="relative overflow-visible">
                  {/* Horizontal branch line */}
                  <div className="absolute left-0 top-[18px] w-3 h-px bg-border" />
                  <div className="px-6 py-1 text-sm text-muted-foreground italic">
                    Coming soon...
                  </div>
                </SidebarMenuItem>
              ) : (
                navigationData.v1.map((item) => {
                  // Same rendering logic as v0
                  if (item.items) {
                    return (
                      <Collapsible
                        key={item.title}
                        asChild
                        defaultOpen={pathname.startsWith(item.url)}
                        className="group/collapsible"
                      >
                        <SidebarMenuItem className="relative overflow-visible">
                          {/* Horizontal branch line */}
                          <div className="absolute left-0 top-[18px] w-3 h-px bg-border" />
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton
                              tooltip={item.title}
                              isActive={pathname === item.url}
                              suppressHydrationWarning
                              className="pl-4 overflow-visible"
                            >
                              {item.icon && <item.icon className="size-4 shrink-0" />}
                              <span className="truncate">{item.title}</span>
                              <ChevronRight className="ml-auto size-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="overflow-visible">
                            <SidebarMenuSub className="relative ml-3 border-l border-border pl-3 overflow-visible">
                              {item.items.map((subItem) => (
                                <SidebarMenuSubItem key={subItem.title} className="relative overflow-visible">
                                  {/* Horizontal branch line for sub-items */}
                                  <div className="absolute left-0 top-1/2 w-3 h-px bg-border -translate-y-1/2 -ml-3" />
                                  <SidebarMenuSubButton
                                    asChild
                                    isActive={pathname === subItem.url}
                                    suppressHydrationWarning
                                    className="overflow-visible"
                                  >
                                    <a href={subItem.url} className="truncate">
                                      <span className="truncate">{subItem.title}</span>
                                    </a>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuItem>
                      </Collapsible>
                    )
                  }

                  return (
                    <SidebarMenuItem key={item.title} className="relative overflow-visible">
                      {/* Horizontal branch line */}
                      <div className="absolute left-0 top-[18px] w-3 h-px bg-border" />
                      <SidebarMenuButton
                        asChild
                        tooltip={item.title}
                        isActive={pathname === item.url}
                        suppressHydrationWarning
                        className="pl-4 overflow-visible"
                      >
                        <a href={item.url} className="truncate flex items-center gap-2">
                          {item.icon && <item.icon className="size-4 shrink-0" />}
                          <span className="truncate">{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>

    {/* Developer Docs Section */}
    <Collapsible defaultOpen={pathname.startsWith('/server-docs')} className="group/devdocs-collapsible">
      <SidebarGroup>
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger className="w-full flex items-center justify-between hover:bg-sidebar-accent/80 rounded-md px-3 py-2 cursor-pointer transition-colors" suppressHydrationWarning>
            <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-sidebar-foreground/60">Developer Docs</span>
            <ChevronRight className="ml-auto size-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]/devdocs-collapsible:rotate-90" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent className="relative ml-3 mr-1 overflow-visible">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
            <SidebarMenu className="space-y-1 overflow-visible">
              {developerDocs.map((item) => {
                if (item.items) {
                  return (
                    <Collapsible
                      key={item.title}
                      asChild
                      defaultOpen={pathname.startsWith(item.url)}
                      className="group/collapsible"
                    >
                      <SidebarMenuItem className="relative overflow-visible">
                        <div className="absolute left-0 top-[18px] w-3 h-px bg-border" />
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            tooltip={item.title}
                            isActive={pathname === item.url}
                            suppressHydrationWarning
                            className="pl-4 overflow-visible"
                          >
                            {item.icon && <item.icon className="size-4 shrink-0" />}
                            <span className="truncate text-sm">{item.title}</span>
                            <ChevronRight className="ml-auto size-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="overflow-visible">
                          <SidebarMenuSub className="relative ml-3 border-l border-border pl-3 overflow-visible">
                            {item.items.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title} className="relative overflow-visible">
                                <div className="absolute left-0 top-1/2 w-3 h-px bg-border -translate-y-1/2 -ml-3" />
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={pathname === subItem.url}
                                  suppressHydrationWarning
                                  className="overflow-visible"
                                >
                                  <a href={subItem.url} className="truncate">
                                    <span className="truncate text-sm">{subItem.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  )
                }
                return (
                  <SidebarMenuItem key={item.title} className="relative overflow-visible">
                    <div className="absolute left-0 top-[18px] w-3 h-px bg-border" />
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      isActive={pathname === item.url}
                      suppressHydrationWarning
                      className="pl-4 overflow-visible"
                    >
                      <a href={item.url} className="truncate flex items-center gap-2">
                        {item.icon && <item.icon className="size-4 shrink-0" />}
                        <span className="truncate text-sm">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>

    {/* Supported Models Section */}
    <SidebarGroup>
          <SidebarGroupLabel>Supported Models</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.supportedModels.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={pathname === item.url}
                    suppressHydrationWarning
                  >
                    <a href={item.url}>
                      {item.icon && <item.icon className="size-4" />}
                      <span className="text-sm">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Resources Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationData.resources.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={pathname === item.url}
                    suppressHydrationWarning
                  >
                    <a href={item.url}>
                      {item.icon && <item.icon className="size-4" />}
                      <span className="text-sm">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Cookbooks Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Cookbooks</SidebarGroupLabel>
          <SidebarGroupContent>
            {/* Cookbooks v0 - Collapsible (commented out) */}
            {false && (
            <Collapsible defaultOpen={pathname.startsWith('/cookbooks')} className="group/cookbooks-v0">
              <SidebarMenu>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip="Cookbooks v0"
                      suppressHydrationWarning
                      className="font-medium"
                    >
                      <span className="text-sm">Cookbooks v0</span>
                      <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/cookbooks-v0:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {navigationData.cookbooksV0.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={pathname === item.url}
                            suppressHydrationWarning
                          >
                            <a href={item.url}>
                              {item.icon && <item.icon className="size-4 mr-2" />}
                              <span className="text-sm">{item.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </SidebarMenu>
            </Collapsible>
            )}

            {/* Cookbooks v1 - Collapsible */}
            <Collapsible defaultOpen={false} className="group/cookbooks-v1">
              <SidebarMenu>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip="Cookbooks (new)"
                      suppressHydrationWarning
                      className="font-medium"
                    >
                      <BookCopy className="size-4" />
                      <span className="text-sm">Cookbooks (new)</span>
                      <ChevronRight className="ml-auto size-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]/cookbooks-v1:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {navigationData.cookbooksV1.length === 0 ? (
                        <SidebarMenuSubItem>
                          <div className="px-2 py-1 text-xs text-muted-foreground italic">
                            Coming soon...
                          </div>
                        </SidebarMenuSubItem>
                      ) : (
                        navigationData.cookbooksV1.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={pathname === item.url}
                              suppressHydrationWarning
                            >
                              <a href={item.url}>
                                {item.icon && <item.icon className="size-4 mr-2" />}
                                <span className="text-sm">{item.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))
                      )}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </SidebarMenu>
            </Collapsible>
          </SidebarGroupContent>
        </SidebarGroup>
          </>
        )}
      </SidebarContent>
      <SidebarFooter className="border-t border-border p-0">
        <a
          href="/support"
          title="Contact Support"
          className={`group flex w-full items-center gap-2 transition-colors hover:bg-muted ${isCollapsed ? 'justify-center py-4' : 'px-4 py-5'}`}
        >
          <Mail className={`text-brand ${isCollapsed ? "size-4" : "size-5"}`} />
          {!isCollapsed && <span className="font-medium">Contact Support</span>}
        </a>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
