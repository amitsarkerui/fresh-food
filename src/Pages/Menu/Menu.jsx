import React from "react";
import useMenu from "../../hooks/useMenu";
import Breadcrumbs from "../../components/Breadcrumbs";
import bgImg from "../../assets/menu/dessert-bg.jpeg";
import SectionHeading from "../../components/SectionHeading";
import MenuItem from "../../components/menuItem";
import Button from "../../components/Button";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import SectionBanner from "../../components/SectionBanner";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const popular = menu.filter((item) => item.category === "popular");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Breadcrumbs
        featuredImage={bgImg}
        color={"#000000"}
        heading={"Our Menu"}
        paragraph={"Would you like to try a dish ?"}
      ></Breadcrumbs>
      {/* ------------Offered ----------- */}
      <div className="container mx-auto mb-20">
        <SectionHeading
          subHeading={"Don't Miss"}
          heading={"Today's Offer"}
        ></SectionHeading>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {offered.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Button
          btnText={"ORDER YOUR FAVORITE FOOD"}
          nextLink={`/restaurant/offered`}
        ></Button>
      </div>
      {/* Dessert ------------------------------------ */}
      <div className="">
        <SectionBanner
          featuredImage={dessertImg}
          color={"#ffffff"}
          heading={"Dessert"}
          paragraph={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></SectionBanner>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 container mx-auto mb-10">
          {dessert.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Button
          btnText={"ORDER YOUR FAVORITE FOOD"}
          nextLink={`/restaurant/dessert`}
        ></Button>
      </div>
      {/* Pizza ------------------------------ */}
      <div className="">
        <SectionBanner
          featuredImage={pizzaImg}
          color={"#ffffff"}
          heading={"Pizza"}
          paragraph={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></SectionBanner>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 container mx-auto mb-10">
          {pizza.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Button
          btnText={"ORDER YOUR FAVORITE FOOD"}
          nextLink={`/restaurant/pizza`}
        ></Button>
      </div>
      {/* Salad -------------------- */}
      <div className="">
        <SectionBanner
          featuredImage={saladImg}
          color={"#ffffff"}
          heading={"Salad"}
          paragraph={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></SectionBanner>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 container mx-auto mb-10">
          {salad.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Button
          btnText={"ORDER YOUR FAVORITE FOOD"}
          nextLink={`/restaurant/salad`}
        ></Button>
      </div>
      {/* Soup --------------------------------- */}
      <div className="">
        <SectionBanner
          featuredImage={soupImg}
          color={"#ffffff"}
          heading={"Soup"}
          paragraph={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></SectionBanner>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 container mx-auto mb-10">
          {soup.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Button
          btnText={"ORDER YOUR FAVORITE FOOD"}
          nextLink={`/restaurant/soup`}
        ></Button>
      </div>
    </div>
  );
};

export default Menu;
