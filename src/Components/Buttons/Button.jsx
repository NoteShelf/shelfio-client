import React from "react";

const Button = ({ onClick, name, disable = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className="border rounded-lg p-2 bg-gray-900 text-white hover:opacity-90 disabled:opacity-30"
    >
      {name}
    </button>
  );
};

export default Button;
