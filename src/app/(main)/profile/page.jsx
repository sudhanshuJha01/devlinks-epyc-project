import React from "react";
import MokeUpPhone from "../components/leftCard/MokeUpPhone.jsx";
import ProfileCard from "./components/ProfileCard.jsx"
const Profile = () => {
  return (
    <main className="w-full max-lg:w-full h-[90%] flex max-md:flex-col  ">
      <MokeUpPhone/>
     <ProfileCard/>
    </main>
  );
};

export default Profile;
