import React, { useEffect, useRef, useState } from "react";

import TextNImage from "./textnimage";

const contentData = [
  {
    id: "Collaborate",
    heading: "Collaborate",
    header: "Build with your Dream Team",
    content:
      "Release positions to the Feed and let your team find you, assign payment or let our AI distribute pay for you based on contributions. All you need to do is develop.",
    image: "/collaborate.webp",
  },
  {
    id: "Contribute",
    heading: "Contribute",
    header: "Play your part in a project",
    content:
      "From completing tasks to voting in project direction, your contributions make impact to the progression and decisions of a project.",
    image: "/contribute.webp",
  },
  {
    id: "Create",
    heading: "Create",
    header: "Launch your idea",
    content:
      "Innovate in just a few clicks and create your project on the Blockchain, allowing infinite possibilities of enhancements for your project, just take a look at our extensions.",
    image: "/create.webp",
  },
  {
    id: "Earn",
    heading: "Earn",
    header: "You\u0027re rewarded for simply contributing",
    content:
      "There are so many way to make money, for yourself or your project. From launching fundraises with token promises, completing paid tasks, accepting project bounties or simply innovating a good product. Money and innovation are equally as important so we make doing both easy.",
    image: "/earn.webp",
  },
];

export default function Walkthrough() {
  const [activeSection, setActiveSection] = useState("Collaborate");
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const leftNavRef = useRef<HTMLDivElement>(null);
  const [isLeftNavVisible, setIsLeftNavVisible] = useState(false);

  // Observe the left-side sticky navigation to trigger scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Set visibility when left side is fully in view
          setIsLeftNavVisible(entry.isIntersecting);
        });
      },
      { threshold: 1.0 }, // Full visibility of left side required
    );

    if (leftNavRef.current) {
      observer.observe(leftNavRef.current);
    }

    return () => {
      if (leftNavRef.current) {
        observer.unobserve(leftNavRef.current);
      }
    };
  }, []);

  // IntersectionObserver for the sections to highlight active header
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("data-section")!);
          }
        });
      },
      { threshold: 0.5 },
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Container for entire component scroll */}
      <div
        className={`w-full h-full no-scrollbar overflow-hidden ${isLeftNavVisible ? "overflow-y-auto" : "overflow-y-hidden"}`}
      >
        <div className="flex justify-center">
          {/* Left Side: Sticky navigation */}
          <div
            ref={leftNavRef}
            className="sticky top-[0%] z-10 flex flex-col justify-start p-8 md:p-4 shadow-md h-full"
          >
            {contentData.map((section, index) => (
              <h1
                key={section.id}
                className={`cursor-pointer py-2 md:py-4 text-md md:text-6xl transition-colors ${
                  activeSection === section.id
                    ? "text-primary font-bold"
                    : "text-gray-500"
                }`}
                onClick={() => {
                  const targetSection = sectionsRef.current[index];

                  if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {section.heading}
              </h1>
            ))}
          </div>

          {/* Right Side: Scrolling content */}
          <div className="w-1/2">
            {contentData.map((section, index) => (
              <section
                key={section.id}
                ref={(el: HTMLDivElement) => {
                  if (el) sectionsRef.current[index] = el;
                }}
                className={`min-h-screen flex items-center justify-center 
                                    ${index === 0 ? "mt-[-200px] md:mt-[-300px]" : ""} 
                                    ${index === contentData.length - 1 ? "mb-[200px] md:mb-[300px]" : ""}`}
                data-section={section.id}
              >
                <div>
                  <TextNImage
                    heading={section.header}
                    imageUrl={`${section.image}`}
                    reverse={index % 2 === 0}
                    text={section.content}
                  />
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
