"use client";
import React , {useState} from 'react'
import Button from "@/components/buttons/Button.jsx";
import {useLinkStore} from "@/lib/store/linkSore.js";
import {useAddCounterStore} from "@/lib/store/addCounter.js"
const AddLinkBtn = ({setCnt , cnt}) => {
  const [linkCnt , setLinkCnt] = useState(0)
  // const setAddCounter = useAddCounterStore(state=>state.setAddCounter)
  // const setGlobalError = useAddCounterStore(state=>state.setGlobalError)
  // const error = useAddCounterStore(state=>state.error)
    const addLink = useLinkStore((state) => state.addLink);
    const  links = useLinkStore((state) => state. links);
    let len = links.length;
    const handleAddLink = ()=>{
      // if(!error){
      if(len<4){
        setLinkCnt(linkCnt+1);
        addLink(linkCnt);
        // setAddCounter();
        // setGlobalError(false)
      }
      // }
    }
  return (
    <Button
    onClick={handleAddLink}
    className={
      " mt-5 mb-3 w-full py-[11px] text-center  text-[#633CFF] border-[1px]  border-[#633CFF] rounded-lg "
    }
    classT={"font-semibold text-base"}
    label={"+ Add new link"}
  />
  )
}

export default AddLinkBtn