import React from 'react';
import Script from 'next/script';

// Extend the Window interface to include adsbygoogle (helps TypeScript)
declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const GoogleAdInArticle = () => {
  return (
    <>
      {/* Load the Google AdSense script */}
      <Script
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9008787039545928"
        crossOrigin="anonymous"
      />
      
      {/* Ad container */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-9008787039545928"
        data-ad-slot="4318112437"
      />
      
      {/* Push the ad (initialize the ad slot) */}
      <Script id="adsbygoogle-push" strategy="afterInteractive">
        {`
          (adsbygoogle = window.adsbygoogle || []).push({});
        `}
      </Script>
    </>
  );
};

export default GoogleAdInArticle;