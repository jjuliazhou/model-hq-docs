import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DocPageLayout } from "@/components/doc-page-layout"
import { RelatedVideos } from "@/components/related-videos"
import { references } from "./references"

export default function ExploringChatInModelHqPage() {
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
              <BreadcrumbPage>Exploring Chat in Model HQ</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Exploring Chat in Model HQ</h1>
        </div>

        <div className="prose prose-gray max-w-none">
          <p>
            After completing the initial setup, users will be directed to the <strong>Main Menu</strong>. This document describes how the chat workspace is launched, how models are selected and downloaded, and how the Chat UI can be used — including RAG (Retrieval-Augmented Generation) workflows that combine uploaded documents or web search with model generation.
          </p>

          <p>
            Model HQ is described as supporting multiple model sizes to fit different needs:
          </p>

          <ul>
            <li>Small: ~0.5–3 billion parameters — suitable for fast, low-memory experiments.</li>
            <li>Medium: ~7–8 billion parameters — intended for a balance between latency and quality.</li>
            <li>Large: 9–32+ billion parameters — recommended for higher-fidelity results and more complex tasks.</li>
          </ul>

          <RelatedVideos
            title="Watch: Chat in Model HQ"
            description="Quick walkthroughs covering chat, RAG, SQL, and document Q&A workflows."
            videoIds={[
              "yNkcSH73vKc",
              "6z3kyUpsGys",
              "kov4rvjEBbE",
              "cd_08qQ5Z2o",
              "T1AOuUF7oQ8",
            ]}
          />

          <h2 id="1-launching-the-chat-interface">1. Launching the chat interface</h2>

          <p>
            To begin, the Chat button in the main menu sidebar can be selected.
          </p>

          <img src="chat/01_mainMenu.png" alt="chat" />

          <p>
            When Chat is opened:
          </p>

          <ul>
            <li>If a model has already been selected and is available locally, the interface will open immediately.</li>
            <li>If no model is present (for the No Setup flow), Model HQ will start downloading the default model.</li>
          </ul>

          <img src="chat/02_downloadingModel.png" alt="chatNext" />

          <blockquote data-type="note">
            <p>1. Download time depends on model size and network speed; small models commonly finish in under a minute, while larger models may take longer.
            </p>
            <p>2. Once the download completes, the model will be loaded into memory automatically and the chat UI will become active.</p>
          </blockquote>

          <blockquote data-type="tip">
            <p>If a download error is encountered, then refer to <a href="/chat/error">Error Handling in Chat</a></p>
          </blockquote>

          <h2 id="2-chat-interface-overview">2. Chat interface overview</h2>

          <p>
            After the model loads, the Chat Interface will be presented where messages can be typed, responses viewed, and session options controlled.
          </p>

          <img src="chat/03_chatInterface.png" alt="chat" />

          <p>
            The interface groups controls into several areas. The following subsections describe each control and provide recommended usage.
          </p>

          <p>
            Primary items:
          </p>

          <ol>
            <li>Model</li>
            <li>Source</li>
            <li>Prompts</li>
            <li>Web Search (requires internet)</li>
          </ol>

          <p>
            Other useful controls:
          </p>

          <ul>
            <li>Configure — adjust generation and retrieval parameters.</li>
            <li>Info — inspect the active model and session settings.</li>
            <li>Save / Download — export the session transcript.</li>
          </ul>

          <blockquote data-type="tip">
            <p>Before enabling RAG, it is suggested to test the basic chat flow with short demo questions to verify that the model responds as expected.</p>
          </blockquote>

          <img src="chat/04_AniDemo.gif" alt="chat" />

          <h3 id="21-model-selector">2.1 Model selector</h3>

          <p>
            The Model selector dropdown menu is used to select which model will power the Chat session. The dropdown menu lists available models by size and name. If the model selected is not yet downloaded on the user's device, it will download the model at this time.
          </p>

          <img src="chat/05_modelsExpanded.png" alt="config" />

          <p>
            Guidance:
          </p>

          <ul>
            <li>It is recommended to start with a Small or Medium model for quick experiments.</li>
            <li>Large models are recommended when higher fidelity or complex reasoning is required; sufficient RAM/VRAM should be available.</li>
          </ul>

          <blockquote data-type="tip">
            <p>Every model has trade-offs. It is advisable to choose a model that balances latency, accuracy and quality for the intended use case.</p>
          </blockquote>

          <h3 id="22-sources-rag-document-chat">2.2 Sources (RAG / document chat)</h3>

          <p>
            The Source control enables document-based context for RAG. When a source is active, uploaded files are indexed and retrieved passages are used to inform responses.
          </p>

          <img src="chat/06_applySource.png" alt="chat" />

          <p>
            Supported file types:
            <br />
            <code>.pdf</code>, <code>.pptx</code>, <code>.docx</code>, <code>.xlsx</code>, <code>.csv</code>, <code>.txt</code>, <code>.md</code>, <code>.wav</code>, <code>.png</code>, <code>.jpg</code>
          </p>

          <p>
            Behavior and limits:
          </p>

          <ul>
            <li>Multiple documents are supported (typical limit: ~5 files — dependent on size).</li>
            <li>Only 1 image (<code>.png</code>/<code>.jpg</code>) or one audio (<code>.wav</code>) file may be added at a time.</li>
            <li>Uploaded files are chunked, embedded, and indexed for retrieval during the session.</li>
          </ul>

          <img src="chat/07_sourceDemo.png" alt="chat" />

          <details>
            <summary>Click here to review the results</summary>
            <div className="mt-2 space-y-3">
              <p>This is Rohan Sharma&apos;s resume, and here&apos;s my analysis:</p>

              <h4 className="font-semibold">Qualifications:</h4>
              <ul>
                <li>Bachelor&apos;s degree in Computer Science from Nalanda College of Engineering, Patna, Bihar, India (2022-2023)</li>
                <li>Relevant coursework: Data Structures, Algorithms, Software Engineering, and Developer Experience</li>
                <li>Relevant certifications: Azure AI Fundamentals (2023)</li>
              </ul>

              <h4 className="font-semibold">Experience:</h4>
              <ul>
                <li>Developer Relations Engineer (2025-Present)
                  <ul>
                    <li>Developed and maintained technical content for leadership team</li>
                    <li>Created technical content for blogs and website updates</li>
                    <li>Promoted and represented LLMWare.ai in developer communities and events</li>
                  </ul>
                </li>
                <li>Developer Experience Engineer (2025-Present)
                  <ul>
                    <li>Designed visuals and improved technical articles</li>
                    <li>Drove community engagement and automation</li>
                  </ul>
                </li>
                <li>Software Developer, Professional Blog Writer & Designer
                  <ul>
                    <li>Developed robust applications with modern technologies and functional programming principles</li>
                    <li>Created professional blogs and designed user-friendly interfaces</li>
                  </ul>
                </li>
              </ul>

              <h4 className="font-semibold">Skills:</h4>
              <ul>
                <li>Programming Languages: C, C++, GoLang, Python, Rust, TS/JS, Frameworks & Libraries (Quira)</li>
                <li>Development Tools: React, Next.js, Node.js, Express, Flask, Tailwind CSS, Astro</li>
                <li>Operating Systems: Windows, Linux</li>
                <li>Cloud Platforms: Azure</li>
                <li>Specialized skills: Voice recognition, voice synthesis</li>
              </ul>

              <h4 className="font-semibold">Rating:</h4>
              <p>I would rate Rohan&apos;s resume an 8 out of 10. Here&apos;s why:</p>

              <h4 className="font-semibold">Strengths:</h4>
              <ul>
                <li><strong>Relevant experience:</strong> Rohan has a strong background in software development, developer relations, and developer experience, which are all valuable skills for a Developer Relations Engineer role.</li>
                <li><strong>Technical skills:</strong> Rohan has a wide range of technical skills, including programming languages, development tools, and frameworks.</li>
                <li><strong>Relevant certifications:</strong> Rohan has relevant certifications in Azure AI Fundamentals, which is a valuable skill for a Developer Relations Engineer role.</li>
                <li><strong>Soft skills:</strong> Rohan has experience in creating professional content, designing visuals, and driving community engagement, which are all important soft skills for a Developer Relations Engineer role.</li>
              </ul>

              <h4 className="font-semibold">Weaknesses:</h4>
              <ul>
                <li><strong>Lack of specific experience:</strong> While Rohan has a strong technical background, her experience as a developer relations engineer is limited. She may need to highlight more specific experience in this role.</li>
                <li><strong>No clear achievements:</strong> Rohan&apos;s experience is mostly described in terms of tasks and responsibilities, rather than specific achievements or accomplishments.</li>
                <li><strong>No clear technical debt:</strong> Rohan&apos;s resume could benefit from highlighting any technical debt or areas where she needs to improve her skills.</li>
              </ul>

              <h4 className="font-semibold">Why hire Rohan:</h4>
              <ul>
                <li><strong>Strong technical skills:</strong> Rohan has a wide range of technical skills, which is essential for a Developer Relations Engineer role.</li>
                <li><strong>Relevant experience:</strong> Rohan has relevant experience in software development, developer relations, and developer experience, which are all valuable skills for a Developer Relations Engineer role.</li>
                <li><strong>Soft skills:</strong> Rohan has experience in creating professional content, designing visuals, and driving community engagement, which are all important soft skills for a Developer Relations Engineer role.</li>
              </ul>

              <h4 className="font-semibold">Why not hire Rohan:</h4>
              <ul>
                <li><strong>Lack of specific experience:</strong> Rohan&apos;s experience is limited, which may make it difficult for the client to assess her ability to perform the role.</li>
                <li><strong>No clear achievements:</strong> Rohan&apos;s experience is mostly described in terms of tasks and responsibilities, rather than specific achievements or accomplishments.</li>
                <li><strong>No clear technical debt:</strong> Rohan&apos;s resume could benefit from highlighting any technical debt or areas where she needs to improve her skills.</li>
              </ul>
            </div>
          </details>

          <h4 id="221-containers-as-sources">2.2.1 Containers as sources</h4>

          <p>
            Model HQ can also be pointed to cloud containers so that documents are ingested from remote storage instead of being uploaded manually.
          </p>

          <p>
            Options:
          </p>

          <ol>
            <li>AWS S3</li>
            <li>Azure Container</li>
          </ol>

          <p>
            These integrations allow teams to maintain large collections in cloud storage while enabling local, secure RAG workflows.
          </p>

          <blockquote data-type="note">
            <p>To remove the current source, simply click the <strong>Source</strong> button again and it will turn off the source.</p>
          </blockquote>

          <h3 id="23-prompts">2.3 Prompts</h3>

          <p>
            Prompts allow system-level instructions or reusable templates to be supplied, which influence model behavior across a session.
          </p>

          <img src="chat/08_promptConfig.png" alt="chat" />

          <p>
            Here's a quick results after adding a prompt:
          </p>

          <img src="chat/09_promptDemo.png" alt="chat" />

          <blockquote data-type="tip">
            <p>Once the prompts are set here, the model will refer to this prompt as a set part of its instructions. For example, if you would like the model to provide answers in bullet points, or answer in French (for models that are multi-lingual), providing a set prompt will save the time of always having to enter this prompt in the Chat mode. Also, prompts can be particularly useful when used with RAG, since they steer how the model incorporates retrieved context into a final answer.</p>
          </blockquote>

          <h3 id="24-web-search">2.4 Web search</h3>

          <p>
            Web Search can be enabled when live or time-sensitive information is required. This feature <strong>requires an internet connection</strong> and may rely on third-party search providers.
          </p>

          <img src="chat/10_webSearch.png" alt="chat" />

          <p>
            Supported Web Search services:
          </p>

          <ul>
            <li>Wikipedia</li>
            <li>Tavily (requires API key)</li>
            <li>Serp API (requires API key)</li>
            <li>News API (requires API key)</li>
          </ul>

          <p>
            For services requiring API keys such as NewsAPI, Serp and Tavily, go to <strong>Integrations</strong> on the side nav, select the service and enter the API key for the service. When the API key is entered, you may test the connection by selecting the <strong>Test</strong> button in Integrations.
          </p>

          <p>
            Behavior:
          </p>

          <ul>
            <li>Web results are retrieved at query time and can be blended with document-based retrieval to form answers.</li>
            <li>Prompts can be used to instruct how web results should be cited or weighted against local documents.</li>
          </ul>

          <h3 id="25-configure">2.5 Configure (⚙️)</h3>

          <p>
            The Configure panel exposes generation and retrieval parameters, for example:
          </p>

          <ul>
            <li>Temperature, max tokens, top-p, repetition penalty, chat memory, etc.</li>
            <li>Retrieval options: number of results, similarity threshold, chunk size.</li>
          </ul>

          <p>
            These values can be adjusted to control creativity, response length, and the degree to which retrieved context influences output.
          </p>

          <p>
            For full configuration options, please refer to <a href="/chat/chat-configuration">Chat Configuration</a>
          </p>

          <h3 id="26-info">2.6 Info</h3>

          <p>
            The Info button displays the current configuration settings for your chat model.
          </p>

          <img src="chat/11_info.png" alt="chat" />

          <p>
            This provides information on which model is in use and the configuration parameters currently applied.
          </p>

          <h3 id="27-save-export-chat">2.7 Save / export chat</h3>

          <p>
            The Save control exports the chat transcript as a Markdown (<code>.md</code>) file. The exported transcript includes messages and basic metadata, which can be used to archive or share the session.
          </p>

          <img src="chat/12_download.png" alt="chat" />

          <p>
            The exported <code>.md</code> can be opened with any text editor. Markdown-capable editors will render the transcript; plain editors will display the raw text.
          </p>

          <h2 id="conclusion">Conclusion</h2>

          <p>
            This section described the Chat Interface in Model HQ: how the workspace is launched, how models are downloaded and selected, how RAG can be used with documents and web search, and how configuration can be adjusted. It is suggested to start with simple queries to validate the model, and then add sources and prompts to develop more targeted, reproducible workflows.
          </p>

          <p>
            If detailed troubleshooting or advanced configuration examples are required, the linked guides are available for reference.
          </p>

          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
            <p>
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