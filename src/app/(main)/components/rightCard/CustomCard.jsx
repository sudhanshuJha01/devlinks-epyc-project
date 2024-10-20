import UpperSection from "./UpperSection";
import LowerSection from "./LowerSection";
const CustomCard = () => {
  return (
    <section className="w-[59%] max-lg:w-full bg-white rounded-lg lg:mt-3 lg:ml-3">
      <UpperSection />
      <LowerSection />
    </section>
  );
};

export default CustomCard;
