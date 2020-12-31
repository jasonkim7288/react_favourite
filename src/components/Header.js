import React from 'react';
import { Link } from 'react-router-dom';

const navbarStyles = {
  backgroundColor: 'white',
  padding: '0',
  letterSpacing: '-2px',
  marginTop: '50px'
}

const navbarContainerStyles = {
  display: 'flex',
  justifyContent: 'center'
}

const navTitleStyles = {
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

const Header = () => {
  return (
    <nav className="navbar navbar-light" style={navbarStyles}>
      <div className="container-sm" style={navbarContainerStyles}>
        <Link to="/" className="navbar-brand" style={brandStyles}>
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" style={imgStyles}/>
          <div style={navTitleStyles}>Favollect</div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
