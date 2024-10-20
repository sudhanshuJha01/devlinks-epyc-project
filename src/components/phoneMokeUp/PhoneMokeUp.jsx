"use client";
import React from "react";
import RectangularComponent from '@/components/phoneMokeUp/ReactangularComponent.jsx';
import CircularComponent from './CircularComponent.jsx';
import { useLinkDataStore } from "@/lib/store/linkData.js";

const PhoneMokeUp = () => {
  const data = useLinkDataStore(state => state.data);
  console.log('data', data);

  return (
    <section className='flex flex-col items-center gap-14 justify-center w-[237px] h-[514px]' >
      <section className='flex flex-col items-center justify-center gap-6 relative top-0' >
        <CircularComponent />
        <section className='flex flex-col items-center justify-center gap-3 '>
          <RectangularComponent width='160px' height='16px' />
          <RectangularComponent width='72px' height='8px' />
        </section>
      </section>
      <section className='flex flex-col items-center justify-center gap-5 ' >
        {data.map((item, index) => (
          <RectangularComponent key={index} content={item} />
        ))}
      </section>
    </section>
  );
};

export default PhoneMokeUp;
