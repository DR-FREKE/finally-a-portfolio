"use client";

import { projectsData } from "@/lib/data";
import React, { useEffect } from "react";
import { Project } from "./project";
import { SectionHeading } from "./section-heading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-content";

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActive } = useActiveSectionContext();

  useEffect(() => {
    if (inView) setActive("Projects");
  }, [inView]);

  return (
    <section id="projects" className="scroll-mt-28" ref={ref}>
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
