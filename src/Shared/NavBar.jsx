import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/fresh_food_logo.svg";

const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 py-5">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <img className="w-full" src={logo} alt="" />
        </Link>
        <div className="flex md:order-2">
          <button type="button" className="btn btn-primary text-white">
            Order Now
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Our Menu</Link>
            </li>
            <li>
              <Link to="/restaurant">Our Restaurant</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
