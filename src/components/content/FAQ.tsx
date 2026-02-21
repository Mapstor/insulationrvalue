'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-primary mb-6" id="faq">
        Frequently Asked Questions
      </h2>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-surface-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-surface-50 transition-colors"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-primary pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-primary flex-shrink-0 transition-transform',
                  openIndex === index && 'rotate-180'
                )}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-text bg-surface-50 border-t border-surface-200">
                <p className="pt-4">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
