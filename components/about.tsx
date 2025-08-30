"use client"
import Image from "next/image"
import Section from "./section"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

export default function About() {
  const { t } = useI18n()

  return (
    <Section id="about" title={t("section.about.title")} subtitle={t("section.about.subtitle")}>
      <div className="grid md:grid-cols-3 gap-8 items-center">
      
        <div className="md:col-span-2 space-y-5">
          <p className="text-lg leading-relaxed">{t("section.about.p1")}</p>
          <p className="text-muted-foreground leading-relaxed">
            {t("section.about.p2")} {" "}
            <Button asChild variant="link" className="px-1 h-auto align-baseline">
              <a href="#skill">→ {t("section.skill.title")}</a>
            </Button>
          </p>
        </div>


        <div className="justify-self-center">
          <div className="relative size-36 md:size-48">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-2xl" />
            <div className="relative size-full rounded-2xl border bg-card/60 shadow-sm grid place-items-center overflow-hidden">
              <Image
                alt="Avatar"
                src="/images/me.jpg"
                width={240}
                height={240}
                className="size-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
