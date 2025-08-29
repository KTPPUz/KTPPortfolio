"use client"
import React from "react"
import { navLinks } from "@/utils/data"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

const Navbar = () => {
    const { t, toggle, lang } = useI18n()
    return (
        <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/80 border-b">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <a href="#top" className="font-bold tracking-tight text-lg">Kittiphan</a>
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((l) => (
                        <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            {/* Map known labels via keys for i18n; fallback to original label */}
                            {l.href === "#about" ? t("nav.about") :
                             l.href === "#work" ? t("nav.work") :
                             l.href === "#skill" ? t("nav.skill") :
                             l.href === "#contact" ? t("nav.contact") : l.label}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center gap-2">
                    <div className="md:hidden">
                        <Button asChild variant="outline" size="sm">
                            <a href="#contact">{t("nav.contact")}</a>
                        </Button>
                    </div>
                    <Button onClick={toggle} size="sm" variant="ghost" aria-label="Toggle language">
                        {lang === "th" ? "TH" : "EN"}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar