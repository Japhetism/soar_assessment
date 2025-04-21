import React from "react";
import { IInput } from "../../interfaces";

const Input: React.FC<IInput> = ({
  placeholder = "Enter text",
  value = "",
  label = "",
  type = "text",
  autoComplete = "no",
  onChange
}) => {
  
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-base text-[#232323] font-inter font-normal">{label}</label>
      <input
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        name={label.toLowerCase()}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-[15px] h-[50px] p-2 px-4 border-[#DFEAF2] text-[#718EBF] text-[15px] font-inter font-medium placeholder-[#718EBF] focus:outline-none focus:ring-2 focus:ring-[#718EBF]"
      />
    </div>
  );
};

export default Input;
