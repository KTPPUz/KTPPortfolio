"use client"
import Image from "next/image"
import Section from "./section"
import { projects } from "@/utils/data"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export default function Work() {
  const { t } = useI18n()
  return (
    <Section id="work" title={t("section.work.title")} subtitle={t("section.work.subtitle")}>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article key={p.id} className="border rounded-lg p-5 bg-card/50 hover:shadow-md transition-all">
            <div className="flex items-center gap-4">
              {p.image ? (
                <Image src={p.image} alt={p.title} width={100} height={100} className="rounded-md ring-1 ring-border" />
              ) : null}
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{t(`project.${p.id}.title`) || p.title}</h3>
                <p className="text-sm text-muted-foreground">{t(`project.${p.id}.desc`) || p.description}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-md border bg-secondary/40">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              {p.link ? (
                <Button asChild size="sm" variant="secondary">
                  <a href={p.link} target="_blank" rel="noreferrer">{t("work.live")}</a>
                </Button>
              ) : null}
              {p.repo ? (
                <Button asChild size="sm" variant="outline">
                  <a href={p.repo} target="_blank" rel="noreferrer">{t("work.repo")}</a>
                </Button>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
