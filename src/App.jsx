import React, { useEffect } from "react"
import Navbar from "./components/Nabar/navbar.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Hero from "./components/Hero/hero.jsx";
import Presentation from "./components/Presentation/presentation.jsx";
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => { 
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing:"ease-in",
      delay:100,
    })
  })
  return ( 
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero/>
      <Banner/>
      <Presentation/>
      
    </div>
  );
  
    
}

export default App
