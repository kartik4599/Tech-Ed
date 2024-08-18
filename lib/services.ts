import axios from "axios";
import { SignInForm, SignUpForm } from "./utils";
const baseURL = "/api";

export const unProtectedRequest = axios.create({ baseURL });
export const protectedRequest = () => {
  const headers = { Authorization: `Bearer ${localStorage?.getItem("token")}` };
  return axios.create({
    baseURL,
    headers,
  });
};

// User Api's
export const createAccount = async (payload: SignUpForm) => {
  const { data } = await unProtectedRequest.post("/auth/signup", payload);
  return data;
};

export const loginAccount = async (payload: SignInForm) => {
  const { data } = await unProtectedRequest.post("/auth/signin", payload);
  return data;
};

export const getOwnData = async () => {
  const { data } = await protectedRequest().get("/auth/me");
  return data;
};

// Payment Api's
export const createPaymentOrder = async (amount: number) => {
  const { data } = await protectedRequest().post("/payment/order", { amount });
  return data;
};

export const fetcher = (path: string) =>
  protectedRequest()
    .get(path)
    .then(({ data }) => data);
