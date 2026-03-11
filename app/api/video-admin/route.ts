import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

// Only allow in development mode
const isDevelopment = process.env.NODE_ENV === "development"

interface VideoData {
  id: string
  title: string
  description: string
  duration: string
  views: string
  thumbnail: string
  publishedAt?: string
  tags?: string[]
  isManuallyAdded?: boolean
}

const VIDEO_DATA_PATH = path.join(
  process.cwd(),
  "app/resources/video-tutorials/video-data.ts"
)

const VIDEO_DESCRIPTIONS_PATH = path.join(
  process.cwd(),
  "app/resources/video-tutorials/watch/[videoId]/video-descriptions.ts"
)

function findMatchingBracket(content: string, startPos: number, openChar: string, closeChar: string) {
  let depth = 0
  for (let i = startPos; i < content.length; i++) {
    const ch = content[i]
    if (ch === openChar) depth++
    else if (ch === closeChar) {
      depth--
      if (depth === 0) return i
    }
  }
  return -1
}

function escapeForString(s: string) {
  // Only escape backticks for template literals
  return s.replace(/`/g, "\\`")
}

function buildVideoEntry(video: VideoData) {
  // Escape quotes and newlines in strings
  const escapeString = (str: string) => str
    .replace(/\\/g, '\\\\')  // Escape backslashes first
    .replace(/"/g, '\\"')     // Escape double quotes
    .replace(/\n/g, ' ')      // Replace newlines with spaces
    .replace(/\r/g, '')       // Remove carriage returns
  
  const tags = (video.tags || []).map((t) => `"${escapeString(t)}"`).join(", ")
  
  return `  {
    id: "${video.id}",
    title: "${escapeString(video.title)}",
    description:
      "${escapeString(video.description)}",
    duration: "${video.duration}",
    views: "${video.views}",
    thumbnail: "${video.thumbnail}",
    tags: [${tags}],
    isManuallyAdded: ${video.isManuallyAdded ?? true},
  },\n`
}

function buildDescriptionEntry(id: string, fullDescription: string) {
  const safe = escapeForString(fullDescription)
  // Use DOUBLE-QUOTED key to match existing format
  return `  "${id}": \`\n    ${safe}\n  \`,`
}

function insertIntoArray(content: string, arrayDeclaration: string, entry: string) {
  const declIndex = content.indexOf(arrayDeclaration)
  if (declIndex === -1) return null
  const openBracketIndex = content.indexOf("[", declIndex + arrayDeclaration.length - 1)
  if (openBracketIndex === -1) return null
  const closeBracketIndex = findMatchingBracket(content, openBracketIndex, "[", "]")
  if (closeBracketIndex === -1) return null
  
  // Insert RIGHT AFTER the opening bracket (at the top of the list)
  const before = content.slice(0, openBracketIndex + 1)
  const after = content.slice(openBracketIndex + 1)
  return before + "\n" + entry + after
}

function insertIntoObjectMap(content: string, mapDeclaration: string, entry: string) {
  const declIndex = content.indexOf(mapDeclaration)
  if (declIndex === -1) return null
  const openBraceIndex = content.indexOf("{", declIndex + mapDeclaration.length - 1)
  if (openBraceIndex === -1) return null
  const closeBraceIndex = findMatchingBracket(content, openBraceIndex, "{", "}")
  if (closeBraceIndex === -1) return null
  
  // Insert RIGHT AFTER the opening brace (at the top of the map)
  const before = content.slice(0, openBraceIndex + 1)
  const after = content.slice(openBraceIndex + 1)
  return before + "\n" + entry + after
}

function replaceVideoObject(content: string, id: string, newEntry: string): { content: string; found: boolean } {
  // Find and replace the object with matching id using a two-pass approach
  const lines = content.split('\n')
  
  // First pass: find the object boundaries
  let idLineIndex = -1
  let objectStart = -1
  let objectEnd = -1
  
  console.log(`[replaceVideoObject] Searching for video with ID: "${id}"`)
  
  // Find the line with the ID
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(`id: "${id}"`) || lines[i].includes(`id: '${id}'`)) {
      idLineIndex = i
      console.log(`[replaceVideoObject] Found ID at line ${i}: ${lines[i].trim()}`)
      break
    }
  }
  
  if (idLineIndex === -1) {
    // ID not found, return original content
    console.error(`[replaceVideoObject] ID not found: "${id}"`)
    console.log(`[replaceVideoObject] Sample lines from file:`)
    for (let i = 0; i < Math.min(5, lines.length); i++) {
      if (lines[i].includes('id:')) {
        console.log(`  Line ${i}: ${lines[i].trim()}`)
      }
    }
    return { content, found: false }
  }
  
  // Search backwards for the opening brace
  for (let j = idLineIndex - 1; j >= 0; j--) {
    const trimmed = lines[j].trim()
    if (trimmed === '{' || trimmed.startsWith('{')) {
      objectStart = j
      console.log(`[replaceVideoObject] Found object start at line ${j}: "${lines[j]}"`)
      break
    }
  }
  
  if (objectStart === -1) {
    return { content, found: false } // Couldn't find start
  }
  
  // Search forwards for the closing brace using depth tracking
  let depth = 0
  for (let j = objectStart; j < lines.length; j++) {
    for (const ch of lines[j]) {
      if (ch === '{') depth++
      else if (ch === '}') depth--
    }
    if (depth === 0) {
      objectEnd = j
      break
    }
  }
  
  if (objectEnd === -1) {
    return { content, found: false } // Couldn't find end
  }
  
  // Second pass: build the result, replacing the object
  const result: string[] = []
  
  for (let i = 0; i < lines.length; i++) {
    if (i === objectStart) {
      // Insert the new entry instead of the old object
      result.push(newEntry.trim())
      // Skip to after the old object
      i = objectEnd
      continue
    }
    result.push(lines[i])
  }
  
  const finalResult = result.join('\n')
  return { content: finalResult, found: true }
}

function removeVideoObject(content: string, id: string) {
  // Precise removal using the same two-pass approach as replace
  const lines = content.split('\n')
  
  // First pass: find the object boundaries
  let idLineIndex = -1
  let objectStart = -1
  let objectEnd = -1
  
  // Find the line with the ID
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(`id: "${id}"`) || lines[i].includes(`id: '${id}'`)) {
      idLineIndex = i
      break
    }
  }
  
  if (idLineIndex === -1) {
    // ID not found, return original content
    return content
  }
  
  // Search backwards for the opening brace
  for (let j = idLineIndex - 1; j >= 0; j--) {
    const trimmed = lines[j].trim()
    if (trimmed === '{' || trimmed.startsWith('{')) {
      objectStart = j
      break
    }
  }
  
  if (objectStart === -1) {
    return content // Couldn't find start
  }
  
  // Search forwards for the closing brace using depth tracking
  let depth = 0
  for (let j = objectStart; j < lines.length; j++) {
    for (const ch of lines[j]) {
      if (ch === '{') depth++
      else if (ch === '}') depth--
    }
    if (depth === 0) {
      objectEnd = j
      break
    }
  }
  
  if (objectEnd === -1) {
    return content // Couldn't find end
  }
  
  // Second pass: build the result, skipping the object
  const result: string[] = []
  
  for (let i = 0; i < lines.length; i++) {
    // Skip the entire object range
    if (i >= objectStart && i <= objectEnd) {
      continue
    }
    result.push(lines[i])
  }
  
  return result.join('\n')
}

function removeDescriptionEntry(content: string, id: string) {
  // Precise removal of description entry using line-by-line parsing
  const lines = content.split('\n')
  let result = []
  let inTargetEntry = false
  let inBacktick = false
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    
    // Check if this line starts the target description entry (with or without quotes)
    if ((line.includes(`"${id}":`) || line.includes(`'${id}':`) || line.includes(`${id}:`)) && line.includes('`')) {
      inTargetEntry = true
      inBacktick = true
      continue // Skip this line
    }
    
    // If we're in the target entry, look for the closing backtick
    if (inTargetEntry) {
      if (line.includes('`')) {
        // This is the closing line, skip it and end
        inTargetEntry = false
        inBacktick = false
        continue
      }
      // Skip content lines inside the entry
      continue
    }
    
    result.push(line)
  }
  
  return result.join('\n')
}

// GET - simple preview or parsed videos
export async function GET() {
  if (!isDevelopment) return NextResponse.json({ error: "Only available in development mode" }, { status: 403 })
  try {
    const videoDataContent = fs.readFileSync(VIDEO_DATA_PATH, "utf-8")
    return NextResponse.json({ success: true, preview: videoDataContent.slice(0, 1000) })
  } catch (err) {
    return NextResponse.json({ error: `Failed to read: ${err}` }, { status: 500 })
  }
}

// POST - add
export async function POST(request: NextRequest) {
  if (!isDevelopment) return NextResponse.json({ error: "Only available in development mode" }, { status: 403 })
  try {
    const body = await request.json()
    const { video, fullDescription } = body as { video: VideoData; fullDescription?: string }

    console.log(`Adding video: ${video.id} - ${video.title}`)

    const videoDataRaw = fs.readFileSync(VIDEO_DATA_PATH, "utf-8")
    const arrayDecl = "export const playlistVideos: VideoData[] = ["
    const videoEntry = buildVideoEntry(video)
    const updated = insertIntoArray(videoDataRaw, arrayDecl, videoEntry)
    if (!updated) return NextResponse.json({ error: "Failed to find playlist array" }, { status: 500 })
    fs.writeFileSync(VIDEO_DATA_PATH, updated, "utf-8")
    console.log(`Successfully added video ${video.id} to video-data.ts`)

    if (fullDescription && fullDescription.trim()) {
      const descRaw = fs.readFileSync(VIDEO_DESCRIPTIONS_PATH, "utf-8")
      const mapDecl = "export const videoDescriptions: Record<string, string> = {"
      const descEntry = buildDescriptionEntry(video.id, fullDescription)
      const updatedDesc = insertIntoObjectMap(descRaw, mapDecl, descEntry)
      if (updatedDesc) {
        fs.writeFileSync(VIDEO_DESCRIPTIONS_PATH, updatedDesc, "utf-8")
        console.log(`Successfully added description for video ${video.id}`)
      }
    }

    return NextResponse.json({ success: true, message: "Added" })
  } catch (err) {
    console.error("Error in POST:", err)
    return NextResponse.json({ error: `Failed to add: ${err}` }, { status: 500 })
  }
}

// PUT - update
export async function PUT(request: NextRequest) {
  if (!isDevelopment) return NextResponse.json({ error: "Only available in development mode" }, { status: 403 })
  try {
    const body = await request.json()
    const { video, fullDescription } = body as { video: VideoData; fullDescription?: string }

    let videoDataRaw = fs.readFileSync(VIDEO_DATA_PATH, "utf-8")
    const newEntry = buildVideoEntry(video)
    const { content: replaced, found } = replaceVideoObject(videoDataRaw, video.id, newEntry)
    
    // Check if the video was found
    if (!found) {
      console.warn(`Video ${video.id} was not found for update`)
      return NextResponse.json({ error: "Video not found to update" }, { status: 404 })
    }
    
    fs.writeFileSync(VIDEO_DATA_PATH, replaced, "utf-8")
    console.log(`Successfully updated video ${video.id} in video-data.ts`)

    if (typeof fullDescription !== "undefined" && fullDescription.trim()) {
      let descRaw = fs.readFileSync(VIDEO_DESCRIPTIONS_PATH, "utf-8")
      
      // Check if description already exists (with or without quotes)
      const hasExisting = descRaw.includes(`"${video.id}":`) || descRaw.includes(`'${video.id}':`) || descRaw.includes(`${video.id}:`)
      
      if (hasExisting) {
        // Remove old description first
        descRaw = removeDescriptionEntry(descRaw, video.id)
      }
      
      // Add new description
      const mapDecl = "export const videoDescriptions: Record<string, string> = {"
      const newDescEntry = buildDescriptionEntry(video.id, fullDescription)
      const updatedDesc = insertIntoObjectMap(descRaw, mapDecl, newDescEntry)
      if (updatedDesc) {
        fs.writeFileSync(VIDEO_DESCRIPTIONS_PATH, updatedDesc, "utf-8")
        console.log(`Successfully updated description for video ${video.id}`)
      }
    }

    return NextResponse.json({ success: true, message: "Updated" })
  } catch (err) {
    return NextResponse.json({ error: `Failed to update: ${err}` }, { status: 500 })
  }
}

// DELETE - remove
export async function DELETE(request: NextRequest) {
  if (!isDevelopment) return NextResponse.json({ error: "Only available in development mode" }, { status: 403 })
  try {
    const { searchParams } = new URL(request.url)
    const videoId = searchParams.get("id")
    if (!videoId) return NextResponse.json({ error: "id required" }, { status: 400 })

    console.log(`Deleting video: ${videoId}`)

    let videoDataRaw = fs.readFileSync(VIDEO_DATA_PATH, "utf-8")
    videoDataRaw = removeVideoObject(videoDataRaw, videoId)
    fs.writeFileSync(VIDEO_DATA_PATH, videoDataRaw, "utf-8")
    console.log(`Successfully deleted video ${videoId} from video-data.ts`)

    let descRaw = fs.readFileSync(VIDEO_DESCRIPTIONS_PATH, "utf-8")
    descRaw = removeDescriptionEntry(descRaw, videoId)
    fs.writeFileSync(VIDEO_DESCRIPTIONS_PATH, descRaw, "utf-8")
    console.log(`Successfully deleted description for video ${videoId}`)

    return NextResponse.json({ success: true, message: "Deleted" })
  } catch (err) {
    console.error("Error in DELETE:", err)
    return NextResponse.json({ error: `Failed to delete: ${err}` }, { status: 500 })
  }
}
