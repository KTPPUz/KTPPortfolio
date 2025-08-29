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
                <h3 className="text-lg font-semibold tracking-tight">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </div>
              <div className="text-right text-xs text-muted-foreground">
                <div>{exp.period}</div>
                {exp.location ? <div>{exp.location}</div> : null}
              </div>
            </div>
            {exp.details && exp.details.length ? (
              <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  )
}
