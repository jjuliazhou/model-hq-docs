"use client"

import { TableOfContents } from "@/components/table-of-contents"
import { References, Reference } from "@/components/references"
import { useHeaderVisibility } from "@/contexts/header-visibility-context"

interface DocPageLayoutProps {
  children: React.ReactNode
  references?: Reference[]
}

export function DocPageLayout({ children, references = [] }: DocPageLayoutProps) {
  const { isHeaderVisible } = useHeaderVisibility()

  return (
    <>
      {/* Main content - with right padding for TOC on xl screens */}
      <div className="w-full xl:pr-64">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>

      {/* Right sidebar - fixed to right edge, adjusts with header visibility */}
      <aside 
        className={`hidden xl:block fixed right-6 w-56 overflow-y-auto scrollbar-thin transition-[top] duration-300 ease-in-out ${
          isHeaderVisible ? "top-24" : "top-6"
        }`}
        style={{
          maxHeight: isHeaderVisible ? "calc(100vh - 10rem)" : "calc(100vh - 6rem)",
        }}
      >
        <div className="space-y-6 pr-2 pb-8">
          <TableOfContents />
          {references.length > 0 && (
            <>
              <div className="border-t border-border" />
              <References references={references} />
            </>
          )}
        </div>
      </aside>
    </>
  )
}

