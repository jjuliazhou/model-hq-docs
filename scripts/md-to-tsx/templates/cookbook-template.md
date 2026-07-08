---
title: "Cookbook Title"
description: "A short, single-sentence tagline that explains what this cookbook achieves."
breadcrumbs:
  - [Home](/)
  - [Cookbooks](/cookbooks/v1)
youtube: "https://youtu.be/your-video-id"
videoTitle: "Your Tutorial Video Title"
---

A short opening paragraph that explains the problem this cookbook solves and what the reader will accomplish by the end. Keep it to 1–3 sentences. The first paragraph is automatically rendered as the page intro.

&nbsp;

## Use Case

Describe the specific scenario this cookbook addresses. Who is it for? What problem does it solve? What will the reader achieve by following along?

Use **Chat**, **Agent**, and **API** modes to accomplish the goal.

&nbsp;

## Prerequisites

Before you begin, ensure you have:

- Model HQ installed locally
- Required files or documents (located at: `C:\path\to\files`)
- An AI PC or local server
- *(Optional)* Python development environment for API integration

> [!NOTE]
> All work in this cookbook runs **on-device**. No internet connection is required after models are downloaded.

&nbsp;

## 1. First Step Title

Briefly explain what this step accomplishes. Numbered `##` headings (e.g. `## 1. ...`) are automatically rendered as numbered step sections.

- Launch Model HQ locally
- Open the **Feature** menu
- Select the appropriate option
- Click the **Start** button

![Step 1 Screenshot](/cookbooks/your-cookbook/step1.png)

> [!TIP]
> A short, helpful tip related to this step.

&nbsp;

## 2. Second Step Title

Configure the settings as shown below.

```json title="config.json"
{
  "setting1": "value1",
  "setting2": "value2",
  "setting3": true
}
```

1. First, configure the settings
2. Then, apply the changes
3. Finally, verify the configuration

![Step 2 Screenshot](/cookbooks/your-cookbook/step2.png)

&nbsp;

## 3. Third Step with Code

Demonstrate API integration with a runnable code snippet.

```python title="example.py"
from modelhq_client import ModelHQ

client = ModelHQ()

result = client.run_agent(
    file="document.pdf",
    agent="analyzer",
)

print(result)
```

> [!IMPORTANT]
> Replace `document.pdf` with the absolute path to your own file before running.

&nbsp;

## 4. Handling Results

The system generates output in multiple formats:

- Word report (`.docx`)
- Excel spreadsheet (`.xlsx`)
- API JSON payload
- Raw extracted text

![Results Screenshot](/cookbooks/your-cookbook/results.png)

&nbsp;

## Summary

| Step | Action | Output |
|------|--------|--------|
| **1. Setup** | Configure environment | Ready state |
| **2. Input** | Load documents | Processed data |
| **3. Process** | Run analysis | Results |
| **4. Export** | Save output | Files |

&nbsp;

## Example Use Cases

This cookbook pattern can be applied to:

- Use case 1 description
- Use case 2 description
- Use case 3 description
- Use case 4 description

&nbsp;

## Need Help?

If you run into any issues, contact our support team at `support@aibloks.com`.
