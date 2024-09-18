import React from "react";

function NoteCard({ note }) {
  const { title, content, createdAt } = note;
  return (
    <div className="m-2">
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-gray-200">
          {title}
        </h6>
        <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
          {content}
        </p>
      </a>
    </div>
  );
}

export default NoteCard;
