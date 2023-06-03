import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation } from "swiper";
import SectionHeading from "../../components/SectionHeading";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div className="my-20 container mx-auto">
      <SectionHeading
        subHeading={"What our client's say"}
        heading={"Testimonials"}
      ></SectionHeading>
      <Swiper
        autoplay={{
          delay: 150,
          disableOnInteraction: true,
        }}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <Rating
              className="text-center mx-auto"
              style={{ maxWidth: 180 }}
              value={testimonial.rating}
              readOnly
            />
            <FaQuoteRight className="text-6xl font-semibold text-center mx-auto my-10"></FaQuoteRight>
            <h3 className="text-2xl font-bold mb-4">{testimonial.name}</h3>
            <p className="max-w-lg text-gray-500 mx-auto">
              {testimonial.details}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
