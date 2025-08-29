## KTP Portfolio

พอร์ตโฟลิโอนักพัฒนาเว็บ สร้างด้วย Next.js + React + TypeScript และ Tailwind CSS รองรับสองภาษา (ไทย/อังกฤษ) ออกแบบให้เรียบง่าย โหลดไว และแก้ไขง่าย

### คุณสมบัติเด่น
- Next.js App Router (v15) + React 19 + TypeScript
- Tailwind CSS v4 พร้อม utility-first design
- โครงสร้างคอมโพเนนต์ที่อ่านง่ายและนำกลับใช้ซ้ำได้ (เช่น `Section`, `Navbar`, ปุ่มใน `components/ui`)
- i18n แบบเบาๆ ด้วย React Context (`lib/i18n.tsx`) สลับภาษาไทย/อังกฤษและจดจำใน localStorage
- ส่วนต่าง ๆ ครบถ้วน: About, Work, Skills, Experience, Contact
- ไอคอนจาก `lucide-react`

### เทคโนโลยีหลัก
- Next.js 15, React 19, TypeScript
- Tailwind CSS 4
- Radix Slot, class-variance-authority, tailwind-merge (สไตล์ shadcn/ui primitives)
- ESLint 9

---

## โครงสร้างโปรเจกต์ (ย่อ)

```
app/
	layout.tsx         # โครงหน้าหลัก
	page.tsx           # หน้าแรก
	globals.css        # สไตล์หลัก
	components/
		navbar/
			navbar.tsx
		skill/
			skill.tsx
components/
	about.tsx
	contact.tsx
	experience.tsx
	section.tsx        # คอมโพเนนต์ Section ที่นำกลับใช้ได้
	skills.tsx
	work.tsx
	ui/
		button.tsx
lib/
	i18n.tsx           # ระบบแปลภาษาแบบง่าย (TH/EN)
public/images/       # รูปภาพต่าง ๆ
utils/
	data.ts            # ข้อมูลโปรเจกต์/สกิล
	links.ts           # ลิงก์โซเชียลและที่ติดต่อ
	type.ts            # ประเภทข้อมูลที่ใช้ร่วมกัน
```

---

## การใช้งาน (Getting Started)

ข้อกำหนดเบื้องต้น: ติดตั้ง Node.js รุ่น LTS และตัวจัดการแพ็กเกจ (npm/yarn/pnpm)

ติดตั้งแพ็กเกจ

```powershell
npm install
```

รันโหมดพัฒนา (ใช้ Turbopack)

```powershell
npm run dev
```

เปิดเบราว์เซอร์ที่ http://localhost:3000

สร้างไฟล์สำหรับโปรดักชัน

```powershell
npm run build
```

รันโปรดักชัน

```powershell
npm start
```

ตรวจโค้ดด้วย ESLint

```powershell
npm run lint
```

---

## การปรับแต่ง

- ข้อความและคำแปล: แก้ไขที่ `lib/i18n.tsx` ภายในตัวแปร `dict` แล้วเรียกใช้ `useI18n().t("key")` ในคอมโพเนนต์
- ข้อมูลโปรเจกต์/สกิล/ลิงก์: ปรับที่ `utils/data.ts`, `utils/links.ts`, และชนิดข้อมูลที่ `utils/type.ts`
- คอมโพเนนต์ส่วนต่าง ๆ: อยู่ใน `components/*` และ `app/components/*`
- สไตล์รวม: `app/globals.css`
- โครงสร้างหน้าและเมตา: `app/layout.tsx` และไฟล์ใน `app/`

### เพิ่ม/ขยายภาษา
หากต้องการเพิ่มภาษาอื่น ๆ:
1) เพิ่มรหัสภาษาใน `type Lang = "th" | "en"` ที่ `lib/i18n.tsx`
2) เติมคำแปลใน `dict` ให้ครบทุกคีย์
3) อัปเดต UI สลับภาษาตามต้องการ (ปัจจุบันมีปุ่มสลับภาษาและเก็บค่าที่ localStorage คีย์ `lang`)

---

## การดีพลอย

แนะนำให้ดีพลอยด้วย Vercel (รองรับ Next.js โดยตรง):
- เชื่อมต่อรีโพไปยัง Vercel และ Import โปรเจกต์
- Build Command: `next build` (ใช้ค่ามาตรฐานของ Vercel ได้)
- Output: ใช้ค่าเริ่มต้นสำหรับ Next.js App Router
- Runtime: แนะนำ Node.js LTS

---

## ใบอนุญาต

โปรเจกต์นี้สำหรับผลงานส่วนตัว หากต้องการใช้งานต่อ กรุณา Fork และปรับแต่งตามความเหมาะสม

—

Short English note: This is a personal developer portfolio built with Next.js, React, TypeScript, and Tailwind CSS, featuring lightweight i18n (TH/EN) and reusable components.
