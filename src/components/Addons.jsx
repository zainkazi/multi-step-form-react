import React, { useState, useEffect } from "react";
import AddonComponent from "./AddonComponent";
import SectionHeading from "./SectionHeading";

const Addons = ({ currentStep, onBoxCheck, onAddonSelect, addonOptions }) => {
  const [bg, setBg] = useState("black");

  useEffect(() => {}, []);

  return (
    <div>
      <SectionHeading
        title="Pick add-ons"
        desc="Add-ons help enhance your gaming experience."
      />
      <div className="space-y-5">
        {addonOptions.map((addon) => (
          <AddonComponent
            onAddonSelect={onAddonSelect}
            onBoxCheck={onBoxCheck}
            key={addon.id}
            id={addon.id}
            title={addon.title}
            desc={addon.desc}
            price={addon.price}
            selected={addon.selected}
          />
        ))}
      </div>
    </div>
  );
};

export default Addons;
