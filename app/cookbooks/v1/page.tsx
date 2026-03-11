import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { BookOpen, Sparkles, Construction } from "lucide-react"
import Link from "next/link"

export default function CookbooksV1OverviewPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/cookbooks/v1">Cookbooks</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Version 1</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <BookOpen className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">Model HQ v1 Cookbooks</h1>
          <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
            COMING SOON
          </span>
        </div>
        <p className="text-lg text-muted-foreground">
          Next-generation recipes and tutorials for building advanced AI applications
        </p>
      </div>

      <Alert>
        <AlertDescription>
          <strong>New v1 Cookbooks Coming Soon!</strong> We're creating comprehensive tutorials showcasing the powerful new features of Model HQ v1, including Services, Integrations, and enhanced RAG workflows.
        </AlertDescription>
      </Alert>

      <div className="prose prose-gray max-w-none">
        <p>
          Model HQ v1 brings exciting new capabilities that enable more sophisticated AI applications. Our upcoming cookbooks will demonstrate how to leverage these features in real-world scenarios, including:
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="border-dashed">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Construction className="h-6 w-6 text-muted-foreground" />
              <CardTitle className="text-lg">Service-Based Architecture</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Build modular AI applications using Agent Services, REST APIs, and MCP integrations
            </p>
          </CardContent>
        </Card>

        <Card className="border-dashed">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Construction className="h-6 w-6 text-muted-foreground" />
              <CardTitle className="text-lg">Enterprise Integrations</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Connect to cloud services, productivity tools, and external APIs in your workflows
            </p>
          </CardContent>
        </Card>

        <Card className="border-dashed">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Construction className="h-6 w-6 text-muted-foreground" />
              <CardTitle className="text-lg">Advanced RAG Patterns</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Implement sophisticated document retrieval and knowledge management systems
            </p>
          </CardContent>
        </Card>

        <Card className="border-dashed">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Construction className="h-6 w-6 text-muted-foreground" />
              <CardTitle className="text-lg">Multi-Agent Workflows</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Orchestrate complex tasks using multiple specialized agents working together
            </p>
          </CardContent>
        </Card>

        <Card className="border-dashed">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Construction className="h-6 w-6 text-muted-foreground" />
              <CardTitle className="text-lg">MCP Tool Integration</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Leverage Model Context Protocol servers to extend agent capabilities
            </p>
          </CardContent>
        </Card>

        <Card className="border-dashed">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Construction className="h-6 w-6 text-muted-foreground" />
              <CardTitle className="text-lg">Production Deployment</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Best practices for deploying and scaling v1 applications in enterprise environments
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 space-y-4">
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Explore v1 Documentation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              While we prepare the v1 cookbooks, explore the comprehensive v1 documentation to learn about all the new features:
            </p>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              <Link href="/v1/services" className="block p-4 border rounded-lg hover:bg-background transition-colors">
                <h3 className="font-semibold">Services</h3>
                <p className="text-sm text-muted-foreground mt-1">Reusable service components</p>
              </Link>
              <Link href="/v1/integrations" className="block p-4 border rounded-lg hover:bg-background transition-colors">
                <h3 className="font-semibold">Integrations</h3>
                <p className="text-sm text-muted-foreground mt-1">External connections</p>
              </Link>
              <Link href="/v1/source" className="block p-4 border rounded-lg hover:bg-background transition-colors">
                <h3 className="font-semibold">Source (RAG)</h3>
                <p className="text-sm text-muted-foreground mt-1">Enhanced document processing</p>
              </Link>
              <Link href="/v1/bots" className="block p-4 border rounded-lg hover:bg-background transition-colors">
                <h3 className="font-semibold">Bots</h3>
                <p className="text-sm text-muted-foreground mt-1">Build intelligent bots</p>
              </Link>
              <Link href="/v1/chat" className="block p-4 border rounded-lg hover:bg-background transition-colors">
                <h3 className="font-semibold">Chat</h3>
                <p className="text-sm text-muted-foreground mt-1">Enhanced chat interface</p>
              </Link>
              <Link href="/v1/models" className="block p-4 border rounded-lg hover:bg-background transition-colors">
                <h3 className="font-semibold">Models</h3>
                <p className="text-sm text-muted-foreground mt-1">Model configuration & testing</p>
              </Link>
            </div>
            <Link href="/v1" className="inline-flex items-center gap-2 text-primary hover:underline text-sm">
              View Complete v1 Documentation →
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>In the Meantime: v0 Cookbooks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Many patterns from v0 cookbooks are still relevant and can be adapted for v1. Check out the existing recipes:
            </p>
            <Link href="/cookbooks/v0" className="inline-flex items-center gap-2 text-primary hover:underline">
              <BookOpen className="h-4 w-4" />
              Browse v0 Cookbooks
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card className="border-primary/50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Want to be notified when new v1 cookbooks are released? Reach out to our support team.
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
