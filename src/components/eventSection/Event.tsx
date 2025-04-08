import { eventsType } from "@/types/event";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";

const Event = ({ event }: eventsType) => {
  const { day, month } = formatDate(
    event?.createdAt || "2025-03-19T03:59:22.624Z"
  );

  return (
    <Link
      href={`/events/${event?.id}`}
      className="p-4 rounded-[8px] border group hover:bg-primary transition-colors duration-500 ease-in-out border-[#EFEFEF] flex flex-col gap-6"
    >
      <div className="relative overflow-hidden rounded-[8px]">
        <Image
          src={event?.image || "/default.png"}
          width={500}
          height={230}
          className="object-cover w-full sm:h-[230px] h-[180px] transition-transform duration-900 ease-in-out group-hover:scale-110"
          alt={event?.title || "Woocommerce Placeholder image"}
        />
        <div className="absolute w-[52px] h-[66px] p-[5px] bg-primary border border-white flex flex-col justify-center items-center rounded-[2px] top-[6px] right-[6px]">
          <h2 className="text-white text-sm">{month}</h2>
          <p className="text-white text-3xl">{day}</p>
        </div>
      </div>
      <div>
        <h2 className="md:text-2xl text-xl font-bold mb-[22px] transition-colors duration-300 ease-in-out group-hover:text-white">
          {event?.title || "Title is not set"}
        </h2>
        <div className="flex items-center gap-[10px]">
          <Image
            src="/markers.svg"
            width={12}
            height={12}
            className="object-contain"
            alt="Map Marker"
          />
          <p className="text-gray-200 transition-colors duration-300 ease-in-out group-hover:text-white">
            {event?.location || "Location is not set"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Event;
