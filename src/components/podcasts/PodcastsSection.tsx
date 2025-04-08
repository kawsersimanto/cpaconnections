import Podcast from "./Podcast";

const PodcastsSection = () => {
  return (
    <section className="md:pt-[100px] md:pb-[50px] py-[60px]">
      <div className="container">
        <div className="flex flex-col justify-center items-center lg:mb-[56px] mb-10">
          <h2 className="font-bold xl:text-[54px] text-[32px] mb-4 text-center">
            Upcoming Events and Activities
          </h2>
          <p className="text-gray-100 font-normal md:text-base text-sm text-center max-w-[1043px]">
            BWEAL Inc. is a non-profit organization committed to providing the
            community with diverse tools that encourage and promote wealth. Our
            organization&apos;s mission is to provide tools, knowledge, and
            connections that empower people and help build wealth in the
            community.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          <Podcast />
          <Podcast />
          <Podcast />
          <Podcast />
        </div>
      </div>
    </section>
  );
};

export default PodcastsSection;
