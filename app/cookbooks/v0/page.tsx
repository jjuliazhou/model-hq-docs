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
import { BookOpen, Stethoscope, FileSearch, Server, BrainCircuit, Camera, Library, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function CookbooksV0OverviewPage() {
  const cookbooks = [
    {
      title: "Clinical Trial Screening Automation",
      description: "Automate the screening process for clinical trials using AI-powered document analysis and decision-making workflows.",
      icon: Stethoscope,
      href: "/cookbooks/v0/clinical-trial-screening-autmation",
      difficulty: "Advanced",
      topics: ["Healthcare", "Document Analysis", "Automation", "Workflow"]
    },
    {
      title: "Document Review and Analysis Tool",
      description: "Build a comprehensive document review system that can analyze, summarize, and extract insights from various document types.",
      icon: FileSearch,
      href: "/cookbooks/v0/document-review-and-analysis-tool",
      difficulty: "Intermediate",
      topics: ["Document Processing", "Analysis", "RAG", "Insights"]
    },
    {
      title: "Hybrid Inferencing",
      description: "Combine local AI PC inferencing with API server capabilities for optimal performance and flexibility.",
      icon: Server,
      href: "/cookbooks/v0/hybrid-inferencing",
      difficulty: "Advanced",
      topics: ["Hybrid Architecture", "Performance", "API Integration", "Optimization"]
    },
    {
      title: "Personalized Bot",
      description: "Create a custom bot tailored to specific use cases with specialized knowledge and conversational capabilities.",
      icon: BrainCircuit,
      href: "/cookbooks/v0/personalized-bot",
      difficulty: "Beginner",
      topics: ["Bot Creation", "Customization", "Chatbot", "Knowledge Base"]
    },
    {
      title: "Photo to Email Automation",
      description: "Automate the process of analyzing photos and generating professional email responses based on visual content.",
      icon: Camera,
      href: "/cookbooks/v0/photo-to-email-automation",
      difficulty: "Intermediate",
      topics: ["Vision Models", "Automation", "Email", "Workflow"]
    },
    {
      title: "RAG Bot",
      description: "Build a Retrieval-Augmented Generation bot that can answer questions using your own documents and knowledge bases.",
      icon: Library,
      href: "/cookbooks/v0/rag-bot",
      difficulty: "Intermediate",
      topics: ["RAG", "Knowledge Retrieval", "Q&A", "Document Search"]
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/cookbooks/v0">Cookbooks</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Version 0</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <BookOpen className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">Model HQ v0 Cookbooks</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Step-by-step recipes and real-world examples to build powerful AI applications
        </p>
      </div>

      <Alert variant="destructive">
        <AlertDescription>
          <strong>Note:</strong> These cookbooks are for Model HQ v0. For the latest features and improvements, check out v1 cookbooks (coming soon).
        </AlertDescription>
      </Alert>

      <div className="prose prose-gray max-w-none">
        <p>
          Cookbooks provide practical, hands-on tutorials that guide you through building complete AI applications from start to finish. Each cookbook includes detailed instructions, code examples, and best practices to help you understand not just <em>what</em> to do, but <em>why</em> it works.
        </p>

        <p>
          Whether you're building your first chatbot or implementing complex multi-agent workflows, these cookbooks demonstrate real-world use cases and proven patterns for success with Model HQ.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Available Cookbooks</h2>
          <div className="flex gap-2 text-sm">
            <span className="px-2 py-1 rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Beginner</span>
            <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Intermediate</span>
            <span className="px-2 py-1 rounded bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Advanced</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {cookbooks.map((cookbook) => (
            <Link key={cookbook.href} href={cookbook.href}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <cookbook.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{cookbook.title}</CardTitle>
                    </div>
                    <span className={`px-2 py-1 text-xs font-semibold rounded whitespace-nowrap ${getDifficultyColor(cookbook.difficulty)}`}>
                      {cookbook.difficulty}
                    </span>
                  </div>
                  <CardDescription className="mt-2">{cookbook.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {cookbook.topics.map((topic) => (
                      <span key={topic} className="px-2 py-1 text-xs bg-muted rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              New to Model HQ?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Before diving into cookbooks, make sure you've completed the basic setup:
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <Link href="/start-here/system-configuration" className="block p-4 border rounded-lg hover:bg-background transition-colors">
                <h3 className="font-semibold">System Configuration</h3>
                <p className="text-sm text-muted-foreground mt-1">Set up your environment</p>
              </Link>
              <Link href="/start-here/getting-started" className="block p-4 border rounded-lg hover:bg-background transition-colors">
                <h3 className="font-semibold">Getting Started</h3>
                <p className="text-sm text-muted-foreground mt-1">Learn the basics</p>
              </Link>
            </div>
            <Link href="/v0" className="inline-flex items-center gap-2 text-primary hover:underline text-sm">
              Browse v0 Documentation →
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
