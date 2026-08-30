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
  images?: { src: string; alt: string }[]
  imageSide?: 'left' | 'right'
  visual?: 'traffic' | 'funnel'
}

function TaskItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-[1.1cqw] py-[0.85cqw] border-b border-border/60">
      <span
        aria-hidden="true"
        className="mt-[0.7cqw] h-[0.45cqw] w-[0.45cqw] shrink-0 rotate-45 bg-accent"
      />
      <span className="font-sans font-light text-[1.25cqw] leading-snug text-foreground/90 text-pretty">
        {text}
      </span>
    </li>
  )
}

/* understated ascending traffic chart */
function TrafficVisual() {
  const bars = [34, 46, 40, 58, 72, 90]
  return (
    <div className="mb-[2.6cqw]">
      <p className="eyebrow text-muted-foreground/70 text-[0.9cqw] mb-[1.2cqw]">
        Каналы трафика
      </p>
      <div className="flex h-[6.5cqw] items-end gap-[1cqw]" aria-hidden="true">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`w-full rounded-t-[0.2cqw] ${
              i === bars.length - 1 ? 'bg-accent' : 'bg-foreground/20'
            }`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  )
}

/* understated narrowing lead funnel */
function FunnelVisual() {
  const steps = [
    { label: 'Трафик', w: 100 },
    { label: 'Лиды', w: 74 },
    { label: 'Квалификация', w: 50 },
    { label: 'Сделка', w: 28 },
  ]
  return (
    <div className="mb-[2.6cqw]">
      <p className="eyebrow text-muted-foreground/70 text-[0.9cqw] mb-[1.2cqw]">
        Путь клиента
      </p>
      <div className="flex flex-col gap-[0.7cqw]">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-[1.2cqw]">
            <div
              className={`h-[1.5cqw] rounded-r-[0.2cqw] ${
                i === steps.length - 1 ? 'bg-accent' : 'bg-foreground/20'
              }`}
              style={{ width: `${s.w}%`, maxWidth: '78%' }}
              aria-hidden="true"
            />
            <span className="font-mono text-[0.85cqw] uppercase tracking-wider text-muted-foreground/70">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
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
  images,
  imageSide = 'right',
  visual,
}: StageSlideProps) {
  const overlayHeading = Boolean(image) && !images

  /* --- image column (single, heading overlaid) --- */
  const singleImageColumn = image ? (
    <div className="relative w-[42cqw] shrink-0 overflow-hidden">
      <Image src={image} alt={imageAlt ?? ''} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-background/10" />
      <div
        className={`absolute inset-0 ${
          imageSide === 'left'
            ? 'bg-gradient-to-l from-background/80 to-transparent'
            : 'bg-gradient-to-r from-background/80 to-transparent'
        }`}
      />
      <div className="absolute inset-x-0 bottom-0 flex flex-col px-[3.5cqw] pb-[7cqw]">
        <p className="eyebrow text-accent text-[1.1cqw] mb-[1.6cqw]">{stageLabel}</p>
        <h2 className="font-serif font-light leading-[1.04] text-[3.4cqw] text-foreground text-balance">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-[1.8cqw] font-sans font-light text-[1.2cqw] leading-relaxed text-muted-foreground text-pretty max-w-[34cqw]">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  ) : null

  /* --- image column (collage of 2-3 images) --- */
  const collageColumn = images ? (
    <div className="grid w-[47cqw] shrink-0 grid-rows-5 gap-[1cqw] p-[1cqw]">
      <div className="relative row-span-3 overflow-hidden rounded-md">
        <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
      </div>
      <div className="row-span-2 grid grid-cols-2 gap-[1cqw]">
        {images.slice(1, 3).map((img) => (
          <div key={img.src} className="relative overflow-hidden rounded-md">
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  ) : null

  const imageColumn = singleImageColumn ?? collageColumn

  /* --- content column --- */
  const content = (
    <div className="relative flex flex-1 flex-col justify-center px-[5cqw] py-[7cqw]">
      {/* heading lives here only when it is not overlaid on a single image */}
      {!overlayHeading ? (
        <header className="mb-[2.6cqw]">
          <p className="eyebrow text-accent text-[1.1cqw] mb-[1.4cqw]">{stageLabel}</p>
          <h2 className="font-serif font-light leading-[1.04] text-[3cqw] text-foreground text-balance">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-[1.6cqw] font-sans font-light text-[1.2cqw] leading-relaxed text-muted-foreground text-pretty">
              {subtitle}
            </p>
          ) : null}
        </header>
      ) : null}

      {visual === 'traffic' ? <TrafficVisual /> : null}
      {visual === 'funnel' ? <FunnelVisual /> : null}

      {sectionLabel ? (
        <p className="eyebrow text-muted-foreground/70 text-[0.9cqw] mb-[1.3cqw]">
          {sectionLabel}
        </p>
      ) : null}

      <ul
        className={
          tasks.length > 5 ? 'grid grid-cols-2 gap-x-[3cqw]' : 'grid grid-cols-1'
        }
      >
        {tasks.map((t) => (
          <TaskItem key={t} text={t} />
        ))}
      </ul>

      {goal ? (
        <div className="mt-[2.6cqw]">
          <div className="h-px w-full bg-border" />
          <p className="mt-[1.6cqw] font-serif italic text-[1.45cqw] leading-snug text-foreground/85 text-pretty">
            {goal}
          </p>
        </div>
      ) : null}
    </div>
  )

  return (
    <SlideFrame index={index} total={total}>
      <div className="absolute inset-0 flex">
        {imageSide === 'left' ? (
          <>
            {imageColumn}
            {content}
          </>
        ) : (
          <>
            {content}
            {imageColumn}
          </>
        )}
      </div>
    </SlideFrame>
  )
}
