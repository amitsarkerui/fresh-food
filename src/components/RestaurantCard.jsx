import React from "react";
import MenuCard from "./MenuCard";

const RestaurantCard = ({ item }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4 container mx-auto">
      {item.map((item) => (
        <MenuCard key={item._id} item={item}></MenuCard>
      ))}
    </div>
  );
};

export default RestaurantCard;
