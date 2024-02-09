import { projectsData } from "@/lib/data";
import React from "react";
import { Project } from "./project";
import { SectionHeading } from "./section-heading";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeading title="my projects" />
      <div className="flex flex-col gap-7">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
