import { SlideFrame } from '@/components/slide-frame'

const blocks = [
  {
    title: 'Аналитика',
    body: 'Рынок · Аудитория · Конкуренты · Территория · Позиционирование',
  },
  {
    title: 'Маркетинговая стратегия',
    body: 'Индивидуальная стратегия продвижения · Каналы · Коммуникация · План действий',
  },
  {
    title: 'Упаковка',
    body: 'Сайт · Визуальный стиль · Социальные сети · Контент',
  },
  {
    title: 'Лиды + продажи',
    body: 'Яндекс Директ · ЦИАН · Авито · Посевы · Партнёрства · CRM',
  },
  {
    title: 'Имидж + репутация',
    body: 'Мероприятия · Клиентский сервис · Премиальные партнёрства · PR · Наружная реклама',
  },
]

export function SlideModel({ index, total }: { index: number; total: number }) {
  return (
    <SlideFrame index={index} total={total}>
      <div className="absolute inset-0 flex flex-col px-[7cqw] pt-[7cqw] pb-[9cqw]">
        <header className="mb-[4cqw]">
          <p className="eyebrow text-accent text-[1.05cqw] mb-[1.6cqw]">
            Как мы работаем
          </p>
          <h2 className="font-serif font-light leading-none text-[4cqw] text-foreground">
            Стратегическая модель
          </h2>
        </header>

        <div className="grid grid-cols-5 flex-1 border-t border-border">
          {blocks.map((b, i) => (
            <div
              key={b.title}
              className={`flex flex-col pt-[2.2cqw] pr-[1.8cqw] ${
                i !== 0 ? 'border-l border-border pl-[1.8cqw]' : ''
              }`}
            >
              <span className="mb-[1.6cqw] block h-[0.15cqw] w-[2.4cqw] bg-accent/60" />
              <h3 className="font-serif text-[1.9cqw] leading-tight text-foreground mb-[1.4cqw] text-balance">
                {b.title}
              </h3>
              <p className="font-sans font-light text-[1.05cqw] leading-relaxed text-muted-foreground text-pretty">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  )
}
