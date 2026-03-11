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
    FileText,
    CheckCircle,
    Target,
    Shield,
    Stethoscope,
    Brain,
    FileSearch,
    Zap,
    ExternalLink,
    TrendingUp,
    Copy,
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
        <div className="relative w-full font-mono text-sm border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-950">
            {title && (
                <div className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 text-sm font-medium border-b border-gray-300 dark:border-gray-700">
                    {title}
                </div>
            )}
            <div className="relative bg-[#f8f9fa] dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 group w-full overflow-x-auto">
                <button
                    suppressHydrationWarning
                    onClick={copyToClipboard}
                    className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    title="Copy code"
                >
                    {copied ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                        <Copy className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    )}
                </button>

                <pre className="whitespace-pre-wrap break-words w-full">
                    <code className="[&_.keyword]:text-purple-600 dark:[&_.keyword]:text-purple-400 [&_.string]:text-green-600 dark:[&_.string]:text-green-400 [&_.number]:text-blue-600 dark:[&_.number]:text-blue-400 [&_.comment]:text-gray-500 dark:[&_.comment]:text-gray-400">
                        {children}
                    </code>
                </pre>
            </div>
        </div>
    )
}

export default function ClinicalTrialScreeningPage() {
    return (
        <div className="max-w-5xl mx-auto space-y-6 px-4 sm:px-6 lg:px-8 py-6 bg-white dark:bg-gray-950">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/#cookbooks">Cookbooks</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Clinical Trial Screening Automation</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">From Patient Chart to Trial Match: Automate Clinical Trial Screening with One Upload</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Transform patient document screening with AI-powered eligibility assessment
                </p>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                    <p className="text-gray-800 dark:text-gray-200 mb-4">
                        Imagine sorting through hundreds of patient charts to identify those who might qualify for a specific
                        clinical trial. Now imagine doing it in seconds—with zero manual review and with no sensitive data leaving
                        your machine or private data center. That's the power of this Model HQ Clinical Trial Recruiting Agent.
                    </p>
                    <p className="text-gray-800 dark:text-gray-200">
                        Designed to reduce screening friction, improve accuracy, and ensure no eligible patient slips through the
                        cracks.
                    </p>
                </div>

                <Card className="border-l-4 border-l-yellow-400 bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-950 dark:to-amber-900 dark:border-l-yellow-300">
                    <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                            <Brain className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="font-semibold text-yellow-800 dark:text-yellow-100 mb-2">And it's not just for clinical trials…</p>
                                <p className="text-yellow-700 dark:text-yellow-200 text-sm leading-relaxed mb-4">
                                    This pattern can be adapted across regulated industries where document-based decision-making is
                                    critical, such as:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <Stethoscope className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="font-semibold text-yellow-800 dark:text-yellow-100">Medical eligibility screening</span>
                                            <p className="text-yellow-700 dark:text-yellow-200 text-sm">(e.g., surgery clearance, insurance validation)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Shield className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="font-semibold text-yellow-800 dark:text-yellow-100">Regulatory intake</span>
                                            <p className="text-yellow-700 dark:text-yellow-200 text-sm">for safety or compliance</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FileSearch className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="font-semibold text-yellow-800 dark:text-yellow-100">Legal discovery</span>
                                            <p className="text-yellow-700 dark:text-yellow-200 text-sm">
                                                (e.g., identifying parties, dates, and claims from large files)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <FileText className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <span className="font-semibold text-yellow-800 dark:text-yellow-100">Insurance</span>
                                            <p className="text-yellow-700 dark:text-yellow-200 text-sm">Fraud detection or claim qualification</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-yellow-800 dark:text-yellow-100 mt-4 font-medium text-center">
                                    One document → One workflow → One eligibility decision.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 rounded-lg p-6 border dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                        This agent doesn't just help recruiters — it ensures no candidate is overlooked due to inconsistencies or
                        hidden data in unstructured files. It's fast, consistent, and auditable.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* How It Works Section */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Upload. Analyze. Screen.</h2>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            With this Clinical Trial Recruiting Agent, all you need is a patient document (e.g., intake form, EMR
                            export, or referral note). Here's how it works:
                        </p>

                        <div className="space-y-4">
                            <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                                        1
                                    </span>
                                    <div>
                                        <span className="font-semibold">Upload Patient Document:</span> Upload any text-based patient file
                                        (PDF, DOCX, TXT). The agent automatically parses and prepares the content for AI-powered review.
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                                        2
                                    </span>
                                    <div>
                                        <span className="font-semibold">Run Eligibility Questions (RAG + Boolean):</span> The agent applies
                                        a series of retrieval-augmented queries to extract trial-relevant data points, including diabetes
                                        history, patient age, pregnancy status, dialysis treatment, allergies, and cognitive conditions.
                                    </div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                                        3
                                    </span>
                                    <div>
                                        <span className="font-semibold">Eligibility Decision:</span> A Boolean logic step evaluates the
                                        presence and explanation of diabetes references. Output can be fed into a CRM, database, or
                                        downstream agent to trigger next steps.
                                    </div>
                                </li>
                            </ol>

                            <div className="my-6">
                                <p className="text-gray-700 dark:text-gray-300">
                                    <a
                                        href="https://github.com/BloksAdmin/model-hq-docs/tree/main/public/cookbooks/v0/clinical-trial-screening-automation"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 underline inline-flex items-center gap-1"
                                    >
                                        Find all the required images and documents here.
                                        <ExternalLink className="h-3 w-3" />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Step-by-Step Guide */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                Step-by-Step Guide to Building the Clinical Trial Recruiting Tool
                            </h2>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            Select or enter the following Service, Instruction and Context to re-create this tool yourself.
                        </p>

                        {/* Provided Files */}
                        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800 mb-8">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Provided Files:</h3>
                                <p className="text-blue-800 dark:text-blue-200 mb-3">
                                    We are using an example of a clinical trial available as public information in{" "}
                                    <a
                                        href="https://clinicaltrials.gov/study/NCT04959552?cond=diabetes&page=2&rank=14"
                                        className="text-blue-600 hover:underline inline-flex items-center gap-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://clinicaltrials.gov/study/NCT04959552?cond=diabetes&page=2&rank=14
                                        <ExternalLink className="h-3 w-3" />
                                    </a>
                                    . We have no association with anyone who is running this trial and are using this as only example
                                    purposes so you can see some sample inclusion and exclusion criteria.
                                </p>
                                <p className="text-blue-800 dark:text-blue-200 mb-3">
                                    We also downloaded some sample publicly available medical files which can be accessed here. Although
                                    these files were from public sources, please note that these files may contain explicit and sensitive
                                    medical content and user discretion is advised. We are providing these files for testing purposes
                                    only.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Preparing to Build */}
                        <div className="space-y-8">
                            <div className="border-l-4 border-l-green-500 dark:border-l-green-300 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 p-6">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Preparing to build:</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-2">
                                    Select <strong className="dark:text-gray-100">Agents &gt; Build New &gt; Start Building</strong> then complete the Process Name.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mb-2">
                                    We named it <em>Clinical Trial Recruiting Tool</em> (but since this may already be a template in your
                                    version of Model HQ, please feel free to give it a different name).
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Press <strong className="dark:text-gray-100">&gt;</strong>
                                </p>
                            </div>

                            {/* Defining Inputs */}
                            <div className="border-l-4 border-l-orange-500 dark:border-l-orange-300 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 p-6">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Defining Inputs to Agent Process:</h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    You will then be asked to Define Inputs to Agent Process. This is the step where we will specify how
                                    the agent will receive its input to start taking action. The pre-set input is Main-Input (which is the
                                    standard chat style text input), but in this use case, we will be asking the Agent to review a patient
                                    file.
                                </p>

                                <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 border border-red-200 dark:border-red-800 p-4 mb-4 rounded">
                                    <p className="text-red-800 dark:text-red-100 font-medium">DE-SELECT the Main Input</p>
                                </div>

                                <ol className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li>
                                        To add Files as the input type, click <strong className="dark:text-gray-100">'+'</strong> and select{" "}
                                        <strong className="dark:text-gray-100">'Document File Input – any file type'</strong> as Input Type and in Description, type in:{" "}
                                        <em>'Upload Patient Medical File or Description'</em>
                                    </li>
                                    <li>
                                        To indicate that this step is complete, it is important to click <strong className="dark:text-gray-100">&gt;</strong> then{" "}
                                        <strong className="dark:text-gray-100">'Save + Exit'</strong>.
                                    </li>
                                    <li>
                                        You will now enter the Agent building screen and you can start your build per instructions below.
                                    </li>
                                </ol>
                            </div>

                            {/* Agent Building Steps */}
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Agent Building Steps</h2>
                                <p className="text-gray-700 dark:text-gray-300 mb-6">
                                    Here is a detailed, step-by-step guide to build the Clinical Trial Recruiting Tool in Model HQ's Agent
                                    Builder (Note: this pre-built tool is also available as part of Model HQ set of templates). Each step
                                    includes the: Service (what the node does), Instruction (the question or task), Context (the document
                                    or variable used)
                                </p>

                                <div className="space-y-6">
                                    {/* Row 1 */}
                                    <div className="border dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900">
                                        <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                1
                                            </div>
                                            Row 1: Parse the Patient Document
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <span className="font-medium text-blue-600 dark:text-blue-400">Service:</span>
                                                <CodeBlock>parse_document</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-green-600 dark:text-green-400">Instruction:</span>
                                                <CodeBlock>Patient Files</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-purple-600 dark:text-purple-400">Context:</span>
                                                <CodeBlock>User-Document</CodeBlock>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                                            <strong className="dark:text-gray-100">Purpose:</strong> Prepares and parses the uploaded patient document for semantic querying
                                            in later steps. (This indicates that the user will upload the document to run this agent process.)
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            At the end of each row when building the Agent Process, press '+' to add the next row, until you
                                            reach the final step to End.
                                        </p>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="border dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900">
                                        <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                2
                                            </div>
                                            Row 2: RAG Answer – Diabetes Mention
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <span className="font-medium text-blue-600 dark:text-blue-400">Service:</span>
                                                <CodeBlock>rag_answer</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-green-600 dark:text-green-400">Instruction:</span>
                                                <CodeBlock>whether the patient has diabetes now or in the past</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-purple-600 dark:text-purple-400">Context:</span>
                                                <CodeBlock>Patient_Files</CodeBlock>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                                            <strong className="dark:text-gray-100">Purpose:</strong> Checks the document for any mention of diabetes (past or present).
                                        </p>
                                    </div>

                                    {/* Row 3 */}
                                    <div className="border dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900">
                                        <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                3
                                            </div>
                                            Row 3: Boolean Check – Diabetes Confirmation
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <span className="font-medium text-blue-600 dark:text-blue-400">Service:</span>
                                                <CodeBlock>boolean</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-green-600 dark:text-green-400">Instruction:</span>
                                                <CodeBlock>{`in {{rag_answer_2}} does the text state the patient has diabetes`}</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-purple-600 dark:text-purple-400">Context:</span>
                                                <CodeBlock>doc_extract_1</CodeBlock>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                                            <strong className="dark:text-gray-100">Purpose:</strong> Verifies if the document actually confirms diabetes using the output
                                            from the previous RAG answer.
                                        </p>
                                    </div>

                                    {/* Row 4 */}
                                    <div className="border dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900">
                                        <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                4
                                            </div>
                                            Row 4: RAG Answer – Patient Age
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <span className="font-medium text-blue-600 dark:text-blue-400">Service:</span>
                                                <CodeBlock>rag_answer</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-green-600 dark:text-green-400">Instruction:</span>
                                                <CodeBlock>how old is the patient</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-purple-600 dark:text-purple-400">Context:</span>
                                                <CodeBlock>Patient_Files</CodeBlock>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                                            <strong className="dark:text-gray-100">Purpose:</strong> Extracts the patient's age for trial eligibility filtering.
                                        </p>
                                    </div>

                                    {/* Row 5 */}
                                    <div className="border dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900">
                                        <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                5
                                            </div>
                                            Row 5: RAG Answer – Pregnancy Status
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <span className="font-medium text-blue-600 dark:text-blue-400">Service:</span>
                                                <CodeBlock>rag_answer</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-green-600 dark:text-green-400">Instruction:</span>
                                                <CodeBlock>is the patient pregnant or attempting to be pregnant</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-purple-600 dark:text-purple-400">Context:</span>
                                                <CodeBlock>Patient_Files</CodeBlock>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                                            <strong className="dark:text-gray-100">Purpose:</strong> Determines reproductive status (a key trial exclusion criterion).
                                        </p>
                                    </div>

                                    {/* Row 6 */}
                                    <div className="border dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900">
                                        <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                6
                                            </div>
                                            Row 6: RAG Answer – Dialysis Status
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <span className="font-medium text-blue-600 dark:text-blue-400">Service:</span>
                                                <CodeBlock>rag_answer</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-green-600 dark:text-green-400">Instruction:</span>
                                                <CodeBlock>is the patient on dialysis</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-purple-600 dark:text-purple-400">Context:</span>
                                                <CodeBlock>Patient_Files</CodeBlock>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                                            <strong className="dark:text-gray-100">Purpose:</strong> Identifies patients with advanced renal impairment.
                                        </p>
                                    </div>

                                    {/* Row 7 */}
                                    <div className="border dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900">
                                        <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                7
                                            </div>
                                            Row 7: RAG Answer – Allergy to Medical-Grade Adhesive
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <span className="font-medium text-blue-600 dark:text-blue-400">Service:</span>
                                                <CodeBlock>rag_answer</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-green-600 dark:text-green-400">Instruction:</span>
                                                <CodeBlock>
                                                    does the text mention if the patient is allergic to medical grade adhesive
                                                </CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-purple-600 dark:text-purple-400">Context:</span>
                                                <CodeBlock>Patient_Files</CodeBlock>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                                            <strong className="dark:text-gray-100">Purpose:</strong> Screens for skin-related contraindications for the study.
                                        </p>
                                    </div>

                                    {/* Row 8 */}
                                    <div className="border dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900">
                                        <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                8
                                            </div>
                                            Row 8: RAG Answer – Allergy to Isopropyl Alcohol
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <span className="font-medium text-blue-600 dark:text-blue-400">Service:</span>
                                                <CodeBlock>rag_answer</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-green-600 dark:text-green-400">Instruction:</span>
                                                <CodeBlock>does the text mention if the patient is allergic to isopropyl alcohol</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-purple-600 dark:text-purple-400">Context:</span>
                                                <CodeBlock>Patient_Files</CodeBlock>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                                            <strong className="dark:text-gray-100">Purpose:</strong> Further screens for known chemical sensitivities for the study.
                                        </p>
                                    </div>

                                    {/* Row 9 */}
                                    <div className="border dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900">
                                        <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                9
                                            </div>
                                            Row 9: RAG Answer – Mental/Cognitive Limitations
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <span className="font-medium text-blue-600 dark:text-blue-400">Service:</span>
                                                <CodeBlock>rag_answer</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-green-600 dark:text-green-400">Instruction:</span>
                                                <CodeBlock>
                                                    does the text mention if the patient suffers from any mental conditions that would deter him
                                                    or her from following instructions or protocols
                                                </CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-purple-600 dark:text-purple-400">Context:</span>
                                                <CodeBlock>Patient_Files</CodeBlock>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                                            <strong className="dark:text-gray-100">Purpose:</strong> Checks cognitive readiness and consent capacity.
                                        </p>
                                    </div>

                                    {/* Row 10 */}
                                    <div className="border dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900">
                                        <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                10
                                            </div>
                                            Row 10: End Node
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <span className="font-medium text-blue-600 dark:text-blue-400">Service:</span>
                                                <CodeBlock>END</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-green-600 dark:text-green-400">Instruction:</span>
                                                <CodeBlock>End of process.</CodeBlock>
                                            </div>
                                            <div>
                                                <span className="font-medium text-purple-600 dark:text-purple-400">Context:</span>
                                                <CodeBlock>None</CodeBlock>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                                            <strong className="dark:text-gray-100">Purpose:</strong> Marks completion of the workflow.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Final Notes */}
                    <section>
                        <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 border border-green-200 dark:border-green-800 rounded-lg p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                                <h2 className="text-xl font-bold text-green-900 dark:text-green-200">Final Notes:</h2>
                            </div>
                            <ul className="space-y-3 text-green-800 dark:text-green-100">
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>
                                        Be sure to upload a document (e.g., PDF, DOCX) to User-Document before running this agent – try one
                                        of the sample files provided.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>
                                        This workflow is extensible — you can add inclusion/exclusion filters or eligibility tags in later
                                        nodes and also run this in batches for production.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Expand This Pattern */}
                    <section>
                        <div className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 rounded-lg p-6 border dark:border-gray-700">
                            <div className="flex items-center gap-3 mb-4">
                                <TrendingUp className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Expand This Pattern</h2>
                            </div>
                            <p className="text-gray-800 dark:text-gray-200 mb-4">You can easily adapt this flow to:</p>
                            <div className="grid md:grid-cols-2 gap-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                                    <span className="text-gray-700 dark:text-gray-300">Pre-screen based on inclusion/exclusion criteria</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FileSearch className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                                    <span className="text-gray-700 dark:text-gray-300">Analyze investigator site files</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                                    <span className="text-gray-700 dark:text-gray-300">Validate adherence risks</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Target className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                                    <span className="text-gray-700 dark:text-gray-300">Recommend alternative trials or study arms</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Support */}
                    <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900 dark:to-slate-900 rounded-lg p-6 border dark:border-gray-700 text-center">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Need Help?</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            If you encounter any issues while setting up clinical trial screening, feel free to contact our support
                            team at {" "}
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
        </div>
    )
}
















