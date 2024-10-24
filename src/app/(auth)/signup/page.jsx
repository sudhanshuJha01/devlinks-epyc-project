"use client";

import Container from "../../../components/Container/Container.jsx";
import InputBox from "../../../components/InputBox/InputBox.jsx";
import Button from "../../../components/buttons/Button";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignUp = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [label, setLabel] = useState("Fill Form");
  const [buttonDisabled, setButtonDisabled] = useState(true); 
  const [msg, setMsg] = useState("");

  const onSignup = async () => {
    try {
      if (!buttonDisabled) {
        setLoading(true);
        setLabel("Processing...");

        const response = await axios.post("/api/user/signup", user);
        console.log("Signup success", response.data);

        router.push("/signin");
      }
    } catch (error) {
      console.log("Signup failed", error.message);
      setMsg("Signup failed, please try again.");
      setTimeout(() => setMsg(""), 2000); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.firstname.length > 0 &&
      user.lastname.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
      setLabel("Signup");
    } else {
      setButtonDisabled(true);
      setLabel("Fill Form");
    }
  }, [user]);

  const subHeading = "Please create your account to proceed with the application.";

  return (
    <Container heading={loading ? "Processing..." : "Generate Account"} subHeading={subHeading}>
      <section className="my-5 p-1">
        <InputBox
          id={"firstname"}
          label={"Firstname :"}
          onChange={(e) => setUser({ ...user, firstname: e.target.value })}
          type={"text"}
          placeholder={"Sudhanshu"}
        />
        <InputBox
          id={"lastname"}
          label={"Lastname :"}
          onChange={(e) => setUser({ ...user, lastname: e.target.value })}
          type={"text"}
          placeholder={"Jha"}
        />
        <InputBox
          id={"email"}
          label={"Email :"}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          type={"email"}
          placeholder={"sudhanshujha@gmail.com"}
        />
        <InputBox
          id={"password"}
          label={"Password :"}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type={"password"}
          placeholder={"Enter Your Password"}
        />
      </section>

      <section className="flex justify-end items-center h-[95px] p-10">
        <Button
          onClick={onSignup}
          className={
            "w-full bg-[#633CFF] hover:bg-[#4315fb] py-[11px] px-[27px] rounded-lg active:bg-[#633CFF] focus:bg-[#633CFF]"
          }
          classT={"text-[#FFF] font-semibold text-lg"}
          label={loading ? "Loading..." : label}
          disabled={buttonDisabled || loading} // Disable the button when form is incomplete or loading
        />
      </section>

      <section className="border-t-2 text-center flex flex-col items-center justify-center">
        <span className="text-base text-[#737373]">Already have an account?</span>
        <Link className="underline text-[#633CFF]" href={"/signin"}>
          Login
        </Link>
      </section>

      {msg ? <p className="text-base text-red-500 mt-2">{msg}</p> : null} {/* Error message */}
    </Container>
  );
};

export default SignUp;
