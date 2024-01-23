import React from "react";
import Person1 from "../assets/images/testimonials1.jpg";
import Person2 from "../assets/images/testimonials2.jpg";
import Person3 from "../assets/images/testimonials3.jpg";

const Testimonials = () => {
  return (
    <>
      <section className="section-white">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center padding-bottom-40">
              <h2 className="section-title">Clients Testimonials</h2>

              <p className="section-subtitle">What Our Clients Are Saying.</p>
            </div>

            <div className="col-md-4">
              <div className="testim-inner first">
                <img src={Person1} alt="testimonials" className="testim-img" />

                <p>
                  The attention of a traveller, should be particularly turned to
                  the various works of nature.
                </p>

                <h6>
                  Emily Richards<span className="job-text"> - Copywriter</span>
                </h6>

                <div className="testim-rating">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testim-inner">
                <img src={Person2} alt="testimonials" className="testim-img" />

                <p>
                  The attention of a traveller, should be particularly turned to
                  the various works of nature.
                </p>

                <h6>
                  John Doe<span className="job-text"> - General Manager</span>
                </h6>

                <div className="testim-rating">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testim-inner">
                <img src={Person3} alt="testimonials" className="testim-img" />

                <p>
                  The attention of a traveller, should be particularly turned to
                  the various works of nature.
                </p>

                <h6>
                  Jane Smith<span className="job-text"> - Web Designer</span>
                </h6>

                <div className="testim-rating">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
