---
title: "Cookbook Title"
description: "A brief tagline describing what this cookbook achieves"
breadcrumbs:
  - [Home](/)
  - [Cookbooks](/cookbooks)
youtube: "https://youtu.be/your-video-id"
videoTitle: "Your Tutorial Video Title"
---

The opening paragraph provides context for this cookbook. It explains the problem being solved and gives a high-level overview of what users will accomplish by following along. This text appears in a styled card at the top of the page.

This walkthrough is also demonstrated step-by-step on our YouTube video "Tutorial Title": https://youtu.be/abc123

## Use Case

Describe the specific use case this cookbook addresses. Who is it for? What problem does it solve? What will the user achieve?

Use **Chat**, **Agent**, and **API** modes to accomplish the goal.

&nbsp;

## Prerequisites

Before you begin, ensure you have:

- Model HQ installed locally
- Required files or documents (located at: `C:\path\to\files`)
- An AI PC or local server
- *(Optional)* Python development environment for API integration

&nbsp;

## 1. First Step Title

**Purpose**: Explain what this step accomplishes.

### Steps:

- Launch Model HQ locally
- Open the **Feature** menu
- Select the appropriate option
- Click the **Start** button

![Step 1 Screenshot](/cookbooks/your-cookbook/step1.png)

> [!TIP]
> This is a helpful tip related to this step.

&nbsp;

## 2. Second Step Title

**Purpose**: Explain what this step accomplishes.

### Configuration Options:

Here's how to configure the settings:

```json
{
  "setting1": "value1",
  "setting2": "value2",
  "setting3": true
}
```

### Sub-steps:

1. First, configure the settings
2. Then, apply the changes
3. Finally, verify the configuration

![Step 2 Screenshot](/cookbooks/your-cookbook/step2.png)

&nbsp;

## 3. Third Step with Code

**Purpose**: Demonstrate API integration.

### Python Example:

```python title="example.py"
from modelhq_client import ModelHQ

# Initialize the client
client = ModelHQ()

# Run the analysis
result = client.run_agent(
    file="document.pdf",
    agent="analyzer"
)

# Process results
print(result)
```

### Alternative: Batch Processing

```python title="batch_example.py"
questions = [
    "What is the main topic?",
    "Summarize the key points",
]

client.batch_analyze(
    folder="documents_folder",
    questions=questions
)
```

> [!NOTE]
> You can customize these scripts for your specific needs.

&nbsp;

## 4. Handling Results

**Purpose**: Show users how to work with the output.

### Output Formats:

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

> [!IMPORTANT]
> Remember to adjust the configuration based on your specific requirements.

&nbsp;

## Need Help?

If you encounter any issues while setting up this workflow, feel free to contact our support team at `support@aibloks.com`.
