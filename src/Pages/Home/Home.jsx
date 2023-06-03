import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import SectionBanner from "../../components/SectionBanner";
import featuredImage from "../../assets/home/featured.jpg";
import OueMenu from "./OueManu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <SectionBanner
        featuredImage={featuredImage}
        color={"#ffffff"}
        heading={"Bistro Boss"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias aperiam non tempora harum nostrum expedita, sint quae voluptatem natus ipsam, mollitia nulla quam sequi voluptatum."
        }
      ></SectionBanner>
      <OueMenu></OueMenu>
    </div>
  );
};

export default Home;
