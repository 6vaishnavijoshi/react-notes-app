import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes =
      localStorage.getItem("notes");

    return savedNotes
      ? JSON.parse(savedNotes)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  const deleteNote = (indexToDelete) => {
    const updatedNotes = notes.filter(
      (_, index) => index !== indexToDelete
    );

    setNotes(updatedNotes);
  };

  return (
    <div className="app">
      <h1>Notes App</h1>

      <NoteForm
        notes={notes}
        setNotes={setNotes}
      />

      <NoteList
        notes={notes}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default App;