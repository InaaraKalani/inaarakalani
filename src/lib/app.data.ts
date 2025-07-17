import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export const landingHeroTexts = [
  "Full-Stack Web Developer",
  "React Specialist",
  "Next.js Developer",
  "UI/UX Enthusiast",
  "Animation Expert",
  "AI Enthusiast",
];

export const GitHub = {
  label: "GitHub",
  name: "@inaara-kalani",
  url: "https://github.com/inaara-kalani",
  icon: FiGithub,
};

export const LinkedIn = {
  label: "LinkedIn",
  name: "/in/inaara-kalani",
  url: "https://www.linkedin.com/in/inaara-kalani/",
  icon: FiLinkedin,
};

export const Email = {
  label: "Email",
  name: "kalani.inaara@gmail.com",
  url: "mailto:kalani.inaara@gmail.com",
  icon: FiMail,
};

export const heroSocialLinks = [GitHub, LinkedIn, Email];

export const contactSocialLinks = [Email, GitHub, LinkedIn];

export const navLinks = [
  { name: "About", url: "/about" },
  { name: "Projects", url: "/projects" },
  { name: "Philosophy", url: "/philosophy" },
  { name: "LinkedIn", url: LinkedIn.url },
];
