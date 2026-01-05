"use client"
import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

export type Lang = "th" | "en"

type Dict = Record<string, Record<Lang, string>>

const dict: Dict = {
  // navbar & common
  "nav.about": { th: "เกี่ยวกับฉัน", en: "About me" },
  "nav.work": { th: "ผลงาน", en: "My work" },
  "nav.skill": { th: "ทักษะ", en: "Skill" },
  "nav.contact": { th: "ติดต่อ", en: "Contact" },
  "cta.viewWork": { th: "ดูผลงาน", en: "View work" },
  "cta.contact": { th: "ติดต่อ", en: "Contact" },
  "lang.TH": { th: "ไทย", en: "TH" },
  "lang.EN": { th: "EN", en: "English" },
  "lang.switch": { th: "สลับภาษา", en: "Toggle language" },

  // header
  "header.role": { th: "วิศวกรซอฟต์แวร์ | นักพัฒนาเว็บ", en: "Software Engineer | Web Developer" },
  "header.hi": { th: "นายกิตติพรรณ บุญช่วย", en: "Kittiphan Bunchuai" },
  "header.tagline": {
    th: "พอร์ตโฟลิโอแสดงผลงานและทักษะด้านการพัฒนาซอฟต์แวร์ มุ่งเน้นคุณภาพ ประสิทธิภาพ และมาตรฐานที่ดูแลรักษาได้",
    en: "A portfolio showcasing my software development work and skills, focused on quality, performance, and maintainable standards.",
  },

  // sections
  "section.about.title": { th: "เกี่ยวกับฉัน", en: "About me" },
  "section.about.subtitle": {
    th: "ข้าพเจ้าเป็นบัณฑิตสาขาวิทยาการคอมพิวเตอร์ที่มีความสนใจและความมุ่งมั่นในการพัฒนาเว็บแอปพลิเคชันและระบบสารสนเทศ มีประสบการณ์ในการพัฒนาแบบครบวงจรทั้งด้าน Frontend และ Backend โดยใช้ Yii 2, Laravel และเฟรมเวิร์ก JavaScript สมัยใหม่ อีกทั้งยังมีความเชี่ยวชาญในการออกแบบฐานข้อมูลด้วย MySQL และ SQL Server นอกจากนี้ยังมีประสบการณ์ในการทำงานร่วมกับทีมและการนำเสนอผลงานทางวิชาการในระดับชาติ เป้าหมายของข้าพเจ้าคือการนำทักษะด้านเทคนิคและทักษะการแก้ปัญหามาใช้เพื่อสนับสนุนการเติบโตอย่างต่อเนื่องขององค์กร",
    en: "I am a Computer Science graduate with a strong passion for developing web applications and information systems. I have hands-on experience in both frontend and backend development using Yii 2, Laravel, and modern JavaScript frameworks, alongside expertise in database design with MySQL and SQL Server. I also have experience working in collaborative teams and presenting academic work at the national level. My goal is to leverage my technical skills and problem-solving mindset to contribute to the continuous growth of the organization.",
  },
  "section.about.p1": {
    th: "สวัสดีครับ ผมชื่อกิตติพรรณ บุญช่วย — นักพัฒนาเว็บที่ชื่นชอบการออกแบบระบบที่เป็นระเบียบและสร้าง UI ที่สามารถแก้ปัญหาได้จริง ข้าพเจ้าให้ความสำคัญกับคุณภาพของโค้ด ประสิทธิภาพ และมาตรฐานที่ดูแลรักษาได้ง่าย",
    en: "Hi, I’m Kittiphan — a web developer who enjoys clean system design and building UI that solves real problems. I focus on code quality, performance, and maintainable standards.",
  },
  "section.about.p2": {
    th: "สแต็คที่ถนัด: Bootstrap, Tailwind CSS, CSS, JavaScript, React, Next.js, TypeScript, PHP, Laravel, Node.js, MySQL, SQL Server",
    en: "Comfort stack: Bootstrap, Tailwind CSS, CSS, JavaScript, React, Next.js, TypeScript, PHP, Laravel, Node.js, MySQL, SQL Server",
  },

  "section.work.title": { th: "ผลงาน", en: "My work" },
  "section.work.subtitle": { th: "ตัวอย่างผลงานเด่น และเทคโนโลยีที่ใช้", en: "Selected projects and used technologies" },
  "work.live": { th: "ตัวอย่าง", en: "Live" },
  "work.repo": { th: "โค้ด", en: "Repo" },

  // projects (data-driven)
  "project.p1.title": { th: "พอร์ตโฟลิโอ KTP", en: "KTP Portfolio" },
  "project.p1.desc": {
    th: "พอร์ตโฟลิโอแสดงผลงานนักพัฒนาซอฟต์แวร์สมัยใหม่ที่สร้างด้วย Next.js, Tailwind CSS, และ shadcn/ui.",
    en: "A modern, responsive developer portfolio built with Next.js, Tailwind CSS, and shadcn/ui.",
  },
  "project.p2.title": { th: "Kumwell-Glam", en: "Kumwell-Glam" },
  "project.p2.desc": {
    th: "เว็บไซต์บริษัท คัมเวล คอร์ปอเรชั่น จำกัด (มหาชน) สำหรับงานปีใหม่ประจำปี 2568'",
    en: "Kumwell Corporation PLC. website for New Year 2025 event",
  },
  "project.p3.title": { th: "ระบบจองห้องบริการ PCRU", en: "Web Application IT-BOOKING PCRU" },
  "project.p3.desc": { th: "เว็บแอปสำหรับจองห้องบริการตึกไอที", en: "A web application for booking IT services." },

  // experience
  "nav.experience": { th: "ประวัติการทำงาน", en: "Experience" },
  "section.experience.title": { th: "ประวัติการทำงาน", en: "Experience" },
  "section.experience.subtitle": {
    th: "ไทม์ไลน์การทำงาน โครงการ และความรับผิดชอบหลัก",
    en: "Timeline of roles, projects, and key responsibilities",
  },

  "section.skill.title": { th: "ทักษะ", en: "Skill" },
  "section.skill.subtitle": { th: "ทักษะหลักที่ใช้ในงานและโครงการต่าง ๆ", en: "Core skills I use in projects" },
  "skill.category.frontend": { th: "ส่วนหน้า (Frontend)", en: "Frontend" },
  "skill.category.backend": { th: "ส่วนหลัง (Backend)", en: "Backend" },
  "skill.category.tool": { th: "เครื่องมือ (Tools)", en: "Tool" },

  // skill levels
  "level.beginner": { th: "เริ่มต้น", en: "beginner" },
  "level.intermediate": { th: "ปานกลาง", en: "intermediate" },
  "level.advanced": { th: "ขั้นสูง", en: "advanced" },
  "level.expert": { th: "เชี่ยวชาญ", en: "expert" },

  "section.contact.title": { th: "ติดต่อ", en: "Contact" },
  "section.contact.subtitle": { th: "พร้อมร่วมงานและรับฟังไอเดียใหม่ ๆ", en: "Open to work and new ideas" },
  "contact.tel": { th: "โทร", en: "Tel" },
  "contact.email": { th: "อีเมล", en: "Email" },
  "contact.github": { th: "กิตฮับ", en: "GitHub" },
  "contact.linkedin": { th: "ลิงก์อิน", en: "LinkedIn" },
  "contact.location": { th: "ที่อยู่", en: "Location" },
  "contact.pitch": {
    th: "ถ้าคุณมีโปรเจ็กต์ที่อยากเริ่ม ลองส่งรายละเอียดคร่าว ๆ มาหาผมได้เลย ยินดีช่วยออกแบบโซลูชันและตีราคาเบื้องต้น",
    en: "Got a project in mind? Send me a brief and I’ll help shape the solution and provide an initial estimate.",
  },

  // experience (data-driven)
  "experience.e2.role": { th: "นักพัฒนาซอฟต์แวร์", en: "Software Developer" },
  "experience.e2.company": { th: "บริษัท ออเร้นจ์ เทคโนโลยี โซลูชั่น จำกัด", en: "ORANGE TECHNOLOGY SOLUTION COMPANY LIMITED" },
  "experience.e2.period": { th: "08/01/2569 – ปัจจุบัน", en: "08/01/2025 – Present" },
  "experience.e2.location": { th: "กรุงเทพ, ประเทศไทย", en: "Bangkok, Thailand" },
  "experience.e2.details": { th: "วิเคราะห์ ออกแบบและพัฒนาระบบเว็บไซต์ สำหรับลูกค้าขององค์กร.", en: "Analyze, design, and develop web applications for the company's clients." },
  "experience.e2.details1": { th: "โดยใช้ Laravel Framework พร้อมกับ Bootstrap, Tailwind CSS, CSS, PHP, JavaScript, และ MySQL เพื่อสร้างระบบที่ทันสมัย ใช้งานง่าย และมีประสิทธิภาพ", en: "Using Laravel Framework along with Bootstrap, Tailwind CSS, CSS, PHP, JavaScript, and MySQL to create modern, user-friendly, and efficient systems." },

  "experience.e1.role": { th: "วิศวกรซอฟต์แวร์", en: "Software Engineer" },
  "experience.e1.company": { th: "บริษัท คัมเวล คอร์ปอเรชั่น จำกัด (มหาชน)", en: "Kumwell Corporation PLC." },
  "experience.e1.period": { th: "13/05/2568 – 30/12/2568", en: "13/05/2025 – 30/12/2025" },
  "experience.e1.location": { th: "นนทบุรี, ประเทศไทย", en: "Nonthaburi, Thailand" },
  "experience.e1.details": { th: "วิเคราะห์ ออกแบบและพัฒนาระบบเว็บไซต์ ใช้ภายในองค์กร.", en: "Analyze, design, and develop internal web applications." },
  "experience.e1.details1": { th: "โดยใช้ Laravel Framework พร้อมกับ Bootstrap, Tailwind CSS, CSS, PHP, JavaScript, และ MySQL เพื่อสร้างระบบที่ทันสมัย ใช้งานง่าย และมีประสิทธิภาพ", en: "Using Laravel Framework along with Bootstrap, Tailwind CSS, CSS, PHP, JavaScript, and MySQL to create modern, user-friendly, and efficient systems." },
}

type Ctx = {
  lang: Lang
  toggle: () => void
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const I18nContext = createContext<Ctx | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("th")

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null
    if (saved === "th" || saved === "en") setLang(saved)
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang)
      try {
        document.documentElement.lang = lang
      } catch { }
    }
  }, [lang])

  const value = useMemo<Ctx>(() => ({
    lang,
    toggle: () => setLang((p) => (p === "th" ? "en" : "th")),
    setLang,
    t: (key) => dict[key as keyof typeof dict]?.[lang] ?? String(key),
  }), [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
