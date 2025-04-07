import aboutImg from "@/assets/about/about-img.png";
import groupImg from "@/assets/about/group.svg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="py-[50px]">
      <div className="container">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div>
            <Image
              src={aboutImg}
              width={740}
              height={610}
              alt="About us"
              className="object-contain w-[740px] xl:h-[610px] h-auto"
            />
          </div>
          <div>
            <div className="mb-[48px]">
              <h2 className="font-bold xl:text-[54px] text-[32px] mb-4">
                About BWEAL
              </h2>
              <p className="text-gray-100 font-normal md:text-base text-sm">
                BWEAL Inc. is a non-profit organization committed to providing
                the community with diverse tools that encourage and promote
                wealth. Our organization&apos;s mission is to provide tools,
                knowledge, and connections that empower people and help build
                wealth in the community.
                <br />
                BWEAL is hosting our very first virtual live event on June 18th,
                2022, this summer. This will serve as our introduction to the
                community. The president and other board members of the
              </p>
            </div>
            <div className="flex sm:gap-7 gap-4 mb-[56px]">
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={groupImg}
                  width={62}
                  height={62}
                  className="object-contain w-[62px] h-[62px]"
                  alt="Group image"
                />
                <h3 className="font-bold text-[#1C1C1E] text-center sm:text-base text-sm">
                  Active Member
                </h3>
                <p className="font-semibold text-primary">500+</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={groupImg}
                  width={62}
                  height={62}
                  className="object-contain w-[62px] h-[62px]"
                  alt="Group image"
                />
                <h3 className="font-bold text-[#1C1C1E] text-center sm:text-base text-sm">
                  Active Member
                </h3>
                <p className="font-semibold text-primary">500+</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={groupImg}
                  width={62}
                  height={62}
                  className="object-contain w-[62px] h-[62px]"
                  alt="Group image"
                />
                <h3 className="font-bold text-[#1C1C1E] text-center sm:text-base text-sm">
                  Active Member
                </h3>
                <p className="font-semibold text-primary">500+</p>
              </div>
            </div>
            <div>
              <Link
                href="/"
                className="py-[15px] px-[31px] border border-primary text-primary transition-colors hover:bg-primary duration-300 ease-in-out hover:text-white text-center"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
