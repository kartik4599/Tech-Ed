"use client";
import { useState } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Dialog, DialogContent } from "../ui/dialog";
import VideoSection from "./VideoSection";

const VideoModel = ({
  setModelState,
  title,
}: {
  title: string;
  setModelState: () => void;
}) => (
  <Dialog open={!!title} onOpenChange={setModelState}>
    <DialogContent className="w-screen h-screen max-h-screen max-w-full overflow-y-auto flex flex-col flex-grow gap-0">
      <VideoSection title={title} />
    </DialogContent>
  </Dialog>
);

const CourseContent = () => {
  const [selectedVideo, setSelectedVideo] = useState("");

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
        <Accordion type="single" collapsible className="w-full">
          {data.map((item, index) => {
            return (
              <AccordionItem value={item.title} key={index}>
                <AccordionTrigger className="flex items-center justify-between w-full bg-muted rounded-md px-3 py-3 my-2 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <span className="text-muted-foreground text-sm">
                      ({item.steps.length} Lessons)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-2 px-3">
                  {item.steps.map((data, index) => (
                    <div
                      className="flex items-center justify-between"
                      key={index}
                      onClick={setSelectedVideo.bind(null, data.title)}>
                      <div className="flex items-center space-x-2 cursor-pointer">
                        <IoPlayCircleOutline className="size-5 text-muted-foreground" />
                        <span>{data.title}</span>
                      </div>
                      <span className="text-muted-foreground text-xs">
                        {data.min} min
                      </span>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
      <VideoModel
        title={selectedVideo}
        setModelState={() => setSelectedVideo("")}
      />
    </div>
  );
};

export default CourseContent;
