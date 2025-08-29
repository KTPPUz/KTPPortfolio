export type NavLink = {
	label: string
	href: string
}

export type Project = {
	id: string
	title: string
	description: string
	tech: string[]
	image?: string
	link?: string
	repo?: string
}

export type Skill = {
	name: string
	level?: "beginner" | "intermediate" | "advanced" | "expert"
	icon?: string
}

export type SkillGroup = {
	category: string
	items: Skill[]
}

export type Contact = {
    tel:  string
	email: string
	github?: string
	linkedin?: string
	phone?: string
	location?: string
}

