import client from "@/lib/DBClient";
import { Hono } from "hono";
import { jwt } from "hono/jwt";

const Course = new Hono().basePath("/courses");

Course.get("/", jwt({ secret: process.env.JWTSECRECT! }), async ({ json }) => {
  const courses = await client.course.findMany({
    orderBy: { createdAt: "asc" },
  });
  return json(courses);
});

// Course.post("/seed", async ({ req, json }) => {
//   const alldata = await Promise.all(
//     CourseData.map(
//       async (data) =>
//         await client.course.create({
//           data: {
//             title: data.title,
//             description: data.description,
//             hours: data.hour,
//             price: data.price,
//             imageUrl: data.url,
//           },
//         })
//     )
//   );
//   return json(alldata);
// });

export default Course;
