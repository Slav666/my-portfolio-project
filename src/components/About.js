import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="mb-8 leading-relaxed">
            I'm Slawomir, a front-end developer with GIS expertise, currently
            based in Edinburgh, Scotland. I bring 5 years of experience in
            software development to the table, having dedicated the last 3.5
            years to professional work at Astrosat, an aerospace firm in
            Edinburgh. At Astrosat, we specialize in visualizing satellite data
            in mapping applications and crafting customized tools for seamless
            interaction. As you scroll through this page, you'll discover
            concise descriptions of projects that not only showcase my skills
            but also provide links to standalone deploys and repositories for
            each, highlighting my practical knowledge and experience.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            // className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"

            alt="hero"
            src="./face.jpeg"
          />
        </div>
      </div>
    </section>
  );
};
export default About;
