export const siteConfig = {
  name: "NOKKA",
  description: "Nemzetközi Oktatási és Kutatási Központ Alapítvány - Közgazdasági kutatás, tanácsadás és oktatás",
  url: "https://nokka.hu",
  ogImage: "https://nokka.hu/og.png",
  links: {
    linkedin: "https://linkedin.com/company/nokka-hu",
    email: "info@nokka.hu",
  },
  nav: [
    {
      title: "Kutatás",
      href: "/research",
    },
    {
      title: "Tanácsadás", 
      href: "/consulting",
    },
    {
      title: "Oktatás",
      href: "/education",
    },
    {
      title: "Rólunk",
      href: "/about",
    },
    {
      title: "Kapcsolat",
      href: "/contact",
    },
  ],
}

export type SiteConfig = typeof siteConfig