import React from "react";

const CloseButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center w-5 h-5 rounded-full border border-gray-900 hover:bg-gray-900 hover:text-white "
    >
      <span className="material-symbols-outlined text-sm">close</span>
    </button>
  );
};

export default CloseButton;
