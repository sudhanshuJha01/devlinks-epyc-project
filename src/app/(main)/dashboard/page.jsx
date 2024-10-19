import React from "react";
import Image from "next/image";
import Button from "@/components/buttons/Button.jsx";
const dashboard = () => {
  return (
    <main className="flex justify-center items-center">
      <section className="w-[560px] h-[834px] bg-white rounded-lg m-6 mt-3 mr-3 p-6 flex items-center justify-center">
        <Image
          src={"/images/illustration-phone-mockup.svg"}
          width={307}
          height={631}
        />
      </section>
      <section className="w-[808px] h-[834px] bg-white rounded-lg m-6 mt-3 ml-3 ">
        <section className="w-[808px] h-[739px]  p-10 border-b-2">
          <article className="w-[728px] h-[80px] mb-5 ">
            <h1 className="text-4xl font-bold text-[#333333] h-[48px]">
              Customize your links
            </h1>
            <p className="text-base  text-[#737373] h-[32px]">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
          </article>
          <Button
            className={
              "mt-5 w-[728px] h-[46px] text-center  text-[#633CFF]  border-2 border-[#633CFF] rounded-lg"
            }
            classT={"w-[108px] h-[24px] font-semibold text-[16px]"}
            label={"+ Add new link"}
          />
          <section className="mt-3 p-5 w-[728px] h-[469px] bg-[#FAFAFA] rounded-lg">
            <section className="text-center flex flex-col items-center justify-between my-[62.5px]">
              <Image
                src={"/images/illustration-empty.svg"}
                height={160}
                width={249.53}
              />
              <article className="w-[488px] h-[144px]">
                <h3 className="font-bold text-3xl mb-6 text-[#333333]">
                  Let’s get you started
                </h3>
                <p className="  mb-6 text-[#737373]">
                  Use the “Add new link” button to get started. Once you have
                  more than one link, you can reorder and edit them. We’re here
                  to help you share your profiles with everyone!
                </p>
              </article>
            </section>
          </section>
        </section>
        <section className="flex justify-end items-center h-[95px] p-10">
            <Button className={"h-46 w-91 bg-[#633CFF] py-[11px] px-[27px] rounded-lg" }  classT={"633CFF"} label={"Save"}/>
        </section>
      </section>
    </main>
  );
};

export default dashboard;
