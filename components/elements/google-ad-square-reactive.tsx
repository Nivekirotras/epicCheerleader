// components/GoogleAdSquareReactive.tsx
import React, { useEffect } from 'react';

// Extend the Window interface for TypeScript
declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const GoogleAdSquareReactive = () => {
  useEffect(() => {
    try {
      // This will initialize the ad container when the component mounts
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('Google AdSense error:', error);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', textAlign: 'center', minHeight: '250px' }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-9008787039545928"
      data-ad-slot="4318112437"
    />
  );
};

export default GoogleAdSquareReactive;
