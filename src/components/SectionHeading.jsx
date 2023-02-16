import React from "react";

const SectionHeading = ({ title, desc }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-[#02295a] my-1">{title}</h1>
      <p className="text-[#9699ab] text-[14px]">{desc}</p>
    </div>
  );
};

export default SectionHeading;
