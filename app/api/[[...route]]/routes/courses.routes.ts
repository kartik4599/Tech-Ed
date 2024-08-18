import client from "@/lib/DBClient";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { jwt } from "hono/jwt";

const Course = new Hono().basePath("/courses");

Course.get("/", jwt({ secret: process.env.JWTSECRECT! }), async ({ json }) => {
  const courses = await client.course.findMany({
    orderBy: { createdAt: "asc" },
  });
  return json(courses);
});

Course.get(
  "/:id",
  jwt({ secret: process.env.JWTSECRECT! }),
  async ({ json, req }) => {
    const id = Number(req.param("id"));

    const course = await client.course.findUnique({
      where: { id },
    });

    if (!course)
      throw new HTTPException(400, { message: "Did not found the course" });

    return json(course);
  }
);

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
