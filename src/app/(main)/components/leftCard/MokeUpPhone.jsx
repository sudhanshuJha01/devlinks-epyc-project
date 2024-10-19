import Image from "next/image";
import Button from "@/components/buttons/Button.jsx";
const MokeUpPhone = () => {
  return (
    <section className="w-[41%] h-[834px] bg-white rounded-lg mt-3 mr-3 p-6 flex items-center justify-center">
      <Image
        src={"/images/illustration-phone-mockup.svg"}
        width={307}
        height={631}
      />
    </section>
  );
};

export default MokeUpPhone;
