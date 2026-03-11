import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function RAGPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>RAG</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Exploring RAG in Model HQ</h1>
      </div>

      <div className="prose prose-gray max-w-none">
        <p>
          Once you complete the initial setup, you will be directed to the <strong>Main Menu</strong>.
          <br />
          This interface provides access to several powerful features. In this section, we will focus on the{" "}
          <strong>RAG</strong> feature, which stands for <strong>Retrieval-Augmented Generation</strong>.
        </p>

        <p>
          RAG combines retrieval-based techniques with generative AI to allow models to answer questions more accurately
          by retrieving relevant information from external sources or documents. With RAG in Model HQ, you can create
          knowledge bases that you can query in the chat section or via a custom bot by uploading documents. The RAG
          section is used only to create the knowledge base.
        </p>

        <p>&nbsp;</p>

        <h2 id="launching-the-rag-interface">1. Launching the RAG Interface</h2>
        <p>
          Click on the <strong>RAG</strong> button from the main menu to get started.
        </p>

        <img src="/v0/rag.png" alt="rag" />

        <p>&nbsp;</p>

        <h2 id="understanding-the-rag-interface">2. Understanding the RAG Interface</h2>
        <p>You will be presented with an interface similar to the one shown below:</p>

        <img src="/v0/rag/rag.png" alt="rag" />

        <p>Key elements of the interface:</p>

        <ul>
          <li>
            <strong>RAG Sources Options</strong>
            <ul>
              <li>
                <strong>Build New</strong>: Create a new RAG source using the available template.
              </li>
              <li>
                <strong>Load Existing</strong>: Load previously created RAG sources.
              </li>
            </ul>
          </li>
          <li>
            <strong>Dropdown</strong>: Displays the list of existing RAG sources.
          </li>
          <li>
            <strong>
              Next ( <code>&gt;</code> ) Button
            </strong>
            : Proceeds to the next step.
          </li>
          <li>
            <strong>Home</strong>: Returns you to the main menu.
          </li>
        </ul>

        <p>&nbsp;</p>

        <h2 id="creating-a-new-rag-source">3. Creating a New RAG Source</h2>
        <p>To create a new RAG source:</p>

        <ul>
          <li>
            Select <strong>Build New</strong> from the RAG interface.
          </li>
        </ul>

        <p>
          You will be prompted to enter a name and select an <strong>Analysis Mode</strong>:
        </p>

        <img src="/v0/rag/createSource.png" alt="rag" />

        <ul>
          <li>
            <strong>Aggregate</strong>: Treat all uploaded documents as a single unit.
          </li>
          <li>
            <strong>Compare</strong>: Enables comparative questions between documents.
          </li>
        </ul>

        <p>
          Click the <code>&gt;</code> button to proceed.
        </p>

        <p>Once created, you will be directed to a screen where you can add documents:</p>

        <img src="/v0/rag/createdSource.png" alt="rag" />

        <p>
          Once the initial group of files are uploaded, you can add more files to the source by selecting{" "}
          <code>+ Add Docs</code>. You are also able to add sources from Wikipedia to the RAG source by selecting{" "}
          <code>Wikipedia</code> and typing in the retrieval topic. This feature also allows you to add the number of
          articles you select (up to 10) from Wikipedia that may be pertinent to your topic.
        </p>

        <p>After uploading, you will gain access to all features in the RAG section:</p>

        <img src="/v0/rag/created.png" alt="rag" />

        <p>&nbsp;</p>

        <h2 id="loading-an-existing-rag-source">4. Loading an Existing RAG Source</h2>
        <p>
          To load an existing RAG source, select the <code>load existing</code> option and click <code>&gt;</code>, and
          then:
        </p>

        <ol>
          <li>Select a RAG source from the dropdown list.</li>
          <li>
            Click the <code>&gt;</code> button to proceed.
          </li>
        </ol>

        <p>
          In the example below, the RAG source <strong>"Clinical_Study"</strong> is selected:
        </p>

        <img src="/v0/rag/ragSource.png" alt="rag" />

        <p>
          Once the source is loaded, you will enter the RAG workspace.
          <br />
          This interface provides detailed information about the selected RAG source and offers several powerful tools
          and options.
        </p>

        <ul>
          <li>Add Docs</li>
          <li>Search</li>
          <li>Test</li>
          <li>Reset (🔄)</li>
          <li>Delete (🗑️)</li>
        </ul>

        <p>&nbsp;</p>

        <h3 id="add-docs">Add Docs</h3>
        <p>Use this button to add additional documents to your RAG source.</p>

        <img src="/v0/rag/addDocs.png" alt="rag" />

        <p>
          Click <strong>Upload File</strong> to import documents. Recommended file types include <code>.pdf</code>,{" "}
          <code>.pptx</code>, <code>.docx</code>, <code>.xlsx</code>, <code>.csv</code>, <code>.txt</code>,{" "}
          <code>.md</code>, <code>.wav</code>, <code>.png</code>, <code>.jpg</code>, and <code>.zip</code>.
        </p>

        <p>
          If you do not have a document on hand, you can use the <strong>Wikipedia</strong> button to import data
          directly from Wikipedia.
        </p>

        <p>
          <strong>Additional controls:</strong>
        </p>
        <ul>
          <li>
            <code>&gt;</code> – Add multiple documents sequentially.
          </li>
          <li>
            <strong>Save + Exit</strong> – Save your uploaded documents and return to the main interface.
          </li>
          <li>
            <strong>Wikipedia</strong> – Add Wikipedia as a knowledge source instead of uploading files.
          </li>
          <li>
            <strong>Configure (⚙️)</strong> – Configure parsing settings such as <strong>text chunk size</strong>.
          </li>
        </ul>

        <blockquote data-type="tip">
          <p>
            Text chunk size determines how the document is segmented into smaller pieces during parsing. Choosing the
            right size is important—too small may lose context, while too large could reduce processing performance or
            exceed model input limits.
          </p>
        </blockquote>

        <img src="/v0/rag/configure.png" alt="rag" />

        <h3 id="search">Search</h3>
        <p>
          The <strong>Search</strong> feature is a core component of the RAG interface, enabling users to query content
          within documents efficiently and effectively.
        </p>

        <img src="/v0/rag/search.png" alt="rag" />

        <p>
          Unlike basic search tools, the RAG-powered search is augmented with semantic understanding. This allows you
          to:
        </p>
        <ul>
          <li>Ask questions naturally (e.g., "What are the key findings of the clinical study?")</li>
          <li>Retrieve precise and relevant answers from uploaded content</li>
          <li>Navigate large volumes of unstructured data quickly</li>
        </ul>

        <p>Add your query in the query field and then select any of the below options:</p>

        <ul>
          <li>
            <strong>Semantic</strong>
            <br />
            Semantic search is a search technique that aims to improve search accuracy by understanding the meaning
            (semantics) behind the words in a query, rather than just matching exact keywords.
          </li>
          <li>
            <strong>keyword-or</strong>
            <br />
            Finds results that contain any of the keywords.
            <br />
            Logic used: OR logic.
            <br />
            Example:
            <br />
            <code>Search: dog OR cat</code>
            <br />→ Returns results with either "dog", "cat", or both.
          </li>
          <li>
            <strong>keyword-and</strong>
            <br />
            Finds results that contain all of the keywords.
            <br />
            Logic used: AND logic.
            <br />
            Example:
            <br />
            <code>Search: dog AND cat</code>
            <br />→ Returns results that contain both "dog" and "cat".
          </li>
          <li>
            <strong>exact</strong>
            <br />
            Finds results that contain the exact phrase in the same order.
            <br />
            Example:
            <br />
            <code>Search: "artificial intelligence"</code>
            <br />→ Only returns results with the full phrase "artificial intelligence", not just "artificial" or
            "intelligence" separately.
          </li>
        </ul>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-muted">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Matches</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Example Query</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Semantic Search</td>
                <td className="border border-gray-300 px-4 py-2">
                  Related meanings or concepts, even if exact words are not present
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <code>benefits of eating apples</code> → matches "health advantages of apples"
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Keyword-OR</td>
                <td className="border border-gray-300 px-4 py-2">Any of the words</td>
                <td className="border border-gray-300 px-4 py-2">
                  <code>apple OR orange</code>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Keyword-AND</td>
                <td className="border border-gray-300 px-4 py-2">All the words</td>
                <td className="border border-gray-300 px-4 py-2">
                  <code>apple AND orange</code>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Exact Search</td>
                <td className="border border-gray-300 px-4 py-2">Exact phrase (in the same order)</td>
                <td className="border border-gray-300 px-4 py-2">
                  <code>"apple orange juice"</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 id="test">Test</h3>
        <p>
          The <strong>Test</strong> button allows you to evaluate your RAG setup by running prompt-based queries against
          it using different AI models.
          <br />
          This is an essential step to ensure that your RAG source responds accurately and effectively to real-world
          questions.
        </p>

        <p>
          You can enter sample questions and review how different models interpret and respond to your document content.
          Based on the responses, you can choose the model that delivers the most accurate or relevant results.
        </p>

        <blockquote>
          <p>For demonstration purposes, we will use the default model and default settings.</p>
        </blockquote>

        <img src="/v0/rag/test.png" alt="rag" />

        <ul>
          <li>
            <strong>Select Test Document</strong>:
            <br />
            Either choose all the documents or select any one you have uploaded (via "add-docs" button) for testing
            purpose.
          </li>
          <li>
            <strong>Question</strong>:
            <br />
            Ask a question related to the document to test the model.
          </li>
          <li>
            <strong>Model Selection</strong>:
            <br />
            Select a model as per your need or select random models to test them.
          </li>
          <li>
            <strong>context_top_n</strong>:
            <br />
            Increase or decrease the number of top text chunks use to create context for model.
          </li>
        </ul>

        <blockquote data-type="tip">
          <p>
            Context Top N refers to selecting the top N most relevant pieces of information (e.g., text chunks) from a
            larger context based on similarity to a query, and it's important because it ensures the model focuses on
            the most pertinent data to generate accurate and relevant responses. Choosing this will give you the number
            of results you indicate which is particularly important if you selected the "Compare" feature for the
            source, and would like to see individual results.
            <br />
            <br />
            <strong>Example:</strong> We uploaded 8 individual employment agreements in our source, and selected
            "context_top_n" as 8 so that we can get the answers for all 8 agreements about their base salaries in each
            of these agreements.
          </p>
        </blockquote>

        <ul>
          <li>
            <strong>context_target_size</strong>
            <br />
            Select the target token size for the context. If target size not reached with selected top_n, then will add
            more text chunks to reach target size.
          </li>
        </ul>

        <blockquote data-type="tip">
          <p>
            Context target size is the predefined maximum amount of text (in tokens) that can be included in a model's
            input, and it balances the trade-off between including enough relevant information and staying within the
            model's processing limits to ensure efficient and coherent responses.
          </p>
        </blockquote>

        <ul>
          <li>
            <strong>Action buttons</strong>
            <ul>
              <li>
                <code>&gt;</code> button: Runs the test query and displays the output
              </li>
              <li>
                <strong>Save + Exit</strong> button: Save the current settings and exit the Test button interface.
              </li>
              <li>
                <strong>Download</strong> button: Download the results of the run test cases so that you can use this
                information to compare results against other test runs using different models, queries and
                configurations.
              </li>
              <li>
                <strong>Home</strong> button: Takes you back to the home page.
              </li>
            </ul>
          </li>
        </ul>

        <img src="/v0/rag/test1.png" alt="rag" />

        <h3>Reset (🔄)</h3>
        <p>Resets any modifications made to the current RAG source.</p>

        <h3>Delete (🗑️)</h3>
        <p>Deletes the selected RAG source entirely from your workspace.</p>

        <p>&nbsp;</p>

        <h2>Conclusion</h2>
        <p>
          In this documentation, we explored the <strong>RAG</strong> source-building functionality in Model HQ.
          <br />
          We covered how to create new and load existing RAG sources, and utilize tools like document upload, semantic
          search, testing, and configuration settings.
        </p>

        <p>
          If you have any questions or feedback, please contact us at <code>support@aibloks.com</code>.
        </p>
      </div>
    </div>
  )
}
