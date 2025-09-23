import React, { useState } from 'react';
import Button from './Button';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'General Question',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-bgGrey">
      
      <section className="relative h-[36vh] sm:h-[44vh] lg:h-[56vh]">
        <img
          src="/images/background-zoom-calls-with-cozy-living-room.jpg"
          alt="Contact hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/30 to-secondary/70" />
        <div className="relative z-10 flex items-end h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-center w-full">
            <h1 className="text-3xl sm:text-5xl font-heading font-semibold text-white mb-3">Let’s Talk Rugs — We’d Love to Hear From You</h1>
            <p className="text-white/90 max-w-3xl mx-auto font-body text-sm sm:text-base">
              Whether you’re looking for a custom design, wholesale partnership, or have questions about our natural fibre rugs — we’re here to help.
            </p>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-bgGrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
            <div>
              <h2 className="text-3xl font-heading font-semibold text-textDark mb-8">
                Get In Touch with MKT RUGS
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-textDark mb-1 font-heading">Address</h3>
                    <p className="text-textDark font-body">
                      India, Gopalnagar, Near Post Office,<br />
                      North 24 Parganas, Kolkata
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-textDark mb-1 font-heading">Phone</h3>
                    <p className="text-textDark font-body">
                      <a href="tel:+917778886215" className="text-primary hover:underline">+91 77788 86215</a> (Rahul Sarder)
                    </p>
                    <div className="mt-2">
                      <a
                        href="https://wa.me/917778886215?text=Hi%20MKT%20RUGS,%20I%20have%20an%20enquiry."
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-green-600 text-white hover:bg-green-500 transition shadow"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.8 11.8 0 0012 0C5.38 0 0 5.38 0 12c0 2.1.55 4.06 1.52 5.76L0 24l6.37-1.66A11.9 11.9 0 0012 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 22a9.9 9.9 0 01-5.05-1.38l-.36-.21-3.78 1 1.01-3.66-.24-.38A9.99 9.99 0 1122 12 10 10 0 0112 22zm5.38-7.62c-.3-.15-1.77-.87-2.04-.96-.27-.09-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.08-.8.37-.28.3-1.06 1.03-1.06 2.5s1.09 2.9 1.24 3.1c.15.2 2.14 3.27 5.18 4.58.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z"/></svg>
                        WhatsApp Chat
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-textDark mb-1 font-heading">Email</h3>
                    <p className="text-textDark font-body"><a href="mailto:contact@mktrugs.com" className="text-primary hover:underline">contact@mktrugs.com</a></p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-textLight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-textDark mb-1 font-heading">Business Hours</h3>
                    <p className="text-textDark font-body">Mon – Sat, 10:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            
            <div>
              <h2 className="text-3xl font-heading font-semibold text-textDark mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-textDark mb-2 font-body">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-textDark mb-2 font-body">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-textDark mb-2 font-body">Inquiry Type</label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body bg-white"
                    >
                      <option>Custom Order</option>
                      <option>Wholesale</option>
                      <option>General Question</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-textDark mb-2 font-body">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                      placeholder="How can we help you?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-textDark mb-2 font-body">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body resize-vertical"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <p className="text-xs text-textDark/70 font-body">We typically reply within 24 hours.</p>
                <Button variant="gold" type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
              
              <div className="hidden lg:block mt-10">
                <img
                  src="/images/Elma Geometric Jute Rug _ Natural.jpg"
                  alt="Contact illustration"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-16 bg-bgLight" id="map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-semibold text-textDark mb-4">
              Visit Our Facility
            </h2>
            <p className="text-lg text-textDark max-w-2xl mx-auto leading-relaxed font-body">
              India, Gopalnagar, Near Post Office, North 24 Parganas, Kolkata
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow border border-gray-200">
            <div className="relative w-full" style={{paddingBottom: '45%'}}>
              <iframe
                title="MKT Rugs Location"
                src="https://www.google.com/maps?q=Gopalnagar+Near+Post+Office+North+24+Parganas+Kolkata&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="md:col-span-2 text-center md:text-left">
                <p className="text-textDark font-body">MKT Rugs, India, Gopalnagar, Near Post Office, North 24 Parganas, Kolkata</p>
                <div className="mt-2 flex flex-wrap gap-3 justify-center md:justify-start">
                  <a className="text-primary underline font-body" href="https://maps.google.com/?q=Gopalnagar+Near+Post+Office+North+24+Parganas+Kolkata" target="_blank" rel="noreferrer">Open in Google Maps</a>
                  <a href="#visit" className="text-secondary font-semibold font-body hover:underline">Schedule a Visit →</a>
                </div>
              </div>
              <img src="/images/Hart in Terracotta.jpg" alt="Facility preview" className="w-full h-28 object-cover rounded-md shadow" />
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading text-textDark">What clients say</h3>
            <div className="mx-auto mt-3 w-24 h-1 bg-gold" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              quote: 'Amazing craftsmanship! Our living room rug was custom-made and delivered on time.', name: 'Client – Delhi'
            },{
              quote: 'Professional team and eco-friendly materials. Highly recommend for bespoke projects.', name: 'Studio – Mumbai'
            },{
              quote: 'Great quality and service. The wool rug feels luxurious underfoot.', name: 'Retail Partner – Pune'
            }].map((t,i)=> (
              <div key={i} className="bg-bgGrey rounded-lg p-6 border border-gray-100 shadow-sm">
                <svg className="w-6 h-6 text-gold mb-2" viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h4v10H5V9a2 2 0 012-2zm10 0h4v10h-6V9a2 2 0 012-2z"/></svg>
                <p className="text-textDark/90 font-body">{t.quote}</p>
                <div className="mt-3 text-sm text-secondary font-semibold">{t.name}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/catalogue.pdf" className="inline-flex"><Button variant="secondary" className="border-gold text-textDark">Download 2025 Catalogue</Button></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex"><Button variant="gold">Follow on Instagram</Button></a>
          </div>
        </div>
      </section>

      
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {['/images/Jute Boucle Rug.jpg','/images/Hart in Terracotta.jpg','/images/Naturals Basket.jpg','/images/Summer Novelty Coir Doormat _ The Company Store.jpg','/images/download (1).jpg','/images/download (6).jpg'].map((src,i)=> (
              <img key={i} src={src} alt={`contact-strip-${i}`} className="w-full h-24 object-cover rounded" />
            ))}
          </div>
        </div>
      </section>

      
      <section className="relative py-16">
        <div className="absolute inset-0">
          <img src="/images/flat-lay-monochromatic-assortment-textiles.jpg" alt="Rug texture background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/80"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-textLight mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-textLight mb-8 leading-relaxed">
            Let's discuss how we can bring the beauty of natural jute to your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/enquiry" className="inline-flex"><Button variant="gold">Get a Free Quote</Button></a>
            <a href="tel:+917778886215" className="inline-flex"><Button variant="secondary" className="!border-white !text-white hover:!bg-white hover:!text-secondary">Call Us Now</Button></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;