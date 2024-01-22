import React from "react";
import Footer from "../Components/Globle/Footer.jsx";
import Header from "../Components/Globle/Header.jsx";
import Home from "../Components/Home.jsx";
import Services from "../Components/Services.jsx";
import Qualified from "../Components/Qualified.jsx";
import Gallery from "../Components/Gallery.jsx";
import Testimonials from "../Components/Testimonials.jsx";
import Electrician2 from "../Components/Electrician2.jsx";
import Features from "../Components/Features.jsx";
import Getstarted from "../Components/Getstarted.jsx";
import Contact from "../Components/Contact.jsx";

const Wrapper = () => {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <Qualified />
      <Gallery />
      <Testimonials />
      <Electrician2 />
      <Features />
      <Getstarted />
      <Contact />
      <Footer />
    </>
  );
};

export default Wrapper;
