import React from "react";

import Editor from "../Editor/Editor";
import { useBookCtx } from "../../Contexts/BookCtx";

const MainPage = () => {
  const { selectedNote } = useBookCtx();

  if (!selectedNote) return null;

  return (
    <div className="flex flex-col w-full m-2 z-10 px-5 py-5 space-y-5 border-2 rounded-lg shadow-lg bg-white">
      <Editor selectedNote={selectedNote} />
    </div>
  );
};

export default MainPage;
