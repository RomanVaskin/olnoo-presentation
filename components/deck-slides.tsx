import { SlideCover } from '@/components/slides/slide-cover'
import { SlideModel } from '@/components/slides/slide-model'
import { SlideStage } from '@/components/slides/slide-stage'
import { SlideFinal } from '@/components/slides/slide-final'

const TOTAL = 7

/**
 * The full ordered set of 7 presentation slides.
 * Rendered twice by the page: once in the on-screen `.deck` and once in the
 * print-only `.print-deck`. Keeping the slides here guarantees both decks stay
 * byte-for-byte identical in content and composition.
 */
export function DeckSlides() {
  return (
    <>
      <SlideCover index={1} total={TOTAL} />

      <SlideModel index={2} total={TOTAL} />

      <SlideStage
        index={3}
        total={TOTAL}
        stageLabel="Этап 1 — Фундамент"
        title="Фундамент"
        subtitle="Подготовка инфраструктуры и базы для запуска продвижения"
        sectionLabel="Ключевые задачи"
        image="/images/site-territory.png"
        imageAlt="Премиальный загородный посёлок среди леса"
        imageSide="left"
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
        image="/images/villa-glass.png"
        imageAlt="Современная загородная вилла со стеклянным фасадом в лесу"
        imageSide="right"
        visual="traffic"
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
        image="/images/residence-forest.png"
        imageAlt="Премиальная лесная резиденция в сумерках"
        imageSide="left"
        visual="funnel"
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
        imageSide="right"
        images={[
          {
            src: '/images/brand-interior.png',
            alt: 'Интерьер премиального загородного дома',
          },
          {
            src: '/images/house-detail.png',
            alt: 'Архитектурная деталь фасада из дерева и камня',
          },
          {
            src: '/images/landscape-nature.png',
            alt: 'Природное окружение премиального посёлка',
          },
        ]}
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
    </>
  )
}
