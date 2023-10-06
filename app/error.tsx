"use client";
import React from "react";

const errorPage = () => {
  return (
    <div className="alert alert-error h-screen absolute top-0 flex justify-center items-center text-7xl">
      <span>Error! Task failed successfully.</span>
    </div>
  );
};

export default errorPage;
