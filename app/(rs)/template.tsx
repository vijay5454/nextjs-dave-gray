import React from "react";

const HomeTemplate = ({ children }: { children: React.ReactNode }) => {
  return <div className="animate-appear">{children}</div>;
};

export default HomeTemplate;
