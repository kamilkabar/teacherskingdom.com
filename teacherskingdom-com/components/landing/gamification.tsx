import { Flame, Trophy, Target, Zap, Medal, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Earn XP for everything',
    desc: 'Every lesson, quiz, and streak earns experience points that level you up.',
  },
  {
    icon: Flame,
    title: 'Build daily streaks',
    desc: 'Keep your fire alive. Learn a little every day and watch your streak grow.',
  },
  {
    icon: Medal,
    title: 'Collect badges',
    desc: 'Unlock dozens of achievements as you hit milestones and master skills.',
  },
  {
    icon: Trophy,
    title: 'Climb the leaderboard',
    desc: 'Friendly competition with learners worldwide keeps you motivated.',
  },
  {
    icon: Target,
    title: 'Set weekly goals',
    desc: 'Choose your pace and track minutes learned toward your personal goal.',
  },
  {
    icon: TrendingUp,
    title: 'See real progress',
    desc: 'Visual dashboards show exactly how far you have come and what is next.',
  },
]

export function Gamification() {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-bold uppercase tracking-wider text-primary">
            Learning that sticks
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
            Stay motivated with built-in gamification
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            We turned the science of motivation into a delightful experience.
            Progress feels rewarding, so you keep coming back.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <f.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
