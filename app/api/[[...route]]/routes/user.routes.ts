import client from "@/lib/DBClient";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import {
  createJwtToken,
  createPasswordHash,
  verifyPassword,
} from "../utils/commonFunction";
import { jwt } from "hono/jwt";
import { setCookie } from "hono/cookie";
const User = new Hono().basePath("/auth");

User.post("/signup", async ({ json, req }) => {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password)
      throw new Error("All fields are required");

    const exsitingUser = await client.user.findUnique({ where: { email } });
    if (exsitingUser) throw new Error("User already exists");

    const hashedPassword = createPasswordHash(password);

    const user = await client.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const token = await createJwtToken(user.id);

    return json({ message: "SignUp Successful", token });
  } catch (e: any) {
    throw new HTTPException(400, { message: e.message });
  }
});

User.post("/signin", async (c) => {
  try {
    const { email, password } = await c.req.json();

    if (!email || !password) throw new Error("All fields are required");

    const user = await client.user.findUnique({ where: { email } });
    if (!user) throw new Error("Invalid credentials");

    const isPasswordValid = verifyPassword(password, user.password);
    if (!isPasswordValid) throw new Error("Invalid credentials");

    const token = await createJwtToken(user.id);
    setCookie(c, "token", token);

    return c.json({ message: "SignIn Successful", token });
  } catch (e: any) {
    throw new HTTPException(400, { message: e.message });
  }
});

User.get(
  "/me",
  jwt({ secret: process.env.JWTSECRECT! }),
  async ({ get, json }) => {
    try {
      const { data: userId } = get("jwtPayload") as { data: number };

      const user = await client.user.findUnique({
        where: { id: userId },
        select: { id: true, name: true, email: true },
      });

      if (!user) throw new Error("Client not found");

      return json({ data: user });
    } catch (e: any) {
      throw new HTTPException(400, { message: e.message });
    }
  }
);

export default User;
