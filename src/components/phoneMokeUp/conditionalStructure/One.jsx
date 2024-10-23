import React from "react";
import RectangularComponent from "./../ReactangularComponent.jsx";

const One = ({data ,arr}) => {

  return (
    <section className="flex flex-col items-center justify-center gap-5 ">
      <RectangularComponent obj={data} content={data[arr[0]].name.toUpperCase()} />

      <RectangularComponent />

      <RectangularComponent />


      <RectangularComponent />
    </section>
  );
};

export default One;
