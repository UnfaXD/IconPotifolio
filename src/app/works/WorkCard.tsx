"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WorkCardProps } from "@/types";
import { useRouter } from "next/navigation";

const WorkCard = ({ work, variants }: WorkCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/works/${work.id}`);
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      whileHover="hover"
      className="group relative cursor-pointer overflow-hidden"
      onClick={handleClick}
    >
      <motion.div
        className="relative rounded-3xl p-4 transition-all duration-300 ease-out"
        variants={{
          initial: { y: 30, opacity: 0 },
          animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          },
          hover: { y: -5 },
        }}
      >
        <div className="overflow-hidden rounded-2xl bg-[#F4F7FF]">
          <motion.div
            className="relative aspect-[4/3] w-full"
            variants={{
              hover: { scale: 1.05 },
            }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={work.image}
              alt={work.title}
              fill
              className="object-cover"
            />

            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300"
              variants={{
                hover: { opacity: 1 },
              }}
            />
          </motion.div>
        </div>

        <div className="relative mt-6 space-y-3">
          <motion.h3
            className="text-2xl font-semibold text-gray-900"
            variants={{
              hover: { scale: 1.02, x: 4 },
            }}
            transition={{ duration: 0.2 }}
          >
            {work.title}
          </motion.h3>

          <div className="flex flex-wrap items-center gap-2 text-[#666D80]">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2770F4]" />
              <span className="font-medium">{work.category}</span>
            </div>

            {work.tags.slice(0, 2).map((tag, i) => (
              <motion.span
                key={tag}
                className="rounded-full bg-slate-200 px-3 py-1 text-sm"
                variants={{
                  initial: { opacity: 0, x: -10 },
                  animate: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.1 * i },
                  },
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          className="absolute -right-2 -top-2 h-20 w-20 rounded-full bg-gradient-to-r from-[#2770F4]/10 to-[#FF5BE1]/10 blur-xl"
          variants={{
            hover: {
              scale: 1.5,
              opacity: 0.8,
              transition: { duration: 0.4 },
            },
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default WorkCard;
