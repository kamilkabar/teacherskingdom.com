import Link from 'next/link'
import { Star, Users, Clock, PlayCircle } from 'lucide-react'
import type { Course } from '@/lib/data'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

export function CourseCard({ course }: { course: Course }) {
  const hasProgress = typeof course.progress === 'number' && course.progress > 0

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
    >
      <div
        className="relative flex h-36 items-center justify-center overflow-hidden"
        style={{ backgroundColor: course.color }}
      >
        <span className="absolute inset-0 bg-foreground/5" aria-hidden="true" />
        <PlayCircle
          className="size-12 text-primary-foreground/90 transition-transform group-hover:scale-110"
          aria-hidden="true"
        />
        <Badge className="absolute left-3 top-3 border-0 bg-background/90 text-foreground">
          {course.category}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <span>{course.level}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" aria-hidden="true" />
            {course.hours}h
          </span>
        </div>
        <h3 className="mt-2 font-heading text-lg font-bold leading-tight text-foreground text-balance">
          {course.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {course.tagline}
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          by <span className="font-medium text-foreground">{course.instructor}</span>
        </p>

        {hasProgress ? (
          <div className="mt-4">
            <div className="mb-1.5 flex items-center justify-between text-xs font-medium">
              <span className="text-muted-foreground">Your progress</span>
              <span className="text-primary">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
        ) : (
          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1 font-medium text-foreground">
              <Star className="size-4 fill-accent text-accent" aria-hidden="true" />
              {course.rating}
            </span>
            <span className="flex items-center gap-1">
              <Users className="size-4" aria-hidden="true" />
              {course.students.toLocaleString()}
            </span>
          </div>
        )}
      </div>
    </Link>
  )
}
