"use client";

import Container from "@/components/Container/Container.jsx";
import InputBox from "@/components/InputBox/InputBox.jsx";
import Button from "@/components/buttons/Button";
import Link from "next/link";
const page = () => {
  const heading = "Login";
  const subHeading =
    "Please enter your details below to proceed with the application.";
  return (
    <Container heading={heading} subHeading={subHeading} className={""}>
      <section className="my-5 p-1" >
        <InputBox
          id={"email"}
          label={"Email :"}
          type={"email"}
          placeholder={"sudhanshujha@gmail.com"}
        />
        <InputBox
          id={"password"}
          label={"Password :"}
          type={"password"}
          placeholder={"Enter Your Password"}
        />
      </section>
      <section className="flex justify-end items-center h-[95px] p-10">
        <Button
          className={"w-full bg-[#633CFF] hover:bg-[#4315fb] py-[11px] px-[27px] rounded-lg"}
          classT={"text-[#FFF] font-semibold text-lg"}
          label={"Login"}
        />
      </section>
      <section className="border-t-2 text-center flex flex-col items-center justify-center">
        <span className="text-base text-[#737373]">Don’t have an account?</span>
        <Link className="underline text-[#633CFF]" href={"/signup"}>Create account</Link>
      </section>
    </Container>
  );
};

export default page;
