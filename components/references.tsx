import { ExternalLink, FileText, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

export interface Reference {
  title: string
  href: string
  type: "internal" | "external" | "doc"
  description?: string
}

interface ReferencesProps {
  references: Reference[]
  className?: string
}

export function References({ references, className }: ReferencesProps) {
  if (references.length === 0) {
    return null
  }

  const getIcon = (type: Reference["type"]) => {
    switch (type) {
      case "external":
        return <ExternalLink className="h-3.5 w-3.5 shrink-0" />
      case "doc":
        return <BookOpen className="h-3.5 w-3.5 shrink-0" />
      default:
        return <FileText className="h-3.5 w-3.5 shrink-0" />
    }
  }

  return (
    <nav className={cn("space-y-2", className)}>
      <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-3">References</h4>
      <ul className="space-y-1 text-[13px]">
        {references.map((reference, index) => (
          <li key={index}>
            <a
              href={reference.href}
              target={reference.type === "external" ? "_blank" : undefined}
              rel={reference.type === "external" ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                {getIcon(reference.type)}
              </span>
              <span className="leading-snug">{reference.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
