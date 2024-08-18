"use client";
import { createPaymentOrder } from "@/lib/services";
import { useCallback, useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import useRazorpay from "react-razorpay";
import { Button } from "./ui/button";

const PaymentButton = ({ amount }: { amount: number }) => {
  const [Razorpay, isLoaded] = useRazorpay();
  const [loading, setLoading] = useState(false);

  const handlePayment = useCallback(async () => {
    try {
      setLoading(true);
      const order = await createPaymentOrder(amount * 100);
      console.log(order);
      const options = {
        key: order.key,
        amount: order.amount.toString(),
        currency: "INR",
        name: "AR Education",
        description: "Course Fee's",
        order_id: order.id,
        handler: (res: any) => {
          console.log(res);
        },
        theme: {
          color: "#0f172a",
        },
      };

      const rzpay = new Razorpay(options);
      rzpay.open();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [Razorpay, amount]);

  return (
    <Button
      onClick={handlePayment}
      disabled={loading || !isLoaded}
      className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-md font-semibold text-lg">
      <div className="flex items-center justify-center gap-3">
        {loading ? (
          <>
            <FaSpinner className="animate-spin text-xl mx-2" />
            Signing In...
          </>
        ) : (
          <>
            <span>Pay</span>
            <span>₹{amount}.00</span>
          </>
        )}
      </div>
    </Button>
  );
};

export default PaymentButton;
