import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SlideFrameProps {
  children: ReactNode
  index: number
  total: number
  className?: string
}

/**
 * A single 16:9 presentation slide.
 * On screen it renders as a centered, rounded, bordered surface.
 * In print it fills exactly one page (see globals.css @media print).
 */
export function SlideFrame({ children, index, total, className }: SlideFrameProps) {
  return (
    <section
      className={cn(
        'slide bg-card border border-border rounded-lg shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] [container-type:inline-size]',
        className,
      )}
    >
      {children}

      {/* footer / slide meta */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-[5cqw] pb-[3.5cqw] text-[1cqw]">
        <span className="eyebrow text-muted-foreground/70">OLNOO</span>
        <span className="font-mono text-muted-foreground/60 tabular-nums">
          {String(index).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>
    </section>
  )
}
