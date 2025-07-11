enum ProjectTheme {
  primary = "primary",
  accent = "accent",
  neutral = "muted-foreground",
}

enum ProjectType {
  frontend = "Frontend",
  backend = "Backend",
  fullstack = "Fullstack",
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
    type: ProjectType.frontend,
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
    type: ProjectType.fullstack,
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
    type: ProjectType.fullstack,
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
    type: ProjectType.fullstack,
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
    description:
      "An e-commerce platform for IV drips, health services, and lab tests.",
    detailDescription:
      "Built with Next.js, MongoDB, Prisma, and Chakra UI, and powered by Contentful CMS, the platform enables seamless browsing and booking of wellness products and services.",
    image: "/projects/ivdrips.png",
    link: "https://ivdrips-rust.vercel.app/",
    github: "https://github.com/muneebhashone/ivdrips",
    type: ProjectType.fullstack,
    technologies: [
      { name: "TypeScript", theme: ProjectTheme.primary },
      { name: "Next.js", theme: ProjectTheme.primary },
      { name: "Node.js", theme: ProjectTheme.accent },
      { name: "MongoDB", theme: ProjectTheme.accent },
      { name: "Prisma ORM", theme: ProjectTheme.accent },
      { name: "Chakra UI", theme: ProjectTheme.neutral },
      { name: "Contentful CMS", theme: ProjectTheme.neutral },
    ],
  },
  {
    title: "Inspiria",
    description:
      "A travel booking platform for flights, hotels, and transport.",
    detailDescription:
      "Built with Next.js App Router, Material UI, and REST APIs, Inspiria lets users plan, book, and customize complete vacation experiences in one place.",
    image: "/projects/inspiria.png",
    link: "https://insperia-nextjs.vercel.app",
    github: "https://github.com/muneebhashone/insperia-nextjs",
    type: ProjectType.frontend,
    technologies: [
      { name: "TypeScript", theme: ProjectTheme.primary },
      { name: "Next.js", theme: ProjectTheme.primary },
      { name: "REST APIs", theme: ProjectTheme.accent },
      { name: "Material UI", theme: ProjectTheme.neutral },
    ],
  },
  {
    title: "QriosityNet",
    description:
      "A professional social network with job hiring and application features.",
    detailDescription:
      "My first professional project, QriosityNet is a social media web app built with React.js, Material UI, and Firebase, combining networking features with job posting and application capabilities.",
    image: "/projects/qriositynet.png",
    link: "https://qriositynet.vercel.app",
    github: "https://github.com/InaaraKalani/qriositynet",
    type: ProjectType.fullstack,
    technologies: [
      { name: "JavaScript", theme: ProjectTheme.primary },
      { name: "React.js", theme: ProjectTheme.primary },
      { name: "Firebase", theme: ProjectTheme.accent },
      { name: "Material UI", theme: ProjectTheme.neutral },
    ],
  },
];
