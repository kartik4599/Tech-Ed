import { Input } from "@/components/ui/input";
import { IoIosSearch } from "react-icons/io";
import { Badge } from "@/components/ui/badge";
import AllCourses from "@/components/AllCourses";

export default function Component() {
  const tags = ["Course 1", "Course 2", "Course 3", "Course 4", "Course 5"];

  return (
    <main className="flex-1 py-12 md:py-16 lg:py-20">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="grid gap-4">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Explore Our Courses
            </h1>
            <div className="hidden ml-auto relative flex-1 max-w-sm md:block">
              <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
                <IoIosSearch className="size-4" />
              </div>
              <Input
                type="search"
                placeholder="Search courses..."
                className="h-9 pl-8 rounded-md bg-muted focus:bg-primary/10"
              />
            </div>
          </div>
          <p className="text-muted-foreground md:text-xl">
            Find the perfect course to expand your knowledge and skills.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge className="cursor-pointer">Course 0</Badge>
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="cursor-pointer">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <AllCourses />
      </div>
    </main>
  );
}
