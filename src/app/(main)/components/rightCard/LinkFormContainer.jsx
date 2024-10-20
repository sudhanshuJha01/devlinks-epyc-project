"use client"
import React from 'react';
import LinkForm from '../../LinkForm/LinkForm.jsx';
import BeforeLink from './BeforeEvent.jsx';
import {useLinkStore} from "@/lib/store/linkSore.js";
const LinkFormContainer = () => {
  const links = useLinkStore((state) => state.links);
  console.log('links',links);
  
  return (
    <section className="mt-3 p-5 w-full bg-[#FAFAFA] rounded-lg h-[500px] overflow-scroll">
      {/* Render multiple forms */}
     {links.length!=0 ? links?.map((link , index)=>{
        return <LinkForm key={link.id} link={link} index={index}/>
     }):<BeforeLink/>}
    </section>
  );
};

export default LinkFormContainer;
