"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageFrame, FrameSection } from "@/components/page-frame"

type Solution = {
  id: number
  title: string
  description: string
  image: string
  link: string
  category: string
}

type BlogPost = Solution & {
  author: string
  publishDate: string
  readTime: string
}

const intelSolutions: Solution[] = [
  {
    id: 1,
    title: "LLMWare.ai Model HQ — Local AI Partner Brief",
    description: "Securely deploy and scale AI across the enterprise with Intel's cutting-edge AI PC technology.",
    image: "/partner-solutions/PS1.png",
    link: "https://www.intel.com/content/www/us/en/content-details/856277/llmware-ai-model-hq-local-ai-partner-brief.html",
    category: "Enterprise AI",
  },
  {
    id: 2,
    title: "Local AI — No Code, More Secure with AI PCs and the Private Cloud",
    description: "Leverage Intel AI PCs and Private Cloud infrastructure for secure, no-code AI deployment.",
    image: "/partner-solutions/PS2.png",
    link: "https://www.intel.com/content/www/us/en/content-details/854280/local-ai-no-code-more-secure-with-ai-pcs-and-the-private-cloud.html",
    category: "Security & Privacy",
  },
  {
    id: 3,
    title: "Model HQ Now Serving Arrow Lake",
    description: "Optimized performance and efficiency with Intel's latest Arrow Lake architecture.",
    image: "/partner-solutions/PS3.png",
    link: "https://github.com/user-attachments/files/18292873/IPA.Optimization.Summary.LLMWare.1.pdf",
    category: "Performance",
  },
  {
    id: 4,
    title: "LLMWare Unleashes the Power of the Intel AI PC",
    description: "Achieve superior cost, performance, and security wins with Intel AI PC technology.",
    image: "/partner-solutions/PS4.png",
    link: "https://www.intel.com/content/www/us/en/content-details/844173/llmware-unleashes-the-power-of-the-intel-ai-pc-with-cost-performance-and-security-wins.html",
    category: "Cost Optimization",
  },
]

const qualcommSolutions: Solution[] = [
  {
    id: 1,
    title: "Run language models and use AI agents on Snapdragon X Series devices",
    description:
      "Running LLMs on device has two issues: memory footprint and efficiency. Model HQ provides a fast, efficient on-ramp to deploying and managing Gen AI models on local devices.",
    image: "/partner-solutions/PS5.png",
    link: "https://www.qualcomm.com/developer/blog/2025/03/model-hq-llmware-run-language-models-use-ai-agents-on-snapdragon-x-series-devices",
    category: "Snapdragon X Series",
  },
]

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Run AI Models Privately on Your AI PC with Model HQ; No Cloud, No Code",
    description:
      "Model HQ by LLMWare is a groundbreaking desktop application that transforms your own PC or laptop into a fully private, high-performance AI workstation.",
    author: "Rohan Sharma",
    publishDate: "Jul 1, 2025",
    readTime: "5 min read",
    category: "Getting Started",
    link: "https://dev.to/llmware/how-to-run-ai-models-privately-on-your-ai-pc-with-model-hq-no-cloud-no-code-3o9k",
    image: "/blogs/blog1.png",
  },
  {
    id: 2,
    title: "How to Create a Local Chatbot Without Coding in Less Than 10 Minutes on AI PCs",
    description:
      "Create your own local chatbot using Model HQ — a revolutionary AI desktop app by LLMWare.ai. A private and offline AI assistant on your laptop.",
    author: "Rohan Sharma",
    publishDate: "Jun 27, 2025",
    readTime: "6 min read",
    category: "Chat Feature",
    link: "https://dev.to/llmware/how-to-create-a-local-chatbot-without-coding-in-less-than-10-minutes-on-ai-pcs-2ajl",
    image: "/blogs/blog2.png",
  },
]

function SolutionCard({ item }: { item: Solution }) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-background transition-colors hover:bg-muted/30"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted/30">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-xs uppercase tracking-widest text-brand">
          {item.category}
        </span>
        <h3 className="mt-3 text-base font-semibold leading-snug tracking-tight">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        <span className="mt-auto inline-flex items-center pt-6 text-sm font-medium text-brand">
          Read more
          <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </a>
  )
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-background transition-colors hover:bg-muted/30"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted/30">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-xs uppercase tracking-widest text-brand">
          {post.category}
        </span>
        <h3 className="mt-3 text-base font-semibold leading-snug tracking-tight">
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {post.description}
        </p>
        <div className="mt-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          <span>{post.author}</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>{post.publishDate}</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>{post.readTime}</span>
        </div>
        <span className="mt-auto inline-flex items-center pt-6 text-sm font-medium text-brand">
          Read article
          <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </a>
  )
}

export default function BlogsPage() {
  const [showAllIntel, setShowAllIntel] = useState(false)

  const displayedIntel = showAllIntel ? intelSolutions : intelSolutions.slice(0, 3)

  return (
    <PageFrame>
      {/* Hero */}
      <FrameSection>
        <div className="px-6 py-16 md:py-24">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            Resources
          </span>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Blogs &amp; partner solutions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            In-depth articles, technical insights, and real-world partner
            solutions showcasing Model HQ in action.
          </p>
        </div>
      </FrameSection>

      {/* Intel partner solutions */}
      <FrameSection>
        <div className="px-6 pt-16 md:pt-20">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            Intel
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Intel partner solutions
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Enterprise AI powered by Intel AI PC technology.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px border-t border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {displayedIntel.map((item) => (
            <SolutionCard key={item.id} item={item} />
          ))}
        </div>

        {intelSolutions.length > 3 && (
          <div className="flex justify-center border-t border-border px-6 py-8">
            <Button
              variant="outline"
              className="rounded-none"
              onClick={() => setShowAllIntel((v) => !v)}
            >
              {showAllIntel ? (
                <>
                  View less
                  <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  View all Intel solutions
                  <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </FrameSection>

      {/* Qualcomm partner solutions */}
      <FrameSection>
        <div className="px-6 pt-16 md:pt-20">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            Qualcomm
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Qualcomm partner solutions
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            On-device AI optimized for Snapdragon processors.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px border-t border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {qualcommSolutions.map((item) => (
            <SolutionCard key={item.id} item={item} />
          ))}
        </div>
      </FrameSection>

      {/* Blog posts */}
      <FrameSection>
        <div className="px-6 pt-16 md:pt-20">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            Blog
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Latest articles
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Guides, tutorials, and deep-dives from the Model HQ team.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px border-t border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </FrameSection>

      {/* CTA */}
      <FrameSection last>
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
          <a
            href="/video-tutorials"
            className="group flex flex-col items-start bg-background p-8 transition-colors hover:bg-muted/30 md:p-12"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-brand">Watch</span>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">Video tutorials</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Step-by-step video guides and walkthroughs.
            </p>
            <span className="mt-auto inline-flex items-center pt-8 text-sm font-medium text-brand">
              Watch tutorials
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>

          <a
            href="/getting-started"
            className="group flex flex-col items-start bg-background p-8 transition-colors hover:bg-muted/30 md:p-12"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-brand">Docs</span>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">Get started guide</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Everything you need to begin with Model HQ.
            </p>
            <span className="mt-auto inline-flex items-center pt-8 text-sm font-medium text-brand">
              Read the docs
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>
      </FrameSection>
    </PageFrame>
  )
}
