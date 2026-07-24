'use client'

import { useMemo, useState } from "react"
import { Search, X } from "lucide-react"
import { FrameSection } from "@/components/page-frame"
import { TermInfo } from "@/components/model-encyclopedia"

export type ModelSection = { type: string; models: string[] }
export type ModelGroup = { group: string; blurb: string; sections: ModelSection[] }

function ModelChip({ name, param }: { name: string; param: string }) {
  return (
    <div className="flex items-center justify-between gap-3 bg-background px-4 py-3">
      <code className="break-all font-mono text-sm">{name}</code>
      <span
        className={`shrink-0 rounded-none px-1.5 py-0.5 font-mono text-xs uppercase tracking-wider ${
          param === "NA" ? "border border-border text-muted-foreground" : "bg-brand/10 text-brand"
        }`}
      >
        {param === "NA" ? "NA" : `${param}B`}
      </span>
    </div>
  )
}

// Reusable model catalog with search. Pass a vendor's groups + parameter map.
export function ModelCatalog({
  groups,
  params,
}: {
  groups: ModelGroup[]
  params: Record<string, string>
}) {
  const [query, setQuery] = useState("")
  const getParam = (name: string) => params[name] ?? "NA"
  const q = query.trim().toLowerCase()

  const results = useMemo(() => {
    if (!q) return []
    const seen = new Set<string>()
    const out: { name: string; group: string; type: string }[] = []
    for (const group of groups) {
      for (const section of group.sections) {
        for (const name of section.models) {
          if (name.toLowerCase().includes(q) && !seen.has(name)) {
            seen.add(name)
            out.push({ name, group: group.group, type: section.type })
          }
        }
      }
    }
    return out
  }, [q, groups])

  return (
    <>
      <FrameSection>
        <div className="px-6 py-8">
          <div className="relative max-w-xl">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              suppressHydrationWarning
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search models by name…"
              className="w-full border border-border bg-background py-2.5 pl-9 pr-9 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand"
            />
            {query && (
              <button
                suppressHydrationWarning
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          {q && (
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {results.length} {results.length === 1 ? "result" : "results"} for “{query}”
            </p>
          )}
        </div>

        {q &&
          (results.length > 0 ? (
            <div className="grid grid-cols-1 gap-px border-t border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {results.map((r) => (
                <div key={r.name} className="flex flex-col gap-1 bg-background px-4 py-3">
                  <div className="flex items-center justify-between gap-3">
                    <code className="break-all font-mono text-sm">{r.name}</code>
                    <span
                      className={`shrink-0 rounded-none px-1.5 py-0.5 font-mono text-xs uppercase tracking-wider ${
                        getParam(r.name) === "NA"
                          ? "border border-border text-muted-foreground"
                          : "bg-brand/10 text-brand"
                      }`}
                    >
                      {getParam(r.name) === "NA" ? "NA" : `${getParam(r.name)}B`}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {r.group} · {r.type}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="border-t border-border px-6 py-10 text-sm text-muted-foreground">
              No models match “{query}”.
            </div>
          ))}
      </FrameSection>

      {!q &&
        groups.map((group) => (
          <FrameSection key={group.group}>
            <div className="px-6 pt-16 md:pt-20">
              <span className="font-mono text-xs uppercase tracking-widest text-brand">Catalog</span>
              <div className="mt-3 flex items-center gap-2">
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{group.group}</h2>
                <TermInfo term={group.group} />
              </div>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{group.blurb}</p>
            </div>

            <div className="mt-12 space-y-px">
              {group.sections.map((section) => (
                <div key={section.type} className="border-t border-border">
                  <div className="flex items-center gap-2 bg-muted/30 px-6 py-3.5">
                    <h3 className="text-lg font-semibold tracking-tight">{section.type}</h3>
                    <TermInfo term={section.type} />
                    <span className="ml-auto font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {section.models.length} models
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
                    {section.models.map((name) => (
                      <ModelChip key={`${section.type}-${name}`} name={name} param={getParam(name)} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FrameSection>
        ))}
    </>
  )
}
