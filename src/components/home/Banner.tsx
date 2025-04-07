import bannerBg from "@/assets/banner/banner-bg.jpg";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      className="lg:py-[152px] md:py-20 py-16 bg-center bg-cover"
      style={{ backgroundImage: `url(${bannerBg.src})` }}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div>
            <div className="xl:mb-[56px] mb-8">
              <h1 className="xl:text-[80px] md:text-[42px] text-4xl font-bold text-primary mb-6">
                Empowering Communities Building Wealth
              </h1>
              <p className="text-[18px] max-w-[600px]">
                Join us in making a difference through education, resources, and
                support.
              </p>
            </div>
            <div className="flex md:flex-row flex-col gap-4">
              <Link
                href="/"
                className="py-[15px] px-[31px] border border-primary text-primary transition-colors hover:bg-primary duration-300 ease-in-out hover:text-white text-center"
              >
                GET INVOLVED
              </Link>
              <Link
                href="/"
                className="py-4 px-8 bg-primary text-white transition-colors hover:bg-primary-900 duration-300 ease-in-out text-center"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
