import React from "react";

const Step = ({ number, name }) => {
  return (
    <div className="flex text-left space-x-7 text-white">
      <div className="font-bold border border-black p-2 text-black text-center w-10 h-10 rounded-full">
        {number}
      </div>
      <div className="hidden md:block">
        <div className="font-regular text-[#d6d9e6] text-black text-[14px]">
          Step {number}
        </div>
        <div className="font-bold text[15px] text-black">{name}</div>
      </div>
    </div>
  );
};

export default Step;
