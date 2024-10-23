"use client";
import Image from "next/image";
const LogoButton = ({ className, label, imgHref, imageClass, type, w, h ,textClass , onClick }) => {
  return (
    <div 
    onClick={onClick}
    className={` ${className} flex items-center justify-center cursor-pointer hover:bg-[#EFEBFF] active:bg-[#EFEBFF] focus:bg-[#EFEBFF]  `}>
        <Image
          src={imgHref} // Ensure this path is correct
          alt={type}
          width={w}
          height={h}
          className={imageClass}
        />
        <div className={textClass}>
        {label}
        </div>
    </div>
  );
};

export default LogoButton;
