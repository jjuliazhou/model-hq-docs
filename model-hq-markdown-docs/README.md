# Welcome to the Official Documentation of **Model HQ** by [LLMWare.ai](https://llmware.ai)
**Model HQ** is a powerful and user-friendly desktop application that allows you to run cutting-edge AI models directly from your PC or laptop — with **zero coding required**.

With access to over **150+ state-of-the-art models**, ranging from **1 billion to 32 billion parameters**, Model HQ offers a secure, private, and cost-efficient solution for running AI locally. Once a model is downloaded, it can operate **offline**, ensuring that your data and sensitive information remain **completely private** and never leave your device.

Experience enterprise-grade AI capabilities — anytime, anywhere.

> ⚡ Try it now and supercharge your productivity with local AI!


&nbsp;

## HOW TO CONTRIBUTE

### Step 1: Create/Edit the Markdown File

1. **For existing sections**: Edit the markdown file in the respective folder
   - Example: To edit Agents docs, go to `model-hq-markdown-docs/v0/agent/`

2. **For new documentation**:
   - Create a new folder if covering a whole new topic: `model-hq-markdown-docs/v1/newDoc/NEW.md`
   - Create a new markdown file if adding to existing section: `model-hq-markdown-docs/v1/agent/AGENT_NEW.md`

### Step 2: Convert Markdown to TSX using the Converter Script

We have a built-in converter script that transforms your markdown into properly styled TSX components.

#### Quick Usage

```bash
# Show help and available options
npm run convert -- --help

# Convert a documentation page
npm run convert -- v0/chat/CHAT.md v0/chat --type=docs

# Convert a cookbook/tutorial page  
npm run convert:cookbook -- v0/cookbooks/RAG_Bot.md cookbooks/v0/rag-bot
```

#### Path Configuration

The converter uses these default paths (configurable in `scripts/md-to-tsx/converter.ts`):
- **Source folder**: `./model-hq-markdown-docs`
- **Destination folder**: `./app`

#### Examples

```bash
# Short form (uses configured folders):
npm run convert -- v0/chat/CHAT.md v0/chat --type=docs
# Reads:  ./model-hq-markdown-docs/v0/chat/CHAT.md
# Writes: ./app/v0/chat/page.tsx

# For cookbooks with rich styling:
npm run convert:cookbook -- v0/cookbooks/RAG_Bot.md cookbooks/v0/rag-bot
# Writes: ./app/cookbooks/v0/rag-bot/page.tsx
```

### Step 3: Review and Test

1. Run the development server: `npm run dev` or `bun dev`
2. Navigate to your new page and verify it looks correct
3. Check for any TypeScript errors: `npm run lint`

&nbsp;

## Markdown Features Supported

The converter supports these markdown features:

| Feature | Syntax | Notes |
|---------|--------|-------|
| Bold | `**text**` | |
| Italic | `*text*` | |
| Inline code | `` `code` `` | Works in headings too |
| Links | `[text](url)` | URLs with underscores auto-convert to dashes |
| Images | `![alt](src)` | |
| Headings | `# H1` to `###### H6` | |
| Lists | `- item` or `1. item` | |
| Code blocks | ` ```language ` | |
| Tables | `\| Header \|` | |
| Alerts | `> [!NOTE]`, `> [!TIP]`, `> [!WARNING]` | GitHub-style alerts |
| Collapsible / Expandable sections | `<details><summary>Title</summary>...</details>` | Use HTML `<details>`/`<summary>`; converter preserves these tags and nested Markdown. |

### For Cookbooks (--type=cookbook)

- Use `## 1. Step Title` for numbered steps with visual indicators
- YouTube URLs are auto-detected and styled as video cards
- Sections get card-based styling with gradients

See `scripts/md-to-tsx/README.md` for complete documentation.

&nbsp;

## Legacy Method (Alternative)

If you prefer, you can still use v0 by Vercel:
- Attach your markdown file in v0
- Attach a reference file (copy any existing page.tsx)
- Prompt: "Convert this markdown according to the reference attached"
- Copy the code to the respective folder
