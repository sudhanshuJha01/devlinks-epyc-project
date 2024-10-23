import React from "react";
import RectangularComponent from "./../ReactangularComponent.jsx";
const Four = ({data ,arr}) => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 ">
      <RectangularComponent obj={data} content={data[arr[0]].name.toUpperCase()} />
      <RectangularComponent obj={data} content={data[arr[1]].name.toUpperCase()} />
      <RectangularComponent obj={data} content={data[arr[2]].name.toUpperCase()} />
      <RectangularComponent obj={data} content={data[arr[3]].name.toUpperCase()} />
    </section>
  );
};

export default Four;
