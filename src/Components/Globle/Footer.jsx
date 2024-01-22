import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-top">
        <div className="row">
          <div className="col-md-4 text-center">
            <i className="fa fa-map"></i>

            <h5>Get In Touch</h5>

            <p>10 Oxford Street, London, UK, E1 1EC</p>

            <p>
              <a href="mailto:contact@youremail.com">
                the-office@leadpage.co.uk
              </a>
            </p>

            <p>+44 987 654 321</p>
          </div>

          <div className="col-md-4 text-center">
            <i className="fa fa-commenting"></i>

            <h5>Social Media</h5>

            <p>See bellow where you can find us.</p>

            <ul className="footer_social">
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fab fa-pinterest"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fab fa-skype"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fab fa-dribble"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 text-center">
            <i className="fas fa-link"></i>

            <h5>Useful Links</h5>

            <a href="#" className="footer-links">
              Our Cookies Policy
            </a>

            <a href="#" className="footer-links">
              Meet The Team Behind LeadPage
            </a>

            <a href="#" className="footer-links">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid footer-bottom px-0">
        <div className="row no-gutters mx-0">
          <div className="col-md-12 text-center">
            <p>
              Copyright © 2020 <span className="template-name">LeadPage</span>.
              Designed by{" "}
              <a href="#" target="_blank">
                Epic-Themes
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
