# Markdown to TSX Quick Reference

## Configuration

Edit `CONFIG` in `scripts/md-to-tsx/converter.ts`:
```typescript
const CONFIG = {
  SOURCE_FOLDER: './model-hq-markdown-docs',  // Input folder
  DEST_FOLDER: './app',                        // Output folder
  OUTPUT_FILENAME: 'page.tsx'
};
```

---

## Command Usage

```bash
# Using npm scripts (recommended)
npm run convert -- <input> [output] [--type=docs|cookbook]
npm run convert:docs -- <input> [output]
npm run convert:cookbook -- <input> [output]

# Using npx directly
npx tsx scripts/md-to-tsx/converter.ts <input> [output] [--type=docs|cookbook]

# Show help
npm run convert -- --help
```

### Examples

```bash
# Short form (relative to configured folders):
npm run convert -- v0/chat/CHAT.md v0/chat --type=docs
# -> Reads: ./model-hq-markdown-docs/v0/chat/CHAT.md
# -> Writes: ./app/v0/chat/page.tsx

# Auto-derive output folder from filename:
npm run convert -- v0/chat/CHAT.md --type=docs
# -> Writes: ./app/v0/chat/chat/page.tsx

# Cookbook:
npm run convert:cookbook -- v0/cookbooks/RAG_Bot.md cookbooks/v0/rag-bot

# Full paths:
npx tsx scripts/md-to-tsx/converter.ts ./my-doc.md ./app/v0/chat --type=docs
```

---

## Front Matter (Optional)

```yaml
---
title: "Page Title"
description: "Subtitle (cookbook only)"
breadcrumbs:
  - [Home](/)
  - [Parent](/parent)
youtube: "https://youtu.be/xxx"     # cookbook only
videoTitle: "Video Title"            # cookbook only
---
```

---

## Supported Features

### ✅ Both Formats (docs & cookbook)

| Feature | Syntax |
|---------|--------|
| Bold | `**text**` or `__text__` |
| Italic | `*text*` or `_text_` |
| Inline code | `` `code` `` |
| Links | `[text](url)` |
| Images | `![alt](src)` |
| Headings | `# H1` to `###### H6` |
| Ordered lists | `1. Item` |
| Unordered lists | `- Item` or `* Item` |
| Code blocks | ` ```language ` |
| Tables | `| Header |` syntax |
| Blockquotes | `> quote` |
| Horizontal space | `&nbsp;` |
| Custom heading ID | `## Title {#custom-id}` |

### ✅ GitHub Alerts (Both)

```markdown
> [!NOTE]
> Blue info box

> [!TIP]  
> Green tip box

> [!WARNING]
> Yellow warning box

> [!IMPORTANT]
> Red important box

> [!CAUTION]
> Orange caution box
```

### ✅ Cookbook-Specific

| Feature | How to Use |
|---------|------------|
| Numbered steps | `## 1. Step Title` (H2 with number) |
| Code with title | ` ```python title="file.py" ` |
| YouTube card | Include YouTube URL in paragraph |
| Major sections | `## Section Title` (H2 without number) |

---

## Output Structure

### Docs Page (`--type=docs`)

```
<div className="max-w-4xl mx-auto space-y-6">
  <Breadcrumb>
  <h1>Title</h1>
  <div className="prose prose-gray max-w-none">
    <!-- Content with prose styling -->
  </div>
</div>
```

### Cookbook Page (`--type=cookbook`)

```
<div className="max-w-5xl mx-auto space-y-6 ...">
  <Breadcrumb>
  <h1>Title</h1>
  <p>Description</p>
  <div className="prose prose-gray dark:prose-invert ...">
    <!-- Cards, steps, sections -->
  </div>
</div>
```

---

## File Output

Both formats create a `page.tsx` file in the output folder:

```
./app/v0/chat/page.tsx          # docs
./app/cookbooks/v0/rag-bot/page.tsx  # cookbook
```

---

## Common Patterns

### Documentation Page

```markdown
## 1. First Section
Content...

## 2. Second Section  
Content...

### Subsection
More content...

> [!TIP]
> Helpful tip
```

### Cookbook Page

```markdown
## Use Case
Description in card...

## Prerequisites
- Item 1
- Item 2

## 1. First Step
**Purpose**: What this does.
- Step details
- More details

## 2. Second Step
Code example:
```python
code here
```
```

---

## Tips

1. Use `&nbsp;` for vertical spacing between sections
2. Number H2 headings (`## 1. Title`) in cookbooks for step styling
3. GitHub alerts work best in cookbooks (get card styling)
4. Front matter is optional but recommended for complex pages
5. Images should be in `/public/` folder

---

## Support

Questions? Contact: `support@aibloks.com`
