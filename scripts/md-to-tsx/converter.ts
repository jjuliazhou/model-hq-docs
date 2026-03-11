/**
 * Markdown to TSX Converter for Model HQ Documentation
 * 
 * This script converts Markdown files to TSX components for the Model HQ docs website.
 * Supports two output formats:
 * 1. Documentation pages (prose-based, like v0/chat/page.tsx)
 * 2. Cookbook pages (card-based with sections, steps, like cookbooks/v0/rag-bot/page.tsx)
 * 
 * Usage:
 *   npx tsx scripts/md-to-tsx/converter.ts <input.md> <output-folder> [--type=docs|cookbook]
 *   npx tsx scripts/md-to-tsx/converter.ts <relative-path> [--type=docs|cookbook]
 * 
 * Example:
 *   npx tsx scripts/md-to-tsx/converter.ts ./my-doc.md ./app/v0/chat --type=docs
 *   npx tsx scripts/md-to-tsx/converter.ts v0/chat/CHAT.md --type=docs
 *   npx tsx scripts/md-to-tsx/converter.ts ./my-cookbook.md ./app/cookbooks/v0/my-cookbook --type=cookbook
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// ============================================================================
// CONFIGURATION - Easy to change source and destination folders
// ============================================================================

const CONFIG = {
  // Source folder for markdown files (relative to project root)
  SOURCE_FOLDER: './model-hq-markdown-docs/v1',
  
  // Destination folder for generated TSX files (relative to project root)
  DEST_FOLDER: './app/v1',
  
  // Default output filename
  OUTPUT_FILENAME: 'page.tsx',
  
  // Default version for docs generation
  DEFAULT_VERSION: 'v1' // 'v0' or 'v1'
};

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================================================================
// TYPES AND INTERFACES
// ============================================================================

interface MarkdownMeta {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  type: 'docs' | 'cookbook';
  youtubeUrl?: string;
  videoTitle?: string;
  version?: 'v0' | 'v1'; // Which version layout to use
  references?: Reference[]; // For v1 layout
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Reference {
  title: string;
  href: string;
  type: 'internal' | 'external' | 'doc';
  description?: string;
}

interface ParsedContent {
  meta: MarkdownMeta;
  sections: Section[];
  hasCodeBlocks: boolean;
  hasSteps: boolean;
  hasTables: boolean;
  hasCards: boolean;
  icons: Set<string>;
}

interface Section {
  type: 'heading' | 'paragraph' | 'image' | 'code' | 'blockquote' | 'list' | 'table' | 'step' | 'card' | 'raw';
  level?: number;
  content: string;
  id?: string;
  language?: string;
  title?: string;
  blockquoteType?: 'note' | 'tip' | 'warning' | 'important' | 'caution' | 'default';
  listType?: 'ordered' | 'unordered';
  items?: Array<string | { content: string; subItems?: string[] }>;
  tableData?: { headers: string[]; rows: string[][] };
  stepNumber?: number;
  cardStyle?: string;
}

// ============================================================================
// MARKDOWN PARSER
// ============================================================================

class MarkdownParser {
  private lines: string[];
  private currentIndex: number = 0;
  private icons: Set<string> = new Set();
  private version: 'v0' | 'v1' = CONFIG.DEFAULT_VERSION as 'v0' | 'v1';

  constructor(content: string) {
    this.lines = content.split('\n');
  }

  parse(type: 'docs' | 'cookbook'): ParsedContent {
    const meta = this.extractMeta(type);
    this.version = meta.version || (CONFIG.DEFAULT_VERSION as 'v0' | 'v1');
    const sections = this.parseSections();
    
    return {
      meta,
      sections,
      hasCodeBlocks: sections.some(s => s.type === 'code'),
      hasSteps: sections.some(s => s.type === 'step'),
      hasTables: sections.some(s => s.type === 'table'),
      hasCards: sections.some(s => s.type === 'card'),
      icons: this.icons
    };
  }

  private extractMeta(type: 'docs' | 'cookbook'): MarkdownMeta {
    let title = '';
    let description = '';
    let youtubeUrl = '';
    let videoTitle = '';
    let version: 'v0' | 'v1' = CONFIG.DEFAULT_VERSION as 'v0' | 'v1';
    const references: Reference[] = [];
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

    // Look for front matter (YAML) or extract from first heading
    if (this.lines[0] === '---') {
      let i = 1;
      while (i < this.lines.length && this.lines[i] !== '---') {
        const line = this.lines[i];
        if (line.startsWith('title:')) {
          title = line.replace('title:', '').trim().replace(/^["']|["']$/g, '');
        }
        if (line.startsWith('description:')) {
          description = line.replace('description:', '').trim().replace(/^["']|["']$/g, '');
        }
        if (line.startsWith('breadcrumbs:')) {
          // Parse breadcrumb array from YAML
          i++;
          while (i < this.lines.length && this.lines[i].startsWith('  -')) {
            const crumb = this.lines[i].replace('  -', '').trim();
            const match = crumb.match(/\[(.+?)\]\((.+?)\)/);
            if (match) {
              breadcrumbs.push({ label: match[1], href: match[2] });
            } else {
              breadcrumbs.push({ label: crumb });
            }
            i++;
          }
          continue;
        }
        if (line.startsWith('youtube:')) {
          youtubeUrl = line.replace('youtube:', '').trim().replace(/^["']|["']$/g, '');
        }
        if (line.startsWith('videoTitle:')) {
          videoTitle = line.replace('videoTitle:', '').trim().replace(/^["']|["']$/g, '');
        }
        i++;
      }
      this.currentIndex = i + 1;
    }

    // If no title from frontmatter, extract from first heading
    if (!title) {
      for (let i = this.currentIndex; i < this.lines.length; i++) {
        const line = this.lines[i];
        if (line.startsWith('# ')) {
          title = line.replace('# ', '').trim();
          this.currentIndex = i + 1;
          break;
        }
        if (line.startsWith('## ')) {
          title = line.replace('## ', '').trim();
          this.currentIndex = i + 1;
          break;
        }
      }
    }

    return { title, description, breadcrumbs, type, youtubeUrl, videoTitle, version, references };
  }

  private parseSections(): Section[] {
    const sections: Section[] = [];

    while (this.currentIndex < this.lines.length) {
      const line = this.lines[this.currentIndex];

      // Skip empty lines
      if (line.trim() === '' || line.trim() === '&nbsp;') {
        this.currentIndex++;
        continue;
      }

      // Collapsible raw HTML blocks (e.g., <details>...</details>)
      if (line.trim().toLowerCase().startsWith('<details')) {
        sections.push(this.parseRawBlock());
        continue;
      }

      // Headings
      if (line.startsWith('#')) {
        sections.push(this.parseHeading(line));
        this.currentIndex++;
        continue;
      }

      // Code blocks
      if (line.startsWith('```')) {
        sections.push(this.parseCodeBlock());
        continue;
      }

      // Images
      if (line.match(/^!\[.*?\]\(.*?\)/)) {
        sections.push(this.parseImage(line));
        this.currentIndex++;
        continue;
      }

      // Blockquotes (GitHub alerts)
      if (line.startsWith('>')) {
        sections.push(this.parseBlockquote());
        continue;
      }

      // Tables
      if (line.includes('|') && this.lines[this.currentIndex + 1]?.trim().match(/^\|[\s\-:|]+\|$/)) {
        sections.push(this.parseTable());
        continue;
      }

      // Lists
      if (line.match(/^[\s]*[-*+]\s/) || line.match(/^[\s]*\d+\.\s/)) {
        sections.push(this.parseList());
        continue;
      }

      // Regular paragraphs
      sections.push(this.parseParagraph());
    }

    return sections;
  }

  private parseHeading(line: string): Section {
    const match = line.match(/^(#{1,6})\s+(.+)/);
    if (!match) return { type: 'heading', level: 1, content: line };
    
    const level = match[1].length;
    let content = match[2].trim();
    
    // Extract ID from heading if present (e.g., "### Title {#custom-id}")
    let id = '';
    const idMatch = content.match(/\s*\{#([\w-]+)\}\s*$/);
    if (idMatch) {
      id = idMatch[1];
      content = content.replace(/\s*\{#[\w-]+\}\s*$/, '');
    } else {
      // Generate ID from content
      id = content.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/^(\d+)\.\s*/, '$1-');
    }

    return { type: 'heading', level, content, id };
  }

  private parseCodeBlock(): Section {
    const startLine = this.lines[this.currentIndex];
    const languageMatch = startLine.match(/^```(\w+)?(?:\s+title="(.+?)")?/);
    const language = languageMatch?.[1] || 'text';
    const title = languageMatch?.[2] || '';
    
    this.currentIndex++;
    const codeLines: string[] = [];
    
    while (this.currentIndex < this.lines.length && !this.lines[this.currentIndex].startsWith('```')) {
      codeLines.push(this.lines[this.currentIndex]);
      this.currentIndex++;
    }
    this.currentIndex++; // Skip closing ```
    
    return {
      type: 'code',
      content: codeLines.join('\n'),
      language,
      title
    };
  }

  private parseImage(line: string): Section {
    const match = line.match(/!\[(.+?)\]\((.+?)\)/);
    if (!match) return { type: 'raw', content: line };
    
    const alt = match[1];
    let src = match[2];
    
    // Ensure image paths are absolute (start with /) for proper resolution from /public
    // Only add leading slash if it's not already an absolute path or external URL
    if (!src.startsWith('/') && !src.startsWith('http://') && !src.startsWith('https://')) {
      // Prepend version path for v1/v0 images
      src = `/${this.version}/${src}`;
    }
    
    return { type: 'image', content: src, title: alt };
  }

  /**
   * Parse a raw HTML block such as <details>...</details> and return as a raw section.
   * The generator will emit raw content verbatim into the TSX output.
   */
  private parseRawBlock(): Section {
    const lines: string[] = [];
    while (this.currentIndex < this.lines.length) {
      const line = this.lines[this.currentIndex];
      lines.push(line);
      this.currentIndex++;
      if (line.toLowerCase().includes('</details>')) {
        break;
      }
    }

    return { type: 'raw', content: lines.join('\n') };
  }

  private parseBlockquote(): Section {
    const lines: string[] = [];
    let blockquoteType: Section['blockquoteType'] = 'default';
    
    while (this.currentIndex < this.lines.length && 
           (this.lines[this.currentIndex].startsWith('>') || 
            (lines.length > 0 && this.lines[this.currentIndex].trim() !== '' && !this.lines[this.currentIndex].startsWith('#')))) {
      let line = this.lines[this.currentIndex];
      if (line.startsWith('>')) {
        line = line.replace(/^>\s?/, '');
      }
      
      // Check for GitHub alert syntax [!NOTE], [!TIP], etc.
      const alertMatch = line.match(/^\[!(NOTE|TIP|WARNING|IMPORTANT|CAUTION)\]/i);
      if (alertMatch) {
        blockquoteType = alertMatch[1].toLowerCase() as Section['blockquoteType'];
        line = line.replace(/^\[!(NOTE|TIP|WARNING|IMPORTANT|CAUTION)\]\s*/i, '');
        if (line.trim()) {
          lines.push(line);
        }
      } else {
        lines.push(line);
      }
      
      this.currentIndex++;
    }
    
    return {
      type: 'blockquote',
      content: lines.join('\n').trim(),
      blockquoteType
    };
  }

  private parseTable(): Section {
    const headers: string[] = [];
    const rows: string[][] = [];
    
    // Parse header row
    const headerLine = this.lines[this.currentIndex];
    headers.push(...headerLine.split('|').map(h => h.trim()).filter(h => h));
    this.currentIndex++;
    
    // Skip separator row
    this.currentIndex++;
    
    // Parse data rows
    while (this.currentIndex < this.lines.length && this.lines[this.currentIndex].includes('|')) {
      const row = this.lines[this.currentIndex]
        .split('|')
        .map(c => c.trim())
        .filter(c => c !== '');
      if (row.length > 0) {
        rows.push(row);
      }
      this.currentIndex++;
    }
    
    return {
      type: 'table',
      content: '',
      tableData: { headers, rows }
    };
  }

  private parseList(): Section {
    const items: Array<string | { content: string; subItems?: string[] }> = [];
    const firstLine = this.lines[this.currentIndex];
    const isOrdered = /^\s*\d+\.\s/.test(firstLine);
    const listType: 'ordered' | 'unordered' = isOrdered ? 'ordered' : 'unordered';
    
    while (this.currentIndex < this.lines.length) {
      const line = this.lines[this.currentIndex];
      
      // Check for top-level list item (no leading spaces or only 0-1 spaces)
      if (line.match(/^[\s]{0,1}[-*+]\s/) || line.match(/^[\s]{0,1}\d+\.\s/)) {
        const content = line.replace(/^[\s]{0,1}[-*+]\s/, '').replace(/^[\s]{0,1}\d+\.\s/, '').trim();
        items.push({ content, subItems: [] });
        this.currentIndex++;
      }
      // Check for nested list item (2+ leading spaces)
      else if (line.match(/^[\s]{2,}[-*+]\s/) || line.match(/^[\s]{2,}\d+\.\s/)) {
        const content = line.replace(/^[\s]+[-*+]\s/, '').replace(/^[\s]+\d+\.\s/, '').trim();
        // Add to the last item's subItems
        if (items.length > 0) {
          const lastItem = items[items.length - 1];
          if (typeof lastItem === 'object') {
            if (!lastItem.subItems) {
              lastItem.subItems = [];
            }
            lastItem.subItems.push(content);
          }
        }
        this.currentIndex++;
      }
      else if (line.trim() === '' || line.startsWith('#') || line.startsWith('```') || line.startsWith('>')) {
        break;
      }
      else {
        // Continuation of previous item
        if (items.length > 0) {
          const lastItem = items[items.length - 1];
          if (typeof lastItem === 'string') {
            items[items.length - 1] = lastItem + ' ' + line.trim();
          } else {
            lastItem.content += ' ' + line.trim();
          }
        }
        this.currentIndex++;
      }
    }
    
    return {
      type: 'list',
      content: '',
      listType,
      items
    };
  }

  private parseParagraph(): Section {
    const lines: string[] = [];
    
    while (this.currentIndex < this.lines.length) {
      const line = this.lines[this.currentIndex];
      
      // Check for table: current line has | AND next line is separator
      const isTableStart = line.includes('|') && this.lines[this.currentIndex + 1]?.trim().match(/^\|[\s\-:|]+\|$/);
      
      if (line.trim() === '' || 
          line.startsWith('#') || 
          line.startsWith('```') ||
          line.startsWith('>') ||
          line.match(/^!\[.*?\]\(.*?\)/) ||
          line.match(/^[\s]*[-*+]\s/) ||
          line.match(/^[\s]*\d+\.\s/) ||
          isTableStart ||
          line.trim().toLowerCase().startsWith('<details')) {
        break;
      }
      
      lines.push(line);
      this.currentIndex++;
    }
    
    return {
      type: 'paragraph',
      content: lines.join('\n').trim()
    };
  }
}

// ============================================================================
// TSX GENERATORS
// ============================================================================

class DocsGenerator {
  private content: ParsedContent;

  constructor(content: ParsedContent) {
    this.content = content;
  }

  generate(): string {
    const imports = this.generateImports();
    const component = this.generateComponent();
    
    return `${imports}\n\n${component}`;
  }

  private generateImports(): string {
    const { version } = this.content.meta;
    
    const lines = [
      `import {`,
      `  Breadcrumb,`,
      `  BreadcrumbItem,`,
      `  BreadcrumbLink,`,
      `  BreadcrumbList,`,
      `  BreadcrumbPage,`,
      `  BreadcrumbSeparator,`,
      `} from "@/components/ui/breadcrumb"`
    ];

    // Add v1-specific imports
    if (version === 'v1') {
      lines.push(`import { DocPageLayout } from "@/components/doc-page-layout"`);
      lines.push(`import { references } from "./references"`);
    }

    return lines.join('\n');
  }

  private generateComponent(): string {
    const { meta, sections } = this.content;
    const componentName = this.generateComponentName(meta.title);
    
    const breadcrumbsJsx = this.generateBreadcrumbs(meta.breadcrumbs, meta.title);
    const contentJsx = this.generateContent(sections);
    const ctaJsx = this.generateCTA();

    if (meta.version === 'v1') {
      // V1 layout with DocPageLayout wrapper
      return `export default function ${componentName}Page() {
  return (
    <DocPageLayout references={references}>
      <div className="space-y-6">
      ${breadcrumbsJsx}

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">${this.escapeJsx(meta.title)}</h1>
      </div>

      <div className="prose prose-gray max-w-none">
${contentJsx}

${ctaJsx}
      </div>
    </div>
    </DocPageLayout>
  )
}`;
    } else {
      // V0 layout (original)
      return `export default function ${componentName}Page() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      ${breadcrumbsJsx}

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">${this.escapeJsx(meta.title)}</h1>
      </div>

      <div className="prose prose-gray max-w-none">
${contentJsx}

${ctaJsx}
      </div>
    </div>
  )
}`;
    }
  }

  private generateReferencesFile(): string {
    const { references } = this.content.meta;
    
    if (!references || references.length === 0) {
      return `import { Reference } from "@/components/references"

export const references: Reference[] = []
`;
    }

    const referencesJson = references.map(ref => {
      return `  {
    title: "${ref.title}",
    href: "${ref.href}",
    type: "${ref.type}",${ref.description ? `\n    description: "${ref.description}",` : ''}
  }`;
    }).join(',\n');

    return `import { Reference } from "@/components/references"

export const references: Reference[] = [
${referencesJson},
]
`;
  }

  private generateBreadcrumbs(breadcrumbs: BreadcrumbItem[], currentPage: string): string {
    let jsx = `<Breadcrumb>
        <BreadcrumbList>`;
    
    for (const crumb of breadcrumbs) {
      jsx += `
          <BreadcrumbItem>
            <BreadcrumbLink href="${crumb.href || '/'}">${crumb.label}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />`;
    }
    
    jsx += `
          <BreadcrumbItem>
            <BreadcrumbPage>${this.escapeJsx(currentPage)}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>`;
    
    return jsx;
  }

  private generateContent(sections: Section[]): string {
    return sections.map(section => this.sectionToJsx(section)).join('\n\n');
  }

  private sectionToJsx(section: Section): string {
    const indent = '        ';
    
    switch (section.type) {
      case 'heading':
        return this.headingToJsx(section, indent);
      case 'paragraph':
        return this.paragraphToJsx(section, indent);
      case 'image':
        return `${indent}<img src="${section.content}" alt="${section.title || ''}" />`;
      case 'raw':
        // Emit raw HTML/JSX as-is (useful for <details> blocks)
        return `${indent}${section.content}`;
      case 'code':
        return this.codeToJsx(section, indent);
      case 'blockquote':
        return this.blockquoteToJsx(section, indent);
      case 'list':
        return this.listToJsx(section, indent);
      case 'table':
        return this.tableToJsx(section, indent);
      default:
        return `${indent}<p>${this.escapeJsx(section.content)}</p>`;
    }
  }

  private headingToJsx(section: Section, indent: string): string {
    const level = section.level || 2;
    const tag = `h${level}`;
    const id = section.id ? ` id="${section.id}"` : '';
    const content = this.processInlineMarkdown(section.content);
    
    return `${indent}<${tag}${id}>${content}</${tag}>`;
  }

  private paragraphToJsx(section: Section, indent: string): string {
    const content = this.processInlineMarkdown(section.content);
    // Handle line breaks
    const processed = content.replace(/\n/g, '\n          <br />\n          ');
    return `${indent}<p>\n          ${processed}\n        </p>`;
  }

  private codeToJsx(section: Section, indent: string): string {
    // Check if content contains curly braces (common in JSON, code examples)
    const hasCurlyBraces = section.content.includes('{') || section.content.includes('}');
    
    if (hasCurlyBraces) {
      // Use template literal syntax for content with curly braces
      const escaped = section.content
        .replace(/`/g, '\\`')
        .replace(/\$/g, '\\$');
      
      return `${indent}<pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">{\`${escaped}\`}</code>
        </pre>`;
    } else {
      // Use regular escaping for content without curly braces
      const escaped = section.content
        .replace(/`/g, '\\`')
        .replace(/\$/g, '\\$');
      
      return `${indent}<pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm">${escaped}</code>
        </pre>`;
    }
  }

  private blockquoteToJsx(section: Section, indent: string): string {
    const dataType = section.blockquoteType && section.blockquoteType !== 'default' 
      ? ` data-type="${section.blockquoteType}"` 
      : '';
    
    const content = this.processInlineMarkdown(section.content);
    const lines = content.split('\n').filter(l => l.trim());
    
    let inner = '';
    for (const line of lines) {
      inner += `\n            <p>${line}</p>`;
    }
    
    return `${indent}<blockquote${dataType}>${inner}
        </blockquote>`;
  }

  private listToJsx(section: Section, indent: string): string {
    const tag = section.listType === 'ordered' ? 'ol' : 'ul';
    const items = section.items?.map(item => {
      if (typeof item === 'string') {
        const processed = this.processInlineMarkdown(item);
        return `\n          <li>${processed}</li>`;
      } else {
        const processed = this.processInlineMarkdown(item.content);
        let result = `\n          <li>${processed}`;
        
        // Add nested list if subItems exist
        if (item.subItems && item.subItems.length > 0) {
          result += `\n            <ul>`;
          for (const subItem of item.subItems) {
            const processedSub = this.processInlineMarkdown(subItem);
            result += `\n              <li>${processedSub}</li>`;
          }
          result += `\n            </ul>`;
        }
        
        result += `</li>`;
        return result;
      }
    }).join('') || '';
    
    return `${indent}<${tag}>${items}
        </${tag}>`;
  }

  private tableToJsx(section: Section, indent: string): string {
    if (!section.tableData) return '';
    
    const { headers, rows } = section.tableData;
    
    // Desktop table view
    let jsx = `${indent}<div className="overflow-x-auto">
        {/* Desktop Table View */}
        <table className="hidden md:table w-full border-collapse border border-border">
          <thead>
            <tr className="bg-muted">`;
    
    for (const header of headers) {
      jsx += `\n              <th className="border border-border px-4 py-2 text-left">${this.escapeJsx(header)}</th>`;
    }
    
    jsx += `
            </tr>
          </thead>
          <tbody>`;
    
    for (const row of rows) {
      jsx += `
            <tr>`;
      for (const cell of row) {
        jsx += `
              <td className="border border-border px-4 py-2">${this.processInlineMarkdown(cell)}</td>`;
      }
      jsx += `
            </tr>`;
    }
    
    jsx += `
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">`;
    
    // Generate cards for each row
    for (const row of rows) {
      jsx += `
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">`;
      
      for (let i = 0; i < headers.length; i++) {
        const header = headers[i];
        const cell = row[i] || '';
        jsx += `
              <div>
                <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">${this.escapeJsx(header)}</h5>
                <p className="text-sm mt-1 break-words">${this.processInlineMarkdown(cell)}</p>
              </div>`;
      }
      
      jsx += `
            </div>
          </div>`;
    }
    
    jsx += `
        </div>
      </div>`;
    
    return jsx;
  }

  private processInlineMarkdown(text: string): string {
    let result = text;
    
    // Store replacements to apply at the end (to avoid regex interference)
    const replacements: Array<{ placeholder: string; value: string }> = [];
    let placeholderIndex = 0;
    
    // Helper to create safe placeholders (using characters that won't trigger other regex)
    const createPlaceholder = () => `\x00PLACEHOLDER${placeholderIndex++}\x00`;
    
    // 1. First, protect and process links (before anything else can mess up URLs)
    result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
      const placeholder = createPlaceholder();
      const internalUrl = this.convertToInternalLink(url);
      // Process linkText for inline formatting (but not links within links)
      const processedLinkText = linkText
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>');
      replacements.push({ placeholder, value: `<a href="${internalUrl}">${processedLinkText}</a>` });
      return placeholder;
    });
    
    // 2. Inline code - escape special chars
    result = result.replace(/`([^`]+)`/g, (match, code) => {
      const placeholder = createPlaceholder();
      const escapedCode = code.replace(/>/g, '&gt;').replace(/</g, '&lt;');
      replacements.push({ placeholder, value: `<code>${escapedCode}</code>` });
      return placeholder;
    });
    
    // 3. Bold (must come before italic to handle **text** vs *text*)
    result = result.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    result = result.replace(/__([^_]+)__/g, '<strong>$1</strong>');
    
    // 4. Italic - but only for *text* not _text_ in URLs/paths
    result = result.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    // Only apply underscore italic if not part of a path/URL pattern
    result = result.replace(/(?<![\/\w])_([^_]+)_(?![\/\w])/g, '<em>$1</em>');
    
    // 5. Restore all placeholders
    for (const { placeholder, value } of replacements) {
      result = result.replace(placeholder, value);
    }
    
    // 6. Escape standalone > characters (not part of HTML tags)
    // Match > that is not preceded by a tag opening or followed by tag content
    result = result.replace(/(?<![<\/\w"])>(?![\w])/g, '&gt;');
    
    return result;
  }

  private convertToInternalLink(url: string): string {
    // Convert GitHub markdown links to internal routes
    if (url.includes('github.com') && url.includes('.md')) {
      const match = url.match(/\/([^/]+)\/([^/]+)\.md/);
      if (match) {
        // Replace underscores with dashes in the path
        return `/${match[1].toLowerCase().replace(/_/g, '-')}/${match[2].toLowerCase().replace(/_/g, '-')}`;
      }
    }
    // For any URL, replace underscores with dashes (common pattern for routes)
    // But only for internal links (not external URLs)
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return url.replace(/_/g, '-');
    }
    return url;
  }

  private escapeJsx(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/{/g, '&#123;')
      .replace(/}/g, '&#125;');
  }

  private generateCTA(): string {
    const indent = '        ';
    return `${indent}<div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-400">
            For further assistance or to share feedback, please contact us at{' '}
            <a href="mailto:support@aibloks.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              support@aibloks.com
            </a>
          </p>
        </div>`;
  }

  private generateComponentName(title: string): string {
    return title
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  }
}

// ============================================================================
// COOKBOOK GENERATOR
// ============================================================================

class CookbookGenerator {
  private content: ParsedContent;
  private usedIcons: Set<string> = new Set();

  constructor(content: ParsedContent) {
    this.content = content;
  }

  generate(): string {
    // Pre-analyze content for icons and features
    this.analyzeContentForIcons();
    
    const imports = this.generateImports();
    const codeBlockComponent = this.content.hasCodeBlocks ? this.generateCodeBlockComponent() : '';
    const component = this.generateComponent();
    
    return `${imports}\n${codeBlockComponent}\n${component}`;
  }

  private analyzeContentForIcons(): void {
    const { sections } = this.content;
    
    // Add commonly used icons based on content
    if (sections.some(s => s.type === 'list' && s.items?.some(i => {
      const text = typeof i === 'string' ? i : i.content;
      return text.toLowerCase().includes('check');
    }))) {
      this.usedIcons.add('CheckCircle');
    }
    if (sections.some(s => s.content?.toLowerCase().includes('download'))) {
      this.usedIcons.add('Download');
    }
    if (sections.some(s => s.content?.toLowerCase().includes('file'))) {
      this.usedIcons.add('FileText');
    }
    if (this.content.meta.youtubeUrl) {
      this.usedIcons.add('ExternalLink');
    }
    
    // Default icons for cookbook
    this.usedIcons.add('CheckCircle');
    this.usedIcons.add('FileText');
    this.usedIcons.add('Settings');
    this.usedIcons.add('Code');
    this.usedIcons.add('ExternalLink');
  }

  private generateImports(): string {
    const iconsList = Array.from(this.usedIcons).sort().join(',\n  ');
    
    let imports = `"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import {
  ${iconsList},
} from "lucide-react"`;

    if (this.content.hasCodeBlocks) {
      imports += `
import { useState } from "react"
import { Copy } from "lucide-react"`;
    }

    return imports;
  }

  private generateCodeBlockComponent(): string {
    return `

function CodeBlock({ children, title, language = "text" }: { children: string; title?: string; language?: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="relative w-full">
      {title && (
        <div className="bg-slate-800 dark:bg-slate-800 text-slate-200 dark:text-slate-200 px-4 py-2 text-sm font-medium rounded-t-lg border-b border-slate-700 dark:border-slate-700">
          {title}
        </div>
      )}
      <div className="relative bg-gray-100 dark:bg-slate-950 text-gray-900 dark:text-slate-100 p-4 rounded-b-lg group w-full">
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          title="Copy code"
        >
          {copied ? <CheckCircle className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4 text-gray-600 dark:text-slate-400" />}
        </button>
        <pre className="text-sm whitespace-pre-wrap break-words w-full">
          <code className="break-words text-gray-900 dark:text-slate-100">{children}</code>
        </pre>
      </div>
    </div>
  )
}
`;
  }

  private generateComponent(): string {
    const { meta, sections } = this.content;
    const componentName = this.generateComponentName(meta.title);
    
    const breadcrumbsJsx = this.generateBreadcrumbs(meta.breadcrumbs, meta.title);
    const contentJsx = this.generateContent(sections);
    const ctaJsx = this.generateCTA();

    return `export default function ${componentName}Page() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 px-4 sm:px-6 lg:px-8 py-6 bg-white dark:bg-gray-950">
      ${breadcrumbsJsx}

      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">${this.escapeJsx(meta.title)}</h1>
        ${meta.description ? `<p className="text-lg text-gray-600 dark:text-gray-300">${this.escapeJsx(meta.description)}</p>` : ''}
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
${contentJsx}

${ctaJsx}
      </div>
    </div>
  )
}`;
  }

  private generateBreadcrumbs(breadcrumbs: BreadcrumbItem[], currentPage: string): string {
    let jsx = `<Breadcrumb>
        <BreadcrumbList>`;
    
    for (const crumb of breadcrumbs) {
      jsx += `
          <BreadcrumbItem>
            <BreadcrumbLink href="${crumb.href || '/'}">${crumb.label}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />`;
    }
    
    jsx += `
          <BreadcrumbItem>
            <BreadcrumbPage>${this.escapeJsx(currentPage)}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>`;
    
    return jsx;
  }

  private generateContent(sections: Section[]): string {
    const result: string[] = [];
    let stepCounter = 0;
    let inSection = false;
    
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      
      // Detect numbered step headings
      const stepMatch = section.type === 'heading' && section.content.match(/^(\d+)\.\s*(.+)/);
      
      if (stepMatch && section.level === 2) {
        stepCounter = parseInt(stepMatch[1]);
        const stepTitle = stepMatch[2];
        
        // Collect content until next major heading
        const stepContent: Section[] = [];
        let j = i + 1;
        while (j < sections.length && !(sections[j].type === 'heading' && sections[j].level === 2)) {
          stepContent.push(sections[j]);
          j++;
        }
        
        result.push(this.generateStepSection(stepCounter, stepTitle, stepContent));
        i = j - 1;
        continue;
      }
      
      // Major section (h2 without number)
      if (section.type === 'heading' && section.level === 2) {
        const sectionContent: Section[] = [];
        let j = i + 1;
        while (j < sections.length && !(sections[j].type === 'heading' && sections[j].level === 2)) {
          sectionContent.push(sections[j]);
          j++;
        }
        
        result.push(this.generateMajorSection(section.content, sectionContent));
        i = j - 1;
        continue;
      }
      
      // YouTube video card
      if (section.type === 'paragraph' && section.content.includes('youtube') && section.content.includes('http')) {
        result.push(this.generateVideoCard(section.content));
        continue;
      }
      
      // Introduction paragraph (special styling for first paragraph)
      if (section.type === 'paragraph' && result.length === 0) {
        result.push(this.generateIntroSection(section.content));
        continue;
      }
      
      // Regular content
      result.push(this.sectionToJsx(section));
    }
    
    return result.filter(r => r.trim()).join('\n\n');
  }

  private generateStepSection(stepNumber: number, title: string, content: Section[]): string {
    const indent = '        ';
    const contentJsx = content.map(s => this.sectionToJsx(s, 12)).join('\n');
    
    return `${indent}{/* Step ${stepNumber} */}
        <div className="relative">
          <div className="flex items-baseline gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                ${stepNumber}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">${this.processInlineMarkdown(title)}</h3>
              <Card className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 border dark:border-gray-800">
                <CardContent className="p-6">
                  <div className="space-y-4">
${contentJsx}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>`;
  }

  private generateMajorSection(title: string, content: Section[]): string {
    const indent = '        ';
    const contentJsx = content.map(s => this.sectionToJsx(s, 10)).join('\n');
    
    return `${indent}<section>
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">${this.processInlineMarkdown(title)}</h2>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-950 dark:to-slate-900 rounded-lg p-6 border dark:border-gray-800">
${contentJsx}
          </div>
        </section>`;
  }

  private generateIntroSection(content: string): string {
    const indent = '        ';
    return `${indent}<div className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-950 dark:to-slate-900 rounded-lg p-6 border dark:border-gray-800">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            ${this.processInlineMarkdown(content)}
          </p>
        </div>`;
  }

  private generateVideoCard(content: string): string {
    const urlMatch = content.match(/https?:\/\/[^\s]+youtube[^\s]+/);
    const url = urlMatch ? urlMatch[0] : '';
    const titleMatch = content.match(/"([^"]+)"/);
    const title = titleMatch ? titleMatch[1] : 'Video Tutorial';
    
    return `        <Card className="border-l-4 border-l-red-500 bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950 dark:to-rose-900 dark:border-l-red-300">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div>
                <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">Video Tutorial Available</h3>
                <p className="text-red-800 dark:text-red-100 mb-3">
                  This walkthrough is also demonstrated step-by-step on our YouTube video:
                </p>
                <a
                  href="${url}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-600 dark:text-red-200 hover:text-red-700 dark:hover:text-red-100 font-medium"
                >
                  "${title}"
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>`;
  }

  private sectionToJsx(section: Section, baseIndent: number = 8): string {
    const indent = ' '.repeat(baseIndent);
    
    switch (section.type) {
      case 'heading':
        return this.headingToJsx(section, indent);
      case 'paragraph':
        return `${indent}<p className="text-gray-800 dark:text-gray-200">${this.processInlineMarkdown(section.content)}</p>`;
      case 'image':
        return `${indent}<div className="my-4">
${indent}  <img
${indent}    src="${section.content}"
${indent}    alt="${section.title || ''}"
${indent}    className="rounded-lg shadow-md border dark:border-gray-800 w-full"
${indent}  />
${indent}</div>`;
      case 'raw':
        // Emit raw HTML/JSX blocks like <details> directly
        return `${indent}${section.content}`;
      case 'code':
        return this.codeToJsx(section, indent);
      case 'blockquote':
        return this.blockquoteToJsx(section, indent);
      case 'list':
        return this.listToJsx(section, indent);
      case 'table':
        return this.tableToJsx(section, indent);
      default:
        return `${indent}<p className="text-gray-800 dark:text-gray-200">${this.escapeJsx(section.content)}</p>`;
    }
  }

  private headingToJsx(section: Section, indent: string): string {
    const level = section.level || 3;
    const content = this.processInlineMarkdown(section.content);
    
    if (level === 3) {
      return `${indent}<h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">${content}</h4>`;
    }
    if (level === 4) {
      return `${indent}<h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">${content}</h5>`;
    }
    
    const tag = `h${level}`;
    return `${indent}<${tag} className="font-semibold text-gray-900 dark:text-gray-100">${content}</${tag}>`;
  }

  private codeToJsx(section: Section, indent: string): string {
    const escaped = section.content
      .replace(/`/g, '\\`')
      .replace(/\$/g, '\\$');
    
    if (section.title) {
      return `${indent}<CodeBlock title="${section.title}" language="${section.language || 'text'}">${'`'}${escaped}${'`'}</CodeBlock>`;
    }
    
    return `${indent}<CodeBlock language="${section.language || 'text'}">${'`'}${escaped}${'`'}</CodeBlock>`;
  }

  private blockquoteToJsx(section: Section, indent: string): string {
    const content = this.processInlineMarkdown(section.content);
    
    // Map blockquote types to card styles
    const styleMap: Record<string, { border: string; bg: string; text: string }> = {
      note: { border: 'border-l-blue-500', bg: 'from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900', text: 'text-blue-900 dark:text-blue-100' },
      tip: { border: 'border-l-green-500', bg: 'from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900', text: 'text-green-900 dark:text-green-100' },
      warning: { border: 'border-l-yellow-500', bg: 'from-yellow-50 to-amber-100 dark:from-yellow-950 dark:to-amber-900', text: 'text-yellow-900 dark:text-yellow-100' },
      important: { border: 'border-l-red-500', bg: 'from-red-50 to-rose-100 dark:from-red-950 dark:to-rose-900', text: 'text-red-900 dark:text-red-100' },
      caution: { border: 'border-l-orange-500', bg: 'from-orange-50 to-amber-100 dark:from-orange-950 dark:to-amber-900', text: 'text-orange-900 dark:text-orange-100' },
      default: { border: 'border-l-gray-500', bg: 'from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800', text: 'text-gray-900 dark:text-gray-100' }
    };
    
    const type = section.blockquoteType || 'default';
    const style = styleMap[type] || styleMap.default;
    
    return `${indent}<Card className="border-l-4 ${style.border} bg-gradient-to-br ${style.bg}">
${indent}  <CardContent className="p-4">
${indent}    <p className="${style.text}">${content}</p>
${indent}  </CardContent>
${indent}</Card>`;
  }

  private listToJsx(section: Section, indent: string): string {
    const items = section.items?.map(item => {
      if (typeof item === 'string') {
        const processed = this.processInlineMarkdown(item);
        return `
${indent}  <li className="flex items-start gap-3">
${indent}    <CheckCircle className="h-5 w-5 text-gray-600 dark:text-gray-300 mt-0.5 flex-shrink-0" />
${indent}    <span className="text-gray-800 dark:text-gray-200">${processed}</span>
${indent}  </li>`;
      } else {
        const processed = this.processInlineMarkdown(item.content);
        let result = `
${indent}  <li className="flex items-start gap-3">
${indent}    <CheckCircle className="h-5 w-5 text-gray-600 dark:text-gray-300 mt-0.5 flex-shrink-0" />
${indent}    <div className="text-gray-800 dark:text-gray-200">
${indent}      <span>${processed}</span>`;
        
        // Add nested list if subItems exist
        if (item.subItems && item.subItems.length > 0) {
          result += `
${indent}      <ul className="space-y-1 mt-2 ml-4">`;
          for (const subItem of item.subItems) {
            const processedSub = this.processInlineMarkdown(subItem);
            result += `
${indent}        <li className="flex items-start gap-2">
${indent}          <CheckCircle className="h-4 w-4 text-gray-500 dark:text-gray-400 mt-0.5 flex-shrink-0" />
${indent}          <span className="text-sm">${processedSub}</span>
${indent}        </li>`;
          }
          result += `
${indent}      </ul>`;
        }
        
        result += `
${indent}    </div>
${indent}  </li>`;
        return result;
      }
    }).join('') || '';
    
    return `${indent}<ul className="space-y-2">${items}
${indent}</ul>`;
  }

  private tableToJsx(section: Section, indent: string): string {
    if (!section.tableData) return '';
    
    const { headers, rows } = section.tableData;
    
    let jsx = `${indent}<Card className="overflow-hidden">
${indent}  <table className="min-w-full border-collapse">
${indent}    <thead>
${indent}      <tr className="bg-gray-100 dark:bg-gray-800">`;
    
    for (const header of headers) {
      jsx += `
${indent}        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 border-b dark:border-gray-700">${this.escapeJsx(header)}</th>`;
    }
    
    jsx += `
${indent}      </tr>
${indent}    </thead>
${indent}    <tbody>`;
    
    for (const row of rows) {
      jsx += `
${indent}      <tr className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">`;
      for (const cell of row) {
        jsx += `
${indent}        <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200">${this.processInlineMarkdown(cell)}</td>`;
      }
      jsx += `
${indent}      </tr>`;
    }
    
    jsx += `
${indent}    </tbody>
${indent}  </table>
${indent}</Card>`;
    
    return jsx;
  }

  private processInlineMarkdown(text: string): string {
    let result = text;
    
    // Store replacements to apply at the end (to avoid regex interference)
    const replacements: Array<{ placeholder: string; value: string }> = [];
    let placeholderIndex = 0;
    
    // Helper to create safe placeholders (using characters that won't trigger other regex)
    const createPlaceholder = () => `\x00PLACEHOLDER${placeholderIndex++}\x00`;
    
    // 1. First, protect and process links (before anything else can mess up URLs)
    result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
      const placeholder = createPlaceholder();
      const internalUrl = this.convertToInternalLink(url);
      // Process linkText for inline formatting (but not links within links)
      const processedLinkText = linkText
        .replace(/`([^`]+)`/g, '<code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">$1</code>')
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>');
      replacements.push({ placeholder, value: `<a href="${internalUrl}" className="text-blue-600 dark:text-blue-400 hover:underline">${processedLinkText}</a>` });
      return placeholder;
    });
    
    // 2. Inline code - escape special chars
    result = result.replace(/`([^`]+)`/g, (match, code) => {
      const placeholder = createPlaceholder();
      const escapedCode = code.replace(/>/g, '&gt;').replace(/</g, '&lt;');
      replacements.push({ placeholder, value: `<code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">${escapedCode}</code>` });
      return placeholder;
    });
    
    // 3. Bold (must come before italic to handle **text** vs *text*)
    result = result.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    result = result.replace(/__([^_]+)__/g, '<strong>$1</strong>');
    
    // 4. Italic - but only for *text* not _text_ in URLs/paths
    result = result.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    // Only apply underscore italic if not part of a path/URL pattern
    result = result.replace(/(?<![\/\w])_([^_]+)_(?![\/\w])/g, '<em>$1</em>');
    
    // 5. Restore all placeholders
    for (const { placeholder, value } of replacements) {
      result = result.replace(placeholder, value);
    }
    
    // 6. Escape standalone > characters (not part of HTML tags)
    result = result.replace(/(?<![<\/\w"])>(?![\w])/g, '&gt;');
    
    return result;
  }

  private convertToInternalLink(url: string): string {
    if (url.includes('github.com') && url.includes('.md')) {
      const match = url.match(/\/([^/]+)\/([^/]+)\.md/);
      if (match) {
        // Replace underscores with dashes in the path
        return `/${match[1].toLowerCase().replace(/_/g, '-')}/${match[2].toLowerCase().replace(/_/g, '-')}`;
      }
    }
    // For any URL, replace underscores with dashes (common pattern for routes)
    // But only for internal links (not external URLs)
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return url.replace(/_/g, '-');
    }
    return url;
  }

  private escapeJsx(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/{/g, '&#123;')
      .replace(/}/g, '&#125;');
  }

  private generateCTA(): string {
    const indent = '        ';
    return `${indent}<div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            For further assistance or to share feedback, please contact us at{' '}
            <a href="mailto:support@aibloks.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              support@aibloks.com
            </a>
          </p>
        </div>`;
  }

  private generateComponentName(title: string): string {
    return title
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  }
}

// ============================================================================
// MAIN CONVERTER CLASS
// ============================================================================

export class MarkdownToTsxConverter {
  convert(markdownContent: string, type: 'docs' | 'cookbook' = 'docs'): string {
    const parser = new MarkdownParser(markdownContent);
    const content = parser.parse(type);
    
    if (type === 'cookbook') {
      const generator = new CookbookGenerator(content);
      return generator.generate();
    } else {
      const generator = new DocsGenerator(content);
      return generator.generate();
    }
  }

  convertFile(inputPath: string, outputPath: string, type: 'docs' | 'cookbook' = 'docs'): void {
    const content = fs.readFileSync(inputPath, 'utf-8');
    const parser = new MarkdownParser(content);
    const parsedContent = parser.parse(type);
    
    let tsx: string;
    let referencesContent: string | null = null;
    
    if (type === 'cookbook') {
      const generator = new CookbookGenerator(parsedContent);
      tsx = generator.generate();
    } else {
      const generator = new DocsGenerator(parsedContent);
      tsx = generator.generate();
      
      // Generate references file for v1 layout
      if (parsedContent.meta.version === 'v1') {
        referencesContent = generator['generateReferencesFile']();
      }
    }
    
    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Write main page.tsx file
    fs.writeFileSync(outputPath, tsx, 'utf-8');
    console.log(`✅ Converted: ${inputPath} -> ${outputPath}`);
    
    // Write references.ts file if v1 layout
    if (referencesContent) {
      const referencesPath = path.join(outputDir, 'references.ts');
      fs.writeFileSync(referencesPath, referencesContent, 'utf-8');
      console.log(`✅ Generated references file: ${referencesPath}`);
    }
  }
}

// ============================================================================
// CLI ENTRY POINT
// ============================================================================

// Helper function to resolve paths using CONFIG
function resolvePaths(inputArg: string, outputArg?: string): { inputPath: string; outputPath: string } {
  let inputPath: string;
  let outputPath: string;

  // Check if input is a full path or relative to SOURCE_FOLDER
  if (inputArg.startsWith('./') || inputArg.startsWith('../') || path.isAbsolute(inputArg)) {
    inputPath = inputArg;
  } else {
    // Treat as relative to SOURCE_FOLDER
    inputPath = path.join(CONFIG.SOURCE_FOLDER, inputArg);
  }

  // If output folder is provided, use it; otherwise, derive from input
  if (outputArg && !outputArg.startsWith('--')) {
    if (outputArg.startsWith('./') || outputArg.startsWith('../') || path.isAbsolute(outputArg)) {
      outputPath = path.join(outputArg, CONFIG.OUTPUT_FILENAME);
    } else {
      outputPath = path.join(CONFIG.DEST_FOLDER, outputArg, CONFIG.OUTPUT_FILENAME);
    }
  } else {
    // Auto-derive output from input path
    // e.g., v0/chat/CHAT.md -> ./app/v0/chat/page.tsx
    const relativePath = inputArg.startsWith('./') || inputArg.startsWith('../') 
      ? path.relative(CONFIG.SOURCE_FOLDER, inputArg)
      : inputArg;
    
    // Remove .md extension and convert filename to folder
    const parsed = path.parse(relativePath);
    const folderName = parsed.name.toLowerCase().replace(/_/g, '-');
    const outputDir = path.join(CONFIG.DEST_FOLDER, parsed.dir, folderName);
    outputPath = path.join(outputDir, CONFIG.OUTPUT_FILENAME);
  }

  return { inputPath, outputPath };
}

// Main CLI execution
const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  console.log(`
📄 Markdown to TSX Converter for Model HQ Documentation

Configuration:
  Source folder: ${CONFIG.SOURCE_FOLDER}
  Dest folder:   ${CONFIG.DEST_FOLDER}
  Default version: ${CONFIG.DEFAULT_VERSION}

Usage:
  npx tsx scripts/md-to-tsx/converter.ts <input> [output] [--type=docs|cookbook]

Arguments:
  input    Path to markdown file (relative to SOURCE_FOLDER or full path)
  output   Output folder (optional, relative to DEST_FOLDER or full path)
  --type   Output format: 'docs' (default) or 'cookbook'

Version Layouts:
  v0: Original layout with max-w-4xl container
  v1: New layout with DocPageLayout wrapper and references sidebar
      (automatically generates references.ts file)

Examples:
  # Short form (uses configured folders):
  npx tsx scripts/md-to-tsx/converter.ts v1/chat/CHAT.md --type=docs
  # -> Reads: ${CONFIG.SOURCE_FOLDER}/v1/chat/CHAT.md
  # -> Writes: ${CONFIG.DEST_FOLDER}/v1/chat/page.tsx
  # -> Writes: ${CONFIG.DEST_FOLDER}/v1/chat/references.ts (v1 only)

  # With explicit output folder:
  npx tsx scripts/md-to-tsx/converter.ts v1/chat/CHAT.md v1/chat --type=docs
  # -> Writes: ${CONFIG.DEST_FOLDER}/v1/chat/page.tsx

  # Full paths:
  npx tsx scripts/md-to-tsx/converter.ts ./my-doc.md ./app/v1/chat --type=docs

  # Cookbook:
  npx tsx scripts/md-to-tsx/converter.ts v1/cookbooks/RAG_Bot.md cookbooks/v1/rag-bot --type=cookbook

To change source/dest folders or version, edit CONFIG in converter.ts

For documentation: scripts/md-to-tsx/README.md
  `);
  process.exit(0);
}

const inputArg = args[0];
const outputArg = args.find(a => !a.startsWith('--') && a !== inputArg);
const typeArg = args.find(a => a.startsWith('--type='));
const type = (typeArg?.split('=')[1] as 'docs' | 'cookbook') || 'docs';

const { inputPath, outputPath } = resolvePaths(inputArg, outputArg);

console.log(`\n📂 Source: ${inputPath}`);
console.log(`📁 Output: ${outputPath}`);
console.log(`📋 Type: ${type}\n`);

const converter = new MarkdownToTsxConverter();
converter.convertFile(inputPath, outputPath, type);
