'use client';

const AdBanner = () => {
  const containerStyle = {
    border: '2px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    marginBottom: '20px',
    minHeight: '100px',
    position: 'relative' as const,
    backgroundColor: '#f9f9f9'
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

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>Ad Goes Here</div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9549547938638588"
        data-ad-slot="8386290279"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdBanner; 