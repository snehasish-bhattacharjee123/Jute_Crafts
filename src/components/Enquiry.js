import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';

function Enquiry() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent('B2B Enquiry - MKT RUGS');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:contact@mktrugs.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-bgGrey">
      {/* Hero */}
      <section className="relative h-[28vh] sm:h-[36vh] lg:h-[42vh]">
        <div className="absolute inset-0 bg-secondary/90" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-textLight">Enquiry</h1>
            <p className="text-textLight/90 mt-2 font-body">FROM FARM TO FLOOR — Manufacturer & Exporter of Rugs and Carpets</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 bg-bgGrey">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-6 sm:p-8 rounded-lg shadow border border-gray-100">
          <h2 className="text-2xl font-heading font-semibold text-textDark mb-6">Send us your requirements</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-body text-textDark mb-2">Full Name *</label>
                <input name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body"/>
              </div>
              <div>
                <label className="block text-sm font-body text-textDark mb-2">Company</label>
                <input name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body"/>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-body text-textDark mb-2">Email *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body"/>
              </div>
              <div>
                <label className="block text-sm font-body text-textDark mb-2">Phone</label>
                <input name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body"/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-body text-textDark mb-2">Message *</label>
              <textarea name="message" required rows={6} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-body resize-vertical"/>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="primary" type="submit">Submit Enquiry</Button>
              <NavLink to="/contact" className="font-body text-primary hover:text-secondary">Or contact us</NavLink>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Enquiry;
