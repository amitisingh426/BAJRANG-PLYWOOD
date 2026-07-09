'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Product } from '@/lib/products-data'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  // Build the image list: prefer `images[]`, fall back to single `image`,
  // and finally to a labelled placeholder.
  const images =
    product.images && product.images.length > 0
      ? product.images
      : product.image
        ? [product.image]
        : [`/placeholder.svg?height=420&width=560&query=${encodeURIComponent(product.name)}`]

  const [index, setIndex] = useState(0)
  const hasMultiple = images.length > 1

  const go = (dir: number) => {
    setIndex((prev) => (prev + dir + images.length) % images.length)
  }

  return (
    <article className="group flex flex-col h-full rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/40 transition">
      {/* Image / carousel */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {images.map((src, i) => (
          <img
            key={src}
            src={src || '/placeholder.svg'}
            alt={`${product.name} — image ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
          />
        ))}

        {hasMultiple && (
          <>
            {/* Prev / Next */}
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center h-8 w-8 rounded-full bg-background/80 text-foreground shadow hover:bg-background transition opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center h-8 w-8 rounded-full bg-background/80 text-foreground shadow hover:bg-background transition opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  aria-label={`Go to image ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? 'w-4 bg-primary' : 'w-1.5 bg-background/70 hover:bg-background'
                  }`}
                />
              ))}
            </div>

            {/* Count badge */}
            <span className="absolute top-2 right-2 text-[11px] font-medium bg-background/80 text-foreground rounded-full px-2 py-0.5">
              {index + 1}/{images.length}
            </span>
          </>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-bold text-foreground leading-snug text-balance">{product.name}</h3>
        <p className="mt-1 text-xs text-primary font-medium leading-relaxed">{product.title}</p>

        <div className="mt-4">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Best For
          </span>
          <p className="text-sm text-foreground/80 leading-relaxed">{product.usage}</p>
        </div>

        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{product.description}</p>
      </div>
    </article>
  )
}
