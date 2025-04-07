import bannerBg from "@/assets/banner/banner-bg.jpg";
import bannerMainImg from "@/assets/banner/banner-main.png";
import bgShape from "@/assets/banner/bg-shape.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      className="md:py-20 py-16 bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${bannerBg.src})` }}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center lg:gap-20 gap-10">
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
          <div className="relative z-[1] flex items-center justify-end">
            <Image
              src={bannerMainImg}
              height={600}
              width={600}
              alt="Empowering Communities Building Wealth"
              className="object-contain w-[600px] lg:h-[600px] h-auto"
            />
            <Image
              src={bgShape}
              height={986}
              width={613}
              alt=""
              className="object-contain absolute bottom-[-100px] w-[613px] h-[986px] z-[-1] lg:block hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
