"use client";
import "../globals.css";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../components/OrderContext"; // Import the context

export default function ReceiptsPage() {
  const { order } = useContext(OrderContext); // Access the order from the context
  const [localOrder, setLocalOrder] = useState(null);

  useEffect(() => {
    // Get the order from local storage when the component mounts
    const storedOrder = localStorage.getItem("order");
    if (storedOrder) {
      setLocalOrder(JSON.parse(storedOrder));
    }
  }, []);

  return (
    <div>
      <Link href="../">
        <button className="button button-home">Back to home</button>
      </Link>
      <div className="container-wrapper">
        <div className="container receipt-container">
          <h2>Receipt</h2>
          <p>
            Dish:{" "}
            {(order as any)?.dish?.name || (localOrder as any)?.dish?.name}
          </p>
          <p>
            Drinks:{" "}
            {(order as any)?.drinks
              ?.map((drink: { name: any }) => drink.name)
              .join(", ") ||
              (localOrder as any)?.drinks
                ?.map((drink: { name: any }) => drink.name)
                .join(", ")}
          </p>
          <p>
            Date:{" "}
            {(order as any)?.date?.toLocaleDateString() ||
              new Date((localOrder as any)?.date)?.toLocaleDateString()}
          </p>
          <p>Time: {(order as any)?.time || (localOrder as any)?.time}</p>
          <p>People: {(order as any)?.people || (localOrder as any)?.people}</p>
          <p>Email: {(order as any)?.email || (localOrder as any)?.email}</p>
          <p>Thank you for your order</p>
        </div>
      </div>
    </div>
  );
}
