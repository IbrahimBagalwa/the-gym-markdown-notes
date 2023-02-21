import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Split from "react-split";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const noteFromLocalStorage = localStorage.getItem("notes");
    setNotes(() => JSON.parse(noteFromLocalStorage) || []);
  }, []);

  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const createNewNote = () => {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };

    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  };
  const updateNoteArr = (noteArr, text) => {
    let updateNotesArr = [];
    noteArr.forEach((note) => {
      const oldnote = note;
      if (oldnote.id === currentNoteId) {
        updateNotesArr.unshift({ ...oldnote, body: text });
      } else {
        updateNotesArr.push(oldnote);
      }
    });
    return updateNotesArr;
  };
  const updateNote = (text) => {
    setNotes((oldNotes) => updateNoteArr(oldNotes, text));
  };

  const deleteNote = (event, noteId) => {
    event.stopPropagation();
    setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
  };

  const findCurrentNote = () => {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  };

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
};
export default App;
