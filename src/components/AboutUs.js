import React, { useState, useEffect } from "react";
import SEOHelmet from "./SEOHelmet";
import Button from "./Button";


//swiper 


function CertificatesGrid() {
  const certs = [
    {
      src: "/images/Home_1.jpg",
      alt: "ISO 9001:2015",
      desc: "Quality Management System (ISO 9001:2015) certified units.",
      pdf: "/images/page3.pdf", // 🔹 Add your PDF path here
    },
    {
      src: "/images/Home_2.jpg",
      alt: "CEPC Logo",
      desc: "Recognized by the Carpet Export Promotion Council (CEPC).",
      pdf: "/images/page3.pdf", // 🔹 Add your PDF path here
    },
  ];

  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(null);

  const onOpen = (c) => {
    setActive(c);
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    setActive(null);
  };

   return (
    <>
      {/* Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center">
        {certs.map((c, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onOpen(c)}
            className="border border-gold/40 bg-white rounded-md p-4 text-center shadow-sm h-28 flex items-center justify-center hover:shadow-md hover:scale-[1.03] transition"
            aria-label={`Open ${c.alt} certificate`}
          >
            <img
              src={c.src}
              alt={`${c.alt} certificate`}
              className="max-h-16 w-auto object-contain"
            />
          </button>
        ))}
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-lg font-heading text-textDark">
                {active?.alt}
              </h3>
              <button
                onClick={onClose}
                aria-label="Close"
                className="p-1 rounded hover:bg-gray-100"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-4 grid gap-3">
              <img
                src={active?.src}
                alt={`${active?.alt} large`}
                className="w-full h-48 object-contain"
              />
              <p className="text-sm text-textDark/80 font-body text-center">
                {active?.desc}
              </p>
            </div>

            {/* Footer */}
            <div className="p-4 border-t flex justify-between">
              {active?.pdf && (
                <a
                  href={active.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-gold text-white font-medium hover:bg-gold/90 transition"
                >
                  Open Certificate
                </a>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2 rounded bg-secondary text-white font-medium hover:bg-secondary/90 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "/images/PRODUCTS_1.jpg",
    "/images/PRODUCTS_2.jpg",
    "/images/PRODUCTS_3.jpg",
    "/images/PRODUCTS_4.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt="Craftsmanship showcase"
            className="object-cover w-full h-full"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/25 to-secondary/60"></div>

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-textLight">
            Witness the Craftsmanship of Bengal
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-textLight/90 font-body">
            From Farm to Floor — Authentic handcrafted rugs from West Bengal
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <a
          href="#story"
          className="inline-flex items-center text-textLight/80 hover:text-textLight transition"
        >
          <span className="mr-2 text-xs tracking-widest uppercase">Scroll</span>
          <svg
            className="w-5 h-5 animate-bounce"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-center mb-2 sm:mb-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 mx-1 rounded-full ring-1 ring-white/30 ${
              index === activeIndex ? "bg-gold" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

function AboutUs() {
  
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const milestones = [
    {
      year: "2008",
      text: "Our journey began as Maa Kali Traders, a small yarn-making company with 10 Ton Monthly Capacity",
      img: "/images/download.jpg",
      side: "left",
    },
    {
      year: "2011",
      text: "Monthly Hand-made Yarn making Capacity increased beyond 50 Ton Monthly",
      img: "/images/download (3).jpg",
      side: "right",
    },
    {
      year: "2016",
      text: "We built 2 company godowns",
      img: "/images/Jute Boucle Rug.jpg",
      side: "left",
    },
    {
      year: "2017",
      text: "We evolved into an integrated carpet manufacturing company",
      img: "/images/carpet.jpg",
      side: "right",
    },
    {
      year: "2019",
      text: "Installed 10,000 square metre capacity Stitching Machines for Bulk Production",
      img: "/images/flat-lay-monochromatic-assortment-textiles.jpg",
      side: "left",
    },
    {
      year: "2022",
      text: "Monthly Hand-made Yarn making capacity exceeded 100 Metric Tons",
      img: "/images/Naturals Basket.jpg",
      side: "right",
    },
    {
      year: "2024",
      text: "MKT Rugs was established, specializing in B2B export operations from Gopalnagar, West Bengal, India",
      img: "/images/Beige Contemporary Polka Dotted Handwoven Rectangular Luxury Rugs - 250 cm x 350 cm.jpg",
      side: "left",
    },
  ];
  const [lastVisible, setLastVisible] = React.useState(-1);
  const [percent, setPercent] = React.useState(0); // 0..100 continuous progress
  const itemRefs = React.useRef([]);

  useEffect(() => {
    let ticking = false;
    const compute = () => {
      ticking = false;
      const viewCenter = window.scrollY + window.innerHeight * 0.5; // abs Y

      const centers = itemRefs.current.map((el) => {
        if (!el) return Infinity;
        const rect = el.getBoundingClientRect();
        return window.scrollY + rect.top + rect.height / 2;
      });
      const total = centers.length;
      if (!total) {
        setPercent(0);
        setLastVisible(-1);
        return;
      }
      const baseIdx = 0;

      let maxIdx = baseIdx;
      centers.forEach((c, idx) => {
        if (c <= viewCenter) maxIdx = Math.max(maxIdx, idx);
      });
      setLastVisible(maxIdx);

      const baseline = ((baseIdx + 1) / total) * 100;
      const last = total - 1;
      if (viewCenter <= centers[baseIdx]) {
        setPercent(baseline);
        return;
      }
      if (viewCenter >= centers[last]) {
        setPercent(100);
        return;
      }

      let i = baseIdx;
      for (let k = baseIdx; k < last; k++) {
        if (viewCenter >= centers[k] && viewCenter <= centers[k + 1]) {
          i = k;
          break;
        }
      }
      const a = centers[i];
      const b = centers[i + 1];
      const t = b === a ? 0 : (viewCenter - a) / (b - a);
      const p = ((i + t + 1) / total) * 100;
      setPercent(Math.max(baseline, Math.min(100, p)));
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(compute);
        ticking = true;
      }
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-bgGrey">
      <SEOHelmet
        title="About MKT Rugs — From Farm to Floor | MKT Rugs"
        description="Learn about MKT Rugs: authentic handcrafted rugs from West Bengal, integrated production, and sustainable natural fibres."
        canonical="https://www.mktrugs.com/about"
      />
      {/* Hero Slider */}
      <HeroSlider />

      <section id="story" className="py-16 bg-bgGrey reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-heading font-semibold text-textDark mb-6">
                Our History
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-gold pl-6">
                  <h3 className="text-xl font-heading text-textDark mb-2">
                    2008
                  </h3>
                  <p className="text-textDark/90 font-body">
                    Our journey began as Maa Kali Traders, a yarn-making company
                    with 10 Ton Monthly Capacity.
                  </p>
                </div>
                <div className="border-l-4 border-gold pl-6">
                  <h3 className="text-xl font-heading text-textDark mb-2">
                    2017
                  </h3>
                  <p className="text-textDark/90 font-body">
                    We evolved into an integrated carpet manufacturing company.
                  </p>
                </div>
                <div className="border-l-4 border-gold pl-6">
                  <h3 className="text-xl font-heading text-textDark mb-2">
                    2024
                  </h3>
                  <p className="text-textDark/90 font-body">
                    MKT Rugs was established, specializing in B2B export
                    operations from Gopalnagar, West Bengal, India.
                  </p>
                </div>
                <div className="pt-2">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="/enquiry" className="inline-flex">
                      <Button variant="gold">Request a Quote</Button>
                    </a>
                    {/* <a href="/products" className="inline-flex">
                      <Button variant="secondary">Shop Our Collection</Button>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/Naturals Basket.jpg"
                alt="Traditional jute weaving"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Gallery removed per request */}

      <section className="py-16 bg-white reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textDark">
              Milestones on the Global Loom
            </h2>
            <p className="text-textDark/70 font-body mt-2">
              From a single loom in Howrah to five continents — FROM FARM TO
              FLOOR
            </p>
            <div className="mx-auto mt-3 w-24 h-1 bg-gold"></div>
          </div>

          {/* Timeline container */}
          <div className="relative">
            <div className="hidden md:flex justify-center pointer-events-none absolute inset-0 z-10">
              <div className="relative w-1 h-full">
                <div
                  className="absolute inset-0 bg-primary/15"
                  aria-hidden="true"
                ></div>
                <div
                  className="absolute top-0 left-0 w-full transition-[height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] bg-gradient-to-b from-gold via-primary to-primary"
                  style={{ height: `${percent}%` }}
                  aria-hidden="true"
                ></div>
                <div
                  className="absolute -ml-[10px] w-6 h-6 rounded-full ring-4 ring-white/50"
                  style={{
                    top: `calc(${percent}% - 12px)`,
                    boxShadow: "0 0 24px 8px rgba(17,96,84,0.35)",
                    background: "#116054",
                  }}
                  aria-hidden="true"
                ></div>
              </div>
            </div>

            <div className="space-y-12">
              {milestones.map((m, idx) => {
                const inView = idx <= lastVisible || idx < 2;
                const isLeft = m.side === "left";
                const imgEnter = isLeft ? "-translate-x-12" : "translate-x-12";

                const delays = [
                  "delay-0",
                  "delay-100",
                  "delay-200",
                  "delay-300",
                  "delay-500",
                ];
                const delayClass = delays[idx % delays.length];
                return (
                  <div
                    key={idx}
                    data-index={idx}
                    ref={(el) => (itemRefs.current[idx] = el)}
                    className="grid md:grid-cols-2 gap-8 items-center"
                  >
                    <div
                      className={
                        (isLeft ? "" : "md:order-2") +
                        " transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] " +
                        delayClass +
                        " " +
                        (inView
                          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
                          : `opacity-0 translate-y-8 scale-95 ${imgEnter}`)
                      }
                    >
                      <figure>
                        <img
                          src={m.img}
                          alt={m.text}
                          className="w-full h-64 object-cover object-top rounded-lg shadow hover:scale-105 hover:shadow-lg transition-transform duration-500 will-change-transform"
                        />
                        <figcaption className="mt-3 font-body text-sm sm:text-base text-textDark bg-white/90 backdrop-blur rounded-md px-3 py-2 shadow-sm border border-gray-100">
                          {m.text}
                        </figcaption>
                      </figure>
                    </div>

                    <div
                      className={
                        (isLeft ? "md:order-2" : "") +
                        " transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] " +
                        delayClass +
                        " " +
                        (inView
                          ? "opacity-100 translate-x-0 translate-y-0"
                          : "opacity-0 translate-y-8")
                      }
                    >
                      <div className="bg-bgGrey border border-gray-100 rounded-lg p-5 shadow-sm">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-gold"></span>
                          <div className="text-textDark font-heading font-semibold">
                            {m.year}
                          </div>
                        </div>
                        <div className="text-textDark/90 font-body mt-2">
                          Key milestone in our journey.
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bgLight reveal">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textDark mb-4">
        Our Values
      </h2>
      <p className="text-lg text-textDark max-w-2xl mx-auto leading-relaxed font-body">
        Quality is at the heart of everything we do.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
      {/* 1️⃣ Quality */}
      <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-md mx-auto">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-textLight"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-textDark mb-4 font-heading">
          Quality
        </h3>
        <p className="text-textDark font-body text-lg leading-relaxed">
          Every product undergoes a 5-step quality control process to ensure
          the highest standards of excellence.
        </p>
      </div>

      {/* 2️⃣ Sustainability */}
      <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-md mx-auto">
        <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 1.343-3 3 0 2 3 5 3 5s3-3 3-5c0-1.657-1.343-3-3-3zM12 4v1m0 14v1m8-8h1M4 12H3m15.364 6.364l.707.707M6.343 6.343l-.707-.707m12.728 0l.707-.707M6.343 17.657l-.707.707"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-textDark mb-4 font-heading">
          Sustainability
        </h3>
        <p className="text-textDark font-body text-lg leading-relaxed">
          We prioritize eco-friendly materials and responsible production to
          protect our planet for future generations.
        </p>
      </div>

      {/* 3️⃣ Craftsmanship */}
      <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-md mx-auto">
        <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-textDark mb-4 font-heading">
          Craftsmanship
        </h3>
        <p className="text-textDark font-body text-lg leading-relaxed">
          Our skilled artisans blend traditional weaving with modern design
          precision to create timeless, high-quality rugs.
        </p>
      </div>
    </div>
  </div>
</section>


      <section className="py-20 bg-bgGrey reveal">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textDark mb-4">
          Our Facilities
        </h2>
        <div className="w-24 h-1 bg-gold mb-8"></div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          {[
            { value: "150 MT", label: "Monthly Yarn Manufacturing Capacity" },
            { value: "20,000+", label: "Monthly Carpet Making Capacity (sqm)" },
            { value: "6", label: "Owned Manufacturing Facilities" },
            {
              value: "✓",
              label:
                "Integrated Facility – From Raw Fibre Processing to Carpet Manufacturing",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl font-heading text-secondary mb-2">
                {item.value}
              </div>
              <div className="text-sm text-textDark/80 font-body leading-relaxed">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <CertificatesGrid />
      </div>

      {/* Right Image */}
      <div className="flex justify-center items-center">
        <div className="relative">
          <div className="absolute inset-0 -translate-x-4 -translate-y-4 bg-gold/10 rounded-2xl blur-md"></div>
          <img
            src="/images/flat-lay-monochromatic-assortment-textiles.jpg"
            alt="Craftsmanship and facilities"
            className="relative rounded-2xl w-full h-96 object-cover shadow-xl border border-white"
          />
        </div>
      </div>
    </div>
  </div>
</section>


      {false && (
        <section className="py-16 bg-white reveal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textDark">
                Milestones on the Global Loom
              </h2>
              <div className="mx-auto mt-3 w-24 h-1 bg-gold"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-bgGrey rounded-lg p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-textDark mb-3">
                  Our footprint
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-textDark/90 font-body">
                  <li>
                    Supplying to global exporters, retailers and wholesalers.
                  </li>
                  <li>
                    11 facilities over 1.3M sq. ft. with certified social &
                    environmental compliance.
                  </li>
                  <li>End-to-end quality systems aligned to ISO 9001.</li>
                </ul>
              </div>
              <div className="bg-bgGrey rounded-lg p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-textDark mb-3">
                  Brands we serve
                </h3>
                <p className="text-textDark/90 font-body mb-3">
                  MKT Rugs today caters to many global exporters like:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm font-body">
                  {[
                    "The Home Depot",
                    "Walmart",
                    "Costco",
                    "Bed Bath & Beyond",
                    "Sam’s Club",
                    "Crate & Barrel",
                    "Pottery Barn",
                    "Target",
                    "Kohls",
                    "B&Q",
                    "Aldi",
                    "Lidi",
                  ].map((b) => (
                    <div
                      key={b}
                      className="bg-white border rounded px-3 py-2 text-textDark"
                    >
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-bgGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textDark mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-textDark max-w-2xl mx-auto leading-relaxed font-body">
              The passionate individuals behind our success, dedicated to
              preserving tradition while embracing the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-48 h-48 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-textDark mb-2 font-heading">
                Rahul Sarder
              </h3>
              <p className="text-secondary font-medium mb-2">CEO</p>
              <p className="text-textDark font-body">
                Leading MKT Rugs with vision and dedication to excellence.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 bg-secondary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-textDark mb-2 font-heading">
                Dattatreyo Paul
              </h3>
              <p className="text-secondary font-medium mb-2">
                Global Trade Manager
              </p>
              <p className="text-textDark font-body">
                Managing global trade operations and international partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textLight mb-4">
            Join Our Journey
          </h2>
          <p className="text-lg sm:text-xl text-textLight mb-8 leading-relaxed">
            Experience the beauty of natural fibres — FROM FARM TO FLOOR.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/enquiry" className="inline-flex"><Button variant="gold">Request a Quote</Button></a>
            <a href="/products" className="inline-flex"><Button variant="secondary" className="border-gold text-textLight">Shop Our Collection</Button></a>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default AboutUs;
