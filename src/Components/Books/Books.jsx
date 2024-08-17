import React from "react";

const Books = ({ bookData, onClick, selectedBook }) => {
  return (
    <div
      onClick={onClick}
      className={
        "flex items-center justify-between cursor-pointer hover:bg-slate-100 p-1 px-2 hover:rounded-lg" +
        (selectedBook.id === bookData.id ? " bg-slate-100 rounded-md" : "")
      }
    >
      <div className="flex items-center space-x-2">
        <span className="material-symbols-outlined text-sm">book_4</span>
        <h5>{bookData.title}</h5>
      </div>
    </div>
  );
};

export default Books;
