import React from "react";
import work1 from '../assets/images/work1.jpg'
import work2 from '../assets/images/work2.jpg'
import work3 from '../assets/images/work3.jpg'
import work4 from '../assets/images/work4.jpg'
import work5 from '../assets/images/work5.jpg'
import work6 from '../assets/images/work6.jpg'

const Gallery = () => {
  return (
    <>
      {/* <!--begin gallery section --> */}
      <section className="section-grey" id="gallery">
        {/* <!--begin container --> */}
        <div className="container">
          {/* <!--begin row --> */}
          <div className="row">
            {/* <!--begin col-md-12 --> */}
            <div className="col-md-12 text-center padding-bottom-20">
              <h2 className="section-title">Our Latest Projects</h2>

              <p className="section-subtitle">
                Here are a few examples of our latest work.
              </p>
            </div>
            {/* <!--end col-md-12 --> */}
          </div>
          {/* <!--end row --> */}
        </div>
        {/* <!--end container --> */}

        {/* <!--begin container --> */}
        <div className="container">
          {/* <!--begin row--> */}
          <div className="row">
            {/* <!--begin col-md-4 --> */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <figure className="gallery-insta">
                {/* <!--begin popup-gallery--> */}
                <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                  <a className="popup2" href={work1}>
                    <img
                      src={work1}
                      className="width-100"
                      alt="pic"
                    />
                    <span className="eye-wrapper">
                      <i
                        className="fa fa-search-plus eye-icon"
                        style={{ fontSize: "38px" }}
                      ></i>
                    </span>
                  </a>
                </div>
                {/* <!--end popup-gallery--> */}
              </figure>
            </div>
            {/* <!--end col-md-4 --> */}

            {/* <!--begin col-md-4 --> */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <figure className="gallery-insta">
                {/* <!--begin popup-gallery--> */}
                <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                  <a className="popup2" href={work2}>
                    <img
                      src={work2}
                      className="width-100"
                      alt="pic"
                    />
                    <span className="eye-wrapper">
                      <i
                        className="fa fa-search-plus eye-icon"
                        style={{ fontSize: "38px" }}
                      ></i>
                    </span>
                  </a>
                </div>
                {/* <!--end popup-gallery--> */}
              </figure>
            </div>
            {/* <!--end col-md-4 --> */}

            {/* <!--begin col-md-4 --> */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <figure className="gallery-insta">
                {/* <!--begin popup-gallery--> */}
                <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                  <a className="popup2" href={work3}>
                    <img
                      src={work3}
                      className="width-100"
                      alt="pic"
                    />
                    <span className="eye-wrapper">
                      <i
                        className="fa fa-search-plus eye-icon"
                        style={{ fontSize: "38px" }}
                      ></i>
                    </span>
                  </a>
                </div>
                {/* <!--end popup-gallery--> */}
              </figure>
            </div>
            {/* <!--end col-md-4 --> */}

            {/* <!--begin col-md-4 --> */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <figure className="gallery-insta">
                {/* <!--begin popup-gallery--> */}
                <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                  <a className="popup2" href={work4}>
                    <img
                      src={work4}
                      className="width-100"
                      alt="pic"
                    />
                    <span className="eye-wrapper">
                      <i
                        className="fa fa-search-plus eye-icon"
                        style={{ fontSize: "38px" }}
                      ></i>
                    </span>
                  </a>
                </div>
                {/* <!--end popup-gallery--> */}
              </figure>
            </div>
            {/* <!--end col-md-4 --> */}

            {/* <!--begin col-md-4 --> */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <figure className="gallery-insta">
                {/* <!--begin popup-gallery--> */}
                <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                  <a className="popup2" href={work5}>
                    <img
                      src={work5}
                      className="width-100"
                      alt="pic"
                    />
                    <span className="eye-wrapper">
                      <i
                        className="fa fa-search-plus eye-icon"
                        style={{ fontSize: "38px" }}
                      ></i>
                    </span>
                  </a>
                </div>
                {/* <!--end popup-gallery--> */}
              </figure>
            </div>
            {/* <!--end col-md-4 --> */}

            {/* <!--begin col-md-4 --> */}
            <div className="col-md-4 col-sm-6 col-xs-12">
              <figure className="gallery-insta">
                {/* <!--begin popup-gallery--> */}
                <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                  <a className="popup2" href={work6}>
                    <img
                      src={work6}
                      className="width-100"
                      alt="pic"
                    />
                    <span className="eye-wrapper">
                      <i
                        className="fa fa-search-plus eye-icon"
                        style={{ fontSize: "38px" }}
                      ></i>
                    </span>
                  </a>
                </div>
                {/* <!--end popup-gallery--> */}
              </figure>
            </div>
            {/* <!--end col-md-4 --> */}
          </div>
          {/* <!--end row --> */}
        </div>
        {/* <!--end container --> */}
      </section>
      {/* <!--end gallery section --> */}
    </>
  );
};

export default Gallery;
