import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const RectangularComponent = ({ content, width = '237px', height = '44px', bgColor = '#EEEEEE', borderColor = '#333',className ,obj }) => {
  console.log("obj ",obj);
 
  return (
    <Link
     href={`${obj?.url}`}
     target='main'
      className={ `cursor-pointer flex items-center justify-around rounded-lg w-[237px] 2-[44px] ${className} text-white text-lg`}
      style={{
        width: width,
        height: height,
        backgroundColor: obj?.color || bgColor,
        borderColor: borderColor,
      }}
    >
       {obj?.icon ? <Image
          src={obj?.icon} 
          alt={obj?.value}
          width={20}
          height={20}
         
        />:null}
      {content}
       {obj?.icon ? <Image
          src="/images/icon-arrow-right.svg"
          alt="arrow"
          width={20}
          height={20}
         
        />:null}
    </Link>
  );
};

export default RectangularComponent;
