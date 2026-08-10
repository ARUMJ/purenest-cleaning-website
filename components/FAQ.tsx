'use client';

import { useId, useState } from 'react';
import SectionHeading from './SectionHeading';
import { faq } from '@/data/homepage';

/**
 * FAQ — accessible accordion.
 *
 * Implements the WAI-ARIA disclosure pattern manually (no Radix /
 * Headless UI dependency) so the bundle stays small and the section
 * remains predictable:
 *
 *  - each question is a real <button> with aria-expanded + aria-controls
 *  - the answer panel uses the matching id
 *  - panel animation is gated on prefers-reduced-motion via CSS
 *  - multiple items may be open at once
 *  - keyboard support is inherited from the <button> element
 */
export default function FAQ() {
  const baseId = useId();
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="section bg-cream"
    >
      <div className="container-content">
        <SectionHeading
          heading={faq.heading}
          align="center"
          as="h2"
        />

        <ul className="mx-auto mt-12 max-w-3xl divide-y divide-border/70 rounded-card border border-border/60 bg-surface shadow-card">
          {faq.items.map((item, i) => {
            const isOpen = openItems.has(i);
            const buttonId = `${baseId}-q-${i}`;
            const panelId = `${baseId}-a-${i}`;

            return (
              <li key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-charcoal transition-colors duration-200 hover:bg-forest/[0.03]"
                  >
                    <span className="text-balance">{item.question}</span>
                    <span
                      aria-hidden="true"
                      className={`inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-border/80 text-forest transition-transform duration-300 ${
                        isOpen ? 'rotate-45 bg-forest/[0.06]' : ''
                      }`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                      >
                        <line x1="6" y1="1" x2="6" y2="11" />
                        <line x1="1" y1="6" x2="11" y2="6" />
                      </svg>
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-6 pb-6 text-body text-muted text-pretty"
                >
                  {item.answer}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
