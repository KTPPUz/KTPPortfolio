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

  // header
  "header.role": { th: "วิศวกรซอฟต์แวร์ | นักพัฒนาเว็บ", en: "Software Engineer | Web Developer" },
  "header.hi": { th: "สวัสดี ผม Kittiphan Bunchuai", en: "Hi, I’m Kittiphan Bunchuai" },

  // sections
  "section.about.title": { th: "เกี่ยวกับฉัน", en: "About me" },
  "section.about.subtitle": {
    th: "โปรแกรมเมอร์สาย Full‑stack ที่ชอบสร้างเว็บแอพทันสมัย ใช้ Next.js + TypeScript และเน้นประสบการณ์ผู้ใช้ที่ดี",
    en: "Full‑stack developer building modern web apps with Next.js + TypeScript, focused on great UX.",
  },
  "section.about.p1": {
    th: "สวัสดีครับ ผมชื่อ Kittiphan นักพัฒนาเว็บที่ชื่นชอบการออกแบบระบบและ UI ที่สะอาด ตอบโจทย์การใช้งาน โฟกัสกับคุณภาพโค้ด ประสิทธิภาพ และมาตรฐานการเขียนที่ดูแลง่าย",
    en: "Hi, I’m Kittiphan, a web developer who enjoys clean system design and UI that solves real problems. I focus on code quality, performance, and maintainable standards.",
  },
  "section.about.p2": {
    th: "สแต็คที่ถนัด: Next.js, React, TypeScript, Tailwind, Node.js, Prisma, PostgreSQL",
    en: "Comfort stack: Next.js, React, TypeScript, Tailwind, Node.js, Prisma, PostgreSQL",
  },

  "section.work.title": { th: "ผลงาน", en: "My work" },
  "section.work.subtitle": { th: "ตัวอย่างผลงานเด่น และเทคโนโลยีที่ใช้", en: "Selected projects and used technologies" },
  "work.live": { th: "ตัวอย่าง", en: "Live" },
  "work.repo": { th: "โค้ด", en: "Repo" },

  "section.skill.title": { th: "ทักษะ", en: "Skill" },
  "section.skill.subtitle": { th: "ทักษะหลักที่ใช้ในงานและโครงการต่าง ๆ", en: "Core skills I use in projects" },

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
}

type Ctx = {
  lang: Lang
  toggle: () => void
  setLang: (l: Lang) => void
  t: (key: keyof typeof dict) => string
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
      } catch {}
    }
  }, [lang])

  const value = useMemo<Ctx>(() => ({
    lang,
    toggle: () => setLang((p) => (p === "th" ? "en" : "th")),
    setLang,
    t: (key) => dict[key]?.[lang] ?? String(key),
  }), [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
