import React from 'react';
import { Link } from 'react-router-dom';

const navbarStyles = {
  backgroundColor: '#547ae423',
  height: ''
}

const navTitleStyles = {
  fontSize: '2em'
}

const imgStyles = {
  width: '2em'
}

const brandStyles = {
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center'
}

const Header = () => {
  return (
    <nav className="navbar navbar-light" style={navbarStyles}>
      <div className="container">
        <Link to="/" className="navbar-brand" style={brandStyles}>
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" className="me-3" style={imgStyles}/>
          <div style={navTitleStyles}>Favellect</div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
