import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import SectionBanner from "../../components/SectionBanner";
import featuredImage from "../../assets/home/featured.jpg";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <SectionBanner
        featuredImage={featuredImage}
        color={"#000000"}
        heading={"Bistro Boss"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias aperiam non tempora harum nostrum expedita, sint quae voluptatem natus ipsam, mollitia nulla quam sequi voluptatum."
        }
      ></SectionBanner>
    </div>
  );
};

export default Home;
