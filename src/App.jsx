import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Traction from "./components/traction/Traction";
import About from "./components/about/About";
import Company from "./components/shoeCompany/Company";
import Contact from "./components/contactUs/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Traction />
      <About />
      <Company />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
