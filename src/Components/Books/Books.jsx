import React, { useState } from "react";

import InlinePopup from "../Popup/InlinePopup";
import useAxios from "../../Hooks/useAxios";
import { BOOK_API_ENDPOINT } from "../../Config/BoookApiEndpoints";
import { useBookCtx } from "../../Contexts/BookCtx";
import useOutsideClick from "../../Hooks/useOutsideClick";

const OPERATION_CODE = {
  delete: 0,
  rename: 1,
};

const INLINE_POPUP_OPTIONS = [
  { code: OPERATION_CODE.delete, name: "Delete" },
  { code: OPERATION_CODE.rename, name: "Rename" },
];

const Books = ({ bookData, onClick, selectedBook }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isrename, setisrename] = useState(false);
  const [dataTitle, setdataTitle] = useState(bookData.title);

  const { axiosInstance, handleError } = useAxios();
  const { getBooks, setShowOverlayLoading } = useBookCtx();
  const { ref } = useOutsideClick(() => setOpenMenu(false));

  const titleOutSideClickHandler = () => {
    setisrename(false);
    setdataTitle(bookData.title);
  };

  const { ref: ref1 } = useOutsideClick(titleOutSideClickHandler);

  const startRename = () => {
    setisrename(true);
    setOpenMenu(false);
  };

  const handleInputChange = (e) => {
    setdataTitle(e.target.value);
  };

  const handleKeyPress = async (e) => {
    if (e.code === "Enter") {
      try {
        await axiosInstance.put(BOOK_API_ENDPOINT, {
          title: dataTitle,
          id: bookData.id,
        });

        getBooks();
      } catch (error) {
        console.error("Error updating book title:", error);
        handleError(error);
        setdataTitle(bookData.title);
      } finally {
        setisrename(false);
      }
    }
  };

  const onClickBtnHandler = (e) => {
    e.stopPropagation();
    setOpenMenu((prevState) => !prevState);
  };

  const deleteBook = async () => {
    setShowOverlayLoading(true);

    try {
      await axiosInstance.delete(BOOK_API_ENDPOINT + "?id=" + bookData.id);
      getBooks();
    } catch (error) {
      handleError(error);
    } finally {
      setShowOverlayLoading(false);
    }
  };

  const popupOnlickHandler = (selectedMenu) => {
    if (selectedMenu.code === OPERATION_CODE.rename) {
      startRename();
    } else {
      deleteBook();
    }
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
        {isrename ? (
          <input
            type="text"
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            value={dataTitle}
            ref={ref1}
          />
        ) : (
          <h5>{dataTitle}</h5>
        )}
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

        <div ref={ref}>
          {openMenu && (
            <InlinePopup
              onClick={popupOnlickHandler}
              options={INLINE_POPUP_OPTIONS}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Books;
