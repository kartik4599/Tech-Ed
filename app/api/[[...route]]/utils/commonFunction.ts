import { sign } from "hono/jwt";
import { JWTPayload } from "hono/utils/jwt/types";
import bcryptjs from "bcryptjs";
import axios from "axios";

const salt = bcryptjs.genSaltSync(Number(process.env.SALT));

export const createPasswordHash = (password: string) =>
  bcryptjs.hashSync(password, salt);

export const verifyPassword = (password: string, hash: string) =>
  bcryptjs.compareSync(password, hash);

export const createJwtToken = async (payload: Object) => {
  const data: JWTPayload = { data: payload };
  return await sign(data, process.env.JWTSECRECT!);
};

export const razorPayRequest = () => {
  return axios.create({
    baseURL: "https://api.razorpay.com/v1/",
    auth: {
      username: process.env.RAZORPAY_KEY_ID!,
      password: process.env.RAZORPAY_SECRET!,
    },
  });
};
