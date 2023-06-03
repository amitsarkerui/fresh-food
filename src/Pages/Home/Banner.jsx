import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="h-[700px] rounded-2xl">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={true}
        showArrows={true}
        interval={4000}
        showThumbs={false}
        className="container mx-auto"
      >
        {/* -------------slider 1 ------------------ */}
        <div className="h-[700px] py-60 rounded-2xl bg-[url('https://img.freepik.com/free-photo/chalkboard-with-different-colorful-healthy-vegetables-dark-background_114579-5472.jpg?w=1380&t=st=1685600119~exp=1685600719~hmac=85bf7d6af109d1d6dc686578b8958f09559d52ed35262e6bf40c49ccbedc5924')] bg-cover bg-center">
          <h1 className="text-5xl text-white font-bold text-center">
            A Scrumptious Retreat <br /> for Food Lovers!
          </h1>
          <p className="max-w-lg my-7 text-white mx-auto">
            Escape to Fresh Food Hotel, where delectable cuisine meets
            exceptional hospitality, offering a tantalizing getaway for food
            enthusiasts seeking unforgettable flavors and relaxation.
          </p>
          <button className="btn btn-primary text-white">View Menu</button>
        </div>
        {/* -------------slider 2 ------------------ */}
        <div className=" pl-16 h-[700px] py-60 rounded-2xl bg-[url('https://img.freepik.com/free-photo/vegetables-fruits-arrangement_23-2148949677.jpg?w=1380&t=st=1685600871~exp=1685601471~hmac=dbea91d827a3f3b1e115d71207640b68326b9ec737c560a784091fdda252e5ac')] bg-cover bg-center">
          <h1 className="text-5xl text-white font-bold text-left">
            A Scrumptious Retreat <br /> for Food Lovers!
          </h1>
          <p className="max-w-lg my-7 text-white text-left">
            Escape to Fresh Food Hotel, where delectable cuisine meets
            exceptional hospitality, offering a tantalizing getaway for food
            enthusiasts seeking unforgettable flavors and relaxation.
          </p>
          <div className="flex justify-start">
            <button className="btn btn-primary text-white text-left ">
              View Menu
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
