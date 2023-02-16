import React from "react";
import AddonComponent from "./AddonComponent";
import SectionHeading from "./SectionHeading";

const Addons = () => {
  return (
    <div>
      <SectionHeading
        title="Pick add-ons"
        desc="Add-ons help enhance your gaming experience."
      />
      <div className="space-y-5">
        <AddonComponent
          title="Online service"
          desc="Access to multiplayer games"
          price={1}
        />
        <AddonComponent
          title="Larger storage"
          desc="Access to multiplayer games"
          price={2}
        />
        <AddonComponent
          title="Online Service"
          desc="Access to multiplayer games"
          price={2}
        />
      </div>
    </div>
  );
};

export default Addons;
