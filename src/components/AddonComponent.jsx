import React from "react";

const AddonComponent = ({ title, desc, price, onBoxCheck }) => {
  return (
    <div className="flex justify-between items-center border border-[#d6d9e6] space-x-5 md:space-x-40 py-3 px-8 rounded-xl hover:border-[#02295a]">
      <div className="flex items-center space-x-6">
        <input
          onClick={() => onBoxCheck(title, price)}
          className="w-4 h-4"
          type="checkbox"
        />
        <div className="">
          <div className="font-bold text-[#02295a]">{title}</div>
          <div className="text-[#9699ab] text-[14px]">{desc}</div>
        </div>
        <div className="text-[#adbeff] text-[14px] font-bold">+${price}/mo</div>
      </div>
    </div>
  );
};

export default AddonComponent;
