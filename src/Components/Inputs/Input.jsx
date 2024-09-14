import React from "react";

const Input = ({
  onChange,
  value,
  label,
  placeholder,
  type = "text",
  error,
  showError,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="font-semibold text-xs" htmlFor={label}>
        {label}
      </label>
      <input
        className="border rounded-md h-9 active:outline-blue-500 focus:outline-blue-500 px-2"
        value={value}
        onChange={onChange}
        id={label}
        type={type}
        placeholder={placeholder}
      />
      {showError && <span className="text-red-600 text-xs">{error}</span>}
    </div>
  );
};

export default Input;
