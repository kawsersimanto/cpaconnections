import { OverviewCardProps, overviewDetails } from "@/constants/overviews";
import OverViewCard from "./OverviewCard";

const Overview = () => {
  return (
    <section className="md:pt-[100px] pt-[60px] pb-[50px]">
      <div className="container">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
          {overviewDetails.map((overview: OverviewCardProps, i) => (
            <OverViewCard key={i} details={overview} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
