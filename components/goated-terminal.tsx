import { Button } from "@nextui-org/button";

export default function GoatedTerminal() {
  return (
    <div className="flex flex-col space-y-16 text-center p-4 font-mono">
      <div>
        <pre className="text-purple-700 text-base font-bold leading-[1.25rem] my-24 no-global-font">
          {`
██╗    ██╗ ██████╗  ██████╗ ██╗     ██████╗  █████╗ ██╗   ██╗
██║    ██║██╔═══██╗██╔═══██╗██║     ██╔══██╗██╔══██╗╚██╗ ██╔╝
██║ █╗ ██║██║   ██║██║   ██║██║     ██████╔╝███████║ ╚████╔╝ 
██║███╗██║██║   ██║██║   ██║██║     ██╔══██╗██╔══██║  ╚██╔╝  
╚███╔███╔╝╚██████╔╝╚██████╔╝███████╗██████╔╝██║  ██║   ██║   
 ╚══╝╚══╝  ╚═════╝  ╚═════╝ ╚══════╝╚═════╝ ╚═╝  ╚═╝   ╚═╝   
    `}
        </pre>
        <div className="text-2xl">
          Focus on{" "}
          <span className="text-blue-300 font-bold underline">Innovation</span>,
        </div>
        <div className="mb-8 text-2xl">
          We&#39;ll{" "}
          <span className="bg-white text-black font-bold px-1">Automate</span>{" "}
          the rest!
        </div>
      </div>
      <div>
        <div>Early Access Coming Soon!</div>
        <div className="m-6">
          <Button
            as="a"
            className="text-sm font-normal text-black font-bold"
            color="primary"
            href={"/waitlist"}
            radius="sm"
          >
            Apply Now
          </Button>
        </div>
        <div className="w-fit flex flex-row items-center space-x-4 mx-auto">
          <div>
            {/**
                         <Input
                            className="w-80 rounded-none border-2 border-double border-[#98971A] text-[#9eb08c] font-bold text-base focus-visible:ring-0"
                            placeholder="email address"
                            type="email"
                        />
                         */}
          </div>
          <div>
            {/**
                         <Button
                            variant="outline"
                            className="rounded-none border-2 border-dotted border-[#98971A] text-white bg-transparent hover:bg-transparent hover:text-white hover:border-solid"
                        >
                            Join
                        </Button>
                         */}
          </div>
        </div>
      </div>
    </div>
  );
}
