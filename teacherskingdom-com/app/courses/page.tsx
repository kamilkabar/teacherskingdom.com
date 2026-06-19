import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CourseCatalog } from "@/components/courses/course-catalog"

export const metadata: Metadata = {
  title: "Browse Courses — Teachers Kingdom",
  description:
    "Explore free courses across math, science, coding, languages, arts, business, and music. Learn at your own pace with quizzes and progress tracking.",
}

export default function CoursesPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Find your next course
            </h1>
            <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Hundreds of hands-on courses across every subject. Pick a track,
              earn XP, and level up at your own pace — completely free to start.
            </p>
          </div>
        </section>
        <CourseCatalog />
      </main>
      <SiteFooter />
    </div>
  )
}
