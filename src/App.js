import React from "react";
import Hero from "./components/Hero";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

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
