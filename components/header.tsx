"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { clsx } from "clsx";

export const Header = () => {
  const [active, setActive] = useState("Home");
  return (
    <header className="z-[999] relative flex justify-center">
      <motion.div
        className="fixed top-0 h-[4.5rem] w-full flex items-center rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav className="flex top-[0.15rem] mx-auto h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gay-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                className="h-3/4 flex justify-center items-center relative"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  onClick={() => setActive(link.name)}
                  className={clsx(
                    "flex justify-center items-center w-full p-3 hover:text-gray-950 transition outline-none",
                    { "text-gray-950": active === link.name }
                  )}
                  href={link.hash}
                >
                  {link.name}

                  {link.name === active && (
                    <motion.span
                      className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                      layoutId="active"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};
