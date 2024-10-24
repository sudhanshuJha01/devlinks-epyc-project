"use client";

import Container from "../../../components/Container/Container.jsx";
import InputBox from "../../../components/InputBox/InputBox.jsx";
import Button from "../../../components/buttons/Button";
import Link from "next/link";

import React, {useEffect ,useState} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
const SignIn = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
      email: "",
      password: "",
     
  })
  const [loading, setLoading] =useState(false);
  const [label, setLabel] = useState("Login");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [msg, setMsg] = useState(false);

  const onLogin = async () => {
    try {
      if(!buttonDisabled){
        setLoading(true);
        const response = await axios.post("/api/user/signin", user);
        if(response.data){
          setMsg("Please fill valid details")
          setTimeout(() => {
            setMsg("")
          }, 2000);
        }
        console.log("Login success", response.data);
        router.push("/dashboard");
      }else{
        setLabel("Fill Form")
        setTimeout(() => {
          setLabel("Login");
        }, 2000);

      }
    } catch (error) {
        console.log("Login failed", error.message);
        setLoading(false)
    } finally{
    setLoading(false);
    }
}

useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0) {
        setButtonDisabled(false);
    } else{
        setButtonDisabled(true);
    }
}, [user]);
  
  
  const subHeading =
    "Please enter your details below to proceed with the application.";
  return (
    <Container heading={loading?"Processing..":"Login"} subHeading={subHeading}>
      <section className="my-5 p-1">
        <InputBox
          id={"email"}
          label={"Email :"}
          onChange={(e) => setUser({...user, email: e.target.value})}
          type={"email"}
          placeholder={"sudhanshujha@gmail.com"}
        />
        <InputBox
          id={"password"}
          label={"Password :"}
          onChange={(e) => setUser({...user, password: e.target.value})}
          type={"password"}
          placeholder={"Enter Your Password"}
        />
      </section>
      <section className="flex justify-end items-center h-[95px] p-10">
        <Button
        onClick={onLogin}
          className={
            "w-full bg-[#633CFF] hover:bg-[#4322c7] py-[11px] px-[27px] rounded-lg  "
          }
          classT={"text-[#FFF] font-semibold text-lg"}
          label={label}
        />
      </section>
      <section className="border-t-2 text-center flex flex-col items-center justify-center">
        <span className="text-base text-[#737373]">Don’t have an account?</span>
        <Link className="underline text-[#633CFF]" href={"/signup"}>
          Create account
        </Link>
      </section>
      <p className="text-base text-[#737373] mt-2">{ msg?msg:null}</p>
    </Container>
  );
};

export default SignIn;
