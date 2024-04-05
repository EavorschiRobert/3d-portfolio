import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};
const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.74)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] text-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;
