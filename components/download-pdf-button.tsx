'use client'

import { useEffect } from 'react'

export function DownloadPdfButton() {
  // When this page is opened standalone with ?print=1 (from inside an iframe),
  // trigger the print dialog for the presentation itself only.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('print') !== '1') return

    const triggerPrint = () => window.print()

    if (document.readyState === 'complete') {
      // give layout/images a beat to settle before printing
      const id = window.setTimeout(triggerPrint, 400)
      return () => window.clearTimeout(id)
    }

    window.addEventListener('load', triggerPrint)
    return () => window.removeEventListener('load', triggerPrint)
  }, [])

  const handleClick = () => {
    const isEmbedded = window.self !== window.top

    if (isEmbedded) {
      // Open the presentation standalone (its own URL) and auto-print there,
      // so we never try to print the parent page.
      const url = `${window.location.origin}${window.location.pathname}?print=1`
      window.open(url, '_blank', 'noopener,noreferrer')
      return
    }

    window.print()
  }

  return (
    <button
      type="button"
      onClick={handleClick}
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
