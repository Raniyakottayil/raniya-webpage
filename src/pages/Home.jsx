import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Service from "../components/Service";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Quote from "../components/Quote";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services/>
        <Service/>
        <Team/>
        <Contact/>
        <Quote/>
      </main>
      <Footer/>
    </>
  );
};

export default Home;
