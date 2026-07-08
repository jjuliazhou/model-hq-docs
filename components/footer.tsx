import { ArrowUpRight } from "lucide-react"

const footerSections: {
  title: string
  links: { label: string; href: string; external?: boolean }[]
}[] = [
  {
    title: "Documentation",
    links: [
      { label: "Getting Started", href: "/getting-started" },
      { label: "System Configuration", href: "/system-configuration" },
      { label: "v1 Docs", href: "/v1" },
      { label: "v0 Docs", href: "/v0" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Video Tutorials", href: "/video-tutorials" },
      { label: "Blogs & Partner Solutions", href: "/blogs-and-partner-solutions" },
      { label: "Supported Models", href: "/supported-models/intel" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "License", href: "/license" },
      { label: "Privacy Policies", href: "/privacy-policies" },
      { label: "Terms of Service", href: "/terms-of-services" },
      { label: "Acceptable Use Policy", href: "/acceptable-use-policy" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "LLMWare.ai", href: "https://llmware.ai", external: true },
    ],
  },
]

function PlusMark() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="text-foreground">
      <path d="M6.5 0V13M0 6.5H13" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="relative overflow-x-clip border-x border-border/60 bg-background">
      <div className="relative mx-auto w-full max-w-6xl border-x border-t border-border px-6 pt-14">
        {/* crosshair markers at top corners to connect with page frame */}
        <span aria-hidden className="pointer-events-none absolute -left-[6.5px] -top-[6.5px] z-10 hidden md:block">
          <PlusMark />
        </span>
        <span aria-hidden className="pointer-events-none absolute -right-[6.5px] -top-[6.5px] z-10 hidden md:block">
          <PlusMark />
        </span>
        {/* Top: brand + link columns */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src="/images/llmware-logo.png" alt="Model HQ" className="h-8 w-8" />
              <span className="font-semibold tracking-tight">Model HQ</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Run cutting-edge AI models directly on your PC. Private, secure, and
              completely offline.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Model HQ.
              <br />
              All rights reserved.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.label}
                      {link.external && (
                        <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Giant wordmark, Zed-style */}
        <div className="relative mt-14 select-none overflow-hidden border-t border-border pt-8">
          <p
            aria-hidden
            className="bg-gradient-to-b from-foreground/10 to-transparent bg-clip-text text-center text-[18vw] font-bold leading-none tracking-tighter text-transparent lg:text-[180px]"
          >
            MODEL HQ
          </p>
        </div>
      </div>
    </footer>
  )
}
