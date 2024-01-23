import React from "react";
import Image from "../assets/images/electrician2.jpg";

const Electrician2 = () => {
  return (
    <>
      <section className="section-grey no-padding">
        <div className="container-fluid px-0">
          <div className="row no-gutters">
            <div className="col-md-6">
              <img src={Image} className="width-100" alt="Electrician2" />
            </div>

            <div className="col-md-6 margin-top-60">
              <div className="small-col-inside">
                <h3>Discover Our Main Benefits</h3>

                <div className="accordion" id="accordionFAQ">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                          style={{ textDecoration: "none" }}
                        >
                          Premium high-quality services
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionFAQ"
                    >
                      <div className="card-body">
                        Nemo enim ipsam voluptatem quia voluptas situm ets
                        aspernatis netsum loris fugit, sed quia magni dolores
                        eos quis ratione sequi et vesciunt, neque et quis autem
                        velis reprehenderit etsim quis velit netsum valoriset.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                          style={{ textDecoration: "none" }}
                        >
                          Passionate, experienced team
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionFAQ"
                    >
                      <div className="card-body">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        netsum loris fugit, sed quia magni dolores eos qui
                        ratione sequi nesciunt, neque et quis autem velis
                        reprehenderit ets quis velit.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                          style={{ textDecoration: "none" }}
                        >
                          Electrical renovations tips
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionFAQ"
                    >
                      <div className="card-body">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        netsum loris fugit, sed quia magni dolores eos qui
                        ratione sequi nesciunt, neque et quis autem velis
                        reprehenderit ets quis velit.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingFour">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                          style={{ textDecoration: "none" }}
                        >
                          What recommend us
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#accordionFAQ"
                    >
                      <div className="card-body">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        netsum loris fugit, sed quia magni dolores eos qui
                        ratione sequi nesciunt, neque et quis autem velis
                        reprehenderit ets quis velit.
                      </div>
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

export default Electrician2;
