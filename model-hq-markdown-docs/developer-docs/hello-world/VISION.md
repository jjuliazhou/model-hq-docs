# Vision & Media — Model HQ Client SDK

Model HQ supports multimodal inference for image analysis, image generation, and text-to-speech. All media endpoints accept prompts and return file paths or streamed text.

## Prerequisites

This guide assumes the SDK is installed and importable. If you haven't set that up yet, follow the [Hello World](HELLO_WORLD.md) prerequisites first.

## Image analysis

### Non-streaming

Upload an image and ask a question about it:

```python
from modelhq.client import LLMWareClient

client = LLMWareClient(api_endpoint="http://localhost:8088", api_key="")

response = client.vision(
    image_fp="path/to/image.jpg",
    prompt="Describe what is shown in this image"
)
print(response)
```

### Streaming

Stream the analysis token-by-token. There is an initial delay of 10-15 seconds while the image is encoded, then generation is fast:

```python
for token in client.vision_stream(
    image_fp="path/to/image.jpg",
    prompt="Describe what is shown in this image"
):
    print(token, end="")
```

## Image generation

Generate an image from a text prompt. The result is saved to disk and the file path is returned:

```python
save_path = client.generate_image(
    prompt="A watercolour painting of a mountain landscape at sunset",
    file_path="output/landscape.bmp"   # optional — defaults to tmp folder
)
print("image saved to:", save_path)
```

## Text-to-speech

Convert text to speech audio. The result is saved as a `.wav` file:

```python
save_path = client.generate_speech(
    prompt="Welcome to Model HQ. Let me walk you through the key features.",
    file_path="output/intro.wav"   # optional — defaults to tmp folder
)
print("audio saved to:", save_path)
```

## Web search

Search the web using a configured provider (tavily, serp_api, news_api_org, or wikipedia). Requires a provider API key stored as a credential:

```python
# Store the provider API key
client.add_credential({"tavily_api_key": "tvly-..."})

# Run a search
results = client.web_search(
    query="What is quantum gravity?",
    engine="tavily",
    result_count=5
)
print(results)
```

## Next steps

- [RAG](RAG.md) — combine vision with retrieval for document-heavy workflows
- [Agents](AGENTS.md) — agents can use vision and search as steps in a pipeline
- [API Reference](../api-reference/API.md) — full endpoint specifications
