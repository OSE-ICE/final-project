import React from "react";
import Header from "@/components/header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <html>
        <body>
          <Header />
          {children}
        </body>
      </html>
    </>
  );
};

export default Layout;
