import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function CloudModelsPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/agent">Agent</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>OpenAI and Anthropic Models</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Using OpenAI or Anthropic Models</h1>
            </div>

            <div className="prose prose-gray max-w-none">
                <p>
                    Frontier Models such as <strong>OpenAI</strong> or <strong>Anthropic</strong> can be utilized in building
                    Agent workflows in Model HQ. Users can access a short example via:
                </p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>
                        Agents {">"} Cloud API Agent {">"} Details
                    </code>
                </pre>

                <img src="/v0/agent/cloudAgent.png" alt="Cloud Agent" />

                <br />

                <p>This allows quick testing to verify whether the API connection is successful.</p>

                <p>&nbsp;</p>

                <h2 id="default-setup">Default Setup</h2>
                <p>
                    The <strong>template Agent workflow</strong> is set to <strong>Anthropic</strong> by default.
                </p>
                <p>To use this workflow successfully, you must enter your API key for the desired model in:</p>

                <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>
                        Configs (top right corner) {">"} Credentials {">"} Anthropic API key
                    </code>
                </pre>

                <img src="/v0/agent/cloudAgentNext.png" alt="Cloud Agent Configuration" />

                <p>&nbsp;</p>

                <h2 id="switching-to-openAI">Switching to OpenAI</h2>
                <p>
                    To change the Agent workflow test to <strong>OpenAI</strong>, follow these steps:
                </p>

                <ol>
                    <li>
                        Go to:
                        <pre className="bg-muted p-4 rounded-md overflow-x-auto mt-2">
                            <code>Agents {">"} Cloud API Agent</code>
                        </pre>
                    </li>
                    <li>
                        Click on:
                        <pre className="bg-muted p-4 rounded-md overflow-x-auto mt-2">
                            <code>Edit {">"} Process</code>
                        </pre>
                        <img src="/v0/agent/cloudEdit.png" alt="Cloud Edit" className="mt-2" />
                    </li>
                    <li>
                        Locate the <strong>second row</strong> and change:
                        <pre className="bg-muted p-4 rounded-md overflow-x-auto mt-2">
                            <code>anthropic_chat → openai_chat</code>
                        </pre>
                        <img src="/v0/agent/cloudChange.png" alt="Cloud Change" className="mt-2" />
                    </li>
                    <li>
                        Click <code>{">"}</code> to proceed.
                    </li>
                </ol>

                <p>&nbsp;</p>

                <blockquote data-type="note">
                    <p>
                        The <strong>first step</strong> of the process (<code>chat</code>) uses a{" "}
                        <strong>default local model</strong>. It does <strong>not</strong> use an external model and is intended as
                        a <strong>quick test</strong> to ensure your models are connected properly.
                    </p>
                </blockquote>

                <blockquote data-type="warning">
                    <p>
                        Make sure to set the <strong>Context</strong> of <code>Chat_1</code> to <code>None</code> in the first row. (the context of OpenAI should correctly remain as <code>Chat_1</code>)
                        <br />
                        There is no context needed for this model to provide a valid answer. This option may become available{" "}
                        <strong>
                            only after clicking <code>{">"}</code>
                        </strong>{" "}
                        following the model change in the Cloud API Agent workflow.
                    </p>
                </blockquote>

                <blockquote data-type="tip">
                    <p>
                        When you upload a <strong>CSV</strong> to the OpenAI API, the most common reason for errors is that the API doesn’t directly accept raw <code>.csv</code> files for all endpoints.
                        <br />
                        <br />
                        The API also does not process compressed archives (<code>.zip</code>, <code>.tar</code>, <code>.rar</code>, etc.). If you try to upload one, you’ll get an <strong>error</strong>.
                    </p>
                </blockquote>

                <p>&nbsp;</p>

                <h2 id="output-of-openAI-agent">Final Steps</h2>
                <ol>
                    <li>
                        Click{" "}
                        <code>
                            Run {">"} {">"}
                        </code>{" "}
                        run the agent with OpenAI as new llm provider:
                    </li>
                    <li>You will see a completed Agent workflow similar to the responses below.</li>
                </ol>

                <img src="/v0/agent/cloudRun.png" alt="Cloud Run" />

                <p>&nbsp;</p>

                <p>
                    This confirms that you are now able to successfully utilize <strong>Anthropic</strong> or{" "}
                    <strong>OpenAI</strong> in your <strong>Agent workflow</strong>.
                </p>
            </div>
        </div>
    )
}
