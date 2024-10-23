"use client"
import React from 'react';
import LinkForm from '../../LinkForm/LinkForm.jsx';
import BeforeLink from './BeforeEvent.jsx';
import {useLinkStore} from "@/lib/store/linkSore.js";
const LinkFormContainer = () => {
   let classes = "";
  const links = useLinkStore((state) => state.links);
  console.log('links',links);
  if(links.length==0){
    classes = " bg-[#FAFAFA]  " ;
  }
  
  return (
    <section className={`mt-3 p-5 w-full rounded-lg    h-[500px]  flex flex-col gap-6  ${classes} overflow-y-scroll`}>
     {links.length!=0 ? links?.map((link , index)=>{
        return <LinkForm key={link.id} link={link} index={index}/>
     }):<BeforeLink/>}
    </section>
  );
};

export default LinkFormContainer;
