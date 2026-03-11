import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function HelloWorldPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Hello World</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Hello World with LLMWare's Model HQ SDK</h1>
            </div>

            <div className="prose prose-gray max-w-none">
                <p>
                    This <strong>Hello World</strong> example demonstrates how to send a prompt to a model using both{" "}
                    <code>inference</code> and <code>stream</code> APIs via the <code>LLMWareClient</code>. It's a great first
                    step to test your Model HQ server setup.
                </p>

                <p>&nbsp;</p>

                <h2 id="location">📁 Location</h2>
                <p>This file is available in the SDK under:</p>
                <p>
                    <code>modelhq_client/hello-world.py</code>
                </p>

                <p>&nbsp;</p>

                <h2 id="what-this-example-does">What This Example Does</h2>
                <ol>
                    <li>
                        Loads the API endpoint (defaults to <code>http://localhost:8088</code> if not set).
                    </li>
                    <li>Sends a user prompt to a selected model.</li>
                    <li>
                        Demonstrates both:
                        <ul>
                            <li>
                                <code>inference()</code> — returns a full response at once.
                            </li>
                            <li>
                                <code>stream()</code> — yields output token by token (perfect for chat UIs).
                            </li>
                        </ul>
                    </li>
                    <li>Unloads the model from memory when done.</li>
                </ol>

                <p>&nbsp;</p>

                <h2 id="example-code-recap">Example Code (Recap)</h2>
                <pre>
                    <code>{`from llmware_client_sdk import LLMWareClient, get_url_string
import time

api_endpoint = get_url_string()
client = LLMWareClient(api_endpoint=api_endpoint)

prompt = "What are the best sites to see in France?"
model_name = "llama-3.2-1b-instruct-ov"

response = client.inference(prompt=prompt, model_name=model_name)
print("inference response:", response)

for token in client.stream(prompt=prompt, model_name=model_name):
    print(token, end="")

client.model_unload(model_name)`}</code>
                </pre>

                <p>
                    Here's how to run the <strong>Hello World</strong> example from the LLMWare SDK documentation:
                </p>

                <hr />

                <h2 id="how-to-run-this-example">How to Run This Example</h2>
                <p>
                    You can run the <code>hello-world.py</code> example in just a few simple steps:
                </p>

                <h3 id="start-the-model-hq-backend-server">1. Start the Model HQ Backend Server</h3>
                <p>Make sure the server is running. You can start it with:</p>
                <p>
                    Follow the Docs: <a
                        href="/getting-started-with-model-hq-sdk"
                        style={{ color: "#2400f3ff" }}
                    >
                        https://model-hq-docs.vercel.app/getting-started
                    </a>
                </p>

                <blockquote>
                    <p>
                        This launches the backend at the default <code>http://localhost:8088</code>.
                    </p>
                </blockquote>

                <h3 id="run-the-hello-world-example">2. Run the Hello World Example</h3>
                <p>
                    Navigate to the <code>modelhq_client/</code> directory of the SDK and run the script:
                </p>

                <pre>
                    <code>{`cd modelhq_client
 python3 hello-world.py`}</code>
                </pre>

                <p>You should see output like this:</p>

                <pre>
                    <code>{`inference response: {'llm_response': 'Some suggestions for places to visit in France are...'}
 What are the best sites to see in France? Eiffel Tower, Mont Saint-Michel, the French Riviera...`}</code>
                </pre>

                <h3 id="optional-change-the-model">3. (Optional) Change the Model</h3>
                <p>
                    Edit the <code>model_name</code> in <code>hello-world.py</code> to test other models:
                </p>

                <pre>
                    <code>{`model_name = "phi-3-ov"  # or try "llama-3.2-1b-instruct-ov"`}</code>
                </pre>

                <blockquote>
                    <p>Make sure the model is already set up on the server, or it will auto-download.</p>
                </blockquote>

                <p>&nbsp;</p>

                <h2 id="key-concepts">Key Concepts</h2>

                <h3 id="get-url-string">
                    1. <code>get_url_string()</code>
                </h3>
                <p>
                    Fetches the default endpoint from your environment or local <code>.env</code> file (e.g.,{" "}
                    <code>http://localhost:8088</code>).
                </p>

                <blockquote>
                    <p>You can override this with your own server address.</p>
                </blockquote>

                <h3 id="inference">
                    2. <code>inference()</code>
                </h3>
                <p>
                    Returns the <strong>entire model response</strong> at once.
                </p>
                <p>Best for quick tests, simple prompts, or logging.</p>

                <h3 id="stream">
                    3. <code>stream()</code>
                </h3>
                <p>
                    Streams the output <strong>token-by-token</strong>, which is ideal for:
                </p>
                <ul>
                    <li>Live typing effects</li>
                    <li>Chatbots and UIs</li>
                    <li>Handling long outputs gracefully</li>
                </ul>

                <p>&nbsp;</p>

                <h2 id="real-world-use-case">Real-World Use Case</h2>
                <p>
                    Let's say you're building a travel assistant chatbot. The <code>prompt</code>:
                </p>

                <pre>
                    <code>"What are the best sites to see in France?"</code>
                </pre>

                <p>can be handled like this:</p>
                <ul>
                    <li>
                        Use <code>.inference()</code> to log user queries for analytics.
                    </li>
                    <li>
                        Use <code>.stream()</code> to update the frontend chat UI in real time.
                    </li>
                </ul>

                <p>&nbsp;</p>

                <p>
                    <strong>Other Real-World Use-Cases</strong>
                </p>

                <h3 id="travel-chatbot">1. Travel Chatbot</h3>
                <pre>
                    <code>{`prompt = "Plan a 3-day itinerary for Paris"
 model_name = "phi-4-ov"`}</code>
                </pre>
                <p>Use this inside a UI to respond with streaming text in real time.</p>

                <h3 id="product-description-generator">2. Product Description Generator</h3>
                <pre>
                    <code>{`prompt = "Write a product description for a bamboo standing desk"
 model_name = "mistral-7b-instruct-v0.3-ov"`}</code>
                </pre>
                <p>Useful in e-commerce content automation pipelines.</p>

                <h3 id="resume-analyzer">3. Resume Analyzer</h3>
                <pre>
                    <code>{`prompt = "Analyze this resume and list key strengths:\\n\\n[resume text here]"
 model_name = "llama-3.2-3b-instruct-ov"`}</code>
                </pre>
                <p>Great for HR tools and application screeners.</p>

                <p>&nbsp;</p>

                <h2 id="pro-tips">Pro Tips</h2>
                <ul>
                    <li>
                        Start with smaller models like <code>llama-3.2-1b-instruct-ov</code> or <code>phi-3-ov</code> for faster
                        results.
                    </li>
                    <li>
                        If you're building chat UIs, always prefer <code>stream()</code> for smoother UX.
                    </li>
                    <li>
                        After each use, unload the model with <code>client.model_unload(model_name)</code> to free resources.
                    </li>
                </ul>

                <p>&nbsp;</p>

                <h2 id="want-more">Want More?</h2>
                <p>
                    Check out the full API Reference at{" "}
                    {" "}
                    <a
                        href="/api-reference"
                        style={{ fontWeight: "bold", color: "#0070f3" }}
                    >
                        API Reference Guide
                    </a>
                    . It includes all the other endpoints and available parameters like <code>max_output</code>,{" "}
                    <code>temperature</code>, <code>context</code>, and more!
                </p>

                <p>
                    If you have any questions or feedback, please contact us at <code>support@aibloks.com</code>.
                </p>
            </div>
        </div>
    )
}
