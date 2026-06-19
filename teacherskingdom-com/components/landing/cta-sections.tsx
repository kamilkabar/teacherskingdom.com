import Link from 'next/link'
import { ArrowRight, Star, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  { value: '120K+', label: 'Active learners' },
  { value: '850+', label: 'Expert courses' },
  { value: '4.9', label: 'Average rating' },
  { value: '2.4M', label: 'Lessons completed' },
]

const testimonials = [
  {
    text: 'My kids and I learn together every evening. The badges and streaks turned screen time into something we are actually proud of.',
    name: 'Rebecca M.',
    role: 'Parent & lifelong learner',
  },
  {
    text: 'I went from never coding to deploying my first website in three weeks. The progress tracking kept me accountable the whole way.',
    name: 'Daniel O.',
    role: 'Career switcher',
  },
  {
    text: 'As a teacher, I publish my courses here and reach thousands of students. The instructor tools are genuinely the best I have used.',
    name: 'Prof. Maya Chen',
    role: 'Science instructor',
  },
]

export function StatsBar() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
          Loved by learners and teachers alike
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-6"
          >
            <Quote className="size-7 text-accent" aria-hidden="true" />
            <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground text-pretty">
              {t.text}
            </blockquote>
            <div className="mt-5 flex items-center gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-accent text-accent" />
              ))}
            </div>
            <figcaption className="mt-3">
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center sm:px-12">
        <h2 className="mx-auto max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-primary-foreground text-balance sm:text-4xl">
          Your kingdom of knowledge awaits
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/80 text-pretty">
          Create a free account and take your first lesson today. No credit card
          required.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            variant="secondary"
            render={<Link href="/signup" />}
          >
            Get started free
            <ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            render={<Link href="/courses" />}
          >
            Explore courses
          </Button>
        </div>
      </div>
    </section>
  )
}
