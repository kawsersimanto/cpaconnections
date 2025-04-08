"use client";

import { testimonials } from "@/constants/testimonialData";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";

const TestimonialSlider = () => {
  return (
    <Swiper
      speed={900}
      spaceBetween={20}
      breakpoints={{
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {testimonials?.map((testimonial, id) => (
        <SwiperSlide key={id}>
          <TestimonialCard testimonial={testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
