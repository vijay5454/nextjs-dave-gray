import React from "react";
import Header from "@/components/Header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto animate-slide">
      <Header />
      {children}
    </div>
  );
};

export default HomeLayout;
