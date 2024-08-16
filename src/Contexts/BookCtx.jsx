import React, { createContext, useContext, useEffect, useState } from "react";

import useAxios from "../Hooks/useAxios";
import { BOOK_API_ENDPOINT } from "../Config/UserApiEndPoints";

const BookCtxApi = createContext();

const useBookCtx = () => useContext(BookCtxApi);

const BookCtx = ({ children }) => {
  const [books, setBooks] = useState();

  const { axiosInstance, handleError, errorMsg, setErrorMsg } = useAxios();

  const createBook = async (payload) => {
    try {
      setErrorMsg("");

      await axiosInstance.post(BOOK_API_ENDPOINT, payload);
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

  return (
    <BookCtxApi.Provider value={{ books, createBook, errorMsg }}>
      {children}
    </BookCtxApi.Provider>
  );
};

export default BookCtx;
export { useBookCtx };
