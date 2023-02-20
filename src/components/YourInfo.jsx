import React, { useEffect, useState } from "react";
import FormField from "./FormField";
import SectionHeading from "./SectionHeading";

const YourInfo = ({ yourInfo, onChangeYourInfo, isEmpty }) => {
  const [formFields, setFormFields] = useState([
    {
      id: 1,
      name: "name",
      label: "Name",
      placeholder: "e.g John Doe",
    },
    {
      id: 2,
      name: "email",
      label: "Email Address",
      placeholder: "e.g john@gmail.com",
    },
    {
      id: 3,
      name: "phone",
      label: "Phone Number",
      placeholder: "e.g +1 234 567 890",
    },
  ]);

  // useEffect(() => {
  //   console.log(isEmpty);
  // }, [isEmpty]);

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
              onChangeYourInfo={onChangeYourInfo}
              key={formField.id}
              name={formField.name}
              label={formField.label}
              placeholder={formField.placeholder}
              value={yourInfo[formField.name]}
              isEmpty={isEmpty}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default YourInfo;
