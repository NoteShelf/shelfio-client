import React, { useState } from "react";

import InlinePopup from "../Popup/InlinePopup";
import useAxios from "../../Hooks/useAxios";
import { BOOK_API_ENDPOINT } from "../../Config/BoookApiEndpoints";
import { useBookCtx } from "../../Contexts/BookCtx";

const OPERATION_CODE = {
  delete: 0,
};

const INLINE_POPUP_OPTIONS = [{ code: OPERATION_CODE.delete, name: "Delete" }];

const Books = ({ bookData, onClick, selectedBook }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const { axiosInstance } = useAxios();
  const { getBooks } = useBookCtx();

  const onClickBtnHandler = (e) => {
    e.stopPropagation();
    setOpenMenu((prevState) => !prevState);
  };

  const deleteBook = async () => {
    try {
      await axiosInstance.delete(BOOK_API_ENDPOINT + "?id=" + bookData.id);
      getBooks();
    } catch (error) {}
  };

  const popupOnlickHandler = (selectedMenu) => {
    deleteBook();
  };

  return (
    <div
      onClick={onClick}
      className={
        "flex items-center justify-between cursor-pointer hover:bg-slate-100 p-1 px-2 hover:rounded-lg group" +
        (selectedBook.id === bookData.id || openMenu
          ? " bg-slate-100 rounded-md"
          : "")
      }
    >
      <div className="flex items-center space-x-2">
        <span className="material-symbols-outlined text-sm">book_4</span>
        <h5>{bookData.title}</h5>
      </div>

      <div className="">
        <span
          className={
            "material-symbols-outlined text-sm " +
            (openMenu ? " flex" : " hidden group-hover:flex")
          }
          role="button"
          onClick={onClickBtnHandler}
        >
          more_vert
        </span>

        {openMenu && (
          <InlinePopup
            onClick={popupOnlickHandler}
            options={INLINE_POPUP_OPTIONS}
          />
        )}
      </div>
    </div>
  );
};

export default Books;
