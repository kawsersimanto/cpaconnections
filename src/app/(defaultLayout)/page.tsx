import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Events from "@/components/home/Events";
import Overview from "@/components/home/Overview";
import Newsletter from "@/components/shared/Newsletter";

const CommonLayoutHomePage = () => {
  return (
    <>
      <Banner />
      <Overview />
      <About />
      <Events />
      <Newsletter />
    </>
  );
};

export default CommonLayoutHomePage;
