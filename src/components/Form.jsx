import React, { useEffect, useState } from "react";
import YourInfo from "./YourInfo";
import Plan from "./Plan";
import BackgroundSidebar from "../assets/images/bg-sidebar-desktop.svg";
import BackgroundSidebarMobile from "../assets/images/bg-sidebar-mobile.svg";
import Step from "./Step";
import Addons from "./Addons";
import Summary from "./Summary";
import Thankyou from "./Thankyou";

const Form = () => {
  const [stepNumber, setStepNumber] = useState(() => 1);
  const [goBackVisible, setGoBackVisible] = useState("invisible");

  useEffect(() => {
    console.log(stepNumber);
    if (stepNumber > 1) {
      setGoBackVisible("visible");
    } else {
      setGoBackVisible("invisible");
    }
  }, [stepNumber]);

  const nextStep = () => {
    setStepNumber((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStepNumber((prevStep) => prevStep - 1);
  };

  return (
    <div className="container">
      <div className="bg-[#d6d9e6] md:bg-white rounded-xl md:p-3 md:flex justify-center">
        <div className="relative">
          <div>
            <img className="hidden md:block" src={BackgroundSidebar} />
            <img
              className="block md:hidden w-full"
              src={BackgroundSidebarMobile}
            />
          </div>
          <div className="flex justify-center mt-8 absolute inset-0 space-x-10 md:space-x-0 md:block md:mt-0 md:pl-6 md:pt-8 md:space-y-7">
            <Step number={1} name="YOUR INFO" />
            <Step number={2} name="SELECT PLAN" />
            <Step number={3} name="ADD-ONS" />
            <Step number={4} name="SUMMARY" />
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl mx-8 px-16 py-10 bg-white md:px-0 md:py-5 md:mx-28 md:w-100 md:my-2">
          <div>
            {(stepNumber === 1 && <YourInfo />) ||
              (stepNumber === 2 && <Plan />) ||
              (stepNumber === 3 && <Addons />) ||
              (stepNumber === 4 && <Summary />)}
          </div>
          <div className="flex justify-between fixed bottom-0 left-0 w-full bg-white p-5 md:static md:p-0 md:static items-center">
            {/* {stepNumber != 1 && (
              <div
                onClick={prevStep}
                className={`font-medium text-[#9699ab] cursor-pointer transition duration-100 hover:text-[#02295a] ${goBackVisible}`}
              >
                Go back
              </div>
            )} */}
            <div
              onClick={prevStep}
              className={`font-medium text-[#9699ab] cursor-pointer transition duration-100 hover:text-[#02295a] ${goBackVisible}`}
            >
              Go back
            </div>
            {stepNumber === 4 ? (
              <div className="font-medium bg-[#473dff] text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90">
                Confirm
              </div>
            ) : (
              <div
                onClick={nextStep}
                className="font-medium bg-[#02295a] text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90"
              >
                Next Step
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
