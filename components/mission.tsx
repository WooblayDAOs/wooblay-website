import React, { useState, useEffect, useRef } from "react";

export default function Mission() {
  const lines = [
    "INNOVATION.",
    "INTEGRATION.",
    "AUTOMATION.",
    "TRANSPARENCY.",
    "COLLABORATION.",
    "",
    "What will you contribute?"
  ];

  const [typedLines, setTypedLines] = useState<string[]>([""]);
  const [isInView, setIsInView] = useState(false); // State to check if in view
  const [showCursor, setShowCursor] = useState(true); // State for blinking cursor
  const sectionRef = useRef(null); // Ref to the section
  const cursorIntervalRef = useRef<number | null>(null); // Ref to store the cursor interval

  // Cursor blinking effect
  useEffect(() => {
    cursorIntervalRef.current = window.setInterval(() => {
      setShowCursor((prev) => !prev); // Toggle cursor visibility
    }, 500); // Blinking interval

    return () => {
      if (cursorIntervalRef.current) {
        clearInterval(cursorIntervalRef.current); // Cleanup interval on unmount
      }
    };
  }, []);

  // Intersection Observer to start typing when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true); // Set in view when the section is visible
            observer.unobserve(entry.target); // Stop observing once in view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Typing effect
  useEffect(() => {
    if (!isInView) return;

    let currentLine = 0;
    let currentChar = 0;
    const typingInterval = 100; // Typing speed (milliseconds per character)
    const delayBetweenLines = 500; // Delay between lines

    const typeCharacter = () => {
      if (currentLine < lines.length) {
        if (currentChar < lines[currentLine].length) {
          setTypedLines((prevTypedLines) => {
            const newTypedLines = [...prevTypedLines];
            newTypedLines[currentLine] = lines[currentLine].substring(0, currentChar + 1);
            return newTypedLines;
          });
          currentChar++;
          setTimeout(typeCharacter, typingInterval);
        } else {
          currentLine++;
          currentChar = 0;
          setTypedLines((prevTypedLines) => [...prevTypedLines, ""]);
          setTimeout(typeCharacter, delayBetweenLines);
        }
      } else {
        // Stop the cursor blinking once typing is complete
        if (cursorIntervalRef.current) {
          clearInterval(cursorIntervalRef.current);
          setShowCursor(false); // Make sure the cursor disappears at the end
        }
      }
    };

    setTypedLines([""]);
    setTimeout(typeCharacter, typingInterval);
  }, [isInView]); // Start typing effect when in view

  return (
    <section ref={sectionRef} className="relative bg-white">
      <div className="flex justify-center items-start h-[100vh] p-8 md:p-0">
        {/* Set width and center the container using mx-auto */}
        <div className="text-3xl md:text-5xl flex flex-col gap-8 text-left leading-none mx-auto">
          {typedLines.map((line, index) => (
            <h3
              key={index}
              className="transition-transform transform hover:scale-105 leading-none text-black"
              style={{ paddingRight: '1rem' }}
            >
              {index === lines.length - 1 ? (
                <span className="font-bold">{line}</span>
              ) : (
                line
              )}
              {/* Add the blinking cursor only while typing */}
              {index === typedLines.length - 1 && showCursor && <span className="text-black">|</span>}
            </h3>
          ))}
        </div>
      </div>
    </section>
  );
}