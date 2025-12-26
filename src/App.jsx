import React, { useEffect } from "react";
import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
// import About from "./components/about.jsx";
import Home from "./pages/home.jsx";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Aos from "aos";
import 'aos/dist/aos.css'

const App = () => {

  useEffect(() => {
      Aos.init({
        duration: 1500,
        once: true,
      })
  })

  return (
    <main>
      {/* Gradient Image */}
      <div>
        <img
          className="absolute top-0 right-0 opacity-60 -z-10"
          src="/gradient.png"
          alt="Iamge is here"
        />
      </div>

      {/* Blur Effect */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10">
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
    </main>
  );
};

export default App;
