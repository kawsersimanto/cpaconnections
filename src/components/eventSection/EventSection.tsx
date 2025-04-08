import { eventType } from "@/types/event";
import Event from "./Event";

type EventsProp = {
  events: eventType[];
};

const EventSection = ({ events }: EventsProp) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
      {events?.map((event: eventType) => (
        <Event key={event?.id} event={event} />
      ))}
    </div>
  );
};

export default EventSection;
