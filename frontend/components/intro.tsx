"use client";

import React, { useState, useEffect } from 'react';
import { Image } from "@nextui-org/image";

export default function Intro() {
    const [scrollY, setScrollY] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const animationHeight = window.innerHeight / 2;

            if (currentScrollY <= animationHeight) {
                setScrollY(currentScrollY);
                setProgress(currentScrollY / animationHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getTransformStyle = (startX: any, startY: any, scaleStart: any) => {
        const moveX = (window.innerWidth / 2 - startX) * progress;
        const moveY = (window.innerHeight / 2 - startY) * progress;
        const scale = Math.max(scaleStart - progress, 0.2);

        return {
            transform: `translate(${moveX}px, ${moveY}px) scale(${scale})`,
            opacity: scale,
        };
    };

    return (
        <div className="mx-6 rounded-[20px]" style={{ height: '150vh', background: 'linear-gradient(to bottom, #DEEFF5, #ffffff, #DEEFF5, #ffffff, #DEEFF5, #ADD8E6, #04020D, #04020D, #04020D, #04020D)' }}>
            <div className='flex flex-col justify-center items-center pt-32 pb-32'>
                <div className='w-full max-w-[800px]'>
                    <Image
                        alt="Header1"
                        src="/h1.png"
                        width="100%"
                        height="auto"
                    />
                </div>
                <div className='w-full max-w-[1000px] mt-4'>
                    <Image
                        alt="Header2"
                        src="/h2.png"
                        width="100%"
                        height="auto"
                    />
                </div>
            </div>

            <div className="relative inset-0">
                <Image
                    src="/cursorprac.png"
                    alt="Image 1"
                    width="50px"
                    className="absolute"
                    style={getTransformStyle(100, 200, 1)}
                />
                <Image
                    src="/cursorprac.png"
                    alt="Image 2"
                    width="60px"
                    className="absolute"
                    style={getTransformStyle(300, 100, 1)}
                />
                <Image
                    src="/cursorprac.png"
                    alt="Image 3"
                    width="70px"
                    className="absolute"
                    style={getTransformStyle(500, 300, 1)}
                />
            </div>

            <div className='text-black flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-interTextBold'>Collaborative Ecosystem</h1>
                <p className='font-interText mt-4'>People working together to make something happen.</p>
            </div>
        </div>
    );
}