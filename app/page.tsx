import React from "react";
import ProfileCard from "./components/landingPage/ProfileCard";
import DescriptionCard from "./components/landingPage/DescriptionCard";
import SkillsCard from "./components/landingPage/SkillsCard";
import EmailMe from "./components/landingPage/EmailMe";
import Software from "./components/landingPage/Software";
import Inspirations from "./components/landingPage/Inspirations";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto,auto, 1fr] gap-4 h-full">
      <div className="w-full flex flex-col lg:flex-row gap-4 ">
        <ProfileCard />
        <DescriptionCard />
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <Inspirations />
        <SkillsCard />
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <Software />
        <EmailMe />
      </div>
    </div>
  );
}
