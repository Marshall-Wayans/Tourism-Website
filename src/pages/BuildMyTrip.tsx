import React, { useMemo, useState } from 'react'
import { ArrowLeftIcon, CheckIcon, RotateCcwIcon } from 'lucide-react'
import { PageHero } from '../components/sections/PageHero'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { TourCard } from '../components/cards/TourCard'
import { tours } from '../data/tours'
import { images } from '../data/images'
import { months } from '../data/company'
import { useEnquiry } from '../contexts/EnquiryContext'
import { useSeo } from '../hooks/useSeo'

interface Question {
  id: string
  question: string
  helper: string
  options: { label: string; value: string; detail: string }[]
}

const QUESTIONS: Question[] = [
  {
    id: 'focus',
    question: 'What kind of experience are you looking for?',
    helper: 'Pick the one that pulls hardest. You can combine later.',
    options: [
      { label: 'Wildlife', value: 'wildlife', detail: 'Game drives, big cats, the migration' },
      { label: 'Trekking', value: 'trekking', detail: 'Kilimanjaro, Meru or a volcano' },
      { label: 'Beach', value: 'beach', detail: 'Zanzibar, Pemba or Mafia' },
      { label: 'Culture', value: 'culture', detail: 'Maasai, Hadzabe, Datoga, Olduvai' },
    ],
  },
  {
    id: 'pace',
    question: 'How do you like to travel?',
    helper: 'This decides how many places we fit into your days.',
    options: [
      { label: 'Slow and relaxed', value: 'slow', detail: 'Fewer camps, longer stays' },
      { label: 'Balanced', value: 'balanced', detail: 'Early mornings, unhurried afternoons' },
      { label: 'Packed with adventure', value: 'packed', detail: 'Full days, more ground covered' },
    ],
  },
  {
    id: 'company',
    question: 'Who are you travelling with?',
    helper: 'It changes the camps, the vehicles and the pace.',
    options: [
      { label: 'Solo', value: 'solo', detail: 'Private guiding, flexible days' },
      { label: 'Couple', value: 'couple', detail: 'Quiet camps, private dining' },
      { label: 'Family', value: 'family', detail: 'Shorter drives, family tents' },
      { label: 'Friends or group', value: 'group', detail: 'Multiple vehicles, shared camps' },
    ],
  },
  {
    id: 'season',
    question: 'When are you thinking of travelling?',
    helper: 'Approximate is fine — the season shapes the route.',
    options: [
      { label: 'Jan – Mar', value: 'jan-mar', detail: 'Calving season, clear mountain' },
      { label: 'Apr – May', value: 'apr-may', detail: 'Green, quiet, dramatic light' },
      { label: 'Jun – Oct', value: 'jun-oct', detail: 'Dry season, river crossings' },
      { label: 'Nov – Dec', value: 'nov-dec', detail: 'Short rains, fewer vehicles' },
    ],
  },
  {
    id: 'experience',
    question: 'Is this your first trip to Tanzania?',
    helper: 'Returning travellers usually want somewhere quieter.',
    options: [
      { label: 'First time', value: 'first', detail: 'The classics, done properly' },
      { label: 'Returning visitor', value: 'returning', detail: 'Somewhere further off the circuit' },
    ],
  },
]

function recommend(answers: Record<string, string>) {
  const { focus, experience, season } = answers
  if (focus === 'trekking') {
    return {
      title: 'Kilimanjaro + Serengeti',
      body: 'Climb first, then recover on the plains. A seven- or eight-day route on Machame or Lemosho, followed by three or four nights in the Serengeti positioned for the season.',
      tourSlug: 'kilimanjaro-machame-trek',
    }
  }
  if (focus === 'beach') {
    return {
      title: 'Zanzibar & the Spice Islands',
      body: 'Stone Town, spice farms and reef days, with the option to add a short northern-circuit safari at the front if you want both.',
      tourSlug: 'zanzibar-island-escape',
    }
  }
  if (focus === 'culture') {
    return {
      title: 'Cultural Northern Tanzania',
      body: 'Mto wa Mbu, Lake Eyasi and the Ngorongoro highlands, with visits arranged directly with Hadzabe, Datoga and Maasai households.',
      tourSlug: 'cultural-northern-tanzania',
    }
  }
  if (experience === 'returning') {
    return {
      title: 'Southern Tanzania Wildlife Journey',
      body: 'Ruaha and Mikumi, where you can drive for an hour without meeting another vehicle. Best between June and October.',
      tourSlug: 'southern-tanzania-wildlife-journey',
    }
  }
  if (season === 'jun-oct' || season === 'jan-mar') {
    return {
      title: 'Northern Safari + Zanzibar',
      body: 'Tarangire, Serengeti and the Ngorongoro Crater positioned for the herds, then a short flight east to finish on the coast.',
      tourSlug: 'northern-circuit-zanzibar',
    }
  }
  return {
    title: 'Serengeti Migration Safari',
    body: 'Camps that move with the herds, plus a crater-floor morning. The most flexible way to see the northern circuit in any season.',
    tourSlug: 'serengeti-migration-safari',
  }
}

export function BuildMyTrip() {
  useSeo({
    title: 'Build My Trip — Five Questions, One Direction',
    description:
      'Answer five quick questions about how you like to travel and we will suggest a direction for your Tanzania trip, then hand it to a travel designer.',
    image: images.tileSafari,
  })

  const { openEnquiry } = useEnquiry()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [month, setMonth] = useState('')

  const done = step >= QUESTIONS.length
  const result = useMemo(() => (done ? recommend(answers) : null), [done, answers])
  const recommendedTour = result ? tours.find((t) => t.slug === result.tourSlug) : undefined
  const progress = Math.round((Math.min(step, QUESTIONS.length) / QUESTIONS.length) * 100)

  const choose = (questionId: string, value: string) => {
    setAnswers((a) => ({ ...a, [questionId]: value }))
    setStep((s) => s + 1)
  }

  const reset = () => {
    setAnswers({})
    setMonth('')
    setStep(0)
  }

  return (
    <>
      <PageHero
        eyebrow="Build my trip"
        title="Five questions. No commitment."
        description="A quick way to work out what shape your Tanzania trip should take, before you talk to anyone."
        image={images.tileSafari}
        imageAlt="Travellers watching a lioness cross in front of a safari vehicle on the golden plains"
        trail={[{ label: 'Home', to: '/' }, { label: 'Build my trip' }]}
        compact
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-3xl px-5 py-16 lg:py-20">
          <div className="rounded-card border border-hairline bg-surface p-7 shadow-card lg:p-10">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gold">
                {done ? 'Your direction' : `Question ${step + 1} of ${QUESTIONS.length}`}
              </p>
              {step > 0 && !done && (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-stone transition-colors duration-200 ease-premium hover:text-espresso"
                >
                  <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  Back
                </button>
              )}
            </div>

            <div
              className="mt-4 h-1.5 w-full overflow-hidden rounded-pill bg-hairline"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Quiz progress"
            >
              <div
                className="h-full rounded-pill bg-gold transition-[width] duration-300 ease-premium"
                style={{ width: `${progress}%` }}
              />
            </div>

            {!done ? (
              <div className="mt-8">
                <h2 className="font-display text-[28px] leading-tight text-espresso">{QUESTIONS[step].question}</h2>
                <p className="mt-2 text-[14px] text-stone">{QUESTIONS[step].helper}</p>

                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {QUESTIONS[step].options.map((option) => (
                    <li key={option.value}>
                      <button
                        type="button"
                        onClick={() => choose(QUESTIONS[step].id, option.value)}
                        className="flex h-full w-full flex-col rounded-card border border-hairline bg-ivory p-5 text-left transition-[border-color,box-shadow,transform] duration-200 ease-premium hover:-translate-y-0.5 hover:border-gold hover:shadow-card"
                      >
                        <span className="font-display text-[19px] text-espresso">{option.label}</span>
                        <span className="mt-1.5 text-[13.5px] leading-relaxed text-stone">{option.detail}</span>
                      </button>
                    </li>
                  ))}
                </ul>

                {QUESTIONS[step].id === 'season' && (
                  <div className="mt-6 border-t border-hairline pt-5">
                    <label htmlFor="quiz-month" className="text-[13px] font-medium text-espresso">
                      Know your month? (optional)
                    </label>
                    <select
                      id="quiz-month"
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-hairline bg-surface px-4 py-3 text-[15px] text-espresso focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/25 sm:max-w-xs"
                    >
                      <option value="">Not decided yet</option>
                      {months.map((m) => (
                        <option key={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            ) : (
              result && (
                <div className="mt-8">
                  <Badge tone="green" icon={<CheckIcon className="h-3 w-3" aria-hidden="true" />}>
                    Suggested direction
                  </Badge>
                  <h2 className="mt-4 font-display text-[32px] leading-tight text-espresso">{result.title}</h2>
                  <p className="mt-3 text-[16px] leading-relaxed text-stone">{result.body}</p>
                  {month && <p className="mt-2 text-[14px] text-stone">Travelling in {month}.</p>}

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button size="lg" onClick={() => openEnquiry(`Build My Trip: ${result.title}`)}>
                      Build My Trip
                    </Button>
                    <Button size="lg" variant="secondary" onClick={reset}>
                      <RotateCcwIcon className="h-4 w-4" aria-hidden="true" />
                      Start again
                    </Button>
                  </div>

                  {recommendedTour && (
                    <div className="mt-10 border-t border-hairline pt-8">
                      <p className="text-eyebrow font-semibold uppercase text-gold">A journey close to this</p>
                      <div className="mt-5">
                        <TourCard tour={recommendedTour} />
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  )
}
