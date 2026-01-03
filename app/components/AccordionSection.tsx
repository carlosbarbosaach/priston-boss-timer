'use client'

import { ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

type Props = {
  title: string
  subtitle?: string
  isOpen: boolean
  onToggle: () => void
  children: ReactNode
}

export default function AccordionSection({
  title,
  subtitle,
  isOpen,
  onToggle,
  children,
}: Props) {
  return (
    <section className="border border-zinc-800 rounded-xl bg-zinc-900/80">
      {/* HEADER */}
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-zinc-800/50 transition"
      >
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          {subtitle && (
            <p className="text-sm text-zinc-400">
              {subtitle}
            </p>
          )}
        </div>

        <ChevronDown
          className={`transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* CONTENT */}
      {isOpen && (
        <div className="px-6 pb-6 pt-2">
          {children}
        </div>
      )}
    </section>
  )
}
