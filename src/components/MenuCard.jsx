import React from "react";

const MenuCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="bg-white p-7 shadow-xl rounded-xl flex flex-col">
      <img src={image} className="h-[250px] rounded-lg object-cover" alt="" />
      <h3 className="my-3 text-xl font-bold">{name}</h3>
      <p className="mb-8">{recipe}</p>
      <div className="flex-grow"></div>
      <div className="flex justify-center">
        <button className=" border-b-4 py-2 px-4 w-full border-primary rounded-lg bg-['#f6f6f6'] hover:bg-primary hover:text-white  transition ease-in-out delay-150">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
