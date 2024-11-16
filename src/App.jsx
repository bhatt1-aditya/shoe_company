import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Traction from "./components/traction/Traction";
import About from "./components/about/About";
import Company from "./components/shoeCompany/Company";
import Contact from "./components/contactUs/Contact";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/traction" element={<Traction />} />
        <Route path="/about" element={<About />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>

    // {/* <Hero />
    // <Traction />
    // <About />
    // <Company />
    // <Contact /> */}
  );
}

export default App;
