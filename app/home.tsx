'use client'

// NOTE: `Link`, `LogIn` & `LayoutDashboard` are temporarily unused (Sign In / Admin disabled).
// import Link from 'next/link'
import { Phone, MapPin, Clock, Star, ChevronRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '@/components/scroll-animations'
import { SiteFooter } from '@/components/site-footer'
import { QuickEnquiryForm } from '@/components/quick-enquiry-form'
import { BrandsMarquee } from '@/components/brands-marquee'
import { siteConfig, telHref, whatsappHref, mapHref } from '@/lib/site-config'
import type { Metadata } from 'next'

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.16a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  )
}

/* Brand glyph for WhatsApp */
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>
  )
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full bg-card shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <img src="/images/bajrang-logo.png" alt="Bajrang Plywood" className="h-12 sm:h-14 md:h-16 w-auto" />

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 items-center">
            <a href="/about" className="text-foreground hover:text-primary transition">About</a>
            <a href="/products" className="text-foreground hover:text-primary transition">Products</a>
            <a href="/gallery" className="text-foreground hover:text-primary transition">Gallery</a>
            <a href="/contact" className="text-foreground hover:text-primary transition">Contact</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-3 items-center">
            {/* TODO: Sign In & Admin are temporarily disabled — to be re-enabled later.
            <Link href="/sign-in" className="flex items-center gap-2 px-4 py-2 text-foreground hover:text-primary transition font-medium">
              <LogIn size={18} />
              Sign In
            </Link>
            <Link href="/admin" className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition">
              <LayoutDashboard size={18} />
              Admin
            </Link>
            */}
                      <a
                        href={siteConfig.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="flex items-center justify-center text-primary hover:text-accent transition"
                      >
                        <InstagramIcon size={24} />
                      </a>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="flex items-center justify-center text-primary hover:text-accent transition"
                      >
                        <WhatsAppIcon size={24} />
                      </a>
            <a href={telHref} className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-accent transition">
              <Phone size={18} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card p-4">
            <nav className="flex flex-col gap-4">
              <a href="/about" className="text-foreground hover:text-primary transition">About</a>
              <a href="/products" className="text-foreground hover:text-primary transition">Products</a>
              <a href="/gallery" className="text-foreground hover:text-primary transition">Gallery</a>
              <a href="/contact" className="text-foreground hover:text-primary transition">Contact</a>
              {/* TODO: Sign In & Admin are temporarily disabled — to be re-enabled later.
              <Link href="/sign-in" className="flex items-center gap-2 text-foreground hover:text-primary transition font-medium">
                <LogIn size={18} />
                Sign In
              </Link>
              <Link href="/admin" className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition">
                <LayoutDashboard size={18} />
                Admin Panel
              </Link>
              */}
              <a href={telHref} className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-accent transition">
                <Phone size={18} />
                Call Now
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded hover:opacity-90 transition">
                <WhatsAppIcon size={18} />
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="mt-20 min-h-screen relative flex items-center overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/home/hero-bg.jpg"
            alt="Modern luxury interior with premium wood materials and design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/55" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full py-16 sm:py-20 md:py-24">
          <div className="max-w-2xl">
            {/* <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">More Than Just Plywood</p> */}
            {/* <p className="text-primary font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4 font-serif italic">
              More Than Just Plywood
            </p> */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight text-balance">
              Premium Plywood&#44; Surfaces &amp; Interior Materials
            </h1>
            <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 leading-relaxed">
              Your complete one-stop showroom for laminates, veneers, hardware, charcoal panels and decorative surfaces — all under one roof in Lucknow and Uttar Pradesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={telHref} className="px-8 py-4 bg-primary text-primary-foreground rounded text-lg font-semibold hover:bg-accent transition flex items-center justify-center gap-2">
                <Phone size={20} />
                Call Now
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 backdrop-blur border border-white/30 text-white rounded text-lg font-semibold hover:bg-white/20 transition flex items-center justify-center gap-2 ">
                <WhatsAppIcon size={25} />
                WhatsApp
              </a>
              <a href="#products" className="px-8 py-4 border-2 border-primary text-primary rounded text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition flex items-center justify-center gap-2">
                Explore Products
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">13+</div>
              <p className="text-sm mt-2">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold">10,000+</div>
              <p className="text-sm mt-2">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold">1000+</div>
              <p className="text-sm mt-2">Product Variants</p>
            </div>
            <div>
              <div className="text-3xl font-bold">Lucknow</div>
              <p className="text-sm mt-2">Premium Location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Product Range</h2>
            <p className="text-xl text-muted-foreground">Complete solutions for your interior needs</p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Plywood', image: '/products/plywood/century-ply/1.png', desc: 'E0 grade, calibrated, termite & borer proof plywood' },
              { name: 'Laminates', image: '/products/laminates/premium-laminates/1.png', desc: 'Matte, gloss & textured — scratch resistant surface collection' },
              { name: 'Leather Panel-Louvers', image: '/products/bendable-panels/bendable-panels-or-louvers/1.jpeg', desc: 'Artistic Plusetone laminates — unique designs for walls & furniture' },
              { name: 'Decoratives', image: '/products/decoratives/fabric-sheets/1.png', desc: 'Smart locks, hinges & precision-engineered fittings' },
              { name: 'Kitchen Hardwares', image: '/products/kitchen-hardware/lift-up-system/1.png', desc: 'Modern walls, luxury impact — premium panels & louvers' },
              { name: 'Customize Doors', image: '/products/decoratives/customized-door/1.png', desc: 'Premium doors for office & home — entrance to elegance' },
            ].map((category, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 100}>
                <div className="bg-card rounded-lg overflow-hidden shadow hover:shadow-lg transition group cursor-pointer h-full">
                  <div className="relative overflow-hidden bg-muted">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{category.name}</h3>
                    <p className="text-muted-foreground mb-4">{category.desc}</p>
                    <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-accent transition font-semibold">
                      View Details
                      <ChevronRight size={18} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Bajrang Plywood?</h2>
            <p className="text-xl text-muted-foreground">Trusted by thousands of homeowners, designers & contractors</p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Right-Fit Solutions', desc: 'Solving your unique design needs' },
              { title: 'Wide Selection', desc: '1000+ variants to choose from' },
              { title: 'Expert Guidance', desc: 'Professional advice from experienced team' },
              { title: 'Wholesale & Retail', desc: 'Competitive pricing for all volumes' },
            ].map((item, idx) => (
              <Reveal key={idx} direction="zoom" delay={idx * 120}>
                <div className="bg-card p-8 rounded-lg shadow text-center hover:shadow-lg transition h-full">
                  <div className="text-primary text-5xl mb-4 flex justify-center">
                    <Star size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Served For Brands Marquee */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <Reveal direction="up" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Served For Brands</h2>
              <BrandsMarquee />
            </Reveal>
          </div>
        </section>


      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Products</h2>
            <p className="text-xl text-muted-foreground">Our bestsellers & customer favorites</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Smart Locks', rating: 5, image: '/images/product-smart-lock.jpeg' },
              { name: 'Premium Plywood Products', rating: 5, image: '/images/product-thermo-sheet.jpg' },
              { name: 'Veneers', rating: 5, image: '/products/veneer/natural-veneer/2.png' },
            ].map((product, idx) => (
              <Reveal key={idx} direction={idx === 0 ? 'left' : idx === 2 ? 'right' : 'up'} delay={idx * 100}>
                <div className="bg-card rounded-lg shadow hover:shadow-lg transition overflow-hidden h-full">
                  <div className="bg-muted h-56 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted'}
                        />
                      ))}
                    </div>
                    <a className="w-full py-2 bg-primary text-primary-foreground rounded hover:bg-accent transition font-semibold block text-center cursor-pointer">
                      Enquire Now
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Strip */}
      <section className="py-16 bg-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal direction="up" className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-3">Our Product Showcase</h2>
            <p className="text-xl text-muted-foreground">From hardware to surfaces — everything for your dream interior</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: '/images/1.png', label: 'Plywood' },
              { img: '/images/2.png', label: 'Louvers' },
              { img: '/images/3.png', label: 'Laminates' },
              { img: '/images/4.png', label: 'Connect With Us' },
            ].map((item, idx) => (
              <Reveal key={idx} direction="zoom" delay={idx * 80}>
                <div className="relative overflow-hidden rounded-lg group cursor-pointer shadow">
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 bg-foreground/60 py-2 px-3">
                    <p className="text-white text-sm font-semibold text-center">{item.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Inspiration */}
      <section id="gallery" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Discover Our Showroom</h2>
            <p className="text-xl text-muted-foreground">Where Design Meets Premium Quality</p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: '', img: '/images/gallery-01.jpg' },
              { label: '', img: '/images/gallery-02.jpg' },
              { label: '', img: '/images/gallery-03.jpg' },
              { label: '', img: '/images/gallery-04.jpg' },
              { label: '', img: '/images/gallery-05.jpg' },
              { label: '', img: '/images/gallery-06.jpg' },
            ].map((project, idx) => (
              <Reveal key={idx} direction="zoom" delay={idx * 90}>
                <div className="relative group overflow-hidden rounded-lg h-64 cursor-pointer">
                  <img
                    src={project.img}
                    alt={project.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold text-center">{project.label}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Rajesh Verma', role: 'Homeowner', text: 'Excellent quality plywood and great customer service. Highly recommended!' },
              { name: 'Priya Sharma', role: 'Interior Designer', text: 'Best variety of laminates and veneers. Quick delivery and support.' },
              { name: 'Amit Singh', role: 'Contractor', text: 'Reliable source for all materials. Wholesale rates are very competitive.' },
            ].map((testimonial, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 130}>
                <div className="bg-card p-8 rounded-lg shadow hover:shadow-lg transition h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Store Location CTA */}
      <section className="py-20 bg-primary text-primary-foreground" id="contact">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Reveal direction="up">
            <h2 className="text-4xl font-bold mb-6">Visit Our Store</h2>
            <p className="text-xl mb-12">Experience our full product range in person</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Reveal direction="up" delay={0}>
              <div className="flex flex-col items-center">
                <MapPin size={48} className="mb-4" />
                <p className="text-lg"><strong>Address:</strong><br />{siteConfig.address.line1}, {siteConfig.address.line2}<br />{siteConfig.address.line3}, {siteConfig.address.city} - {siteConfig.address.pincode}</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={120}>
              <div className="flex flex-col items-center">
                <Phone size={48} className="mb-4" />
                <p className="text-lg"><strong>Call:</strong><br /> +91 9793638899, +91 9118881560,<br /> +91 9795530227(Director)</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={240}>
              <div className="flex flex-col items-center">
                <Clock size={48} className="mb-4" />
                <p className="text-lg"><strong>Hours:</strong><br />{siteConfig.hours.weekdays}</p>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={telHref} className="px-8 py-3 bg-primary-foreground text-primary rounded font-bold hover:opacity-90 transition flex items-center justify-center gap-2">
              <Phone size={20} />
              Call Now
            </a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-primary-foreground text-primary rounded font-bold hover:opacity-90 transition flex items-center justify-center gap-2">
              <WhatsAppIcon size={20} />
              WhatsApp
            </a>
            <a href={mapHref} target="_blank" rel="noopener noreferrer" className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded font-bold hover:bg-primary-foreground hover:text-primary transition flex items-center justify-center gap-2">
              <MapPin size={20} />
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Enquiry Form CTA */}
      <section className="py-20 bg-muted">
        <div className="max-w-2xl mx-auto px-4">
          <Reveal direction="zoom">
            <div className="bg-card rounded-lg shadow-lg p-10">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Quick Enquiry Form</h2>
              <QuickEnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />

      {/* Floating WhatsApp Button */}
      {/* <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center z-40"
      >
        <WhatsAppIcon size={28} />
      </a> */}
    </>
  )
}
