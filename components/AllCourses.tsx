import React from "react";
import CourseCard from "./CourseCard";
import { getAllCourses } from "@/actions/courses";

const AllCourses = async () => {
  const courses = await getAllCourses();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {courses?.map((item, index) => (
        <CourseCard key={index} course={item} />
      ))}
    </div>
  );
};

export default AllCourses;
