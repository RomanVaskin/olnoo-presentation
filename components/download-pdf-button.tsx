'use client'

export function DownloadPdfButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-background/80 px-5 py-3 text-xs font-medium tracking-wide text-foreground backdrop-blur-md transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
      aria-label="Скачать презентацию в формате PDF"
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3v12" />
        <path d="m7 12 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
      Скачать PDF
    </button>
  )
}
