"use client";
import React from "react";

const CardContainer = ({ children ,className}) => {
  return (
    <section
      className={`mt-6 p-5 w-full rounded-lg    h-[230px] bg-[#FAFAFA] ${className}`}
      
    >
        { children }
    </section>
  );
};

export default CardContainer;
