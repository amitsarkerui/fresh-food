import React, { useState } from "react";
import bgImg from "../../assets/shop/banner2.jpg";
import Breadcrumbs from "../../components/Breadcrumbs";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import MenuCard from "../../components/MenuCard";
import RestaurantCard from "../../components/RestaurantCard";
import { useParams } from "react-router-dom";

const OurRestaurant = () => {
  const categories = ["offered", "salad", "pizza", "soup", "dessert"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const salad = menu.filter((item) => item.category === "salad");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Breadcrumbs
        featuredImage={bgImg}
        color={"#000000"}
        heading={"Order Food"}
        paragraph={"Would you like to try a dish ?"}
      ></Breadcrumbs>
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Offered</Tab>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
          </TabList>
          <TabPanel>
            <RestaurantCard item={offered}></RestaurantCard>
          </TabPanel>
          <TabPanel>
            <RestaurantCard item={salad}></RestaurantCard>
          </TabPanel>
          <TabPanel>
            <RestaurantCard item={pizza}></RestaurantCard>
          </TabPanel>
          <TabPanel>
            <RestaurantCard item={soup}></RestaurantCard>
          </TabPanel>
          <TabPanel>
            <RestaurantCard item={dessert}></RestaurantCard>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurRestaurant;
