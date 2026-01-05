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
    image: "/images/port.png",
    repo: "https://github.com/KTPPUz/KTPPortfolio",
  },
  {
    id: "p2",
    title: "Kumwell-Glam",
    description:
      "A modern, responsive developer portfolio built with Laravel, Tailwind CSS, and shadcn/ui.",
    tech: ["Laravel" ,"Tailwind", "PHP", "JavaScript", "CSS"],
    image: "/images/kumwell.png",
    // repo: "https://github.com/KTPPUz/kumwellglam",
    link: "https://kumwell-glam.itfeature.tech/",
    
  },
  {
    id: "p3",
    title: "Web Application IT-BOOKING",
    description:
      "A web application for booking IT services.",
    tech: ["Bootstrap","Tailwind", "PHP", "JavaScript", "CSS" , "Framework Laravel 11"],
    image: "/images/booking.png",
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
    id: "e2",
    image: "/images/orange.png",
    company: "ORANGE TECHNOLOGY SOLUTION COMPANY LIMITED",
    role: "Software Engineer",
    period: "08/01/2025 – Present",
    location: "Bangkok, TH",
    details: [
      "วิเคราะห์ ออกแบบและพัฒนาระบบเว็บไซต์ สำหรับลูกค้าขององค์กร.",
      "โดยใช้ Laravel Framework พร้อมกับ Bootstrap, Tailwind CSS, CSS, PHP, MySQL และ JavaScript เพื่อสร้างระบบที่ทันสมัย ใช้งานง่าย และมีประสิทธิภาพ",
    ],
  },
  {
    id: "e1",
    image: "/images/kml.png",
    company: "Kumwell Corporation PLC.",
    role: "Software Engineer",
    period: "13/05/2025 – 30/12/2025",
    location: "Nonthaburi, TH",
    details: [
      "วิเคราะห์ ออกแบบและพัฒนาระบบเว็บไซต์ ใช้ภายในองค์กร.",
      "โดยใช้ Laravel Framework พร้อมกับ Bootstrap, Tailwind CSS, CSS, PHP, MySQL และ JavaScript เพื่อสร้างระบบที่ทันสมัย ใช้งานง่าย และมีประสิทธิภาพ",
    ],
  },
]
