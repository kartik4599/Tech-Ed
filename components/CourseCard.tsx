import { FaClock, FaTags } from "react-icons/fa";
import { Card, CardContent } from "./ui/card";
import { MdCurrencyRupee } from "react-icons/md";
import { Button } from "./ui/button";
import Link from "next/link";
import { Course } from "@prisma/client";
import { FaArrowRight } from "react-icons/fa6";

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Card>
      <CardContent className="shadow-lg">
        <div className="grid gap-2 pt-4">
          <h3 className="text-xl font-bold min-h-[55px]">{course.title}</h3>
          {course.imageUrl && (
            <img
              src={course.imageUrl}
              width={"100%"}
              height={200}
              alt="Course Image"
              className="rounded-md"
              style={{ aspectRatio: "300/200", objectFit: "cover" }}
            />
          )}
          <p className="text-muted-foreground line-clamp-2">
            {course.description}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FaClock className="size-4" />
            <span>{course.hours} hours</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FaTags className="size-4" />
            <div className="flex items-center">
              <MdCurrencyRupee />
              <span>{course.price}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Link href={`/course/${course.id}`} className="w-full">
              <Button className="w-full space-x-2" variant="outline" size={"lg"}>
                <span className="text-lg">View</span>
                <FaArrowRight className="text-xl" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
