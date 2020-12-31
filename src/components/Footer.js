import React from 'react';
import { Link } from 'react-router-dom';

const footerStyles = {
  width: '100%',
  height: '80px',
  marginTop: '90px',
  backgroundColor: 'white',
};

const contentWrapperStyles = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const Footer = () => {
  return (
    <footer>
      <div style={footerStyles}>
        <div className="container" style={contentWrapperStyles}>
          <Link to="/privacy">
            <p className="text-center py-3 my-0">
              Privacy Policy
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
