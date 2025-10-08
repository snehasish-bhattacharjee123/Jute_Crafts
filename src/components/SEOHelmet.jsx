import React from "react";
import { Helmet } from "react-helmet-async";

const SEOHelmet = ({
  title = "MKT Rugs — Handcrafted Natural Fibre Rugs | From Farm to Floor",
  description = "Premium handcrafted rugs made from natural fibres. Sustainable jute, cotton & wool rugs manufactured in West Bengal, India. B2B export specialist with global shipping.",
  canonical,
  image = "https://www.mktrugs.com/images/HOME_1.jpg",
  type = "website",
  keywords,
  author = "MKT Rugs",
  siteName = "MKT Rugs",
  locale = "en_US",
  twitterHandle = "@mktrugs",
  jsonLd,
  noindex = false,
  nofollow = false,
}) => {
  // Generate robots meta content
  const robotsContent = [];
  if (noindex) robotsContent.push('noindex');
  else robotsContent.push('index');
  if (nofollow) robotsContent.push('nofollow');
  else robotsContent.push('follow');

  // Default structured data for organization
  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MKT Rugs",
    "alternateName": "Maa Kali Traders",
    "url": "https://www.mktrugs.com",
    "logo": "https://www.mktrugs.com/images/MKT Rugs_1 PNG.png",
    "description": "B2B export specialist in handcrafted natural carpets from West Bengal, India. Manufacturing premium jute, cotton, and wool rugs with sustainable practices.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gopalnagar, Near Post Office",
      "addressLocality": "North 24 Parganas",
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-77788-86215",
      "contactType": "Customer Service",
      "email": "contact@mktrugs.com"
    },
    "sameAs": [
      "https://instagram.com/mktrugs",
      "https://facebook.com/mktrugs",
      "https://twitter.com/mktrugs",
      "https://youtube.com/@mktrugs"
    ],
    "foundingDate": "2008",
    "founder": {
      "@type": "Person",
      "name": "Rahul Sarder"
    },
    "areaServed": "Worldwide",
    "serviceType": "Rug Manufacturing and Export"
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent.join(', ')} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Viewport and Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {canonical && <meta property="og:url" content={canonical} />}
      {image && (
        <>
          <meta property="og:image" content={image} />
          <meta property="og:image:alt" content="MKT Rugs - Handcrafted Natural Fibre Rugs" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      {image && <meta name="twitter:image:alt" content="MKT Rugs - Handcrafted Natural Fibre Rugs" />}
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#116054" />
      <meta name="msapplication-TileColor" content="#116054" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd || defaultJsonLd)}
      </script>
    </Helmet>
  );
};

export default SEOHelmet;


