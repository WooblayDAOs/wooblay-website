import React from "react";
import { Image } from "@nextui-org/image";
import { motion } from "framer-motion";

import Stats from "./stats";

export default function Intro() {
  return (
    <div
      className="p-6 md:mx-6 md:rounded-t-[20px] pt-32 h-screen mb-32"
      style={{
        background:
          "linear-gradient(to bottom, #DEEFF5, #ffffff, #DEEFF5, #ffffff, #ffffff, #ffffff, #000000, #000000, #000000, #000000)",
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-[800px]">
          <Image alt="Header1" height="auto" src="/h1.png" width="100%" />
        </div>
        <motion.div
          className="w-full max-w-[1000px] mt-4"
          initial={{ opacity: 0 }}
          transition={{ duration: "0.5", delay: 0.2, ease: "easeIn" }}
          whileInView={{ opacity: 1 }}
        >
          <Image alt="Header2" height="auto" src="/h2.png" width="100%" />
        </motion.div>
      </div>
      <div className="mt-8 md:mt-44">
        <Stats />
      </div>
    </div>
  );
}
