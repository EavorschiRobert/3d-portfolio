import React from "react";
import { IProject } from "../utils/types";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt";
import { github } from "../assets";

type ProjectProps = {
  project: IProject;
  index: number;
};

const ProjectCard = ({ project, index }: ProjectProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(project.source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="font-bold text-white text-[24px]">{project.name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
        
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
