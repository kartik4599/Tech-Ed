"use client";

import { createPaymentOrder, recivePaymentOrder } from "@/lib/services";
import { useCallback, useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import useRazorpay from "react-razorpay";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const PaymentButton = ({ id, amount }: { amount: number; id: number }) => {
  const routes = useRouter();

  const [Razorpay, isLoaded] = useRazorpay();
  const [loading, setLoading] = useState(false);
  const paymentHandler = async (res: any) => {
    try {
      setLoading(true);
      await recivePaymentOrder(res);
      routes.refresh()
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = useCallback(async () => {
    try {
      setLoading(true);
      const order = await createPaymentOrder(id, amount * 100);
      const options = {
        key: order.key,
        amount: order.amount.toString(),
        currency: "INR",
        name: "AR Education",
        description: "Course Fee's",
        order_id: order.id,
        handler: paymentHandler,
        theme: {
          color: "#0f172a",
        },
      };

      const rzpay = new Razorpay(options);
      rzpay.open();
    } catch (e) {
      console.log(e);
      toast.error("Error Occured in Process", {
        description: "Please try again",
        closeButton: true,
      });
    } finally {
      setLoading(false);
    }
  }, [Razorpay, amount, id, paymentHandler]);

  return (
    <Button
      onClick={handlePayment}
      disabled={loading || !isLoaded}
      className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-md font-semibold text-lg"
    >
      <div className="flex items-center justify-center gap-3">
        {loading ? (
          <>
            <FaSpinner className="animate-spin text-xl mx-2" />
            Loading...
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
