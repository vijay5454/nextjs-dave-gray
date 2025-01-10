import React from "react";
import Header from "@/components/Header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default HomeLayout;
