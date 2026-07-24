import type { Metadata } from "next"
import { ApiEndpointSection } from "@/components/api-endpoint-section"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { endpoints } from "./api-endpoints-data"

export const metadata: Metadata = {
  title: "API Reference - Model HQ",
  description: "Complete API reference for Model HQ endpoints",
}

export default function ApiReferencePage() {
  const modelEndpoints = endpoints.filter((e) => e.category === "models")
  const ragEndpoints = endpoints.filter((e) => e.category === "rag")
  const libraryEndpoints = endpoints.filter((e) => e.category === "library")
  const agentEndpoints = endpoints.filter((e) => e.category === "agent")
  const serverEndpoints = endpoints.filter((e) => e.category === "server")
  const servicesEndpoints = endpoints.filter((e) => e.category === "services")
  const hqEndpoints = endpoints.filter((e) => e.category === "hq")

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>API Reference</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">API Reference</h1>
        <p className="text-base text-muted-foreground max-w-3xl">
          The Model HQ API provides programmatic access to the core Model HQ platform with APIs for model inference, RAG
          and Agent processing.
        </p>
      </div>

      {/* Models Category */}
      <div className="border-b">
        <div className="py-8">
          <h2 className="text-3xl font-bold mb-4">Models</h2>
          <p className="text-muted-foreground mb-8">
            Core inference endpoints for text generation, vision analysis, and specialized model functions.
          </p>
        </div>
      </div>

      {modelEndpoints.map((endpoint) => (
        <ApiEndpointSection key={endpoint.id} endpoint={endpoint} isLast={false} />
      ))}

      {/* RAG Category */}
      <div className="border-b">
        <div className="py-8">
          <h2 className="text-3xl font-bold mb-4">RAG (Retrieval Augmented Generation)</h2>
          <p className="text-muted-foreground mb-8">
            Document and library-based question answering with semantic search and context retrieval.
          </p>
        </div>
      </div>

      {ragEndpoints.map((endpoint) => (
        <ApiEndpointSection key={endpoint.id} endpoint={endpoint} isLast={false} />
      ))}

      {/* Library Management Category */}
      <div className="border-b">
        <div className="py-8">
          <h2 className="text-3xl font-bold mb-4">Library Management</h2>
          <p className="text-muted-foreground mb-8">
            Create and manage document libraries for knowledge base construction and semantic search capabilities.
          </p>
        </div>
      </div>

      {libraryEndpoints.map((endpoint) => (
        <ApiEndpointSection key={endpoint.id} endpoint={endpoint} isLast={false} />
      ))}

      {/* Agent Category */}
      <div className="border-b">
        <div className="py-8">
          <h2 className="text-3xl font-bold mb-4">Agent Execution</h2>
          <p className="text-muted-foreground mb-8">
            Execute automated multi-step processes and workflows using pre-configured intelligent agents.
          </p>
        </div>
      </div>

      {agentEndpoints.map((endpoint) => (
        <ApiEndpointSection key={endpoint.id} endpoint={endpoint} isLast={false} />
      ))}

      {/* Server Category */}
      <div className="border-b">
        <div className="py-8">
          <h2 className="text-3xl font-bold mb-4">Utilities & Administration</h2>
          <p className="text-muted-foreground mb-8">
            Server management, health checks, and administrative functions for monitoring and control.
          </p>
        </div>
      </div>

      {serverEndpoints.map((endpoint) => (
        <ApiEndpointSection key={endpoint.id} endpoint={endpoint} isLast={false} />
      ))}

      {/* Services & Integrations Category */}
      <div className="border-b">
        <div className="py-8">
          <h2 className="text-3xl font-bold mb-4">Services & Integrations</h2>
          <p className="text-muted-foreground mb-8">
            Connect the server to external services and run web searches through supported providers.
          </p>
        </div>
      </div>

      {servicesEndpoints.map((endpoint) => (
        <ApiEndpointSection key={endpoint.id} endpoint={endpoint} isLast={false} />
      ))}

      {/* HQ Apps Category */}
      <div className="border-b">
        <div className="py-8">
          <h2 className="text-3xl font-bold mb-4">HQ Apps</h2>
          <p className="text-muted-foreground mb-8">
            App session management, chat interaction, and app-specific agent execution endpoints.
          </p>
        </div>
      </div>

      {hqEndpoints.map((endpoint) => (
        <ApiEndpointSection key={endpoint.id} endpoint={endpoint} isLast={endpoint.id === "install_app"} />
      ))}
    </div>
  )
}