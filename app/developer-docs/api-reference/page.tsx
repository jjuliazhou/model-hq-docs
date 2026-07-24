import type { Metadata } from "next"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ApiReferenceContent } from "@/components/api-reference/api-reference-content"
import { endpoints } from "./api-endpoints-data"

export const metadata: Metadata = {
  title: "API Reference - Model HQ",
  description: "Complete API reference for Model HQ endpoints",
}

export default function ApiReferencePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>API Reference</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">API Reference</h1>
        <p className="text-base text-muted-foreground max-w-3xl">
          The Model HQ API provides programmatic access to the core Model HQ platform with APIs for model inference, RAG
          and Agent processing.
        </p>
      </div>

      <ApiReferenceContent endpoints={endpoints} />
    </div>
  )
}