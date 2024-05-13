export type Provision = {
  id: string;
  name: string;
  description: string;
  imageSource: string;
  price: number;
  category: string;
};

export type Dish = Provision & {
  cousine: string;
};

export type Drink = Provision & {
  brewer: string;
};

export type OrderType = {
  id: number;
  email: string;
  dish: Dish;
  drinks: Drink[];
  count: number;
  date: Date;
};

const getOrders = async (): Promise<OrderType[]> => {
  const res = await fetch("http://localhost:3001/api/orders");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const response = await res.json();
  console.log("getting expenses", response);
  return response;
};


export const api = {
  getOrders,
};
