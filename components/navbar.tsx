import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { FaDiscord, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="full" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image alt="Wooblay" height={40} src="/favicon.ico" width={40} />
            <p className="font-bold text-inherit">Wooblay</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <div className="hidden lg:flex gap-8 justify-start pl-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
        <NavbarItem className="hidden md:flex pl-4 gap-4">
          <div className="flex justify-center items-center space-x-4">
            <a href="https://x.com/RealWooblay" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="h-6 w-6 text-white" />
            </a>
            <a href="https://discord.gg/3JeUGzVrde" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="h-6 w-6 text-white" />
            </a>
          </div>
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-black font-bold"
            color="primary"
            href={"https://forms.gle/h6rLLHjtncVV46pi6"}
            radius="sm"
          >
            Join Waitlist
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mt-2 flex flex-col justify-center items-center">
          <NavbarMenuItem>
            <div className="flex items-center space-x-4 mb-8 mt-8">
              <a href="https://x.com/RealWooblay" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="h-6 w-6 text-black" />
              </a>
              <a href="https://discord.gg/3JeUGzVrde" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="h-6 w-6 text-black" />
              </a>
            </div>
            <Button
              isExternal
              as={Link}
              className="text-sm font-normal text-white font-bold"
              color="primary"
              href={"https://forms.gle/h6rLLHjtncVV46pi6"}
              radius="sm"
            >
              Join Waitlist
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
