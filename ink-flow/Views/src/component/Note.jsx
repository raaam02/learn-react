import React, { useContext, useEffect, useRef, useState } from "react";
import { isNoteContext } from "../context/context";

function Note() {
  const { isNote, setIsNote } = useContext(isNoteContext);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [titleValue, setTitleValue] = useState(""); // Added to store title
  const textAreaRef = useRef(null);

  const adjustTextAreaHeight = () => {
    const textArea = textAreaRef.current;
    textArea.style.height = "auto"; // Reset height to auto to calculate new height
    textArea.style.height = `${textArea.scrollHeight}px`; // Set height to the scrollHeight
  };

  useEffect(() => {
    if (isNote) {
      textAreaRef.current.focus();
    }
    adjustTextAreaHeight();
  }, [textAreaValue]); // Adjust height whenever the textAreaValue changes

  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
  };

  // Function to send note data to the backend
  const saveNote = async (event) => {
    event.preventDefault();
    const noteData = {
      title: titleValue,
      content: textAreaValue,
    };

    try {
      const response = await fetch("http://localhost:3000/api/createNote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noteData),
      });

      if (response.ok) {
        console.log("Note saved successfully");
        // Reset fields after successful save
        setTitleValue("");
        setTextAreaValue("");
        setIsNote(false);
      } else {
        console.error("Failed to save note");
      }
    } catch (error) {
      console.error("Error while saving note:", error);
    }
  };

  return (
    <div className="w-full shadow-2xl border border-slate-400 bg-zinc-700 rounded-lg flex flex-col justify-between overflow-hidden absolute z-[2]">
      <div>
        <form onSubmit={saveNote}>
          <div className="w-full flex items-center pe-4">
            <input
              className="rounded-lg py-1 px-3 h-12 w-full bg-zinc-700 font-semibold focus:outline-none"
              type="text"
              placeholder="Title"
              value={titleValue}
              onChange={handleTitleChange}
            />

            <button
              onClick={() => setIsNote(!isNote)}
              className="px-2 h-7 rounded-md fa-lg hover:bg-red-500"
            >
              <i className="fa-solid fa-xmark" style={{ color: "#e8e0ff" }}></i>
            </button>
          </div>
          <hr />
          <textarea
            ref={textAreaRef}
            value={textAreaValue}
            onChange={handleTextAreaChange}
            className="resize-none rounded-lg py-2 px-3 h-full w-full bg-zinc-700 text-sm focus:outline-none bg-transparent"
            placeholder="type your note here..."
            rows={1}
          ></textarea>
          <div className="w-full flex justify-end px-3 pb-2">
            <button
              className="px-2 h-7 rounded-md hover:bg-green-500"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Note;
