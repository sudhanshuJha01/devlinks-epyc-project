"use client"
import Image from "next/image";
import LogoButton from "@/components/buttons/LogoButton.jsx";
import Button from "@/components/buttons/Button.jsx";
import Link from "next/link";
import { useState } from "react";

const Navigation = ({id}) => {
 const [copied , setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://devlinks-epyc-project-ln84.vercel.app/share/${id}`)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset the message after 2 seconds
      })
      .catch((err) => console.error('Failed to copy text: ', err));
  };


  return (
    <nav
      className="bg-white text-black p-4 pl-6  flex items-center
    justify-between
     rounded-lg  mb-3 w-full h-[10%] "
    >
      <figure>
        <Image
          src="images/logo-devlinks-large.svg"
          alt="Devlinks Logo"
          width={146}
          height={32}
          className="hidden sm:block"
        />
        <Image
          src="/images/logo-devlinks-small.svg"
          alt="Devlinks Logo"
          width={32}
          height={32}
          className="sm:hidden"
        />
      </figure>

        <Link href={"/dashboard"}>
          <Button
            className={
              " max-md:hidden w-[200px] h-[46px] border-2  gap-1 rounded-lg px-[27px] py-[11px]"
            }
            classT={
              "font-semibold text-[#633CFF] text-base w-[40px] h-[24px]"
            }
            
            label={"Back to dashboard"}
          />
        </Link>

        <Link className="sm:hidden" href={"/dashboard"}>
          <LogoButton
            className={
              "bg-[#EFEBFF] sm:hidden w-[74px] h-[42px] border-2  gap-1 rounded-lg px-[27px] py-[11px]"
            }
            classT={
              "font-semibold text-[#633CFF] text-base w-[40px] h-[24px]"
            }
            imageClass={"text-[#633CFF]"}
            imgHref={"/images/icon-link.svg"}
            type="logo"
            w={20}
            h={20}
          />
        </Link>


        <Button
        onClick={copyToClipboard}
          label={"Share"}
          className={
            " border-x border-y border-[#633CFF] text-[#633CFF] w-[114px] h-[46px] rounded-lg px-[27px] py-[11px] "
          }
          classT={"w-[60px] h-[24px] text-base font-semibold"}
        />
         {copied && <p className="text-[#633CFF]  font-bold text-xl">URL copied!</p>}
    </nav>
  );
};

export default Navigation;
