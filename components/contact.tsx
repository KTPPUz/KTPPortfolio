"use client"
import Section from "./section"
import { contact } from "@/utils/data"
import { useI18n } from "@/lib/i18n"

export default function Contact() {
  const { t } = useI18n()
  return (
    <Section id="contact" title={t("section.contact.title")} subtitle={t("section.contact.subtitle")}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
            <p>
                {t("contact.tel")}: <a className="underline hover:no-underline" href={`tel:${contact.tel}`}>{contact.tel}</a>
            </p>
          <p>
            {t("contact.email")}: <a className="underline hover:no-underline" href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          {contact.github ? (
            <p>
              {t("contact.github")}: <a className="underline hover:no-underline" href={contact.github} target="_blank" rel="noreferrer">{contact.github}</a>
            </p>
          ) : null}
          {contact.linkedin ? (
            <p>
              {t("contact.linkedin")}: <a className="underline hover:no-underline" href={contact.linkedin} target="_blank" rel="noreferrer">{contact.linkedin}</a>
            </p>
          ) : null}
          {contact.location ? <p>{t("contact.location")}: {contact.location}</p> : null}
        </div>
        <div className="border rounded-lg p-4 bg-card/50">
          <p className="text-sm text-muted-foreground">{t("contact.pitch")}</p>
        </div>
      </div>
    </Section>
  )
}
