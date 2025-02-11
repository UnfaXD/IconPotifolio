"use client";

import { motion } from "framer-motion";
import WorkCard from "./WorkCard";
import ExploreButton from "../../components/ui/ExploreButton";
import contentData from "@/lib/content";
import AnimatedText from "../../components/ui/AnimatedText";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const Works = () => {
  return (
    <motion.section
      id="work"
      className="relative pt-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#2770F4]/5 to-[#FF5BE1]/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: 0,
          ease: "linear",
        }}
      />

      <div className="container relative mx-auto px-4">
        <motion.div className="mb-12 space-y-8" variants={containerVariants}>
          <motion.div className="flex justify-start" variants={textVariants}>
            <ExploreButton />
          </motion.div>
          <motion.div variants={textVariants}>
            <AnimatedText />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2"
          variants={gridVariants}
        >
          {contentData.work.map((work, index) => (
            <motion.div
              key={work.id}
              variants={textVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <WorkCard work={work} index={index} variants={textVariants} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#FF5BE1]/5 to-[#2770F4]/5 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: 0,
          ease: "linear",
          delay: 1,
        }}
      />
    </motion.section>
  );
};

export default Works;
