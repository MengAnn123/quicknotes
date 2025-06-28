import React, { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteCard from "./components/NoteCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("notes")) || []);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleSave = (note) => setNotes([note, ...notes]);
  const handleDelete = (id) => setNotes(notes.filter(note => note.id !== id));

  const filteredNotes = notes
    .filter(note => note.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => b.id - a.id); // Sort by newest first

  return (
    <div className="app">
      <h1>QuickNotes</h1>
      <SearchBar onSearch={setSearchTerm} />
      <NoteForm onSave={handleSave} />
      <div className="notes-grid">
        {filteredNotes.map(note => (
          <NoteCard key={note.id} note={note} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
