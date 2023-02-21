import React from "react";
import NoteElements from "./NoteElements";

const Sidebar = ({
  notes,
  currentNote,
  setCurrentNoteId,
  deleteNote,
  newNote,
}) => {
  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={newNote}>
          +
        </button>
      </div>
      {notes && (
        <NoteElements
          notes={notes}
          currentNote={currentNote}
          setCurrentNoteId={setCurrentNoteId}
          deleteNote={deleteNote}
        />
      )}
    </section>
  );
};
export default Sidebar;
