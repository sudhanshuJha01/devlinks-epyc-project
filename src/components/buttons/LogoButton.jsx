"use client";
import Image from "next/image";
const LogoButton = ({ className, label, imgHref, imageClass, type, w, h ,textClass }) => {
  return (
    <div className={` ${className} flex items-center justify-center `}>
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
