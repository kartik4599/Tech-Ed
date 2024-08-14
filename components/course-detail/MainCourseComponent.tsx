import { MdCurrencyRupee } from "react-icons/md";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface MainCourseComponentProps {
  data?: {
    title: string;
    description: string;
    hour: number;
    price: number;
    url: string;
  };
}

const MainCourseComponent = ({ data }: MainCourseComponentProps) => {
  let payload = data || {
    title: "Mastering React: Build Powerful Web Apps",
    description:
      "Dive deep into React, the popular JavaScript library for building user interfaces. Learn how to create dynamic, responsive web applications from scratch, and become a proficient React developer.",
    hour: 0,
    price: 99,
    url: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QXJ0aWZpY2lhbCUyMEludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
      <div className="space-y-4 md:space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          {payload.title}
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          {payload.description}
        </p>
        <Button className="px-6 py-2">
          <span className="text-xl">Buy</span>{" "}
          <Separator orientation="vertical" className="mx-4" />{" "}
          <MdCurrencyRupee />
          <span className="text-sm">{payload.price}</span>
        </Button>
      </div>
      <img
        src={payload.url}
        alt="React Course"
        width="800"
        height="500"
        className="rounded-lg object-cover aspect-[4/3]"
      />
    </div>
  );
};

export default MainCourseComponent;
