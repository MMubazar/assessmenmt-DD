import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-default navbar-fixed-top  opaque">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">
              LeadPage
            </a>

            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="fas fa-bars"></i>
              </span>
            </button>

            <div className="navbar-collapse collapse" id="navbarCollapse">
              <ul
                className="navbar-nav ml-auto"
                style={{ marginLeft: "390px" }}
              >
                <li>
                  <a href="#home">Home</a>
                </li>

                <li>
                  <a href="#services">What We Do</a>
                </li>

                <li>
                  <a href="#gallery">Our Work</a>
                </li>

                <li>
                  <a href="#features">How It Works</a>
                </li>

                <li className="discover-link">
                  <a href="#home" className="external discover-btn">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Header;
