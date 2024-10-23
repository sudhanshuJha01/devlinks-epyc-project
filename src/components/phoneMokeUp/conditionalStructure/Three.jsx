import React from "react";
import RectangularComponent from "./../ReactangularComponent.jsx";
const Three = ({ data , arr}) => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 ">
      <RectangularComponent obj={data[arr[0]]} content={data[arr[0]].name} />
      <RectangularComponent obj={data[arr[1]]} content={data[arr[1]].name} />
      <RectangularComponent obj={data[arr[2]]} content={data[arr[2]].name} />

      <RectangularComponent />
    </section>
  );
};

export default Three;
