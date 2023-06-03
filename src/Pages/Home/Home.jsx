import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import SectionBanner from "../../components/SectionBanner";
import featuredImage from "../../assets/home/featured.jpg";
import OueMenu from "./OueManu";
import ChefRecomandation from "./ChefRecomandation";
import Testimonials from "./Testimonials";

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
      <ChefRecomandation></ChefRecomandation>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
