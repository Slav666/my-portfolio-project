import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills, skillsCodeClan } from "../data";

const Skill = ({ skills }) => (
  <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
    {skills.map((skill) => (
      <div key={skill} className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center gap-4">
          <img src={skill.icon} alt="icon" className="w-6 h-6" />
          <span className="title-font font-medium text-white">
            {skill.tech}
          </span>
        </div>
      </div>
    ))}
  </div>
);

const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            List of the main technologies I used while working at Astrosat.
          </p>
        </div>

        <Skill skills={skills} />

        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          List of the extra technologies I used while learning at Code Clan.
        </p>
        <Skill skills={skillsCodeClan} />
      </div>
    </section>
  );
};
export default Skills;
