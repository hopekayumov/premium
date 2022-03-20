import React from "react";
// App styles
import "./App.scss";

// Containers
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";

// Components
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
