'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import { navigation, primaryCta } from '@/data/homepage';

/**
 * Mobile navigation sheet.
 *
 * Client component. Implements an accessible disclosure pattern:
 *  - the trigger is a real <button> with aria-expanded
 *  - the panel uses role="dialog" with aria-modal="true"
 *  - ESC closes the panel
 *  - focus is moved into the panel on open and restored on close
 *  - the body scroll is locked while the panel is open
 */
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll and manage focus when the panel is open.
  useEffect(() => {
    if (!open) return;

    // Capture the trigger element at the moment the panel opens so
    // we can restore focus to the same node in the cleanup function.
    const triggerEl = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Move focus to the close button.
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 30);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
      // Restore focus to the trigger on close.
      triggerEl?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-btn text-charcoal hover:bg-forest/[0.06]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </svg>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="presentation"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-charcoal/40"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="absolute inset-y-0 right-0 flex w-full max-w-xs flex-col bg-cream shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
              <span className="font-display text-base font-semibold text-charcoal">Menu</span>
              <button
                ref={closeRef}
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-btn text-charcoal hover:bg-forest/[0.06]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <nav aria-label="Mobile primary" className="flex-1 overflow-y-auto px-5 py-6">
              <ul className="space-y-1">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-btn px-3 py-3 text-base font-medium text-charcoal hover:bg-forest/[0.06] hover:text-forest"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href={primaryCta.href}
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  {primaryCta.label}
                </Link>
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
