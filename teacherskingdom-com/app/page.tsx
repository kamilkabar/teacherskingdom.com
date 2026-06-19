import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/landing/hero'
import { StatsBar, Testimonials, FinalCta } from '@/components/landing/cta-sections'
import { FeaturedCourses } from '@/components/landing/featured-courses'
import { Gamification } from '@/components/landing/gamification'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <FeaturedCourses />
        <Gamification />
        <Testimonials />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
