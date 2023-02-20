import React, { useState, useEffect } from "react";
import AddonComponent from "./AddonComponent";
import SectionHeading from "./SectionHeading";

const Addons = ({ currentStep, onBoxCheck }) => {
  const [bg, setBg] = useState("black");
  const [addonOptions, setAddonOptions] = useState([
    {
      id: 1,
      title: "Online service",
      desc: "Access to multiplayer games",
      price: 1,
      selected: false,
    },
    {
      id: 2,
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: 2,
      selected: false,
    },
    {
      id: 3,
      title: "Customizable profile",
      desc: "Custom theme on your profile",
      price: 2,
      selected: false,
    },
  ]);

  useEffect(() => {}, [currentStep]);

  return (
    <div>
      <SectionHeading
        title="Pick add-ons"
        desc="Add-ons help enhance your gaming experience."
      />
      <div className="space-y-5">
        {addonOptions.map((addon) => (
          <AddonComponent
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
