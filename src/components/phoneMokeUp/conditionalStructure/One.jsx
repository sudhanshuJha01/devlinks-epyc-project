import React from "react";
import RectangularComponent from "./../ReactangularComponent.jsx";

const One = ({data ,arr}) => {

  return (
    <section className="flex flex-col items-center justify-center gap-5 ">
      <RectangularComponent obj={data[arr[0]]} content={data[arr[0]].name} />

      <RectangularComponent />

      <RectangularComponent />


      <RectangularComponent />
    </section>
  );
};

export default One;
