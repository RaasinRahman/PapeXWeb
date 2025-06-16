"use client"
import React, { useState } from "react"
import { Sidebar } from "./components/Sidebar"
import { LoginForm } from "./components/LoginForm"
import { BlogList } from "./components/BlogList"
import { BlogEditor } from "./components/BlogEditor"

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [view, setView] = useState<"all" | "drafts" | "editor">("all")
  const [editingBlog, setEditingBlog] = useState(null)

  if (!isAuthenticated) {
    return <LoginForm onLogin={() => setIsAuthenticated(true)} />
  }

  return (
    <div className="flex min-h-[100vh] bg-gray-100 text-black">
      <Sidebar setView={setView} setIsAuthenticated={setIsAuthenticated} />
      <main style={{ flex: 1, padding: 24 }}>
        {view === "all" && <BlogList type="published" setView={setView} setEditingBlog={setEditingBlog} />}
        {view === "drafts" && <BlogList type="draft" setView={setView} setEditingBlog={setEditingBlog} />}
        {view === "editor" && <BlogEditor blog={editingBlog} setView={setView} />}
      </main>
    </div>
  )
} 