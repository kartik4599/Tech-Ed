import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { jwt } from "hono/jwt";
import { razorPayRequest } from "../utils/commonFunction";

const Payment = new Hono().basePath("/payment");

Payment.post(
  "/order",
  jwt({ secret: process.env.JWTSECRECT! }),
  async ({ req, json }) => {
    const { amount } = await req.json();
    if (!amount)
      throw new HTTPException(400, { message: "Need amount to create Order" });

    try {
      const { data } = await razorPayRequest().post("/orders", {
        amount,
        currency: "INR",
        receipt: "Creating order",
      });
      return json({ ...data, key: process.env.RAZORPAY_KEY_ID });
    } catch (e) {
      console.log(e);
      throw new HTTPException(400, { message: "Need amount to create Order" });
    }
  }
);

export default Payment;
