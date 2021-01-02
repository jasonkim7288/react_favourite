import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const footerStyles = {
  width: '100%',
  height: '80px',
  marginTop: '0px',
  backgroundColor: 'white',
};

const contentWrapperStyles = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div style={footerStyles}>
        <div className="container" style={contentWrapperStyles}>
          <Link to="/privacy">
            <p className="text-center py-3 my-0">
              {t('Privacy Policy')}
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
