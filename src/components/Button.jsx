import React from "react";
import { Link } from "react-router-dom";

const Button = ({ btnText, nextLink }) => {
  const link = nextLink ? nextLink : "#";
  return (
    <div className="flex justify-center mt-10">
      <Link to={`${link}`}>
        <button className=" border-b-4 py-2 px-4 border-primary rounded-lg bg-['#f6f6f6'] hover:bg-primary hover:text-white  transition ease-in-out delay-150">
          {btnText}
        </button>
      </Link>
    </div>
  );
};

export default Button;
