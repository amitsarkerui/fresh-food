import React from "react";

const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div>
      <div className="flex items-center gap-7">
        <img
          src={image}
          className="h-32 w-32 object-cover rounded-r-full rounded-bl-full"
          alt=""
        />
        <div>
          <h3 className="text-2xl font-bold mb-3">{name}</h3>
          <p className="text-gray-600 max-w-md">{recipe}</p>
        </div>
        <p className="font-bold p-4 bg-primary rounded-e-full text-white">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
