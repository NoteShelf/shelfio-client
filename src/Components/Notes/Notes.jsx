import React, { useEffect } from "react";

import CreateNote from "./CreateNote";
import { useBookCtx } from "../../Contexts/BookCtx";
import DeleteBtn from "../Buttons/DeleteBtn";
import useAxios from "../../Hooks/useAxios";
import { NOTE_API_ENDPOINT } from "../../Config/NotesApiEndPoints";

const Notes = ({ bookId, bookName }) => {
  const {
    getAllNotes,
    allNotes,
    selectedNote,
    setAllNotes,
    setShowOverlayLoading,
  } = useBookCtx();
  const { axiosInstance, handleError } = useAxios();

  useEffect(() => {
    if (bookId) {
      getAllNotes(bookId);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId]);

  useEffect(() => {
    //by default firs note will be opened

    if (allNotes && allNotes.length) {
      selectedNote.current = allNotes[0];
    } else {
      selectedNote.current = undefined;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickHandler = (note) => {
    selectedNote.current = note;
    setAllNotes([...allNotes]);
  };

  const onClickDeleteHandler = async (noteId) => {
    try {
      setShowOverlayLoading(true);
      await axiosInstance.delete(NOTE_API_ENDPOINT + "?id=" + noteId);
      getAllNotes(bookId);
    } catch (error) {
      handleError(error);
    } finally {
      setShowOverlayLoading(false);
    }
  };

  return (
    <section className="flex flex-col shrink-0 w-72 border-2 my-2.5 -ml-2 px-5 py-5 space-y-5 bg-white">
      <h5 className="font-bold flex-wrap w-full">{bookName}</h5>

      <CreateNote bookId={bookId} />

      <div className="h-[68vh] overflow-y-auto space-y-2 pb-5">
        {allNotes
          ? allNotes.map((note) => (
              <div
                key={note.id}
                onClick={() => onClickHandler(note)}
                className={
                  "relative group flex p-5 border  hover:bg-slate-100 cursor-pointer" +
                  (selectedNote.current?.id === note.id ? " bg-slate-100" : "")
                }
              >
                <h6 className="font-semibold text-sm">{note.title}</h6>

                <DeleteBtn onClick={() => onClickDeleteHandler(note.id)} />
              </div>
            ))
          : null}
      </div>
    </section>
  );
};

export default Notes;
