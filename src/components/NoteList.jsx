function NoteList({ notes, deleteNote }) {
  return (
    <div>
      {notes.map((note, index) => (
        <div key={index}>
          <p>{note}</p>

          <button
            onClick={() =>
              deleteNote(index)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;