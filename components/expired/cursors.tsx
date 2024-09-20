import React from "react";

import { Image } from "@nextui-org/image";
import { motion } from "framer-motion";

export default function Cursors() {
  return (
    <div
      className="p-6 md:mx-6 overflow-hidden md:pt-32"
      style={{
        height: "80vh",
        background:
          "linear-gradient(to bottom, #ffffff, #effaff ,#DEEFF5, #87a6b4, #374850, #04020D, #04020D, #04020D, #04020D, #04020D)",
      }}
    >
      <div className="text-black flex flex-col justify-center items-center">
        <h1 className="text-5xl font-interTextBold">Collaborative Ecosystem</h1>
        <p className="font-interText mt-4">
          People working together to make an idea happen.
        </p>
      </div>

      {/* First arrow - bottom middle */}
      <motion.div
        className="hidden sm:block absolute bottom-[-65%] left-[50%] translate-x-[-120px] w-16 md:w-36"
        initial={{ x: "-120px", y: 0, opacity: 1 }}
        whileInView={{ x: "-50px", y: "-20vh", opacity: 0 }}
        transition={{ ease: "easeOut", duration: 2.5, delay: 3 }}
      >
        <Image src="/cursorBM.png" alt="Image 1" />
      </motion.div>

      {/* Second arrow - bottom right*/}
      <motion.div
        className="hidden sm:block absolute bottom-[-58%] right-[19%] w-16 md:w-36"
        initial={{ x: 0, y: 0, opacity: 1 }}
        whileInView={{ x: "-20vw", y: "-15vh", opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1.5, delay: 2.5 }}
      >
        <Image src="/cursorBR.png" alt="Image 2" />
      </motion.div>

      {/* Third arrow - right */}
      <motion.div
        className="hidden sm:block absolute bottom-[-24%] right-[15%] w-16 md:w-36"
        initial={{ x: 0, y: 0, opacity: 1 }}
        whileInView={{ x: "-25vw", y: "4vh", opacity: 0 }}
        transition={{ ease: "easeOut", duration: 2.5, delay: 2 }}
      >
        <Image src="/cursorR.png" alt="Image 3" />
      </motion.div>

      {/* Fourth arrow - top middle */}
      <motion.div
        className="hidden sm:block absolute bottom-[-18%] right-[40%] w-16 md:w-36"
        initial={{ x: 0, y: 0, opacity: 1 }}
        whileInView={{ x: "-7vw", y: "15vh", opacity: 0 }}
        transition={{ ease: "easeOut", duration: 2.5, delay: 3 }}
      >
        <Image src="/cursorTM.png" alt="Image 3" />
      </motion.div>

      {/* Fifth arrow - top left */}
      <motion.div
        className="hidden sm:block absolute bottom-[-20%] left-[27%] w-16 md:w-36"
        initial={{ x: 0, y: 0, opacity: 1 }}
        whileInView={{ x: "18vw", y: "10vh", opacity: 0 }}
        transition={{ ease: "easeOut", duration: 2.5, delay: 2.5 }}
      >
        <Image src="/cursorTL.png" alt="Image 3" />
      </motion.div>

      {/* Sixth arrow - bottom left */}
      <motion.div
        className="hidden sm:block absolute bottom-[-53%] left-[15%] w-16 md:w-36"
        initial={{ x: 0, y: 0, opacity: 1 }}
        whileInView={{ x: "25vw", y: "-10vh", opacity: 0 }}
        transition={{ ease: "easeOut", duration: 2.5, delay: 2.5 }}
      >
        <Image src="/cursorBL.png" alt="Image 3" />
      </motion.div>

    </div>
  );
}
