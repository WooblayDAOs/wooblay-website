import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";

import { useRouter } from "next/router";

import { fontSans, fontMono } from "@/config/fonts";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <main className="normal text-foreground bg-background font-workSans">
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
