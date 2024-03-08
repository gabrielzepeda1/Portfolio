"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeader>About me</SectionHeader>
      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos et
        labore iure, harum expedita magnam?
      </p>
      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos et
        labore iure, harum expedita magnam?
      </p>
    </motion.section>
  );
};

export default About;
