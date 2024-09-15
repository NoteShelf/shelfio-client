import React from "react";

import Editor from "../Editor/Editor";
import { useBookCtx } from "../../Contexts/BookCtx";

const MainPage = () => {
  const { selectedNote, allNotes, setAllNotes, updateNote } = useBookCtx();

  const onCHangeHandler = (newTitle) => {
    selectedNote.current.title = newTitle;
    setAllNotes([...allNotes]);
  };

  const editorCallbackHandler = (type, newContent) => {
    selectedNote.current[type] = newContent;

    updateNote(selectedNote.current);
  };

  if (!selectedNote.current) return null;

  return (
    <div className="grow w-[60%] m-2 z-10 px-5 py-5 space-y-5 border-2 rounded-lg shadow-lg bg-white ">
      <div className=" items-center ">
        <input
          onChange={(e) => onCHangeHandler(e.target.value)}
          value={selectedNote.current.title}
          className="font-bold text-xl py-1 px-1 outline-none "
          onBlur={() =>
            editorCallbackHandler("title", selectedNote.current.title)
          }
        />
      </div>

      <Editor
        existingContent={selectedNote.current.content}
        callback={editorCallbackHandler}
      />
    </div>
  );
};

export default MainPage;
