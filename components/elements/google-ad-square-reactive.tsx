import React, { useEffect } from 'react';

// Declare the adsbygoogle property on the Window interface
declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const GoogleAdSquareReactive = () => {
  useEffect(() => {
    try {
      // Cast window.adsbygoogle to any to avoid TypeScript errors
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('Google AdSense error:', error);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-9008787039545928"
      data-ad-slot="2610279097"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default GoogleAdSquareReactive;
