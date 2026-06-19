import { Flame, Zap, Clock, BookOpenCheck } from "lucide-react"
import { learnerStats } from "@/lib/data"

const stats = [
  {
    label: "Day streak",
    value: learnerStats.streak,
    suffix: "days",
    icon: Flame,
    tint: "bg-accent/15 text-accent-foreground",
  },
  {
    label: "Total XP",
    value: learnerStats.xp.toLocaleString(),
    suffix: "points",
    icon: Zap,
    tint: "bg-primary/10 text-primary",
  },
  {
    label: "This week",
    value: learnerStats.minutesThisWeek,
    suffix: "minutes",
    icon: Clock,
    tint: "bg-info/15 text-info",
  },
  {
    label: "Lessons done",
    value: learnerStats.lessonsCompleted,
    suffix: "total",
    icon: BookOpenCheck,
    tint: "bg-success/15 text-success",
  },
]

export function StatCards() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-border bg-card p-5"
        >
          <div
            className={`flex size-10 items-center justify-center rounded-xl ${stat.tint}`}
          >
            <stat.icon className="size-5" aria-hidden="true" />
          </div>
          <p className="mt-3 font-heading text-2xl font-bold tabular-nums">
            {stat.value}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{stat.label}</span> ·{" "}
            {stat.suffix}
          </p>
        </div>
      ))}
    </div>
  )
}
