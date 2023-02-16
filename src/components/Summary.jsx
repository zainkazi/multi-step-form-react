import React from "react";
import SectionHeading from "./SectionHeading";

const Summary = () => {
  return (
    <div>
      <SectionHeading
        title="Finishing up"
        desc="Double-check everything looks OK before confirming."
      />
      <div>
        <div className="bg-[#f0f6ff] rounded-xl p-5 mb-5">
          <div className="font-medium text-[#02295a] flex justify-between items-center mb-3">
            <div className="mb-5 mr-60">
              <div>Arcade Monthly</div>
              <a className="text-[#9699ab] text-[14px] underline decoration-solid">
                Change
              </a>
            </div>
            <div className="font-medium">$9/mo</div>
          </div>
          <div className="space-y-3 mb-10 text-[14px] border-t-2 pt-4 text-[#9699ab]">
            <div className="flex justify-between items-center">
              <div>Online Service</div>
              <div>+$1/mo</div>
            </div>
            <div className="flex justify-between items-center">
              <div>Larger Storage</div>
              <div>+$2/mo</div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center px-5">
          <div className="text-[#9699ab] text-[14px]">Total per month</div>
          <div className="text-[#473dff] font-bold">+$12/mo</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
