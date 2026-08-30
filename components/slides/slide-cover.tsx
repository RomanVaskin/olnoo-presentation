import Image from 'next/image'
import { SlideFrame } from '@/components/slide-frame'

export function SlideCover({ index, total }: { index: number; total: number }) {
  return (
    <SlideFrame index={index} total={total}>
      {/* background image */}
      <Image
        src="/images/cover-house.png"
        alt="Современный премиальный загородный дом в сумерках"
        fill
        priority
        className="object-cover"
      />
      {/* graphite wash for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

      {/* content */}
      <div className="absolute inset-0 flex flex-col justify-center px-[7cqw]">
        <p className="eyebrow text-accent text-[1.15cqw] mb-[3cqw]">
          Стратегия · Продажи · Бренд
        </p>
        <h1 className="font-serif font-light leading-[1.02] text-[5.2cqw] max-w-[70cqw] text-balance text-foreground">
          Стратегия продвижения премиальной загородной недвижимости
        </h1>
        <div className="mt-[3.5cqw] h-px w-[16cqw] bg-accent/50" />
        <p className="mt-[3cqw] font-sans font-light text-[1.7cqw] leading-relaxed max-w-[46cqw] text-muted-foreground text-pretty">
          Формирование бренда, привлечение покупателей и построение системы
          продаж
        </p>
      </div>
    </SlideFrame>
  )
}
