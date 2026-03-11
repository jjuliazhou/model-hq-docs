import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { MessageSquare, Bot, Database, Wrench, Settings, Power, BookOpen, FileSearch, Network, Plug, Sparkles, TableProperties } from "lucide-react"
import Link from "next/link"

export default function V1OverviewPage() {
  const sections = [
    {
      title: "Chat",
      description: "Enhanced chat interface with improved model interactions, document parsing, and advanced configuration options.",
      icon: MessageSquare,
      href: "/v1/chat",
      topics: ["Chat Overview", "Chat Configuration", "Document Parsing Issues", "Error Handling"]
    },
    {
      title: "Bots",
      description: "Build and deploy intelligent bots with enhanced capabilities and improved management features.",
      icon: Bot,
      href: "/v1/bots",
      topics: ["Bots Overview", "Building a Bot", "Editing a Bot"]
    },
    {
      title: "Models",
      description: "Discover, configure, and test AI models optimized for Intel and Qualcomm processors with custom testing capabilities.",
      icon: Database,
      href: "/v1/models",
      topics: ["Models Overview", "Model Configuration", "Create Custom Test"]
    },
    {
      title: "Source (RAG)",
      description: "Advanced document processing and retrieval-augmented generation with improved parsing and error handling.",
      icon: FileSearch,
      href: "/v1/source",
      topics: ["Source Overview", "Parsing in Source", "Error Handling"]
    },
    {
      title: "Dataset",
      description: "Work with structured CSV, XLSX, and JSON data — enabling AI agents to search, classify, analyze, and predict across table-based data.",
      icon: TableProperties,
      href: "/v1/dataset",
      topics: ["Creating a Dataset", "Field Mapping", "RAG Columns", "ID Column", "KPI Definition", "Analyze"]
    },
    {
      title: "Services",
      description: "Create reusable service components for agent workflows including Agent Services, REST APIs, and MCP integrations.",
      icon: Network,
      href: "/v1/services",
      topics: ["Services Interface", "Agent Services", "REST API Services", "MCP Services"]
    },
    {
      title: "Integrations",
      description: "Connect external services, cloud platforms, search engines, productivity tools, and AI model providers to Model HQ.",
      icon: Plug,
      href: "/v1/integrations",
      topics: ["Integrations Interface", "Cloud Services", "AI Providers", "Productivity Tools"]
    },
    {
      title: "Configs & Tools",
      description: "Comprehensive configuration controls and powerful tools for managing Model HQ behavior, appearance, and functionality.",
      icon: Settings,
      href: "/v1/configs-and-tools",
      topics: ["Configure", "Tools"]
    },
    {
      title: "Shutdown",
      description: "Best practices for safely closing Model HQ v1 and ensuring data integrity and system stability.",
      icon: Power,
      href: "/v1/shutdown",
      topics: ["Safe Shutdown", "Data Preservation", "Best Practices"]
    },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Model HQ v1 Documentation</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">Model HQ v1 Documentation</h1>
          <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
            LATEST
          </span>
        </div>
        <p className="text-lg text-muted-foreground">
          Next-generation AI platform with enhanced features, improved performance, and expanded capabilities
        </p>
      </div>

      <Alert>
        <AlertDescription>
          <strong>New in V1:</strong> Enhanced services architecture, comprehensive integrations, improved document processing, and streamlined configuration management.
        </AlertDescription>
      </Alert>

      <div className="prose prose-gray max-w-none">
        <p>
          Model HQ v1 represents a significant evolution of the platform, introducing powerful new features while maintaining the core principle of secure, local AI deployment. V1 brings enhanced service composability, expanded integration capabilities, and improved workflows for building sophisticated AI applications.
        </p>

        <p>
          The v1 architecture enables you to create modular, reusable components through the Services interface, connect to external systems via Integrations, and build complex multi-layered agent systems with well-defined input-output contracts.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Documentation Sections</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link key={section.href} href={section.href}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <section.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                  </div>
                  <CardDescription className="mt-2">{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {section.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-primary" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Getting Started
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Essential resources to begin your Model HQ v1 journey:
            </p>
            <div className="space-y-2">
              <Link href="/start-here/system-configuration" className="block p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <h3 className="font-semibold text-sm">System Configuration</h3>
                <p className="text-xs text-muted-foreground mt-1">Configure environment and requirements</p>
              </Link>
              <Link href="/start-here/getting-started" className="block p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <h3 className="font-semibold text-sm">Getting Started Guide</h3>
                <p className="text-xs text-muted-foreground mt-1">Setup and initial configuration</p>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              What's New in V1
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                <div>
                  <strong>Services Architecture:</strong> Create reusable components for agent workflows
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                <div>
                  <strong>Integrations:</strong> Connect 19+ external services and platforms
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                <div>
                  <strong>Enhanced Source/RAG:</strong> Improved document processing and parsing
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                <div>
                  <strong>MCP Support:</strong> Model Context Protocol integration (Beta)
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Looking for Cookbooks?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Step-by-step recipes and real-world v1 examples will be added to the Cookbooks section as they become available.
            </p>
            <Link href="/cookbooks/v1" className="inline-flex items-center gap-2 text-primary hover:underline">
              <BookOpen className="h-4 w-4" />
              Browse v1 Cookbooks (Coming Soon)
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-background rounded-lg">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Our team is here to guide you through Model HQ v1.
                </p>
                <Link href="/support" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                  Contact Support →
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
