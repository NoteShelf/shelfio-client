import React from "react";

const Button = ({
  onClick,
  name,
  disable = false,
  type = "primary",
  customClassNames = "",
  isLoading,
}) => {
  let classNames = null;

  if (type === "primary") {
    classNames =
      "border  rounded-lg w-full text-sm p-2 bg-gray-900 text-white hover:opacity-90 disabled:opacity-30 ";
  } else if ("secondary") {
    classNames =
      "border rounded-lg w-full text-sm font-semibold p-2 border-gray-900 hover:bg-gray-900  hover:text-white ";
  }

  return (
    <button
      onClick={onClick}
      disabled={disable || isLoading}
      className={classNames + customClassNames + ` relative min-h-10`}
    >
      {isLoading ? (
        <span className="material-symbols-outlined absolute  right-[8.5rem] top-2 animate-spin">
          progress_activity
        </span>
      ) : (
        name
      )}
    </button>
  );
};

export default Button;
