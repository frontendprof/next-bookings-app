import React from 'react';
// import Image from 'next/image';

const Header = () => {
  return (
    <nav className="navbar row justify-content-center sticky-top">
      <div className="container">
        <div className="col-3 p-0">
          <div className="navbar-brand">
            <img src="/assets/bookit.png" alt="bookIt" style={{ cursor: 'pointer' }} />
          </div>
        </div>

        <div className="col-3 mt-3 mt-md-0 text-center">
          <a className="btn btn-danger px-4 text-white login-header-btn float-right">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
