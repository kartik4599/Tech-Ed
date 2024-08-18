import client from "@/lib/DBClient";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { jwt } from "hono/jwt";
import { razorPayRequest } from "../utils/commonFunction";

const Payment = new Hono().basePath("/payment");

Payment.post(
  "/order",
  jwt({ secret: process.env.JWTSECRECT! }),
  async ({ req, json, get }) => {
    const { id, amount } = await req.json();
    const { data: userId } = get("jwtPayload") as { data: number };

    if (!amount)
      throw new HTTPException(400, { message: "Need amount to create Order" });

    const course = await client.course.findUnique({ where: { id } });
    if (!course) throw new HTTPException(400, { message: "Course not found" });

    try {
      const { data } = await razorPayRequest().post("/orders", {
        amount,
        currency: "INR",
        receipt: "Creating order",
      });

      await client.payment.create({
        data: { orderId: data.id, courseId: course.id, userId },
      });

      return json({ ...data, key: process.env.RAZORPAY_KEY_ID });
    } catch (e) {
      throw new HTTPException(400, {
        message: "Error Occured while creating payment order",
      });
    }
  }
);

Payment.post(
  "/receive",
  jwt({ secret: process.env.JWTSECRECT! }),
  async ({ json, req }) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      await req.json();

    const payment = await client.payment.findUnique({
      where: { orderId: razorpay_order_id },
    });
    if (!payment) {
      throw new HTTPException(400, {
        message: "Payment Record not found",
      });
    }

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

    return json({ msg: "Payment Successfull" });
  }
);

export default Payment;
