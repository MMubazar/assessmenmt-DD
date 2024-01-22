import React from 'react'
import Image1 from '../assets/images/main-services1.jpg'
import Image2 from '../assets/images/main-services2.jpg'
import Image3 from '../assets/images/main-services5.jpg'

const Services = () => {
  return (
    <>
     {/* <!--begin section-grey --> */}
    <section className="section-grey" id="services">

        {/* <!--begin container --> */}
        <div className="container">

            {/* <!--begin row --> */}
            <div className="row">

                {/* <!--begin col-md-12 --> */}
                <div className="col-md-12 text-center">

                    <h2 className="section-title">Discover Our Services</h2>

                    <p className="section-subtitle">Professional service for all your home electrical needs.</p>
                    
                </div>
                {/* <!--end col-md-12 --> */}

            </div>
            {/* <!--end row --> */}

        </div>
        {/* <!--end container --> */}

        {/* <!--begin services-wrapper --> */}
        <div className="services-wrapper">

            {/* <!--begin container --> */}
            <div className="container">

                {/* <!--begin row --> */}
                <div className="row">

                    {/* <!--begin col-md-4 --> */}
                    <div className="col-md-4">

                        <div className="main-services">

                            <img src={Image1} className="width-100" alt="pic" />

                            <h3><a href="#">Domestic Services</a></h3>

                            <p>Curabitur quam etsum lacus netum netsum nulatis iaculis etsimun vitaemis etsum nisle varius netsum.</p>
                            
                        </div>

                    </div>
                    {/* <!--end col-md-4 --> */}

                    {/* <!--begin col-md-4 --> */}
                    <div className="col-md-4">

                        <div className="main-services">

                            <img src={Image3} className="width-100" alt="pic" />

                            <h3><a href="#">Electrical Installation</a></h3>

                            <p>Curabitur quam etsum lacus netum netsum nulatis iaculis etsimun vitaemis etsum nisle varius netsum.</p>
                            
                        </div>

                    </div>
                    {/* <!--end col-md-4 --> */}
               
                    {/* <!--begin col-md-4 --> */}
                    <div className="col-md-4">

                        <div className="main-services">

                            <img src={Image2} className="width-100" alt="pic" />

                            <h3><a href="#">Led Lighting</a></h3>

                            <p>Curabitur quam etsum lacus netum netsum nulatis iaculis etsimun vitaemis etsum nisle varius netsum.</p>
                            
                        </div>

                    </div>
                    {/* <!--end col-md-4 --> */}

                </div>
                {/* <!--end row --> */}
                
            </div>
            {/* <!--end container --> */}

        </div>
        {/* <!--end services-wrapper --> */}

    </section>
    {/* <!--end section-grey --> */}
    </>
  )
}

export default Services
