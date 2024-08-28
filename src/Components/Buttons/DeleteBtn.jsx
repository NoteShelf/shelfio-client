import React from "react";

const DeleteBtn = ({ onClick }) => {
  const onClickHandler = (e) => {
    e.stopPropagation();

    onClick();
  };

  return (
    <div
      role="button"
      onClick={(e) => onClickHandler(e)}
      className="absolute right-2 hidden group-hover:flex"
    >
      <span className="material-symbols-outlined text-base">delete</span>
    </div>
  );
};

export default DeleteBtn;
