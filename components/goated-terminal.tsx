export default function GoatedTerminal() {
    return (
        <div
            className="flex flex-col space-y-16 text-center p-4 font-mono"
        >
            <div>
                <pre
                    className="text-[#EFE7C0] text-base font-bold leading-[1.25rem] my-24"
                >
                    <div>██╗    ██╗ ██████╗  ██████╗ ██╗     ██████╗  █████╗ ██╗   ██╗</div>
                    <div>██║    ██║██╔═══██╗██╔═══██╗██║     ██╔══██╗██╔══██╗╚██╗ ██╔╝</div>
                    <div>██║ █╗ ██║██║   ██║██║   ██║██║     ██████╔╝███████║ ╚████╔╝ </div>
                    <div>██║███╗██║██║   ██║██║   ██║██║     ██╔══██╗██╔══██║  ╚██╔╝  </div>
                    <div>╚███╔███╔╝╚██████╔╝╚██████╔╝███████╗██████╔╝██║  ██║   ██║   </div>
                    <div> ╚══╝╚══╝  ╚═════╝  ╚═════╝ ╚══════╝╚═════╝ ╚═╝  ╚═╝   ╚═╝   </div>
                </pre>
                <div>
                    <span className="text-[#00FF00] font-bold underline">Build</span> great ideas
                </div>
                <div
                    className="mb-8"
                >
                    Contribute or <span className="bg-[#00FF00] text-[#1C1C1C] font-bold px-1">Own</span> them!
                </div>
                {/**
                 <Button
					variant="outline"
					className="rounded-none border-2 border-dotted border-[#98971A] text-white bg-transparent hover:bg-transparent hover:text-white hover:border-solid"
				>
					Start Building
				</Button>
                */}
            </div>
            <div>
                <div>
                    Be one of the first to try <span className="text-[#00FF00] font-bold">Wooblay</span>
                </div>
                <div
                    className="mb-6"
                >
                    Join the waitlist list
                </div>
                <div
                    className="w-fit flex flex-row items-center space-x-4 mx-auto"
                >
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