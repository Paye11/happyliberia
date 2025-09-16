import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herocomponent/Herosection";
import Teamsection from "../components/Teamcomponent/Teamsection";
// import Plantation from "../components/Plantation";
// import WhyPartner from "../components/WhyPartner";
// import GlobalMarkets from "../components/GlobalMarkets";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
// import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Aboutsection from "../components/Aboutcomponent/Aboutsection";
import Plantationsection from "../components/Plantationcomponent/Plantationsection";
import Whypartnersection from "../components/Whypartnercomponent/Whypartnersection";
import Globalmarketsection from "../components/Globalmarketcomponent/Globalmarketsection";
import Contactsection from "../components/Contactcomponent/Contactsection";
import { FloatingWhatsApp, ScrollToTop } from "../components/FloatingWhatsapp";

const LandingPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElement = document.querySelector(".hero-bg");
      if (parallaxElement) {
        parallaxElement.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full">

      <Navbar />
      <Herosection />
      {/* <Teamsection /> */}
      <Aboutsection />
      <Plantationsection />
      <Whypartnersection />
      <Globalmarketsection />
      <Gallery />
      <Testimonials />
      <Contactsection />
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>

  );
};

export default LandingPage;
