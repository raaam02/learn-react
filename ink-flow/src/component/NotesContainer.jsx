import React from "react";
import Addnote from "./Addnote";
import NoteCard from "./NoteCard";

function NotesContainer() {
  return (
    <div className="">
      <Addnote />
      <div className="m-14 w-100">
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  );
}

export default NotesContainer;
