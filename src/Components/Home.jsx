import React from "react";
import Image from "../assets/images/bg0.jpg";

const Home = () => {
  return (
    <>
      <section className="hero-wrapper" id="home">
        <div className="section-blue no-padding">
          <div className="container-fluid px-0">
            <div className="row no-gutters">
              <div className="col-md-6">
                <img src={Image} className="width-100" alt="image" />
              </div>
              {/* <!--end col-sm-6--> */}

              {/* <!--begin col-md-6--> */}
              <div className="col-md-6 margin-top-50">
                {/* <!--begin small-column-inside--> */}
                <div className="small-col-inside">
                  {/* <!--begin register-form-wrapper--> */}
                  <div
                    className="register-form-wrapper wow bounceIn"
                    data-wow-delay="0.5s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.5s",
                      animationName: "bounceIn",
                    }}
                  >
                    <h1 className="white-text">Need An Electrician?</h1>

                    <p className="white-text">
                      Professional service for all your home electrical needs.
                      Please fill the form bellow for a free, no obligation
                      quote.
                    </p>

                    {/* <!--begin form--> */}
                    <div>
                      {/* <!--begin success message --> */}
                      <p
                        className="register_success_box"
                        style={{ display: "none" }}
                      >
                        We received your message and you'll hear from us soon.
                        Thank You!
                      </p>
                      {/* <!--end success message --> */}

                      {/* <!--begin register form --> */}
                      <form
                        id="register-form"
                        className="register-form register"
                        action="php/register.php"
                        method="post"
                      >
                        <input
                          className="register-input name-input"
                          required=""
                          name="register_names"
                          placeholder="Your Name*"
                          type="text"
                        />

                        <input
                          className="register-input name-email"
                          required=""
                          name="register_email"
                          placeholder="Email Adress*"
                          type="email"
                        />

                        <input
                          className="register-input name-input"
                          required=""
                          name="register_phone"
                          placeholder="Phone Number*"
                          type="text"
                        />

                        <textarea
                          className="register-comment"
                          rows="2"
                          cols="20"
                          name="register_message"
                          placeholder="Your Message..."
                        ></textarea>

                        <input
                          value="Request Free Quote Now"
                          className="register-submit"
                          type="submit"
                        />
                      </form>
                      {/* <!--end register form --> */}

                      <p className="register-form-terms">
                        Competitive On Price &#8226; TrustMark Accredited
                      </p>
                    </div>
                    {/* <!--end form--> */}
                  </div>
                  {/* <!--end register-form-wrapper--> */}
                </div>
                {/* <!--end small-column-inside--> */}
              </div>
              {/* <!--end col-sm-6--> */}
            </div>
            {/* <!--end row--> */}
          </div>
          {/* <!--end container--> */}
        </div>
        {/* <!--section-blue--> */}
      </section>
      {/* <!--end hero-wrapper --> */}
    </>
  );
};

export default Home;
