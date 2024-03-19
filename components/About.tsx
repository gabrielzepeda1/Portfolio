"use client";

import React from "react";
import SectionHeader from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
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
