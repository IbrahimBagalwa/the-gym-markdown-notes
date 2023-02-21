import React from "react";

const NoteElements = ({ notes, currentNote, setCurrentNoteId, deleteNote }) => {
  return notes.map((note) => {
    return (
      <div key={note.id}>
        <div
          className={`title ${
            note.id === currentNote.id ? "selected-note" : ""
          }`}
          onClick={() => setCurrentNoteId(note.id)}
        >
          <h4 className="text-snippet">{note.body.split(/[\n#]/)[1]}</h4>
          <button
            className="delete-btn"
            onClick={(e) => deleteNote(e, note.id)}
          >
            <i className="gg-trash trash-icon"></i>
          </button>
        </div>
      </div>
    );
  });
};

export default NoteElements;
