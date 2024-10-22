"use client";
import React from "react";
import RectangularComponent from "./ReactangularComponent.jsx";
import CircularComponent from "./CircularComponent.jsx";
import { useLinkDataStore } from "@/lib/store/linkData.js";

const PhoneMokeUp = ({ index }) => {
  const presentIndex = useLinkDataStore((state) => state.presentIndex);
  const data = useLinkDataStore((state) => state.data);
  console.log("dataLen", Object.keys(data).length);
  let len = Object.keys(data).length;
  const arr = Object.keys(data)
  
  return (
    <section className="flex flex-col items-center gap-14 justify-center w-[237px] h-[514px]">
      <section className="flex flex-col items-center justify-center gap-6 relative top-0">
        <CircularComponent />
        <section className="flex flex-col items-center justify-center gap-3 ">
          <RectangularComponent width="160px" height="16px" />
          <RectangularComponent width="72px" height="8px" />
        </section>
      </section>
      {len < 5 ? (
        <section className="flex flex-col items-center justify-center gap-5 ">
          {data["1"] ? (
            <RectangularComponent content={data["1"].name} />
          ) : (
            <RectangularComponent />
          )}
          {data["2"] ? (
            <RectangularComponent content={data["2"].name} />
          ) : (
            <RectangularComponent />
          )}
          {data["3"] ? (
            <RectangularComponent content={data["3"].name} />
          ) : (
            <RectangularComponent />
          )}
          {data["4"] ? (
            <RectangularComponent content={data["4"].name} />
          ) : (
            <RectangularComponent />
          )}
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center gap-5 overflow-y-scroll">
          {arr.map(item=>(
             <RectangularComponent content={data[item].name} />
          ))}
        </section>
      )}
    </section>
  );
};

export default PhoneMokeUp;
