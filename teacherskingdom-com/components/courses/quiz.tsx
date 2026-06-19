"use client"

import { useState } from "react"
import { Check, X, RotateCcw, Trophy } from "lucide-react"
import type { QuizQuestion } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = questions[current]
  const isLast = current === questions.length - 1

  function handleSelect(index: number) {
    if (revealed) return
    setSelected(index)
  }

  function handleCheck() {
    if (selected === null) return
    setRevealed(true)
    if (selected === q.correct) setScore((s) => s + 1)
  }

  function handleNext() {
    if (isLast) {
      setFinished(true)
      return
    }
    setCurrent((c) => c + 1)
    setSelected(null)
    setRevealed(false)
  }

  function handleRestart() {
    setCurrent(0)
    setSelected(null)
    setRevealed(false)
    setScore(0)
    setFinished(false)
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100)
    const passed = pct >= 70
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <div
          className={cn(
            "mx-auto flex size-16 items-center justify-center rounded-full",
            passed ? "bg-success/15 text-success" : "bg-accent/15 text-accent-foreground",
          )}
        >
          <Trophy className="size-8" aria-hidden="true" />
        </div>
        <h3 className="mt-4 font-heading text-2xl font-bold">
          {passed ? "Great work!" : "Keep practicing!"}
        </h3>
        <p className="mt-1 text-muted-foreground">
          You scored {score} out of {questions.length} ({pct}%)
        </p>
        {passed && (
          <p className="mt-2 text-sm font-medium text-success">+50 XP earned</p>
        )}
        <Button onClick={handleRestart} variant="outline" className="mt-6">
          <RotateCcw className="size-4" />
          Try again
        </Button>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-sm font-medium text-muted-foreground">
          <span>
            Question {current + 1} of {questions.length}
          </span>
          <span>Score: {score}</span>
        </div>
        <Progress value={((current + (revealed ? 1 : 0)) / questions.length) * 100} className="h-2" />
      </div>

      <h3 className="text-balance font-heading text-xl font-bold leading-snug">
        {q.question}
      </h3>

      <div className="mt-5 flex flex-col gap-3">
        {q.options.map((option, index) => {
          const isCorrect = index === q.correct
          const isSelected = index === selected
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(index)}
              disabled={revealed}
              className={cn(
                "flex items-center justify-between rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-colors",
                !revealed && isSelected && "border-primary bg-primary/5",
                !revealed && !isSelected && "border-border hover:border-primary/40 hover:bg-secondary",
                revealed && isCorrect && "border-success bg-success/10 text-foreground",
                revealed && isSelected && !isCorrect && "border-destructive bg-destructive/10 text-foreground",
                revealed && !isCorrect && !isSelected && "border-border opacity-60",
              )}
            >
              <span>{option}</span>
              {revealed && isCorrect && <Check className="size-5 text-success" aria-hidden="true" />}
              {revealed && isSelected && !isCorrect && (
                <X className="size-5 text-destructive" aria-hidden="true" />
              )}
            </button>
          )
        })}
      </div>

      {revealed && (
        <div className="mt-4 rounded-xl bg-secondary p-4 text-sm leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">Explanation: </span>
          {q.explanation}
        </div>
      )}

      <div className="mt-6 flex justify-end">
        {!revealed ? (
          <Button onClick={handleCheck} disabled={selected === null}>
            Check answer
          </Button>
        ) : (
          <Button onClick={handleNext}>{isLast ? "See results" : "Next question"}</Button>
        )}
      </div>
    </div>
  )
}
