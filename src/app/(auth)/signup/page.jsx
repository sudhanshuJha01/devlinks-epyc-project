"use client";

import Container from "@/components/Container/Container.jsx";
import InputBox from "@/components/InputBox/InputBox.jsx";
import Button from "@/components/buttons/Button";
import Link from "next/link";

const SignUp = () => {
  const heading = "Create account";
  const subHeading =
    "Please create your account to proceed with the application.";
  return (
    <Container heading={heading} subHeading={subHeading}>
      <section className="my-5 p-1">
        <InputBox
          id={"firstname"}
          label={"Firstname :"}
          type={"firstname"}
          placeholder={"Sudhanshu"}
        />
        <InputBox
          id={"lastname"}
          label={"Lastname :"}
          type={"lastname"}
          placeholder={"Jha"}
        />
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
          className={
            "w-full bg-[#633CFF] hover:bg-[#4315fb] py-[11px] px-[27px] rounded-lg active:bg-[#633CFF] focus:bg-[#633CFF] "
          }
          classT={"text-[#FFF] font-semibold text-lg"}
          label={"Register"}
        />
      </section>
      <section className="border-t-2 text-center flex flex-col items-center justify-center">
        <span className="text-base text-[#737373]">
          Already have an account?
        </span>
        <Link className="underline text-[#633CFF]" href={"/signin"}>
          Login
        </Link>
      </section>
    </Container>
  );
};

export default SignUp;
