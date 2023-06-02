import React from "react";
// import featuredImage from "../assets/home/featured.jpg";
import { Parallax } from "react-parallax";

const SectionBanner = ({ featuredImage }) => {
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
        style={{ backgroundColor: "#ffffff" }}
      >
        <h2 className="text-3xl font-bold mb-6">Bistro Boss</h2>
        <p className="max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          aperiam non tempora harum nostrum expedita, sint quae voluptatem natus
          ipsam, mollitia nulla quam sequi voluptatum.
        </p>
      </div>
    </Parallax>
  );
};

export default SectionBanner;
