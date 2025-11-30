import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import SEOHelmet from "./SEOHelmet";

// --- Sample blog data (you can move this to a separate module e.g. BlogData.js) ---
export const blogs = [
  {
    id: 1,
    title: "Why Jute Rugs Are the Most Important for Modern Decor",
    date: "Oct 5, 2025",
    desc: "Discover how raw jute fibers transform into sustainable, beautiful rugs crafted by artisans.",
    img: "/images/blogpost1.jpg",
    category: "sustainability",
    readTime: "5 min read",
    featured: true,
    content: `
      <p>Discover how raw jute fibers transform into sustainable, beautiful rugs crafted by skilled artisans.</p>
    `,
  },

  {
    id: 2,
    title: "5 Ways to Style Jute Rugs in Your Living Room",
    date: "Sep 20, 2025",
    desc: "Learn how to incorporate jute rugs into modern interiors using designer-approved styling tips.",
    img: "/images/blogpost2.jpg",
    category: "design",
    readTime: "4 min read",
    featured: false,
    content: `
      <p>Jute rugs can anchor a space, add warmth, and modern texture to your living room.</p>
    `,
  },

  {
    id: 3,
    title: "Meet the Artisans Behind Your Rug",
    date: "Sep 10, 2025",
    desc: "A peek into the lives of the artisans who bring MKT Rugs to life with their craftsmanship.",
    img: "/images/blogpost3.jpg",
    category: "craftsmanship",
    readTime: "6 min read",
    featured: true,
    content: `
      <p>Every rug is woven by hands that carry generations of tradition.</p>
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
    <article className="min-h-screen bg-[#f8f5f2] text-[#3c2f2f] font-body">
      <SEOHelmet
        title={`${post.title} | MKT Rugs`}
        description={post.desc}
        canonical={`/blog/${post.id}`}
      />

      {/* Hero image */}
      <header className="relative">
        <div className="relative w-full h-[46vh] sm:h-[52vh] md:h-[60vh] lg:h-[48vh] overflow-hidden bg-gray-100">
          <img
            src={post.img}
            alt={post.title}
            className={`absolute inset-0 w-full h-full object-cover transform transition-all duration-700 ${
              fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-105"
            } hover:scale-105`}
            loading="eager"
          />
          {/* optional subtle overlay for contrast */}
          <div
            aria-hidden
            className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
              fadeIn ? "opacity-30" : "opacity-0"
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
