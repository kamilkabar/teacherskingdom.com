import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { courses } from '@/lib/data'
import { CourseCard } from '@/components/course-card'
import { Button } from '@/components/ui/button'

export function FeaturedCourses() {
  const featured = courses.slice(0, 3)
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="font-heading text-sm font-bold uppercase tracking-wider text-primary">
            Popular right now
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
            Featured courses
          </h2>
        </div>
        <Button variant="ghost" render={<Link href="/courses" />}>
          View all courses
          <ArrowRight className="size-4" />
        </Button>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </section>
  )
}
