import { FaClock, FaTags } from "react-icons/fa";
import { Card, CardContent } from "./ui/card";
import { MdCurrencyRupee } from "react-icons/md";
import { Button } from "./ui/button";

interface CourseCardProps {
  item: {
    title: string;
    description: string;
    hour: number;
    price: number;
    url: string;
  };
}

const CourseCard = ({ item }: CourseCardProps) => {
  return (
    <Card>
      <CardContent className="shadow-lg">
        <div className="grid gap-2 pt-4">
          <h3 className="text-xl font-bold min-h-[55px]">{item.title}</h3>
          <img
            src={item.url}
            width={"100%"}
            height={200}
            alt="Course Image"
            className="rounded-md"
            style={{ aspectRatio: "300/200", objectFit: "cover" }}
          />
          <p className="text-muted-foreground line-clamp-2">
            {item.description}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FaClock className="size-4" />
            <span>{item.hour} hours</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FaTags className="size-4" />
            <div className="flex items-center">
              <MdCurrencyRupee />
              <span>{item.price}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              View
            </Button>
            <Button size="sm">Enroll</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;