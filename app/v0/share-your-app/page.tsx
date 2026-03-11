import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function SharingAgentsBotsPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/agents">Agents</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Sharing Agents and Bots</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight" id="sharing-agents-and-chatbots-with-others">
                    Sharing Agents and Chatbots with Others
                </h1>
            </div>

            <div className="prose prose-gray max-w-none">
                <p>
                    To share an <strong>Agent process</strong> or <strong>Chatbot</strong> you created with a friend or colleague who also uses <strong>Model HQ</strong>, it’s simple, just email them the downloaded ZIP file.
                </p>

                <h2 id="sharing-agent-processes">Sharing Agent Processes</h2>

                <h3>To share an Agent process:</h3>
                <ol>
                    <li>Go to the <strong>Agents</strong> tab.</li>
                    <li>Scroll to the name of the Agent process you want to share.</li>
                    <li>Click the <strong>❃ Share</strong> button.</li>
                    <li>You will see a download link: <code>"Download [Agent Process Name]"</code></li>
                    <li>Email the downloaded <code>.zip</code> file to the recipient, along with any necessary instructions.</li>
                </ol>

                <img src="/v0/share/agent.png" alt="agent share" />

                <h3 id="upload-and-use-a-shared-agent-process">To upload and use a shared Agent process:</h3>
                <ol>
                    <li>Download the <code>.zip</code> file sent by your colleague.</li>
                    <li>Go to <strong>Agents</strong>, then click <strong>Build New</strong> &gt; <strong>Upload</strong>.</li>
                    <li>Upload the ZIP file containing the Agent process.</li>
                    <li>After uploading, go back to <strong>Agents</strong> from <strong>Home</strong>, and you'll see the new workflow listed.</li>
                </ol>

                <h2 id="sharing-chatbots">Sharing Chatbots</h2>

                <h3>To share a custom Bot:</h3>
                <ol>
                    <li>Go to the <strong>Bots</strong> section.</li>
                    <li>Scroll to the bot you wish to share.</li>
                    <li>Click the <strong>❃ Share</strong> button.</li>
                    <li>You will see a download link: <code>"Download [Custom Bot Name]"</code></li>
                    <li>Email this file to the recipient along with any usage instructions.</li>
                </ol>

                <img src="/v0/share/bot.png" alt="bot share" />

                <h3 id="upload-and-use-a-shared-custom-bot">To upload and use a shared custom Bot:</h3>
                <ol>
                    <li>From <strong>Home</strong>, go to <strong>Bots</strong> &gt; <strong>Build New</strong> &gt; <strong>Upload</strong>.</li>
                    <li>Upload the ZIP file containing the chatbot.</li>
                    <li>After uploading, go to <strong>Home</strong> &gt; <strong>Bots</strong>.</li>
                    <li>You’ll find the newly shared Bot ready for use.</li>
                </ol>

                <h2>Conclusion</h2>
                <p>
                    In this documentation, we explored how to <strong>share Agent processes and custom Chatbots</strong> within Model HQ.
                    <br />
                    We covered how to download and send your Agent or Bot to others, as well as how to upload and use shared ZIP files for seamless collaboration.
                </p>

                <p>
                    If you have any questions or feedback, please contact us at <code>support@aibloks.com</code>.
                </p>
            </div>
        </div>
    )
}
