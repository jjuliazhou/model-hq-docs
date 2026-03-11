# Markdown to TSX Converter for Model HQ Documentation

A powerful converter that transforms Markdown files into properly styled TSX components for the Model HQ documentation website. Supports two output formats: **Documentation pages** and **Cookbook pages**.

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [Output Formats](#output-formats)
- [Markdown Features](#markdown-features)
- [Front Matter](#front-matter)
- [Examples](#examples)

---

## Installation

The converter is already set up in the project. Just install dependencies:

```bash
# Install dependencies
bun install
# or
pnpm install
```

---

## Quick Start

### Using npm scripts (Recommended)

```bash
# Show help
bun run convert -- --help

# Convert a docs page
bun run convert -- v0/chat/CHAT.md v0/chat --type=docs

# Convert a cookbook page
bun run convert:cookbook -- v0/cookbooks/RAG_Bot.md cookbooks/v0/rag-bot
```

### Using npx directly

```bash
# Short form (uses configured source/dest folders)
npx tsx scripts/md-to-tsx/converter.ts v0/chat/CHAT.md v0/chat --type=docs

# Full paths
npx tsx scripts/md-to-tsx/converter.ts ./my-doc.md ./app/v0/chat --type=docs
```

## Summary
**Short form (auto-resolves using CONFIG folders)**
```
bun run convert -- v0/chat/CHAT.md v0/chat --type=docs
```
-# Reads:  ./model-hq-markdown-docs/v0/chat/CHAT.md**
-# Writes: ./app/v0/chat/page.tsx

**Auto-derive output from filename**
```
bun run convert -- v0/chat/CHAT.md --type=docs
```
-# Writes: ./app/v0/chat/chat/page.tsx

**Full paths still work**
```
bun run convert -- ./full/path/doc.md ./app/dest --type=docs
```

---

## Configuration

Edit the `CONFIG` object at the top of `converter.ts` to change default folders:

```typescript
const CONFIG = {
  // Source folder for markdown files (relative to project root)
  SOURCE_FOLDER: './model-hq-markdown-docs',
  
  // Destination folder for generated TSX files (relative to project root)
  DEST_FOLDER: './app',
  
  // Default output filename
  OUTPUT_FILENAME: 'page.tsx'
};
```

### Path Resolution

| Input | Output | Description |
|-------|--------|-------------|
| `v0/chat/CHAT.md` | `./app/v0/chat/chat/page.tsx` | Auto-derived from filename |
| `v0/chat/CHAT.md v0/chat` | `./app/v0/chat/page.tsx` | Explicit output folder |
| `./full/path.md ./app/dest` | `./app/dest/page.tsx` | Full paths |

---

## Output Formats

### 1. Documentation Pages (`--type=docs`)

Creates a clean, prose-based documentation page similar to `app/v0/chat/page.tsx`.

**Features:**
- Standard prose styling from `globals.css`
- Automatic breadcrumb generation
- Clean typography with proper heading hierarchy
- Support for images, code blocks, lists, and tables

**Best for:**
- Feature documentation
- API references
- Getting started guides
- Configuration guides

### 2. Cookbook Pages (`--type=cookbook`)

Creates a rich, card-based cookbook page similar to `app/cookbooks/v0/rag-bot/page.tsx`.

**Features:**
- Card-based layout with gradient backgrounds
- Numbered step sections with visual indicators
- Copy-enabled code blocks
- YouTube video cards
- Styled alerts/callouts
- Dark mode support

**Best for:**
- Tutorials
- Step-by-step recipes
- Workflow guides
- Use case demonstrations

---

## Markdown Features

### Basic Formatting

| Markdown | Output | Notes |
|----------|--------|-------|
| `**bold**` | **bold** | Strong emphasis |
| `*italic*` | *italic* | Emphasis |
| `` `code` `` | `code` | Inline code |
| `[link](url)` | [link](url) | Links (GitHub URLs auto-converted) |

### Headings

```markdown
# Title
## Section (H2) - Creates major sections
### Subsection (H3)
#### Minor heading (H4)
```

For **cookbook** pages:
- H2 headings starting with numbers (e.g., `## 1. Step Name`) become numbered steps
- Other H2 headings become major sections with cards

For **docs** pages:
- Standard HTML heading hierarchy with IDs for anchoring

### Custom Heading IDs

```markdown
## My Custom Section {#custom-id}
```

This generates: `<h2 id="custom-id">My Custom Section</h2>`

---

### Images

```markdown
![Alt text](/path/to/image.png)
```

**Cookbook pages:** Images get rounded corners, shadows, and borders.  
**Docs pages:** Images use prose styling.

---

### Code Blocks

````markdown
```python
def hello():
    print("Hello, World!")
```
````

**With title (cookbook pages):**

````markdown
```python title="example.py"
def hello():
    print("Hello, World!")
```
````

**Supported languages:** All standard languages (python, javascript, typescript, bash, json, etc.)

---

### Lists

#### Unordered Lists

```markdown
- Item 1
- Item 2
  - Nested item
- Item 3
```

#### Ordered Lists

```markdown
1. First step
2. Second step
3. Third step
```

**Cookbook pages:** List items get checkmark icons.  
**Docs pages:** Standard bullet/numbered styling.

---

### Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

**Cookbook pages:** Tables get Card styling with hover effects.  
**Docs pages:** Standard bordered tables.

---

### Blockquotes & Alerts

#### Standard Blockquote

```markdown
> This is a regular blockquote
```

#### GitHub-Style Alerts

```markdown
> [!NOTE]
> This is a note with helpful information.

> [!TIP]
> This is a helpful tip for users.

> [!WARNING]
> This is a warning message.

> [!IMPORTANT]
> This is important information.

> [!CAUTION]
> This requires caution.
```

**Alert Styling:**

| Type | Border Color | Background |
|------|--------------|------------|
| NOTE | Blue | Blue gradient |
| TIP | Green | Green gradient |
| WARNING | Yellow | Yellow gradient |
| IMPORTANT | Red | Red gradient |
| CAUTION | Orange | Orange gradient |

---

### YouTube Videos (Cookbook only)

Include a YouTube link in your text, and it will be detected and converted to a styled video card:

```markdown
This walkthrough is demonstrated on our YouTube video "My Tutorial Title": https://youtu.be/abc123
```

---

## Front Matter

Use YAML front matter for metadata:

```markdown
---
title: "My Page Title"
description: "A brief description of the page"
breadcrumbs:
  - [Home](/)
  - [Docs](/docs)
youtube: "https://youtu.be/abc123"
videoTitle: "Tutorial Video"
---

# Page content starts here...
```

### Front Matter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | No | Page title (auto-extracted from first heading if not provided) |
| `description` | No | Subtitle/description (cookbook pages only) |
| `breadcrumbs` | No | Custom breadcrumb path |
| `youtube` | No | YouTube video URL (cookbook pages) |
| `videoTitle` | No | Title for the YouTube video card |

---

## Examples

### Example 1: Documentation Page

**Input (`chat.md`):**

```markdown
---
title: "Exploring Chat in Model HQ"
breadcrumbs:
  - [Home](/)
  - [Chat](/chat)
---

Once you complete the initial setup, you will be directed to the **Main Menu**.
This interface offers multiple functionalities.

## 1. Launching the Chat Interface

Click on the **Chat** button from the main menu to get started.

![chat](/chat/chat.png)

## 2. Selecting a Model

You will be prompted with a screen asking you to choose a model.

> [!TIP]
> If you encounter an error while downloading, please refer to the Error Guide.

### Available Model Options:

- **Small Model**: ~1-3 billion parameters
- **Medium Model**: ~7-8 billion parameters
- **Large Model**: ~9+ billion parameters
```

**Command:**

```bash
npx ts-node scripts/md-to-tsx/converter.ts chat.md ./app/v0/chat --type=docs
```

---

### Example 2: Cookbook Page

**Input (`rag-bot.md`):**

```markdown
---
title: "RAG Bot"
description: "Fast and flexible document analysis using Retrieval-Augmented Generation"
breadcrumbs:
  - [Home](/)
  - [Cookbooks](/cookbooks)
---

The RAG Bot offers a fast and flexible way to analyze documents.

This walkthrough is demonstrated on YouTube "Private AI for Document Analysis": https://youtu.be/uy53WKrMOXc

## Use Case

Analyze executive employment agreements using Model HQ's **Chat**, **Agent**, and **API** modes.

## Prerequisites

- Model HQ installed locally
- Sample PDF documents
- An AI PC or local server

## 1. Start with Local Chatbot Mode

**Purpose**: Quickly chat with a document using an out-of-the-box RAG bot.

### Steps:

- Launch Model HQ locally
- Open **Fast Start**, select **Medium Chatbot**
- Attach a document

## 2. Run Agent-Based Analysis

**Purpose**: Automate multi-step document review.

```python
from modelhq_client import ModelHQ
client = ModelHQ()
result = client.run_agent(file="contract.pdf")
```

> [!NOTE]
> You can customize the questions as needed.
```

**Command:**

```bash
npx ts-node scripts/md-to-tsx/converter.ts rag-bot.md ./app/cookbooks/v0/rag-bot --type=cookbook
```

---

## Prose Styling Reference

The converter generates JSX that uses these prose classes from `globals.css`:

| Element | Class/Styling |
|---------|---------------|
| Paragraphs | `prose p` - 1.75rem line height, bottom margin |
| Headings | `prose h1-h4` - Various sizes with tracking |
| Lists | `prose ul/ol` - Proper nesting with markers |
| Code | `prose code` - Muted background, rounded |
| Blockquotes | `prose blockquote` - Colored borders by type |
| Tables | `prose table` - Full width, fixed layout |
| Links | `prose a` - Primary color, hover underline |

---

## Tips & Best Practices

1. **Use front matter** for complex pages to explicitly set title and breadcrumbs

2. **Number your steps** in cookbooks using `## 1. Step Name` format for automatic step styling

3. **Use GitHub alerts** (`[!NOTE]`, `[!TIP]`, etc.) for callouts - they get beautiful card styling

4. **Include code titles** with `` ```language title="filename.ext" `` for better context

5. **Keep images organized** in the `/public` folder with logical paths

6. **Test dark mode** - the generated TSX includes full dark mode support

7. **Link conversion** - GitHub markdown links are auto-converted to internal routes

---

## Troubleshooting

### Issue: Heading IDs not working for anchor links

**Solution:** Manually specify IDs using `{#custom-id}` syntax.

### Issue: Code blocks not formatting correctly

**Solution:** Ensure proper fence syntax with language specified: `` ```python ``

### Issue: Lists not rendering as expected

**Solution:** Ensure consistent indentation (2 spaces for nesting).

### Issue: Front matter not being parsed

**Solution:** Ensure `---` markers are on their own lines with no leading spaces.

---

## Component Output Reference

### Docs Page Structure

```tsx
export default function PageName() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Breadcrumb>...</Breadcrumb>
      <div className="space-y-4">
        <h1>Title</h1>
      </div>
      <div className="prose prose-gray max-w-none">
        {/* Content */}
      </div>
    </div>
  )
}
```

### Cookbook Page Structure

```tsx
"use client"

export default function PageName() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 px-4 sm:px-6 lg:px-8 py-6 bg-white dark:bg-gray-950">
      <Breadcrumb>...</Breadcrumb>
      <div className="space-y-4">
        <h1>Title</h1>
        <p>Description</p>
      </div>
      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
        {/* Sections with Cards */}
      </div>
    </div>
  )
}
```

---

## Support

If you encounter any issues with the converter, please contact: `support@aibloks.com`
