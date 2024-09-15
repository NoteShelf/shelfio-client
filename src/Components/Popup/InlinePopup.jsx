import React from "react";

const InlinePopup = ({ options, onClick }) => {
  return (
    <div className="absolute left-72 z-20 flex flex-col  min-w-40 bg-white border-4 rounded-lg shadow-lg">
      {options.map((option) => (
        <div
          key={option.code}
          role="button"
          onClick={(e) => {
            e.stopPropagation();
            onClick(option);
          }}
          className="border-b w-full px-2 py-1 hover:bg-gray-100"
        >
          {option.name}
        </div>
      ))}
    </div>
  );
};

export default InlinePopup;
