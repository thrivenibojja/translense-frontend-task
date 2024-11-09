import React from 'react';
import './header.css';
import logo from '../biscuit.jpg'; // Adjust the path as needed

const Header: React.FC = () => (
  <header className="header bg-white p-4 shadow-sm d-flex align-items-center">
    <img src={logo} alt="Logo" className="header-logo rounded-circle" />
    <div className="header-text">
      <h1 className="text-danger">Partner With Us</h1>
      <p className='desc'>Be our partner in just a few steps and start increasing your reach by gaining new customers.</p>
    </div>
  </header>
);

export default Header;

