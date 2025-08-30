"use client"
import Section from "./section"
import { contact } from "@/utils/data"
import { useI18n } from "@/lib/i18n"
import { Button } from "./ui/button"
import { Github, Linkedin, Mail, MapPin, Phone, Copy, Check } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const { t } = useI18n()
  const [copied, setCopied] = useState<"tel" | "email" | null>(null)

  function handleCopy(text: string, key: "tel" | "email") {
    try {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(text)
      }
      setCopied(key)
      const timer = setTimeout(() => setCopied(null), 1200)
      return () => clearTimeout(timer)
    } catch {
      // no-op if clipboard unavailable
    }
  }
  return (
    <Section id="contact" title={t("section.contact.title")} subtitle={t("section.contact.subtitle")}>
      <div className="grid gap-6 md:grid-cols-2">
        {/* info card */}
        <div className="rounded-xl border bg-card/60 p-5 md:p-6 shadow-lg shadow-black/10 backdrop-blur">
          <ul className="space-y-4">
            {/* Tel */}
            <li className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Phone className="size-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">{t("contact.tel")}</p>
                  <a className="truncate font-medium hover:underline" href={`tel:${contact.tel}`}>{contact.tel}</a>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                aria-label="Copy phone"
                onClick={() => handleCopy(String(contact.tel), "tel")}
                title="Copy"
              >
                {copied === "tel" ? <Check className="text-green-500" /> : <Copy />}
              </Button>
            </li>

            {/* Email */}
            <li className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Mail className="size-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">{t("contact.email")}</p>
                  <a className="truncate font-medium hover:underline" href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                aria-label="Copy email"
                onClick={() => handleCopy(String(contact.email), "email")}
                title="Copy"
              >
                {copied === "email" ? <Check className="text-green-500" /> : <Copy />}
              </Button>
            </li>

            {/* GitHub / LinkedIn */}
            {contact.github || contact.linkedin ? (
              <li className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Github className="size-4" />
                  </span>
                  <p className="text-sm text-muted-foreground">{t("contact.github")}/{t("contact.linkedin")}</p>
                </div>
                <div className="flex gap-2">
                  {contact.github ? (
                    <Button asChild variant="outline" size="sm">
                      <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                        <Github />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                  ) : null}
                  {contact.linkedin ? (
                    <Button asChild variant="outline" size="sm">
                      <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <Linkedin />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Button>
                  ) : null}
                </div>
              </li>
            ) : null}

            {/* Location */}
            {contact.location ? (
              <li className="flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <MapPin className="size-4" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.location")}</p>
                  <p className="font-medium">{contact.location}</p>
                </div>
              </li>
            ) : null}
          </ul>
        </div>

        {/* pitch / CTA card */}
        <div className="relative overflow-hidden rounded-xl border bg-card/60 p-5 md:p-6 shadow-lg shadow-black/10">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 [background:radial-gradient(50%_40%_at_70%_0%,hsl(var(--primary)/.2),transparent_60%),radial-gradient(40%_40%_at_0%_100%,hsl(var(--primary)/.15),transparent_60%)]" />
          <p className="text-sm leading-relaxed text-muted-foreground">{t("contact.pitch")}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild className="gap-2">
              <a href={`tel:${contact.tel}`} aria-label="Call">
                <Phone /> {t("contact.tel")}
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <a href={`mailto:${contact.email}`} aria-label="Email">
                <Mail /> {t("contact.email")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
