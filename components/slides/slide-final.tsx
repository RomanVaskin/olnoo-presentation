import { SlideFrame } from '@/components/slide-frame'

const pillars = [
  {
    title: 'Репутация',
    body: 'Отзывы · Кейсы · PR · Работа с обратной связью',
  },
  {
    title: 'Партнёрства',
    body: 'Премиальные бренды · Локальный бизнес · Агентства · Инфлюенсеры',
  },
  {
    title: 'Клиентский опыт',
    body: 'Коммуникация · Сервис · Сопровождение · Рекомендации',
  },
  {
    title: 'Имидж бренда',
    body: 'Контент · Медиа · Мероприятия · Последовательная визуальная коммуникация',
  },
]

export function SlideFinal({ index, total }: { index: number; total: number }) {
  return (
    <SlideFrame index={index} total={total}>
      <div className="absolute inset-0 flex flex-col px-[7cqw] pt-[6.5cqw] pb-[9cqw]">
        <header className="max-w-[62cqw]">
          <p className="eyebrow text-accent text-[1.05cqw] mb-[1.6cqw]">Финал</p>
          <h2 className="font-serif font-light leading-[1.02] text-[3.8cqw] text-foreground text-balance">
            Построение имиджа и репутации
          </h2>
          <p className="mt-[2cqw] font-sans font-light text-[1.35cqw] leading-relaxed text-muted-foreground text-pretty">
            Создаём долгосрочную ценность бренда, которая работает не только на
            текущие продажи
          </p>
        </header>

        <div className="mt-[4cqw] grid flex-1 grid-cols-4 border-t border-border">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`flex flex-col pt-[2.4cqw] pr-[2cqw] ${
                i !== 0 ? 'border-l border-border pl-[2cqw]' : ''
              }`}
            >
              <span className="mb-[1.6cqw] block h-[0.15cqw] w-[2.4cqw] bg-accent/60" />
              <h3 className="font-serif text-[2cqw] leading-tight text-foreground mb-[1.4cqw]">
                {p.title}
              </h3>
              <p className="font-sans font-light text-[1.05cqw] leading-relaxed text-muted-foreground text-pretty">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-[3.5cqw] font-serif italic font-light text-[2.1cqw] leading-snug text-foreground/90 text-balance max-w-[74cqw]">
          От привлечения внимания — к доверию, узнаваемости и устойчивой
          репутации бренда
        </p>
      </div>
    </SlideFrame>
  )
}
