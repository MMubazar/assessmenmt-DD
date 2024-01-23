import React from "react";
import Image from "../assets/images/electrician1.jpg";

const Qualified = () => {
  return (
    <>
      <section className="section-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6 padding-top-30">
              <h3>Qualified electricians in New York.</h3>

              <p>
                Velis demo enim ipsam voluptatem quia voluptas sit aspernatur
                netsum lorem fugit, seditum netis velas matrix net nesciunt.
              </p>

              <ul className="benefits">
                <li>
                  <i className="fas fa-check"></i> Quias netus magni netsum eos
                  qui ratione sequi.
                </li>
                <li>
                  <i className="fas fa-check"></i> Venis ratione sequi netus
                  enim quia tempor magni.
                </li>
                <li>
                  <i className="fas fa-check"></i> Enim ipsam netus voluptatem
                  quia voluptas.
                </li>
              </ul>

              <a href="#contact" className="btn-green small scrool">
                Get Started
              </a>
            </div>

            <div className="col-md-6">
              <div className="video-popup-wrapper margin-left-20">
                <div className="popup-gallery">
                  <img
                    src={Image}
                    className="width-100 box-shadow hero-images"
                    alt="pic"
                  />

                  <a
                    className="popup4 video-play-icon"
                    href="https://www.youtube.com/watch?v=FPfQMVf4vwQ"
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualified;
