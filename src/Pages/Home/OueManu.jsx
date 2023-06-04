import React from "react";
import SectionHeading from "../../components/SectionHeading";
import useMenu from "../../hooks/useMenu";
import MenuItem from "../../components/menuItem";
import Button from "../../components/Button";

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
      {/* <div className="flex justify-center mt-10">
        <button className=" border-b-4 py-2 px-4 border-primary rounded-lg bg-['#f6f6f6'] hover:bg-primary hover:text-white  transition ease-in-out delay-150">
          View Full Menu
        </button>
      </div> */}
      <Button btnText={"View full menu"} nextLink={"/menu"}></Button>
    </div>
  );
};

export default OueMenu;
