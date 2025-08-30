import type { Contact, NavLink, Project, SkillGroup, Experience } from "./type"

export const navLinks: NavLink[] = [
  { label: "About me", href: "#about" },
  { label: "Experience", href: "#experience" },
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
    image: "/images/Next.js.png",
    repo: "https://github.com/KTPPUz/KTPPortfolio",
  },
  {
    id: "p2",
    title: "Web Application IT-BOOKING",
    description:
      "A web application for booking IT services.",
    tech: ["Bootstrap","Tailwind", "PHP", "JavaScript", "CSS" , "Framework Laravel 11"],
    image: "/images/lav.png",
    link: "https://it-booking.pcru.ac.th/",
  },
]

export const skillGroups: SkillGroup[] = [
  {
  category: "frontend",
    items: [
      { name: "CSS", level: "advanced" },
      { name: "JavaScript", level: "advanced" },
      { name: "React", level: "intermediate" },
      { name: "Next.js", level: "intermediate" },
      { name: "TypeScript", level: "intermediate" },
      { name: "Bootstrap", level: "expert" },
      { name: "Tailwind CSS", level: "advanced" },
    ],
  },
  {
  category: "backend",
    items: [
      { name: "PHP", level: "advanced" },
      { name: "MySQL", level: "advanced" },
      { name: "SQL Server", level: "advanced" },
      { name: "Node.js", level: "intermediate" },
      { name: "Laravel", level: "advanced" },
    //   { name: "Prisma", level: "intermediate" },
    //   { name: "PostgreSQL", level: "intermediate" },
    ],
  },
  {
  category: "tool",
    items: [
      { name: "Git/GitHub", level: "advanced" },
      { name: "REST API", level: "intermediate" },
      { name: "Postman", level: "advanced" },
      { name: "Figma (UI/UX)", level: "intermediate" },
    //   { name: "Prisma", level: "intermediate" },
    //   { name: "PostgreSQL", level: "intermediate" },
    ],
  },
]

export const contact: Contact = {
  tel: "0638861802",
  email: "kittiphan.kb@gmail.com",
  github: "https://github.com/KTPPUz",
//   linkedin: "https://linkedin.com/in/yourname",
  location: "Nonthaburi, Thailand",
}

export const experiences: Experience[] = [
  {
    id: "e1",
    company: "Kumwell Corporation PLC.",
    role: "Software Engineer",
    period: "13/05/2025 – Present",
    location: "Nonthaburi, TH",
    details: [
      "วิเคราะห์ ออกแบบและพัฒนาระบบเว็บไซต์ ใช้ภายในองค์กร.",
      "โดยใช้ Laravel Framework พร้อมกับ Bootstrap, Tailwind CSS, CSS, PHP, MySQL และ JavaScript เพื่อสร้างระบบที่ทันสมัย ใช้งานง่าย และมีประสิทธิภาพ",
    ],
  },
]
