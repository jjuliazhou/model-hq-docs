import { Badge } from "@/components/ui/badge"
import { CodeBlockWithCopy } from "@/components/code-block-with-copy"

interface Parameter {
  name: string
  type: string
  description: string
  default?: string
}

interface EndpointSectionProps {
  endpoint: {
    id: string
    name: string
    method: string
    endpoint: string
    description: string
    category: string
    timeout: number
    requiredParams: Parameter[]
    optionalParams: Parameter[]
    response: string[]
    exampleRequest: any
    exampleResponse: any
    isStreaming: boolean
  }
  isLast?: boolean
}

export function EndpointSection({ endpoint, isLast }: EndpointSectionProps) {
  // Generate curl example
  const curlExample = `curl -X POST http://localhost:8088${endpoint.endpoint} \
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(endpoint.exampleRequest, null, 2)
    .split('\n')
    .map((line) => {
      // Add comment if line contains api_key
      if (line.includes('"api_key"')) {
        return line + '  // Optional';
      }
      return line;
    })
    .join('\n')}'`;

  // Generate Python example
  const pythonExample = `# Example variables
${Object.entries(endpoint.exampleRequest)
  .map(([key, value]) => {
    if (typeof value === "string") {
      return `${key} = "${value}"${key === "api_key" || key === "trusted_key" ? "  # Optional" : ""}`;
    } else {
      return `${key} = ${JSON.stringify(value)}`;
    }
  })
  .join("\n")}

print("\\nStarting '${endpoint.name || endpoint.id}'")
${Object.keys(endpoint.exampleRequest)
  .filter(k => k !== "api_key" && k !== "trusted_key")
  .map(k => `print(f"${k[0].toUpperCase() + k.slice(1)}: {${k}}")`)
  .join("\n")}

# This is the ${endpoint.isStreaming ? "streaming" : "main"} ${endpoint.id} API
${endpoint.isStreaming
  ? `stream = client.${endpoint.id}(${Object.keys(endpoint.exampleRequest)
      .map(k => `${k}=${k}`)
      .join(", ")})
for chunk in stream:
    print(chunk)`
  : `response = client.${endpoint.id}(${Object.keys(endpoint.exampleRequest)
      .map(k => `${k}=${k}`)
      .join(", ")})
print("\\n${endpoint.name || endpoint.id} response: ", response)`}
`;

  // Generate JavaScript example
  const jsBody = JSON.stringify(endpoint.exampleRequest, null, 2)
  const jsExample = endpoint.isStreaming
    ? `const response = await fetch("http://localhost:8088${endpoint.endpoint}", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: ${jsBody.includes("\n") ? `\n  ${jsBody},\n` : jsBody + ","},
});

const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  const text = decoder.decode(value);
  console.log(text);
}`
    : `const response = await fetch("http://localhost:8088${endpoint.endpoint}", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: ${jsBody.includes("\n") ? `\n  ${jsBody},\n` : jsBody + ","},
});

const data = await response.json();
console.log(data);`;

  const requestCode = {
    curl: curlExample,
    python: pythonExample,
    javascript: jsExample,
  }

  // Format response as proper JSON
  const formatResponse = () => {
  if (endpoint.isStreaming) {
    const raw = endpoint.exampleResponse?.llm_response
    const responseText = typeof raw === "string" ? raw : JSON.stringify(raw ?? "")
    const chunks = responseText.match(/.{1,60}/g) || [] // split into ~60 char chunks
    const streamLines = chunks.map((chunk: any) => `data: {"llm_response": "${chunk}"}`).join("\n\n")
    return `// Streaming response format\n${streamLines}`
  } else {
    try {
      const response = typeof endpoint.exampleResponse.llm_response === "string"
        ? {
            ...endpoint.exampleResponse,
            llm_response: JSON.parse(endpoint.exampleResponse.llm_response)
          }
        : endpoint.exampleResponse

      return JSON.stringify(response, null, 2)
    } catch {
      return JSON.stringify(endpoint.exampleResponse, null, 2)
    }
  }
}

  return (
    <section className={`py-12 ${!isLast ? "border-b" : ""}`} id={endpoint.id}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Documentation */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className="font-mono text-xs px-2 py-1">
                  {endpoint.method}
                </Badge>
                <code className="text-lg font-semibold">{endpoint.endpoint}</code>
              </div>
              <h2 className="text-2xl font-semibold mb-3">{endpoint.name}</h2>
              <p className="text-muted-foreground text-base leading-relaxed">{endpoint.description}</p>
            </div>

            {/* Request Body */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Request body</h3>

              {/* Required Parameters */}
              {endpoint.requiredParams.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-red-600 mb-3">Required</h4>
                  <div className="space-y-4">
                    {endpoint.requiredParams.map((param) => (
                      <div key={param.name} className="border-l-2 border-red-200 pl-4">
                        <div className="flex items-center gap-2 mb-1">
                          <code className="text-sm font-medium">{param.name}</code>
                          <Badge variant="secondary" className="text-xs">
                            {param.type}
                          </Badge>
                          <Badge variant="destructive" className="text-xs">
                            required
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{param.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Optional Parameters */}
              {endpoint.optionalParams.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-blue-600 mb-3">Optional</h4>
                  <div className="space-y-4">
                    {endpoint.optionalParams.map((param) => (
                      <div key={param.name} className="border-l-2 border-blue-200 pl-4">
                        <div className="flex items-center gap-2 mb-1">
                          <code className="text-sm font-medium">{param.name}</code>
                          <Badge variant="secondary" className="text-xs">
                            {param.type}
                          </Badge>
                          {param.default && (
                            <Badge variant="outline" className="text-xs">
                              default: {param.default}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{param.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Response */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Returns</h3>
              <div className="border-l-2 border-green-200 pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <code className="text-sm font-medium">llm_response</code>
                  <Badge variant="secondary" className="text-xs">
                    string
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {endpoint.isStreaming
                    ? "Partial response text streamed incrementally as server-sent events"
                    : "Complete generated response from the model"}
                </p>
              </div>

              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm">
                  <strong>Timeout:</strong> This endpoint has a timeout of {endpoint.timeout} seconds.
                  {endpoint.isStreaming && " The connection remains open for streaming responses."}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Code Examples */}
          <div className="space-y-6">
            {/* Request Example */}
            <CodeBlockWithCopy title="Request" code={requestCode} showLanguageSelector={true} />

            {/* Response Example */}
            <CodeBlockWithCopy title="Response" code={formatResponse()} />

            {/* Additional Info */}
            <div className="bg-muted/50 rounded-lg p-4">
              <h4 className="font-medium mb-2">Additional Information</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Category: {endpoint.category}</li>
                <li>• Timeout: {endpoint.timeout} seconds</li>
                {endpoint.isStreaming && <li>• Supports streaming responses</li>}
                <li>• Requires authentication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
