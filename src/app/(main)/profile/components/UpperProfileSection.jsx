import ImgaeAddCard from "./ImageDetail/ImageAddCard.jsx"
import ProfileDetailAdd from "./ProfileDetailAdd/DetailAddCard.jsx"

const UpperSection = () => {
  return (
    <section className="w-full h-[88%] p-4 md:p-10  border-b-2">
      <article className="mb-6">
        <h1 className="text-3xl font-bold text-[#333333] mb-1">
        My Profile
        </h1>
        <p className="text-base text-[#737373] mt-2">
        Please update your profile with your name and email address.
        </p>
      </article>
        <ImgaeAddCard/>
        <ProfileDetailAdd/>
    </section>
  );
};

export default UpperSection;
