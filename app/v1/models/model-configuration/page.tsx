import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DocPageLayout } from "@/components/doc-page-layout"
import { references } from "./references"

export default function ModelConfigurationPage() {
  return (
    <DocPageLayout references={references}>
      <div className="space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Model Configuration</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Model Configuration</h1>
        </div>

        <div className="prose prose-gray max-w-none">
          <p>
            The Model Configuration panel serves as the central control layer for model orchestration within Model HQ. It defines how models are selected, prioritized, and executed across different tasks and environments, enabling consistent behavior while maintaining flexibility based on hardware capabilities and provider availability.
          </p>

          <p>
            This configuration system enables users to:
          </p>

          <ul>
            <li>Control model visibility and discovery across different runtimes and providers</li>
            <li>Define default model assignments by size category and task type</li>
            <li>Configure execution behavior including hardware utilization (CPU, GPU, NPU)</li>
            <li>Set generation parameters that apply across workflows</li>
            <li>Manage provider-specific preferences for OpenAI, Anthropic, and Google Gemini</li>
            <li>Control resource limits for local cache and model size constraints</li>
          </ul>

          <p>
            These settings allow teams to balance quality, performance, and cost while ensuring predictable behavior across workflows. Proper configuration enables Model HQ to automatically select the appropriate model for each task while providing advanced users with full control when needed.
          </p>

          <h2 id="1-opening-the-configuration-panel">1. Opening the configuration panel</h2>

          <p>
            The Model Configuration panel can be accessed by clicking the "⚙️" button in the <strong>Models</strong> interface or alternatively can be accessed via "⚙️" on the upper right-hand side then "Models" .
          </p>

          <img src="/v1/models/07_modelsConfig.png" alt="models" />

          <h2 id="2-configuration-parameters-overview">2. Configuration parameters overview</h2>

          <p>
            The table below provides a quick reference of all available configuration parameters:
          </p>

          <div className="overflow-x-auto">
            {/* Desktop Table View */}
            <table className="hidden md:table w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left">Parameter</th>
                  <th className="border border-border px-4 py-2 text-left">Type</th>
                  <th className="border border-border px-4 py-2 text-left">Default</th>
                  <th className="border border-border px-4 py-2 text-left">Options/Range</th>
                  <th className="border border-border px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Show Cached Models Only</strong></td>
                  <td className="border border-border px-4 py-2">Toggle</td>
                  <td className="border border-border px-4 py-2">OFF</td>
                  <td className="border border-border px-4 py-2">ON / OFF</td>
                  <td className="border border-border px-4 py-2">Limits selection to locally cached models</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Show Model Types</strong></td>
                  <td className="border border-border px-4 py-2">Multi-select</td>
                  <td className="border border-border px-4 py-2">All</td>
                  <td className="border border-border px-4 py-2">ov, onnx, gguf, openai, anthropic, google</td>
                  <td className="border border-border px-4 py-2">Controls which formats/providers appear</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Show NPU Models First</strong></td>
                  <td className="border border-border px-4 py-2">Toggle</td>
                  <td className="border border-border px-4 py-2">OFF</td>
                  <td className="border border-border px-4 py-2">ON / OFF</td>
                  <td className="border border-border px-4 py-2">Prioritizes NPU-optimized models in lists</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Model Naming Convention</strong></td>
                  <td className="border border-border px-4 py-2">Dropdown</td>
                  <td className="border border-border px-4 py-2">Short Name</td>
                  <td className="border border-border px-4 py-2">Short Name, Full Name</td>
                  <td className="border border-border px-4 py-2">Controls model name display format</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Model Choices</strong></td>
                  <td className="border border-border px-4 py-2">Dropdown</td>
                  <td className="border border-border px-4 py-2">Top Models Only</td>
                  <td className="border border-border px-4 py-2">Top Models Only, Full Catalog</td>
                  <td className="border border-border px-4 py-2">Determines selectable model list size</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Model Display Sorting</strong></td>
                  <td className="border border-border px-4 py-2">Dropdown</td>
                  <td className="border border-border px-4 py-2">Largest to Smallest</td>
                  <td className="border border-border px-4 py-2">Largest to Smallest, Smallest to Largest</td>
                  <td className="border border-border px-4 py-2">Controls model ordering by size</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Small Model Default</strong></td>
                  <td className="border border-border px-4 py-2">Dropdown</td>
                  <td className="border border-border px-4 py-2">Varies</td>
                  <td className="border border-border px-4 py-2">Available models</td>
                  <td className="border border-border px-4 py-2">Default lightweight model</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Medium Model Default</strong></td>
                  <td className="border border-border px-4 py-2">Dropdown</td>
                  <td className="border border-border px-4 py-2">Varies</td>
                  <td className="border border-border px-4 py-2">Available models</td>
                  <td className="border border-border px-4 py-2">Default balanced model</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Large Model Default</strong></td>
                  <td className="border border-border px-4 py-2">Dropdown</td>
                  <td className="border border-border px-4 py-2">Varies</td>
                  <td className="border border-border px-4 py-2">Available models</td>
                  <td className="border border-border px-4 py-2">Default high-capability model</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>max_output</strong></td>
                  <td className="border border-border px-4 py-2">Integer</td>
                  <td className="border border-border px-4 py-2">2048</td>
                  <td className="border border-border px-4 py-2">256-4096+</td>
                  <td className="border border-border px-4 py-2">Maximum tokens per response</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>temperature</strong></td>
                  <td className="border border-border px-4 py-2">Float</td>
                  <td className="border border-border px-4 py-2">0.3</td>
                  <td className="border border-border px-4 py-2">0.0-1.0</td>
                  <td className="border border-border px-4 py-2">Randomness control in generation</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Sample in Generation</strong></td>
                  <td className="border border-border px-4 py-2">Toggle</td>
                  <td className="border border-border px-4 py-2">ON</td>
                  <td className="border border-border px-4 py-2">ON / OFF</td>
                  <td className="border border-border px-4 py-2">Enables probabilistic sampling</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Chat Model</strong></td>
                  <td className="border border-border px-4 py-2">Dropdown</td>
                  <td className="border border-border px-4 py-2">Varies</td>
                  <td className="border border-border px-4 py-2">Available models</td>
                  <td className="border border-border px-4 py-2">Default for chat interactions</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>RAG Model</strong></td>
                  <td className="border border-border px-4 py-2">Dropdown</td>
                  <td className="border border-border px-4 py-2">Varies</td>
                  <td className="border border-border px-4 py-2">Available models</td>
                  <td className="border border-border px-4 py-2">Default for RAG workflows</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Vision Model</strong></td>
                  <td className="border border-border px-4 py-2">Dropdown</td>
                  <td className="border border-border px-4 py-2">Varies</td>
                  <td className="border border-border px-4 py-2">Available models</td>
                  <td className="border border-border px-4 py-2">Default for vision-to-text tasks</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Table Reading Model</strong></td>
                  <td className="border border-border px-4 py-2">Dropdown</td>
                  <td className="border border-border px-4 py-2">Varies</td>
                  <td className="border border-border px-4 py-2">Available models</td>
                  <td className="border border-border px-4 py-2">Default for table interpretation</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Summarizer Model</strong></td>
                  <td className="border border-border px-4 py-2">Dropdown</td>
                  <td className="border border-border px-4 py-2">Varies</td>
                  <td className="border border-border px-4 py-2">Available models</td>
                  <td className="border border-border px-4 py-2">Default for summarization</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Text2SQL Model</strong></td>
                  <td className="border border-border px-4 py-2">Dropdown</td>
                  <td className="border border-border px-4 py-2">Varies</td>
                  <td className="border border-border px-4 py-2">Available models</td>
                  <td className="border border-border px-4 py-2">Default for SQL generation</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Overall Default</strong></td>
                  <td className="border border-border px-4 py-2">Dropdown</td>
                  <td className="border border-border px-4 py-2">Varies</td>
                  <td className="border border-border px-4 py-2">Available models</td>
                  <td className="border border-border px-4 py-2">Fallback for undefined tasks</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Dataset Analyzer Model</strong></td>
                  <td className="border border-border px-4 py-2">Dropdown</td>
                  <td className="border border-border px-4 py-2">Varies</td>
                  <td className="border border-border px-4 py-2">Available models</td>
                  <td className="border border-border px-4 py-2">Default for dataset analysis</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Auto Select Models</strong></td>
                  <td className="border border-border px-4 py-2">Toggle</td>
                  <td className="border border-border px-4 py-2">ON</td>
                  <td className="border border-border px-4 py-2">ON / OFF</td>
                  <td className="border border-border px-4 py-2">Enables automatic model selection</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Enable NPU Optimized Models</strong></td>
                  <td className="border border-border px-4 py-2">Toggle</td>
                  <td className="border border-border px-4 py-2">OFF</td>
                  <td className="border border-border px-4 py-2">ON / OFF</td>
                  <td className="border border-border px-4 py-2">Allows NPU model usage</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>CPU Only Mode</strong></td>
                  <td className="border border-border px-4 py-2">Toggle</td>
                  <td className="border border-border px-4 py-2">OFF</td>
                  <td className="border border-border px-4 py-2">ON / OFF</td>
                  <td className="border border-border px-4 py-2">Restricts to CPU execution</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>OpenAI Default</strong></td>
                  <td className="border border-border px-4 py-2">Dropdown</td>
                  <td className="border border-border px-4 py-2">gpt-4</td>
                  <td className="border border-border px-4 py-2">OpenAI models</td>
                  <td className="border border-border px-4 py-2">Preferred OpenAI model</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Anthropic Default</strong></td>
                  <td className="border border-border px-4 py-2">Dropdown</td>
                  <td className="border border-border px-4 py-2">claude-3</td>
                  <td className="border border-border px-4 py-2">Anthropic models</td>
                  <td className="border border-border px-4 py-2">Preferred Anthropic model</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Gemini Default</strong></td>
                  <td className="border border-border px-4 py-2">Dropdown</td>
                  <td className="border border-border px-4 py-2">gemini-pro</td>
                  <td className="border border-border px-4 py-2">Gemini models</td>
                  <td className="border border-border px-4 py-2">Preferred Google model</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Max Model Size</strong></td>
                  <td className="border border-border px-4 py-2">Integer</td>
                  <td className="border border-border px-4 py-2">Auto</td>
                  <td className="border border-border px-4 py-2">Memory-based</td>
                  <td className="border border-border px-4 py-2">Maximum model size allowed</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Max Model Local Cache Size</strong></td>
                  <td className="border border-border px-4 py-2">Integer</td>
                  <td className="border border-border px-4 py-2">Auto</td>
                  <td className="border border-border px-4 py-2">Storage-based</td>
                  <td className="border border-border px-4 py-2">Maximum disk space for cache</td>
                </tr>
              </tbody>
            </table>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Show Cached Models Only</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Toggle</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">OFF</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">ON / OFF</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Limits selection to locally cached models</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Show Model Types</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Multi-select</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">All</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">ov, onnx, gguf, openai, anthropic, google</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Controls which formats/providers appear</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Show NPU Models First</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Toggle</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">OFF</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">ON / OFF</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Prioritizes NPU-optimized models in lists</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Model Naming Convention</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Dropdown</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">Short Name</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">Short Name, Full Name</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Controls model name display format</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Model Choices</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Dropdown</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">Top Models Only</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">Top Models Only, Full Catalog</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Determines selectable model list size</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Model Display Sorting</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Dropdown</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">Largest to Smallest</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">Largest to Smallest, Smallest to Largest</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Controls model ordering by size</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Small Model Default</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Dropdown</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">Varies</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">Available models</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Default lightweight model</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Medium Model Default</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Dropdown</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">Varies</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">Available models</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Default balanced model</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Large Model Default</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Dropdown</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">Varies</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">Available models</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Default high-capability model</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>max_output</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Integer</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">2048</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">256-4096+</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Maximum tokens per response</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>temperature</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Float</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">0.3</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">0.0-1.0</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Randomness control in generation</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Sample in Generation</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Toggle</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">ON</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">ON / OFF</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Enables probabilistic sampling</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Chat Model</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Dropdown</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">Varies</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">Available models</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Default for chat interactions</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>RAG Model</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Dropdown</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">Varies</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">Available models</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Default for RAG workflows</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Vision Model</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Dropdown</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">Varies</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">Available models</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Default for vision-to-text tasks</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Table Reading Model</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Dropdown</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">Varies</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">Available models</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Default for table interpretation</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Summarizer Model</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Dropdown</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">Varies</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">Available models</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Default for summarization</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Text2SQL Model</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Dropdown</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">Varies</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">Available models</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Default for SQL generation</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Overall Default</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Dropdown</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">Varies</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">Available models</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Fallback for undefined tasks</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Dataset Analyzer Model</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Dropdown</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">Varies</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">Available models</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Default for dataset analysis</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Auto Select Models</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Toggle</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">ON</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">ON / OFF</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Enables automatic model selection</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Enable NPU Optimized Models</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Toggle</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">OFF</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">ON / OFF</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Allows NPU model usage</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>CPU Only Mode</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Toggle</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">OFF</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">ON / OFF</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Restricts to CPU execution</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>OpenAI Default</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Dropdown</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">gpt-4</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">OpenAI models</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Preferred OpenAI model</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Anthropic Default</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Dropdown</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">claude-3</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">Anthropic models</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Preferred Anthropic model</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Gemini Default</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Dropdown</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">gemini-pro</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">Gemini models</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Preferred Google model</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Max Model Size</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Integer</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">Auto</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">Memory-based</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Maximum model size allowed</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Parameter</h5>
                    <p className="text-sm mt-1 break-words"><strong>Max Model Local Cache Size</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Integer</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">Auto</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Options/Range</h5>
                    <p className="text-sm mt-1 break-words">Storage-based</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Maximum disk space for cache</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <blockquote data-type="note">
            <p>Some parameters interact with each other. For example, enabling <strong>CPU Only Mode</strong> will override <strong>Enable NPU Optimized Models</strong>.</p>
          </blockquote>

          <h2 id="3-model-visibility-and-discovery">3. Model visibility and discovery</h2>

          <p>
            These settings control which models appear in selection lists and how they are filtered based on format, provider, and availability.
          </p>

          <h3 id="31-show-cached-models-only">3.1 Show Cached Models Only</h3>

          <p>
            <strong>Options:</strong> ON / OFF
            <br />
            <strong>Default:</strong> OFF
          </p>

          <p>
            This setting restricts model selection to only those models that are already available in the local system cache.
          </p>

          <ul>
            <li><strong>ON:</strong> Only locally cached (downloaded) models are displayed in selection lists. This ensures that all visible models can be used immediately without requiring network access or additional downloads. This mode is recommended for:
              <ul>
                <li>Offline usage scenarios</li>
                <li>Restricted network environments</li>
                <li>Production deployments where model availability must be guaranteed</li>
                <li>Scenarios requiring predictable, network-independent operation</li>
              </ul></li>
          </ul>

          <ul>
            <li><strong>OFF:</strong> All available models are shown, including both locally cached models and remote options that can be downloaded on demand. This provides the full range of model choices and is appropriate for:
              <ul>
                <li>Exploration and model discovery</li>
                <li>Environments with reliable network connectivity</li>
                <li>Development and testing workflows</li>
              </ul></li>
          </ul>

          <p>
            When enabled, this setting ensures that users only see models that are immediately accessible, preventing confusion or delays caused by unexpected downloads.
          </p>

          <h3 id="32-show-model-types">3.2 Show Model Types</h3>

          <p>
            <strong>Options:</strong> ov, onnx, gguf, openai, anthropic, google
            <br />
            <strong>Default:</strong> All selected
          </p>

          <p>
            This multi-select setting controls which model formats and providers appear in search and selection lists throughout the interface.
          </p>

          <p>
            Available options:
          </p>

          <ul>
            <li><strong>ov:</strong> OpenVINO optimized models designed for Intel hardware acceleration</li>
            <li><strong>onnx:</strong> ONNX Runtime models providing cross-platform compatibility</li>
            <li><strong>gguf:</strong> Quantized local models optimized for efficient CPU inference</li>
            <li><strong>openai:</strong> OpenAI hosted models (requires API key and internet connection)</li>
            <li><strong>anthropic:</strong> Anthropic hosted models (requires API key and internet connection)</li>
            <li><strong>google:</strong> Google Gemini models (requires API key and internet connection)</li>
          </ul>

          <p>
            By selectively enabling only the formats and providers that are relevant to the deployment environment, this setting:
          </p>

          <ul>
            <li>Reduces visual noise in model selection interfaces</li>
            <li>Hides unsupported or unavailable providers</li>
            <li>Streamlines the user experience for specific hardware configurations</li>
            <li>Prevents accidental selection of incompatible model types</li>
          </ul>

          <p>
            For example, in an air-gapped environment, only local formats (ov, onnx, gguf) might be enabled, while cloud-based providers are hidden. Conversely, in a cloud-focused deployment, only provider-based options (openai, anthropic, google) might be shown.
          </p>

          <h3 id="33-show-npu-models-first-if-available">3.3 Show NPU Models First (if Available)</h3>

          <p>
            <strong>Options:</strong> ON / OFF
            <br />
            <strong>Default:</strong> OFF
          </p>

          <p>
            This setting prioritizes NPU-optimized models in model selection lists when NPU hardware is detected.
          </p>

          <ul>
            <li><strong>ON:</strong> Models that support NPU acceleration appear at the top of selection lists, making them easier to discover and select. This is recommended for:
              <ul>
                <li>Devices with dedicated NPU hardware (e.g., Intel Core Ultra processors or Qualcomm)</li>
                <li>Workflows optimized for NPU inference</li>
                <li>Scenarios where NPU performance benefits are prioritized</li>
              </ul></li>
          </ul>

          <ul>
            <li><strong>OFF:</strong> Models are displayed in their default ordering (typically by size or alphabetically). This provides a neutral presentation regardless of hardware capabilities.</li>
          </ul>

          <blockquote data-type="note">
            <p>This setting only affects display order when NPU-capable hardware is detected. On systems without NPU support, this setting has no effect.</p>
          </blockquote>

          <h2 id="4-model-naming-and-catalog-size">4. Model naming and catalog size</h2>

          <p>
            These settings control how models are presented and labeled in the user interface.
          </p>

          <h3 id="41-model-naming-convention">4.1 Model Naming Convention</h3>

          <p>
            <strong>Options:</strong> Short Name / Full Name
            <br />
            <strong>Default:</strong> Short Name
          </p>

          <p>
            This setting determines how model names are displayed throughout the interface.
          </p>

          <ul>
            <li><strong>Short Name:</strong> Displays concise, readable model names (e.g., "Llama 3.2 3B"). This format is:
              <ul>
                <li>Cleaner and easier to scan in dropdown menus</li>
                <li>More user-friendly for non-technical users</li>
                <li>Recommended for most use cases</li>
                <li>Ideal for interfaces with limited space</li>
              </ul></li>
          </ul>

          <ul>
            <li><strong>Full Name:</strong> Displays complete model identifiers including architecture, version, quantization, and optimization details (e.g., "llama-3.2-3b-instruct-ov-int4"). This format is:
              <ul>
                <li>More precise and technically detailed</li>
                <li>Useful for debugging and advanced configuration</li>
                <li>Helpful when distinguishing between multiple variants of the same model</li>
                <li>Recommended for technical users who need explicit format information</li>
              </ul></li>
          </ul>

          <p>
            The choice between these options is primarily aesthetic and does not affect functionality—it only changes how model names are rendered in the UI.
          </p>

          <h3 id="42-model-choices">4.2 Model Choices</h3>

          <p>
            <strong>Options:</strong> Top Models Only / Full Catalog
            <br />
            <strong>Default:</strong> Top Models Only
          </p>

          <p>
            This setting determines the size and scope of the selectable model list.
          </p>

          <ul>
            <li><strong>Top Models Only:</strong> Displays a curated subset of recommended models that have been validated for quality and performance. This mode:
              <ul>
                <li>Reduces decision paralysis by limiting choices to proven options</li>
                <li>Simplifies the user experience for typical workflows</li>
                <li>Hides experimental or specialized models</li>
                <li>Is recommended for most users and production deployments</li>
              </ul></li>
          </ul>

          <ul>
            <li><strong>Full Catalog:</strong> Displays all available models, including experimental, specialized, and legacy variants. This mode:
              <ul>
                <li>Provides maximum flexibility and choice</li>
                <li>Enables access to specialized models for specific use cases</li>
                <li>Is appropriate for advanced users and research scenarios</li>
                <li>May include models that are less well-tested or optimized</li>
              </ul></li>
          </ul>

          <blockquote data-type="tip">
            <p>Start with "Top Models Only" and switch to "Full Catalog" only when specific requirements demand access to specialized models.</p>
          </blockquote>

          <h3 id="43-model-display-sorting">4.3 Model Display Sorting</h3>

          <p>
            <strong>Options:</strong> Largest to Smallest / Smallest to Largest
            <br />
            <strong>Default:</strong> Largest to Smallest
          </p>

          <p>
            This setting controls how models are ordered in selection lists based on their parameter count or file size.
          </p>

          <ul>
            <li><strong>Largest to Smallest:</strong> Larger models appear first in lists. This ordering is appropriate for:
              <ul>
                <li>Capability-focused workflows where quality is prioritized</li>
                <li>Scenarios with ample hardware resources</li>
                <li>Users who typically prefer larger, more capable models</li>
              </ul></li>
          </ul>

          <ul>
            <li><strong>Smallest to Largest:</strong> Smaller models appear first in lists. This ordering is appropriate for:
              <ul>
                <li>Performance-focused workflows where speed is prioritized</li>
                <li>Edge devices or resource-constrained environments</li>
                <li>Users who prefer efficient, lightweight models</li>
                <li>Battery-powered or mobile deployments</li>
              </ul></li>
          </ul>

          <h2 id="5-default-model-assignment-by-size">5. Default model assignment by size</h2>

          <p>
            These settings define the default models to be used for small, medium, and large model categories. These size-based defaults serve as fallbacks when task-specific models are not explicitly configured.
          </p>

          <h3 id="51-small-model-default">5.1 Small Model Default</h3>

          <p>
            <strong>Type:</strong> Dropdown (model selection)
            <br />
            <strong>Example:</strong> <code>llama-3.2-3b-instruct-ov</code>
          </p>

          <p>
            This parameter defines the default lightweight model used for low-resource tasks or when quick responses are prioritized over maximum capability.
          </p>

          <p>
            Small models are typically characterized by:
          </p>

          <ul>
            <li>Parameter counts in the range of 0.5–3 billion</li>
            <li>Fast inference times</li>
            <li>Low memory footprint</li>
            <li>Suitable for edge devices, mobile deployments, or high-throughput scenarios</li>
          </ul>

          <p>
            The selected model should balance capability with efficiency, providing acceptable quality while maintaining fast response times.
          </p>

          <h3 id="52-medium-model-default">5.2 Medium Model Default</h3>

          <p>
            <strong>Type:</strong> Dropdown (model selection)
            <br />
            <strong>Example:</strong> <code>mistral-7b-instruct-v0.3-ov</code>
          </p>

          <p>
            This parameter defines the default model used for tasks requiring balanced performance and capability.
          </p>

          <p>
            Medium models are typically characterized by:
          </p>

          <ul>
            <li>Parameter counts in the range of 7–8 billion</li>
            <li>Good balance between quality and speed</li>
            <li>Reasonable memory requirements</li>
            <li>Suitable for most general-purpose applications</li>
          </ul>

          <p>
            This is often the most frequently used size category, providing strong performance across a wide range of tasks without requiring excessive resources.
          </p>

          <h3 id="53-large-model-default">5.3 Large Model Default</h3>

          <p>
            <strong>Type:</strong> Dropdown (model selection)
            <br />
            <strong>Example:</strong> <code>phi-4-ov</code>
          </p>

          <p>
            This parameter defines the default model used for high-reasoning or complex tasks where maximum capability is required.
          </p>

          <p>
            Large models are typically characterized by:
          </p>

          <ul>
            <li>Parameter counts of 9–32+ billion (or larger)</li>
            <li>Highest quality outputs</li>
            <li>Advanced reasoning capabilities</li>
            <li>Significant memory and computational requirements</li>
          </ul>

          <blockquote data-type="note">
            <p>Ensure that sufficient RAM/VRAM is available before configuring large models as defaults, as they may not run on all hardware configurations.</p>
          </blockquote>

          <h2 id="6-generation-defaults">6. Generation defaults</h2>

          <p>
            These settings define default parameters for text generation that apply across all models unless explicitly overridden at the request level.
          </p>

          <h3 id="61-max_output">6.1 max_output</h3>

          <p>
            <strong>Type:</strong> Integer (tokens)
            <br />
            <strong>Default:</strong> 2048
            <br />
            <strong>Recommended range:</strong> 256-4096
          </p>

          <p>
            This parameter controls the maximum number of tokens that can be generated in a single response.
          </p>

          <p>
            Setting an appropriate value:
          </p>

          <ul>
            <li>Helps manage inference latency (shorter outputs complete faster)</li>
            <li>Controls computational and memory costs</li>
            <li>Prevents runaway generation</li>
            <li>Applies unless overridden on a per-request basis</li>
          </ul>

          <p>
            This global default can be overridden in specific contexts (such as the Chat Configuration panel), but serves as the system-wide fallback when no override is specified.
          </p>

          <blockquote data-type="tip">
            <p>For detailed information about this parameter, refer to the <a href="/chat/chatconfiguration">Chat Configuration</a> documentation.</p>
          </blockquote>

          <h3 id="62-temperature">6.2 temperature</h3>

          <p>
            <strong>Type:</strong> Float
            <br />
            <strong>Default:</strong> 0.3
            <br />
            <strong>Range:</strong> 0.0-1.0
          </p>

          <p>
            This parameter controls the randomness and creativity in text generation across the system.
          </p>

          <ul>
            <li><strong>Lower values (0.0-0.3):</strong> Produce more deterministic, focused, and factual outputs</li>
            <li><strong>Higher values (0.6-1.0):</strong> Increase creativity, variation, and diversity in responses</li>
          </ul>

          <p>
            This setting serves as the global default temperature across all generation tasks. Individual interfaces may override this value for specific use cases.
          </p>

          <blockquote data-type="tip">
            <p>For comprehensive guidance on temperature settings, refer to the <a href="/chat/chatconfiguration">Chat Configuration</a> documentation.</p>
          </blockquote>

          <h3 id="63-sample-in-generation">6.3 Sample in Generation</h3>

          <p>
            <strong>Options:</strong> ON / OFF
            <br />
            <strong>Default:</strong> ON
          </p>

          <p>
            This setting enables or disables probabilistic sampling during text generation system-wide.
          </p>

          <ul>
            <li><strong>ON:</strong> The model uses sampling to select tokens based on probability distributions, producing more diverse and natural outputs. This is the standard mode for most applications.</li>
          </ul>

          <ul>
            <li><strong>OFF:</strong> The model selects the highest-probability tokens. This produces highly deterministic and repeatable outputs.</li>
          </ul>

          <p>
            This global setting can be overridden in specific contexts when different behavior is required for particular tasks.
          </p>

          <blockquote data-type="tip">
            <p>For detailed information about sampling behavior, refer to the <a href="/chat/chatconfiguration">Chat Configuration</a> documentation.</p>
          </blockquote>

          <h2 id="7-task-specific-default-models">7. Task-specific default models</h2>

          <p>
            These settings define which models are used by default for specific task types. When a task-specific model is not defined, the system falls back to the size-based defaults (Small, Medium, Large) or the Overall Default.
          </p>

          <h3 id="71-chat-model">7.1 Chat Model</h3>

          <p>
            <strong>Type:</strong> Dropdown (model selection)
            <br />
            <strong>Default:</strong> Varies by installation
          </p>

          <p>
            This setting defines the default model used for standard chat interactions.
          </p>

          <p>
            The Chat Model is invoked when:
          </p>

          <ul>
            <li>Users engage in conversational interactions</li>
            <li>No specialized task type is detected</li>
            <li>General-purpose dialogue is required</li>
          </ul>

          <p>
            Selection criteria:
          </p>

          <ul>
            <li>Should have strong conversational capabilities</li>
            <li>Typically a medium or large model for quality responses</li>
            <li>Should balance response quality with acceptable latency</li>
          </ul>

          <h3 id="72-rag-model">7.2 RAG Model</h3>

          <p>
            <strong>Type:</strong> Dropdown (model selection)
            <br />
            <strong>Default:</strong> Varies by installation
          </p>

          <p>
            This setting defines the model used when Retrieval-Augmented Generation (RAG) is enabled.
          </p>

          <p>
            The RAG Model is specifically optimized for:
          </p>

          <ul>
            <li>Combining retrieved document context with generation</li>
            <li>Grounding responses in provided source material</li>
            <li>Balancing context processing with generation quality</li>
            <li>Maintaining factual accuracy based on retrieved passages</li>
          </ul>

          <p>
            RAG models should be selected for their ability to:
          </p>

          <ul>
            <li>Process longer context windows effectively</li>
            <li>Maintain coherence across retrieved chunks</li>
            <li>Generate responses that accurately reflect source material</li>
            <li>Avoid hallucination when factual grounding is required</li>
          </ul>

          <ul>
            <li>Generally higher parameter models (i.e. Phi-4) excel at this task.</li>
          </ul>

          <h3 id="73-vision-model">7.3 Vision Model</h3>

          <p>
            <strong>Type:</strong> Dropdown (model selection)
            <br />
            <strong>Default:</strong> Varies by installation
          </p>

          <p>
            This setting defines the model used for vision-to-text tasks such as image understanding and description.
          </p>

          <p>
            The Vision Model is invoked when:
          </p>

          <ul>
            <li>Images are uploaded for analysis</li>
            <li>Visual content needs to be interpreted or described</li>
            <li>Image-based questions are posed</li>
          </ul>

          <p>
            Common use cases include:
          </p>

          <ul>
            <li>Image captioning and description</li>
            <li>Visual question answering</li>
            <li>Diagram and chart interpretation</li>
          </ul>

          <h3 id="74-table-reading-model">7.4 Table Reading Model</h3>

          <p>
            <strong>Type:</strong> Dropdown (model selection)
            <br />
            <strong>Default:</strong> Varies by installation
          </p>

          <p>
            This setting defines the specialized model used for interpreting tables and structured data.
          </p>

          <p>
            The Table Reading Model is optimized for:
          </p>

          <ul>
            <li>Understanding tabular structures and relationships</li>
            <li>Extracting specific values from tables</li>
            <li>Answering questions about table contents</li>
            <li>Comparing and analyzing structured data</li>
          </ul>

          <p>
            This model should be selected for its ability to:
          </p>

          <ul>
            <li>Parse table layouts accurately</li>
            <li>Understand column headers and row relationships</li>
            <li>Perform calculations or aggregations when needed</li>
            <li>Handle various table formats (simple, complex, nested)</li>
          </ul>

          <h3 id="75-summarizer-model">7.5 Summarizer Model</h3>

          <p>
            <strong>Type:</strong> Dropdown (model selection)
            <br />
            <strong>Default:</strong> Varies by installation
          </p>

          <p>
            This setting defines the model used for summarization tasks across documents or conversations.
          </p>

          <p>
            The Summarizer Model is invoked for:
          </p>

          <ul>
            <li>Document summarization</li>
            <li>Conversation summarization</li>
            <li>Multi-document synthesis</li>
            <li>Extractive and abstractive summarization tasks</li>
          </ul>

          <h3 id="76-text2sql-model">7.6 Text2SQL Model</h3>

          <p>
            <strong>Type:</strong> Dropdown (model selection)
            <br />
            <strong>Default:</strong> Varies by installation
          </p>

          <p>
            This setting defines the model that converts natural language queries into SQL statements.
          </p>

          <p>
            The Text2SQL Model is designed for:
          </p>

          <ul>
            <li>Translating natural language to SQL</li>
            <li>Understanding database schema and relationships</li>
            <li>Generating syntactically correct and semantically accurate queries</li>
            <li>Supporting various SQL dialects</li>
          </ul>

          <h3 id="77-overall-default">7.7 Overall Default</h3>

          <p>
            <strong>Type:</strong> Dropdown (model selection)
            <br />
            <strong>Default:</strong> Varies by installation
          </p>

          <p>
            This setting defines the fallback model used when no specific task-type model is configured or when the task type cannot be determined.
          </p>

          <p>
            The Overall Default ensures:
          </p>

          <ul>
            <li>System continuity in edge cases</li>
            <li>Predictable behavior when task classification is ambiguous</li>
            <li>A reasonable model is always available</li>
          </ul>

          <p>
            This should typically be set to a well-rounded, general-purpose model that can handle diverse tasks adequately, even if not optimally.
          </p>

          <h3 id="78-dataset-analyzer-model">7.8 Dataset Analyzer Model</h3>

          <p>
            <strong>Type:</strong> Dropdown (model selection)
            <br />
            <strong>Default:</strong> Varies by installation
          </p>

          <p>
            This setting defines the model used for dataset inspection, profiling, and analysis tasks.
          </p>

          <p>
            The Dataset Analyzer Model is optimized for:
          </p>

          <ul>
            <li>Schema understanding and inference</li>
            <li>Pattern detection in structured data</li>
            <li>Data quality assessment</li>
            <li>Statistical analysis and profiling</li>
            <li>Anomaly detection in datasets</li>
          </ul>

          <h2 id="8-automation-and-hardware-controls">8. Automation and hardware controls</h2>

          <p>
            These settings manage how Model HQ automatically selects models and utilizes available hardware resources.
          </p>

          <h3 id="81-auto-select-models">8.1 Auto Select Models</h3>

          <p>
            <strong>Options:</strong> ON / OFF
            <br />
            <strong>Default:</strong> ON
          </p>

          <p>
            This setting enables or disables automatic model selection based on task type, hardware availability, and performance characteristics.
          </p>

          <ul>
            <li><strong>ON:</strong> The system automatically chooses the most appropriate model for each task based on:
              <ul>
                <li>Detected task type (chat, RAG, vision, etc.)</li>
                <li>Available hardware capabilities (CPU, GPU, NPU)</li>
                <li>Model availability (local vs. remote)</li>
                <li>Performance requirements</li>
                <li>Configured defaults and preferences</li>
              </ul></li>
          </ul>

          <p>
            This mode is recommended for most users as it:
          </p>

          <ul>
          </ul>

          <ul>
            <li><strong>OFF:</strong> User-defined defaults are always used, and automatic selection is disabled. This mode provides:
              <ul>
                <li>Explicit control over which models are used</li>
                <li>Predictable, consistent behavior regardless of task type</li>
                <li>Useful for testing, benchmarking, or scenarios requiring specific model usage</li>
                <li>Recommended for advanced users with specific requirements</li>
              </ul></li>
          </ul>

          <blockquote data-type="note">
            <p>Even when Auto Select is ON, users can manually override model selection in specific interfaces when needed.</p>
          </blockquote>

          <h3 id="82-enable-npu-optimized-models">8.2 Enable NPU Optimized Models</h3>

          <p>
            <strong>Options:</strong> ON / OFF
            <br />
            <strong>Default:</strong> OFF
          </p>

          <p>
            This setting controls whether NPU-optimized models can be used for inference when compatible hardware is detected.
          </p>

          <ul>
            <li><strong>ON:</strong> The system will utilize NPU-optimized models when available, which may provide:
              <ul>
                <li>Improved inference performance on supported hardware</li>
                <li>Lower power consumption compared to GPU/CPU inference</li>
                <li>Better efficiency for certain model architectures</li>
                <li>Relevant for Intel Core Ultra and similar NPU-equipped processors</li>
              </ul></li>
          </ul>

          <ul>
            <li><strong>OFF:</strong> NPU-optimized models are not used, even if NPU hardware is available. Inference is performed using CPU or GPU only.</li>
          </ul>

          <blockquote data-type="important">
            <p>If this setting is enabled on systems without NPU support, a warning may be displayed, and the system will automatically fall back to CPU/GPU execution. Ensure that NPU drivers and software are properly installed for optimal performance.</p>
          </blockquote>

          <h3 id="83-cpu-only-mode">8.3 CPU Only Mode</h3>

          <p>
            <strong>Options:</strong> ON / OFF
            <br />
            <strong>Default:</strong> OFF
          </p>

          <p>
            This setting restricts all model execution to CPU only, disabling GPU and NPU acceleration.
          </p>

          <ul>
            <li><strong>ON:</strong> All inference is performed exclusively on the CPU. This mode:
              <ul>
                <li>Disables GPU and NPU acceleration entirely</li>
                <li>Provides consistent behavior across different hardware configurations</li>
                <li>Is useful for debugging, testing, and development</li>
                <li>Ensures compatibility in environments without GPU/NPU support</li>
                <li>May result in slower inference compared to accelerated execution</li>
              </ul></li>
          </ul>

          <ul>
            <li><strong>OFF:</strong> The system can utilize available hardware acceleration (GPU, NPU) when appropriate and configured. This is the recommended mode for production use when hardware acceleration is available.</li>
          </ul>

          <h2 id="9-provider-specific-defaults">9. Provider-specific defaults</h2>

          <p>
            These settings define the preferred models to use when connecting to external AI providers (OpenAI, Anthropic, Google Gemini).
          </p>

          <h3 id="91-openai-default">9.1 OpenAI Default</h3>

          <p>
            <strong>Type:</strong> Dropdown (OpenAI model selection)
            <br />
            <strong>Default:</strong> gpt-4 (or latest available)
            <br />
            <strong>Prerequisite:</strong> Requires a valid OpenAI API key
          </p>

          <p>
            This setting defines the preferred OpenAI model to use when OpenAI is selected as the provider.
          </p>

          <p>
            The selected model will be used for:
          </p>

          <ul>
            <li>Tasks routed to OpenAI's API</li>
            <li>Workflows configured to use OpenAI models</li>
            <li>Fallback scenarios when local models are unavailable</li>
          </ul>

          <p>
            Common options include:
          </p>

          <ul>
            <li><strong>gpt-4:</strong> Highest capability model for complex reasoning</li>
            <li><strong>gpt-4-turbo:</strong> Faster variant with good performance</li>
            <li><strong>gpt-3.5-turbo:</strong> Cost-effective option for simpler tasks</li>
          </ul>

          <blockquote data-type="note">
            <p>A valid OpenAI API key must be configured in the Integrations section for this provider to function. Usage is subject to OpenAI's pricing and rate limits.</p>
          </blockquote>

          <h3 id="92-anthropic-default">9.2 Anthropic Default</h3>

          <p>
            <strong>Type:</strong> Dropdown (Anthropic model selection)
            <br />
            <strong>Default:</strong> claude-3 (or latest available)
            <br />
            <strong>Prerequisite:</strong> Requires a valid Anthropic API key
          </p>

          <p>
            This setting defines the preferred Anthropic model to use for bots, agents, and other workflows.
          </p>

          <p>
            The selected model will be used for:
          </p>

          <ul>
            <li>Tasks routed to Anthropic's API</li>
            <li>Agent workflows configured to use Anthropic models</li>
            <li>Complex reasoning and analysis tasks</li>
          </ul>

          <p>
            Common options include:
          </p>

          <ul>
            <li><strong>claude-3-opus:</strong> Highest capability for complex tasks</li>
            <li><strong>claude-3-sonnet:</strong> Balanced performance and cost</li>
            <li><strong>claude-3-haiku:</strong> Fast, cost-effective option</li>
          </ul>

          <blockquote data-type="note">
            <p>A valid Anthropic API key must be configured in the Integrations section for this provider to function. Usage is subject to Anthropic's pricing and rate limits.</p>
          </blockquote>

          <h3 id="93-gemini-default">9.3 Gemini Default</h3>

          <p>
            <strong>Type:</strong> Dropdown (Google Gemini model selection)
            <br />
            <strong>Default:</strong> gemini-pro (or latest available)
            <br />
            <strong>Prerequisite:</strong> Requires a valid Google API key
          </p>

          <p>
            This setting defines the preferred Google Gemini model to use when Google is selected as the provider.
          </p>

          <p>
            The selected model will be used for:
          </p>

          <ul>
            <li>Tasks routed to Google's Gemini API</li>
            <li>Workflows configured to use Gemini models</li>
            <li>Multimodal tasks requiring vision and language capabilities</li>
          </ul>

          <p>
            Common options include:
          </p>

          <ul>
            <li><strong>gemini-pro:</strong> General-purpose model for text tasks</li>
            <li><strong>gemini-pro-vision:</strong> Multimodal model supporting images</li>
            <li><strong>gemini-ultra:</strong> Highest capability variant (when available)</li>
          </ul>

          <blockquote data-type="note">
            <p>A valid Google API key must be configured in the Integrations section for this provider to function. Usage is subject to Google's pricing and rate limits.</p>
          </blockquote>

          <h2 id="10-resource-limits">10. Resource limits</h2>

          <p>
            These settings control resource allocation for model storage and execution, helping manage disk space and memory usage.
          </p>

          <h3 id="101-max-model-size">10.1 Max Model Size</h3>

          <p>
            <strong>Type:</strong> Integer (GB or based on system memory)
            <br />
            <strong>Default:</strong> Auto-configured based on available RAM
          </p>

          <p>
            This setting defines the maximum size of models that can be loaded into memory for inference.
          </p>

          <ul>
            <li><strong>Auto mode:</strong> The system automatically calculates the maximum model size based on available system memory, ensuring that models can be loaded without exceeding memory constraints.</li>
          </ul>

          <ul>
            <li><strong>Manual configuration:</strong> Advanced users can set a specific limit to:
              <ul>
                <li>Prevent models from consuming too much memory</li>
                <li>Reserve memory for other applications</li>
                <li>Test behavior with constrained resources</li>
                <li>Align with specific deployment requirements</li>
              </ul></li>
          </ul>

          <blockquote data-type="important">
            <p>Setting this value too low may prevent larger models from loading. Setting it too high may cause out-of-memory errors or system instability. Manual adjustment is rarely needed unless specific constraints exist.</p>
          </blockquote>

          <p>
            Considerations:
          </p>

          <ul>
            <li>Models require additional memory beyond their file size for inference</li>
            <li>Leave headroom for system operations and other applications</li>
            <li>Consider peak memory usage during inference, not just model loading</li>
          </ul>

          <h3 id="102-max-model-local-cache-size">10.2 Max Model Local Cache Size</h3>

          <p>
            <strong>Type:</strong> Integer (GB or based on available storage)
            <br />
            <strong>Default:</strong> Auto-configured based on available disk space
          </p>

          <p>
            This setting defines the maximum disk space allocated for storing cached (downloaded) models locally.
          </p>

          <p>
            When the cache limit is reached:
          </p>

          <ul>
            <li>Older or less frequently used models may be automatically removed</li>
            <li>New model downloads may require manual cleanup of existing cache</li>
            <li>The system may prompt users to manage storage</li>
          </ul>

          <p>
            Setting an appropriate cache size helps:
          </p>

          <ul>
            <li>Control disk space consumption</li>
            <li>Prevent runaway storage usage</li>
            <li>Maintain a manageable collection of local models</li>
            <li>Balance model availability with storage constraints</li>
          </ul>

          <blockquote data-type="tip">
            <p>Regularly review cached models using the <strong>My Models</strong> and <strong>Info</strong> functions in the Models interface to identify models that can be removed to free up space.</p>
          </blockquote>

          <h2 id="conclusion">Conclusion</h2>

          <p>
            The Model Configuration panel serves as the foundation of Model HQ's model orchestration system. By centralizing control over model selection, execution behavior, and resource usage, it ensures predictable performance, efficient hardware utilization, and seamless task execution across the platform.
          </p>

          <p>
            These defaults act as both safeguards and accelerators, reducing friction for typical workflows while enabling advanced multi-model capabilities for sophisticated use cases. Regular review and adjustment of these settings based on usage patterns and resource constraints will help maintain optimal system performance over time.
          </p>

          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-400">
              For further assistance or to share feedback, please contact us at{' '}
              <a href="mailto:support@aibloks.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                support@aibloks.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </DocPageLayout>
  )
}
