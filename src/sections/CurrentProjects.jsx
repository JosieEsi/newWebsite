import React from "react";
import Button from "../components/Button";

const CurrentProjects = () => {
  const projects = [
    {
      title: "Rural Enterprise Programme Pre-Completion Survey",
      link: "#",
    },
    {
      title: "Nestlé Income Accelerator Programme (IAP) 2 [Ghana]",
      link: "#",
    },
    {
      title: "Beyond Beans Cocoa Farmer Census and Market Analysis for IGAs",
      link: "#",
    },
    {
      title: "Tony's Chocolonely Tree Tagging Survey in Ghana and Cote d'Ivoire",
      link: "#",
    },
    {
      title: "Nestlé Income Accelerator Programme (IAP) 2 [Côte D'Ivoire]",
      link: "#",
    },
    {
      title: "Tony's Chocolonely Farmer Survey in Ghana and Cote d'Ivoire",
      link: "#",
    },
  ];

  return (
    <section
      id="current-projects"
      className="max-container flex flex-col items-center justify-center padding"
    >
      <h2 className="font-poppins font-bold text-4xl text-ash mb-12 text-center">
        CURRENT PROJECTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="font-poppins font-semibold text-lg text-ash mb-4">
              {project.title}
            </h3>
            <a href={project.link}>
              <Button label="Read more" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentProjects;
