"use client"
import React, { useState, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Label } from "@/components/ui/label"
import { Heading1, List, Pilcrow, Type } from "lucide-react"
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import Paragraph from '@tiptap/extension-paragraph'
import Placeholder from '@tiptap/extension-placeholder'

function randomId() {
  return Math.random().toString(36).slice(2)
}

const BLOCK_TYPES = [
  {
    type: "paragraph",
    icon: <Pilcrow className="w-5 h-5" />, // Paragraph icon
    label: "Paragraph",
    className: "text-lg text-[#0a3d62] leading-relaxed mb-6"
  },
  {
    type: "heading",
    icon: <Heading1 className="w-5 h-5" />, // Heading icon
    label: "Heading",
    className: "text-2xl md:text-3xl font-bold text-[#0a3d62] mb-4 font-gloock"
  },
  {
    type: "list",
    icon: <List className="w-5 h-5" />, // List icon
    label: "List",
    className: "list-disc pl-6 mb-6 text-[#0a3d62] space-y-2"
  },
  {
    type: "title",
    icon: <Type className="w-5 h-5" />, // Title icon
    label: "Title",
    className: "text-3xl md:text-5xl font-bold text-[#0a3d62] mb-4 font-gloock leading-tight"
  }
]

function getDefaultBlocks(content: any) {
  // If content is a string, treat as a single paragraph block
  if (!content) return [{ id: randomId(), type: "paragraph", content: "" }]
  try {
    const parsed = JSON.parse(content)
    if (Array.isArray(parsed)) return parsed
    return [{ id: randomId(), type: "paragraph", content: content }]
  } catch {
    return [{ id: randomId(), type: "paragraph", content: content }]
  }
}

export function BlogEditor({ blog, setView }: { blog: any, setView: (v: any) => void }) {
  const [title, setTitle] = useState(blog?.title || "")

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        bulletList: false,
        listItem: false,
        paragraph: false,
      }),
      Heading.configure({
        levels: [1, 2],
        HTMLAttributes: {
          1: {
            class: "text-3xl md:text-5xl font-bold text-[#0a3d62] mb-4 font-gloock leading-tight"
          },
          2: {
            class: "text-2xl md:text-3xl font-bold text-[#0a3d62] mb-4 font-gloock"
          }
        }
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc pl-6 mb-6 text-[#0a3d62] space-y-2"
        }
      }),
      ListItem,
      Paragraph.configure({
        HTMLAttributes: {
          class: "text-lg text-[#0a3d62] leading-relaxed mb-6"
        }
      }),
      Placeholder.configure({
        placeholder: 'Write your blog content here...'
      })
    ],
    content: blog?.content ? JSON.parse(blog.content) : '',
  })

  function save(status: "draft" | "published") {
    const all = JSON.parse(localStorage.getItem("blogs") || "[]")
    let updated
    const content = JSON.stringify(editor?.getJSON())
    if (blog) {
      updated = all.map((b: any) => b.id === blog.id ? { ...b, title, content, status, updatedAt: Date.now() } : b)
    } else {
      updated = [
        ...all,
        { id: randomId(), title, content, status, createdAt: Date.now(), updatedAt: Date.now() }
      ]
    }
    localStorage.setItem("blogs", JSON.stringify(updated))
    setView(status === "draft" ? "drafts" : "all")
  }

  return (
    <div className="fixed inset-0 z-50 bg-primary flex flex-col">
      {/* Toolbar */}
      <div className="sticky top-0 bg-[#0a3d62] flex items-center gap-2 px-6 py-3 shadow-lg z-10">
        <span className="text-white font-bold mr-4">Block Type:</span>
        <Button
          variant={editor?.isActive('paragraph') ? undefined : 'secondary'}
          className={editor?.isActive('paragraph') ? 'bg-[#ff9933] text-white' : ''}
          onClick={() => editor?.chain().focus().setParagraph().run()}
        >
          <Pilcrow className="w-5 h-5" />
          <span className="ml-1 hidden sm:inline">Paragraph</span>
        </Button>
        <Button
          variant={editor?.isActive('heading', { level: 2 }) ? undefined : 'secondary'}
          className={editor?.isActive('heading', { level: 2 }) ? 'bg-[#ff9933] text-white' : ''}
          onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          <Heading1 className="w-5 h-5" />
          <span className="ml-1 hidden sm:inline">Heading</span>
        </Button>
        <Button
          variant={editor?.isActive('heading', { level: 1 }) ? undefined : 'secondary'}
          className={editor?.isActive('heading', { level: 1 }) ? 'bg-[#ff9933] text-white' : ''}
          onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
        >
          <Type className="w-5 h-5" />
          <span className="ml-1 hidden sm:inline">Title</span>
        </Button>
        <Button
          variant={editor?.isActive('bulletList') ? undefined : 'secondary'}
          className={editor?.isActive('bulletList') ? 'bg-[#ff9933] text-white' : ''}
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
        >
          <List className="w-5 h-5" />
          <span className="ml-1 hidden sm:inline">List</span>
        </Button>
        <Button variant="secondary" className="ml-auto" onClick={() => setView("all")}>Cancel</Button>
      </div>
      {/* Editor Area */}
      <div className="flex-1 overflow-y-auto px-0 py-8 flex flex-col items-center">
        <div className="w-full max-w-3xl">
          <Label htmlFor="title" className="text-[#0a3d62] mb-2 block">Title</Label>
          <Input
            id="title"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="bg-white text-[#0a3d62] text-3xl md:text-5xl font-bold mb-8 font-gloock leading-tight"
          />
          <div className="bg-white rounded-lg border border-[#d0e4f4] shadow p-4 min-h-[400px]">
            <EditorContent editor={editor} />
          </div>
          <div className="flex gap-2 mt-8">
            <Button type="button" onClick={() => save("draft")} className="bg-[#ff9933] hover:bg-[#e67e22] text-white px-6 py-3">Save Draft</Button>
            <Button type="button" onClick={() => save("published")} className="bg-[#0a3d62] hover:bg-[#145da0] text-white px-6 py-3">Publish</Button>
          </div>
        </div>
      </div>
    </div>
  )
} 