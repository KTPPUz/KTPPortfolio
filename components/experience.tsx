"use client"
import Section from "./section"
import { experiences } from "@/utils/data"
import { useI18n } from "@/lib/i18n"
import Image from "next/image"

export default function Experience() {
  const { t } = useI18n()
  return (
    <Section id="experience" title={t("section.experience.title")} subtitle={t("section.experience.subtitle")}>
      <div className="relative">
        {/* vertical timeline line */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/60 to-transparent"
        />

        <ul className="space-y-6">
          {experiences.map((exp) => (
            <li key={exp.id} className="group relative pl-14">
              {/* timeline dot */}
              <span
                aria-hidden
                className="absolute left-5 top-7 size-3 rounded-full bg-primary ring-4 ring-background transition-transform duration-200 group-hover:scale-110"
              />

              <article className="rounded-xl border bg-card/60 p-5 md:p-6 shadow-lg shadow-black/10 backdrop-blur transition-shadow duration-200 hover:shadow-black/20">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 min-w-0">
                    <div className="relative h-12 w-32 md:h-14 md:w-36 flex-shrink-0">
                      <Image
                        src={exp.image}
                        alt={(t(`experience.${exp.id}.company`) as string) || exp.company}
                        fill
                        className="rounded-md object-contain"
                        sizes="(max-width: 768px) 128px, 144px"
                        priority={false}
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-semibold tracking-tight">
                        {t(`experience.${exp.id}.role`) || exp.role}
                      </h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {t(`experience.${exp.id}.company`) || exp.company}
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-xs md:text-sm text-muted-foreground whitespace-nowrap">
                    <div>{t(`experience.${exp.id}.period`) || exp.period}</div>
                    {exp.location ? <div>{t(`experience.${exp.id}.location`) || exp.location}</div> : null}
                  </div>
                </div>

                {(exp.details && exp.details.length > 0) && (
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-relaxed marker:text-primary/70">
                    <li>{t(`experience.${exp.id}.details`) || exp.details?.[0]}</li>
                    {typeof exp.details?.[1] !== "undefined" && (
                      <li>{t(`experience.${exp.id}.details1`) || exp.details?.[1]}</li>
                    )}
                    {exp.details?.slice(2).map((d, i) => (
                      <li key={i + 2}>{t(`experience.${exp.id}.details${i + 2}`) || d}</li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
