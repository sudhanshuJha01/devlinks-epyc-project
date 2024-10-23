import React from "react";
import RectangularComponent from "./../ReactangularComponent.jsx";

const Two = ({data , arr}) => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 ">
      <RectangularComponent obj={data} content={data[arr[0]].name.toUpperCase()} />
      <RectangularComponent obj={data} content={data[arr[1]].name.toUpperCase()} />


      <RectangularComponent />

      <RectangularComponent />
    </section>
  );
};

export default Two;
