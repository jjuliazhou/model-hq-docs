import { ArrowRight, ArrowUpRight, AlertTriangle } from "lucide-react"
import { PageFrame, FrameSection } from "@/components/page-frame"

const cookbooks = [
  {
    title: "Clinical Trial Screening Automation",
    description:
      "Automate the screening process for clinical trials using AI-powered document analysis and decision-making workflows.",
    href: "/cookbooks/v0/clinical-trial-screening-autmation",
    difficulty: "Advanced",
    topics: ["Healthcare", "Document Analysis", "Automation"],
  },
  {
    title: "Document Review and Analysis Tool",
    description:
      "Build a comprehensive document review system that can analyze, summarize, and extract insights from various document types.",
    href: "/cookbooks/v0/document-review-and-analysis-tool",
    difficulty: "Intermediate",
    topics: ["Document Processing", "Analysis", "RAG"],
  },
  {
    title: "Hybrid Inferencing",
    description:
      "Combine local AI PC inferencing with API server capabilities for optimal performance and flexibility.",
    href: "/cookbooks/v0/hybrid-inferencing",
    difficulty: "Advanced",
    topics: ["Hybrid Architecture", "Performance", "API"],
  },
  {
    title: "Personalized Bot",
    description:
      "Create a custom bot tailored to specific use cases with specialized knowledge and conversational capabilities.",
    href: "/cookbooks/v0/personalized-bot",
    difficulty: "Beginner",
    topics: ["Bot Creation", "Customization", "Knowledge Base"],
  },
  {
    title: "Photo to Email Automation",
    description:
      "Automate the process of analyzing photos and generating professional email responses based on visual content.",
    href: "/cookbooks/v0/photo-to-email-automation",
    difficulty: "Intermediate",
    topics: ["Vision Models", "Automation", "Email"],
  },
  {
    title: "RAG Bot",
    description:
      "Build a Retrieval-Augmented Generation bot that can answer questions using your own documents and knowledge bases.",
    href: "/cookbooks/v0/rag-bot",
    difficulty: "Intermediate",
    topics: ["RAG", "Knowledge Retrieval", "Q&A"],
  },
]

export default function CookbooksV0OverviewPage() {
  return (
    <PageFrame>
      {/* Hero */}
      <FrameSection>
        <div className="px-6 py-16 md:py-24">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            Cookbooks · v0
          </span>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Model HQ v0 cookbooks
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Step-by-step recipes and real-world examples to build powerful AI
            applications from start to finish.
          </p>
          <div className="mt-8 flex items-start gap-3 border border-border bg-muted/30 p-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              These cookbooks are for Model HQ v0. For the latest features, check
              out the v1 cookbooks (coming soon).
            </p>
          </div>
        </div>
      </FrameSection>

      {/* Cookbooks grid */}
      <FrameSection>
        <div className="px-6 pt-16 md:pt-20">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            Recipes
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Available cookbooks
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px border-t border-border bg-border md:grid-cols-2">
          {cookbooks.map((cookbook) => (
            <a
              key={cookbook.href}
              href={cookbook.href}
              className="group flex flex-col bg-background p-8 transition-colors hover:bg-muted/30"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-brand">
                  {cookbook.difficulty}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{cookbook.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {cookbook.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {cookbook.topics.map((topic) => (
                  <span key={topic} className="border border-border px-2 py-0.5">
                    {topic}
                  </span>
                ))}
              </div>
              <span className="mt-auto inline-flex items-center pt-6 text-sm font-medium text-brand">
                Open cookbook
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </FrameSection>

      {/* New to Model HQ */}
      <FrameSection last>
        <div className="px-6 pt-16 md:pt-20">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            Get started
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            New to Model HQ?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Before diving into cookbooks, complete the basic setup.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px border-y border-border bg-border md:grid-cols-2">
          <a
            href="/start-here/system-configuration"
            className="group flex flex-col bg-background p-8 transition-colors hover:bg-muted/30"
          >
            <h3 className="text-lg font-semibold tracking-tight">System Configuration</h3>
            <p className="mt-2 text-sm text-muted-foreground">Set up your environment</p>
            <span className="mt-6 inline-flex items-center text-sm font-medium text-brand">
              Configure
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>
          <a
            href="/start-here/getting-started"
            className="group flex flex-col bg-background p-8 transition-colors hover:bg-muted/30"
          >
            <h3 className="text-lg font-semibold tracking-tight">Getting Started</h3>
            <p className="mt-2 text-sm text-muted-foreground">Learn the basics</p>
            <span className="mt-6 inline-flex items-center text-sm font-medium text-brand">
              Get started
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>

        <div className="px-6 py-8">
          <a
            href="/v0"
            className="group inline-flex items-center text-sm font-medium text-brand"
          >
            Browse v0 documentation
            <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </FrameSection>
    </PageFrame>
  )
}
