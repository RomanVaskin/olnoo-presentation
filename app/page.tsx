import { DownloadPdfButton } from '@/components/download-pdf-button'
import { DeckSlides } from '@/components/deck-slides'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      {/* On-screen deck — unchanged. Hidden during print. */}
      <div className="deck mx-auto flex max-w-[1280px] flex-col gap-8 px-4 py-10 md:gap-12 md:py-16">
        <DeckSlides />
      </div>

      {/* Print-only deck — hidden on screen, shown only when printing. */}
      <div className="print-deck" aria-hidden="true">
        <DeckSlides />
      </div>

      <DownloadPdfButton />
    </main>
  )
}
