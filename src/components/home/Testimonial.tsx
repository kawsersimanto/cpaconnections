import TestimonialSlider from "../testimonialSlider/TestimonialSlider";

const Testimonial = () => {
  return (
    <section className="md:py-[120] py-[60px] bg-[rgba(35,38,91,0.20)]">
      <div className="container">
        <div className="mb-[56px]">
          <h2 className="font-bold xl:text-[54px] text-[32px] text-primary ">
            Our Clients Review
          </h2>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonial;
