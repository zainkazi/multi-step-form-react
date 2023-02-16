import React from "react";

const AddonComponent = ({ title, desc, price }) => {
  return (
    <div className="flex justify-between items-center border-2 border-black px-3 space-x-10">
      <div>
        <input type="checkbox" />
      </div>
      <div>
        <div>{title}</div>
        <div>{desc}</div>
      </div>
      <div>+${price}/mo</div>
    </div>
  );
};

export default AddonComponent;
