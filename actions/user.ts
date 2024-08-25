"use server";

import { cookies } from "next/headers";
import { decode, sign } from "hono/jwt";
import client from "@/lib/DBClient";
import bcryptjs from "bcryptjs";
import { JWTPayload } from "hono/utils/jwt/types";
import { SignInForm, SignUpForm } from "@/lib/utils";
const salt = bcryptjs.genSaltSync(Number(process.env.SALT));

export const currentUser = async () => {
  const token = cookies().get("token");
  if (!token) throw new Error("Unauthorized");
  const id = decode(token.value).payload.data as number;
  const user = await client.user.findUnique({ where: { id } });
  if (!user) throw new Error("user not found");
  return user;
};

const createPasswordHash = (password: string) =>
  bcryptjs.hashSync(password, salt);

const verifyPassword = (password: string, hash: string) =>
  bcryptjs.compareSync(password, hash);

export const createJwtToken = async (payload: Object) => {
  const data: JWTPayload = { data: payload };
  return await sign(data, process.env.JWTSECRECT!);
};

export const signup = async ({ email, name, password }: SignUpForm) => {
  const exsitingUser = await client.user.findUnique({ where: { email } });
  if (exsitingUser) throw new Error("User already exists");

  const hashedPassword = createPasswordHash(password);

  await client.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { message: "SignUp Successful" };
};

export const signin = async ({ email, password }: SignInForm) => {
  const user = await client.user.findUnique({ where: { email } });
  if (!user) throw new Error("Invalid credentials");

  const isPasswordValid = verifyPassword(password, user.password);
  if (!isPasswordValid) throw new Error("Invalid credentials");

  const token = await createJwtToken(user.id);
  cookies().set("token", token);

  return { message: "SignIn Successful" };
};
