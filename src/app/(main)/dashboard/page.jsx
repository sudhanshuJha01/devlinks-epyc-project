import React from "react";
import MokeUpPhone from "../components/leftCard/MokeUpPhone.jsx";
import CoustomCard from "../components/rightCard/CustomCard.jsx";
const dashboard = () => {
  return (
    <main className="w-full h-[90%] flex max-md:flex-col ">
      <MokeUpPhone/>
      <CoustomCard/>
    </main>
  );
};

export default dashboard;
