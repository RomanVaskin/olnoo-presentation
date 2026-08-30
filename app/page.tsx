import { DownloadPdfButton } from '@/components/download-pdf-button'
import { SlideCover } from '@/components/slides/slide-cover'
import { SlideModel } from '@/components/slides/slide-model'
import { SlideStage } from '@/components/slides/slide-stage'
import { SlideFinal } from '@/components/slides/slide-final'

const TOTAL = 7

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <div className="deck mx-auto flex max-w-[1280px] flex-col gap-8 px-4 py-10 md:gap-12 md:py-16">
        <SlideCover index={1} total={TOTAL} />

        <SlideModel index={2} total={TOTAL} />

        <SlideStage
          index={3}
          total={TOTAL}
          stageLabel="Этап 1 — Фундамент"
          title="Фундамент"
          subtitle="Подготовка инфраструктуры и базы для запуска продвижения"
          sectionLabel="Ключевые задачи"
          tasks={[
            'Анализ рынка и конкурентов',
            'Определение целевой аудитории и портретов покупателей',
            'Анализ территории и премиальных точек вокруг объекта',
            'Разработка позиционирования',
            'Разработка сайта и упаковки',
            'Настройка аналитики',
            'Проектирование воронки и CRM',
            'Подготовка базы объектов и материалов для рекламы',
          ]}
        />

        <SlideStage
          index={4}
          total={TOTAL}
          stageLabel="Этап 2"
          title="Запуск и тестирование каналов трафика"
          sectionLabel="Ключевые задачи"
          tasks={[
            'Настройка и запуск Яндекс Директ',
            'Оптимизация и продвижение профиля в ЦИАН',
            'Премиальные объявления на Авито',
            'Партнёрства с локальными компаниями, агентами и сообществами',
            'Создание и настройка социальных сетей',
            'Тестирование различных каналов трафика',
          ]}
          goal="Цель: определить наиболее эффективные источники качественного входящего спроса"
        />

        <SlideStage
          index={5}
          total={TOTAL}
          stageLabel="Этап 3"
          title="Лид-система и CRM"
          sectionLabel="Ключевые задачи"
          tasks={[
            'Сбор лидов из всех каналов',
            'Настройка CRM и автоматизации',
            'Сценарии прогрева: email, мессенджеры, ретаргетинг',
            'Скрипты менеджеров и стандарты продаж',
            'Аналитика и отслеживание конверсий',
            'Дистрибуция контента в тематических сообществах',
          ]}
          goal="Цель: построить управляемую и измеримую систему лидов и продаж"
        />

        <SlideStage
          index={6}
          total={TOTAL}
          stageLabel="Этап 4"
          title="Контент, социальные сети и бренд"
          sectionLabel="Ключевые задачи"
          image="/images/brand-interior.png"
          imageAlt="Интерьер премиального загородного дома"
          tasks={[
            'Фото- и видеоконтент территории и объектов',
            'Экспертные статьи и полезные материалы',
            'Видеообзоры, экскурсии и прямые эфиры',
            'Упаковка социальных сетей',
            'Ведение социальных сетей',
            'Контент-план и регулярные публикации',
            'Вовлечение аудитории и работа с сообществом',
            'Отзывы, кейсы и PR',
            'Дистрибуция контента',
          ]}
        />

        <SlideFinal index={7} total={TOTAL} />
      </div>

      <DownloadPdfButton />
    </main>
  )
}
