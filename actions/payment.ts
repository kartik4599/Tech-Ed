"use server";

import client from "@/lib/DBClient";
import axios from "axios";
import { currentUser } from "./user";

const razorPayRequest = () => {
  return axios.create({
    baseURL: "https://api.razorpay.com/v1/",
    auth: {
      username: process.env.RAZORPAY_KEY_ID!,
      password: process.env.RAZORPAY_SECRET!,
    },
  });
};

export const createPaymentOrder = async (id: number, amount: number) => {
  const user = await currentUser();

  const course = await client.course.findUnique({ where: { id } });
  if (!course) throw new Error("Course not found");

  const { data } = await razorPayRequest().post("/orders", {
    amount,
    currency: "INR",
    receipt: "Creating order",
  });

  await client.payment.create({
    data: { orderId: data.id, courseId: course.id, userId: user.id },
  });

  return { ...data, key: process.env.RAZORPAY_KEY_ID };
};

export const recivePaymentOrder = async ({
  razorpay_payment_id,
  razorpay_order_id,
  razorpay_signature,
}: {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}) => {
  const payment = await client.payment.findUnique({
    where: { orderId: razorpay_order_id },
  });
  if (!payment) throw new Error("Course not found");

  await client.payment.update({
    where: { orderId: payment.orderId },
    data: {
      paymentStatus: "Paid",
      payment_id: razorpay_payment_id,
      signature: razorpay_signature,
    },
  });

  await client.user_Courses.create({
    data: { courseId: payment.courseId, userId: payment.userId },
  });

  return { msg: "Payment Successfull" };
};
