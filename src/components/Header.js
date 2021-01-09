import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const navbarStyles = {
  backgroundColor: 'white',
  padding: '0',
  marginTop: '50px'
}

const navbarContainerStyles = {
  display: 'flex',
  justifyContent: 'space-between'
}

const navTitleStyles = {
  letterSpacing: '-2px',
  fontSize: '2em',
  fontWeight: '800'
}

const imgStyles = {
  width: '2em',
  borderRadius: '30%',
  marginRight: '11px'
}

const brandStyles = {
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
}

const languageStyles = {
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'space-between'
}

const engStyles = {
  width: '50px',
  textAlign: 'center'
}
const Header = () => {
  const { t, i18n } = useTranslation();

  console.log('i18n:', i18n);

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <nav className="navbar navbar-light" style={navbarStyles}>
      <div className="container" style={navbarContainerStyles}>
        <Link to="/" className="navbar-brand" style={brandStyles}>
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" style={imgStyles}/>
          <div style={navTitleStyles}>{t('URL Album')}</div>
        </Link>
        <div style={languageStyles}>
          <div><i class="fas fa-globe-asia"></i></div>
          <div className="langChange" style={engStyles}onClick={() => handleClick('en')}>Eng</div>
          <div className="langChange" onClick={() => handleClick('ko')}>한국어</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
