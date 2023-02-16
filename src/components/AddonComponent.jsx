import React from "react";

const AddonComponent = ({ title, desc, price }) => {
  return (
    <div className="flex justify-between items-center border border-[#d6d9e6] space-x-5 py-5 px-8 rounded-xl hover:border-[#02295a]">
      <div>
        <input className="w-4 h-4 mr-3" type="checkbox" />
      </div>
      <div className="pr-28">
        <div className="font-bold text-[#02295a]">{title}</div>
        <div className="text-[#9699ab] text-[14px]">{desc}</div>
      </div>
      <div className="text-[#adbeff] text-[14px] font-bold">+${price}/mo</div>
    </div>
  );
};

export default AddonComponent;
