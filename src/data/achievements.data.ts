const AchievementColor = {
  yellow: {
    bg: "bg-yellow-500/10",
    text: "text-yellow-600",
    darkText: "dark:text-yellow-400",
  },
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-600",
    darkText: "dark:text-blue-400",
  },
  green: {
    bg: "bg-green-500/10",
    text: "text-green-600",
    darkText: "dark:text-green-400",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-600",
    darkText: "dark:text-purple-400",
  },
};

export const achievements = [
  {
    title: "University Gold Medalist",
    highlight: "Top Academic Honor",
    description:
      "Graduated with the highest CGPA in BSCS, earning a Gold Medal and 6 Merit Scholarships. Recognized on the Chancellor’s Roll for consistent academic excellence.",
    color: AchievementColor.yellow,
  },
  {
    title: "Communication & Cultural Insight",
    highlight: "Global Mindset Growth",
    description:
      "Achieved a 7.5 Band (CEFR C1) in IELTS. \nGaming and global connections sharpened my communication and broadened my worldview.",
    color: AchievementColor.blue,
  },
  {
    title: "Creative Music Journey",
    highlight: "Poetry & Composition",
    description:
      "Studied piano and music theory for 7 months; wrote countless poems and song lyrics. Run a public Instagram to share creative writing and music ideas.",
    color: AchievementColor.green,
  },
  {
    title: "Fullstack Developer & Mentor",
    highlight: "4+ Years Experience",
    description:
      "Built, deployed, and maintained real-world products since 2021. Trained interns and led solo projects early in my career.",
    color: AchievementColor.purple,
  },
];
