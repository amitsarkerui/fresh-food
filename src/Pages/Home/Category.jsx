import React from "react";
import SectionHeading from "../../components/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const Category = () => {
  return (
    <div className="container mx-auto">
      <SectionHeading
        subHeading={"From : 9:00 am to 11 pm"}
        heading={"ORDER ONLINE"}
      ></SectionHeading>
      <div className="">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          // pagination={{
          //   clickable: true,
          // }}
          // modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative">
              <img src={img1} alt="" className="rounded-xl" />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-xl"></div>
              <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white">
                SOUPS
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img src={img5} alt="" className="rounded-xl" />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-xl"></div>
              <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white">
                Salads
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img src={img2} alt="" className="rounded-xl" />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-xl"></div>
              <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white">
                Pizza
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img src={img3} alt="" className="rounded-xl" />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-xl"></div>
              <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white">
                Desserts
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img src={img4} alt="" className="rounded-xl" />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-xl"></div>
              <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white">
                Lunch
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img src={img5} alt="" className="rounded-xl" />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-xl"></div>
              <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white">
                Salads
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img src={img2} alt="" className="rounded-xl" />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-xl"></div>
              <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white">
                Pizza
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img src={img3} alt="" className="rounded-xl" />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-xl"></div>
              <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white">
                Desserts
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
