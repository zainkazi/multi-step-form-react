import React, { useEffect, useState } from "react";
import FormField from "./FormField";
import SectionHeading from "./SectionHeading";

const YourInfo = ({ currentStep }) => {
  const [bg, setBg] = useState("");
  const [formFields, setFormFields] = useState([
    { id: 1, label: "Name", placeholder: "e.g John Doe" },
    { id: 2, label: "Email Address", placeholder: "e.g john@gmail.com" },
    { id: 3, label: "Phone Number", placeholder: "e.g +1 234 567 890" },
  ]);

  useEffect(() => {}, [currentStep]);

  return (
    <div>
      <SectionHeading
        title="Personal Info"
        desc="Please provide your name, email address, and phone number."
      />
      <form>
        <div className="flex flex-col space-y-6 text-[14px]">
          {formFields.map((formField) => (
            <FormField
              key={formField.id}
              label={formField.label}
              placeholder={formField.placeholder}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default YourInfo;
