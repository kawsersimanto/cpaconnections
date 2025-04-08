export type eventType = {
  id: string;
  title: string;
  location: string;
  image?: string;
  createdAt: string;
};

export type eventsType = {
  event: eventType;
};
