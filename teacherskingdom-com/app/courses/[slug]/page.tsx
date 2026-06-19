import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CourseDetail } from "@/components/courses/course-detail"
import { courses, getCourse } from "@/lib/data"

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const course = getCourse(slug)
  if (!course) return { title: "Course not found — Teachers Kingdom" }
  return {
    title: `${course.title} — Teachers Kingdom`,
    description: course.description,
  }
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const course = getCourse(slug)
  if (!course) notFound()

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <CourseDetail course={course} />
      </main>
      <SiteFooter />
    </div>
  )
}
