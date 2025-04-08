"use client";
import { testimonials } from "@/constants/testimonialData";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        speed={900}
        spaceBetween={20}
        modules={[Pagination]}
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
        pagination={{
          clickable: true,
          el: ".testimonial-pagination",
        }}
      >
        {testimonials?.map((testimonial, id) => (
          <SwiperSlide key={id}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="testimonial-pagination flex items-center justify-center mt-[56px]"></div>
    </>
  );
};

export default TestimonialSlider;
