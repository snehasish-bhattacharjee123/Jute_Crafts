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
import React, { useState } from "react";
import SEOHelmet from "./SEOHelmet";

const blogs = [
  {
    title: "From Jute to Home: The Journey of Sustainable Rugs",
    date: "Oct 5, 2025",
    desc: "Discover how raw jute fibers transform into beautiful, sustainable rugs crafted by skilled artisans.",
    img: "/images/Home_1.jpg",
  },
  {
    title: "5 Ways to Style Jute Rugs in Your Living Room",
    date: "Sep 20, 2025",
    desc: "Learn how to incorporate eco-friendly jute rugs into modern home interiors for a warm, natural feel.",
    img: "/images/Home_2.jpg",
  },
  {
    title: "Meet the Artisans Behind Your Rug",
    date: "Sep 10, 2025",
    desc: "A peek into the lives of the talented artisans who bring MKT Rugs to life with their craftsmanship.",
    img: "/images/Home_3.jpg",
  },
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter blogs based on title or description
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#3c2f2f] font-body">
      <SEOHelmet
        title="Insights on Natural Fibre Rugs | MKT Rugs"
        description="Read insights on natural fibre rugs, sustainability, and artisan craftsmanship from MKT Rugs."
        canonical="https://www.mktrugs.com/blog"
      />
      {/* Hero Section */}
      <section className="text-center py-20 px-6 border-b border-[#e9ddd1]">
        <h1 className="text-3xl sm:text-5xl font-heading font-semibold mb-4">
          Discover Our Latest Stories
        </h1>
        <p className="text-sm sm:text-base text-[#4a3a3a]/90 max-w-2xl mx-auto mb-8">
          From artisan craftsmanship to sustainable design — explore our latest insights and inspirations.
        </p>
        <div className="flex justify-center max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-3 border border-[#d6c6b8] rounded-l-full focus:outline-none text-sm"
          />
          <button
            onClick={() => setSearchTerm("")}
            className="bg-[#c49b63] text-white px-6 py-3 rounded-r-full hover:bg-[#2b1d1d] transition"
          >
            Clear
          </button>
        </div>
      </section>

      {/* Blog Layout */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-4 gap-10">
        {/* Main Blog Cards */}
        <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-heading font-semibold mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-[#4a3a3a]/90 mb-3">{blog.desc}</p>
                  <p className="text-xs text-gray-500 mb-3">{blog.date}</p>
                  <a
                    href="/blog"
                    className="text-[#c49b63] font-semibold hover:underline text-sm"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 text-sm">
              No blog posts found.
            </p>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-10">
          <div>
            <h4 className="text-lg font-semibold border-b border-[#d6c6b8] pb-2 mb-4">
              Featured
            </h4>
            <div className="space-y-4">
              {filteredBlogs.map((item, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-xs text-gray-500">{item.date}</p>
                    <a
                      href="/blog"
                      className="text-sm font-semibold hover:underline"
                    >
                      {item.title}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold border-b border-[#d6c6b8] pb-2 mb-4">
              Latest
            </h4>
            <div className="space-y-4">
              {[...filteredBlogs].reverse().map((item, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-xs text-gray-500">{item.date}</p>
                    <a
                      href="/blog"
                      className="text-sm font-semibold hover:underline"
                    >
                      {item.title}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      {/* CTA Section */}
      <section className="bg-[#e9ddd1] py-16 text-center">
        <h4 className="text-xl sm:text-2xl font-semibold mb-6 text-[#2b1d1d]">
          Stay Updated on Sustainable Rugs
        </h4>
        <a
          href="/contact"
          className="inline-block bg-[#c49b63] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#2b1d1d] transition-colors duration-300"
        >
          Subscribe Now
        </a>
      </section>
    </div>
  );
};

export default Blog;

