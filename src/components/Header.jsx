import React from 'react';

function Header() {
  return (
    <header className="masthead bg-info text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        <img className="masthead-avatar mb-5" src="../public/bean.png" alt="mr. bean" />

        <h1 className="masthead-heading text-uppercase mb-0">Hi, I'm Will!</h1>

        <div className="divider-custom divider-light">
          <div className="divider-custom-line" />
          <div className="divider-custom-icon">
            <i className="fas fa-star" />
          </div>
          <div className="divider-custom-line" />
        </div>

        <p className="masthead-subheading font-weight-light mb-0">Web Developer</p>
      </div>
    </header>
  );
}

export default Header;
