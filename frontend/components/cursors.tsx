import React from 'react';
import { Image } from "@nextui-org/image";
import { motion } from 'framer-motion';

export default function Cursors() {

    return (
        <div className="mx-6 overflow-hidden pt-32" style={{ height: '80vh', background: 'linear-gradient(to bottom, #ffffff, #DEEFF5, #ffffff, #DEEFF5, #ADD8E6, #04020D, #04020D, #04020D, #04020D)' }}>
            {/* First arrow - middle right */}
            <motion.div
                className='absolute bottom-[-5%] left-[50%] translate-x-[-120px]'
                initial={{ x: '-120px', y: 0, opacity: 1 }}
                whileInView={{ x: '-10px', y: '-15vh', opacity: 0 }}
                transition={{ ease: "easeOut", duration: 3, delay: 1.5 }}
            >
                <Image
                    src="/cursorprac.png"
                    alt="Image 1"
                    width="30px"
                />
            </motion.div>

            {/* Second arrow - bottom middle*/}
            <motion.div
                className='absolute bottom-[-10%] right-[29%]'
                initial={{ x: 0, y: 0, opacity: 1 }}
                whileInView={{ x: '-20vw', y: '-20vh', opacity: 0 }}
                transition={{ ease: "easeOut", duration: 3, delay: 0.5 }}
            >
                <Image
                    src="/cursorprac.png"
                    alt="Image 2"
                    width="30px"
                />
            </motion.div>

            {/* Third arrow - bottom right */}
            <motion.div
                className='absolute bottom-[15%] right-[22%]'
                initial={{ x: 0, y: 0, opacity: 1 }}
                whileInView={{ x: '-25vw', y: '4vh', opacity: 0 }}
                transition={{ ease: "easeOut", duration: 3, delay: 0.5 }}
            >
                <Image
                    src="/cursorprac.png"
                    alt="Image 3"
                    width="30px"
                />
            </motion.div>

            {/* Fourth arrow - top middle/right */}
            <motion.div
                className='absolute bottom-[25%] right-[40%]'
                initial={{ x: 0, y: 0, opacity: 1 }}
                whileInView={{ x: '-7vw', y: '15vh', opacity: 0 }}
                transition={{ ease: "easeOut", duration: 3, delay: 1.5 }}
            >
                <Image
                    src="/cursorprac.png"
                    alt="Image 3"
                    width="30px"
                />
            </motion.div>

            {/* Fifth arrow - top middle/left */}
            <motion.div
                className='absolute bottom-[20%] left-[32%]'
                initial={{ x: 0, y: 0, opacity: 1 }}
                whileInView={{ x: '18vw', y: '10vh', opacity: 0 }}
                transition={{ ease: "easeOut", duration: 3, delay: 1.5 }}
            >
                <Image
                    src="/cursorprac.png"
                    alt="Image 3"
                    width="30px"
                />
            </motion.div>

            {/* Sixth arrow - bottom left */}
            <motion.div
                className='absolute bottom-[0%] left-[25%]'
                initial={{ x: 0, y: 0, opacity: 1 }}
                whileInView={{ x: '25vw', y: '-10vh', opacity: 0 }}
                transition={{ ease: "easeOut", duration: 3, delay: 1.5 }}
            >
                <Image
                    src="/cursorprac.png"
                    alt="Image 3"
                    width="30px"
                />
            </motion.div>

            <div className='text-black flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-interTextBold'>Collaborative Ecosystem</h1>
                <p className='font-interText mt-4'>People working together to make something happen.</p>
            </div>
        </div >
    );
}