import React from "react";
import Hero from "./components/Hero";
import Sections from "./components/Sections";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import MobileNavSafety from "./components/MobileNavSafety";
import MobileNavMA from "./components/MobileNavMA";

const App = () => {
  return (
    <div className="font-cabin">
      <Hero />
      <Sections />
      <Footer />
    </div>
  );
};

export default App;
