import Image from "next/image";
import LogoButton from "@/components/buttons/LogoButton.jsx";
import Button from "@/components/buttons/Button.jsx";
import Link from "next/link";
const NavBar = () => {
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
      <div className="flex items-center justify-center gap-[8px] ">
        <Link href={'/dashboard'}>    
        <LogoButton
          className={
            " max-md:hidden w-[122px] h-[46px] border-2  gap-1 rounded-lg px-[27px] py-[11px]"
          }
          textClass={"font-semibold text-[#737373] text-base w-[40px] h-[24px]"}
          imageClass={"text-[#633CFF]"}
          label={"Link"}
          type="logo"
          imgHref={"/images/icon-link.svg"}
          w={20}
          h={20}
        />
        </Link>
        <Link className="sm:hidden" href={'/dashboard'}>    
        <LogoButton
          className={
            "bg-[#EFEBFF] sm:hidden w-[74px] h-[42px] border-2  gap-1 rounded-lg px-[27px] py-[11px]"
          }
          textClass={"font-semibold text-[#633CFF] text-base w-[40px] h-[24px]"}
          imageClass={"text-[#633CFF]"}
          imgHref={"/images/icon-link.svg"}
          type="logo"
          w={20}
          h={20}
        />
        </Link>
        <Link href={'/profile'}>

        <LogoButton
          className={
            " bg-[#FFFFFF] w-[187px] max-md:hidden h-[46px] border-2 gap-1 rounded-lg px-[27px] py-[11px] shadow-md"
          }
          textClass={
            "font-semibold text-[#737373] text-base w-[105px] h-[24px]"
          }
          label={"Profile Details"}
          imgHref={"images/icon-profile-details-header.svg"}
          w={20}
          type="logo"
          h={20}
        />
        <LogoButton
          className={
            "bg-[#FFFFFF] w-[74px] sm:hidden h-[42px] border-2 gap-1 rounded-lg px-[27px] py-[11px] shadow-md"
          }
          textClass={
            "font-semibold text-[#737373] text-base w-[105px] h-[24px]"
          }
          imgHref={"images/icon-profile-details-header.svg"}
          w={20}
          h={20}
          type="logo"
        />
        </Link>
      </div>
      <Link href={'/share'} className="">
      <Button
        label={"Preview"}
        className={
          " border-x border-y border-[#633CFF] max-md:hidden  text-[#633CFF] w-[114px] h-[46px] rounded-lg px-[27px] py-[11px] "
        }
        classT={"w-[60px] h-[24px] text-base font-semibold"}
      />
      </Link>
  <Link className="sm:hidden" href={'/share'}>  
         <LogoButton
         type="logo"
          className={
            "border-x border-y border-[#633CFF] sm:hidden text-[#633CFF] w-[52px] h-[42px] rounded-lg px-[16px] py-[11px] "
          }
          textClass={
            "font-semibold text-[#737373] text-base w-[105px] h-[24px]"
          }
          imgHref={"/images/icon-preview-header.svg"}
          w={20}
          h={20}
        />
  </Link>
    </nav>
  );
};

export default NavBar;
