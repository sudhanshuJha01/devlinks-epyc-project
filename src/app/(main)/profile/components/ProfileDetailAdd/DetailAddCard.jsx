"use client"
import { useState } from "react";
import CardContainer from "../CardContainer.jsx";
import {useProfileStore} from "@/lib/store/profileStore.js"
const DetailAddCard = () => {
  const [fn , setFn] = useState("");
  const [ln , setLn] = useState("");
  const [em , setEm] = useState("");
  const  setFirstname = useProfileStore(state=>state. setFirstname)
  const  setLastname = useProfileStore(state=>state. setLastname)
  const setEmail = useProfileStore(state=>state.setEmail)
  
   
   setFirstname(fn);
   setLastname(ln);
   setEmail(em);

  return (
    <CardContainer
      className={"flex flex-col item-center justify-center p-3 px-7 gap-2"}
    >
      <label className="text-[#737373] " htmlFor="firstname">
        FirstName:
      </label>
      <input
        onChange={(e)=>{setFn(e.target.value)}}
        className="p-1 px-2 rounded-lg outline-none"
        type="text"
        id="firstname"
      />
      <label className="text-[#737373] " htmlFor="lastname">
        LastName:
      </label>
      <input
        onChange={(e)=>{setLn(e.target.value)}}
        className="p-1 px-2  rounded-lg outline-none"
        type="text"
        id="lastname"
      />
      <label className="text-[#737373]" htmlFor="email">
        Email:
      </label>
      <input
      onChange={(e)=>{setEm(e.target.value)}}
        className="p-1 px-2  rounded-lg outline-none"
        type="email"
        id="email"
      />
    </CardContainer>
  );
};

export default DetailAddCard;
