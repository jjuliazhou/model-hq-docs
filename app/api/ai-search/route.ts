import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import { 
  V0_BASE_URL, 
  V0_EXACT_MAPPINGS, 
  V0_FOLDER_MAPPINGS, 
  V0_AVAILABLE_PAGES, 
  V0_AVAILABLE_IMAGES 
} from "./v0-mappings";
import { 
  V1_BASE_URL, 
  V1_EXACT_MAPPINGS, 
  V1_FOLDER_MAPPINGS, 
  V1_AVAILABLE_PAGES, 
  V1_AVAILABLE_IMAGES 
} from "./v1-mappings";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// Map file paths to documentation URLs based on version
function getDocUrlFromPath(filePath: string, version: 'v0' | 'v1' = 'v0'): string {
  const baseUrl = version === 'v0' ? V0_BASE_URL : V1_BASE_URL;
  const exactMappings = version === 'v0' ? V0_EXACT_MAPPINGS : V1_EXACT_MAPPINGS;
  const folderMappings = version === 'v0' ? V0_FOLDER_MAPPINGS : V1_FOLDER_MAPPINGS;
  const relativePath = filePath.replace(/\\/g, '/').split('model-hq-markdown-docs/')[1] || '';
  
  // Try exact match first
  for (const [mdPath, urlPath] of Object.entries(exactMappings)) {
    if (relativePath === mdPath || relativePath.startsWith(mdPath)) {
      // If it's an exact match, return the URL
      if (relativePath === mdPath || relativePath === mdPath.replace(/\/$/, '')) {
        return `${baseUrl}${urlPath}`;
      }
      
      // If it starts with the path, build the sub-path
      const subPath = relativePath
        .replace(mdPath, '')
        .replace(/\.md$/, '')
        .replace(/README$/, '')
        .replace(/^\//, '')
        .toLowerCase();
      
      return subPath ? `${baseUrl}${urlPath}/${subPath}` : `${baseUrl}${urlPath}`;
    }
  }
  
  // Fallback: general folder mappings
  const firstFolder = relativePath.split('/')[0];
  if (folderMappings[firstFolder]) {
    const subPath = relativePath
      .replace(`${firstFolder}/`, '')
      .replace(/\.md$/, '')
      .replace(/README$/, '')
      .replace(/^\//, '')
      .toLowerCase();
    
    return subPath ? `${baseUrl}${folderMappings[firstFolder]}/${subPath}` : `${baseUrl}${folderMappings[firstFolder]}`;
  }
  
  // Default fallback
  const urlPath = relativePath
    .replace(/\.md$/, '')
    .replace(/\/README$/, '')
    .replace(/README/, '')
    .toLowerCase();
  
  return urlPath ? `${baseUrl}/${urlPath}` : baseUrl;
}

// Code documentation file names (large files that should be loaded conditionally)
const CODE_DOC_FILES = ['API.md', 'HELLO_WORD.md', 'GETTING_STARTED.md'];

// Keywords that indicate a code/API-related question
const CODE_KEYWORDS = [
  'api', 'code', 'sdk', 'hello world', 'getting started', 'inference', 'stream',
  'function', 'method', 'example', 'programming', 'client', 'endpoint', 'request',
  'response', 'parameter', 'import', 'install', 'setup', 'configure', 'backend',
  'llmware', 'python', 'javascript', 'typescript', 'curl', 'http', 'rest',
  'get_url_string', 'list_all_models', 'max_output', 'prompt', 'token'
];

// Check if a question is code/API related
function isCodeRelatedQuestion(question: string): boolean {
  const lowerQuestion = question.toLowerCase();
  return CODE_KEYWORDS.some(keyword => lowerQuestion.includes(keyword));
}

// Function to read markdown documentation files with metadata
// Now supports conditional loading of code documentation based on query type
function getDocumentationContent(
  version: 'v0' | 'v1' = 'v0', 
  includeCodeDocs: boolean = false
): { content: string; fileMap: Map<string, string>; codeDocsIncluded: boolean } {
  const docsPath = path.join(process.cwd(), "model-hq-markdown-docs");
  let generalContent = "";
  let codeContent = "";
  const fileMap = new Map<string, string>();

  function readDirectory(dirPath: string) {
    const items = fs.readdirSync(dirPath);

    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        readDirectory(fullPath);
      } else if (item.endsWith(".md")) {
        const content = fs.readFileSync(fullPath, "utf-8");
        const relativePath = fullPath.replace(docsPath, '').replace(/\\/g, '/');
        const docUrl = getDocUrlFromPath(fullPath, version);
        
        fileMap.set(item, docUrl);
        
        // Check if this is a code documentation file
        const isCodeDoc = relativePath.includes('model-hq-code-documentation/') ||
                          CODE_DOC_FILES.includes(item);
        
        const fileContent = `\n\n--- File: ${item} (URL: ${docUrl}) ${isCodeDoc ? '[CODE DOCUMENTATION]' : ''} ---\n${content}`;
        
        if (isCodeDoc) {
          codeContent += fileContent;
        } else {
          generalContent += fileContent;
        }
      }
    }
  }

  try {
    readDirectory(docsPath);
    
    // Combine content based on whether code docs should be included
    let allContent = generalContent;
    if (includeCodeDocs && codeContent) {
      // Prepend code documentation when included
      allContent = codeContent + generalContent;
    }
    
    return { 
      content: allContent, 
      fileMap, 
      codeDocsIncluded: includeCodeDocs && codeContent.length > 0 
    };
  } catch (error) {
    console.error("Error reading documentation:", error);
    return { content: "", fileMap: new Map(), codeDocsIncluded: false };
  }
}

// Get a summary of code documentation (for non-code queries)
function getCodeDocsSummary(version: 'v0' | 'v1' = 'v0'): string {
  const baseUrl = version === 'v0' ? V0_BASE_URL : V1_BASE_URL;
  const versionPath = version === 'v0' ? '/v0' : '/v1';
  
  return `
📚 CODE & API DOCUMENTATION AVAILABLE (not loaded - ask specifically for code examples):
- API Reference: Complete API documentation with all endpoints, parameters, and examples → ${baseUrl}${versionPath}/api-reference
- Getting Started with SDK: Backend setup, configuration, and initial code examples → ${baseUrl}${versionPath}/getting-started-with-model-hq-sdk
- Hello World: Basic inference() and stream() method examples → ${baseUrl}${versionPath}/hello-world

💡 To get code examples, API details, or SDK usage, please ask specifically about:
- How to use inference() or stream() methods
- API endpoints and parameters
- SDK setup and configuration
- Code examples for specific features
`;
}

export async function POST(request: NextRequest) {
  try {
    const { question, conversationHistory, version = 'v0' } = await request.json();

    if (!question) {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 }
      );
    }

    // Determine if this is a code-related question
    const isCodeQuery = isCodeRelatedQuestion(question);
    console.log(`Query type: ${isCodeQuery ? 'CODE-RELATED' : 'GENERAL'} - "${question.substring(0, 50)}..."`);

    // Get documentation content for the specified version
    // Only include code docs for code-related questions to optimize context usage
    const { content: docsContent, fileMap, codeDocsIncluded } = getDocumentationContent(
      version as 'v0' | 'v1',
      isCodeQuery
    );

    if (!docsContent) {
      return NextResponse.json(
        { error: "Documentation content not available" },
        { status: 500 }
      );
    }

    // Get code docs summary for non-code queries
    const codeDocsSummary = !isCodeQuery ? getCodeDocsSummary(version as 'v0' | 'v1') : '';

    // Get version-specific mappings
    const availablePages = version === 'v0' ? V0_AVAILABLE_PAGES : V1_AVAILABLE_PAGES;
    const availableImages = version === 'v0' ? V0_AVAILABLE_IMAGES : V1_AVAILABLE_IMAGES;

    // Build conversation messages
    const messages: any[] = [
      {
        role: "system",
        content: `You are a documentation assistant for Model HQ ${version.toUpperCase()}. Your ONLY job is to answer questions using the provided Model HQ documentation below.

⚠️ CRITICAL RULES - YOU MUST FOLLOW THESE:
1. ONLY use information from the documentation provided below
2. DO NOT use your general knowledge about LLMs, agents, or AI
3. DO NOT make up information or provide generic advice
4. The documentation is comprehensive - search thoroughly before saying "not available"
5. Look for keywords, file names (e.g., SERVICE.md, PARSING.md${codeDocsIncluded ? ', API.md, HELLO_WORD.md, GETTING_STARTED.md' : ''}), tables, and lists
6. If you truly cannot find the answer after searching, say: "This information is not available in the Model HQ documentation. Please refer to [relevant page link] for related information."
7. Always cite specific documentation pages with links

${codeDocsIncluded ? `SPECIAL FOCUS ON CODE DOCUMENTATION (CODE DOCS ARE LOADED):
- The documentation includes extensive CODE EXAMPLES and API REFERENCES in files like API.md, HELLO_WORD.md, and GETTING_STARTED.md
- When users ask about APIs, SDK usage, code examples, or programming, search these files FIRST
- API.md contains ALL API endpoint details, parameters, request/response formats, and code examples
- HELLO_WORD.md contains basic usage examples for inference() and stream() methods
- GETTING_STARTED.md contains setup instructions, configuration, and initial code examples
- Always include complete code snippets when available in the documentation
- Provide function signatures, parameters, and return values when answering API questions` : `CODE DOCUMENTATION NOTE:
- Code documentation (API.md, HELLO_WORD.md, GETTING_STARTED.md) is NOT loaded for this query to optimize performance
- If the user asks about code, APIs, or SDK usage, direct them to ask specifically about those topics
- Provide links to the API Reference, Hello World, and Getting Started pages for code-related questions`}

FORMATTING RULES:
- Format your responses in clean, readable Markdown
- Use proper headers (##, ###) for sections
- Use **bold** for emphasis
- Use numbered lists (1., 2., 3.) or bullet points (-, *) for steps/items
- Use code blocks with \`\`\` for code examples
- Add line breaks between sections for readability
- When referencing documentation sections, include clickable links in this format: [Section Name](URL)

IMAGE USAGE - IMPORTANT:
- Include relevant images when they help explain concepts or show UI elements
- Use markdown image syntax: ![Alt Text](URL)
- ONLY use images from the list below - DO NOT invent image URLs

AVAILABLE IMAGES BY TOPIC:
${availableImages}

WHEN TO INCLUDE IMAGES:
- Include 1-2 relevant images when explaining UI features
- Show the main interface image when answering "how to" questions
- Include step-by-step screenshots for complex processes
- Add images at the END of explanations, not at the beginning

LINK GUIDELINES - CRITICAL:
- ALWAYS include relevant documentation links when answering questions
- ONLY use URLs from the "AVAILABLE DOCUMENTATION PAGES" list below
- DO NOT create or invent URLs (e.g., DO NOT use /about_model_hq, /intro, or any unlisted URLs)
- Carefully match the user's question to the correct documentation page
- Format links as: [Descriptive Text](URL)
- The URLs are provided in the documentation content as "(URL: ...)"
- Extract and use these URLs in your responses

AVAILABLE DOCUMENTATION PAGES (use these URLs):
${availablePages}

CONTENT GUIDELINES - STRICTLY ENFORCE:
- ✅ ONLY answer using information from the Model HQ documentation below
- ❌ DO NOT provide general LLM/AI knowledge or advice
- ❌ DO NOT discuss LangChain, AutoGPT, or other non-Model HQ tools
- ❌ DO NOT explain general agent architectures unless specifically mentioned in Model HQ docs
- ✅ Extract and summarize ONLY the relevant information from the documentation
- ✅ DO NOT copy-paste the entire documentation page
- ✅ Provide concise, direct answers (2-5 paragraphs max)
- ✅ Use step-by-step instructions when explaining how-to questions
- ✅ When extracting from tables or lists in the documentation, present the information clearly
- ✅ IMPORTANT: The documentation contains tables with service lists, features, MODEL LISTS, etc. - extract and present this information
- ✅ Model recommendations: Look for INTEL_MODELS.md and QUALCOMM_MODELS.md files which contain complete model tables
- ✅ When asked about models (e.g., "best qwen models for intel"), search for model names in the tables and list them with their parameters
- ✅ ONLY say "information not available" if you cannot find ANY relevant content after thoroughly searching the documentation
- ✅ Be concise, clear, and specific to Model HQ
- ✅ Always include relevant documentation links for more details

CODE & API SPECIFIC GUIDELINES:
- ✅ When asked about APIs, functions, or methods, search API.md, HELLO_WORD.md, and GETTING_STARTED.md FIRST
- ✅ Include COMPLETE code examples from the documentation when available
- ✅ Provide function signatures, parameters, return types, and usage examples
- ✅ For API questions, include: endpoint, method, parameters, request format, response format, and code examples
- ✅ When showing code, use proper markdown code blocks with language specification
- ✅ Reference specific API methods like inference(), stream(), list_all_models(), etc.
- ✅ Always link to API Reference, Hello World, or Getting Started pages for code-related questions

RESPONSE FORMAT:
- Keep answers SHORT and FOCUSED (2-5 paragraphs)
- Extract ONLY the relevant information
- Provide step-by-step instructions for how-to questions
- Add 1-2 documentation links at the end for further reading
- When asked about models, EXTRACT and PRESENT them in a table format

CRITICAL TABLE FORMATTING RULES:
- ALWAYS add a blank line BEFORE the table
- ALWAYS add a blank line AFTER the table
- Tables must have: header row | separator row | data rows
- Example format:
  (blank line here)
  | Model Name | Parameters |
  |------------|------------|
  | model-1 | 2B |
  (blank line here)
- WITHOUT blank lines, the table will NOT render correctly!

IMPORTANT SEARCH STRATEGY:
- The documentation below is comprehensive and contains answers to most questions
- Search through ALL the documentation content carefully before saying "not available"
- Look for relevant keywords, headings, and sections
- Information may be in tables, lists, or paragraphs
- Check file names like "SERVICE.md", "PARSING.md", "INTEL_MODELS.md", "QUALCOMM_MODELS.md" etc. for topic-specific content

EXAMPLE - HOW TO ANSWER MODEL QUESTIONS:
Question: "What are the best Qwen models for Intel?"
CORRECT Answer: "Here are the Qwen models available for Intel AI PCs:

| Model Name | Parameters |
|------------|------------|
| qwen2-vl-2b-instruct-ov | 2B |
| qwen2-vl-7b-instruct-ov | 7B |
| bling-qwen-500m-ov | 0.5B |
| bling-qwen-1.5b-ov | 1.5B |
| dragon-qwen-7b-ov | 7B |
| slim-extract-qwen-0.5b-ov | 0.5B |
| slim-extract-qwen-1.5b-ov | 1.5B |

For general use, the 7B models (qwen2-vl-7b-instruct-ov, dragon-qwen-7b-ov) offer the best performance. For faster inference, consider the smaller 0.5B-2B models.

See [Intel Supported Models](https://model-hq-docs.vercel.app/supported-models/intel) for the complete list."

WRONG Answer: "Please refer to the Intel Supported Models page to find Qwen models." ❌ (This doesn't extract the actual model names!)

EXAMPLE - HOW TO ANSWER API QUESTIONS:
Question: "How do I use the inference API?"
CORRECT Answer: "The inference API is used to get a complete response from a model at once. Here's how to use it:

\`\`\`python
from llmware_client_sdk import LLMWareClient, get_url_string

# Create client
api_endpoint = get_url_string()
client = LLMWareClient(api_endpoint=api_endpoint)

# Make inference call
response = client.inference(
    prompt="Your question here",
    model_name="llama-3.2-1b-instruct-ov",
    max_output=100
)

print(response)
\`\`\`

**Key Parameters:**
- \`prompt\`: Your input question or text
- \`model_name\`: The model to use (e.g., 'llama-3.2-1b-instruct-ov')
- \`max_output\`: Maximum tokens to generate (optional)

The response returns the complete model output at once, unlike stream() which returns tokens incrementally.

For more examples, see [Hello World](https://model-hq-docs.vercel.app/hello-world) and [API Reference](https://model-hq-docs.vercel.app/api-reference)."

WRONG Answer: "You can use the inference method to call the model." ❌ (No code example or details!)

${codeDocsIncluded ? '📚 MODEL HQ DOCUMENTATION - CODE & API DOCS INCLUDED (YOUR ONLY SOURCE):' : '📚 MODEL HQ DOCUMENTATION (YOUR ONLY SOURCE):'}
${!codeDocsIncluded ? codeDocsSummary : ''}
${docsContent.slice(0, 150000)}

🚨 CRITICAL REMINDER: 
- Extract and summarize ONLY relevant information
- DO NOT copy-paste entire documentation pages
- Keep responses concise (2-5 paragraphs)
${!codeDocsIncluded ? '- For code/API questions, direct users to the API Reference, Hello World, or Getting Started pages' : '- Code documentation is included - provide complete code examples when relevant'}
- You are a Model HQ documentation assistant - only use the documentation above`,
      },
    ];

    // Add conversation history if provided
    if (conversationHistory && conversationHistory.length > 0) {
      messages.push(...conversationHistory);
    }

    // Add current question - enhance only if code docs are loaded
    const enhancedQuestion = codeDocsIncluded
      ? `${question}\n\n(Note: Code documentation is loaded. If this question is about code, APIs, SDK usage, or programming examples, please search thoroughly in the API Reference, Getting Started with SDK, and Hello World documentation sections.)`
      : question;
    
    messages.push({
      role: "user",
      content: enhancedQuestion,
    });

    let answer = "";
    let usedModel = "";

    // Try Gemini 2.0 Flash first
    try {
      console.log("Attempting to use Gemini 2.0 Flash...");
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
      
      // Convert messages to Gemini format
      const systemMessage = messages.find(m => m.role === "system")?.content || "";
      const chatHistory = messages
        .filter(m => m.role !== "system")
        .map(m => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        }));

      const chat = model.startChat({
        history: chatHistory.slice(0, -1), // All messages except the current question
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 8192, // Increased for longer, detailed responses
        },
        systemInstruction: {
          role: "system",
          parts: [{ text: systemMessage }],
        },
      });

      // For Gemini, strongly emphasize the constraints
      const prompt = chatHistory.length === 1 
        ? `${systemMessage}\n\n🚨 IMPORTANT: 
1. Only answer based on the Model HQ documentation provided above
2. Extract ONLY relevant information - DO NOT copy-paste entire pages
3. Keep your response SHORT (2-5 paragraphs maximum)
4. Provide step-by-step instructions if it's a how-to question
5. Include 1-2 documentation links at the end

User question: ${question}`
        : `🚨 Remember: 
- Only use Model HQ documentation
- Keep response SHORT (2-5 paragraphs)
- Extract relevant info, don't copy entire pages

User question: ${question}`;

      const result = await chat.sendMessage(prompt);
      answer = result.response.text();
      usedModel = "Gemini 2.0 Flash";
      console.log("Successfully used Gemini 2.0 Flash");
    } catch (geminiError: any) {
      console.warn("Gemini failed, falling back to Groq:", geminiError.message);
      
      // Fall back to Groq
      try {
        console.log("Attempting to use Groq...");
        const completion = await groq.chat.completions.create({
          messages,
          model: "llama-3.3-70b-versatile",
          temperature: 0.3,
          max_tokens: 8192, // Increased for longer, detailed responses
        });

        answer = completion.choices[0]?.message?.content || "No response generated.";
        usedModel = "Groq (Llama 3.3 70B)";
        console.log("Successfully used Groq as fallback");
      } catch (groqError: any) {
        console.error("Both Gemini and Groq failed:", groqError.message);
        throw new Error("Both AI services are currently unavailable. Please try again later.");
      }
    }

    return NextResponse.json({
      answer,
      success: true,
      model: usedModel, // Optional: let frontend know which model was used
    });
  } catch (error: any) {
    console.error("Error in AI search:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process AI search" },
      { status: 500 }
    );
  }
}
