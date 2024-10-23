import UpperProfileSection from "./UpperProfileSection.jsx"
import LowerProfileSection from "./LowerProfileSection.jsx"
const CustomCard = () => {
  return (
    <section className="w-[59%] max-lg:w-full bg-white rounded-lg lg:mt-3 lg:ml-3">
      <UpperProfileSection/>
      <LowerProfileSection/>
    </section>
  );
};

export default CustomCard;