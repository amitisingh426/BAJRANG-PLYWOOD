'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Quote, Target, Eye, MapPin, ChevronRight, Building2, Handshake } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/scroll-animations'
import { siteConfig } from '@/lib/site-config'
import type { Metadata } from 'next'

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'story', label: 'Our Story' },
  { id: 'founder', label: "Founder's Desk" },
  { id: 'products', label: 'Products We Deal In' },
  { id: 'vision', label: 'Mission & Vision' },
  { id: 'partners', label: 'Trusted Partners' },
]

const productCategories = [
  {
    name: 'Plywood',
    description:
      'Commercial, BWR (boiling water resistant), BWP (boiling waterproof), marine, and fire-retardant grades; all ISI-marked and premium quality',
  },
  {
    name: 'Block Boards',
    description: 'Solid core and decorative block boards for doors, partitions, and furniture',
  },
  {
    name: 'Flush Doors',
    description:
      'Solid and hollow core, skin doors, and fire-rated flush doors for residential and commercial use',
  },
  {
    name: 'Decorative Laminates',
    description:
      '1,000+ design options from Greenlam, Merino, Century Laminates, Durian, and more — for all surfaces and applications',
  },
  {
    name: 'Veneers',
    description:
      'Natural and engineered wood veneers for premium surface finishes in furniture and interiors',
  },
  {
    name: 'Corian Sheets & Solid Surfaces',
    description: 'For kitchen countertops, platforms, vanity tops, and wall cladding',
  },
  {
    name: 'Charcoal Panels & Acoustic Panels',
    description: 'For designer feature walls, false ceilings, and modern interior accents',
  },
  {
    name: 'MDF & HDHMR Boards',
    description:
      'Moisture-resistant, high-density boards for modular furniture, kitchen cabinets, and wardrobes',
  },
  {
    name: 'PVC Panels & WPC Boards',
    description:
      'Fully waterproof, termite-proof wall and ceiling panels for bathrooms, kitchens, and wet areas',
  },
  {
    name: 'Hardware Fittings',
    description:
      'Hettich, Hafele, Blum, Godrej, Ebco: hinges, soft-close channels, handles, locks, and modular furniture fittings',
  },
  {
    name: 'Adhesives & Edge Banding',
    description: 'Fevicol, Pidilite, and premium PVC edge banding for professional furniture finishing',
  },
  {
    name: 'Decorative Interior Accessories',
    description: 'Profiles, beadings, glass inserts, and surface accessories for complete interior projects',
  },
]

export default function AboutPage() {
  const [activeId, setActiveId] = useState(tabs[0].id)
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})
  const tabsRef = useRef<HTMLDivElement | null>(null)
  const isClickScrolling = useRef(false)

  // Scroll-sync: highlight the tab for the section currently in view.
  // Uses a fixed trigger line rather than a thin IntersectionObserver band,
  // which reliably handles tall sections and the final section at page bottom.
  useEffect(() => {
    const onScroll = () => {
      if (isClickScrolling.current) return

      // If we've reached (near) the bottom of the page, force the last tab —
      // the final section's top may never cross the trigger line otherwise.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        setActiveId(tabs[tabs.length - 1].id)
        return
      }

      const triggerLine = 160 // px from the top of the viewport
      let current = tabs[0].id
      for (const t of tabs) {
        const el = sectionRefs.current[t.id]
        if (!el) continue
        if (el.getBoundingClientRect().top - triggerLine <= 0) {
          current = t.id
        }
      }
      setActiveId(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
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
      const offset = 136
      const y = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    window.setTimeout(() => {
      isClickScrolling.current = false
    }, 1000)
  }

  return (
    <>
      <SiteHeader />

      {/* Hero with background image */}
      <section className="relative mt-20 h-[340px] md:h-[420px] flex items-center overflow-hidden">
        <img
          src="/about/background.jpg"
          alt="Bajrang Plywood showroom interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <p className="text-primary-foreground/70 text-sm tracking-widest uppercase mb-3">
            <Link href="/" className="hover:text-primary-foreground transition">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">About Us</span>
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground text-balance">About Us</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mt-4 max-w-3xl leading-relaxed">
            North India&apos;s trusted plywood, hardware &amp; interior material supplier — proudly serving architects, interior designers, contractors, builders &amp; homeowners across Lucknow and Uttar Pradesh since 2013.
          </p>
        </div>
      </section>

      {/* Sticky Tab Navigation */}
      <div className="sticky top-20 z-40 bg-card/95 backdrop-blur border-b border-border shadow-sm">
        <div
          ref={tabsRef}
          className="max-w-7xl mx-auto px-4 flex gap-2 overflow-x-auto scrollbar-hide py-3"
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              data-tab={t.id}
              onClick={() => scrollToSection(t.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition cursor-pointer ${
                activeId === t.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-primary/10'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <main className="bg-background">
        {/* Overview */}
        <section
          id="overview"
          ref={(el) => {
            sectionRefs.current['overview'] = el
          }}
          className="scroll-mt-40 py-16 md:py-20"
        >
          <Reveal direction="up" delay={0}>
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
              <div>
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">
                Bajrang Plywood
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                More Than Just Materials — We Are Your Complete Design Partner in Lucknow
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Bajrang Plywood is one of the leading <b>plywood dealers, hardware suppliers, and decorative interior material distributors in Lucknow</b>, Uttar Pradesh — proudly serving customers <b>since 2013</b>. Located at 586, Bara Birwa, Kanpur Road, Lucknow (near Hotel Piccadily), our showroom is a complete destination for premium Plywood, Laminates, Veneers, Flush Doors, Block Boards, MDF boards, Charcoal Panels, PVC Panels, Hardware fittings, Locks, Acrylic Sheet, Doors, Adhesives, and Decorative Interior Accessories.
                </p>
                <p>
                  We are authorised stockists and dealers for <b>Century Ply, Greenply, Greenlam, Kitply, Merino, Hettich, Godrej, Blum, Ebco, Fevicol</b>, and 50+ nationally respected brands. Today, Bajrang Plywood supplies products across <b>Uttar Pradesh, Uttarakhand</b>, and major cities along the Nepal border region, while also catering to customers in various parts of India through a strong distribution network. Whether you are an interior designer, architect, furniture manufacturer, contractor, carpenter, builder, or a homeowner planning a new kitchen, wardrobe, or office fit-out — Bajrang Plywood has everything you need, in one place.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/about/bajrang-plywood-signage.png"
                alt="Bajrang Plywood showroom signage — More Than Just Plywood, Lucknow"
                className="rounded-lg shadow-lg w-full h-64 object-cover col-span-2"
              />
              <img
                src="/about/showroom-4.jpg"
                alt="Bajrang Plywood laminate and hardware showcase"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img
                src="/about/showroom-2.jpg"
                alt="Bajrang Plywood flush door collection"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Key Stats Row */}
        <section className="pb-4 md:pb-8">
          <div className="max-w-7xl mx-auto px-4">
            <Reveal direction="up" delay={0}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { value: '2013', label: 'Serving Since' },
                  { value: '13+', label: 'Years Experience' },
                  { value: '1,650+', label: 'Product Variants' },
                  { value: '41+', label: 'Brand Dealer / Distributor' },
                  { value: '40,000+', label: 'Clients Served' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-muted rounded-lg p-6 text-center border border-border"
                  >
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <p className="text-sm text-muted-foreground mt-2 text-balance">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Our Story */}
        <section
          id="story"
          ref={(el) => {
            sectionRefs.current['story'] = el
          }}
          className="scroll-mt-40 py-16 md:py-20 bg-muted"
        >
          <Reveal direction="up" delay={0}>
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
              <img
                src="/about/showroom-5.jpeg"
                alt="Bajrang Plywood interior decor display"
                className="rounded-lg shadow-lg w-full h-[420px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Built On A Vision Of Quality, Trust &amp; Innovation
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Bajrang Plywood was founded by <strong className="text-foreground">Mr. Anmol Agarwal</strong> with a clear vision — to build a reliable, single-destination showroom in Lucknow where customers could find everything needed for premium interior design and construction: from structural plywood and block boards to decorative laminates, veneers, hardware fittings, adhesives, and much more.
                </p>
                <p>
                  After completing his schooling from City Montessori School (CMS), Lucknow, and earning his Engineering degree from Babu Banarasi Das National Institute of Technology and Management, Lucknow, Mr. Anmol entered the plywood and interior materials industry in Uttar Pradesh with a commitment to raising the standards of quality, transparency, and customer service available to the region&apos;s builders, designers, and homeowners.
                </p>
                <p>
                  What began as an independent venture in 2013 has grown into a trusted partner for homeowners, architects, interior designers, contractors, builders, furniture manufacturers, carpenters, and commercial establishments across <b>Lucknow, Kanpur, Varanasi, Prayagraj, Gorakhpur, Sitapur, Hardoi</b>, and beyond. Over more than a decade, Bajrang Plywood has earned the confidence of <b>40,000+ clients</b> by consistently delivering products that combine durability, performance, and value — for modular kitchens, wardrobes, living rooms, office interiors, retail spaces, hotels, and large-scale construction projects across North India.
                </p>
              </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Founder's Desk */}
        <section
          id="founder"
          ref={(el) => {
            sectionRefs.current['founder'] = el
          }}
          className="scroll-mt-40 py-16 md:py-20"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">From The Founder&apos;s Desk</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">A Message From Our Director</h2>
            </div>

            <div className="grid lg:grid-cols-[340px_1fr] gap-12 items-start">
              <div className="text-center">
                <div className="rounded-xl overflow-hidden shadow-lg border-4 border-primary/20">
                  <img
                    src="/about/founder.jpg"
                    alt="Mr. Anmol Agarwal, Director of Bajrang Plywood"
                    className="w-full h-[380px] object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mt-6">Mr. Anmol Agarwal</h3>
                <p className="text-primary font-medium">Director, Bajrang Plywood</p>
              </div>

              <div className="bg-muted rounded-xl p-8 md:p-10 relative">
                <Quote className="text-primary/30 absolute top-6 right-6" size={56} />
                <p className="text-lg font-semibold text-foreground mb-4">Welcome to Bajrang Plywood, Lucknow!</p>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Since 2013, Bajrang Plywood has been devoted to supplying high-quality plywood, hardware fittings, and decorative interior accessories to customers across Lucknow, Uttar Pradesh, and North India. Our commitment to ethics, craftsmanship, and continuous innovation guarantees that every product we supply meets the highest standards — so your projects are built to last and look exceptional.
                  </p>
                  <p>
                    We remain at the forefront of the plywood and interior materials industry in Uttar Pradesh by continuously investing in our design solutions, our people, and our relationships with India&apos;s leading brands. Transforming spaces is not a goal at Bajrang Plywood — it is our foundation. Our mission is to give every client — whether a first-time homeowner or a seasoned architect — access to reliable, expertly tailored design.
                  </p>
                  <p>
                    We believe in blending traditional values with modern thinking, adapting quickly to the evolving needs of our customers — whether that means helping source the perfect modular kitchen materials in Lucknow, tracking down a specific Hettich hardware fitting, or advising on the right waterproof plywood grade for a large commercial project.
                  </p>
                  <p>
                    Beyond our business, I am deeply committed to nurturing the next generation of design talent in Lucknow. I actively share industry expertise through guest lectures at Government College of Architecture (GCA), Lucknow, and Babu Banarasi Das University (BBDU), Lucknow — bridging the gap between architectural education and real-world material knowledge, and giving future designers a stronger foundation.
                  </p>
                  <p>
                    Thank you for considering Bajrang Plywood. We are proud to be part of thousands of homes, offices, and design projects across Uttar Pradesh — and we look forward to being part of yours.
                  </p>
                </div>
                <p className="mt-6 text-foreground font-semibold">Warm Regards,</p>
                <p className="text-primary font-bold">Mr. Anmol Agarwal</p>
                <p className="text-sm text-muted-foreground">Director, Bajrang Plywood</p>
                <p className="text-sm text-muted-foreground">Near Hotel Piccadily, Kanpur Road, Lucknow, Uttar Pradesh &ndash; 226012</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products We Deal In */}
        <section
          id="products"
          ref={(el) => {
            sectionRefs.current['products'] = el
          }}
          className="scroll-mt-40 py-16 md:py-20 bg-muted"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Products We Deal In</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                A Complete Range of Interior Materials &amp; Solutions in Lucknow
              </h2>
              <div className="text-muted-foreground max-w-4xl mx-auto leading-relaxed space-y-4">
                <p>
                  Bajrang Plywood is one of the most comprehensive interior material showrooms in Lucknow, stocking the most prominent, refined, and innovative products across all categories of interior construction and decoration. As authorised dealers and distributors of 50+ leading brands — including Century Ply, Kitply, Greenlam, Merino, Durian, Action TESA, Hettich, Hafele, Godrej, Blum, Ebco, Greenply / Sainik, Ozone, Hindware Appliances, Europa, Doorset, Yale, Godrej, IPSA, Enarc, Jolly and Fevicol — every product at Bajrang Plywood meets strict quality benchmarks and is backed by genuine manufacturer warranty.
                </p>
                <p>
                  We supply products to homeowners, interior designers, architects, carpenters, contractors, builders, and furniture manufacturers in Lucknow, Kanpur, Sitapur, Hardoi, Unnao, Rae Bareli, Lakhimpur Kheri, Barabanki, Uttarakhand, and surrounding regions of North India.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {productCategories.map((cat) => (
                <div
                  key={cat.name}
                  className="bg-card rounded-lg p-6 shadow-sm border border-border hover:border-primary hover:shadow-md transition"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <ChevronRight className="text-primary flex-shrink-0" size={18} />
                    <h3 className="text-foreground font-bold text-base">{cat.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">{cat.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded font-bold hover:bg-accent transition"
              >
                Explore Full Catalogue
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section
          id="vision"
          ref={(el) => {
            sectionRefs.current['vision'] = el
          }}
          className="scroll-mt-40 py-16 md:py-20"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">What Drives Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Our Mission &amp; Vision</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-8 shadow border border-border">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Target className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver premium, durable, and architecturally superior interior materials — including plywood, laminates, hardware, veneers, and decorative solutions — while providing expert consultation that empowers architects, interior designers, and homeowners across Uttar Pradesh to bring their most ambitious projects to life. Our commitment is to ensure structural longevity and aesthetic excellence for every space in Lucknow and North India.
                </p>
              </div>
              <div className="bg-card rounded-xl p-8 shadow border border-border">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Eye className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted plywood dealer, laminates supplier, hardware distributor, and interior design material partner in Lucknow and Uttar Pradesh — transforming the interior industry through continuous innovation, genuine brand partnerships, and an uncompromising focus on creating functional, beautiful, long-lasting living and commercial environments.
                </p>
              </div>
            </div>

            {/* Tagline banner */}
            <div className="mt-12 bg-primary text-primary-foreground rounded-xl p-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-balance">
                Build Stronger. Design Better. Create Timeless Spaces — With Bajrang Plywood.
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-5 text-primary-foreground/80">
                <MapPin size={18} />
                <span>{siteConfig.address.full}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Partners — Godrej & Adani */}
        <section
          id="partners"
          ref={(el) => {
            sectionRefs.current['partners'] = el
          }}
          className="scroll-mt-40 py-16 md:py-20 bg-muted"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">Trusted Material Partner</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Supplying India&apos;s Most Respected Brands &amp; Projects
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
                Over the years, Bajrang Plywood has earned the trust of leading corporate groups and developers — supplying premium plywood, laminates, and hardware for their high-profile projects across Lucknow and Uttar Pradesh.
              </p>
            </div>

            {/* Godrej */}
            <Reveal direction="up" delay={0}>
              <div className="grid lg:grid-cols-2 gap-10 items-center bg-card rounded-2xl p-6 md:p-10 shadow border border-border">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold rounded-full px-4 py-1.5 text-sm mb-4">
                    <Building2 size={16} />
                    Godrej Trusted Partner
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                    Trusted Material Partner for Godrej Projects in Lucknow
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      At Bajrang Plywood, excellence is the benchmark of our service. We take pride in our long-standing professional association with <b>Godrej</b> — one of India&apos;s most recognised and respected brands — having served as a preferred interior material supplier for multiple high-profile Godrej projects in Lucknow, Uttar Pradesh.
                    </p>
                    <p>
                      Our commitment to delivering premium structural plywood, quality laminates, and precision hardware fittings has made Bajrang Plywood a trusted choice for large-scale, high-standard residential and commercial developments that demand nothing less than the best.
                    </p>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <img
                    src="/about/godrej-partner.png"
                    alt="Godrej — Bajrang Plywood is a trusted material supplier for Godrej projects in Lucknow"
                    className="rounded-xl shadow-lg w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
            </Reveal>

            {/* Adani */}
            <Reveal direction="up" delay={0}>
              <div className="grid lg:grid-cols-2 gap-10 items-center bg-card rounded-2xl p-6 md:p-10 shadow border border-border mt-8">
                <div>
                  <img
                    src="/about/adani-partner.png"
                    alt="Adani Group Global Headquarters — Bajrang Plywood is an approved plywood and hardware supplier for Adani Group infrastructure projects"
                    className="rounded-xl shadow-lg w-full h-64 md:h-80 object-cover"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold rounded-full px-4 py-1.5 text-sm mb-4">
                    <Handshake size={16} />
                    Adani Group Approved Supplier
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                    Approved Supplier for Adani Group — Infrastructure &amp; Development Projects
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Bajrang Plywood is proud to be a trusted material supplier to contractors and developers working with <b>Adani Group – Infrastructure &amp; Development</b>. We supply premium plywood, laminates, block boards, and precision hardware fittings for their large-scale infrastructure and development projects, meeting the demanding quality, durability, and timeline standards of one of India&apos;s largest business conglomerates.
                    </p>
                    <p>
                      From <b>fire-retardant and boiling-waterproof (BWP) plywood</b> to certified hardware and decorative surfaces, our products are chosen for projects where structural integrity and finish quality cannot be compromised. This partnership reflects our reputation as a reliable, project-grade interior material supplier for contractors across Lucknow, Uttar Pradesh, and North India.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

