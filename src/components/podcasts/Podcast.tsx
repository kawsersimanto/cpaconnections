import Image from "next/image";
import Link from "next/link";

const Podcast = () => {
  return (
    <Link
      href={`/events/`}
      className="rounded-[8px] overflow-hidden border group hover:bg-primary transition-colors duration-500 ease-in-out border-[#EFEFEF] flex flex-col"
    >
      <div className="relative overflow-hidden">
        <Image
          src={"/default.png"}
          width={500}
          height={230}
          className="object-cover w-full sm:h-[230px] h-[180px] transition-transform duration-900 ease-in-out group-hover:scale-110"
          alt={"Woocommerce Placeholder image"}
        />
      </div>
      <div className="p-6">
        <h2 className="md:text-2xl text-xl font-bold mb-[22px] transition-colors duration-300 ease-in-out group-hover:text-white">
          {"Title is not set"}
        </h2>
        <p className="text-gray-200 transition-colors duration-300 ease-in-out group-hover:text-white mb-[22px]">
          Lorem ipsum dolor sit amet consectetur. Dapibus porta nisl dui turpis
          et nulla diam volutpat interdum.
        </p>
        <Link
          href="/"
          className="py-4 px-8 inline-block bg-primary text-white transition-colors hover:bg-primary-900 duration-300 ease-in-out text-center rounded-[8px]"
        >
          Vote Now
        </Link>
        <div className="flex items-center gap-[10px]"></div>
      </div>
    </Link>
  );
};

export default Podcast;
