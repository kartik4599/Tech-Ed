import * as argon from "argon2";
import { sign } from "hono/jwt";
import { JWTPayload } from "hono/utils/jwt/types";

export const createPasswordHash = async (password: string) =>
  await argon.hash(password);

export const verifyPassword = async (password: string, hash: string) =>
  await argon.verify(hash, password);

export const createJwtToken = async (payload: Object) => {
  const data: JWTPayload = { data: payload };
  return await sign(data, "secret");
};
