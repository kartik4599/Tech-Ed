"use server";

import client from "@/lib/DBClient";
import { decode } from "hono/jwt";
import { cookies } from "next/headers";

export const currentUser = async () => {
  const token = cookies().get("token");
  if (!token) throw new Error("Unauthorized");
  const id = decode(token.value).payload.data as number;
  const user = await client.user.findUnique({ where: { id } });
  if (!user) throw new Error("user not found");
  return user;
};

export const getAllCourses = async () => {
  return await client.course.findMany();
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
