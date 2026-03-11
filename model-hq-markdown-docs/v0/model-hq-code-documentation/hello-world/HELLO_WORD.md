# Hello World with LLMWare's Model HQ SDK

This **Hello World** example demonstrates how to send a prompt to a model using both `inference` and `stream` APIs via the `LLMWareClient`. It’s a great first step to test your Model HQ server setup.

&nbsp;

## 📁 Location

This file is available in the SDK under:
`examples/hello-world.py`

&nbsp;

## What This Example Does

1. Loads the API endpoint (defaults to `http://localhost:8088` if not set).
2. Sends a user prompt to a selected model.
3. Demonstrates both:

   * `inference()` — returns a full response at once.
   * `stream()` — yields output token by token (perfect for chat UIs).
4. Unloads the model from memory when done.

&nbsp;

## Example Code (Recap)

```python
from llmware_client_sdk import LLMWareClient, get_url_string
import time

api_endpoint = get_url_string()
client = LLMWareClient(api_endpoint=api_endpoint)

prompt = "What are the best sites to see in France?"
model_name = "llama-3.2-1b-instruct-ov"

response = client.inference(prompt=prompt, model_name=model_name)
print("inference response:", response)

for token in client.stream(prompt=prompt, model_name=model_name):
    print(token, end="")

client.model_unload(model_name)
```

Here’s how to run the **Hello World** example from the LLMWare SDK documentation:

---

## How to Run This Example

You can run the `hello-world.py` example in just a few simple steps:

### 1. **Start the Model HQ Backend Server**

Make sure the server is running. You can start it with:

Follow the Docs: https://model-hq-docs.vercel.app/getting-started-with-model-hq-sdk

>  This launches the backend at the default `http://localhost:8088`.

### 2. **Run the Hello World Example**

Navigate to the `examples/` directory of the SDK and run the script:

```bash
cd examples
python3 hello-world.py
```

You should see output like this:

```bash
inference response: {'llm_response': 'Some suggestions for places to visit in France are...'}
What are the best sites to see in France? Eiffel Tower, Mont Saint-Michel, the French Riviera...
```

### 3. **(Optional) Change the Model**

Edit the `model_name` in `hello-world.py` to test other models:

```python
model_name = "phi-3-ov"  # or try "llama-3.2-1b-instruct-ov"
```

> Make sure the model is already set up on the server, or it will auto-download.


&nbsp;

## Key Concepts

1. **`get_url_string()`**
Fetches the default endpoint from your environment or local `.env` file (e.g., `http://localhost:8088`).

> You can override this with your own server address.

2. **`inference()`**
Returns the **entire model response** at once.
Best for quick tests, simple prompts, or logging.

3. **`stream()`**
Streams the output **token-by-token**, which is ideal for:

* Live typing effects
* Chatbots and UIs
* Handling long outputs gracefully

&nbsp;

## Real-World Use Case

Let's say you're building a travel assistant chatbot. The `prompt`:

```python
"What are the best sites to see in France?"
```

can be handled like this:

* Use `.inference()` to log user queries for analytics.
* Use `.stream()` to update the frontend chat UI in real time.

**Other Real-World Use-Cases**

### **1. Travel Chatbot**

```python
prompt = "Plan a 3-day itinerary for Paris"
model_name = "phi-4-ov"
```

Use this inside a UI to respond with streaming text in real time.

### **2. Product Description Generator**

```python
prompt = "Write a product description for a bamboo standing desk"
model_name = "mistral-7b-instruct-v0.3-ov"
```

Useful in e-commerce content automation pipelines.

### **3. Resume Analyzer**

```python
prompt = "Analyze this resume and list key strengths:\n\n[resume text here]"
model_name = "llama-3.2-3b-instruct-ov"
```

Great for HR tools and application screeners.

&nbsp;

## Pro Tips

* Start with smaller models like `llama-3.2-1b-instruct-ov` or `phi-3-ov` for faster results.
* If you're building chat UIs, always prefer `stream()` for smoother UX.
* After each use, unload the model with `client.model_unload(model_name)` to free resources.

&nbsp;

## Want More?

Check out the full API Reference at **[API Reference Guide](https://model-hq-docs.vercel.app/api-reference)**. It includes all the other endpoints and available parameters like `max_output`, `temperature`, `context`, and more!

If you have any questions or feedback, please contact us at `support@aibloks.com`.
