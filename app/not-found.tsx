import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageFrame, FrameSection } from "@/components/page-frame"

const links = [
  { label: "Browse documentation", description: "Explore the full Model HQ docs", href: "/#quick-navigation" },
  { label: "Getting started", description: "Set up and run your first model", href: "/start-here/getting-started" },
  { label: "Cookbooks", description: "Step-by-step real-world recipes", href: "/cookbooks/v1" },
  { label: "Contact support", description: "Reach our team for help", href: "/support" },
]

export default function NotFound() {
  return (
    <PageFrame>
      {/* Hero */}
      <FrameSection>
        <div className="relative">
          {/* grid texture backdrop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse 80% 80% at 50% 40%, black 20%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 40%, black 20%, transparent 80%)",
            }}
          />
          <div className="relative flex flex-col items-center px-6 py-24 text-center md:py-32">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
              Error 404
            </span>
            <h1 className="mt-4 text-7xl font-semibold tracking-tight md:text-9xl">404</h1>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight md:text-3xl">
              Page not found
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              The page might have been moved, deleted, or the URL could be incorrect.
              Let&apos;s get you back on track.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-none bg-brand px-6 text-base text-brand-foreground hover:bg-brand/90">
                <Link href="/" className="group">
                  Go home
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-none px-6 text-base">
                <Link href="/support">Contact support</Link>
              </Button>
            </div>
          </div>
        </div>
      </FrameSection>

      {/* Helpful links */}
      <FrameSection last>
        <div className="px-6 pt-16 md:pt-20">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            Try instead
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            If you're lost,
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-px border-y border-border bg-border sm:grid-cols-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between gap-3 bg-background p-8 transition-colors hover:bg-muted/30"
            >
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{link.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{link.description}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ))}
        </div>
      </FrameSection>
    </PageFrame>
  )
}
