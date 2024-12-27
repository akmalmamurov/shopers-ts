"use client";

import { resetCart } from "@/redux/shoppersSlice";
import { StoreState } from "@/type";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { HiCheckCircle } from "react-icons/hi";

interface Props {
  id: string;
}
const SuccessContainer = ({ id }: Props) => {
  const { cart } = useSelector((state: StoreState) => state?.shoppers);
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const [totalAmt, setTotalAmt] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let price = 0;
    cart.map((item) => {
      price += item?.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [cart]);

  const handleSaveOrder = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/saveorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart,
          email: session?.user?.email,
          id,
          totalAmt,
        }),
      });
      const data = await response.json();
      if (data?.success) {
        dispatch(resetCart());
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [cart, session?.user?.email, id, totalAmt, dispatch]);

  // handleSaveOrderni chaqirish uchun useEffect
  useEffect(() => {
    if (session?.user && cart?.length) {
      handleSaveOrder();
    }
  }, [session?.user, cart?.length, handleSaveOrder]);
  return (
    <div>
      {loading ? (
        <Loader title="Payment is processing... Please do not press back button" />
      ) : (
        <div className="bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4 py-28">
          <div className="max-w-md w-full space-y-8 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-green-100 rounded-full "></div>
              </div>
              <div className="relative">
                <HiCheckCircle className="mx-auto h-24 w-24 text-green-500" />
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Success!
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessContainer;
