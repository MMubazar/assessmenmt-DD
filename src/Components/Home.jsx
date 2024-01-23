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

              <div className="col-md-6 margin-top-50">
                <div className="small-col-inside">
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

                    <div>
                      <p
                        className="register_success_box"
                        style={{ display: "none" }}
                      >
                        We received your message and you'll hear from us soon.
                        Thank You!
                      </p>

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

                      <p className="register-form-terms">
                        Competitive On Price &#8226; TrustMark Accredited
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
