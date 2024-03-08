import React from "react";
import SectionHeader from "./SectionHeader";
import { projectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";




const Projects = () => {
  return (
    <section>
      <SectionHeader>Projects</SectionHeader>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;

