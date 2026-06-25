import { ArrowRight, ArrowUpRight } from "lucide-react"
import { PageFrame, FrameSection } from "@/components/page-frame"

const recipes = [
  {
    title: "Build a No-Code Contract Analyzer Agent",
    description:
      "Build an agent that reads contracts and extracts the same key details every time — fully on-device, no code needed.",
    href: "/cookbooks/v1/building-contract-analyzer",
    tags: ["Agents", "RAG", "Visual Builder"],
  },
  {
    title: "Process 500 PDFs On-Device for RAG",
    description:
      "Create a reusable Source in minutes that runs RAG over hundreds of documents at once — private and offline.",
    href: "/cookbooks/v1/sources-for-rag",
    tags: ["Source", "RAG", "Batch"],
  },
]

const docs = [
  { title: "Services", description: "Reusable service components", href: "/v1/services" },
  { title: "Integrations", description: "External connections", href: "/v1/integrations" },
  { title: "Source (RAG)", description: "Enhanced document processing", href: "/v1/source" },
  { title: "Bots", description: "Build intelligent bots", href: "/v1/bots" },
  { title: "Chat", description: "Enhanced chat interface", href: "/v1/chat" },
  { title: "Models", description: "Model configuration & testing", href: "/v1/models" },
]

export default function CookbooksV1OverviewPage() {
  return (
    <PageFrame>
      {/* Hero */}
      <FrameSection>
        <div className="px-6 py-16 md:py-24">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            Cookbooks · v1
          </span>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Model HQ v1 cookbooks
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Next-generation recipes and tutorials for building advanced AI applications with Model HQ v1.
          </p>
        </div>
      </FrameSection>

      {/* Available recipes */}
      <FrameSection>
        <div className="px-6 pt-16 md:pt-20">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            Recipes
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Available cookbooks
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Step-by-step, real-world walkthroughs you can follow today.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px border-t border-border bg-border md:grid-cols-2">
          {recipes.map((recipe, index) => (
            <a
              key={recipe.href}
              href={recipe.href}
              className="group flex flex-col bg-background p-8 transition-colors hover:bg-muted/30"
            >
              <span className="font-mono text-sm text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{recipe.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {recipe.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {recipe.tags.map((tag) => (
                  <span key={tag} className="border border-border px-2 py-0.5">
                    {tag}
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

      {/* Explore docs */}
      <FrameSection last>
        <div className="px-6 pt-16 md:pt-20">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            Documentation
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Explore v1 documentation
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            While we prepare the cookbooks, dive into the full v1 docs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px border-y border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {docs.map((doc) => (
            <a
              key={doc.title}
              href={doc.href}
              className="group flex flex-col bg-background p-8 transition-colors hover:bg-muted/30"
            >
              <h3 className="text-lg font-semibold tracking-tight">{doc.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{doc.description}</p>
              <span className="mt-6 inline-flex items-center text-sm font-medium text-brand">
                View docs
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>

        <div className="px-6 py-8">
          <a
            href="/v1"
            className="group inline-flex items-center text-sm font-medium text-brand"
          >
            View complete v1 documentation
            <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </FrameSection>
    </PageFrame>
  )
}
