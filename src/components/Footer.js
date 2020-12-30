import React from 'react';
import { Link } from 'react-router-dom';

const footerStyles = {
  width: '100vw',
  bottom: '0',
  paddingTop: '20px',
  paddingBottom: '20px',
  backgroundColor: '#6954e423'
}

const Footer = () => {
  return (
    <footer style={footerStyles}>
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
