import type React from "react"
import { PageFrame, FrameSection } from "@/components/page-frame"

/**
 * Shared layout for legal prose pages (license, privacy, terms, acceptable use).
 * Renders the home-page framed column with a hero + a content section.
 * Content should use plain <section>/<h2>/<p>/<ul> — styling comes from `.prose`.
 */
export function LegalPage({
  eyebrow,
  title,
  intro,
  lastUpdated,
  children,
}: {
  eyebrow: string
  title: string
  intro: string
  lastUpdated: string
  children: React.ReactNode
}) {
  return (
    <PageFrame>
      {/* Hero */}
      <FrameSection>
        <div className="px-6 py-16 md:py-20">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">
            {eyebrow}
          </span>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {intro}
          </p>
        </div>
      </FrameSection>

      {/* Content */}
      <FrameSection last>
        <div className="px-6 py-16 md:py-20">
          <article className="prose prose-neutral max-w-3xl dark:prose-invert [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_section:first-child_h2]:mt-0">
            {children}
          </article>
          <p className="mt-12 border-t border-border pt-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>
      </FrameSection>
    </PageFrame>
  )
}
