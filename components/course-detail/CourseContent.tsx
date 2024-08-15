"use client";
import { useState } from "react";
import CourseSections from "./CourseSections";
import VideoModel from "./VideoSection";

const CourseContent = () => {
  const [selectedVideo, setSelectedVideo] = useState("");

  return (
    <div className="bg-background text-foreground rounded-lg ">
      <h2 className="text-2xl font-bold mb-4">Course Content</h2>
      <CourseSections setSelectedVideo={setSelectedVideo} />
      <VideoModel title={selectedVideo} setSelectedVideo={setSelectedVideo} />
    </div>
  );
};

export default CourseContent;
