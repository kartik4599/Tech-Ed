"use client";

import React from "react";
import CourseCard from "./CourseCard";
import useSwr from "swr";
import { fetcher } from "@/lib/services";
import { Course } from "@prisma/client";
import { Skeleton } from "./ui/skeleton";

const AllCourses = () => {
  const { data, isLoading, error } = useSwr<Course[]>("/courses", fetcher, {
    fallbackData: [],
  });

  if (isLoading || error) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Skeleton className="h-[400px] w-[300px] rounded-xl" />
        <Skeleton className="h-[400px] w-[300px] rounded-xl" />
        <Skeleton className="h-[400px] w-[300px] rounded-xl" />
        <Skeleton className="h-[400px] w-[300px] rounded-xl" />
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data?.map((item, index) => (
        <CourseCard key={index} course={item} />
      ))}
    </div>
  );
};

export default AllCourses;
