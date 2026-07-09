'use client'

import { CSSProperties } from 'react'

const brands = [
  { name: 'Ajanta Hospital', image: '/brands/AJANTA HOSPITAL.jpg' },
  { name: 'Awadh Hospital', image: '/brands/AWADH HOSPITAL.png' },
  { name: 'CMS Lucknow', image: '/brands/CMS LUCKNOW LOGO.jpg' },
  { name: 'Ekana Hospital', image: '/brands/EKANA HOSPITAL.png' },
  { name: 'LPS Lucknow', image: '/brands/LPS LUCKNOW LOGO.jpg' },
  { name: 'Lulu Mall', image: '/brands/LULU Mall Logo.jpg' },
  { name: 'La Martinière', image: '/brands/La Martiniere LOGO PNG.png' },
  { name: 'Lallu Lal Jugal Kishore Jewellers', image: '/brands/Lallu Lal Jugal Kishore Jewellers.jpg' },
  { name: 'Max Healthcare', image: '/brands/Max Healthcare Logo.png' },
  { name: 'Phoenix Palassio', image: '/brands/PHOENIX PALASSIO LOGO.jpg' },
  { name: 'SKD Hospital', image: '/brands/SKD HOSPITAL.jpg' },
  { name: 'Udhyan Health Care', image: '/brands/UDHYAN HEALTH CARE LOGO.jpg' },
  { name: 'UPRNN Nirman Nigam', image: '/brands/UPRNN Nirman Nigam Logo.png' },
]

export function BrandsMarquee() {
  const marqueeStyle: CSSProperties = {
    animation: 'scroll 50s linear infinite',
  }

  return (
    <section className="py-12 bg-background overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h3 className="text-center text-lg font-semibold text-foreground">Served For Brands</h3>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap" style={marqueeStyle}>
          {brands.map((brand, idx) => (
            <div
              key={`${idx}-1`}
              className="flex-shrink-0 h-16 flex items-center justify-center px-6"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="max-h-16 max-w-xs h-auto object-contain"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {brands.map((brand, idx) => (
            <div
              key={`${idx}-2`}
              className="flex-shrink-0 h-16 flex items-center justify-center px-6"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="max-h-16 max-w-xs h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
