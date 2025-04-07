import { OverviewCardProps } from "@/constants/overviews";
import Image from "next/image";

type OverViewCardProps = {
  details: OverviewCardProps;
};

const OverViewCard = ({ details }: OverViewCardProps) => {
  const { icon, title, description } = details;

  return (
    <div className="lg:py-[50px] py-4 px-4 rounded-[8px] shadow-overview flex flex-col gap-4">
      <div className="flex flex-col gap-4 items-center">
        <Image
          src={icon}
          width={50}
          height={50}
          className="object-contain w-[50px] h-[50px]"
          alt={`${title} Icon`}
        />
        <h2 className="text-[18px] font-bold text-primary text-center">
          {title}
        </h2>
      </div>
      <p className="text-gray-100 font-normal md:text-base text-sm">
        {description}
      </p>
    </div>
  );
};

export default OverViewCard;
