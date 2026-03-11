"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import {
  Camera,
  Database,
  MessageSquare,
  Search,
  Zap,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  FileText,
  Target,
  ImageIcon,
  Table,
  FileSearch,
  User,
  Send,
  ArrowRight,
  Eye,
  Building,
  Car,
  Heart,
  Home,
  Copy,
  Download,
  Mail,
  Wrench,
} from "lucide-react"
import { useState } from "react"

function CodeBlock({ children, title, language = "text" }: { children: string; title?: string; language?: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="relative w-full">
      {title && (
        <div className="bg-slate-800 dark:bg-slate-800 text-slate-200 dark:text-slate-200 px-4 py-2 text-sm font-medium rounded-t-lg border-b border-slate-700 dark:border-slate-700">
          {title}
        </div>
      )}
      <div className="relative bg-gray-100 dark:bg-slate-950 text-gray-900 dark:text-slate-100 p-4 rounded-b-lg group w-full">
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          title="Copy code"
        >
          {copied ? <CheckCircle className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-gray-600 dark:text-slate-400" />}
        </button>
        <pre className="text-sm whitespace-pre-wrap break-words w-full">
          <code className="break-words text-gray-900 dark:text-slate-100">{children}</code>
        </pre>
      </div>
    </div>
  )
}

export default function ACMarketingWorkflowPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 px-4 sm:px-6 lg:px-8 py-6 bg-white dark:bg-gray-950">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Cookbooks</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Photo to Email Automation</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-3">
          From Data Plate to Inbox: Turn a Single Photo into a Powerful Customer Email with Model HQ
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Transform field service into a sales engine with automated photo-to-email workflows
        </p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
        {/* Introduction Story */}
        <section>
          <div className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-950 dark:to-slate-900 rounded-lg p-6 border dark:border-gray-800">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">The Challenge</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-200">
                  <p>
                    It's a sweltering summer in the NYC area — home base for Model HQ — and like many, we recently ran
                    into an unexpected crisis: our AC unit gave out.
                  </p>
                  <p>No big deal, right? Just call in a tech for a quick fix.</p>
                  <p>
                    But here's the twist: ❌ the unit wasn't repairable. It was running on R22, a refrigerant banned in
                    the U.S. for years due to its environmental impact.
                  </p>
                  <p>
                    We were stunned — we'd been faithfully maintaining this system with regular servicing. Why didn't
                    anyone tell us sooner?
                  </p>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    That's when it clicked. This isn't just our problem — it's a nationwide issue affecting millions of
                    legacy AC units. So, we built a fix of what we would do if we had an AC company. 🔧
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">And it's not just for HVAC…</h2>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-950 dark:to-slate-900 rounded-lg p-6 border dark:border-gray-800">
            <p className="text-gray-800 dark:text-gray-200 mb-6">
              This "photo-to-email" workflow can be easily adapted across many industries and use cases:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <Building className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Manufacturing:</strong>
                    <span className="text-gray-700 dark:text-gray-200"> Serial number tracking and part recall notifications</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <Car className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Auto service:</strong>
                    <span className="text-gray-700 dark:text-gray-200"> VIN plate photos triggering service reminders</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <Heart className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Medical devices:</strong>
                    <span className="text-gray-700 dark:text-gray-200"> Compliance alerts based on equipment ID plates</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <Home className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Appliances & home systems:</strong>
                    <span className="text-gray-700 dark:text-gray-200"> Warranty, upgrade, or service eligibility detection</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
              <p className="text-lg font-medium text-gray-900 dark:text-gray-100">One image. One workflow. Endless automation.</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Snap. Analyze. Email.</h2>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-950 dark:to-slate-900 rounded-lg p-6 border dark:border-gray-800">
            <p className="text-gray-800 dark:text-gray-200 mb-4">With Model HQ, we built an automated agent workflow that takes:</p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700 dark:text-gray-200">
                  A single photo of an AC unit's side panel (a.k.a. the data plate)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <span className="text-gray-700 dark:text-gray-200">
                  Extracts the model number, and cross checks this against the serial, refrigerant type, year, and
                  manufacturer (this part is dummy data – insert your own relevant data here for other uses)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700 dark:text-gray-200">Cross-checks technical documents like the R22 phaseout guide</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700 dark:text-gray-200">Identifies at-risk units</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700 dark:text-gray-200">
                  And then crafts and sends a personalized customer service + marketing email
                </span>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 font-medium">—all in seconds.</p>
          </div>
        </section>

        {/* Why It Matters */}
        <section>
          <div className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-950 dark:to-slate-900 rounded-lg p-6 border dark:border-gray-800">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Why It Matters</h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-200">
                  <p>
                    This workflow doesn't just automate technician follow-ups. It creates instant, data-driven customer
                    engagement — and a seamless path to value-added services.
                  </p>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    📣 Free marketing ideas, anyone? Because this one just turned field service into a sales engine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Step-by-Step Process</h2>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex items-baseline gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Download the Image and Files you will Need to Run this Demo
                  </h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Download className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-800 dark:text-gray-200">
                            Download a clear photo of the AC unit sticker showing the model number (save the photo here
                            to follow along with this tutorial)
                            <div className="my-4 bg-blue-100 dark:bg-blue-900 p-4 rounded-lg mt-4">
                              <img
                                src="/cookbooks/v0/photo-to-email-automation/unitSticker.png"
                                alt="all process"
                                className="rounded-lg shadow-md border dark:border-gray-700 max-w-md w-full"
                              />
                            </div>
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Download className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-800 dark:text-gray-200">
                            Download the AC Manufacturer, Serial Number, Year of Manufacture and Freon type information
                            .CSV called <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">AC Unit Data</code> you will
                            need to create a look-up database (need to provide access to file)
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Download className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-800 dark:text-gray-200">
                            Download the R22 Technical Document the agent will reference for information.
                          </span>
                        </div>
                        <a
                          href="https://github.com/BloksAdmin/model-hq-docs/tree/main/public/cookbooks/v0/photo-to-email-automation"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 underline inline-flex items-center gap-1"
                        >
                          Find all the required images and documents here.
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex items-baseline gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Inputting the Correct Gmail Credentials</h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <p className="text-gray-800 dark:text-gray-200 mb-4">
                        Make sure that you have filled in the <strong>Sender Email Address</strong> and{" "}
                        <strong>Sender Email App Access Password</strong> (this is different than your normal password)
                        in Model HQ in:
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-gray-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-200">
                            <strong>Configs</strong> ⚙️ in the upper right hand corner then <strong>Credentials</strong>{" "}
                            then <strong>Sender Email Address (GMAIL)</strong> and{" "}
                            <strong>Sender Email Password (App Access)</strong>
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <p className="text-gray-800 dark:text-gray-200 mb-2">
                          If you don't have an App Access Password, you must enable 2-Factor Authentication for your
                          Gmail account, and click on "Create and manage your app passwords" under this website:
                        </p>
                        <a
                          href="https://support.google.com/mail/answer/185833?hl=en"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                        >
                          https://support.google.com/mail/answer/185833?hl=en
                          <ExternalLink className="h-3 w-3" />
                        </a>
                        <div className="my-4 p-4 rounded-lg mt-4">
                          <img
                            src="/cookbooks/v0/photo-to-email-automation/gmailCredentials.png"
                            alt="all process"
                            className="rounded-lg shadow-md border dark:border-gray-700 w-full"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex items-baseline gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Building the Agent, Starting with Specifying the Right File Input
                  </h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <p className="text-gray-800 dark:text-gray-200 mb-4">
                          Start Building a New Agent by going to{" "}
                          <strong>Agent &gt; Build New &gt; Start Building</strong> &gt; then name this new Agent{" "}
                          <strong>AC Marketing</strong>
                        </p>
                        <p className="text-gray-800 dark:text-gray-200 mb-4">
                          As with all Agent Process, start by specifying the File Inputs from the User. Here, we will
                          ask the AC Tech to input a photo of the Data Panel (the photo we downloaded above), and
                          provide the name and email address of the customer (the AC tech will manually enter this info
                          for this demo).
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-sm font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                              1
                            </span>
                            <span className="text-gray-800 dark:text-gray-200">Go to '+ Inputs'</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-sm font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                              2
                            </span>
                            <span className="text-gray-800 dark:text-gray-200">
                              Select for Input Type, <strong>Image File Input</strong> from the drop down menu, then add
                              a Description that will help the user understand what the input should be{" "}
                              <strong>"Insert photo of the AC Side Panel"</strong> then select ' &gt;'
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-sm font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                              3
                            </span>
                            <span className="text-gray-800 dark:text-gray-200">
                              Next select '+' to add another Input type –{" "}
                              <strong>'Text Input – standard 'chat-style' text box'</strong> and add a Description{" "}
                              <strong>"Input the Name and Email Address of customer"</strong>
                            </span>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-sm font-semibold text-gray-800 dark:text-gray-200 mt-0.5 flex-shrink-0">
                              4
                            </span>
                            <span className="text-gray-800 dark:text-gray-200">
                              Once you see both Input Types with blue check marks next to them, click{" "}
                              <strong>Save and Exit</strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex items-baseline gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Using the Vision Agent to auto-extract the model number from the panel image
                  </h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <div className="border-l-4 border-l-blue-500 pl-4">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                          <Eye className="h-4 w-4" />
                          Row 1:
                        </h4>
                        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                          <div>
                            From the Service Menu, select <strong>Vision</strong> to processes the image.
                          </div>
                          <div>
                            <strong>Enter in Instruction:</strong>{" "}
                            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">What is the model number?</code>
                          </div>
                          <div>
                            <strong>Choose for Context:</strong>{" "}
                            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">User Image</code>
                          </div>
                          <div className="mt-2 text-gray-600 dark:text-gray-200 italic">
                            Vision agent extracts the text and pulls the model number from the sticker image.
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="flex items-baseline gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Using an extract Agent to extract a clean model number
                  </h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <p className="text-gray-800 dark:text-gray-200 mb-4">
                        You may find that the Vision Model can be extra-chatty and volunteers too much information. This
                        is where an Extract Agent comes in handy to read through the chatty text the Vision Model
                        produces to get exactly the information we need to be able to automatically query our dataset
                        using our Text to SQL agent.
                      </p>
                      <div className="border-l-4 border-l-green-500 pl-4">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                          <Search className="h-4 w-4" />
                          Row 2:
                        </h4>
                        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                          <div>
                            From the Service Menu, Select <strong>Extract</strong> to get a clean model number without
                            any surrounding text
                          </div>
                          <div>
                            <strong>Enter in Instruction:</strong>{" "}
                            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">the model number</code>
                          </div>
                          <div>
                            <strong>Choose for Context:</strong>{" "}
                            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Vision_1</code> (We are asking the Extract
                            agent to pull the information gathered from the Vision agent in Step 1).
                          </div>
                          <div className="mt-2 text-gray-600 dark:text-gray-200 italic">
                            Extract agent pulls only the information needed to perform the SQL query
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="relative">
              <div className="flex items-baseline gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">
                    6
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Adding a Built-In Database to the Agent Workflow
                  </h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <p className="text-gray-800 dark:text-gray-200 mb-4">
                        This is where we build a table of the .CSV file for the query. Not only that, we will have this
                        .CSV file BUILT-IN to the process as a permanent source so that the user does not have to input
                        this source each time this process is run.
                      </p>
                      <div className="space-y-4">
                        <div className="border-l-4 border-l-purple-500 pl-4">
                          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                            <div>
                              To enable this built-in data-source feature, click on <strong>'+Files'</strong> at the
                              bottom of the screen.
                            </div>
                            <div>
                              Select <strong>'table'</strong> as the file type and find the .CSV file you downloaded at
                              Step 1 of this tutorial in the Choose file bar.
                            </div>
                            <div>Once the file is selected, click '+'</div>
                          </div>
                        </div>
                        <div className="border-l-4 border-l-red-500 pl-4">
                          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                            <div>
                              We will also use the R-22 Technical Information file as a permanent data source, so we
                              will add it in this step.
                            </div>
                            <div>
                              In File Type, select <strong>'document'</strong> (it is usually pre-selected as the first
                              option)
                            </div>
                            <div>
                              Then find the R-22 Technical document file you downloaded at Step 1 of this tutorial in
                              the Choose File bar.
                            </div>
                            <div>Once the file is selected, click '+'</div>
                          </div>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                          <p className="text-gray-800 dark:text-gray-200 text-sm">
                            <strong>Note:</strong> Once all relevant content files are selected (in our case, the .CSV
                            file with Manufacturer Name and the Document file with the R-22 Technical information),
                            Click <strong>'Save + Exit'</strong>. It is important to confirm your selection by clicking
                            'Save + Exit' at this step. Simply pressing the Home button may cause you to lose the files
                            you just uploaded.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 7 */}
            <div className="relative">
              <div className="flex items-baseline gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                    7
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Building a Table of AC Unit Data</h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <p className="text-gray-800 dark:text-gray-200 mb-4">
                        Now that we have specified the built-in databases for this workflow, let's start building our
                        database table.
                      </p>
                      <div className="border-l-4 border-l-indigo-500 pl-4">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                          <Database className="h-4 w-4" />
                          Row 3:
                        </h4>
                        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                          <div>
                            From the Services Menu, select <strong>'Build_Table'</strong> to automatically build a
                            queryable database table from the .CSV
                          </div>
                          <div>
                            <strong>Enter in Instruction:</strong>{" "}
                            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">ac_data</code>
                          </div>
                          <div>
                            <strong>Choose for Context:</strong>{" "}
                            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Updated_AC_Unit_Data</code>
                          </div>
                          <div className="mt-2 text-gray-600 dark:text-gray-200 italic">
                            This builds the table that we can now start to query in natural language
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 8 */}
            <div className="relative">
              <div className="flex items-baseline gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold">
                    8
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Query AC Unit Database</h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div className="border-l-4 border-l-orange-500 pl-4">
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                            <Database className="h-4 w-4" />
                            Row 4:
                          </h4>
                          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                            <div>
                              From the Services Menu, select <strong>'Query_custom_table'</strong>
                            </div>
                            <div>
                              <strong>Enter in Instruction (must enter exactly):</strong>{" "}
                              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                                What is the serial number, manufacturer, year of manufacture for{" "}
                                {`{{the_model_number}}`}
                              </code>
                            </div>
                            <div>
                              <strong>Choose for Context:</strong>{" "}
                              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">ac_data</code>
                            </div>
                            <div className="mt-2 text-gray-600 dark:text-gray-200 italic">
                              This introduces the concept of a using a variable in our query. Using the model number we
                              gathered in Row 2 from the Extract agent, this allows us to query in natural language
                              information about an earlier search.
                            </div>
                          </div>
                        </div>

                        <div className="border-l-4 border-l-green-500 pl-4">
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                            <Database className="h-4 w-4" />
                            Row 5:
                          </h4>
                          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                            <div>
                              From the Services Menu, select <strong>'Query_custom_table'</strong>
                            </div>
                            <div>
                              <strong>Enter in Instruction (must enter exactly):</strong>{" "}
                              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                                What is freon type for {`{{the_model_number}}`}
                              </code>
                            </div>
                            <div>
                              <strong>Choose for Context:</strong>{" "}
                              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">ac_data</code>
                            </div>
                            <div className="mt-2 text-gray-600 dark:text-gray-200 italic">
                              This continues the concept of a using a variable in our query. Using the model number we
                              gathered in Row 2 from the Extract agent, this allows us to query in natural language
                              information about an earlier search.
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                          <p className="text-gray-800 dark:text-gray-200 text-sm">
                            By performing these actions, the model number is used to query the AC unit table to find:
                          </p>
                          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm mt-2 space-y-1">
                            <li>Serial number</li>
                            <li>Manufacturer</li>
                            <li>Year of manufacture</li>
                          </ul>
                          <p className="text-gray-800 dark:text-gray-200 text-sm mt-2">A second query checks:</p>
                          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm mt-1">
                            <li>Freon type (e.g., R22)</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 9 */}
            <div className="relative">
              <div className="flex items-baseline gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                    9
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Contextual RAG Lookup</h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <p className="text-gray-800 dark:text-gray-200 mb-4">
                        To find information on R22, we will next ask the agent parses the document: R22 Technical
                        Documentation.pdf'
                      </p>
                      <div className="space-y-6">
                        <div className="border-l-4 border-l-purple-500 pl-4">
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                            <FileSearch className="h-4 w-4" />
                            Row 6:
                          </h4>
                          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                            <div>
                              From the Services Menu, select <strong>'Parse_document'</strong>
                            </div>
                            <div>
                              <strong>Enter in Instruction (must enter exactly):</strong>{" "}
                              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">R22 technical doc</code>
                            </div>
                            <div>
                              <strong>Choose for Context:</strong>{" "}
                              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">R22_Technical Document</code>
                            </div>
                            <div className="mt-2 text-gray-600 dark:text-gray-200 italic">
                              This step parses the document that is in a PDF format, and normalizes the text and
                              prepares the text with auto-chunking and indexing for semantic (natural language) queries
                            </div>
                          </div>
                        </div>

                        <div className="border-l-4 border-l-blue-500 pl-4">
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            Row 7:
                          </h4>
                          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                            <div>Next we can start to ask natural language questions</div>
                            <div>
                              From the Services Menu, select <strong>'Rag_answer'</strong>
                            </div>
                            <div>
                              <strong>Enter in Instruction (must enter exactly):</strong>{" "}
                              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                                What is R22 and is it still being used?
                              </code>
                            </div>
                            <div>
                              <strong>Choose for Context:</strong>{" "}
                              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">R22_Technical Document</code>
                            </div>
                            <div className="mt-2 text-gray-600 dark:text-gray-200 italic">
                              This step is now using the document to pull information directly from the source to answer
                              questions in natural language RAG model answers: "What is R22 and is it still being used?"
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 10 */}
            <div className="relative">
              <div className="flex items-baseline gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
                    10
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Match the Customer Info</h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <p className="text-gray-800 dark:text-gray-200 mb-4">
                        From the field tech's input (e.g., "Today we visited customer Jane Smith...and email address"):
                        The agent extracts customer name and email address
                      </p>
                      <div className="space-y-6">
                        <div className="border-l-4 border-l-teal-500 pl-4">
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                            <User className="h-4 w-4" />
                            Row 8:
                          </h4>
                          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                            <div>
                              From the Services Menu, select <strong>'Extract'</strong>
                            </div>
                            <div>
                              <strong>Enter in Instruction (must enter exactly):</strong>{" "}
                              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">customer name</code>
                            </div>
                            <div>
                              <strong>Choose for Context:</strong>{" "}
                              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Main Input</code>
                            </div>
                          </div>
                        </div>

                        <div className="border-l-4 border-l-blue-500 pl-4">
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            Row 9:
                          </h4>
                          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                            <div>
                              From the Services Menu, select <strong>'Extract Tiny'</strong>
                            </div>
                            <div>
                              <strong>Enter in Instruction (must enter exactly):</strong>{" "}
                              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">email address</code>
                            </div>
                            <div>
                              <strong>Choose for Context:</strong>{" "}
                              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Main Input</code>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                          <p className="text-gray-800 dark:text-gray-200 text-sm">
                            These steps will extract the customer's name and email address – the key pieces of
                            information we need to send an email.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 11 */}
            <div className="relative">
              <div className="flex items-baseline gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">
                    11
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Chat Agent Drafts the Email</h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <p className="text-gray-800 dark:text-gray-200 mb-4">
                        Using a chat model, the system generates a customer-ready email:
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
                        <p className="text-gray-800 dark:text-gray-200 mb-2">Personalized with:</p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm space-y-1">
                          <li>Customer name</li>
                          <li>Model + Serial Number</li>
                          <li>Year + Manufacturer</li>
                          <li>Notes if R22 is used</li>
                          <li>Suggests sales outreach if replacement is recommended</li>
                        </ul>
                      </div>

                      <div className="space-y-6">
                        <div className="border-l-4 border-l-orange-500 pl-4">
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Row 10:</h4>
                          <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200 mb-4">
                            <div>
                              From the Services Menu, select <strong>'Chat'</strong>
                            </div>
                            <div>
                              <strong>Enter in Instruction</strong> (for your first use, we highly recommend you copy
                              and paste the instruction. Afterwards, feel free to experiment but we have found this to
                              work well – it is key to use the variables correctly):
                            </div>
                            <div>
                              <strong>Choose for Context:</strong>{" "}
                              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Vision 1</code>
                            </div>
                          </div>
                          <CodeBlock title="Email Draft Instruction">
                            {`You are a customer support agent named Amanda who works for a heating and cooling company named Model AC. Write a nice email to a customer named {{customer_name}} about our service delivery that took place today with our technician David. Using the information provided here about {{the_model_number}}, the {{query_custom_table_4}}, the {{query_custom_table_5}} and {{rag_answer_7}}, reference the exact unit, including serial number, model, manufacture and year of manufacture of the AC unit which is information that is found as follows: {{query_custom_table_4}}. If the unit uses R22, mention to the customer that we highly recommend replacing the unit and that the Sales Rep will contact them with a price quote on a great new system. Do not use brackets or have blanks in the email. If you can't fill in the information, don't discuss it.`}
                          </CodeBlock>
                          <p className="text-gray-600 dark:text-gray-200 italic text-sm mt-2">
                            This creates a nice email from the chatbot – however, these chatbots come with intros about
                            the steps they took to create the email, so the next step is also necessary.
                          </p>
                        </div>

                        <div className="border-l-4 border-l-green-500 pl-4">
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Row 11:</h4>
                          <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200 mb-4">
                            <div>
                              From the Services Menu, select <strong>'Chat'</strong>
                            </div>
                            <div>
                              <strong>Enter in Instruction</strong> (copy and paste the first time then experiment
                              after):
                            </div>
                            <div>
                              <strong>Choose for Context:</strong>{" "}
                              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Chat_11</code>
                            </div>
                          </div>
                          <CodeBlock title="Email Formatting Instruction">
                            {`You are an email formatting expert. Review {{Chat_10}} and format the email nicely. Do not included any responses or any other text in this email other than the context. Do not add "here is" or any other responses whatsoever. This will cause the outcome to fail.`}
                          </CodeBlock>
                          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-4">
                            <p className="text-gray-800 dark:text-gray-200 text-sm">A second chat step formats the email:</p>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm mt-2 space-y-1">
                              <li>Clean paragraphs</li>
                              <li>No headers or extra labels</li>
                              <li>Pure copy-paste ready</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 12 */}
            <div className="relative">
              <div className="flex items-baseline gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    12
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Send the Email</h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <p className="text-gray-800 dark:text-gray-200 mb-4">
                        Model HQ auto-sends the formatted email to the retrieved email address using the send_email
                        node.
                      </p>
                      <div className="border-l-4 border-l-blue-500 pl-4">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Row 12:
                        </h4>
                        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                          <div>
                            From the Services Menu, select <strong>'Send_email'</strong>
                          </div>
                          <div>
                            <strong>Enter in Instruction (must enter exactly):</strong>{" "}
                            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{`{{email_address}}`}</code>
                          </div>
                          <div>
                            <strong>Choose for Context:</strong>{" "}
                            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Chat_11</code>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-4">
                        <p className="text-gray-800 dark:text-gray-200 text-sm">
                          Now that you entered all 12 rows, select <strong>'&gt;'</strong>. This is the screenshot of
                          what you should see:
                        </p>
                        <div className="my-4 p-4 rounded-lg mt-4">
                          <img
                            src="/cookbooks/v0/photo-to-email-automation/allProcess.png"
                            alt="all process"
                            className="rounded-lg shadow-md border dark:border-gray-700 w-full"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Step 13 - Running the Workflow */}
            <div className="relative">
              <div className="flex items-baseline gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                    13
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Running the Workflow</h3>
                  <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                    <CardContent className="p-6">
                      <p className="text-gray-800 dark:text-gray-200 mb-4 text-lg font-semibold">
                        You did it~~~ Now let's test by selecting <strong>'Run'</strong> then <strong>'Action'</strong>{" "}
                        &gt;
                      </p>
                      <div className="space-y-4">
                        <div className="border-l-4 border-l-green-500 pl-4">
                          <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Main Input:</h4>
                          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                            <div>
                              For the <strong>Text input in Main Input</strong>, enter your name and email address so
                              you can test: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">[Your Name] [email]</code>
                            </div>
                            <div>
                              For the <strong>Upload Image File – AC Marketing</strong>, choose the image file of the AC
                              panel you downloaded in Step 1 and select &gt;.
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                          <p className="text-gray-800 dark:text-gray-200 text-sm">You will see the following results</p>
                          <div className="my-4 p-4 rounded-lg">
                            <img
                              src="/cookbooks/v0/photo-to-email-automation/output.png"
                              alt="output"
                              className="rounded-lg shadow-md border dark:border-gray-700 w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Table */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Recap Summary: What This Agent Does</h2>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block">
            <Card className="overflow-hidden">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">Task</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100">Output</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium text-gray-900 dark:text-gray-100">🖼️ Image Input</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">Extracted AC model number</td>
                  </tr>
                  <tr className="bg-gray-25 dark:bg-gray-850 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium text-gray-900 dark:text-gray-100">📊 Table Query</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">Unit specs + refrigerant type</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium text-gray-900 dark:text-gray-100">📄 Document RAG</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">Info on R22</td>
                  </tr>
                  <tr className="bg-gray-25 dark:bg-gray-850 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium text-gray-900 dark:text-gray-100">🙍‍♀️ Customer Lookup</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">Name + email address</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium text-gray-900 dark:text-gray-100">📨 Email Generation</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">Personalized & well-formatted</td>
                  </tr>
                  <tr className="bg-gray-25 dark:bg-gray-850 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium text-gray-900 dark:text-gray-100">🚀 Final Step</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-gray-700 dark:text-gray-300">Sends the email automatically</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            <Card className="border-l-4 border-l-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 dark:border-l-blue-300">
              <CardContent className="p-4">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                  <ImageIcon className="h-5 w-5" />
                  🖼️ Image Input
                </h3>
                <p className="text-blue-700 dark:text-blue-200 text-sm">Extracted AC model number</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-green-500 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 dark:border-l-green-300">
              <CardContent className="p-4">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                  <Database className="h-5 w-5" />📊 Table Query
                </h3>
                <p className="text-green-700 dark:text-green-200 text-sm">Unit specs + refrigerant type</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-purple-500 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 dark:border-l-purple-300">
              <CardContent className="p-4">
                <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
                  <FileText className="h-5 w-5" />📄 Document RAG
                </h3>
                <p className="text-purple-700 dark:text-purple-200 text-sm">Info on R22</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-orange-500 bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950 dark:to-amber-900 dark:border-l-orange-300">
              <CardContent className="p-4">
                <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2 flex items-center gap-2">
                  <User className="h-5 w-5" />
                  🙍‍♀️ Customer Lookup
                </h3>
                <p className="text-orange-700 dark:text-orange-200 text-sm">Name + email address</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-4">
                <h3 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />📨 Email Generation
                </h3>
                <p className="text-yellow-700 dark:text-yellow-200 text-sm">Personalized & well-formatted</p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-green-600">
              <CardContent className="p-4">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                  <Send className="h-5 w-5" />🚀 Final Step
                </h3>
                <p className="text-green-700 dark:text-green-200 text-sm">Sends the email automatically</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Support */}
        <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900 dark:to-slate-900 rounded-lg p-6 border dark:border-gray-700 text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Need Help?</h3>
          <p className="text-gray-700 dark:text-gray-200">
            If you encounter any issues while setting up this workflow, feel free to contact our support team at {" "} 
            <a
              href="mailto:support@aibloks.com"
              className="text-green-800 dark:text-green-200 underline hover:text-green-900 dark:hover:text-green-100"
            >
              support@aibloks.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
