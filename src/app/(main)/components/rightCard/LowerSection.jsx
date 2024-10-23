
import Button from "@/components/buttons/Button.jsx";
import Link from "next/link";
const LowerSection = () => {
  return (
    <Link href={"/share"} className="flex justify-end items-center h-[95px] p-10">
    <Button
      className={"h-46 w-91 bg-[#633CFF] py-[11px] px-[27px] rounded-lg"}
      classT={"633CFF"}
      label={"Save"}
    />
  </Link>
  )
}

export default LowerSection