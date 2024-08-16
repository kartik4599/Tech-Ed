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
