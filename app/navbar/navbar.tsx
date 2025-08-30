"use client"
import React from "react"
import { navLinks } from "@/utils/data"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

const Navbar = () => {
    const { t, toggle, lang } = useI18n()
    const [active, setActive] = React.useState<string>("#about")

    React.useEffect(() => {
        const ids = navLinks
            .map((l) => l.href)
            .filter((h) => h.startsWith("#"))
            .map((h) => h.slice(1))
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => Boolean(el))

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(`#${entry.target.id}`)
                    }
                })
            },
            { root: null, rootMargin: "-25% 0px -65% 0px", threshold: 0.01 }
        )

        sections.forEach((sec) => observer.observe(sec))
        return () => observer.disconnect()
    }, [])
    return (
        <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/80 border-b">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <a href="#top" className="font-bold tracking-tight text-lg" aria-label="Home">Kittiphan</a>
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className={
                                `relative text-sm transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:transition-all ` +
                                (active === l.href
                                    ? "text-foreground after:w-full after:bg-primary"
                                    : "text-muted-foreground hover:text-foreground after:w-0 hover:after:w-full after:bg-primary/80")
                            }
                            aria-current={active === l.href ? "page" : undefined}
                        >
                            {/* Map known labels via keys for i18n; fallback to original label */}
                            {l.href === "#about" ? t("nav.about") :
                                l.href === "#experience" ? t("nav.experience") :
                                    l.href === "#work" ? t("nav.work") :
                                        l.href === "#skill" ? t("nav.skill") :
                                            l.href === "#contact" ? t("nav.contact") : l.label}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center gap-2">
                    <div className="hidden md:block">
                        <Button asChild size="sm">
                            <a href="#contact">{t("nav.contact")}</a>
                        </Button>
                    </div>
                    <div className="md:hidden">
                        <Button asChild variant="outline" size="sm">
                            <a href="#contact">{t("nav.contact")}</a>
                        </Button>
                    </div>
                    <Button onClick={toggle} size="sm" variant="ghost" aria-label={t("lang.switch")} title={t("lang.switch")}>
                        {lang === "th" ? t("lang.TH") : t("lang.EN")}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar