import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { 
  Zap, 
  Cpu, 
  Shield, 
  Users, 
  CheckCircle, 
  Download, 
  MessageSquare, 
  Search, 
  Bot, 
  FileText, 
  ExternalLink,
  Mail,
  ArrowRight
} from 'lucide-react'

export default function AboutModelHQPage() {
  return (
    <div className='container max-w-5xl mx-auto px-4 py-6 space-y-12'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/start-here/about-model-hq'>Start Here</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>About Model HQ</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className='space-y-4'>
        <h1 className='text-3xl md:text-4xl font-bold tracking-tight'>Model HQ Overview</h1>
        <p className='text-lg text-muted-foreground max-w-3xl'>
          Enterprise-grade local AI platform for privacy-first document intelligence
        </p>
      </div>

      <section className='space-y-4'>
        <h2 className='text-2xl font-bold'>What is Model HQ?</h2>
        <p className='text-muted-foreground leading-relaxed'>
          <strong className='text-foreground'>Model HQ</strong> is a production-ready platform for deploying 
          large language models (LLMs) locally on personal computers and edge devices. It eliminates the 
          need for cloud dependencies while delivering powerful AI capabilities for document analysis, 
          RAG (Retrieval-Augmented Generation), custom chatbots, and AI agents. Model HQ is optimized 
          for Intel and Qualcomm AI PCs, offering up to 30x faster inference on supported hardware.
        </p>
      </section>

      <Separator />

      <section className='space-y-6'>
        <h2 className='text-2xl font-bold'>Key Features</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div className='flex items-start gap-4'>
            <div className='p-2 rounded-lg bg-primary/10'>
              <Zap className='h-6 w-6 text-primary' />
            </div>
            <div className='space-y-1'>
              <h3 className='font-semibold'>Lightning-Fast Inference</h3>
              <p className='text-sm text-muted-foreground'>
                Optimized for Intel and Qualcomm AI PCs. Download and run models in seconds.
              </p>
            </div>
          </div>

          <div className='flex items-start gap-4'>
            <div className='p-2 rounded-lg bg-primary/10'>
              <Cpu className='h-6 w-6 text-primary' />
            </div>
            <div className='space-y-1'>
              <h3 className='font-semibold'>No-Code Interface</h3>
              <p className='text-sm text-muted-foreground'>
                Build RAG chatbots, AI agents, and workflows without programming.
              </p>
            </div>
          </div>

          <div className='flex items-start gap-4'>
            <div className='p-2 rounded-lg bg-primary/10'>
              <Shield className='h-6 w-6 text-primary' />
            </div>
            <div className='space-y-1'>
              <h3 className='font-semibold'>100% Private & Secure</h3>
              <p className='text-sm text-muted-foreground'>
                Models run completely offline. No data leaves your device.
              </p>
            </div>
          </div>

          <div className='flex items-start gap-4'>
            <div className='p-2 rounded-lg bg-primary/10'>
              <Users className='h-6 w-6 text-primary' />
            </div>
            <div className='space-y-1'>
              <h3 className='font-semibold'>Enterprise Control</h3>
              <p className='text-sm text-muted-foreground'>
                Monitor and update models across thousands of endpoints.
              </p>
            </div>
          </div>

          <div className='flex items-start gap-4'>
            <div className='p-2 rounded-lg bg-primary/10'>
              <CheckCircle className='h-6 w-6 text-primary' />
            </div>
            <div className='space-y-1'>
              <h3 className='font-semibold'>Built-in Safety Tools</h3>
              <p className='text-sm text-muted-foreground'>
                PII filtering, toxicity monitoring, and hallucination detection.
              </p>
            </div>
          </div>

          <div className='flex items-start gap-4'>
            <div className='p-2 rounded-lg bg-primary/10'>
              <Download className='h-6 w-6 text-primary' />
            </div>
            <div className='space-y-1'>
              <h3 className='font-semibold'>Seamless Deployment</h3>
              <p className='text-sm text-muted-foreground'>
                Push AI workflows to end-user PCs with lightweight client app.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section className='space-y-6'>
        <h2 className='text-2xl font-bold'>Performance at a Glance</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4'>
          <div className='text-center space-y-2'>
            <p className='text-3xl font-bold text-primary'>10s</p>
            <p className='text-xs text-muted-foreground'>Average download</p>
          </div>
          <div className='text-center space-y-2'>
            <p className='text-3xl font-bold text-primary'>&lt;30min</p>
            <p className='text-xs text-muted-foreground'>24 AI models</p>
          </div>
          <div className='text-center space-y-2'>
            <p className='text-3xl font-bold text-primary'>100+</p>
            <p className='text-xs text-muted-foreground'>Optimized models</p>
          </div>
          <div className='text-center space-y-2'>
            <p className='text-3xl font-bold text-primary'>22B</p>
            <p className='text-xs text-muted-foreground'>Max parameters</p>
          </div>
          <div className='text-center space-y-2'>
            <p className='text-3xl font-bold text-primary'>$0</p>
            <p className='text-xs text-muted-foreground'>Per-token cost</p>
          </div>
          <div className='text-center space-y-2'>
            <p className='text-3xl font-bold text-primary'>30x</p>
            <p className='text-xs text-muted-foreground'>Faster on AI PCs</p>
          </div>
        </div>
      </section>

      <Separator />

      <section className='space-y-6'>
        <h2 className='text-2xl font-bold'>Main Capabilities</h2>
        <div className='space-y-3'>
          <div className='flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors'>
            <MessageSquare className='h-5 w-5 text-primary mt-1 flex-shrink-0' />
            <div className='flex-1 space-y-1'>
              <h3 className='font-semibold'>Chat Interface</h3>
              <p className='text-sm text-muted-foreground'>
                Interactive conversations with AI models for Q&A, brainstorming, and general assistance.
              </p>
              <a href='/v0/chat' className='text-sm text-primary hover:underline inline-flex items-center gap-1'>
                Learn more <ArrowRight className='h-3 w-3' />
              </a>
            </div>
          </div>

          <div className='flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors'>
            <Search className='h-5 w-5 text-primary mt-1 flex-shrink-0' />
            <div className='flex-1 space-y-1'>
              <h3 className='font-semibold'>RAG (Retrieval-Augmented Generation)</h3>
              <p className='text-sm text-muted-foreground'>
                Upload documents and chat with your data. Perfect for document analysis and research.
              </p>
              <a href='/v0/rag' className='text-sm text-primary hover:underline inline-flex items-center gap-1'>
                Learn more <ArrowRight className='h-3 w-3' />
              </a>
            </div>
          </div>

          <div className='flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors'>
            <Bot className='h-5 w-5 text-primary mt-1 flex-shrink-0' />
            <div className='flex-1 space-y-1'>
              <h3 className='font-semibold'>AI Agents</h3>
              <p className='text-sm text-muted-foreground'>
                Create custom AI agents for automated document processing workflows.
              </p>
              <a href='/v0/agent' className='text-sm text-primary hover:underline inline-flex items-center gap-1'>
                Learn more <ArrowRight className='h-3 w-3' />
              </a>
            </div>
          </div>

          <div className='flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors'>
            <MessageSquare className='h-5 w-5 text-primary mt-1 flex-shrink-0' />
            <div className='flex-1 space-y-1'>
              <h3 className='font-semibold'>Custom Bots</h3>
              <p className='text-sm text-muted-foreground'>
                Design personalized chatbots with custom personalities and RAG sources.
              </p>
              <a href='/v0/bots' className='text-sm text-primary hover:underline inline-flex items-center gap-1'>
                Learn more <ArrowRight className='h-3 w-3' />
              </a>
            </div>
          </div>

          <div className='flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors'>
            <FileText className='h-5 w-5 text-primary mt-1 flex-shrink-0' />
            <div className='flex-1 space-y-1'>
              <h3 className='font-semibold'>Model Testing & Evaluation</h3>
              <p className='text-sm text-muted-foreground'>
                Test model performance before deployment with comprehensive testing options.
              </p>
              <a href='/v0/testing-models' className='text-sm text-primary hover:underline inline-flex items-center gap-1'>
                Learn more <ArrowRight className='h-3 w-3' />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section className='space-y-6'>
        <h2 className='text-2xl font-bold'>Why Choose Model HQ?</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex items-start gap-3'>
            <CheckCircle className='h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0' />
            <div>
              <h3 className='font-semibold mb-1'>Privacy First</h3>
              <p className='text-sm text-muted-foreground'>
                Your data never leaves your device. Complete control over sensitive information.
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <CheckCircle className='h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0' />
            <div>
              <h3 className='font-semibold mb-1'>Easy to Use</h3>
              <p className='text-sm text-muted-foreground'>
                Intuitive no-code interface. Create AI workflows in minutes, not days.
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <CheckCircle className='h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0' />
            <div>
              <h3 className='font-semibold mb-1'>Cost-Effective</h3>
              <p className='text-sm text-muted-foreground'>
                Run AI models locally without API costs. Pay once, use unlimited.
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <CheckCircle className='h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0' />
            <div>
              <h3 className='font-semibold mb-1'>Hardware Optimized</h3>
              <p className='text-sm text-muted-foreground'>
                Up to 30x faster inference on Intel and Qualcomm AI PCs.
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <CheckCircle className='h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0' />
            <div>
              <h3 className='font-semibold mb-1'>Developer-Friendly</h3>
              <p className='text-sm text-muted-foreground'>
                SDK available for programmatic access and custom applications.
              </p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <CheckCircle className='h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0' />
            <div>
              <h3 className='font-semibold mb-1'>Enterprise Ready</h3>
              <p className='text-sm text-muted-foreground'>
                Deploy across thousands of endpoints with centralized management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section className='space-y-6'>
        <h2 className='text-2xl font-bold'>Use Cases</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='p-4 rounded-lg border hover:border-primary/50 transition-colors'>
            <h3 className='font-semibold mb-2'>Document Analysis</h3>
            <p className='text-sm text-muted-foreground'>
              Extract information from PDFs, contracts, and research papers with AI-powered analysis.
            </p>
          </div>

          <div className='p-4 rounded-lg border hover:border-primary/50 transition-colors'>
            <h3 className='font-semibold mb-2'>Customer Support</h3>
            <p className='text-sm text-muted-foreground'>
              Build AI assistants for helpdesks with domain-specific knowledge.
            </p>
          </div>

          <div className='p-4 rounded-lg border hover:border-primary/50 transition-colors'>
            <h3 className='font-semibold mb-2'>Research & Education</h3>
            <p className='text-sm text-muted-foreground'>
              Analyze papers, generate summaries, and create study materials.
            </p>
          </div>

          <div className='p-4 rounded-lg border hover:border-primary/50 transition-colors'>
            <h3 className='font-semibold mb-2'>Content Creation</h3>
            <p className='text-sm text-muted-foreground'>
              Draft emails, articles, marketing copy, and documentation with AI.
            </p>
          </div>

          <div className='p-4 rounded-lg border hover:border-primary/50 transition-colors'>
            <h3 className='font-semibold mb-2'>Data Privacy & Compliance</h3>
            <p className='text-sm text-muted-foreground'>
              Process sensitive documents without cloud exposure—perfect for regulated industries.
            </p>
          </div>

          <div className='p-4 rounded-lg border hover:border-primary/50 transition-colors'>
            <h3 className='font-semibold mb-2'>Enterprise Workflows</h3>
            <p className='text-sm text-muted-foreground'>
              Automate document processing, data extraction, and report generation.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      <section className='space-y-6'>
        <div>
          <h2 className='text-2xl md:text-3xl font-bold mb-2'>Getting Started</h2>
          <p className='text-muted-foreground'>Model HQ offers three setup options</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='p-4 rounded-lg border space-y-2'>
            <Badge variant='secondary'>Option 1</Badge>
            <h3 className='font-semibold'>Full Setup</h3>
            <p className='text-sm text-muted-foreground'>
              Complete installation with all features and development tools.
            </p>
          </div>

          <div className='p-4 rounded-lg border space-y-2'>
            <Badge variant='secondary'>Option 2</Badge>
            <h3 className='font-semibold'>Fast Setup</h3>
            <p className='text-sm text-muted-foreground'>
              Quick start with essential components—get running in minutes.
            </p>
          </div>

          <div className='p-4 rounded-lg border space-y-2'>
            <Badge variant='secondary'>Option 3</Badge>
            <h3 className='font-semibold'>No Setup (Portable)</h3>
            <p className='text-sm text-muted-foreground'>
              Run directly without installation—perfect for testing.
            </p>
          </div>
        </div>
        <a 
          href='/start-here/getting-started' 
          className='inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium'
        >
          Learn more about setup options <ArrowRight className='h-4 w-4' />
        </a>
      </section>

      <Separator />

      <section className='space-y-6'>
        <h2 className='text-2xl md:text-3xl font-bold'>Supported Devices & Hardware</h2>
        
        <div className='space-y-4'>
          <div>
            <h3 className='font-semibold mb-3 flex items-center gap-2'>
              <Cpu className='h-5 w-5 text-primary' />
              Intel AI PCs (Recommended)
            </h3>
            <ul className='space-y-2 ml-7 text-sm text-muted-foreground'>
              <li>• Arrow Lake, Meteor Lake, Lunar Lake processors</li>
              <li>• Most Intel laptops/PCs less than 5 years old</li>
              <li>• Intel Xeon processors for enterprise servers</li>
              <li>• OpenVINO runtime optimization</li>
            </ul>
            <a 
              href='/supported-models/intel' 
              className='inline-flex items-center gap-1 text-sm text-primary hover:underline mt-3 ml-7'
            >
              View Intel supported models <ArrowRight className='h-3 w-3' />
            </a>
          </div>

          <div className='my-4'>
            <Separator />
          </div>

          <div>
            <h3 className='font-semibold mb-3 flex items-center gap-2'>
              <Cpu className='h-5 w-5 text-primary' />
              Qualcomm Snapdragon AI PCs
            </h3>
            <ul className='space-y-2 ml-7 text-sm text-muted-foreground'>
              <li>• Snapdragon X series with NPU acceleration</li>
              <li>• QNN (Qualcomm Neural Network) runtime</li>
              <li>• CPU + NPU hybrid execution</li>
            </ul>
            <a 
              href='/supported-models/qualcomm' 
              className='inline-flex items-center gap-1 text-sm text-primary hover:underline mt-3 ml-7'
            >
              View Qualcomm supported models <ArrowRight className='h-3 w-3' />
            </a>
          </div>

          <div className='my-4'>
            <Separator />
          </div>

          <div>
            <h3 className='font-semibold mb-3'>System Requirements</h3>
            <ul className='space-y-2 ml-7 text-sm text-muted-foreground'>
              <li>• <strong>Minimum:</strong> 16 GB RAM</li>
              <li>• <strong>Recommended:</strong> 32 GB RAM for larger models</li>
              <li>• <strong>Storage:</strong> SSD recommended for faster loading</li>
            </ul>
            <a 
              href='/start-here/system-configuration' 
              className='inline-flex items-center gap-1 text-sm text-primary hover:underline mt-3 ml-7'
            >
              View full requirements <ArrowRight className='h-3 w-3' />
            </a>
          </div>
        </div>
      </section>

      <Separator />

      <section className='space-y-6'>
        <h2 className='text-2xl md:text-3xl font-bold'>Technology Stack</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <h3 className='font-semibold mb-2'>Backend</h3>
            <p className='text-sm text-muted-foreground'>Python-based inference server with FastAPI</p>
          </div>

          <div>
            <h3 className='font-semibold mb-2'>Model Support</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• GGUF format (primary)</li>
              <li>• HuggingFace models</li>
              <li>• OpenAI/Anthropic API integration</li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold mb-2'>Hardware Acceleration</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Intel OpenVINO runtime</li>
              <li>• Qualcomm QNN runtime</li>
              <li>• CPU/GPU/NPU support</li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold mb-2'>RAG Pipeline</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Built-in document parsing</li>
              <li>• Vector search with embeddings</li>
              <li>• Context-aware retrieval</li>
            </ul>
          </div>
        </div>

        <a 
          href='/v0/getting-started-with-model-hq-sdk' 
          className='inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium'
        >
          Explore Model HQ SDK <ArrowRight className='h-4 w-4' />
        </a>
      </section>

      <Separator />

      <section className='space-y-6'>
        <h2 className='text-2xl md:text-3xl font-bold'>Components</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='p-4 rounded-lg border space-y-2'>
            <Badge>Developer Kit</Badge>
            <p className='text-sm text-muted-foreground'>
              No-code environment to create AI apps, agents, and RAG chatbots.
            </p>
          </div>

          <div className='p-4 rounded-lg border space-y-2'>
            <Badge>User Client App</Badge>
            <p className='text-sm text-muted-foreground'>
              Lightweight app (less than 100 MB) to run models locally.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      <section className='space-y-6'>
        <h2 className='text-2xl md:text-3xl font-bold'>License & Availability</h2>
        <p className='text-muted-foreground'>Model HQ is available for:</p>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
          <div className='flex items-center gap-2'>
            <CheckCircle className='h-4 w-4 text-green-600 dark:text-green-400' />
            <span className='text-sm'>Individual developers</span>
          </div>
          <div className='flex items-center gap-2'>
            <CheckCircle className='h-4 w-4 text-green-600 dark:text-green-400' />
            <span className='text-sm'>Small teams</span>
          </div>
          <div className='flex items-center gap-2'>
            <CheckCircle className='h-4 w-4 text-green-600 dark:text-green-400' />
            <span className='text-sm'>Enterprise organizations</span>
          </div>
          <div className='flex items-center gap-2'>
            <CheckCircle className='h-4 w-4 text-green-600 dark:text-green-400' />
            <span className='text-sm'>Educational institutions</span>
          </div>
        </div>

        <div className='bg-primary/10 dark:bg-primary/20 p-6 rounded-lg border border-primary/30'>
          <h3 className='font-semibold mb-2'>Try Model HQ Free</h3>
          <p className='text-sm text-muted-foreground mb-4'>
            90-day free trial
          </p>
          <a 
            href='https://llmware-modelhq.checkoutpage.com/model-hq-app-90-days-free-trial'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium'
          >
            Get the Trial <ExternalLink className='h-4 w-4' />
          </a>
          <p className='text-xs text-muted-foreground mt-3'>
            <a href='/support' className='hover:underline'>Request Free Trial Promo Code</a> • 
            Terms and conditions apply • 
            <a href='/license' className='hover:underline'>View License</a>
          </p>
        </div>
      </section>

      <Separator />

      <section className='space-y-6'>
        <h2 className='text-2xl md:text-3xl font-bold'>Important Links</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
          <a 
            href='https://llmware.ai' 
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors'
          >
            <ExternalLink className='h-5 w-5 text-primary' />
            <span className='font-medium'>Official Website</span>
          </a>
          <a 
            href='https://github.com/llmware-ai/llmware' 
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors'
          >
            <ExternalLink className='h-5 w-5 text-primary' />
            <span className='font-medium'>GitHub Repository</span>
          </a>
          <a 
            href='https://www.youtube.com/@llmware/playlists' 
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors'
          >
            <ExternalLink className='h-5 w-5 text-primary' />
            <span className='font-medium'>YouTube Channel</span>
          </a>
          <a 
            href='https://discord.gg/quUZHRCV8n' 
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors'
          >
            <ExternalLink className='h-5 w-5 text-primary' />
            <span className='font-medium'>Discord Community</span>
          </a>
        </div>
      </section>

      <Separator />

      <section className='space-y-6'>
        <div>
          <h2 className='text-2xl md:text-3xl font-bold mb-2'>Support & Contact</h2>
          <p className='text-muted-foreground'>Need help? Our team is here to guide you</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
          <a 
            href='mailto:support@aibloks.com'
            className='flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors'
          >
            <Mail className='h-5 w-5 text-primary' />
            <div>
              <p className='text-sm font-medium'>General Support</p>
              <p className='text-xs text-muted-foreground'>support@aibloks.com</p>
            </div>
          </a>
          <a 
            href='mailto:rsharma@aibloks.com'
            className='flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors'
          >
            <Mail className='h-5 w-5 text-primary' />
            <div>
              <p className='text-sm font-medium'>Developer Relations</p>
              <p className='text-xs text-muted-foreground'>rsharma@aibloks.com</p>
            </div>
          </a>
          <a 
            href='/support'
            className='flex items-center gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors'
          >
            <ExternalLink className='h-5 w-5 text-primary' />
            <div>
              <p className='text-sm font-medium'>Documentation Support</p>
              <p className='text-xs text-muted-foreground'>Visit Support Page</p>
            </div>
          </a>
        </div>
      </section>

      <Separator />

      <section className='space-y-4'>
        <h2 className='text-2xl md:text-3xl font-bold'>Company Information</h2>
        <p className='text-muted-foreground leading-relaxed'>
          Model HQ is built on <a 
            href='https://llmware.ai' 
            target='_blank' 
            rel='noopener noreferrer'
            className='text-primary hover:underline font-medium'
          >
            LLMware
          </a>, an open-source framework for enterprise LLM applications. The platform democratizes 
          AI access while maintaining enterprise-grade security and performance standards.
        </p>
      </section>

      <Separator />

      <section className='bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 rounded-lg text-center space-y-6'>
        <h2 className='text-3xl font-bold'>Ready to get started?</h2>
        <div className='flex flex-wrap justify-center gap-4'>
          <a 
            href='https://llmware.ai/enterprise#developers-waitlist'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium'
          >
            Download Model HQ <ExternalLink className='h-4 w-4' />
          </a>
          <a 
            href='/start-here/getting-started'
            className='inline-flex items-center gap-2 px-6 py-3 border rounded-lg hover:bg-muted/50 transition-colors font-medium'
          >
            Read Documentation
          </a>
          <a 
            href='/resources/video-tutorials'
            className='inline-flex items-center gap-2 px-6 py-3 border rounded-lg hover:bg-muted/50 transition-colors font-medium'
          >
            Watch Tutorials
          </a>
        </div>
      </section>
    </div>
  )
}
