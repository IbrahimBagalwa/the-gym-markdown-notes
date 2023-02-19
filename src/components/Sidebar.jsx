import React from "react";

const Sidebar = ({
  notes,
  currentNote,
  setCurrentNoteId,
  deleteNote,
  newNote,
}) => {
  const noteElements =
    notes &&
    notes.map((note) => {
      let title = note.body.split(/[\n#]/)[1];
      return (
        <div key={note.id}>
          <div
            className={`title ${
              note.id === currentNote.id ? "selected-note" : ""
            }`}
            onClick={() => setCurrentNoteId(note.id)}
          >
            <h4 className="text-snippet">{title}</h4>
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

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
};
export default Sidebar;
