import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PageFrame, FrameSection } from '@/components/page-frame'

const features = [
  { title: 'Lightning-Fast Inference', description: 'Optimized for Intel and Qualcomm AI PCs. Download and run models in seconds.' },
  { title: 'No-Code Interface', description: 'Build RAG chatbots, AI agents, and workflows without programming.' },
  { title: '100% Private & Secure', description: 'Models run completely offline. No data leaves your device.' },
  { title: 'Enterprise Control', description: 'Monitor and update models across thousands of endpoints.' },
  { title: 'Built-in Safety Tools', description: 'PII filtering, toxicity monitoring, and hallucination detection.' },
  { title: 'Seamless Deployment', description: 'Push AI workflows to end-user PCs with a lightweight client app.' },
]

const stats = [
  { value: '30s', label: 'Average download' },
  { value: '<30min', label: '24 AI models' },
  { value: '250+', label: 'Optimized models' },
  { value: '32B', label: 'Max parameters' },
  { value: '$0', label: 'Per-token cost' },
  { value: 'up to 30x', label: 'Faster on AI PCs' },
]

const capabilities = [
  { title: 'Chat Interface', description: 'Interactive conversations with AI models for Q&A, brainstorming, and general assistance.', href: '/v0/chat' },
  { title: 'RAG (Retrieval-Augmented Generation)', description: 'Upload documents and chat with your data. Perfect for document analysis and research.', href: '/v0/rag' },
  { title: 'AI Agents', description: 'Create custom AI agents for automated document processing workflows.', href: '/v0/agent' },
  { title: 'Custom Bots', description: 'Design personalized chatbots with custom personalities and RAG sources.', href: '/v0/bots' },
  { title: 'Model Testing & Evaluation', description: 'Test model performance before deployment with comprehensive testing options.', href: '/v0/testing-models' },
]

const whyChoose = [
  { title: 'Privacy First', description: 'Your data never leaves your device. Complete control over sensitive information.' },
  { title: 'Easy to Use', description: 'Intuitive no-code interface. Create AI workflows in minutes, not days.' },
  { title: 'Cost-Effective', description: 'Run AI models locally without API costs. Pay once, use unlimited.' },
  { title: 'Hardware Optimized', description: 'Up to 30x faster inference on Intel and Qualcomm AI PCs.' },
  { title: 'Developer-Friendly', description: 'SDK available for programmatic access and custom applications.' },
  { title: 'Enterprise Ready', description: 'Deploy across thousands of endpoints with centralized management.' },
]

const useCases = [
  { title: 'Document Analysis', description: 'Extract information from PDFs, contracts, and research papers with AI-powered analysis.' },
  { title: 'Customer Support', description: 'Build AI assistants for helpdesks with domain-specific knowledge.' },
  { title: 'Research & Education', description: 'Analyze papers, generate summaries, and create study materials.' },
  { title: 'Content Creation', description: 'Draft emails, articles, marketing copy, and documentation with AI.' },
  { title: 'Data Privacy & Compliance', description: 'Process sensitive documents without cloud exposure — perfect for regulated industries.' },
  { title: 'Enterprise Workflows', description: 'Automate document processing, data extraction, and report generation.' },
]

const setupOptions = [
  { label: 'Option 1', title: 'Full Setup', description: 'Complete installation with all features and development tools.' },
  { label: 'Option 2', title: 'Fast Setup', description: 'Quick start with essential components — get running in minutes.' },
  { label: 'Option 3', title: 'No Setup (Portable)', description: 'Run directly without installation — perfect for testing.' },
]

const hardware = [
  { name: 'AMD AI PCs', items: ['AMD model support coming soon'], href: '/supported-models/amd' },
  { name: 'Apple Silicon Devices', items: ['Apple M1, M2, M3, and M4 series processors', 'Apple Neural Engine (ANE) acceleration', 'Metal Performance Shaders integration'], href: '/supported-models/apple' },
  { name: 'Intel AI PCs (Recommended)', items: ['Arrow Lake, Meteor Lake, Lunar Lake processors', 'Most Intel laptops/PCs less than 5 years old', 'Intel Xeon processors for enterprise servers', 'OpenVINO runtime optimization'], href: '/supported-models/intel' },
  { name: 'NVIDIA GPUs', items: ['NVIDIA GPU support coming soon'], href: '/supported-models/nvidia' },
  { name: 'Qualcomm Snapdragon AI PCs', items: ['Snapdragon X series with NPU acceleration', 'QNN (Qualcomm Neural Network) runtime', 'CPU + NPU hybrid execution'], href: '/supported-models/qualcomm' },
]

const importantLinks = [
  { label: 'Official Website', href: 'https://llmware.ai' },
  { label: 'GitHub Repository', href: 'https://github.com/llmware-ai/llmware' },
  { label: 'YouTube Channel', href: 'https://www.youtube.com/@llmware/playlists' },
  { label: 'Discord Community', href: 'https://discord.gg/quUZHRCV8n' },
]

export default function AboutModelHQPage() {
  return (
    <PageFrame>
      <FrameSection>
        <div className="px-6 py-16 md:py-20">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/start-here/about-model-hq">Start Here</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>About Model HQ</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <span className="mt-8 block font-mono text-xs uppercase tracking-widest text-brand">Start here</span>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">Model HQ Overview</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            <strong className="text-foreground">Model HQ</strong> is a production-ready platform for
            deploying large language models locally on personal computers and edge devices — private,
            offline, and optimized for Intel and Qualcomm AI PCs with up to 30x faster inference.
          </p>

          <div className="mt-10 aspect-video w-full overflow-hidden border border-border bg-black">
            <iframe
              src="https://www.youtube.com/embed/vLwCyqcXlpI?rel=0&autoplay=1&mute=1&playsinline=1"
              title="Model HQ Overview"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </FrameSection>

      <FrameSection>
        <div className="px-6 pt-16 md:pt-20">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">Features</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">Key features</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-px border-t border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={feature.title} className="bg-background p-8">
              <span className="font-mono text-sm text-brand">{String(index + 1).padStart(2, '0')}</span>
              <div className="mt-4 h-px w-8 bg-brand/40" />
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </FrameSection>

      <FrameSection>
        <div className="px-6 pt-16 md:pt-20">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">By the numbers</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">Performance at a glance</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-px border-t border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background px-6 py-10 text-center">
              <div className="text-3xl font-semibold tracking-tight">{stat.value}</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </FrameSection>

      <FrameSection>
        <div className="px-6 pt-16 md:pt-20">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">Capabilities</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">Main capabilities</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-px border-t border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <a key={cap.title} href={cap.href} className="group flex flex-col bg-background p-8 transition-colors hover:bg-muted/30">
              <h3 className="text-lg font-semibold tracking-tight">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cap.description}</p>
              <span className="mt-auto inline-flex items-center pt-6 text-sm font-medium text-brand">
                Learn more
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </FrameSection>

      <FrameSection>
        <div className="px-6 pt-16 md:pt-20">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">Why Model HQ</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">Why choose Model HQ?</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-px border-t border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item, index) => (
            <div key={item.title} className="bg-background p-8">
              <span className="font-mono text-sm text-brand">{String(index + 1).padStart(2, '0')}</span>
              <div className="mt-4 h-px w-8 bg-brand/40" />
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </FrameSection>

      <FrameSection>
        <div className="px-6 pt-16 md:pt-20">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">Use cases</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">What you can build</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-px border-t border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item) => (
            <div key={item.title} className="bg-background p-8">
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </FrameSection>

      <FrameSection>
        <div className="px-6 pt-16 md:pt-20">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">Get started</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">Three setup options</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-px border-t border-border bg-border md:grid-cols-3">
          {setupOptions.map((opt) => (
            <div key={opt.title} className="bg-background p-8">
              <span className="font-mono text-xs uppercase tracking-widest text-brand">{opt.label}</span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{opt.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{opt.description}</p>
            </div>
          ))}
        </div>
        <div className="px-6 py-8">
          <a href="/start-here/getting-started" className="group inline-flex items-center text-sm font-medium text-brand">
            Learn more about setup options
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </FrameSection>

      <FrameSection>
        <div className="px-6 pt-16 md:pt-20">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">Hardware</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">Supported devices &amp; hardware</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Minimum 16 GB RAM, 32 GB recommended for larger models. SSD recommended for faster loading.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-px border-t border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {hardware.map((hw) => (
            <a key={hw.name} href={hw.href} className="group flex flex-col bg-background p-8 transition-colors hover:bg-muted/30">
              <h3 className="text-lg font-semibold tracking-tight">{hw.name}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {hw.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
              <span className="mt-auto inline-flex items-center pt-6 text-sm font-medium text-brand">
                View supported models
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </FrameSection>

      <FrameSection>
        <div className="px-6 py-16 md:py-20">
          <div className="border border-border bg-muted/30 p-8 md:p-12">
            <span className="font-mono text-xs uppercase tracking-widest text-brand">Free trial</span>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Try Model HQ free</h2>
            <p className="mt-2 text-muted-foreground">90-day free trial. Terms and conditions apply.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://llmware-modelhq.checkoutpage.com/model-hq-app-90-days-free-trial"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 items-center justify-center bg-brand px-6 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90"
              >
                Get the trial
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="/support" className="inline-flex h-11 items-center justify-center border border-border px-6 text-sm font-medium transition-colors hover:bg-muted">
                Request promo code
              </a>
            </div>
          </div>
        </div>
      </FrameSection>

      <FrameSection last>
        <div className="px-6 pt-16 md:pt-20">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">Resources</span>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">Important links</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-px border-y border-border bg-border sm:grid-cols-2">
          {importantLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between bg-background p-8 transition-colors hover:bg-muted/30">
              <span className="font-medium">{link.label}</span>
              <ArrowUpRight className="h-4 w-4 text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>

        <div className="px-6 py-12 md:py-16">
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="https://llmware.ai/enterprise#developers-waitlist" target="_blank" rel="noopener noreferrer" className="group inline-flex h-11 items-center justify-center bg-brand px-6 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90">
              Download Model HQ
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="/start-here/getting-started" className="inline-flex h-11 items-center justify-center border border-border px-6 text-sm font-medium transition-colors hover:bg-muted">
              Read documentation
            </a>
            <a href="/resources/video-tutorials" className="inline-flex h-11 items-center justify-center border border-border px-6 text-sm font-medium transition-colors hover:bg-muted">
              Watch tutorials
            </a>
          </div>
        </div>
      </FrameSection>
    </PageFrame>
  )
}
