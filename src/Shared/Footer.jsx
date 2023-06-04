import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-200 text-center text-white dark:bg-neutral-600 dark:text-neutral-200 mt-16">
      <div className="bg-secondary">
        <div className="container mx-auto py-14">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            <div className="mb-6 lg:mb-0">
              <img
                src="https://images.pexels.com/photos/1196516/pexels-photo-1196516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full h-40 object-cover rounded-md shadow-lg"
                alt=""
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full h-40 object-cover rounded-md shadow-lg"
                alt=""
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full h-40 object-cover rounded-md shadow-lg"
                alt=""
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full h-40 object-cover rounded-md shadow-lg"
                alt=""
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full h-40 object-cover rounded-md shadow-lg"
                alt=""
              />
            </div>
            <div className="mb-6 lg:mb-0">
              <img
                src="https://images.pexels.com/photos/299410/pexels-photo-299410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full h-40 object-cover rounded-md shadow-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-primary p-4 text-center text-white">
        © 2023 Copyright:
        <Link className="text-white"> Fresh Food</Link>
      </div>
    </footer>
  );
};

export default Footer;
