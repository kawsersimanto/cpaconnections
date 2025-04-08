import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Events from "@/components/home/Events";
import Overview from "@/components/home/Overview";
import Testimonial from "@/components/home/Testimonial";
import Newsletter from "@/components/shared/Newsletter";

const CommonLayoutHomePage = () => {
  return (
    <>
      <Banner />
      <Overview />
      <About />
      <Events />
      <Testimonial />
      <Newsletter />
    </>
  );
};

export default CommonLayoutHomePage;
