import React from "react";

function NoteCard({ note }) {
  const { title, content, createdAt } = note;
  return (
    <div className="group relative  flex flex-col max-w-sm p-6 pb-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-gray-200">
        {title}
      </h6>
      <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
        {content}
      </p>
      <div className="absolute bottom-0 right-0 p-3 w-full flex justify-end">
        <button
          className="p-1 rounded-md bg-red-600 hover:bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          type="submit"
        >
          <i className="fa-solid fa-trash fa-xl"></i>
        </button>
      </div>
    </div>
  );
}

export default NoteCard;
