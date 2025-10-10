// // src/pages/Blog.jsx
// import React from "react";

// const blogs = [
//   {
//     title: "From Jute to Home: The Journey of Sustainable Rugs",
//     date: "Oct 5, 2025",
//     desc: "Discover how raw jute fibers transform into beautiful, sustainable rugs crafted by skilled artisans.",
//     img: "/images/Home_1.jpg",
//   },
//   {
//     title: "5 Ways to Style Jute Rugs in Your Living Room",
//     date: "Sep 20, 2025",
//     desc: "Learn how to incorporate eco-friendly jute rugs into modern home interiors for a warm, natural feel.",
//     img: "/images/Home_2.jpg",
//   },
//   {
//     title: "Meet the Artisans Behind Your Rug",
//     date: "Sep 10, 2025",
//     desc: "A peek into the lives of the talented artisans who bring MKT Rugs to life with their craftsmanship.",
//     img: "/images/Home_3.jpg",
//   },
// ];

// const Blog = () => {
//   return (
//     <div className="min-h-screen bg-[#f8f5f2] text-[#3c2f2f] font-body">
//       {/* Hero Section */}
//       <section
//         className="relative bg-cover bg-center min-h-[40vh] flex items-center justify-center"
//         style={{ backgroundImage: "url('/images/B_3.jpg')" }}
//       >
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative z-10 text-center px-6">
//           <h1 className="text-3xl sm:text-5xl font-heading text-white font-semibold drop-shadow-lg">
//             Our Blog
//           </h1>
//           <p className="mt-3 text-white/90 max-w-2xl mx-auto text-sm sm:text-base">
//             Stories of Craft, Sustainability, and Timeless Rugs
//           </p>
//         </div>
//       </section>

//       {/* Blog Grid */}
//       <section className="max-w-6xl mx-auto py-20 px-6 sm:px-10">
//         <div className="grid md:grid-cols-3 gap-12">
//           {blogs.map((blog, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
//             >
//               <img
//                 src={blog.img}
//                 alt={blog.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-heading font-semibold mb-2">
//                   {blog.title}
//                 </h3>
//                 <p className="text-sm text-[#4a3a3a]/90 mb-4">{blog.desc}</p>
//                 <p className="text-xs text-gray-500 mb-4">{blog.date}</p>
//                 <a
//                   href="/blog-details"
//                   className="text-[#c49b63] font-semibold hover:underline"
//                 >
//                   Read More →
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-[#e9ddd1] py-16 text-center">
//         <h4 className="text-xl sm:text-2xl font-semibold mb-6 text-[#2b1d1d]">
//           Stay Updated on Sustainable Rugs
//         </h4>
//         <a
//           href="/contact"
//           className="inline-block bg-[#c49b63] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#2b1d1d] transition-colors duration-300"
//         >
//           Subscribe Now
//         </a>
//       </section>
//     </div>
//   );
// };

// export default Blog;


// src/pages/Blog.jsx
import React, { useState, useMemo, useCallback } from "react";
import SEOHelmet from "./SEOHelmet";

const blogs = [
  {
    id: 1,
    title: "From Jute to Home: The Journey of Sustainable Rugs",
    date: "Oct 5, 2025",
    desc: "Discover how raw jute fibers transform into beautiful, sustainable rugs crafted by skilled artisans. Learn about our eco-friendly processes and traditional techniques passed down through generations.",
    img: "/images/Home_1.jpg",
    category: "sustainability",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "5 Ways to Style Jute Rugs in Your Living Room",
    date: "Sep 20, 2025",
    desc: "Learn how to incorporate eco-friendly jute rugs into modern home interiors for a warm, natural feel. Expert tips from interior designers on color coordination and placement.",
    img: "/images/Home_2.jpg",
    category: "design",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Meet the Artisans Behind Your Rug",
    date: "Sep 10, 2025",
    desc: "A peek into the lives of the talented artisans who bring MKT Rugs to life with their craftsmanship. Stories of heritage, skill, and passion for natural fiber weaving.",
    img: "/images/Home_3.jpg",
    category: "craftsmanship",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 4,
    title: "The Environmental Impact of Natural Fiber Rugs",
    date: "Aug 30, 2025",
    desc: "Understanding how choosing natural fiber rugs contributes to environmental conservation and supports sustainable manufacturing practices.",
    img: "/images/Eco-Friendly DIY Natural Fiber Rugs for Home.jpg",
    category: "sustainability",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Care and Maintenance: Making Your Jute Rug Last",
    date: "Aug 15, 2025",
    desc: "Essential tips for maintaining your natural fiber rugs to ensure they remain beautiful and durable for years to come.",
    img: "/images/carpet.jpg",
    category: "care",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Traditional Weaving Techniques in Modern Manufacturing",
    date: "Aug 1, 2025",
    desc: "How MKT Rugs combines centuries-old weaving traditions with modern quality standards and production efficiency.",
    img: "/images/flat-lay-monochromatic-assortment-textiles.jpg",
    category: "craftsmanship",
    readTime: "8 min read",
    featured: true,
  },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  // Available categories
  const categories = [
    { id: "all", name: "All Posts", count: blogs.length },
    { id: "sustainability", name: "Sustainability", count: blogs.filter(b => b.category === "sustainability").length },
    { id: "design", name: "Design", count: blogs.filter(b => b.category === "design").length },
    { id: "craftsmanship", name: "Craftsmanship", count: blogs.filter(b => b.category === "craftsmanship").length },
    { id: "care", name: "Care & Maintenance", count: blogs.filter(b => b.category === "care").length },
  ];

  // Filter blogs based on search term and category
  const filteredBlogs = useMemo(() => {
    let filtered = blogs;
    
    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }
    
    // Apply search filter
    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [searchTerm, selectedCategory]);

  // Featured blogs
  const featuredBlogs = useMemo(() => {
    return blogs.filter(blog => blog.featured).slice(0, 3);
  }, []);

  // Handle category change with loading state
  const handleCategoryChange = useCallback((categoryId) => {
    setIsLoading(true);
    setSelectedCategory(categoryId);
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  // Clear search
  const clearSearch = useCallback(() => {
    setSearchTerm("");
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#3c2f2f] font-body">
      <SEOHelmet
        title="Insights on Natural Fibre Rugs | MKT Rugs"
        description="Read insights on natural fibre rugs, sustainability, and artisan craftsmanship from MKT Rugs."
        canonical="https://www.mktrugs.com/blog"
      />
      {/* Hero Section */}
      <div style={{ marginTop: 'calc(-1 * var(--header-height, 80px))' }}>
        <section className="relative bg-gradient-to-br from-[#f8f5f2] via-[#f5f1eb] to-[#f0ebe2] py-16 sm:py-24 px-4 sm:px-6" style={{ paddingTop: 'calc(var(--header-height, 80px) + 4rem)' }}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#c49b63]/10 border border-[#c49b63]/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-[#c49b63] tracking-wide uppercase">
              Blog & Insights
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#3c2f2f] mb-6 leading-tight">
            Stories of Craft &
            <span className="text-[#c49b63]"> Sustainability</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-[#4a3a3a]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            From artisan craftsmanship to sustainable design — explore our latest insights and inspirations from the world of natural fiber rugs.
          </p>

          {/* Search Bar */}
          <div className="max-w-lg mx-auto mb-8">
            <div className="relative flex items-center bg-white rounded-full shadow-md border border-[#d6c6b8]/30 overflow-hidden">
              <div className="absolute left-4 text-[#4a3a3a]/50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 pl-12 pr-4 py-4 bg-transparent focus:outline-none text-[#3c2f2f] placeholder-[#4a3a3a]/50"
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="px-4 py-2 text-[#4a3a3a]/60 hover:text-[#c49b63] transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                disabled={isLoading}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  selectedCategory === category.id
                    ? 'bg-[#c49b63] text-white shadow-lg transform scale-105'
                    : 'bg-white text-[#4a3a3a] border border-[#d6c6b8]/50 hover:border-[#c49b63]/50 hover:bg-[#c49b63]/5 hover:scale-105 shadow-sm'
                }`}
              >
                {isLoading && selectedCategory === category.id ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    <span>{category.name}</span>
                  </div>
                ) : (
                  <span>
                    {category.name} 
                    <span className="ml-1 text-xs opacity-60">({category.count})</span>
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
        </section>
      </div>

      {/* Featured Posts Section */}
      {featuredBlogs.length > 0 && selectedCategory === "all" && !searchTerm && (
        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#3c2f2f] mb-4">
                Featured Articles
              </h2>
              <p className="text-base sm:text-lg text-[#4a3a3a]/70 max-w-2xl mx-auto">
                Our most popular and insightful content, handpicked for you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#e9ddd1]/50 hover:border-[#c49b63]/30 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#c49b63] text-white text-xs font-semibold rounded-full capitalize">
                        {blog.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-black/60 text-white text-xs rounded-full backdrop-blur-sm">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-[#4a3a3a]/60 mb-3">
                      <time>{blog.date}</time>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold text-[#3c2f2f] mb-3 group-hover:text-[#c49b63] transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    <p className="text-[#4a3a3a]/80 mb-4 line-clamp-3 leading-relaxed">
                      {blog.desc}
                    </p>
                    
                    <a
                      href={`/blog/${blog.id}`}
                      className="inline-flex items-center gap-2 text-[#c49b63] font-semibold hover:text-[#2b1d1d] transition-colors group"
                    >
                      <span>Read More</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Blog Section */}
      <section className="bg-[#f8f5f2] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#3c2f2f] mb-2">
                {searchTerm ? `Search Results for "${searchTerm}"` : 
                 selectedCategory === "all" ? "All Articles" : 
                 categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-[#4a3a3a]/70">
                {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'} found
              </p>
            </div>
            
            {/* Sort options could go here */}
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center py-20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-4 border-[#c49b63]/30 border-t-[#c49b63] rounded-full animate-spin"></div>
                <span className="text-[#4a3a3a] font-medium">Loading articles...</span>
              </div>
            </div>
          )}

          {/* Blog Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#e9ddd1]/30 hover:border-[#c49b63]/30"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#3c2f2f] text-xs font-semibold rounded-full capitalize border border-white/50">
                        {blog.category}
                      </span>
                    </div>
                    {blog.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-2 py-1 bg-[#c49b63] text-white text-xs rounded-full">
                          ★ Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-[#4a3a3a]/60 mb-3">
                      <time>{blog.date}</time>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-heading font-semibold text-[#3c2f2f] mb-3 group-hover:text-[#c49b63] transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    <p className="text-[#4a3a3a]/80 mb-4 line-clamp-3 text-sm sm:text-base leading-relaxed">
                      {blog.desc}
                    </p>
                    
                    <a
                      href={`/blog/${blog.id}`}
                      className="inline-flex items-center gap-2 text-[#c49b63] font-semibold hover:text-[#2b1d1d] transition-colors text-sm group"
                    >
                      <span>Read Article</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))
            ) : (
              !isLoading && (
                <div className="col-span-full text-center py-20">
                  <div className="w-24 h-24 mx-auto mb-6 text-[#4a3a3a]/30">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364-.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#3c2f2f] mb-3">No articles found</h3>
                  <p className="text-[#4a3a3a]/70 mb-6">
                    {searchTerm 
                      ? `No articles match your search for "${searchTerm}". Try different keywords or browse all categories.`
                      : `No articles found in the ${categories.find(c => c.id === selectedCategory)?.name} category.`
                    }
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    {searchTerm && (
                      <button
                        onClick={clearSearch}
                        className="px-6 py-3 bg-[#c49b63] text-white rounded-full hover:bg-[#2b1d1d] transition-colors font-semibold"
                      >
                        Clear Search
                      </button>
                    )}
                    <button
                      onClick={() => handleCategoryChange("all")}
                      className="px-6 py-3 border border-[#c49b63] text-[#c49b63] rounded-full hover:bg-[#c49b63] hover:text-white transition-colors font-semibold"
                    >
                      View All Articles
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="relative bg-gradient-to-r from-[#c49b63] via-[#b8925a] to-[#c49b63] py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <svg className="w-16 h-16 mx-auto text-white/80 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Stay Updated on Natural Fiber Trends
          </h3>
          
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get the latest insights on sustainable rugs, craftsmanship techniques, and design trends delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#c49b63] rounded-full font-bold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Subscribe Now
            </a>
            <a
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-bold hover:bg-white hover:text-[#c49b63] transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
              Explore Products
            </a>
          </div>
          
          <p className="text-white/60 text-sm mt-6">
            Join 1,000+ readers who receive our monthly newsletter
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;

