import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground">
            <Sparkles className="size-4 text-accent" aria-hidden="true" />
            Join 120,000+ learners worldwide
          </span>
          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            Learn anything,{' '}
            <span className="text-primary">achieve everything.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
            Teachers Kingdom turns learning into an adventure. Take expert-led
            courses, track your progress, earn badges, and climb the
            leaderboard — at any age, on any subject.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" render={<Link href="/signup" />}>
              Start learning free
              <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/courses" />}>
              Browse courses
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              {['oklch(0.48 0.16 264)', 'oklch(0.6 0.15 150)', 'oklch(0.82 0.15 82)', 'oklch(0.62 0.13 200)'].map(
                (c, i) => (
                  <span
                    key={i}
                    className="size-8 rounded-full border-2 border-background"
                    style={{ backgroundColor: c }}
                    aria-hidden="true"
                  />
                ),
              )}
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" aria-hidden="true" />
                ))}
              </span>
              <span>
                <span className="font-semibold text-foreground">4.9</span> from
                40,000+ reviews
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/5" aria-hidden="true" />
          <Image
            src="/hero-learners.png"
            alt="Diverse learners of all ages studying together with progress badges and trophies"
            width={720}
            height={600}
            priority
            className="w-full rounded-3xl"
          />
        </div>
      </div>
    </section>
  )
}
