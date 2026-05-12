export type NavGroup = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

export const primaryNav = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const utilityNav = [
  { label: "Book a Strategy Call", href: "/book-strategy-call" },
  { label: "Get an Audit", href: "/get-an-audit" },
  { label: "Request Proposal", href: "/request-proposal" },
];

export const megaMenu: Record<string, NavGroup[]> = {
  Solutions: [
    {
      title: "Increase Revenue",
      links: [
        { label: "Digital Marketing", href: "/solutions/digital-marketing" },
        { label: "SEO", href: "/solutions/seo" },
        { label: "Ecommerce Development", href: "/solutions/ecommerce-development" },
      ],
    },
    {
      title: "Build Digital Infrastructure",
      links: [
        { label: "Software Development", href: "/solutions/software-development" },
        { label: "Mobile App Development", href: "/solutions/mobile-app-development" },
        { label: "Cloud & DevOps", href: "/solutions/cloud-devops" },
      ],
    },
  ],
  Industries: [
    {
      title: "Industry Systems",
      links: [
        { label: "Healthcare", href: "/industries/healthcare" },
        { label: "Real Estate", href: "/industries/real-estate" },
        { label: "Legal", href: "/industries/legal" },
        { label: "SaaS", href: "/industries/saas" },
      ],
    },
  ],
};
