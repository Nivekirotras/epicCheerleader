// components/google-ad-in-article.tsx
import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

interface GoogleAdInArticleProps {
  adSlot: string;
}

const GoogleAdInArticle: React.FC<GoogleAdInArticleProps> = ({ adSlot }) => {
  useEffect(() => {
    try {
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
      data-ad-slot={adSlot}
    />
  );
};

export default GoogleAdInArticle;
