import React from "react";
import Image1 from "../assets/images/main-services1.jpg";
import Image2 from "../assets/images/main-services2.jpg";
import Image3 from "../assets/images/main-services5.jpg";

const Services = () => {
  return (
    <>
      <section className="section-grey" id="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="section-title">Discover Our Services</h2>

              <p className="section-subtitle">
                Professional service for all your home electrical needs.
              </p>
            </div>
          </div>
        </div>

        <div className="services-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="main-services">
                  <img src={Image1} className="width-100" alt="pic" />

                  <h3>
                    <a href="#">Domestic Services</a>
                  </h3>

                  <p>
                    Curabitur quam etsum lacus netum netsum nulatis iaculis
                    etsimun vitaemis etsum nisle varius netsum.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="main-services">
                  <img src={Image3} className="width-100" alt="pic" />

                  <h3>
                    <a href="#">Electrical Installation</a>
                  </h3>

                  <p>
                    Curabitur quam etsum lacus netum netsum nulatis iaculis
                    etsimun vitaemis etsum nisle varius netsum.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="main-services">
                  <img src={Image2} className="width-100" alt="pic" />

                  <h3>
                    <a href="#">Led Lighting</a>
                  </h3>

                  <p>
                    Curabitur quam etsum lacus netum netsum nulatis iaculis
                    etsimun vitaemis etsum nisle varius netsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
