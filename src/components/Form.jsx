import React from "react";
import YourInfo from "./YourInfo";
import Plan from "./Plan";
import BackgroundSidebar from "../assets/images/bg-sidebar-desktop.svg";
import Step from "./Step";
import Addons from "./Addons";
import Summary from "./Summary";
import Thankyou from "./Thankyou";

const Form = () => {
  return (
    <div className="container">
      <div className="bg-white rounded-xl p-3 flex justify-center">
        <div className="relative">
          <div className="">
            <img src={BackgroundSidebar} />
          </div>
          <div className="absolute inset-0 pl-6 pt-8 space-y-7">
            <Step number={1} name="YOUR INFO" />
            <Step number={2} name="SELECT PLAN" />
            <Step number={3} name="ADD-ONS" />
            <Step number={4} name="SUMMARY" />
          </div>
        </div>

        <div className="flex flex-col justify-between py-5 mx-28 w-100 my-2">
          <div>
            <Summary />
          </div>
          <div className="flex justify-between items-center">
            <div className="font-medium text-[#9699ab] cursor-pointer transition duration-100 hover:text-[#02295a]">
              Go back
            </div>
            <div className="font-medium bg-[#02295a] text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90">
              Next Step
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
