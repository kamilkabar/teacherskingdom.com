import Link from 'next/link'
import { Crown } from 'lucide-react'

const footerNav = [
  {
    title: 'Learn',
    links: [
      { label: 'Browse courses', href: '/courses' },
      { label: 'My dashboard', href: '/dashboard' },
      { label: 'Leaderboard', href: '/dashboard' },
      { label: 'Badges', href: '/dashboard' },
    ],
  },
  {
    title: 'Teach',
    links: [
      { label: 'Become an instructor', href: '/instructor' },
      { label: 'Instructor dashboard', href: '/instructor' },
      { label: 'Creator guidelines', href: '/instructor' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/' },
      { label: 'Careers', href: '/' },
      { label: 'Blog', href: '/' },
      { label: 'Contact', href: '/' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Crown className="size-5" aria-hidden="true" />
              </span>
              <span className="font-heading text-lg font-extrabold tracking-tight">
                Teachers<span className="text-primary">Kingdom</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Learn anything, achieve everything. Expert-led courses, real
              progress, and a little friendly competition for learners of all
              ages.
            </p>
          </div>
          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-bold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Teachers Kingdom. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
