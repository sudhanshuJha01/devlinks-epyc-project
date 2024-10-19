import Image from "next/image";
import Button from "@/components/buttons/Button.jsx";
const LowerSection = () => {
  return (
    <section className="flex justify-end items-center h-[95px] p-10">
    <Button
      className={"h-46 w-91 bg-[#633CFF] py-[11px] px-[27px] rounded-lg"}
      classT={"633CFF"}
      label={"Save"}
    />
  </section>
  )
}

export default LowerSection