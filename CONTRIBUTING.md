# Model HQ Documentation

A comprehensive documentation website for Model HQ - an AI platform that allows users to run cutting-edge AI models directly on their PC with complete privacy and offline capabilities.

![Model HQ Documentation](public/images/new-modelhq-logo.png)

## Overview

Model HQ Documentation is a modern, responsive documentation site built with Next.js 15 and TypeScript. It provides comprehensive guides for users to understand and utilize the Model HQ platform, from basic setup to advanced AI model management.

## 🚀 Tech Stack

### Core Framework
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality, accessible UI components
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Inter Font](https://fonts.google.com/specimen/Inter)** - Modern typography

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **CSS Variables** - Dynamic theming

## Project Structure

```
model-hq-docs/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles & Tailwind config
│   ├── layout.tsx               # Root layout with sidebar
│   ├── page.tsx                 # Homepage with hero & navigation
│   ├── loading.tsx              # Global loading component
│   │
│   ├── system-configuration/    # System requirements & setup
│   │   └── page.tsx
│   │
│   ├── getting-started/         # Installation & setup guides
│   │   └── page.tsx
│   │
│   ├── chat/                    # Chat functionality documentation
│   │   ├── page.tsx            # Main chat overview
│   │   ├── chat/               # Chat interface details
│   │   │   └── page.tsx
│   │   ├── changing-chat-model/ # Model switching guide
│   │   │   └── page.tsx
│   │   └── error/              # Error handling & troubleshooting
│   │       └── page.tsx
│   │
│   ├── models/                  # AI model management
│   │   └── page.tsx
│   │
│   ├── bots/                    # Custom bot creation & management
│   │   └── page.tsx
│   │
│   ├── rag/                     # Retrieval-Augmented Generation
│   │   ├── page.tsx
│   │   └── loading.tsx
│   │
│   └── agent/                   # AI agent documentation
│       └── page.tsx
│
├── components/                   # Reusable React components
│   ├── ui/                      # shadcn/ui components
│   │   ├── sidebar.tsx          # Sidebar primitives
│   │   ├── breadcrumb.tsx       # Breadcrumb navigation
│   │   ├── button.tsx           # Button component
│   │   ├── card.tsx             # Card component
│   │   ├── input.tsx            # Input component
│   │   ├── badge.tsx            # Badge component
│   │   ├── alert.tsx            # Alert component
│   │   ├── separator.tsx        # Separator component
│   │   └── collapsible.tsx      # Collapsible component
│   │
│   ├── app-sidebar.tsx          # Main navigation sidebar
│   ├── header.tsx               # Header with search functionality
│   ├── footer.tsx               # Footer component
│   └── theme-provider.tsx       # Theme context provider
│
├── hooks/                       # Custom React hooks
│   ├── use-mobile.tsx          # Mobile detection hook
│   └── use-toast.ts            # Toast notification hook
│
├── lib/                         # Utility functions
│   └── utils.ts                # Utility functions (cn, etc.)
│
├── public/                      # Static assets
│   ├── images/                 # Documentation images
│   │   ├── llmware-logo.png    # Logo
│   │   ├── system-configuration/
│   │   ├── getting-started/
│   │   ├── chat/
│   │   ├── models/
│   │   ├── bots/
│   │   └── rag/
│   └── favicon.ico             # Site favicon
│
├── styles/                      # Additional styles (if needed)
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore rules
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies & scripts
├── postcss.config.mjs          # PostCSS configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.17 or later
- **npm** 9.0 or later (or **yarn** 1.22+ / **pnpm** 8.0+)
- **Git** for version control
- A code editor (VS Code recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/model-hq-docs.git
   cd model-hq-docs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install # if using Github Codespaces, then use this.
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn run dev # if using Github Codespaces, then use this.
   # or
   pnpm run dev
   # or
   bun run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript type checking
```

## Adding New Documentation

### Creating a New Page

#### 1. Create the Page Structure

```bash
# For a simple page
mkdir app/your-new-page
touch app/your-new-page/page.tsx

# For a page with subpages
mkdir -p app/your-new-page/subpage
touch app/your-new-page/page.tsx
touch app/your-new-page/subpage/page.tsx
```

#### 2. Basic Page Template

```typescript
// app/your-new-page/page.tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function YourNewPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Your New Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Page Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Your Page Title</h1>
        <p className="text-lg text-muted-foreground">
          Brief description of what this page covers
        </p>
      </div>

      {/* Main Content */}
      <div className="prose prose-gray max-w-none">
        <h2>Getting Started</h2>
        <p>
          Your documentation content goes here. Use proper semantic HTML
          and follow the established patterns.
        </p>

        <h3>Subsection</h3>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>

        <h3>Code Example</h3>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
          <code>{`
// Example code block
const example = "Hello World";
console.log(example);
          `}</code>
        </pre>

        <h3>Important Note</h3>
        <blockquote data-type="tip">
          <p>
            <strong>TIP</strong><br />
            Use blockquotes for important information, tips, warnings, etc.
          </p>
        </blockquote>
      </div>
    </div>
  )
}
```

#### 3. Add to Navigation

Update `components/app-sidebar.tsx`:

```typescript
const navigationData = {
  main: [
    // ... existing items
    {
      title: "Your New Page",
      url: "/your-new-page",
      icon: YourIcon, // Import from lucide-react
    },
    // For pages with subpages:
    {
      title: "Your New Page",
      url: "/your-new-page",
      icon: YourIcon,
      items: [
        { title: "Overview", url: "/your-new-page" },
        { title: "Subpage", url: "/your-new-page/subpage" },
      ],
    },
  ],
}
```

#### 4. Add to Search

Update `components/header.tsx` searchData:

```typescript
const searchData: SearchResult[] = [
  // ... existing items
  {
    title: "Your New Page",
    url: "/your-new-page",
    type: "page",
    description: "Brief description for search results",
  },
  // Add headings for better search
  {
    title: "Section Title",
    url: "/your-new-page#section-title",
    type: "heading",
    parentPage: "Your New Page",
  },
]
```

#### 5. Add to Homepage

Update `app/page.tsx` in the documentation section:

```typescript
<div>
  <div className="mb-3">
    <a href="/your-new-page" className="text-xl font-semibold text-primary hover:underline">
      Your New Page
    </a>
    <span className="text-muted-foreground ml-2">- Brief description</span>
  </div>
</div>
```

### Content Guidelines

#### Typography Hierarchy

```typescript
// Main page title
<h1 className="text-3xl font-bold tracking-tight">Page Title</h1>

// Section headings
<h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">Section Title</h2>

// Subsection headings
<h3 className="text-xl font-semibold tracking-tight mt-6 mb-3">Subsection</h3>

// Body text wrapper
<div className="prose prose-gray max-w-none">
  <p>Your content here...</p>
</div>
```

#### Lists and Content

```typescript
// Unordered lists
<ul>
  <li>First item</li>
  <li>Second item with <strong>emphasis</strong></li>
  <li>Third item</li>
</ul>

// Ordered lists
<ol>
  <li>Step one</li>
  <li>Step two</li>
  <li>Step three</li>
</ol>

// Inline code
<code>npm install</code>

// Code blocks
<pre className="bg-muted p-4 rounded-lg overflow-x-auto">
  <code>{`
const example = "formatted code";
console.log(example);
  `}</code>
</pre>
```

#### Special Content Types

```typescript
// Tips
<blockquote data-type="tip">
  <p>
    <strong>TIP</strong><br />
    Helpful information for users.
  </p>
</blockquote>

// Warnings
<blockquote data-type="warning">
  <p>
    <strong>WARNING</strong><br />
    Important warning information.
  </p>
</blockquote>

// Notes
<blockquote data-type="note">
  <p>
    <strong>NOTE</strong><br />
    Additional context or information.
  </p>
</blockquote>

// Important information
<blockquote data-type="important">
  <p>
    <strong>IMPORTANT</strong><br />
    Critical information users must know.
  </p>
</blockquote>

// Caution
<blockquote data-type="caution">
  <p>
    <strong>CAUTION</strong><br />
    Proceed with care.
  </p>
</blockquote>
```

#### Images and Media

```typescript
// Standard image
<img src="/your-page/image-name.png" alt="Descriptive alt text" />

// Image with caption
<figure>
  <img src="/your-page/image-name.png" alt="Descriptive alt text" />
  <figcaption>Image caption explaining the content</figcaption>
</figure>
```

**Image Organization:**
- Place images in `public/page-name/` directory
- Use descriptive filenames: `feature-overview.png`
- Optimize images for web (WebP preferred)
- Always include meaningful alt text

#### Tables

```typescript
<div className="overflow-x-auto">
  <table className="w-full border-collapse border border-gray-300">
    <thead>
      <tr className="bg-muted">
        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
          Header 1
        </th>
        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
          Header 2
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Cell 1</td>
        <td className="border border-gray-300 px-4 py-2">Cell 2</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Managing Video Tutorials

### Video Data Structure

Videos are managed through the `VideoData` interface in `app/video-tutorials/page.tsx`:

````typescript
interface VideoData {
  id: string              // YouTube video ID (extracted from URL)
  title: string           // Video title
  description: string     // Detailed description
  duration: string        // Video length (e.g., "10:14")
  views: string          // View count (e.g., "174K")
  thumbnail: string      // Thumbnail image path
  publishedAt?: string   // Publication date (ISO string)
  tags?: string[]        // Category tags for filtering
  isManuallyAdded?: boolean // Whether manually added vs playlist
}
````

### Adding New Videos

#### 1. Add to Video Array

Update the `playlistVideos` array in `app/video-tutorials/page.tsx`:

````typescript
const playlistVideos: VideoData[] = [
  // ... existing videos
  {
    id: "YOUR_VIDEO_ID",
    title: "Your Video Title",
    description: "Comprehensive description of what the video covers...",
    duration: "12:34",
    views: "15K",
    thumbnail: "/youtube/your-thumbnail.png",
    tags: ["Tutorial", "Feature", "Getting Started"],
    isManuallyAdded: true,
  },
]
````

#### 2. Extract YouTube Video ID

From YouTube URL `https://www.youtube.com/watch?v=ABC123DEF456`, the video ID is `ABC123DEF456`.

#### 3. Add Thumbnail Image

1. **Create thumbnail**: 320x180px image (16:9 aspect ratio)
2. **Save to**: `public/youtube/your-thumbnail.png`
3. **Naming convention**: Use descriptive names like `getting-started.png`, `advanced-features.png`
4. **Optimize**: Use WebP format when possible for better performance

#### 4. Choose Appropriate Tags

Common tag categories:
- **Difficulty**: `Getting Started`, `Advanced`, `Expert`
- **Features**: `Chat`, `RAG`, `Models`, `Bots`, `Agent`
- **Hardware**: `Intel`, `AI PC`, `Performance`
- **Content Type**: `Tutorial`, `Deep Dive`, `Overview`, `Demo`
- **Audience**: `Business`, `Developer`, `Executive`

### Video Management Best Practices

#### Content Guidelines

````typescript
// Good video entry example
{
  id: "ABC123DEF456",
  title: "Setting Up RAG with Model HQ - Complete Guide", // Clear, descriptive
  description: "Learn how to set up Retrieval-Augmented Generation (RAG) in Model HQ. This comprehensive tutorial covers document ingestion, vector databases, and query optimization for better AI responses.", // Detailed, helpful
  duration: "15:42", // Accurate duration
  views: "25.3K", // Current view count
  thumbnail: "/youtube/rag-setup-guide.png", // Descriptive filename
  tags: ["RAG", "Tutorial", "Getting Started", "Documents"], // Relevant tags
  isManuallyAdded: true,
}
````

#### Thumbnail Guidelines

1. **Dimensions**: 320x180px (matches YouTube thumbnail ratio)
2. **Format**: PNG or WebP for best quality
3. **Content**: Should represent the video content clearly
4. **Text**: Minimal overlay text, readable at small sizes
5. **Branding**: Consistent with Model HQ visual identity

#### Video Organization

````typescript
// Organize videos by importance/recency
const playlistVideos: VideoData[] = [
  // 1. Featured/New videos first
  { id: "new-feature", isManuallyAdded: true, /* ... */ },
  
  // 2. Getting started content
  { id: "getting-started", tags: ["Getting Started"], /* ... */ },
  
  // 3. Feature-specific tutorials
  { id: "rag-tutorial", tags: ["RAG", "Tutorial"], /* ... */ },
  
  // 4. Advanced content
  { id: "advanced-config", tags: ["Advanced"], /* ... */ },
]
````

### Updating Video Information

#### Bulk Updates

For multiple video updates, modify the array directly:

````typescript
// Update view counts, add new tags, etc.
const updatedVideos = playlistVideos.map(video => ({
  ...video,
  // Add new tag to all videos
  tags: [...(video.tags || []), "Model HQ"],
  // Update view counts (do this periodically)
  views: getUpdatedViewCount(video.id),
}))
````

#### Individual Updates

````typescript
// Find and update specific video
const videoIndex = playlistVideos.findIndex(v => v.id === "target-video-id")
if (videoIndex !== -1) {
  playlistVideos[videoIndex] = {
    ...playlistVideos[videoIndex],
    title: "Updated Title",
    description: "Updated description...",
    tags: ["New", "Tags"],
  }
}
````

### YouTube Integration

#### Playlist Management

The videos are sourced from the official LLMWare YouTube playlist:
- **Playlist ID**: `PL1-dn33KwsmBiKZDobr9QT-4xI8bNJvIU`
- **Channel**: `@llmware`
- **URL**: `https://www.youtube.com/playlist?list=PL1-dn33KwsmBiKZDobr9QT-4xI8bNJvIU`

#### Adding Videos to YouTube Playlist

1. **Upload video** to LLMWare YouTube channel
2. **Add to playlist** using the playlist ID above
3. **Update local data** in the documentation site
4. **Test video playback** in the embedded player

### Video Player Integration

Videos are played using the custom video player at `/video-tutorials/watch/[videoId]`:

````typescript
// Navigation to video player
const handleVideoClick = (videoId: string, title: string) => {
  window.location.href = `/video-tutorials/watch/${videoId}?title=${encodeURIComponent(title)}`
}
````

#### Player Features

- **YouTube embed** with custom controls
- **Responsive design** for all screen sizes
- **Related videos** suggestions
- **Breadcrumb navigation** back to tutorials
- **SEO optimization** with proper meta tags

### Maintenance Tasks

#### Regular Updates

1. **Monthly**: Update view counts from YouTube Analytics
2. **Quarterly**: Review and update video descriptions
3. **As needed**: Add new videos from playlist
4. **As needed**: Update thumbnails for better click-through rates

#### Quality Checks

````typescript
// Validation checklist for new videos
const validateVideo = (video: VideoData) => {
  const checks = {
    hasValidId: video.id && video.id.length === 11,
    hasTitle: video.title && video.title.length > 10,
    hasDescription: video.description && video.description.length > 50,
    hasDuration: video.duration && /^\d+:\d{2}$/.test(video.duration),
    hasThumbnail: video.thumbnail && video.thumbnail.startsWith('/youtube/'),
    hasTags: video.tags && video.tags.length > 0,
  }
  
  return Object.values(checks).every(Boolean)
}
````

### Troubleshooting

#### Common Issues

1. **Video not loading**: Check YouTube video ID and privacy settings
2. **Thumbnail not showing**: Verify image path and file exists
3. **Search not finding video**: Ensure video is added to search data
4. **Mobile display issues**: Test responsive design on various devices

#### Debug Steps

````typescript
// Debug video data
console.log('Video validation:', validateVideo(videoData))
console.log('YouTube URL:', `https://www.youtube.com/watch?v=${videoData.id}`)
console.log('Thumbnail path:', videoData.thumbnail)
````

## Design System

### Color Palette

```css
/* Light Mode */
--background: 0 0% 100%;           /* White */
--foreground: 240 10% 3.9%;       /* Dark gray */
--primary: 240 9% 17%;            /* Dark blue-gray */
--muted: 240 4.8% 95.9%;          /* Light gray */
--border: 240 5.9% 90%;           /* Border gray */

/* Dark Mode */
--background: 240 10% 3.9%;       /* Dark gray */
--foreground: 0 0% 98%;           /* White */
--primary: 0 0% 98%;              /* White */
--muted: 240 3.7% 15.9%;          /* Dark muted */
```

### Typography Scale

- **Display**: 3xl (30px) - Page titles
- **Heading 1**: 2xl (24px) - Section headings
- **Heading 2**: xl (20px) - Subsection headings
- **Body**: base (16px) - Regular text
- **Small**: sm (14px) - Captions, metadata

### Spacing System

- **xs**: 0.5rem (8px)
- **sm**: 0.75rem (12px)
- **base**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)

### Component Patterns

```typescript
// Page wrapper
<div className="max-w-4xl mx-auto space-y-6">

// Section spacing
<div className="space-y-4">

// Content wrapper
<div className="prose prose-gray max-w-none">

// Card pattern
<div className="p-6 rounded-lg border bg-card">

// Button patterns
<Button size="lg" className="text-lg px-8 py-6">
<Button variant="outline" size="lg">
```

## Search System

### How Search Works

The search system provides:
- **Real-time search** as users type
- **Keyboard navigation** (↑↓ arrows, Enter, Escape)
- **Page and section results** with proper categorization
- **Fuzzy matching** for flexible search queries

### Adding Search Support

1. **Add page to search data** in `components/header.tsx`:

```typescript
const searchData: SearchResult[] = [
  {
    title: "Page Title",
    url: "/page-url",
    type: "page",
    description: "Brief description for search results",
  },
  // Add sections/headings
  {
    title: "Section Title",
    url: "/page-url#section-anchor",
    type: "heading",
    parentPage: "Page Title",
  },
]
```

2. **Use proper heading IDs** for anchor links:

```typescript
<h2 id="section-title">Section Title</h2>
<h3 id="subsection-title">Subsection Title</h3>
```

## Testing

### Manual Testing Checklist

Before submitting changes, test:

- [ ] **Page loads correctly** in development and production
- [ ] **Navigation works** (sidebar, breadcrumbs, links)
- [ ] **Search finds content** (pages and sections)
- [ ] **Mobile responsive** (test on different screen sizes)
- [ ] **Images load properly** and have alt text
- [ ] **Links work correctly** (internal and external)
- [ ] **Typography is consistent** with design system
- [ ] **Code blocks render properly** with syntax highlighting
- [ ] **Blockquotes display correctly** with proper styling

## Contributing

### Development Workflow

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/model-hq-docs.git
   cd model-hq-docs
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b docs/page-name
   # or
   git checkout -b fix/issue-description
   ```

3. **Make your changes**
   - Follow the coding standards
   - Add proper documentation
   - Test thoroughly

4. **Commit with clear messages**
   ```bash
   git add .
   git commit -m "Add: New documentation page for X feature"
   # or
   git commit -m "Fix: Broken link in navigation"
   # or
   git commit -m "Update: Improve search functionality"
   ```

5. **Push and create Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Message Convention

Use clear, descriptive commit messages:

```
Type: Brief description

Types:
- Add: New features or content
- Update: Changes to existing content
- Fix: Bug fixes
- Remove: Deleted content or features
- Refactor: Code improvements without functionality changes
```

Examples:
```
Add: New RAG documentation page with examples
Update: Improve chat interface screenshots
Fix: Broken links in sidebar navigation
Remove: Outdated system requirements
Refactor: Simplify search component logic
```

### Code Style Guidelines

#### TypeScript/React
```typescript
// Use proper typing
interface PageProps {
  title: string;
  description?: string;
}

// Functional components with proper props
export default function PageComponent({ title, description }: PageProps) {
  return (
    <div>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  )
}

// Use descriptive variable names
const searchResults = performSearch(query)
const isSearchVisible = query.length > 0

// Prefer const over let when possible
const navigationItems = getNavigationData()
```

#### CSS/Tailwind
```typescript
// Use semantic class combinations
<div className="max-w-4xl mx-auto space-y-6">
<h1 className="text-3xl font-bold tracking-tight">
<p className="text-lg text-muted-foreground">

// Group related classes
<button className="
  px-4 py-2 
  bg-primary text-primary-foreground 
  rounded-md 
  hover:bg-primary/90 
  transition-colors
">
```

### Pull Request Process

#### Before Submitting
1. **Test thoroughly** using the checklist above
2. **Update documentation** if you changed functionality
3. **Add screenshots** for UI changes
4. **Check for typos** and formatting issues

#### PR Description Template
```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] New documentation page
- [ ] Content update
- [ ] Bug fix
- [ ] UI improvement
- [ ] Search enhancement

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Verified search functionality
- [ ] Checked all links work
- [ ] Validated responsive design

## Screenshots
(Include before/after screenshots for UI changes)

## Additional Notes
Any additional context or considerations.
```


## Deployment

### Production Build

```bash
# Create production build
npm run build

# Test production build locally
npm run start
```

### Environment Variables

Create `.env.local` for local development:

```bash
# Add any required environment variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Deployment Platforms

#### Vercel (Recommended)
1. Connect GitHub repository
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`


#### Self-hosted
```bash
# Build for production
npm run build

# Start production server
npm run start
```

## Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check TypeScript errors
npm run type-check
```

#### Styling Issues
```bash
# Rebuild Tailwind CSS
npm run dev

# Check for conflicting styles
# Inspect element in browser dev tools
```

#### Search Not Working
1. Check `searchData` array in `components/header.tsx`
2. Verify page URLs match exactly
3. Test search component in isolation

### Getting Help

1. **Check existing issues** in the repository
2. **Search documentation** for similar problems
3. **Create detailed issue** with reproduction steps
4. **Ask in discussions** for general questions

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/RS-labhub/model-hq-docs/blob/master/LICENSE) file for details.


## Support

- **Documentation Issues**: Create an issue in this repository
- **Model HQ Support**: Contact `support@aibloks.com`
- **General Questions**: Use GitHub Discussions
- **Feature Requests**: Create an issue with the "enhancement" label

**Happy Contributing! 🎉**

Made with ❤️ by the Model HQ Documentation Team
