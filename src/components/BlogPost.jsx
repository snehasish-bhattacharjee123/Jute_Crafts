import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import SEOHelmet from "./SEOHelmet";

// --- Sample blog data (you can move this to a separate module e.g. BlogData.js) ---
export const blogs = [
  {
    id: 1,
    title:
      "MKT Rugs at 61st IHGF Delhi Fair Spring 2026 – Meet Us from 14–18 February",
    date: "Feb 10, 2026",
    desc: "Join MKT Rugs at the 61st IHGF Delhi Fair Spring 2026 in Greater Noida. Discover our latest collections of handcrafted rugs and sustainable home furnishings.",
    img: "/images/bannerDelhiFair.png",
    category: "export",
    readTime: "5 min read",
    featured: true,
    metaTitle:
      "MKT Rugs at IHGF Delhi Fair Spring 2026 | Handcrafted Rugs Exhibition",
    metaDescription:
      "Meet MKT Rugs at the 61st IHGF Delhi Fair Spring 2026, 14-18 February. Explore our export-quality handknotted and natural fiber rugs.",
    content: `
      <h2>MKT Rugs at 61st IHGF Delhi Fair Spring 2026 – Meet Us from 14–18 February</h2>
      <p>India is globally recognised as a trusted sourcing destination for home furnishings, handicrafts, and lifestyle products. One of the biggest platforms connecting Indian manufacturers with international buyers is the IHGF Delhi Fair, and MKT Rugs is proud to be a part of the 61st IHGF Delhi Fair – Spring 2026.</p>
      <p>We invite buyers, retailers, importers, wholesalers, and interior professionals from across the world to meet MKT Rugs at IHGF Delhi Fair 2026, scheduled from 14th to 18th February 2026 at India Expo Centre & Mart, Greater Noida, Delhi NCR.</p>

      <h3>About IHGF Delhi Fair Spring 2026</h3>
      <p>The 61st IHGF Delhi Fair Spring 2026, organised by EPCH (Export Promotion Council for Handicrafts), is one of the largest international trade fairs in the world for home, lifestyle, fashion, furnishings, furniture, gifts, and interior products.</p>
      <p><strong>Key Highlights of IHGF Delhi Fair 2026:</strong></p>
      <ul>
        <li>3000+ exhibitors from across India</li>
        <li>18 exhibition halls</li>
        <li>197,000+ sq. mts. display area</li>
        <li>2000+ product styles & 300+ design developments</li>
        <li>16 major product categories</li>
        <li>UFI approved global trade fair</li>
      </ul>
      <p>IHGF Delhi Fair serves as a one-stop sourcing destination for global buyers looking for premium, ethically crafted, export-quality products from India.</p>

      <h3>MKT Rugs at IHGF Delhi Fair 2026</h3>
      <p>At MKT Rugs, we specialise in handknotted rugs, handwoven carpets, and sustainable home furnishing solutions crafted by skilled Indian artisans. IHGF Delhi Fair 2026 gives us the perfect platform to showcase our craftsmanship, innovation, and quality to global buyers.</p>
      <p><strong>What We’re Showcasing at IHGF 2026:</strong></p>
      <ul>
        <li>Handknotted Rugs</li>
        <li>Jute & Natural Fiber Rugs</li>
        <li>Custom-designed Carpets</li>
        <li>Sustainable & Eco-friendly Rugs</li>
        <li>Contemporary & Traditional Designs</li>
        <li>Export-quality Home Furnishings</li>
      </ul>
      <p>Every rug we create reflects precision, durability, design excellence, and ethical manufacturing.</p>

      <h3>Why Global Buyers Should Visit MKT Rugs at IHGF 2026</h3>
      <ul>
        <li><strong>✔ Premium Craftsmanship:</strong> Our rugs are handcrafted by experienced artisans using time-tested weaving techniques combined with modern design sensibilities.</li>
        <li><strong>✔ Customisation & Bulk Orders:</strong> We offer custom rug sizes, colours, patterns, and textures tailored to buyer requirements.</li>
        <li><strong>✔ Sustainable & Ethical Production:</strong> We focus on eco-friendly materials like jute and natural fibers while supporting artisan communities.</li>
        <li><strong>✔ Reliable Export Partner:</strong> MKT Rugs works with international buyers across multiple markets, ensuring quality consistency, timely delivery, and transparent communication.</li>
      </ul>

      <h3>Why IHGF Delhi Fair is Important for Buyers</h3>
      <p>IHGF is more than an exhibition, it’s a global sourcing experience. Buyers visiting IHGF Spring 2026 can:</p>
      <ul>
        <li>Discover exclusive Indian designs</li>
        <li>Connect directly with manufacturers & exporters</li>
        <li>Identify new trends for upcoming seasons</li>
        <li>Build long-term sourcing partnerships</li>
        <li>Explore innovation across home & lifestyle categories</li>
      </ul>

      <h3>Event Details – Save the Dates</h3>
      <p><strong>Event:</strong> 61st IHGF Delhi Fair – Spring 2026<br/>
      <strong>Dates:</strong> 14th – 18th February 2026<br/>
      <strong>Time:</strong> 09:00 AM – 06:00 PM (IST)<br/>
      <strong>Venue:</strong> India Expo Centre & Mart, Greater Noida, Delhi NCR<br/>
      <strong>Entry:</strong> Trade visitors only (18+ with registration/invitation)</p>

      <h3>Let’s Connect at IHGF Delhi Fair 2026</h3>
      <p>If you are attending IHGF Delhi Fair Spring 2026 and looking for a trusted rug manufacturer & exporter from India, we would love to meet you.</p>
      <ul>
        <li>👉 Visit MKT Rugs at IHGF 2026</li>
        <li>👉 Explore our latest rug collections</li>
        <li>👉 Discuss sourcing, customisation & bulk orders</li>
        <li>👉 Build long-term partnerships</li>
      </ul>
      <p>India makes for the world and MKT Rugs weaves it beautifully.</p>
    `,
  },
  {
    id: 2,
    title: "Crafted by Artisans, The MKT RUGS Promise",
    date: "Dec 26, 2025",
    desc: "Discover authentic handmade jute rugs crafted by skilled artisans in West Bengal. Support fair trade, ethical production, and India’s textile heritage with MKT RUGS.",
    img: "/images/Blog 1 (2).png",
    category: "craftsmanship",
    readTime: "6 min read",
    featured: true,
    metaTitle:
      "Handmade Jute Rugs from West Bengal | Artisan-Made Rugs by MKT RUGS",
    metaDescription:
      "Discover authentic handmade jute rugs crafted by skilled artisans in West Bengal. Support fair trade, ethical production, and India’s textile heritage with MKT RUGS.",
    content: `
  <h2>Honoring India’s Timeless Weaving Traditions</h2>

  <p>At MKT RUGS, every rug is more than a décor piece, it is a reflection of heritage, craftsmanship, and conscious living. Our jute rugs are hand-braided, hand-stitched, and hand-loomed by traditional artisan communities in West Bengal, India, where weaving is a cultural legacy passed down for generations.</p>

  <p>Unlike factory-produced rugs, each MKT RUGS product carries subtle variations in texture and tone, making every piece unique and authentic.</p>

  <h2>Empowering Artisan Communities in West Bengal</h2>

  <p>When you purchase from MKT RUGS, you directly contribute to:</p>

  <ul>
    <li>Supporting local artisans and rural livelihoods</li>
    <li>Preserving India’s centuries-old textile heritage</li>
    <li>Encouraging fair trade and ethical employment</li>
    <li>Promoting sustainable, eco-conscious production</li>
  </ul>

  <p>Our artisans work in respectful environments, earning fair wages that allow them to sustain their families while continuing their traditional craft.</p>

  <h2>Slow Craftsmanship Over Machine Mass Production</h2>

  <p>We strongly believe in slow craftsmanship, a process that values time, skill, and patience. Each rug is carefully woven over days or weeks, ensuring durability, strength, and superior quality.</p>

  <p>In an era of fast décor and machine-made replicas, MKT RUGS proudly stands for authenticity. No shortcuts. No mass imitation. Just honest craftsmanship.</p>

  <p>If you’re searching for handmade rugs from West Bengal, artisan-made jute rugs, or fair trade handcrafted home décor, MKT RUGS is a name you can trust.</p>
`,
  },
  {
    id: 3,
    title: "Caring for Your Jute Rug: A Complete Maintenance Guide",
    date: "Dec 26, 2025",
    desc: "Learn how to clean and maintain jute rugs properly. Simple care tips to keep your natural jute rug beautiful and long-lasting for years.",
    img: "/images/Blog_2.png",
    category: "care",
    readTime: "5 min read",
    featured: false,
    metaTitle: "Jute Rug Cleaning & Care Guide | How to Maintain Natural Jute Rugs",
    metaDescription:
      "Learn how to clean and maintain jute rugs properly. Simple care tips to keep your natural jute rug beautiful and long-lasting for years.",
    content: `
  <h2>Why Proper Jute Rug Care Matters</h2>

  <p>Jute rugs are valued for their natural texture, eco-friendly appeal, and timeless elegance. As a natural fiber, jute requires mindful care to maintain its beauty and durability.</p>

  <p>With the right maintenance routine, a handcrafted jute rug can remain stylish and functional for many years.</p>

  <h2>Weekly Cleaning to Prevent Dust Build-Up</h2>

  <p>Vacuum your jute rug once a week using a low-suction setting. This helps remove surface dust and dirt before it settles deep into the fibers.</p>

  <p>Avoid rotating brushes or high suction, as they can pull natural fibers loose.</p>

  <h2>Keep Jute Rugs Dry at All Times</h2>

  <p>Moisture is the biggest enemy of jute. Always:</p>

  <ul>
    <li>Avoid placing jute rugs in damp areas</li>
    <li>Never steam clean or wash with water</li>
    <li>Keep rugs away from bathrooms or wet balconies</li>
  </ul>

  <p>Excess moisture can weaken fibers and cause discoloration.</p>

  <h2>Spill Management: Act Gently & Quickly</h2>

  <p>If a spill occurs:</p>

  <ul>
    <li>Blot immediately with a clean, dry cloth</li>
    <li>Never rub, as it spreads stains and damages fibers</li>
    <li>Allow the area to air dry naturally</li>
  </ul>

  <p>For stubborn stains, professional dry cleaning is recommended.</p>

  <h2>Use a Rug Pad for Extra Protection</h2>

  <p>A rug pad underneath your jute rug:</p>

  <ul>
    <li>Extends rug life</li>
    <li>Prevents slipping</li>
    <li>Improves comfort</li>
    <li>Reduces friction with the floor</li>
  </ul>

  <p>Proper natural rug care ensures your MKT RUGS product ages beautifully while retaining its charm.</p>
`,
  },
  {
    id: 4,
    title:
      "Why MKT RUGS Is Preferred by Buyers in USA, Germany, Europe & Japan",
    date: "Dec 26, 2025",
    desc: "Trusted jute rug supplier from India for USA, Europe & Japan. Custom sizes, wholesale orders, export packaging, and authentic handcrafted quality.",
    img: "/images/Blog_3.png",
    category: "export",
    readTime: "6 min read",
    featured: true,
    metaTitle: "Jute Rugs Supplier from India | Wholesale & Export by MKT RUGS",
    metaDescription:
      "Trusted jute rug supplier from India for USA, Europe & Japan. Custom sizes, wholesale orders, export packaging, and authentic handcrafted quality.",
    content: `
  <h2>A Globally Trusted Jute Rug Exporter</h2>

  <p>MKT RUGS has earned the trust of international buyers, wholesalers, and interior designers across the USA, Germany, Europe, and Japan by consistently delivering quality, reliability, and authenticity.</p>

  <h2>Custom Sizes & Shapes for Global Markets</h2>

  <p>We offer custom-made jute rugs tailored to your needs, including:</p>

  <ul>
    <li>Rectangle rugs</li>
    <li>Oval rugs</li>
    <li>Round rugs</li>
    <li>Runner rugs</li>
  </ul>

  <p>Custom sizing ensures seamless integration into residential, commercial, and hospitality spaces.</p>

  <h2>Export-Ready Packaging & Worldwide Delivery</h2>

  <p>Our rugs are packed using export-standard protective packaging, ensuring safety during international transit. We understand global compliance requirements and ship worldwide with confidence.</p>

  <h2>Wholesale & B2B-Friendly Rug Manufacturer</h2>

  <p>MKT RUGS welcomes:</p>

  <ul>
    <li>Bulk & wholesale buyers</li>
    <li>Interior stores & boutiques</li>
    <li>Hotels, studios & design firms</li>
    <li>Project-based orders</li>
  </ul>

  <p>As a reliable jute rugs supplier from India, we ensure transparent communication, production consistency, and timely delivery.</p>

  <h2>Authentic Craftsmanship You Can Trust</h2>

  <p>Our rugs are not factory imitations. Each piece is genuinely handcrafted, making MKT RUGS a preferred partner for buyers seeking real quality, not replicas.</p>

  <p>If you’re searching for jute rugs wholesale Europe, bulk jute rugs export, or custom-size jute carpets, MKT RUGS is your trusted global supplier.</p>
`,
  },
  {
    id: 5,
    title: "Shop Natural. Live Beautiful. Choose MKT RUGS.",
    date: "Dec 26, 2025",
    desc: "Shop affordable, eco-friendly jute rugs and luxury handwoven carpets. Custom handmade jute rugs for homes, boutiques & export worldwide.",
    img: "/images/blog_4 (1).png",
    category: "sustainability",
    readTime: "5 min read",
    featured: false,
    metaTitle: "Eco-Friendly Jute Rugs & Handwoven Carpets | MKT RUGS",
    metaDescription:
      "Shop affordable, eco-friendly jute rugs and luxury handwoven carpets. Custom handmade jute rugs for homes, boutiques & export worldwide.",
    content: `
  <h2>Where Sustainability Meets Style</h2>

  <p>Your home reflects your values. Choosing natural décor is more than a trend — it’s a commitment to sustainability and mindful living.</p>

  <p>At MKT RUGS, we blend eco-conscious materials, artisan craftsmanship, and timeless design to create rugs that elevate any space.</p>

  <h2>What We Offer at MKT RUGS</h2>

  <p>We specialize in:</p>

  <ul>
    <li>Affordable natural jute rugs</li>
    <li>Luxury handwoven rugs</li>
    <li>Eco-friendly home décor</li>
    <li>Custom handmade jute carpets for export</li>
  </ul>

  <p>Each rug is designed to complement modern, minimalist, bohemian, and earthy interiors.</p>

  <h2>Perfect for Homes, Boutiques & Commercial Spaces</h2>

  <p>Whether you’re styling a home, retail store, hotel, or interior project, MKT RUGS offers flexible solutions for:</p>

  <ul>
    <li>Individual buyers</li>
    <li>Interior designers</li>
    <li>Retailers</li>
    <li>International wholesalers</li>
  </ul>

  <h2>Get Our Latest Catalog & Wholesale Details</h2>

  <p>Interested in placing an order or exploring wholesale opportunities?</p>

  <p>Share your email or WhatsApp number to receive our latest catalog, pricing, customization options, and export details.</p>

  <p>Shop natural. Live beautifully. Choose MKT RUGS.</p>
`,
  },

  {
    id: 6,
    title: "Why Jute Rugs Are the Most Important for Modern Decor",
    date: "Oct 5, 2025",
    desc: "Discover how raw jute fibers transform into sustainable, beautiful rugs crafted by artisans.",
    img: "/images/blogpost1.jpg",
    category: "sustainability",
    readTime: "5 min read",
    featured: true,
    content: `
  <h2>Why Jute Rugs Are the Most Important for Modern Décor</h2>

  <p>Interior designers across the world call jute rugs “the perfect foundation piece” — and for good reason. Jute offers a rare balance of beauty, comfort, and sustainability, making it one of the most loved natural fiber rugs in modern homes.</p>

  <h3>1. Naturally Beautiful</h3>
  <p>The earthy, golden tones of jute instantly add warmth and harmony to any space. Its organic texture creates a calm, grounded aesthetic that complements both minimal and luxurious interiors.</p>

  <h3>2. Eco-Friendly & Sustainable</h3>
  <p>Unlike synthetic materials, jute is 100% biodegradable, grows with minimal water, and requires no harsh chemical processing. This makes jute rugs a truly eco-friendly option for conscious homeowners.</p>

  <h3>3. Versatile for Every Room</h3>
  <p>From living rooms and bedrooms to dining areas and patios, jute rugs adapt effortlessly. They layer beautifully with other rugs and blend with modern, bohemian, rustic, and contemporary décor styles.</p>

  <h3>4. Durable & Long-Lasting</h3>
  <p>Thanks to its strong, natural fibers, jute stands up well to daily wear. A well-crafted jute rug can last for years, making it a smart investment for both style and functionality.</p>

  <p>Jute doesn’t just decorate a home — it elevates it. As one of the most cherished handwoven rugs available online, jute continues to be the go-to choice for anyone seeking comfort, sustainability, and timeless design.</p>
`,
  },

  {
    id: 7,
    title: "5 Ways to Style Jute Rugs in Your Living Room",
    date: "Sep 20, 2025",
    desc: "Learn how to incorporate jute rugs into modern interiors using designer-approved styling tips.",
    img: "/images/blogpost2.jpg",
    category: "design",
    readTime: "4 min read",
    featured: false,
    content: `
  <h2>5 Ways to Style Jute Rugs in Your Living Room</h2>

  <p>Jute rugs can anchor a space, add warmth, and bring a natural, modern texture to your living room. Beyond their versatility, what truly makes jute rugs special is the story behind the hands that craft them.</p>

  <h3>Crafted With Genuineness, Artistry & Human Touch</h3>
  <p>While many brands focus on mass production, MKT Rugs concentrates on something far more meaningful — authenticity. Every rug is handcrafted by skilled artisans from West Bengal, a region celebrated worldwide for its weaving tradition.</p>

  <p>These artisans don’t just weave patterns; they weave generations of knowledge, cultural stories, and emotion into every fiber. This makes each MKT rug an expression of true handwoven excellence — something machine-made carpets can never replicate.</p>

  <h3>1. Create a Warm, Neutral Base</h3>
  <p>Use a natural jute rug as the foundation of your living room. Its earthy tone balances bold furniture and creates a calm, inviting atmosphere.</p>

  <h3>2. Layer with a Patterned Rug</h3>
  <p>For a designer-approved look, layer a smaller patterned or colorful rug on top of a large jute rug. This adds depth and personality without overwhelming the space.</p>

  <h3>3. Pair with Wooden or Earthy Furniture</h3>
  <p>Jute’s natural texture pairs beautifully with wooden décor, rattan pieces, indoor plants, and earthy palettes.</p>

  <h3>4. Highlight Seating Areas</h3>
  <p>Place your jute rug under sofas, coffee tables, or accent chairs to visually define a cozy seating zone.</p>

  <h3>5. Use Round Jute Rugs for Compact Spaces</h3>
  <p>A round jute rug can soften corners and make small living rooms feel more open and balanced.</p>

  <p>With the artistry of our West Bengal weavers and the timeless appeal of natural fibers, every MKT jute rug adds warmth, character, and soul to your home.</p>
`,
  },

  {
    id: 8,
    title: "Meet the Artisans Behind Your Rug",
    date: "Sep 10, 2025",
    desc: "A peek into the lives of the artisans who bring MKT Rugs to life with their craftsmanship.",
    img: "/images/blogpost3.jpg",
    category: "craftsmanship",
    readTime: "6 min read",
    featured: true,
    content: `
  <h2>Meet the Artisans Behind Your Rug</h2>

  <p>Every MKT rug is woven by hands that carry generations of tradition. Our artisans are the heart of our brand — the reason each rug feels alive with culture, warmth, and craftsmanship.</p>

  <h3>From Golden Jute to a Handcrafted Masterpiece</h3>
  <p>We use only premium natural golden jute sourced directly from farmers across Bengal. Once harvested, every step of the journey is carried out by hand — a process that ensures unmatched authenticity and quality.</p>

  <ul>
    <li>i. <strong>Harvesting</strong> – Farmers cut and gather the finest golden jute.</li>
    <li>ii. <strong>Drying</strong> – Fibers are naturally sun-dried to preserve strength.</li>
    <li>iii. <strong>Fiber Processing</strong> – Raw fibers are softened and prepared manually.</li>
    <li>iv. <strong>Spinning</strong> – Threads are spun using traditional techniques.</li>
    <li>v. <strong>Dyeing</strong> – Natural and eco-friendly dyes add beautiful, earthy tones.</li>
    <li>vi. <strong>Weaving</strong> – Expert artisans hand-weave each pattern with precision.</li>
    <li>vii. <strong>Finishing</strong> – Edges, texture, and quality are perfected by hand.</li>
  </ul>

  <p>This labor-intensive process is what gives our rugs their signature texture, durability, and soulful character — qualities that machines simply cannot replicate.</p>

  <h3>Craftsmanship Recognized Worldwide</h3>
  <p>Because of this dedication to handcrafting excellence, MKT Rugs are exported to more than 30 countries, including:</p>

  <p>USA &nbsp; Germany &nbsp; Japan &nbsp; France &nbsp; Netherlands &nbsp; Australia &nbsp; UAE</p>

  <p>Customers around the world choose MKT not just for rug designs, but for the craftsmanship and human story woven into every piece.</p>

  <h3>Why People Choose MKT Rugs</h3>
  <p>Whether someone is searching for a <strong>boho jute rug</strong>, a <strong>neutral jute rug</strong>, or <strong>premium natural fiber carpets</strong>, they find more than a product — they find authenticity.</p>

  <p>Every rug is a tribute to our artisans, their heritage, and the beauty of handwoven craftsmanship.</p>
`,
  },
  {
    id: 9,
    title: "MKT Rugs vs Other Brands: What Makes Us Better?",
    date: "Aug 28, 2025",
    desc: "Why customers choose MKT Rugs over other popular carpet brands across India and the world.",
    img: "/images/blogpost4.jpg",
    category: "comparison",
    readTime: "5 min read",
    featured: false,
    content: `
  <h2>MKT Rugs vs Other Brands: What Makes Us Better?</h2>

  <p>Consumers frequently choose MKT Rugs even after comparing us to well-known brands such as Zara Carpets, Jaipur Rugs, D'Decor, Obsessions, Saral Home, and The Rug Republic. Here’s what sets us apart.</p>

  <h3>1. Genuine Handicrafts, Not Machine Output</h3>
  <p>Our rugs are not factory manufactured. They are handmade by skilled artisans — giving them an authenticity, texture, and warmth that machines simply cannot recreate.</p>

  <h3>2. Only Natural Fibers, No Harmful Blends</h3>
  <p>We remain committed to pure materials like natural jute, sisal, and cotton. This makes our rugs ideal for customers looking for sustainable rugs and eco-friendly area rugs.</p>

  <h3>3. Direct-from-Maker Pricing</h3>
  <p>No middlemen. No retail markups. Just fair pricing and better value for every customer.</p>

  <h3>4. Modern Designs for Contemporary Homes</h3>
  <p>From round and rectangular jute rugs to braided, woven, and embroidered designs — our collections follow global décor trends while keeping the beauty of handmade craft alive.</p>

  <h3>5. From Bengal to the World</h3>
  <p>Every MKT rug carries the cultural richness of Bengal’s weaving heritage — something no mass-production brand can match.</p>

  <p>When you buy an MKT rug, you’re not just buying décor — you're bringing home the history, labor, and heart of the artisan who created it.</p>
  `,
  },
  {
    id: 10,
    title: "The Reasons Jute Rugs Are Ideal for Your House",
    date: "Aug 10, 2025",
    desc: "Why jute rugs are a perfect choice for modern homes seeking natural beauty and comfort.",
    img: "/images/blogpost5.jpg",
    category: "sustainability",
    readTime: "4 min read",
    featured: false,
    content: `
  <h2>The Reasons Jute Rugs Are Ideal for Your House</h2>

  <p>Still unsure whether jute rugs will look good in your home? Here are the reasons homeowners and designers love them.</p>

  <h3>1. They Add Natural Warmth</h3>
  <p>The earthy textures of jute instantly make any space feel cozy, grounded, and inviting.</p>

  <h3>2. They Suit Every Design Style</h3>
  <p>From bohemian and minimalist to modern and rustic interiors — jute rugs complement almost any aesthetic, making them perfect for boho jute rug lovers.</p>

  <h3>3. They’re Easy to Maintain</h3>
  <p>A quick shake or gentle vacuum is enough to keep them looking fresh.</p>

  <h3>4. Pet-Friendly & Long-Lasting</h3>
  <p>Jute rugs tolerate daily use, pets, and foot traffic — while aging beautifully over time.</p>

  <h3>5. Affordable Luxury</h3>
  <p>They offer high-end texture and craftsmanship without the high-end price tag.</p>

  <p>Above all, jute rugs bring a sense of stability, calmness, and natural beauty into your home — something only true natural fiber carpets can deliver.</p>
  `,
  },

  {
    id: 11,
    title: "Select MKT Rugs: Bring a Bit of Bengal Home",
    date: "Jul 25, 2025",
    desc: "Why choosing MKT Rugs means choosing heritage, authenticity, and handcrafted beauty.",
    img: "/images/blogpost6.jpg",
    category: "craftsmanship",
    readTime: "5 min read",
    featured: false,
    content: `
  <h2>Select MKT Rugs: Bring a Bit of Bengal Home</h2>

  <p>Choosing an MKT Rug means choosing more than décor — it means bringing home culture, craftsmanship, and the beauty of nature.</p>

  <h3>1. Bengal's Soul in Every Fiber</h3>
  <p>Each rug carries the essence of Bengal’s weaving heritage, preserved by artisans who have mastered this craft for generations.</p>

  <h3>2. The Talent of Skilled Artisans</h3>
  <p>Every piece is handwoven with passion, precision, and technique — making each rug as unique as the artisan behind it.</p>

  <h3>3. The Warmth of Handcrafted Beauty</h3>
  <p>Handmade rugs radiate a warmth and personality that machine-made products can never achieve.</p>

  <h3>4. Pure Natural Fibers</h3>
  <p>No synthetic blends — only pure jute, cotton, and natural fibers that are safe, eco-friendly, and timeless.</p>

  <h3>5. A Brand Trusted Worldwide</h3>
  <p>MKT Rugs is proud to export to 30+ countries, trusted by homes that value authenticity and sustainability.</p>

  <p>Whether you're furnishing a new home or redesigning your living space, an MKT jute rug is a classic, enduring choice — especially for lovers of handwoven rugs online, sustainable rugs, and eco-friendly area rugs.</p>

  <p>Step into a world where craftsmanship meets nature. Discover the magic of MKT Rugs.</p>
  `,
  },
];

// --- BlogPost component ---
export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const numericId = Number(id);

  // Find requested post
  const post = useMemo(
    () => blogs.find((b) => b.id === numericId),
    [numericId]
  );

  useEffect(() => {
    // Scroll to top on mount / id change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [numericId]);

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // reset then fade in, and cleanup the timeout
    setFadeIn(false);
    const t = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(t);
  }, [numericId]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f8f5f2] text-[#3c2f2f] font-body flex items-center justify-center p-6">
        <div className="max-w-xl text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">
            Article not found
          </h2>
          <p className="mb-6 text-[#4a3a3a]/80">
            We couldn't find the article you're looking for. It may have been
            removed or the link is incorrect.
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="px-5 py-3 rounded-full border border-[#c49b63] text-[#c49b63] font-semibold hover:bg-[#c49b63] hover:text-white transition"
            >
              Go Back
            </button>
            <Link
              to="/blog"
              className="px-5 py-3 rounded-full bg-[#c49b63] text-white font-semibold hover:opacity-90 transition"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article
      className="min-h-screen bg-[#f8f5f2] text-[#3c2f2f] font-body"
      style={{ marginTop: "calc(var(--header-h, 0px) * -1)" }}
    >
      <SEOHelmet
        title={post.metaTitle || `${post.title} | MKT Rugs`}
        description={post.metaDescription || post.desc}
        canonical={`https://www.mktrugs.com/blog/${post.id}`}
      />

      {/* Hero image */}
      <header className="relative">
        <div className="relative w-full h-[46vh] sm:h-[52vh] md:h-[60vh] lg:h-[48vh] overflow-hidden bg-gray-100 pt-[calc(var(--header-h,80px))]">
          <img
            src={post.img}
            alt={post.title}
            className={`absolute inset-0 w-full h-full object-cover transform transition-all duration-700 ${fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-105"
              } hover:scale-105`}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          {/* optional subtle overlay for contrast */}
          <div
            aria-hidden
            className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${fadeIn ? "opacity-30" : "opacity-0"
              } bg-gradient-to-b from-transparent to-black/10`}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 relative z-10">
          <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 md:p-10 border border-[#e9ddd1]/40">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 rounded-full bg-[#c49b63] text-white text-xs font-semibold">
                    {post.category}
                  </span>
                  <div className="text-xs text-[#4a3a3a]/60">
                    {post.date} • {post.readTime}
                  </div>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#3c2f2f] leading-tight">
                  {post.title}
                </h1>
                <p className="mt-3 text-sm sm:text-base text-[#4a3a3a]/80">
                  {post.desc}
                </p>
              </div>
              <div className="ml-auto flex items-center gap-3">
                <button
                  onClick={() =>
                    navigator.share &&
                    navigator.share({
                      title: post.title,
                      text: post.desc,
                      url: window.location.href,
                    })
                  }
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e6d9cc] text-[#3c2f2f] hover:bg-[#f3efe9] transition"
                >
                  Share
                </button>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-transparent border border-[#c49b63] text-[#c49b63] hover:bg-[#c49b63] hover:text-white transition"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content area */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="prose prose-sm sm:prose md:prose-lg lg:prose-xl max-w-none text-[#3c2f2f]">
          {/* post.content is HTML string in this example; if you store markdown or blocks adjust accordingly */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Post meta and actions */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-[#4a3a3a]/70">
            Was this article useful?
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-full bg-[#c49b63] text-white font-semibold hover:opacity-90 transition">
              Yes
            </button>
            <button className="px-4 py-2 rounded-full border border-[#c49b63] text-[#c49b63] hover:bg-[#c49b63] hover:text-white transition">
              No
            </button>
          </div>
        </div>

        {/* Next / Previous navigation */}
        <PostNavigation currentId={post.id} />
      </section>
    </article>
  );
}

function PostNavigation({ currentId }) {
  const idx = blogs.findIndex((b) => b.id === currentId);
  const prev = blogs[idx - 1];
  const next = blogs[idx + 1];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          {prev ? (
            <Link
              to={`/blog/${prev.id}`}
              className="group block rounded-lg bg-white p-4 border border-[#e9ddd1]/40 shadow-sm hover:shadow-md transition"
            >
              <div className="text-xs text-[#4a3a3a]/60 mb-2">← Previous</div>
              <div className="font-semibold text-[#3c2f2f] group-hover:text-[#c49b63]">
                {prev.title}
              </div>
            </Link>
          ) : (
            <div className="rounded-lg bg-white p-4 border border-[#e9ddd1]/40 text-[#4a3a3a]/60">
              No previous article
            </div>
          )}
        </div>

        <div className="text-right">
          {next ? (
            <Link
              to={`/blog/${next.id}`}
              className="group inline-block text-right rounded-lg bg-white p-4 border border-[#e9ddd1]/40 shadow-sm hover:shadow-md transition"
            >
              <div className="text-xs text-[#4a3a3a]/60 mb-2">Next →</div>
              <div className="font-semibold text-[#3c2f2f] group-hover:text-[#c49b63]">
                {next.title}
              </div>
            </Link>
          ) : (
            <div className="rounded-lg bg-white p-4 border border-[#e9ddd1]/40 text-[#4a3a3a]/60 inline-block">
              No next article
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
