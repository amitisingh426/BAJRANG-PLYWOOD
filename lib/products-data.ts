export interface Product {
  /** Short display name shown as the card heading */
  name: string
  /** Full SEO-optimized title from the content sheet */
  title: string
  /** Where / how the product is used */
  usage: string
  /** Full marketing description */
  description: string
  /**
   * Primary product image. Leave undefined until a real image is supplied —
   * the card falls back to a labelled placeholder automatically.
   * Convention when images arrive: /products/<categoryId>/<slug>.png
   */
  image?: string
  /**
   * Multiple product images. When two or more are present the card renders
   * an image carousel. Convention: /products/<categoryId>/<slug>/<n>.<ext>
   */
  images?: string[]
}

export interface ProductCategory {
  /** Stable id used for the sticky tab + scroll anchor */
  id: string
  /** Short label shown in the tab bar */
  label: string
  /** Category heading from the content sheet */
  title: string
  products: Product[]
}

export const productCategories: ProductCategory[] = [
  {
    id: 'plywood',
    label: 'Plywood',
    title: 'Plywood Materials',
    products: [
      {
        name: 'Century Ply',
        title:
          'Century Plywood in Lucknow, UP & Nepal Border | BWP/BWR Grade Waterproof Plywood',
        usage:
          'Ideal for kitchen cabinets, wardrobes, doors, and modular furniture that need long-term moisture and termite resistance. Suitable for both residential and commercial interiors across Uttar Pradesh.',
        description:
          'Bajrang Plywood brings genuine Century Plywood to Lucknow, Uttar Pradesh, and the Nepal border region — a trusted name for BWP/BWR grade boiling-waterproof plywood. Built with cross-laminated veneers and strong bonding, it resists warping, borer attack, and moisture damage even in humid climates. Perfect for kitchens, bathrooms, and heavy-use furniture. Available in multiple thicknesses (6mm–19mm) for carpenters, contractors, and homeowners seeking durable, ISI-marked plywood at competitive prices.',
        images: ['/products/plywood/century-ply/1.png', '/products/plywood/century-ply/2.png'],
      },
      {
        name: 'Greenply',
        title:
          'Greenply Plywood Supplier in Lucknow & UP | Termite-Proof & Waterproof Sheets',
        usage:
          'Best suited for wardrobes, kitchen units, false ceilings, and structural furniture requiring high strength and anti-termite protection. Widely used by interior designers and carpenters in UP and Nepal border towns.',
        description:
          'As an authorized Greenply dealer, Bajrang Plywood supplies premium waterproof and termite-resistant plywood across Lucknow, Uttar Pradesh, and Nepal border markets. Greenply sheets are manufactured with hot-press technology and phenolic resin bonding, offering superior strength, screw-holding capacity, and moisture resistance. A preferred choice for modular kitchens, wardrobes, and long-lasting furniture, backed by trusted warranty and consistent quality standards.',
        images: ['/products/plywood/greenply/1.jpg'],
      },
      {
        name: 'Wigwam Ply',
        title: 'Wigwam Plywood Dealer in Lucknow | Premium Marine & Commercial Plywood',
        usage:
          'Recommended for interior furniture, cabinetry, wall paneling, and commercial fit-outs where a smooth, void-free core is essential. Popular among carpenters serving UP and neighbouring Nepal markets.',
        description:
          'Bajrang Plywood stocks Wigwam plywood for customers across Lucknow, Uttar Pradesh, and the Nepal border belt, known for its dense, void-free core and consistent panel strength. Engineered for durability and a smooth finish, Wigwam ply is easy to polish, laminate, or veneer, making it a versatile choice for furniture makers and interior contractors. Offered in various sizes and thicknesses to match residential and commercial project needs.',
        images: ['/products/plywood/wigwam-ply/1.png', '/products/plywood/wigwam-ply/2.png'],
      },
      {
        name: 'Calibrated Ply',
        title:
          'Calibrated Plywood Supplier in Lucknow & UP | Precision-Thickness Ply Sheets',
        usage:
          'Used where uniform thickness and a perfectly flat surface are critical, such as laminate-ready furniture panels, cabinet shutters, and veneered doors. Trusted by carpenters and modular furniture units across Uttar Pradesh.',
        description:
          'Bajrang Plywood offers precision calibrated plywood to carpenters and interior contractors in Lucknow, Uttar Pradesh, and Nepal border regions. Each sheet is machine-sanded to an exact, uniform thickness, ensuring a smooth, flat surface that bonds perfectly with laminates, veneers, and acrylics. This makes it the preferred base material for modular furniture, wardrobe shutters, and premium interior work where finish quality cannot be compromised.',
        images: ['/products/plywood/calibrated-ply/1.png', '/products/plywood/calibrated-ply/2.jpg'],
      },
    ],
  },
  {
    id: 'laminates',
    label: 'Laminates',
    title: 'Laminates',
    products: [
      {
        name: 'Handcrafted Laminates',
        title:
          'Handcrafted Laminates in Lucknow | Artisan-Textured Decorative Laminate Sheets',
        usage:
          'Used for feature walls, wardrobe shutters, cabinet fronts, and office interiors where a rich, artisanal texture adds a premium visual character.',
        description:
          'Bajrang Plywood offers handcrafted laminate sheets to designers and homeowners across Lucknow, Uttar Pradesh, and the Nepal border area. These laminates replicate hand-finished textures — from woven patterns to artisan strokes — giving furniture and walls a unique, boutique-style appeal. Scratch-resistant and easy to maintain, they are ideal for modern homes, hotels, and offices wanting a distinctive decorative statement.',
      },
      {
        name: 'Digital Laminates',
        title:
          'Digital Printed Laminates in Lucknow | High-Definition Decorative Laminate Sheets',
        usage:
          'Perfect for wardrobes, TV units, kitchen shutters, and wall panels needing vivid, high-resolution wood, stone, or abstract designs.',
        description:
          'Bajrang Plywood supplies digitally printed laminates across Lucknow, UP, and Nepal border markets, offering sharp, high-definition prints of wood grains, marble, and modern patterns at an affordable price. Manufactured with advanced digital printing technology, these laminates deliver consistent color accuracy and design repeatability across sheets. A cost-effective alternative to natural veneers, they suit modular kitchens, wardrobes, and commercial interiors alike.',
      },
      {
        name: 'Synchro Laminates',
        title: 'Synchro Pore Laminates in Lucknow | Textured Wood-Grain Laminate Sheets',
        usage:
          'Suited for wardrobes, doors, and furniture where the surface texture must match the printed wood grain for a natural, tactile wood-like feel.',
        description:
          'Available at Bajrang Plywood in Lucknow, Uttar Pradesh, and the Nepal border region, Synchro laminates use synchronized embossing technology so the surface texture aligns precisely with the printed grain pattern. This creates an authentic, natural-wood touch and look, elevating furniture and paneling with a premium tactile finish. Durable, scratch-resistant, and low-maintenance, they are widely chosen for high-end residential and commercial interiors.',
      },
      {
        name: 'Solid Color Laminates',
        title: 'Solid Color Laminates in Lucknow | Plain High-Gloss & Matte Laminate Sheets',
        usage:
          'Ideal for modular kitchens, wardrobes, office furniture, and minimalist interiors that require clean, uniform color tones without patterns.',
        description:
          'Bajrang Plywood stocks a wide palette of solid color laminates for customers across Lucknow, Uttar Pradesh, and Nepal border towns, available in glossy, matte, and suede finishes. These laminates offer a sleek, contemporary look that pairs well with modern and minimalist interior themes. Resistant to stains, scratches, and daily wear, they are a popular choice for kitchens, wardrobes, and commercial furniture requiring a clean, uniform finish.',
      },
      {
        name: 'Textures Laminates',
        title: 'Textured Laminates in Lucknow | 3D Surface Finish Decorative Sheets',
        usage:
          'Best for feature walls, wardrobe shutters, and furniture fronts where a tactile, three-dimensional surface enhances the overall design appeal.',
        description:
          'Bajrang Plywood offers textured laminates to interior designers and homeowners across Lucknow, UP, and the Nepal border belt, featuring embossed 3D surfaces like linen, leather-look, and stone patterns. These laminates add depth and a premium tactile experience to furniture and walls, standing out from flat, plain surfaces. Durable and easy to clean, they suit both residential accent pieces and commercial interior projects.',
      },
      {
        name: 'Thermo / ASA Sheets',
        title: 'Thermo & ASA Sheets in Lucknow | Weather-Resistant Outdoor Laminate Panels',
        usage:
          'Designed for kitchen shutters, wardrobe doors, and exterior-facing furniture panels that need resistance to heat, UV rays, moisture, and daily impact.',
        description:
          'Bajrang Plywood supplies Thermo and ASA laminate sheets across Lucknow, Uttar Pradesh, and Nepal border markets, known for their high UV and weather resistance. Manufactured with acrylonitrile styrene acrylate (ASA) technology, these sheets resist fading, cracking, and moisture even in extreme conditions, making them suitable for both interior shutters and semi-outdoor applications. A durable, low-maintenance option for modern modular kitchens and furniture.',
      },
      {
        name: 'Bendable Sheets',
        title: 'Bendable Laminate Sheets in Lucknow | Flexible Curved-Surface Laminates',
        usage:
          'Used for curved furniture edges, columns, cabinet corners, and decorative curved wall panels where standard flat laminates cannot be applied.',
        description:
          'Bajrang Plywood provides flexible bendable laminate sheets to carpenters and designers in Lucknow, Uttar Pradesh, and the Nepal border region. Engineered to wrap smoothly around curves and rounded surfaces without cracking, these sheets open up creative design possibilities for modern furniture, reception counters, and architectural features. Combining flexibility with a durable decorative finish, they are ideal for projects demanding curved, seamless surfaces.',
      },
      {
        name: 'Metallic Sheets',
        title: 'Metallic Laminate Sheets in Lucknow | Glossy Metallic Finish Decorative Panels',
        usage:
          'Suited for feature walls, cabinet fronts, wardrobe shutters, and commercial interiors that need a bold, reflective, luxury metallic appearance.',
        description:
          'Bajrang Plywood offers metallic laminate sheets to clients across Lucknow, UP, and Nepal border cities, available in gold, silver, copper, and gunmetal finishes. These sheets bring a high-shine, luxurious metallic effect to furniture, wall panels, and commercial spaces such as hotels and showrooms. Durable and fingerprint-resistant, they make a striking design statement for accent walls and premium furniture fronts.',
      },
      {
        name: 'MDF Louvers',
        title: 'MDF Louvers in Lucknow | Decorative Fluted Panel Louvers for Walls & Furniture',
        usage:
          'Commonly used for TV unit backdrops, wardrobe shutters, partition walls, and false ceilings that need a linear, fluted design element.',
        description:
          'Bajrang Plywood supplies MDF louver panels to interior designers and homeowners in Lucknow, Uttar Pradesh, and the Nepal border belt. These fluted panels add a trending, linear texture to walls, wardrobes, and partitions, instantly upgrading the look of modern interiors. Lightweight, easy to install, and available in multiple finishes, MDF louvers are a popular choice for contemporary homes, offices, and retail interiors.',
      },
      {
        name: 'Designer Laminates',
        title: 'Designer Laminates in Lucknow | Premium Pattern & Print Laminate Collection',
        usage:
          'Ideal for statement furniture pieces, wardrobe shutters, kitchen panels, and feature walls that need a distinctive, high-end decorative pattern.',
        description:
          'Bajrang Plywood presents an exclusive range of designer laminates for customers across Lucknow, Uttar Pradesh, and Nepal border markets, featuring curated patterns, artistic prints, and premium textures. These laminates are chosen by architects and interior designers to create standout furniture and wall features in homes, offices, and hospitality projects. Durable, easy to maintain, and visually striking, they elevate any interior with a designer touch.',
      },
      {
        name: 'Premium Laminates',
        title: 'Premium Laminates in Lucknow | High-Durability Decorative Laminate Sheets',
        usage:
          'Suitable for high-traffic furniture such as kitchen shutters, wardrobes, office desks, and commercial counters that demand extra durability along with aesthetics.',
        description:
          'Bajrang Plywood offers premium-grade laminate sheets to residential and commercial clients across Lucknow, UP, and the Nepal border region. Built with high-density core layers and superior surface coating, these laminates provide enhanced resistance to scratches, heat, and daily wear compared to standard laminates. A trusted option for modular kitchens, office furniture, and commercial spaces looking for long-lasting performance combined with a rich finish.',
      },
      {
        name: 'Bed Back Fabric Sheets',
        title:
          'Bed Back Fabric Sheets in Lucknow | Upholstered Fabric-Finish Panels for Headboards',
        usage:
          'Specially designed for bed backs, sofa backdrops, and headboard panels that require a soft, fabric-textured decorative surface.',
        description:
          'Bajrang Plywood supplies fabric-finish bed back sheets to furniture makers and homeowners in Lucknow, Uttar Pradesh, and Nepal border towns. These panels replicate the look and feel of upholstered fabric without the maintenance hassle of real cloth, making them perfect for bedroom headboards and soft interior accents. Easy to clean, durable, and available in multiple textures and colors, they add a cozy, elegant touch to bedroom interiors.',
      },
    ],
  },
  {
    id: 'acrylic-laminates',
    label: 'Acrylic Laminates',
    title: 'Acrylic Laminates',
    products: [
      {
        name: 'Acrylic Laminates',
        title: 'Acrylic Laminate Sheets in Lucknow | High-Gloss Mirror Finish Panels',
        usage:
          'Popular for modular kitchen shutters, wardrobe doors, and living room units where an ultra-glossy, mirror-like finish is desired.',
        description:
          'Bajrang Plywood provides premium acrylic laminate sheets to clients across Lucknow, Uttar Pradesh, and the Nepal border region, known for their deep, mirror-like gloss and vibrant colors. These sheets resist yellowing and scratches better than standard glossy laminates, giving furniture a long-lasting, high-end shine. A top choice for modern modular kitchens, wardrobes, and living spaces wanting a bold, reflective, contemporary look.',
        images: [
          '/products/acrylic-laminates/acrylic-laminates/1.jpeg',
          '/products/acrylic-laminates/acrylic-laminates/2.jpeg',
          '/products/acrylic-laminates/acrylic-laminates/3.jpeg',
        ],
      },
    ],
  },
  {
    id: 'leather-panels',
    label: 'Leather Panels',
    title: 'Leather Panels & Louvers',
    products: [
      {
        name: 'Leather Wardrobe Shutters',
        title: 'Leather Wardrobe Shutters in Lucknow | Upholstered Leather-Finish Cabinet Doors',
        usage:
          'Designed for wardrobe shutters, cabinet doors, and bedroom furniture fronts that need a soft-touch, luxurious leather-like surface.',
        description:
          'Bajrang Plywood offers leather-finish wardrobe shutters to interior designers and homeowners across Lucknow, Uttar Pradesh, and Nepal border cities. These shutters combine the elegance of upholstered leather with the strength of engineered panels, giving wardrobes and cabinets a warm, premium appeal. Available in multiple colors and textures, they are ideal for bedrooms and dressing areas seeking a sophisticated, boutique-style finish.',
        images: [
          '/products/leather-panels/leather-wardrobe-shutters/1.jpeg',
          '/products/leather-panels/leather-wardrobe-shutters/2.png',
          '/products/leather-panels/leather-wardrobe-shutters/3.png',
        ],
      },
      {
        name: 'Leather Panels',
        title: 'Leather Wall Panels in Lucknow | Upholstered Decorative Wall Cladding',
        usage:
          'Best suited for bedroom feature walls, office reception areas, and headboard backdrops that require a soft, textured leather-look surface.',
        description:
          'Bajrang Plywood supplies decorative leather panels to designers and homeowners in Lucknow, Uttar Pradesh, and the Nepal border belt. These panels bring a warm, upholstered leather texture to walls and furniture without the upkeep of genuine leather, making them practical for both homes and commercial spaces. Durable, soft to the touch, and available in various colors, they are a popular choice for accent walls and premium interior detailing.',
        images: ['/products/leather-panels/leather-panels/1.jpeg'],
      },
      {
        name: 'Bendable Leather Sheets',
        title: 'Bendable Leather Sheets in Lucknow | Flexible Leather-Finish Panels for Curves',
        usage:
          'Used for curved wardrobe edges, rounded furniture corners, and decorative curved wall features where flat leather panels cannot be applied.',
        description:
          'Bajrang Plywood provides flexible, bendable leather-finish sheets to carpenters and designers across Lucknow, Uttar Pradesh, and Nepal border markets. These sheets can be wrapped around curves and rounded surfaces while retaining their soft leather texture and rich color, enabling creative curved furniture and wall designs. A practical choice for modern interiors that combine the luxury look of leather with design flexibility.',
        images: [
          '/products/leather-panels/bendable-leather-sheets/1.jpeg',
          '/products/leather-panels/bendable-leather-sheets/2.png',
          '/products/leather-panels/bendable-leather-sheets/3.png',
        ],
      },
      {
        name: 'Leather Louvers',
        title: 'Leather Louvers in Lucknow | Fluted Leather-Finish Panels for Walls & Furniture',
        usage:
          'Commonly used for TV unit backdrops, partition walls, and wardrobe shutters that need a linear fluted design with a soft leather texture.',
        description:
          'Bajrang Plywood offers leather-finish louver panels to interior designers and homeowners in Lucknow, Uttar Pradesh, and the Nepal border region. Combining the trending fluted, linear pattern with a warm leather-like surface, these louvers add a rich, tactile dimension to walls, wardrobes, and partitions. Lightweight and easy to install, they are ideal for creating a luxurious focal point in modern homes and offices.',
        images: [
          '/products/leather-panels/leather-louvers/1.png',
          '/products/leather-panels/leather-louvers/2.png',
          '/products/leather-panels/leather-louvers/3.png',
          '/products/leather-panels/leather-louvers/4.png',
          '/products/leather-panels/leather-louvers/5.png',
        ],
      },
    ],
  },
  {
    id: 'kitchen-hardware',
    label: 'Kitchen Hardware',
    title: 'Kitchen Hardwares',
    products: [
      {
        name: 'Telescopic Channels',
        title: 'Telescopic Channels in Lucknow | Heavy-Duty Drawer Sliding Channels',
        usage:
          'Used in kitchen drawers, wardrobe drawers, and cabinet units requiring smooth, silent, and heavy-load sliding movement.',
        description:
          'Bajrang Plywood supplies telescopic drawer channels to modular kitchen and furniture makers across Lucknow, Uttar Pradesh, and the Nepal border region. Built with ball-bearing or roller mechanisms, these channels ensure smooth, noiseless, and full-extension drawer movement even under heavy load. Rust-resistant and long-lasting, they are a dependable hardware choice for modular kitchens, wardrobes, and office furniture.',
        images: [
          '/products/kitchen-hardware/telescopic-channels/1.png',
          '/products/kitchen-hardware/telescopic-channels/2.png',
        ],
      },
      {
        name: 'Auto Hinges',
        title: 'Auto Hinges in Lucknow | Soft-Close Cabinet & Cupboard Door Hinges',
        usage:
          'Essential for kitchen cabinet doors, wardrobe shutters, and cupboard doors that need a smooth, self-closing, soundless mechanism.',
        description:
          'Bajrang Plywood offers premium auto (soft-close) hinges to carpenters and homeowners across Lucknow, Uttar Pradesh, and Nepal border markets. These hinges close cabinet and cupboard doors gently and silently, preventing slamming, damage, and noise. Corrosion-resistant and built for long-term daily use, auto hinges are a must-have upgrade for modern modular kitchens and wardrobe furniture.',
        images: [
          '/products/kitchen-hardware/auto-hinges/1.png',
          '/products/kitchen-hardware/auto-hinges/2.png',
        ],
      },
      {
        name: 'Tandem Boxes',
        title: 'Tandem Box Drawer System in Lucknow | Premium Full-Extension Kitchen Drawers',
        usage:
          'Used for modular kitchen drawers and wardrobe storage where maximum load capacity, smooth glide, and a premium organized look are required.',
        description:
          'Bajrang Plywood provides tandem box drawer systems to modular kitchen dealers and homeowners in Lucknow, Uttar Pradesh, and the Nepal border belt. These German-engineered style drawer systems offer full extension, soft-close action, and high load-bearing capacity, giving kitchens a clean, premium, and highly functional storage solution. A preferred hardware choice for modern modular kitchens and high-end wardrobe interiors.',
        images: [
          '/products/kitchen-hardware/tandem-boxes/1.png',
          '/products/kitchen-hardware/tandem-boxes/2.png',
        ],
      },
      {
        name: 'Quadro Channels',
        title: 'Quadro Channels in Lucknow | Concealed Undermount Drawer Slides',
        usage:
          'Ideal for kitchen and wardrobe drawers that need a hidden, undermount sliding mechanism for a sleek, clutter-free drawer front appearance.',
        description:
          'Bajrang Plywood supplies Quadro undermount channels to modular furniture makers across Lucknow, Uttar Pradesh, and Nepal border cities. These concealed channels sit beneath the drawer, offering smooth, soft-close movement while keeping the drawer sides clean and visually seamless. A popular choice for premium modular kitchens and wardrobes that prioritize both function and a minimalist look.',
        images: [
          '/products/kitchen-hardware/quadro-channels/1.png',
          '/products/kitchen-hardware/quadro-channels/2.png',
        ],
      },
      {
        name: 'Lift Up System',
        title: 'Lift-Up System in Lucknow | Gas Hydraulic Cabinet Lift Hardware',
        usage:
          'Used for overhead kitchen cabinets and wall units where doors need to lift upward smoothly instead of opening outward, saving space.',
        description:
          'Bajrang Plywood offers gas hydraulic lift-up systems to modular kitchen installers across Lucknow, Uttar Pradesh, and the Nepal border region. These fittings allow cabinet doors to open upward with light, smooth, and controlled motion, staying safely in place when open. Ideal for overhead kitchen units and space-saving storage, lift-up systems combine convenience with a modern, streamlined kitchen appearance.',
        images: [
          '/products/kitchen-hardware/lift-up-system/1.png',
          '/products/kitchen-hardware/lift-up-system/2.png',
        ],
      },
      {
        name: 'Kitchen Shutter',
        title: 'Kitchen Shutters in Lucknow | Ready-Made Modular Cabinet Door Panels',
        usage:
          'Used as ready cabinet door fronts for modular kitchens, offering a quick, finished look for both new installations and kitchen renovations.',
        description:
          'Bajrang Plywood supplies modular kitchen shutters to homeowners and contractors across Lucknow, Uttar Pradesh, and Nepal border towns. Available in various finishes such as laminate, acrylic, and PVC, these ready-made shutters give kitchen cabinets a clean, factory-finished appearance while saving installation time. Durable and moisture-resistant, they are a practical solution for both new modular kitchens and quick makeovers.',
        images: [
          '/products/kitchen-hardware/kitchen-shutter/1.png',
          '/products/kitchen-hardware/kitchen-shutter/2.png',
        ],
      },
      {
        name: 'Pantry Unit',
        title: 'Pantry Unit Hardware in Lucknow | Kitchen Storage Pull-Out System',
        usage:
          'Designed for tall kitchen storage cabinets that need organized, pull-out shelving for groceries, jars, and kitchen essentials.',
        description:
          'Bajrang Plywood provides pantry unit hardware systems to modular kitchen dealers across Lucknow, Uttar Pradesh, and the Nepal border belt. These pull-out pantry units maximize storage in tall cabinets, offering easy access to groceries and kitchen items with smooth-glide shelving. A space-efficient solution that keeps kitchens organized and clutter-free, popular in both compact and large modular kitchen designs.',
        images: [
          '/products/kitchen-hardware/pantry-unit/1.png',
          '/products/kitchen-hardware/pantry-unit/2.png',
        ],
      },
      {
        name: 'Tall Unit',
        title: 'Tall Unit Hardware in Lucknow | Full-Height Kitchen Storage Cabinet System',
        usage:
          'Used for full-height kitchen cabinets that store appliances, groceries, and utensils, maximizing vertical storage space in the kitchen.',
        description:
          'Bajrang Plywood supplies tall unit hardware and fittings to modular kitchen installers across Lucknow, Uttar Pradesh, and Nepal border markets. These systems are engineered for full-height cabinets, offering multiple shelves, pull-out baskets, and easy-access storage for appliances and groceries. A smart solution for kitchens with limited floor space but ample vertical room, combining functionality with organized storage.',
        images: [
          '/products/kitchen-hardware/tall-unit/1.png',
          '/products/kitchen-hardware/tall-unit/2.png',
        ],
      },
      {
        name: 'Magic Corner',
        title: 'Magic Corner Unit in Lucknow | Rotating Corner Cabinet Storage System',
        usage:
          'Specifically used for L-shaped kitchen corner cabinets that are otherwise hard to access, converting dead corner space into usable storage.',
        description:
          'Bajrang Plywood offers magic corner storage units to modular kitchen dealers in Lucknow, Uttar Pradesh, and the Nepal border region. These rotating or pull-out mechanisms make full use of awkward corner cabinet spaces, bringing stored items smoothly into reach. A smart hardware solution that eliminates wasted corner space and improves overall kitchen storage efficiency and convenience.',
        images: [
          '/products/kitchen-hardware/magic-corner/1.png',
          '/products/kitchen-hardware/magic-corner/2.png',
        ],
      },
      {
        name: 'Bin Holder',
        title: 'Bin Holder in Lucknow | Pull-Out Kitchen Waste Bin System',
        usage:
          'Installed inside kitchen cabinets to hold waste bins neatly, keeping the kitchen clean and odor-free with easy pull-out access.',
        description:
          'Bajrang Plywood supplies pull-out bin holder systems to modular kitchen customers across Lucknow, Uttar Pradesh, and Nepal border towns. These holders keep waste bins concealed within cabinets and provide smooth, easy access when needed, helping maintain a clean and hygienic kitchen. Durable and easy to install, bin holders are an essential hardware fitting for modern, well-organized modular kitchens.',
        images: [
          '/products/kitchen-hardware/bin-holder/1.png',
          '/products/kitchen-hardware/bin-holder/2.png',
        ],
      },
      {
        name: 'Wicker Basket',
        title: 'Wicker Baskets in Lucknow | Kitchen & Wardrobe Storage Baskets',
        usage:
          'Used inside kitchen cabinets and wardrobes for storing vegetables, utensils, or clothing with good ventilation and easy visibility.',
        description:
          'Bajrang Plywood provides wicker (wire mesh) storage baskets to modular kitchen and wardrobe customers across Lucknow, Uttar Pradesh, and the Nepal border belt. These baskets offer ventilated, easy-to-access storage for vegetables, utensils, and folded clothing, keeping cabinets organized and items visible. Rust-resistant and sturdy, wicker baskets are a practical addition to any modular kitchen or wardrobe interior.',
        images: [
          '/products/kitchen-hardware/wicker-basket/1.png',
          '/products/kitchen-hardware/wicker-basket/2.png',
        ],
      },
    ],
  },
  {
    id: 'bendable-panels',
    label: 'Bendable Panels',
    title: 'Bendable Panels / Louvers',
    products: [
      {
        name: 'Bendable Panels or Louvers',
        title: 'Bendable Louver Panels in Lucknow | Flexible Fluted Panels for Curved Interiors',
        usage:
          'Used for curved walls, rounded columns, and cylindrical furniture features where standard flat louver panels cannot be installed.',
        description:
          'Bajrang Plywood offers flexible bendable louver panels to designers and contractors across Lucknow, Uttar Pradesh, and the Nepal border region. These panels retain the trending fluted, linear texture while bending smoothly around curved walls, columns, and rounded furniture. A creative solution for architects and interior designers wanting to introduce the popular louver look into curved and non-flat surfaces.',
        images: [
          '/products/bendable-panels/bendable-panels-or-louvers/1.jpeg',
          '/products/bendable-panels/bendable-panels-or-louvers/2.jpeg',
        ],
      },
    ],
  },
  {
    id: 'decoratives',
    label: 'Decoratives',
    title: 'Decoratives',
    products: [
      {
        name: 'Cane Sheet',
        title: 'Premium Natural Rattan Cane Sheets',
        usage: 'Wardrobe door inserts, partition screens, and organic bohemian furniture accents.',
        description:
          'Bring organic warmth and texture to your interiors with our premium natural rattan cane sheets. Perfectly suited for both contemporary and traditional designs, these breathable, durable sheets add an earthy charm to any space. Bajrang Plywood offers an extensive selection at our Lucknow showroom, serving as a trusted wholesale supplier for interior designers and furniture makers across Uttar Pradesh, North India, and Nepal border cities.',
      },
      {
        name: 'Cork Sheet',
        title: 'Eco-Friendly Acoustic Cork Sheets',
        usage: 'Office notice boards, acoustic wall cladding, accent walls, and thermal insulation backing.',
        description:
          'Optimize your spaces with sustainable cork sheets, an excellent choice for acoustic dampening and thermal regulation. Widely utilized in commercial offices and educational spaces, these eco-friendly panels effectively minimize ambient noise. Available in bulk, Bajrang Plywood ensures seamless distribution to contractors and architects throughout Lucknow, the broader UP region, and neighbouring Nepal border markets.',
      },
      {
        name: 'Cork Sheet with Louvers',
        title: 'Textured Fluted Cork Wall Louvers',
        usage: 'High-end living room accent walls, bedroom backdrops, and acoustic studio paneling.',
        description:
          'Merge the natural insulation of cork with the contemporary architectural appeal of fluted panels. These hybrid louvers are highly sought after by top architects for creating 3D depth and sophisticated textures in luxury spaces. Distributed from our Lucknow hub, Bajrang Plywood caters to premium residential and commercial projects across North India and Uttar Pradesh, right up to the Nepal border.',
      },
      {
        name: 'Designer Sheet',
        title: 'Luxury Designer Decorative Sheets',
        usage: 'Premium TV backdrops, luxury wardrobe shutters, lobby feature walls, and bespoke furniture.',
        description:
          'Elevate your architectural projects with our exclusive collection of designer decorative sheets. Featuring intricate textures and striking modern patterns, these panels act as the visual centrepiece of any room. As a leading distributor based in Lucknow, Bajrang Plywood supplies these high-end surfaces to interior designers and builders throughout UP and North India.',
      },
      {
        name: 'SPC Louvers Fire Resistant',
        title: 'Fire-Retardant SPC Wall Louvers',
        usage: 'Commercial hallways, premium kitchen areas, office lobbies, and fire-safe interior cladding.',
        description:
          'Prioritize absolute safety without compromising on aesthetics using our fire-resistant SPC (Stone Plastic Composite) louvers. Meeting strict commercial standards, these ultra-durable fluted panels resist water, wear, and flames while maintaining a flawless finish. Bajrang Plywood provides heavy-duty architectural solutions to commercial developers across Uttar Pradesh, with distribution spanning from Lucknow to the Nepal border.',
      },
      {
        name: 'Charcoal Louver',
        title: 'Contemporary Charcoal Fluted Panels',
        usage: 'Modern TV unit backgrounds, master bedroom feature walls, pillars, and commercial showrooms.',
        description:
          'Redefine interior aesthetics with our premium charcoal louvers, a top-trending wall cladding solution. Engineered to be termite-proof and water-resistant, these lightweight fluted panels add instant architectural depth and shadow play to any plain wall. Bajrang Plywood supplies these high-demand profiles to residential and commercial projects across Lucknow, North India, and markets near the Nepal border.',
      },
      {
        name: 'Customized Door',
        title: 'Bespoke Architectural Wooden Doors',
        usage: 'Main entrance doors, luxury master bedroom entryways, and sophisticated office cabin doors.',
        description:
          'We DEAL IN- Laminate Doors, Veneer Doors, PU Doors, Duco Doors, Panel Doors, W.P.C / P.V.C Doors, Membrane Doors, Flush Doors. Make a lasting impression with customized architectural doors tailored exactly to your vision. Built with warp-resistant calibrated cores to ensure structural integrity over time, these doors seamlessly complement luxury interior themes. Operating out of Lucknow, Bajrang Plywood collaborates with premium homeowners and builders to deliver tailored dimensions and finishes across Uttar Pradesh and North India.',
      },
      {
        name: 'Designer Laminates 1.25mm Thickness',
        title: 'Heavy-Duty 1.25mm Designer Laminates',
        usage: 'High-wear modular kitchen countertops, premium wardrobes, office desks, and durable partitions.',
        description:
          'Experience the perfect blend of style and resilience with our 1.25mm thick designer laminates. Offering exceptional scratch, crack, and impact resistance, these premium high-pressure sheets are built for demanding wear and tear. From our Lucknow distribution centre, Bajrang Plywood supplies these ultra-durable, deeply textured laminates to dealers, designers, and carpenters across UP and North India.',
      },
      {
        name: 'Charcoal Panels',
        title: 'Premium Architectural Charcoal Wall Panels',
        usage: 'Luxury living area backdrops, commercial reception spaces, ceiling accents, and bar paneling.',
        description:
          'Transform ordinary walls into striking artistic statements with our high-end charcoal panels. Highly resistant to borers and moisture, these eco-friendly sheets feature deep textures and metallic veins that catch the light beautifully. As a premier decorative supplier in Lucknow, Bajrang Plywood provides these dramatic focal-point surfaces throughout Uttar Pradesh and up to the Nepal border.',
      },
      {
        name: 'Acrylic Sheet 2.25mm Thickness (First Time In India)',
        title: 'Next-Generation Ultra-Gloss Acrylic Sheets',
        usage: 'Luxury modular kitchen shutters, high-end bathroom vanities, and seamless modern wardrobes.',
        description:
          "Introduce a flawless, glass-like reflection to your cabinetry with one of India's first 2.25mm thick premium acrylic sheets. Engineered for an unparalleled high-gloss finish, these innovative sheets are highly scratch-resistant and formulated to prevent yellowing. Bajrang Plywood proudly supplies this cutting-edge, seamless surface material from Lucknow to top modular furniture manufacturers across UP, North India, and Nepal border cities.",
      },
      {
        name: 'Fabric Sheets',
        title: 'Tactile Cloth-Textured Decorative Panels',
        usage: 'Luxury bedroom wardrobes, acoustic study room paneling, cozy accent walls, and ceiling styling.',
        description:
          'Infuse soft elegance into hard architectural lines with our innovative fabric sheets. Replicating the exact weave and warmth of premium upholstery, these panels offer a sophisticated look with the easy maintenance of a hard surface. Highly favoured by interior designers, Bajrang Plywood distributes these durable, cozy textured sheets from our Lucknow base to upscale projects across Uttar Pradesh and North India.',
      },
      {
        name: 'Mood Board for Designer Comfort',
        title: 'Curated Interior Design Material Mood Boards',
        usage: 'Architect presentations, interior design planning, client consultations, and space conceptualization.',
        description:
          'Streamline the design and selection process with our professionally curated material mood boards. These boards harmonize textures, shades, and materials to help clients visualize cohesive, luxury interiors effortlessly. Bajrang Plywood provides these essential presentation tools to architectural firms and interior decorators operating in Lucknow, across UP, and near the Nepal border.',
      },
      {
        name: 'MCS Sheet (Mineral Composite Sheet)',
        title: 'Weather-Proof Mineral Composite Sheets (MCS)',
        usage: 'Heavy-duty exterior wall cladding, moisture-heavy bathrooms, high-traffic commercial spaces, and pillars.',
        description:
          'Ensure long-lasting structural elegance with our rugged mineral composite sheets. Made from high-grade natural mineral compounds, they are entirely waterproof, fire-retardant, and immune to severe weathering. Bajrang Plywood is a primary wholesale supplier of these tough, stone-textured cladding panels in Lucknow, fulfilling heavy-duty exterior needs for builders across North India and Uttar Pradesh.',
      },
      {
        name: 'Charcoal Louvers',
        title: 'Architectural Grade Charcoal Fluted Louvers',
        usage: 'Modern TV walls, corporate conference room backdrops, pillar wraps, and main hallway framing.',
        description:
          'Expand your geometric design possibilities with our architectural grade charcoal louvers. Featuring distinct slat widths and deep profiles, these panels create sharp, dramatic linear patterns that enhance the scale of any room. Stocked in high volumes in Lucknow, Bajrang Plywood caters to strong demand for these sleek, minimalist designs from commercial interior decorators throughout UP and the Nepal border.',
      },
      {
        name: 'Charcoal Mood Boards',
        title: 'Concept-Ready Charcoal Paneling Mood Boards',
        usage: 'Selecting coordinated wall paneling systems, matching trim hardware, and finalizing commercial decor themes.',
        description:
          'Take the guesswork out of accent wall design with our professional charcoal mood boards. Featuring curated combinations of complementary textures, metallic trims, and louver styles, these boards help designers finalize cohesive architectural themes. Bajrang Plywood supplies these tactile selection boards to architects and builders across Lucknow, Uttar Pradesh, and North India.',
      },
      {
        name: 'Silk Laminates (Melted Metal)',
        title: 'Luxury Melted Metal Silk Laminates',
        usage: 'Premium executive desks, luxury wardrobe accents, bar cabinets, and statement master beds.',
        description:
          'Capture the breathtaking look of fluid architecture with our silk laminates in melted metal finishes. Offering a unique, velvety soft touch combined with the shimmering depth of poured metallic compounds, these laminates bring unmatched opulence to smooth surfaces. Bajrang Plywood distributes these high-definition, futuristic sheets to elite custom furniture designers across Lucknow, UP, and the Nepal border markets.',
      },
      {
        name: 'Fabric Bendable Sheets',
        title: 'Flexible Cloth-Textured Bendable Sheets',
        usage: 'Wrapping round pillars, curved reception desks, arched door frames, and organic furniture.',
        description:
          'Break free from rigid, sharp corners with our innovative fabric bendable sheets. Combining a beautiful textile texture with a highly pliable backing, these panels wrap seamlessly around tight curves and complex geometries without cracking. Bajrang Plywood is a leading supplier providing these flexible decorative solutions from Lucknow to modern architectural projects across Uttar Pradesh and North India.',
      },
      {
        name: 'MCM Flexible Clay Sheets 360 Degree',
        title: 'MCM Flexible Clay Sheets – 360-Degree Natural Stone-Look Wall Cladding',
        usage: 'Ideal for accent walls, curved columns, ceiling features, and full 360-degree wraparound cladding on pillars and arches.',
        description:
          'Get the raw, earthy beauty of natural clay and stone without the weight or rigidity of traditional cladding with our MCM Flexible Clay Sheets. Their ultra-thin, flexible construction allows them to be wrapped fully around curved columns, arches, and irregular surfaces for a genuine 360-degree finish. Lightweight yet durable, these sheets resist cracking and moisture while delivering an authentic textured, natural stone appearance. Bajrang Plywood supplies this innovative cladding solution from Lucknow to designers and builders across Uttar Pradesh, North India, and the Nepal border looking for a modern take on natural wall finishes.',
      },
      {
        name: 'Flextone',
        title: 'Flextone Decorative Wall Panels – Flexible Wood-Tone Wall Cladding',
        usage: 'Perfect for living room feature walls, hotel lobbies, restaurant interiors, and curved reception backdrops.',
        description:
          'Flextone panels bring a rich, warm wood-toned finish to walls while offering the flexibility to follow curved and irregular surfaces where rigid wood panelling simply cannot go. These lightweight decorative sheets are easy to install, resistant to routine wear, and deliver a natural, sophisticated look at a fraction of the effort of solid wood cladding. Bajrang Plywood, a trusted decorative surfaces supplier in Lucknow, stocks Flextone in a range of finishes for residential and commercial interior projects across Uttar Pradesh and North India.',
      },
    ],
  },
  {
    id: 'hardware',
    label: 'Hardware',
    title: 'Hardware',
    products: [
      {
        name: 'Hinges (Brass Material)',
        title: 'Premium Brass Hinges for Wardrobes & Interior Doors',
        usage:
          'Ideal for wardrobe shutters, interior doors, cabinet doors, and furniture requiring long-lasting, heavy-duty support. Includes standard butt hinges as well as L-hinges and duck hinges for specialised applications.',
        description:
          'Solid brass hinges form the backbone of durable furniture and door construction, offering superior load-bearing strength compared to ordinary steel hinges. Bajrang Plywood supplies genuine brass hinges that resist corrosion and rusting, even in the humid conditions common across Uttar Pradesh. Available in multiple sizes and styles including L-hinges and duck hinges, these hinges deliver smooth, silent movement and years of dependable performance for wardrobes, cabinets, and interior doors across North India.',
        images: [
          '/products/hardware/hinges-brass-material/1.png',
          '/products/hardware/hinges-brass-material/2.png',
          '/products/hardware/hinges-brass-material/3.png',
          '/products/hardware/hinges-brass-material/4.png',
          '/products/hardware/hinges-brass-material/5.png',
        ],
      },
      {
        name: 'Concealed Hinges',
        title: 'Concealed Cabinet Hinges for a Seamless Furniture Finish',
        usage:
          'Used inside modular kitchen cabinets, wardrobe shutters, and modern furniture where a clean, hidden hinge look is preferred over visible hardware.',
        description:
          'Concealed hinges tuck neatly inside the cabinet frame, giving furniture doors a sleek, uninterrupted exterior finish that matches contemporary interior design trends. Bajrang Plywood offers concealed hinges engineered with soft-close and adjustable features, allowing carpenters to fine-tune door alignment for a perfect fit. Built for durability, these hinges are a preferred choice among modular kitchen and wardrobe manufacturers across Lucknow and Uttar Pradesh.',
        images: [
          '/products/hardware/concealed-hinges/1.png',
          '/products/hardware/concealed-hinges/2.png',
          '/products/hardware/concealed-hinges/3.png',
        ],
      },
      {
        name: 'Profiles For Wardrobe & Shutters',
        title: 'Aluminium Profiles for Handle-Free Wardrobes & Kitchen Shutters',
        usage:
          'Used to create a modern, handle-less look on wardrobe shutters and kitchen cabinets, providing an easy finger-grip channel for opening doors.',
        description:
          'Profile systems replace bulky external handles with a slim, integrated aluminium channel that gives wardrobes and kitchens a minimalist, contemporary appearance. Bajrang Plywood supplies a range of profile shapes and finishes suited to different shutter thicknesses and design styles. Corrosion-resistant and built for daily use, these profiles are a popular choice among interior designers across Lucknow, Uttar Pradesh, and North India for creating clean, handle-free modular furniture.',
        images: [
          '/products/hardware/profiles-wardrobe-shutters/1.png',
          '/products/hardware/profiles-wardrobe-shutters/2.png',
          '/products/hardware/profiles-wardrobe-shutters/3.png',
          '/products/hardware/profiles-wardrobe-shutters/4.png',
          '/products/hardware/profiles-wardrobe-shutters/5.png',
          '/products/hardware/profiles-wardrobe-shutters/6.png',
        ],
      },
    ],
  },
  {
    id: 'korean-stone',
    label: 'Korean Stone',
    title: 'Korean Stone (Acrylic Stone Surface)',
    products: [
      {
        name: 'Korean Stone (Acrylic Stone Surface)',
        title: 'Korean Stone – Premium Seamless Acrylic Solid Surface',
        usage:
          'Ideal for kitchen countertops, wash basins, bathroom vanities, reception counters, and seamless commercial work surfaces.',
        description:
          'Korean Stone, also known as acrylic solid surface, delivers the elegant look of natural stone with the added benefits of a completely non-porous, seamless finish. Unlike granite or marble, this surface resists staining, water absorption, and bacterial growth, making it ideal for kitchens and bathrooms. Its joints can be seamlessly fused for an unbroken countertop appearance, and it can be moulded into curved or custom shapes for basins and reception counters. Bajrang Plywood supplies premium acrylic stone surfaces from Lucknow to residential and commercial projects across Uttar Pradesh and North India.',
        images: [
          '/products/korean-stone/korean-stone-acrylic-surface/1.png',
          '/products/korean-stone/korean-stone-acrylic-surface/2.png',
          '/products/korean-stone/korean-stone-acrylic-surface/3.png',
          '/products/korean-stone/korean-stone-acrylic-surface/4.png',
          '/products/korean-stone/korean-stone-acrylic-surface/5.png',
        ],
      },
    ],
  },
  {
    id: 'locks',
    label: 'Locks',
    title: 'Locks',
    products: [
      {
        name: 'Mortise Locks',
        title: 'Heavy-Duty Mortise Locks for Doors & Main Entrances',
        usage:
          'Best suited for main entrance doors, office cabin doors, and interior doors requiring a robust, traditional locking mechanism.',
        description:
          'Mortise locks are fitted directly into the body of the door, offering a strong, tamper-resistant locking mechanism trusted for decades across Indian homes and offices. Bajrang Plywood supplies mortise locks built with hardened steel components and reliable key-and-latch systems suited to daily heavy use. Their sturdy construction and easy compatibility with wooden and flush doors make them a preferred choice for main entrances and cabin doors across Lucknow and Uttar Pradesh.',
        images: [
          '/products/locks/mortise-locks/1.png',
          '/products/locks/mortise-locks/2.png',
          '/products/locks/mortise-locks/3.png',
          '/products/locks/mortise-locks/4.png',
        ],
      },
      {
        name: 'Yale Locks',
        title: 'Yale-Style Cylindrical Locks for Modern Doors',
        usage:
          'Ideal for main doors, bedroom doors, and office entrances needing a quick-turn, easy-to-operate locking system.',
        description:
          'Yale-style cylindrical locks offer a simple, reliable locking mechanism that is quick to install and easy to operate on a daily basis. Bajrang Plywood stocks these locks with corrosion-resistant finishes and durable internal pin-tumbler mechanisms, designed to withstand frequent use without jamming. Compact and dependable, they are widely chosen for main doors and interior rooms across residential and commercial projects in North India.',
        images: [
          '/products/locks/yale-locks/1.png',
          '/products/locks/yale-locks/2.png',
        ],
      },
      {
        name: 'Biometric Locks',
        title: 'Smart Biometric Fingerprint Locks for Modern Security',
        usage:
          'Perfect for main entrance doors, office access points, and premium homes seeking keyless, technology-driven security.',
        description:
          'Biometric locks bring modern smart-home security to your entrance with fingerprint, keypad, or app-based access, eliminating the hassle of carrying keys. Bajrang Plywood supplies biometric locks with rechargeable battery backup, tamper alerts, and multiple user-access modes suited to both homes and offices. As demand for smart security solutions grows across Lucknow and Uttar Pradesh, these locks offer a future-ready, convenient upgrade over traditional locking systems.',
        images: [
          '/products/locks/biometric-locks/1.png',
          '/products/locks/biometric-locks/2.png',
          '/products/locks/biometric-locks/3.png',
          '/products/locks/biometric-locks/4.png',
        ],
      },
    ],
  },
  {
    id: 'handles',
    label: 'Handles',
    title: 'Handles',
    products: [
      {
        name: 'Pull Handles',
        title: 'Premium Pull Handles for Wardrobes, Doors & Cabinets',
        usage:
          'Suited for wardrobe shutters, main doors, and cabinet fronts where a strong grip and bold visual statement are needed.',
        description:
          'Pull handles combine ergonomic functionality with striking visual appeal, serving as a key design accent on doors, wardrobes, and cabinetry. Bajrang Plywood offers pull handles in a variety of finishes and lengths, built from corrosion-resistant metal alloys for long-term durability. Easy to grip and install, these handles are a popular finishing choice for modular furniture and entrance doors across Lucknow and Uttar Pradesh.',
      },
      {
        name: 'Cabinet Handles',
        title: 'Modern Cabinet Handles for Kitchen & Wardrobe Furniture',
        usage:
          'Ideal for kitchen cabinet shutters, wardrobe drawers, and modular furniture requiring compact, everyday-use handles.',
        description:
          'Cabinet handles provide the everyday grip point for drawers and shutters, and Bajrang Plywood stocks a wide range of designs from minimalist bar handles to decorative knobs. Manufactured with rust-resistant coatings, these handles are built to withstand frequent daily use in busy kitchens and bedrooms. Their varied finishes make it easy for designers across North India to match handles precisely to the overall interior theme.',
      },
      {
        name: 'Profile Handles For Kitchen & Wardrobe',
        title: 'Integrated Profile Handles for a Handle-Less Kitchen & Wardrobe Look',
        usage:
          'Best suited for contemporary modular kitchens and wardrobes designed with a sleek, minimalist, handle-free appearance.',
        description:
          'Profile handles are built directly into the edge of the shutter, creating a smooth finger-pull groove instead of a protruding handle. Bajrang Plywood supplies these aluminium profile handles in multiple finishes, offering the clean lines favoured in modern modular kitchen and wardrobe design. Durable and easy to clean, they are increasingly preferred by architects and homeowners across Lucknow and Uttar Pradesh for a minimalist, contemporary look.',
      },
      {
        name: 'Sliding Handles',
        title: 'Recessed Sliding Handles for Sliding Doors & Wardrobes',
        usage:
          'Designed for sliding wardrobe doors, sliding partitions, and cabinet doors where a flush, space-saving handle is required.',
        description:
          'Sliding handles are designed to sit flush or recessed within the door panel, allowing sliding doors to glide past each other without obstruction. Bajrang Plywood offers sliding handles built from sturdy, corrosion-resistant materials that maintain smooth operation over years of daily sliding use. Compact and functional, they are a practical choice for wardrobes and partitions across space-conscious homes and offices in North India.',
      },
    ],
  },
  {
    id: 'safes',
    label: 'Safes',
    title: 'Safes',
    products: [
      {
        name: 'Safes',
        title: 'Heavy-Duty Home & Office Safes for Valuables',
        usage:
          'Ideal for storing cash, jewellery, important documents, and valuables securely at home, in offices, and in commercial establishments.',
        description:
          'A dependable safe is essential for protecting valuables from theft and damage, and Bajrang Plywood supplies heavy-duty safes built with reinforced steel bodies and multi-bolt locking mechanisms. Available with key, digital, or biometric locking options, these safes cater to a range of home and office security needs. Built for long-term reliability, they are a trusted choice for residential and commercial clients across Lucknow and Uttar Pradesh looking to secure their most important belongings.',
        images: [
          '/products/safes/safes/1.png',
          '/products/safes/safes/2.png',
          '/products/safes/safes/3.png',
          '/products/safes/safes/4.png',
        ],
      },
    ],
  },
  {
    id: 'veneer',
    label: 'Veneer',
    title: 'Veneer',
    products: [
      {
        name: 'Natural Veneer',
        title: 'Natural Wood Veneer Sheets in Lucknow, UP & Nepal Border | Bajrang Plywood',
        usage:
          'Used for veneering wardrobes, panel doors, wall cladding, TV units, office furniture, and premium modular interiors. Ideal for carpenters, interior designers, and architects across Lucknow, Uttar Pradesh, and the Nepal border region looking for a genuine wood-grain finish.',
        description:
          'Bajrang Plywood brings you Natural Wood Veneer sheets sourced from real timber logs, offering an authentic wood grain that engineered laminates simply cannot match. Each sheet is carefully sliced and processed to retain natural texture, colour variation, and depth, giving furniture a rich, high-end look. Suitable for both residential and commercial interiors, our natural veneer works beautifully on wardrobes, doors, partitions, and feature walls. Trusted by carpenters and designers across Lucknow and Uttar Pradesh for its durability and premium finish, it is a top choice for anyone wanting timeless, elegant interiors. Available in bulk for dealers, contractors, and retail buyers across the Nepal border markets.',
      },
      {
        name: 'Metallic Veneer',
        title: 'Metallic Veneer Sheets Supplier in Lucknow & UP | Bajrang Plywood',
        usage:
          'Best suited for statement furniture pieces, modular wardrobes, false ceiling panels, reception counters, and accent wall panelling in homes, offices, hotels, and showrooms. Popular among interior designers in Lucknow and across Uttar Pradesh for premium, modern-style projects.',
        description:
          'Metallic Veneer from Bajrang Plywood is designed for interiors that demand a bold, contemporary edge. With a distinctive metallic sheen layered over engineered veneer, it adds a luxurious, futuristic touch to wardrobes, cabinets, wall panels, and commercial spaces. It is lightweight, easy to work with, and pairs well with both minimal and high-end décor styles. Widely used by architects and interior designers across Lucknow, Uttar Pradesh, and the Nepal border belt for hotels, showrooms, and premium residential projects, this veneer helps furniture stand out while maintaining strength and finish quality. Available in multiple metallic shades for bulk and retail supply.',
      },
      {
        name: 'Hybrid Veneer',
        title: 'Hybrid Veneer Sheets in Lucknow, Uttar Pradesh | Bajrang Plywood',
        usage:
          'Ideal for wardrobes, wall panelling, door skins, false ceilings, and furniture where a consistent pattern with a natural look is required. Preferred by builders and carpenters across UP and Nepal border towns for cost-effective yet premium interiors.',
        description:
          'Hybrid Veneer by Bajrang Plywood combines the visual richness of natural wood with the uniformity and durability of engineered veneer manufacturing. This makes it a smart choice for large-scale projects that need consistent grain patterns across multiple panels, without compromising on aesthetics. It offers better resistance to warping and colour variation compared to plain natural veneer, making it ideal for humid and varying climate conditions found across Uttar Pradesh and the Nepal border region. A go-to material for carpenters, contractors, and interior designers seeking premium looks at practical pricing, available readily from our Lucknow-based supply network.',
      },
    ],
  },
  {
    id: 'wardrobe-accessories',
    label: 'Wardrobe Accessories',
    title: 'Wardrobe Accessories',
    products: [
      {
        name: 'Sliding Wardrobe Drawers',
        title: 'Sliding Wardrobe Drawers Supplier in Lucknow & UP | Bajrang Plywood',
        usage:
          'Used inside modular wardrobes, walk-in closets, and storage units for organising clothes, accessories, and daily essentials. Widely fitted by carpenters and modular kitchen/wardrobe fabricators across Lucknow, Uttar Pradesh, and Nepal border towns.',
        description:
          'Bajrang Plywood offers high-quality Sliding Wardrobe Drawers built for smooth, noiseless operation and long-term durability. Designed with sturdy metal channels and a strong frame, these drawers glide effortlessly even under regular daily use, making wardrobes more functional and organised. They are a popular choice among carpenters and interior fit-out contractors across Lucknow and Uttar Pradesh for modular bedroom and dressing room projects. Easy to install and compatible with most wardrobe carcass designs, these drawers add a premium, clutter-free storage solution to any home or office interior. Available in bulk for dealers and retail buyers across the region.',
        images: [
          '/products/wardrobe-accessories/sliding-wardrobe-drawers/1.png',
          '/products/wardrobe-accessories/sliding-wardrobe-drawers/2.png',
        ],
      },
      {
        name: 'Multiple Layer Wardrobe Organizer',
        title: 'Multi-Layer Wardrobe Organizer in Lucknow, UP & Nepal Border | Bajrang Plywood',
        usage:
          'Fitted inside modular wardrobes and closets to store folded clothes, linens, and accessories in an organised, layered manner. Commonly used by carpenters and interior designers for compact bedrooms, hostels, and residential apartments across UP and the Nepal border markets.',
        description:
          'The Multiple Layer Wardrobe Organizer from Bajrang Plywood is engineered to maximise storage space inside modular wardrobes through multi-tier, foldable and pull-out compartments. It helps keep clothes, linens, and everyday items neatly arranged, reducing clutter and improving wardrobe efficiency. Sturdy, easy to install, and compatible with standard wardrobe carcasses, this organizer is a favourite among carpenters and interior fit-out professionals across Lucknow and Uttar Pradesh for both residential and commercial projects. A practical, space-smart accessory ideal for compact homes, hostels, and modern apartments, available for bulk supply to dealers across the Nepal border belt.',
        images: [
          '/products/wardrobe-accessories/multiple-layer-wardrobe-organizer/1.png',
          '/products/wardrobe-accessories/multiple-layer-wardrobe-organizer/2.png',
        ],
      },
    ],
  },
]
