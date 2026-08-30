import Image from 'next/image'
import { SlideFrame } from '@/components/slide-frame'

interface StageSlideProps {
  index: number
  total: number
  stageLabel: string
  title: string
  subtitle?: string
  sectionLabel?: string
  tasks: string[]
  goal?: string
  image?: string
  imageAlt?: string
}

function TaskItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-[1.1cqw] py-[0.9cqw] border-b border-border/60">
      <span
        aria-hidden="true"
        className="mt-[0.75cqw] h-[0.45cqw] w-[0.45cqw] shrink-0 rotate-45 bg-accent"
      />
      <span className="font-sans font-light text-[1.3cqw] leading-snug text-foreground/90 text-pretty">
        {text}
      </span>
    </li>
  )
}

export function SlideStage({
  index,
  total,
  stageLabel,
  title,
  subtitle,
  sectionLabel,
  tasks,
  goal,
  image,
  imageAlt,
}: StageSlideProps) {
  return (
    <SlideFrame index={index} total={total}>
      <div className="absolute inset-0 flex">
        {/* left: heading */}
        <div className="flex w-[38cqw] shrink-0 flex-col justify-center px-[7cqw] py-[7cqw]">
          <p className="eyebrow text-accent text-[1.1cqw] mb-[1.8cqw]">{stageLabel}</p>
          <h2 className="font-serif font-light leading-[1.04] text-[3.4cqw] text-foreground text-balance">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-[2cqw] font-sans font-light text-[1.25cqw] leading-relaxed text-muted-foreground text-pretty">
              {subtitle}
            </p>
          ) : null}
          {goal ? (
            <div className="mt-auto pt-[3cqw]">
              <div className="h-px w-full bg-border" />
              <p className="mt-[1.8cqw] font-serif italic text-[1.5cqw] leading-snug text-foreground/85 text-pretty">
                {goal}
              </p>
            </div>
          ) : null}
        </div>

        {/* right: tasks (+ optional image) */}
        <div className="relative flex flex-1 flex-col justify-center border-l border-border px-[5cqw] py-[7cqw]">
          {image ? (
            <div className="relative mb-[2.5cqw] h-[26cqw] w-full overflow-hidden rounded-md">
              <Image src={image} alt={imageAlt ?? ''} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
            </div>
          ) : null}

          {sectionLabel ? (
            <p className="eyebrow text-muted-foreground/70 text-[0.95cqw] mb-[1.4cqw]">
              {sectionLabel}
            </p>
          ) : null}

          <ul
            className={
              tasks.length > 5
                ? 'grid grid-cols-2 gap-x-[3cqw]'
                : 'grid grid-cols-1'
            }
          >
            {tasks.map((t) => (
              <TaskItem key={t} text={t} />
            ))}
          </ul>
        </div>
      </div>
    </SlideFrame>
  )
}
