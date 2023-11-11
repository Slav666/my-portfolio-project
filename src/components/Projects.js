import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-10">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-8"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-green-400 mb-1">
                    {project.title}
                  </h1>
                  <h2 className="text-blue-400">Code: {project.code}</h2>
                  <h2 className="text-pink-400">Live App: {project.liveApp}</h2>
                  <p className="leading-relaxed">{project.description}</p>
                  <h3 className="mb-2 text-yellow-200">Technologies used:</h3>
                  <div className="flex flex-row justify-evenly">
                    {project.technologies.map((icon, index) => (
                      <img
                        src={icon}
                        key={index}
                        alt="gallery"
                        className="w-6 h6"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
