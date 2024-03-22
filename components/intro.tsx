"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import ProfileImg from "@/public/profileImg.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight2, DocumentDownload } from "iconsax-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import WelcomeAnimation, { BoyWavingAnimation } from "./welcome-animation";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-content";

const Intro = () => {
  const MotionImage = motion(Image);

  const { ref, inView } = useInView(
    { threshold: 0.5 } // when 50% of the about content is in view
  );
  const { setActive } = useActiveSectionContext();

  useEffect(() => {
    if (inView) setActive("Home");
  }, [inView]);

  return (
    <section
      className="text-center mb-28 max-w-[60rem] sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex justify-center items-center">
        <div className="relative">
          <MotionImage
            src={ProfileImg}
            alt="Solomon Portrait"
            width={"192"}
            height={"192"}
            quality={"95"}
            priority={true}
            className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          />
          <motion.span
            className="text-3xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello World, I'm Solomon Ndifereke.</span>
        <br /> I'm a <span className="font-bold">
          Software Engineer
        </span> with <span className="font-bold">5 years</span> of engineering
        experience. I enjoy building{" "}
        <span className="italic">usable products</span>.
      </motion.h1>
      <motion.div
        className="flex sm:flex-row flex-col justify-center gap-3 px-4 font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex gap-2.5 sm:flex-row flex-col">
          <Link
            href="#contact"
            className="capitalize bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition group"
          >
            Contact Me
            <ArrowRight2
              size={20}
              className="group-hover:translate-x-3 transition ease-in-out"
            />
          </Link>
          <a
            className="bg-white flex items-center gap-2 px-7 py-3 rounded-full cursor-pointer outline-none focus:scale-110 hover:scale-110 active:scale-105 transition group border border-black/10"
            href="/CV.pdf"
            download
          >
            Download CV{" "}
            <DocumentDownload
              size={20}
              className="group-hover:translate-y-1 transition ease-in-out"
            />
          </a>
        </div>

        <a
          className="cursor-pointer bg-white text-gray-700 p-4 flex items-center justify-center outline-none rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition group border border-black/10 hover:text-gray-950"
          href="https://linkedin.com/in/ndifereke"
          target="_blank"
        >
          <LuLinkedin />
        </a>
        <a
          className="cursor-pointer bg-white text-gray-700 p-4 flex items-center justify-center outline-none rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition group border border-black/10 hover:text-gray-950"
          href="https://github.com/DR-FREKE"
          target="_blank"
        >
          <LuGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
