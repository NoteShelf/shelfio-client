import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import useAxios from "../Hooks/useAxios";
import { NOTE_API_ENDPOINT } from "../Config/NotesApiEndPoints";
import { BOOK_API_ENDPOINT } from "../Config/BoookApiEndpoints";

const BookCtxApi = createContext();

const useBookCtx = () => useContext(BookCtxApi);

const BookCtx = ({ children }) => {
  const [books, setBooks] = useState();
  const [allNotes, setAllNotes] = useState();

  const selectedNote = useRef();

  const { axiosInstance, handleError, errorMsg, setErrorMsg } = useAxios();

  const createBook = async (payload) => {
    try {
      setErrorMsg("");

      await axiosInstance.post(BOOK_API_ENDPOINT  , payload);
      getBooks();
    } catch (error) {
      handleError(error);
    }
  };

  const getBooks = async () => {
    try {
      const { data } = await axiosInstance.get(BOOK_API_ENDPOINT);

      setBooks(data);

      setErrorMsg("");
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createNote = async (payload) => {
    try {
      setErrorMsg("");

      await axiosInstance.post(NOTE_API_ENDPOINT, payload);

      getAllNotes(payload.book_id);
    } catch (error) {
      handleError(error);
    }
  };

  const getAllNotes = async (bookId) => {
    try {
      const { data } = await axiosInstance(NOTE_API_ENDPOINT + "?id=" + bookId);

      setAllNotes(data);
    } catch (error) {
      handleError(error);
    }
  };

  const updateNote = async (content) => {
    try {
      await axiosInstance.put(NOTE_API_ENDPOINT, content);

      getAllNotes(content.book_id);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <BookCtxApi.Provider
      value={{
        errorMsg,
        books,
        createBook,
        createNote,
        getAllNotes,
        allNotes,
        setAllNotes,
        selectedNote,
        updateNote,
        getBooks,
      }}
    >
      {children}
    </BookCtxApi.Provider>
  );
};

export default BookCtx;
export { useBookCtx };
