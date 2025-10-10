// // import React, { useState } from "react";
// // import Button from "./Button";

// function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [isSending, setIsSending] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSending(true);

//     const serviceID = "service_l7jryqu";
//     const templateID = "template_0zitx77";
//     const publicKey = "NAS0PefIzYxrhtKz0";

//     emailjs
//       .send(serviceID, templateID, formData, publicKey)
//       .then(() => {
//         alert("✅ Thank you for your message! We'll get back to you soon.");
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           subject: "",
//           message: "",
//         });
//       })
//       .catch((error) => {
//         console.error("EmailJS Error:", error);
//         alert("❌ Failed to send message. Please try again later.");
//       })
//       .finally(() => setIsSending(false));

//   return (
//     <div className="min-h-screen bg-bgGrey">
//       <section className="relative h-[36vh] sm:h-[44vh] lg:h-[56vh]">
//         <img
//           src="/images/background-zoom-calls-with-cozy-living-room.jpg"
//           alt="Contact hero"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/30 to-secondary/70" />
//         <div className="relative z-10 flex items-end h-full">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-center w-full">
//             <h1 className="text-3xl sm:text-5xl font-heading font-semibold text-white mb-3">
//               Let’s Talk Rugs — We’d Love to Hear From You
//             </h1>
//             <p className="text-white/90 max-w-3xl mx-auto font-body text-sm sm:text-base">
//               Whether you’re looking for a custom design, wholesale partnership,
//               or have questions about our natural fibre rugs — we’re here to
//               help.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-bgGrey">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-3xl font-heading font-semibold text-textDark mb-8">
//                 Get In Touch with MKT RUGS
//               </h2>

//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
//                     <svg
//                       className="w-6 h-6 text-textLight"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-textDark mb-1 font-heading">
//                       Address
//                     </h3>
//                     <p className="text-textDark font-body">
//                       India, Gopalnagar, Near Post Office,
//                       <br />
//                       North 24 Parganas, Kolkata
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
//                     <svg
//                       className="w-6 h-6 text-textLight"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-textDark mb-1 font-heading">
//                       Phone
//                     </h3>
//                     <p className="text-textDark font-body">
//                       <a
//                         href="tel:+917778886215"
//                         className="text-primary hover:underline"
//                       >
//                         +91 77788 86215
//                       </a>{" "}
//                       (Rahul Sarder)
//                     </p>
//                     <div className="mt-2">
//                       <a
//                         href="https://wa.me/917778886215?text=Hi%20MKT%20RUGS,%20I%20have%20an%20enquiry."
//                         target="_blank"
//                         rel="noreferrer"
//                         className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-green-600 text-white hover:bg-green-500 transition shadow"
//                       >
//                         <svg
//                           className="w-4 h-4"
//                           viewBox="0 0 24 24"
//                           fill="currentColor"
//                         >
//                           <path d="M20.52 3.48A11.8 11.8 0 0012 0C5.38 0 0 5.38 0 12c0 2.1.55 4.06 1.52 5.76L0 24l6.37-1.66A11.9 11.9 0 0012 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 22a9.9 9.9 0 01-5.05-1.38l-.36-.21-3.78 1 1.01-3.66-.24-.38A9.99 9.99 0 1122 12 10 10 0 0112 22zm5.38-7.62c-.3-.15-1.77-.87-2.04-.96-.27-.09-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.08-.8.37-.28.3-1.06 1.03-1.06 2.5s1.09 2.9 1.24 3.1c.15.2 2.14 3.27 5.18 4.58.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z" />
//                         </svg>
//                         WhatsApp Chat
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
//                     <svg
//                       className="w-6 h-6 text-textLight"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-textDark mb-1 font-heading">
//                       Email
//                     </h3>
//                     <p className="text-textDark font-body">
//                       <a
//                         href="mailto:contact@mktrugs.com"
//                         className="text-primary hover:underline"
//                       >
//                         contact@mktrugs.com
//                       </a>
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
//                     <svg
//                       className="w-6 h-6 text-textLight"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-textDark mb-1 font-heading">
//                       Business Hours
//                     </h3>
//                     <p className="text-textDark font-body">
//                       Mon – Sat, 10:00 AM – 6:00 PM IST
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h2 className="text-3xl font-heading font-semibold text-textDark mb-8">
//                 Send Us a Message
//               </h2>

//               <section className="py-16 bg-bgGrey">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Left info column (Address, Phone, Email, etc.) */}
//             {/* keep your existing code here */}

//             {/* Right form */}
//             <div>
//               <h2 className="text-3xl font-heading font-semibold text-textDark mb-8">
//                 Send Us a Message
//               </h2>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   <div>
//                     <label
//                       htmlFor="name"
//                       className="block text-sm font-medium text-textDark mb-2 font-body"
//                     >
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body"
//                       placeholder="Your full name"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-sm font-medium text-textDark mb-2 font-body"
//                     >
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body"
//                       placeholder="your.email@example.com"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-body text-textDark mb-2">
//                       Phone *
//                     </label>
//                     <input
//                       name="phone"
//                       required
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="subject"
//                       className="block text-sm font-medium text-textDark mb-2 font-body"
//                     >
//                       Company *
//                     </label>
//                     <input
//                       type="text"
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body"
//                       placeholder="What's Your Company Name?"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-medium text-textDark mb-2 font-body"
//                   >
//                     Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={6}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body resize-vertical"
//                     placeholder="Tell us about your inquiry..."
//                   />
//                 </div>

//                 <p className="text-xs text-textDark/70 font-body">
//                   We typically reply within 24 hours.
//                 </p>
//                 <Button
//                   variant="gold"
//                   type="submit"
//                   className="w-full sm:w-auto"
//                   disabled={isSending}
//                 >
//                   {isSending ? "Sending..." : "Send Message"}
//                 </Button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//               <div className="hidden lg:block mt-10">
//                 <img
//                   src="/images/Elma Geometric Jute Rug _ Natural.jpg"
//                   alt="Contact illustration"
//                   className="w-full h-64 object-cover rounded-lg shadow-md"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-bgLight" id="map">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-heading font-semibold text-textDark mb-4">
//               Visit Our Facility
//             </h2>
//             <p className="text-lg text-textDark max-w-2xl mx-auto leading-relaxed font-body">
//               India, Gopalnagar, Near Post Office, North 24 Parganas, Kolkata
//             </p>
//           </div>

//           <div className="rounded-lg overflow-hidden shadow border border-gray-200">
//             <div className="relative w-full" style={{ paddingBottom: "45%" }}>
//               <iframe
//                 title="MKT Rugs Location"
//                 src="https://www.google.com/maps?q=Gopalnagar+Near+Post+Office+North+24+Parganas+Kolkata&output=embed"
//                 className="absolute inset-0 w-full h-full border-0"
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 allowFullScreen
//               ></iframe>
//             </div>
//             <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
//               <div className="md:col-span-2 text-center md:text-left">
//                 <p className="text-textDark font-body">
//                   MKT Rugs, India, Gopalnagar, Near Post Office, North 24
//                   Parganas, Kolkata
//                 </p>
//                 <div className="mt-2 flex flex-wrap gap-3 justify-center md:justify-start">
//                   <a
//                     className="text-primary underline font-body"
//                     href="https://maps.google.com/?q=Gopalnagar+Near+Post+Office+North+24+Parganas+Kolkata"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Open in Google Maps
//                   </a>
//                   <a
//                     href="#visit"
//                     className="text-secondary font-semibold font-body hover:underline"
//                   >
//                     Schedule a Visit →
//                   </a>
//                 </div>
//               </div>
//               <img
//                 src="/images/Hart in Terracotta.jpg"
//                 alt="Facility preview"
//                 className="w-full h-28 object-cover rounded-md shadow"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-12 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-8">
//             <h3 className="text-2xl font-heading text-textDark">
//               What clients say
//             </h3>
//             <div className="mx-auto mt-3 w-24 h-1 bg-gold" />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               {
//                 quote:
//                   "Amazing craftsmanship! Our living room rug was custom-made and delivered on time.",
//                 name: "Client – Delhi",
//               },
//               {
//                 quote:
//                   "Professional team and eco-friendly materials. Highly recommend for bespoke projects.",
//                 name: "Studio – Mumbai",
//               },
//               {
//                 quote:
//                   "Great quality and service. The wool rug feels luxurious underfoot.",
//                 name: "Retail Partner – Pune",
//               },
//             ].map((t, i) => (
//               <div
//                 key={i}
//                 className="bg-bgGrey rounded-lg p-6 border border-gray-100 shadow-sm"
//               >
//                 <svg
//                   className="w-6 h-6 text-gold mb-2"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M7 7h4v10H5V9a2 2 0 012-2zm10 0h4v10h-6V9a2 2 0 012-2z" />
//                 </svg>
//                 <p className="text-textDark/90 font-body">{t.quote}</p>
//                 <div className="mt-3 text-sm text-secondary font-semibold">
//                   {t.name}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
//             <a href="/catalogue.pdf" className="inline-flex">
//               <Button variant="secondary" className="border-gold text-textDark">
//                 Download 2025 Catalogue
//               </Button>
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex"
//             >
//               <Button variant="gold">Follow on Instagram</Button>
//             </a>
//           </div>
//         </div>
//       </section>

//       <section className="py-10 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
//             {[
//               "/images/Jute Boucle Rug.jpg",
//               "/images/Hart in Terracotta.jpg",
//               "/images/Naturals Basket.jpg",
//               "/images/Summer Novelty Coir Doormat _ The Company Store.jpg",
//               "/images/download (1).jpg",
//               "/images/download (6).jpg",
//             ].map((src, i) => (
//               <img
//                 key={i}
//                 src={src}
//                 alt={`contact-strip-${i}`}
//                 className="w-full h-24 object-cover rounded"
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="relative py-16">
//         <div className="absolute inset-0">
//           <img
//             src="/images/flat-lay-monochromatic-assortment-textiles.jpg"
//             alt="Rug texture background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-secondary/80"></div>
//         </div>
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//           <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textLight mb-4">
//             Ready to Start Your Project?
//           </h2>
//           <p className="text-xl text-textLight mb-8 leading-relaxed">
//             Let's discuss how we can bring the beauty of natural jute to your
//             space.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a href="/enquiry" className="inline-flex">
//               <Button variant="gold">Get a Free Quote</Button>
//             </a>
//             <a href="tel:+917778886215" className="inline-flex">
//               <Button
//                 variant="secondary"
//                 className="!border-white !text-white hover:!bg-white hover:!text-secondary"
//               >
//                 Call Us Now
//               </Button>
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
// export default ContactUs;

// }

import React, { useState, useCallback, useMemo } from "react";
import SEOHelmet from "./SEOHelmet";
import emailjs from "@emailjs/browser";
import Button from "./Button";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Form validation logic
  const validateField = useCallback((name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email address' : '';
      case 'phone':
        return !/^[+]?[0-9\s-()]{10,}$/.test(value) ? 'Please enter a valid phone number' : '';
      case 'subject':
        return value.trim().length < 2 ? 'Company name is required' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  }, []);

  // Validate all fields
  const validateForm = useCallback(() => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, validateField]);

  // Check if form is valid
  const isFormValid = useMemo(() => {
    return Object.keys(formData).every(key => 
      formData[key].trim() && !validateField(key, formData[key])
    );
  }, [formData, validateField]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear submit status when user starts typing
    if (submitStatus) setSubmitStatus(null);

    // Validate field if it's been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error,
      }));
    }
  }, [submitStatus, touched, validateField]);

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error,
    }));
  }, [validateField]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      setTouched({
        name: true,
        email: true,
        phone: true,
        subject: true,
        message: true,
      });
      return;
    }

    setIsSending(true);
    setSubmitStatus(null);

    const serviceID = "service_l7jryqu";
    const templateID = "template_0zitx77";
    const publicKey = "NAS0PefIzYxrhtKz0";

    try {
      await emailjs.send(serviceID, templateID, formData, publicKey);
      
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
      setTouched({});
      
      // Scroll to success message
      setTimeout(() => {
        const successElement = document.getElementById('success-message');
        if (successElement) {
          successElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSending(false);
    }
  }, [formData, validateForm]);

  return (
    <div className="min-h-screen bg-bgGrey">
      <SEOHelmet
        title="Contact MKT Rugs — Get a Quote | MKT Rugs"
        description="Contact MKT Rugs for custom rug designs, wholesale partnerships, and export inquiries. Get a quick response."
        canonical="https://www.mktrugs.com/contact"
      />
      {/* Hero Section with header compensation */}
      <section 
        className="relative h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] min-h-[400px] max-h-[600px]"
        style={{ marginTop: "calc(var(--header-h, 0px) * -1)" }}
      >
        <img
          src="/images/background-zoom-calls-with-cozy-living-room.jpg"
          alt="Contact hero"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/30 to-secondary/70" />
        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <span className="text-sm font-semibold text-white tracking-wide uppercase">
                Get In Touch
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-4 sm:mb-6 leading-tight">
              Let's Talk Rugs — We'd Love to 
              <span className="text-gold">Hear From You</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-body mb-8">
              Whether you're looking for a custom design, wholesale partnership,
              or have questions about our natural fibre rugs — we're here to
              help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact-form" className="inline-flex items-center justify-center px-8 py-3 bg-gold text-white rounded-full font-semibold hover:bg-gold/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Message
              </a>
              <a href="tel:+917778886215" className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white border-2 border-white rounded-full font-semibold hover:bg-white hover:text-secondary transform hover:scale-105 transition-all duration-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section id="contact-form" className="py-16 sm:py-20 bg-bgGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div id="success-message" className="mb-8 p-4 sm:p-6 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-green-800 font-heading">Message Sent Successfully!</h3>
                  <p className="text-green-700 font-body">Thank you for your message! We'll get back to you within 24 hours.</p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-4 sm:p-6 bg-red-50 border border-red-200 rounded-xl">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-red-800 font-heading">Failed to Send Message</h3>
                  <p className="text-red-700 font-body">Something went wrong. Please try again or contact us directly.</p>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Info */}
            <div className="lg:pr-8">
              <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-textDark mb-6 sm:mb-8">
                Get In Touch with MKT RUGS
              </h2>

              <div className="space-y-6 sm:space-y-8">
                {/* Address */}
                <div className="flex items-start space-x-3 sm:space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-textLight"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-textDark mb-1 font-heading">
                      Address
                    </h3>
                    <p className="text-textDark font-body">
                      India, Gopalnagar, Near Post Office,
                      <br />
                      North 24 Parganas, Kolkata
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3 sm:space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-textLight"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-textDark mb-1 font-heading">
                      Phone
                    </h3>
                    <p className="text-textDark font-body">
                      <a
                        href="tel:+917778886215"
                        className="text-primary hover:underline"
                      >
                        +91 77788 86215
                      </a>{" "}
                      (Dattatreyo Paul)
                    </p>
                    <div className="mt-2">
                      <a
                        href="https://wa.me/917778886215?text=Hi%20MKT%20RUGS,%20I%20have%20an%20enquiry."
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-green-600 text-white hover:bg-green-500 transition shadow"
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
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 sm:space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-textLight"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-textDark mb-1 font-heading">
                      Email
                    </h3>
                    <p className="text-textDark font-body">
                      <a
                        href="mailto:contact@mktrugs.com"
                        className="text-primary hover:underline"
                      >
                        contact@mktrugs.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-3 sm:space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-textLight"
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
                  <div>
                    <h3 className="text-lg font-semibold text-textDark mb-1 font-heading">
                      Business Hours
                    </h3>
                    <p className="text-textDark font-body">
                      Mon – Sat, 10:00 AM – 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-textDark mb-6 sm:mb-8">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-textDark mb-2 font-body">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 font-body ${
                        errors.name && touched.name 
                          ? 'border-red-300 bg-red-50' 
                          : formData.name 
                            ? 'border-green-300 bg-green-50' 
                            : 'border-gray-300 hover:border-gray-400'
                      }`}
                    />
                    {errors.name && touched.name && (
                      <p className="mt-1 text-sm text-red-600 font-body flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {errors.name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-textDark mb-2 font-body">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 font-body ${
                        errors.email && touched.email 
                          ? 'border-red-300 bg-red-50' 
                          : formData.email && !errors.email 
                            ? 'border-green-300 bg-green-50' 
                            : 'border-gray-300 hover:border-gray-400'
                      }`}
                    />
                    {errors.email && touched.email && (
                      <p className="mt-1 text-sm text-red-600 font-body flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-textDark mb-2 font-body">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      placeholder="+91 12345 67890"
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 font-body ${
                        errors.phone && touched.phone 
                          ? 'border-red-300 bg-red-50' 
                          : formData.phone && !errors.phone 
                            ? 'border-green-300 bg-green-50' 
                            : 'border-gray-300 hover:border-gray-400'
                      }`}
                    />
                    {errors.phone && touched.phone && (
                      <p className="mt-1 text-sm text-red-600 font-body flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-textDark mb-2 font-body">
                      Company Name *
                    </label>
                    <input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      placeholder="Your company name"
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 font-body ${
                        errors.subject && touched.subject 
                          ? 'border-red-300 bg-red-50' 
                          : formData.subject && !errors.subject 
                            ? 'border-green-300 bg-green-50' 
                            : 'border-gray-300 hover:border-gray-400'
                      }`}
                    />
                    {errors.subject && touched.subject && (
                      <p className="mt-1 text-sm text-red-600 font-body flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-textDark mb-2 font-body">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    rows={6}
                    placeholder="Tell us about your inquiry, requirements, or any questions you have..."
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 font-body resize-vertical min-h-[120px] ${
                      errors.message && touched.message 
                        ? 'border-red-300 bg-red-50' 
                        : formData.message && !errors.message 
                          ? 'border-green-300 bg-green-50' 
                          : 'border-gray-300 hover:border-gray-400'
                    }`}
                  />
                  {errors.message && touched.message && (
                    <p className="mt-1 text-sm text-red-600 font-body flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.message}
                    </p>
                  )}
                  {formData.message && (
                    <p className={`mt-1 text-sm font-body ${
                      formData.message.length < 10 ? 'text-red-500' : 'text-green-600'
                    }`}>
                      {formData.message.length}/500 characters
                    </p>
                  )}
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-semibold text-textDark">Quick Response Guarantee</span>
                  </div>
                  <p className="text-xs text-textDark/70 font-body">
                    We typically reply within 24 hours during business days (Mon-Sat, 10 AM - 6 PM IST).
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="gold"
                    type="submit"
                    className={`flex-1 sm:flex-none py-3 px-8 font-semibold transition-all duration-300 ${
                      isSending 
                        ? 'cursor-not-allowed opacity-70' 
                        : isFormValid 
                          ? 'transform hover:scale-105 shadow-lg hover:shadow-xl' 
                          : 'opacity-70 cursor-not-allowed'
                    }`}
                    disabled={isSending || !isFormValid}
                  >
                    {isSending ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </div>
                    )}
                  </Button>
                  
                  <div className="flex items-center justify-center text-sm text-textDark/60">
                    <span>or call us at</span>
                    <a href="tel:+917778886215" className="ml-2 text-primary font-semibold hover:underline">
                      +91 77788 86215
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-bgLight" id="map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary tracking-wide uppercase">
                Our Location
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-textDark mb-4">
              Visit Our Facility
            </h2>
            <p className="text-base sm:text-lg text-textDark max-w-2xl mx-auto leading-relaxed font-body">
              Experience our craftsmanship firsthand at our facility in Gopalnagar, West Bengal
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              <iframe
                title="MKT Rugs Location"
                src="https://www.google.com/maps?q=Gopalnagar+Near+Post+Office+North+24+Parganas+Kolkata&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center">
              <div className="md:col-span-2 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span className="font-semibold text-textDark">MKT Rugs Manufacturing Facility</span>
                </div>
                <p className="text-textDark font-body mb-3">
                  Gopalnagar, Near Post Office, North 24 Parganas, Kolkata, India
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <a
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
                    href="https://maps.google.com/?q=Gopalnagar+Near+Post+Office+North+24+Parganas+Kolkata"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Open in Maps
                  </a>
                  <a
                    href="tel:+917778886215"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-primary text-primary rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Schedule Visit
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/Hart in Terracotta.jpg"
                  alt="Facility preview"
                  className="w-full max-w-xs h-32 sm:h-36 object-cover rounded-xl shadow-md"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-secondary tracking-wide uppercase">
                Customer Reviews
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-textDark mb-4">
              What Our Customers Say
            </h2>
            <p className="text-base sm:text-lg text-textDark max-w-2xl mx-auto leading-relaxed font-body">
              Discover why thousands of customers trust us for their jute craft needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Testimonial 1 */}
            <div className="bg-bgLight rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-textDark font-body mb-4 italic leading-relaxed">
                "Absolutely stunning quality! The jute rugs exceeded our expectations. The craftsmanship is exceptional and they've transformed our home decor."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-lg">S</span>
                </div>
                <div>
                  <h4 className="font-semibold text-textDark">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Interior Designer, Delhi</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-bgLight rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-textDark font-body mb-4 italic leading-relaxed">
                "Outstanding customer service and fast delivery. The custom jute bags were perfect for our eco-friendly business promotion. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-secondary font-semibold text-lg">M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-textDark">Michael Chen</h4>
                  <p className="text-sm text-gray-600">Studio Owner, Mumbai</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-bgLight rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-textDark font-body mb-4 italic leading-relaxed">
                "The quality of their jute products is unmatched. We've been ordering from MKT Rugs for 3 years and they consistently deliver excellence."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-lg">R</span>
                </div>
                <div>
                  <h4 className="font-semibold text-textDark">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-600">Retail Partner, Pune</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">5000+</div>
              <div className="text-sm text-gray-600 font-body">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">15+</div>
              <div className="text-sm text-gray-600 font-body">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-gray-600 font-body">Product Varieties</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">24/7</div>
              <div className="text-sm text-gray-600 font-body">Customer Support</div>
            </div>
          </div> */}

          {/* Call to Action */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/catalogue.pdf" className="inline-flex justify-center">
              <Button variant="secondary" className="border-gold text-textDark px-6 py-3 rounded-full hover:bg-gold hover:text-white transition-all duration-200">
                Download 2025 Catalogue
              </Button>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center"
            >
              <Button variant="gold" className="px-6 py-3 rounded-full hover:shadow-lg transition-all duration-200">
                Follow on Instagram
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

