import React from 'react';
import { Helmet } from 'react-helmet-async';

const GoogleAnalytics = ({ 
  measurementId = 'G-XXXXXXXXXX', // Replace with your actual GA4 Measurement ID
  enableInDevelopment = false 
}) => {
  // Only load in production unless explicitly enabled in development
  const shouldLoad = process.env.NODE_ENV === 'production' || enableInDevelopment;
  
  if (!shouldLoad || !measurementId) {
    return null;
  }

  return (
    <Helmet>
      {/* Google tag (gtag.js) */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true
          });
        `}
      </script>
    </Helmet>
  );
};

// Hook for tracking custom events
export const useGoogleAnalytics = () => {
  const trackEvent = (action, category = 'General', label = '', value = 0) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  };

  const trackPurchase = (transactionId, value, currency = 'USD', items = []) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: transactionId,
        value: value,
        currency: currency,
        items: items
      });
    }
  };

  const trackContact = (method = 'form') => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'contact', {
        event_category: 'Engagement',
        event_label: method
      });
    }
  };

  const trackDownload = (fileName) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'file_download', {
        event_category: 'Downloads',
        event_label: fileName
      });
    }
  };

  return {
    trackEvent,
    trackPurchase,
    trackContact,
    trackDownload
  };
};

export default GoogleAnalytics;