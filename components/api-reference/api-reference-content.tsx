"use client"

import { useCallback } from "react"
import { useHeaderVisibility } from "@/contexts/header-visibility-context"
import type { ApiEndpoint } from "@/app/developer-docs/api-reference/api-endpoints-data"
import { CATEGORY_SECTIONS } from "./categories"
import { EndpointSection } from "./endpoint-section"
import { EndpointSearch } from "./endpoint-search"

export function ApiReferenceContent({ endpoints }: { endpoints: ApiEndpoint[] }) {
  const { isHeaderVisible } = useHeaderVisibility()

  const handleNavigate = useCallback((id: string) => {
    document.getElementById(`endpoint-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  return (
    <>
      <div
        className={`sticky z-30 border-b border-border bg-background/95 py-4 backdrop-blur transition-[top] duration-300 ease-in-out supports-[backdrop-filter]:bg-background/80 ${
          isHeaderVisible ? "top-16" : "top-0"
        }`}
      >
        <EndpointSearch endpoints={endpoints} onNavigate={handleNavigate} />
      </div>

      {CATEGORY_SECTIONS.map((section) => {
        const sectionEndpoints = endpoints.filter((e) => e.category === section.category)
        if (sectionEndpoints.length === 0) return null

        return (
          <div key={section.category}>
            <div className="border-b">
              <div className="py-8">
                <h2 className="mb-4 text-3xl font-bold">{section.title}</h2>
                <p className="mb-8 text-muted-foreground">{section.description}</p>
              </div>
            </div>
            {sectionEndpoints.map((endpoint) => (
              <div key={endpoint.id} id={`endpoint-${endpoint.id}`} className="scroll-mt-36">
                <EndpointSection endpoint={endpoint} isLast={false} />
              </div>
            ))}
          </div>
        )
      })}
    </>
  )
}
