"use client"
import React from 'react';
import LinkForm from '../../LinkForm/LinkForm.jsx';
import {useLinkStore} from "@/lib/store/linkSore.js";
const LinkFormContainer = () => {
  const links = useLinkStore((state) => state.links);
  return (
    <section className="mt-3 p-5 w-full bg-[#FAFAFA] rounded-lg h-[500px] overflow-scroll">
      {/* Render multiple forms */}
     {links?.map((link)=>{
        return <LinkForm key={link.id} link={link} />
     })}
    </section>
  );
};

export default LinkFormContainer;
