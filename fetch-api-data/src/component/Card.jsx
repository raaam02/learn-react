import React from "react";

function Card({ id, title, body }) {
  return (
    <div className="bg-blue-700 card my-2 border-2 border-slate-50 rounded-lg p-0 overflow-hidden max-w-72">
      <div className="bg-blue-800 py-2 text-white font-semibold p-4">
        <h2>{id}</h2>
        <h3>{title}</h3>
      </div>
      <div className="p-4">{body}</div>
    </div>
  );
}

export default Card;
