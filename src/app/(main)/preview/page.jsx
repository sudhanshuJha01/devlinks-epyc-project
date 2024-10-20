import Image from "next/image";
import Phone from "../components/leftCard/Phone.jsx";

const MokeUpPhone = () => {
  return (
    <section className=" w-[41%]  max-lg:w-full bg-white rounded-lg mt-3 mr-3 p-6 flex items-center justify-center">
      <Phone />
    </section>
  );
};

export default MokeUpPhone;
