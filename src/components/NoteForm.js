import React, { useState } from "react";

export default function NoteForm({ onSave }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    if (title && content) {
      onSave({ id: Date.now(), title, content });
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="note-form">
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Note Content" />
      <button onClick={handleSave}>Save Note</button>
    </div>
  );
}
