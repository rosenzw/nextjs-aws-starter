'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdBanner = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const loadAdSense = () => {
      try {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9549547938638588';
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);

        const ins = document.createElement('ins');
        ins.className = 'adsbygoogle';
        ins.style.display = 'block';
        ins.setAttribute('data-ad-client', 'ca-pub-9549547938638588');
        ins.setAttribute('data-ad-slot', '8386290279');
        ins.setAttribute('data-ad-format', 'auto');
        ins.setAttribute('data-full-width-responsive', 'true');
        
        const container = document.querySelector('.ad-container');
        if (container) {
          container.appendChild(ins);
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (error) {
        console.error('Error loading AdSense:', error);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadAdSense, 100);

    return () => {
      clearTimeout(timer);
      // Clean up the script tag if the component unmounts
      const scriptsToRemove = document.querySelectorAll('script[src*="adsbygoogle.js"]');
      scriptsToRemove.forEach((script) => script.remove());
    };
  }, []);

  const containerStyle = {
    border: '2px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    marginBottom: '20px',
    minHeight: '100px',
    position: 'relative' as const
  };

  const titleStyle = {
    position: 'absolute' as const,
    top: '-10px',
    left: '10px',
    background: 'white',
    padding: '0 5px',
    fontSize: '14px',
    color: '#666'
  };

  if (!isClient) {
    return (
      <div style={containerStyle}>
        <div style={titleStyle}>Ad Goes Here</div>
        Loading ad...
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>Ad Goes Here</div>
      <div className="ad-container" style={{ minHeight: '100px' }} />
    </div>
  );
};

export default AdBanner; 