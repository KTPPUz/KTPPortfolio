"use client"
import { useI18n } from "@/lib/i18n";
import Navbar from "@/app/navbar/navbar";
import About from "@/components/about";
import Work from "@/components/work";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  const { t } = useI18n();
  return (
    <div id="top" className="scroll-smooth">
      <Navbar />
      <header className="bg-gradient-to-b from-background to-accent/20 border-b">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <p className="text-sm uppercase tracking-wider text-muted-foreground">
            {t("header.role")}
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">{t("header.hi")}</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">

          </p>
          <div className="mt-6 flex gap-3">
            <a href="#work" className="inline-flex h-10 items-center rounded-md bg-primary px-6 text-primary-foreground text-sm font-medium hover:bg-primary/90">{t("cta.viewWork")}</a>
            <a href="#contact" className="inline-flex h-10 items-center rounded-md border bg-background px-6 text-sm font-medium hover:bg-accent">{t("cta.contact")}</a>
          </div>
        </div>
      </header>
      <main>
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
