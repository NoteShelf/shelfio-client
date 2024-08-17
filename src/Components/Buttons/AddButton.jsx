import React from "react";

const AddButton = ({ onClick, title }) => {
  return (
    <button
      onClick={onClick}
      title={title}
      className="flex justify-center items-center w-5 h-5 rounded-full border border-gray-900 hover:bg-gray-900 hover:text-white "
    >
      <span class="material-symbols-outlined text-xs">add</span>
    </button>
  );
};

export default AddButton;
