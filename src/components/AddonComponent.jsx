import React, { useEffect, useState } from "react";

const AddonComponent = ({
  id,
  title,
  desc,
  price,
  selected,
  onBoxCheck,
  onAddonSelect,
}) => {
  const [addonBg, setAddonBg] = useState("");
  const [check, setCheck] = useState(false);
  useEffect(() => {
    if (selected) {
      setAddonBg("bg-[#d6d9e6]");
      setCheck(true);
    } else {
      setAddonBg("");
      setCheck(false);
    }
  }, [selected]);

  return (
    <div
      onClick={() => onAddonSelect(id)}
      className={`${addonBg} flex justify-between items-center border border-[#d6d9e6] space-x-5 md:space-x-40 py-3 px-8 rounded-xl hover:border-[#02295a]`}
    >
      <div className="flex items-center space-x-6">
        <input
          onClick={onBoxCheck}
          data-id={id}
          data-title-name={title}
          data-price={price}
          className="w-4 h-4"
          type="checkbox"
          // checked={check || ""}
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
