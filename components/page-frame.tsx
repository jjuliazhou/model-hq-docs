import type React from "react"

/** Small plus mark used at the corners of framed sections (zed.dev style). */
function PlusMark() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M6.5 0V13M0 6.5H13" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

/** Crosshair markers that sit on the framing lines at section corners. */
export function Crosshairs({ top = false, bottom = false }: { top?: boolean; bottom?: boolean }) {
  return (
    <>
      {top && (
        <>
          <span aria-hidden className="pointer-events-none absolute -left-[6.5px] -top-[6.5px] z-10 hidden text-foreground md:block">
            <PlusMark />
          </span>
          <span aria-hidden className="pointer-events-none absolute -right-[6.5px] -top-[6.5px] z-10 hidden text-foreground md:block">
            <PlusMark />
          </span>
        </>
      )}
      {bottom && (
        <>
          <span aria-hidden className="pointer-events-none absolute -left-[6.5px] -bottom-[6.5px] z-10 hidden text-foreground md:block">
            <PlusMark />
          </span>
          <span aria-hidden className="pointer-events-none absolute -right-[6.5px] -bottom-[6.5px] z-10 hidden text-foreground md:block">
            <PlusMark />
          </span>
        </>
      )}
    </>
  )
}

/**
 * The shared framed column used across the site (matches the home page).
 * Provides the double vertical guide lines on both sides.
 */
export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="-mx-6 -mt-6 -mb-6 overflow-x-clip border-x border-border/60">
      <div className="relative mx-auto w-full max-w-6xl border-x border-border">
        {children}
      </div>
    </div>
  )
}

/**
 * A single framed section with a bottom border + corner crosshairs,
 * matching the home page sections.
 */
export function FrameSection({
  children,
  className = "",
  last = false,
}: {
  children: React.ReactNode
  className?: string
  last?: boolean
}) {
  return (
    <section className={`relative ${last ? "" : "border-b border-border"} ${className}`}>
      {!last && <Crosshairs bottom />}
      {children}
    </section>
  )
}
