"use client"
import Section from "./section"
import { skillGroups } from "@/utils/data"
import { useI18n } from "@/lib/i18n"

const levelToBadge: Record<string, string> = {
  beginner: "bg-secondary text-secondary-foreground",
  intermediate: "bg-secondary text-secondary-foreground",
  advanced: "bg-primary text-primary-foreground",
  expert: "bg-primary text-primary-foreground",
}

export default function Skills() {
  const { t } = useI18n()
  return (
    <Section id="skill" title={t("section.skill.title")} subtitle={t("section.skill.subtitle")}>
      <div className="grid md:grid-cols-3 gap-6">
        {skillGroups.map((g) => (
          <div key={g.category} className="border rounded-lg p-5 bg-card/50">
            <h3 className="font-semibold mb-3">{t(`skill.category.${g.category.toLowerCase()}`) || g.category}</h3>
            <ul className="space-y-2">
              {g.items.map((s) => (
                <li key={s.name} className="flex items-center justify-between">
                  <span>{s.name}</span>
                  {s.level ? (
                    <span className={`text-xs px-2 py-1 rounded-md border ${levelToBadge[s.level]}`}>
                      {t(`level.${s.level}`)}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
