---
title: "Feature Name"
breadcrumbs:
  - [Home](/)
  - [Section](/section)
---

## Introduction to Feature Name

This is an introductory paragraph explaining the feature. You can use **bold text** for emphasis and *italics* for secondary emphasis. Use `inline code` for technical terms.

&nbsp;

<!--
  RELATED VIDEOS (optional, but recommended for v1 docs).

  Drop a horizontally-scrollable Related Videos carousel right after the
  introduction so readers can watch the feature in action before diving in.

  - Use the `RelatedVideos` component from `@/components/related-videos`.
  - Pick only YouTube IDs that are clearly relevant to this page's topic.
    The full catalog lives in `app/resources/video-tutorials/video-data.ts`.
  - 3–7 videos is a good range. Be selective — quality over quantity.
  - If no videos are clearly relevant, omit the section entirely.
  - The component is mobile-responsive and identical across all v1 pages.

  Example (paste directly into the generated .tsx page, not into Markdown):

      import { RelatedVideos } from "@/components/related-videos"

      <RelatedVideos
        title="Watch: Feature Name in Action"
        description="Short walkthroughs covering this feature end-to-end."
        videoIds={[
          "VIDEO_ID_1",
          "VIDEO_ID_2",
          "VIDEO_ID_3",
        ]}
      />
-->

&nbsp;

## 1. Getting Started {#getting-started}

Click on the **Feature** button from the main menu to get started.

![Feature Screenshot](/images/feature.png)

&nbsp;

## 2. Configuration

You will be prompted with a configuration screen. Here are the available options:

### Available Options:

- **Option A**: Description of option A
- **Option B**: Description of option B
- **Option C**: Description of option C

&nbsp;

## 3. Using the Feature

### Step-by-Step Instructions

1. First, do this action
2. Then, do this action
3. Finally, complete this action

> [!TIP]
> If you encounter an error, please refer to the [Error Guide](/errors) for troubleshooting steps.

&nbsp;

### Code Example

Here's an example of how to use the API:

```python
from modelhq import Client

client = Client()
result = client.do_something()
print(result)
```

&nbsp;

## 4. Advanced Configuration

The following table shows all configuration parameters:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `temperature` | float | 0.7 | Controls randomness |
| `max_tokens` | int | 1024 | Maximum output length |
| `top_p` | float | 0.9 | Nucleus sampling |

> [!NOTE]
> For this documentation, we are using the **Medium Model**. You can switch between models as needed.

&nbsp;

## Conclusion

In this section, we explored the **Feature** in Model HQ — from basic setup to advanced configuration.

For further assistance, please contact us at `support@aibloks.com`
