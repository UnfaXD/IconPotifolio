"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import navigationData from "@/lib/content";
import { scrollToSection } from "@/utils/scroll";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { navigation } = navigationData;

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "unset";
      document.body.style.overflow = "unset";
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.1);

      const sections = navigationData.navigation.links.map((link) =>
        link.href.replace("#", "")
      );
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${
        isScrolled ? " bg-white/90 md:bg-white/30 shadow-md" : "bg-transparent"
      } 
      md:backdrop-blur-md`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src={navigation.logo} alt="Logo" className="h-5 w-auto" />
        </Link>

        <div className="hidden md:flex items-center space-x-6 ml-auto">
          <nav className="flex items-center space-x-6 mr-4">
            {navigation.links.map((link) => (
              <motion.div
                key={link.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-gray-700 font-semibold hover:text-gray-900 transition duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-[#2770F4]"
                      : ""
                  }`}
                >
                  {link.title}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2770F4]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </motion.div>
            ))}
          </nav>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={navigation.ctaButton.href}
              className="px-6 py-4 bg-black text-white rounded-full hover:bg-black transition duration-300 shadow-md"
            >
              {navigation.ctaButton.text}
            </Link>
          </motion.div>
        </div>

        <div className="md:hidden ml-auto">
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle mobile menu"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-50 md:hidden bg-white w-full h-full flex flex-col"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
            >
              <div className="container mx-auto px-4 py-8 h-full flex flex-col">
                <div className="flex justify-between items-center space-y-4">
                  <Link href="/" className="flex items-center">
                    <img
                      src={navigation.logo}
                      alt="Logo"
                      className="h-6 w-auto"
                    />
                  </Link>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 focus:outline-none"
                    aria-label="Close mobile menu"
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>

                <div className="flex flex-col space-y-8 flex-grow mt-4">
                  <AnimatePresence>
                    {navigation.links.map((link, index) => (
                      <motion.div
                        key={link.id}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={linkVariants}
                        style={{
                          transitionDelay: `${index * 0.1}s`,
                          transformOrigin: "left center",
                        }}
                      >
                        <Link
                          href={link.href}
                          className="block text-2xl font-bold text-gray-800 hover:text-primary transition duration-300 py-3 border-b border-gray-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.title}
                          <div className="h-0.5 bg-primary mt-2 w-0 group-hover:w-full transition-all duration-300"></div>
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="mt-8"
                >
                  <Link
                    href={navigation.ctaButton.href}
                    className="w-full px-6 py-4 bg-black text-white text-center text-lg rounded-full hover:bg-primary-dark transition duration-300 shadow-xl"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {navigation.ctaButton.text}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
