"use client";
import React, { useState , useEffect } from "react";

import Image from "next/image";
import optionData from "@/lib/config/optionData.js";
import { useLinkStore } from "@/lib/store/linkSore.js";
import { useLinkDataStore } from "@/lib/store/linkData.js";
import {useAddCounterStore} from "@/lib/store/addCounter.js"
 
const LinkForm = ({ link, index }) => {
  const [customUrl, setCustomUrl] = useState('');
  // const [error, setError] = useState('');
  const [selectedOption, setSelectedOption] = useState(optionData[0]?.value);
  const removeLink = useLinkStore((state) => state.removeLink);
  const addPlatform = useLinkDataStore((state) => state.addPlatform);
  const removePlatform = useLinkDataStore((state) => state.removePlatform);
  const presentIndex = useLinkDataStore((state) => state.presentIndex);
  const setPresentIndex = useLinkDataStore((state) => state.setPresentIndex);
  const addCnt = useAddCounterStore(state=>state.addCnt)
  // const setGlobalError = useAddCounterStore(state=>state.setGlobalError)
  // console.log('addCnt' , addCnt);
  
  
  const handleClick=()=>{
    setPresentIndex(index=>index + 1);
    console.log("present Index" , presentIndex); 
  } 
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    console.log("present Index onChange", presentIndex);
    let obj = optionData.find(item=>item.value===e.target.value)
    addPlatform({id:link.id, cUrl:customUrl,  index:presentIndex.toString() ,...obj});
  };
  
  const data = useLinkDataStore((state) => state.data);
  console.log("data", data);
  
  const selectedPlatform = optionData.find(
    (item) => item.value === selectedOption
  );
  
  const handleRemove =  () => {
    removeLink(link.id);
    console.log("link id " , link.id)
    removePlatform(link.id)
    console.log("data in remove", data);
  };


  // const handleCustomUrl = (e) => {
  //   setCustomUrl(e.target.value);
  //   setError(''); 
  // };
  
  // useEffect(()=>{
  //    if(addCnt>=1){
  //      const urlPattern = new RegExp('https://.*');
  //      if (!urlPattern.test(customUrl)) {
  //       setGlobalError(true)
  //        setError('Please enter a valid URL starting with https://');
  //        return;
  //      }
  //      console.log('Valid URL:',customUrl);
  //    }
  // },[addCnt])
 
  return (
    <section className="flex flex-col w-full h-[228px] bg-[#FAFAFA] rounded-lg p-5 justify-center gap-3">
      <section 
      onClick={handleClick}
      className="flex items-center justify-between text-[#737373]">
        <section className="flex items-center justify-center gap-2">
          <Image
            src={"/images/icon-drag-and-drop.svg"}
            alt="drag and drop icon"
            width={12}
            height={6}
          />
          <h2 className="font-bold text-base ">Link #{index + 1}</h2>
        </section>
        <span
          onClick={handleRemove}
          className="text-base cursor-pointer hover:text-[#4c4c4c]"
        >
          Remove
        </span>
      </section>
      <form className="flex flex-col text-[#333333] text-xs gap-1">
        <label htmlFor="platform-select">Platform</label>
        <section
        onClick={handleClick}
        className="flex items-center w-full bg-[#FFFFFF] border border-[#E0E0E0] focus:border-[#633CFF] focus:ring-[#633CFF] focus:ring-1 focus:ring-opacity-50 rounded-lg  pl-4 gap-3">
          
          {selectedPlatform && (
            <Image
              className=""
              src={selectedPlatform.icon}
              alt="logo"
              width={12.52}
              height={14.52}
            />
          )}
          <select
            id="platform-select"
            className="w-[100%]  py-3 outline-none  rounded-r-lg text-base"
            value={selectedOption}
            
            onChange={handleChange}
          >
            {optionData?.map((item) => (
              <option key={item?.value} value={item?.value}>
                {item?.name}
              </option>
            ))}
          </select>
        </section>
      </form>
      <form className="flex flex-col text-[#333333] text-xs gap-1">
      <label htmlFor="url">Link</label>
      <input
        onChange={(e)=>{setCustomUrl(e.target.value)}}
        className={`p-4 rounded-lg bg-[#FFFFFF] border border-[#E0E0E0] focus:outline-none focus:border-[#633CFF] focus:ring-[#633CFF] focus:ring-1 focus:ring-opacity-50 stroke-[#D9D9D9] `}
        // ${error ? 'border-red-500' : ''} in class name if error feature implemented
        type="url"
        name="url"
        id="url"
        placeholder="https://github.com/sudhanshuJha01"
        pattern="https://.*"
        size="30"
        required
      />
      {/* {error && <span className="text-red-500 text-xs">{error}</span>} */}
    </form>
    </section>
  );
};

export default LinkForm;
