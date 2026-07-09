'use client'

import type { Product } from '@/lib/products-data'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const imageSrc =
    product.image ?? `/placeholder.svg?height=420&width=560&query=${encodeURIComponent(product.name)}`

  return (
    <article className="group flex flex-col h-full rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/40 transition">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={imageSrc || '/placeholder.svg'}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
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
