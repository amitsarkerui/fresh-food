import React from "react";
import SectionHeading from "../../components/SectionHeading";
import useMenu from "../../hooks/useMenu";
import MenuItem from "../../components/menuItem";

const OueMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(
    (item) => item.category === "popular" || item.category === "offered"
  );
  return (
    <div>
      <SectionHeading
        subHeading={"Our Menu"}
        heading={"FROM OUR MENU"}
      ></SectionHeading>
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 gap-7">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default OueMenu;
