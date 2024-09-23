import React from "react";
import { Button } from "@nextui-org/button";

export default function GoatedTerminal() {
  return (
    <div className="bg-white p-6">
      <div className="flex flex-col space-y-8 md:space-y-16 text-center p-4 font-mono bg-black text-white p-6 md:px-6 rounded-[20px]">
        <div>
          {/* Mobile */}
          <pre className="text-primary text-xs sm:text-base font-bold leading-[1rem] sm:leading-[1.25rem] py-8 no-global-font md:hidden overflow-x-auto">
            {`
██╗    ██╗
██║    ██║
██║ █╗ ██║
██║███╗██║
╚███╔███╔╝
 ╚══╝╚══╝ 
          `}
          </pre>

          {/* Desktop */}
          <pre className="hidden md:block text-primary text-base font-bold leading-[1.25rem] py-16 no-global-font overflow-x-auto">
            {`
██╗    ██╗ ██████╗  ██████╗ ██████╗ ██║      █████╗ ██╗   ██╗
██║    ██║██╔═══██╗██╔═══██╗██╔══██╗██║     ██╔══██╗╚██╗ ██╔╝
██║ █╗ ██║██║   ██║██║   ██║██████╔╝██║     ███████║ ╚████╔╝ 
██║███╗██║██║   ██║██║   ██║██╔══██╗██║     ██╔══██║  ╚██╔╝  
╚███╔███╔╝╚██████╔╝╚██████╔╝██████╔╝███████╗██║  ██║   ██║   
 ╚══╝╚══╝  ╚═════╝  ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝   
          `}
          </pre>
          <div className="text-lg sm:text-2xl">
            Focus on{" "}
            <span className="text-[#39FF14] font-bold underline">Innovation</span>,
          </div>
          <div className="pb-8 text-lg sm:text-2xl">
            we&#39;ll{" "}
            <span className="bg-white text-black font-bold px-1">Automate</span>{" "}
            the rest!
          </div>
        </div>
        <div>
          <div className="text-base sm:text-lg">Early Access Coming Soon!</div>
          <div className="p-4 sm:p-6">
            <Button
              as="a"
              className="text-xs sm:text-sm font-normal text-black font-bold"
              color="primary"
              href={"/waitlist"}
              radius="sm"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}