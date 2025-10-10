import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSubscribed(false);
    setTimeout(() => {
      if (email && email.includes("@")) {
        setSubscribed(true);
        setEmail("");
      } else {
        setError("Please enter a valid email address.");
      }
      setSubmitting(false);
    }, 1200);
  };

  useEffect(() => {
    const els = document.querySelectorAll(".footer-reveal");
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      els.forEach((el) => el.classList.add("footer-revealed"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("footer-revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <footer
      id="site-footer"
      className="text-textLight bg-secondary relative footer-base"
    >
      <div
        id="get-in-touch"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14"
      >
        <div id="contact" className="sr-only" aria-hidden="true"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="footer-reveal">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/MKT Rugs_1 PNG.png"
                alt="MKT RUGS Logo"
                className="h-12 sm:h-14 w-auto object-contain bg-white rounded-md p-1 ring-1 ring-white/20 shadow"
                loading="lazy"
              />
              <h4 className="footer-heading text-lg font-heading font-semibold">
                MKT RUGS
              </h4>
            </div>
            <p className="font-body text-sm leading-relaxed text-bgLight/90">
              MKT Rugs is a B2B export specialist in handcrafted natural carpets
              from West Bengal, India. With 100+ in-house artisans and over 1000
              auxiliary workers, we deliver high-quality rugs with full control
              from raw fiber to finished floor.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                aria-label="Follow on Instagram"
                href="https://instagram.com/mktrugs"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn p-2 rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-400 hover:scale-110 transition-all duration-300 ring-1 ring-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a
                aria-label="Follow on Facebook"
                href="https://facebook.com/mktrugs"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn p-2 rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-blue-300 hover:scale-110 transition-all duration-300 ring-1 ring-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                aria-label="Follow on YouTube"
                href="https://youtube.com/@mktrugs"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn p-2 rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-red-600 hover:to-yellow-400 hover:scale-110 transition-all duration-300 ring-1 ring-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                aria-label="Follow on LinkedIn"
                href="https://www.linkedin.com/company/mkt-rugs"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn p-2 rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-blue-400 hover:to-blue-600 hover:scale-110 transition-all duration-300 ring-1 ring-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <nav aria-labelledby="footer-quick-links" className="footer-reveal">
            <h5
              id="footer-quick-links"
              className="footer-heading text-base font-heading font-semibold mb-4 text-gold"
            >
              Quick Links
            </h5>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="footer-link group inline-flex items-center font-body text-sm text-bgLight/90 hover:text-gold hover:translate-x-1 transition-all duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="footer-link group inline-flex items-center font-body text-sm text-bgLight/90 hover:text-gold hover:translate-x-1 transition-all duration-200"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="footer-link group inline-flex items-center font-body text-sm text-bgLight/90 hover:text-gold hover:translate-x-1 transition-all duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-labelledby="footer-resources" className="footer-reveal">
            <h5
              id="footer-resources"
              className="footer-heading text-base font-heading font-semibold mb-4 text-gold"
            >
              Resources
            </h5>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/care-guide"
                  className="footer-link font-body text-sm text-bgLight/90 hover:text-gold hover:translate-x-1 transition-all duration-200"
                >
                  Care Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="footer-link font-body text-sm text-bgLight/90 hover:text-gold hover:translate-x-1 transition-all duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="footer-link font-body text-sm text-bgLight/90 hover:text-gold hover:translate-x-1 transition-all duration-200"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Newsletter */}
          <div className="footer-reveal">
            <h5 className="text-base font-heading font-semibold mb-4 text-gold">
              Stay in the loop
            </h5>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3"
            >
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-full bg-white/10 placeholder:text-white/60 text-white px-4 py-3 text-sm outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-gold"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-gold hover:scale-105 transition-all duration-200"
                aria-label="Subscribe to newsletter"
                disabled={submitting}
              >
                {submitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-[13px] text-green-300 font-body">
                Thank you for subscribing!
              </p>
            )}
            {error && (
              <p className="mt-2 text-[13px] text-red-300 font-body">{error}</p>
            )}

            <div className="mt-6 space-y-2 text-sm font-body text-bgLight/90">
              <p className="flex items-start gap-2">
                <FiMail className="w-4 h-4 mt-0.5" aria-hidden="true" />
                <span>contact@mktrugs.com</span>
              </p>
              <p className="flex items-start gap-2">
                <FiPhone className="w-4 h-4 mt-0.5" aria-hidden="true" />
                <span>+91 77788 86215</span>
              </p>
              <p className="flex items-start gap-2">
                <FiMapPin className="w-4 h-4 mt-0.5" aria-hidden="true" />
                <span>
                  India, Gopalnagar, Near Post Office, North 24 Parganas,
                  Kolkata
                </span>
              </p>
              <p className="pt-2">
                <a
                  href="https://wa.me/917778886215?text=Hi%20MKT%20RUGS,%20I%20have%20an%20enquiry."
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn inline-flex items-center gap-2 px-3 py-2 rounded-full bg-green-600 text-white hover:bg-green-500 transition shadow ring-1 ring-white/10"
                  aria-label="Start WhatsApp chat"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.52 3.48A11.8 11.8 0 0012 0C5.38 0 0 5.38 0 12c0 2.1.55 4.06 1.52 5.76L0 24l6.37-1.66A11.9 11.9 0 0012 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 22a9.9 9.9 0 01-5.05-1.38l-.36-.21-3.78 1 1.01-3.66-.24-.38A9.99 9.99 0 1122 12 10 10 0 0112 22zm5.38-7.62c-.3-.15-1.77-.87-2.04-.96-.27-.09-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.08-.8.37-.28.3-1.06 1.03-1.06 2.5s1.09 2.9 1.24 3.1c.15.2 2.14 3.27 5.18 4.58.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z" />
                  </svg>
                  WhatsApp Chat
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-reveal mt-12 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>

        <div className="footer-reveal mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-bgLight/75">
          <p className="font-body">
            &copy; {new Date().getFullYear()} MKT RUGS. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="footer-link hover:text-textLight transition"
            >
              Privacy Policy
            </Link>
            <span className="opacity-40">•</span>
            <Link
              to="/terms-conditions"
              className="footer-link hover:text-textLight transition"
            >
              Terms & Conditions
            </Link>
            <span className="opacity-40">•</span>
            <Link
              to="/refund-policy"
              className="footer-link hover:text-textLight transition"
            >
              Refund Policy
            </Link>
            <span className="opacity-40">•</span>
            <Link
              to="/shipping-policy"
              className="footer-link hover:text-textLight transition"
            >
              Shipping Policy
            </Link>
            <span className="opacity-40">•</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="footer-link hover:text-textLight transition inline-flex items-center cursor-pointer"
              aria-label="Scroll to top"
            >
              Back to top
              <svg
                className="w-3.5 h-3.5 ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
