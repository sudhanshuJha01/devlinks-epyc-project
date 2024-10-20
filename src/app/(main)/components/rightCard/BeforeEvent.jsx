import Image from "next/image";

const BeforeEvent = () => {
  return (
    <section className="text-center  flex flex-col items-center justify-between my-[42.5px] gap-10 ">
    <Image
      src={"/images/illustration-empty.svg"}
      height={160}
      alt="logo"
      width={249.53}
    />
    <article className=" w-[70%] ">
      <h3 className="font-bold text-[32px] mb-3 text-[#333333]">
        Let’s get you started
      </h3>
      <p className=" mt-3 text-[#737373] ">
        Use the “Add new link” button to get started. Once you have more
        than one link, you can reorder and edit them. We’re here to help
        you share your profiles with everyone!
      </p>
    </article>
  </section>
  )
}

export default BeforeEvent