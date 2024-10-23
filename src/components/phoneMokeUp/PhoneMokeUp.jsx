"use client";
import React from "react";
import RectangularComponent from "./ReactangularComponent.jsx";
import CircularComponent from "./CircularComponent.jsx";
import { useLinkDataStore } from "@/lib/store/linkData.js";
import One from "./conditionalStructure/One.jsx"
import Two from "./conditionalStructure/Two.jsx"
import Three from "./conditionalStructure/Three.jsx"
import Four from "./conditionalStructure/Four.jsx"

const PhoneMokeUp = () => {

  const data = useLinkDataStore((state) => state.data);
  console.log("data", Object.keys(data).length);
 let arr = Object.keys(data)
  let len = Object.keys(data).length;
  
  return (
    <section className="flex flex-col items-center gap-14 justify-center w-[237px] h-[514px]">
      <section className="flex flex-col items-center justify-center gap-6 relative top-0">
        <CircularComponent />
        <section className="flex flex-col items-center justify-center gap-3 ">
          <RectangularComponent width="160px" height="16px" />
          <RectangularComponent width="72px" height="8px" />
        </section>
      </section>
      {len >= 4 ?<Four arr={arr} data={data}/>:len==1?<One arr={arr}  data={data}/>:len==2?<Two arr={arr}  data={data}/>:len==3?<Three arr={arr}  data={data}/>:<section className="flex flex-col items-center justify-center gap-5 ">
   <RectangularComponent />
   <RectangularComponent />
   <RectangularComponent />
   <RectangularComponent />
</section>}
    </section>
  );
};

export default PhoneMokeUp;
