import React from "react";

const InlinePopup = ({ options, onClick }) => {
  return (
    <div className="absolute left-72 z-20 flex flex-col min-w-40 bg-white border-4 rounded-lg shadow-lg p-2 ">
      {options.map((option) => (
        <div
          key={option.code}
          role="button"
          onClick={(e) => {
            e.stopPropagation();
            onClick(option); 
          }}
          className="border_b w-full"
        >
          {option.name}
        </div>
      ))}
    </div>
  );
};

export default InlinePopup;
