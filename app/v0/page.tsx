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
import { MessageSquare, Bot, Database, Wrench, Settings, Power, BookOpen, TestTube, Share, Users, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function V0OverviewPage() {
  const sections = [
    {
      title: "Chat",
      description: "Interact with AI models through a powerful chat interface with document support and web search capabilities.",
      icon: MessageSquare,
      href: "/v0/chat",
      topics: ["Chat Overview", "Changing Chat Models", "Error Handling"]
    },
    {
      title: "Agents",
      description: "Build and deploy intelligent AI agents for complex workflows and multi-step document processing tasks.",
      icon: Users,
      href: "/v0/agent",
      topics: ["Create New Agent", "Agent Builder Menu", "Edit Agents", "Batch Run", "Using OpenAI/Anthropic Models"]
    },
    {
      title: "Bots",
      description: "Create custom bots tailored to specific use cases with specialized knowledge and capabilities.",
      icon: Bot,
      href: "/v0/bots",
      topics: ["Building Custom Bots", "Bot Configuration", "Bot Management"]
    },
    {
      title: "RAG (Retrieval-Augmented Generation)",
      description: "Transform documents into structured knowledge bases and build context-aware AI applications.",
      icon: Database,
      href: "/v0/rag",
      topics: ["RAG Overview", "RAG Parsing", "Document Parsing Issues", "Error Handling"]
    },
    {
      title: "Models",
      description: "Discover, download, and manage optimized AI models for Intel and Qualcomm processors.",
      icon: Database,
      href: "/v0/models",
      topics: ["Model Selection", "Model Management", "Hardware Optimization"]
    },
    {
      title: "Testing Models",
      description: "Test and evaluate AI models before deploying them in your workflows and applications.",
      icon: TestTube,
      href: "/v0/testing-models",
      topics: ["Model Testing", "Performance Evaluation", "Quality Assessment"]
    },
    {
      title: "Tools",
      description: "Powerful utilities for managing local setup, parsing documents, and system maintenance.",
      icon: Wrench,
      href: "/v0/tools",
      topics: ["Document Parsing", "System Utilities", "Local Management"]
    },
    {
      title: "Configs",
      description: "Centralized interface for managing Model HQ's core settings, appearance, and integrations.",
      icon: Settings,
      href: "/v0/configs",
      topics: ["System Configuration", "Appearance Settings", "Integration Management"]
    },
    {
      title: "Share Your App",
      description: "Share your custom agents and chatbots with others in your organization or community.",
      icon: Share,
      href: "/v0/share-your-app",
      topics: ["App Sharing", "Distribution", "Deployment"]
    },
    {
      title: "Shutdown",
      description: "Best practices for safely closing Model HQ and ensuring data integrity.",
      icon: Power,
      href: "/v0/shutdown",
      topics: ["Safe Shutdown", "Data Preservation", "Best Practices"]
    },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Model HQ v0 Documentation</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Model HQ v0 Documentation</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive guide to all v0 features and capabilities
        </p>
      </div>

      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>Deprecation Notice:</strong> V0 documentation will be deprecated soon. Please consider migrating to V1 for the latest features and improvements.
        </AlertDescription>
      </Alert>

      <div className="prose prose-gray max-w-none">
        <p>
          Model HQ v0 is the foundational platform for building and deploying AI workflows locally on your PC or enterprise hardware. This comprehensive documentation covers all aspects of v0, from basic chat functionality to advanced agent workflows, RAG implementations, and system configuration.
        </p>

        <p>
          Whether you're building simple chatbots or complex multi-agent systems, v0 provides the tools and interfaces you need to deploy enterprise AI solutions that run completely offline with no per-token costs.
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

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Getting Started
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              New to Model HQ? Start with these essential resources:
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <Link href="/start-here/system-configuration" className="block p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <h3 className="font-semibold">System Configuration</h3>
                <p className="text-sm text-muted-foreground mt-1">Configure your environment and check system requirements</p>
              </Link>
              <Link href="/start-here/getting-started" className="block p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <h3 className="font-semibold">Getting Started Guide</h3>
                <p className="text-sm text-muted-foreground mt-1">Begin your Model HQ journey with setup guides</p>
              </Link>
            </div>
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
              Step-by-step recipes and real-world examples are available in the dedicated Cookbooks section.
            </p>
            <Link href="/cookbooks/v0" className="inline-flex items-center gap-2 text-primary hover:underline">
              <BookOpen className="h-4 w-4" />
              Browse v0 Cookbooks
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
