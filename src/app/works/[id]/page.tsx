"use client";

import { notFound } from "next/navigation";
import contentData from "@/lib/content";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ExploreButton from "@/components/ui/ExploreButton";
import ToolsShowcase from "@/components/sections/hero/ToolsShowcase";
import { motion, Variants } from "framer-motion";
import { WorkItem } from "@/types";

const fadeIn: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const HeroSection = ({ work }: { work: WorkItem }) => (
  <section className="text-left overflow-hidden">
    <motion.h1
      className="text-5xl font-medium text-left"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Design.{" "}
      </motion.span>
      <motion.span
        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-400 to-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Prototype.
      </motion.span>{" "}
      <br />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        Collaborate.
      </motion.span>
    </motion.h1>

    <motion.p
      className="text-lg text-gray-800 mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.6 }}
    >
      Create beautiful designs for websites, apps, and more, directly in your
      browser.
    </motion.p>

    <motion.div
      className="mt-14"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <Image
        src={work.image}
        alt={work.title}
        width={1200}
        height={600}
        className="rounded-xl shadow-lg"
      />
    </motion.div>
  </section>
);

const CompanyDetails = ({ work }: { work: WorkItem }) => (
  <motion.section
    className="grid grid-cols-1 gap-4 text-left pt-16"
    variants={staggerChildren}
    initial="initial"
    animate="animate"
  >
    {[
      { label: "Industry", value: work.industry },
      { label: "Headquarters", value: work.headquarters },
      { label: "Founded", value: work.founded },
      { label: "Company Size", value: work.companySize },
    ].map((item, index) => (
      <motion.div
        key={index}
        className="p-4 transition-all rounded-lg"
        variants={fadeIn}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      >
        <h3 className="text-lg font-normal text-gray-800">{item.label}</h3>
        <p className="text-gray-600 mt-2 font-semibold">{item.value}</p>
      </motion.div>
    ))}
  </motion.section>
);

const ChallengesResults = ({ work }: { work: WorkItem }) => (
  <motion.section
    className="grid grid-cols-1 gap-12 pt-16"
    variants={staggerChildren}
    initial="initial"
    animate="animate"
  >
    {[
      { title: "Challenges", text: work.challenges },
      { title: "Results", text: work.results },
    ].map((section, index) => (
      <motion.div
        key={index}
        variants={fadeIn}
        whileHover={{ x: 10, transition: { duration: 0.2 } }}
      >
        <h2 className="text-3xl font-bold text-[#2770F4]">{section.title}</h2>
        <p className="mt-4 text-gray-800 leading-relaxed">{section.text}</p>
      </motion.div>
    ))}
  </motion.section>
);

const MetricsSection = () => (
  <motion.section
    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
    variants={staggerChildren}
    initial="initial"
    animate="animate"
  >
    {Array(3)
      .fill({
        percentage: "35%",
        description: "Improved Onboarding Process",
      })
      .map((item, index) => (
        <motion.div
          key={index}
          className="p-6 bg-[#E9E9E9] rounded-3xl"
          variants={fadeIn}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#F0F0F0",
            transition: { duration: 0.2 },
          }}
        >
          <motion.h3
            className="text-3xl font-medium text-gray-800"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
          >
            <span className="text-blue-600">{item.percentage}</span>
          </motion.h3>
          <p className="text-gray-600 mt-2">{item.description}</p>
        </motion.div>
      ))}
  </motion.section>
);

const ProjectGallery = ({ work }: { work: WorkItem }) => {
  const images = work.additionalImages ?? [];

  if (images.length === 0) return null;

  return (
    <motion.section
      className="my-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="grid gap-6"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        {images.map((img: string, index: number) => (
          <motion.div
            key={index}
            className={`grid ${
              index % 2 === 0 ? "grid-cols-1" : "grid-cols-2 gap-6"
            } md:grid-cols-${index % 2 === 0 ? "1" : "2"}`}
            variants={fadeIn}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={img}
              alt={`Gallery Image ${index}`}
              width={index % 2 === 0 ? 800 : 400}
              height={index % 2 === 0 ? 500 : 300}
              className="rounded-xl shadow-md hover:shadow-lg transition-all w-full"
            />
            {index % 2 !== 0 && images[index + 1] && (
              <Image
                src={images[index + 1]}
                alt={`Gallery Image ${index + 1}`}
                width={400}
                height={300}
                className="rounded-xl shadow-md hover:shadow-lg transition-all"
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default function WorkDetail({ params }: { params: { id: string } }) {
  const work: WorkItem | undefined = contentData.work.find(
    (item) => String(item.id) === params.id
  );

  if (!work) {
    return notFound();
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <div className="container pt-36 mx-auto px-6 max-w-6xl">
        <HeroSection work={work} />

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <CompanyDetails work={work} />
          <ChallengesResults work={work} />
        </motion.div>

        <MetricsSection />
        <ProjectGallery work={work} />

        <motion.section
          className="mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ExploreButton text="Tech Stack" />
          <ToolsShowcase />
        </motion.section>
      </div>
      <Footer />
    </motion.div>
  );
}
