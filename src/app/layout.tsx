"use client";
import React from "react";
import Header from "./components/header";
import { OrderContext } from "./components/OrderContext";

function App() {
  const [order, setOrder] = React.useState({});
}

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [order, setOrder] = React.useState({}); // Initialize the order variable with an empty object

  return (
    <>
      <OrderContext.Provider value={{ order, setOrder }}>
        <html>
          <body>
            <Header />
            {children}
          </body>
        </html>
      </OrderContext.Provider>
    </>
  );
};

export default Layout;
