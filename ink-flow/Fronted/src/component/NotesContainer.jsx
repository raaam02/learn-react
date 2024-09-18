import React, { useEffect, useState } from "react";
import Addnote from "./Addnote";
import NoteCard from "./NoteCard";

function NotesContainer() {
  const [myNote, setMyNote] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/notes");
        const result = await response.json();
        setMyNote(result);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <Addnote />
      <div className="mt-14 mx-auto lg:px-5  w-full flex flex-wrap justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
          {myNote.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotesContainer;
