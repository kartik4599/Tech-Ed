"use server";

import client from "@/lib/DBClient";
import { currentUser } from "./user";

export const getAllCourses = async () => {
  return await client.course.findMany({
    orderBy: { createdAt: "asc" },
  });
};

export const getCourseById = async (id: number) => {
  const user = await currentUser();
  const course = await client.course.findUnique({ where: { id } });
  if (!course) throw new Error("Course not found");

  const paidcourse = await client.user_Courses.findUnique({
    where: { userId_courseId: { courseId: id, userId: user.id } },
  });

  return { ...course, isPaid: !!paidcourse };
};
