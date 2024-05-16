"use client";
import React from "react";
import { OrderType } from "../api";

type OrderContextType = {
  order: OrderType;
  setOrder: (order: OrderType) => void;
};

export const OrderContext = React.createContext<OrderContextType>({
  order: {},
  setOrder: (order: any) => {},
});
