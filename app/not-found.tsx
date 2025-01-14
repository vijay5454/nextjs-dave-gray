import Link from "next/link";
import React from "react";

export const NotFound = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center w-full flex-col">
      <h1 className="text-2xl font-semibold">Page Not Found</h1>
      <Link href="/" className="underline">
        Click here to go to home page.
      </Link>
    </div>
  );
};

export default NotFound;
