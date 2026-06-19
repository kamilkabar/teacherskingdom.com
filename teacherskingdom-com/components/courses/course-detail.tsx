"use client"

import { useState } from "react"
import Link from "next/link"
import {
  PlayCircle,
  FileText,
  HelpCircle,
  CheckCircle2,
  Circle,
  Star,
  Users,
  Clock,
  BookOpen,
  ChevronLeft,
  Award,
} from "lucide-react"
import type { Course, Lesson } from "@/lib/data"
import { sampleQuiz } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Quiz } from "@/components/courses/quiz"
import { cn } from "@/lib/utils"

const typeIcon = {
  video: PlayCircle,
  reading: FileText,
  quiz: HelpCircle,
}

export function CourseDetail({ course }: { course: Course }) {
  const allLessons = course.modules.flatMap((m) => m.lessons)
  const firstIncomplete = allLessons.find((l) => !l.completed) ?? allLessons[0]
  const [activeId, setActiveId] = useState<string>(firstIncomplete.id)
  const [completed, setCompleted] = useState<Set<string>>(
    new Set(allLessons.filter((l) => l.completed).map((l) => l.id)),
  )

  const activeLesson = allLessons.find((l) => l.id === activeId) as Lesson
  const completedCount = completed.size
  const progressPct = Math.round((completedCount / allLessons.length) * 100)

  function markComplete(id: string) {
    setCompleted((prev) => new Set(prev).add(id))
    const idx = allLessons.findIndex((l) => l.id === id)
    if (idx < allLessons.length - 1) setActiveId(allLessons[idx + 1].id)
  }

  const ActiveIcon = typeIcon[activeLesson.type]

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <Link
        href="/courses"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ChevronLeft className="size-4" aria-hidden="true" />
        Back to courses
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        {/* Main content */}
        <div>
          {/* Lesson stage */}
          <div
            className="flex aspect-video items-center justify-center rounded-2xl"
            style={{ backgroundColor: course.color }}
          >
            <div className="flex flex-col items-center gap-3 text-primary-foreground">
              <ActiveIcon className="size-16 opacity-90" aria-hidden="true" />
              <span className="text-sm font-medium uppercase tracking-wide opacity-90">
                {activeLesson.type}
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="font-heading text-2xl font-bold tracking-tight text-balance">
                {activeLesson.title}
              </h1>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="size-4" aria-hidden="true" />
                {activeLesson.duration}
              </p>
            </div>
            {!completed.has(activeLesson.id) ? (
              <Button onClick={() => markComplete(activeLesson.id)}>
                <CheckCircle2 className="size-4" />
                Mark complete
              </Button>
            ) : (
              <Badge className="gap-1 border-0 bg-success/15 px-3 py-1.5 text-success">
                <CheckCircle2 className="size-4" aria-hidden="true" />
                Completed
              </Badge>
            )}
          </div>

          {/* Lesson body */}
          {activeLesson.type === "quiz" ? (
            <div className="mt-8">
              <Quiz questions={sampleQuiz} />
            </div>
          ) : (
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                In this lesson, {course.instructor} walks you through{" "}
                <span className="font-medium text-foreground">
                  {activeLesson.title.toLowerCase()}
                </span>{" "}
                with clear examples and guided practice. Follow along at your own
                pace and revisit anytime.
              </p>
              <p>
                Each concept builds on the last, so take your time and use the
                practice prompts to lock in what you learn. When you feel ready,
                mark the lesson complete to earn XP and unlock the next step.
              </p>
              <div className="rounded-xl border border-border bg-secondary/50 p-4 text-sm text-foreground">
                <span className="font-semibold">Tip: </span>
                Learning a little every day beats cramming. Keep your streak
                alive to climb the leaderboard.
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-5">
            <Badge variant="secondary" className="mb-2">
              {course.category}
            </Badge>
            <h2 className="font-heading text-lg font-bold leading-tight text-balance">
              {course.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              by {course.instructor}
            </p>

            <div className="mt-4 flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1 font-medium">
                <Star className="size-4 fill-accent text-accent" aria-hidden="true" />
                {course.rating}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Users className="size-4" aria-hidden="true" />
                {course.students.toLocaleString()}
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <BookOpen className="size-4" aria-hidden="true" />
                {allLessons.length}
              </span>
            </div>

            <div className="mt-5">
              <div className="mb-1.5 flex items-center justify-between text-xs font-medium">
                <span className="text-muted-foreground">Course progress</span>
                <span className="text-primary">{progressPct}%</span>
              </div>
              <Progress value={progressPct} className="h-2" />
              <p className="mt-1.5 text-xs text-muted-foreground">
                {completedCount} of {allLessons.length} lessons complete
              </p>
            </div>
          </div>

          {/* Curriculum */}
          <div className="mt-4 rounded-2xl border border-border bg-card p-5">
            <h3 className="mb-3 flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wide text-muted-foreground">
              <Award className="size-4" aria-hidden="true" />
              Curriculum
            </h3>
            <div className="flex flex-col gap-5">
              {course.modules.map((module, mi) => (
                <div key={module.id}>
                  <p className="mb-2 text-sm font-semibold">
                    {mi + 1}. {module.title}
                  </p>
                  <ul className="flex flex-col gap-1">
                    {module.lessons.map((lesson) => {
                      const Icon = typeIcon[lesson.type]
                      const isDone = completed.has(lesson.id)
                      const isActive = lesson.id === activeId
                      return (
                        <li key={lesson.id}>
                          <button
                            type="button"
                            onClick={() => setActiveId(lesson.id)}
                            className={cn(
                              "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm transition-colors",
                              isActive
                                ? "bg-primary/10 font-medium text-foreground"
                                : "text-muted-foreground hover:bg-secondary",
                            )}
                          >
                            {isDone ? (
                              <CheckCircle2 className="size-4 shrink-0 text-success" aria-hidden="true" />
                            ) : (
                              <Circle className="size-4 shrink-0 opacity-50" aria-hidden="true" />
                            )}
                            <Icon className="size-4 shrink-0 opacity-70" aria-hidden="true" />
                            <span className="flex-1 leading-tight">{lesson.title}</span>
                            <span className="shrink-0 text-xs opacity-70">{lesson.duration}</span>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
