"use client";
import React from 'react'
import Button from "@/components/buttons/Button.jsx";
const AddLinkBtn = () => {
  return (
    <Button
    onClick={() => {}}
    className={
      " mt-5 mb-3 w-full py-[11px] text-center  text-[#633CFF] border-[1px]  border-[#ffffff] rounded-lg hover:bg-[#a39ac9] hover:text-white"
    }
    classT={"font-semibold text-base"}
    label={"+ Add new link"}
  />
  )
}

export default AddLinkBtn