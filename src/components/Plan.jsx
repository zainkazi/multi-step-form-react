import React, { useState, useEffect } from "react";
import PlanOption from "./PlanOption";
import SectionHeading from "./SectionHeading";
import arcadeLogo from "../assets/images/icon-arcade.svg";
import advancedLogo from "../assets/images/icon-advanced.svg";
import proLogo from "../assets/images/icon-pro.svg";

const Plan = ({ currentStep }) => {
  const [bg, setBg] = useState("black");
  const [planOptions, setPlanOptions] = useState([
    { id: 1, logo: arcadeLogo, title: "Arcade", price: 9 },
    { id: 2, logo: advancedLogo, title: "Advanced", price: 12 },
    { id: 3, logo: proLogo, title: "Pro", price: 15 },
  ]);

  useEffect(() => {}, [currentStep]);

  return (
    <div>
      <SectionHeading
        title="Select your plan"
        desc="You have the option of monthly or yearly billing."
      />
      <div className="grid md:grid-cols-3 md:grid-rows-1 gap-4">
        {planOptions.map((planOption) => (
          <PlanOption
            key={planOption.id}
            logo={planOption.logo}
            title={planOption.title}
            price={planOption.price}
          />
        ))}
      </div>
      <div className="font-medium mt-12 bg-[#fafbff] text-[#02295a] p-2 rounded-xl">
        <div className="flex justify-center items-center space-x-5 text-[14px]">
          <div>Monthly</div>
          <div className="scale-75">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-800"></div>
            </label>
          </div>
          <div>Yearly</div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
