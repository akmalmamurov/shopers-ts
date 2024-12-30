"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { collection, deleteDoc, doc, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/firebase";
interface Order {
  id: string;
  value: {
    amount: number;
  };
}
const Orders = () => {
  const { data: session } = useSession();
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);

  const toggleDetails = (orderId: string) => {
    setExpandedOrderId((prev) => (prev === orderId ? null : orderId));
  };
  const [ordersSnapshot, loading] = useCollection(
    session &&
      query(collection(db, "users", session.user?.email as string, "orders"))
  );
  const orders = ordersSnapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Order[];
  return <div>Orders</div>;
};

export default Orders;
