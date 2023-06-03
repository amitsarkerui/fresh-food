import React from "react";
import { Parallax } from "react-parallax";

const SectionBanner = ({ featuredImage, color, heading, paragraph }) => {
  return (
    <Parallax
      className="bg-cover bg-center py-40 my-24"
      blur={{ min: -15, max: 15 }}
      bgImage={featuredImage}
      bgImageAlt="featured"
      strength={-300}
    >
      <div
        className="container mx-auto text-center p-28 opacity-80 bg-blend-overlay rounded-2xl"
        style={{ backgroundColor: `${color}` }}
      >
        <h2 className="text-3xl font-bold mb-6">{heading}</h2>
        <p className="max-w-xl mx-auto">{paragraph}</p>
      </div>
    </Parallax>
  );
};

export default SectionBanner;
