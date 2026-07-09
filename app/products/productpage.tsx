'use client'

import { useEffect, useRef, useState } from 'react'
import { Phone } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProductCard } from '@/components/product-card'
import { Reveal } from '@/components/scroll-animations'
import { productCategories } from '@/lib/products-data'
import { telHref, whatsappHref } from '@/lib/site-config'

/* Brand glyph for WhatsApp */
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>
  )
}

export default function ProductsPage() {
  const [activeId, setActiveId] = useState(productCategories[0].id)
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})
  const tabsRef = useRef<HTMLDivElement | null>(null)
  const isClickScrolling = useRef(false)

  // Scroll-sync: pick the section whose top has passed the trigger line just
  // below the sticky header + tab bar. This is far more reliable than a thin
  // IntersectionObserver band across long, variable-height sections.
  useEffect(() => {
    const onScroll = () => {
      if (isClickScrolling.current) return
      const triggerLine = window.innerWidth < 768 ? 150 : 172

      let current = productCategories[0].id
      for (const cat of productCategories) {
        const el = sectionRefs.current[cat.id]
        if (!el) continue
        if (el.getBoundingClientRect().top - triggerLine <= 0) {
          current = cat.id
        }
      }
      setActiveId((prev) => (prev === current ? prev : current))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Keep the active tab scrolled into view inside the tab bar
  useEffect(() => {
    const tabEl = tabsRef.current?.querySelector<HTMLElement>(`[data-tab="${activeId}"]`)
    tabEl?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [activeId])

  const scrollToSection = (id: string) => {
    setActiveId(id)
    isClickScrolling.current = true
    const el = sectionRefs.current[id]
    if (el) {
      const offset = window.innerWidth < 768 ? 132 : 156
      const y = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    window.setTimeout(() => {
      isClickScrolling.current = false
    }, 800)
  }

  return (
    <>
      <SiteHeader />

      {/* Page hero */}
      <section
        className="mt-20 bg-foreground text-primary-foreground relative overflow-hidden flex items-center min-h-[280px] sm:min-h-[340px] md:min-h-[420px]"
        style={{
          backgroundImage: 'url(/products/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full py-12 md:py-16 text-left">
          <p className="text-primary font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">
            Our Catalogue
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-balance">
            Explore Our Products
          </h1>
          <p className="text-base sm:text-lg text-primary-foreground/85 max-w-2xl leading-relaxed">
            From plywood, laminates and veneers to kitchen hardware, locks, handles and decoratives — everything you
            need for your dream interior, all under one roof in Lucknow.
          </p>
        </div>
      </section>

      {/* Sticky category tabs */}
      <div className="sticky top-16 md:top-20 z-40 bg-card/95 backdrop-blur border-b border-border shadow-sm">
        <div
          ref={tabsRef}
          className="max-w-7xl mx-auto px-3 md:px-4 flex gap-1.5 md:gap-2 overflow-x-auto scrollbar-hide py-2.5 md:py-3"
        >
          {productCategories.map((c) => (
            <button
              key={c.id}
              data-tab={c.id}
              onClick={() => scrollToSection(c.id)}
              className={`shrink-0 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition cursor-pointer ${
                activeId === c.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-primary/10'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category sections */}
      <main className="bg-background">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-14 flex flex-col gap-16 md:gap-24">
          {productCategories.map((cat, idx) => (
            <section
              key={cat.id}
              id={cat.id}
              ref={(el) => {
                sectionRefs.current[cat.id] = el
              }}
              className="scroll-mt-36 md:scroll-mt-44"
            >
              {/* Category header */}
              <Reveal direction="up">
                <div className="flex items-end justify-between gap-4 mb-6 md:mb-8 pb-4 border-b border-border">
                  <div>
                    <p className="text-primary font-semibold tracking-widest uppercase text-xs sm:text-sm mb-1.5">
                      Category {idx + 1}
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
                      {cat.title}
                    </h2>
                  </div>
                  <span className="hidden sm:inline-block shrink-0 text-sm font-medium text-muted-foreground">
                    {cat.products.length} {cat.products.length === 1 ? 'Product' : 'Products'}
                  </span>
                </div>
              </Reveal>

              {/* Product grid */}
              <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cat.products.map((product, pIdx) => (
                  <Reveal key={product.name} direction="up" delay={(pIdx % 3) * 80}>
                    <ProductCard product={product} />
                  </Reveal>
                ))}
              </div>

              {/* Per-category CTA */}
              <Reveal direction="up">
                <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 rounded-xl bg-muted/60 border border-border p-5 md:p-6">
                  <p className="text-sm sm:text-base text-foreground font-medium text-center sm:text-left">
                    Interested in {cat.title}? Get pricing &amp; availability.
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={telHref}
                      className="flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded font-semibold hover:bg-accent transition"
                    >
                      <Phone size={18} />
                      Enquire Now
                    </a>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-primary text-primary rounded font-semibold hover:bg-primary hover:text-primary-foreground transition"
                    >
                      <WhatsAppIcon size={20} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </Reveal>
            </section>
          ))}
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
