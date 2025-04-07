import book from "@/assets/overview/book.svg";
import money from "@/assets/overview/money.svg";
import ribbon from "@/assets/overview/ribbon.svg";
import vote from "@/assets/overview/vote.svg";

export interface OverviewCardProps {
  icon: string;
  title: string;
  description: string;
}

export const overviewDetails: OverviewCardProps[] = [
  {
    icon: book,
    title: "Virtual Library",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pharetra lectus adipiscing mattis tortor ultrices bibendum mus egestas. Id posuere tincidunt quam orci tincidunt eget tellus.",
  },
  {
    icon: ribbon,
    title: "Membership Benefits",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pharetra lectus adipiscing mattis tortor ultrices bibendum mus egestas. Id posuere tincidunt quam orci tincidunt eget tellus.",
  },
  {
    icon: vote,
    title: "Vote for the best podcast",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pharetra lectus adipiscing mattis tortor ultrices bibendum mus egestas. Id posuere tincidunt quam orci tincidunt eget tellus.",
  },
  {
    icon: money,
    title: "Fundraiser Events",
    description:
      "Lorem ipsum dolor sit amet consectetur. Pharetra lectus adipiscing mattis tortor ultrices bibendum mus egestas. Id posuere tincidunt quam orci tincidunt eget tellus.",
  },
];
