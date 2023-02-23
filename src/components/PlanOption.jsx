import React, { useEffect, useState } from "react";

const PlanOption = ({
  id,
  logo,
  title,
  price,
  onPlanSelect,
  selected,
  planDuration,
}) => {
  const [bg, changeBg] = useState("");
  const [displayTwoMonths, setDisplayTwoMonths] = useState("invisible");

  useEffect(() => {
    if (planDuration == "mo") {
      setDisplayTwoMonths("invisible");
    } else {
      setDisplayTwoMonths("block");
    }

    if (selected) {
      changeBg("bg-[#f0f6ff]");
    } else {
      changeBg("");
    }
  }, [selected, planDuration]);

  return (
    <div
      onClick={() => onPlanSelect(title, price, id)}
      className={`${bg} border border-[#d6d9e6] rounded-xl flex flex-row md:flex-col justify-start md:justify-between items-left pt-5 px-5 pr-14 cursor-pointer hover:border-[#473dff] focus:bg-violet-700`}
    >
      <div className="mb-5 md:mb-10 mr-10 md:mr-0">
        <img src={logo} alt="Plan Option" />
      </div>
      <div>
        <div className="text-[#02295a] font-medium">{title}</div>
        <div className="text-[14px] text-[#9699ab] mb-3">
          ${price}/{planDuration}
        </div>
        <div
          className={`${displayTwoMonths} font-medium text-[#02295a] mb-3 -mt-2 w-[100px] text-[13px]`}
        >
          2 months free
        </div>
      </div>
    </div>
  );
};

export default PlanOption;
