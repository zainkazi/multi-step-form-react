import React, { useState, useEffect } from "react";
import AddonComponent from "./AddonComponent";
import SectionHeading from "./SectionHeading";

const Addons = ({ currentStep }) => {
  const [bg, setBg] = useState("black");
  const [addons, setAddons] = useState([
    {
      id: 1,
      title: "Online service",
      desc: "Access to multiplayer games",
      price: 1,
    },
    {
      id: 2,
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      id: 3,
      title: "Customizable profile",
      desc: "Custom theme on your profile",
      price: 2,
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
        {addons.map((addon) => (
          <AddonComponent
            key={addon.id}
            title={addon.title}
            desc={addon.desc}
            price={addon.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Addons;
