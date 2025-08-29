"use client"
import Image from "next/image"
import Section from "./section"
import { useI18n } from "@/lib/i18n"

export default function About() {
  const { t } = useI18n()
  return (
    // <>
    // </>
    <Section id="about" title={t("section.about.title")} subtitle={t("section.about.subtitle")}>
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2 space-y-4">
          <p>{t("section.about.p1")}</p>
          <p className="text-muted-foreground">{t("section.about.p2")}</p>
        </div>
        <div className="justify-self-center">
          <div className="size-32 md:size-40 rounded-xl border bg-card/50 grid place-items-center">
            <Image alt="Avatar" src="/images/me.jpg" width={180} height={100} className="rounded-xl" />
          </div>
        </div>
      </div>
    </Section>
  )
}
