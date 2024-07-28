"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Carousel from "./carousel";

export function Welcome() {

    useEffect(() => {
        const animateElements = () => {
            const elements = document.querySelectorAll(".animate-bounce, .animate-slide, .animate-rotate");
            elements.forEach(element => {
                const effect = element.getAttribute('data-effect');
                if (effect === 'bounce') {
                    element.style.transform = `translateY(${Math.sin(Date.now() / 500) * 10}px)`;
                } else if (effect === 'slide') {
                    element.style.transform = `translateX(${Math.sin(Date.now() / 500) * 10}px)`;
                } else if (effect === 'rotate') {
                    element.style.transform = `rotate(${Math.sin(Date.now() / 500) * 10}deg)`;
                }
            });
            requestAnimationFrame(animateElements);
        };
        animateElements();
    }, []);

    return (
        <div className="relative bg-cover bg-center min-h-screen">
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 mb-24">
                <header className="relative z-10 px-6 sm:px-12 py-12 sm:py-16 flex flex-col items-center justify-center bg-opacity-90 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-xl shadow-2xl transform transition duration-500 hover:scale-105">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight sm:text-6xl xl:text-7xl text-center mb-6 sm:mb-10 text-white drop-shadow-lg">
                        Wooblay
                    </h1>
                    <nav className="flex flex-wrap gap-2 sm:gap-4 text-lg font-bold text-white">
                        <Link href="#" className="relative hover:underline underline-offset-4 transition duration-300 ease-in-out transform hover:scale-110">
                            Features
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transition-all duration-300"></span>
                        </Link>
                        <Link href="#" className="relative hover:underline underline-offset-4 transition duration-300 ease-in-out transform hover:scale-110">
                            Pricing
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transition-all duration-300"></span>
                        </Link>
                        <Link href="#" className="relative hover:underline underline-offset-4 transition duration-300 ease-in-out transform hover:scale-110">
                            About
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transition-all duration-300"></span>
                        </Link>
                        <Link href="#" className="relative hover:underline underline-offset-4 transition duration-300 ease-in-out transform hover:scale-110">
                            Contact
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transition-all duration-300"></span>
                        </Link>
                    </nav>
                </header>
            </div>
            <div className="absolute inset-0 z-0 opacity-75">
                <div className="hidden sm:block sm:absolute left-[-8%] top-40">
                    <Carousel />
                </div>
                <div className="block sm:hidden mt-48">
                    <Carousel />
                </div>
                <img
                    src="/blocks.png"
                    className="hidden sm:block absolute top-1 right-10 w-1/2 sm:w-1/3 h-auto animate-bounce"
                    alt="Overlapping Image 1"
                    data-effect="bounce"
                />
                <img
                    src="/arm.png"
                    className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 sm:w-1/4 h-auto animate-rotate"
                    alt="Overlapping Image 3"
                    data-effect="rotate"
                />
            </div>
        </div>
    );
}

export function UseCases() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section ref={ref} className={`py-12 bg-gray-50 ${inView ? 'animate-fade-in' : ''}`}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8 text-center">Best Use Cases</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Open Source Projects</h3>
                        <p className="text-gray-600">Collaborate on open-source projects with decentralized repositories and transparent contributions.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Business Solutions</h3>
                        <p className="text-gray-600">Develop and manage business solutions with advanced project management tools and AI integration.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Community Projects</h3>
                        <p className="text-gray-600">Engage with community projects and earn rewards through passive compensation and funding opportunities.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}