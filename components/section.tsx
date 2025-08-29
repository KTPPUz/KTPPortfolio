import React from "react"
import { cn } from "@/lib/utils"

type Props = {
  id?: string
  title: string
  subtitle?: string
  className?: string
  children: React.ReactNode
}

export default function Section({ id, title, subtitle, className, children }: Props) {
  return (
  <section id={id} className={cn("py-20 md:py-28 scroll-mt-24", className)}>
      <div className="container mx-auto px-6 max-w-6xl">
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          {subtitle ? (
            <p className="mt-2 text-muted-foreground max-w-2xl">{subtitle}</p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  )
}
