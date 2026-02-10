

import React, { Suspense, lazy, useEffect, useState } from "react";
import SEOHelmet from "./components/SEOHelmet";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import BackToTop from "./components/BackToTop";
import emailjs from "@emailjs/browser";
import TermsConditions from "./components/TermsConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundPolicy from "./components/RefundPolicy";
import ShippingPolicy from "./components/ShippingPolicy";
import BlogPost from "./components/BlogPost";
import { LoadingOverlay, InlineLoading } from "./components/LoadingSpinner";

const AboutUs = lazy(() => import("./components/AboutUs"));
const Gallery = lazy(() => import("./components/Gallery"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Product = lazy(() => import("./components/Product"));
const Card = lazy(() => import("./components/Card"));
const Button = lazy(() => import("./components/Button"));
const Blog = lazy(() => import("./components/Blog"));
const WhyUs = lazy(() => import("./components/whyUs"));
const FAQ = lazy(() => import("./components/FAQ"));
const CareGuide = lazy(() => import("./components/CareGuide"));
const ExpoPopup = lazy(() => import("./components/ExpoPopup"));

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showExpoPopup, setShowExpoPopup] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    business: "",
    interest: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Auto-show expo popup when website loads
  useEffect(() => {
    // Check if popup has been shown before (optional - remove if you want it to show every time)
    const hasSeenExpoPopup = sessionStorage.getItem("hasSeenExpoPopup");

    if (!hasSeenExpoPopup) {
      const timer = setTimeout(() => {
        setShowExpoPopup(true);
        sessionStorage.setItem("hasSeenExpoPopup", "true"); // Store that user has seen it this session
      }, 2000); // Show after 2 seconds (you can adjust this)

      return () => clearTimeout(timer);
    }
  }, []);

  // Handle body scroll when modal is open
  React.useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore body scroll
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  // Handle escape key to close modal
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && showModal) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [showModal]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px -10% 0px" }
    );

    const observeAll = () => {
      document
        .querySelectorAll(".reveal:not(.reveal-visible)")
        .forEach((el) => io.observe(el));
    };

    observeAll();

    const mo = new MutationObserver(() => {
      observeAll();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  const scrollToFooter = () => {
    try {
      const header = document.querySelector(".site-header.nav");
      const headerH = header ? header.offsetHeight : 0;
      const reduce =
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const targets = ["#get-in-touch", "#contact", "#site-footer"];
      let el = null;
      for (const sel of targets) {
        el = document.querySelector(sel);
        if (el) break;
      }
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
      window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    } catch {
      const el =
        document.getElementById("get-in-touch") ||
        document.getElementById("site-footer");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownload = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_ndpwufi"; // <-- replace with your actual Service ID
    const templateID = "template_o56bwjt"; // <-- replace with your actual Template ID
    const publicKey = "uk2WLYQLBW7dXCPwX"; // <-- replace with your actual Public Key

    try {
      await emailjs.send(serviceID, templateID, form, publicKey);
      console.log("✅ Email sent successfully!");

      // Now trigger the brochure download
      const link = document.createElement("a");
      link.href = "/images/WEBSITE BROCHURE_07 (1).pdf";
      link.download = "MKT_Rugs_Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset form
      setForm({
        name: "",
        phone: "",
        company: "",
        business: "",
        interest: "",
        email: "",
      });

      setShowModal(false);
      alert(
        "Thank you! The brochure download has started and details sent to your email."
      );
    } catch (err) {
      console.error("❌ Email failed:", err);
      alert(
        "Oops! Something went wrong while processing your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Router>
      <div className="min-h-screen bg-bgGrey">
        <SEOHelmet
          title="Handcrafted Natural Fibre Rugs | MKT Rugs"
          description="From farm to floor: handcrafted natural fibre rugs from West Bengal. Explore collections and contact MKT Rugs."
          canonical="https://www.mktrugs.com/"
          image="https://www.mktrugs.com/images/HOME_1.jpg"
          type="website"
        />
        <Header />
        <div
          aria-hidden="true"
          className="header-spacer"
          style={{ height: "var(--header-h)" }}
        ></div>

        <ErrorBoundary>
          <main id="main-content" role="main">
            <Suspense
              fallback={
                <LoadingOverlay message="Loading page..." variant="mkt" />
              }
            >
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero onDownloadClick={() => setShowModal(true)} />

                      {/* === EXPERIENCE THE JOURNEY SECTION === */}
                      <section
                        id="journey"
                        className="py-12 md:py-16 bg-bgLight"
                      >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                          <div className="text-center mb-12 reveal">
                            <div className="inline-flex items-center gap-3 mb-3">
                              <span className="w-8 h-[2px] bg-gold"></span>
                              <span className="uppercase tracking-[0.3em] text-sm text-gold font-accent">
                                Our Journey
                              </span>
                            </div>
                            <h2 className="text-3xl sm:text-5xl font-heading font-semibold text-textDark">
                              Experience the Journey: From Raw Fibre to Timeless
                              Rugs
                            </h2>
                            <p className="font-body text-base sm:text-lg text-textDark/80 max-w-3xl mx-auto mt-4 leading-relaxed">
                              Step into our world of craftsmanship — where every
                              rug begins as a natural fibre and transforms into
                              a beautiful handmade creation, woven with
                              tradition, patience, and precision.
                            </p>
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start reveal">
                            {/* ✅ Image Grid */}
                            <div className="grid grid-cols-2 gap-6">
                              <img
                                src="/images/Image 1 (4).png"
                                alt="Harvesting jute plants - Step 1 of MKT Rugs farm to floor process"
                                className="responsive-img w-full h-48 sm:h-56 object-cover rounded-lg shadow"
                                loading="lazy"
                                decoding="async"
                                width="321"
                                height="264"
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              />
                              <img
                                src="/images/Image 1 (1) (1).png"
                                alt="Extracting natural fibres - Quality jute processing at MKT Rugs"
                                className="responsive-img w-full h-48 sm:h-56 object-cover rounded-lg shadow"
                                loading="lazy"
                                decoding="async"
                                width="321"
                                height="264"
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              />
                              <img
                                src="/images/Image 1 (2) (1).png"
                                alt="Sorting and quality checking raw fibres - MKT Rugs quality control"
                                className="responsive-img w-full h-48 sm:h-56 object-cover rounded-lg shadow"
                                loading="lazy"
                                decoding="async"
                                width="321"
                                height="264"
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              />
                              <img
                                src="/images/Image 1 (3) (1).png"
                                alt="Weaving natural fibre rugs - Handcrafted artisan work at MKT Rugs"
                                className="responsive-img w-full h-48 sm:h-56 object-cover rounded-lg shadow"
                                loading="lazy"
                                decoding="async"
                                width="321"
                                height="264"
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              />
                            </div>

                            {/* ✅ Text Cards */}
                            <div className="space-y-8">
                              {/* 1️⃣ Card */}
                              <div className="flex items-start gap-4 reveal">
                                <div className="shrink-0 w-10 h-10 rounded-full bg-gold/20 text-secondary flex items-center justify-center">
                                  <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                  </svg>
                                </div>
                                <div>
                                  <h3 className="text-xl font-heading text-textDark">
                                    Harvesting the Golden Fibre
                                  </h3>
                                  <p className="text-textDark/80 font-body">
                                    From <strong>Jute Plant Cutting</strong> and{" "}
                                    <strong>Fibre Extraction</strong>
                                    to <strong>
                                      Raw Jute Fibre Sorting
                                    </strong>{" "}
                                    and <strong>Quality Checking</strong> — each
                                    step in harvesting ensures purity and
                                    strength of the natural fibre.
                                  </p>
                                </div>
                              </div>

                              {/* 2️⃣ Card */}
                              <div className="flex items-start gap-4 reveal">
                                <div className="shrink-0 w-10 h-10 rounded-full bg-gold/20 text-secondary flex items-center justify-center">
                                  <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M12 8c-1.657 0-3 1.343-3 3 0 2.25 3 5 3 5s3-2.75 3-5c0-1.657-1.343-3-3-3z"
                                    />
                                  </svg>
                                </div>
                                <div>
                                  <h3 className="text-xl font-heading text-textDark">
                                    Crafting the Base Braids
                                  </h3>
                                  <p className="text-textDark/80 font-body">
                                    Using <strong>Rootless Fresh Jute</strong>{" "}
                                    and <strong>Raw Seagrass Fibres</strong>,
                                    artisans hand-spin and braid the fibres,
                                    combining them with{" "}
                                    <strong>Raw Jute</strong> for a strong,
                                    eco-friendly foundation.
                                  </p>
                                </div>
                              </div>

                              {/* 3️⃣ Card */}
                              <div className="flex items-start gap-4 reveal">
                                <div className="shrink-0 w-10 h-10 rounded-full bg-gold/20 text-secondary flex items-center justify-center">
                                  <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M3 12l2-2 4 4 8-8 2 2-10 10z"
                                    />
                                  </svg>
                                </div>
                                <div>
                                  <h3 className="text-xl font-heading text-textDark">
                                    Treatment & Colouring
                                  </h3>
                                  <p className="text-textDark/80 font-body">
                                    Each fibre undergoes{" "}
                                    <strong>Water Treatment</strong> for even
                                    tone and cleanliness, followed by{" "}
                                    <strong>Sun Drying</strong> and{" "}
                                    <strong>Dyeing</strong>
                                    to achieve natural or vibrant hues —
                                    preparing them for{" "}
                                    <strong>Stitching & Weaving</strong>.
                                  </p>
                                </div>
                              </div>

                              {/* 4️⃣ Card */}
                              <div className="flex items-start gap-4 reveal">
                                <div className="shrink-0 w-10 h-10 rounded-full bg-gold/20 text-secondary flex items-center justify-center">
                                  <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M12 8v4l3 3"
                                    />
                                  </svg>
                                </div>
                                <div>
                                  <h3 className="text-xl font-heading text-textDark">
                                    Finishing & Global Delivery
                                  </h3>
                                  <p className="text-textDark/80 font-body">
                                    From{" "}
                                    <strong>
                                      Handmade Braids Stitched by Machine
                                    </strong>{" "}
                                    to
                                    <strong>Pure Hand-Weaving</strong>, every
                                    rug is finished with
                                    <strong>
                                      Firing, Clipping & Cleaning
                                    </strong>{" "}
                                    — ready to be delivered with care to homes
                                    worldwide.
                                  </p>
                                </div>
                              </div>

                              {/* Button */}
                              <div className="pt-2 reveal">
                                <div className="flex flex-col sm:flex-row gap-3">
                                  <Link to="/products" className="inline-flex">
                                    <button className="px-5 py-3 rounded-full bg-gold text-secondary font-body hover:bg-gold/90 transition">
                                      Explore Products
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* === PRODUCT COLLECTION SECTION === */}
                      {/* <section id="products" className="py-8 md:py-12 bg-bgLight">
                      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8">
                          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-textDark mb-4">
                            Our Collections
                          </h2>
                          <p className="font-body text-base text-textDark max-w-2xl mx-auto leading-relaxed">
                            Discover our curated collections of authentic
                            handcrafted rugs.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <Link to="/products" className="block">
                            <Card
                              title="Bengal Folk Craft"
                              description="Traditional patterns inspired by West Bengal's rich cultural heritage."
                              image="/images/PRODUCTS_1.jpg"
                              badge="Heritage"
                              featured
                            />
                          </Link>
                          <Link to="/products" className="block">
                            <Card
                              title="Coastal Wave Collection"
                              description="Natural textures that capture the essence of coastal living."
                              image="/images/PRODUCTS_2.jpg"
                              badge="Popular"
                              featured
                            />
                          </Link>
                          <Link to="/products" className="block">
                            <Card
                              title="Banana Bloom Collection"
                              description="Eco-friendly rugs made from sustainable banana fiber."
                              image="/images/PRODUCTS_3.jpg"
                              badge="Eco-Friendly"
                            />
                          </Link>
                        </div>

                        <div className="text-center mt-8">
                          <Link to="/products" className="inline-flex">
                            <Button variant="gold">
                              Explore All Collections
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </section> */}

                      <section
                        id="products"
                        className="py-8 md:py-12 bg-bgLight"
                      >
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                          {/* Section Header */}
                          <div className="text-center mb-8">
                            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-textDark mb-4">
                              Our Collections
                            </h2>
                            <p className="font-body text-base text-textDark max-w-2xl mx-auto leading-relaxed">
                              Discover our curated collections of authentic
                              handcrafted rugs.
                            </p>
                          </div>

                          {/* Collection Cards Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
                            {[
                              "Bengal Folk Craft",
                              "Coastal Wave Collection",
                              "Banana Bloom Collection",
                              "EarthBound Collection",
                              "Spectrum Weaves Collection",
                              "majestiC Tufts",
                            ].map((collection) => (
                              <div
                                key={collection}
                                className="bg-amber-50 shadow-sm hover:shadow-md rounded-2xl p-6 border border-gray-200 transition-all"
                              >
                                <h3 className="text-lg font-heading font-semibold text-textDark">
                                  {collection}
                                </h3>
                              </div>
                            ))}
                          </div>

                          {/* Explore Button */}
                          <div className="text-center mt-10">
                            <Link to="/products" className="inline-flex">
                              <Button variant="gold">
                                Explore All Collections
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </section>

                      {/* === WHY US SECTION === */}
                      <section
                        id="why-us"
                        className="py-12 md:py-16 bg-bgLight"
                      >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                          <div className="text-center mb-12 reveal">
                            <div className="inline-flex items-center gap-3 mb-3">
                              <span className="w-8 h-[2px] bg-gold"></span>
                              <span className="uppercase tracking-[0.3em] text-sm text-gold font-accent">
                                MKT Rugs
                              </span>
                            </div>
                            <h2 className="text-3xl sm:text-5xl font-heading font-semibold text-textDark">
                              Why Choose MKT Rugs?
                            </h2>
                            <p className="font-body text-base sm:text-lg text-textDark/80 max-w-3xl mx-auto mt-4 leading-relaxed">
                              We understand the challenges in sourcing
                              authentic, high-quality rugs. Here's how we solve
                              your pain points and deliver exceptional value.
                            </p>
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8 reveal">
                              <div className="flex items-start gap-4">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                  <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                </div>
                                <div>
                                  <h3 className="text-xl font-heading text-textDark mb-2">
                                    End-to-End Quality Control
                                  </h3>
                                  <p className="text-textDark/80 font-body">
                                    No more inconsistent quality from multiple
                                    suppliers. We control every step from fiber
                                    selection to final inspection, ensuring 100%
                                    quality consistency across all orders.
                                  </p>
                                </div>
                              </div>

                              {/* <div className="flex items-start gap-4">
                              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-xl font-heading text-textDark mb-2">
                                  Faster Delivery Times
                                </h3>
                                <p className="text-textDark/80 font-body">
                                  Eliminate long waiting periods. Our integrated
                                  production system delivers orders 35% faster
                                  than traditional supply chains, keeping your
                                  inventory moving.
                                </p>
                              </div>
                            </div> */}

                              <div className="flex items-start gap-4">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                  <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                  </svg>
                                </div>
                                <div>
                                  <h3 className="text-xl font-heading text-textDark mb-2">
                                    Flexible Minimum Orders
                                  </h3>
                                  <p className="text-textDark/80 font-body">
                                    No more large MOQ constraints. Our flexible
                                    production allows minimum orders as low as
                                    50 sqm, perfect for testing markets or
                                    smaller retail spaces.
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-4">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                  <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                  </svg>
                                </div>
                                <div>
                                  <h3 className="text-xl font-heading text-textDark mb-2">
                                    Authentic Heritage Craftsmanship
                                  </h3>
                                  <p className="text-textDark/80 font-body">
                                    Access to genuine traditional techniques.
                                    Our 25000+ skilled artisans preserve
                                    authentic hand-spinning, hand-braiding, and
                                    hand-twisting methods passed down through
                                    generations and our 200+ weaver convert that
                                    yarn to Beautiful Rugs , Carpets By using
                                    their Hand Stiched , Hand Loom , Hand Weave
                                    Technique.
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start gap-4">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                  <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                                    />
                                  </svg>
                                </div>
                                <div>
                                  <h3 className="text-xl font-heading text-textDark mb-2">
                                    Custom Design Capabilities
                                  </h3>
                                  <p className="text-textDark/80 font-body">
                                    Stand out from generic offerings. Our
                                    in-house CAD studio works with you to
                                    co-create unique SKUs that reflect your
                                    brand identity and market preferences.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="relative reveal">
                              <img
                                src="/images/ABOUT US.jpg"
                                alt="Traditional rug making process"
                                className="w-full h-96 object-cover rounded-lg shadow-lg"
                                loading="lazy"
                                decoding="async"
                                width="1920"
                                height="1080"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-lg"></div>
                              <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                                  <h4 className="font-heading text-lg text-textDark mb-2">
                                    Proven Track Record
                                  </h4>
                                  <p className="font-body text-sm text-textDark/80">
                                    Serving five continents with over 1000
                                    auxiliary workers, we've built trust with
                                    India's top export houses.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section
                        id="facilities"
                        className="py-12 md:py-16 bg-bgLight"
                      >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                          <div className="flex flex-col md:flex-row items-center">
                            <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0">
                              <div className="relative max-w-md mx-auto">
                                <img
                                  src="/images/ABOUT US.jpg"
                                  alt="Rolled mats in basket"
                                  className="w-full h-80 md:h-96 object-contain rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                  loading="lazy"
                                  decoding="async"
                                  width="1920"
                                  height="1080"
                                />

                                <img
                                  src="/images/02.jpg"
                                  alt="Wooden cabinet with decor"
                                  className="w-3/4 md:w-2/3 mt-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto"
                                  loading="lazy"
                                  decoding="async"
                                  width="142"
                                  height="197"
                                />

                                <div className="absolute bottom-0 left-4 md:left-0 w-20 h-14 md:w-24 md:h-16 bg-secondary rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"></div>
                              </div>
                            </div>

                            <div className="w-full md:w-1/2 px-4 md:px-8 flex flex-col justify-center">
                              <h3 className="uppercase tracking-widest text-sm text-textDark text-center mb-4 font-accent">
                                IN HARMONY WITH NATURE
                              </h3>

                              <div className="flex items-center mb-6">
                                <div className="border-t border-primary w-1/4 md:w-1/3 mx-2"></div>
                                <h2 className="text-xl md:text-2xl font-semibold text-textDark text-center font-heading">
                                  ABOUT MKT RUGS
                                </h2>
                                <div className="border-t border-primary w-1/4 md:w-1/3 mx-2"></div>
                              </div>

                              <p className="text-textDark leading-relaxed text-justify md:text-left mb-6 font-body">
                                Established in 2024, MKT Rugs specializes in
                                export operations from Gopalnagar, West Bengal,
                                India. We are powered by over 100 in-house
                                artisans and more than 1000 auxiliary workers.
                                Our journey began in 2008 as Maa Kali Traders, a
                                yarn-making company that evolved into an
                                integrated carpet manufacturing company in 2017.
                                We've proudly worked for India's top export
                                houses.
                              </p>

                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <img
                                  src="/images/03.jpg"
                                  alt="Product thumbnail 1"
                                  className="rounded-lg shadow-sm hover:shadow-md hover:scale-105 cursor-pointer transition-all duration-300"
                                  width="600"
                                  height="600"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <img
                                  src="/images/04.jpg"
                                  alt="Product thumbnail 2"
                                  className="rounded-lg shadow-sm hover:shadow-md hover:scale-105 cursor-pointer transition-all duration-300"
                                  width="600"
                                  height="600"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <img
                                  src="/images/05.jpg"
                                  alt="Product thumbnail 3"
                                  className="rounded-lg shadow-sm hover:shadow-md hover:scale-105 cursor-pointer transition-all duration-300"
                                  width="600"
                                  height="600"
                                  loading="lazy"
                                  decoding="async"
                                />
                              </div>

                              <div className="text-center mt-12 reveal">
                                <Button
                                  variant="secondary"
                                  className="flex items-center space-x-2 mx-auto"
                                  onClick={() => setShowModal(true)}
                                >
                                  <span>Download Brochure</span>
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                  </svg>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* === ENHANCED MODAL === */}
                      {showModal && (
                        <div
                          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 sm:p-6 lg:p-8 transition-all duration-300 ease-out"
                          onClick={(e) =>
                            e.target === e.currentTarget && setShowModal(false)
                          }
                        >
                          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-4 sm:mx-auto relative transform transition-all duration-300 ease-out scale-100 opacity-100 max-h-[90vh] overflow-y-auto">
                            {/* Close Button - Enhanced for mobile */}
                            <button
                              onClick={() => setShowModal(false)}
                              className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                              aria-label="Close modal"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>

                            {/* Header */}
                            <div className="px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 pb-2">
                              <div className="text-center">
                                <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                  <svg
                                    className="w-8 h-8 text-gold"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                  </svg>
                                </div>
                                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-textDark mb-2">
                                  Download Our Brochure
                                </h2>
                                <p className="text-textDark/70 font-body text-xs sm:text-sm md:text-base">
                                  Get instant access to our complete product
                                  catalog
                                </p>
                              </div>
                            </div>

                            {/* Form */}
                            <form
                              onSubmit={handleDownload}
                              className="px-4 sm:px-6 md:px-8 pb-6 sm:pb-8"
                            >
                              <div className="space-y-4 sm:space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                  <label className="block">
                                    <span className="text-textDark font-medium text-sm mb-2 block">
                                      Name{" "}
                                      <span className="text-red-500">*</span>
                                    </span>
                                    <input
                                      type="text"
                                      name="name"
                                      value={form.name}
                                      onChange={handleChange}
                                      placeholder="Your full name"
                                      required
                                      className="w-full mobile-input border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-textDark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200 text-sm sm:text-base focus-enhanced"
                                    />
                                  </label>

                                  <label className="block">
                                    <span className="text-textDark font-medium text-sm mb-2 block">
                                      Email{" "}
                                      <span className="text-red-500">*</span>
                                    </span>
                                    <input
                                      type="email"
                                      name="email"
                                      value={form.email}
                                      onChange={handleChange}
                                      placeholder="your@email.com"
                                      required
                                      className="w-full mobile-input border border-gray-300 rounded-xl px-4 py-3 text-textDark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200 text-sm sm:text-base focus-enhanced"
                                    />
                                  </label>
                                </div>

                                {/* ✅ Phone Number Field */}
                                <label className="block">
                                  <span className="text-textDark font-medium text-sm mb-2 block">
                                    Phone Number{" "}
                                    <span className="text-red-500">*</span>
                                  </span>
                                  <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="e.g., +91 9876543210"
                                    required
                                    className="w-full mobile-input border border-gray-300 rounded-xl px-4 py-3 text-textDark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200 text-sm sm:text-base focus-enhanced"
                                  />
                                </label>

                                <label className="block">
                                  <span className="text-textDark font-medium text-sm mb-2 block">
                                    Company Name{" "}
                                    <span className="text-red-500">*</span>
                                  </span>
                                  <input
                                    type="text"
                                    name="company"
                                    value={form.company}
                                    onChange={handleChange}
                                    placeholder="Your company name"
                                    required
                                    className="w-full mobile-input border border-gray-300 rounded-xl px-4 py-3 text-textDark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200 text-sm sm:text-base focus-enhanced"
                                  />
                                </label>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <label className="block">
                                    <span className="text-textDark font-medium text-sm mb-2 block">
                                      Line of Business
                                    </span>
                                    <input
                                      type="text"
                                      name="business"
                                      value={form.business}
                                      onChange={handleChange}
                                      placeholder="e.g., Interior Design"
                                      className="w-full mobile-input border border-gray-300 rounded-xl px-4 py-3 text-textDark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200 text-sm sm:text-base focus-enhanced"
                                    />
                                  </label>

                                  <label className="block">
                                    <span className="text-textDark font-medium text-sm mb-2 block">
                                      Special Interest
                                    </span>
                                    <input
                                      type="text"
                                      name="interest"
                                      value={form.interest}
                                      onChange={handleChange}
                                      placeholder="e.g., Jute Rugs"
                                      className="w-full mobile-input border border-gray-300 rounded-xl px-4 py-3 text-textDark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200 text-sm sm:text-base focus-enhanced"
                                    />
                                  </label>
                                </div>
                              </div>

                              {/* Submit Button */}
                              <div className="mt-6 sm:mt-8">
                                <Button
                                  variant="gold"
                                  type="submit"
                                  disabled={isSubmitting}
                                  className="w-full mobile-touch py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none focus-enhanced"
                                >
                                  {isSubmitting ? (
                                    <InlineLoading
                                      variant="mkt-compact"
                                      size="sm"
                                      color="white"
                                      text="Processing..."
                                      className="justify-center"
                                    />
                                  ) : (
                                    <span className="flex items-center justify-center gap-2">
                                      <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                                        />
                                      </svg>
                                      Download Brochure Now
                                    </span>
                                  )}
                                </Button>
                              </div>

                              {/* Footer note */}
                              <p className="text-center text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                                By downloading, you agree to receive updates
                                about our products and services.
                              </p>
                            </form>
                          </div>
                        </div>
                      )}

                      {/* Add modal styles */}
                      <style jsx>{`
                        .modal-enter {
                          opacity: 0;
                          transform: scale(0.9);
                        }
                        .modal-enter-active {
                          opacity: 1;
                          transform: scale(1);
                          transition: opacity 300ms ease-out,
                            transform 300ms ease-out;
                        }
                        .modal-exit {
                          opacity: 1;
                          transform: scale(1);
                        }
                        .modal-exit-active {
                          opacity: 0;
                          transform: scale(0.9);
                          transition: opacity 200ms ease-in,
                            transform 200ms ease-in;
                        }
                      `}</style>

                      {/* === CONTACT SECTION ===
                    <section id="contact" className="py-12 bg-bgLight">
                      <ContactUs />
                    </section> */}
                    </>
                  }
                />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/products" element={<Product />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/care-guide" element={<CareGuide />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />{" "}
                {/* 👈 dynamic route */}
                <Route path="/why-us" element={<WhyUs />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/shipping-policy" element={<ShippingPolicy />} />
              </Routes>
              <ExpoPopup
                isOpen={showExpoPopup}
                onClose={() => setShowExpoPopup(false)}
                imageSrc="/images/bannerDelhiFair.png"
              />
            </Suspense>
          </main>
        </ErrorBoundary>

        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;

