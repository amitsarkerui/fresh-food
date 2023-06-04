import React from "react";

const Breadcrumbs = ({ featuredImage, color, heading, paragraph }) => {
  return (
    <div
      className="bg-cover bg-center py-24 mb-16"
      style={{ backgroundImage: `url(${featuredImage})` }}
    >
      <div
        className="container mx-auto text-center p-28 opacity-80 bg-blend-overlay rounded-2xl"
        style={{ backgroundColor: `${color}` }}
      >
        <h2 className="text-5xl text-white font-bold mb-6">{heading}</h2>
        <p className="max-w-xl text-gray-300 mx-auto">{paragraph}</p>
      </div>
    </div>
  );
};

export default Breadcrumbs;
