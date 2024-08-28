"use client";

import React, { useState, useEffect } from 'react';
import { Image } from "@nextui-org/image";
import Cursors from './cursors';
import { motion } from 'framer-motion';

export default function Intro() {

    return (
        <div className="mx-6 rounded-t-[20px] pt-32" style={{ height: '60vh', background: 'linear-gradient(to bottom, #DEEFF5, #ffffff, #DEEFF5, #ffffff, #ffffff, #ffffff' }}>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-full max-w-[800px]'>
                    <Image
                        alt="Header1"
                        src="/h1.png"
                        width="100%"
                        height="auto"
                    />
                </div>
                <motion.div className='w-full max-w-[1000px] mt-4' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: "0.5", delay: 0.2, ease: "easeIn" }}>
                    <Image
                        alt="Header2"
                        src="/h2.png"
                        width="100%"
                        height="auto"
                    />
                </motion.div>
            </div>
        </div>
    );
}