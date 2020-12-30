import React from 'react';
import { Link } from 'react-router-dom';

const navbarStyles = {
  backgroundColor: '#b1b1b1',
  padding: '0'
}

const navTitleStyles = {
  fontSize: '2em'
}

const imgStyles = {
  width: '2em',
  borderRadius: '30%',
  marginRight: '11px'
}

const brandStyles = {
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center'
}

const Header = () => {
  return (
    <nav className="navbar navbar-light" style={navbarStyles}>
      <div className="container-sm">
        <Link to="/" className="navbar-brand" style={brandStyles}>
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" style={imgStyles}/>
          <div style={navTitleStyles}>Favollect</div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
