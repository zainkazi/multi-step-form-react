import React, { useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";

const Summary = ({
  currentStep,
  selectedPlan,
  selectedAddons,
  onChangeClick,
  planDuration,
  planDurationName,
}) => {
  const [planPrice, setPlanPrice] = useState(() => selectedPlan.price);
  const [addonsPrice, setAddonsPrice] = useState(() => {
    if (selectedAddons.length == 0) {
      return 0;
    } else {
      let totalAddonsPrice = 0;
      selectedAddons.map((addon) => {
        totalAddonsPrice += addon.price;
      });
      return totalAddonsPrice;
    }
  });
  const [grandTotal, setGrandTotal] = useState(() => planPrice + addonsPrice);

  useEffect(() => {
    // console.log(planPrice);
    // console.log(addonsPrice);
    // console.log(grandTotal);
    // console.log(selectedPlan);
    // console.log(selectedAddons);
  }, [selectedPlan, selectedAddons]);

  return (
    <div>
      <SectionHeading
        title="Finishing up"
        desc="Double-check everything looks OK before confirming."
      />
      <div>
        <div className="bg-[#f0f6ff] rounded-xl p-5 mb-5">
          <div className="font-medium text-[#02295a] flex justify-between items-center mb-3">
            <div className="mb-5">
              <div>
                {selectedPlan.title} {`(${planDurationName})`}
              </div>
              <a
                onClick={onChangeClick}
                className="text-[#9699ab] text-[14px] cursor-pointer underline decoration-solid"
              >
                Change
              </a>
            </div>
            <div className="font-medium">
              ${selectedPlan.price}/{planDuration}
            </div>
          </div>
          <div className="space-y-3 mb-10 text-[14px] border-t-2 pt-4 text-[#9699ab]">
            {selectedAddons.map((addon) => (
              <div key={addon.id} className="flex justify-between items-center">
                <div>{addon.title}</div>
                <div>
                  +${addon.price}/{planDuration}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center px-5">
          <div className="text-[#9699ab] text-[14px]">
            Total per{" "}
            {planDurationName
              .toLowerCase()
              .substring(0, planDurationName.length - 2)}
          </div>
          <div className="text-[#473dff] font-bold">
            +${grandTotal}/{planDuration}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
