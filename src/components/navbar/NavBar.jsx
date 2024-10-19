import Image from "next/image";
import LogoButton from "../buttons/LogoButton.jsx";
import Button from "../buttons/Button.jsx";
const NavBar = () => {
  return (
    <nav
      className="bg-white text-black p-4 px-6  flex items-center
    justify-between
    w-[1392px] h-[78px] rounded-lg m-6 "
    >
      <figure>
        <Image
          src="images/logo-devlinks-large.svg" // Ensure this path is correct
          alt="Devlinks Logo"
          width={146}
          height={32}
          className="hidden md:block"
        />
        <Image
          src="/images/logo-devlinks-small.svg" // Ensure this path is correct
          alt="Devlinks Logo"
          width={32}
          height={32}
          className="md:hidden"
        />
      </figure>
      <div className="flex items-center justify-center gap-[8px]">
        <LogoButton
          className={
            "bg-[#EFEBFF] w-[122px] h-[46px] border-2  gap-1 rounded-lg px-[27px] py-[11px]"
          }
          textClass={"font-semibold text-[#633CFF] text-base w-[40px] h-[24px]"}
          imageClass={"text-[#633CFF]"}
          label={"Link"}
          imgHref={"/images/icon-link.svg"}
          w={20}
          h={20}
        />
        <LogoButton
          className={
            "bg-[#FFE3DA] w-[187px] h-[46px] border-2 gap-1 rounded-lg px-[27px] py-[11px] shadow-md"
          }
          textClass={
            "font-semibold text-[#737373] text-base w-[105px] h-[24px]"
          }
          label={"Profile Details"}
          imgHref={"images/icon-profile-details-header.svg"}
          w={20}
          h={20}
        />
      </div>
      <Button
        label={"Preview"}
        className={
          " border-x border-y border-[#633CFF]  text-[#633CFF] w-[114px] h-[46px] rounded-lg px-[27px] py-[11px] "
        }
        classT={"w-[60px] h-[24px]"}
      />
    </nav>
  );
};

export default NavBar;
