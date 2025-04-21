import React from "react";
import { IInput } from "../../interfaces";

const Input: React.FC<IInput> = ({
  placeholder = "Enter text",
  value = "",
  label = "",
  type = "text",
  autoComplete = "no",
  error,
  required = true,
  onChange
}) => {

  const inputId = `input-${label.replace(/\s+/g, "").toLowerCase()}`;
  const errorId = `${inputId}-error`;
  
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-base text-[#232323] font-inter font-normal">{label}</label>
      <input
        id={inputId}
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        name={label.toLowerCase()}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        aria-required={required}
        className="w-full border rounded-[15px] h-[50px] p-2 px-4 border-[#DFEAF2] text-[#718EBF] text-[15px] font-inter font-medium placeholder-[#718EBF] focus:outline-none focus:ring-2 focus:ring-[#718EBF]"
      />
      {error && 
        <span
          id={errorId}
          role="alert"
          className="text-red-500"
        >
          {error}
        </span>}
    </div>
  );
};

export default Input;
