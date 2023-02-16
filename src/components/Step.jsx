import React from "react";

const Step = ({ number, name }) => {
  return (
    <div className="flex text-left space-x-7 text-white">
      <div className="font-bold border border-white p-2 text-center w-10 h-10 rounded-full">
        {number}
      </div>
      <div>
        <div className="font-regular text-[#d6d9e6] text-[14px]">
          Step {number}
        </div>
        <div className="font-bold text[15px]">{name}</div>
      </div>
    </div>
  );
};

export default Step;
