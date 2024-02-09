"use client";

import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export const Project = (props: ProjectProps) => {
  const viewRef = useRef<HTMLDivElement>(null);
  /** we want to make an animation that makes this grow into the view...for this we use framer motion.
   * Framer motion has a hook called useScroll which takes an object with two properties [target and offset]. target is supposed to be a reference to
   * where we want to apply the animation. in this case to get the reference we need to use useRef.
   * The second property is the offset which is going to be an array; this means when we want to start animating,
   * we need a point to start the animation on the screen like the y axis and x axis of the screen.
   * In this case we want to start the animation as soon the viewport (x axis y axis) reaches the top of the target
   */
  const { scrollYProgress } = useScroll({
    target: viewRef,
    offset: ["0 1", "1.33 1"], // start animation when the bottom of viewport (0) crosses the top of the target (1) then also end animation when the bottom of the viewport has gone 33% (1.33) beyond the target (1)
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={viewRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group"
    >
      <article className="bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[18rem] flex group-even:flex-row-reverse hover:bg-gray-200 transition ease-in-out">
        <div className="py-4 px-5 sm:pl-8 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-medium">{props.title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">
            {props.description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
            {props.tags.map((content, index) => (
              <li
                className="border-black/[0.7] border px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-md flex justify-center items-center"
                key={index}
              >
                {content}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={props.imageUrl}
          alt={props.title}
          quality={95}
          className="rounded-t-lg absolute top-8 -right-40 w-[28.25rem] shadow-2xl h-full group-even:right-[initial] group-even:-left-40 transition ease-in-out group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-hover:scale-[1.04]"
        />
      </article>
    </motion.div>
  );
};
