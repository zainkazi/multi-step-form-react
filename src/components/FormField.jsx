import React, { useEffect, useState } from "react";

const FormField = ({
  name,
  label,
  placeholder,
  onChangeYourInfo,
  value,
  isEmpty,
}) => {
  const [displayRequired, setDisplayRequired] = useState("hidden");
  const [redBorder, setRedBorder] = useState("border-[#d6d9e6]");

  useEffect(() => {
    if (isEmpty == true) {
      setDisplayRequired("block");
      setRedBorder("border-[#ed3548]");
    }
    // console.log(displayRequired);
    // console.log(isEmpty);
  }, [isEmpty]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <label>{label}</label>
        <p
          className={`${displayRequired} font-medium text-[14px] text-[#ed3548]`}
        >
          This field is required
        </p>
      </div>
      <div>
        <input
          onChange={onChangeYourInfo}
          name={name}
          className={`font-medium w-full mt-1 p-2 pl-3 rounded-full rounded-lg border ${redBorder} text-[#02295a] text-[15px] hover:border-[#02295a] focus:border-white focus:ring-[#bfe2fd]`}
          type="text"
          placeholder={placeholder}
          value={value}
        />
      </div>
    </div>
  );
};

export default FormField;
