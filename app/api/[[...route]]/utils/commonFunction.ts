import { sign } from "hono/jwt";
import { JWTPayload } from "hono/utils/jwt/types";
import bcryptjs from "bcryptjs";

const salt = bcryptjs.genSaltSync(Number(process.env.SALT));

export const createPasswordHash = (password: string) =>
  bcryptjs.hashSync(password, salt);

export const verifyPassword = (password: string, hash: string) =>
  bcryptjs.compareSync(password, hash);

export const createJwtToken = async (payload: Object) => {
  const data: JWTPayload = { data: payload };
  return await sign(data, process.env.JWTSECRECT!);
};
