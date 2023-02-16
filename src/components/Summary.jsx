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
        <div className="flex justify-between items-center mb-3">
          <div>
            <div>Arcade Monthly</div>
            <a>Change</a>
          </div>
          <div>$9/mo</div>
        </div>
        <div className="space-y-1 mb-4">
          <div className="flex justify-between items-center">
            <div>Online Service</div>
            <div>+$1/mo</div>
          </div>
          <div className="flex justify-between items-center">
            <div>Larger Storage</div>
            <div>+$2/mo</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>Total per month</div>
          <div>+$12/mo</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
