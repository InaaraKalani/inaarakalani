enum ProjectTheme {
  primary = "primary",
  accent = "accent",
  neutral = "neutral",
}

export const projects = [
  {
    title: "Gates and Doors Inc.",
    description:
      "An e-commerce website for a local gates and doors manufacturer.",
    detailDescription:
      "Built with Next.js App Router and powered by Sanity CMS, the platform allows the company to efficiently manage and showcase their product catalog and service offerings online.",
    image: "/projects/gates-and-doors-inc.png",
    link: "https://gdi-six.vercel.app",
    github: "https://github.com/InaaraKalani/gdi",
    technologies: [
      { name: "TypeScript", theme: ProjectTheme.primary },
      { name: "Next.js", theme: ProjectTheme.primary },
      { name: "Sanity", theme: ProjectTheme.accent },
      { name: "Shadcn UI", theme: ProjectTheme.neutral },
    ],
  },
  {
    title: "IDarea",
    description: "A secure document and identity management platform.",
    detailDescription:
      "Built to support private users, organizations, and verified authorities, the platform enables secure document sharing, wallet management, analytics, and employee oversight—streamlining identity and access workflows across multiple stakeholder types.",
    image: "/projects/idarea.png",
    link: "https://idarea-lyart.vercel.app",
    github: "https://github.com/InaaraKalani/idarea",
    technologies: [
      { name: "TypeScript", theme: ProjectTheme.primary },
      { name: "Next.js", theme: ProjectTheme.primary },
      { name: "Node.js", theme: ProjectTheme.accent },
      { name: "MongoDB", theme: ProjectTheme.accent },
      { name: "Shadcn UI", theme: ProjectTheme.neutral },
      { name: "Chart.js", theme: ProjectTheme.neutral },
    ],
  },
  {
    title: "Vollyme",
    description:
      "A social media platform empowering creators with tools to connect, share, and earn.",
    detailDescription:
      "Built with Next.js Page Router, Node.js, GraphQL, and Chakra UI, Vollyme offers a dynamic feed, chats, groups, follower management, and creator monetization tools.",
    image: "/projects/vollyme.png",
    link: "https://vollyme.com",
    github: "https://github.com/InaaraKalani/slayr-web",
    technologies: [
      { name: "TypeScript", theme: ProjectTheme.primary },
      { name: "Next.js", theme: ProjectTheme.primary },
      { name: "Node.js", theme: ProjectTheme.accent },
      { name: "GraphQL", theme: ProjectTheme.accent },
      { name: "MongoDB", theme: ProjectTheme.accent },
      { name: "Chakra UI", theme: ProjectTheme.neutral },
    ],
  },
  {
    title: "Dog Lovers",
    description: "An e-commerce platform for selling preplanned dog meals.",
    detailDescription:
      "Developed with Next.js, MongoDB, Prisma, Chakra UI, and Framer Motion, the app delivers a smooth and animated shopping experience for curated canine meal plans.",
    image: "/projects/dog-lovers.png",
    link: "https://dog-lovers.vercel.app",
    github: "https://github.com/InaaraKalani/dog-lovers",
    technologies: [
      { name: "TypeScript", theme: ProjectTheme.primary },
      { name: "Next.js", theme: ProjectTheme.primary },
      { name: "Prisma ORM", theme: ProjectTheme.accent },
      { name: "MongoDB", theme: ProjectTheme.accent },
      { name: "Chakra UI", theme: ProjectTheme.neutral },
      { name: "Framer Motion", theme: ProjectTheme.neutral },
    ],
  },
  {
    title: "IVDrips",
    description: "",
    detailDescription: "",
    image: "",
    link: "",
    github: "",
    technologies: [],
  },
  {
    title: "Inspiria",
    description: "",
    detailDescription: "",
    image: "",
    link: "",
    github: "",
    technologies: [],
  },
  {
    title: "QriosityNet",
    description: "",
    detailDescription: "",
    image: "",
    link: "",
    github: "",
    technologies: [],
  },
];
