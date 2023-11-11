import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Slawomir.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Enthusiastic and motivated Software Engineer with a keen interest in
            Computing. With a strong drive to solve complex problems with
            technology in order to make a real value-added impact on users in a
            SaaS environment, I have a creative mindset and keen to collaborate
            with others in order to innovate. For me, programming is a very
            powerful modern art just like any other art: painting, music or
            poetry. It’s a tool for your brain. It’s a freedom, anyone can give
            life to their ideas with the help of programming. The pleasure of
            making things that are useful to other people.
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
            className=" object-center rounded h-32 w-46"
            alt="hero"
            src="./brain.jpeg"
          />
          <img
            className=" object-center rounded h-32 w-46 p-4"
            alt="hero"
            src="./face.jpeg"
          />
        </div>
      </div>
    </section>
  );
};
export default About;
