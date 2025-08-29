import type { Contact, NavLink, Project, SkillGroup } from "./type"

export const navLinks: NavLink[] = [
  { label: "About me", href: "#about" },
  { label: "My work", href: "#work" },
  { label: "Skill", href: "#skill" },
  { label: "Contact", href: "#contact" },
]

export const projects: Project[] = [
  {
    id: "p1",
    title: "KTP Portfolio",
    description:
      "A modern, responsive developer portfolio built with Next.js, Tailwind CSS, and shadcn/ui.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui"],
  image: "/next.svg",
    repo: "https://github.com/example/ktpportfolio",
  },
  {
    id: "p2",
    title: "Web Application IT-BOOKING",
    description:
      "Real-time analytics dashboard with charts and auth integration.",
    tech: ["Next.js", "Chart.js"],
    image: "/images/itbooking.png",
    link: "https://it-booking.pcru.ac.th/",
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "CSS", level: "advanced" },
      { name: "JavaScript", level: "advanced" },
      { name: "React", level: "intermediate" },
      { name: "Next.js", level: "intermediate" },
      { name: "TypeScript", level: "advanced" },
      { name: "Bootstrap", level: "expert" },
      { name: "Tailwind CSS", level: "advanced" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "PHP", level: "advanced" },
      { name: "Node.js", level: "advanced" },
      { name: "Prisma", level: "intermediate" },
      { name: "PostgreSQL", level: "intermediate" },
    ],
  },
]

export const contact: Contact = {
  tel: "0638861802",
  email: "kittiphan.kb@gmail.com",
  github: "https://github.com/KTPPUz",
//   linkedin: "https://linkedin.com/in/yourname",
  location: "Bangkok, Thailand",
}
