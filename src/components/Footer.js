import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const footerStyles = {
  width: '100vw',
  height: '100px',
  bottom: '0',
  paddingTop: '20px',
  paddingBottom: '20px',
  backgroundColor: '#547ae423',
}

const Footer = () => {
  const footerRef = useRef(null);

  if(footerRef.current)
    console.log('footerRef.current.clientHeight:', footerRef.current.clientHeight);

  return (
    <footer style={footerStyles} ref={footerRef}>
      <div className="container">
        <Link to="/privacy">
          <p className="text-center my-3">
            Privacy Policy
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
