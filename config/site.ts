export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Wooblay",
  description: "Build ideas, contribute or own them.",
  navItems: [
    {
      label: "",
      href: "/",
    },
    {
      label: "For Contributors",
      href: "/contributors",
    },
    {
      label: "For Ideas",
      href: "/ideas",
    },
    // {
    //   label: "Our Community",
    //   href: "/community",
    // },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "For Contributors",
      href: "/contributors",
    },
    {
      label: "For Ideas",
      href: "/ideas",
    },
    // {
    //   label: "Our Community",
    //   href: "/community",
    // },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
