import React from "react";
import MokeUpPhone from "../components/leftCard/MokeUpPhone.jsx";
import CoustomCard from "../components/rightCard/CustomCard.jsx";
const dashboard = () => {
  return (
    <main className="w-full flex max-md:flex-col justify-center items-center">
      <MokeUpPhone/>
      <CoustomCard/>
    </main>
  );
};

export default dashboard;
