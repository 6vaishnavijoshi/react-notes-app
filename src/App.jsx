import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="app">
      <h1>Notes App</h1>

      <NoteForm
        notes={notes}
        setNotes={setNotes}
      />

      <NoteList notes={notes} />
    </div>
  );
}

export default App;