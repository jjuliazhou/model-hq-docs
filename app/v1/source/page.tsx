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

export default function SourcePage() {
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
              <BreadcrumbPage>Exploring Source in Model HQ</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Source</h1>
        </div>

        <div className="prose prose-gray max-w-none">
          <p>
            After completing the initial setup, users will be directed to the <strong>Main Menu</strong>. This interface provides access to several powerful features. In this section, the <strong>Source</strong> (or RAG Source) feature will be described. RAG, which stands for <strong>Retrieval-Augmented Generation</strong>, is a feature within Model HQ to help users search their documents or other knowledge bases.
          </p>

          <p>
            The Source section is used to create, test and interact with user-created knowledge bases. Once created, the user-created Source can be later incorporated into Chat, Bot or Agents as a knowledge base.
          </p>

          <p>
            RAG combines retrieval-based techniques with generative AI to enable models to answer questions more accurately by retrieving relevant information from external sources or documents. With RAG in Model HQ, knowledge bases can be created that can be queried in the chat section or via a custom bot (to be used either standalone or in an Agent workflow) by uploading documents or other information that the model can use when searching for information.
          </p>

          <h2 id="1-launching-the-source-interface">1. Launching the source interface</h2>

          <p>
            To begin, the <strong>Source</strong> button in the main menu can be selected to launch the source interface.
          </p>

          <img src="/v1/source/01_source.png" alt="source" />

          <h2 id="2-understanding-the-source-interface">2. Understanding the source interface</h2>

          <p>
            The source interface typically provides two options, but when accessed for the first time, only one option will be visible: <code>build new</code>, as shown below:
          </p>

          <img src="/v1/source/02_sourceInterface.png" alt="source" />

          <p>
            Key elements of the interface:
          </p>

          <ul>
            <li><strong>RAG Sources Options</strong>
              <ul>
                <li><strong>Build New</strong>: A new source can be created using the available template.</li>
                <li><strong>Load Existing</strong>: Previously created sources can be loaded and reused.</li>
              </ul></li>
          </ul>

          <p>
            The second option (<code>load existing</code>) becomes available only when at least one source has been created. The following sections describe how sources are created.
          </p>

          <h2 id="3-creating-a-source">3. Creating a source</h2>

          <p>
            Since there are no existing sources initially, the <strong>Next ( &gt; )</strong> button can be clicked to build a new source. To create a source at any time, the <strong>Build New</strong> option should be selected.
          </p>

          <img src="/v1/source/03_standardSource.png" alt="source" />

          <p>
            When creating a new source, the basic source settings are configured first before any data is uploaded.
          </p>

          <h3 id="31-source-configuration">3.1 Source configuration</h3>

          <ul>
            <li><strong>Source Name:</strong> A unique name to identify the source. This name will be used when selecting sources across bots and workflows.</li>
          </ul>

          <ul>
            <li><strong>Encrypt Source:</strong> When enabled, the source will be encrypted at rest on disk. This is recommended for sensitive or confidential data.</li>
          </ul>

          <ul>
            <li><strong>Source Type:</strong> The type of source to be built can be selected from:
              <ul>
                <li><strong>Standard</strong>: Used for multi-format documents such as PDF, PPTX, DOCX, XLSX, PNG, and JPEG.</li>
                <li><strong>Dataset</strong>: Used for structured data sources such as CSV or JSON files.</li>
              </ul></li>
          </ul>

          <p>
            The following sections will first describe how a <strong>Standard Source</strong> is created, followed by the creation of a <strong>Dataset Source</strong>.
          </p>

          <blockquote data-type="note">
            <p>Standard Source and Dataset Source both are completely different from one another and thus they have different interfaces.</p>
          </blockquote>

          <h2 id="4-creating-a-standard-source">4. Creating a standard source</h2>

          <p>
            After creating and naming a Standard source, the RAG Builder – Source view will be displayed. This page represents the active source and provides actions to manage documents and test retrieval.
          </p>

          <img src="/v1/source/03_standardSource.png" alt="source" />

          <p>
            From this interface, documents can be added, searches can be performed within the source, RAG responses can be tested, the indexed library can be viewed, links can be managed, and the source can be deleted.
          </p>

          <p>
            The following subsections describe each of these functions in detail.
          </p>

          <h3 id="40-rag-builder">4.0 RAG Builder</h3>

          <img src="/v1/source/04_standardSourceOptions.png" alt="source" />

          <h3 id="41-uploading-documents">4.1 Uploading documents</h3>

          <p>
            The <code>Add Docs</code> button can be clicked to upload files into the source. This action opens the document upload interface.
          </p>

          <img src="/v1/source/05_standardSourceUploadDocs.png" alt="source" />

          <p>
            Supported file types such as <code>.pdf</code>, <code>.pptx</code>, <code>.docx</code>, <code>.xlsx</code>, <code>.csv</code>, <code>.txt</code>, <code>.md</code>, <code>.wav</code>, <code>.png</code>, <code>.jpg</code>, and <code>.zip</code> archives can be browsed and uploaded. Multiple files can be uploaded to the same source.
          </p>

          <p>
            Users may upload multiple files by selecting a file, then clicking "{'>'}" and continuing to do so until all the desired files are added to the source.
          </p>

          <p>
            After selecting the complete set of files, the Save + Exit button can be clicked to process the documents and return to the source view.
          </p>

          <h4 id="411-parsing-configuration">4.1.1 Parsing configuration</h4>

          <p>
            The <strong>Configure (⚙️)</strong> icon can be clicked from the upload screen to control how documents are parsed and indexed.
          </p>

          <img src="/v1/source/06_standardSourceConfigure.png" alt="source" />

          <p>
            The following configuration options are available:
          </p>

          <div className="overflow-x-auto">
            {/* Desktop Table View */}
            <table className="hidden md:table w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left">Configuration Option</th>
                  <th className="border border-border px-4 py-2 text-left">Description</th>
                  <th className="border border-border px-4 py-2 text-left">Default</th>
                  <th className="border border-border px-4 py-2 text-left">Recommended Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>PDF Parsing Options</strong></td>
                  <td className="border border-border px-4 py-2">Controls how PDF files are processed</td>
                  <td className="border border-border px-4 py-2">Digital (Fastest)</td>
                  <td className="border border-border px-4 py-2">Digital is faster and suitable for text-based PDFs. OCR should be used for scanned or image-heavy PDFs.</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Image Parsing Options</strong></td>
                  <td className="border border-border px-4 py-2">Controls how image files are processed</td>
                  <td className="border border-border px-4 py-2">OCR</td>
                  <td className="border border-border px-4 py-2">OCR focuses on extracting text, while Vision Model provides richer descriptions for image-based content.</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Text Chunk Size</strong></td>
                  <td className="border border-border px-4 py-2">Defines how documents are split during indexing</td>
                  <td className="border border-border px-4 py-2">400-600 tokens</td>
                  <td className="border border-border px-4 py-2">Smaller chunks improve retrieval precision, while larger chunks retain more context.</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2"><strong>Interpret CSV as DB Table</strong></td>
                  <td className="border border-border px-4 py-2">Treats CSV files as structured tables</td>
                  <td className="border border-border px-4 py-2">OFF</td>
                  <td className="border border-border px-4 py-2">When enabled, CSV files are treated as structured tables instead of plain text, allowing more accurate data queries.</td>
                </tr>
              </tbody>
            </table>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Configuration Option</h5>
                    <p className="text-sm mt-1 break-words"><strong>PDF Parsing Options</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Controls how PDF files are processed</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">Digital (Fastest)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Recommended Use</h5>
                    <p className="text-sm mt-1 break-words">Digital is faster and suitable for text-based PDFs. OCR should be used for scanned or image-heavy PDFs.</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Configuration Option</h5>
                    <p className="text-sm mt-1 break-words"><strong>Image Parsing Options</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Controls how image files are processed</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">OCR</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Recommended Use</h5>
                    <p className="text-sm mt-1 break-words">OCR focuses on extracting text, while Vision Model provides richer descriptions for image-based content.</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Configuration Option</h5>
                    <p className="text-sm mt-1 break-words"><strong>Text Chunk Size</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Defines how documents are split during indexing</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">400-600 tokens</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Recommended Use</h5>
                    <p className="text-sm mt-1 break-words">Smaller chunks improve retrieval precision, while larger chunks retain more context.</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Configuration Option</h5>
                    <p className="text-sm mt-1 break-words"><strong>Interpret CSV as DB Table</strong></p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Description</h5>
                    <p className="text-sm mt-1 break-words">Treats CSV files as structured tables</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Default</h5>
                    <p className="text-sm mt-1 break-words">OFF</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Recommended Use</h5>
                    <p className="text-sm mt-1 break-words">When enabled, CSV files are treated as structured tables instead of plain text, allowing more accurate data queries.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <blockquote data-type="tip">
            <p>Text chunk size determines how the document is segmented into smaller pieces during parsing. Choosing the right size is important—too small may lose context, while too large could reduce processing performance or exceed model input limits.</p>
          </blockquote>

          <p>
            These options can be updated at any time and will apply to documents processed after the change.
          </p>

          <p>
            If any issues are encountered related to document parsing, the [Document Parsing Issues]() guide can be consulted.
          </p>

          <h3 id="42-search">4.2 Search</h3>

          <p>
            The <strong>Search</strong> feature is a core component of the RAG interface, enabling the source content to be queried efficiently and effectively.
          </p>

          <img src="/v1/source/07_standardSourceSearch.png" alt="source" />

          <p>
            Unlike basic search tools, the RAG-powered search is augmented with semantic understanding. This enables:
          </p>

          <ul>
            <li>Natural language questions to be asked (e.g., "What are the key findings of the clinical study?")</li>
            <li>Precise and relevant answers to be retrieved from uploaded content</li>
            <li>Large volumes of unstructured data to be navigated quickly</li>
          </ul>

          <p>
            The query can be entered in the query field, and one of the following search strategies can be selected:
          </p>

          <ul>
            <li><strong>Semantic</strong> Semantic search is a technique that aims to improve search accuracy by understanding the meaning (semantics) behind the words in a query, rather than matching exact keywords only. Users may use natural language to use this semantic search feature to query their source.</li>
          </ul>

          <ul>
            <li><strong>keyword-or</strong> Results that contain any of the keywords will be found. ``<code> Search: dog OR cat → Returns results with either "dog", "cat", or both. </code>``
              <ul>
                <li>Logic used: OR logic.</li>
                <li>Example:</li>
              </ul></li>
          </ul>

          <ul>
            <li><strong>keyword-and</strong> Results that contain all of the keywords will be found. ``<code> Search: dog AND cat → Returns results that contain both "dog" and "cat". </code>``
              <ul>
                <li>Logic used: AND logic.</li>
                <li>Example:</li>
              </ul></li>
          </ul>

          <ul>
            <li><strong>exact</strong> Results that contain the exact word or phrase in the same order will be found. ``<code> Search: "artificial intelligence" → Only returns results with the full phrase "artificial intelligence", not just "artificial" or "intelligence" separately. </code>``
              <ul>
                <li>Example:</li>
              </ul></li>
          </ul>

          <div className="overflow-x-auto">
            {/* Desktop Table View */}
            <table className="hidden md:table w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left">Type</th>
                  <th className="border border-border px-4 py-2 text-left">Matches</th>
                  <th className="border border-border px-4 py-2 text-left">Example Query</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-2">Semantic Search</td>
                  <td className="border border-border px-4 py-2">Related meanings or concepts, even if exact words are not present</td>
                  <td className="border border-border px-4 py-2"><code>benefits of eating apples</code> → matches “health advantages of apples”</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Keyword-OR</td>
                  <td className="border border-border px-4 py-2">Any of the words</td>
                  <td className="border border-border px-4 py-2"><code>apple OR orange</code></td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Keyword-AND</td>
                  <td className="border border-border px-4 py-2">All the words</td>
                  <td className="border border-border px-4 py-2"><code>apple AND orange</code></td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-2">Exact Search</td>
                  <td className="border border-border px-4 py-2">Exact phrase (in the same order)</td>
                  <td className="border border-border px-4 py-2"><code>"apple orange juice"</code></td>
                </tr>
              </tbody>
            </table>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Semantic Search</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Matches</h5>
                    <p className="text-sm mt-1 break-words">Related meanings or concepts, even if exact words are not present</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Example Query</h5>
                    <p className="text-sm mt-1 break-words"><code>benefits of eating apples</code> → matches “health advantages of apples”</p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Keyword-OR</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Matches</h5>
                    <p className="text-sm mt-1 break-words">Any of the words</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Example Query</h5>
                    <p className="text-sm mt-1 break-words"><code>apple OR orange</code></p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Keyword-AND</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Matches</h5>
                    <p className="text-sm mt-1 break-words">All the words</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Example Query</h5>
                    <p className="text-sm mt-1 break-words"><code>apple AND orange</code></p>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-card">
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Type</h5>
                    <p className="text-sm mt-1 break-words">Exact Search</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Matches</h5>
                    <p className="text-sm mt-1 break-words">Exact phrase (in the same order)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Example Query</h5>
                    <p className="text-sm mt-1 break-words"><code>"apple orange juice"</code></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 id="43-test">4.3 Test</h3>

          <p>
            The <strong>Test</strong> option allows the Source that is created to be evaluated by running prompt-based queries against it using different AI models.
          </p>

          <img src="/v1/source/08_standardSourceTest.png" alt="source" />

          <p>
            This is an essential step to ensure that the RAG source responds accurately and effectively to real-world questions and meets the user's usage goals.
          </p>

          <p>
            Sample questions can be entered and different models can be compared to see how they interpret and respond to document content. Based on the responses, the model that delivers the most accurate or relevant results can be selected.
          </p>

          <p>
            Testing a RAG Source requires the following inputs:
          </p>

          <ul>
            <li><strong>Select Test Document</strong> Either all documents can be selected or any one uploaded document (via "add-docs" button) can be chosen for testing purposes.</li>
          </ul>

          <ul>
            <li><strong>Question</strong> A question related to the document content should be entered to test the model's response.</li>
          </ul>

          <ul>
            <li><strong>Model Selection</strong> A model can be selected based on specific needs, or multiple models can be tested to compare their performance.</li>
          </ul>

          <ul>
            <li><strong>context_top_n</strong> Increase or decrease the number of top text chunks use to create context for model.</li>
          </ul>

          <blockquote data-type="tip">
            <p>
              Context Top N refers to selecting the top N most relevant pieces of information (e.g., text chunks) from a larger context based on similarity to a query, and it's important because it ensures the model focuses on the most pertinent data to generate accurate and relevant responses. Choosing this will give you the number of results you indicate which is particularly important if you selected the "Compare" feature for the source, and would like to see individual results.
            </p>

            <div>
              <p><strong>Example of Testing a Source</strong></p>

              <p>
                We created a Source called Testing011426 which consisted of an Employment Agreement (PDF — sample docs are in <code>C:\Users\[user name]\llmware_data\Agreements</code>) and a screenshot of a financial table.
              </p>

              <img src="/v1/source/09_sampleDoc.png" alt="source" />

              <br />

              <p>
                We are able to ask the Source questions about both the Employment Agreement as well as the Financial Table because they are in the same Source.
              </p>
              <details>
                <summary>Click to see the example Q&A</summary>
                <p>Example of Financial Table Query:</p>
                <img src="/v1/source/10_finanQuery.png" alt="source" />
                <br />
                <p>Example of Financial Table Answer:</p>
                <img src="/v1/source/11_finanResult.png" alt="source" />
                <br />
                <p>Example of Employment Agreement Query:</p>
                <img src="/v1/source/12_employQuery.png" alt="source" />
                <br />
                <p>Example of Employment Agreement Answer:</p>
                <img src="/v1/source/13_employResult.png" alt="source" />
              </details>
            </div>
          </blockquote>

          <ul>
            <li><strong>context_target_size</strong> Select the target token size for the context. If target size not reached with selected top_n, then will add more text chunks to reach target size.</li>
          </ul>

          <blockquote data-type="tip">
            <p>
              Context target size is the predefined maximum amount of text (in tokens) that can be included in a model’s input, and it balances the trade-off between including enough relevant information and staying within the model’s processing limits to ensure efficient and coherent responses.
            </p>
          </blockquote>

          <h3 id="44-other-options">4.4 Other options</h3>

          <h4 id="441-library">4.4.1 Library</h4>

          <p>
            The source can be exported to the library in the local database.
          </p>

          <h4 id="442-download">4.4.2 Download</h4>

          <p>
            The source can be exported to text (markdown file) and downloaded.
          </p>

          <h4 id="443-links">4.4.3 Links</h4>

          <p>
            If the source contains links (e.g., from a web search), this option will return a list of only the links found in the search-based source.
          </p>

          <h4 id="444-delete">4.4.4 Delete</h4>

          <p>
            The source can be deleted from the system.
          </p>

          <h2 id="5-creating-a-dataset-source">5. Creating a dataset source</h2>

          <p>
            To create a dataset source, the source creation process should be started again.
          </p>

          <img src="/v1/source/14_datasetSource.png" alt="source" />

          <p>
            Learn more about creating a dataset source in <a href="/models/datasets">Datasets</a>
          </p>

          <h2 id="6-load-existing-source">6. Load existing source</h2>

          <p>
            This option allows RAG functionality to be quickly accessed for sources that have been previously created.
          </p>

          <p>
            Sources can be configured and deleted as needed from this interface.
          </p>

          <h2 id="conclusion">Conclusion</h2>

          <p>
            This document described the Source (RAG) feature in Model HQ, including how to launch the source interface, create standard and dataset sources, configure parsing options, perform searches, and test RAG responses. Sources provide the foundation for knowledge base creation in Model HQ, enabling document-based context retrieval for chat sessions and custom bots. Standard sources support multi-format documents such as PDFs, presentations, and images, while dataset sources are optimized for structured data like CSV and JSON files. Once created, sources can be tested with different models, configured with various retrieval parameters, and reused across multiple workflows. Understanding how to create and configure sources effectively enables more accurate, context-aware AI responses throughout Model HQ.
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
