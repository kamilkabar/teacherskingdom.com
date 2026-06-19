'use client'

import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { courses, categories } from '@/lib/data'
import { CourseCard } from '@/components/course-card'
import { Input } from '@/components/ui/input'

const levels = ['All levels', 'Beginner', 'Intermediate', 'Advanced'] as const

export function CourseCatalog() {
  const [category, setCategory] = useState('All')
  const [level, setLevel] = useState<(typeof levels)[number]>('All levels')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchesCategory = category === 'All' || c.category === category
      const matchesLevel = level === 'All levels' || c.level === level
      const matchesQuery =
        query.trim() === '' ||
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.tagline.toLowerCase().includes(query.toLowerCase()) ||
        c.instructor.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesLevel && matchesQuery
    })
  }, [category, level, query])

  return (
    <div>
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Explore the kingdom of courses
          </h1>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {courses.length} expert-led courses across every subject. Filter by
            topic and level to find your next adventure.
          </p>
          <div className="relative mt-6 max-w-md">
            <Search
              className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses or instructors..."
              className="h-11 pl-9"
              aria-label="Search courses"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  category === cat
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal
              className="size-4 text-muted-foreground"
              aria-hidden="true"
            />
            <label htmlFor="level" className="sr-only">
              Filter by level
            </label>
            <select
              id="level"
              value={level}
              onChange={(e) => setLevel(e.target.value as (typeof levels)[number])}
              className="h-9 rounded-lg border border-border bg-card px-3 text-sm font-medium text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {levels.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span>{' '}
          {filtered.length === 1 ? 'course' : 'courses'}
        </p>

        {filtered.length > 0 ? (
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-dashed border-border py-16 text-center">
            <p className="font-heading text-lg font-bold text-foreground">
              No courses found
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try a different category, level, or search term.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
