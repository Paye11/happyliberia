import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herocomponent/Herosection";
import Teamsection from "../components/Teamcomponent/Teamsection";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Aboutsection from "../components/Aboutcomponent/Aboutsection";
import Plantationsection from "../components/Plantationcomponent/Plantationsection";
import Whypartnersection from "../components/Whypartnercomponent/Whypartnersection";
import Globalmarketsection from "../components/Globalmarketcomponent/Globalmarketsection";
import Contactsection from "../components/Contactcomponent/Contactsection";
import { FloatingWhatsApp, ScrollToTop } from "../components/FloatingWhatsapp";
import TestingGallery from "../components/TestingGallery";
import Partners from "../components/Partners";

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
      <section id="hero"><Herosection /></section>
      <Teamsection />
      <section id="about"><Aboutsection /></section>
      <section id="plantation"><Plantationsection /></section>
      <section id="partnership"><Whypartnersection /></section>
      <Globalmarketsection />
      <TestingGallery />
      <Gallery />
      <Testimonials />
      <Partners />
      <section id="contact"><Contactsection /></section>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
};

export default LandingPage;
