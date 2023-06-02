import React from "react";

const SectionHeading = ({ subHeading, heading }) => {
  return (
    <div className="my-10">
      <p className="text-center text-primary">------ {subHeading} ------</p>
      <div className="flex justify-center">
        <h3 className="border-y-2 py-4 px-10 text-center inline-block text-3xl font-bold my-3">
          {heading}
        </h3>
      </div>
    </div>
  );
};

export default SectionHeading;
