import React, { useState, useRef, useContext, useEffect } from "react";
import Note from "./Note";
import { isNoteContext } from "../context/context";

function Addnote() {
  const noteRef = useRef();

  const [mouseOverOnTodo, setmouserOverOnTodo] = useState(false);
  const [isNote, setIsNote] = useState(false);

  const hadnleMouseOverOnTodo = () => setmouserOverOnTodo(true);
  const handleMouseLeaveOnTodo = () => setmouserOverOnTodo(false);

  const handleClickOutside = (event) => {
    if (noteRef.current && !noteRef.current.contains(event.target)) {
      setIsNote(false);
    }
  };

  // Add event listener for clicks outside and cleanup on unmount
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex justify-center items-center md:p-5 lg:p-5">
      <isNoteContext.Provider value={{ isNote, setIsNote }}>
        <div className="lg:w-1/3 md:w-1/2 relative" ref={noteRef}>
          {isNote ? <Note /> : null}
          <div
            onClick={() => setIsNote(!isNote)}
            className="w-full h-12 border border-slate-400 bg-zinc-700 rounded-lg flex justify-between pe-2 absolute z-[1]"
          >
            <input
              className="rounded-lg py-1 px-3 h-full w-full bg-zinc-700 font-semibold focus:outline-none"
              type="text"
              placeholder="Take a note..."
            />
            <div className="flex justify-center items-center">
              <button className="rounded-full m-1">
                <i
                  onMouseOver={hadnleMouseOverOnTodo}
                  onMouseLeave={handleMouseLeaveOnTodo}
                  className={
                    mouseOverOnTodo
                      ? "fa-regular fa-square-check fa-xl h-10 w-10 fa-bounce hover:bg-slate-600 rounded-full p-3 flex justify-center items-center"
                      : "fa-regular fa-square-check fa-xl h-10 w-10 p-3  flex justify-center items-center"
                  }
                  style={{ color: "#e5dbff" }}
                  title="Add note"
                ></i>
              </button>
            </div>
          </div>
        </div>
      </isNoteContext.Provider>
    </div>
  );
}

export default Addnote;
