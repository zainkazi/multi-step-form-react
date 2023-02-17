import React from "react";

const FormField = ({ label, placeholder }) => {
  return (
    <div>
      <div>
        <label>{label}</label>
      </div>
      <div>
        <input
          className="font-medium w-full mt-1 p-2 pl-3 rounded-sm rounded-lg border border-[#d6d9e6] text-[#02295a] text-[15px] hover:border-[#02295a] focus:border-white focus:ring-[#bfe2fd]"
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default FormField;
