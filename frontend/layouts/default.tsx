import Image from "next/image";
import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="w-full flex justify-between items-center py-3 bg-gray-800 px-3">
        <div className="flex items-center text-white font-bold text-xl">
          <Image src="/arm.png" alt="Logo" width={40} height={40} />
          <span className="ml-2">Wooblay</span>
        </div>

        <div className="flex space-x-4">
          <a href="/tos" className="text-white">
            Terms of Service
          </a>
          <a href="/privacy" className="text-white">
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
}
