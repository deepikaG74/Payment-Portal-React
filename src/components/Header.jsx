import React from 'react';

const Header = ({ title = 'Payment Portal', subtitle = 'Secure payments, fast checkout' }) => {
  return (
    <header className="header">
      <div className="header-branding">
        <h1 className="header-title">{title}</h1>
        <p className="header-subtitle">{subtitle}</p>
      </div>
      <nav className="header-nav">
        <a href="#home" className="header-link">Home</a>
        <a href="#payments" className="header-link">Payments</a>
        <a href="#support" className="header-link">Support</a>
      </nav>
    </header>
  );
};

export default Header;


