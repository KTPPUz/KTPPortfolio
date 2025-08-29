"use client"
import Section from "./section"
import { experiences } from "@/utils/data"
import { useI18n } from "@/lib/i18n"

export default function Experience() {
  const { t } = useI18n()
  return (
    <Section id="experience" title={t("section.experience.title")} subtitle={t("section.experience.subtitle")}>
      <div className="space-y-4">
        {experiences.map((exp) => (
            <article key={exp.id} className="border rounded-lg p-5 bg-card/50">
            <div className="flex items-center justify-between gap-4">
              <div>
              <h3 className="text-lg font-semibold tracking-tight">{t(`experience.${exp.id}.role`) || exp.role}</h3>
              <p className="text-sm text-muted-foreground">{t(`experience.${exp.id}.company`) || exp.company}</p>
              </div>
              <div className="text-right text-xs text-muted-foreground">
              <div>{t(`experience.${exp.id}.period`) || exp.period}</div>
              {exp.location ? <div>{t(`experience.${exp.id}.location`) || exp.location}</div> : null}
              </div>
            </div>
            <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
              <li>{t(`experience.${exp.id}.details`) || exp.details?.[0]}</li>
              <li>{t(`experience.${exp.id}.details1`) || exp.details?.[1]}</li>
              {exp.details?.slice(2).map((d, i) => (
              <li key={i + 2}>{t(`experience.${exp.id}.details${i + 2}`) || d}</li>
              ))}
            </ul>
            </article>
        ))}
      </div>
    </Section>
  )
}
