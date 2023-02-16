import React from "react";
import FormField from "./FormField";
import SectionHeading from "./SectionHeading";

const YourInfo = () => {
  return (
    <div>
      <SectionHeading
        title="Personal Info"
        desc="Please provide your name, email address, and phone number."
      />
      <form>
        <div className="flex flex-col space-y-6 text-[14px]">
          <FormField label="Name" placeholder="e.g John Doe" />
          <FormField label="Email Address" placeholder="e.g john@gmail.com" />
          <FormField label="Phone Number" placeholder="e.g +1 234 567 890" />
        </div>
      </form>
    </div>
  );
};

export default YourInfo;
