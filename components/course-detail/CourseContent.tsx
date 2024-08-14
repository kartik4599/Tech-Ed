import { FaChevronRight } from "react-icons/fa";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { IoPlayCircleOutline } from "react-icons/io5";

const CourseContent = () => {
  const data = [
    {
      title: "Introduction",
      steps: [
        { title: "Welcome to the Course", min: 5 },
        { title: "Course Overview", min: 10 },
        { title: "Prerequisites", min: 7 },
        { title: "Getting Started", min: 12 },
        { title: "Course Outline", min: 8 },
      ],
    },
    {
      title: "Fundamentals",
      steps: [
        { title: "Variables and Data Types", min: 15 },
        { title: "Operators and Expressions", min: 18 },
        { title: "Control Flow", min: 20 },
        { title: "Functions", min: 25 },
        { title: "Arrays", min: 22 },
        { title: "Objects", min: 28 },
        { title: "Modules", min: 19 },
        { title: "Asynchronous JavaScript", min: 30 },
        { title: "Error Handling", min: 17 },
        { title: "DOM Manipulation", min: 22 },
        { title: "Events", min: 19 },
        { title: "Browser APIs", min: 25 },
      ],
    },
    {
      title: "Advanced Concepts",
      steps: [
        { title: "Prototypes and Inheritance", min: 25 },
        { title: "Closures", min: 22 },
        { title: "ES6 and Beyond", min: 30 },
        { title: "Functional Programming", min: 35 },
        { title: "Promises and Async/Await", min: 28 },
        { title: "Modules and Bundling", min: 32 },
        { title: "Testing and Debugging", min: 40 },
        { title: "Performance Optimization", min: 35 },
      ],
    },
    {
      title: "Project Development",
      steps: [
        { title: "Project Planning", min: 30 },
        { title: "Version Control with Git", min: 35 },
        { title: "Project Structure", min: 25 },
        { title: "Building the UI", min: 45 },
        { title: "Handling User Interactions", min: 40 },
        { title: "State Management", min: 50 },
        { title: "Data Fetching and APIs", min: 40 },
        { title: "Routing and Navigation", min: 35 },
      ],
    },
  ];

  return (
    <div className="bg-background text-foreground rounded-lg  ">
      <h2 className="text-2xl font-bold mb-4">Course Content</h2>
      <div className="space-y-4">
        {data.map((item, index) => {
          return (
            <Collapsible key={index}>
              <CollapsibleTrigger className="flex items-center justify-between w-full bg-muted rounded-md px-4 py-3 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <FaChevronRight className="w-5 h-5 transition-transform duration-300 transform-gpu" />
                  <h3 className="text-lg font-medium">{item.title}</h3>
                </div>
                <span className="text-muted-foreground text-sm">
                  {item.steps.length} Lessons
                </span>
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-8 pt-4 space-y-2">
                {item.steps.map((data, index) => (
                  <div
                    className="flex items-center justify-between"
                    key={index}
                  >
                    <div className="flex items-center space-x-2">
                      <IoPlayCircleOutline className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{data.title}</span>
                    </div>
                    <span className="text-muted-foreground text-xs">
                      {data.min} min
                    </span>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </div>
    </div>
  );
};

export default CourseContent;
