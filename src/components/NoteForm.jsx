import { useState } from "react";

function NoteForm({ notes, setNotes }) {
  const [note, setNote] = useState("");

  const addNote = () => {
    if (note === "") return;

    setNotes([...notes, note]);

    setNote("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Note"
        value={note}
        onChange={(e) =>
          setNote(e.target.value)
        }
      />

      <button onClick={addNote}>
        Add Note
      </button>
    </div>
  );
}

export default NoteForm;