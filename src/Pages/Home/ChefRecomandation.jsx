import React from "react";
import SectionHeading from "../../components/SectionHeading";
import useMenu from "../../hooks/useMenu";
import MenuCard from "../../components/MenuCard";

const ChefRecomandation = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div className="mt-20">
      <SectionHeading
        subHeading={"Should Try"}
        heading={"Chef Recommendation"}
      ></SectionHeading>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 container mx-auto">
        {offered.map((item) => (
          <MenuCard key={item._id} item={item}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default ChefRecomandation;
