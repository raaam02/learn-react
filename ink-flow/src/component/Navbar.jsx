import React, { useState } from "react";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

defineElement(lottie.loadAnimation);

function Navbar() {
  const [mouseOver, setmouserOver] = useState(false);
  const [mouseOverOnTheme, setmouseOverOnTheme] = useState(false);

  const hadnleMouseOver = () => setmouserOver(true);
  const handleMouseLeave = () => setmouserOver(false);

  const handleMouseOverOnTheme = () => setmouseOverOnTheme(true);
  const handleMouseLeaveOnTheme = () => setmouseOverOnTheme(false);

  return (
    <header>
      <nav>
        <div className="bg-slate-800 shadow-md p-1 md:px-36 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <button className="h-[50px] cursor-pointer">
              <lord-icon
                src="https://cdn.lordicon.com/svsiboke.json"
                trigger="loop"
                delay="2000"
                colors="primary:#a866ee,secondary:#ebe6ef,tertiary:#f24c00,quaternary:#4bb3fd,quinary:#f9c9c0,senary:#3a3347"
                style={{ width: "50px", height: "50px" }}
              ></lord-icon>
            </button>
            <span className="font-semibold text-yellow-100 text-xl cursor-pointer">
              ink-Flow
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <button>
              <i
                onMouseOver={handleMouseOverOnTheme}
                onMouseLeave={handleMouseLeaveOnTheme}
                className={
                  mouseOverOnTheme
                    ? "fa-solid fa-moon fa-flip fa-xl p-5 hover:bg-slate-600 rounded-full cursor-pointer w-6 flex items-center justify-center"
                    : "fa-solid fa-moon fa-xl p-3"
                }
                style={{ color: "#f4f0ff" }}
                title="Dark theme"
              ></i>
            </button>
            <button>
              <i
                onMouseOver={hadnleMouseOver}
                onMouseLeave={handleMouseLeave}
                className={
                  mouseOver
                    ? "fa-solid fa-gear fa-spin fa-xl p-5 hover:bg-slate-600 rounded-full cursor-pointer w-6 flex items-center justify-center"
                    : "fa-solid fa-gear fa-xl p-2"
                }
                style={{ color: "#f4f0ff" }}
                title="Settings"
              ></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
