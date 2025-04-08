import Image from "next/image";

type testimonialProps = {
  name: string;
  designation: string;
  image?: string;
  description: string;
};

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: testimonialProps;
}) => {
  return (
    <div>
      <div className="px-4 pt-4 pb-[63px] rounded-[8px] bg-white relative">
        <div>
          <Image
            src="/rating.svg"
            width={64}
            height={64}
            className="object-contain w-[120px] h-auto mb-5"
            alt="Half Square"
          />
          <div>
            <p className="text-gray-100 font-normal md:text-base text-sm md:mb-[58px] mb-[30px]">
              {testimonial?.description || "Not Found"}
            </p>
            <div className="flex items-center gap-2">
              <Image
                src={testimonial?.image || "/default.png"}
                width={44}
                height={44}
                className="object-contain w-[44px] h-[44px] p-[2px] border border-primary rounded-full"
                alt={testimonial?.name || "Not Found"}
              />
              <div>
                <h3 className="text-[18px]">
                  {testimonial?.name || "Not set"}
                </h3>
                <h4 className="text-[12px] text-primary">
                  {testimonial?.designation || "Not set"}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/half-square.svg"
          width={64}
          height={64}
          className="object-contain w-[64px] h-[64px] absolute top-[6px] right-[6px]"
          alt="Half Square"
        />
        <Image
          src="/comment.svg"
          width={100}
          height={89}
          className="object-contain w-[100px] h-[89px] absolute bottom-[34px] right-[129px]"
          alt="Comment Icon"
        />
      </div>
      <Image
        src="/bar.png"
        width={455}
        height={10}
        className="w-[90%] mx-auto object-contain"
        alt="Divider Bar"
      />
    </div>
  );
};

export default TestimonialCard;
