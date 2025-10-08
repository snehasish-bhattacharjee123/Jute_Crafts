// SEO Configuration for MKT Rugs Website
// This file contains all SEO-related settings and page-specific metadata

const SITE_CONFIG = {
  siteName: 'MKT Rugs',
  siteUrl: 'https://www.mktrugs.com',
  defaultTitle: 'MKT Rugs — Handcrafted Natural Fibre Rugs | From Farm to Floor',
  titleTemplate: '%s | MKT Rugs',
  defaultDescription: 'Premium handcrafted rugs made from natural fibres. Sustainable jute, cotton & wool rugs manufactured in West Bengal, India. B2B export specialist with global shipping.',
  defaultImage: 'https://www.mktrugs.com/images/HOME_1.jpg',
  twitterHandle: '@mktrugs',
  author: 'MKT Rugs',
  locale: 'en_US',
  themeColor: '#116054'
};

// Page-specific SEO configurations
export const PAGE_SEO = {
  home: {
    title: 'MKT Rugs — Handcrafted Natural Fibre Rugs | From Farm to Floor',
    description: 'Premium handcrafted rugs made from natural fibres. Sustainable jute, cotton & wool rugs manufactured in West Bengal, India. B2B export specialist.',
    keywords: 'handcrafted rugs, natural fibre rugs, jute rugs, sustainable rugs, handmade carpets, Bengal rugs, eco-friendly rugs, B2B export',
    canonical: 'https://www.mktrugs.com/',
    type: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'MKT Rugs',
      'alternateName': 'Maa Kali Traders',
      'url': 'https://www.mktrugs.com',
      'logo': 'https://www.mktrugs.com/images/MKT Rugs_1 PNG.png',
      'description': 'B2B export specialist in handcrafted natural carpets from West Bengal, India.',
      'founder': {
        '@type': 'Person',
        'name': 'Rahul Sarder'
      },
      'foundingDate': '2008',
      'areaServed': 'Worldwide'
    }
  },
  
  about: {
    title: 'About MKT Rugs — From Farm to Floor | Heritage & Sustainability',
    description: 'Learn about MKT Rugs: authentic handcrafted rugs from West Bengal, integrated production, and sustainable natural fibres. Our journey from 2008.',
    keywords: 'about MKT Rugs, rug manufacturing history, sustainable production, West Bengal rugs, handcraft heritage, Maa Kali Traders',
    canonical: 'https://www.mktrugs.com/about',
    type: 'website'
  },

  products: {
    title: 'Rug Collections — Bengal Folk Craft, Coastal Wave, Banana Bloom | MKT Rugs',
    description: 'Explore handcrafted rug collections: Bengal Folk Craft jute rugs, Coastal Wave indoor-outdoor, Banana Bloom eco-friendly, EarthBound wool blends.',
    keywords: 'rug collections, Bengal folk craft rugs, coastal wave rugs, banana bloom rugs, earthbound collection, natural fibre rugs, handwoven carpets',
    canonical: 'https://www.mktrugs.com/products',
    type: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': 'MKT Rugs Product Collections',
      'description': 'Handcrafted rug collections made from natural fibres',
      'url': 'https://www.mktrugs.com/products'
    }
  },

  gallery: {
    title: 'Rug Gallery — Natural Fibres & Craft | MKT Rugs',
    description: 'Browse our gallery of handcrafted rugs, facilities, and artisan craftsmanship in natural fibres. See the MKT Rugs manufacturing process.',
    keywords: 'rug gallery, handcrafted rug images, natural fibre rugs, artisan craftsmanship, MKT Rugs facility, rug manufacturing process',
    canonical: 'https://www.mktrugs.com/gallery',
    type: 'website'
  },

  contact: {
    title: 'Contact MKT Rugs — Get a Quote | B2B Export Inquiries',
    description: 'Contact MKT Rugs for custom rug designs, wholesale partnerships, and export inquiries. Get quick response from West Bengal, India.',
    keywords: 'contact MKT Rugs, rug export inquiry, wholesale rugs, custom rug design, B2B contact, West Bengal rug manufacturer',
    canonical: 'https://www.mktrugs.com/contact',
    type: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contact MKT Rugs',
      'description': 'Contact page for MKT Rugs - handcrafted rug manufacturer',
      'url': 'https://www.mktrugs.com/contact'
    }
  },

  blog: {
    title: 'Insights on Natural Fibre Rugs | MKT Rugs Blog',
    description: 'Read insights on natural fibre rugs, sustainability, and artisan craftsmanship from MKT Rugs. Rug care tips and interior design ideas.',
    keywords: 'rug blog, natural fibre insights, rug care tips, sustainable rugs, interior design, handcraft stories, rug maintenance',
    canonical: 'https://www.mktrugs.com/blog',
    type: 'website'
  },

  whyUs: {
    title: 'Why Choose MKT Rugs | Problem-Solving Rug Manufacturing',
    description: 'Discover how MKT Rugs solves common industry problems: on-time delivery, quality consistency, ethical production, and sustainable practices.',
    keywords: 'why choose MKT Rugs, reliable rug manufacturer, quality rugs, ethical production, sustainable manufacturing, on-time delivery',
    canonical: 'https://www.mktrugs.com/why-us',
    type: 'website'
  }
};

// Common structured data schemas
export const STRUCTURED_DATA = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'MKT Rugs',
    'alternateName': 'Maa Kali Traders',
    'url': 'https://www.mktrugs.com',
    'logo': 'https://www.mktrugs.com/images/MKT Rugs_1 PNG.png',
    'description': 'B2B export specialist in handcrafted natural carpets from West Bengal, India. Manufacturing premium jute, cotton, and wool rugs with sustainable practices.',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Gopalnagar, Near Post Office',
      'addressLocality': 'North 24 Parganas',
      'addressRegion': 'West Bengal',
      'addressCountry': 'IN'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+91-77788-86215',
      'contactType': 'Customer Service',
      'email': 'contact@mktrugs.com'
    },
    'sameAs': [
      'https://instagram.com/mktrugs',
      'https://facebook.com/mktrugs',
      'https://twitter.com/mktrugs',
      'https://youtube.com/@mktrugs'
    ],
    'foundingDate': '2008',
    'founder': {
      '@type': 'Person',
      'name': 'Rahul Sarder'
    },
    'areaServed': 'Worldwide',
    'serviceType': 'Rug Manufacturing and Export'
  },

  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'MKT Rugs',
    'image': 'https://www.mktrugs.com/images/MKT Rugs_1 PNG.png',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Gopalnagar, Near Post Office',
      'addressLocality': 'North 24 Parganas',
      'addressRegion': 'West Bengal',
      'postalCode': '700000',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '22.5726',
      'longitude': '88.3639'
    },
    'telephone': '+91-77788-86215',
    'email': 'contact@mktrugs.com',
    'url': 'https://www.mktrugs.com',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      'opens': '10:00',
      'closes': '18:00'
    },
    'priceRange': '$$'
  }
};

export default SITE_CONFIG;