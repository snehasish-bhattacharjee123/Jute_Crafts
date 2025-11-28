import React, { useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import SEOHelmet from "./SEOHelmet";

// --- Sample blog data (you can move this to a separate module e.g. BlogData.js) ---
const blogs = [
  {
    id: 1,
    title: "From Jute to Home: The Journey of Sustainable Rugs",
    date: "Oct 5, 2025",
    desc: "Discover how raw jute fibers transform into beautiful, sustainable rugs crafted by skilled artisans. Learn about our eco-friendly processes and traditional techniques passed down through generations.",
    img: "/images/Costal wave collection (1).jpg",
    category: "sustainability",
    readTime: "5 min read",
    featured: true,
    content: `
      <p>Jute is one of the most sustainable natural fibres available — renewable, biodegradable, and low-impact to grow. At MKT Rugs we source jute from responsibly-managed farms and combine traditional hand-weaving techniques with careful quality checks to create durable, beautiful rugs.</p>

      <p>The production process begins at the farm where jute stalks are harvested and retted to separate the fibres. Skilled artisans then spin, dye (when required), and weave these fibres into rugs. The artisanal touch not only creates unique textures and patterns but also helps local communities maintain traditional livelihoods.</p>

      <h3>Why choose jute?</h3>
      <p>Jute requires very little fertiliser and grows quickly. Its low environmental footprint, combined with its natural aesthetic and durability, makes jute rugs an excellent choice for conscious consumers.</p>

      <p><strong>Care tips:</strong> Avoid excessive moisture, vacuum regularly with low suction, and rotate the rug to even out wear.</p>
    `,
  },

  {
    id: 2,
    title: "5 Ways to Style Jute Rugs in Your Living Room",
    date: "Sep 20, 2025",
    desc: "Learn how to incorporate eco-friendly jute rugs into modern home interiors for a warm, natural feel. Expert tips from interior designers on color coordination and placement.",
    img: "/images/Home_3.jpg",
    category: "design",
    readTime: "4 min read",
    featured: false,
    content: `
      <p>Jute rugs can anchor a seating area, add texture under dining tables, or be layered with smaller patterned rugs. Try pairing them with plush textiles and metal accents for a modern-eclectic look.</p>
    `,
  },

  {
    id: 3,
    title: "Meet the Artisans Behind Your Rug",
    date: "Sep 10, 2025",
    desc: "A peek into the lives of the talented artisans who bring MKT Rugs to life with their craftsmanship. Stories of heritage, skill, and passion for natural fiber weaving.",
    img: "/images/flat-lay-monochromatic-assortment-textiles.jpg",
    category: "craftsmanship",
    readTime: "6 min read",
    featured: true,
    content: `
      <p>Each rug has a story — of the weaver who chose the yarn, the village where the design originated, and the techniques passed down through generations. These stories are at the heart of sustainable design.</p>
    `,
  },

  /* -----------------------------------------------
     NEW LONG-FORM ARTICLE INSERTED BELOW
  ----------------------------------------------- */

  {
    id: 7,
    title: "Jute Rugs' Classic Beauty: An Easy Option for Contemporary Homes",
    date: "Dec 2025",
    desc: "Discover why jute rugs are a timeless décor essential, and how MKT Rugs preserves Bengal’s weaving heritage through premium handcrafted natural rugs.",
    img: "/images/jute-living-room.jpg",
    category: "sustainability",
    readTime: "10 min read",
    featured: true,
    content: `
      <h2>Jute Rugs' Classic Beauty: An Easy Option for Contemporary Homes</h2>
      <p><strong>By MKT RUGS: Indian West Bengal Handmade Rugs</strong></p>

      <p>The jute rug is one piece of décor that has genuinely endured over time. Jute rugs, which are popular in the USA, Germany, Europe, Japan, and are currently on a fast global trend, are the "secret ingredient" used by interior designers to infuse a space with sustainability, beauty, and soul. These jute rugs also stand as sustainable rugs, perfect for homes wanting both elegance and environmental responsibility.</p>

      <p>Although a lot of companies sell jute rugs, what really makes MKT RUGS unique is where we're from — the center of West Bengal — where weaving is more than just a craft. It's a culture, a legacy, a tradition that is still going strong. Our eco-friendly area rugs and globally loved craftsmanship reflect this heritage.</p>

      <p>Every jute rug at MKT Rugs is more than interior décor:</p>
      <ul>
        <li>✨ Nature transformed into art</li>
        <li>✨ Your home woven with heritage</li>
      </ul>

      <p>Our rugs beautifully complement modern interiors seeking boho jute rug tones and warm, natural aesthetics.</p>

      <hr />

      <h3>1. Why Jute Rugs Are the Most Important Part of Modern Decor</h3>
      <p>Interior designers all over the world call jute rugs "the perfect foundation piece." Here’s why:</p>

      <ul>
        <li><strong>Naturally Beautiful:</strong> Earthy, golden textures make any space warm and harmonious.</li>
        <li><strong>Eco-Friendly & Sustainable:</strong> No chemicals, no waste, low environmental footprint — ideal for conscious homes.</li>
        <li><strong>Versatile:</strong> Perfect for dining areas, bedrooms, living rooms, patios.</li>
        <li><strong>Durable & Long-Lasting:</strong> Strong natural fibers withstand daily use.</li>
      </ul>

      <p>Jute enhances a home rather than decorating it — making it one of the most loved handwoven rugs online.</p>

      <hr />

      <h3>2. MKT Rugs: A Blend of Modern Craft and Tradition</h3>
      <p>MKT Rugs focuses on something rare:</p>
      <p><strong>Genuineness. Artistry. Human Touch.</strong></p>

      <p>Our artisans from West Bengal — a region renowned globally for weaving mastery — create each rug by hand. They don’t just weave patterns. They weave stories, skills, and emotions.</p>

      <p>Factory-made rugs cannot replicate the warmth, character, or soul of an MKT rug.</p>

      <hr />

      <h3>3. Created by Artists, Treasured All Over the World</h3>
      <p>We use only natural golden jute sourced directly from Bengal farmers.</p>

      <p>The process:</p>
      <p><strong>Harvesting → Drying → Fiber Processing → Spinning → Dyeing → Weaving → Finishing</strong></p>

      <p>Each step is done by hand, ensuring unmatched quality.</p>

      <p>MKT Rugs are exported to over 30 countries including the USA, Germany, Japan, France, Netherlands, Australia, and UAE.</p>

      <hr />

      <h3>4. MKT Rugs vs Other Brands: What Makes Us Better?</h3>
      <ul>
        <li>⭐ Genuine handcrafts, not machine-made production</li>
        <li>⭐ Pure natural fibers — jute, cotton, sisal</li>
        <li>⭐ Direct-from-maker → better pricing + better value</li>
        <li>⭐ International trend-based designs: braided, round, woven, embroidered</li>
        <li>⭐ Deep cultural heritage that brands cannot replicate</li>
      </ul>

      <hr />

      <h3>5. Why Jute Rugs Are Ideal for Your Home</h3>
      <ul>
        <li>✔ Add warmth & comfort</li>
        <li>✔ Fit all interior styles: boho, modern, rustic, minimal</li>
        <li>✔ Easy maintenance</li>
        <li>✔ Pet-friendly</li>
        <li>✔ Long-lasting & strong</li>
        <li>✔ Affordable luxury</li>
      </ul>

      <p>Only natural fiber carpets offer this level of beauty + longevity.</p>

      <hr />

      <h3>6. Select MKT Rugs: Bring a Bit of Bengal Home</h3>
      <p>You get more than a rug when you choose MKT:</p>

      <ul>
        <li>✔ The soul of Bengal</li>
        <li>✔ Artisan expertise</li>
        <li>✔ Handcrafted warmth</li>
        <li>✔ Pure natural fibers</li>
        <li>✔ A trusted global export brand</li>
      </ul>

      <p>An MKT rug is a timeless investment — especially if you value authenticity and sustainability.</p>

      <p><strong>Explore a world where craftsmanship and nature come together. Discover MKT Rugs.</strong></p>
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
    <article className="min-h-screen bg-[#f8f5f2] text-[#3c2f2f] font-body">
      <SEOHelmet
        title={`${post.title} | MKT Rugs`}
        description={post.desc}
        canonical={`/blog/${post.id}`}
      />

      {/* Hero image */}
      <header className="relative">
        <div className="w-full h-[46vh] sm:h-[52vh] md:h-[60vh] lg:h-[48vh] overflow-hidden bg-gray-100">
          <img
            src={post.img}
            alt={post.title}
            className="w-full h-full object-cover transform transition-transform duration-700 scale-100 hover:scale-105"
            loading="eager"
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
