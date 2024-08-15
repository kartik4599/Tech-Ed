"use client";
import { useEffect, useState } from "react";

interface step {
  title: string;
  min: number;
  url: string;
}

const steps = [
  {
    title: "Welcome to the Course",
    min: 5,
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Course Overview",
    min: 10,
    url: "https://videos.pexels.com/video-files/5377684/5377684-uhd_2560_1440_25fps.mp4",
  },
  {
    title: "Prerequisites",
    min: 7,
    url: "https://videos.pexels.com/video-files/855411/855411-hd_1920_1080_25fps.mp4",
  },
  {
    title: "Getting Started",
    min: 12,
    url: "https://videos.pexels.com/video-files/7989443/7989443-hd_1920_1080_25fps.mp4",
  },
  {
    title: "Course Outline",
    min: 8,
    url: "https://videos.pexels.com/video-files/3129424/3129424-uhd_2560_1440_24fps.mp4",
  },
];
export default function VideoSection({ title }: { title: string }) {
  const [selectedVideo, setSelectedVideo] = useState<step | null>(null);

  useEffect(() => {
    const step = steps.find(({ title: value }) => value === title);
    if (step) setSelectedVideo(step);
  }, [title]);

  if (!selectedVideo)
    return (
      <div className="flex flex-col space-y-4 items-center justify-center w-full h-full text-center">
        <img src="/payment.svg" />
        <h1 className="text-4xl font-sans">Buy now and start learning</h1>
        <h5 className="text-sm font-mono w-1/2">
          Your small contrubution can help us to grow and empowers us to expand
          our offerings and create even more valuable courses.
        </h5>
      </div>
    );

  return (
    <div className="w-full max-w-7xl mx-auto grid grid-rows-[auto_auto_1fr] gap-6 p-4 md:p-6">
      <div className="rounded-xl overflow-hidden">
        <video
          className="w-full aspect-video"
          src={selectedVideo.url}
          controlsList="nodownload"
          controls
          autoPlay
        />
      </div>
      <div>
        <h1 className="text-2xl font-semibold">{selectedVideo.title}</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {steps.map((data, index) => (
          <div
            onClick={setSelectedVideo.bind(null, data)}
            className="cursor-pointer flex items-start gap-4 rounded p-3 bg-secondary hover:shadow-lg">
            <div>
              <div className="font-medium line-clamp-2">{data.title}</div>
              <div className="text-xs text-muted-foreground line-clamp-1">
                Section : Introduction (video-{index + 1})
              </div>
              <div className="text-xs text-muted-foreground line-clamp-1">
                {data.min} mins
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
