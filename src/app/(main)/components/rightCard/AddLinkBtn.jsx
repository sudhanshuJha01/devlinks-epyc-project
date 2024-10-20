"use client";
import React , {useState} from 'react'
import Button from "@/components/buttons/Button.jsx";
import LinkForm from '../../LinkForm/LinkForm';
import {useLinkStore} from "@/lib/store/linkSore.js";
const AddLinkBtn = () => {
  const [linkCnt , setLinkCnt] = useState(0)
    const addLink = useLinkStore((state) => state.addLink);
    const links = useLinkStore((state) => state.links);
    const handleAddLink = ()=>{
      setLinkCnt(linkCnt+1)
      addLink(linkCnt);
        
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