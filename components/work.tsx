"use client"
import Image from "next/image"
import Section from "./section"
import { projects } from "@/utils/data"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"
import { Github, ExternalLink } from "lucide-react" // แนะนำให้ลง lucide-react เพิ่ม

export default function Work() {
  const { t } = useI18n()

  return (
    <Section id="work" title={t("section.work.title")} subtitle={t("section.work.subtitle")}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <article 
            key={p.id} 
            className="group relative flex flex-col h-full bg-card border border-border/50 rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image Section */}
            <div className="relative w-full aspect-video overflow-hidden bg-muted">
              {p.image ? (
                <Image 
                  src={p.image} 
                  alt={p.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  No Image
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 p-5">
              <div className="flex-1">
                <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
                  {t(`project.${p.id}.title`) || p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {t(`project.${p.id}.desc`) || p.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-[10px] uppercase font-medium px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center justify-between border-t pt-4">
                <div className="flex gap-2">
                  {p.repo && (
                    <Button asChild variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground">
                      <a href={p.repo} target="_blank" rel="noreferrer" title={t("work.repo")}>
                        <Github className="w-4 h-4" />
                        <span className="sr-only">{t("work.repo")}</span>
                      </a>
                    </Button>
                  )}
                  {p.link && (
                    <Button asChild variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground">
                      <a href={p.link} target="_blank" rel="noreferrer" title={t("work.live")}>
                        <ExternalLink className="w-4 h-4" />
                        <span className="sr-only">{t("work.live")}</span>
                      </a>
                    </Button>
                  )}
                </div>
                
                {/* ปุ่ม View Detail แบบเต็ม (ถ้าต้องการ) หรือใส่ Link หลัก */}
                {p.link && (
                    <Button asChild size="sm" variant="outline" className="text-xs group/btn">
                        <a href={p.link} target="_blank" rel="noreferrer">
                            Visit Site 
                            <ExternalLink className="w-3 h-3 ml-2 opacity-50 transition-transform group-hover/btn:translate-x-1" />
                        </a>
                    </Button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}